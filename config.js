// .envファイルの環境変数をserverlessへ取り込むためのモジュール
require('dotenv').config();

module.exports = serverless => {
  serverless.cli.consoleLog('You can access Serverless config and methods as well');

  return {
    SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN,
    SLACK_SIGNING_SECRET: process.env.SLACK_SIGNING_SECRET,
  };
};
