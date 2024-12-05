---
title: Use dimensional metrics to query more data
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'Learn how dimensional metrics work for infrastructure data, and how to query them.'
redirects:
  - /docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/query-infrastructure-dimensional-metrics-nrql
freshnessValidatedDate: 2024-03-19
---

<Callout title="preview">
  We're still working on this feature, but we'd love for you to try it out!

  This feature is currently provided as part of a preview program pursuant to our [pre-release policies](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

[Dimensional metrics](/docs/using-new-relic/data/understand-data/new-relic-data-types#dimensional-metrics) are an industry standard for storing and querying metric data. New Relic stores all infrastructure metrics [as event data](/docs/data-apis/understand-data/new-relic-data-types/#metric-event-attributes), but you can also query them as dimensional metrics.

At New Relic, we report [metrics](/docs/using-new-relic/data/understand-data/new-relic-data-types#metrics) in several ways, including [dimensional metrics](/docs/using-new-relic/data/understand-data/new-relic-data-types#dimensional-metrics), which our metric API, Telemetry SDK, some open-source integrations, and our infrastructure services can all use.

This type of metric enables you to:

* Enjoy an improved query experience for infrastructure data.
* Discover all your metrics in one place.
* Use more metric sources, such as [Prometheus](/docs/integrations/prometheus-integrations/get-started/new-relic-prometheus-openmetrics-integration-kubernetes).

For example, you can use the following queries to get the maximum duration of your Lambda functions:

<table>
  <tbody>
    <tr>
      <td style={{ width: "150px" }}>
        <DNT>
          **Query with samples**
        </DNT>
      </td>

      <td style={{ width: "650px" }}>
        ```sql
        FROM ServerlessSample
        SELECT max(provider.duration.Maximum)
        WHERE provider = 'LambdaFunction'
        ```
      </td>
    </tr>

    <tr>
      <td style={{ width: "150px" }}>
        <DNT>
          **Query with metrics**
        </DNT>
      </td>

      <td style={{ width: "650px" }}>
        ```sql
        FROM Metric
        SELECT max(aws.lambda.function.duration)
        ```
      </td>
    </tr>
  </tbody>
</table>

## Get started [#compatibility-reqs]

You don't need any agent or integration updates to use these metrics. We support [NRQL alerting](/docs/alerts/new-relic-alerts/defining-conditions/create-alert-conditions-nrql-queries) based on dimensional metrics, except for data coming from cloud integrations (such as metrics from [AWS polling integrations](/docs/infrastructure/amazon-integrations/aws-integrations-list), [GCP](/docs/integrations/google-cloud-platform-integrations), and [Azure](/docs/integrations/microsoft-azure-integrations/azure-integrations-list)). New Relic ingests AWS CloudWatch Metric Streams metrics as dimensional metrics, and we recommend you use NRQL <InlinePopover type="alerts"/> in these cases.

## Where and how to query dimensional metrics [#where]

New Relic supports all current [NRQL query features](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions). You can use `WHERE`, `FACET`, and time selection functions such as `SINCE`, `UNTIL`, and `COMPARE WITH` for querying.

## Naming conventions for metrics and attributes [#naming-conventions]

All metric names and attributes for dimensional metrics follow the same naming convention to make them easy to find and use. Metric and attribute names are namespaced with dots: for example, the `host.` prefix is used for host metrics, the `k8s.` prefix is used for Kubernetes metrics, and `aws.` is used for AWS metrics.

The graphic below shows how a `ProcessSample` that contains three metrics (`cpuPercent`, `ioTotalReadBytes`, and `ioTotalWriteBytes`) is split into three separate metrics. Note the updated naming of the metrics and the attributes.

<img
  title="naming-convention.png"
  alt="naming-convention.png"
  src="/images/queries-nrql_diagram_dimensional-metrics-naming-convention.webp"
/>

<figcaption>
  Dimensional metrics naming convention
</figcaption>

## Differences in querying dimensional metrics and events [#known-limitations]

Dimensional metrics are a fundamentally different type of data compared to event data. Below, you'll find some notable differences when querying dimensional metrics:

* Metric queries with `*` do not return [infrastructure sample data](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-monitoring-data/#infrastructure-events). For example:
  ```sql
  SELECT * FROM Metric
  ```
* Metric queries with `metricName LIKE` do not return infrastructure sample data. For example:
  ```sql
  SELECT uniques(metricName) FROM Metric where metricName like 'k8%'
  ```
* In order to select attributes starting with `tags.` a metric name has to be provided. For example, this does not work without the `WHERE` clause:
  ```sql
  SELECT uniques(tags.environment) FROM Metric WHERE metricName='aws.lambda.function.duration'
  ```
* Results may not be complete if the selection criteria matches too many samples. For example, this query maps to all infrastructure samples, and may return incomplete results:
  ```sql
  SELECT uniqueCount(entity.guid) FROM Metric
  ```
* We don't support the newly introduced metric wildcarding feature, for example:
  ```sql
  SELECT average(host.swap%Bytes) FROM Metric
  ```
* [Functions](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#functions) used on multiple metrics may fail or return incorrect results, for example:
  ```sql
  FROM Metric SELECT latest(metricNameA + metricNameB)
  ```
* When you include `RAW` in a query, the request transforms internally and prints equivalent, aggregated event data. It won't print raw data. Refer to the example query to see this behavior:

  ```sql
  SELECT max(host.cpuPercent) FROM Metric TIMESERIES 1 MINUTE SINCE 60 MINUTES AGO RAW
  ```
* We don't support using `keyset` with `TIMESERIES`, and doing so will return an error. See the example below:
  ```sql
  FROM Metric SELECT keyset() WHERE instrumentation.provider = 'infrastructure' TIMESERIES
  ```

For an overview of data type differences, see [New Relic data types](/docs/data-apis/understand-data/new-relic-data-types).

## Dimensional query examples [#query-examples]

Here are some examples of NQRL queries with and without dimensional metrics:

<CollapserGroup>
  <Collapser
    id="example-aws-ebs"
    title="AWS EBS query example"
  >
    Get the total write time by EBS Volume:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM BlockDeviceSample
            SELECT sum('provider.volumeTotalWriteTime.Sum')
            WHERE provider = 'EbsVolume'
            FACET entityName
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT sum(aws.ebs.volume.TotalWriteTime)
            FACET entity.name
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-azure-service-bus"
    title="Azure Service bus query example"
  >
    Maximum number of messages in an Azure Service Bus topic by resource group:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM AzureServiceBusTopicSample
            SELECT max(activeMessages.Maximum)
            FACET resourceGroupName
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT max(azure.servicebus.topic.activeMessages)
            FACET azure.resourceGroup
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-azure-functions"
    title="Azure functions query example"
  >
    Number of function executions Azure Functions over the past 6 hours by region over time:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM AzureFunctionsAppSample
            SELECT sum(functionExecutionCount.Total)
            FACET regionName
            TIMESERIES SINCE 6 hours ago
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT sum(azure.functions.app.functionExecutionCount)
            FACET azure.region
            TIMESERIES SINCE 6 hours ago
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-azure-vm"
    title="Azure VMs query example"
  >
    Compare the number of Azure VMs over the past thirty minutes with the same time a week ago:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM AzureVirtualMachineScaleSetSample
            SELECT uniqueCount(vMName)
            FACET name
            SINCE 30 MINUTES AGO COMPARE WITH 1 WEEK AGO
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT uniqueCount(azure.vms.vmName)
            FACET azure.resourceName
            WHERE azure.resourceType='Microsoft.Compute/virtualMachineScaleSets'
            SINCE 30 MINUTES AGO COMPARE WITH 1 WEEK AGO
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-nginx"
    title="NGINX query example"
  >
    The average number of NGINX requests per second over time:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM NginxSample
            SELECT average(net.requestsPerSecond)
            TIMESERIES
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT average(nginx.server.net.requestsPerSecond)
            TIMESERIES
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-mysql"
    title="MySQL query example"
  >
    The maximum number of used MySQL connections:

    <table>
      <tbody>
        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with samples**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM MysqlSample
            SELECT max(net.maxUsedConnections)
            ```
          </td>
        </tr>

        <tr>
          <td style={{ width: "150px" }}>
            <DNT>
              **Query with metrics**
            </DNT>
          </td>

          <td style={{ width: "650px" }}>
            ```sql
            FROM Metric
            SELECT max(mysql.node.net.maxUsedConnections)
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
