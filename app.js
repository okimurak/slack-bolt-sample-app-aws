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
app.message('ｲﾔｯﾌﾟｰ٩( ‘ω’ )و', ({message, say}) => {
  say(`まずはお前からだ(ﾟ皿ﾟ#)`);
});

app.command('/lucifer', async({ command, ack, say }) => {
  ack();
  say(`まずはお前からだ(ﾟ皿ﾟ#)`);
});

module.exports.expressReceiverApp = expressReceiver.app;


function printCompleteJSON(error) {
  console.log(JSON.stringify(error));
}