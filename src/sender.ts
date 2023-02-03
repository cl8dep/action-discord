import axios from "axios";
import * as core from '@actions/core'

async function sendMessage(url: string, payload: any) {
  core.info("Sending message ...")
  await axios.post(`${url}?wait=true`, payload, {
    headers: {
      "Content-Type": "application/json",
      "X-GitHub-Event": process.env.GITHUB_EVENT_NAME,
    },
  });
  core.info("Message sent!");
}

export {
    sendMessage
}