jsPsych.plugins["vor"] = (function () {
  var plugin = {};

  plugin.info = {
    name: "vor",
    parameters: {
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: "Choices",
        default: jsPsych.ALL_KEYS,
        description:
          "The keys the subject is allowed to press to respond to the stimulus.",
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: "Trial duration",
        default: null,
        description: "How long to show trial before it ends.",
      },
      variables: {
        type: jsPsych.plugins.parameterType.Obj,
        pretty_name: "Variables",
        default: null,
        description: "Variables from parameters.js file.",
      },
      stage_name: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: "Stage Name",
        default: null,
        description: "Specific name of the current stage.",
      },
    },
  };

  plugin.trial = function (display_element, trial) {

    var extinct_duration_lockout = false;
    var block_number = 0;
    var interval_number = 0;
    var OI_duration = OI_duration_A;
    var OI_interval_timer;
    var OI_threshold_interval;
    var OI_interval = 0;

    var outcome_collection = {
      MM: "/static/images/MM.png",
      TT: "/static/images/TT.png",
      BBQ: "/static/images/BBQ.png",
    };
   
    var outcome_arr =  jsPsych.randomization.shuffle([
      outcome_collection[counter_balancing[0].left],
      outcome_collection[counter_balancing[0].right]
    ]);

    // store response
    var response = {
      trial_events: [],
    };

    var timestamp_onload = jsPsych.totalTime();

    var new_html =
      '<div id="jspsych-stimulus" class="vvr_stage">' +
      '<svg class="vending-machine" viewBox="0 0 253 459" x="10" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="27" y="20" width="203" height="359" fill="#000"/>' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M253 0V440.506H209.527V459H44.6212V440.506H0V0H253ZM222 279H32V363H222V279ZM59.957 282.531L133.253 309.209L118.546 349.616L45.2501 322.938L59.957 282.531ZM86 210H32V256H86V210ZM154 210H100V256H154V210ZM222 210H168V256H222V210ZM86 148H32V194H86V148ZM154 148H100V194H154V148ZM222 148H168V194H222V148ZM86 86H32V132H86V86ZM154 86H100V132H154V86ZM222 86H168V132H222V86ZM86 24H32V70H86V24ZM154 24H100V70H154V24ZM222 24H168V70H222V24Z" fill="white"/>' +
      "</svg>" +
      '<div class="outcome-container"></div>' +
      "</div>";

    // render
    display_element.innerHTML = new_html;

    var $outcome_container = $(".outcome-container");

    function start_OI() {
      clearTimeout(OI_interval_timer);

      // display outcome
      $outcome_container.html(
        '<img class="outcome" src="' + outcome_arr[interval_number] + '"/>'
      );

      // clear outcome container
      jsPsych.pluginAPI.setTimeout(function () {
        $outcome_container.html("");
      }, outcome_duration);

      interval_number += 1;
      if (interval_number === 2) {
        interval_number = 0;
        block_number += 1;
        outcome_arr = jsPsych.randomization.shuffle([
          outcome_collection[counter_balancing[0].left],
          outcome_collection[counter_balancing[0].right],
        ]);
        threshold_interval();
      }

      OI_interval_timer = jsPsych.pluginAPI.setTimeout(function () {
        // terminate VOR stage
        if (block_number === VOR_block_num) {
          clearTimeout(OI_interval_timer);
          end_trial();
        } else {
          start_OI();
        }
      }, OI_duration + outcome_duration);
    }


    function reset_OI() {

      clearTimeout(OI_interval_timer);

      OI_interval_timer = jsPsych.pluginAPI.setTimeout(function () {
        if (block_number === VOR_block_num) {
          clearTimeout(OI_interval_timer);
          end_trial();
        } else {
          start_OI();
        }
      }, OI_duration + outcome_duration);
    }

    function threshold_interval() {

      clearTimeout(OI_threshold_interval);

      OI_threshold_interval = jsPsych.pluginAPI.setTimeout(function() {
        OI_duration = OI_duration_B;
      }, OI_threshold * 1000);
    }

    // extinction interval
    function extinct_interval() {
    
      clearTimeout(OI_interval);
 
      if(!extinct_duration_lockout) {
        OI_interval = jsPsych.pluginAPI.setTimeout(function() {
          extinct_duration_lockout = true;
          start_OI();
          threshold_interval();
        }, extinct_duration * 1000);
      }
    }
    // call extinction interval
    extinct_interval();
   

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

        machine_tilt(info);
      } else {
        response.trial_events.push({
          event_type: "key release",
          event_raw_details: info.key_release,
          event_converted_details: jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key_release) + " key released",
          timestamp: jsPsych.totalTime(),
          time_elapsed: jsPsych.totalTime() - timestamp_onload,
        });
      }
    };

    function machine_tilt(info) {

      if (info.key === left_tilt) {
        $(".vending-machine").css({
          transform: "rotate(" + shake_left_rotate + "deg) translateX(" + shake_left_translateX + "%)",
          transition: "all " + shake_transition + "s cubic-bezier(0.65, 0.05, 0.36, 1)",
        });

        jsPsych.pluginAPI.setTimeout(function () {
          $(".vending-machine").css({
            transform: "rotate(0deg) translateX(0%)",
            transition: "all " + shake_transition + "s cubic-bezier(0.65, 0.05, 0.36, 1)",
          });
        }, shake_return_time);

        response.trial_events.push({
          event_type: "left tilt",
          event_raw_details: shake_left_translateX + "%, " + shake_left_rotate + "deg",
          event_converted_details: "vending machine was tilted left " + shake_left_translateX + "%, " + shake_left_rotate + "deg",
          timestamp: jsPsych.totalTime(),
          time_elapsed: jsPsych.totalTime() - timestamp_onload,
        });

      } else if (info.key === right_tilt) {
        $(".vending-machine").css({
          transform: "rotate(" + shake_right_rotate + "deg) translateX(" + shake_right_translateX + "%)",
          transition: "all " + shake_transition + "s cubic-bezier(0.65, 0.05, 0.36, 1)",
        });

        jsPsych.pluginAPI.setTimeout(function () {
          $(".vending-machine").css({
            transform: "rotate(0deg) translateX(0%)",
            transition: "all " + shake_transition + "s cubic-bezier(0.65, 0.05, 0.36, 1)",
          });
        }, shake_return_time);

        response.trial_events.push({
          event_type: "right tilt",
          event_raw_details: shake_right_translateX + "%, " + shake_right_rotate + "deg",
          event_converted_details: "vending machine was tilted right " + shake_right_translateX + "%, " + shake_right_rotate + "deg",
          timestamp: jsPsych.totalTime(),
          time_elapsed: jsPsych.totalTime() - timestamp_onload,
        });
      }

      if (info.key === left_tilt || info.key === right_tilt) {
        if(!extinct_duration_lockout) {
           extinct_interval();
        } else {
          reset_OI();
        }
      }
    }

    // function to end trial when it is time
    var end_trial = function () {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();
      clearTimeout(OI_interval)

      // kill keyboard listeners
      if (typeof keyboardListener !== "undefined") {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
        jsPsych.pluginAPI.cancelClickResponse(clickListener);
      }

      // gather the data to store for the trial
      var trial_data = {
        stage_name: trial.stage_name,
        stimulus: trial.stimulus,
        block_number: loop_node_counter_vvr,
        events: JSON.stringify(response.trial_events),
      };

      // clear the display
      display_element.innerHTML = "";

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // start the response listener
    if (trial.choices !== jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: "performance",
        persist: true,
        allow_held_key: false,
      });

      var clickListener = jsPsych.pluginAPI.getMouseResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: "date",
        persist: false,
        allow_held_key: false,
      });
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function () {
        end_trial();
      }, trial.trial_duration);
    }
  };

  return plugin;
})();
