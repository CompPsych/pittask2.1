jsPsych.plugins['ACI'] = (function () {
    var plugin = {};

    /**
     * Timer module.
     */
    var timerModule;

    plugin.info = {
        name: 'ACI',
        stage_name: 'ACI',
        description: '',
        parameters: {
            name: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Trial Name',
                default: undefined,
                description: 'The name of the trial.'
            },
            questions: {
                type: jsPsych.plugins.parameterType.COMPLEX,
                array: true,
                pretty_name: 'Questions',
                nested: {
                    prompts: {
                        type: jsPsych.plugins.parameterType.COMPLEX,
                        array: true,
                        pretty_name: 'Prompts',
                        default: undefined,
                        description: 'The strings that will be associated with a group of options.'
                    },
                    options: {
                        type: jsPsych.plugins.parameterType.COMPLEX,
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
            },
            enable_timed_popups: {
                type: jsPsych.plugins.parameterType.BOOL,
                pretty_name: 'Enable timed popups',
                default: true,
                description: 'Enables timed popups to check if user clicks too fast or too slow.'
            },
            checkbox_appearance: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Checkbox arrearance',
                default: 'circle',
                description: 'Checkbox appearance either square or circle.'
            },
            force_answer: {
                type: jsPsych.plugins.parameterType.BOOL,
                pretty_name: 'Force answer',
                default: true,
                description: 'Expect all of the questions is answered.'
            }
        }
    };

    function getStyle() {
        let html = '<style id="jspsych-survey-multi-choice-css">';
        html += ".jspsych-survey-multi-choice-question { display: flex; text-align: left; border-bottom: 1px solid;}" +
            ".jspsych-survey-multi-choice-text span.required {color: darkred;}" +
            "#jspsych-survey-multi-choice-30 {  border-bottom: none; }" +
            ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-text {  text-align: center;}" +
            ".jspsych-survey-multi-choice-option {  display: flex; justify-content: center; align-items: center; }" +
            ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option {  width: 100%; border-right: 1px solid; text-align: center; padding: 2rem 0;}" +
            ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option:last-child { border-right: none;}" +
            ".jspsych-survey-highlight { cursor: pointer; width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center; }" +
            ".jspsych-content { width: 1000px}" +
            ".jspsych-btn { margin: 100px 0; }" +
            ".jspsych-content { margin-top: 130px;}" +
            "ul {list-style: none}" +
            ".form-radio { top: 0; }" +
            ".jspsych-survey-multi-choice-option-left { display: flex; width: 40%; text-align: left; border-right: 3px solid #fff; padding-bottom: 2rem; }" +
            ".jspsych-survey-multi-choice-option-right { display: flex; width: 60%; justify-content: space-around; }" +
            ".jspsych-survey-multi-choice-number { height: 100%; width: 45px; text-align: center; justify-content: center; }" +
            ".jspsych-survey-multi-choice-preamble { text-align: left; padding-bottom: 3rem; }" +
            ".jspsych-survey-multi-choice-instructions { display: flex; justify-content: space-between;  border-bottom: 3px solid; font-weight: bold; font-size: 1.5rem;   }" +
            ".jspsych-survey-multi-choice-instructions ul { display: flex; width: 60%; justify-content: space-around; padding-inline-start: 0; margin-bottom: 0; }" +
            ".jspsych-survey-multi-choice-instructions li { display: flex; justify-content: center; align-items: center; width: 100%; border-right: 1px solid; padding: 1rem 0; }" +
            ".jspsych-survey-multi-choice-instructions li:last-child { border-right: none; }" +
            "label.jspsych-survey-multi-choice-text input[type='radio'] {margin-right: 1em;}" +
            ".jspsych-survey-highlight { width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center; }" +
            "p { margin: 0 0 0px;}" +
            "@media (max-width: 900px) {" +
            ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option { padding: 0;}" +
            ".jspsych-survey-multi-choice-instructions li { padding: 0; }" +
            ".jspsych-survey-multi-choice-instructions ul { font-size: 1.6vw; }" +
            "}" +
            "@media (max-width: 700px) {" +
            ".jspsych-display-element { font-size: 14px;}" +
            ".jspsych-survey-multi-choice-number { width: 25px; }" +
            ".questions-right-row { font-size: 2.6vw; }" +
            "}"
        html += '</style>';

        return html
    }

    plugin.trial = function (display_element, trial) {

        var plugin_id_name = "jspsych-survey-multi-choice-ACI";
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
        if (trial.enable_timed_popups) {
            // console.log(trial.enable_timed_popups, trial.type, trial.name, jsPsych.pluginAPI.isNeedToStartTimerModuleInitialization(trial.type, trial.name))
            if (jsPsych.pluginAPI.isNeedToStartTimerModuleInitialization(trial.type, trial.name)) {
                timerModule = jsPsych.pluginAPI.initializeTimerModule(response, timestamp_onload, '');
            }
        }
        // console.log(timerModule)

        response.trial_events.push({
            'event_type': trial.event_type,
            'event_raw_details': trial.event_raw_details,
            'event_converted_details': trial.event_converted_details,
            'timestamp': jsPsych.totalTime(),
            'time_elapsed': jsPsych.totalTime() - timestamp_onload
        });

        // traslation software detection block
        // if it is translated than the translation software is used
        html += '<div id="translation-listener">translate</div>';

        // inject CSS for trial
        html += getStyle()

        // fixed header
        html +=
            '<header>' +
            '<nav class="navbar navbar-inverse navbar-fixed-top">' +
            '<div class="container-fluid">' +
            '<div class="navbar-header">' +
            '<p class="navbar-text"><b>' + trial.name + '</b></p>' +
            '</div>' +
            '</div>' +
            '</nav>' +
            '</header>';

        // form element
        html += '<div id="' + plugin_id_name + '">'
        html += '<form id="jspsych-survey-multi-choice-form" class="jspsych-survey-multi-choice-form">';

        // show preamble text
        if (trial.preamble !== null) {
            html += '<div class="jspsych-survey-multi-choice-content"><div id="jspsych-survey-multi-choice-preamble" class="jspsych-survey-multi-choice-preamble"><span>' + trial.preamble + '</span></div>';
        }

        var questions = trial.questions;
        for (var i = 0; i < questions.length; i++) {
            var options = questions[i].options;

            var optionsHTML = ''
            for (var j = 0; j < options.length; j++) {
                var option = options[j]
                if (typeof options[j] === 'object') {
                    option = options[j].name
                }
                optionsHTML += '<li><div>' + option + '</div></li>'

                elementsMapping.push({
                    element: 'A' + (j + 1),
                    text: [option]
                })
            }

            html +=
                '<div id="jspsych-survey-multi-choice-preamble" class="jspsych-survey-multi-choice-instructions">' +
                '<div class="jspsych-survey-multi-choice-option-left"></div>' +
                '<ul>' + optionsHTML + '</ul>' +
                '</div>';

            var question_order = [];

            for (var j = 0; j < questions[i].prompts.length; j++) {
                question_order.push(j);
            }

            if (trial.randomize_question_order) {
                question_order = jsPsych.randomization.shuffle(question_order);
            }

            for (var j = 0; j < question_order.length; j++) {
                var question = questions[i].prompts[question_order[j]];
                var question_id = question_order[j];

                var question_classes = ['jspsych-survey-multi-choice-question'];

                if (questions[i].horizontal) {
                    question_classes.push('jspsych-survey-multi-choice-horizontal');
                }

                html += '<div id="jspsych-survey-multi-choice-' + question_id + '" class="' + question_classes.join(' ') + '"  data-name="' + (j + 1) + '">';

                html +=
                    '<div class="jspsych-survey-multi-choice-option-left">' +
                    '<span class="jspsych-survey-multi-choice-number">' + (j + 1) + '.</span>' +
                    '<p class="jspsych-survey-multi-choice-text survey-multi-choice jspsych-survey-multi-choice-question-text" style="text-align: left; padding-left: 10px; width: 100%;">' +
                    '<span>' + question + '</span></p></div>';

                html += '<div style="display: flex; width: 60%; justify-content: space-around;">';

                var options = questions[i].options;
                for (var k = 0; k < options.length; k++) {
                    var option_id_name = 'jspsych-survey-multi-choice-option-' + question_id + '-' + k;
                    var input_name = 'jspsych-survey-multi-choice-response-' + question_id;
                    var input_id = 'jspsych-survey-multi-choice-response-' + question_id + '-' + k;
                    var option = options[k]

                    if (typeof options[k] === 'object') {
                        option = options[k].value
                    }

                    var isHiddenInput = trial.checkbox_appearance === 'circle' ? 'hidden ' : ''
                    var label_classes = 'jspsych-survey-multi-choice-text jspsych-survey-highlight'
                    var input_classes = ''

                    if (trial.checkbox_appearance === 'square') {
                        label_classes += ' hidden'
                        input_classes += 'form-radio'
                    }

                    html += '<div id="' + option_id_name + '" class="jspsych-survey-multi-choice-option">';
                    html += '<label class="' + label_classes + '" data-time-stamp="Q' + (k + 1) + '" for="' + input_id + '">' + option + '</label>';
                    html += '<input ' + isHiddenInput + 'type="radio" name="' + input_name + '" data-time-stamp="Q' + (k + 1) + '" data-question-number="Q' + (k + 1) + 'A' + (k + 1) + '" id="' + input_id + '" class="' + input_classes + '" value="' + option + '"></input>';
                    html += '</div>';

                    elementsMapping.push(
                        {
                            element: 'Q' + (k + 1) + 'A' + (k + 1) + ' label',
                            text: [option]
                        },
                        {
                            element: 'Q' + (k + 1) + 'A' + (k + 1) + ' input',
                            id: [input_id]
                        }
                    );
                    // elements mapping
                }

                html += '</div></div>'

                elementsMapping.push({
                    element: 'Q' + (j + 1),
                    text: [(j + 1) + '.', question]
                });
            }


        }
        // add submit button
        html += '<p><input type="submit" id="' + plugin_id_name + '-next" class="' + plugin_id_name + ' jspsych-btn"' + (trial.button_label ? ' value="' + trial.button_label + '"' : '') + '></input></p>';
        html += '</div></form>';

        html += jsPsych.pluginAPI.getPopupHTML('modal-1', popup_text_WBF)
        html += jsPsych.pluginAPI.getPopupHTML('window-blur', popup_text_browser);
        html += jsPsych.pluginAPI.getPopupHTML('translator-detected', popup_text_translator);

        //popup of timer module
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

        // function to handle mouse hovering UI elements
        var after_mousemove = function (info) {
            // console.log(info.target)
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

        // save timestamp on input click
        $('input[type=radio]').on('click touchstart', function (event) {
            if (event.type === 'click' || event.type === 'touchstart') {
                var isSuccess = timerModule ? timerModule.check() : true;
                // console.log('success?', isSuccess, trial.checkbox_appearance)
                var time_stamp_key;

                if (isSuccess) {
                    if (trial.checkbox_appearance === 'circle') {
                        // console.log($(this).parent().find('.jspsych-survey-highlight'))
                        $(this).parent().parent().find('.jspsych-survey-highlight').removeClass('bg-primary');
                        $(this).parent().find('label').addClass('bg-primary');
                    }

                    time_stamp_key = $(this).data('time-stamp');

                    if (time_stamp_key) {
                        trial.time_stamp[time_stamp_key] = jsPsych.totalTime();
                    }
                }

                return isSuccess
            }
        });

        $('input[type=radio]').on('input', function (event) {
            console.log('input!', event.target.value)
        });

        function proccessDataBeforeSubmit(validate = false) {
            // create object to hold responses
            var question_data = {};
            var timestamp_data = {};

            validate = validate && trial.force_answer

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
                'stage_name': JSON.stringify(plugin.info.name),
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
            console.log('sub')
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
                text: [trial.preamble]
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
            ignored_tags: ['p']
        });
    };

    return plugin;
})();