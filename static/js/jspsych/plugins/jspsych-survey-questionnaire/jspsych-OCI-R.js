jsPsych.plugins['OCI-R'] = (function () {
  var plugin = {};

  /**
   * Timer module.
   */
  var timerModule = null;

  plugin.info = {
    name: 'OCI-R',
    stage_name: 'OCI-R',
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
  plugin.trial = function (display_element, trial) {

    var plugin_id_name = "jspsych-survey-multi-choice-OSC-R";
    var html = "";
    var timestamp_onload = jsPsych.totalTime();

    // identifiers for hover event targets
    var elementsMapping = [];

    // store responses, events
    var response = {
      trial_events: [],
      mouse_events: [],
    };

    // timer module init
    if (jsPsych.pluginAPI.isNeedToStartTimerModuleInitialization(trial.type, 'OCI-R')) {
      timerModule = jsPsych.pluginAPI.initializeTimerModule(response, timestamp_onload, '');
    }

    response.trial_events.push({
      'event_type': trial.event_type,
      'event_raw_details': trial.event_raw_details,
      'event_converted_details': trial.event_converted_details,
      'timestamp': jsPsych.totalTime(),
      'time_elapsed': jsPsych.totalTime() - timestamp_onload
    });

    html += '<div id="translation-listener">translate</div>';
    // inject CSS for trial
    html += '<style id="jspsych-survey-multi-choice-css">';
    html += ".jspsych-survey-multi-choice-question { display: flex; text-align: left; border-bottom: 1px solid }" +
      ".jspsych-survey-multi-choice-text span.required {color: darkred;}" +
      ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-text {  text-align: center;}" +
      ".jspsych-survey-multi-choice-option { display: flex; justify-content: center; align-items: center; line-height: 2; padding: 1rem 0; }" +
      ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option {  width: 100%; border-right: 1px solid;}" +
      ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option:last-child {  border-right: none; }" +
      "#jspsych-survey-multi-choice-17 { border-bottom: none; }" +
      ".jspsych-survey-multi-choice-content { outline: 1px solid #fff;}" +
      ".jspsych-survey-highlight { cursor: pointer; width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center; }" +
      ".jspsych-survey-multi-choice-form { max-width: 1000px; min-width: 400px; }" +
      ".jspsych-btn { margin: 100px 0; }" +
      ".jspsych-content { margin-top: 130px;}" +
      "ul {list-style: none}" +
      ".jspsych-survey-multi-choice { margin-top: 10rem; }" +
      ".jspsych-survey-multi-choice-option-left { display: flex; width: 40%; text-align: left; border-right: 3px solid #fff; padding-bottom: 2rem; }" +
      ".jspsych-survey-multi-choice-option-right { display: flex; width: 60%; justify-content: space-around; }" +
      ".jspsych-survey-multi-choice-number { display: flex; height: 100%; width: 35px; text-align: center; justify-content: center; }" +
      ".jspsych-survey-multi-choice-preamble { text-align: left; max-width: 1000px; padding-bottom: 1rem; }" +
      ".jspsych-survey-multi-choice-instructions { display: flex; justify-content: space-between;  border-bottom: 3px solid; font-weight: bold; }" +
      ".jspsych-survey-multi-choice-instructions ul { display: flex; justify-content: space-around; width: 60%; padding-inline-start: 0; margin-bottom: 0; }" +
      ".jspsych-survey-multi-choice-instructions li { display: flex; justify-content: center; width: 100%; border-right: 1px solid #fff; padding: 2rem 0;  }" +
      ".jspsych-survey-multi-choice-instructions li:last-child { border-right: none;  }" +
      "label.jspsych-survey-multi-choice-text input[type='radio'] {margin-right: 1em;}" +
      ".jspsych-survey-highlight { width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center; }" +
      "p { margin: 0 0 0px; }" +
      "@media (max-width: 900px) {" +
      ".jspsych-survey-multi-choice-instructions li { font-size: 15px; }" +
      "}" +
      "@media (max-width: 700px) {" +
      ".jspsych-survey-multi-choice-instructions li { font-size: 2vw; }" +
      ".jspsych-survey-multi-choice-option-left { width: 30%; }" +
      ".jspsych-survey-multi-choice-option-right { width: 70%; }" +
      ".jspsych-survey-multi-choice-instructions ul { width: 70%; }" +
      ".jspsych-survey-multi-choice-number { width: 25px; }" +
      "}"
    html += '</style>';

    // fixed header
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
      html += '<div class="jspsych-survey-multi-choice-preamble">' + trial.preamble + '</div>';
    }

    // form element
    html += '<div id="' + plugin_id_name + '">';
    html += '<form id="jspsych-survey-multi-choice-form" class="jspsych-survey-multi-choice-form">';

    // column titles
    html +=
      `<div class="jspsych-survey-multi-choice-instructions">
          <div class="jspsych-survey-multi-choice-option-left"></div>
          <ul>
            <li><p>Not at all</p></li>
            <li><p>A little</p></li>
            <li><p>Moderately</p></li>
            <li><p>A lot</p></li>
            <li><p>Extremely</p></li>
          </ul>
      </div>`;

    var titles = ['Not at all', 'A little', 'Moderately', 'A lot', 'Extremely']

    for (var i = 0; i < titles.length; i++) {
      elementsMapping.push({
        element: 'A' + (i + 1),
        text: ['<p>' + titles[i] + '</p>']
      });
    }

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
      html += '<div class="jspsych-survey-multi-choice-option-left"><span class="jspsych-survey-multi-choice-number">' + (i + 1) + '.</span><p class="jspsych-survey-multi-choice-text survey-multi-choice jspsych-survey-multi-choice-question-text" style="text-align: left; padding: 0 10px; width: 100%;"><span>' + question.prompt
      // question.required
      html += '</span></p></div>';
      html += '<div class="jspsych-survey-multi-choice-option-right">';

      // create option radio buttons
      for (var j = 0; j < question.options.length; j++) {
        // add label and question text
        var option_id_name = 'jspsych-survey-multi-choice-option-' + question_id + '-' + j;
        var input_name = 'jspsych-survey-multi-choice-response-' + question_id;
        var input_id = 'jspsych-survey-multi-choice-response-' + question_id + '-' + j;

        var required_attr = question.required ? 'required' : '';

        // add radio button container
        html += '<div id="' + option_id_name + '" class="jspsych-survey-multi-choice-option">';
        html += '<label class="jspsych-survey-multi-choice-text jspsych-survey-highlight" data-time-stamp="Q' + (i + 1) + '" data-question-number="Q' + (i + 1) + 'A' + (j + 1) + '" for="' + input_id + '">' + question.options[j] + '</label>';
        html += '<input hidden type="radio" name="' + input_name + '" id="' + input_id + '" data-time-stamp="Q' + (i + 1) + '" value="' + question.options[j] + '" ' + required_attr + '></input>';
        html += '</div>';

        elementsMapping.push({
          element: 'Q' + (i + 1) + 'A' + (j + 1) + ' input',
          for: [input_id]
        });
      }

      html += '</div></div>';

      elementsMapping.push({
        element: 'Q' + (i + 1),
        text: [(i + 1) + '.', question.prompt]
      });
    }

    // add submit button
    html += '<input type="submit" id="' + plugin_id_name + '-next" class="' + plugin_id_name + ' jspsych-btn"' + (trial.button_label ? ' value="' + trial.button_label + '"' : '') + '></input>';
    html += '</form>';
    html += '</div>';

    // add modal
    html +=
      `<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
            <div class="modal__overlay" tabindex="-1">
              <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
                <header class="modal__header">
                  <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                </header>
                <main class="modal__content" id="modal-1-content">
                  <p>${popup_text_WBF}</p>
                </main>
                <footer class="modal__footer">
                  <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>
                </footer>
              </div>
            </div>
        </div>`;

    html += jsPsych.pluginAPI.getPopupHTML('window-blur', popup_text_browser);
    html += jsPsych.pluginAPI.getPopupHTML('translator-detected', popup_text_translator);

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
          'event_type': 'key press',
          'event_raw_details': info.key,
          'event_converted_details': jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key) + ' key pressed',
          'timestamp': jsPsych.totalTime(),
          'time_elapsed': jsPsych.totalTime() - timestamp_onload
        });
      } else {
        response.trial_events.push({
          'event_type': 'key release',
          'event_raw_details': info.key_release,
          'event_converted_details': jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key_release) + ' key released',
          'timestamp': jsPsych.totalTime(),
          'time_elapsed': jsPsych.totalTime() - timestamp_onload
        });
      }
    };

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
    }

    function onAnswerDisplayed(event, current_timestamp) {
      response.trial_events.push({
        'event_type': 'answer displayed',
        'event_raw_details': event.target.dataset.questionNumber,
        'event_converted_details': event.target.dataset.questionNumber + ' answer displayed',
        'timestamp': current_timestamp,
        'time_elapsed': current_timestamp - timestamp_onload
      });
    }

    // highlight input
    $('.jspsych-survey-highlight').on('click touchstart', function (event) {
      var time_stamp_key;
      var isSuccess = timerModule ? timerModule.check() : true;

      if (isSuccess) {
        $(this).parent().parent().find('.jspsych-survey-highlight').removeClass('bg-primary');
        $(this).addClass('bg-primary');

        // save timestamp on input click
        time_stamp_key = $(this).parent().find('input[type=radio]');

        var current_timestamp = jsPsych.totalTime()

        if (time_stamp_key) {
          trial.time_stamp[time_stamp_key] = current_timestamp;
        }

        onAnswerDisplayed(event, current_timestamp)
      }

      return isSuccess;
    });

    function proccessDataBeforeSubmit(validate = false) {
      // create object to hold responses
      var question_data = {};
      var timestamp_data = {};

      for (var i = 0; i < trial.questions.length; i++) {
        var match = display_element.querySelector('#jspsych-survey-multi-choice-' + i);
        var id = i + 1;
        var val = '';

        if (match.querySelector('input[type=radio]:checked') !== null) {
          val = match.querySelector('input[type=radio]:checked').value;

          $(match).find('.jspsych-survey-multi-choice-question-text').removeClass('survey-error-after');
          $(match).find('.jspsych-survey-multi-choice-number').removeClass('survey-error-text');
        } else if (validate) {
          val = '';

          $(match).find('.jspsych-survey-multi-choice-question-text').addClass('survey-error-after');
          $(match).find('.jspsych-survey-multi-choice-number').addClass('survey-error-text');
        }

        var obje = {};
        var name = id;

        if (match.attributes['data-name'].value !== '') {
          name = match.attributes['data-name'].value;
        }

        obje[name] = val;
        timestamp_data[name] = trial.time_stamp['Q' + id];
        Object.assign(question_data, obje);
      }

      return {
        'stage_name': JSON.stringify(plugin.info.stage_name),
        'responses': JSON.stringify(question_data),
        'timestamp': JSON.stringify(timestamp_data),
        'time_stamp': JSON.stringify(trial.time_stamp),
        'question_order': JSON.stringify(question_order),
        'events': JSON.stringify(response.trial_events),
        'mouse_events': JSON.stringify(response.mouse_events)
      };
    }

    jsPsych.pluginAPI.initializeWindowChangeListeners(response, timestamp_onload, proccessDataBeforeSubmit, timerModule);

    const translatorTarget = document.getElementById('translation-listener')
    jsPsych.pluginAPI.initializeTranslatorDetector(translatorTarget, 'translate', response, timestamp_onload, proccessDataBeforeSubmit);

    // form functionality
    document.querySelector('form').addEventListener('submit', function (event) {
      event.preventDefault();
      response.trial_events.push({
        'event_type': 'button clicked',
        'event_raw_details': 'Submit',
        'event_converted_details': '"Submit" selected',
        'timestamp': jsPsych.totalTime(),
        'time_elapsed': jsPsych.totalTime() - timestamp_onload
      });

      var trial_data = proccessDataBeforeSubmit(true);

      if ($('.survey-error-after').length < 1) {
        // kill keyboard listeners
        if (typeof keyboardListener !== 'undefined') {
          jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
          jsPsych.pluginAPI.cancelClickResponse(clickListener);

          // destroy timer module
          if (timerModule) {
            timerModule.stopTimerModule();
            timerModule = null;
          }
        }

        // kill mouse listener
        if (typeof mouseMoveListener !== 'undefined') {
          jsPsych.pluginAPI.cancelMouseEnterResponse(mouseMoveListener);
        }


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
        element: 'submit button',
        value: [trial.button_label]
      },
      {
        element: 'instruction text',
        class: ['jspsych-survey-multi-choice-preamble']
      },
      {
        element: 'cross close button',
        class: ['modal__close'],
      },
      {
        element: 'close button',
        class: ['modal__btn'],
      },
      {
        element: 'modal background',
        class: ['modal__container', 'modal__header', 'modal__footer'],
      },
      {
        element: 'modal text',
        class: ['modal__content'],
      },
    );

    // start mouse move listener
    var mouseMoveListener = jsPsych.pluginAPI.getMouseMoveResponse({
      callback_function: after_mousemove,
      elements_mapping: elementsMapping,
      ignored_tags: ['p'],
    });
  };

  return plugin;
})();