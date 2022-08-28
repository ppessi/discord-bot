# Running locally

## Setup

### Installing npm dependencies

`yarn install`

### Inviting bot to server

[Create a bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

Create a file called src/config.json, with the bot's
[token](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-bot-s-token)
in it, like {"token": "the bot token" }

Create an [invite link](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#creating-and-using-your-invite-link),
with the following bot permissions:
* Read messages/view channels
* Send messages

Paste the invite link to browser, add bot to server.

## Running

yarn start
