/************************************************************
 * ======================= PARAMETERS =======================
 ************************************************************/
/************************************************************
 * How to use HTML tags guide
 *
 * Text formatting:
 * <p>This is some text</p> - defines a paragraph.
 * <b>This is some bold text</b> - Bold text
 * <i>This is some italic text</i> - Italic text
 * This is some text before the line break <br> - produces a line break in the text (carriage-return).
 * <br> is independent tag and not require adding closing tag like this </br>
 * <span style="color: red;">This is some formatted text</span> - tag is an inline container used to mark up a part of a text, or a part of a document.
 * Heading tag: It is used to define the heading of HTML document.
 * <h1>Heading 1 </h1>
 * <h2>Heading 2 </h2>
 * <h3>Heading 3 </h3>
 * <h4>Heading 4 </h4>
 * <h5>Heading 5 </h5>
 * <h6>Heading 6 </h6>
 *
 * Above, I gave a list of the most common HTML tags used for formatting text.
 * There are a lot of other HTML tags more information about you can find here https://www.w3schools.com/tags/ref_byfunc.asp
 ***********************************************************/

/************************************************************
* General Parameters (including instructions and popups)
***********************************************************/
var re_captcha = true;
var re_captcha_duration = 180;
var full_screen_mode = false;
var open_instruct_latency = 1500;
var close_instruct_latency = 500;
var popup_text_behav = "Please provide your answer prior to submission.";
var popup_text_WBF = "Sorry, all questions need to be answered prior to submission.";
var popup_browser = true;
var popup_text_browser = "Please focus on the experiment by keeping the application active in your browser. The experiment will close without payment if it has been inactive for too long, or if there are too many deactivations caused by navigation to other windows. The experiment will be paused until you dismiss this popup message. Thank you for understanding.";
//unit is second for browser_inactivated_duration
var browser_inactivated_duration = 1800;
var browser_inactivated_num = 10;

var terminate_app_instruct = "<p>Please close all applications and browser windows that are not in use to ensure optimal experience with this experiment. </p><br>" +
    "<p>Please press any key to proceed after closing background apps.</p>"

var popup_exit = true;
var popup_text_exit = "Are you sure you want to leave the experiment?";
var browser_inactivated_notif = true;
var browser_inactivated_notif_text =
    "<p>The experiment has ended because you were absent for too long.</p><br>" +
    "<p>You will not be paid for this HIT. Please close this window.</p>";
var popup_translator = true;
var popup_text_translator = "This HIT is not designed to be used with any translation softwares. Please turn off any translation software. Otherwise, you will not be paid for this HIT."
var translator_detected_notif = true;
var translator_detected_nofit_text =
    "<p>The experiment has ended because you didn't turn the translator off.</p><br>" +
    "<p>You will not be paid for this HIT. Please close this window.</p>"

/************************************************************
 * ==================== WEB-BASED FORMS ====================
 ************************************************************
/************************************************************
 * Web-based forms
 ***********************************************************/
var open_instruct_WBF = true;
var close_instruct_WBF = false;
var open_instruct_text_WBF =
    "<h2>We would like to ask</h2>" +
    "<h2>some questions about you.</h2><br>" +
    "<h2>Your answers are anonymous and </h2>" +
    "<h2>will not influence your payment.</h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin.</h2>";
var close_instruct_text_WBF =
    "<h2>Thank you.</h2><br>" +
    "<h2>Press any key to begin.</h2>";

var open_instruct_inventory = true;
var close_instruct_inventory = false;
var open_instruct_text_inventory =
    "<h2>We would like to ask you about some<h2>" +
    "<h2>common experiences so we can help</h2>" +
    "<h2>people that are troubled by them.</h2><br>" +
    "<h2>If you become distressed, you do not</h2>" +
    "<h2>need to continue your participation.</h2><br>" +
    "<h2>It may also help to talk to</h2>" +
    "<h2>a friend, counsellor, or doctor.</h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin.</h2>";
var close_instruct_text_inventory = "Symptom inventories close";

var open_instruct_demographics = true;
var close_instruct_demographics = false;
var open_instruct_text_demographics =
    "<h2>This section takes about 45 minutes</h2>" +
    "<h2>and then you will be nearly finished.</h2><br>" +
    "<h2>Please take care to answer honestly. </h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin.</h2>";
var close_instruct_text_demographics = "Demographics close";

var open_instruct_SDS = false;
var close_instruct_SDS = false;
var open_instruct_text_SDS = "SDS open";
var close_instruct_text_SDS = "SDS close";

var open_instruct_ICAR = true;
var close_instruct_ICAR = false;
var open_instruct_text_ICAR =
    "<h2>Thank you! You are nearly finished.</h2><br>" +
    "<h2>There is only a final set of questions</h2>" +
    "<h2>which takes less than 15 minutes.</h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin.</h2>";
var close_instruct_text_ICAR = "ICAR close";

/************************************************************
 * Symptom Inventories
 ***********************************************************/
var inventory_rand = true;
var symptom_inventory = [
    // OCI-R
    OCIR,
    // MOVES
    MOVES,
    // DASS
    DASS,
    // Adult Attention-Deficit/Hyperactivity Disorder Self-Report Screening Scale for DSM-5 (ASRS-5)
    ASRS5,
    // Internet-based form EAT-26
    EAT26,
    // The RAADS Screen
    RAADS,
    // PHQ-9
    PHQ9,
    // GAD-7
    GAD7,
    // LSAS
    LSAS,
    // ASRM
    ASRM,
    // The Primary Care PTSD Screen for DSM-5 (PC-PTSD-5)
    PTSD,
    // The PRIME Screen – Revised
    PRIME_R,
    // AUDIT
    AUDIT,
    // PGSI
    PGSI,
    // YIAT
    YIAT,
    // Smoking status
    SMOKE_FTND,
    // Insomnia Severity Index
    ISI,
    // The Personality Inventory for DSM-5—Brief Form (PID-5-BF)— Adult
    PID,
    // BED (binge eating disorder)
	BEDS7,
	// Exteroception
    GSQ,
    // Interoception
    ISQ,
    // ARFID (avoidant/restrictive feeding intake disorder)
    NIAS
];

/************************************************************
 * =================== BEHAVIOURAL STAGES ===================
/************************************************************
 * Vending Machine Animation Parameters
 ***********************************************************/
var left_tilt = 37;
var right_tilt = 39;
var shake_right_rotate = 15;
var shake_right_translateX = 5;
var shake_left_rotate = -15;
var shake_left_translateX = -5;
var shake_return_time = 300;
var shake_transition = 0.05;

/************************************************************
* behavioural stages
***********************************************************/
var outcome_duration = 1000;
var stim_duration = 6000;
var ITI_duration = 6000;
var correct_text = "";
var incorrect_text = "";
var feedback_duration = 1;

/************************************************************
 * Key-Testing
 ***********************************************************/
var open_instruct_text_key_testing =
    "<h2> We would like to test your keyboard. </h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin. </h2>";
var close_instruct_text_key_testing =
    "<h2>Thank you.</h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin.</h2>";

/***********************************************************
* Food and Hunger Questions
***********************************************************/
var open_instruct_FHQ_pre_rating = true;
var close_instruct_FHQ_pre_rating = true;
var open_instruct_text_FHQ_pre_rating =
    "<h2> We would like to ask you</h2>" +
    "<h2>questions about some snacks.</h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin. </h2>";
var close_instruct_text_FHQ_pre_rating =
    "<h2>Please play our food reward game.</h2><br>" +
    "<h2>We will ask you questions to check that</h2>" +
    "<h2>you are paying attention.</h2><br>" +
    "<h2>You must answer correctly </h2>" +
    "<h2>to get to the next stage of the game.</h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin.</h2>";

var open_instruct_FHQ_post_rating = true;
var close_instruct_FHQ_post_rating = true;
var open_instruct_text_FHQ_post_rating =
    "<h2>We would like to ask you</h2>" +
    "<h2>some questions about snacks again.</h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin.</h2>";
var close_instruct_text_FHQ_post_rating =
    "<h2>That is it for the food questions.</h2><br>" +
    "<h2></h2><br>" +
    "<h2> Press any key to continue.</h2>";

var FHQ_1 = "How much would you like a chocolate cookie?";
var FHQ_2 = "How much would you like an M&M?";
var FHQ_3 = "How much would you like a cracker?";
var FHQ_4 = "How hungry do you feel right now?";
var FHQ_1_bottom_text = "Rate your desire for a chocolate cookie";
var FHQ_2_bottom_text = "Rate your desire for an M&M";
var FHQ_3_bottom_text = "Rate your desire for a cracker";
var FHQ_VAS_left = "not at all";
var FHQ_VAS_center = "";
var FHQ_VAS_right = "very much";
var FHQ_VAS_left_hungry = "not at all";
var FHQ_VAS_right_hungry = "extremely";
var FHQ_VAS_instruct = "<li><span>Please select your answer on the scale.</span></li>";

/************************************************************
 * ===================== GUI COLORS =========================
 * stim1_colour = reddish purple - associated with M&M image
 * stim2_colour = blue - associated with BBQ (cracker) image
 * stim3_colour = red - associated with TT (cookie) image
 * stim4_colour = yellow - associated with Empty image 
 ************************************************************/
var stim1_colour = "rgb(204,121,167)";
var stim2_colour = "rgb(0,114,178)";
var stim3_colour = "rgb(213,94,0)";
var stim4_colour = "rgb(240,228,66)";

/************************************************************
 * Pavlovian Conditioning
 ************************************************************/
var min_num_correct_pav = 4;
var max_num_incorrect_pav = 100;
var open_instruct_pav = true;
var close_instruct_pav = false;
var open_instruct_text_pav =
    "<h2>The machine can't be tipped in this</h2>" +
    "<h2>stage, but it's still malfunctioning</h2>" +
    "<h2>and free snacks are dropping out.</h2><br>" +
    "<h2>Coloured lights on the machine predict</h2>" +
    "<h2>which snack will fall out.</h2><br>" +
    "<h2>Pay attention to what the lights predict.</h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin. </h2>";
var close_instruct_text_pav =
    "<h2>The vending machine is still malfunctioning, and you can tip it again now.</h2><br>" +
    "<h2>The coloured lights will sometimes appear.</h2><br> " +
    "<h2>You won't always see the snack fall out. All the snacks you get will be recorded.</h2><br>" +
    "<h2>Get all the snacks that you want!</h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin. </h2>";

/************************************************************
 * ======================== VVR =============================
 ************************************************************/
var interval_duration = 500;
var interval_num = 60;
var answer_latency_countdown = false;
var answer_latency = 1000;
var answer_latency_text = "Please wait a second to answer the question...";
var VVR_q_text_a1 = "Which direction did you tip to get";
var VVR_q_text_a2 = "Press left or right arrow";
var VVR_q_text_b1 = "How confident are you in your answer?";
var VVR_q_text_b2 = "not confident";
var VVR_q_text_b3 = "very confident";
var VVR_q_text_b4 =
    "<li><span>Please select your answer on the scale.</span></li>" +
    "<li><span>Click 'Submit answer' when ready.</span></li>";

/************************************************************
 * Instrumental conditioning [VVR_1]
 ************************************************************/
var degrad_pattern_VVR1 = ["d0"];
var prob_value_VVR1 = [0.2];
var min_blocks_num_VVR1 = 2;
var min_num_correct_VVR1 = 6;
var max_num_incorrect_VVR1 = 100;
var open_instruct_VVR1 = true;
var close_instruct_VVR1 = false;
var open_instruct_text_VVR1 =
    "<h2>A vending machine is malfunctioning.</h2><br>" +
    "<h2>You can tip the machine and </h2>" +
    "<h2>see what snacks fall out.</h2><br>" +
    "<h2>Get all the snacks that you want!</h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin.</h2>";
var close_instruct_text_VVR1 = "Thank you for your input. Proceeding to the next stage.";

var popup_machine_VVR1 = true;
var popup_duration_machine_VVR1 = 15; // (seconds)
var popup_text_machine_VVR1 = 'Don’t forget, you can tip the vending machine anytime in this stage to earn snacks.';

/************************************************************
 * Contingency degradation [VVR_2]
 ************************************************************/
var degrad_pattern_VVR2 = ["d1"];
var prob_value_VVR2 = [0.2];
var min_blocks_num_VVR2 = 3;
var min_num_correct_VVR2 = 0;
var max_num_incorrect_VVR2 = 0;
var open_instruct_VVR2 = true;
var close_instruct_VVR2 = false;
var open_instruct_text_VVR2 =
    "<h2>The vending machine is still malfunctioning.</h2><br>" +
    "<h2>You can tip the machine and </h2>" +
    "<h2>see what snacks fall out.</h2><br>" +
    "<h2>Get all the snacks that you want!</h2><br>" +
    "<h2>Press any key to begin.</h2>";
var close_instruct_text_VVR2 = "Thank you for your input. Proceeding to the next stage.";

var popup_machine_VVR2 = true;
var popup_duration_machine_VVR2 = 15; //(seconds)
var popup_text_machine_VVR2 = 'Don’t forget, you can tip the vending machine anytime in this stage to earn snacks.';

/************************************************************
 * Contingency restoration [VVR_3]
 ************************************************************/
var degrad_pattern_VVR3 = ["d0"];
var prob_value_VVR3 = [0.2];
var min_blocks_num_VVR3 = 3;
var min_num_correct_VVR3 = 6;
var max_num_incorrect_VVR3 = 100;
var open_instruct_VVR3 = true;
var close_instruct_VVR3 = false;
var open_instruct_text_VVR3 =
    "<h2>The vending machine is still malfunctioning.</h2><br>" +
    "<h2>You can tip the machine and </h2>" +
    "<h2>see what snacks fall out.</h2><br>" +
    "<h2>Get all the snacks that you want!</h2><br>" +
    "<h2>Press any key to begin.</h2>";
var close_instruct_text_VVR3 = "Thank you for your input. Proceeding to the next stage.";

var popup_machine_VVR3 = true;
var popup_duration_machine_VVR3 = 15; //(seconds)
var popup_text_machine_VVR3 = 'Don’t forget, you can tip the vending machine anytime in this stage to earn snacks.';

/************************************************************
 * Transfer Test
 ************************************************************/
var block_num_transfer_test = 6; // default 2
var transfer_test1 = true;
var transfer_test2 = false;
var transfer_test3 = false;
var open_instruct_transfer_test = true;
var close_instruct_transfer_test = false;
var open_instruct_text_transfer_test =
    "<h2>The machine is still malfunctioning.</h2><br> " +
    "<h2>You will see the coloured lights.</h2><br>" +
    "<h2>You can tip the machine at any time.</h2><br>" +
    "<h2>You won’t see the snacks, but the</h2>" +
    "<h2>snacks you earn will be recorded.</h2><br>" +
    "<h2>Get all the snacks that you want!</h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin. </h2>";
var close_instruct_text_transfer_test = "Close Instruction Transfer Test";

var popup_machine_transfer1 = true;
var popup_duration_machine_transfer1 = 30; // (seconds)
var popup_text_machine_transfer1 = "You can tip the machine anytime in this stage. Any snacks you earn will be recorded.";

/************************************************************
 * Deval Video
 ***********************************************************/
var video_duration = 30;
var video_sound = false;
var open_instruct_video = true;
var open_instruct_text_video =
    "<h2>You discover something new</h2>" +
    "<h2>about one of the snacks.</h2><br>" +
    "<h2>Watch and see what has changed.</h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin.</h2>";
var close_instruct_video = false;
var close_instruct_text_video =
    "<h2>The vending machine is still malfunctioning, and you can tip it again now.</h2><br><br> " +
    "<h2>You won't always see the snack fall out. All the snacks you get will be recorded.</h2><br>" +
    "<h2>Get all the snacks that you want!</h2><br>" +
    "<h2>Press any key to begin. </h2>";
/************************************************************
 * Deval Test
 ************************************************************/
var deval_test_duration = 30000; // default 120000
var open_instruct_deval_test = true;
var close_instruct_deval_test = false;
var open_instruct_text_deval_test =
    "<h2>The machine is still malfunctioning.</h2><br>" +
    "<h2>You can tip the machine at any time.</h2><br>" +
    "<h2>No lights or snacks will appear,</h2><br>" +
    "<h2>but your snacks will be recorded. </h2><br>" +
    "<h2>Get all the snacks that you want!</h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin. </h2>";
var close_instruct_text_deval_test = "Close Instruction Deval Test";

var popup_machine_deval_test = true;
var popup_duration_machine_deval_test = 9; // (seconds)
var popup_text_machine_deval_test = "You can tip the machine anytime in this stage. Any snacks you earn will be recorded.";

/************************************************************
 * VOR Virtual Outcome Reinstatement
 ************************************************************/
var VOR_block_num = 3;
var extinct_duration = 4;
var OI_duration_A = 6000; //default: 6000
var OI_duration_B = 1500;
var OI_threshold = 30;
var VOR_duration = 300;

var open_instruct_VOR = true;
var close_instruct_VOR = false;
var open_instruct_text_VOR =
    "<h2>The vending machine is still malfunctioning.</h2><br>" +
    "<h2>You can tip the machine and </h2>" +
    "<h2>see what happens.</h2><br>" +
    "<h2>Get all the snacks that you want!</h2><br>" +
    "<h2>Press any key to begin.</h2>";
var close_instruct_text_VOR =
    "<h2>Close instruction for VOR</h2>";

/************************************************************
 * Recall(memory test)
 ************************************************************/
var open_instruct_recall = true;
var close_instruct_recall = false;
var open_instruct_text_recall =
    "<h2>We would like to ask about<h2>" +
    "<h2>what you learnt in the game.</h2><br>" +
    "<h2></h2><br>" +
    "<h2>Press any key to begin.</h2>";
var close_instruct_text_recall =
    "<h2>Thank you. </h2><br>" +
    "<h2></h2><br>" +
    "<h2> Press any key to continue. </h2>";

/************************************************************
 * transfer_q
 ************************************************************/
var open_instruct_transfer_q = false;
var close_instruct_transfer_q = true;
var open_instruct_text_transfer_q =
    "<h2>Open instruction for transfer_q</h2>";
var close_instruct_text_transfer_q =
    "<h2>Thank you.</h2><br>" +
    "<h2>That is it for the memory test.</h2><br>" +
    "<h2></h2><br>" +
    "<h2> Press any key to continue. </h2>";
var transfer_q_q1_stim1_colour = true;
var transfer_q_q2_stim1_colour = false;
var transfer_q_q3_stim1_colour = true;
var transfer_q_q1_stim2_colour = true;
var transfer_q_q2_stim2_colour = false;
var transfer_q_q3_stim2_colour = true;
var transfer_q_q1_stim3_colour = true;
var transfer_q_q2_stim3_colour = false;
var transfer_q_q3_stim3_colour = true;
var transfer_q_q1_stim4_colour = true;
var transfer_q_q2_stim4_colour = false;
var transfer_q_q3_stim4_colour = true;
var transfer_q_1a_questiontext = "How likely are you to get food if you tip the machine now?";
var transfer_q_1b_questiontext = "How do you know?";
var transfer_q_1a_lvas = "very unlikely";
var transfer_q_1a_rvas = "very likely";
var transfer_q_2a_questiontext = "Does it matter which direction you tip the machine?";
var transfer_q_2b_questiontext = "Why do you think so?";
var transfer_q_2a_lvas = "not important";
var transfer_q_2a_rvas = "very important";
var transfer_q_3a_questiontext = "What direction should you tip the machine to get a snack now?";
var transfer_q_3b_questiontext = "How do you know?";
var transfer_q_3a_lvas = "left";
var transfer_q_3a_rvas = "right";
var transfer_q_text_limit = 5;
var transfer_popup_text = "Please provide us with a little more information.";

/************************************************************
 * Close HIT Questions
 ************************************************************/
var close_instruct_text_close_HIT_q = "Thank you for your participation!";
var participant_feedback_popup_text = "Please provide us with a little more feedback."
var participant_feedback_text_limit = 15

/************************************************************
 * Thanks
 ************************************************************/
var close_instruct_text_thanks =
    "<h2>Thank you!</h2><br>" +
    "<h2>Press any key to close this window</h2>" +
    "<h2>and return to the AMT page.</h2><br>" +
    "<h2>Please do NOT click on the ‘X’</h2>" +
    "<h2>at the top right of this window.</h2><br>" +
    "<h2>Clicking the 'X' will stop payment.</h2>";

/************************************************************
 * Timer Popups
 ************************************************************/
/* Default */
var answer_latency_text_floor = 'Please read the questions carefully before answering. Click the ‘x’ to continue.';
var answer_latency_text_ceiling = 'There are no incorrect answers in this questionnaire. Please select the most correct statement that applies to you. Press the ‘x’ to continue.';
/* Default */

/* _SI */
var popup_answer_latency_floor_SI = true;
var answer_latency_floor_SI = 630;

var popup_answer_latency_ceiling_SI = true;
var answer_latency_ceiling_SI = 180000;
/* _SI */

/* _SDS */
var popup_answer_latency_floor_SDS = true;
var answer_latency_floor_SDS = 1430;

var popup_answer_latency_ceiling_SDS = true;
var answer_latency_ceiling_SDS = 180000;
/* _SDS */

/* _ICAR */
var popup_answer_latency_floor_ICAR = true;
var answer_latency_floor_ICAR = 2230;

var popup_answer_latency_ceiling_ICAR = true;
var answer_latency_ceiling_ICAR = 180000;
/* _ICAR */
