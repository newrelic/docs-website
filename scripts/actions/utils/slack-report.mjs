/* eslint-disable no-console */
import fetch from 'node-fetch';

export const getRunLink = () => {
  const { GITHUB_SERVER_URL, GITHUB_REPOSITORY, GITHUB_RUN_ID } = process.env;
  if (!GITHUB_SERVER_URL || !GITHUB_REPOSITORY || !GITHUB_RUN_ID) {
    return null;
  }
  return `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`;
};

export const truncate = (str, max = 150) => {
  const oneLine = String(str).split('\n')[0];
  return oneLine.length > max ? `${oneLine.slice(0, max)}…` : oneLine;
};

export const todayISO = () => new Date().toISOString().slice(0, 10);

/**
 * Formats the per-run Slack report. Not covered by a snapshot since exact
 * wording isn't load-bearing, only the shape/data is.
 * @param {{ title?: string, attempted: number, succeeded: number, failures: {slug: string, locale: string, error: string}[] }} summary
 */
export const buildReport = ({
  title = 'Translation Pipeline Report',
  attempted,
  succeeded,
  failures,
}) => {
  const lines = [`🌐 ${title} — ${todayISO()}`, ''];

  lines.push('📊 Overview');
  lines.push(`• Attempted: ${attempted}`);
  lines.push(`• ✅ Succeeded: ${succeeded}`);
  lines.push(
    `• ${failures.length > 0 ? '❌' : '✅'} Failed: ${failures.length}`
  );

  if (failures.length > 0) {
    lines.push('');
    lines.push(`🔍 Failures (${failures.length})`);
    for (const failure of failures) {
      lines.push(
        `• ${failure.slug} (${failure.locale}) — ${truncate(failure.error)}`
      );
    }
  }

  const runLink = getRunLink();
  if (runLink) {
    lines.push('');
    lines.push(`🔗 View full run: ${runLink}`);
  }

  return lines.join('\n');
};

/**
 * Posts a message to Slack via an Incoming Webhook. No-ops (with a log
 * line) when SLACK_WEBHOOK_URL isn't configured, so this is safe to call
 * from local runs and tests without a webhook set up.
 * @param {string} text
 */
export const postToSlack = async (text) => {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log('SLACK_WEBHOOK_URL not set, skipping Slack notification.');
    return;
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
  } catch (error) {
    console.log(`Failed to post to Slack: ${error}`);
  }
};
