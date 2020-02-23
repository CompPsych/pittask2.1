var DEMOGRAPHICS = {
    type: 'Demographics',
    preamble: `
        <p>We would like to ask you a few questions about your personal information to better understand our study
        population. All your responses will be confidential.</p>
    `,
    questions: [
        {
            prompt: 'Gender',
            options: ['Male', 'Female', 'Other'],
            horizontal: true
        }, {
            prompt: 'Age',
            options: ['Years', 'Months'],
            horizontal: true
        }, {
            prompt: 'Height',
            options: ['cm', 'inches'],
            horizontal: true
        }, {
            prompt: 'Weight',
            options: ['kg', 'Pounds'],
            horizontal: true
        }, {
            prompt: 'Education level',
            options: ['Primary', 'Secondary', 'Associate or vocational education', 'Bachelor', 'Masters or above'],
            horizontal: true
        }, {
            prompt: 'Marital status',
            options: ['Married', 'Separated', 'Divorced', 'Widowed', 'Never married'],
            horizontal: true
        }, {
            prompt: 'Employment status',
            options: ['Employed - full time', 'Employed - part-time', 'Self-employed', 'Student', 'Unemployed', 'Retired'],
            horizontal: true
        }, {
            prompt: 'Gross annual household income (US dollars)',
            options: ['< $15,000', '$15,000 - $24,999', '$25,000 - $74,999', '> $75,000'],
            horizontal: true
        }

    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "Demographics, options",
    event_converted_details: 'Demographics survey appears'
}


var OCIR = {
    type: 'OCI-R',
    preamble:
        `<p>The following statements refer to experiences that many people have in their everyday lives. Select
        the number that best describes <b>HOW MUCH</b> that experience has <b>DISTRESSED</b> or <b>BOTHERED</b>
        you during the <b>PAST MONTH</b>. The numbers refer to the following verbal labels:</p>`,
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
    event_type: 'survey appears',
    event_raw_details: "OCI-R, options",
    event_converted_details: 'OCI-R survey appears'
}

var ASRM = {
    type: 'ASRM',
    preamble: `
        <h2><b>Instructions</b></h1>
        <div class="preamble-wrapper"><span>1.</span><p> On this questionnaire are groups of five statements; read each group of statements carefully</p></div>
        <div class="preamble-wrapper"><span>2.</span><p> Choose the one statement in each group that best describes the way you have been feeling for the past week. </p></div>
        <div class="preamble-wrapper"><span>3.</span><p> Click on the number next to the statement you picked</p></div>
        <div class="preamble-wrapper"><span>4.</span><p> Please note: The word “occasionally” when used here means once or twice; “often” means several
        times or more; “frequently” means most of the time.</p></div>
    `,
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
                'I often feel more self-confident than usual',
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
    event_type: 'survey appears',
    event_raw_details: "ASRM, options",
    event_converted_details: 'ASRM survey appears'

}

var GAD7 = {
    type: 'GAD-7',
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
            prompt: 'Feeling nervous, anxious or on edge',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Not being able to stop or control worrying',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Worrying too much about different things',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Trouble relaxing',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Being so restless that it is hard to sit still',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Becoming easily annoyed or irritable',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Feeling afraid as if something awful might happen',
            options: [0, 1, 2, 3],
            horizontal: true
        },

    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "GAD-7, options",
    event_converted_details: 'GAD-7 survey appears'
}

var ISI = {
    type: 'ISI',
    questions: [
        {
            prompt: '1. Please rate the current (i.e., last 2 weeks) <b>SEVERITY</b> of your insomnia problem(s).',
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
            prompt: '2. How <b>SATISFIED</b>/dissatisfied are you with your current sleep pattern?',
            options: [0, 1, 2, 3, 4],
            horizontal: true,
            title: ['Very Satisfied', 'Very Dissatisfied']
        }, {
            prompt: '3. To what extent do you consider your sleep problem to <b>INTERFERE</b> with your daily functioning (e.g. daytime fatigue, ability to function at work/daily chores, concentration, memory, mood, etc.).',
            options: [0, 1, 2, 3, 4],
            horizontal: true,
            title: ['Not at all Interfering', 'A Little ', 'Somewhat', 'Much', 'Very Much Interfering']
        }, {
            prompt: '4. To what extent do you consider your sleep problem to <b>INTERFERE</b> with your daily functioning (e.g. daytime fatigue, ability to function at work/daily chores, concentration, memory, mood, etc.).',
            options: [0, 1, 2, 3, 4],
            horizontal: true,
            title: ['Not at all Interfering', 'A Little ', 'Somewhat', 'Much', 'Very Much Interfering']
        }, {
            prompt: '5. To what extent do you consider your sleep problem to <b>INTERFERE</b> with your daily functioning (e.g. daytime fatigue, ability to function at work/daily chores, concentration, memory, mood, etc.).',
            options: [0, 1, 2, 3, 4],
            horizontal: true,
            title: ['Not at all', 'A Little ', 'Somewhat', 'Much', 'Very Much']
        },

    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "ISI, options",
    event_converted_details: 'ISI survey appears'
};

var EAT26 = {
    type: 'EAT-26',
    preamble: `
        <p>Please fill out the below form as accurately, honestly and completely as possible. There are no right or wrong answers. All of
        your responses are confidential.</p>
    `,
    questions: [
        {
            prompt: 'Am terrified about being overweight.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'I feel like I act totally on impulse.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Find myself preoccupied with food.',
            options: ['Always', 'Usually', 'Often', 'Sometimes', 'Rarely', 'Never'],
            horizontal: true
        }, {
            prompt: 'Have gone on eating binges where I feel that I may not be able to stop',
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
            prompt: 'Think about burning up calories when I exercise',
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
    event_type: 'survey appears',
    event_raw_details: "EAT-26, options",
    event_converted_details: 'EAT-26 survey appears'
};


var PID = {
    type: 'PID-5-BF',
    preamble: `
        <p><b>Instructions</b>: This is a list of things different people might say about themselves. We are interested in how
        you would describe yourself. There are no right or wrong answers. So you can describe yourself as honestly
        as possible, we will keep your responses confidential. We’d like you to take your time and read each
        statement carefully, selecting the response that best describes you.</p>
    `,
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
            prompt: 'Even though I know better, I can’t stop making rash decisions',
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
            prompt: 'I have seen things that weren’t really there',
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
            prompt: 'I often have thoughts that make sense to me but that other people say are strange',
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
    event_type: 'survey appears',
    event_raw_details: "PC-PTSD-5, options",
    event_converted_details: 'PC-PTSD-5 survey appears'
};

var PHQ9 = {
    type: 'PHQ-9',
    preamble:
        `<p><b>Instructions</b>: Over the <b>last 7 days</b>, how often have you been bothered by any of the following problems? (Click
        on the numbers to indicate your answer)</p>`,
    questions: [
        {
            prompt: 'Little interest or pleasure in doing things',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Feeling down, depressed, or hopeless',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Trouble falling or staying asleep, or sleeping too much',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Feeling tired or having little energy',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Poor appetite or overeating',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Feeling bad about yourself—or that you are a failure or have let yourself or your family down',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Trouble concentrating on things, such as reading the newspaper or watching television',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'Thoughts that you would be better off dead or of hurting yourself in some way',
            options: [0, 1, 2, 3],
            horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "PHQ-9, options",
    event_converted_details: 'PHQ-9 survey appears'
}

var PTSD = {
    type: 'PC-PTSD-5',
    questions: [
        {
            prompt: `
                Sometimes things happen to people that are unusually or especially frightening, horrible, or traumatic. For example:
                <ul>
                    <li>a serious accident or fire</li>
                    <li>a physical or sexual assault or abuse</li>
                    <li>an earthquake or flood</li>
                    <li>a war</li>
                    <li>seeing someone be killed or seriously injured</li>
                    <li>having a loved one die through homicide or suicide</li>
                </ul>
            `,
            options: ['YES', 'NO'],
            horizontal: true
        }, {
            prompt: 'had nightmares about the event(s) or thought about the event(s) when you did not want to?',
            options: ['YES', 'NO'],
            horizontal: true
        }, {
            prompt: 'tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?',
            options: ['YES', 'NO'],
            horizontal: true
        }, {
            prompt: 'been constantly on guard, watchful, or easily startled?',
            options: ['YES', 'NO'],
            horizontal: true
        }, {
            prompt: 'felt numb or detached from people, activities, or your surroundings?',
            options: ['YES', 'NO'],
            horizontal: true
        }, {
            prompt: 'felt guilty or unable to stop blaming yourself or others for the events(s) or any problems the event(s) may have caused?',
            options: ['YES', 'NO'],
            horizontal: true
        },
    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "PTSD, options",
    event_converted_details: 'PTSD survey appears'
}

var RAADS = {
    type: 'RAADS-14',
    preamble: `
        <p>Please choose one of the following alternatives:</p>
        <p>This is true or describes me now and when I was young.</p>
        <p>This was true or describes me only now (refers to skills acquired).</p>
        <p>This was true only when I was young (16 years or younger).</p>
        <p>This was never true and never described me.</p>
        <p>Please answer the questions according to what is true for you.
        Check only one column per statement!</p>
    `,
    questions: [
        {
            prompt: 'It is difficult for me to understand how other people are feeling when we are talking',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'Some ordinary textures that do not bother others feel very offensive when they touch my skin',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'It is very difficult for me to work and function in groups',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'It is difficult to figure out what other people expect of me',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: ' I often don’t know how to act in social situations',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'I can chat and make small talk with people',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'When I feel overwhelmed by my senses, I have to isolate myself to shut them down',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'How to make friends and socialize is a mystery to me',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: ' When talking to someone, I have a hard time telling when it is my turn to talk or to listen',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: ' Sometimes I have to cover my ears to block out painful noises (like vacuum cleaners or people talking too much or too loudly)',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'It can be very hard to read someone’s face, hand, and body movements when we are talking',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: ' I focus on details rather than the overall idea',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'I take things too literally, so I often miss what people are trying to say',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }, {
            prompt: 'I get extremely upset when the way I like to do things is suddenly changed',
            options: ['True now and when I was young', 'True only now', 'True only when I was younger than 16', 'Never true'],
            horizontal: true
        }

    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "The RAADS-14 Screen, options",
    event_converted_details: 'The RAADS-14 Screen survey appears'
}

var PRIME_R = {
    type: 'PRIME-R',
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
            prompt: 'I think that I may get confused at times whether something I experience or perceive may be real or may be just part of my imagination or dreams',
            options: [0, 1, 2, 3, 4, 5, 6],
            horizontal: true
        }, {
            prompt: ' I have thought that it might be possible that other people can read my mid, or that I can read others’ minds.',
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
    event_type: 'survey appears',
    event_raw_details: "PRIME-R, options",
    event_converted_details: 'PRIME-R survey appears'
}


var LSAS = {
    type: 'LSAS',
    preamble: `
        <ul>
            <li>This measure assesses the way that social phobia plays a role in your life across a variety of situations.</li>
            <li>Read each situation carefully and answer two questions about that situation. The first question asks how anxious or fearful you feel in the situation. The second question asks how often you avoid the situation.</li>
            <li>If you come across a situation that you ordinarily do not experience, we ask that you imagine ‘what if you were faced with that situation’, and then rate the degree to which you would fear this hypothetical situation and how often you would tend to avoid it.</li>
            <li>Please base your ratings on the way that the situations have affected you in the last week.</li>
        </ul>
    `,
    questions: [
        {
            prompt: '<b>Telephoning in public</b> – speaking on the phone in a public place',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Participating in small groups</b> – having a discussion with a few others',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Eating in public places</b> – do you tremble or feel awkward handling food',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Drinking with others in public places</b> – refers to any beverage including alcohol',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Talking to people in authority</b> – for example, a boss or teacher',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Acting, performing or giving a talk in front of an audience</b> – refers to a large audience',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Going to a party</b> – an average party to which you may be invited; assume you know some but not all people at the party',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Working while being observed</b> – any type of work you might do including school work or housework',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Writing while being observed</b> – for example, signing a check in a bank',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Calling someone you don’t know very well</b>',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Talking with people you don’t know very well</b>',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Meeting strangers</b> – assume others are of average importance to you',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Urinating in a public bathroom</b> – assume that others are sometimes present, as might normally be expected',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Entering a room when others are already seated</b> – refers to a small group, and nobody has to move seats for you',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Being the center of attention</b> – telling a story to a group of people',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Speaking up at a meeting</b> – speaking from your seat in a small meeting or standing up in a place in large meeting',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Taking a written test</b>',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Expressing appropriate disagreement or disapproval to people you don’t know very well</b>',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Looking at people you don’t know very well in the eyes</b> – refers to appropriate eye contact',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Giving a report to a group</b> – refers to an oral report to a small group',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Trying to pick up someone</b> – refers to a single person attempting to initiate a relationship with a stranger',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Returning goods to a store where returns are normally accepted</b>',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Giving a party</b>',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }, {
            prompt: '<b>Resisting a high pressure salesperson</b> – avoidance refers to listening to the salesperson for too long',
            options: [
                [0, 1, 2, 3],
                [0, 1, 2, 3]
            ],
            horizontal: true
        }

    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "LSAS, options",
    event_converted_details: 'LSAS survey appears'
}



var MOVES = {
    type: 'MOVES',
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
            prompt: 'Parts of my body jerk again and again, that I can\'t control',
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
            prompt: 'I have to do things I see other people do',
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
    event_type: 'survey appears',
    event_raw_details: "MOVES, options",
    event_converted_details: 'MOVES survey appears'
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
    event_type: 'survey appears',
    event_raw_details: "ASRS-5, options",
    event_converted_details: 'ASRS-5 survey appears'
}

var YIAT = {
    type: 'YIAT',
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
            prompt: 'How often do you become defensive or secretive when anyone asks you what you do online?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you snap, yell, or act annoyed if someone bothers you while you are on-line?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often'],
            horizontal: true
        }, {
            prompt: 'How often do you lose sleep due to being online late at night?',
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
            prompt: 'How often do you try to cut down the amount of time you spend online and fail?',
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
    event_type: 'survey appears',
    event_raw_details: "YIAT, options",
    event_converted_details: 'YIAT survey appears'
}


var DASS = {
    type: 'DASS',
    preamble:
        `
        <p>Please read each statement and select a number (0, 1, 2 or 3) which indicates how much the statement applied to you
        <u>over the past week</u>. There are no right or wrong answers. Do not spend too much time on any statement.</p>

        <p style="font-style: italic; padding: 2rem 0; ">The rating scale is as follows:</p>

        <p>0 Did not apply to me at all – NEVER</p>
        <p>1 Applied to me to some degree, or some of the time – SOMETIMES</p>
        <p>2 Applied to me to a considerable degree, or a good part of time – OFTEN</p>
        <p>3 Applied to me very much, or most of the time - ALMOST ALWAYS</p>
        
        `,
    questions: [
        {
            prompt: 'I found it hard to wind down',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I was aware of dryness of my mouth',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I couldn’t seem to experience any positive feeling at all',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I experienced breathing difficulty (eg, excessively rapid breathing, breathlessness in the absence of physical exertion)',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I found it difficult to work up the initiative to do things',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I tended to over-react to situations',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I experienced trembling (eg, in the hands)',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt that I was using a lot of nervous energy',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I was worried about situations in which I might panic and make a fool of myself',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt that I had nothing to look forward to',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I found myself getting agitated',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I found it difficult to relax',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt down-hearted and blue',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I was intolerant of anything that kept me from getting on with what I was doing',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt I was close to panic',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I was unable to become enthusiastic about anything',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt I wasn’t worth much as a person',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt that I was rather touchy',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I was aware of the action of my heart in the absence of physicalexertion (eg, sense of heart rate increase, heart missing a beat)',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt scared without any good reason',
            options: [0, 1, 2, 3],
            horizontal: true
        }, {
            prompt: 'I felt that life was meaningless',
            options: [0, 1, 2, 3],
            horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "DASS-21, options",
    event_converted_details: 'DASS-21 survey appears'
}


var AUDIT = {
    type: 'AUDIT',
    preamble: `
        <p>Because alcohol use can affect health and interfere with certain medications and treatments, it is important that we ask you some questions about your use of alcohol. Your answers will remain confidential, so please be as accurate as possible. Try to answer the questions in terms of ‘standard drinks’. Please tick the response that best fits your drinking.</p>
        <div class="audit-img-container">
            <img src="../static/images/audit_image.jpg">
            <div>
                <p>This guide contains examples of <strong>one standard drink.</strong></p>
                <p>A full strength can or stubbie contains <strong>one and a half standard drinks.</strong></p>
            </div>
        </div>
    `,
    questions: [
        {
            prompt: 'How often do you have a drink containing alcohol?',
            options: ['Never', 'Monthly or less', '2-4 times a month', '2-3 times a week', '4 or more times a week'],
            horizontal: true
        },{
            prompt: 'How many standard drinks do you have on a typical day when you are drinking?',
            options: ['1 or 2', '3 or 4', '5 or 6', '7 to 9', '10 or more'],
            horizontal: true
        },{
            prompt: 'How often do you have six or more standard drinks on one occasion ?',
            options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
            horizontal: true
        },{
            prompt: 'How often during the last year have you found that you were not able to stop drinking once you had started?',
            options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
            horizontal: true
        },{
            prompt: 'How often during the last year have you failed to do what was normally expected of you because of drinking?',
            options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
            horizontal: true
        },{
            prompt: 'How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?',
            options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
            horizontal: true
        },{
            prompt: 'How often during the last year have you had a feeling of guilt or remorse after drinking?',
            options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
            horizontal: true
        },{
            prompt: 'How often during the last year have you been unable to remember what happened the night before because you had been drinking?',
            options: ['Never', 'Less than monthly', 'Monthly', 'Weekly', 'Daily or almost daily'],
            horizontal: true
        },{
            prompt: 'Have you or someone else been injured because of your drinking?',
            options: ['No', 'Yes but not in the last year', 'Yes, during the last year'],
            horizontal: true
        },{
            prompt: 'Has a relative, friend, doctor, or other health care worker been concerned about your drinking or suggested you cut down?',
            options: ['No', 'Yes but not in the last year', 'Yes, during the last year'],
            horizontal: true
        }
    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "AUDIT, options",
    event_converted_details: 'AUDIT survey appears'
};

var isSmokingStatus = true;

var SMOKE_FTND = {
    timeline: [
        {
            type: 'Smoking-Status',
            questions: [
                {
                    prompt: 'Have you smoked at least 100 cigarettes in your ENTIRE LIFE?',
                    options: ['Yes', 'No'],
                    horizontal: false
                },{
                    prompt: 'Do you NOW smoke cigarettes, e-cigarette, cigar, pipe filled with tobacco, hookah, or use smokeless tobacco products every day, some days or not at all?',
                    options: ['Every day', 'Some days', 'Not at all'],
                    horizontal: false
                }
            ],
            button_label: 'submit answers',
            event_type: 'survey appears',
            event_raw_details: "FTND, options",
            event_converted_details: 'FTND survey appears'
        },
        {
            type: 'FTND',
            questions: [
                {
                    prompt: 'How soon after you wake up do you smoke your first cigarette?',
                    options: ['Within 5 minutes', '6 - 30 minutes', '31 - 60 minutes', 'After 60 minutes'],
                    horizontal: false
                },{
                    prompt: 'Do you find it difficult to refrain from smoking in places where it is forbidden e.g. in church, at the library, in cinema, etc.?',
                    options: ['Yes', 'No'],
                    horizontal: false
                },{
                    prompt: 'Which cigarette would you hate most to give up?',
                    options: ['The first one in the morning', 'All others'],
                    horizontal: false
                },{
                    prompt: 'How many cigarettes/day do you smoke?',
                    options: ['10 or less', '11 - 20', '21 - 30', '31 or more'],
                    horizontal: false
                },{
                    prompt: 'Do you smoke more frequently during the first hours after waking than during the rest of the day?',
                    options: ['Yes', 'No'],
                    horizontal: false
                },{
                    prompt: 'Do you smoke if you are so ill that you are in bed most of the day?',
                    options: ['Yes', 'No'],
                    horizontal: false
                }
            ],
            button_label: 'submit answers',
            event_type: 'survey appears',
            event_raw_details: "FTND, options",
            event_converted_details: 'FTND survey appears'
        }

    ]
}

var PGSI = {
    type: 'PGSI',
    questions: [
        {
            prompt: 'Q1. Thinking about the past 12 months, how often have you bet more than you could really afford to lose? Would you say:',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: false
        },{
            prompt: 'Q2. Thinking about the past 12 months, how often have you needed to gamble with larger amounts of money to get the same feeling of excitement?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: false
        },{
            prompt: 'Q3. Thinking about the past 12 months, how often have you gone back another day to try to win back the money you lost?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: false
        },{
            prompt: 'Q4. Thinking about the past 12 months, how often have you borrowed money or sold anything to get money to gamble?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: false
        },{
            prompt: 'Q5. Thinking about the past 12 months, how often have you felt that you might have a problem with gambling?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: false
        },{
            prompt: 'Q6. Thinking about the past 12 months, how often have people criticized your betting or told you that you had a gambling problem, regardless of whether or not you thought it was true?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: false
        },{
            prompt: 'Q7. Thinking about the past 12 months, how often have you felt guilty about the way you gamble, or what happens when you gamble?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: false
        },{
            prompt: 'Q8. Thinking about the past 12 months, how often has your gambling caused you any health problems, including stress or anxiety?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: false
        },{
            prompt: 'Q9. Thinking about the past 12 months, how often has your gambling caused any financial problems for you or your household?',
            options: ['Never', 'Sometimes', 'Most of the time', 'Almost always'],
            horizontal: false
        }
    ],
    button_label: 'submit answers',
    event_type: 'survey appears',
    event_raw_details: "FTND, options",
    event_converted_details: 'FTND survey appears'
}


var SDS = {
    type: 'SDS',
    preamble: `
    <p><b>A brief, patient rated, measure of disability and impairment.</b></p>
    <p>Please mark ONE circle for each scale.</p>
    `,
    questions: [
        {
            prompt: `
                <h2 class="question-title question-title-heading">work* / school</h3>
                <h3>The symptoms have disrupted your work / school work:</h3>
            `,
            options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            horizontal: false,
            name: 'WORK*'
        },{
            prompt: `
                <h2 class="question-title question-title-heading">Social life</h3>
                <h3>The symptoms have disrupted your social life / leisure activities:</h3>
            `,
            options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            horizontal: false,
            name: 'SOCIAL*'
        },{
            prompt: `
                <h2 class="question-title question-title-heading">Family life / Home Responsibilities</h2>
                <h3>The symptoms have disrupted your family life / home responsibilities</h3>
            `,
            options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            horizontal: false,
            name: 'FAMILY*'
        },{
            title: 'Days Lost',
            prompt: 'On how many days in the last week did your symptoms cause you to miss school or work or leave you unable to carry out your normal daily responsibilities',
            options: [0, 1, 2, 3, 4, 5, 6, 7],
            horizontal: false,
            name: 'DAYS LOST**'
        },{
            title: 'Days Unproductive',
            prompt: 'On how many days in the last week did you feel your symptoms, than even though you went to school or work, your productivity was reduced?',
            options: [0, 1, 2, 3, 4, 5, 6, 7],
            horizontal: false,
            name: 'DAYS UNPRODUCTIVE**'
        },
    ]
}