jsPsych.plugins['PC-PTSD-5'] = (function() {
  var plugin = {};

  /**
   * Timer Module Factory.
   */
  var timerModuleFactory = function(responseStore, timestamp) {
    var firstTime = 0;
    var tmpAnswerTime = 0;
    var ceilingTime = 0;
    var wasFirstClick = false;
    var popupText = '';
    var popupFloorText = '';
    var popupCeilingText = '';
    var minAnswerTime = 4000;
    var maxAnswerTime = 10000;
    var ceilingTimer = null;
    var timer = null;
    var openEventName = ''
    var microModalConfig = {
      onShow: function() {
        var text = 'popup triggered by' + openEventName + 'a floor threshold value...';

        responseStore.trial_events.push({
          'event_type': 'error message',
          'event_raw_details': 'Error message',
          'event_converted_details': text,
          'timestamp': jsPsych.totalTime(),
          'time_elapsed': jsPsych.totalTime() - timestamp
        });
      },
      onClose: function() {
        restartResponseTimer();
        restartCeilingTimer();

        responseStore.trial_events.push({
          'event_type': 'popup closed',
          'event_raw_details': 'Close',
          'event_converted_details': '',
          'timestamp': jsPsych.totalTime(),
          'time_elapsed': jsPsych.totalTime() - timestamp
        });
      },
    };

    startFloorTimer();
    startCeilingTimer();

    function startFloorTimer() {
      timer = setInterval(function() {
        tmpAnswerTime += 10;
      }, 10);
    }

    function startCeilingTimer() {
      ceilingTimer = setInterval(function() {
        ceilingTime += 10;

        if (ceilingTime >= maxAnswerTime) {
          setOpenPopupEventText('ceiling');
          setPopupText(popupCeilingText);
          showPopup();
          stopTimer(ceilingTimer);
        }
      }, 10);
    }

    function stopTimer(timer) {
      clearInterval(timer);
    }

    function restartResponseTimer() {
      tmpAnswerTime = 0;
      clearInterval(timer);

      startFloorTimer();
      openEventName = '';
    }

    function restartCeilingTimer() {
      ceilingTime = 0;
      clearInterval(ceilingTimer);

      startCeilingTimer();
      openEventName = '';
    }

    function showPopup() {
      MicroModal.show('modal-2', microModalConfig);
    }

    function setPopupText(value) {
      popupText = value;
      window.document.getElementById('modal-2-content__text').innerText = value;
    }

    function setOpenPopupEventText(value) {
      openEventName = value;
    }

    return {
      getFirstTime: function() {
        return firstTime;
      },
      check: function() {
        if (!wasFirstClick) {
          wasFirstClick = true;
          firstTime = tmpAnswerTime;
        }

        if (tmpAnswerTime < minAnswerTime) {
          setOpenPopupEventText('floor');
          setPopupText(popupFloorText);
          showPopup();
          stopTimer(timer);
          stopTimer(ceilingTimer);
          return false;
        }

        restartResponseTimer();
        restartCeilingTimer();
        return true;
      },
      getPopupText: function() {
        return popupText;
      },
      setPopupFloorText: function(value) {
        popupFloorText = value;
        popupText = value;
      },
      setPopupCeilingText: function(value) {
        popupCeilingText = value;
      },
      getMicroModalConfig: function() {
        return microModalConfig;
      },
      setMinAnswerTime: function(value) {
        minAnswerTime = value;
      },
      setMaxAnswerTime: function(value) {
        maxAnswerTime = value;
      },
    };
  };
  var timerModule = null;

  plugin.info = {
    name: 'PC-PTSD-5',
    stage_name: 'PC-PTSD-5',
    description: '',
    parameters: {
      questions: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        array: true,
        pretty_name: 'Questions',
        nested: {
          prompt: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Prompt',
            default: undefined,
            description: 'The strings that will be associated with a group of options.'
          },
          options: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Options',
            array: true,
            default: undefined,
            description: 'Displays options for an individual question.'
          },
          required: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'Required',
            default: false,
            description: 'Subject will be required to pick an option for each question.'
          },
          horizontal: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'Horizontal',
            default: false,
            description: 'If true, then questions are centered and options are displayed horizontally.'
          },
          name: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Question Name',
            default: '',
            description: 'Controls the name of data values associated with this question'
          }
        }
      },
      randomize_question_order: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Randomize Question Order',
        default: false,
        description: 'If true, the order of the questions will be randomized'
      },
      preamble: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Preamble',
        default: null,
        description: 'HTML formatted string to display at the top of the page above all the questions.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'Label of the button.'
      },
      time_stamp: {
        type: jsPsych.plugins.parameterType.OBJECT,
        pretty_name: 'Timestamp',
        default: {},
        description: 'Object for collecting timestamp'
      },
      event_type: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Event type',
        default: null,
        description: 'Event type'
      },
      event_raw_details: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Event raw details',
        default: null,
        description: 'Event raw details'
      },
      event_converted_details: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Event converted details',
        default: null,
        description: 'Event converted details'
      }
    }
  };

  plugin.trial = function(display_element, trial) {
    var plugin_id_name = 'jspsych-survey-multi-choice-PC-PTSD-5';
    var isHidden = false;
    var html = '';
    // store responses, events
    var response = {
      trial_events: []
    };
    var timestamp_onload = jsPsych.totalTime();

    if (trial.type === 'PC-PTSD-5' && popup_answer_latency_floor) {
      timerModule = timerModuleFactory(response, timestamp_onload);
    }

    timerModule.setPopupFloorText(answer_latency_text_floor);
    timerModule.setPopupCeilingText(answer_latency_text_ceiling);

    timerModule.setMinAnswerTime(answer_latency_floor);
    timerModule.setMaxAnswerTime(answer_latency_ceiling);

    response.trial_events.push({
      'event_type': trial.event_type,
      'event_raw_details': trial.event_raw_details,
      'event_converted_details': trial.event_converted_details,
      'timestamp': jsPsych.totalTime(),
      'time_elapsed': jsPsych.totalTime() - timestamp_onload
    });

    // inject CSS for trial
    html += '<style id="jspsych-survey-multi-choice-css">';
    html += ".jspsych-survey-multi-choice-question { display: flex; margin-top: 1em; margin-bottom: 1em; text-align: left; justify-content: space-between; }"+
      ".jspsych-survey-multi-choice-text span.required {color: darkred;}"+
      ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-text {  text-align: left;}"+
      ".jspsych-survey-multi-choice-option { line-height: 2; padding: 0; }"+
      ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option {  display: inline-block;  margin-left: 1em;  margin-right: 1em; }"+
      ".jspsych-survey-multi-choice-form { max-width: 1000px; }" +
      ".jspsych-survey-multi-choice-option-left-first  { width: 90%; display: block; border-right: 0; padding-right: 10%; padding-bottom: 0; }" +
      ".jspsych-survey-multi-choice-option-left  { width: 90%; border-right: 0; padding-right: 10%; display: flex; padding-bottom: 0; }" +
      ".jspsych-survey-multi-choice-option-left p { text-align: left; }" +
      ".jspsych-survey-multi-choice-option-right  { width: 10%; position: relative; align-items: center; }" +
      ".jspsych-btn { margin: 100px 0; }" +
      ".jspsych-survey-overlay { background: transparent; width: 100%; height: 50px; position: absolute; }" +
      ".first-right-wrapper { display: flex; justify-content: inherit; position: relative; }" +
      ".jspsych-content { margin-top: 130px;}" +
      "#jspsych-survey-multi-choice-0 .jspsych-survey-multi-choice-option-right { display: flex; align-items: flex-end; }" +
      ".jspsych-survey-highlight { cursor: pointer; padding: 5px; }" +
      ".jspsych-survey-multi-choice-preamble {width: 800px; text-align: left; border-bottom: 1px solid;} .jspsych-survey-multi-choice-preamble h2 {text-align: center} .preamble-wrapper {display: flex;} .preamble-wrapper p {padding-left: 2rem;}" +
      "label.jspsych-survey-multi-choice-text input[type='radio'] {margin-right: 1em;}" +
      "@media (max-width: 1060px) {" +
          ".jspsych-survey-multi-choice-option-right  { width: 20%;  }" +
      "}" +
      "@media (max-width: 650px) {" +
          ".jspsych-survey-multi-choice-option-left-first  { width: 70%; padding-right: 10%;  }" +
          ".jspsych-survey-multi-choice-option-left  { width: 70%; padding-right: 10%;  }" +
          ".jspsych-survey-multi-choice-option-right  { width: 30%;  }" +
      "}"
    html += '</style>';

    // fixed heder
    html +=
      '<header>' +
      '<nav class="navbar navbar-inverse navbar-fixed-top">' +
      '<div class="container-fluid">' +
      '<div class="navbar-header">' +
      '<p class="navbar-text"><b>' + plugin.info.name + '</b></p>' +
      '</div>' +
      '</div>' +
      '</nav>' +
      '</header>';

    // show preamble text
    if (trial.preamble !== null) {
      html += '<div id="jspsych-survey-multi-choice-preamble" class="jspsych-survey-multi-choice-preamble">'+trial.preamble+'</div>';
    }

    // form element
    html += '<div id="' + plugin_id_name + '">';
    html += '<form id="jspsych-survey-multi-choice-form">';

    // generate question order. this is randomized here as opposed to randomizing the order of trial.questions
    // so that the data are always associated with the same question regardless of order
    var question_order = [];

    for(var i=0; i<trial.questions.length; i++){
      question_order.push(i);
    }

    if (trial.randomize_question_order) {
      question_order = jsPsych.randomization.shuffle(question_order);
    }

    // add multiple-choice questions
    for (var i = 0; i < trial.questions.length; i++) {
      // get question based on question_order
      var question = trial.questions[question_order[i]];
      var question_id = question_order[i];

      // create question container
      var question_classes = ['jspsych-survey-multi-choice-question'];

      if (question.horizontal) {
        question_classes.push('jspsych-survey-multi-choice-horizontal');
      }

      if (i === 0) {
        html += '<div style="margin-bottom: 8rem;" id="jspsych-survey-multi-choice-'+question_id+'" class="'+question_classes.join(' ')+'"  data-name="'+question.name+'">';
        // add question text
        html += '<div class="jspsych-survey-multi-choice-option-left-first"><p class="jspsych-survey-multi-choice-text survey-multi-choice jspsych-survey-multi-choice-question-text" style="padding-top: 3px;">' +  question.prompt
      } else {
        if (i === 1) {
          html += '<div class="'+question_classes.join(' ')+' hidden"  data-name="'+question.name+'"><p>In the past month, have you...</p></div>';
        }

        html += '<div id="jspsych-survey-multi-choice-'+question_id+'" class="'+question_classes.join(' ')+' hidden"  data-name="'+question.name+'">';
        // add question text
        html += '<div class="jspsych-survey-multi-choice-option-left"><span class="jspsych-survey-multi-choice-number">' + i + '.</span><p class="jspsych-survey-multi-choice-text survey-multi-choice jspsych-survey-multi-choice-question-text">' +  question.prompt
      }

      // question.required
      html += '</p></div>';
      html += '<div class="jspsych-survey-multi-choice-option-right">';
      html += '<div class="first-right-wrapper">';
      html += '<div class="jspsych-survey-overlay hidden"></div>';

      // create option radio buttons
      for (var j = 0; j < question.options.length; j++) {
        // add label and question text
        var option_id_name = 'jspsych-survey-multi-choice-option-' + question_id + '-' + j;
        var input_name = 'jspsych-survey-multi-choice-response-' + question_id;
        var input_id = 'jspsych-survey-multi-choice-response-' + question_id + '-' + j;
        var required_attr = question.required ? 'required' : '';

        // add radio button container
        html += '<div id="'+option_id_name+'" class="jspsych-survey-multi-choice-option">';
        html += '<label class="jspsych-survey-multi-choice-text jspsych-survey-highlight ' + input_id + ' " data-time-stamp="Q' + (i+1) + '" data-question-number="Q' + (i+1) +'A' + (j+1) +'" for="'+input_id+'">' +question.options[j]+'</label>';
        html += '<input hidden type="radio" name="'+input_name+'" id="'+input_id+'" data-time-stamp="Q' + (i+1) + '" data-question-number="Q' + (i+1) +'A' + (j+1) +'" value="'+question.options[j]+'" '+required_attr+'></input>';
        html += '</div>';

        if (j === 0) {
          html += '<span style="position: absolute; padding-top: 9px;">/</span>';
        }
      }

      html += '</div>';
      html += '</div></div>';
    }

    // add submit button
    html += '<input type="submit" id="'+plugin_id_name+'-next" class="'+plugin_id_name+' jspsych-btn"' + (trial.button_label ? ' value="'+trial.button_label + '"': '') + '></input>';
    html += '</form>';

    // add modal
    html +=
      `<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
          <div class="modal__overlay" tabindex="-1">
            <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
              <header class="modal__header">
                <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
              </header>
              <main class="modal__content" id="modal-1-content">
                <p>${ popup_text_WBF }</p>
              </main>
              <footer class="modal__footer">
                <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>
              </footer>
            </div>
          </div>
      </div>`;

    // Modal window content
    html +=
      `<div class="modal micromodal-slide" id="modal-2" aria-hidden="true">
          <div class="modal__overlay" tabindex="-1" data-micromodal-close>
            <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-2-title">
              <header class="modal__header">
                <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
              </header>
              <main class="modal__content" id="modal-2-content">
                <p id="modal-2-content__text">
                  ${ timerModule.getPopupText() }
                </p>
              </main>
              <footer class="modal__footer">
                <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>
              </footer>
            </div>
          </div>
      </div>`;

    // render
    display_element.innerHTML = html;

    // function to handle responses by the subject
    var after_response = function(info) {
      if (info.key_release === undefined) {
        response.trial_events.push({
          'event_type': 'key press',
          'event_raw_details': info.key,
          'event_converted_details': jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key) + ' key pressed',
          'timestamp': jsPsych.totalTime(),
          'time_elapsed': jsPsych.totalTime() - timestamp_onload
        });

        if (info.el) {
          if (info.el.dataset.timeStamp) {
            trial.time_stamp[info.el.dataset.timeStamp] = jsPsych.totalTime();
          }

          if (info.el.dataset.questionNumber) {
            response.trial_events.push({
              'event_type': 'answer displayed',
              'event_raw_details': info.el.dataset.questionNumber,
              'event_converted_details': info.el.dataset.questionNumber + ' answer displayed',
              'timestamp': jsPsych.totalTime(),
              'time_elapsed': jsPsych.totalTime() - timestamp_onload
            });
          }
        }
      } else {
        response.trial_events.push({
          'event_type': 'key release',
          'event_raw_details': info.key_release,
          'event_converted_details': jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key_release) + ' key released',
          'timestamp': jsPsych.totalTime(),
          'time_elapsed': jsPsych.totalTime() - timestamp_onload
        });
      }
    }

    // highlight input
    $('.jspsych-survey-highlight').on('click touchstart', function() {
      var time_stamp_key;
      var isSuccess = timerModule.check();

      if (isSuccess) {
        $(this).parent().parent().find('.jspsych-survey-highlight').removeClass('bg-primary');
        $(this).addClass('bg-primary');

        // save timestamp on input click
        time_stamp_key = $(this).parent().find('input[type=radio]');

        if (time_stamp_key) {
          trial.time_stamp[time_stamp_key] = jsPsych.totalTime();
        }
      }

      return isSuccess;
    });

    // disable inputs on 1st response was made
    $('.jspsych-survey-multi-choice-response-0-0').on('click', function() {
      isHidden = true;
      $('.jspsych-survey-multi-choice-horizontal').removeClass('hidden');
      $(this).parent().parent().find('.jspsych-survey-overlay').removeClass('hidden');
      $('#jspsych-survey-multi-choice-response-0-0').prop('disabled', true);
      $('#jspsych-survey-multi-choice-response-0-1').prop('disabled', true);
    })

    // form functionality
    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      response.trial_events.push({
        'event_type': 'button clicked',
        'event_raw_details': 'Submit',
        'event_converted_details': '"Submit" selected',
        'timestamp': jsPsych.totalTime(),
        'time_elapsed': jsPsych.totalTime() - timestamp_onload
      });

      // create object to hold responses
      var question_data = {};
      var timestamp_data = {};

      for (var i = 0; i < trial.questions.length; i++) {
        var match = display_element.querySelector('#jspsych-survey-multi-choice-' + i);
        var id = i;

        if (match.querySelector('input[type=radio]:checked') !== null) {
          var val = match.querySelector('input[type=radio]:checked').value;

          $(match).find('.jspsych-survey-multi-choice-question-text').removeClass('survey-error-after');
          $(match).find('.jspsych-survey-multi-choice-number').removeClass('survey-error-text');
        } else {
          var val = '';

          $(match).find('.jspsych-survey-multi-choice-question-text').addClass('survey-error-after');
          $(match).find('.jspsych-survey-multi-choice-number').addClass('survey-error-text');
        }

        if (i === 0) {
          id = 'screen';
        } else if(i != 0 && !isHidden) {
          val = 'NA';
          $(match).find('.jspsych-survey-multi-choice-question-text').removeClass('survey-error-after');
        }

        var obje = {};
        var name = id;

        if (match.attributes['data-name'].value !== ''){
          name = match.attributes['data-name'].value;
        }

        timestamp_data[name] = val === 'NA' ? val : trial.time_stamp['Q' + (i+1)];
        obje[name] = val;
        Object.assign(question_data, obje);
      }

      if ($('.survey-error-after').length < 1) {
        // kill keyboard listeners
        if (typeof keyboardListener !== 'undefined') {
          jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
          jsPsych.pluginAPI.cancelClickResponse(clickListener);
        }

        // save data
        var trial_data = {
          'stage_name': JSON.stringify(plugin.info.stage_name),
          'responses': JSON.stringify(question_data),
          'timestamp': JSON.stringify(timestamp_data),
          'time_stamp': JSON.stringify(trial.time_stamp),
          'question_order': JSON.stringify(question_order),
          'events': JSON.stringify(response.trial_events)
        };

        // clear the display
        display_element.innerHTML = '';

        // next trial
        jsPsych.finishTrial(trial_data);
      } else {
        MicroModal.show('modal-1', {
          onShow() {
            response.trial_events.push({
              'event_type': 'error message',
              'event_raw_details': 'Error message',
              'event_converted_details': 'popup triggered by incomplete WBF question',
              'timestamp': jsPsych.totalTime(),
              'time_elapsed': jsPsych.totalTime() - timestamp_onload
            });
          },
          onClose() {
            response.trial_events.push({
              'event_type': 'popup closed',
              'event_raw_details': 'Close',
              'event_converted_details': trial.event_converted_details,
              'timestamp': jsPsych.totalTime(),
              'time_elapsed': jsPsych.totalTime() - timestamp_onload
            });
          }
        });
      }
    });

    // start the response listener
    var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response,
      valid_responses: jsPsych.ALL_KEYS,
      rt_method: 'performance',
      persist: true,
      allow_held_key: false
    });

    var clickListener = jsPsych.pluginAPI.getMouseResponse({
      callback_function: after_response,
      valid_responses: jsPsych.ALL_KEYS,
      rt_method: 'performance',
      persist: true,
      allow_held_key: false
    });
  };

  return plugin;
})();
