import * as core from '@actions/core';
import * as github from "@actions/github";



try {
  // `name` input defined in action metadata file
  const name = core.getInput('name');
  const outputValue = `Hello ${name}!!!!!!`;
  core.info(outputValue);
  core.setOutput('greeting', outputValue);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  core.info(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}