---
title: "Improve the quality of your releases" 
tags:
  - Observability maturity
  - Innovation and growth
  - Release quality
  - Implementation guide
metaDescription: "Our release quality guide helps you use New Relic to improve and optimize the quality and cadence of your code deployments."
redirects: 
  - /docs/new-relic-solutions/observability-maturity/innovation-growth/release-quality-implementation-guide
  - /docs/new-relic-solutions/observability-maturity/innovation-growth/development-release-quality-guide/
freshnessValidatedDate: never
---

The success of a development team depends on the frequency and success of their releases. Teams that release too slowly won't be able to keep pace with business demands and innovation, and teams that create too many unsuccessful releases will have a negative impact on customer satisfaction, revenue, and overall system stability.

Google's [DevOps Research and Assessment](https://www.devops-research.com/research.html) (DORA) team has identified four key metrics that indicate the performance of a software development organization. Our <DNT>**Innovation and Growth**</DNT> value driver uses those metrics to make an overall program that creates more efficient and responsive development teams, along with more reliable applications. This release quality guide helps you improve deployment frequency, application performance, and application reliablity.

## Key concepts [#key-concepts]

Kep concepts include:

### Communicate, remediate, innovate [#communicate]

One of the central themes of New Relic's observability maturity practice is "Communicate, remediate, innovate." We support that theme by enabling you to communicate the current state of your development practices to stakeholders using specific KPIs. You'll then use those KPIs to adjust your development practices and identfy slow and unreliable application components so you can fix them in subsequent development sprints. Finally, you will use those KPIs to make your development practices more efficient and add additional time for your teams to innovate.

### Trunk-based development [#trunk]

Trunk-based development is defined as "A source-control branching model, where developers collaborate on code in a single branch called <DNT>**trunk**</DNT>, resist any pressure to create other long-lived development branches by employing documented techniques." In short, it divides development work into small batches performed against branches of a single trunk. As soon as one batch of work is completed, the branch is merged back into the trunk. Each branch has a short lifetime, making merges back into the trunk simple and ensuring every developer is working from recent releases of the code base.

This practice has been identified by the DevOps Research and Assessment (DORA) organization as a key capability that drives faster delivery and higher organizational performance. It's a required practice for CI/CD.

### IT service boundary [#it-boundary]

Improving release quality works at the level of the IT service boundary. By measuring the service at the boundary, you can get a picture of what's happening upstream from it.

The [service level management guide](/docs/new-relic-solutions/observability-maturity/uptime-performance-reliability/slm-implementation-guide) uses the service boundary concept to measure the response time and error rate of a given service. In this guide, you'll use the same concept to measure the impact that your development practices have on the service and then to improve your development team's responsiveness, ability to innovate, and application stability.

## Key performance indicators [#key-perf-indicators]

You'll use the development quality process to collect and measure the following KPIs:

<CollapserGroup>
  <Collapser
    id="kpi-release-rate"
    title="Release rate KPI"
  >
    Release rate measures the number of releases over time. Release events should include the following attributes:

    * The application's name
    * The release's unique identiifer (SHA signature, version number, etc.)
    * The number of lines of code added
    * The number of lines of code removed
    * The date and time the release occurred
    * The user or process that deployed the release
    * The URL that points at this release in the source code repository
    * An indicator that shows if this release is new or a rollback

    <DNT>**Goal:**</DNT> Increase the rate of releases.

    <DNT>
      **Best practices:**
    </DNT>

    * Use continuous improvement processes to drive a higher release rate.
    * Minimize the number of changes in each release to reduce the impact of release failures.
    * Map this KPI back to business impact and report it to stakeholders.
  </Collapser>

  <Collapser
    id="kpi-release-size-scope"
    title="Release size/scope KPI"
  >
    Release size/scope measures the number of lines of code added or removed. As an alternative, it can measure the percentage of the code base changed.

    You should include this KPI as an attribute of a release event as defined by the Release rate KPI.

    <DNT>**Goal:**</DNT> Reduce the size/scope of each release.

    <DNT>
      **Best practices:**
    </DNT>

    * Minimize the number of changes in each release to reduce the impact of release failures.
    * Map this KPI back to business impact and report it to stakeholders.
  </Collapser>

  <Collapser
    id="kpi-app-resp-errors"
    title="App transaction responsiveness and errors KPI"
  >
    The app responsiveness and errors KPI measures the release's 95th percentile response time and volume of errors.

    You should use observability instrumentation to collect this KPI for every transaction at the application's service boundary. The KPI's attributes should, at minimum, include the following:

    * Transaction name and/or URI
    * The transaction's start wall clock time
    * The transaction's duration
    * The compute resource that serviced the request

    <DNT>**Goal:**</DNT> Improve response time and reduce errors.

    <DNT>
      **Best practices:**
    </DNT>

    * Use service level management techniques to create more responsive applications with fewer user-facing errors.
    * Use this KPI to prioritize engineering's performance enhancement efforts.
    * Use your observability solution to feed back information on bottlenecks and blame components to your development teams so they can fix them.
  </Collapser>

  <Collapser
    id="kpi-production-impact"
    title="Production impact KPI"
  >
    Production impact measures the number of failed releases (such as releases that were rolled back or failed to deploy).

    You should include this KPI as an attribute of a release event as defined by the release rate KPI.

    <DNT>**Goal:**</DNT> Reduce the number of failed releases.

    <DNT>
      **Best practices:**
    </DNT>

    * Ensure you realistically test your deployments in non-production environments prior to moving them to production.
    * Perform in-depth retrospectives on failed deployments so you can discover and fix gaps in your testing and deployment processes.
  </Collapser>

  <Collapser
    id="kpi-observability-coverage"
    title="Observability coverage KPI"
  >
    This KPI measures the percentage of the application that has observability instrumentation.

    <DNT>**Goal:**</DNT> 100% coverage

    <DNT>
      **Best practices:**
    </DNT>

    * Add diagnostic instrumentation to the application's main components.
    * Use SLO attainment failures to drive diagnostic processes to identify and fill observabilty gaps.
    * Use incident retrospectives to identify and fill observability gaps.
  </Collapser>

  <Collapser
    id="kpi-support-ticket-volume"
    title="Support ticket volume KPI (optional)"
  >
    Support ticket volume measures the number of support tickets opened against this release. This is an optional KPI.

    You should collect this KPI as an hourly or daily metric which has the following attributes:

    * Application name and release
    * Timestamp
    * Number of tickets opened by severity
    * Mean time to close by severity

    <DNT>**Goal:**</DNT> Reduce the number of tickets.

    <DNT>
      **Best practices:**
    </DNT>

    * Ensure you can correlate support tickets against specific releases.
    * Analyze support tickets to understand the kinds of issues encountered, and use that info to drive continuous improvement.
  </Collapser>

  <Collapser
    id="kpi-infra-costs"
    title="Infrastructure cost KPI (optional)"
  >
    This KPI measures the application's hosting costs. It is an optional KPI.

    <DNT>**Goal:**</DNT> Create a predictable and stable cost model.

    <DNT>
      **Best practices:**
    </DNT>

    * Measure the costs of each application's hosting infrastructure.
    * Periodically review the application's performance vs. cost metrics to ensure the application has resources appropriate to its function and business importance.
  </Collapser>
</CollapserGroup>

<Steps>
  <Step>
    ### Identify the application [#identify-application]

    The first step is for you to identify the application(s) that are in scope for the first iterations of the improvement process. Applications that are good candidates for inclusion are ones that:

    * Are under active development
    * Are a key operational service
    * Have slow development cycles
    * Have a track record of failed deployments  

  </Step>

  <Step>
    ### Gather the required KPIs [#gather-kpis]

    Next, you need to gather the KPIs as defined from sources such as your CI/CD platform, source repository, observability solution, etc. Once you identify the sources for your KPIs, you'll need to identify methods for extracting them and importing them into the New Relic platform.

    You can see the KPIs and minimum required attributes required in the [key performance indicators](#key-perf-indicators) section above. Typically, you'll use your development toolchain's APIs to extract the KPIs and their attributes, then submit them to New Relic using the [custom events API](/docs/data-apis/ingest-apis/introduction-event-api/).

    Prior to starting any custom integration work, you should determine if any out-of-box integrations exist that meet your goals.
  </Step>

  <Step>
    ### Implement dashboards [#implement-dashboards]

    Our <InlinePopover type="dashboards"/> are the primary drivers of the quality improvement process. They'll show KPIs and trends so you can identify and prioritize your improvement efforts. Sample dashboards can be [found in our observability maturity resource center on GitHub](https://github.com/newrelic/oma-resource-center).

    The information displayed in the dashboards depends on your development toolchain, so you'll need to [customize your dashboard](https://developer.newrelic.com/collect-data/monitor-your-application/query-custom-data/) to your exact specifications.  

  </Step>

  <Step>
    ### Establish your release baseline [#establish-baseline]

    Because you need enough data to form a baseline before you can [perform the initial enablement](#perform-enablement-one), you must establish your baselines that consist of a sample of development activity. Normally, this will be a minimum of two weeks, but it can be up to six weeks depending on your current development pace. One easy way to do this is to align your baseline collection and evaluation cycle with your Agile sprints, if applicable.

    You should periodically ensure that event data is accumulating as expected in New Relic while you establish your baselines.  

  </Step>

  <Step>
    ### Meet with your team [#meet-with-team]

    After establishing your baselines, you'll introduce development teams and other stakeholders to the collected data and the ongoing continuous improvement process you'll be following.

    The process consists of four activities:

    1. <DNT>**Introduce the concepts of trunk-based development**</DNT>: You and the stakeholders will review the core concepts of truck-based development, identify where your current practices differ, and then create strategies to implement it.
    2. <DNT>**Review your release KPIs and trends**</DNT>: You'll review the release rate and release size and scope KPIs to ensure you're making progress towards implementing trunk-based development. Your goal is to increase your release rate while reducing the size and scope of new releases.
    3. <DNT>**Review your application KPIs and trends**</DNT>: Here, you'll review your application's performance and error KPIs to identify and prioritize your efforts towards improving application reliability and performance.
    4. <DNT>**Make technical recommendations**</DNT>: Here, you and the relevant stakeholders will identify and review technical recommendations, such as making changes to your release workflows or observability strategies.
  </Step>

  <Step>
    ### Begin the improvement process [#improvement-process]

    This final step is a continuous improvement process. During this phase, you'll [meet with your team](#meet-with-team) to review your progress against your baseline and adjust your strategies so you deliver the desired improvements. Each cycle of the improvment process should occur after several iterations of your development process. Typically, these occur at the mid-point and end of every Agile sprint.

    During this phase you should:

    * Report your KPIs each week to stakeholders to ensure that teams are appropriately prioritizing the work and show the progress made towards the promised business outcomes.
    * Record and retain your weekly KPIs over time to establish new baselines and show the rate of improvement.  

  </Step>
</Steps>

<UserJourneyControls previousStep={{path: "/docs/tutorial-innovation-and-growth/development-quality-mgmt/", title: "Previous step", body: "Learn how to use New Relic to improve the quality of your development cycles"}}/>
