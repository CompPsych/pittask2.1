jsPsych.plugins['GAD-7'] = (function() {
    var plugin = {};
  
    plugin.info = {
      name: 'GAD-7',
      stage_name: 'GAD-7',
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
    plugin.trial = function(display_element, trial) {
      var plugin_id_name = "jspsych-survey-multi-choice-GAD-7";
  
      var html = "";

      // store response
      var response = {
        trial_events: []
      };

      response.trial_events.push({
        "event_type": trial.event_type,
        "event_raw_details": trial.event_raw_details,
        "event_converted_details": trial.event_converted_details,
        "timestamp": jsPsych.totalTime()
      });

      $('body').prepend(
        `<header>
            <nav class="navbar navbar-inverse navbar-fixed-top">
              <div class="container-fluid">
                <div class="navbar-header">
                <p class="navbar-text">${plugin.info.name}</p>
                </div>
              </div>
            </nav>
      </header>`);
  
      // inject CSS for trial
      html += '<style id="jspsych-survey-multi-choice-css">';
      html += ".jspsych-survey-multi-choice-question { display: flex; text-align: left; }"+
        ".jspsych-survey-multi-choice-text span.required {color: darkred;}"+
        ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-text {  text-align: center;}"+
        ".jspsych-survey-multi-choice-option { line-height: 2; }"+
        ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option {  display: inline-block;  margin-left: 1em;  margin-right: 1em;  vertical-align: top;}"+
        ".jspsych-survey-multi-choice-content { outline: 1px solid #fff; padding: 1rem;}" +
        ".jspsych-survey-highlight { cursor: pointer; width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center; }" +
        ".jspsych-survey-multi-choice-form { max-width: 1000px }" +
        ".jspsych-btn { margin: 100px 0; }" +
        ".jspsych-content { margin-top: 130px;}" +
        "ul {list-style: none}" +
        ".jspsych-survey-multi-choice-preamble { display: flex; justify-content: space-between }" +
        ".jspsych-survey-multi-choice-preamble div { width: 40%; text-align: left; padding: 2rem 0; }" +
        ".jspsych-survey-multi-choice-preamble ul { display: flex; width: 50%; justify-content: space-around; padding-inline-start: 0; }" +
        ".jspsych-survey-multi-choice-preamble li { width: 100px; display: flex; align-items: center; }" +
        "label.jspsych-survey-multi-choice-text input[type='radio'] {margin-right: 1em;}" +
        ".jspsych-survey-highlight { width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center; }"
      html += '</style>';
  

      // form element
      html += '<div id="' + plugin_id_name + '">'
      html += '<form id="jspsych-survey-multi-choice-form" class="jspsych-survey-multi-choice-form">';
      
      // show preamble text
 
      html += 
      `<div class="jspsych-survey-multi-choice-content">
        <div id="jspsych-survey-multi-choice-preamble" class="jspsych-survey-multi-choice-preamble">
          <div>Over the <u>last 2 weeks</u>, how often have you been bothered by the following problems?</div>
          <ul>
            <li>Not at all</li>
            <li>Several days</li>
            <li>More than half the days</li>
            <li>Nearly every day</li>
          </ul>
      </div>`

  
      // generate question order. this is randomized here as opposed to randomizing the order of trial.questions
      // so that the data are always associated with the same question regardless of order
      var question_order = [];
      for(var i=0; i<trial.questions.length; i++){
        question_order.push(i);
      }
      if(trial.randomize_question_order){
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
  
        html += '<div id="jspsych-survey-multi-choice-'+question_id+'" class="'+question_classes.join(' ')+'"  data-name="'+question.name+'">';
  
        // add question text
        html += '<div style="width: 50%;"><p class="jspsych-survey-multi-choice-question survey-multi-choice" style="padding-top: 3px; text-align: left;">' + (i+1) + '. ' + question.prompt 
        // question.required
        html += '</p></div>';
        html += '<div style="display: flex; width: 50%; justify-content: space-around;">';
  
        // create option radio buttons
        for (var j = 0; j < question.options.length; j++) {
          // add label and question text
          var option_id_name = "jspsych-survey-multi-choice-option-"+question_id+"-"+j;
          var input_name = 'jspsych-survey-multi-choice-response-'+question_id;
          var input_id = 'jspsych-survey-multi-choice-response-'+question_id+'-'+j;
  
          var required_attr = question.required ? 'required' : '';
  
          // add radio button container
          html += '<div id="'+option_id_name+'" class="jspsych-survey-multi-choice-option">';
          html += '<label class="jspsych-survey-multi-choice-text jspsych-survey-highlight" for="'+input_id+'">' +question.options[j]+'</label>';
          html += '<input hidden type="radio" name="'+input_name+'" id="'+input_id+'" value="'+question.options[j]+'" '+required_attr+'></input>';
          html += '</div>';
        }
  
        html += '</div></div>';
      }
      
      html += '</div>';

      var checkbox_order = [];
      for(var i=0; i<trial.checkboxes.length; i++){
        checkbox_order.push(i);
      }

      for (var i = 0; i < trial.checkboxes.length; i++) {

        var checkbox = trial.checkboxes[checkbox_order[i]];
        var checkbox_id = checkbox_order[i];

        html += '<div id="jspsych-survey-multi-choice-checkbox"   data-name="'+checkbox.name+'">';
  
        // add question text
        html += '<p class="jspsych-survey-multi-choice-text survey-multi-choice" style="padding: 2rem 0; text-align: left">' + checkbox.prompt + '</p>'

        html += '<div style="display: flex; justify-content: space-around; height: 150px; align-items: baseline;">';
  

        for (var j = 0; j < checkbox.options.length; j++) {
          // add label and question text
          var checkbox_id_name = "jspsych-survey-multi-choice-option-"+checkbox_id+"-"+j;
          var input_name = 'jspsych-survey-multi-choice-response-checkbox-'+checkbox_id;
          var input_id = 'jspsych-survey-multi-choice-response-checkbox-'+checkbox_id+'-'+j;
  
          var required_attr = checkbox.required ? 'required' : '';
  
          // add radio button container
          html += '<div id="'+checkbox_id_name+'" class="jspsych-survey-multi-choice-option" style="width: 116px">';
          html += '<label class="jspsych-survey-multi-choice-text" for="'+input_id+'">' +checkbox.options[j]+'</label>';
          html += '<input ddd type="radio" name="'+input_name+'" class="form-radio" id="'+input_id+'" value="'+checkbox.options[j]+'" '+required_attr+'></input>';
          html += '</div>';
        }
        html += '</div>'
      }
 
      // add submit button
      html += '<p><input type="submit" id="'+plugin_id_name+'-next" class="'+plugin_id_name+' jspsych-btn"' + (trial.button_label ? ' value="'+trial.button_label + '"': '') + '></input></p>';
      

      html += '</form>';

      html +=
      `<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
          <div class="modal__overlay" tabindex="-1" data-micromodal-close>
            <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
              <header class="modal__header">
                <h2 class="modal__title" id="modal-1-title">
                  Warning!
                </h2>
                <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
              </header>
              <main class="modal__content" id="modal-1-content">
                <p>
                ${survey.modal}
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

      // function to handle key press responses
      var after_response = function (info) {

        if (info.key_release === undefined) {
          response.trial_events.push({
            "event_type": "key press",
            "event_raw_details": info.key,
            "event_converted_details": jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key) + ' key pressed',
            "timestamp": jsPsych.totalTime()
          });
        } else {
          response.trial_events.push({
            "event_type": "key release",
            "event_raw_details": info.key_release,
            "event_converted_details": jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key_release) + ' key released',
            "timestamp": jsPsych.totalTime()
          });
        }
      }

      $('.jspsych-survey-highlight').click(function() {
          $(this).next('input').prop("checked", true);
          $(this).parent().parent().find('.jspsych-survey-highlight').removeClass('bg-primary');
          $(this).addClass('bg-primary');
          $(this).closest('input').click();
      })
  
      document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        // measure response time
        var endTime = performance.now();
        var response_time = endTime - startTime;
  
        // create object to hold responses
        var question_data = {};
        for(var i=0; i<trial.questions.length; i++){
          var match = display_element.querySelector('#jspsych-survey-multi-choice-'+i);
          var id = i + 1;
        
          if(match.querySelector("input[type=radio]:checked") !== null){
            var val = match.querySelector("input[type=radio]:checked").value;
            $(match).find('.jspsych-survey-multi-choice-question').removeClass('survey-error-after');
          } else {
            var val = "";
            $(match).find('.jspsych-survey-multi-choice-question').addClass('survey-error-after');
          }
          var obje = {};
          var name = id;
          if(match.attributes['data-name'].value !== ''){
            name = match.attributes['data-name'].value;
          }
          obje[name] = val;
          Object.assign(question_data, obje);
        }

        (function () {
            var match = display_element.querySelector('#jspsych-survey-multi-choice-checkbox');
            var id = "last";

            if(match.querySelector("input[type=radio]:checked") !== null){
              var val = match.querySelector("input[type=radio]:checked").value;
            } else {
              var val = "NA";
            }

            var name = id;
            obje[name] = val;
            Object.assign(question_data, obje);
        }());


        if ($(".survey-error-after").length < 1) {
          // kill keyboard listeners
          if (typeof keyboardListener !== 'undefined') {
            jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
            jsPsych.pluginAPI.cancelClickResponse(clickListener);
          }
  
          // save data
          var trial_data = {
            "stage_name": JSON.stringify(plugin.info.stage_name),
            "responses": JSON.stringify(question_data),
            "question_order": JSON.stringify(question_order),
            "events": JSON.stringify(response.trial_events)
          };
  
          display_element.innerHTML = '';
          $('.navbar').remove();
  
          // next trial
          jsPsych.finishTrial(trial_data);
        } else {
          MicroModal.show('modal-1');
        }
      });
  
      var startTime = performance.now();

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