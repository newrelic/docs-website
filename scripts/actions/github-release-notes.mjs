#!/usr/bin/env node
import github from '@actions/github';
import { exec } from 'child_process';
import fs from 'fs';
import process from 'process';

const token = process.env.GITHUB_TOKEN;
const lastRelease = process.env.LAST_RELEASE || '...';
const newTag = process.env.NEW_TAG || '...';

if (!token) {
  console.error('Unable to get GITHUB_TOKEN environment variable');
  process.exit(1);
}

const octokit = github.getOctokit(token);

const { data } = await octokit.rest.repos.compareCommitsWithBasehead({
  basehead: `${lastRelease}...develop`,
  owner: 'newrelic',
  repo: 'docs-website',
});

let result = "## :rocket: What's new?\n\n\n";

for (const commit of data.commits) {
  const username = commit.author.login;
  const title = commit.commit.message.split('\n')[0];
  const link = commit.html_url;

  result += `@${username} - ${title} [->](${link})\n`;
}

// Limit the characters in the notes to 25000 as per api restrictions
result = result.slice(0, 24999);

fs.writeFileSync('release_note_message', result);

exec(`gh release create ${newTag} -t ${newTag} -F release_note_message`);
