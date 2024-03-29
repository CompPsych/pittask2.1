jsPsych.plugins["html-keyboard-response"] = (function () {

  var plugin = {};

  plugin.info = {
    name: 'html-keyboard-response',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the stimulus.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      trial_latency: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial latency',
        default: null,
        description: 'How long to show trial before key press it ends.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: false,
        description: 'If true, trial will end when subject makes a response.'
      },
      stage_name: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Stage Name',
        default: null,
        description: 'Specific name of the current stage.'
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
      },
      detect_window_change: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Detect window change',
        default: true,
        description: 'Detect window change'
      }
    }
  }

  plugin.trial = function (display_element, trial) {

    // store responses, events
    var response = {
      trial_events: [],
      mouse_events: [],
    };
    var timestamp_onload = jsPsych.totalTime();

    // used for pav_cond stage in correct/incorrect response
    // for simulating continuous timer
    if (trial.pav_con_timer) {
      timestamp_onload = pav_con_timer;
    };

    var new_html = '<div id="jspsych-html-keyboard-response-stimulus" class="jspsych-html-keyboard-response-stimulus">' + trial.stimulus + '</div>';

    if (trial.id) {
      new_html = '<div id="jspsych-html-keyboard-response-stimulus" class="' + trial.id + '">' + trial.stimulus + '</div>';
    }

    response.trial_events.push({
      event_type: trial.event_type,
      event_raw_details: trial.event_raw_details,
      event_converted_details: trial.event_converted_details,
      timestamp: jsPsych.totalTime(),
      time_elapsed: jsPsych.totalTime() - timestamp_onload,
    });

    new_html += '<div id="translation-listener">translate</div>';
    new_html += jsPsych.pluginAPI.getPopupHTML('window-blur', popup_text_browser);
    new_html += jsPsych.pluginAPI.getPopupHTML('translator-detected', popup_text_translator);

    // render
    display_element.innerHTML = new_html;


    function proccessDataBeforeSubmit() {
      return {
        stage_name: JSON.stringify(trial.stage_name),
        events: JSON.stringify(response.trial_events),
        mouse_events: JSON.stringify(response.mouse_events)
      };
    }

    if (trial.detect_window_change) {
      jsPsych.pluginAPI.initializeWindowChangeListeners(response, timestamp_onload, proccessDataBeforeSubmit);
    }

    const translatorTarget = document.getElementById('translation-listener')
    jsPsych.pluginAPI.initializeTranslatorDetector(translatorTarget, 'translate', response, timestamp_onload, proccessDataBeforeSubmit);

    // function to end trial when it is time
    var end_trial = function () {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
        jsPsych.pluginAPI.cancelClickResponse(clickListener);
      }

      // kill mouse listener
      if (typeof mouseMoveListener !== 'undefined') {
        jsPsych.pluginAPI.cancelMouseEnterResponse(mouseMoveListener);
      }

      // gather the data to store for the trial
      var trial_data = proccessDataBeforeSubmit();

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function (info) {
      if (info.key_release === undefined) {
        response.trial_events.push({
          event_type: "key press",
          event_raw_details: info.key,
          event_converted_details: jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key) + " key pressed",
          timestamp: jsPsych.totalTime(),
          time_elapsed: jsPsych.totalTime() - timestamp_onload,
        });
      } else {
        response.trial_events.push({
          event_type: "key release",
          event_raw_details: info.key_release,
          event_converted_details: jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key_release) + " key released",
          timestamp: jsPsych.totalTime(),
          time_elapsed: jsPsych.totalTime() - timestamp_onload,
        });
        if (trial.response_ends_trial) {
          end_trial();
        }
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
    };

    // start the response listener
    if (trial.choices != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: true,
        allow_held_key: false
      });
      var clickListener = jsPsych.pluginAPI.getMouseResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'date',
        persist: true,
        allow_held_key: false
      });
    }

    // identifiers for hover event targets
    var elementsMapping = [
      {
        element: 'instruction text',
        text: [trial.stimulus]
      }
    ];

    // start mouse move listener
    var mouseMoveListener = jsPsych.pluginAPI.getMouseMoveResponse({
      callback_function: after_mousemove,
      elements_mapping: elementsMapping,
      ignored_tags: ['p']
    });

    // hide stimulus if stimulus_duration is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function () {
        display_element.querySelector('#jspsych-html-keyboard-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function () {
        end_trial();
      }, trial.trial_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_latency !== null) {
      jsPsych.pluginAPI.setTimeout(function () {
        trial.response_ends_trial = true;
      }, trial.trial_latency);
    }

  };

  return plugin;
})();
