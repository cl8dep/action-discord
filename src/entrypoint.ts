import * as core from "@actions/core";
import { sendMessage } from "./sender";

const webhook = core.getInput("webhook", { required: true });
let message = core.getInput("message", { required: true });
const avatar = core.getInput("avatar", { required: false });
const username = core.getInput("username", { required: false });

let payload = JSON.stringify({
  content: message,
  ...(username && {
    username,
  }),
  ...(avatar && { avatar_url: avatar }),
});

(async () => {
  
  await sendMessage(webhook, payload);
})().catch((err) => {
  core.setFailed(`Action failed with error ${err}`);
});
