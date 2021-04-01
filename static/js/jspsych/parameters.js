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
var re_captcha = false;
var re_captcha_duration = 180;
var full_screen_mode = false;
var open_instruct_latency = 1500;
var close_instruct_latency = 500;
var popup_text_behav = "Please provide your answer prior to submission.";
var popup_text_WBF = "Sorry, all questions need to be answered prior to submission.";
var popup_browser = true;
var popup_text_browser = "Please focus on the experiment by keeping the application active in your browser.";
var browser_inactivated_duration = 120;
var browser_inactivated_num = 10;
var popup_exit = true;
var popup_text_exit = "Are you sure you want to leave the experiment?";
var browser_inactivated_notif = true;
var browser_inactivated_notif_text = "The experiment has ended because you were absent for too long.";
var popup_translator = true;
var popup_translator_text = "Please turn off the translation software otherwise you'll be banned from this HIT."
var translator_detected_notif = true;
var translator_detected_nofit_text = "The experiment has ended because you didn't turn the translator off."

/************************************************************
 * ==================== WEB-BASED FORMS ====================
 ************************************************************
/************************************************************
 * Web-based forms
 ***********************************************************/
var open_instruct_WBF = true;
var close_instruct_WBF = false;
var open_instruct_text_WBF =
    "<p>Now we would like to ask you some questions.</p><br>" +
    "<p>Press any key when you are ready.</p>";
var close_instruct_text_WBF =
    "<p>Thank you.</p> <p>Press any key when you are ready to start.</p>";

var open_instruct_inventory = true;
var close_instruct_inventory = false;
var open_instruct_text_inventory =
    "<p>We would like to ask about some experiences you may have had.</p><br>" +
    "<p>This is in order to help people who may be troubled by such experiences.</p><br>" +
    "<p>Your answers are anonymous and will not influence your payment.</p><br>" +
    "<p>Press any key to continue.</p>";
var close_instruct_text_inventory = "Symptom inventories close";

var open_instruct_demographics = false;
var close_instruct_demographics = false;
var open_instruct_text_demographics =
    "<p>We would like to ask some questions about you.</p><br>" +
    "<p>Your answers are anonymous and will not influence your payment.</p><br>" +
    "<p>Press any key to begin</p>";
var close_instruct_text_demographics = "Demographics close";

var open_instruct_SDS = false;
var close_instruct_SDS = false;
var open_instruct_text_SDS = "SDS open";
var close_instruct_text_SDS = "SDS close";

var open_instruct_ICAR = false;
var close_instruct_ICAR = false;
var open_instruct_text_ICAR = "ICAR open";
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
    PID
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
    "<p>This is a key-testing stage.</p>" +
    "<p>We need to check whether your keyboard is working properly.</p>" +
    "<p>Press any key when you are ready.</p>";
var close_instruct_text_key_testing =
    "<p>Thank you for your patience.</p>" +
    "<p>Press any key when you are ready to start.</p>";

/***********************************************************
* Food and Hunger Questions
***********************************************************/
var open_instruct_FHQ_pre_rating = true;
var close_instruct_FHQ_pre_rating = true;
var open_instruct_text_FHQ_pre_rating =
    "<p>Now we would like to ask you some questions about your food preferences.</p><br>" +
    "<p>Press any key to continue. </p>";
var close_instruct_text_FHQ_pre_rating =
    "<p>Thank you. That is it for the food questions for now.</p><p> Press any key to continue. </p>";

var open_instruct_FHQ_post_rating = true;
var close_instruct_FHQ_post_rating = true;
var open_instruct_text_FHQ_post_rating =
    "<p>Now we would again like to ask you some questions about your food preferences.</p><br>" +
    "<p>Press any key to continue. </p>";
var close_instruct_text_FHQ_post_rating =
    "<p>Thank you. That is it for the food questions.</p><p> Press any key to continue. </p>";

var FHQ_1 = "How much would you like a Tiny Teddy?";
var FHQ_2 = "How much would you like an M&M?";
var FHQ_3 = "How much would you like A BBQ shape?";
var FHQ_4 = "How hungry do you feel right now?";
var FHQ_1_bottom_text = "Rate your desire for a Tiny Teddy";
var FHQ_2_bottom_text = "Rate your desire for an M&M";
var FHQ_3_bottom_text = "Rate your desire for A BBQ shape";
var FHQ_VAS_left = "Not at all";
var FHQ_VAS_center = "";
var FHQ_VAS_right = "Very much";
var FHQ_VAS_left_hungry = "Not at All";
var FHQ_VAS_right_hungry = "Extremely";
var FHQ_VAS_instruct = "<li><span>Please select your answer on the scale.</span></li>";
/************************************************************
 * ===================== GUI COLORS =========================
 * stim1_colour = green - associated with MM image
 * stim2_colour = blue - associated with BBQ image
 * stim3_colour = red - associated with TT image
 * stim4_colour = yellow - associated with Empty image
 ************************************************************/
var stim1_colour = "rgb(0,128,0)";
var stim2_colour = "rgb(0,0,255)";
var stim3_colour = "rgb(255,0,0)";
var stim4_colour = "rgb(255,215,0)";

/************************************************************
 * Pavlovian Conditioning
 ************************************************************/
var min_num_correct_pav = 4;
var max_num_incorrect_pav = 10;
var open_instruct_pav = true;
var close_instruct_pav = false;
var open_instruct_text_pav =
    "<p>The vending machine is still overflowing. But it cannot be tipped now.</p><br>" +
    "<p>Coloured lights will appear on the machine will show you which snack will fall out.</p><br>" +
    "<p>Press any key to begin. </p>";
var close_instruct_text_pav =
    "<p>The vending machine is still overflowing, and you can tip it again now.</p><br> " +
    "<p>The coloured lights will sometimes appear.</p><br> " +
    "<p>You won't always see the snack fall out. All the snacks you get will be recorded.</p><br>" +
    "<p>Get all the snacks that you want!</p>" +
    "<br><p>Press any key to begin. </p>";

/************************************************************
 * ======================== VVR =============================
 ************************************************************/
var interval_duration = 500;
var interval_num = 60;
var answer_latency_countdown = false;
var answer_latency = 1000;
var answer_latency_text = "Please wait for a moment till you can answer the question...";
var VVR_q_text_a1 = "Which direction did you tilt to get";
var VVR_q_text_a2 = "Press left or right button";
var VVR_q_text_b1 = "How strongly do you believe in your answer?";
var VVR_q_text_b2 = "Very little";
var VVR_q_text_b3 = "Very much";
var VVR_q_text_b4 =
    "<li><span>Please select your answer on the scale.</span></li>" +
    "<li><span>Click 'Submit answer' when ready.</span></li>";

/************************************************************
 * Instrumental conditioning [VVR_1]
 ************************************************************/
var degrad_pattern_VVR1 = ["d0"];
var prob_value_VVR1 = [0.2];
var min_blocks_num_VVR1 = 2;
var min_num_correct_VVR1 = 4;
var max_num_incorrect_VVR1 = 10;
var open_instruct_VVR1 = true;
var close_instruct_VVR1 = false;
var open_instruct_text_VVR1 =
    "<p>A vending machine is overflowing with snacks.</p><br>" +
    "<p>You can tip the machine and see what snacks fall out.</p><br>" +
    "<p>Get all the snacks that you want!</p><br>" +
    "<p>Press any key to begin.</p>";
var close_instruct_text_VVR1 = "Thank you for your input. Proceeding to the next stage.";

var popup_machine_VVR1 = true;
var popup_duration_machine_VVR1 = 5; // (seconds)
var popup_text_machine_VVR1 = 'Don’t forget, you can tip the machine any time in this stage to earn snacks.';

/************************************************************
 * Contingency degradation [VVR_2]
 ************************************************************/
var degrad_pattern_VVR2 = ["d1"];
var prob_value_VVR2 = [0.2];
var min_blocks_num_VVR2 = 2;
var min_num_correct_VVR2 = 0;
var max_num_incorrect_VVR2 = 0;
var open_instruct_VVR2 = true;
var close_instruct_VVR2 = false;
var open_instruct_text_VVR2 =
    "<p>The vending machine is still overflowing with snacks.</p><br>" +
    "<p>You can tip the machine and see what snacks fall out.</p><br>" +
    "<p>Get all the snacks that you want!</p><br>" +
    "<p>Press any key to begin.</p>";
var close_instruct_text_VVR2 = "Thank you for your input. Proceeding to the next stage.";

var popup_machine_VVR2 = true;
var popup_duration_machine_VVR2 = 10; //(seconds)
var popup_text_machine_VVR2 = "Don’t forget, you can tip the machine any time in this stage to earn snacks.";

/************************************************************
 * Contingency restoration [VVR_3]
 ************************************************************/
var degrad_pattern_VVR3 = ["d0"];
var prob_value_VVR3 = [0.2];
var min_blocks_num_VVR3 = 2;
var min_num_correct_VVR3 = 2;
var max_num_incorrect_VVR3 = 4;
var open_instruct_VVR3 = true;
var close_instruct_VVR3 = false;
var open_instruct_text_VVR3 =
    "<p>A vending machine is overflowing with snacks.</p><br>" +
    "<p>You can tip the machine and see what snacks fall out.</p><br>" +
    "<p>Get all the snacks that you want!</p><br>" +
    "<p>Press any key to begin.</p>";
var close_instruct_text_VVR3 = "Thank you for your input. Proceeding to the next stage.";

var popup_machine_VVR3 = true;
var popup_duration_machine_VVR3 = 10; //(seconds)
var popup_text_machine_VVR3 = "Don’t forget, you can tip the machine any time in this stage to earn snacks.";

/************************************************************
 * Transfer Test
 ************************************************************/
var block_num_transfer_test = 2; // default 2
var transfer_test1 = false;
var transfer_test2 = true;
var transfer_test3 = true;
var open_instruct_transfer_test = true;
var close_instruct_transfer_test = false;
var open_instruct_text_transfer_test =
    "<p>The vending machine is still overflowing.</p> " +
    "<p>You will see coloured lights on the machine again.</p><br>" +
    "<p>You can tip the machine at any time.</p>" +
    "<p>You won’t see the snack fall out of the machine, </p>" +
    "<p>but the snacks you get will be recorded. </p><br>" +
    "<p>Get all the snacks that you want!</p><br>" +
    "<p>Press any key to begin. </p>";
var close_instruct_text_transfer_test = "Close Instruction Transfer Test";

var popup_machine_transfer1 = true;
var popup_duration_machine_transfer1 = 15; // (seconds)
var popup_text_machine_transfer1 = "You can tip the machine any time in this stage. Any snacks you earn will be recorded.";

/************************************************************
 * Deval Video
 ***********************************************************/
var video_duration = 30;
var video_sound = false;
var open_instruct_video = true;
var open_instruct_text_video =
    "<p>You discover something new about one of the snacks. Watch and see what has changed.</p><br>" +
    "<p> press any key to begin.</p>";
var close_instruct_video = true;
var close_instruct_text_video =
    "<p>The vending machine is still overflowing, and you can tip it again now.</p><br><br> " +
    "<p>You won't always see the snack fall out. All the snacks you get will be recorded.</p><br>" +
    "<p>Get all the snacks that you want!</p><br>" +
    "<p>Press any key to begin. </p>";

/************************************************************
 * Deval Test
 ************************************************************/
var deval_test_duration = 30000; // default 120000
var open_instruct_deval_test = true;
var close_instruct_deval_test = false;
var open_instruct_text_deval_test =
    "<p>The vending machine is still overflowing.</p><br>" +
    "<p>You can again tip the machine at any time.</p>" +
    "<p>No coloured lights or snacks will appear,</p>" +
    "<p>but the snacks you get will be recorded. </p><br>" +
    "<p>Get all the snacks that you want!</p><br>" +
    "<p>Press any key to begin. </p>";
var close_instruct_text_deval_test = "Close Instruction Deval Test";

var popup_machine_deval_test = true;
var popup_duration_machine_deval_test = 5; // (seconds)
var popup_text_machine_deval_test = "You can tip the machine any time in this stage. Any snacks you earn will be recorded.";

/************************************************************
 * VOR Virtual Outcome Reinstatement
 ************************************************************/
var VOR_block_num = 3;
var extinct_duration = 10;
var OI_duration_A = 6000;
var OI_duration_B = 5000;
var OI_threshold = 30;
var VOR_duration = 180;

var open_instruct_VOR = false;
var close_instruct_VOR = false;
var open_instruct_text_VOR =
    "<p>Open instruction for VOR</p>";
var close_instruct_text_VOR =
    "<p>Close instruction for VOR</p>";

/************************************************************
 * Recall(memory test)
 ************************************************************/
var open_instruct_recall = false;
var close_instruct_recall = false;
var open_instruct_text_recall =
    "<p>Open instruction Recall</p>";
var close_instruct_text_recall =
    "<p>Close instruction Recall</p>";

/************************************************************
 * transfer_q
 ************************************************************/
var open_instruct_transfer_q = false;
var close_instruct_transfer_q = false;
var open_instruct_text_transfer_q =
    "<p>Open instruction for transfer_q</p>";
var close_instruct_text_transfer_q =
    "<p>Close instruction for transfer_q</p>";
var transfer_q_q1_stim1_colour = true;
var transfer_q_q2_stim1_colour = true;
var transfer_q_q3_stim1_colour = true;
var transfer_q_q1_stim2_colour = true;
var transfer_q_q2_stim2_colour = true;
var transfer_q_q3_stim2_colour = true;
var transfer_q_q1_stim3_colour = true;
var transfer_q_q2_stim3_colour = true;
var transfer_q_q3_stim3_colour = true;
var transfer_q_q1_stim4_colour = true;
var transfer_q_q2_stim4_colour = true;
var transfer_q_q3_stim4_colour = true;
var transfer_q_1a_questiontext = "How likely is it that you will you get food if you tilt the machine now?";
var transfer_q_1b_questiontext = "How do you know?";
var transfer_q_1a_lvas = "Very Unlikely";
var transfer_q_1a_rvas = "Very Likely";
var transfer_q_2a_questiontext = "Does it matter which direction you tilt the machine?";
var transfer_q_2b_questiontext = "Why do you think so?";
var transfer_q_2a_lvas = "Not Important";
var transfer_q_2a_rvas = "Very Important";
var transfer_q_3a_questiontext = "What direction should you tilt the machine to get a snack now?";
var transfer_q_3b_questiontext = "How do you know?";
var transfer_q_3a_lvas = "Left";
var transfer_q_3a_rvas = "Right";
var transfer_q_text_limit = 50;
var transfer_popup_text = "You must provide your answer in the text box before proceeding (minimum of " + transfer_q_text_limit + " characters).";

/************************************************************
 * Close HIT Questions
 ************************************************************/
var close_instruct_text_close_HIT_q = "Thank you for your participation!";

/************************************************************
 * Thanks
 ************************************************************/
var close_instruct_text_thanks =
    "<p>Thank you!</p>" +
    "<p>Press any key to return to the Amazon Mechanical Turk page.</p>" +
    "<p>This window will close automatically after any keypress on the keyboard.</p><br>" +
    "<p>Please do NOT close the window by clicking on the ‘X’ at the top right corner of this window.</p>" +
    "<p>Otherwise, we cannot process your payment.</p>";

/************************************************************
 * Timer Popups
 ************************************************************/
/* Default */
var answer_latency_text_floor = 'Please read the questions carefully before answering. Click the ‘x’ to continue.';
var answer_latency_text_ceiling = 'There are no incorrect answers in this questionnaire. Please select the most correct statement that applies to you. Press the ‘x’ to continue.';
/* Default */

/* _SI */
var popup_answer_latency_floor_SI = true;
var answer_latency_floor_SI = 4000;

var popup_answer_latency_ceiling_SI = true;
var answer_latency_ceiling_SI = 10000;
/* _SI */

/* _SDS */
var popup_answer_latency_floor_SDS = true;
var answer_latency_floor_SDS = 4000;

var popup_answer_latency_ceiling_SDS = true;
var answer_latency_ceiling_SDS = 10000;
/* _SDS */

/* _ICAR */
var popup_answer_latency_floor_ICAR = true;
var answer_latency_floor_ICAR = 4000;

var popup_answer_latency_ceiling_ICAR = true;
var answer_latency_ceiling_ICAR = 10000;
/* _ICAR */
