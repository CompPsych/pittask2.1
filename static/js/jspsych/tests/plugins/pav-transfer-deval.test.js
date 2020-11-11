const root = '../../';
window.$ = require('../../../../lib/jquery-min');

jest.useFakeTimers();

beforeEach(() => {
    require(root + 'jspsych.js');
    require(root + 'plugins/jspsych-transfer-test.js');
});

describe('pav-multi-choice', function(){

    test('plugin loads correctly', () => {
        expect(typeof window.jsPsych.plugins['transfer-test']).not.toBe('undefined');
    });

    test('vending machine image loads correctly', () => {
        var trial = {
            stage_name: 'deval_test',
            type: 'transfer-test',
            stimulus: 'vending machine',
            trial_duration: 2000,
            sequence_reps: 1
		}

		jsPsych.init({
			timeline: [trial]
        });

        expect(jsPsych.getDisplayElement().querySelector('.vending-machine')).toBeTruthy();
        
    });


    test('deval test duration', function(){
		var trial = {
            stage_name: 'deval_test',
            type: 'transfer-test',
            stimulus: 'vending machine',
            trial_duration: 2000,
            sequence_reps: 1
		}

		jsPsych.init({
			timeline: [trial]
		});

        jest.runTimersToTime(2000);
        expect(jsPsych.getDisplayElement().innerHTML).toBe('');
	});
});