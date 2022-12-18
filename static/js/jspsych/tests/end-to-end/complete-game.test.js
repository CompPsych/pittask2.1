const puppeteer = require("puppeteer");
const timeout = 215000;

const headless_browser = true;

let browser;
let page;

// functions helpers
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

function getRangeInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const raceSelectors = (page, selectors) => {
  return Promise.race(
    selectors.map(selector => {
      return page
        .waitForSelector(selector, {
          visible: true,
        })
        .then(() => selector )
    }),
  );
};

describe("Browser run", () => {
  test("browser settings", async () => {
    browser = await puppeteer.launch({
      headless: headless_browser,
      slowMo: 0,
      devtools: false,
    });

    page = await browser.newPage();
    page.emulate({
      viewport: {
        width: 800,
        height: 800,
      },
      userAgent: "",
    });
  });

  function makeid() {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  let assignmentId = "debug" + makeid();
  let hitId = "debug" + makeid();
  let workerId = "debug" + makeid();
  let href =
    "/consent?assignmentId=" +
    assignmentId +
    "&hitId=" +
    hitId +
    "&workerId=" +
    workerId +
    "&mode=debug";

  test("begin testing", async () => {
      await page.goto("http://localhost:22362" + href);
      await page.waitForSelector("#container-consent");
      await page.click(".btn-primary");
  }, timeout);

}, timeout);


describe('key testing', () => {

  test("define variables from parameters.js", async () => {
    // wait until all global variables are available
    await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
  
    stim_duration = await page.evaluate(() => stim_duration);
    ITI_duration = await page.evaluate(() => ITI_duration);
    open_instruct_latency = await page.evaluate(() => open_instruct_latency);
    close_instruct_latency = await page.evaluate(() => close_instruct_latency);
    interval_num = await page.evaluate(() => interval_num);
    interval_duration = await page.evaluate(() => interval_duration);
    outcome_duration = await page.evaluate(() => outcome_duration);
    feedback_duration = await page.evaluate(() => feedback_duration);
    answer_latency = await page.evaluate(() => answer_latency);
    open_instruct_text_WBF = await page.evaluate(() => open_instruct_text_WBF);
    close_instruct_text_WBF = await page.evaluate(() => close_instruct_text_WBF);
    open_instruct_FHQ_pre_rating = await page.evaluate(() => open_instruct_FHQ_pre_rating);
    close_instruct_FHQ_pre_rating = await page.evaluate(() => close_instruct_FHQ_pre_rating);
    open_instruct_text_FHQ_pre_rating = await page.evaluate(() => open_instruct_text_FHQ_pre_rating);
    close_instruct_text_FHQ_pre_rating = await page.evaluate(() => close_instruct_text_FHQ_pre_rating);
    open_instruct_FHQ_post_rating = await page.evaluate(() => open_instruct_FHQ_post_rating);
    close_instruct_FHQ_post_rating = await page.evaluate(() => close_instruct_FHQ_post_rating);
    open_instruct_text_FHQ_post_rating = await page.evaluate(() => open_instruct_text_FHQ_post_rating);
    close_instruct_text_FHQ_post_rating = await page.evaluate(() => close_instruct_text_FHQ_post_rating);
    open_instruct_RL1 = await page.evaluate(() => open_instruct_RL1);
    close_instruct_RL1 = await page.evaluate(() => close_instruct_RL1);
    open_instruct_text_RL1 = await page.evaluate(() => open_instruct_text_RL1);
    close_instruct_text_RL1 = await page.evaluate(() => close_instruct_text_RL1);
    open_instruct_RL2 = await page.evaluate(() => open_instruct_RL2);
    close_instruct_RL2 = await page.evaluate(() => close_instruct_RL2);
    open_instruct_text_RL2 = await page.evaluate(() => open_instruct_text_RL2);
    close_instruct_text_RL2 = await page.evaluate(() => close_instruct_text_RL2);
    open_instruct_RL3 = await page.evaluate(() => open_instruct_RL3);
    close_instruct_RL3 = await page.evaluate(() => close_instruct_RL3);
    open_instruct_text_RL3 = await page.evaluate(() => open_instruct_text_RL3);
    close_instruct_text_RL3 = await page.evaluate(() => close_instruct_text_RL3);
    open_instruct_inventory = await page.evaluate(() => open_instruct_inventory);
    close_instruct_inventory = await page.evaluate(() => close_instruct_inventory);
    open_instruct_text_key_testing = await page.evaluate(() => open_instruct_text_key_testing);
    close_instruct_text_key_testing = await page.evaluate(() => close_instruct_text_key_testing);
    block_num_transfer_test = await page.evaluate(() => block_num_transfer_test);
    video_duration = await page.evaluate(() => video_duration);
    open_instruct_video = await page.evaluate(() => open_instruct_video);
    close_instruct_video = await page.evaluate(() => close_instruct_video);
    open_instruct_text_video = await page.evaluate(() => open_instruct_text_video);
    close_instruct_text_video = await page.evaluate(() => close_instruct_text_video);
    open_instruct_deval_test = await page.evaluate(() => open_instruct_deval_test);
    close_instruct_deval_test = await page.evaluate(() => close_instruct_deval_test);
    open_instruct_text_deval_test = await page.evaluate(() => open_instruct_text_deval_test);
    close_instruct_text_deval_test = await page.evaluate(() => close_instruct_text_deval_test);
    deval_test_duration = await page.evaluate(() => deval_test_duration);
    open_instruct_pav = await page.evaluate(() => open_instruct_pav);
    close_instruct_pav = await page.evaluate(() => close_instruct_pav);
    open_instruct_text_pav = await page.evaluate(() => open_instruct_text_pav);
    close_instruct_text_pav = await page.evaluate(() => close_instruct_text_pav);
    open_instruct_transfer_test = await page.evaluate(() => open_instruct_transfer_test);
    close_instruct_transfer_test = await page.evaluate(() => close_instruct_transfer_test);
    open_instruct_text_transfer_test = await page.evaluate(() => open_instruct_text_transfer_test);
    close_instruct_text_transfer_test = await page.evaluate(() => close_instruct_text_transfer_test);
    transfer_test1 = await page.evaluate(() => transfer_test1);
    transfer_test2 = await page.evaluate(() => transfer_test2);
    transfer_test3 = await page.evaluate(() => transfer_test3);
    open_instruct_demographics = await page.evaluate(() => open_instruct_demographics);
    close_instruct_demographics = await page.evaluate(() => close_instruct_demographics);
    open_instruct_WBF = await page.evaluate(() => open_instruct_WBF);
    close_instruct_WBF = await page.evaluate(() => close_instruct_WBF);
    open_instruct_ICAR = await page.evaluate(() => open_instruct_ICAR);
    close_instruct_ICAR = await page.evaluate(() => close_instruct_ICAR);
    open_instruct_SDS = await page.evaluate(() => open_instruct_SDS);
    close_instruct_SDS = await page.evaluate(() => close_instruct_SDS);
  
  });

  test("open instruction", async () => {
    await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
    const open_instruct_text_kt = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
    await expect(open_instruct_text_kt).toContain(open_instruct_text_key_testing);
    await delay(open_instruct_latency);
    await page.click("#jspsych-html-keyboard-response-stimulus");
  });

  test("left/right keypress test", async () => {
    await page.waitForSelector('.key-testing-text');
    await page.keyboard.press('ArrowLeft');
    await delay(400);
    await page.keyboard.press('ArrowRight');
  });

  test("close instruction", async () => {
    await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
    const close_instruct_text_kt = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
    await expect(close_instruct_text_kt).toContain(close_instruct_text_key_testing);
    await delay(close_instruct_latency);
    await page.click("#jspsych-html-keyboard-response-stimulus");
  });

});

describe('FHQ1', () => {

  test("open instruction", async () => {
    if(open_instruct_FHQ_pre_rating) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      const open_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
      await expect(open_instruct_text).toContain(open_instruct_text_FHQ_pre_rating);
      await delay(open_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

  test("TT", async () => {
    await page.waitForSelector('.votes-container');
    const e = await page.$('.ui-slider-handle');
    const box = await e.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
    await page.mouse.up();
    await delay(1000);
  });
  
  test("MM", async () => {
    const e = await page.$('.ui-slider-handle');
    const box = await e.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
    await page.mouse.up();
    await delay(1000);
  });

  test("BBQ", async () => {
    const e = await page.$('.ui-slider-handle');
    const box = await e.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
    await page.mouse.up();
    await delay(1000);
  });

  test("HUNGER", async () => {
    const e = await page.$('.ui-slider-handle');
    const box = await e.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
    await page.mouse.up();
    await delay(getRangeInt(200, 1000));
  });
  
  test("close instruction", async () => {
    if(close_instruct_FHQ_pre_rating) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      const close_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
      await expect(close_instruct_text).toContain(close_instruct_text_FHQ_pre_rating);
      await delay(close_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

});

describe('RL1', () => {

  test('open instruction', async () => {
    if(open_instruct_RL1) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      const RL_1_text_instr_open = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
      await expect(RL_1_text_instr_open).toContain(open_instruct_text_RL1);
      await delay(open_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

  test('stage', async () => {

    let is_rl_1 = await raceSelectors(page, ['.rl_stage', '.rl_close_instruct']);

    while (is_rl_1 === '.rl_stage') {
      await page.waitForSelector('.vending-machine');
      for (let index = 0; index < interval_num; index++) {
        var items = ['ArrowLeft', 'ArrowRight'];
        var item = items[Math.floor(Math.random() * items.length)];
        await page.keyboard.press(item);
        if(await page.$('.outcome') !== null) {
          await delay(outcome_duration);
        }
        await delay(interval_duration);
      }

      await delay(feedback_duration);
      await page.waitForSelector(".rl-question-a");
      await delay(answer_latency);
      const innerTextOfButton_inst_cond_first = await raceSelectors(page, ['.rl-question-left', '.rl-question-right']);
      if (innerTextOfButton_inst_cond_first === '.rl-question-left') {
        await page.keyboard.press('ArrowLeft');
      } else if(innerTextOfButton_inst_cond_first === '.rl-question-right') {
        await page.keyboard.press('ArrowRight');
      }
      await page.waitForSelector('.ui-slider-handle');
      let e = await page.$('.ui-slider-handle');
      let box = await e.boundingBox();
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
      await page.mouse.up();

      await delay(feedback_duration);
      await page.waitForSelector(".rl-question-a");
      await delay(answer_latency);
      const innerTextOfButton_inst_cond_second = await raceSelectors(page, ['.rl-question-left', '.rl-question-right']);
      if (innerTextOfButton_inst_cond_second === '.rl-question-left') {
        await page.keyboard.press('ArrowLeft');
      } else if(innerTextOfButton_inst_cond_second === '.rl-question-right') {
        await page.keyboard.press('ArrowRight');
      }
      await page.waitForSelector('.ui-slider-handle');
      e = await page.$('.ui-slider-handle');
      box = await e.boundingBox();
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
      await page.mouse.up();
      await delay(feedback_duration);

      is_rl_1 = await raceSelectors(page, ['.rl_stage', '#jspsych-html-keyboard-response-stimulus']);
      if(is_rl_1 === '#jspsych-html-keyboard-response-stimulus') {
        break;
      }
    }
    await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
  }, timeout);

  test('close instruction', async () => {
    if(close_instruct_RL1) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      const RL_1_text_instr_close = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
      await expect(RL_1_text_instr_close).toContain(close_instruct_text_RL1);
      await delay(close_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

});

describe('transfer_test1', () => {

  test('open instruction', async () => {
      if(open_instruct_transfer_test && transfer_test1) {
        await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
        const open_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
        await expect(open_instruct_text).toContain(open_instruct_text_transfer_test);
        await delay(open_instruct_latency);
        await page.click("#jspsych-html-keyboard-response-stimulus");
      }
  });

  test('stage', async () => {
      if(transfer_test1) {
        await page.waitForSelector('#transfer-test');
        for (let index = 1; index < block_num_transfer_test; index++) {
          for (let i = 0; i < 9; i++) {
            var items = ['ArrowLeft', 'ArrowRight'];
            var item = items[Math.floor(Math.random() * items.length)];
            await delay(stim_duration);
            await page.keyboard.press(item);
            await delay(ITI_duration);
          }
        }
      }
  }, timeout);

  test('close instruction', async () => {
      if(close_instruct_transfer_test && transfer_test1) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const close_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(close_instruct_text).toContain(close_instruct_text_transfer_test);
          await delay(close_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
          await delay(200);
      }
  });

});

describe('RL2', () => {

  test('open instruction', async () => {
    if(open_instruct_RL2) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      await delay(open_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

  test('stage', async () => {

    let is_rl_2 = await raceSelectors(page, ['.rl_stage', '.rl_close_instruct']);
    while (is_rl_2 === '.rl_stage') {
      await page.waitForSelector('.vending-machine');
      for (let index = 0; index < interval_num; index++) {
        var items = ['ArrowLeft', 'ArrowRight'];
        var item = items[Math.floor(Math.random() * items.length)];
        await page.keyboard.press(item);
        if(await page.$('.outcome') !== null) {
          await delay(outcome_duration);
        }
        await delay(interval_duration);
      }

      await delay(feedback_duration);
      await page.waitForSelector(".rl-question-a");
      await delay(answer_latency);
      const innerTextOfButton_inst_cond_first = await raceSelectors(page, ['.rl-question-left', '.rl-question-right']);
      if (innerTextOfButton_inst_cond_first === '.rl-question-left') {
        await page.keyboard.press('ArrowLeft');
      } else if(innerTextOfButton_inst_cond_first === '.rl-question-right') {
        await page.keyboard.press('ArrowRight');
      }
      await page.waitForSelector('.ui-slider-handle');
      let e = await page.$('.ui-slider-handle');
      let box = await e.boundingBox();
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
      await page.mouse.up();
      await delay(feedback_duration);

      await page.waitForSelector(".rl-question-a");
      await delay(answer_latency);
      const innerTextOfButton_inst_cond_second = await raceSelectors(page, ['.rl-question-left', '.rl-question-right']);
      if (innerTextOfButton_inst_cond_second === '.rl-question-left') {
        await page.keyboard.press('ArrowLeft');
      } else if(innerTextOfButton_inst_cond_second === '.rl-question-right') {
        await page.keyboard.press('ArrowRight');
      }
      await page.waitForSelector('.ui-slider-handle');
      e = await page.$('.ui-slider-handle');
      box = await e.boundingBox();
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
      await page.mouse.up();
      await delay(feedback_duration);

      is_rl_2 = await raceSelectors(page, ['.rl_stage', '#jspsych-html-keyboard-response-stimulus']);
      if(is_rl_2 === '#jspsych-html-keyboard-response-stimulus') {
        break;
      }
    }

    await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
  }, timeout);

  test('close instruction', async () => {
    if(close_instruct_RL2) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      const RL_2_text_instr_close = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
      await expect(RL_2_text_instr_close).toContain(close_instruct_text_RL2);
      await delay(close_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    };
  });

});

describe('Pav Conditioning', () => {

  test('open instruction', async () => {
    if(open_instruct_pav) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      const pav_open_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
      await expect(pav_open_instruct_text).toContain(open_instruct_text_pav);
      await delay(open_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

  test('stage', async () => {
    await page.waitForSelector('.pav-conditioning');
    await delay((stim_duration * 4) + (ITI_duration * 4));

    let pav_con = await raceSelectors(page, ['.pavlovian-conditioning-form', '#jspsych-html-keyboard-response-stimulus']);

    while (pav_con === '.pavlovian-conditioning-form' || pav_con === '.pav-conditioning') {

        if(pav_con === '.pav-conditioning') {
          await delay((stim_duration * 4) );
        }

        const machine_color = await raceSelectors(page, ['.stim1_colour', '.stim2_colour', '.stim3_colour', '.stim4_colour']);
        switch (machine_color) {
          case '.stim1_colour':
            await page.evaluate(() => {
              document.querySelector('#jspsych-survey-multi-choice-response-0-0').click();
            });
            break;
          case '.stim2_colour':
            await page.evaluate(() => {
              document.querySelector('#jspsych-survey-multi-choice-response-0-1').click();
            });
            break;
          case '.stim3_colour':
            await page.evaluate(() => {
              document.querySelector('#jspsych-survey-multi-choice-response-0-2').click();
            });
            break;
          case '.stim4_colour':
            await page.evaluate(() => {
              document.querySelector('#jspsych-survey-multi-choice-response-0-3').click();
            });
            break;
        }
        await page.click(".jspsych-btn");
        await delay(feedback_duration);
        pav_con = await raceSelectors(page, ['.pav-conditioning', '.pavlovian-conditioning-form',  '#jspsych-html-keyboard-response-stimulus']);
        if(pav_con === '#jspsych-html-keyboard-response-stimulus') {
          break;
        }
    };

  }, 255000);


  test('close instruction', async () => {
    if(close_instruct_pav) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      const pav_close_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
      await expect(pav_close_instruct_text).toContain(close_instruct_text_pav);
      await delay(close_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });
});

describe('transfer_test2', () => {

  test('open instruction', async () => {
      if(open_instruct_transfer_test && transfer_test2) {
        await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
        const open_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
        await expect(open_instruct_text).toContain(open_instruct_text_transfer_test);
        await delay(open_instruct_latency);
        await page.click("#jspsych-html-keyboard-response-stimulus");
      }
  });

  test('stage', async () => {
      if(transfer_test2){
        await page.waitForSelector('#transfer-test');
        for (let index = 1; index < block_num_transfer_test; index++) {
          for (let i = 0; i < 9; i++) {
            var items = ['ArrowLeft', 'ArrowRight'];
            var item = items[Math.floor(Math.random() * items.length)];
            await delay(stim_duration);
            await page.keyboard.press(item);
            await delay(ITI_duration);
          };
        }
      }
  }, timeout);

  test('close instruction', async () => {
      if(close_instruct_transfer_test && transfer_test2) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const close_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(close_instruct_text).toContain(close_instruct_text_transfer_test);
          await delay(close_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
      }
  });

});

describe('RL3', () => {

  test('open instruction', async () => {
      if(open_instruct_RL3) {
        await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
        const RL_3_text_instr_open = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
        await expect(RL_3_text_instr_open).toContain(open_instruct_text_RL3);
        await delay(open_instruct_latency);
        await page.click("#jspsych-html-keyboard-response-stimulus");
      }
  });

  test('stage', async () => {
      let is_rl_3 = await raceSelectors(page, ['.rl_stage', '.rl_close_instruct']);
      while (is_rl_3 === '.rl_stage') {
        await page.waitForSelector('.vending-machine');
        for (let index = 0; index < interval_num; index++) {
          var items = ['ArrowLeft', 'ArrowRight'];
          var item = items[Math.floor(Math.random() * items.length)];
          await page.keyboard.press(item);
          if(await page.$('.outcome') !== null) {
            await delay(outcome_duration);
          }
          await delay(interval_duration);
        }

        await delay(1000);
        await page.waitForSelector(".rl-question-a");
        await delay(answer_latency);
        const innerTextOfButton_inst_cond_first = await raceSelectors(page, ['.rl-question-left', '.rl-question-right']);
        if (innerTextOfButton_inst_cond_first === '.rl-question-left') {
          await page.keyboard.press('ArrowLeft');
        } else if(innerTextOfButton_inst_cond_first === '.rl-question-right') {
          await page.keyboard.press('ArrowRight');
        }
        await page.waitForSelector('.ui-slider-handle');
        let e = await page.$('.ui-slider-handle');
        let box = await e.boundingBox();
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
        await page.mouse.up();
        await delay(feedback_duration);
    
        await page.waitForSelector(".rl-question-a");
        await delay(answer_latency);
        const innerTextOfButton_inst_cond_second = await raceSelectors(page, ['.rl-question-left', '.rl-question-right']);
        if (innerTextOfButton_inst_cond_second === '.rl-question-left') {
          await page.keyboard.press('ArrowLeft');
        } else if(innerTextOfButton_inst_cond_second === '.rl-question-right') {
          await page.keyboard.press('ArrowRight');
        }
        await page.waitForSelector('.ui-slider-handle');
        e = await page.$('.ui-slider-handle');
        box = await e.boundingBox();
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
        await page.mouse.up();
        await delay(feedback_duration);

        is_rl_3 = await raceSelectors(page, ['.rl_stage', '#jspsych-html-keyboard-response-stimulus', 'video']);
        if(is_rl_3 === '#jspsych-html-keyboard-response-stimulus' || is_rl_3 === 'video') {
          break;
        }
      };

      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
  }, timeout);

  test('close instruction', async () => {
      if(close_instruct_RL3) {
        await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
        const RL_3_text_instr_close = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
        await expect(RL_3_text_instr_close).toContain(close_instruct_text_RL3);
        await delay(close_instruct_latency);
        await page.click("#jspsych-html-keyboard-response-stimulus");
      }
  });

});

describe('Deval video', () => {

  test('open instruction', async () => {
    if(open_instruct_video) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      await delay(open_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

  test('stage', async () => {
    await page.waitForSelector('video');
    await delay(video_duration * 1000);
  }, timeout);

  test('close instruction', async () => {
    if(close_instruct_video) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      await delay(close_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

});

describe('Deval test', () => {

  test('open instruction', async () => {
    if(open_instruct_deval_test) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      const open_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
      await expect(open_instruct_text).toContain(open_instruct_text_deval_test);
      await delay(open_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

  test('stage', async () => {
    await page.waitForSelector('#transfer-test');
    for (let index = 0; index < deval_test_duration / 1000; index++) {
      const items = ['ArrowLeft', 'ArrowRight'];
      const item = items[Math.floor(Math.random() * items.length)];
      await page.keyboard.press(item);
      await delay(1000);
    }
  }, timeout);

  test('close instruction', async () => {
    if(close_instruct_deval_test) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      const close_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
      await expect(close_instruct_text).toContain(close_instruct_text_deval_test);
      await delay(close_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

});

describe('FHQ2', () => {

  test("open instruction", async () => {
    if(open_instruct_FHQ_post_rating) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      const open_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
      await expect(open_instruct_text).toContain(open_instruct_text_FHQ_post_rating);
      await delay(open_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

  test("TT", async () => {
    await page.waitForSelector('.votes-container');
    const e = await page.$('.ui-slider-handle');
    const box = await e.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
    await page.mouse.up();
    await delay(1000);
  });
  
  test("MM", async () => {
    const e = await page.$('.ui-slider-handle');
    const box = await e.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
    await page.mouse.up();
    await delay(1000);
  });

  test("BBQ", async () => {
    const e = await page.$('.ui-slider-handle');
    const box = await e.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
    await page.mouse.up();
    await delay(1000);
  });

  test("HUNGER", async () => {
    const e = await page.$('.ui-slider-handle');
    const box = await e.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
    await page.mouse.up();
    await delay(getRangeInt(200, 1000));
  });
  
  test("close instruction", async () => {
    if(close_instruct_FHQ_post_rating) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      const close_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
      await expect(close_instruct_text).toContain(close_instruct_text_FHQ_post_rating);
      await delay(close_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

});

describe('transfer_test3', () => {

  test('open instruction', async () => {
      if(open_instruct_transfer_test && transfer_test3) {
        await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
        const open_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
        await expect(open_instruct_text).toContain(open_instruct_text_transfer_test);
        await delay(open_instruct_latency);
        await page.click("#jspsych-html-keyboard-response-stimulus");
      }
  });

  test('stage', async () => {
      if(transfer_test3){
        await page.waitForSelector('#transfer-test');
        for (let index = 1; index < block_num_transfer_test; index++) {
          for (let i = 0; i < 9; i++) {
            var items = ['ArrowLeft', 'ArrowRight'];
            var item = items[Math.floor(Math.random() * items.length)];
            await delay(stim_duration);
            await page.keyboard.press(item);
            await delay(ITI_duration);
          };
        }
      }
  }, timeout);

  test('close instruction', async () => {
      if(close_instruct_transfer_test && transfer_test3) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const close_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(close_instruct_text).toContain(close_instruct_text_transfer_test);
          await delay(close_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
      }
  });

});

describe('WBF OPEN', () => {

  test('open instruction', async () => {
    if(open_instruct_WBF) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      const open_instruct_text_cl_op = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
      await expect(open_instruct_text_cl_op).toContain(open_instruct_text_WBF);
      await delay(open_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

});

describe('Demographics', () => {

  test('open instruction', async () => {
    if(open_instruct_demographics) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      await delay(open_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

  test('close instruction', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-DEMOGRAPHICS');
    await page.click("#jspsych-survey-multi-choice-response-0-" + getRandomInt(2));
    const input_year = await page.$('.input-year');
    await input_year.click();
    await input_year.type(getRangeInt(20, 99) + '');
    await page.click('input[data-enable="cm"]');
    const input_height = await page.$('.jspsych-survey-multi-choice-radio-cm');
    await input_height.type(getRangeInt(140, 250) + '');
    await page.click('.jspsych-survey-multi-choice-radio-kg');
    await page.click('.option-input-weight');
    const input_weight = await page.$('.option-input-weight');
    await input_weight.type(getRangeInt(40, 200) + '');
    await page.click("#jspsych-survey-multi-choice-response-4-0");
    await page.click("#jspsych-survey-multi-choice-response-5-0");
    await page.click("#jspsych-survey-multi-choice-response-6-0");
    await page.click("#jspsych-survey-multi-choice-response-7-0");
    await page.evaluate(() => {
      document.querySelector(".jspsych-btn").click();
    });
  });

  test('close instruction', async () => {
    if(close_instruct_demographics) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      await delay(close_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

});

describe('INVENTORY OPEN', () => {

  test('open instruction', async () => {
    if(open_instruct_inventory) {
      await page.waitForSelector('.jspsych-html-keyboard-response-stimulus');
      await delay(open_instruct_latency);
      await page.click(".jspsych-html-keyboard-response-stimulus");
    }
  });

});

describe('OCIR', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-OSC-R');
    for (let index = 0; index < 18; index++) {
      const itemID = getRandomInt(5);
      await delay(getRandomInt(100));
      await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .jspsych-survey-highlight");
    };
  
    await page.evaluate(() => {
      document.querySelector("#jspsych-survey-multi-choice-option-1-0 .jspsych-survey-highlight").click();
      document.querySelector("#jspsych-survey-multi-choice-option-2-3 .jspsych-survey-highlight").click();
    });
    await delay(getRandomInt(200));
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-OSC-R-next').click();
    });
  });

});

describe('MOVES', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-MOVES');
    for (let index = 0; index < 20; index++) {
      const itemID = getRandomInt(4);
      await page.waitForSelector("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .form-radio");
      await delay(getRandomInt(100));
      await page.click("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .form-radio");
    }
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-MOVES-next').click();
    });
  });

});

describe('DASS', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-DASS');
    for (let index = 0; index < 21; index++) {
      const itemID = getRandomInt(4);
      await delay(getRandomInt(120));
      await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .jspsych-survey-highlight");
    }
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-DASS-next').click();
    });
  });

});

describe('ASRS-5', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-ASRS-5');
    await delay(100);
    for (let index = 0; index < 6; index++) {
      const itemID = getRandomInt(5);
      await delay(getRandomInt(100));
      await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .form-radio");
    }
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-ASRS-5-next').click();
    });
  });

});

describe('EAT-26', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-EAT-26');
    await delay(100);
    for (let index = 0; index < 30; index++) {
      const itemID = getRandomInt(5);
      await delay(getRandomInt(90));
      await page.click("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .form-radio");
    }
    await page.click("#jspsych-survey-multi-choice-option-30-0 .form-radio");
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-EAT-26-next').click();
    });
  });

});

describe('RAADS', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-RAADS-14');
    await delay(100);
    for (let index = 0; index < 14; index++) {
      const itemID = getRandomInt(4);
      await delay(getRandomInt(120));
      await page.click("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .form-radio");
    }
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-RAADS-14-next').click();
    });
  });

});

describe('PHQ9', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-PHQ-9');
    await delay(100);
    for (let index = 0; index < 9; index++) {
      const itemID = getRandomInt(4);
      await delay(getRandomInt(150));
      await page.click("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .jspsych-survey-highlight");
    }
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-PHQ-9-next').click();
    });
  });

});

describe('GAD7', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-GAD-7');
    await delay(100);
    for (let index = 0; index < 7; index++) {
      const itemID = getRandomInt(4);
      await delay(getRandomInt(150));
      await page.click("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .jspsych-survey-highlight");
    }
    const itemID = getRandomInt(3);
    await page.click("#jspsych-survey-multi-choice-response-checkbox-0-" + itemID);
    await delay(getRandomInt(550));
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-GAD-7-next').click();
    });
  });

});

describe('LSAS', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-LSAS');
    for (let index = 0; index < 24; index++) {
      const itemID = getRandomInt(4);
      await delay(getRandomInt(100));
      await page.click("#jspsych-survey-multi-choice-option-" + index + "-0-" + itemID + " .jspsych-survey-highlight");
      await page.click("#jspsych-survey-multi-choice-option-" + index + "-1-" + itemID + " .jspsych-survey-highlight");
    }
    await delay(100);
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-LSAS-next').click();
    });
  });

});

describe('ASRM', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-ASRM');
    await delay(100);
    for (let index = 0; index < 5; index++) {
      const itemID = getRandomInt(5);
      await delay(getRandomInt(150));
      await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .jspsych-survey-highlight");
    }
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-ASRM-next').click();
    });
  });

});
describe('PC-PTSD-5', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-PC-PTSD-5');
    const itemIDMain = 0;
    if(itemIDMain === 0) {
      await page.click("#jspsych-survey-multi-choice-option-0-0 .jspsych-survey-highlight");
      for (let index = 1; index < 6; index++) {
        const itemID = getRandomInt(2);
        await delay(getRandomInt(150));
        await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .jspsych-survey-highlight");
      }
    } else {
        await page.click("#jspsych-survey-multi-choice-option-0-1 .jspsych-survey-highlight");
    }
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-PC-PTSD-5-next').click();
    });
  });

});

describe('PRIME', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-PRIME');
    await delay(100);
    for (let index = 0; index < 12; index++) {
      const itemID = getRandomInt(7);
      await delay(getRandomInt(150));
      await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .jspsych-survey-highlight");
    }
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-PRIME-next').click();
    });
  });

});

describe('AUDIT', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-AUDIT');
    await delay(100);
    for (let index = 0; index < 8; index++) {
      const itemID = getRandomInt(5);
      await delay(getRandomInt(150));
      await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .form-radio");
    }
    for (let index = 8; index < 10; index++) {
      const itemID = getRandomInt(2);
      await delay(getRandomInt(150));
      await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .form-radio");
    }
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-AUDIT-next').click();
    });
  });

});

describe('PGSI', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-PGSI');
    await delay(90);
    for (let index = 0; index < 9; index++) {
      const itemID = getRandomInt(4);
      await delay(getRandomInt(100));
      await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .form-radio");
    }
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-PGSI-next').click();
    });
  });

});

describe('YIAT', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-YIAT');
    await delay(90);
    for (let index = 0; index < 12; index++) {
      const itemID = getRandomInt(5);
      await delay(getRandomInt(80));
      await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .form-radio");
    }
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-YIAT-next').click();
    });
  });

});
describe('Smoking Status, FTND', () => {

  test('stage', async () => {
    const itemIDMainSmoking = getRandomInt(2);
    const itemIDFTND = getRandomInt(2);
    await page.waitForSelector('#jspsych-survey-multi-choice-smoking-status');
    await delay(getRandomInt(350));
    await page.click("#jspsych-survey-multi-choice-option-0-" + itemIDMainSmoking + " .form-radio");
    await delay(getRandomInt(350));
    await page.click("#jspsych-survey-multi-choice-option-1-" + itemIDFTND + " .form-radio");
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-smoking-status-next').click();
    });
    if(itemIDFTND <= 1) {
        await page.waitForSelector('#jspsych-survey-multi-choice-FTND');
        for (let index = 0; index < 6; index++) {
          await delay(getRandomInt(150));
          await page.click("#jspsych-survey-multi-choice-" + index + " .form-radio");
        }
        await page.evaluate(() => {
          document.querySelector('#jspsych-survey-multi-choice-FTND-next').click();
        });
    }
  });

});

describe('ISI', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-ISI');
    await delay(getRandomInt(50));
    for (let index = 0; index < 3; index++) {
      const itemID = getRandomInt(5);
      await delay(getRandomInt(100));
      await page.click("#jspsych-survey-multi-choice-option-0-" + index + "-" + itemID + " .jspsych-survey-highlight");
    }
    for (let index = 1; index < 5; index++) {
      const itemID = getRandomInt(5);
      await delay(getRandomInt(100));
      await page.click("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .jspsych-survey-highlight");
    }
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-ISI-next').click();
    });
  });

});

describe('PID-5-BF', () => {

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-PID-5-BF');
    await delay(getRandomInt(50));
    for (let index = 0; index < 25; index++) {
      const itemID = getRandomInt(4);
      await delay(getRandomInt(100));
      await page.click("#jspsych-survey-multi-choice-option-" + index + "-" + itemID + " .jspsych-survey-highlight");
    }
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-PID-5-BF-next').click();
    });
  });

});

describe('INVENTORY CLOSE', () => {

  test('close instruction', async () => {
    if(close_instruct_inventory) {
      await page.waitForSelector('.jspsych-html-keyboard-response-stimulus');
      await delay(close_instruct_latency);
      await page.click(".jspsych-html-keyboard-response-stimulus");
    }
  });

});

describe('SDS', () => {

  test('open instruction', async () => {
    if(open_instruct_SDS) {
      await page.waitForSelector('.jspsych-html-keyboard-response-stimulus');
      await delay(open_instruct_latency);
      await page.click(".jspsych-html-keyboard-response-stimulus");
    }
  });

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-SDS');
    await delay(getRandomInt(400));
    let SDS_itemID = getRandomInt(10);
    for (let index = 0; index < 3; index++) {
      await delay(getRandomInt(400));
      await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + SDS_itemID + " .jspsych-survey-highlight");
    }
    await delay(500);
    await page.evaluate(() => {
        document.querySelector('.select-days-3 > option:nth-child(3)').selected = true;
        element = document.querySelector('#jspsych-survey-multi-choice-response-3-3');
        var event = new Event('change', { bubbles: true });
        event.simulated=true;
        element.dispatchEvent(event);
    });
    await delay(500);
    await page.evaluate(() => {
        document.querySelector('.select-days-4 > option:nth-child(3)').selected = true;
        element = document.querySelector('#jspsych-survey-multi-choice-response-4-3');
        var event = new Event('change', { bubbles: true });
        event.simulated=true;
        element.dispatchEvent(event);
    });
    
    await delay(200);
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-SDS-next').click();
    });
    await delay(200);
  });

  test('close instruction', async () => {
    if(close_instruct_SDS) {
      await page.waitForSelector('.jspsych-html-keyboard-response-stimulus');
      await delay(close_instruct_latency);
      await page.click(".jspsych-html-keyboard-response-stimulus");
    }
  });

});


describe('ICAR', () => {

  test('open instruction', async () => {
    if(open_instruct_ICAR) {
      await page.waitForSelector('.jspsych-html-keyboard-response-stimulus');
      await delay(open_instruct_latency);
      await page.click(".jspsych-html-keyboard-response-stimulus");
    }
  });

  test('stage', async () => {
    await page.waitForSelector('#jspsych-survey-multi-choice-ICAR');
    for (let index = 0; index < 16; index++) {
      const itemID = getRandomInt(6);
      await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + ' .jspsych-survey-multi-choice-text');
      if(index !== 15) {
        await page.evaluate(() => {
          document.querySelector('.next-question').click();
        });
      };
      await delay(500);
    };
    await page.waitForSelector('#jspsych-survey-multi-choice-ICAR-next');
    await delay(700);
    await page.evaluate(() => {
      document.querySelector('#jspsych-survey-multi-choice-ICAR-next').click();
    });
  }, timeout);

  test('close instruction', async () => {
    if(close_instruct_ICAR) {
      await page.waitForSelector('.jspsych-html-keyboard-response-stimulus');
      await delay(close_instruct_latency);
      await page.click(".jspsych-html-keyboard-response-stimulus");
    }
  });

});


describe('WBF CLOSE', () => {

  test('close instruction', async () => {
    if(close_instruct_WBF) {
      await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
      const close_instruct_text_cl_op = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
      await expect(close_instruct_text_cl_op).toContain(close_instruct_text_WBF);
      await delay(close_instruct_latency);
      await page.click("#jspsych-html-keyboard-response-stimulus");
    }
  });

});


describe('Close HIT', () => {

  test('stage', async () => {
    await page.waitForSelector("#jspsych-survey-multi-choice-preamble");
    for (let index = 0; index < 3; index++) {
      const itemID = getRandomInt(2);
      await delay(getRandomInt(100));
      await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .form-radio");
    };
    await page.click("#jspsych-survey-multi-choice-next");
  });

});

describe('Thanks', () => {

  test('stage', async () => {
    await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
    await delay(close_instruct_latency + 1000);
    await page.click("#jspsych-html-keyboard-response-stimulus");
  });

});


describe("Finishing testing", () => {
    test('Experiment complete!', async () => {
      await page.waitForSelector("#container-not-an-ad");
    }, timeout);

    // debug mode
    // test('Experiment complete!', async () => {
    //   await page.waitForSelector("#jspsych-data-display");
    // }, timeout);

    afterAll(async () => {
      await browser.close();
    });
  },
  timeout
);