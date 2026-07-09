---
title: 'Drupal 7 and 9 monitoring support update'
summary: 'New Relic will end support for Drupal 7 and 9 monitoring in the PHP agent on October 15th, 2026, as both versions have reached end-of-life.'
releaseDate: '2026-07-09'
learnMoreLink: 'https://docs.newrelic.com/docs/apm/agents/php-agent/getting-started/introduction-new-relic-php/'
---

We are committed to continually improving experience and security with our platform, and as part of this effort, we will discontinue support for Drupal 7 and 9 monitoring within the PHP Agent.

## What's changing

New Relic will no longer support Drupal 7 and 9 monitoring within the PHP Agent as they have reached their official end-of-life status. Support is scheduled to end [**October 15th, 2026**](https://docs.newrelic.com/docs/release-notes/agent-release-notes/php-release-notes/php-agent-12-7-0-36/).

## Why

Both Drupal 7 and 9 have reached their official end-of-life status (see [here](https://www.drupal.org/about/drupal-7/d7eol/partners) and [here](https://www.drupal.org/about/announcements/blog/drupal-9-is-end-of-life), respectively). While New Relic provided an extended support window through our partnerships with Acquia and WordPress Engine, we are now sunsetting these versions as continuing to run them can introduce significant security risks, and aligning with official Drupal deprecation schedules is the safest path forward.

## What you need to do

Before the support end date, please make sure to **upgrade to Drupal 10 or newer**. Only after upgrading to Drupal 10 or newer, then please make sure to upgrade to the most current version of the [PHP Agent](https://docs.newrelic.com/docs/apm/agents/php-agent/getting-started/introduction-new-relic-php/).

**Reminder:** We encourage all customers to regularly update to the most current versions of New Relic agents and supported runtimes to maintain optimal functionality and a hardened security posture.

## Impact

After the support end date, you will no longer have visibility into Drupal-specific insights for Drupal versions 7 or 9. If you fail to upgrade to Drupal version 10 or newer, the PHP Agent will fail to report Drupal insights to your New Relic services or trigger incorrect alert conditions based on stale or missing metrics.

We understand that migrating systems can be challenging, and our team is here to assist. If you have questions regarding these transitions or need help identifying impacted accounts, please reach out to your account team or [**contact support**](https://docs.newrelic.com/docs/new-relic-solutions/solve-common-issues/find-help-get-support/).

Thank you for your understanding as we work to keep our platform efficient and secure.
