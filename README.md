# Slack_bolt_sample
It is Slack bolt Sample Repository.

# Requirements

- Node

# Installation

## Configure ENV

### Mac OS
```
export SLACK_SIGNING_SECRET=<Slack Signing Secret is Here>
export SLACK_BOT_TOKEN=<Bot User Token is Here>
```

### Windows
```
## CMD
set SLACK_SIGNING_SECRET=<Slack Signing Secret is Here>
set SLACK_BOT_TOKEN=<Bot User Token is Here>

## PowerShell
$env:SLACK_SIGNING_SECRET = "<Slack Signing Secret is Here>"
$env:SLACK_BOT_TOKEN = "<Slack Signing Secret is Here>"

```

```
# Packege Install
npm install
```

### Launch

```
node ./src/app.js
```

Use an application that proxies to the local host, such as [ngrok](https://ngrok.com/).

## Deploy

use serverless

```
# Please install for global options.
npm install serverless  --g
```

```
serverless deploy
```