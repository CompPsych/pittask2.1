// Initalize psiturk object

var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

// remove previous data from the database on page reloading
psiTurk.taskdata.set('data', [])
// reset all previous data in case if page was reloaded
jsPsych.data.reset();

// adding beforeunload listener which will minimize
// page reloading during the experiment
$(window).on("beforeunload", function (event) {
    psiTurk.saveData();
    $.ajax("quitter", {
        type: "POST",
        data: { uniqueId: uniqueId }
    });

    if (popup_exit) {
        event.preventDefault();
        event.returnValue = popup_text_exit
        return popup_text_exit;
    }
});

// determining the presence of outcome for RL stage
var DEGRAD_PATTERN = {
    A0: {
        d0: false,
        d1: 'left',
        d2: 'right',
    },
    A1: {
        d0: 'left',
        d1: 'left',
        d2: 'left',
    },
    A2: {
        d0: 'right',
        d1: 'right',
        d2: 'right',
    }
};

// Each game launching has 
// a randomly chosen game version
var counter_balancing_input = [
    {
        game_version: 'A',
        left: 'MM',
        right: 'BBQ',
        video: '/static/video/MM',
        converted_details: "MM",
        outcomes: ["MM", "BBQ", "TT"]
    },
    {
        game_version: 'B',
        left: 'BBQ',
        right: 'MM',
        video: '/static/video/BBQ',
        converted_details: "BBQ",
        outcomes: ["MM", "BBQ", "TT"]
    },
    {
        game_version: 'C',
        left: 'TT',
        right: 'BBQ',
        video: '/static/video/TT',
        converted_details: "TT",
        outcomes: ["MM", "BBQ", "TT"]
    },
    {
        game_version: 'D',
        left: 'BBQ',
        right: 'TT',
        video: '/static/video/BBQ',
        converted_details: "BBQ",
        outcomes: ["MM", "BBQ", "TT"]
    },
    {
        game_version: 'E',
        left: 'MM',
        right: 'TT',
        video: '/static/video/MM',
        converted_details: "MM",
        outcomes: ["MM", "BBQ", "TT"]
    },
    {
        game_version: 'F',
        left: 'TT',
        right: 'MM',
        video: '/static/video/TT',
        converted_details: "TT",
        outcomes: ["MM", "BBQ", "TT"]
    },
    {
        game_version: 'G',
        left: 'MM',
        right: 'BBQ',
        video: '/static/video/BBQ',
        converted_details: "BBQ",
        outcomes: ["MM", "BBQ", "TT"]
    },
    {
        game_version: 'H',
        left: 'BBQ',
        right: 'MM',
        video: '/static/video/MM',
        converted_details: "MM",
        outcomes: ["MM", "BBQ", "TT"]
    },
    {
        game_version: 'I',
        left: 'TT',
        right: 'BBQ',
        video: '/static/video/BBQ',
        converted_details: "BBQ",
        outcomes: ["MM", "BBQ", "TT"]
    },
    {
        game_version: 'J',
        left: 'BBQ',
        right: 'TT',
        video: '/static/video/TT',
        converted_details: "TT",
        outcomes: ["MM", "BBQ", "TT"]
    },
    {
        game_version: 'K',
        left: 'MM',
        right: 'TT',
        video: '/static/video/TT',
        converted_details: "TT",
        outcomes: ["MM", "BBQ", "TT"]
    },
    {
        game_version: 'L',
        left: 'TT',
        right: 'MM',
        video: '/static/video/MM',
        converted_details: "MM",
        outcomes: ["MM", "BBQ", "TT"]
    }
];

// randomly choose game version
var counter_balancing = jsPsych.randomization.sampleWithoutReplacement(counter_balancing_input, 1);

// Reconnection to the Database
var error_message =
    "<div class='jspsych-content-wrapper'>" +
    "<div class='jspsych-content'>" +
    "<h1>Oops!</h1>" +
    "<p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p>" +
    "<button class='btn btn-primary btn-lg' id='resubmit'>Resubmit</button>" +
    "</div>" +
    "</div>";

prompt_resubmit = function () {
    $("body").addClass("jspsych-display-element");
    document.body.innerHTML = error_message;

    $("#resubmit").click(resubmit);
};

resubmit = function () {

    document.body.innerHTML = "<div class='jspsych-content-wrapper'>" +
        "<div class='jspsych-content'>" +
        "<h1>Trying to resubmit...</h1>" +
        "</div>" +
        "</div>";
    reprompt = setTimeout(prompt_resubmit, 10000);
    psiTurk.saveData({
        success: function () {
            clearInterval(reprompt);
            psiTurk.completeHIT();
        },
        error: prompt_resubmit
    });
};

// demographics instructions before the stage
var DEMOGRAPHICS_OPEN = {
    timeline: [{
        stage_name: 'demographics_open',
        type: 'html-keyboard-response',
        stimulus: open_instruct_text_demographics,
        trial_latency: open_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'open_instruct_text_demographics',
        event_converted_details: "demographics_open text appears",
    }],
    conditional_function: function () {
        return open_instruct_demographics;
    }
};

// demographics instructions after the stage
var DEMOGRAPHICS_INSTRUCT_CLOSE = {
    timeline: [{
        stage_name: 'demographics_close',
        type: 'html-keyboard-response',
        stimulus: close_instruct_text_demographics,
        trial_latency: close_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'close_instruct_text_demographics',
        event_converted_details: "demographics_close text appears",
    }],
    conditional_function: function () {
        return close_instruct_demographics;
    }
};

// stage with instructions
var DEMOGRAPHICS = {
    timeline: [
        DEMOGRAPHICS_STAGE, DEMOGRAPHICS_INSTRUCT_CLOSE
    ]
};

// SDS instructions before the stage
var SDS_INSTRUCT_OPEN = {
    timeline: [{
        stage_name: 'SDS open instructions page',
        type: 'html-keyboard-response',
        stimulus: open_instruct_text_SDS,
        trial_latency: open_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'open_instruct_text_SDS',
        event_converted_details: "SDS open instructions text appears",
    }],
    conditional_function: function () {
        return open_instruct_SDS;
    }
};

// SDS instructions after the stage
var SDS_INSTRUCT_CLOSE = {
    timeline: [{
        stage_name: 'SDS close instructions page',
        type: 'html-keyboard-response',
        stimulus: close_instruct_text_SDS,
        trial_latency: close_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'close_instruct_text_SDS',
        event_converted_details: "SDS close instructions text appears",
    }],
    conditional_function: function () {
        return close_instruct_SDS;
    }
};

// stage with instructions
var SDS = {
    timeline: [
        SDS_INSTRUCT_OPEN, SDS_STAGE, SDS_INSTRUCT_CLOSE
    ]
};

// ICAR instructions before the stage
var ICAR_INSTRUCT_OPEN = {
    timeline: [{
        stage_name: 'ICAR open instructions page',
        type: 'html-keyboard-response',
        stimulus: open_instruct_text_ICAR,
        trial_latency: open_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'open_instruct_text_ICAR',
        event_converted_details: "ICAR open instructions text appears",
    }],
    conditional_function: function () {
        return open_instruct_ICAR;
    }
};

// ICAR instructions after the stage
var ICAR_INSTRUCT_CLOSE = {
    timeline: [{
        stage_name: 'ICAR close instructions page',
        type: 'html-keyboard-response',
        stimulus: close_instruct_text_ICAR,
        trial_latency: close_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'close_instruct_text_ICAR',
        event_converted_details: "ICAR close instructions text appears",
    }],
    conditional_function: function () {
        return close_instruct_ICAR;
    }
};

// stage with instructions
var ICAR = {
    timeline: [
        ICAR_INSTRUCT_OPEN, ICAR_STAGE, ICAR_INSTRUCT_CLOSE
    ]
};

var TERMINATE_APP_INSTRUCT = {
    timeline: [
        {
            stage_name: 'terminate_app_instruct',
            type: 'html-keyboard-response',
            stimulus: terminate_app_instruct,
            trial_latency: open_instruct_latency,
            trial_duration: null,
            response_ends_trial: false,
            event_type: 'text appears',
            event_raw_details: 'terminate_app_instruct',
            event_converted_details: 'terminate_app_instruct text appears',
            detect_window_change: false,
        },
    ]
}

// key testing stage with instructions before/after
var KEY_TESTING = {
    timeline: [
        {
            stage_name: 'key_testing_open',
            type: 'html-keyboard-response',
            stimulus: open_instruct_text_key_testing,
            trial_latency: open_instruct_latency,
            trial_duration: null,
            response_ends_trial: false,
            event_type: 'text appears',
            event_raw_details: 'open_instruct_text_key_testing',
            event_converted_details: 'key_testing_open text appears'
        },
        {
            stage_name: 'key_testing',
            type: 'key-testing',
            stimulus: '',
            trial_duration: null,
            response_ends_trial: false,
            event_type: 'text image appears',
            event_raw_details: 'blank vending machine',
            event_converted_details: 'blank vending machine appears'
        },
        {
            stage_name: 'key_testing_close',
            type: 'html-keyboard-response',
            stimulus: close_instruct_text_key_testing,
            trial_latency: close_instruct_latency,
            trial_duration: null,
            response_ends_trial: false,
            event_type: 'text appears',
            event_raw_details: 'close_instruct_text_key_testing',
            event_converted_details: 'key_testing_close text appears'
        }
    ]
};

// FHR_timestamp helps pass timestamp parameter trough
// the all stages FHQ for simulating uniformity.
var FHR_timestamp = 0;
var FHQ1_1 = {
    stage_name: "FHQ1",
    type: 'food-and-hunger-questions',
    stimulus: '/static/images/TT.png',
    questions: {
        top: FHQ_1,
        bottom: FHQ_1_bottom_text
    },
    food_item: "TT.png",
    rating_status: 'pre-rating',
    event_type: 'FHQ1 scale appears',
    event_raw_details: "FHQ_1, FHQ_1_bottom_text",
    event_converted_details: 'TT scale'
}

var FHQ1_2 = {
    stage_name: "FHQ1",
    type: 'food-and-hunger-questions',
    stimulus: '/static/images/MM.png',
    questions: {
        top: FHQ_2,
        bottom: FHQ_2_bottom_text
    },
    food_item: "MM.png",
    rating_status: 'pre-rating',
    event_type: 'FHQ1 scale appears',
    event_raw_details: "FHQ_2, FHQ_2_bottom_text",
    event_converted_details: 'MM scale'
}

var FHQ1_3 = {
    stage_name: "FHQ1",
    type: 'food-and-hunger-questions',
    stimulus: '/static/images/BBQ.png',
    questions: {
        top: FHQ_3,
        bottom: FHQ_3_bottom_text
    },
    food_item: "BBQ.png",
    rating_status: 'pre-rating',
    event_type: 'FHQ1 scale appears',
    event_raw_details: "FHQ_3, FHQ_3_bottom_text",
    event_converted_details: 'BBQ scale'
}

var FHQ1_4 = {
    stage_name: "FHQ1",
    type: 'food-and-hunger-questions',
    stimulus: 'hunger',
    questions: {
        top: FHQ_4,
    },
    food_item: "hunger",
    rating_status: 'pre-rating',
    event_type: 'FHQ1 scale appears',
    event_raw_details: "FHQ_4",
    event_converted_details: 'Hunger scale'
}

var FHQ1_OPEN = {
    timeline: [{
        stage_name: 'FHQ1_open',
        type: 'html-keyboard-response',
        stimulus: open_instruct_text_FHQ_pre_rating,
        trial_latency: open_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'open_instruct_text_FHQ_pre_rating',
        event_converted_details: "FHQ1_open text appears",
    }],
    conditional_function: function () {
        return open_instruct_FHQ_pre_rating;
    }
};

var FHQ1_CLOSE = {
    timeline: [{
        stage_name: 'FHQ1_close',
        type: 'html-keyboard-response',
        stimulus: close_instruct_text_FHQ_pre_rating,
        trial_latency: close_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'close_instruct_text_FHQ_pre_rating',
        event_converted_details: "FHQ1_close text appears",
    }],
    conditional_function: function () {
        return close_instruct_FHQ_pre_rating;
    }
};

var FHQ2_1 = {
    stage_name: "FHQ2",
    type: 'food-and-hunger-questions',
    stimulus: '/static/images/TT.png',
    questions: {
        top: FHQ_1,
        bottom: FHQ_1_bottom_text
    },
    food_item: "TT.png",
    rating_status: 'post-rating',
    event_type: 'FHQ2 scale appears',
    event_raw_details: "FHQ_1, FHQ_1_bottom_text",
    event_converted_details: 'TT scale'
}

var FHQ2_2 = {
    stage_name: "FHQ2",
    type: 'food-and-hunger-questions',
    stimulus: '/static/images/MM.png',
    questions: {
        top: FHQ_2,
        bottom: FHQ_2_bottom_text
    },
    food_item: "MM.png",
    rating_status: 'post-rating',
    event_type: 'FHQ2 scale appears',
    event_raw_details: "FHQ_2, FHQ_2_bottom_text",
    event_converted_details: 'MM scale'
}

var FHQ2_3 = {
    stage_name: "FHQ2",
    type: 'food-and-hunger-questions',
    stimulus: '/static/images/BBQ.png',
    questions: {
        top: FHQ_3,
        bottom: FHQ_3_bottom_text
    },
    food_item: "BBQ.png",
    rating_status: 'post-rating',
    event_type: 'FHQ2 scale appears',
    event_raw_details: "FHQ_3, FHQ_3_bottom_text",
    event_converted_details: 'BBQ scale'
}

var FHQ2_4 = {
    stage_name: "FHQ2",
    type: 'food-and-hunger-questions',
    stimulus: 'hunger',
    questions: {
        top: FHQ_4,
    },
    food_item: "hunger",
    rating_status: 'post-rating',
    event_type: 'FHQ2 scale appears',
    event_raw_details: "FHQ_4",
    event_converted_details: 'Hunger scale'
};

var FHQ2_OPEN = {
    timeline: [{
        stage_name: 'FHQ2_open',
        type: 'html-keyboard-response',
        stimulus: open_instruct_text_FHQ_post_rating,
        trial_latency: open_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'open_instruct_text_FHQ_post_rating',
        event_converted_details: "FHQ2_open text appears",
    }],
    conditional_function: function () {
        return open_instruct_FHQ_post_rating;
    }
};

var FHQ2_CLOSE = {
    timeline: [{
        stage_name: 'FHQ2_close',
        type: 'html-keyboard-response',
        stimulus: close_instruct_text_FHQ_post_rating,
        trial_latency: close_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'close_instruct_text_FHQ_post_rating',
        event_converted_details: "FHQ2_close text appears",
    }],
    conditional_function: function () {
        return close_instruct_FHQ_post_rating;
    }
};

var loop_node_counter_rl = 0;
var loop_node_counter_rl_determination = 0;
var loop_node_counter_max_num_correct = 0;
var loop_node_counter_max_num_incorrect = 0;
var degrad_pattern_loop_counter = 0;
var prob_value_loop_counter = 0;
var rlIsCorrect = false;
var item_id = 0;
var rl_timer = 0;

// pass variables from parameters.js through rl_*_vars objects
var rl_1_vars = {
    stage_name: 'RL1',
    min_blocks_num: min_blocks_num_RL1,
    min_num_correct: min_num_correct_RL1,
    max_num_incorrect: max_num_incorrect_RL1,
    prob_value: prob_value_RL1,
    degrad_pattern: degrad_pattern_RL1,
    popup_machine: popup_machine_RL1,
    popup_machine_duration: popup_duration_machine_RL1,
    popup_machine_text: popup_text_machine_RL1
};

var rl_2_vars = {
    stage_name: 'RL2',
    min_blocks_num: min_blocks_num_RL2,
    min_num_correct: min_num_correct_RL2,
    max_num_incorrect: max_num_incorrect_RL2,
    prob_value: prob_value_RL2,
    degrad_pattern: degrad_pattern_RL2,
    popup_machine: popup_machine_RL2,
    popup_machine_duration: popup_duration_machine_RL2,
    popup_machine_text: popup_text_machine_RL2
};

var rl_3_vars = {
    stage_name: 'RL3',
    min_blocks_num: min_blocks_num_RL3,
    min_num_correct: min_num_correct_RL3,
    max_num_incorrect: max_num_incorrect_RL3,
    prob_value: prob_value_RL3,
    degrad_pattern: degrad_pattern_RL3,
    popup_machine: popup_machine_RL3,
    popup_machine_duration: popup_duration_machine_RL3,
    popup_machine_text: popup_text_machine_RL3
};

// main function used for all RL stages
var RL = function (data) {
    var min_blocks_num = data.min_blocks_num;
    var min_num_correct = data.min_num_correct;
    var max_num_incorrect = data.max_num_incorrect;
    var stage_name = data.stage_name;

    var rl_a = {
        type: 'survey-rl',
        stage_name: stage_name,
        variables: {
            RL_INTERVAL_NUM: interval_num,
            RL_INTERVAL_DURATION: interval_duration,
            RL_OUTCOME_DURATION: outcome_duration,
            RL_PROB_VALUE: data.prob_value,
            RL_DEGRAD_PATTERN: data.degrad_pattern,
        },
        popup_machine: data.popup_machine,
        popup_machine_duration: data.popup_machine_duration,
        popup_machine_text: data.popup_machine_text
    };

    var questions_a = {
        timeline: [
            {
                type: 'survey-rl-questions-left',
                stage_name: stage_name,
                rl_stage: stage_name,
                details: {
                    a: {
                        event_type: 'question appears',
                        event_raw_details: 'question 1(a) appears',
                        event_converted_details: stage_name + ' text appears',
                    },
                    b: {
                        event_type: 'question appears',
                        event_raw_details: 'question 1(b) appears',
                        event_converted_details: stage_name + ' text appears',
                    }
                },
                vars: {
                    RL_q_text_a1: RL_q_text_a1,
                    RL_q_text_a2: RL_q_text_a2,
                    RL_q_text_b1: RL_q_text_b1,
                    RL_q_text_b2: RL_q_text_b2,
                    RL_q_text_b3: RL_q_text_b3,
                    RL_q_text_b4: RL_q_text_b4,
                    max_num_correct_consecutive_questions: min_num_correct
                },
                popup_machine: data.popup_machine,
                popup_machine_duration: data.popup_machine_duration,
                popup_machine_text: data.popup_machine_text
            },
            {
                stage_name: stage_name,
                type: 'survey-feedback',
                stimulus: function () {
                    return rlIsCorrect ? '<p style="font-size: 24px;">' + correct_text + '</p>' : '<p style="font-size: 24px;">' + incorrect_text + '</p>';
                },
                choices: jsPsych.NO_KEYS,
                trial_duration: feedback_duration,
                rl_timer: true,
                event_type: 'text appears',
                event_raw_details: function () {
                    return rlIsCorrect ? 'correct_text' : 'incorrect_text';
                },
                event_converted_details: function () {
                    return rlIsCorrect ? correct_text + ' text appears' : incorrect_text + ' text appears'
                }
            }
        ]
    };

    var questions_b = {
        timeline: [
            {
                type: 'survey-rl-questions-right',
                stage_name: stage_name,
                rl_stage: stage_name,
                details: {
                    a: {
                        event_type: 'question appears',
                        event_raw_details: 'question 2(a) appears',
                        event_converted_details: stage_name + ' text appears',
                    },
                    b: {
                        event_type: 'question appears',
                        event_raw_details: 'question 2(b) appears',
                        event_converted_details: stage_name + ' text appears',
                    }
                },
                vars: {
                    RL_q_text_a1: RL_q_text_a1,
                    RL_q_text_a2: RL_q_text_a2,
                    RL_q_text_b1: RL_q_text_b1,
                    RL_q_text_b2: RL_q_text_b2,
                    RL_q_text_b3: RL_q_text_b3,
                    RL_q_text_b4: RL_q_text_b4,
                    max_num_correct_consecutive_questions: min_num_correct
                },
                popup_machine: data.popup_machine,
                popup_machine_duration: data.popup_machine_duration,
                popup_machine_text: data.popup_machine_text
            },
            {
                stage_name: stage_name,
                type: 'survey-feedback',
                stimulus: function () {
                    return rlIsCorrect ? '<p style="font-size: 24px;">' + correct_text + '</p>' : '<p style="font-size: 24px;">' + incorrect_text + '</p>';
                },
                choices: jsPsych.NO_KEYS,
                trial_duration: feedback_duration,
                rl_timer: true,
                event_type: 'text appears',
                event_raw_details: function () {
                    return rlIsCorrect ? 'correct_text' : 'incorrect_text';
                },
                event_converted_details: function () {
                    return rlIsCorrect ? correct_text + ' text appears' : incorrect_text + ' text appears'
                }
            }
        ]
    };

    var rl_a_cond = false;
    var rl_b_cond = false;
    var rl_c_cond = false;

    function rl_shuffle_questions() {
        var rand = jsPsych.randomization.sampleWithoutReplacement(['right', 'left'], 1);
        if (rand[0] === 'right') {
            rl_a_cond = false;
            rl_b_cond = true;
            rl_c_cond = true;
        } else if (rand[0] === 'left') {
            rl_a_cond = true;
            rl_b_cond = true;
            rl_c_cond = false;
        };
    };

    rl_shuffle_questions();

    var loop_node_RL = {
        timeline: [rl_a,
            {
                timeline: [questions_a],
                conditional_function: function () {
                    return rl_a_cond;
                }
            },
            {
                timeline: [questions_b],
                conditional_function: function () {
                    return rl_b_cond;
                }
            },
            {
                timeline: [questions_a],
                conditional_function: function () {
                    return rl_c_cond;
                }
            }
        ],
        loop_function: function () {
            function reset_vars() {
                degrad_pattern_loop_counter = 0;
                prob_value_loop_counter = 0;
                loop_node_counter_rl = 0;
                loop_node_counter_rl_determination = 0;
                rl_timer = 0;
                item_id = 0;
            };

            if (loop_node_counter_rl_determination >= min_blocks_num && max_num_incorrect <= loop_node_counter_max_num_incorrect) {
                reset_vars();
                return false;
            } else if (loop_node_counter_rl_determination >= min_blocks_num && min_num_correct <= loop_node_counter_max_num_correct) {
                reset_vars();
                return false;
            } else {
                rl_shuffle_questions();
                return true;
            }
        }
    };

    return loop_node_RL;
};

var RL1 = {
    timeline: [
        {
            timeline: [{
                stage_name: 'RL1_open',
                type: 'html-keyboard-response',
                stimulus: open_instruct_text_RL1,
                trial_latency: open_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text_RL1',
                event_converted_details: 'RL1_open text appears'
            }],
            conditional_function: function () {
                return open_instruct_RL1;
            }
        },
        RL(rl_1_vars),
        {
            timeline: [{
                stage_name: 'RL1_close',
                type: 'html-keyboard-response',
                stimulus: close_instruct_text_RL1,
                trial_latency: close_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                class: 'rl_close_instruct',
                event_raw_details: 'close_instruct_text_RL1',
                event_converted_details: 'RL1_close text appears'
            }],
            conditional_function: function () {
                return close_instruct_RL1;
            }
        }
    ]
};

var RL2 = {
    timeline: [
        {
            timeline: [{
                stage_name: 'RL2_open',
                type: 'html-keyboard-response',
                stimulus: open_instruct_text_RL2,
                trial_latency: open_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text_RL2',
                event_converted_details: 'RL2_open text appears'
            }],
            conditional_function: function () {
                return open_instruct_RL2;
            }
        },
        RL(rl_2_vars),
        {
            timeline: [{
                stage_name: 'RL2_close',
                type: 'html-keyboard-response',
                stimulus: close_instruct_text_RL2,
                trial_latency: close_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                id: 'rl_close_instruct',
                event_raw_details: 'close_instruct_text_RL2',
                event_converted_details: 'RL2_close text appears'
            }],
            conditional_function: function () {
                return close_instruct_RL2;
            }
        }
    ]
};

var RL3 = {
    timeline: [
        {
            timeline: [{
                stage_name: 'RL3_open',
                type: 'html-keyboard-response',
                stimulus: open_instruct_text_RL3,
                trial_latency: open_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text_RL3',
                event_converted_details: 'RL3_open text appears'
            }],
            conditional_function: function () {
                return open_instruct_RL3;
            }
        },
        RL(rl_3_vars),
        {
            timeline: [{
                stage_name: 'RL3_close',
                type: 'html-keyboard-response',
                stimulus: close_instruct_text_RL3,
                trial_latency: close_instruct_latency,
                response_ends_trial: false,
                event_type: 'text appears',
                id: 'rl_close_instruct',
                event_raw_details: 'close_instruct_text_RL3',
                event_converted_details: 'RL3_close text appears'
            }],
            conditional_function: function () {
                return close_instruct_RL3;
            }
        }
    ]
};

var WBF_OPEN = {
    stage_name: 'WBF_open',
    type: 'html-keyboard-response',
    stimulus: open_instruct_text_WBF,
    trial_latency: open_instruct_latency,
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'text appears',
    event_raw_details: 'open_instruct_text_WBF',
    event_converted_details: 'WBF_open text appears'
};

var WBF_CLOSE = {
    stage_name: 'WBF_close',
    type: 'html-keyboard-response',
    stimulus: close_instruct_text_WBF,
    trial_latency: close_instruct_latency,
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'text appears',
    event_raw_details: 'close_instruct_text_WBF',
    event_converted_details: 'WBF_close text appears'
};

var INVENTORY_OPEN = {
    timeline: [{
        stage_name: 'inventory_open',
        type: 'html-keyboard-response',
        stimulus: open_instruct_text_inventory,
        trial_latency: open_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'open_instruct_text_inventory',
        event_converted_details: "inventory_open text appears",
    }],
    conditional_function: function () {
        return open_instruct_inventory;
    }
};

var INVENTORY_CLOSE = {
    timeline: [{
        stage_name: 'inventory_close',
        type: 'html-keyboard-response',
        stimulus: close_instruct_text_inventory,
        trial_latency: close_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'close_instruct_text_inventory',
        event_converted_details: "inventory_close text appears",
    }],
    conditional_function: function () {
        return close_instruct_inventory;
    }
};

var pav_correct_holder = 0;
var pav_incorrect_holder = 0;
var pav_is_correct = false;
var pav_multi_choice_counter = 0;
var pav_con_timer = 0;

var pav_stimuli = [
    {
        stimuli: "/static/images/MM.png",
        value: 'MM',
        color: stim1_colour,
        color_name: 'stim1_colour',
        response: 'a'
    },
    {
        stimuli: "/static/images/BBQ.png",
        value: 'BBQ',
        color: stim2_colour,
        color_name: 'stim2_colour',
        response: 'b'
    },
    {
        stimuli: "/static/images/TT.png",
        value: 'TT',
        color: stim3_colour,
        color_name: 'stim3_colour',
        response: 'c'
    },
    {
        stimuli: "/static/images/EMPTY.png",
        value: 'Empty',
        color: stim4_colour,
        color_name: 'stim4_colour',
        response: 'd'
    }
];

var pav_multi_choice_array = jsPsych.randomization.shuffle(pav_stimuli);

var PAV_CONDITIONING_MAIN = {
    timeline: [
        {
            stage_name: 'pav_con',
            type: 'animation',
            frame_isi: ITI_duration,
            frame_time: stim_duration
        },
        {
            stage_name: 'pav_con',
            stage_type: 'Pav Conditioning Response',
            type: 'survey-pav-multi-choice',
            questions: [
                {
                    prompt: "Which snack is overstocked?", name: 'response', options: [
                        {
                            name: 'M&Ms',
                            value: 'MM',
                            img: '/static/images/MM.png',
                            response: 'a',
                        },
                        {
                            name: 'BBQ',
                            value: 'BBQ',
                            img: '/static/images/BBQ.png',
                            response: 'b',
                        },
                        {
                            name: 'Tiny teddy',
                            value: 'TT',
                            img: '/static/images/TT.png',
                            response: 'c',
                        },
                        {
                            name: 'Empty',
                            value: 'Empty',
                            img: '/static/images/EMPTY.png',
                            response: 'd',
                        }
                    ]
                }],
            button_label: 'submit answer',
        },
        {
            stage_name: 'pav_con',
            type: 'html-keyboard-response',
            pav_con_timer: true,
            stimulus: function () {
                if (pav_is_correct) {
                    return '<p style="font-size: 24px;">' + correct_text + '</p>';
                } else {
                    return '<p style="font-size: 24px;">' + incorrect_text + '</p>';
                }
            },
            trial_duration: feedback_duration,
            event_type: 'text appears',
            event_raw_details: function () {
                if (pav_is_correct) {
                    return 'correct_text'
                } else {
                    return 'incorrect_text'
                }
            },
            event_converted_details: function () {
                if (pav_is_correct) {
                    return 'correct_text text appears'
                } else {
                    return 'incorrect_text text appears'
                }
            }
        }
    ],
    loop_function: function () {
        pav_multi_choice_counter++;
        pav_is_correct = false;
        if (pav_correct_holder >= min_num_correct_pav || pav_incorrect_holder >= max_num_incorrect_pav) {
            pav_correct_holder = 0;
            pav_incorrect_holder = 0;
            pav_multi_choice_counter = 0;
            pav_con_timer = 0;
            pav_multi_choice_array = jsPsych.randomization.shuffle(pav_stimuli);
            return false;
        } else {
            return true;
        }
    }
};

var PAV_TEST_INSTRUCT_OPEN = {
    timeline: [{
        stage_name: 'pav_con_open',
        type: 'html-keyboard-response',
        stimulus: open_instruct_text_pav,
        trial_latency: open_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'open_instruct_text_pav',
        event_converted_details: "pav_con_open text appears",
    }],
    conditional_function: function () {
        return open_instruct_pav;
    }
};

var PAV_TEST_INSTRUCT_CLOSE = {
    timeline: [{
        stage_name: 'pav_con_close',
        type: 'html-keyboard-response',
        stimulus: close_instruct_text_pav,
        trial_latency: close_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'close_instruct_text_pav',
        event_converted_details: "pav_con_close text appears",
    }],
    conditional_function: function () {
        return close_instruct_pav;
    }
};

var PAV_CON = {
    timeline: [
        PAV_TEST_INSTRUCT_OPEN,
        PAV_CONDITIONING_MAIN,
        PAV_TEST_INSTRUCT_CLOSE
    ]
};


var TRANSFER1 = {
    timeline: [
        {
            timeline: [{
                stage_name: 'transfer1_open',
                type: 'html-keyboard-response',
                stimulus: open_instruct_text_transfer_test,
                trial_latency: open_instruct_latency,
                trial_duration: null,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text_transfer_test',
                event_converted_details: "transfer1_open text appears",
            }],
            conditional_function: function () {
                return open_instruct_transfer_test;
            }
        },
        {
            stage_name: 'transfer1',
            type: 'transfer-test',
            stimulus: 'vending machine',
            transfer_test_color_duration: stim_duration,
            transfer_test_white_duration: ITI_duration,
            sequence_reps: block_num_transfer_test,
            popup_machine: popup_machine_transfer1,
            popup_machine_duration: popup_duration_machine_transfer1,
            popup_machine_text: popup_text_machine_transfer1
        },
        {
            timeline: [{
                stage_name: 'transfer1_close',
                type: 'html-keyboard-response',
                stimulus: close_instruct_text_transfer_test,
                trial_latency: close_instruct_latency,
                trial_duration: null,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'close_instruct_text_transfer_test',
                event_converted_details: "transfer1_close text appears",
            }],
            conditional_function: function () {
                return close_instruct_transfer_test;
            }
        }
    ],
    conditional_function: function () {
        return transfer_test1;
    }
};

var TRANSFER2 = {
    timeline: [
        {
            timeline: [{
                stage_name: 'transfer2_open',
                type: 'html-keyboard-response',
                stimulus: open_instruct_text_transfer_test,
                trial_latency: open_instruct_latency,
                trial_duration: null,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text_transfer_test',
                event_converted_details: "transfer2_open text appears",
            }],
            conditional_function: function () {
                return open_instruct_transfer_test;
            }
        },
        {
            stage_name: 'transfer2',
            type: 'transfer-test',
            stimulus: 'vending machine',
            transfer_test_color_duration: stim_duration,
            transfer_test_white_duration: ITI_duration,
            sequence_reps: block_num_transfer_test,
            popup_machine: popup_machine_transfer1,
            popup_machine_duration: popup_duration_machine_transfer1,
            popup_machine_text: popup_text_machine_transfer1
        },
        {
            timeline: [{
                stage_name: 'transfer2_close',
                type: 'html-keyboard-response',
                stimulus: close_instruct_text_transfer_test,
                trial_latency: close_instruct_latency,
                trial_duration: null,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'close_instruct_text_transfer_test',
                event_converted_details: "transfer2_close text appears",
            }],
            conditional_function: function () {
                return close_instruct_transfer_test;
            }
        }
    ],
    conditional_function: function () {
        return transfer_test2;
    }
};

var TRANSFER3 = {
    timeline: [
        {
            timeline: [{
                stage_name: 'transfer3_open',
                type: 'html-keyboard-response',
                stimulus: open_instruct_text_transfer_test,
                trial_latency: open_instruct_latency,
                trial_duration: null,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text_transfer_test',
                event_converted_details: "transfer3_open text appears",
            }],
            conditional_function: function () {
                return open_instruct_transfer_test;
            }
        },
        {
            stage_name: 'transfer3',
            type: 'transfer-test',
            stimulus: 'vending machine',
            transfer_test_color_duration: stim_duration,
            transfer_test_white_duration: ITI_duration,
            sequence_reps: block_num_transfer_test,
            popup_machine: popup_machine_transfer1,
            popup_machine_duration: popup_duration_machine_transfer1,
            popup_machine_text: popup_text_machine_transfer1
        },
        {
            timeline: [{
                stage_name: 'transfer3_close',
                type: 'html-keyboard-response',
                stimulus: close_instruct_text_transfer_test,
                trial_latency: close_instruct_latency,
                trial_duration: null,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'close_instruct_text_transfer_test',
                event_converted_details: "transfer3_close text appears",
            }],
            conditional_function: function () {
                return close_instruct_transfer_test;
            }
        }
    ],
    conditional_function: function () {
        return transfer_test3;
    }
};

var DEVAL_VIDEO = {
    timeline: [
        {
            timeline: [{
                stage_name: 'deval_video_open',
                type: 'html-keyboard-response',
                stimulus: open_instruct_text_video,
                trial_latency: open_instruct_latency,
                trial_duration: null,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text_video',
                event_converted_details: "open_instruct_text_video text appears",
            }],
            conditional_function: function () {
                return open_instruct_video;
            }
        },
        {
            stage_name: 'deval_video',
            type: 'video-keyboard-response',
            sources: [counter_balancing[0].video + '.mp4'],
            autoplay: true,
            trial_duration: video_duration * 1000,
            controls: false,
            response_ends_trial: false,
            trial_ends_after_video: true,
            audio: video_sound
        },
        {
            timeline: [{
                stage_name: 'deval_video_close',
                type: 'html-keyboard-response',
                stimulus: close_instruct_text_video,
                trial_latency: close_instruct_latency,
                trial_duration: null,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'close_instruct_text_video',
                event_converted_details: "close_instruct_text_video text appears",
            }],
            conditional_function: function () {
                return close_instruct_video;
            }
        },
    ]
};

var DEVAL_TEST_MAIN = {
    stage_name: 'deval_test',
    type: 'transfer-test',
    stimulus: 'vending machine',
    trial_duration: deval_test_duration,
    sequence_reps: 1,
    popup_machine: popup_machine_deval_test,
    popup_machine_duration: popup_duration_machine_deval_test,
    popup_machine_text: popup_text_machine_deval_test
};

var DEVAL_TEST_INSTRUCT_OPEN = {
    timeline: [{
        stage_name: 'deval_test_open',
        type: 'html-keyboard-response',
        stimulus: open_instruct_text_deval_test,
        trial_latency: open_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'open_instruct_text_deval_test',
        event_converted_details: "open_instruct_text_deval_test text appears",
    }],
    conditional_function: function () {
        return open_instruct_deval_test;
    }
};

var DEVAL_TEST_INSTRUCT_CLOSE = {
    timeline: [{
        stage_name: 'deval_test_close',
        type: 'html-keyboard-response',
        stimulus: close_instruct_text_deval_test,
        trial_latency: close_instruct_latency,
        trial_duration: null,
        response_ends_trial: false,
        event_type: 'text appears',
        event_raw_details: 'close_instruct_text_deval_test',
        event_converted_details: "deval_test_close text appears",
    }],
    conditional_function: function () {
        return close_instruct_deval_test;
    }
};

var DEVAL_TEST = {
    timeline: [
        DEVAL_TEST_INSTRUCT_OPEN, DEVAL_TEST_MAIN, DEVAL_TEST_INSTRUCT_CLOSE
    ]
};

// OR
var OR = {
    timeline: [
        {
            timeline: [{
                stage_name: 'OR_open',
                type: 'html-keyboard-response',
                stimulus: open_instruct_text_OR,
                trial_latency: open_instruct_latency,
                trial_duration: null,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text_OR',
                event_converted_details: "open_instruct_text_OR text appears",
            }],
            conditional_function: function () {
                return open_instruct_OR;
            }
        },
        {
            stage_name: 'OR',
            type: 'or',
            stimulus: 'vending machine',
            trial_duration: OR_duration * 1000,
        },
        {
            timeline: [{
                stage_name: 'OR_close',
                type: 'html-keyboard-response',
                stimulus: close_instruct_text_OR,
                trial_latency: close_instruct_latency,
                trial_duration: null,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'close_instruct_text_OR',
                event_converted_details: "close_instruct_text_OR text appears",
            }],
            conditional_function: function () {
                return close_instruct_OR;
            }
        },
    ]
}

// Recall (memory test)
var RECALL = {
    timeline: [
        {
            timeline: [{
                stage_name: 'recall_open',
                type: 'html-keyboard-response',
                stimulus: open_instruct_text_recall,
                trial_latency: open_instruct_latency,
                trial_duration: null,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text_recall',
                event_converted_details: "open_instruct_text_recall text appears",
            }],
            conditional_function: function () {
                return open_instruct_recall;
            }
        },
        {
            timeline: [
                {
                    stage_name: 'recall',
                    stage_type: 'pav_con',
                    type: 'survey-pav-multi-choice',
                    questions: [
                        {
                            prompt: "Which snack is overstocked?", name: 'response', options: [
                                {
                                    name: 'M&Ms',
                                    value: 'MM',
                                    img: '/static/images/MM.png',
                                    response: 'a',
                                },
                                {
                                    name: 'BBQ',
                                    value: 'BBQ',
                                    img: '/static/images/BBQ.png',
                                    response: 'b',
                                },
                                {
                                    name: 'Tiny teddy',
                                    value: 'TT',
                                    img: '/static/images/TT.png',
                                    response: 'c',
                                },
                                {
                                    name: 'Empty',
                                    value: 'Empty',
                                    img: '/static/images/EMPTY.png',
                                    response: 'd',
                                }
                            ]
                        }],
                    button_label: 'submit answer',
                },
            ],
            loop_function: function () {
                pav_multi_choice_counter++;
                pav_is_correct = false;
                if (pav_multi_choice_counter < 4) {
                    return true;
                } else {

                    return false;
                }

            }
        },
        {
            timeline: jsPsych.randomization.shuffle([
                {
                    type: 'survey-rl-questions-left',
                    stage_name: 'recall',
                    stage_type: 'RL',
                    rl_stage: null,
                    details: {
                        a: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(a) appears',
                            event_converted_details: 'RL' + ' text appears',
                        },
                        b: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(b) appears',
                            event_converted_details: 'RL' + ' text appears',
                        }
                    },
                    vars: {
                        RL_q_text_a1: RL_q_text_a1,
                        RL_q_text_a2: RL_q_text_a2,
                        RL_q_text_b1: RL_q_text_b1,
                        RL_q_text_b2: RL_q_text_b2,
                        RL_q_text_b3: RL_q_text_b3,
                        RL_q_text_b4: RL_q_text_b4,
                        max_num_correct_consecutive_questions: 1
                    }
                },
                {
                    type: 'survey-rl-questions-right',
                    stage_name: 'recall',
                    stage_type: 'RL',
                    rl_stage: null,
                    details: {
                        a: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(a) appears',
                            event_converted_details: 'RL' + ' text appears',
                        },
                        b: {
                            event_type: 'question appears',
                            event_raw_details: 'question 1(b) appears',
                            event_converted_details: 'RL' + ' text appears',
                        }
                    },
                    vars: {
                        RL_q_text_a1: RL_q_text_a1,
                        RL_q_text_a2: RL_q_text_a2,
                        RL_q_text_b1: RL_q_text_b1,
                        RL_q_text_b2: RL_q_text_b2,
                        RL_q_text_b3: RL_q_text_b3,
                        RL_q_text_b4: RL_q_text_b4,
                        max_num_correct_consecutive_questions: 1
                    }
                }
            ])

        },
        {
            timeline: [{
                stage_name: 'recall_close',
                type: 'html-keyboard-response',
                stimulus: close_instruct_text_recall,
                trial_latency: close_instruct_latency,
                trial_duration: null,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'close_instruct_text_recall',
                event_converted_details: "close_instruct_text_recall text appears",
            }],
            conditional_function: function () {
                return close_instruct_recall;
            }
        },
    ]
};

// transfer_q
var TRANSFER_Q = {
    timeline: [
        {
            timeline: [{
                stage_name: 'transfer_q_open',
                type: 'html-keyboard-response',
                stimulus: open_instruct_text_transfer_q,
                trial_latency: open_instruct_latency,
                trial_duration: null,
                response_ends_trial: false,
                event_type: 'text appears',
                event_raw_details: 'open_instruct_text_transfer_q',
                event_converted_details: "open_instruct_text_transfer_q text appears",
            }],
            conditional_function: function () {
                return open_instruct_transfer_q;
            }
        }
    ]
};

// shuffle transfer_q array of stages
var transfer_q_holder = jsPsych.randomization.shuffle([
    [{
        timeline: [
            {
                stage_name: "transfer_q",
                type: "transfer-q",
                color: stim1_colour,
                name: 'stim1_colour',
                item_id: 1,
                question_text1: transfer_q_1a_questiontext,
                question_text2: transfer_q_1b_questiontext,
                left_text: transfer_q_1a_lvas,
                right_text: transfer_q_1a_rvas,
                event_type: "text",
                event_raw_details: "text",
                event_converted_details: "text appears",
            }
        ],
        conditional_function: function () {
            return transfer_q_q1_stim1_colour;
        }
    }, {
        timeline: [
            {
                stage_name: "transfer_q",
                type: "transfer-q",
                color: stim1_colour,
                name: 'stim1_colour',
                item_id: 2,
                question_text1: transfer_q_2a_questiontext,
                question_text2: transfer_q_2b_questiontext,
                left_text: transfer_q_2a_lvas,
                right_text: transfer_q_2a_rvas,
                event_type: "text",
                event_raw_details: "text",
                event_converted_details: "text appears",
            }
        ],
        conditional_function: function () {
            return transfer_q_q2_stim1_colour;
        }
    }, {
        timeline: [
            {
                stage_name: "transfer_q",
                type: "transfer-q",
                color: stim1_colour,
                name: 'stim1_colour',
                item_id: 3,
                question_text1: transfer_q_3a_questiontext,
                question_text2: transfer_q_3b_questiontext,
                left_text: transfer_q_3a_lvas,
                right_text: transfer_q_3a_rvas,
                event_type: "text",
                event_raw_details: "text",
                event_converted_details: "text appears",
            }
        ],
        conditional_function: function () {
            return transfer_q_q3_stim1_colour;
        }
    }],
    [{
        timeline: [
            {
                stage_name: "transfer_q",
                type: "transfer-q",
                color: stim2_colour,
                name: 'stim2_colour',
                item_id: 1,
                question_text1: transfer_q_1a_questiontext,
                question_text2: transfer_q_1b_questiontext,
                left_text: transfer_q_1a_lvas,
                right_text: transfer_q_1a_rvas,
                event_type: "text",
                event_raw_details: "text",
                event_converted_details: "text appears",
            }
        ],
        conditional_function: function () {
            return transfer_q_q1_stim2_colour;
        }
    }, {
        timeline: [
            {
                stage_name: "transfer_q",
                type: "transfer-q",
                color: stim2_colour,
                name: 'stim2_colour',
                item_id: 2,
                question_text1: transfer_q_2a_questiontext,
                question_text2: transfer_q_2b_questiontext,
                left_text: transfer_q_2a_lvas,
                right_text: transfer_q_2a_rvas,
                event_type: "text",
                event_raw_details: "text",
                event_converted_details: "text appears",
            }
        ],
        conditional_function: function () {
            return transfer_q_q2_stim2_colour;
        }
    }, {
        timeline: [
            {
                stage_name: "transfer_q",
                type: "transfer-q",
                color: stim2_colour,
                name: 'stim2_colour',
                item_id: 3,
                question_text1: transfer_q_3a_questiontext,
                question_text2: transfer_q_3b_questiontext,
                left_text: transfer_q_3a_lvas,
                right_text: transfer_q_3a_rvas,
                event_type: "text",
                event_raw_details: "text",
                event_converted_details: "text appears",
            }
        ],
        conditional_function: function () {
            return transfer_q_q3_stim2_colour;
        }
    }],
    [{
        timeline: [
            {
                stage_name: "transfer_q",
                type: "transfer-q",
                color: stim3_colour,
                name: 'stim3_colour',
                item_id: 1,
                question_text1: transfer_q_1a_questiontext,
                question_text2: transfer_q_1b_questiontext,
                left_text: transfer_q_1a_lvas,
                right_text: transfer_q_1a_rvas,
                event_type: "text",
                event_raw_details: "text",
                event_converted_details: "text appears",
            }
        ],
        conditional_function: function () {
            return transfer_q_q1_stim3_colour;
        }
    }, {
        timeline: [
            {
                stage_name: "transfer_q",
                type: "transfer-q",
                color: stim3_colour,
                name: 'stim3_colour',
                item_id: 2,
                question_text1: transfer_q_2a_questiontext,
                question_text2: transfer_q_2b_questiontext,
                left_text: transfer_q_2a_lvas,
                right_text: transfer_q_2a_rvas,
                event_type: "text",
                event_raw_details: "text",
                event_converted_details: "text appears",
            }
        ],
        conditional_function: function () {
            return transfer_q_q2_stim3_colour;
        }
    }, {
        timeline: [
            {
                stage_name: "transfer_q",
                type: "transfer-q",
                color: stim3_colour,
                name: 'stim3_colour',
                item_id: 3,
                question_text1: transfer_q_3a_questiontext,
                question_text2: transfer_q_3b_questiontext,
                left_text: transfer_q_3a_lvas,
                right_text: transfer_q_3a_rvas,
                event_type: "text",
                event_raw_details: "text",
                event_converted_details: "text appears",
            }
        ],
        conditional_function: function () {
            return transfer_q_q3_stim3_colour;
        }
    }],
    [{
        timeline: [
            {
                stage_name: "transfer_q",
                type: "transfer-q",
                color: stim4_colour,
                name: 'stim4_colour',
                item_id: 1,
                question_text1: transfer_q_1a_questiontext,
                question_text2: transfer_q_1b_questiontext,
                left_text: transfer_q_1a_lvas,
                right_text: transfer_q_1a_rvas,
                event_type: "text",
                event_raw_details: "text",
                event_converted_details: "text appears",
            }
        ],
        conditional_function: function () {
            return transfer_q_q1_stim4_colour;
        }
    }, {
        timeline: [
            {
                stage_name: "transfer_q",
                type: "transfer-q",
                color: stim4_colour,
                name: 'stim4_colour',
                item_id: 2,
                question_text1: transfer_q_2a_questiontext,
                question_text2: transfer_q_2b_questiontext,
                left_text: transfer_q_2a_lvas,
                right_text: transfer_q_2a_rvas,
                event_type: "text",
                event_raw_details: "text",
                event_converted_details: "text appears",
            }
        ],
        conditional_function: function () {
            return transfer_q_q2_stim4_colour;
        }
    }, {
        timeline: [
            {
                stage_name: "transfer_q",
                type: "transfer-q",
                color: stim4_colour,
                name: 'stim4_colour',
                item_id: 3,
                question_text1: transfer_q_3a_questiontext,
                question_text2: transfer_q_3b_questiontext,
                left_text: transfer_q_3a_lvas,
                right_text: transfer_q_3a_rvas,
                event_type: "text",
                event_raw_details: "text",
                event_converted_details: "text appears",
            }
        ],
        conditional_function: function () {
            return transfer_q_q3_stim4_colour;
        }
    }]
]);

// push transfer_q stages to the main TRANSFER_Q function
transfer_q_holder.forEach(function (item) {
    item.forEach(function (obj) {
        // insert stages after open_instruct stage
        TRANSFER_Q.timeline.push(obj);
    });
});

// push close_instr object to transfer_q
TRANSFER_Q.timeline.push(
    {
        timeline: [{
            stage_name: 'transfer_q_close',
            type: 'html-keyboard-response',
            stimulus: close_instruct_text_transfer_q,
            trial_latency: close_instruct_latency,
            trial_duration: null,
            response_ends_trial: false,
            event_type: 'text appears',
            event_raw_details: 'close_instruct_text_transfer_q',
            event_converted_details: "close_instruct_text_transfer_q text appears",
        }],
        conditional_function: function () {
            return close_instruct_transfer_q;
        }
    }
);

var CLOSE_HIT = {
    stage_name: 'close_HIT_q',
    type: 'close-hit-questions',
    preamble: close_instruct_text_close_HIT_q,
    questions: [
        {
            prompt: "We would really value your thoughts on how we can improve our research. Please take a moment to provide us with feedback regarding anything we could do differently or anything you enjoyed about this research.<br><br>Thank you.",
            name: 'response',
            horizontal: true,
            options: []
        }
    ],
    button_label: 'submit answer',
    event_type: 'questions appears',
    event_raw_details: 'close_HIT_q',
    event_converted_details: "close_HIT_q text appears"
};

// final stage
var THANKS = {
    stage_name: 'thanks',
    type: 'html-keyboard-response',
    stimulus: close_instruct_text_thanks,
    trial_latency: close_instruct_latency,
    trial_duration: null,
    response_ends_trial: false,
    event_type: 'text appears',
    event_raw_details: 'close_instruct_text_thanks',
    event_converted_details: "thanks text appears"
};

/************************************************************
 * Preload required images, video.
 ***********************************************************/
var preload_images = ['/static/images/BBQ.png', '/static/images/TT.png', '/static/images/MM.png', '/static/images/EMPTY.png', '/static/images/audit_image.jpg'];
var preload_video = [counter_balancing[0].video + '.mp4'];

three_dimensional_rotate_new.forEach(element => {
    preload_images.push('/static/images/ICAR/three-dimensional_rotate/' + element.img)
});

matrix_reasoning_new.forEach(element => {
    preload_images.push('/static/images/ICAR/matrix_reasoning/' + element.img)
});

// timeline array holds all stages in a sequence
var timeline = [];
var symptom_inventories_random = jsPsych.randomization.shuffle(symptom_inventory);
var symptom_inventories_ordered = symptom_inventory;
var symptom_inventory_arr = inventory_rand ? symptom_inventories_random : symptom_inventories_ordered;

/************************************************************
 * Stages sequence configuration
 * stages can be disabled by commented out
 * stages can be reordered
 ***********************************************************/
// Init parameters
timeline.push({
    type: 'parameters',
    stage_name: 'parameters',
});

timeline.push(TERMINATE_APP_INSTRUCT);
// Key-testing
timeline.push(KEY_TESTING);
// Food & Hunger Questions pre-rating
timeline.push(FHQ1_OPEN, FHQ1_1, FHQ1_2, FHQ1_3, FHQ1_4, FHQ1_CLOSE);
// Instrumental Conditioning (RL1)
timeline.push(RL1);
// Pavlovian Condition
timeline.push(PAV_CON);
// Deval Video
timeline.push(DEVAL_VIDEO);			  
// Deval Test
// timeline.push(DEVAL_TEST);
// Instrumental Degradation (RL2)
// timeline.push(RL2);
// Transfer Test
timeline.push(TRANSFER1);				
// Transfer Test 2
// timeline.push(TRANSFER2);
// Instrumental Restoration (RL3)
// timeline.push(RL3);
// OR
// timeline.push(OR);
// Food & Hunger Questions post-rating
timeline.push(FHQ2_OPEN, FHQ2_1, FHQ2_2, FHQ2_3, FHQ2_4, FHQ2_CLOSE);
// Recall
timeline.push(RECALL);
// transfer_q
timeline.push(TRANSFER_Q);
// Transfer Test 3
// timeline.push(TRANSFER3);
// Intro: We'd like to briefly ask you about some symptoms before the online game.
timeline.push(WBF_OPEN);
// Demographics open instruct
timeline.push(DEMOGRAPHICS_OPEN);
// Attention check 1
timeline.push(ACI1);
// Demographics
timeline.push(DEMOGRAPHICS);

timeline.push(INVENTORY_OPEN);
// Symptom Inventories
for (var item of symptom_inventory_arr) {
	timeline.push(item);
}
timeline.push(INVENTORY_CLOSE);
// SDS
timeline.push(SDS);
// ICAR
timeline.push(ICAR);
// Close: That's it for the symptom questions. Now we're ready to start the online game
timeline.push(WBF_CLOSE);
// Attention check 2
timeline.push(ACI2);
// Close HIT Questions
timeline.push(CLOSE_HIT);
// Thanks
timeline.push(THANKS)

jsPsych.init({
    timeline: timeline,
    preload_images: preload_images,
    preload_video: preload_video,
    max_load_time: 1000 * 60 * 10,
    max_preload_attempts: 100,
    // on_finish: function(){
    //     // Debug mode, on_finish and on_data_update must be commented out in debug mode
    //     $(window).off("beforeunload");
    //     jsPsych.data.displayData(); 
    // }, 
    on_finish: function () {
        psiTurk.saveData({
            success: function () {
                $(window).off("beforeunload");
                psiTurk.completeHIT();
            },
            error: prompt_resubmit
        });
    },
    on_data_update: function (data) {
        psiTurk.recordTrialData(data);
        psiTurk.saveData();
    }
});
