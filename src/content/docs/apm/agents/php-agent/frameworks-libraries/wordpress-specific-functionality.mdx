---
title: WordPress specific functionality
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: 'WordPress websites: Use the newrelic.framework.wordpress.hooks INI setting to capture special metrics for hooks, plugins, and themes with New Relic.'
redirects:
  - /docs/agents/php-agent/frameworks-libraries/wordpress-specific-functionality
freshnessValidatedDate: never
---

If you [install New Relic for WordPress websites](/docs/agents/php-agent/installation/install-php-agent-shared-hosting-service), the PHP agent receives additional metrics. A <DNT>**WordPress**</DNT> page appears in the New Relic user interface: Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a WordPress app)**</DNT>.

## Configuration

You can control which WordPress-specific metrics your app sends to New Relic by using the PHP agent's `ini` setting `newrelic.framework.wordpress.hooks`. This is enabled by default in versions <DNT>**5.3**</DNT> or higher, and it can be disabled with:

```ini
newrelic.framework.wordpress.hooks = false
```

Although this setting uses the word `.hooks`, it controls capturing all WordPress-specific metrics.

New Relic PHP Agent version 10.16 adds `newrelic.framework.wordpress.hooks.options` `ini` setting that allows to fine tune which WordPress-specific metricsand what data is sent in those metrics.
This setting accepts following values: `"all_callbacks"` (New Relic PHP Agent version 10.16 default), `"plugin_callbacks"` (New Relic PHP Agent version 10.20 default), and `"threshold"`. `"all_callbacks"`
option causes all hook callback functions to be instrumented. `"plugin_callbacks"` and `"threshold"` settings allow to reduce agent's overhead by fine tuning data collected by the agent.
Setting `newrelic.framework.wordpress.hooks.options` to `"plugin_callbacks"` limits the instrumentation to only plugin/theme callbacks. Setting `newrelic.framework.wordpress.hooks.options` to `"threshold"`
disables plugins/themes monitoring and in this mode of operation New Relic PHP agent only records execution of hooks that exceed `newrelic.framework.wordpress.hooks.threshold` (1ms is the default threshold).

## Metrics

The PHP agent receives metrics for the following:

* <DNT>**Hooks**</DNT>: These metrics indicate time spent within each WordPress hook. Time is calculated from the hook dispatch functions `apply_filters`, `apply_filters_ref_array`, `do_action`, and `do_action_ref_array`. When `newrelic.framework.wordpress.hooks.options="all_callbacks"` this includes WordPress core callbacks. When `newrelic.framework.wordpress.hooks.options="plugin_callbacks"` this includes only plugins/themes callbacks. In both cases the metric count indicates the number of callbacks called. However when `newrelic.framework.wordpress.hooks.options="threshold"`, the metric count indicates the number of times a hook was executed.
* <DNT>**Plugins and themes**</DNT>: These metrics indicate time spent within each WordPress plugin and theme. Time is calculated from the dispatch functions for hooks. This metric is only generated when `newrelic.framework.wordpress.hooks.options` is either `"all_callbacks"` or `"plugins_only"`.

## Integration with New Relic partners [#integration]

By integrating your WordPress application with APM, you can view performance directly from your WordPress app's <DNT>**Administration**</DNT> page. For example, [W3 Total Cache](https://newrelic.com/blog/best-practices/web-performance-optimization-automation) is one of New Relic's partners that specializes in WordPress apps.
