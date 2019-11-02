const { App } = require('@slack/bolt');
require('dotenv').config();

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message('ｲﾔｯﾌﾟｰ٩( ‘ω’ )و', ({message, say}) => {
  say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `ルシファーに参加しますか？`
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "はい"
          },
          "action_id": "button_click"
        }
       }
      ]
    });
});

app.action('button_click', ({ body, ack, say}) => {
  ack();
  say(`まずはお前からだ(ﾟ皿ﾟ#)`);
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();