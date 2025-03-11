---
title: Optimize your telemetry data with New Relic
metaDescription: "Our data ingest governance guide helps you get optimal value for the telemetry data you're reporting to New Relic."
redirects:
  - /docs/telemetry-data-platform/manage-data/data-governance
  - /docs/data-governance
  - /docs/telemetry-data-platform/get-started/manage-data/data-governance
  - /telemetry-data-platform/get-started/manage-data/data-governance
  - /docs/new-relic-solutions/observability-maturity/operational-efficiency/dg-intro
  - /docs/new-relic-solutions/observability-maturity/operational-efficiency/data-governance-roles-practices-guide
  - /docs/new-relic-solutions/observability-maturity/operational-efficiency/intro-data-governance
  - /docs/new-relic-solutions/observability-maturity/operational-efficiency/data-governance-optimize-ingest-guide
freshnessValidatedDate: 2023-07-26
---

Telemetry data, or data that's collected from one source and reported to a monitor for analysis, is becoming increasingly used in modern organizations with multiple data sources to collect. But navigating and managing that data comes with its own considerations, and optimizing how you deal with your telemetry data can save you time and money. This is especially true for complex organizations that have numerous business units and working groups.

This is where <DNT>**Data ingest governance**</DNT>, or the practice of ensuring optimal value for the telemetry data your organization has collected, comes in. Our guide will help you prepare for and carry out the best practices for using this concept within your oganization. After completing this tutorial series, you'll:

* Reduce redundant or unnecessary telemetry data, saving you time and money.
* Understand exactly which groups within the organization are contributing which data.
* Expose where your telemetry data is coming from and reduce data management silos.
* Account for ingest costs in a clear and concise way.
* Adjust your ingest volume with full context of the observability value of the data.

<img
  title="Data ingest governance path"
  alt="A diagram displaying the path for setting up data ingest governance with New Relic. The path is 1. Baseline your data, 2. detect anomalies, and 3. optimize your telemetry"
  src="/images/telemetry_diagram_data-ingest-path.webp"
/>

## Before you begin [#before-begin]

You'll need to make sure that you have data managed with New Relic so that you can use <DNT>**data ingest governance**</DNT> to optimize it. See our [data management doc](/docs/data-apis/manage-data/manage-your-data/) if you need more information.

<Collapser
  id="understand-nr-consumption-metrics"
  title="Understand consumption event types"
>
  All billable telemetry is tracked with our `NrConsumption` and `NrMTDConsumption` events. This guide focuses on how to query `NrConsumption`, which provides more granular, real-time data than `NrMTDConsumption`. The `NrConsumption` attribute `usageMetric` denotes the telemetry type.

  Using `NrConsumption`, you can ask questions like "How much <InlinePopover type="browser"/> data has each account ingested in the last 30 days?" and "How has the ingest changed since the previous 30 days?" Here's a query returning that data:

  ```sql
  FROM NrConsumption SELECT sum(GigabytesIngested) WHERE usageMetric = 'BrowserEventsBytes' SINCE 30 days AGO COMPARE WITH 30 days AGO FACET consumingAccountName
  ```

  The response shows you how many GBs of browser monitoring data you've ingested by account.

  ```shell
  Banking platform, 75 GB, +2.9%
  Marketing platform, 40 GB, -1.3%
  ```

  Below is a breakdown of the different `usageMetric` types, the constituent events (event types where the data is stored), and the type of agent or mechanism responsible for creating the data ingest.

  ### Billable telemetry breakdown table

  <table>
    <thead>
      <tr>
        <th style={{ width: "200px" }}>
          NrcConsumption.usageMetric
        </th>

        <th style={{ width: "200px" }}>
          Constituent events
        </th>

        <th>
          Source
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          InfraHostBytes
        </td>

        <td>
          `SystemSample`, `StorageSample`, `InfrastructureEvent`, `NetworkSample`
        </td>

        <td>
          Infrastructure agent
        </td>
      </tr>

      <tr>
        <td>
          InfraProcessBytes
        </td>

        <td>
          `ProcessSample`
        </td>

        <td>
          Infrastructure agent
        </td>
      </tr>

      <tr>
        <td>
          InfraIntegrationBytes
        </td>

        <td>
          Various events for third party platform integrations as well as `ContainerSample`
        </td>

        <td>
          [On-host integrations](/docs/infrastructure/host-integrations/get-started/introduction-host-integrations/) and certain [cloud integrations](/docs/infrastructure/infrastructure-integrations/get-started/introduction-infrastructure-integrations/#cloud)
        </td>
      </tr>

      <tr>
        <td>
          ApmEventsBytes
        </td>

        <td>
          `Transaction`, `TransactionError`, and possibly `WorkloadStatus`
        </td>

        <td>
          APM agent(s)
        </td>
      </tr>

      <tr>
        <td>
          TracingBytes
        </td>

        <td>
          `Span`, `SpanEvent`
        </td>

        <td>
          APM agent(s) and OpenTelemetry
        </td>
      </tr>

      <tr>
        <td>
          BrowserEventsBytes
        </td>

        <td>
          `Browser`, `BrowserInteraction`, `Browser:EventLog`, `Browser:JSErrors`, `JavaScriptError`, `PageView`, `PageViewTiming`,  `PcvPerf`
        </td>

        <td>
          Browser agent
        </td>
      </tr>

      <tr>
        <td>
          MobileEventsBytes
        </td>

        <td>
          `Mobile`, `MobileReqest`, `MobileRequestError`, `MobileSession`, `MobileHandleException`, `MobileCrash`
        </td>

        <td>
          Mobile agent
        </td>
      </tr>

      <tr>
        <td>
          SeverlessBytes
        </td>

        <td>
          Cloud-specific (i.e., AWS Lambda events)
        </td>

        <td>
          Cloud-specific (i.e., AWS Lambda integration)
        </td>
      </tr>

      <tr>
        <td>
          LoggingBytes
        </td>

        <td>
          `Log` as well as partition-specific events of the pattern `[partition].Log`
        </td>

        <td>
          Various (Fluentd, FluentBit, Syslog, cloud-specific streaming services)
        </td>
      </tr>

      <tr>
        <td>
          MetricEventBytes
        </td>

        <td>
          `Metric`
        </td>

        <td>
          From the Metric API and integrations that use that ([dimensional metrics](/docs/data-apis/understand-data/new-relic-data-types/#dimensional-metrics)), or from agents such as browser agent, APM agent, or mobile agent ([metric timeslice data](/docs/data-apis/understand-data/new-relic-data-types/#timeslice-data)).
        </td>
      </tr>

      <tr>
        <td>
          CustomEventBytes
        </td>

        <td>
          Various
        </td>

        <td>
          Various APIs. [Use `SHOW EVENT TYPES` to view all event types available in an account](#show-event-types).
        </td>
      </tr>
    </tbody>
  </table>
</Collapser>

You'll also need to ensure that you or your team have the ability to track and manage:

* Working with a manager to stay within monthly ingest targets, if applicable.
* Monitoring data ingest baselines and respond to anomalies.
* Drafting and approving plans for data optimization/reduction as needed.
* Participating in scheduled check-ins for analyzing baseline data and comparing it to ingest targets.
* Making modifications to ingest targets as needed.

If you don't already, you should consider having an observability center of excellence team (or something similiar) which is responisble for:

* Maintaining the relationship with New Relic.
* Governing accounts and users.
* Onboarding new teams and individuals.
* Maintaining an observability knowledge base.
* Promoting collaboration and sharing among teams.

Having a team like this can be instrumental in helping you achieve high quality observabilty for your entire organization.

## What's in this series?

<DocTiles>
  <DocTile
    title="Create baseline reports"
    path="/docs/tutorial-optimize-telemetry/create-baseline-report/"
  >
    Learn how to use the correct dashboard to create your ingest baselines
  </DocTile>

  <DocTile
    title="Find anomalies"
    path="/docs/tutorial-optimize-telemetry/detect-anomalies/"
  >
    Learn how to use your baseline report to help you find anomalies with your telemetry
  </DocTile>

  <DocTile
    title="Create an optimization plan"
    path="/docs/tutorial-optimize-telemetry/develop-optimize-plan/"
  >
    Learn how to develop an optimization plan to help reduce your ingest costs
  </DocTile>

  <DocTile
    title="Optimize your ingest data"
    path="/docs/tutorial-optimize-telemetry/data-optimize-techniques/"
  >
    Learn how to use various techniques to optimize your overall ingest
  </DocTile>
</DocTiles>
