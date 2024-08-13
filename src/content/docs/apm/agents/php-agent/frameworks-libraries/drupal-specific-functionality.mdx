---
title: Drupal-specific functionality
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: 'Drupal websites: Use the newrelic.framework.drupal.modules INI setting to capture special metrics for modules, hooks, views, and browser instrumentation.'
redirects:
  - /docs/agents/php-agent/frameworks-libraries/drupal-specific-functionality
  - /docs/php/drupal
  - /docs/agents/php-agent/features/drupal-specific-functionality
freshnessValidatedDate: never
---

The PHP agent captures special metrics for Drupal websites. When these metrics are collected, a <DNT>**Drupal**</DNT> tab appears in the New Relic user interface: Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Drupal app)**</DNT>.

## Configuration

The collection of Drupal-specific metrics can be controlled by [`newrelic.framework.drupal.modules`](/docs/php/php-agent-phpini-settings#inivar-framework-drupal-modules). It is enabled by default (in versions <DNT>**3.0**</DNT> or higher), and can be disabled with:

```ini
newrelic.framework.drupal.modules = 0
```

Though this setting uses the word "modules," it controls the collection of all Drupal metrics: modules, views, and hooks.

## Metrics

The PHP agent collects metrics for the following:

* <DNT>**Modules**</DNT>: Versions 2.5 or higher. These metrics indicate time spent within each Drupal module. In versions 3.5 or higher, time is calculated from the hook dispatch functions `module_invoke` and `module_invoke_all`. In previous versions, time was calculated from functions from a file with the ".module" extension where the file name and function prefix were a match.
* <DNT>**Hooks**</DNT>: Versions 3.5 or higher. These metrics indicate time spent within each Drupal hook. Time is calculated from the hook dispatch functions `module_invoke` and `module_invoke_all`.
* <DNT>**Views**</DNT>: Versions 3.5 or higher. These metrics indicate time spent within a view's `view::execute` method.

## Drupal and Browser instrumentation [#page-load-timing-rum]

In Drupal 7.15, <DNT>**Compress cached pages**</DNT> is turned on by default. If you also select <DNT>**Cache pages for anonymous users**</DNT>, the <InlinePopover type="browser"/> JavaScript is not inserted into the served pages for anonymous users. This is because Drupal's pages are compressed directly from the database before they are stored in the cache (with gzip), so New Relic's PHP agent does not have a chance to parse any HTML.

In this situation, manual instrumentation provides a better opportunity to capture data for anonymous users. For more information, see [Browser monitoring and the PHP agent](/docs/apm/agents/php-agent/features/browser-monitoring-php-agent/)

Drupal 10.2 introduced a [new change](https://www.drupal.org/node/3298551) that causes it to set a `content-length` header.
New Relic PHP agent is unable to auto-inject the browser auto-instrumentation when the HTTP header field `Content-Length` is set.
To keep using browser monitoring, disable browser auto-instrumentation and manually insert the JavaScript header and footer into your templates.
For more information, please see [here](/docs/apm/agents/php-agent/features/browser-monitoring-php-agent/#auto_instrumentation).

## Cron tasks [#cron]

Drupal supports periodically executing tasks to perform routine maintenance or similar work on behalf of installed Drupal modules. These tasks can be run without any manual involvement beyond the initial configuration. Commonly, these are referred to as [cron tasks](https://drupal.org/cron "Link opens in a new window"). Starting in version 4.3, the New Relic PHP agent detects the execution of these tasks and automatically marks them as [background transactions](/docs/features/monitoring-background-processes#ui) regardless of how they were started.
