const root = '../../';

beforeEach(() => {
    require(root + 'jspsych.js');
    require(root + 'plugins/jspsych-pav-multi-choice.js');
});

describe('pav-multi-choice', function(){
    test('plugin loads correctly', () => {
        expect(typeof window.jsPsych.plugins['survey-pav-multi-choice']).not.toBe('undefined');
    });
});