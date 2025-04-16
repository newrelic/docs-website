---
title: Kubernetes plugin for log forwarding
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
metaDescription: 'Install and configure New Relic logging for Kubernetes, so you can use enhanced log management capabilities.'
redirects:
  - /docs/enable-new-relic-logs-kubernetes
  - /docs/logs/new-relic-logs/enable-logs/enable-new-relic-logs-kubernetes
  - /docs/logs/enable-logs/enable-logs/kubernetes-plugin-logs
  - /docs/logs/enable-log-monitoring-new-relic/enable-log-monitoring-new-relic/kubernetes-plugin-log-forwarding
  - /docs/integrations/kubernetes-integration/logs/get-kubernetes-log-data
  - /docs/logs/enable-log-management-new-relic/enable-log-monitoring-new-relic/kubernetes-plugin-log-forwarding
freshnessValidatedDate: never
---

New Relic's Kubernetes plugin for log forwarding simplifies sending logs from your cluster to New Relic logs. It uses a standalone Docker image and runs as a DaemonSet, seamlessly collecting logs for centralized analysis and troubleshooting. Forwarding your Kubernetes logs to New Relic will give you enhanced <InlinePopover type="logs" /> capabilities to collect, process, explore, query, and alert on your log data.

## Enable Kubernetes for log management [#enable-process]

To forward your Kubernetes logs to New Relic with our plugin:

1. [Install the New Relic Kubernetes integration](/install/kubernetes). This integration includes the Kubernetes plugin for logs.

2. Optionally, you can further tune your installation in [the guided install](/install/kubernetes) using the numerous configuration options available in the [`newrelic-logging` repository](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging#configuration). However, we recommend the standard setup, as it's valid for most users.

    <img
        title="Guided install from the UI"
        alt="Guided install from the UI"
        src="/images/kubernetes_screenshot-crop_gather-log-data.webp"
    />

    <figcaption>
        Go to <DNT>**[one.newrelic.com](https://one.newrelic.com/) > Integrations & Agents**</DNT> and click the <DNT>**Guided install**</DNT> tile. Then select <DNT>**Kubernetes**</DNT> and <DNT>**Guided**</DNT>.
    </figcaption>

    <Callout variant="important">

    If you're [using a Kubernetes secret](https://github.com/newrelic/helm-charts/blob/master/charts/newrelic-logging/values.yaml#L8-L25) to store the New Relic <InlinePopover type="licenseKey" />, the `newrelic-logging` chart defaults to sending logs to the US API endpoint. If the license key belongs to an EU or FedRAMP account, and a secret is used for key storage, you must update the endpoint setting with the appropriate value from the [API reference docs](/docs/logs/log-api/introduction-log-api/#endpoint). Here's an example of how to set this for EU accounts:

    ```yml
    newrelic-logging:
      enabled: true
      endpoint: https://log-api.eu.newrelic.com/log/v1
    ```
    </Callout>

3. Generate some traffic and wait a few minutes, then [check your account](#find-data) for data.

<InstallFeedback />

## Fluent Bit output plugin [#fluent-bit]

New Relic has a [Fluent Bit](https://fluentbit.io/) [output plugin](https://github.com/newrelic/newrelic-fluent-bit-output) to forward your logs to New Relic log management. This plugin is also provided in a standalone Docker image that can be installed in a Kubernetes cluster in the form of a DaemonSet, also known as the Kubernetes plugin.

See [Fluent Bit plugin for log forwarding](/docs/logs/forward-logs/fluent-bit-plugin-log-forwarding) for more details about it.

### Additional metric details [#addition-metric-details]

Starting from version 1.24.0 of the `newrelic-logging` Helm chart, internal metrics are sent by default using the `prometheus_scrape` input plugin in conjunction with the `prometheus_remote_write` output plugin. The `sendMetrics: true` configuration option is now responsible only for sending the output plugin metrics of `newrelic-fluent-bit-output`:

- **[Fluent Bit internal metrics](https://docs.fluentbit.io/manual/administration/monitoring#for-v2-metrics)**: Emitted by Fluent Bit in Prometheus format and delivered to New Relic's Prometheus export endpoint. They can be faceted by `cluster_name`, `node_name`, and `pod_name`.

  We capture Fluent Bit's internal metrics by using its [`prometheus_scrape` input plugin](https://docs.fluentbit.io/manual/pipeline/inputs/prometheus-scrape-metrics) together with the [`prometheus_remote_write` output plugin](https://docs.fluentbit.io/manual/pipeline/outputs/prometheus-remote-write). All Prometheus `counter` metrics are cumulative counters, but we automatically perform a delta conversion when they are ingested at New Relic to ease querying them using NRQL later. More details can be found [here](/docs/data-apis/understand-data/metric-data/cumulative-metrics/).

- **[Internal plugin metrics from `newrelic-fluent-bit-output`](https://github.com/newrelic/newrelic-fluent-bit-output?tab=readme-ov-file#troubleshooting-metrics)**: These metrics are collected by the output plugin and sent to New Relic's metric API when `sendMetrics: true` is enabled. They include the `cluster_name` dimension, allowing them to be narrowed down to a particular cluster but not to a specific host or pod. These metrics are useful for assessing overall latency when delivering logs to the New Relic Logs API or identifying potential packaging issues.

## Troubleshoot your Kubernetes plugin for log forwarding installation [#troubleshoot-installation]

Sometimes, despite correctly installing the Kubernetes log forwarding plugin (`newrelic-logging` [Helm chart](https://github.com/newrelic/helm-charts/blob/master/charts/newrelic-logging)), you may encounter performance issues affecting the correct delivery of logs. In such cases, examining the log forwarder's internal metrics may help identify the cause of the problem.

The `newrelic-logging` Helm chart provides a configuration setting to enable the collection of such metrics for a given Kubernetes cluster. We also provide a JSON-formatted dashboard template to easily display all these metrics in New Relic.

To configure your Kubernetes cluster to send the log forwarder internal metrics and display them in a dashboard, follow these steps:

1. Install the Helm chart with the following extra configuration setting:

    ```yml
    newrelic-logging:
      fluentBit:
        sendMetrics: true
    ```

    You only need to enable the `newrelic-logging.fluentBit.sendMetrics` setting when troubleshooting a Kubernetes cluster. We recommend enabling it for a single Kubernetes cluster at a time to ease troubleshooting.

2. The `newrelic-logging` Helm chart can be configured to forward internal metrics of the plugin to New Relic. This helps in monitoring and troubleshooting the log forwarding process.

## View log data [#find-data]

Once you've set everything up and collected the data, you should see log data in both of these places:

* Our [logs UI](https://one.newrelic.com/launcher/logger.log-launcher)
* Our tools for running [NRQL queries](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-query-data/). For example, you can execute a query like this:

    ```sql
    SELECT *
    FROM Log
    ```

If you don't see any data after enabling our log management capabilities, follow our [standard log troubleshooting procedures](/docs/logs/troubleshooting/no-log-data-appears-ui/).


## Disable log forwarding [#disable]

To disable log forwarding capabilities, you can uninstall the Kubernetes plugin by following [these steps](/docs/kubernetes-pixie/kubernetes-integration/uninstall-kubernetes/). You do not need to do anything else in New Relic.


## Choose your next step [#next-steps]

<DocTiles>
<DocTile title="Logs UI" path="/docs/logs/ui-data/use-logs-ui/" >Explore logging data across your platform with our logs UI</DocTile>

<DocTile title="Logs in context" path="/docs/logs/logs-context/logs-in-context/" >Get deeper visibility into both your application and your platform performance data by forwarding your logs with our logs in context capabilities</DocTile>

<DocTile title="Alerts" path="/docs/alerts/overview/" >Create alerts to stay informed about issues that matter most</DocTile>

<DocTile title="Create dashboards" path="/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/" >See how to gather and chart the specific data you want to see</DocTile>

</DocTiles>

