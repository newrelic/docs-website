---
title: Fluent Bit plugin for log forwarding
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
  - Fluent Bit
translate:
  - kr
metaDescription: 'Install and configure the New Relic logging plugin for Fluent Bit, so you can use enhanced log management capabilities.'
redirects:
  - /docs/enable-new-relic-logs-fluent-bit
  - /docs/logs/new-relic-logs/enable-logs/enable-new-relic-logs-fluent-bit
  - /docs/logs/enable-logs/enable-logs/fluent-bit-plugin-logs
  - /docs/logs/enable-log-monitoring-new-relic/enable-log-monitoring-new-relic/fluent-bit-plugin-log-forwarding
  - /docs/logs/enable-log-management-new-relic/enable-log-monitoring-new-relic/fluent-bit-plugin-log-forwarding
freshnessValidatedDate: 2024-10-30
---

If your log data is already being monitored by [Fluent Bit](https://fluentbit.io/), you can use our Fluent Bit output plugin to forward and enrich your log data in New Relic.

Forwarding your Fluent Bit logs to New Relic will give you enhanced <InlinePopover type="logs"/> capabilities to collect, process, explore, query, and alert on your log data. You have these options to install the Fluent Bit:

  * [Kubernetes installation](#k8s-installation)
  * [Using a Docker image](#helm-docker-image)
  * [On-host installation](#on-host-installation)

## Kubernetes installation [#k8s-installation]

New Relic has a [Fluent Bit output plugin](https://github.com/newrelic/newrelic-fluent-bit-output) to forward your logs to New Relic log management. You can install this plugin as a standalone Docker image in a Kubernetes cluster, where it functions as a DaemonSet, also known as the Kubernetes plugin.

You can install it in your cluster using our [Helm chart](https://github.com/newrelic/helm-charts/tree/master) in two ways:

* Through our guided install
* Manual installation 

### Using our guided install [#helm-guided-install]

Although the [`newrelic-logging`](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging) chart works as a standalone, we recommend installing it as part of the [`nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) chart.

The best way to install this is through our [guided installation](/install/kubernetes/) process. This guided install generates the Helm commands required to install it.

### Manual installation 

You can install it manually using Helm, although this option is not recommended. Run this command to install the repo:

```bash
    helm repo add newrelic https://helm-charts.newrelic.com
```

To update the repo, run this command:

```bash
    helm repo update newrelic
```

<Callout variant="tip">
  See our [supported configuration parameters](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging#supported-configuration-parameters) in our `newrelic-logging` Helm chart.
</Callout>

See [Uninstall Kubernetes integration](/docs/kubernetes-pixie/kubernetes-integration/installation/uninstall-kubernetes/) if you want to uninstall it.

## Using a Docker image [#helm-docker-image]

If you've your own custom kubernetes integration, we recommend using our [Docker image](https://hub.docker.com/r/newrelic/newrelic-fluentbit-output) that comes with the [`newrelic-fluent-bit-output`](https://github.com/newrelic/newrelic-fluent-bit-output) plugin. Or you can use the Docker image as a base image and layer your own custom configuration files.

## On-host installation [#on-host-installation]

For an on-host installation of the Fluent Bit plugin, follow these steps:

1. Open the New Relic's [Fluent Bit plugin repository](https://github.com/newrelic/newrelic-fluent-bit-output) on GitHub.

2. From the repository page, [clone or download the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

3. Run this command to build your plugin:

  ```sh
  cd newrelic-fluent-bit-output && make all
  ```

4. Store `out_newrelic.so` or `out_newrelic_winXX.dll` at a location where `fluent-bit` daemon can access them.

<Callout variant="tip">
  If you'd rather not compile the plugin yourself, download pre-compiled versions from our [GitHub repository's releases page](https://github.com/newrelic/newrelic-fluent-bit-output/releases).
</Callout>

### Upgrade the Fluent Bit plugin [#upgrade-plugin]

Before you upgrade your Fluent Bit plugin, run the following NRQL query to find the current versions of the output plugin you're using in your system:

```sql
FROM K8sContainerSample 
SELECT latest(containerImage) 
WHERE podName like '%newrelic-logging%' 
FACET clusterName
```

<Callout variant="caution">
  The [security vulnerability (CVE-2024-4323)](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-4323) affects Fluent Bit output plugin versions 1.16.0-1.19.2. If you're using one of these versions, update to version 2.0.0 or higher. For more information on this, see our security bulletin [NR24-01 - Fluent Bit](/docs/security/new-relic-security/security-bulletins/security-bulletin-nr24-01/).
</Callout>

To update, follow the installation instructions or grab the latest pre-compiled version from our [GitHub repository](https://github.com/newrelic/newrelic-fluent-bit-output/releases).

## Configure the Fluent Bit plugin [#configure-plugin]

Fluent Bit needs to know the location of the New Relic plugin and the New Relic <InlinePopover type="licenseKey"/> to output data to New Relic.

<Callout variant="important">
  Pay attention to white space when editing your config files. Be sure to use four spaces to indent and one space between keys and values.
</Callout>

To configure your Fluent Bit plugin, follow these steps:

1. Locate or create the `plugins.conf` file in your plugins directory.

2. In the `plugins.conf` file, add a reference to `out_newrelic.so`, adjacent to your `fluent-bit.conf` file:

  ```ini
  [PLUGINS]
      Path /PATH/TO/newrelic-fluent-bit-output/out_newrelic.so
  ```

3. In the `fluent-bit.conf` file, add the following line under the `service` block:

  ```ini
  [SERVICE]
      # This is the main configuration block for fluent bit.
      # Ensure the follow line exists somewhere in the SERVICE block
      Plugins_File plugins.conf
  ```

4. At the bottom of the `fluent-bit.conf` file, add the following to set up the input, filter, and output sections. Replace the placeholder text with your <InlinePopover type="licenseKey"/>:

   ```ini
   [INPUT]
       Name tail
       Tag  my.tag
       Path /PATH/TO/YOUR/LOG/FILE
       
   # If you have multiple sources, just add another [INPUT] section like this:
   [INPUT] 
       Name tail 
       Tag  my.other.tag 
       Path /PATH/TO/SOME/OTHER/LOG/FILE 

   # Having multiple [FILTER] blocks allows you to control the flow of changes as they read top down. 
   [FILTER]
       Name modify
       # Here we only match on one tag, my.tag, defined in the [INPUT] section earlier
       Match  my.tag
       # Below, we're renaming the host.cpu attribute to CPU
       Rename host.cpu CPU

   [FILTER]
       Name   record_modifier
       # Match on all tags, *, so all logs get decorated per the Record clauses below. Record adds attributes + their values to each record.
       Match  *
       # Adding a logtype attribute ensures your logs will be automatically parsed by our built-in parsing rules
       Record logtype nginx
       # Add the server's hostname to all logs generated
       Record hostname ${HOSTNAME}

   [OUTPUT]
       Name       newrelic
       Match      *
       licenseKey YOUR_LICENSE_KEY
   ```

5. Restart your Fluent Bit instance. Run this command:

   ```sh
   fluent-bit -c /PATH/TO/fluent-bit.conf
   ```

## Test the Fluent Bit plugin [#test-plugin]

To test if your Fluent Bit plugin is receiving input from a log file:

1. Run this command to append a test log message to your log file:

   ```sh
   echo "test message" >> /PATH/TO/YOUR/LOG/FILE
   ```

2. Search for `test message` in our [logs UI](https://one.newrelic.com/launcher/logger.log-launcher) .

For more options, see [the `modify` filter on the Fluent Bit documentation](https://docs.fluentbit.io/manual/pipeline/filters/modify). See also our documentation to [forward your logs using the infrastructure agent](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/#automatically-inserted-attributes).

## Optional: Configure plugin attributes [#instrument-plugin]

Once you've installed and [configured](#configure-plugin) the Fluent Bit plugin, you can use the following attributes to configure how the plugin sends data to New Relic:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Key
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `licenseKey`
      </td>

      <td>
        The <InlinePopover type="licenseKey"/>. Use either `licenseKey` (<DNT>**recommended**</DNT>) or `apiKey`, not both. Default: `none`
      </td>
    </tr>

    <tr>
      <td>
        `maxBufferSize`
      </td>

      <td>
        The maximum size the payloads sent, in bytes. Default: `256000`
      </td>
    </tr>

    <tr>
      <td>
        `maxRecords`
      </td>

      <td>
        The maximum number of records to send at a time. Default: `1024`
      </td>
    </tr>

    <tr>
      <td>
        `apiKey`
      </td>

      <td>
        <DNT>**Deprecated.**</DNT> Takes a New Relic [insights insert key](/docs/insights/insights-data-sources/custom-data/send-custom-events-event-api#register), but using the `licenseKey` attribute is preferred. Use either `licenseKey` or `apiKey`, not both.
      </td>
    </tr>

    <tr>
      <td>
        `endpoint`
      </td>

      <td>
        Defaults to `https://log-api.newrelic.com/log/v1`. If you're using an EU key, you need set it to `https://log-api.eu.newrelic.com/log/v1`
      </td>
    </tr>
  </tbody>
</table>

## View log data [#find-data]

If you configured everything correctly and New Relic collects your data, you should see log data in both of these places:

* Our [logs UI](https://one.newrelic.com/launcher/logger.log-launcher)

* Our tools for running [NRQL queries](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-query-data/). For example, you can run a query like this:

```sql
SELECT * 
FROM Log
```

If you don't get any data after you enable our log management capabilities, follow our standard log [troubleshooting procedures](/docs/logs/troubleshooting/no-log-data-appears-ui/).

## What's next? [#what-next]

Explore logging data across your platform with our [logs UI](/docs/logs/ui-data/use-logs-ui/).

* Get deeper visibility into both your application and your platform performance data by forwarding your logs with our [logs in context](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) capabilities.

* Set up [alerts](/docs/alerts/create-alert/create-alert-condition/alert-conditions/).

* [Query your data](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) and [create dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Disable log forwarding [#disable]

To disable log forwarding capabilities, follow standard procedures in [Fluent Bit documentation](https://fluentbit.io/). You don't need to do anything else in New Relic.