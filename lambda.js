'use strict';

const awsServerlessExpress = require('aws-serverless-express')
const { expressReceiverApp } = require('./app')
const server = awsServerlessExpress.createServer(expressReceiverApp)

module.exports.frontend = (event, context) => {
  console.log('⚡️ Bolt app is running');
  awsServerlessExpress.proxy(server, event, context)
}