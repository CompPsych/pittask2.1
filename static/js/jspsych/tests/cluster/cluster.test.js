
const { Cluster } = require('puppeteer-cluster');

// const timeout = 750000;
const timeout = 3e+8;

// sets number of concurrency working process
const concurrency_number = 1;
const headless_browser = false;
 
function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRangeInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


describe('DDG', () => {
  let cluster;
  test('Launch browser', async () => {
    cluster = await Cluster.launch({
      concurrency: Cluster.CONCURRENCY_CONTEXT,
      maxConcurrency: concurrency_number,
      monitor: false,
      // sameDomainDelay: 1000, // debug
      puppeteerOptions: {
        headless: headless_browser,
        // slowMo: 50, // debug
        devtools: false,
        timeout: timeout
      },
      timeout: timeout
    });
  });

  test('complete game', async () => {
    await cluster.task(async ({ page, data: url }) => {
   
        await page.goto(url);
        await page.waitForSelector('#container-consent');
        await page.evaluate(() => {
          document.querySelector('.btn-primary').click();
        });

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
        
        const inventory_selectors = [
          '#jspsych-survey-multi-choice-OSC-R',
          '#jspsych-survey-multi-choice-MOVES',
          '#jspsych-survey-multi-choice-DASS',
          '#jspsych-survey-multi-choice-ASRS-5',
          '#jspsych-survey-multi-choice-EAT-26',
          '#jspsych-survey-multi-choice-RAADS-14',
          '#jspsych-survey-multi-choice-PHQ-9',
          '#jspsych-survey-multi-choice-GAD-7',
          '#jspsych-survey-multi-choice-LSAS',
          '#jspsych-survey-multi-choice-ASRM',
          '#jspsych-survey-multi-choice-PC-PTSD-5',
          '#jspsych-survey-multi-choice-PRIME',
          '#jspsych-survey-multi-choice-AUDIT',
          '#jspsych-survey-multi-choice-PGSI',
          '#jspsych-survey-multi-choice-YIAT',
          '#jspsych-survey-multi-choice-smoking-status',
          '#jspsych-survey-multi-choice-ISI',
          '#jspsych-survey-multi-choice-PID-5-BF',
          '#jspsych-survey-multi-choice-SDS',
          '.jspsych-html-keyboard-response-stimulus'
        ];

        
        await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');

        // Get global variables
        const stim_duration = await page.evaluate(() => stim_duration);
        const ITI_duration = await page.evaluate(() => ITI_duration);
        const open_instruct_latency = await page.evaluate(() => open_instruct_latency);
        const close_instruct_latency = await page.evaluate(() => close_instruct_latency);
        const interval_num = await page.evaluate(() => interval_num);
        const interval_duration = await page.evaluate(() => interval_duration);
        const outcome_duration = await page.evaluate(() => outcome_duration);
        const feedback_duration = await page.evaluate(() => feedback_duration);
        const answer_latency = await page.evaluate(() => answer_latency);
        const open_instruct_text_WBF = await page.evaluate(() => open_instruct_text_WBF);
        const close_instruct_text_WBF = await page.evaluate(() => close_instruct_text_WBF);
        const open_instruct_FHQ_pre_rating = await page.evaluate(() => open_instruct_FHQ_pre_rating);
        const close_instruct_FHQ_pre_rating = await page.evaluate(() => close_instruct_FHQ_pre_rating);
        const open_instruct_text_FHQ_pre_rating = await page.evaluate(() => open_instruct_text_FHQ_pre_rating);
        const close_instruct_text_FHQ_pre_rating = await page.evaluate(() => close_instruct_text_FHQ_pre_rating);
        const open_instruct_FHQ_post_rating = await page.evaluate(() => open_instruct_FHQ_post_rating);
        const close_instruct_FHQ_post_rating = await page.evaluate(() => close_instruct_FHQ_post_rating);
        const open_instruct_text_FHQ_post_rating = await page.evaluate(() => open_instruct_text_FHQ_post_rating);
        const close_instruct_text_FHQ_post_rating = await page.evaluate(() => close_instruct_text_FHQ_post_rating);
        const open_instruct_VVR1 = await page.evaluate(() => open_instruct_VVR1);
        const close_instruct_VVR1 = await page.evaluate(() => close_instruct_VVR1);
        const open_instruct_text_VVR1 = await page.evaluate(() => open_instruct_text_VVR1);
        const close_instruct_text_VVR1 = await page.evaluate(() => close_instruct_text_VVR1);
        const open_instruct_VVR2 = await page.evaluate(() => open_instruct_VVR2);
        const close_instruct_VVR2 = await page.evaluate(() => close_instruct_VVR2);
        const open_instruct_text_VVR2 = await page.evaluate(() => open_instruct_text_VVR2);
        const close_instruct_text_VVR2 = await page.evaluate(() => close_instruct_text_VVR2);
        const open_instruct_VVR3 = await page.evaluate(() => open_instruct_VVR3);
        const close_instruct_VVR3 = await page.evaluate(() => close_instruct_VVR3);
        const open_instruct_text_VVR3 = await page.evaluate(() => open_instruct_text_VVR3);
        const close_instruct_text_VVR3 = await page.evaluate(() => close_instruct_text_VVR3);
        const open_instruct_inventory = await page.evaluate(() => open_instruct_inventory);
        const close_instruct_inventory = await page.evaluate(() => close_instruct_inventory);
        const open_instruct_text_key_testing = await page.evaluate(() => open_instruct_text_key_testing);
        const close_instruct_text_key_testing = await page.evaluate(() => close_instruct_text_key_testing);
        const block_num_transfer_test = await page.evaluate(() => block_num_transfer_test);
        const video_duration = await page.evaluate(() => video_duration);
        const open_instruct_video = await page.evaluate(() => open_instruct_video);
        const close_instruct_video = await page.evaluate(() => close_instruct_video);
        const open_instruct_text_video = await page.evaluate(() => open_instruct_text_video);
        const close_instruct_text_video = await page.evaluate(() => close_instruct_text_video);
        const open_instruct_deval_test = await page.evaluate(() => open_instruct_deval_test);
        const close_instruct_deval_test = await page.evaluate(() => close_instruct_deval_test);
        const open_instruct_text_deval_test = await page.evaluate(() => open_instruct_text_deval_test);
        const close_instruct_text_deval_test = await page.evaluate(() => close_instruct_text_deval_test);
        const deval_test_duration = await page.evaluate(() => deval_test_duration);
        const open_instruct_pav = await page.evaluate(() => open_instruct_pav);
        const close_instruct_pav = await page.evaluate(() => close_instruct_pav);
        const open_instruct_text_pav = await page.evaluate(() => open_instruct_text_pav);
        const close_instruct_text_pav = await page.evaluate(() => close_instruct_text_pav);
        const open_instruct_transfer_test = await page.evaluate(() => open_instruct_transfer_test);
        const close_instruct_transfer_test = await page.evaluate(() => close_instruct_transfer_test);
        const open_instruct_text_transfer_test = await page.evaluate(() => open_instruct_text_transfer_test);
        const close_instruct_text_transfer_test = await page.evaluate(() => close_instruct_text_transfer_test);
        const open_instruct_demographics = await page.evaluate(() => open_instruct_demographics);
        const open_instruct_WBF = await page.evaluate(() => open_instruct_WBF);
        const close_instruct_WBF = await page.evaluate(() => close_instruct_WBF);

        // key_testing
        const open_instruct_text_kt = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
        await expect(open_instruct_text_kt).toContain(open_instruct_text_key_testing);
        await delay(open_instruct_latency);
        await page.click("#jspsych-html-keyboard-response-stimulus");

        await page.waitForSelector('.key-testing-text');
        await page.keyboard.press('ArrowLeft');
        await delay(200);
        await page.keyboard.press('ArrowRight');

        await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
        const close_instruct_text_kt = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
        await expect(close_instruct_text_kt).toContain(close_instruct_text_key_testing);
        await delay(close_instruct_latency);
        await page.click("#jspsych-html-keyboard-response-stimulus");

        // FHQ1 text open
        if(open_instruct_FHQ_pre_rating) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const open_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(open_instruct_text).toContain(open_instruct_text_FHQ_pre_rating);
          await delay(open_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };

        // FHQ1 TT
        await page.waitForSelector('.votes-container');
        await page.waitForSelector('.ui-slider-handle');
        await delay(getRangeInt(1000, 3000));
        e = await page.$('.ui-slider-handle');
        box = await e.boundingBox();
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
        await page.mouse.up();
        await delay(getRangeInt(1000, 3000));

        // FHQ1 MM
        await page.waitForSelector('.ui-slider-handle');
        await delay(getRangeInt(1000, 3000));
        e = await page.$('.ui-slider-handle');
        box = await e.boundingBox();
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
        await page.mouse.up();
        await delay(getRangeInt(1000, 3000));

        // FHQ1 BBQ
        await page.waitForSelector('.ui-slider-handle');
        await delay(getRangeInt(1000, 3000));
        e = await page.$('.ui-slider-handle');
        box = await e.boundingBox();
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
        await page.mouse.up();
        await delay(getRangeInt(1000, 3000));

        // FHQ1 HUNGER
        await page.waitForSelector('.ui-slider-handle');
        await delay(getRangeInt(1000, 3000));
        e = await page.$('.ui-slider-handle');
        box = await e.boundingBox();
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
        await page.mouse.up();
        await delay(getRangeInt(1000, 3000));


        // FHQ1 text close
        if(close_instruct_FHQ_pre_rating) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const close_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(close_instruct_text).toContain(close_instruct_text_FHQ_pre_rating);
          await delay(close_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };
       
        // open_instruct_VVR1
        if(open_instruct_VVR1) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const VVR_1_text_instr_open = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(VVR_1_text_instr_open).toContain(open_instruct_text_VVR1);
          await delay(open_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        }

        // VVR1
        let is_vvr_1 = await raceSelectors(page, ['.vvr_stage', '.vvr_close_instruct']);
        while (is_vvr_1 === '.vvr_stage') {
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
          await page.waitForSelector(".vvr-question-a");
          await delay(answer_latency);
          const innerTextOfButton_inst_cond_first = await raceSelectors(page, ['.vvr-question-left', '.vvr-question-right']);
          if (innerTextOfButton_inst_cond_first === '.vvr-question-left') {
            await page.keyboard.press('ArrowLeft');
          } else if(innerTextOfButton_inst_cond_first === '.vvr-question-right') {
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
          await page.waitForSelector(".vvr-question-a");
          await delay(answer_latency);
          const innerTextOfButton_inst_cond_second = await raceSelectors(page, ['.vvr-question-left', '.vvr-question-right']);
          if (innerTextOfButton_inst_cond_second === '.vvr-question-left') {
            await page.keyboard.press('ArrowLeft');
          } else if(innerTextOfButton_inst_cond_second === '.vvr-question-right') {
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

          is_vvr_1 = await raceSelectors(page, ['.vvr_stage', '#jspsych-html-keyboard-response-stimulus']);
          if(is_vvr_1 === '#jspsych-html-keyboard-response-stimulus') {
            break;
          }
        }

        // close_instruct_VVR1
        if(close_instruct_VVR1) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const VVR_1_text_instr_close = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(VVR_1_text_instr_close).toContain(close_instruct_text_VVR1);
          await delay(close_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };

        // // transfer_test1
        // if(open_instruct_transfer_test) {
        //   await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
        //   const open_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
        //   await expect(open_instruct_text).toContain(open_instruct_text_transfer_test);
        //   await delay(open_instruct_latency);
        //   await page.click("#jspsych-html-keyboard-response-stimulus");
        // };
        
        // await page.waitForSelector('#transfer-test');
        // for (let index = 1; index < block_num_transfer_test; index++) {
        //   for (let index = 1; index < 8; index++) {
        //     var items = ['ArrowLeft', 'ArrowRight'];
        //     var item = items[Math.floor(Math.random() * items.length)];
        //     await delay(stim_duration);
        //     await page.keyboard.press(item);
        //     await delay(ITI_duration);
        //   }
        // };

        // if(close_instruct_transfer_test) {
        //     await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
        //     const close_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
        //     await expect(close_instruct_text).toContain(close_instruct_text_transfer_test);
        //     await delay(close_instruct_latency);
        //     await page.click("#jspsych-html-keyboard-response-stimulus");
        // };


        // open_instruct_VVR2
        if(open_instruct_VVR2) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const VVR_2_text_instr_open = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(VVR_2_text_instr_open).toContain(open_instruct_text_VVR2);
          await delay(open_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        }

        // VVR2
        let is_vvr_2 = await raceSelectors(page, ['.vvr_stage', '.vvr_close_instruct']);
        while (is_vvr_2 === '.vvr_stage') {
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
          await page.waitForSelector(".vvr-question-a");
          await delay(answer_latency);
          const innerTextOfButton_inst_cond_first = await raceSelectors(page, ['.vvr-question-left', '.vvr-question-right']);
          if (innerTextOfButton_inst_cond_first === '.vvr-question-left') {
            await page.keyboard.press('ArrowLeft');
          } else if(innerTextOfButton_inst_cond_first === '.vvr-question-right') {
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

          await page.waitForSelector(".vvr-question-a");
          await delay(answer_latency);
          const innerTextOfButton_inst_cond_second = await raceSelectors(page, ['.vvr-question-left', '.vvr-question-right']);
          if (innerTextOfButton_inst_cond_second === '.vvr-question-left') {
            await page.keyboard.press('ArrowLeft');
          } else if(innerTextOfButton_inst_cond_second === '.vvr-question-right') {
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

          is_vvr_2 = await raceSelectors(page, ['.vvr_stage', '#jspsych-html-keyboard-response-stimulus']);
          if(is_vvr_2 === '#jspsych-html-keyboard-response-stimulus') {
            break;
          }
        }

        // close_instruct_VVR2
        if(close_instruct_VVR2) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const VVR_2_text_instr_close = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(VVR_2_text_instr_close).toContain(close_instruct_text_VVR2);
          await delay(close_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };

        // Pav Conditioning
        if(open_instruct_pav) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const pav_open_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(pav_open_instruct_text).toContain(open_instruct_text_pav);
          await delay(open_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };

        await page.waitForSelector('.pav-conditioning');
        await delay((stim_duration * 4) + (ITI_duration * 4));

        let pav_con = await raceSelectors(page, ['.pavlovian-conditioning-form', '#jspsych-html-keyboard-response-stimulus']);
  
        while (pav_con === '.pavlovian-conditioning-form' || pav_con === '.pav-conditioning') {

            if(pav_con === '.pav-conditioning') {
              await delay((stim_duration * 4) );
            };

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
            };
        };

        if(close_instruct_pav) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const pav_close_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(pav_close_instruct_text).toContain(close_instruct_text_pav);
          await delay(close_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };

        // transfer_test2
        if(open_instruct_transfer_test) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const open_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(open_instruct_text).toContain(open_instruct_text_transfer_test);
          await delay(open_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };

        await page.waitForSelector('#transfer-test');
        for (let index = 1; index < block_num_transfer_test; index++) {
          for (let index = 1; index < 8; index++) {
            var items = ['ArrowLeft', 'ArrowRight'];
            var item = items[Math.floor(Math.random() * items.length)];
            await delay(stim_duration);
            await page.keyboard.press(item);
            await delay(ITI_duration);
          }
        };

        if(close_instruct_transfer_test) {
            await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
            const close_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
            await expect(close_instruct_text).toContain(close_instruct_text_transfer_test);
            await delay(close_instruct_latency);
            await page.click("#jspsych-html-keyboard-response-stimulus");
        };

        // open_instruct_VVR3
        if(open_instruct_VVR3) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const VVR_3_text_instr_open = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(VVR_3_text_instr_open).toContain(open_instruct_text_VVR3);
          await delay(open_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        }

        // VVR3
        let is_vvr_3 = await raceSelectors(page, ['.vvr_stage', '.vvr_close_instruct']);
        while (is_vvr_3 === '.vvr_stage') {
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
          await page.waitForSelector(".vvr-question-a");
          await delay(answer_latency);
          const innerTextOfButton_inst_cond_first = await raceSelectors(page, ['.vvr-question-left', '.vvr-question-right']);
          if (innerTextOfButton_inst_cond_first === '.vvr-question-left') {
            await page.keyboard.press('ArrowLeft');
          } else if(innerTextOfButton_inst_cond_first === '.vvr-question-right') {
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
      
          await page.waitForSelector(".vvr-question-a");
          await delay(answer_latency);
          const innerTextOfButton_inst_cond_second = await raceSelectors(page, ['.vvr-question-left', '.vvr-question-right']);
          if (innerTextOfButton_inst_cond_second === '.vvr-question-left') {
            await page.keyboard.press('ArrowLeft');
          } else if(innerTextOfButton_inst_cond_second === '.vvr-question-right') {
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
  
          is_vvr_3 = await raceSelectors(page, ['.vvr_stage', '#jspsych-html-keyboard-response-stimulus', 'video']);
          if(is_vvr_3 === '#jspsych-html-keyboard-response-stimulus' || is_vvr_3 === 'video') {
            break;
          }
        };

        // close_instruct_VVR3
        if(close_instruct_VVR3) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const VVR_3_text_instr_close = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(VVR_3_text_instr_close).toContain(close_instruct_text_VVR3);
          await delay(close_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };

        if(open_instruct_video) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          await delay(open_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };

        // Deval Video
        let deval_video = await raceSelectors(page, ['video']);
        await page.waitForSelector('video');
        while (deval_video === 'video') {
          await delay(1000);
          deval_video = await raceSelectors(page, ['video', '.outcome-container', '#jspsych-html-keyboard-response-stimulus']);
          if(deval_video !== 'video') {
            break;
          }
        };

        if(close_instruct_video) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          await delay(close_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        }

        // Deval Test
        if(open_instruct_deval_test) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const open_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(open_instruct_text).toContain(open_instruct_text_deval_test);
          await delay(open_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };

        let deval_test = await raceSelectors(page, ['#transfer-test']);
        while (deval_test === '#transfer-test') {
          const items = ['ArrowLeft', 'ArrowRight'];
          const item = items[Math.floor(Math.random() * items.length)];
          await page.keyboard.press(item);
          await delay(1000);
          deval_test = await raceSelectors(page, ['#transfer-test', '.votes-container', '#jspsych-html-keyboard-response-stimulus']);
          if(deval_test !== '#transfer-test') {
            break;
          }
        };

        if(close_instruct_deval_test) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const close_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(close_instruct_text).toContain(close_instruct_text_deval_test);
          await delay(close_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };

        // FHQ2
        if(open_instruct_FHQ_post_rating) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const open_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(open_instruct_text).toContain(open_instruct_text_FHQ_post_rating);
          await delay(open_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };

        // FHQ2 TT
        await page.waitForSelector('.votes-container');
        await page.waitForSelector('.ui-slider-handle');
        await delay(getRangeInt(1000, 3000));
        e = await page.$('.ui-slider-handle');
        box = await e.boundingBox();
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
        await page.mouse.up();
        await delay(getRangeInt(1000, 3000));

        // FHQ2 MM
        await page.waitForSelector('.ui-slider-handle');
        await delay(getRangeInt(1000, 3000));
        e = await page.$('.ui-slider-handle');
        box = await e.boundingBox();
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
        await page.mouse.up();
        await delay(getRangeInt(1000, 3000));

        // FHQ2 BBQ
        await page.waitForSelector('.ui-slider-handle');
        await delay(getRangeInt(1000, 3000));
        e = await page.$('.ui-slider-handle');
        box = await e.boundingBox();
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
        await page.mouse.up();
        await delay(getRangeInt(1000, 3000));

        // FHQ2 HUNGER
        await page.waitForSelector('.ui-slider-handle');
        await delay(getRangeInt(1000, 3000));
        e = await page.$('.ui-slider-handle');
        box = await e.boundingBox();
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + getRangeInt(-200, 200), box.y + box.height / 2); // move to (400, 200) coordinates
        await page.mouse.up();
        await delay(getRangeInt(1000, 3000));

        if(close_instruct_FHQ_post_rating) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const close_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(close_instruct_text).toContain(close_instruct_text_FHQ_post_rating);
          await delay(close_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };

        // transfer_test3
        if(open_instruct_transfer_test) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const open_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(open_instruct_text).toContain(open_instruct_text_transfer_test);
          await delay(open_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };


        await page.waitForSelector('#transfer-test');
        for (let index = 1; index < block_num_transfer_test; index++) {
          for (let index = 1; index < 8; index++) {
            var items = ['ArrowLeft', 'ArrowRight'];
            var item = items[Math.floor(Math.random() * items.length)];
            await delay(stim_duration);
            await page.keyboard.press(item);
            await delay(ITI_duration);
          }
        };
        
        if(close_instruct_transfer_test) {
            await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
            const close_instruct_text = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
            await expect(close_instruct_text).toContain(close_instruct_text_transfer_test);
            await delay(close_instruct_latency);
            await page.click("#jspsych-html-keyboard-response-stimulus");
        };
        

        // Clinical Open
        if(open_instruct_WBF) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const open_instruct_text_cl_op = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(open_instruct_text_cl_op).toContain(open_instruct_text_WBF);
          await delay(open_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        };

        if(open_instruct_demographics) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          await delay(open_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        }

        // Demographics
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

        // open instr inventories
        if(open_instruct_inventory) {
          await page.waitForSelector('.jspsych-html-keyboard-response-stimulus');
          await delay(open_instruct_latency);
          await page.click(".jspsych-html-keyboard-response-stimulus");
        };

        let selector = await raceSelectors(page, inventory_selectors);
        while (selector != '.jspsych-html-keyboard-response-stimulus') {
            switch (selector) {
              case '#jspsych-survey-multi-choice-OSC-R':

                await page.waitForSelector('#jspsych-survey-multi-choice-OSC-R');
                for (let index = 0; index < 18; index++) {
                  const itemID = getRandomInt(5);
                  await delay(getRandomInt(100));
                  await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .jspsych-survey-highlight");
                }
              
                await page.evaluate(() => {
                  document.querySelector("#jspsych-survey-multi-choice-option-1-0 .jspsych-survey-highlight").click();
                  document.querySelector("#jspsych-survey-multi-choice-option-2-3 .jspsych-survey-highlight").click();
                });
                await delay(getRandomInt(200));
                await page.evaluate(() => {
                  document.querySelector('#jspsych-survey-multi-choice-OSC-R-next').click();
                });
                break;
    
              case '#jspsych-survey-multi-choice-MOVES':
    
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
                break;
    
              case '#jspsych-survey-multi-choice-DASS':
                
                await page.waitForSelector('#jspsych-survey-multi-choice-DASS');
                for (let index = 0; index < 21; index++) {
                  const itemID = getRandomInt(4);
                  await delay(getRandomInt(120));
                  await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .jspsych-survey-highlight");
                }
                await page.evaluate(() => {
                  document.querySelector('#jspsych-survey-multi-choice-DASS-next').click();
                });
                break;
    
              case '#jspsych-survey-multi-choice-ASRS-5':
    
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
    
                break;
              case '#jspsych-survey-multi-choice-EAT-26':

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
    
                break;
              case '#jspsych-survey-multi-choice-RAADS-14':
    
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
    
                break;
              case '#jspsych-survey-multi-choice-PHQ-9':
    
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
    
                break;
              case '#jspsych-survey-multi-choice-GAD-7':
    
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
    
                break;
              case '#jspsych-survey-multi-choice-LSAS':
    
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
    
                break;
              case '#jspsych-survey-multi-choice-ASRM':
    
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
    
                break;
              case '#jspsych-survey-multi-choice-PC-PTSD-5':
    
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
    
                break;
              case '#jspsych-survey-multi-choice-PRIME':
    
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
    
                break;
              case '#jspsych-survey-multi-choice-AUDIT':
    
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
    
                break;
              case '#jspsych-survey-multi-choice-PGSI':
    
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
    
                break;
              case '#jspsych-survey-multi-choice-YIAT':
    
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
    
                break;
              case '#jspsych-survey-multi-choice-smoking-status':
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
                };
                break;
              case '#jspsych-survey-multi-choice-ISI':
    
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
    
                break;
              case '#jspsych-survey-multi-choice-PID-5-BF':
    
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
    
                break;
            };
            selector = await raceSelectors(page, inventory_selectors);
            if(selector === '.jspsych-html-keyboard-response-stimulus' || selector === '#jspsych-survey-multi-choice-SDS') {
                break;
            };
        };

        // close instruct inventories
        if(close_instruct_inventory) {
          await page.waitForSelector('.jspsych-html-keyboard-response-stimulus');
          await delay(close_instruct_latency);
          await page.click(".jspsych-html-keyboard-response-stimulus");
        }

        // SDS
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

        // ICAR
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

        // Clinical Close
        if(close_instruct_WBF) {
          await page.waitForSelector('#jspsych-html-keyboard-response-stimulus');
          const close_instruct_text_cl_op = await page.evaluate(() => document.querySelector('#jspsych-html-keyboard-response-stimulus').innerHTML);
          await expect(close_instruct_text_cl_op).toContain(close_instruct_text_WBF);
          await delay(close_instruct_latency);
          await page.click("#jspsych-html-keyboard-response-stimulus");
        }

        // Close HIT
        await page.waitForSelector("#jspsych-survey-multi-choice-preamble");
        for (let index = 0; index < 3; index++) {
          const itemID = getRandomInt(2);
          await delay(getRandomInt(100));
          await page.click("#jspsych-survey-multi-choice-option-" + index +  "-" + itemID + " .form-radio");
        };
        await page.click("#jspsych-survey-multi-choice-next");

        // Thanks
        await page.waitForSelector("#jspsych-html-keyboard-response-stimulus");
        await delay(close_instruct_latency);
        await page.click("#jspsych-html-keyboard-response-stimulus");
        
        // Finish HIT page
        await page.waitForSelector("#container-not-an-ad");
        await delay(600);
    });

    // In case of problems, log them
    cluster.on('taskerror', (err, data) => {
      console.log(`DEBUG - Error with cluster ${data}: ${err.message}`);
    });

    function makeid() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
      for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
      return text;
    }
    
    for (let index = 0; index < concurrency_number; index++) {
      let assignmentId = "debug" + makeid();
      let hitId = "debug" + makeid();
      let workerId = "debug" + makeid();
      let href = "/consent?assignmentId=" + assignmentId + "&hitId=" + hitId + "&workerId=" + workerId + "&mode=debug";
  
      cluster.queue('http://localhost:22362' + href);
    }
    
    await cluster.idle();
    await cluster.close();
  }, timeout);
}, timeout);