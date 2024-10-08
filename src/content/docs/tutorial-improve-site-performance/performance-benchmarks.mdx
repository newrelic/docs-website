---
title: Create frontend performance benchmarks
metaDescription: 'Learn how to create and define performance benchmarks with service levels.'
redirects:
    - /docs/journey-performance/slo-tutorial/
    - /docs/tutorial-app-performance/slo-tutorial/
    - /docs/tutorial-site-performance/performance-benchmarks/
    - /docs/tutorial-app-performance/performance-benchmarks/
freshnessValidatedDate: never
---

Your system architecture is made up of hosts, apps, and services that affect and depend on each other. If one part of your architecture underperforms, it can later lead to critical system outages. Service levels, however, let you apply thresholds that make keeping track of your system easier. If performance on a service exceeds or falls below a given threshold, you receive an alert. Here are the layers to service levels:

* A service level is made up of service level objectives (SLOs). SLOs are goals that represent how you expect your services to behave.
* Your SLOs are defined by service level indicators (SLIs). SLIs are key measurements and metrics that determine service availability.
* On top of these objectives an indicators are alerts. These notify you when your services fail to meet your SLOs.

## Objectives [#objectives]

This tutorial walks you through creating performance benchmarks with service levels. By the end of the tutorial, you'll have these tasks completed:

* Understand the relationship between service level indicators (SLIs) and service level obectives (SLOs).
* Create and defined SLIs and SLOs for your frontend experience.
* Set up alerts so you know when your services have a drop in performance.

## Define your service levels [#define]

Defining and managing your service levels following the steps below provides the ability to:

* Ease future setup: Automatically establish a baseline of performance and reliability for any service with a one-click setup.
* Define reliability across teams: Avoid arduous alignment processes with SLO and SLI recommendations that help you determine service boundaries. Set reliability benchmarks automatically based on recent performance metrics in any entity.
* Iterate and improve: With full-stack context and automation through open-source infrastructure-as-code tools like Terraform, teams have insight into how specific nodes or services impact system reliability and can quickly take control over their performance. Custom views for both service owners and business leaders drive operational efficiency and lead to better reporting, alerting, and incident management processes.
* Standardize reliability: Cross-organizational teams have a unified, transparent view of service reliability, and can better comply with customer-facing SLAs. SLO compliance metrics and error budgets give organizations a way to report on reliability and implement changes across applications, infrastructure, and teams in a cohesive fashion.

## Create your performance benchmarks [#create]

<Steps>
  <Step>
    ## Select service level indicators:

    While there are a large amount of SLIs you could use to define your frontend experience benchmarks, the following are some we specifically reccomend. Each collapser has an explanation of when you should choose that SLI and a corresponding NRQL query (which you'll use in step 2).

    For now, just select one of the following:

    <DNT>**SLIs for APM services instrumented with the New Relic agent**</DNT>:
    Based on `Transaction` events, these SLIs are the most common for request-driven services:

    <CollapserGroup>
      <Collapser
        className="freq-link"
        id="service-availability"
        title="Service success"
      >
        Service success is the ratio of the number of successful responses to the number of all requests. Effectively, this is an error rate, but you can filter it down, for example removing expected errors.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}'
        ```

        Where `{entityGuid}` is the service's GUID.

        <DNT>
          **Bad events fields**
        </DNT>

        ```sql
        FROM: TransactionError
        WHERE: entityGuid = '{entityGuid}' AND error.expected IS FALSE
        ```

        Where `{entityGuid}` is the service's GUID.
      </Collapser>

      <Collapser
        className="freq-link"
        id="service-latency"
        title="Service latency"
      >
        A latency SLI measures the proportion of valid requests that were served faster than the threshold established as a good experience.

        In order to determine that duration threshold, check how the service has been performing in the past weeks, and use that result as a realistic and achievable baseline. Afterwards, you can iterate on the SLI threshold, and align it with a more ambitious performance.

        To select an appropriate value for the duration condition, one typical practice is to select the 95 percentile duration of the responses for the last 7 or 15 days. Find this duration threshold using the [query builder](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder/), and use it to determine good events for your SLI:

        ```sql
        SELECT percentile(duration, 95) FROM Transaction WHERE entityGuid = '{entityGuid}' since 7 days ago limit max
        ```

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}' AND transactionType = 'Web'
        ```

        Where `{entityGuid}` is the service's GUID.

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: Transaction
        WHERE: entityGuid = '{entityGuid}' AND transactionType = 'Web' AND duration < {duration}
        ```

        * Where `{entityGuid}` is the service's GUID.
        * Where `{duration}` is the response time that you consider provides a good experience for your client service or end-user, in seconds.
      </Collapser>
    </CollapserGroup>

    <DNT>**SLIs for browser applications**</DNT>:
    The following SLIs are based on Google's core web vitals.

    <CollapserGroup>
      <Collapser
        className="freq-link"
        id="browser-availability"
        title="Browser app success"
      >
        It's the proportion of page views that are served without errors.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageView
        WHERE: entityGuid = '{entityGuid}'
        ```

        Where `{entityGuid}` is the service's GUID.

        <DNT>
          **Bad events fields**
        </DNT>

        ```sql
        FROM: JavaScriptError
        WHERE: entityGuid = '{entityGuid}' AND firstErrorInSession IS true
        ```

        Where `{entityGuid}` is the browser app GUID.
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-contentful-paint"
        title="Browser app largest contentful paint"
      >
        It’s the proportion of valid page views where the largest content element visible in the viewport was rendered faster than the threshold considered to correspond to a good experience.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND largestContentfulPaint IS NOT NULL
        ```

        Where `{entityGuid}` is the service's GUID.

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND largestContentfulPaint < '{largestContentfulPaint}'
        ```

        * Where `{entityGuid}` is the browser app GUID.
        * Where `{largestContentfulPaint}` is the amount of time (in milliseconds) to render the largest content element visible in the viewport that you consider provides a good experience for your end user. A frequent standard is 4000 ms.

        To determine a realistic number to use for `{largestContentfulPaint}` in your environment, one typical practice is to select the 95 percentile duration of the responses for the last 7 or 15 days. Find it by using the query builder:

        ```sql
        SELECT percentile(largestContentfulPaint, 95) FROM PageViewTiming WHERE entityGuid = '{entityGuid}' SINCE 7 days ago LIMIT MAX
        ```
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-first-delay"
        title="Browser app interaction to next paint"
      >
        It’s the proportion of page views where the time between a user's first interacion with the page and the time when the browser responds to that interaction is less than a certain threshold.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND interactionToNextPaint IS NOT NULL
        ```

        Where `{entityGuid}` is the service's GUID.

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND interactionToNextPaint < {interactionToNextPaint}
        ```

        * Where `{entityGuid}` is the browser app GUID.
        * Where `{interactionToNextPaint}` is the amount of time (in milliseconds) the browser should respond in to provide a good experience for your end user. A frequent standard is 300 ms.

        To determine a realistic number to use for `{interactionToNextPaint}` in your environment, one typical practice is to select the 95 percentile duration of the responses for the last 7 or 15 days. Find it by using the query builder:

        ```sql
        SELECT percentile(interactionToNextPaint, 95) FROM PageViewTiming WHERE entityGuid = '{entityGuid}' SINCE 7 days ago LIMIT MAX FACET deviceType
        ```
      </Collapser>

      <Collapser
        className="freq-link"
        id="browser-cumulative-shift"
        title="Browser app cumulative layout shift"
      >
        It’s the proportion of page views with a good cumulative layout shift (CLS). CLS is described as the total sum of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. A layout shift occurs any time a visible element changes its position from one rendered frame to the next.

        <DNT>
          **Valid events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND cumulativeLayoutShift IS NOT NULL
        ```

        Where `{entityGuid}` is the service's GUID.

        If you’d like to create separate SLIs to track CLS in desktop and mobile devices separately, add one of these clauses at the end of the field:

        * `and deviceType = 'Mobile'`
        * `and deviceType = 'Desktop'`

        <DNT>
          **Good events fields**
        </DNT>

        ```sql
        FROM: PageViewTiming
        WHERE: entityGuid = '{entityGuid}' AND cumulativeLayoutShift < {cumulativeLayoutShift}
        ```

        * Where `{entityGuid}` is the browser app GUID.
        * Where `{cumulativeLayoutShift}` is a pre-set value. To provide a good user experience, your site should strive to have a CLS score of 0.1 or less. A CLS score of 0.25 or more is considered a poor user experience.

        If you’ve decided to create separate SLIs to track CLS in desktop and mobile devices separately when you defined the valid events query, add this clause at the end of the field:

        * `and deviceType = 'Mobile'`
        * `and deviceType = 'Desktop'`

        To determine a realistic number to select for `{cumulativeLayoutShift}` in your environment, one typical practice is to select the 75th percentile of page loads for the last 7 or 15 days, segmented across mobile and desktop devices. Find it by using the query builder:

        ```sql
        SELECT percentile(cumulativeLayoutShift, 95) FROM PageViewTiming WHERE  entityGuid = '{entityGuid}' since 7 days ago limit max facet deviceType
        ```
      </Collapser>
    </CollapserGroup>

    <Callout variant="tip">
      Your organization should define SLOs and SLIs based on your specific needs, your user's expectations, and resources available. After completing this tutorial, we recommend you [learn more about how to define granular custom service levels](/docs/service-level-management/create-slm/#define-user-exp).
    </Callout>
  </Step>

  <Step>
    <img
      title="SLI ui"
      alt="An image of the service level maangement ui"
      src="/images/sonic_screenshot-full_sli-ui-overview.webp"
    />

    1. Navigate to <DNT>**[one.newrelic.com](https://one.newrelic.com) > All capabilities > Service levels management**</DNT>. This UI shows all your service levels and allows you to define, monitor, and edit them.
    2. Select <DNT>**+ Add a service level**</DNT> in the top right of the UI.
  </Step>

  <Step>
    Choose the corresponding entity that you want to create a service level for. This could be an entire workload, a specific service, a synthetic monitor, or even a specific transaction. Once you've selected your entity, click <DNT>**Continue**</DNT> on the left side of the UI pane.
  </Step>

  <Step>
    Define the SLI you chose in step one in this pane. For example if you chose to define an SLI for browser app success, you would use the following queries:

    <DNT>**Query for valid events**</DNT>:

    ```sql
    FROM: PageView
    WHERE: entityGuid = '{entityGuid}'
    ```

    <DNT>**Query for bad events**</DNT>:

    ```sql
    FROM: JavaScriptError
    WHERE: entityGuid = '{entityGuid}' AND firstErrorInSession IS true
    ```

    Select <DNT>**Continue**</DNT> in the left pane once you've confirmed your queries are correct.
  </Step>
</Steps>

## What's next? [#next]

Congratulations! You've completed our journey on how to use New Relic to improve your site's performance! In this tutorial, you learned a few things about improving your site performance. You learned how to:

* Unlock data that can give you insight into how your site currently performs by instrumenting your site.
* Evaluate your core web vitals so you can make the right decisions about improving end-user experience.
* Make improvements to your site by fixing high latency and reducing JavaScript errors
* Create performance benchmarks to track performance over time.

New Relic offers other capabilities that can help you improve performance. While this tutorial focused on your site, you can check out our other tutorials:

* Is your app slow? Check out [My app is slow](/docs/tutorial-app-slow/root-causes) to troubleshoot and fix common issues with your apps.
* Is your infrastructure instrumented, but you don't know how to grok your host data? Check out our [Troubleshoot hosts with infra data](/docs/tutorial-troubleshoot-infra-hosts/diagnose-app-infra-data) tutorial.
* Do you need alerts, but don't know where to start? Check out our [Create and manage alerts](/docs/tutorial-create-alerts/create-new-relic-alerts) tutorial.
