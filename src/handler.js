'use strict';

const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app')
const server = awsServerlessExpress.createServer(app)

module.exports.slackbolt = async event => { awsServerlessExpress.proxy(server, event, context) }
