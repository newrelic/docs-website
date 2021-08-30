---
subject: PHP agent
releaseDate: '2015-04-01'
version: 4.20.0.92
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Release Unavailable

Due to a bug in this release related to the new explain plan support for MySQLi, we have decided to remove it from our download servers. Instead, we recommend installing [version 4.20.1](https://docs.newrelic.com/docs/release-notes/agent-release-notes/php-release-notes/php-agent-420193), which includes a fix for this bug.

### New Features

* Support for Laravel 5.0.

  We are pleased to announce support for the latest Laravel release: Laravel 5. Sites and applications using Laravel 5.0 are now automatically detected and named in the same way as Laravel 4 applications.
* Support for explain plans with MySQLi.

  The existing support for generating explain plans for slow SELECT queries with the PDO MySQL driver has been extended to MySQLi. Explain plans are controlled by the [newrelic.transaction_tracer.explain_enabled](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-tt-epenabled) and [newrelic.transaction_tracer.explain_threshold](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-tt-epthreshold) settings. These plans can be seen in the query analysis section of the [slow SQL trace](/docs/apm/applications-menu/monitoring/databases-slow-queries-page) page in APM.

  Explain plans will be generated for queries issued through `mysqli_query`, `mysqli_real_query`, and `mysqli_stmt_execute`, as well as their OO equivalents `mysqli::query`, `mysqli::real_query`, and `mysqli_stmt::execute`.

  Please note that the `mysqli_multi_query` API is not currently supported, and that explain plans are not generated for multiple (semicolon separated) queries.
* Added Memcache connection monitoring.

  The `connect` and `pconnect` functions (and their OO counterparts) of the Memcache extension are now instrumented, and will generate metrics. As a result, if there is a problem with calling those functions, it will now be visible within New Relic.

### Bug Fixes

* Laravel 4 App::after() filters are no longer overridden.

  In certain circumstances, the improved Laravel transaction naming code in version 4.19 of the PHP agent could result in filters registered using Laravel 4's App::after() method no longer being executed. This has been fixed.

### Upgrade Notices

* The daemon now uses openssl 1.0.1m, rather than 1.0.1l.
* The daemon now uses curl 7.41.0 rather than 7.40.0.
