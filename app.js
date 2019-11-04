'use strict';

const { App, LogLevel, ExpressReceiver } = require('@slack/bolt');
require('dotenv').config();

// ------------------------------------------
// Initialization
// ------------------------------------------
const expressReceiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: expressReceiver,
  logLevel: LogLevel.DEBUG
});

app.error(printCompleteJSON);

// ------------------------------------------
// Slack App frontend
// ------------------------------------------
app.message('ｲﾔｯﾌﾟｰ٩( ‘ω’ )و', ({ message, say }) => {
  say(
    {
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "パーティーのHPが30,000足りていますか"
          }
        },
        {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "action_id": "approve_action",
              "text": {
                "type": "plain_text",
                "emoji": true,
                "text": "はい"
              },
              "style": "primary",
              "value": "yes"
            },
            {
              "type": "button",
              "action_id": "disapprove_action",
              "text": {
                "type": "plain_text",
                "emoji": true,
                "text": "いいえ"
              },
              "style": "danger",
              "value": "no"
            }
          ]
        }
      ]
    });
});

app.action('approve_action', async({ ack, say }) => {
  ack();
  say(`まずはお前からだ(ﾟ皿ﾟ#)`);
});

app.action('disapprove_action', async({ ack, say }) => {
  ack();
  say(`パラダイス・ロスト＜(*'瓜｀*)＞`);
});

app.command('/lucifer', async({ command, ack, say }) => {
  ack();
  say(`まずはお前からだ(ﾟ皿ﾟ#)`);
});

module.exports.expressReceiverApp = expressReceiver.app;


function printCompleteJSON(error) {
  console.log(JSON.stringify(error));
}