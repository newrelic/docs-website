---
title: Kubernetes events
tags:
  - Integrations
  - Kubernetes integration
  - Kubernetes events
metaDescription: The Kubernetes events integration for infrastructure monitoring watches for events happening in Kubernetes clusters and sends them to New Relic.
redirects:
  - /docs/integrations/kubernetes-integration/kubernetes-events/install-kubernetes-events-integration
  - /docs/new-relic-kubernetes-events-integration
  - /docs/integrations/kubernetes-integration/kubernetes-events/new-relic-kubernetes-events-integration
  - /docs/kubernetes-pixie/kubernetes-integration/kubernetes-events/install-kubernetes-events-integration
freshnessValidatedDate: never
---


The New Relic Kubernetes events watches for events happening in your Kubernetes clusters and sends those events to New Relic. To visualize your event data, use the [Kubernetes cluster explorer](/docs/integrations/kubernetes-integration/cluster-explorer/kubernetes-cluster-explorer), or use the infrastructure [events UI](/docs/infrastructure/new-relic-infrastructure/infrastructure-ui-pages/infrastructure-events-page-live-feed-every-config-change).


## Find your Kubernetes events [#view-k8s-events]

Once you've successfully installed the Kubernetes integration, you can view and query your events in New Relic. 

To view your Kubernetes events:

1. Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Kubernetes**</DNT>. 

2. Select your cluster.

3. Click <DNT>**Kubernetes Events**</DNT> in the left navigation pane.

<img
    title="View your Kubernetes events"
    alt="View your Kubernetes events"
    src="/images/kubernetes_screenshot-crop_view-events.webp"
/>


### Search events in New Relic [#data-infrastructure]

To search events in our infrastructure UI:

1. Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Events**</DNT>.

2. In <DNT>**Categories**</DNT>, select <DNT>**kubernetes**</DNT>.

3. Use the <DNT>**Search events**</DNT> field to look for specific events. To focus on a specific set of events, select or change the filter set. 

<img
    title="Search events in New Relic"
    alt="Search events in New Relic"
    src="/images/kubernetes_screenshot-crop_view-events-categories.webp"
/>

### View events in the Kubernetes cluster explorer [#data-cluster]

To view events in the Kubernetes cluster explorer:

1. Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Kubernetes**</DNT> and select your cluster.

2. Select a pod and click <DNT>**See pod details**</DNT>.

<img
    title="View events in the Kubernetes cluster explorer"
    alt="View events in the Kubernetes cluster explorer"
    src="/images/kubernetes_screenshot-crop_see-pod-details-link.webp"
/>

## Add events to your dashboard [#add-events]

To add events to your [dashboard](/docs/dashboards/new-relic-one-dashboards/get-started/introduction-new-relic-one-dashboards):

1. Add a chart to a [new or existing dashboard](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/) or create a chart using the New Relic [query builder](/docs/chart-builder/use-chart-builder/get-started/introduction-chart-builder).

2. When creating or updating your chart, select the chart type <DNT>**table**</DNT> and use the following event query, replacing `YOUR_CLUSTER_NAME` with the name of your cluster:

    ```sql
    FROM InfrastructureEvent
    SELECT event.involvedObject.kind, event.involvedObject.name, event.reason,event.message 
    WHERE clusterName = 'YOUR_CLUSTER_NAME' limit 100
    ```

## Query events [#data-insights]

Here are a few examples to [query your data](/docs/using-new-relic/data/understand-data/query-new-relic-data):

### Get attributes names [#attributes-names]

To see all the attributes names, use this query:

```sql
FROM InfrastructureEvent
SELECT keyset()
WHERE category = 'kubernetes'
```

### Get latest event details [#event-details]

To see details about the latest events in a cluster, use the following query, replacing `YOUR_CLUSTER_NAME` with the name of your cluster:

```sql
FROM InfrastructureEvent
SELECT event.involvedObject.kind, event.involvedObject.name, event.type, event.message, event.reason
WHERE category = 'kubernetes' AND clusterName = 'YOUR_CLUSTER_NAME'
```

The events collected by New Relic will have the exact same attributes as given by Kubernetes. For a reference of these attributes, see the [Kubernetes event v1 core documentation](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#event-v1-core).


## Optional: Collect metrics of the event collector [#events-metrics]

To collect metric data for the event collector itself, you need to [Send Prometheus metric data to New Relic](/docs/infrastructure/prometheus-integrations/get-started/send-prometheus-metric-data-new-relic/). 

To install and configure the Prometheus agent on Kubernetes clusters:

1. Install the New Relic [Prometheus agent integration](/docs/infrastructure/prometheus-integrations/install-configure-prometheus-agent/install-prometheus-agent/).

2. Label the deployment of your Kubernetes events integration with your configured [scrape label](/docs/infrastructure/prometheus-integrations/install-configure-prometheus-agent/setup-prometheus-agent) (default is `prometheus.io/scrape=true`).

## Optional: Define custom attributes [#custom-attributes]

To add custom attributes to the events sent by the integration, these need to be specified in your
[values.yaml](https://github.com/newrelic/nri-kube-events/blob/main/charts/nri-kube-events/values.yaml) file under the `customAttributes` map.

For example, to add the attribute `environment` with value `dev` to all the events, add the following to your `values.yaml`:

```yml
nri-kube-events:
  customAttributes:
    environment: dev
```

You can add other custom attributes globally to all other kubernetes integrations by setting it globally:

```yml
global:
    customAttributes:
        environment: dev
```
