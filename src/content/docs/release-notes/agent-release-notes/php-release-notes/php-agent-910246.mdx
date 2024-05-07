---
subject: PHP agent
releaseDate: '2019-09-04'
version: 9.1.0.246
downloadLink: 'https://download.newrelic.com/php_agent/archive/9.1.0.246/'
---

### New Features in 9.1

**Symfony 4 support added.**

* Web transactions that use the Symfony 4 framework will now be automatically named based on the route or controller name.

**Addition of the ability to migrate to [Configurable Security Policies (CSP)](https://docs.newrelic.com/docs/agents/manage-apm-agents/configuration/enable-configurable-security-policies) on a per agent basis for accounts already using [High-security mode (HSM)](https://docs.newrelic.com/docs/agents/manage-apm-agents/configuration/high-security-mode).**

* When both HSM and CSP are enabled for an account, an agent (this version or later) can successfully connect with either `high_security: true` or the appropriate `security_policies_token` configured.

### Upgrade notices

* Requests handled by PHP-FPM that result in a 404 error because the script does not exist, or a 403 error because PHP-FPM does not have permission to access the script, will now result in a transaction called `404` or `403`, respectively, rather than being named after the request URI. This change was made to prevent [metric grouping issues](https://docs.newrelic.com/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues), particularly when sites are being probed by potential attackers.

  If you wish to capture the actual request URI for analysis, it can be attached to the transaction event under the `request.uri` attribute using the following configuration setting: `newrelic.transaction_events.attributes.include=request.uri`

### Bug fixes

* In version 9.0, Guzzle and Predis execution time could be double counted on application overview and transaction charts in APM, as time could be attributed to both PHP execution and the external or datastore time, respectively. This has been fixed, and charts should now revert back to their previous behavior.
* Restarting a transaction from within a Drupal or WordPress hook could result in a segfault. This has been fixed.

### Known issues and workarounds

* **Potential memory exhaustion for long running transactions.** See description under **Known issues and workarounds** in the [PHP 9.0.0.242 release notes](https://docs.newrelic.com/docs/release-notes/agent-release-notes/php-release-notes/php-agent-900242).
