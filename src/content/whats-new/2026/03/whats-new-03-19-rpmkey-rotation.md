---
title: 'PHP agent RPM key rotation for enhanced security'
summary: 'Update your systems with our new RPM signing key to ensure uninterrupted PHP agent updates and maintain security best practices.'
releaseDate: '2026-03-19'
learnMoreLink: 'https://docs.newrelic.com/docs/apm/agents/php-agent/installation/php-agent-installation-rpm-key-rotation/'
getStartedLink: 'https://docs.newrelic.com/docs/apm/agents/php-agent/installation/php-agent-installation-rpm-key-rotation/'
---

Security is at the heart of everything we do at New Relic. As part of our ongoing commitment to security best practices, we're rotating the RPM signing key for the New Relic PHP Agent. Starting March 2026, all new PHP Agent RPM packages will be signed with an updated key.

## What you need to do

To ensure uninterrupted operation of the PHP Agent, import the new public key before installing or upgrading from RPM packages. This is a one-time action that takes just seconds:

```bash
rpm --import https://download.newrelic.com/php_agent/NEWRELIC_RPM_BD2E199C.public
```

## Verify successful import

After importing the key, confirm it's trusted by running:

```bash
rpm -qa | grep gpg-pubkey-bd2e199c
```

You should see the following output confirming successful import:

```bash
gpg-pubkey-bd2e199c-6970e650
```

## Understanding the impact

**If you update the key:** Your PHP Agent installations and upgrades will continue seamlessly with enhanced security.

**If you don't update the key:** New PHP Agent installs and upgrades will fail after March 2026, displaying an error message such as `Error: GPG check FAILED`.

**Note:** If you're pinned to an older agent version, your current installation will continue to function. However, we strongly recommend importing the new key now to avoid any issues when you're ready to upgrade.

## Questions?

Visit our [complete guide to PHP agent RPM key rotation](https://docs.newrelic.com/docs/apm/agents/php-agent/installation/php-agent-installation-rpm-key-rotation/) for detailed information and troubleshooting steps.