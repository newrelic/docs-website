---
title: Getting started
metaDescription: 'Learn how to enable and manage Browser Logs in New Relic, including steps for automatic log collection and how to disable the feature.'
redirects:
  - /docs/browser/browser-monitoring/browser-pro-features/auto-logging
freshnessValidatedDate: never
---

## Automatically detect browser logs [#automatic-log]

Auto logging collects log messages issued from the browser `console` to help you maximize observability of your front-end applications.

Browser logs are tracked by default at the `WARN` level for Pro and Pro+SPA agents, but unavailable for the Lite browser agent. We recommend that you first confirm you're using the `Pro or Pro+SPA agent`. 

### How browser auto-logging works 

Based on logging levels and sampling rates set in the configuration, auto-instrumentation of browser logs will attempt to collect messages from the following methods:

<table>
  <thead>
    <tr>
      <th style={{width: "200px"}}>
        Method
      </th>

      <th>
        Level
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        console.log
      </td>
      <td>
        `INFO`
      </td>
     </tr>
    <tr>
      <td>
        console.error
      </td>
      <td>
        `ERROR`
      </td>
    </tr>

    <tr>
      <td>
        console.warn
      </td>
      <td>
        `WARN`
      </td>
    </tr>

    <tr>
      <td>
        console.info
      </td>
      <td>
        `INFO`
      </td>
    </tr>

    <tr>
      <td>
        console.debug
      </td>
      <td>
        `DEBUG`
      </td>
    </tr>

    <tr>
      <td>
        console.trace
      </td>
      <td>
        `TRACE`
      </td>
    </tr>
  </tbody>
</table>

By default, logging data is stored for 30 days, but actual data retention depends on your account.

## Prerequisites

* A **Pro** or **Pro + SPA** browser agent

<Callout variant="important">
  Automatic log detection is not available for the Lite browser agent.
</Callout>

## Enable automatic log collection (For Existing Browser Apps) [#enable-automatic-log]

Enhance your application's observability and debugging capabilities by following these simple setup instructions.

<Steps>

  <Step>
    Go to **[one.newrelic.com](https://one.newrelic.com) > All Capabilities > Browser**.
  </Step>

  <Step>
    Select your browser app.
  </Step>

  <Step>
    In the left-hand menu, click **Application settings**.
  </Step>

  <Step>
    Ensure the **Pro** or **Pro + SPA** browser agent is selected.
  </Step>

  <Step>
    Toggle **Browser Logs** to **ON**.
  </Step>

  <Step>
    Toggle the required verbosity level to **ON**, you can choose from:
    
      * **Error**
      * **Warn**
      * **Info**
      * **Debug**
      * **Trace**

      <Callout variant="important">
        Data passed through the console methods may go through serialization and [obfuscation](/docs/browser/new-relic-browser/configuration/obfuscate-browser-agent-data). Depending on the size and frequency, this may negatively impact application performance as well as data costs. In general, it is NOT recommended to pass in large objects or large amounts of data into console methods.
      </Callout>
  </Step>

  <Step>
    Edit the sampling rate to specify the percentage of user sessions for which to collect logs. You can enter a value between 0 and 100.
  
    <Callout variant="important">
        * Logs sampling is coordinated with other sampling decisions to maximize data collection for the same session. For example, if you set the logs sampling rate to 5% and your Session Replay (SR) sampling rate to 10%, then:
          * Roughly 5% of your sessions will have both Logs and SR collected.
          * Roughly 5% of your sessions will have only SR data collected.
          * The remaining sessions will have neither.
        * For any new browser apps you create, automatic log collection is enabled by default with a warn verbosity level and a sampling rate of 100%.
    </Callout>
  </Step>
</Steps>

  <img
    title="Session replay"
    alt="screenshot of the session replay page in browser"
    src="/images/browser-logs-overview.webp"
  />

## Disable browser logs [#disable-browser-logs]

To disable browser logs for an existing browser app:

<Steps>

  <Step>
    Go to **[one.newrelic.com](https://one.newrelic.com) > All Capabilities > Browser**.
  </Step>

  <Step>
    Select your browser app.
  </Step>

  <Step>
    In the left-hand menu, click **Application settings**.
  </Step>

  <Step>
    Toggle **Browser Logs** to **OFF**.
  </Step>
</Steps>

## Data consumption 

Logs follow the same consumption pricing as your other browser bytes. The amount of bytes produced depends on the count and length of messages.

The auto logging feature eliminates the need to call the `newrelic.log` or `newrelic.wrapLogger` browser APIs, except when adding custom attributes to logging events.