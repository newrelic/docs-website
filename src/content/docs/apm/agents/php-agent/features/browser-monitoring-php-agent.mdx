---
title: Browser monitoring and the PHP agent
tags:
  - Agents
  - PHP agent
  - Features
metaDescription: Instrumentation for your New Relic PHP agent to set up browser monitoring.
redirects:
  - /docs/agents/php-agent/features/browser-monitoring-php-agent
  - /docs/php/page-load-timing-in-php
  - /docs/php/real-user-monitoring-in-php
  - /docs/agents/php-agent/features/page-load-timing-php
  - /docs/agents/php-agent/features/new-relic-browser-php-agent
freshnessValidatedDate: never
---

By default, the PHP agent automatically adds [browser monitoring](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser) to your application's web pages. In this automated process, the PHP agent injects the browser agent JavaScript snippet into your webpages. This means you get front-end browser performance monitoring without needing to manually insert the JavaScript snippet into your page's head element.

You can enable or disable auto-instrumentation in your PHP agent config file, or you can use the PHP agent API to manually configure browser monitoring.

## Use or disable auto-instrumentation [#auto_instrumentation]

By default, the PHP agent automatically injects the browser monitoring's JavaScript snippet into your pages. To change this setting,  edit the [`newrelic.browser_monitoring.auto_instrument`](/docs/apm/agents/php-agent/configuration/php-agent-configuration/#inivar-autorum) setting in your INI file.

```ini
newrelic.browser_monitoring.auto_instrument=1
```

Auto-instrumentation does not work when the HTTP header field `Content-Length` is set. To use browser monitoring in this situation, disable auto-instrumentation and [manually insert](#manual_instrumentation) the JavaScript header and footer into your templates.

## Manually instrument via agent API [#manual_instrumentation]

To manually configure browser monitoring, include the appropriate scripts in your pages. The New Relic PHP agent has an API to automatically generate the required JavaScript header and footer in place.

<Callout variant="important">
  Calls to the PHP agent API are conditional on the `newrelic` extension being loaded so that the PHP agent is running. If the agent is not running, calls to generate the JavaScript header and footer will result in errors, as the functions will not be defined.
</Callout>

For more information, see:

* [`auto_instrument` agent settings](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-autorum)
* `newrelic_get_browser_timing_header()`
* `newrelic_get_browser_timing_footer()`

## Manually instrument for various frameworks [#manual_generic]

This document does not provide detailed procedures to manually insert the browser agent via the agent API. This is because there too many possible ways to construct a framework.

The [manual instrumentation examples](#manual_examples) show how to add instrumentation to frameworks that already support auto-instrumentation. If you are using another framework or modified versions of Drupal or WordPress, be sure to call the API functions for instrumentation at the right place.

1. Insert the return value of `newrelic_get_browser_timing_header()` as part of the output page's `<head>` tag, preferably as the very first thing.
2. As the very last thing before the closing `</body>` tag in the document, or as close to it as possible, insert the return value of `newrelic_get_browser_timing_footer()`.

Here are some basic examples.

<CollapserGroup>
  <Collapser
    id="manual_wp"
    title="WordPress"
  >
    This example shows how to call the PHP agent API to generate headers and footers for a WordPress installation using the default `twentyten` theme.

    1. Insert a call to generate the JavaScript header in `website home dir/wordpress/wp-content/themes/twentyten/header.php`.

       ```php
       <body <?php body_class(); ?>>
       <div id="wrapper" class="hfeed">
         <div id="header">
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_header(); } ?>
           <div id="masthead">
           ...
       ```
    2. Insert a call to generate the end user monitoring footer in `website home dir/wordpress/wp-content/themes/twentyten/footer.php`.

       ```php
       ...
           </div><!-- #site-generator -->
         </div><!-- #colophon -->
         <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_footer(); } ?>
       </div><!-- #footer -->
       ```
  </Collapser>

  <Collapser
    id="manual_drupal"
    title="Drupal"
  >
    This example shows how to call the PHP agent API to generate headers and footers for a Drupal installation using the default `garland` theme.

    1. Insert a call to generate the JavaScript header right after the opening header tag in `website home dir/drupal/themes/garland/page.tpl.php`.

       ```php
       <div id="container" class="clear-block">
         <div id="header">
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_header(); } ?>
           <div id="logo-floater">
           ...
       ```
    2. Insert a call to generate the footer right before the last closing layout tag:

       ```php
       ...
           </div>
           <?php if( extension_loaded('newrelic') ) { echo newrelic_get_browser_timing_footer(); } ?>
             <!-- /layout -->
           <?php print $closure ?>
         </body>
       </html>
       ```

       <Callout variant="important">
         In Drupal 7.15, <DNT>**Compress cached pages**</DNT> is turned on by default. If you also select <DNT>**Cache pages for anonymous users**</DNT>, the JavaScript (newrelic.js) is not inserted into the served pages for anonymous users. This is because Drupal's pages are compressed directly from the database before they are stored in the cache (with gzip), so New Relic's PHP agent does not have a chance to parse any HTML. In this situation, manual instrumentation provides a better opportunity to capture data for anonymous users.
       </Callout>

       <Callout variant="important">
         Drupal 10.2 introduced a [new change](https://www.drupal.org/node/3298551) that causes it to set a `content-length` header.
         New Relic PHP agent is unable to auto-inject the browser auto-instrumentation when the HTTP header field `Content-Length` is set.
         To keep using browser monitoring, disable browser auto-instrumentation and manually insert the JavaScript header and footer into your templates.
       </Callout>
  </Collapser>
</CollapserGroup>

## View Browser data [#viewing]

Once you enable browser monitoring and generate traffic for your app, data will appear in your app's [browser <DNT>**Summary**</DNT> page](/docs/browser/new-relic-browser/getting-started/browser-overview-page-website-performance-summary). There is a short delay the first time you start the daemon (or when the PHP agent encounters a new application) while the daemon verifies the settings. After that, the New Relic JavaScript snippet is available.

## Disable auto-instrumentation [#disable]

For how to disable browser monitoring with the PHP agent config, see [Browser monitoring config option](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-autorum).

For how to use the API to disable browser monitoring, see [`newrelic_disable_autorum()`](/docs/agents/php-agent/php-agent-api/newrelic_disable_autorum).
