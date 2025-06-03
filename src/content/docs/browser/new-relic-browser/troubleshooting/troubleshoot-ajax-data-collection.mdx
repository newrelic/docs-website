---
title: Troubleshoot AJAX data collection
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: Troubleshooting for not seeing AJAX data for your browser app.
redirects:
  - /docs/browser/new-relic-browser/troubleshooting/troubleshooting-ajax-data-collection
freshnessValidatedDate: never
---

## Problem

You are not seeing [AJAX data](/docs/browser/new-relic-browser/browser-pro-features/ajax-page-identifying-time-consuming-calls) for your browser app.

## Solution

If your application is instrumented with [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/installation-configuration/troubleshooting-browser-monitoring-installation) and is correctly collecting data for other [Pro features](/docs/browser/new-relic-browser/browser-pro-features), follow these steps:

<Steps>

  <Step>

    ## Verify the page is instrumented [#verify-page-intrum]

    If you are using XMLHttpRequest, use your browser's dev console to verify page has been correctly instrumented. Enter `XMLHttpRequest` and/or `fetch` into the console. If instrumentation failed, you will see something like:

    ```js
    // XMLHttpRequest
    ƒ XMLHttpRequest() { [native code] }
    ```

    If you see anything else, then the verification has succeeded.

  </Step>


  <Step>

    ## Verify AJAX instrumentation is enabled [#verify-instrum]

    AJAX instrumentation is not included in the lite agent.

    To verify AJAX instrumentation:

    1. Open your browser console dev tool and check the `newrelic.initializedAgents` object. This object contains an entry for every agent running on the page. There is typically only one agent on a page.

    2. Inspect the initialized agent object for a `runtime` object. This object contains information about the running agent like `loaderType`. If `loaderType` is `lite`, AJAX instrumentation is not included in the agent being used.

    3. If the `loaderType` is not `lite`, you can also check the initialized agent for `config` and `features`
     objects.

        * The `config` object will contain runtime configuration of the agent, including an `ajax` object with an `enabled` boolean.
        * The `features` object should contain an entry for each feature initialized by the agent, including an `ajax` entry.

    4. Verify this AJAX object contains a boolean `enabled` of `true` and `featAggregate` entry.

If any of these items are not true, the AJAX instrumentation may not have initialized due to a configuration change in New Relic on the browser entity or possibly a manual change to the `NREUM.init` object that was copied and pasted into the HTML.

  <Callout variant="important">
    `newrelic.initializedAgents` is the accepted property to check for agent existence on a page, unless you are using an old or an unsupported agent version.
  </Callout>
  </Step>
  
  <Step>
  
    ## Verify the deny list configuration [#verify-deny-list]

    The agent can be configured to ignore certain domains and paths when creating [AjaxRequest Events](/attribute-dictionary/?event=AjaxRequest).

    Use your browser's dev console to check the current AJAX deny list rules by running `newrelic.init`. Look for a property `ajax` containing an array called `deny_list`.

    If you see entries in the deny list that are unfamiliar or causing AJAX calls to be filtered, review the [Filter AjaxRequest Events](/docs/browser/new-relic-browser/configuration/filter-ajax-request-events/) documentation for further guidance.
  </Step>

  <Step>

    ## Verify network access [#verify-network-access]

    If the object is properly instrumented, try triggering an AJAX call in your application while monitoring network traffic in the browser's developer tools. Wait up to one minute, and look for a call to `bam.nr-data.net/jserrors` with an `xhr` parameter. If the call fails, check for network issues. Alternatively, look for a request to `bam.nr-data.net/events` with a payload that starts with `bel.7;2`.

    If you don't see this call, if it fails with an error not related to network access, or if it succeeds but you still aren't seeing data, continue through the troubleshooting documentation.

  </Step>

  <Step>

  ## Review how JSONP affects requests [#jsonp]
  
    If your requests use [JSONP](https://en.wikipedia.org/wiki/JSONP), these requests will not appear on the [AJAX UI page](/docs/browser/new-relic-browser/browser-pro-features/ajax-page-identifying-time-consuming-calls). 
    
    However, you can view them as assets within [session traces](/docs/browser/new-relic-browser/browser-pro-features/session-traces-exploring-webpages-life-cycle). 
    
    If you're using SPA monitoring, you can view them on the <DNT>**AJAX**</DNT> tab of the <DNT>**Page views**</DNT> page.

    Requirements for JSONP to be recognized:

    * Each JSONP request must use a unique callback function. Most popular libraries (like jQuery) generate a unique callback function dynamically for each request.
    * The query string containing the callback function name must be named `"callback"` or `"cb"` in order to be recognized by New Relic. This is the default behavior in most popular libraries.
      
    </Step>
</Steps>

<Callout variant="tip">
If any of these troubleshooting steps fails or you are still having issues with missing AJAX data, get support at [support.newrelic.com](https://support.newrelic.com).
</Callout>