var DEMOGRAPHICS_STAGE = {
    type: 'Demographics',
    preamble:
        '<p>We would like to ask you a few questions about your personal information to better understand our study ' +
        'population. All your responses will be confidential.</p>'
    ,
    questions: [
        {
            prompt: 'Gender',
            name: 'Gender',
            options: ['Male', 'Female', 'Other'],
            horizontal: true
        }, {
            prompt: 'Age',
            name: 'Age',
            options: ['Years'],
            horizontal: true
        }, {
            prompt: 'Height',
            name: 'Height',
            options: ['cm', 'inches'],
            horizontal: true
        }, {
            prompt: 'Weight',
            name: 'Weight',
            options: ['kg', 'pounds'],
            horizontal: true
        }, {
            prompt: 'Education level',
            name: 'Education level',
            options: ['Primary', 'Secondary', 'Associate or vocational education', 'Bachelor', 'Masters or above'],
            horizontal: true
        }, {
            prompt: 'Marital status',
            name: 'Marital status',
            options: ['Married', 'Separated', 'Divorced', 'Widowed', 'Never married'],
            horizontal: true
        }, {
            prompt: 'Employment status',
            name: 'Employment status',
            options: ['Employed (full-time)', 'Employed (part-time)', 'Self-employed', 'Student', 'Unemployed', 'Retired'],
            horizontal: true
        }, {
            prompt: 'Gross annual household income (US dollars)',
            name: 'Gross annual household income (US dollars)',
            options: ['< $15,000', '$15,000 - $24,999', '$25,000 - $74,999', '> $75,000'],
            horizontal: true
        }, {
            prompt: 'English language',
            name: 'English language',
            options: ['Fluent', 'Not fluent'],
            horizontal: true,
            direction: 'row'
        }

    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "Demographics, options",
    event_converted_details: 'Demographics questions appears'
}

var OCIR = {
    type: 'OCI-R',
    preamble:
        '<p>The following statements refer to experiences that many people have in their everyday lives. Select ' +
        'the number that best describes <b>HOW MUCH</b> that experience has <b>DISTRESSED</b> or <b>BOTHERED</b> ' +
        'you during the <b>PAST MONTH</b>.</p>',
    questions: [
        {
            prompt: "I have saved up so many things that they get in the way.",
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: "I check things more often than necessary.",
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I get upset if objects are not arranged properly.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I feel compelled to count while I am doing things.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I find it difficult to touch an object when I know it has been touched by strangers or certain people.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I find it difficult to control my own thoughts.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I collect things I don’t need.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I repeatedly check doors, windows, drawers, etc.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I get upset if others change the way I have arranged things.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I feel I have to repeat certain numbers.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I sometimes have to wash or clean myself simply because I feel contaminated.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I am upset by unpleasant thoughts that come into my mind against my will.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I avoid throwing things away because I am afraid I might need them later.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I repeatedly check gas and water taps and light switches after turning them off.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I need things to be arranged in a particular way.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I feel that there are good and bad numbers.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I wash my hands more often and longer than necessary.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }, {
            prompt: 'I frequently get nasty thoughts and have difficulty in getting rid of them.',
            options: [0, 1, 2, 3, 4],
            horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "OCI-R, options",
    event_converted_details: 'OCI-R questions appears'
}

var ASRM = {
    type: 'ASRM',
    preamble:
        '<div class="preamble-wrapper"><p> On this questionnaire are groups of five statements; read each group of statements carefully.</p></div>' +
        '<div class="preamble-wrapper"><p> Choose the one statement in each group that best describes the way you have been feeling for the past week. </p></div>' +
        '<div class="preamble-wrapper"><p> Click on the number next to the statement you picked.</p></div>' +
        '<div class="preamble-wrapper"><p> Please note: The word “occasionally” when used here means once or twice; “often” means several ' +
        'times or more; “frequently” means most of the time.</p></div>',
    questions: [
        {
            prompt: '',
            options: [
                'I do not feel happier or more cheerful than usual.',
                'I occasionally feel happier or more cheerful than usual.',
                'I often feel happier or more cheerful than usual.',
                'I feel happier or more cheerful than usual most of the time.',
                'I feel happier or more cheerful than usual all of the time. '
            ],
            horizontal: false
        }, {
            prompt: '',
            options: [
                'I do not feel more self-confident than usual.',
                'I occasionally feel more self-confident than usual.',
                'I often feel more self-confident than usual.',
                'I feel self-confident than usual most of the time.',
                'I feel extremely self-confident all of the time.'
            ],
            horizontal: false
        }, {
            prompt: '',
            options: [
                'I do not need less sleep than usual.',
                'I occasionally need less sleep than usual.',
                'I often need less sleep than usual.',
                'I frequently need less sleep than usual.',
                'I can go all day and night without any sleep and still not feel tired.'
            ],
            horizontal: false
        }, {
            prompt: '',
            options: [
                'I do not talk more than usual.',
                'I occasionally talk more than usual.',
                'I often talk more than usual.',
                'I frequently talk more than usual.',
                'I talk constantly and cannot be interrupted.'
            ],
            horizontal: false
        }, {
            prompt: '',
            options: [
                'I have not been more active (either socially, sexually, at work, home, or school) than usual.',
                'I have occasionally been more active than usual.',
                'I have often been more active than usual.',
                'I have frequently been more active than usual.',
                'I am constantly active or on the go all the time.'
            ],
            horizontal: false
        }

    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "ASRM, options",
    event_converted_details: 'ASRM questions appears'

}

var GAD7 = {
    type: 'GAD-7',
    preamble: 'Over the <u>last 2 weeks</u>, how often have you been bothered by the following problems?',
    checkboxes: [
        {
            prompt: 'If you checked off <u>any</u> problems, how <u>difficult</u> have these problems made it for you to do your work, take care of things at home, or get along with other people?',
            options: [
                'Not difficult at all', 'Somewhat difficult', 'Very difficult', 'Extremely difficult'
            ]
        }
    ],
    questions: [
        {
            prompt: 'Feeling nervous, anxious or on edge.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Not being able to stop or control worrying.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Worrying too much about different things.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Trouble relaxing.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Being so restless that it is hard to sit still.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Becoming easily annoyed or irritable.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Feeling afraid as if something awful might happen.',
            options: [0, 1, 2, 3],
            horizontal: true
        },

    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "GAD-7, options",
    event_converted_details: 'GAD-7 questions appears'
}

var ISI = {
    type: 'ISI',
    preamble: 'We would like to ask you about your quality of your current sleep (that is, last 2 weeks). Please answer the following questions.',
    questions: [
        {
            prompt: 'Please rate the current <b>SEVERITY</b> of your insomnia problem(s).',
            options: [
                {
                    prompt: 'Difficulty falling asleep:',
                    options: [0, 1, 2, 3, 4],
                },
                {
                    prompt: 'Difficulty staying asleep:',
                    options: [0, 1, 2, 3, 4],
                },
                {
                    prompt: 'Problem waking too early:',
                    options: [0, 1, 2, 3, 4],
                }
            ],
            horizontal: true,
            title: ['None', 'Mild', 'Moderate', 'Severe', 'Very']
        }, {
            prompt: 'How <b>SATISFIED</b>/dissatisfied are you with your current sleep pattern?',
            options: [0, 1, 2, 3, 4],
            horizontal: true,
            title: ['Very satisfied', 'A little satisfied', 'Somewhat', 'A little dissatisfied', 'Very dissatisfied']
        }, {
            prompt: 'To what extent do you consider your sleep problem to <b>INTERFERE</b> with your daily functioning (e.g. daytime fatigue, ability to function at work/daily chores, concentration, memory, mood, etc.).',
            options: [0, 1, 2, 3, 4],
            horizontal: true,
            title: ['Not at all interfering', 'A little ', 'Somewhat', 'Much', 'Very much interfering']
        }, {
            prompt: 'How <b>NOTICEABLE</b> to others do you think your sleeping problem is in terms of impairing the quality of your life?',
            options: [0, 1, 2, 3, 4],
            horizontal: true,
            title: ['Not at all noticeable', 'Barely', 'Somewhat', 'Much', 'Very much noticeable']
        }, {
            prompt: 'How <b>WORRIED</b>/distressed are you about your current sleep problem?',
            options: [0, 1, 2, 3, 4],
            horizontal: true,
            title: ['Not at all', 'A little ', 'Somewhat', 'Much', 'Very much']
        },

    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "ISI, options",
    event_converted_details: 'ISI questions appears'
};

var EAT26 = {
    type: 'EAT-26',
    preamble:
        '<p>Please fill out the form below as accurately, honestly and completely as possible. There are no right or wrong answers. All of your responses are confidential.</p>',
    questions: [
        {
            prompt: 'Am terrified about being overweight.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Avoid eating when I’m hungry.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Find myself preoccupied with food.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Have gone on eating binges where I feel that I may not be able to stop.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Cut my food into small pieces.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Aware of the calorie content of foods that I eat.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Particularly avoid food with a high carbohydrate content (i.e. bread, rice, potatoes, etc.)',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Feel that others would prefer if I ate more.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Vomit after I have eaten.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Feel extremely guilty after eating.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Am preoccupied with a desire to be thinner.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Think about burning up calories when I exercise.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Other people think that I am too thin.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Am preoccupied with the thought of having fat on my body.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Take longer than others to eat my meals.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Avoid foods with sugar in them.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Eat diet foods.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Feel that food controls my life.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Display self-control around food.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Feel that others pressure me to eat.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Give too much time and thought to food.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Feel uncomfortable after eating sweets.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Engage in dieting behaviour.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Like my stomach to be empty.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Have the impulse to vomit after meals.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Enjoy trying new rich foods.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        },


        {
            prompt: 'Gone on eating where you feel that you may not be able to stop?',
            options: ['Never', 'Once a month or less', '2-3 times a month', 'Once a week', '2-6 times a week', 'Once a day or more'],
            horizontal: true
        },
        {
            prompt: 'Ever made yourself sick (vomited) to control your weight or shape?',
            options: ['Never', 'Once a month or less', '2-3 times a month', 'Once a week', '2-6 times a week', 'Once a day or more'],
            horizontal: true
        },
        {
            prompt: 'Ever used laxatives, diet pills or diuretics (water pills) to control your weight or shape?',
            options: ['Never', 'Once a month or less', '2-3 times a month', 'Once a week', '2-6 times a week', 'Once a day or more'],
            horizontal: true
        },
        {
            prompt: 'Exercised more than 60 minutes a day to lose or to control your weight?',
            options: ['Never', 'Once a month or less', '2-3 times a month', 'Once a week', '2-6 times a week', 'Once a day or more'],
            horizontal: true
        },
        {
            prompt: 'Lost 20 pounds or more in the past 6 months',
            options: ['Yes', 'No'],
            horizontal: true
        },

    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "EAT-26, options",
    event_converted_details: 'EAT-26 questions appears'
};


var PID = {
    type: 'PID-5-BF',
    title: [
        'Very False or Often False',
        'Sometimes or Somewhat False',
        'Sometimes or Somewhat True',
        'Very True or Often True'
    ],
    preamble:
        '<p>This is a list of things different people might say about themselves. We are interested in how ' +
        'you would describe yourself. There are no right or wrong answers. So you can describe yourself as honestly ' +
        'as possible, we will keep your responses confidential. We’d like you to take your time and read each ' +
        'statement carefully, selecting the response that best describes you.</p>',
    questions: [
        {
            prompt: 'People would describe me as reckless.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I feel like I act totally on impulse.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Even though I know better, I can’t stop making rash decisions.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I often feel like nothing I do really matters.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Others see me as irresponsible.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I’m not good at planning ahead.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'My thoughts often don’t make sense to others.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I worry about almost everything.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I get emotional easily, often for very little reason.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I fear being alone in life more than anything else.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I get stuck on one way of doing things, even when it’s clear it won’t work.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I have seen things that weren’t really there.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I steer clear of romantic relationships.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I’m not interested in making friends.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I get irritated easily by all sorts of things.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I don’t like to get too close to people.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'It’s no big deal if I hurt other peoples feelings.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I rarely get enthusiastic about anything.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I crave attention.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I often have to deal with people who are less important than me.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I often have thoughts that make sense to me but that other people say are strange.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I use people to get what I want.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I often “zone out” and then suddenly come to and realize that a lot of time has passed.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Things around me often feel unreal, or more real than usual.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'It is easy for me to take advantage of others.',
            options: [0, 1, 2, 3],
            horizontal: true
        },
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "PC-PTSD-5, options",
    event_converted_details: 'PC-PTSD-5 questions appears'
};

var PHQ9 = {
    type: 'PHQ-9',
    preamble:
        '<p>Over the <b>last 2 weeks</b>, how often have you been bothered by any of the following problems?</p>',
    questions: [
        {
            prompt: 'Little interest or pleasure in doing things.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Feeling down, depressed, or hopeless.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Trouble falling or staying asleep, or sleeping too much.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Feeling tired or having little energy.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Poor appetite or overeating.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Feeling bad about yourself—or that you are a failure or have let yourself or your family down.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Trouble concentrating on things, such as reading the newspaper or watching television.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Thoughts that you would be better off dead or of hurting yourself in some way.',
            options: [0, 1, 2, 3],
            horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "PHQ-9, options",
    event_converted_details: 'PHQ-9 questions appears'
}

var PTSD = {
    type: 'PC-PTSD-5',
    questions: [
        {
            prompt:
                'Sometimes things happen to people that are unusually or especially frightening, horrible, or traumatic. For example:' +
                '<ul>' +
                '<li>a serious accident or fire</li>' +
                '<li>a physical or sexual assault or abuse</li>' +
                '<li>an earthquake or flood</li>' +
                '<li>a war</li>' +
                '<li>seeing someone be killed or seriously injured</li>' +
                '<li>having a loved one die through homicide or suicide</li>' +
                '</ul>' +
                '<p>Have you ever experienced this kind of event?</p>',
            options: ['YES', 'NO'],
            horizontal: true
        }, {
            prompt: 'Had nightmares about the event(s) or thought about the event(s) when you did not want to?',
            options: ['YES', 'NO'],
            horizontal: true
        }, {
            prompt: 'Tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?',
            options: ['YES', 'NO'],
            horizontal: true
        }, {
            prompt: 'Been constantly on guard, watchful, or easily startled?',
            options: ['YES', 'NO'],
            horizontal: true
        }, {
            prompt: 'Felt numb or detached from people, activities, or your surroundings?',
            options: ['YES', 'NO'],
            horizontal: true
        }, {
            prompt: 'Felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?',
            options: ['YES', 'NO'],
            horizontal: true
        },
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "PTSD, options",
    event_converted_details: 'PTSD questions appears'
}

var RAADS = {
    type: 'RAADS-14',
    preamble: '<p>Please answer the following questions according to life experiences and personality characteristics that are true to you.</p>',
    questions: [
        {
            prompt: 'It is difficult for me to understand how other people are feeling when we are talking.',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'Some ordinary textures that do not bother others feel very offensive when they touch my skin.',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'It is very difficult for me to work and function in groups.',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'It is difficult to figure out what other people expect of me.',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: ' I often don’t know how to act in social situations.',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'I can chat and make small talk with people.',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'When I feel overwhelmed by my senses, I have to isolate myself to shut them down.',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'How to make friends and socialize is a mystery to me.',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: ' When talking to someone, I have a hard time telling when it is my turn to talk or to listen.',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: ' Sometimes I have to cover my ears to block out painful noises (like vacuum cleaners or people talking too much or too loudly).',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'It can be very hard to read someone’s face, hand, and body movements when we are talking.',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: ' I focus on details rather than the overall idea.',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'I take things too literally, so I often miss what people are trying to say.',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'I get extremely upset when the way I like to do things is suddenly changed.',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }

    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "RAADS-14, options",
    event_converted_details: 'RAADS-14 questions appears'
}

var PRIME_R = {
    type: 'PRIME-R',
    preamble: 'Thinking about the past 12 months, please answer the following questions.',
    title: [
        'Definitely disagree',
        'Somewhat disagree',
        'Slightly disagree',
        'Not sure',
        'Slightly agree',
        'Somewhat agree',
        'Definitely agree',
    ],
    questions: [
        {
            prompt: 'I think that I have felt that there are odd or unusual things going on that I can’t explain.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        }, {
            prompt: 'I think that I might be able to predict the future.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        }, {
            prompt: 'I may have felt that there could possibly be something interrupting or controlling my thoughts, feelings, or actions.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        }, {
            prompt: 'I have had the experience of doing something differently because of superstitions.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        }, {
            prompt: 'I think that I may get confused at times whether something I experience or perceive may be real or may be just part of my imagination or dreams.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        }, {
            prompt: 'I have thought that it might be possible that other people can read my mind, or that I can read others’ minds.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        }, {
            prompt: 'I wonder if people may be planning to hurt me or even may be about to hurt me.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        }, {
            prompt: 'I believe that I have special natural or supernatural gifts beyond my talents and natural strengths.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        }, {
            prompt: 'I think I might feel like my mind is “playing tricks” on me.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        }, {
            prompt: 'I have had the experience of hearing faint or clear sounds of people or a person mumbling or talking when there is no one near me.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        }, {
            prompt: 'I think that I may hear my own thoughts being said out loud.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        }, {
            prompt: 'I have been concerned that I might be “going crazy”.',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        },
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "PRIME-R, options",
    event_converted_details: 'PRIME-R questions appears'
}


var LSAS = {
    type: 'LSAS',
    preamble:
        '<ul>' +
        '<li>This measure assesses the way that social phobia plays a role in your life across a variety of situations.</li>' +
        '<li>Read each situation carefully and answer two questions about that situation. The first question asks how anxious or fearful you feel in the situation. The second question asks how often you avoid the situation.</li>' +
        '<li>If you come across a situation that you ordinarily do not experience, we ask that you imagine ‘what if you were faced with that situation’, and then rate the degree to which you would fear this hypothetical situation and how often you would tend to avoid it.</li>' +
        '<li>Please base your ratings on the way that the situations have affected you in the last week.</li>' +
        '</ul>',
    questions: [
        {
            prompt: '<b>Telephoning in public</b> – speaking on the phone in a public place.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Participating in small groups</b> – having a discussion with a few others.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Eating in public places</b> – do you tremble or feel awkward handling food.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Drinking with others in public places</b> – refers to any beverage including alcohol.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Talking to people in authority</b> – for example, a boss or teacher.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Acting, performing or giving a talk in front of an audience</b> – refers to a large audience.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Going to a party</b> – an average party to which you may be invited; assume you know some but not all people at the party.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Working while being observed</b> – any type of work you might do including school work or housework.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Writing while being observed</b> – for example, signing a check in a bank.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Calling someone you don’t know very well</b>.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Talking with people you don’t know very well</b>.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Meeting strangers</b> – assume others are of average importance to you.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Urinating in a public bathroom</b> – assume that others are sometimes present, as might normally be expected.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Entering a room when others are already seated</b> – refers to a small group, and nobody has to move seats for you.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Being the center of attention</b> – telling a story to a group of people.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Speaking up at a meeting</b> – speaking from your seat in a small meeting or standing up in a place in large meeting.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Taking a written test</b>.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Expressing appropriate disagreement or disapproval to people you don’t know very well</b>.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Looking at people you don’t know very well in the eyes</b> – refers to appropriate eye contact.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Giving a report to a group</b> – refers to an oral report to a small group.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Trying to pick up someone</b> – refers to a single person attempting to initiate a relationship with a stranger.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Returning goods to a store where returns are normally accepted</b>.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Giving a party</b>.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Resisting a high pressure salesperson</b> – avoidance refers to listening to the salesperson for too long.',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }

    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "LSAS, options",
    event_converted_details: 'LSAS questions appears'
}



var MOVES = {
    type: 'WBF-checkbox',
    name: 'MOVES',
    preamble: 'Answer the questions below for the past 2 weeks.',
    title: [
        'Never',
        'Sometimes',
        'Often',
        'Always'
    ],
    questions: [
        {
            prompt: 'I make noises (like grunts) that I can\'t stop.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Parts of my body jerk again and again, that I can\'t control.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I have bad ideas over and over, that I can\'t stop.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I have to do things in certain order or certain ways (like touching things).',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Words come out that I can\'t stop or control.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'At times I have the same jerk or twitch over and over.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Certain bad words or thoughts keep going through my mind.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I have to do exactly the opposite of what I\'m told.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'The same unpleasant or silly thought or picture goes through my mind.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I can\'t control all my movements.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I have to do several movements over and over again, in the same order.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Bad or swear words come out that I don\'t mean to say.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I feel pressure to talk, shout, or scream.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I have ideas that bother me (like germs or like cutting myself).',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I do certain things (like jumping or clapping) over and over.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I have habits or movements that come out more when I\'m nervous.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I have to repeat things that I hear other people say.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I have to do things I see other people do.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I have to make bad gestures (like the finger).',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I have to repeat words or phrases over and over.',
            options: [0, 1, 2, 3],
            horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "MOVES, options",
    event_converted_details: 'MOVES questions appears'
}

var ASRS5 = {
    type: 'ASRS-5',
    title: [
        'Never',
        'Rarely',
        'Sometimes',
        'Often',
        'Very often'
    ],
    preamble: 'Check the box that best describes how you have felt and conducted yourself over the past 6 months.',
    questions: [
        {
            prompt: 'How often do you have difficulty concentrating on what people are saying to you even when they are speaking to you directly?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you leave your seat in meetings or other situations in which you are expected to remain seated?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you have difficulty unwinding and relaxing when you have time to yourself?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to before they can finish them themselves?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you put things off until the last minute?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you depend on others to keep your life in order and attend to details?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "ASRS-5, options",
    event_converted_details: 'ASRS-5 questions appears'
}

var YIAT = {
    type: 'YIAT',
    preamble: 'We would like to ask you about your internet use, please answer the following questions.',
    title: [
        'Never',
        'Rarely',
        'Sometimes',
        'Often',
        'Very often'
    ],
    questions: [
        {
            prompt: 'How often do you find that you stay on-line longer than you intended?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you neglect household chores to spend more time on-line?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often does your work suffer because of the amount of time you spend on-line?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you become defensive or secretive when anyone asks you what you do on-line?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you snap, yell, or act annoyed if someone bothers you while you are on-line?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you lose sleep due to being on-line late at night?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you feel preoccupied with the Internet when off-line, or fantasize about being on-line?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you find yourself saying "just a few more minutes" when on-line?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you try to cut down the amount of time you spend on-line and fail?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you try to hide how long you’ve been on-line?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you choose to spend more time on-line over going out with others?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you feel depressed, moody, or nervous when you are off-line, which goes away once you are back on-line?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "YIAT, options",
    event_converted_details: 'YIAT questions appears'
}


var DASS = {
    type: 'WBF',
    name: 'DASS',
    title: [
        'Never',
        'Sometimes',
        'Often',
        'Almost always'
    ],
    preamble:
        '<p>Please read each statement and select a number (0, 1, 2 or 3) which indicates how much the statement applied to you' +
        '<u> over the past week</u>. There are no right or wrong answers. Do not spend too much time on any statement.</p><br>' +
        '<p>The rating scale is as follows:</p>' +
        '<p>0 Did not apply to me at all – NEVER</p>' +
        '<p>1 Applied to me to some degree, or some of the time – SOMETIMES</p>' +
        '<p>2 Applied to me to a considerable degree, or a good part of time – OFTEN</p>' +
        '<p>3 Applied to me very much, or most of the time - ALMOST ALWAYS</p>',
    questions: [
        {
            prompt: 'I found it hard to wind down.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I was aware of dryness of my mouth.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I couldn’t seem to experience any positive feeling at all.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I experienced breathing difficulty (eg, excessively rapid breathing, breathlessness in the absence of physical exertion).',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I found it difficult to work up the initiative to do things.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I tended to over-react to situations.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I experienced trembling (eg, in the hands).',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt that I was using a lot of nervous energy.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I was worried about situations in which I might panic and make a fool of myself.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt that I had nothing to look forward to.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I found myself getting agitated.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I found it difficult to relax.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt down-hearted and blue.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I was intolerant of anything that kept me from getting on with what I was doing.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt I was close to panic.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I was unable to become enthusiastic about anything.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt I wasn’t worth much as a person.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt that I was rather touchy.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I was aware of the action of my heart in the absence of physical exertion (eg, sense of heart rate increase, heart missing a beat).',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt scared without any good reason.',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt that life was meaningless.',
            options: [0, 1, 2, 3],
            horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "DASS-21, options",
    event_converted_details: 'DASS-21 questions appears'
}


var AUDIT = {
    type: 'AUDIT',
    preamble:
        "<p>Because alcohol use can affect health and interfere with certain medications and treatments, it is important that we ask you some questions about your use of alcohol over the past year. Your answers will remain confidential, so please be as accurate as possible. Try to answer the questions in terms of ‘standard drinks’. Please tick the response that best fits your drinking</p><br>" +
        '<p>This guide contains examples of <strong>one standard drink.</strong></p>' +
        '<p>A full strength can or stubbie contains <strong>one and a half standard drinks.</strong></p>' +
        '<div class="audit-img-container">' +
        '<img src="../static/images/audit_image.jpg">' +
        '</div>',
    questions: [
        {
            prompt: 'How often do you have a drink containing alcohol?',
            options: ['Never', 'Monthly or less', '2-4 times a month', '2-3 times a week', '4 or more times a week'],
            horizontal: true
        }, {
            prompt: 'How many standard drinks do you have on a typical day when you are drinking?',
            options: ['1 or 2', '3 or 4', '5 or 6', '7 to 9', '10 or more'],
            horizontal: true
        }, {
            prompt: 'How often do you have six or more standard drinks on one occasion ?',
            options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
            horizontal: true
        }, {
            prompt: 'How often during the last year have you found that you were not able to stop drinking once you had started?',
            options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
            horizontal: true
        }, {
            prompt: 'How often during the last year have you failed to do what was normally expected of you because of drinking?',
            options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
            horizontal: true
        }, {
            prompt: 'How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?',
            options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
            horizontal: true
        }, {
            prompt: 'How often during the last year have you had a feeling of guilt or remorse after drinking?',
            options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
            horizontal: true
        }, {
            prompt: 'How often during the last year have you been unable to remember what happened the night before because you had been drinking?',
            options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
            horizontal: true
        }, {
            prompt: 'Have you or someone else been injured because of your drinking?',
            options: ['No', 'Yes but not in the last year', 'Yes, during the last year'],
            horizontal: true
        }, {
            prompt: 'Has a relative, friend, doctor, or other health care worker been concerned about your drinking or suggested you cut down?',
            options: ['No', 'Yes but not in the last year', 'Yes, during the last year'],
            horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "AUDIT, options",
    event_converted_details: 'AUDIT questions appears'
};

var isSmokingStatus = true;

var SMOKE_FTND = {
    timeline: [
        {
            type: 'Smoking-Status',
            preamble: 'We would like to ask you about your smoking. Please answer the following questions.',
            questions: [
                {
                    prompt: 'Have you smoked at least 100 cigarettes in your ENTIRE LIFE?',
                    options: ['Yes', 'No'],
                    horizontal: false
                }, {
                    prompt: 'Do you NOW smoke cigarettes, e-cigarette, cigar, pipe filled with tobacco, hookah, or use smokeless tobacco products every day, some days or not at all?',
                    options: ['Every day', 'Some days', 'Not at all'],
                    horizontal: false
                }
            ],
            button_label: 'submit answers',
            event_type: 'questions appears',
            event_raw_details: "SS, options",
            event_converted_details: 'SS questions appears'
        },
        {
            type: 'FTND',
            preamble: 'We would like to ask you a little more about your current smoking habits. Please answer the following questions.',
            questions: [
                {
                    prompt: 'How soon after you wake up do you smoke your first cigarette?',
                    options: ['Within 5 minutes', '6 - 30 minutes', '31 - 60 minutes', 'After 60 minutes'],
                    horizontal: false
                }, {
                    prompt: 'Do you find it difficult to refrain from smoking in places where it is forbidden e.g. in church, at the library, in cinema, etc.?',
                    options: ['Yes', 'No'],
                    horizontal: false
                }, {
                    prompt: 'Which cigarette would you hate most to give up?',
                    options: ['The first one in the morning', 'All others'],
                    horizontal: false
                }, {
                    prompt: 'How many cigarettes/day do you smoke?',
                    options: ['10 or less', '11 - 20', '21 - 30', '31 or more'],
                    horizontal: false
                }, {
                    prompt: 'Do you smoke more frequently during the first hours after waking than during the rest of the day?',
                    options: ['Yes', 'No'],
                    horizontal: false
                }, {
                    prompt: 'Do you smoke if you are so ill that you are in bed most of the day?',
                    options: ['Yes', 'No'],
                    horizontal: false
                }
            ],
            button_label: 'submit answers',
            event_type: 'questions appears',
            event_raw_details: "FTND, options",
            event_converted_details: 'FTND questions appears'
        }

    ]
}

var PGSI = {
    type: 'WBF-checkbox',
    name: 'PGSI',
    title: [
        'Never',
        'Sometimes',
        'Most of the &nbsp; time',
        'Almost always'
    ],
    preamble: 'We would like to ask you about your gambling. Thinking about the past 12 months, please answer the following questions.',
    questions: [
        {
            prompt: 'How often have you bet more than you could really afford to lose?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: true
        }, {
            prompt: 'How often have you needed to gamble with larger amounts of money to get the same feeling of excitement?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: true
        }, {
            prompt: 'How often have you gone back another day to try to win back the money you lost?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: true
        }, {
            prompt: 'How often have you borrowed money or sold anything to get money to gamble?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: true
        }, {
            prompt: 'How often have you felt that you might have a problem with gambling?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: true
        }, {
            prompt: 'How often have people criticized your betting or told you that you had a gambling problem, regardless of whether or not you thought it was true?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: true
        }, {
            prompt: 'How often have you felt guilty about the way you gamble, or what happens when you gamble?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: true
        }, {
            prompt: 'How often has your gambling caused you any health problems, including stress or anxiety?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: true
        }, {
            prompt: 'How often has your gambling caused any financial problems for you or your household?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "PGSI, options",
    event_converted_details: 'PGSI questions appears'
}


var SDS_STAGE = {
    type: 'SDS',
    preamble: '<p>We would now like to ask you if/how the above experiences and symptoms have affected you. Please mark ONE circle for each scale.</p>',
    questions: [
        {
            prompt:
                '<h2 class="question-title question-title-heading">work* / school</h2>' +
                '<h3>The symptoms have disrupted your work / school work:</h3>',
            options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            horizontal: false,
            name: 'WORK*'
        }, {
            prompt:
                '<h2 class="question-title question-title-heading">Social life</h2>' +
                '<h3>The symptoms have disrupted your social life / leisure activities:</h3>',
            options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            horizontal: false,
            name: 'SOCIAL*'
        }, {
            prompt:
                '<h2 class="question-title question-title-heading">Family life / Home Responsibilities</h2>' +
                '<h3>The symptoms have disrupted your family life / home responsibilities</h3>',
            options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            horizontal: false,
            name: 'FAMILY*'
        }, {
            title: 'Days Lost',
            prompt: 'On how many days in the last week did your symptoms cause you to miss school or work or leave you unable to carry out your normal daily responsibilities',
            options: [0, 1, 2, 3, 4, 5, 6, 7],
            horizontal: false,
            name: 'DAYS LOST**'
        }, {
            title: 'Days Unproductive',
            prompt: 'On how many days in the last week did you feel so impaired by your symptoms that even though you went to school or work, your productivity was reduced?',
            options: [0, 1, 2, 3, 4, 5, 6, 7],
            horizontal: false,
            name: 'DAYS UNPRODUCTIVE**'
        },
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "SDS, options",
    event_converted_details: 'SDS questions appears'
}

// ICAR
var three_dimensional_rotate_numbers = [
    3, 4, 6, 8
]
var three_dimensional_rotate = [];
for (i = 0; i < three_dimensional_rotate_numbers.length; i++) {
    var item = three_dimensional_rotate_numbers[i]
    var pathNum = item < 10 ? ("0" + item.toString()) : item.toString();
    three_dimensional_rotate.push(
        {
            prompt: 'All the cubes below have a different image on each side. Select the choice that could represent a rotation of the cube labeled X',
            img: 'R3D.' + pathNum + '.png',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            horizontal: false,
            name: 'three_dimensional_rotate',
            number: 'R3D.' + pathNum
        }
    );
}

var matrix_reasoning_numbers = [
    45, 46, 47, 55,
]
var matrix_reasoning = [];
for (i = 0; i < matrix_reasoning_numbers.length; i++) {
    var pathNum = matrix_reasoning_numbers[i];
    matrix_reasoning.push(
        {
            prompt: 'Please indicate which is the best answer to complete the figure below.',
            img: 'MR.' + pathNum + '.jpg',
            options: ['A', 'B', 'C', 'D', 'E', 'F'],
            horizontal: false,
            name: 'matrix_reasoning',
            number: 'MR.' + pathNum
        }
    );
}

var letter_number_series = [
    {
        prompt: 'In the following alphanumeric series, what letter comes next?',
        sequence: 'K, N, P, S, U, …',
        options: ['S', 'T', 'U', 'V', 'W', 'X', 'None of these', 'I don’t know'],
        horizontal: false,
        name: 'letter_number_series',
        number: 'LN.07'
    },
    {
        prompt: 'In the following alphanumeric series, what letter comes next?',
        sequence: 'V, Q, M, J, H, …',
        options: ['E', 'F', 'G', 'H', 'I', 'J', 'None of these', 'I don’t know'],
        horizontal: false,
        name: 'letter_number_series',
        number: 'LN.33'
    },
    {
        prompt: 'In the following alphanumeric series, what letter comes next?',
        sequence: 'I, J, L, O, S, …',
        options: ['T', 'U', 'V', 'X', 'Y', 'Z', 'None of these', 'I don’t know'],
        horizontal: false,
        name: 'letter_number_series',
        number: 'LN.34'
    },
    {
        prompt: 'In the following alphanumeric series, what letter comes next?',
        sequence: 'Q, S, N, P, L, …',
        options: ['J', 'H', 'I', 'N', 'M', 'L', 'None of these', 'I don’t know'],
        horizontal: false,
        name: 'letter_number_series',
        number: 'LN.58'
    },
]

var verbal_reasoning = [
    {
        prompt: 'What number is one fifth of one fourth of one ninth of 900?',
        options: [2, 3, 4, 5, 6, 7, 'None of these', 'I don’t know'],
        horizontal: false,
        name: 'verbal_reasoning',
        number: 'VR.04'
    },
    {
        prompt: 'Zach is taller than Matt & Richard is shorter than Zach. Which of the following statements would be most accurate?',
        options: ['Richard is taller than Matt', 'Richard is shorter than Matt', 'Richard is as tall as Matt', 'It is impossible to tell', 'Richard is taller than Zach', 'Zach is shorter than Matt', 'None of these', 'I don’t know'],
        horizontal: false,
        name: 'verbal_reasoning',
        number: 'VR.16'
    },
    {
        prompt: 'Joshua is 12 years old and his sister is three times as old as he. When Joshua is 23 years old, how old will his sister be?',
        options: ['35', '39', '44', '47', '53', '57', 'None of these', 'I don’t know'],
        horizontal: false,
        name: 'verbal_reasoning',
        number: 'VR.17'
    },
    {
        prompt: 'If the day after tomorrow is two days before Thursday then what day is today?',
        options: ['Friday', 'Monday', 'Wednesday', 'Saturday', 'Tuesday', 'Sunday', 'None of these', 'I don’t know'],
        horizontal: false,
        name: 'verbal_reasoning',
        number: 'VR.19'
    },

]

var ICAR_STAGE = {
    type: 'ICAR',
    questions: [],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "ICAR, options",
    event_converted_details: 'ICAR questions appears'
}

var letter_number_series_new = _.shuffle(letter_number_series).slice(0, 4);
var verbal_reasoning_new = _.shuffle(verbal_reasoning).slice(0, 4);
var three_dimensional_rotate_new = _.shuffle(three_dimensional_rotate).slice(0, 4);
var matrix_reasoning_new = _.shuffle(matrix_reasoning).slice(0, 4);

var icar_arr = [verbal_reasoning_new, letter_number_series_new, three_dimensional_rotate_new, matrix_reasoning_new];
var icar_shuffled_arr = jsPsych.randomization.shuffle(icar_arr);

icar_shuffled_arr.forEach(function (arr) {
    arr.forEach(function (element) {
        ICAR_STAGE.questions.push(element);
    });
});


var ACI1 = {
    type: 'ACI',
    name: 'ACI1',
    questions: [
        {
            prompts: [
                'Please select “Strongly agree” from the list below. This is a quality check question.'
            ],
            name: 'Attention',
            options: [
                {
                    name: 'Strongly disagree',
                    value: 0
                },
                {
                    name: 'Disagree',
                    value: 1
                },
                {
                    name: 'Neither agree or disagree',
                    value: 2
                },
                {
                    name: 'Agree',
                    value: 3
                },
                {
                    name: 'Strongly agree',
                    value: 4
                }
            ],
            horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'question appears',
    event_raw_details: 'ACI1, options',
    event_converted_details: 'Attention check item 1 appears',
    enable_timed_popups: false,
    force_answer: false,
}

var ACI2 = {
    type: 'ACI',
    name: 'ACI2',
    questions: [
        {
            prompts: [
                'You should not answer this question if you read it; it is to check your attention.'
            ],
            name: 'Attention',
            options: [
                {
                    name: 'Strongly disagree',
                    value: 0
                },
                {
                    name: 'Disagree',
                    value: 1
                },
                {
                    name: 'Neither agree or disagree',
                    value: 2
                },
                {
                    name: 'Agree',
                    value: 3
                },
                {
                    name: 'Strongly agree',
                    value: 4
                }
            ],
            horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'question appears',
    event_raw_details: 'ACI2, options',
    event_converted_details: 'Attention check item 2 appears',
    enable_timed_popups: false,
    force_answer: false,
}

var BEDS7 = {
    type: 'BEDS-7',
    preamble:
        '<p>The following questions ask about your eating patterns and behaviours within the last 3 months. For each question, choose the answer that best applies to you.</p>',
    questions: [
        {
            prompt: 'During the last 3 months, did you have any episodes of excessive overeating (i.e., eating significantly more than what most people would eat in a similar period of time)?',
            options: ['Yes', 'No'],
            horizontal: true
        }, {
            prompt: 'Do you feel distressed about your episodes of excessive overeating?',
            options: ['Yes', 'No'],
            horizontal: true
        }, 
        
        {
            prompt: 'During your episodes of excessive overeating, how often did you feel like you had no control over your eating (e.g., not being able to stop eating, feel compelled to eat, or going back and forth for more food)?',
            options: ['Never or rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        }, {
            prompt: 'During your episodes of excessive overeating, how often did you continue eating even though you were not hungry?',
            options: ['Never or rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        }, {
            prompt: 'During your episodes of excessive overeating, how often were you embarrassed by how much you ate?',
            options: ['Never or rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        }, {
            prompt: 'During your episodes of excessive overeating, how often did you feel disgusted with yourself or guilty afterward?',
            options: ['Never or rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        }, {
            prompt: 'During the last 3 months, how often did you make yourself vomit as a means to control your weight or shape?',
            options: ['Never or rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },

    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "BEDS-7, options",
    event_converted_details: 'BEDS-7 questions appears'
};

var GSQ = {
    type: 'GSQ',
    preamble:
        '<p>Please fill out the below form as accurately, honestly and completely as possible. There are no right or wrong answers.</p>',
    questions: [
        {
            prompt: 'Do you dislike the physical sensation you get when people hug you?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you gag when you are eating certain foods, perhaps feeling as if you are going to be sick?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you find it difficult to manipulate your hands when completing a delicate task (for example, picking up small objects or transferring objects from one hand to the other)?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you ever run your hand around the outside of an object before picking it up?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you stand very close (for example, less than 1 metre/3 feet away) or very far (for example, more than 3 metres/9 feet away) when you are talking to someone?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you find certain noises/pitches of sound annoying?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you smell your food before you eat it?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do bright lights ever hurt your eyes/cause a headache?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you like to listen to the same piece of music/part of a DVD over and over again?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you feel ill/dizzy/peculiar if you have to reach up high or bend down low for something?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you find yourself fascinated by small particles (for example, little ‘bits’ of dust in the air)? ',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you like to spin yourself round and round?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you ever feel ill just from smelling a certain odour?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you find it difficult to hear what people are saying?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true 
        },{
            prompt: 'Do you dislike having a haircut (for example, because little bits of hair go down your back)?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you notice that you have hurt yourself but did not feel any pain?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Are you ever told by others that you wear too much perfume/after-shave?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do lights ever seem to flicker* when you look at them? *‘Flickering’ in this question means appearing to turn on and off very quickly instead of appearing constant.',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you like lining objects up?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you rock yourself backwards and forwards?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true 
        },{
            prompt: 'Do you find it difficult to go into a strong-smelling shop (for example “Lush” and “The Body Shop”)?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you cut the labels out of your clothes?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you hate the feel or texture of certain foods in your mouth?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you avoid going to restaurants because you can smell a certain odour?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you dislike loud noises?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you use the tip of your tongue to taste your food before eating it?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true 
        },{
            prompt: 'Does your body ever feel ‘numb’ - like you can’t feel anything against your skin?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you think you have a weak sense of taste? One example of this would be if most food taste of ‘nothing’.',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you find that you are unaware of your body’s signals (for example, don’t often feel hungry/tired/thirsty)?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you ever feel dizzy/ill when playing fast-paced sports, for example basketball or football?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you react very strongly when you hear an unexpected sound?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you dislike walking on uneven surfaces?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true 
        },{
            prompt: 'Do you really like listening to certain sounds (for example, the sound of paper rustling)?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you like to run about – perhaps up and down in straight lines or round in circles?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you chew and lick objects that aren’t food (for example pen lids or bottle tops) because you like the way they feel in your mouth?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you enjoy wearing very strong perfumes/after-shaves?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true
        },{
            prompt: 'Do you find that you position your body in a way that is different to most people (for example, lie on your back on a sofa with your legs straight up in the air at a 90° angle)?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true    
        },{
            prompt: 'Do you find it difficult to tie your shoelaces or button up your clothes?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true      
        },{
            prompt: 'Do you find that you are able to go outside without a coat or a jacket when other people think that it is too cold?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true    
        },{
            prompt: 'Do you eat the same foods most of the time?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true  
        },{
            prompt: 'Do you like to wear something/hold something (for example, a hat or a pencil) so that you know where your body ‘ends’?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true    
        },{
            prompt: 'Do you flick your fingers in front of your eyes?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
            horizontal: true  
        },            
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "GSQ, options",
    event_converted_details: 'GSQ questions appears'
};

var ISQ = {
    type: 'ISQ',
    preamble:
        '<p>Following are questions that relate to how you feel and interpret sensations that come from within your body. For each statement, indicate on a scale from 1 to 7 how much this statement applies to you, where 1 = “not at all true of me” through to 7 = “very true of me”.</p>',
    questions: [
                
        {
            prompt: 'I have difficulty making sense of my body’s signals unless they are very strong',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true
        },{
            prompt: 'I tend to rely on visual reminders (e.g. times on the clock) to help me know when to eat and drink',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true
        },{
            prompt: 'I have difficulty feeling my bodily need for food',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true      
        },{
            prompt: 'I’m not sure how my body feels when it’s a hot day',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true      
        },{
            prompt: 'I find it difficult to describe feelings like hunger, thirst, hot or cold ',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true
        },{
            prompt: 'Sometimes I don’t know how to interpret sensations I feel within my body',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true      
        },{
            prompt: 'If I injure myself badly, even though I can feel it, I don’t feel the need to do much about it',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true      
        },{
            prompt: 'I only notice I need to eat when I’m in pain or feeling nauseous or weak',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true
        },{
            prompt: 'There are times when I am only aware of changes in my body because of the reactions of other people',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true      
        },{
            prompt: 'I find it difficult to read the signs and signals within my own body (e.g. when I have hurt myself or I need to rest)',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true      
        },{
            prompt: 'I have difficulty understanding when I am hungry or thirsty',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true
        },{
            prompt: 'I find it difficult to identify some of the signals that my body is telling me (e.g. If I’m about to faint or I’ve over exerted myself)',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true      
        },{
            prompt: 'It is difficult for me to describe what it feels like to be hungry, thirsty, hot, cold or in pain',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true      
        },{
            prompt: 'I am confused about my bodily sensations',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true
        },{
            prompt: 'I have difficulty locating injury in my body',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true      
        },{
            prompt: 'Sometimes, when my body signals a problem, I have difficulty working out what the problem might be',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true      
        },{
            prompt: 'I don’t tend to notice feelings in my body until they’re very intense',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true
        },{
            prompt: 'I find it difficult to put my internal bodily sensations into words',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true      
        },{
            prompt: 'Even when I know that I am hungry, thirsty, in pain, hot or cold, I don’t feel the need to do anything about it',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true      
        },{
            prompt: 'Even when I know that I am physically uncomfortable, I do not act to change my situation',
            options: ['Not at all true of me 1', '2', '3', '4', '5', '6', 'Very true of me 7'],
            horizontal: true      
        },              
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "ISQ, options",
    event_converted_details: 'ISQ questions appears'
};


var NIAS = {
    type: 'NIAS',
    preamble:
        '<p>Please answer the following questions about your current eating habits.</p>',
    questions: [
                
        {
            prompt: 'I am a picky eater.',
            options: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree'],
            horizontal: true
        },{
            prompt: 'I dislike most foods that other people eat easily.',
            options: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree'],
            horizontal: true
        },{
            prompt: 'The list of foods that I will eat is shorter than the list of foods I won’t eat.',
            options: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree'],
            horizontal: true
        },{
            prompt: 'I am not very interested in eating; I seem to have a smaller appetite than other people.',
            options: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree'],
            horizontal: true
        },{
            prompt: 'I have to push myself to eat regular meals throughout the day, or to eat a large enough amount of food at meals.',
            options: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree'],
            horizontal: true
        },{
            prompt: 'Even when I am eating a food I really like, it is hard for me to eat a large enough volume at meals.',
            options: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree'],
            horizontal: true
        },{
            prompt: 'I avoid or put off eating because I am afraid of discomfort, choking, or vomiting.',
            options: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree'],
            horizontal: true
        },{
            prompt: 'I restrict myself to certain foods because I am afraid that other foods will cause discomfort, choking, or vomiting.',
            options: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree'],
            horizontal: true
        },{
            prompt: 'I eat small portions and/or infrequent meals because I am afraid of discomfort, choking, or vomiting.',
            options: ['Strongly disagree', 'Disagree', 'Slightly disagree', 'Slightly agree', 'Agree', 'Strongly agree'],
            horizontal: true
        },                                  
    ],
    button_label: 'submit answers',
    event_type: 'questions appears',
    event_raw_details: "NIAS, options",
    event_converted_details: 'NIAS questions appears'
};