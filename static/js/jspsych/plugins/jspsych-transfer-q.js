jsPsych.plugins['transfer-q'] = (function() {
  var plugin = {};

  plugin.info = {
    name: 'transfer-q',
    parameters: {
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      stage_name: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Stage Name',
        default: null,
        description: 'Specific name of the current stage.'
      },
      vars: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Text variables',
        default: null,
        description: 'Text variables.'
      },
      details: {
        a: {
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
        },
        b: {
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
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    // store response
    var response = {
      trial_events: []
    };

    var timestamp_onload = jsPsych.totalTime();
    var machine_color = trial.color;
    var left_text = trial.left_text;
    var right_text = trial.right_text;

    // add question
    var new_html =
      `<div id="jspsych-stimulus" class='vvr-question-container vvr-question-left'>
      <div class='vvr-question-a'>
      <p>test</p>
      <div class="outcome-container-learning"></div>
      <svg class="vending-machine" viewBox="0 0 253 459" x="10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="27" y="20" width="203" height="359" fill="${machine_color}"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M253 0V440.506H209.527V459H44.6212V440.506H0V0H253ZM222 279H32V363H222V279ZM59.957 282.531L133.253 309.209L118.546 349.616L45.2501 322.938L59.957 282.531ZM86 210H32V256H86V210ZM154 210H100V256H154V210ZM222 210H168V256H222V210ZM86 148H32V194H86V148ZM154 148H100V194H154V148ZM222 148H168V194H222V148ZM86 86H32V132H86V86ZM154 86H100V132H154V86ZM222 86H168V132H222V86ZM86 24H32V70H86V24ZM154 24H100V70H154V24ZM222 24H168V70H222V24Z" fill="white"/>
      </svg>
      <div class="votes-container">
      <div class="description">
      <div class="description--left">${left_text}</div>
      <div class="description--center"></div>
      <div class="description--right">${right_text}</div>
      </div>
      <div id="slider">
      <span class="line"></span>
      </div>
      <ul>text</ul>
      </div>
      </div>
      <div class='vvr-question-b' style='display: none'>
      <p style="padding-bottom: 5rem;">text</p>
      </div>
      </div>`;

    // add modal
    new_html +=
      `<div class="modal micromodal-slide" id="modal-2" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
      <header class="modal__header">
      <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
      </header>
      <main class="modal__content" id="modal-1-content">
      <p></p>
      </main>
      <footer class="modal__footer">
      <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>
      </footer>
      </div>
      </div>
      </div>`;



    // render
    display_element.innerHTML = new_html;

    // init VAS slider
    $("#slider").slider({
      value: 5,
      min: 0,
      max: 10,
      step: 0.01,
      change: function(event, ui) {
        $(".ui-slider .ui-slider-handle").css('visibility', 'visible');
        $("#slider").slider("disable");
        vas_holder = ui.value.toFixed(2);
        response.trial_events.push({
          event_type: "VAS answer has been made",
          event_raw_details: ui.value.toFixed(2),
          event_converted_details:
              ui.value.toFixed(2) + " answer has been made",
          timestamp: jsPsych.totalTime(),
          time_elapsed: jsPsych.totalTime() - timestamp_onload,
        });
      }
    })

    // show a second part of the question with VAS
    function showNextQuestion() {
      $('.vvr-question-b').fadeIn('slow');
      // response.trial_events.push({
      //   "event_type": trial.details.b.event_type,
      //   "event_raw_details": trial.details.b.event_raw_details,
      //   "event_converted_details": trial.details.b.event_converted_details,
      //   "timestamp": jsPsych.totalTime(),
      //   "time_elapsed": jsPsych.totalTime() - timestamp_onload
      // });
    }


    // function to handle responses by the subject
    var after_response = function(info) {
  

      if (info.key_release === undefined) {
        response.trial_events.push({
            event_type: "key press",
            event_raw_details: info.key,
            event_converted_details:
                jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key) +
                " key pressed",
            timestamp: jsPsych.totalTime(),
            time_elapsed: jsPsych.totalTime() - timestamp_onload,
        });
      } else {
        response.trial_events.push({
            event_type: "key release",
            event_raw_details: info.key_release,
            event_converted_details:
                jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(
                    info.key_release
                ) + " key released",
            timestamp: jsPsych.totalTime(),
            time_elapsed: jsPsych.totalTime() - timestamp_onload,
        });
      }


      if (info.key === left_tilt) {
        $(".vending-machine").css({
          transform:
            "rotate(" +
            shake_left_rotate +
            "deg) translateX(" +
            shake_left_translateX +
            "%)",
          transition:
            "all " + shake_transition + "s cubic-bezier(0.65, 0.05, 0.36, 1)",
        });

      } else if (info.key === right_tilt) {
        $(".vending-machine").css({
          transform:
            "rotate(" +
            shake_right_rotate +
            "deg) translateX(" +
            shake_right_translateX +
            "%)",
          transition:
            "all " + shake_transition + "s cubic-bezier(0.65, 0.05, 0.36, 1)",
        });

      }

    }

    // function to end trial when it is time
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
        jsPsych.pluginAPI.cancelClickResponse(clickListener);
      }

      // gather the data to store for the trial
      var trial_data = {
          stage_name: JSON.stringify(trial.stage_name),
          stimulus: trial.stimulus,
          timestamp: jsPsych.totalTime(),
          strength_of_belief: vas_holder,
          events: JSON.stringify(response.trial_events),
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // start the response listener
    if (trial.choices !== jsPsych.NO_KEYS) {
      var keyboardListener;
      if (item_id === 0) {
        setTimeout( function() {
          keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: after_response,
            valid_responses: trial.choices,
            rt_method: 'performance',
            persist: true,
            allow_held_key: false
          });
        }, answer_latency);
      } else {
        keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: after_response,
          valid_responses: trial.choices,
          rt_method: 'performance',
          persist: true,
          allow_held_key: false
        });
      }

      var clickListener = jsPsych.pluginAPI.getMouseResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'date',
        persist: false,
        allow_held_key: false
      });
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  }

  return plugin;
})();