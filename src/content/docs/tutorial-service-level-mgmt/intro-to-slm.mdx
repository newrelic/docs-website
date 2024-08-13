---
title: "Manage reliability with service levels"
metaDescription: "New Relic observability maturity series: our service level management guide shows you how to easily measure and communicate the overall health, performance, and quality of your digital products and services to all stakeholders."
redirects:
  - /docs/1-establish-objectives-baselines-define-team-slos
  - /docs/1-adopt-easily-establish-objectives-baselines-define-team-slos
  - /docs/establish-objectives-baselines-define-team-slos
  - /docs/new-relic-solutions/best-practices-guides/alerts-applied-intelligence/service-level-management-tutorial
  - /docs/new-relic-solutions/observability-maturity/slm-implementation-guide
  - /docs/using-new-relic/welcome-new-relic/optimize-your-cloud-native-environment/establish-objectives-baselines-define-team-slos
  - /docs/new-relic-solutions/observability-maturity/uptime-performance-reliability/slm-implementation-guide
  - /docs/new-relic-solutions/observability-maturity/uptime-performance-reliability/optimize-slm-guide/
freshnessValidatedDate: never
---

Service level management is the practice of standardizing data into a universal language. Within an organization, communication between stakeholders can often prove more difficult than needed. IT departments usually don't speak in terms that the business-focused parts of an organization can understand, and they in turn don't normally communicate in terms that IT teams find useful. To improve reliability, resolving this language barrier helps to prevent issues. Service level management, or the practice of standardizing data into a universal language that all parties can understand, aids in doing just that.

Service level management best applies to the practice of **Uptime, performance and reliability**, but it also applies to the other practices of **Customer experience**, **Innovation and growth**, and **Operational efficiency** ([learn more about these practices](/docs/new-relic-solutions/observability-maturity/introduction)). Regardless of what area you want to improve, using SLM has two major areas of impact: business outcomes and operational outcomes.

<Tabs stacked>
  <TabsBar>
    <TabsBarItem id="business-outcome">
      Business outcome
    </TabsBarItem>

    <TabsBarItem id="op-outcome">
      Operational outcome
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="business-outcome">
      The required business outcome in terms of reliability focuses on reducing the number of business-impacting incidents, their duration, and the number of people involved.

      * Reduce the number of business-disrupting incidents.
      * Reduce mean time to resolution (MTTR).
      * Reduce average number of people engaged (FTEs) per severe incident.
    </TabsPageItem>

    <TabsPageItem id="op-outcome">
      The required operational outcome in terms reliability focuses on the health of your digital product.

      * Measure operational success by what percentage of critical product applications you cover with your standard service levels.
      * Examine at the percentage of policy adoption by your primary stakeholders.
      * Focus on what's important to the stakeholders, ensure simplicity, and prove the effectiveness of service level management.
    </TabsPageItem>
  </TabsPages>
</Tabs>

## Why use service level management? [#why-slm]

Improving service levels and reliability requires adoption of the practice by all the stakeholders of the service. This includes engineering management, product management, and executive management to quickly show the power and value of service levels and start discussions about what matters to each group. The steps in this guide will get you those meaningful discussions very quickly.

A common method first establishes output performance and input performance service levels for one digital product and its critical capabilities. This usually involves one [overall output](/docs/tutorial-service-level-mgmt/establish-output-sli) and [input service level](/docs/tutorial-service-level-mgmt/establish-input-sli) for each endpoint application (usually one or two), and then approximately 4-7 output performance service levels for assumed critical capabilities measured at the endpoint transaction.

This method doesn't survey each stakeholder for what should and shouldn't be measured, as surveys often take too long and have too many parts in scenarios like this. The important thing is to start with baselines and key transactions as "capabilities."

Successful implementations of service levels demonstrate the ability to easily measure and communicate overall system health. That initial demonstration will show the value in investing more time to refine what your service levels measure. The sooner you provide that complete demonstration, the sooner you can achieve broad adoption and begin the reliability improvement process in collaboration with all your stakeholders!

Let's take a look at some of the common terms and define our KPIs before proceeding.

## Terminology [#terminology]

<Collapser
  id="slm-terminology-service-level"
  title="Service level"
>
  A [service level](https://en.wikipedia.org/wiki/Service_level) measures the performance of a system. You measure service levels by using indicators and comparing them against a set of objectives for expected performance and outcomes.
</Collapser>

<Collapser
  id="slm-terminology-service-level-management"
  title="Service level management"
>
  We define service level management as the practice of reporting, maintaining, and managing service level compliance.
</Collapser>

<Collapser
  id="slm-terminology-sli"
  title="Service level indicator"
>
  A service level indicator (SLI) measures a service level. An SLI identifies something you want to measure, and measures either one datapoint or a composite of datapoints. An SLI most commonly represents a percentage (%) of successful transactions or events. It measures the total number of good events over the total number of valid events calculated over a specified period of time, such as 1 hour, 1 day, or 1 week.

  **Examples SLIs:**

  * Percentage of login API transactions that complete within 500 milliseconds.
  * Percentage of login API transactions that complete without an internal server error.
  * Percentage of login API transactions that complete within 500 milliseconds and without an internal server error.
  * Percentage of synthetic check Pings against the Login API that are successful.
  * Percentage of browser logins that transition to the landing page within 3 seconds.
  * Percentage of metrics ingested that are available for query within 3 seconds.
  * Some or all of the above aggregated into a single SLI.
</Collapser>

<Collapser
  id="slm-terminology-slo"
  title="Service level objective"
>
  A service level objective (SLO) describes the expected service level of a system, job, or capability. It usuall indicates the required percentage of success of one or more SLIs within a given period of time.

  **Example SLOs:**

  * The login API will respond within 500 milliseconds and error free 99.99% of the time each week.
  * The mobile login capability will transition to the landing page within 3 seconds 99.99% of the time each week.
  * The data ingest of metrics will be available for query within 3 seconds of consumption from the API 99.99% of the time each day.
</Collapser>

<Collapser
  id="slm-terminology-service-boundary"
  title="Service boundary"
>
  A service boundary is often the point in a system where the consumer makes request through a client, also known as the external API or endpoint. Service boundaries can also be internal between two distinct systems, where one collection of applications serves the requests of another collection of applications. For example, an identity management system can serve for both login requests from the client and permissions authorization for different features.

  Types of boundaries:

  * **Customer-facing service boundary**: The customer-facing GraphQL API. This boundary gives you the total sum response time and success metrics required for measuring performance health, without the need to measure each dependency.
  * **Internal service boundary**: Middleware dependencies behind the customer-facing GraphQL API. Each dependency API that responds to the GraphQL tier counts as its own internal service boundary. Internal service boundaries don't represent overall output performance health in a 1:1 ratio. For example, a customer request to the GraphQL API could hit seven internal dependencies. One slow dependency doesn't affect the total sum response time of the original request.
</Collapser>

<Collapser
  id="slm-terminology-error-budget"
  title="Error budget"
>
  An error budget measures and communicates your service level objective compliance. We have more detailed information on this advanced method in our [service level management docs](/docs/service-level-management/intro-slm).

  An error budget tracks how much your service can fail before becoming "out of compliance." You can use a few different methods for defining and measuring error budgets. The word "error" in "error budget" doesn't mean HTTP request errors or application errors, but instead refers to "any bad request or event" as defined in your service level objectives.

  **Note**: We recommend you first learn how to define, calculate, and communicate your service level compliance before implementing error budgets. It's very important that you can establish a target for you SLIs to measure the success of how well your SLI meets your targets. For example, you can track whether or not you're within 500 milliseconds of and error-free on 99.99% each for a 24-hour period of your login requests. If your 24-hour SLI compliance result meets 99.99%, then you can consider your objective met.

  **References**

  Google defines an error budget as:

  "In a nutshell, an error budget is the amount of error that your service can accumulate over a certain period of time before your users start being unhappy. Once you define an objective for each (SLI) for your service-level objective (SLO) — the error budget is the remainder, up to 100." -- [Google Cloud - How maintenance windows affect your error budget—SRE tips](https://cloud.google.com/blog/products/management-tools/sre-error-budgets-and-maintenance-windows)

  Atlassian defines an error budget as:

  "An error budget is the maximum amount of time that a technical system can fail without contractual consequences. For example, if your service level agreement (SLA) specifies that systems will function 99.99% of the time before the business has to compensate customers for the outage, that means your error budget (or the time your systems can go down without consequences) is 52 minutes and 35 seconds per year." -- [Atlassian - What is an error budget and why does it matter?](https://www.atlassian.com/incident-management/kpis/error-budget)
</Collapser>

## Prerequisites [#prerequisites]

* Have data to monitor and establish SLIs for, such as through [APM instrumentation](/docs/apm/new-relic-apm/getting-started/introduction-apm) of your primary application.
* You can also use [synthetics tests](/docs/synthetics/synthetic-monitoring/getting-started/get-started-synthetic-monitoring) of your application to generate data to monitor without relying on customers.
* While not required, we highly recommend you achieve basics skills with New Relic [dashboards and NRQL](https://learn.newrelic.com/webinar-getting-started-with-dashboards-nrql).

## What's in this series? [#the-series]

<DocTiles>
  <DocTile
    title="Establish an output performance SLI"
    path="/docs/tutorial-service-level-mgmt/establish-output-sli/"
  >
    Learn how to ensure proper measurement of your service output
  </DocTile>

  <DocTile
    title="Establish an input performance SLI"
    path="/docs/tutorial-service-level-mgmt/establish-input-sli/"
  >
    Learn how to create input indicators and objectives
  </DocTile>

  <DocTile
    title="Establish capability SLIs"
    path="/docs/tutorial-service-level-mgmt/establish-capability-sli/"
  >
    Learn how to create service level scores on capabilities
  </DocTile>

  <DocTile
    title="Improve with service level management"
    path="/docs/tutorial-service-level-mgmt/improve-with-slm/"
  >
    Learn how to use SLM techniques to improve your reliability
  </DocTile>
</DocTiles>
