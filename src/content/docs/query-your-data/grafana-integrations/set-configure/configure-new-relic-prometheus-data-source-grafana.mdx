---
title: Configure New Relic as a Prometheus data source for Grafana
tags:
  - Integrations
  - Grafana integrations
  - Set up and configure
metaDescription: How to configure New Relic as a Prometheus data source for Grafana
redirects:
  - /docs/integrations/grafana-integrations/set-configure/configure-new-relic-prometheus-data-source-grafana
  - /docs/configure-prometheus-data-source-grafana
  - /docs/more-integrations/grafana-integrations/set-configure/configure-new-relic-prometheus-data-source-grafana
freshnessValidatedDate: never
---

You can configure a [Prometheus data source](https://grafana.com/docs/grafana/latest/features/datasources/prometheus/) in [Grafana](https://grafana.com/login) to query data stored in the New Relic Database (NRDB) using our [PromQL-style query language](/docs/integrations/prometheus-integrations/view-query-data/supported-promql-features).

## Add a Prometheus data source [#create-update]

Follow these steps to add New Relic as a Prometheus data source for Grafana. These instructions detail how to complete the process when working with Grafana versions 6.7 and higher.

<Callout variant="important">
  You must [complete the Prometheus remote-write integration](/docs/integrations/prometheus-integrations/install-configure/set-your-prometheus-remote-write-integration) process prior to beginning the configuration process.
</Callout>

1. In New Relic, [create a new Insights query key](/docs/apis/intro-apis/new-relic-api-keys/#insights-query-key).

   <Callout variant="important">
     Note: In Grafana, you'll need put this in a custom <DNT>**X-Query-Key**</DNT> HTTP header (see step 7 below), but it is the same entity as the New Relic Query key.
   </Callout>
2. From the [Grafana](https://grafana.com/login) <DNT>**Home**</DNT> screen, go to <DNT>**Configuration > Data Sources**</DNT> and click <DNT>**Add data source**</DNT>.
3. From the <DNT>**Add data source**</DNT> screen under <DNT>**Time series databases**</DNT> options, select <DNT>**Prometheus**</DNT>.
4. Enter the <DNT>**Name**</DNT> you want to use for your new Prometheus data source.
5. Set the <DNT>**Default**</DNT> toggle to the on or off position, depending on whether you want this to be your default data source for Prometheus queries.
   * Off: this is not your default data source
   * On: this is your default data source
6. Enter the correct <DNT>**URL**</DNT>:
   * US: [prometheus-api.newrelic.com](https://prometheus-api.newrelic.com)
   * EU: [prometheus-api.eu.newrelic.com](https://prometheus-api.eu.newrelic.com)
7. Under <DNT>**Custom Headers**</DNT>, select <DNT>**Add Header**</DNT>. Set the <DNT>**Header**</DNT> name to <DNT>**X-Query-Key.**</DNT> For the <DNT>**Value**</DNT>, enter to the Query key you created in step 1.
8. Click <DNT>**Save & Test**</DNT>.

<Callout variant="tip">
  If your graphs appear as groupings of dots and not as connected lines, you can change the graph style to display lines instead. To do this, go to Grafana's <DNT>**[Graph panel](https://grafana.com/docs/grafana/latest/panels/visualizations/graph-panel/)**</DNT> and select <DNT>**Stacking and null value > connected**</DNT>.
</Callout>

<CollapserGroup>
  <Collapser
    id=""
    title="Sample configuration image"
  >
    <img
      title="Configure New Relic as a Prometheus data source for Grafana"
      alt="Screen capture of the add data source workflow in Grafana"
      src="/images/more-integrations_screenshot-crop_grafana-data-source-config.webp"
    />

    <figcaption>
      Grafana Data Source Config.png, by [dbarnesbrown.newrelic.com](/users/dbarnesbrownnewreliccom)
    </figcaption>
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## Versioning considerations

New Relic strongly recommends using versions 6.7.x and higher to configure New Relic as a Prometheus data source. If you do chose to complete the configuration while running an earlier version, you will need to do one of the following to successfully configure your data source:

* Configure the new data source to use basic authentication and then enter the Query-key as the password in the basic authentication workflow.
* Configure the new data source URL to include the Query-key: `` https://prometheus-api.newrelic.com/auth/`<query-key>` ``

## Customize Prometheus API behavior [#customize-API]

Headers are particularly important if you have connected multiple Prometheus servers to New Relic using the [remote write integration](/docs/integrations/prometheus-integrations/install-configure/set-your-prometheus-remote-write-integration). Here are some details about customization.

<CollapserGroup>
  <Collapser
    id=""
    title="X-Query-Key (Query key)"
  >
    The [Query key](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#x-query-key) parameter is required to authenticate with New Relic and identify the account containing your metrics. Grafana calls this an <DNT>**X-Query key**</DNT>, while it appears as a <DNT>**Query key**</DNT> in the New Relic UI.

    Details:

    * Required
    * An API query key used for authentication
    * If you are using the Prometheus remote write integration, the X-Query-Key should correspond to the same account as the X-License-Key used to integrate for remote write
  </Collapser>

  <Collapser
    id=""
    title="X-Prometheus-Only"
  >
    <Callout variant="important">
      Grafana's auto-complete support doesn't handle metrics that fail to strictly conform to Prometheus naming conventions. New Relic recommends you exclude any metrics that do not conform from this parameter.
    </Callout>

    Details:

    * Optional
    * Limits metrics exposed by the API to those originating from Prometheus
    * Default = true if not specified
  </Collapser>

  <Collapser
    id=""
    title="X-Prometheus-Server"
  >
    This parameter is useful if you are collecting metrics from multiple Prometheus servers. For example, if you are using Grafana, you might want to create a data source for each Prometheus server connected to New Relic and then another data source that can be used to query across all Prometheus servers.

    Details:

    * Optional
    * Limits metrics exposed by the API to those collected from the specified Prometheus server
    * This value should match the `prometheus_server` URL parameter in the remote write URL used to connect to your prometheus server to New Relic
    * Defaults to return metrics collected from all servers
  </Collapser>
</CollapserGroup>

## Delete a Prometheus data source [#delete]

To delete a data source in Grafana:

1. Go to <DNT>**Configuration > Data Sources**</DNT>.
2. Click on the data source you want to delete.
3. Click the <DNT>**Delete**</DNT> button at the bottom of the page.
