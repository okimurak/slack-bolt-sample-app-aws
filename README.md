# Slack bolt ⚡️ sample app
It is Slack bolt Sample Repository in AWS.
Use [serverless Framework](https://serverless.com/).

 - [Bolt Tutorial](https://slack.dev/bolt/ja-jp/tutorial/getting-started)

# Requirements

- Node 10.13+

# Installation

## Configure ENV

```
cp .env.default .env
```

Edited The following valiable in `.env`.

- SLACK_BOT_TOKEN
- SLACK_SIGNING_SECRET


## Packege Install
```
npm install
```

## Start app

```
serverless offline
```

Use an application that proxies to the `localhost`, such as [ngrok](https://ngrok.com/).

## How to use this Application

- Create and install [Slack App](https://api.slack.com/).
- Setting the folowing items.
   - Interactive Components.
   - Event Subscriptions.
   - Bot user and Setting.
   - Slash Commands.

## Deploy

```
serverless deploy
```