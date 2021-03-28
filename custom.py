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

# # Database setup
from psiturk.db import db_session, init_db
from psiturk.models import Participant
from json import dumps, loads

import random
import csv
import os
from datetime import datetime
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
        return render_template('generate.html')
    except TemplateNotFound:
        abort(404)


def generateUniqueLink():
    possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    text = ""
    for i in range(8):
        charIndex = random.randint(0, len(possibleChars) - 1)
        text += possibleChars[charIndex]
    return text


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
    participant = Column(String(50), nullable=False)
    link = Column(String(8), nullable=False)
    expiresAt = Column(DateTime, nullable=True)
    status = Column(String(9), nullable=False, default=LINK_UNUSED)


@custom_code.route('/generate', methods=['POST'])
@myauth.requires_auth
def saveLink():
    try:
        participant = request.form['participant']
        link = generateUniqueLink()
        unique_link_attributes = dict(
            participant=participant,
            link=link,
            expiresAt=None
        )
        if 'expires' in request.form and 'expiresAt' in request.form:
            expiresAt = int(request.form['expiresAt'])
            unique_link_attributes['expiresAt'] = datetime.now(
            ) + timedelta(hours=expiresAt)
        unique_link = UniqueLink(**unique_link_attributes)
        db_session.add(unique_link)
        db_session.commit()
        return redirect(url_for('custom_code.generateLink'))
    except Exception as e:
        print(e)
        return render_template('generate.html', error=1)


@custom_code.route('/lab/<link>', methods=['GET'])
def useUniqueLink(link):
    try:
        unique_link = UniqueLink.query.\
            filter(UniqueLink.link == link).one()
        if unique_link.status < LINK_SUBMITTED and unique_link.expiresAt != None and unique_link.expiresAt < datetime.now():
            unique_link.status = LINK_EXPIRED
        elif unique_link.status == LINK_PENDING:
            unique_link.status = LINK_EXPIRED
        elif unique_link.status == LINK_UNUSED:
            unique_link.status = LINK_PENDING

        db_session.add(unique_link)
        db_session.commit()

        if unique_link.status == LINK_EXPIRED:
            return render_template('expired.html')
        elif unique_link.status == LINK_SUBMITTED:
            return render_template('thanks.html')

        link = unique_link.link
        return redirect(url_for('start_exp', hitId=link, assignmentId=link, workerId=link, mode='lab'))
    except Exception as e:
        print(e)
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
            user.endhit = datetime.now()
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
                        current_app.logger.info(
                            "Couldn't change status to SUBMITTED for %s" % link)
                return render_template('complete.html')


@custom_code.route('/export-links', methods=['GET'])
@myauth.requires_auth
def export_unique_links():
    try:
        unique_links_path = config.get(
            'Server Parameters', 'unique_links_path')
        dirname = os.path.dirname(__file__)
        filename = os.path.join(dirname, unique_links_path)
        unique_links = UniqueLink.query.all()
        with open(unique_links_path, 'wb') as file:
            writer = csv.writer(file)
            writer.writerow(
                ['id', 'participant', 'link', 'expiresAt', 'status'])
            for unique_link in unique_links:
                if unique_link.status < LINK_SUBMITTED and unique_link.expiresAt != None and unique_link.expiresAt < datetime.now():
                    unique_link.status = LINK_EXPIRED
                    db_session.add(unique_link)
                status = LINK_STATUSES[unique_link.status]
                writer.writerow([unique_link.id, unique_link.participant, unique_link.link,
                                unique_link.expiresAt if unique_link.expiresAt != None else 'NA', status])
        db_session.commit()
        return send_file(unique_links_path, mimetype='text/csv', as_attachment=True)
    except Exception as e:
        print(e)
        abort(404)
