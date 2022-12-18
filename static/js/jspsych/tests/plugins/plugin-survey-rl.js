const root = '../../';
const utils = require('../testing-utils.js');
window.$ = require('../../../../lib/jquery-min');


beforeEach(() => {
	window.loop_node_counter_rl = 0,
	window.left_tilt = 37;
	window.right_tilt = 39;
	window.shake_right_rotate = 15;
	window.shake_right_translateX = 15;
	window.shake_left_rotate = -15;
	window.shake_left_translateX = -15;
	window.shake_return_time = 300;
	window.shake_transition = 0.05;
	window.counter_balancing = [{
		game_version: 'A',
        left: 'MM',
        right: 'BBQ',
        video: 0,
        converted_details: "MM"
	}];
	window.DEGRAD_PATTERN = {
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
	}
	
});


beforeEach(() => {
	require(root + 'jspsych.js');
	require(root + 'parameters');
	require(root + 'plugins/jspsych-learning-rl/jspsych-learning-rl.js');

});

jest.useFakeTimers();

describe('rl-learning-plugin', () => {



	test('plugin loads correctly', () => {
		expect(typeof window.jsPsych.plugins['survey-rl']).not.toBe('undefined');
	});

	test('default parameters work correctly', () => {

		var rl_a = {
			type: 'survey-rl',
			stage_name: 'instrumental conditioning',
			variables: {
				RL_INTERVAL_NUM: 2,
				RL_INTERVAL_DURATION: 2000,
				RL_OUTCOME_DURATION: 1000,
				RL_PROB_VALUE: [1],
				RL_DEGRAD_PATTERN: ['d1'],
			}
		}

		jsPsych.init({
			timeline: [rl_a]
		});

		expect(jsPsych.getDisplayElement().innerHTML).toMatch('<div id=\"jspsych-stimulus\"><img class=\"vending-machine\" src=\"/static/images/vending_machine.svg/\"><div class=\"outcome-container\"></div></div>');		
	});


	test('key press works correctly', () => {

		var rl_a = {
			type: 'survey-rl',
			stage_name: 'instrumental conditioning',
			variables: {
				RL_INTERVAL_NUM: 2,
				RL_INTERVAL_DURATION: 2000,
				RL_OUTCOME_DURATION: 1000,
				RL_PROB_VALUE: [1],
				RL_DEGRAD_PATTERN: ['d1'],
			}
		}

		jsPsych.init({
			timeline: [rl_a]
		});

		utils.pressKey(37);
		jest.runTimersToTime(2000);
		expect(jsPsych.getDisplayElement().innerHTML).toMatch('<div id="jspsych-stimulus"><img class="vending-machine" src="/static/images/vending_machine.svg/" style="transform: rotate(0deg) translateX(0%); transition: all 0.05s cubic-bezier(0.65, 0.05, 0.36, 1);"><div class="outcome-container"><img class="outcome" src="/static/images/MM.png"></div></div>');
		
		jest.runTimersToTime(1000);
		utils.pressKey(39);
		jest.runTimersToTime(2000);
		expect(jsPsych.getDisplayElement().innerHTML).toMatch('<div id="jspsych-stimulus"><img class="vending-machine" src="/static/images/vending_machine.svg/" style="transform: rotate(0deg) translateX(0%); transition: all 0.05s cubic-bezier(0.65, 0.05, 0.36, 1);"><div class="outcome-container"><img class="outcome" src="/static/images/BBQ.png"></div></div>');
	});


}) 