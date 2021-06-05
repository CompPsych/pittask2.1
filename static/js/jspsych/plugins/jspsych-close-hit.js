jsPsych.plugins['close-hit-questions'] = (function () {
  var plugin = {};

  /**
   * Timer module.
   */
  var timerModule = null;

  plugin.info = {
    name: 'close-hit-questions',
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
        default: 'Continue',
        description: 'Label of the button.'
      },
      time_stamp: {
        type: jsPsych.plugins.parameterType.OBJECT,
        pretty_name: 'Timestamp',
        default: {},
        description: 'Object for collecting timestamp'
      },
    }
  }

  plugin.trial = function (display_element, trial) {

    var html = "";

    // identifiers for hover event targets
    var elementsMapping = [];

    // store responses, events
    var response = {
      trial_events: [],
      mouse_events: [],
    };

    var timestamp_onload = jsPsych.totalTime();

    // timer module init
    if (jsPsych.pluginAPI.isNeedToStartTimerModuleInitialization(trial.type, 'close-hit-questions')) {
      timerModule = jsPsych.pluginAPI.initializeTimerModule(response, timestamp_onload, '');
    }

    response.trial_events.push({
      "event_type": trial.event_type,
      "event_raw_details": trial.event_raw_details,
      "event_converted_details": trial.event_converted_details,
      "timestamp": jsPsych.totalTime(),
      "time_elapsed": jsPsych.totalTime() - timestamp_onload
    });


    var plugin_id_name = "jspsych-survey-multi-choice";

    // inject CSS for trial
    html += '<style id="jspsych-survey-multi-choice-css">';
    html += ".jspsych-survey-multi-choice-question { margin-top: 2em; margin-bottom: 2em; }" +
      ".jspsych-survey-multi-choice-text span.required {color: darkred;}" +
      ".jspsych-survey-multi-choice-text { font-size: 2rem;max-width:800px;text-align: justify;margin: auto;}" +
      ".jspsych-survey-multi-choice-preamble { margin: auto; font-size: 2.1rem; font-weight: bold; text-align: center;}" +
      "input[type=radio] { margin: 0;}" +
      ".form-radio { top: 0;}" +
      "label.jspsych-survey-multi-choice-text { font-size: 18px; }" +
      "textarea { padding: 1rem; color: #111; margin-bottom: 2rem; }" +
      ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-text {  text-align: justify;}" +
      ".jspsych-survey-multi-choice-option { line-height: 2; }" +
      ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option {  display: inline-flex;  margin-left: 1em;  margin-right: 1em;  vertical-align: top;}" +
      "label.jspsych-survey-multi-choice-text {margin-right: .7em;}";
    html += '</style>';

    // show preamble text
    if (trial.preamble !== null) {
      html += '<div id="jspsych-survey-multi-choice-preamble" class="jspsych-survey-multi-choice-preamble"><span>' + trial.preamble + '</span></div>';
    }

    // form element
    html += '<form id="jspsych-survey-multi-choice-form">';

    // generate question order. this is randomized here as opposed to randomizing the order of trial.questions
    // so that the data are always associated with the same question regardless of order
    var question_order = [];
    for (var i = 0; i < trial.questions.length; i++) {
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

      html += '<div id="jspsych-survey-multi-choice-' + question_id + '" class="' + question_classes.join(' ') + '"  data-name="' + question.name + '">';

      // add question text
      html += '<p class="jspsych-survey-multi-choice-text survey-multi-choice"><span>' + question.prompt + '</span>'
      if (question.required) {
        html += "<span class='required'>*</span>";
      }
      html += '</p>';

      // create option radio buttons
      for (var j = 0; j < question.options.length; j++) {
        // add label and question text
        var option_id_name = "jspsych-survey-multi-choice-option-" + question_id + "-" + j;
        var input_name = 'jspsych-survey-multi-choice-response-' + question_id;
        var input_id = 'jspsych-survey-multi-choice-response-' + question_id + '-' + j;

        var required_attr = question.required ? 'required' : '';

        // add radio button container
        html += '<div id="' + option_id_name + '" class="jspsych-survey-multi-choice-option">';
        html += '<label class="jspsych-survey-multi-choice-text" data-time-stamp="Q' + i + '" for="' + input_id + '">' + question.options[j] + '</label>';
        html += '<input type="radio" name="' + input_name + '" data-time-stamp="Q' + i + '" id="' + input_id + '" class="form-radio" value="' + question.options[j] + '" ' + required_attr + '></input>';
        html += '</div>';

        elementsMapping.push(
          {
            element: 'Q' + (i + 1) + 'A' + (j + 1) + ' input',
            id: [input_id]
          },
          {
            element: 'Q' + (i + 1) + 'A' + (j + 1) + ' label',
            for: [input_id]
          }
        );
      }

      html += '</div>';

      elementsMapping.push({
        element: 'Q' + (i + 1),
        text: [question.prompt]
      });
    }
    html += '<div><textarea class="text_box" data-time-stamp="Q4" rows="6" cols="80" name="comment" placeholder="Please type your suggestions for us here..." form="usrform"></textarea></div>'
    // add submit button
    html += '<input type="submit" id="' + plugin_id_name + '-next" class="' + plugin_id_name + ' jspsych-btn"' + (trial.button_label ? ' value="' + trial.button_label + '"' : '') + '></input>';
    html += '</form>';

    html +=
      `<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
              <div class="modal__overlay" tabindex="-1">
                <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
                  <header class="modal__header">
                    <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                  </header>
                  <main class="modal__content" id="modal-1-content">
                    <p>${participant_feedback_popup_text}</p>
                  </main>
                  <footer class="modal__footer">
                    <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>
                  </footer>
                </div>
              </div>
          </div>`;


    // popup of timer module
    if (timerModule) {
      html += timerModule.getPopupHTML();
    }

    // render
    display_element.innerHTML = html;

    // function to handle responses by the subject
    var after_response = function (info) {

      if (info.key_release === undefined) {
        response.trial_events.push({
          "event_type": "key press",
          "event_raw_details": info.key,
          "event_converted_details": jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key) + ' key pressed',
          "timestamp": jsPsych.totalTime(),
          "time_elapsed": jsPsych.totalTime() - timestamp_onload
        });

        // hold event when input, submit button was clicked
        if (info.el) {
          if (info.el.dataset.timeStamp) {
            trial.time_stamp[info.el.dataset.timeStamp] = jsPsych.totalTime();
          }

          if (info.el.dataset.questionNumber) {
            response.trial_events.push({
              "event_type": "answer displayed",
              "event_raw_details": info.el.dataset.questionNumber,
              "event_converted_details": info.el.dataset.questionNumber + ' answer displayed',
              "timestamp": jsPsych.totalTime(),
              "time_elapsed": jsPsych.totalTime() - timestamp_onload
            });
          }

          if (info.el.type === 'submit') {
            response.trial_events.push({
              "event_type": "button clicked",
              "event_raw_details": 'Submit',
              "event_converted_details": '"Submit" selected',
              "timestamp": jsPsych.totalTime(),
              "time_elapsed": jsPsych.totalTime() - timestamp_onload
            });
          }
        }
      } else {
        response.trial_events.push({
          "event_type": "key release",
          "event_raw_details": info.key_release,
          "event_converted_details": jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key_release) + ' key released',
          "timestamp": jsPsych.totalTime(),
          "time_elapsed": jsPsych.totalTime() - timestamp_onload
        });
      }
    };

    // forced click event fix for some laptops touchpad
    $("label").on("click", function () {
      var labelID = $(this).attr('for');
      if ('labelID') {
        $("#" + labelID).prop('checked', true).trigger('click').trigger('change');
      };
    });

    // function to handle mouse hovering UI elements
    var after_mousemove = function (info) {
      response.mouse_events.push({
        x: info.x,
        y: info.y,
        scrollX: info.scrollX,
        scrollY: info.scrollY,
        viewport_size: info.viewport_size,
        page_size: info.page_size,
        type: info.type,
        target: info.target,
        timestamp: jsPsych.totalTime(),
      });
    };

    // save timestamp on input click
    $("input[type=radio]").on("click change touchstart", function () {
      var time_stamp_key = $(this).data('time-stamp');
      if (time_stamp_key) {
        trial.time_stamp[time_stamp_key] = jsPsych.totalTime();
      };
    });

    // form functionality
    document.querySelector('form').addEventListener('submit', function (event) {
      event.preventDefault();

      var isSuccess = timerModule ? timerModule.check() : true;

      if (!isSuccess) return false

      // create object to hold responses
      var question_data = {};
      var timestamp_data = {};

      for (var i = 0; i < trial.questions.length; i++) {
        if (!trial.questions[i].options.length) continue;
        var match = display_element.querySelector('#jspsych-survey-multi-choice-' + i);
        var id = trial.questions[i].prompt;

        if (match.querySelector("input[type=radio]:checked") !== null) {
          var val = match.querySelector("input[type=radio]:checked").value;
        } else {
          var val = "NA";
        }

        var obje = {};
        obje[id] = val;
        timestamp_data[id] = trial.time_stamp['Q' + i] ? trial.time_stamp['Q' + i] : 'NA';
        Object.assign(question_data, obje);
      }

      var text_box = $('.text_box').val();
      var obj = {};
      if (text_box) {
        if (text_box.length < participant_feedback_text_limit) {
          $('.text_box').parent().prev().addClass('survey-error-text');
        } else {
          obj['Text Response'] = text_box;
          timestamp_data['Text Response'] = trial.time_stamp['Q4'] ? trial.time_stamp['Q4'] : 'NA';
          $('.text_box').parent().prev().removeClass('survey-error-text');
        }
      } else {
        $('.text_box').parent().prev().addClass('survey-error-text');
      }

      Object.assign(question_data, obj);

      if ($('.survey-error-text').length < 1) {

        // kill keyboard listeners
        if (typeof keyboardListener !== 'undefined') {
          jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
          jsPsych.pluginAPI.cancelClickResponse(clickListener);
        }

        // kill mouse listener
        if (typeof mouseMoveListener !== 'undefined') {
          jsPsych.pluginAPI.cancelMouseEnterResponse(mouseMoveListener);
        }

        // save data
        var trial_data = {
          "stage_name": JSON.stringify(trial.stage_name),
          "responses": JSON.stringify(question_data),
          "timestamp": JSON.stringify(timestamp_data),
          "events": JSON.stringify(response.trial_events),
          "mouse_events": JSON.stringify(response.mouse_events)
        };

        // clear the display
        display_element.innerHTML = '';

        // next trial
        jsPsych.finishTrial(trial_data);
      } else {
        // show modal, register events
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

    elementsMapping.push(
      {
        element: 'text input',
        tag: ['textarea']
      },
      {
        element: 'submit button',
        value: [trial.button_label]
      },
      {
        element: 'instruction text',
        text: [trial.preamble]
      }
    );

    // start mouse move listener
    var mouseMoveListener = jsPsych.pluginAPI.getMouseMoveResponse({
      callback_function: after_mousemove,
      elements_mapping: elementsMapping,
    });
  };

  return plugin;
})();