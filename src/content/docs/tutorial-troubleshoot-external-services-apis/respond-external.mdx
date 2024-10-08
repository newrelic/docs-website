---
title: Respond to API issues
metaDescription: Learn how to manage APIs and other external services
redirects:
  - /docs/tutorial-external-services/respond-external/
freshnessValidatedDate: 2023-09-02
---

Almost all applications and services make calls to APIs and other external services. When something as simple as pressing the `buy` button on a site can make dozens of API calls, issues are bound to arise. Problematic API calls can result in anything from a small inventory mishap to a code-red situation where your site can't communicate with your payment processor.

Analyzing these errors is time consuming. Is your site failing to process purchases because the purchase transaction call fails? Or maybe it's your authentication call to your payment processor? Maybe it isn't even an external API issue, but an issue with your internal inventory API. Is it even an API error or an error within your own applicaiton? With New Relic, you can solve these issues in a fraction of the time it would take manually.

<img
  title="Maps overview"
  alt="Home maps overview"
  src="/images/apm_screenshot-crop_maps-home.webp"
/>

## Objectives [#objective]

This tutorial series shows you how to identify problematic API interactions and how to resolve them with the New Relic platform. This doc covers:

* Integrating New Relic with your application to send data to monitor
* Identifying problematic APIs through the external services UI

## Integrate New Relic [#integrate]

Before you can monitor or resolve anything, you need to install an agent to collect the data you'll use.

<Steps>
  <Step>
    ## Install an APM agent

    To monitor your application's performance, you'll use an agent created specifically for your app's language. Clicking a logo sends you to New Relic platform where you'll be guided through installing and configuring the agent.

    <TechTileGrid>
      <TechTile
        name="Go agent"
        icon="logo-go"
        to="https://one.newrelic.com/nr1-core?state=985d4005-ba90-a8c7-1da1-2af34539b03b"
      />

      <TechTile
        name="Java agent"
        icon="logo-java"
        to="https://one.newrelic.com/nr1-core?state=80d18bcb-4919-1fcb-2b77-9406838eb916"
      />

      <TechTile
        name=".NET agent"
        icon="logo-dotnet"
        to="https://one.newrelic.com/nr1-core?state=30e93090-6dfa-6b70-8e75-472f54414355"
      />

      <TechTile
        name="Node.js agent"
        icon="logo-nodejs"
        to="https://one.newrelic.com/marketplace/install-data-source?state=be2e62fa-cc3b-c428-27c4-8d662c9e80a1"
      />

      <TechTile
        name="PHP agent"
        icon="logo-php"
        to="https://one.newrelic.com/nr1-core?state=aa633b41-72d4-009c-3abf-55dcf64894fe"
      />

      <TechTile
        name="Python agent"
        icon="logo-python"
        to="https://one.newrelic.com/nr1-core?state=20fda75b-58fb-a92a-f9e1-7b052035c6e8"
      />

      <TechTile
        name="Ruby agent"
        icon="logo-ruby"
        to="https://one.newrelic.com/nr1-core?state=d69143ab-605c-579b-25bf-cc6e5fee5b80"
      />
    </TechTileGrid>

    Once you've installed an agent, go to <DNT>**[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION'))**</DNT> and select your app. If you don't see much data just yet, step away for a while and let the agent gather real-time data as your application runs.
  </Step>

  <Step>
    ## Additional setup

    Your specific configuration may require additional setup. Take a look at our [external service setup doc](/docs/apm/apm-ui-pages/monitoring/external-services/external-services-setup/) for more information.

    Once you've completed any additional steps from the doc above, go to <DNT>**[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION'))**</DNT> > select your app > <DNT>**External services**</DNT>. You should see data about your APIs and external services flow in.
  </Step>
</Steps>

## Identify problematic APIs

You now have the ability to track how your application interacts with APIs and other external services. Let's use that info to identify which APIs or external services are causing issues:

<Steps>
  <Step>
    ## Think about the root cause

    If you're looking for problematic APIs or services, you probably already have an issue you're ready to solve. Maybe your users can't make purchases or even log in to your site.

    Your application might make calls to dozens or hundred of APIs. While you continue with the following steps, keep your root issue in mind. If you know you have an issue with purchases you should focus on purchase and transacton related APIs. If it's a log in issue, you might focus on calls to user databases or external authentication services.
  </Step>

  <Step>
    ## Triage with maps

    Let's say you run an webstore and have received emails from your users complaining that they had not been notified when their package arrived. You find this strange as they should have received both SMS and email notifications.

    You've instrumented your service that handles the entire delivery process. Go to the <DNT>**External services**</DNT> page and then click <DNT>**Maps**</DNT>.

    <img
      title="Map view"
      alt="The maps view"
      src="/images/apm_screenshot-crop_external-maps.webp"
    />

    This shows you the relationship between all your own services and any external services or APIs. In this case, the service you care about triaging is `Delivery`. It is called by another service called `Order-Composer` and calls four other services and APIs as you can see to the right.
  </Step>

  <Step>
    ## Identify anomalies

    The map view shows you a few useful charts to track throughput and response time, but it also visually represents those metrics through the thickness and color of the line between your service and the services it calls.

    <img
      title="RPM"
      alt="Screenshot showing the hover view of map entities"
      src="/images/apm_screenshot-crop_maps-rpm.webp"
    />

    The lines between the `Delivery` service and it's dependencies all seem fairly similar except the one pointing to `Sms notification`. In fact, when you hover over the the SMS service you can see that the throughput is much higher than the rest of the dependencies.
  </Step>
</Steps>

You have now identified `Sms notification` as the likely cause of your users frustration. Now that we've identified a likely suspect, you can solve the root issue.

<UserJourneyControls nextStep={{path: "/docs/tutorial-external-services/solve-external", title: "Next step", body: "Use metric charts, system maps, and traces to fix your API issues."}}/>
