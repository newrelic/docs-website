---
title: 'Forward logs from Kong Gateway to New Relic'
summary: 'Gain valuable insights into API gateway performance, health, security, and usage'
releaseDate: '2024-10-26'
learnMoreLink: 'https://docs.newrelic.com/docs/logs/forward-logs/kong-gateway/'
getStartedLink: 'https://docs.newrelic.com/docs/logs/ui-data/use-logs-ui/'
---

Today’s IT organizations using Kong Gateway often struggle to gain comprehensive visibility into their API performance, health, and security which can lead to unexpected issues, downtime, and security vulnerabilities.

New Relic's integration with Kong Gateway, using the File Log plugin, provides a robust solution for:

- **Centralized logging**: Kong Gateway logs are instantly contextualized with other application and telemetry data for a unified view.
- **Enhanced visibility**: Gain deeper insights into API gateway performance, health, and security.
- **Proactive issue detection**: Identify and address potential problems before they impact users.
- **Improved security**: Monitor for security threats and anomalies.
- **Optimized performance**: Identify and resolve performance bottlenecks before they impact uyser experience.

## Forward Kong Gateway logs

The File Log plugin for Kong Gateway enables the forwarding of logs to New Relic by directing them to standard output (`/dev/stdout`). This setup allows New Relic’s Kubernetes logging plugin integration to collect and forward the logs.

## Configuration setup

Follow these steps:

**Step 1: Install the New Relic Kubernetes logging integration**

  Before configuring the File Log plugin, ensure you have the New Relic Kubernetes logging integration installed. Follow the [instructions](https://docs.newrelic.com/docs/logs/forward-logs/kubernetes-plugin-log-forwarding) to set this up.

**Step 2: Install and configure Kong File Log plugin**

Once the New Relic Logging Integration is installed, configure the File Log to output logs to `/dev/stdout` . See an example of the manifest configuration file in the [Configure the File Log plugin](https://docs.newrelic.com/docs/logs/forward-logs/kong-gateway/#install-config-filelog) section.

**Step 3: Apply the Log File Log plugin configuration**

   * Deploy the File Log plugin configuration to your Kubernetes cluster using the following command:

        ```bash
        kubectl apply -f file-log-plugin.yaml -n kong
        ```

   * Replace `file-log-plugin.yaml` with the actual filename of your manifest.

**Step 4: Verify the configuration**

  After applying the configuration, verify that logs are being forwarded to New Relic by checking the [New Relic Logs UI](https://one.newrelic.com/launcher/logger.log-launcher) for entries from Kong Gateway.

  By forwarding Kong Gateway logs to New Relic, organizations can effectively monitor and manage their API gateways, ensuring optimal performance and security.

## To get started

1. [Read our tutorial](https://docs.newrelic.com/docs/tutorial-manage-large-log-volume/get-started-managing-large-logs/)
2. [Review our docs page](https://docs.newrelic.com/docs/logs/forward-logs/kong-gateway/)
3. [Explore our Logs UI overview](https://docs.newrelic.com/docs/logs/ui-data/use-logs-ui/)

