---
subject: PHP agent
releaseDate: '2012-10-23'
version: 3.0.5.95
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Notes

This release marks the start of a brand new series of PHP agent releases. This represents many months of performance tuning, stability improvements and additional new features. All existing users are highly encouraged to upgrade to the latest agent. There are many changes in this version, the most interesting of which are listed below. All users who are upgrading from a previous release are encouraged to read the [upgrade notes](https://newrelic.com/docs/php/upgrading-your-php-agent) document to fully understand some of the impacts of upgrading.

Highlights of this release include:

* Drastic memory usage reduction. The agent overhead is down from approximately 35% to just 4%.
* Significantly less stack space used (down from 40K per PHP function call to just 84 bytes). This affects users with deeply recursive functions.
* License keys are now set in the INI file and not the daemon configuration file, and they are settable on a per-directory or per-virtual host basis. This very frequently requested feature will allow multi-tenant sites to use different keys for each tenant.
* The New Relic daemon can now be started automatically by the agent. For upgrade customers it will still be started the way it always was with the init scripts, but you can now change that by configuring the daemon in your INI file. Please see [this page on daemon startup modes](https://newrelic.com/docs/php/newrelic-daemon-startup-modes) for details.
* Several bugs related to auto-RUM (Real User Monitoring) have been fixed, including a fix for non-standard HTML (where the head element is at the end of the document).
* The agent startup "banner" now contains much more useful information that can be included in the initial dialog with support, and will short-circuit the typical "what OS and PHP version are you using exactly?" preamble to getting a ticket resolved.
* The agent and daemon no longer use a UNIX-domain socket for their communications. Now a standard TCP socket (port 33142 by default) is used, which makes deploying in a chroot environment a lot easier.
* The RPM and Debian packages have been split into three separate packages: the agent, the daemon and common scripts between the two. This was primarily done so that the agent was in its own package, and on 64-bit systems the agent package now only contains the 64-bit agent. This means that 64-bit users do not have to install the entire 32-bit runtime just to install the PHP agent. The 32-bit agent can always be installed alongside the 64-bit one.
* The phpinfo() output has been changed to more clearly distinguish between global and per-directory settings. It now also correctly displays the per-directory value if the script was invoked from within a directory that changed default values.
* The `newrelic.transaction_tracer.top100` setting has been renamed to `newrelic.transaction_tracer.detail`.
* You can now arbitrarily begin and end transactions (for example, at the beginning and end of each job queue unit of work). This is done using the new `newrelic_end_transaction` and `newrelic_start_transaction` API calls.
* The daemon has been considerably simplified and uses fewer locks, thus reducing the potential for entering a "spin" state.
* Many other improvements to speed and stability.
