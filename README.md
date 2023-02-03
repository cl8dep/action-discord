# 🚀 Discord for GitHub Actions

Sends a Discord notification message. Simple as that.
Supports all [workflow event types](https://developer.github.com/webhooks/#events) by using the [Discord GitHub webhooks](https://discordapp.com/developers/docs/resources/webhook#execute-githubcompatible-webhook).

*Appearance on Discord :*

![Discord message](docs/preview.png "Discord message")

## Usage

```yaml
- name: Discord notification
  uses: cl8dep/action-discord@v0
  with:
    webhook: ${{ secrets.DISCORD_WEBHOOK }}
    message: 'Hello World'
```

### Arguments

By default, the GitHub action will send a notificaction with the event informations. Providing the arguments will override the message.

### Arguments

* **`webhook`** (**required**): the Discord webhook URL (see https://support.discordapp.com/hc/en-us/articles/228383668-Intro-to-Webhooks).
* **`message`** (*required*): the message to send.
* **`username`** (*optional*): overrides the bot nickname.
* **`avatar`** (*optional*): overrides the avatar URL.
That's all.

## Alternatives

Because open source is about everyone :

https://github.com/marketplace/actions/discord-message-notify <br/>
![](https://img.shields.io/github/stars/appleboy/discord-action.svg?label=Stars&style=social)


<hr/>

<p align="center">
  Don't forget to 🌟 Star 🌟 the repo if you like this GitHub Action !<br/>
  <a href="https://github.com/cl8dep/action-discord/issues/new">Your feedback is appreciated</a>
</p>