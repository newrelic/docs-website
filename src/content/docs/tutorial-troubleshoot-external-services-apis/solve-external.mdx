---
title: Solve your external service problem
metaDescription: Resolve the root cause of your API or external service problems   
redirects:
  - /docs/tutorial-external-services/solve-external
freshnessValidatedDate: 2023-09-02
---

You have now identified the API or external service that requires attention. This tutorial guides you through the steps required to remediate the problems.

Note that there is no one solution for problems with APIs and external services. Take the ideas in this tutorial as a jumping off point and dig in whenever you uncover something.

## Objectives

This doc uses `Sms notification`, the external service we identified [in the previous tutorial doc](/docs/tutorial-external-services/respond-external), as an example of a problematic API or external service. This doc covers:

* Looking for anomalies in metric charts
* Using traces to find the root cause

## Identify and solve the root cause

You've already used the map view to identify the problematic external service, but we can use it to go even deeper:

<Steps>
  <Step>
    ## Identify anomalies with metrics

    In the map view hover over the problematic API or external service and select <DNT>**Show entity preview**</DNT>.

    <img
      title="The preview pane for an external service"
      alt="The preview pane for an external service"
      src="/images/apm_screenshot-crop_maps-preview.webp"
    />

    This opens up a pane where you get an overview of the general state of the service. You already used some of these metrics to identify it as the problem, but it's useful to take a deeper look here. Keep an eye out for:

    * Spikes in the charts.
    * Obviously high response rate or throughput.
    * Response rates and throughputs hitting highs and lows around the same time.

    If you identify an anomaly, use the time picker in the top right to expand the timerange you are looking at. This is useful to identify an anomaly as opposed to a pattern.

    You can see in the screenshot above that nothing stands out except the throughput is a bit higher than you would have expected. There's nothing to worry about immediately.
  </Step>

  <Step>
    ### Find a code-level issue with traces

    Hover over the problematic external service again and this time click <DNT>**View traces**</DNT>.

    <img
      title="The trace pane for an external service"
      alt="The trace pane for an external service"
      src="/images/apm_screenshot-crop_maps-trace.webp"
    />

    This displays various charts about traces involved with that service. In this case, there is a single trace called `Controller/Sinatra//purchase` which allows you to follow the data created from your user clicking the buy button all the way to the API call that sends an SMS notification.

    Click in as deep as you find useful, but focus again on finding anomalies or errors in the chart. For example, you might follow the trace all the way up to the API call that decrypts a user's stored phone number. An error here could uncover the whole problem. If the decrypt call fails and never returns a valid phone number, your user would never receive a phone notification.

    This would also explain why you saw no errors in the `Sms notification` charts. That API was working correctly, but an API further upstream was giving it data that didn't actually serve a purpose.
  </Step>

  <Step>
    ## Use the data to identify logical errors

    Not every solution comes directly from errors or anomalies. The root cause can be much more mundane.

    For example, let's say you've explored every chart related to the `Sms notification` API. You've also gone through every trace and identified no errors or strange anomalies. It all seems to work just fine, but your customers are still not receiving notifications.

    You remember looking at the throughput chart for `Sms notification` and suddenly realize that you might have reached the limit on purches your payment processor provides you. Their API received your call, but since you had reached your quota it simply did nothing with the request it received. It didn't even throw an error back to you.
  </Step>
</Steps>

## What's next? [#next]

Now that you've fixed your API issues and traced your entire system map, you're ready to explore some more our platform:

* Is your app running slow? Learn how to triage and diagnose latency in your app with our [My app is slow](/docs/tutorial-app-slow/root-causes) tutorial.
* If you have a peak demand day coming up, learn how New Relic can help you with [capacity planning](/docs/tutorial-peak-demand/get-started).
* Do you want to create high quality alerts? Our [alerts tutorial](/docs/tutorial-create-alerts/create-new-relic-alerts/) can help you set up an alerting system.

<UserJourneyControls previousStep={{path: "/docs/tutorial-external-services/respond-external", title: "Previous step", body: "Respond to API issues and set up New Relic for your applications."}}/>
