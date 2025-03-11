---
title: Solve your critical errors
metaDescription: Learn how to manage a high number of errors in your app.
redirects:
    - /docs/tutorial-errors/solve-critical-errors  
freshnessValidatedDate: 2023-07-18
---

In part one of this tutorial, we chose an error group to investigate further. In part two, we'll investigate a new page that displays attributes, logs, and traces about the error.

This part of the tutorial guides you through two recommended avenues for analyzing an error, your logs and stack traces.

## Objectives [#objectives]

This doc builds off the problem scoped from the [Respond to service outages](/docs/tutorial-errors/respond-outages) doc of this tutorial series. In this doc, you'll:

* Locate the error code associated with a failing API with logs
* Use stack traces to find where in your code the error is occurring

## Locate the source of an error with logs and stack traces [#analyze]

The errors summary tells the story behind your error groups. Depending on how you've configured New Relic, each service might display different kinds of information about an error. For example, if you've disabled distributed tracing, you won't see as much detail about external services in your traces.

<Steps>
  <Step>
    ## Open the Log details window

    Looking at our example, the APM agent has pulled logs related to `api-gateway`, giving us event data about our error:

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-logs.webp"
    />

    Our logs-in-context capability formats your logs information, though you have the option to investigate the unformatted log as well.
  </Step>

  <Step>
    ## Find the failure point in your system

    Depending on the nature of the log, you may have more or less logging detail to sort through. Because you spent time upfront narrowing down the service closest to the failure and choosing the likely error group, you have time to read your logs.

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-logs-zoomed.webp"
    />

    According to your logs, your problem is:

    * A timeout error: `error.error.code: ETIMEDOUT`
    * Related to your customer API: `error.endpoint: customers-api-internal`
    * Agnostic to the kind of request sent to the customer API: `error.request: /api/customers/search/Kirlin/-/`

    You have enough context to tie it together. You conclude that there's a dependency failure: All calls to the customer API are timing out and causing upstream requests from `api-gateway` to fail.
  </Step>

  <Step>
    ## Find the failure point in your code with stack traces

    When you run your code, New Relic captures your exceptions or runtime errors and organizes them into a waterfall view. These are your stack traces. Depending on the language used, these stack traces provide detailed messages and the locations of your failure points.

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-stack-traces.webp"
    />

    While your logs tells you what's causing the error, your stack traces identify the where. You can use these stack traces to find exactly where in your code an error is occurring, then connect those errors to the owning team.
  </Step>

  <Step>
    ## Open in your IDE from New Relic

    To open your code from New Relic, you need to [install CodeStream](/docs/codestream/start-here/install-codestream). This is an optional but highly recommended feature that lets you open your IDE directly from stack traces:

    <img
      title="Overview errors affecting your services"
      alt="A screenshot showing an app with many errors"
      src="/images/apm_screenshot-crop_errors-IDE.webp"
    />
  </Step>
</Steps>

## What's next? [#next]

Reacting to an error and finding the direct cause of an outage is only part of dealing with errors in your app. Now that we've covered how to describe, diagnose, and find the source of an outage, you can route errors to the relevant teams.

<UserJourneyControls
  nextStep={{path: "/docs/tutorial-errors/route-teams", title: "Next step", body: "Now that you know where your code is failing, learn to route errors to the correct teams."}}
  previousStep={{path: "/docs/tutorial-errors/respond-outages", title: "Previous step", body: "Learn how to choose services and error groups that are closest to the point of failure."}}
/>
