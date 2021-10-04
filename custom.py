# this file imports custom routes into the experiment server

import re
import subprocess
from flask import Blueprint, render_template, request, jsonify, Response, abort, current_app, url_for, redirect, send_file
from jinja2 import TemplateNotFound
from functools import wraps
from sqlalchemy import or_
from sqlalchemy import Column, Integer, String, DateTime, Float, Text, Boolean, func, inspect
from sqlalchemy.ext.declarative import declarative_base

from psiturk.psiturk_config import PsiturkConfig
from psiturk.experiment_errors import ExperimentError, InvalidUsage
from psiturk.user_utils import PsiTurkAuthorization, nocache
from psiturk.experiment import app

# # Database setup
from psiturk.db import db_session, init_db
from psiturk.models import Participant
from json import dumps, loads

import random
import csv
import os
import io
from datetime import datetime, tzinfo
from datetime import timedelta
from psiturk.psiturk_statuses import *

# load the configuration options
config = PsiturkConfig()
config.load_config()
# if you want to add a password protect route use this
myauth = PsiTurkAuthorization(config)

# explore the Blueprint
custom_code = Blueprint('custom_code', __name__,
                        template_folder='templates', static_folder='static')

try:
    if config.get('Mail Parameters', 'mail_enabled'):
        from flask_mail import Mail, Message
        app.config.update(
            MAIL_SERVER=config.get('Mail Parameters', 'mail_server'),
            MAIL_PORT=config.get('Mail Parameters', 'mail_port'),
            MAIL_USE_SSL=config.get('Mail Parameters', 'mail_use_ssl'),
            MAIL_USE_TLS=config.get('Mail Parameters', 'mail_use_tls'),
            MAIL_USERNAME=config.get('Mail Parameters', 'mail_username'),
            MAIL_PASSWORD=config.get('Mail Parameters', 'mail_password')
        )
        mail = Mail(app)
except Exception as error:
    app.logger.error('[flask_mail] %s' % error)


###########################################################
#  serving warm, fresh, & sweet custom, user-provided routes
#  add them here
###########################################################


leading_4_spaces = re.compile('^    ')


def get_commits():
    lines = subprocess.check_output(
        ['git', 'log', "-1"], stderr=subprocess.STDOUT
    ).split('\n')

    current_commit = {}

    for line in lines:
        if line.startswith('commit '):
            current_commit = line.split('commit ')[1]

    app.logger.warning(
        '[unique_links] current version %s', current_commit
    )
    return current_commit


f = open("templates/git_commits.txt", "w")
f.write(get_commits() + "\n")
f.close()

# ----------------------------------------------
# example custom route
# ----------------------------------------------


@custom_code.route('/my_custom_view')
def my_custom_view():
    # Print message to server.log for debugging
    current_app.logger.info("Reached /my_custom_view")
    try:
        return render_template('custom.html')
    except TemplateNotFound:
        abort(404)

# ----------------------------------------------
# example using HTTP authentication
# ----------------------------------------------


@custom_code.route('/my_password_protected_route')
@myauth.requires_auth
def my_password_protected_route():
    try:
        return render_template('custom.html')
    except TemplateNotFound:
        abort(404)

# ----------------------------------------------
# example accessing data
# ----------------------------------------------


@custom_code.route('/view_data')
@myauth.requires_auth
def list_my_data():
    users = Participant.query.all()
    try:
        return render_template('list.html', participants=users)
    except TemplateNotFound:
        abort(404)

# ----------------------------------------------
# example computing bonus
# ----------------------------------------------


@custom_code.route('/compute_bonus', methods=['GET'])
def compute_bonus():
    # check that user provided the correct keys
    # errors will not be that gracefull here if being
    # accessed by the Javascrip client
    if not request.args.has_key('uniqueId'):
        # i don't like returning HTML to JSON requests...  maybe should change this
        raise ExperimentError('improper_inputs')
    uniqueId = request.args['uniqueId']

    try:
        # lookup user in database
        user = Participant.query.\
            filter(Participant.uniqueid == uniqueId).\
            one()
        user_data = loads(user.datastring)  # load datastring from JSON
        bonus = 0

        for record in user_data['data']:  # for line in data file
            trial = record['trialdata']
            if trial['phase'] == 'TEST':
                if trial['hit'] == True:
                    bonus += 0.02
        user.bonus = bonus
        db_session.add(user)
        db_session.commit()
        resp = {"bonusComputed": "success"}
        return jsonify(**resp)
    except:
        abort(404)  # again, bad to display HTML, but...


@custom_code.route('/generate', methods=['GET'])
@myauth.requires_auth
def generateLink():
    try:
        files = UniqueLink.query.\
            with_entities(UniqueLink.file).\
            group_by(UniqueLink.file).all()
        return render_template('generate.html', files=files)
    except Exception as e:
        app.logger.error(e)
        abort(404)


def generateUniqueLink():
    possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    text = ""
    for i in range(8):
        charIndex = random.randint(0, len(possibleChars) - 1)
        text += possibleChars[charIndex]
    return text


def createLinksFile(filename, offset):
    try:
        unique_links_path = config.get(
            'Unique Links Parameters', 'unique_links_path')
        dirname = os.path.dirname(__file__)
        filepath = os.path.join(dirname, unique_links_path, filename)
        unique_links = UniqueLink.query.\
            filter(UniqueLink.file == filename)
        timezone = CustomTimezone(offset)
        with open(filepath, 'wb') as file:
            writer = csv.writer(file)
            writer.writerow(
                ['name', 'unique_identifier', 'email', 'link', 'expiration_date', 'expiration_time', 'status'])
            for unique_link in unique_links:
                if unique_link.status < LINK_SUBMITTED and unique_link.expiresAt != None and unique_link.expiresAt < datetime.utcnow():
                    unique_link.status = LINK_EXPIRED
                    db_session.add(unique_link)
                status = LINK_STATUSES[unique_link.status]
                expiration_date = unique_link.expiresAt.replace(tzinfo=GMT()).astimezone(
                    timezone).strftime('%d-%m-%Y') if unique_link.expiresAt != None else 'NA'
                expiration_time = unique_link.expiresAt.replace(tzinfo=GMT()).astimezone(
                    timezone).strftime('%H:%M %Z') if unique_link.expiresAt != None else 'NA'
                writer.writerow([
                    unique_link.name,
                    unique_link.unique_identifier,
                    unique_link.email,
                    url_for('custom_code.useUniqueLink',
                            link=unique_link.link, _external=True),
                    expiration_date,
                    expiration_time,
                    status
                ])
        db_session.commit()
        return filepath
    except Exception as e:
        app.logger.error(e)
        return ''


def sendMail(recipients, offset):
    isMailEnabled = config.get('Mail Parameters', 'mail_enabled')
    if not isMailEnabled:
        return

    timezone = CustomTimezone(offset)
    with mail.connect() as conn:
        for recipient in recipients:
            sender = (config.get('Mail Parameters', 'mail_sender_name'),
                      config.get('Mail Parameters', 'mail_sender_email'))
            subject = config.get('Mail Parameters', 'mail_subject')
            html_text_param = 'mail_text_with_expiration' if recipient.expiresAt != None else 'mail_text_without_expiration'
            unique_link = url_for('custom_code.useUniqueLink',
                                  link=recipient.link, _external=True)
            expiresAt = recipient.expiresAt.replace(tzinfo=GMT()).astimezone(
                timezone).strftime('%d-%m-%Y %H:%M %Z') if recipient.expiresAt != None else ''
            html = config.get('Mail Parameters', html_text_param).\
                format(name=recipient.name, link=unique_link,
                       expiresAt=expiresAt)
            msg = Message(subject=subject, sender=sender,
                          recipients=[recipient.email], html=html)
            conn.send(msg)


Base = declarative_base()
Base.query = db_session.query_property()

LINK_STATUSES = ['unused', 'pending', 'submitted', 'expired']
LINK_UNUSED = 0
LINK_PENDING = 1
LINK_SUBMITTED = 2
LINK_EXPIRED = 3


class UniqueLink(Base):
    """
    """
    __tablename__ = 'unique_links'
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    unique_identifier = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    link = Column(String(8), nullable=False)
    expiresAt = Column(DateTime, nullable=True)
    status = Column(String(9), nullable=False, default=LINK_UNUSED)
    file = Column(String(20), nullable=False)


@custom_code.route('/generate', methods=['POST'])
@myauth.requires_auth
def saveLink():
    try:
        file = request.files['participant']
        if not file:
            raise Exception('Couldn\'t load .csv file')

        stream = io.StringIO(file.stream.read().decode("UTF8"), newline=None)
        csv_input = csv.reader(stream)
        next(csv_input)
        unique_links = []
        for row in csv_input:
            if len(row) > 3 and row[3] != '':
                continue

            if (len(row) == 0):
                continue
            link = generateUniqueLink()
            unique_link_attributes = dict(
                name=row[0],
                unique_identifier=row[1],
                email=row[2],
                link=link,
                expiresAt=None,
                file=file.filename
            )
            if 'expires' in request.form and 'expiresAt' in request.form:
                expiresAt = int(request.form['expiresAt'])
                unique_link_attributes['expiresAt'] = datetime.utcnow(
                ) + timedelta(hours=expiresAt)
            unique_link = UniqueLink(**unique_link_attributes)
            db_session.add(unique_link)
            unique_links.append(unique_link)
        db_session.commit()
        offset = int(request.form['offset'])
        sendMail(unique_links, offset)
        return redirect(url_for('custom_code.generateLink'))
    except Exception as e:
        app.logger.error(e)
        return redirect(url_for('custom_code.generateLink'))


@custom_code.route('/lab/<link>', methods=['GET'])
def useUniqueLink(link):
    try:
        app.logger.warning(
            '[unique_links] the link was opened'
        )
        unique_link = UniqueLink.query.\
            filter(UniqueLink.link == link).one()
        if unique_link.status < LINK_SUBMITTED and unique_link.expiresAt != None and unique_link.expiresAt < datetime.utcnow():
            app.logger.warning(
                '[unique_links] %s tried accessing the experiment after the link has expired', unique_link.link)
            app.logger.warning('[unique_links] status: %d, expires at: %s, now: %s',
                               unique_link.status,
                               unique_link.expiresAt,
                               datetime.utcnow())
            unique_link.status = LINK_EXPIRED
        elif unique_link.status == LINK_PENDING:
            app.logger.warning(
                '[unique_links] %s tried accessing the experiment after the link has been already used', unique_link.link)
            unique_link.status = LINK_EXPIRED
        elif unique_link.status == LINK_UNUSED:
            app.logger.warning(
                '[unique_links] %s accessed the experiment for the first time', unique_link.link)
            unique_link.status = LINK_PENDING

        db_session.add(unique_link)
        db_session.commit()

        app.logger.warning(
            '[unique_links] link status updated'
        )
        if unique_link.status == LINK_EXPIRED:
            return render_template('expired.html')
        elif unique_link.status == LINK_SUBMITTED:
            return render_template('thanks.html')

        app.logger.warning(
            '[unique_links] redirecting to the experiment'
        )
        link = unique_link.link
        show_consent = config.get('Unique Links Parameters', 'show_consent')
        redirect_to = 'give_consent' if show_consent else 'start_exp'
        return redirect(url_for(redirect_to, hitId=link, assignmentId=link, workerId=link, mode='lab'))
    except Exception as e:
        app.logger.error(e)
        abort(404)


''' This function overrides debug_complete psiturk handler '''


@custom_code.route('/complete', methods=['GET'])
def complete_override():
    ''' Debugging route for complete. '''
    if not 'uniqueId' in request.args:
        raise ExperimentError('improper_inputs')
    else:
        unique_id = request.args['uniqueId']
        mode = request.args['mode']
        try:
            user = Participant.query.\
                filter(Participant.uniqueid == unique_id).one()
            user.status = COMPLETED
            user.endhit = datetime.utcnow()
            db_session.add(user)
            db_session.commit()
        except:
            raise ExperimentError('error_setting_worker_complete')
        else:
            # send them back to mturk.
            if (mode == 'sandbox' or mode == 'live'):
                return render_template('closepopup.html')
            else:
                if mode == 'lab':
                    link = unique_id.split(':')[0]
                    try:
                        unique_link = UniqueLink.query.\
                            filter(UniqueLink.link == link).one()
                        unique_link.status = LINK_SUBMITTED
                        db_session.add(unique_link)
                        db_session.commit()
                    except:
                        current_app.logger.error(
                            "Couldn't change status to SUBMITTED for %s" % link)
                return render_template('complete.html')


@custom_code.route('/export-links/<filename>', methods=['GET'])
@myauth.requires_auth
def export_unique_links(filename):
    try:
        offset = int(request.args.get('offset'))
        filepath = createLinksFile(filename, offset)
        if filepath == '':
            raise Exception('File not found')
        return send_file(filepath, mimetype='text/csv', as_attachment=True)
    except Exception as e:
        app.logger.error(e)
        abort(404)


class CustomTimezone(tzinfo):
    offset = 0
    sign = '+'

    def __init__(self, offset):
        self.offset = offset
        self.sign = '-' if offset < 0 else '+'

    def utcoffset(self, dt):
        return timedelta(minutes=self.offset)

    def dst(self, dt):
        return timedelta(0)

    def tzname(self, dt):
        return 'GMT {}{}'.format(self.sign, abs(self.offset / 60))


class GMT(tzinfo):

    def utcoffset(self, dt):
        return timedelta(hours=0)

    def dst(self, dt):
        return timedelta(0)

    def tzname(self, dt):
        return 'GMT +0'
