# 🚀 Discord for GitHub Actions

[![Build Status][build-badge]][build-url]

Sends a Discord notification message. Simple as that.
Supports all [workflow event types](https://developer.github.com/webhooks/#events) by using the [Discord GitHub webhooks](https://discordapp.com/developers/docs/resources/webhook#execute-githubcompatible-webhook).

*Appearance on Discord :*

![Discord message](docs/preview.png "Discord message")

<!-- This GitHub action is part of a list of Actions that are located in an other repo. Feel free to check it out : https://github.com/Ilshidur/actions. -->

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
<!-- * **`DISCORD_EMBEDS`** (*optional*): This should be a valid JSON string of an array of Discord `embed` objects. See the [documentation on Discord WebHook Embeds](https://birdie0.github.io/discord-webhooks-guide/structure/embeds.html) for more information. You can use set it to `${{ toJson(my_value) }}` using [`toJson()`](https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#tojson) if your input is an object value. -->
That's all.

## Alternatives

Because open source is about everyone :

https://github.com/marketplace/actions/discord-message-notify <br/>
![](https://img.shields.io/github/stars/appleboy/discord-action.svg?label=Stars&style=social)


<hr/>

<p align="center">
  Don't forget to 🌟 Star 🌟 the repo if you like this GitHub Action !<br/>
  <a href="https://github.com/Ilshidur/action-discord/issues/new">Your feedback is appreciated</a>
</p>

[build-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FIlshidur%2Faction-discord%2Fbadge&style=flat
[build-url]: https://actions-badge.atrox.dev/Ilshidur/action-discord/goto