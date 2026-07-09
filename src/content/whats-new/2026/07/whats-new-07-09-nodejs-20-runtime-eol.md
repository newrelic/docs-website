---
title: 'Node.js 20 runtime support EOL notification'
summary: 'New Relic agents no longer support the Node.js 20 runtime, which reached end-of-life on April 30, 2026.'
releaseDate: '2026-07-09'
learnMoreLink: 'https://docs.newrelic.com/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-14-0-0/'
---

We are committed to continually improving user experience and the security with our platform, and as part of this effort, we have discontinued support for Node.js version 20 for all the current agents.

## What's changing

The New Relic Node.js Agent will no longer support Node.js 20 runtime because the Node.js 20 runtime reached its official End-of-Life effective **4/30/2026** (see [here](https://nodejs.org/en/about/eol)).

## Why

The Node.js community ended official support for version 20 on **4/30/2026**. Continuing to support this version poses security and other performance risks, as Node.js will no longer receive critical security patches.

## What you need to do

If you are currently running Node.js 20, you must **upgrade your Node.js version** to a supported release. Please note that you need to upgrade your environment to Node.js 22 or newer, prior to upgrading to [Node.js Agent v14.0.0](https://docs.newrelic.com/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-14-0-0/) or newer.

As of [**May 18th, 2026**](https://docs.newrelic.com/docs/release-notes/agent-release-notes/nodejs-release-notes/), current New Relic Node agents do not support Node.js 20, and could lead to potential security vulnerabilities. For a full list, please see the [Node20 documentation](https://nodejs.org/en/about/eol).

***Reminder:** We encourage all customers to regularly update to the most current versions of New Relic agents and supported runtimes to maintain optimal functionality and a hardened security posture.*

## Impact and upgrade sequence

To prevent reporting interruptions, you must complete the following upgrade steps in the order listed below. Upgrading the agent before updating your Node.js runtime may cause your agent to misreport or stop sending data entirely.

1. **Upgrade Node.js:** Update your environment to Node.js version 22 or newer (see [here](https://nodejs.org/en/about/previous-releases)).
2. **Upgrade the New Relic Node.js Agent:** Once your Node.js version is updated, upgrade to [Node.js Agent v14.0.0](https://docs.newrelic.com/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-14-0-0/) or newer.

We understand that migrating systems can be challenging, and our team is here to assist. If you have questions regarding these transitions or need help identifying impacted accounts, please reach out to your account team or [**contact support**](https://docs.newrelic.com/docs/new-relic-solutions/solve-common-issues/find-help-get-support/).

Thank you for your understanding as we work to keep our platform efficient and secure.
