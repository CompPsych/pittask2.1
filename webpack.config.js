const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
		// "./static/js/jspsych/plugins/jspsych-key-testing.js",
		// "./static/js/jspsych/plugins/jspsych-learning-rl/jspsych-learning-rl.js",
		// "./static/js/jspsych/plugins/jspsych-learning-rl/jspsych-rl-questions-left.js",
		// "./static/js/jspsych/plugins/jspsych-learning-rl/jspsych-rl-questions-right.js",
        // "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-ASRM.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-GAD-7.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-ISI.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-PID-5-BF.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-PHQ-9.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-PTSD.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-RAADS.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-PRIME-R.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-OCI-R.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-EAT-26.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-LSAS.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-MOVES.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-DEMOGRAPHICS.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-ASRS-5.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-YIAT.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-DASS-21.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-AUDIT.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-SMOKING-STATUS.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-FTND.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-PGSI.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-SDS.js",
		// "./static/js/jspsych/plugins/jspsych-survey-questionnaire/jspsych-ICAR.js",
		// "./static/js/jspsych/plugins/jspsych-food-hunger-questions.js",
		// "./static/js/jspsych/plugins/jspsych-transfer-test.js",
		// "./static/js/jspsych/plugins/jspsych-pav-condition.js",
		// "./static/js/jspsych/plugins/jspsych-deval-video.js",
		// "./static/js/jspsych/plugins/jspsych-survey-multi-choice.js",
		// "./static/js/jspsych/plugins/jspsych-close-hit.js",
		// "./static/js/jspsych/plugins/jspsych-html-keyboard-response.js",
		// "./static/js/jspsych/plugins/jspsych-survey-text.js",
		"./static/js/utils.js"
	],
	module: {
		rules: [
			{
			  // You can use `regexp`
			  // test: /example\.js/$
			//   test: require.resolve('bowser'),
			  use: [
				{
				  loader: 'imports-loader',
				  options: {
					imports: [
					  'namespace device-detector-js detect'
					],
				  },
				},
			  ],
			}
		],
	},
    output: {
        filename: 'main.js',
		path: path.resolve(__dirname, './static/dist'),
	},
};