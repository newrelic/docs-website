---
title: Create Grafana dashboards with Prometheus data stored in New Relic
summary: You can create Grafana dashboards with Prometheus data stored in New Relic!
releaseDate: '2020-08-10'
learnMoreLink: 'https://docs.newrelic.com/docs/integrations/grafana-integrations/get-started/grafana-support-prometheus-promql'
getStartedLink: 'https://blog.newrelic.com/product-news/grafana-dashboards-prometheus-telemetry-data-platform/'
---

We’ve teamed up with [Grafana Labs](https://grafana.com/) so you can use our [Telemetry Data Platform](https://newrelic.com/platform/telemetry-data-platform) as a data source for Prometheus metrics and see them in your existing dashboards, seamlessly tapping into the reliability, scale, and security provided by New Relic.

Follow the steps below or [use this more detailed walkthrough](https://blog.newrelic.com/product-news/grafana-dashboards-prometheus-telemetry-data-platform/) to send Prometheus data to New Relic, so that Grafana can populate your existing Prometheus-specific dashboards with that data.

This process requires Prometheus version 2.15.0 or higher and Grafana version 6.7.0 or higher.

You’ll also need to [sign up for New Relic](https://newrelic.com/signup/).

![A screenshot of a Grafana dashboard with Prometheus data](./images/prometheus_grafana_dashboard.png "A screenshot of a Grafana dashboard with Prometheus data")

Here's an example of how these Grafana dashboards with Prometheus data look in our new dark mode.

### Step 1: Get data flowing into New Relic with the Prometheus remote write integration

Go to [Instrument Everything – US](http://one.newrelic.com/launcher/nr1-core.settings?pane=eyJuZXJkbGV0SWQiOiJ0dWNzb24ucGxnLWluc3RydW1lbnQtZXZlcnl0aGluZyJ9) or [Instrument Everything – EU](http://one.eu.newrelic.com/launcher/nr1-core.settings?pane=eyJuZXJkbGV0SWQiOiJ0dWNzb24ucGxnLWluc3RydW1lbnQtZXZlcnl0aGluZyJ9), then click the **Prometheus** tile.

You can also go to the [Prometheus remote write setup page](https://one.newrelic.com/launcher/nr1-core.settings?pane=eyJuZXJkbGV0SWQiOiJwcm9tZXRoZXVzLXJlbW90ZS13cml0ZS1pbnRlZ3JhdGlvbi1uZXJkbGV0cy5zZXR1cC1wcm9tZXRoZXVzIn0=) to get your `remote_write` URL.

For more information on how to set up the Prometheus remote write integration, check out our [docs](/docs/integrations/prometheus-integrations/install-configure-remote-write/set-your-prometheus-remote-write-integration).

### Step 2: Configure your Grafana dashboards to use Prometheus data stored in New Relic

For more information on how to configure New Relic as a Prometheus data source for Grafana, check out our [docs](/docs/integrations/grafana-integrations/set-configure/configure-new-relic-prometheus-data-source-grafana).
