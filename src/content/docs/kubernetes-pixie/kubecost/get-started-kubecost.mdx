---
title: Kubernetes cost observability with Kubecost
tags:
  - Integrations
  - Kubernetes integration
  - Kubecost
  - Cost observability
  - Opencost
metaDescription: "Understand the costs associated with your Kubernetes resources"
freshnessValidatedDate: 2023-08-12
---

<Callout title="preview">
  We're still working on this feature, but we'd love for you to try it out!

  This feature is currently provided as part of a preview program pursuant to our [pre-release policies](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

With New Relic and [Kubecost](https://kubecost.github.io/cost-analyzer/), you can understand the costs associated with each of your Kubernetes resources.

Actionable insights:

* What are the primary drivers of cost in my cluster (CPU, storage, egress, etc)?
* Which node(s) is driving recent cost increases in my cluster?
* What are the cost breakdowns by namespace for my application workloads?
* How can I tailor cost estimation based on the pricing/discounts provided to me by my cloud providers?

## Get started

This guide assumes that you will use the Kubecost bundled Prometheus server. It is possible to use your own, though it is outside the scope of this guide.

You will need to create a `Remote Write` endpoint in New Relic, which you can do by clicking the green "Add Prometheus Data" button on this page. Note that the bearer token will be used.
[Prometheus Remote Write](/docs/infrastructure/prometheus-integrations/install-configure-remote-write/set-your-prometheus-remote-write-integration/)

### Set up Prometheus Remote Write

1. Select an account to receive the Prometheus data.
2. Name the datasource, for example, `kubecost`.
3. Generate the URL and bearer token to use in the next set of steps.

### Install the Kubecost agent to your cluster

Next, install the Kubecost agent via Helm.

1. Download the template YAML file for the Kubecost agent installation. Save it to `kubecost-values.yaml`.

   ```yaml
   prometheus:
     serverFiles:
       prometheus.yml:
         remote_write:
         - url: https://metric-api.newrelic.com/prometheus/v1/write?prometheus_server=YOUR_CLUSTER_NAME
           bearer_token: YOUR_BEARER_TOKEN
     server:
       global:
         external_labels:
           cluster_id: YOUR_CLUSTER_NAME
   kubecostProductConfigs:
     clusterName: YOUR_CLUSTER_NAME
   ```

2. Open `kubecost-values.yaml` in an editor of your choice.

3. Copy and paste the remote_write endpoint from the previous step, replacing lines 5 and 6.

4. Replace both `YOUR_CLUSTER_NAME` entries with the name of your cluster.

5. Run the Helm command below to add the Kubecost agent to your cluster and start sending data to New Relic:

   ```shell
   helm upgrade --install kubecost \
   --repo https://kubecost.github.io/cost-analyzer/ cost-analyzer \
   --namespace kubecost --create-namespace \
   --values kubecost-values.yaml
   ```

6. Wait a few minutes. In the previous tab where you set up Remote Write, click the <DNT>**See your data**</DNT> button to see whether data has been received.

7. Query your data:

   ```sql
   SELECT sum(`Total Cost($)`) AS 'Total Monthly Cost'
   FROM (FROM Metric SELECT (SELECT sum(`total_node_cost`)
   FROM (FROM Metric SELECT (average(kube_node_status_capacity_cpu_cores) * average(node_cpu_hourly_cost)
   * 730 + average(node_gpu_hourly_cost)
   * 730 + average(kube_node_status_capacity_memory_bytes) / 1024 / 1024 / 1024
   * average(node_ram_hourly_cost) * 730) AS 'total_node_cost' FACET node))
   + (SELECT (sum(acflb) / 1024 / 1024 / 1024 * 0.04) AS 'Container Cost($)'
   FROM (SELECT (average(container_fs_limit_bytes) * cardinality(container_fs_limit_bytes)) AS 'acflb'
   FROM Metric WHERE (NOT ((device = 'tmpfs')) AND (id = '/'))))
   + (SELECT sum(aphc * 730 * akpcb / 1024 / 1024 / 1024) AS 'Total Persistent Volume Cost($)'
   FROM (FROM Metric SELECT average(pv_hourly_cost)
   AS 'aphc', average(kube_persistentvolume_capacity_bytes) AS 'akpcb' FACET persistentvolume, instance))
   AS 'Total Cost($)')
   ```

You can follow the Kubecost docs for [exposing Kubecost UI with an ingress](https://docs.kubecost.com/install-and-configure/install/ingress-examples).
