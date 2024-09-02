---
title: Reduce data ingested
tags:
    - Integrations
    - Kubernetes integration
    - Understand and use data
metaDescription: 'New Relic''s Kubernetes integration: How to reduce the data ingested.'
redirects:
    - /docs/integrations/kubernetes-integration/understand-use-data/find-use-your-kubernetes-data
    - /docs/integrations/kubernetes-integration/understand-use-data/understand-use-data
    - /docs/integrations/kubernetes-integration/installation/install-kubernetes-integration-using-helm/#services
    - /docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/data-governance
freshnessValidatedDate: 2024-07-09
---

If you've reviewed your [data ingestion](/docs/data-apis/manage-data/manage-data-coming-new-relic/) and want to send less data and reduce the data ingested, we have these solutions for you:

* Set `global.lowDataMode`

* Change the scrape interval

* Filter namespaces

Let's explain each option.

## Reduce data ingested by setting `global.lowDataMode` [#reduce-data-ingest]

If you're looking to cut costs, you can modify the `global.lowDataMode` parameter value. This will cut down on the number of metrics you send. The modification of this parameter will depend on the method you used to install Kubernetes:

* **Guided install** (New Relic CLI, Helm, manifest). The installation command includes `lowDataMode` by default because it has these parameters: `NRI_CLI_LOW_DATA_MODE`, `NRI_CLI_PROMETHEUS_AGENT_LOW_DATA_MODE`, and `NRI_CLI_LOGGING_LOW_DATA_MODE`.

* **Helm**. Set the `global.lowDataMode` parameter in the [`nri-bundle` chart](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) to true.

* **Manifest**. `LowDataMode` is only for Helm charts, and Helms charts are templates applied to manifests. When someone applies `LowDataMode` in the Helm chart, it makes a few small changes to the final manifest. The changes in the manifests are about specific settings, but not for a parameter named `LowDataMode`.

The `lowDataMode` parameter affects these specific components of the [`nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) chart:

<CollapserGroup>
  <Collapser
    id="nr-infra"
    title="New Relic Infrastructure"
  >
    If `lowDataMode` is enabled, the default scrape interval changes from `15s` to `30s`. You can also specify a custom value for it using `config.interval`, which will take preference over `lowDataMode`.
  </Collapser>

  <Collapser
    id="prometheus-agent"
    title="Prometheus agent integration"
  >
    If you enable `lowDataMode`, it'll exclude the metrics that start with these prefixes by default: `kube_`, `container_`, `machine_`, or `cadvisor_`. This is because the New Relic Kubernetes integration has already collected and used them.
  </Collapser>

  <Collapser
    id="nr-logging"
    title="New Relic logging"
  >
    If you enable `lowDataMode`, it'll exclude labels and annotations in the logs forwarded to New Relic. This reduces the overall data ingest into New Relic. We're keeping these fields: `cluster_name`, `container_name`, `namespace_name`, `pod_name`, `stream`, `message` and `log`.

    This log record shows all the attributes that the [New Relic Kubernetes plugin](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding/) usually captures in its logs:

    ```json
    [
    {
        "cluster_name": "api-test",
        "kubernetes": {
        "annotations": {
            "kubernetes.io/psp": "eks.privileged"
        },
        "container_hash": "fryckbos/test@sha256:5b098eaf3c7d5b3585eb10cebee63665b6208bea31ef31a3f0856c5ffdda644b",
        "container_image": "fryckbos/test:latest",
        "container_name": "newrelic-logging",
        "docker_id": "134e1daf63761baa15e035b08b7aea04518a0f0e50af4215131a50c6a379a072",
        "host": "ip-192-168-17-123.ec2.internal",
        "labels": {
            "app": "newrelic-logging",
            "app.kubernetes.io/name": "newrelic-logging",
            "controller-revision-hash": "84db95db86",
            "pod-template-generation": "1",
            "release": "nri-bundle"
        },
        "namespace_name": "nrlogs",
        "pod_id": "54556e3e-719c-46b5-af69-020b75d69bf1",
        "pod_name": "nri-bundle-newrelic-logging-jxnbj"
        },
        "message": "[2021/09/14 12:30:49] [ info] [engine] started (pid=1)\n",
        "plugin": {
        "source": "kubernetes",
        "type": "fluent-bit",
        "version": "1.8.1"
        },
        "stream": "stderr",
        "time": "2021-09-14T12:30:49.138824971Z",
        "timestamp": 1631622649138
    }
    ]
    ```

    This is how the previous log record would look like after enabling `lowDataMode`:

    ```json
    [
    {
        "cluster_name": "api-test",
        "container_name": "newrelic-logging",
        "namespace_name": "nrlogs",
        "pod_name": "nri-bundle-newrelic-logging-jxnbj",
        "message": "[2021/09/14 12:30:49] [ info] [engine] started (pid=1)\n",
        "stream": "stderr",
        "timestamp": 1631622649138
    }
    ]
    ```
  </Collapser>

  <Collapser
    id="nr-pixie-integration"
    title="New Relic Pixie integration"
  >
    If you enable `lowDataMode`, the `newrelic-pixie` integration performs heavier sampling on Pixie spans and collect data less often (from 10 seconds to 15 seconds). These are the `lowDataMode` settings:

    ```
    HTTP_SPAN_LIMIT: 750
    DB_SPAN_LIMIT: 250
    COLLECT_INTERVAL_SEC: 15
    ```

    You can find the default settings for these parameters and others in the [newrelic-pixie-integration](https://github.com/newrelic/newrelic-pixie-integration) Github repo.
  </Collapser>
</CollapserGroup>

## Reduce data ingested by changing the scrape interval [#scrape-interval]

The New Relic Kubernetes integration allows you to change the scrape interval when metrics are gathered from the cluster. This lets you choose the right balance between data resolution and usage. We suggest choosing a scrape interval between 15 and 30 seconds for the best experience.

<Callout variant="tip">
  The `lowDataMode` parameter already sets the scrape interval to 30 seconds.
</Callout>

The way you modify the scrape interval depends on the method you used to install Kubernetes:

* **Guided install** (New Relic CLI, Helm, manifest): You can't modify this value following our guided install flow.

* **Helm**: Set the scrape interval in the [`nri-bundle` chart](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) to the value you want.

* **Manifest**: Set the scrape interval in the manifest configuration YAML file to the value you want. If you followed our [installation instructions](/install/kubernetes/?dropdown1=manifest), the file was called `newrelic-manifest.yaml`.

If you're using Helm or manifest and want to change the scrape interval, just add the interval value under the `newrelic-infrastructure` section. Take a look at this example of the `values-newrelic.yaml` file to see how it looks for Helm:

```yaml
global:
  licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
  cluster: _K8S_CLUSTER_NAME_

# ... Other settings

# Configuration for newrelic-infrastructure
newrelic-infrastructure:
  # ... Other settings
  common:
    config:
      interval: 25s
```

<Callout variant="important">
  Note that if you're using the [cluster explorer](/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/#cluster-explorer-use) instead of the [Kubernetes navigator](/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/#navigator-preview), you're not allowed to set `interval` to values greater than `40s`.
</Callout>

## Reduce data ingested by filtering namespaces [#filter-namespace]

You can label namespaces to filter which ones the Kubernetes integration scrapes. All namespaces scrape by default.

We use the `namespaceSelector` in the same way Kubernetes does. To include only namespaces matching a label, just change the `namespaceSelector`. Add the following to your `values-newrelic.yaml` file, under the `newrelic-infrastructure` section:

```yaml
common:
  config:
    namespaceSelector:
      matchLabels:
        key1 : "value1"
```

### Examples with namespaces [#include-namespaces]

<CollapserGroup>
  <Collapser
    id="namespaces-label-true"
    title={<>Scrape namespaces with namespaces with the label <InlineCode>newrelic.com/scrape</InlineCode> set to <InlineCode>true</InlineCode></>}
  >
    ```yaml
    global:
    licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
    cluster: _K8S_CLUSTER_NAME_

    # ... Other settings 

    # Configuration for newrelic-infrastructure
    newrelic-infrastructure:
    # ... Other settings 
    common:
        config:
        namespaceSelector:
            matchLabels:
            newrelic.com/scrape: "true"
    ```
  </Collapser>

  <Collapser
    id="k8s-expressions"
    title="Use Kubernetes expressions to include or exclude namespaces"
  >
    You can also use Kubernetes expressions to include or exclude namespaces using this syntax:

    ```yaml
    common:
    config:
        namespaceSelector:
        matchExpressions:
        - {key: newrelic.com/scrape, operator: NotIn, values: ["false"]}
        - {key: key1, operator: In, values: ["value1"]}
    ```

    <Callout variant="tip">
      The expressions under `matchExpressions` are concatenated.
    </Callout>
  </Collapser>

  <Collapser
    id="exclude-namespaces"
    title={<>Exclude namespaces with the label <InlineCode>newrelic.com/scrape</InlineCode> set to <InlineCode>false</InlineCode></>}
  >
    ```yaml
    global:
    licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
    cluster: _K8S_CLUSTER_NAME_

    # ... Other settings 

    # Configuration for newrelic-infrastructure
    newrelic-infrastructure:
    # ... Other settings
    common:
        config:
        namespaceSelector:
            matchExpressions:
            - {key: newrelic.com/scrape, operator: NotIn, values: ["false"]}
    ```
  </Collapser>
</CollapserGroup>

You can see a full list of settings that you can modify in the [chart's README file](https://github.com/newrelic/nri-kubernetes/tree/main/charts/newrelic-infrastructure).

### How can I find out which namespaces are excluded? [#excluded-namespaces]

The `K8sNamespace` sample shows all the namespaces within the cluster. The `nrFiltered` attribute determines whether we're going to scrape the data related to the namespace. This query  shows you which namespaces are being monitored:

```sql
FROM K8sNamespaceSample SELECT displayName, nrFiltered WHERE clusterName = <clusterName> SINCE 2 MINUTES AGO
```

### What data is being discarded from the excluded namespaces? [#namespaces-discarded-data]

These samples won't be available for the excluded namespaces:

* `K8sContainerSample`
* `K8sDaemonsetSample`
* `K8sDeploymentSample`
* `K8sEndpointSample`
* `K8sHpaSample`
* `K8sPodSample`
* `K8sReplicasetSample`
* `K8sServiceSample`
* `K8sStatefulsetSample`
* `K8sVolumeSample`
