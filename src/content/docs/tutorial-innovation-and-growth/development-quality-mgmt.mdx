---
title: "Improve your code base"
metaDescription: "Our development quality guide helps increase stability by using New Relic to ensure that fewer defects are introduced into the code base."
redirects: 
  - /docs/new-relic-solutions/observability-maturity/innovation-growth/development-quality-implementation-guide
  - /docs/new-relic-solutions/new-relic-solutions/measure-devops-success
  - /docs/new-relic-solutions/observability-maturity/innovation-growth/improving-development-quality-guide/
freshnessValidatedDate: never
---

Overall, a business's digital operations are only as stable as its code. Without a stable code base, engineering will never have time to meet even basic demand for new features, let alone move at the pace required to innovate new and exciting features for their customers. Engineers will spend their time troubleshooting and fixing poor quality code to prevent negative customer experience. Implementing high quality code is key to an organization's ability to innovate and grow.

This guide identifies specific key performance indicators and processes that help improve code quality. It's followed by the [Release quality guide](/docs/new-relic-solutions/observability-maturity/innovation-growth/release-quality-implementation-guide), which can only be done after completing the steps lined out in this one.

You're a good candidate for using this guide if:

* You're not currently measuring code quality.
* Your code quality is perceived as poor.
* You don't know where your developers are spending their time.
* Your organization suffers from too many outages due to application defects.

## Key performance indicators [#key-perf-indicators]

These KPIs help you identify the sources of code defects and the areas that require the most developer effort so that your devs can use their time more efficiently. The KPIs also help you understand if development velocity has any impact on code quality.

### Stability [#kpi-stability]

<CollapserGroup>
  <Collapser
    id="kpi-build-success"
    title="Build success KPI"
  >
    Build success measures the number of times new code is successfully compiled or integrated into the overall application.

    <DNT>**Goal:**</DNT> Increase the build success rate to nearly 100%

    <DNT>**Best practices:**</DNT> Code build events should include the following attributes:

    * Build ID
    * Build name
    * Build result (success/failure)
    * Build duration
  </Collapser>

  <Collapser
    id="kpi-unit-test-success"
    title="Unit test success KPI"
  >
    Unit test success measures the percentage of unit tests new code passes.

    <DNT>**Goal:**</DNT> Increase the test success rate.

    <DNT>
      **Best practices:**
    </DNT>

    Unit tests should:

    * Test one use case.
    * Complete quickly.
    * Be reliable.
    * Have no inter- or external- dependencies.
    * Have simple and easy to maintain code.

    Unit test events should include the following attributes:

    * Test name
    * Commit being tested
    * Test duration
    * Test result (success/failure)
  </Collapser>

  <Collapser
    id="kpi-code-coverage"
    title="Code coverage KPI"
  >
    Code coverage measures the amount of an application's code base that's subject to at least one unit test.

    <DNT>**Goal:**</DNT> Increase code coverage to 100%.

    <DNT>**Best practices:**</DNT> Follow the [unit test](#kpi-unit-test-success) best practices to ensure that code test coverage reaches the 100% goal.
  </Collapser>

  <Collapser
    id="kpi-defect-volume"
    title="Defect volume KPI"
  >
    Defect volume measures the number of defects introduced into an application by a specific module of code.

    <DNT>**Goal:**</DNT> Reduce the number of new defects.
    <DNT>**Best practices:**</DNT> Identify the sources of new defects by relating them to specific services and code modules.

    Code defect events should include the following attributes:

    * Timestamp
    * Application
    * Code module
    * Reference to defect
  </Collapser>
</CollapserGroup>

### Velocity [#kpi-velocity]

<CollapserGroup>
  <Collapser
    id="kpi-commit-volume"
    title="Code commit volume KPI"
  >
    Code commit rate measures the number of new code commits over time.

    <DNT>**Goal:**</DNT> Code commit rate should be correlated against defect volume to identify the optimal balance between velocity and stability.

    <DNT>**Best practices:**</DNT> Code commit events should include the following attributes:

    * Timestamp
    * User
    * Project
    * Repository
    * Branch
    * Commit ID or hash
  </Collapser>
</CollapserGroup>

<Steps>
  <Step>
    ### Gather the required KPIs [#gather-kpis]

    The best place to start is by gathering your key performance indicators. To do this, you need to know the specific technology platforms that support your development processes, such as source code repositories and build/test automation platforms. Then, you'll need to identify methods for extracting each KPI's attributes and importing them into New Relic.

    You can find the KPIs and minimum-required attributes needed for this use case in the [key performance indicators](#key-perf-indicators) section above. Typically, you'll use your development toolchain's APIs to extract the KPIs and their attributes, then submit them to New Relic using the [custom events API](/docs/data-apis/ingest-apis/introduction-event-api/).

    Before starting any custom integration work, you should find if any applicable out-of-box integrations exist.  

  </Step>

  <Step>
    ### Implement dashboards [#implement-dashboards]

    Our <InlinePopover type="dashboards"/> are the primary method this improvement process uses. They show your current KPIs and help you to identify the areas that require improvement. You can find sample dashboards [in the New Relic OMA resource center on GitHub](https://github.com/newrelic/oma-resource-center).

    The information displayed in the dashboards depends on your development toolchain, so you'll need to [customize your dashboard](https://developer.newrelic.com/collect-data/monitor-your-application/query-custom-data/) to your exact specifications.  

  </Step>

  <Step>
    ### Establish a development baseline [#establish-baseline]

    Because you need enough data to form a baseline before you can [perform the initial enablement](#perform-enablement-one), you must establish your baselines that consist of a sample of development activity. Normally, this will be a minimum of two weeks, but it can be up to six weeks depending on your current development pace. One easy way to do this is to align your baseline collection and evaluation cycle with your Agile sprints, if applicable.

    You should periodically ensure that event data is accumulating as expected in New Relic while you establish your baselines.  

  </Step>

  <Step>
    ### Meet with your team [#meet-with-team]

    After establishing your baselines, you'll introduce development teams and other stakeholders to the collected data and the ongoing continuous improvement process you'll be following.

    The process consists of three activities:

    1. <DNT>**Review the KPIs and trends**</DNT>: You and the stakeholders will look at the KPIs and identify trends.
    2. <DNT>**Identfy achievements, challenges, and opportunities**</DNT>: In this phase, you'll identify areas where KPIs are improving (achievements) and areas where they're not improving (challenges). You'll then identify strategies and tactics for improving KPIs (opportunities) and how best to implement them.
    3. <DNT>**Make technical recommendations**</DNT>: Here, you and the relevant stakeholders will identify and review technical recommendations, such as making changes to your development toolchain or observability strategies.
  </Step>

  <Step>
    ### Begin the improvement process [#improvement-process]

    This final step is a continuous improvement process. During this phase, you'll [meet with your team](#meet-with-team) to review your progress against your baseline and adjust your strategies so you deliver the desired improvements. Each cycle of the improvment process should occur after several iterations of your development process. Typically, these occur at the mid-point and end of every Agile sprint.

    During this phase you should:

    * Report your KPIs each week to stakeholders to ensure that teams are appropriately prioritizing the work and show the progress made towards the promised business outcomes.
    * Record and retain your weekly KPIs over time to establish new baselines and show the rate of improvement.  

  </Step>
</Steps>

Once you've completed the process above, you can move on to using New Relic to improve your release quality.

<UserJourneyControls nextStep={{path: "/docs/tutorial-innovation-and-growth/release-quality-mgmt/", title: "Next step", body: "Learn how to use New Relic to improve the quality of your releases"}}/>
