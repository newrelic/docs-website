---
title: Changes introduced in the Kubernetes integration version 3
tags:
    - Integrations
    - Kubernetes integration
    - Changelog
metaDescription: Changes introduced in Kubernetes integration version 3
redirects:
    - /docs/kubernetes-pixie/kubernetes-integration/get-started/changes-since-v3
    - /docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/changes-since-v3/
freshnessValidatedDate: never
---

As of version 3, the New Relic Kubernetes integration features an [architecture](/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-components/#architecture) that aims to be more modular and configurable, giving you more power to choose how it is deployed and making it compatible with more environments.

Data reported by the Kubernetes integration version 3 hasn't changed since version 2. For version 3, we focused on configurability, stability, and user experience. See the latest release notes for the integration [here](/docs/release-notes/infrastructure-release-notes/kubernetes-integration-release-notes/).

<Callout variant="important">
  The Kubernetes integration version 3 (`appVersion`) is included on the [`nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle) chart `version` 4.
</Callout>

## Migration Guide [#migration-guide]

To make migrating from earlier versions as easy as possible, we have developed a compatibility layer that translates most of the configurable options in the old `newrelic-infrastructure` chart to their new counterparts. This compatibility layer is temporary and will be removed in the future. We encourage you to read this guide carefully and migrate the configuration with human supervision. You can read more about the updated `newrelic-infrastructure` chart [here](https://github.com/newrelic/nri-kubernetes/tree/main/charts/newrelic-infrastructure#newrelic-infrastructure).

### Kube State Metrics (KSM) configuration [#ksm-config]

<Callout variant="tip">
  KSM monitoring works out of the box for most configurations; most users will not need to change this config.
</Callout>

* `disableKubeStateMetrics` has been replaced by `ksm.enabled`. The default is still the same (KSM scraping enabled).
* `kubeStateMetricsScheme`, `kubeStateMetricsPort`, `kubeStateMetricsUrl`, `kubeStateMetricsPodLabel`, and `kubeStateMetricsNamespace` have been replaced by the more comprehensive and flexible `ksm.config`.
* Note, KSM v2+ disables labels metrics by default. You can enable the target labels metrics to be monitored by using the `metric-labels-allowlist` options described [here](https://github.com/kubernetes/kube-state-metrics/blob/main/docs/developer/cli-arguments.md) in your Kubernetes clusters.

The `ksm.config` object has the following structure:

```yaml
ksm:
  config:
    # When autodiscovering KSM, force the following scheme. By default, `http` is used.
    scheme: "http"
    # Label selector to find kube-state-metrics endpoints. Defaults to `app.kubernetes.io/name=kube-state-metrics`.
    selector: "app.kubernetes.io/name=kube-state-metrics"
    # Restrict KSM discovery to this particular namespace. Defaults to all namespaces.
    namespace: ""
    # When autodiscovering, only consider endpoints that use this port. By default, all ports from the discovered `endpoint` are probed.
    # port: 8080
    # Override autodiscovery mechanism completely and specify the KSM url directly instead
    # staticUrl: "http://test.io:8080/metrics"
```

### Control plane configuration [#controlplane-configuration]

Control plane configuration has changed substantially. If you previously enabled control plane monitoring, we encourage you to take a look at our [Configure control plane monitoring](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/configure-control-plane-monitoring) documentation.

The following options have been replaced by more comprehensive configuration, covered in the section linked above:

* `apiServerSecurePort`
* `etcdTlsSecretName`
* `etcdTlsSecretNamespace`
* `controllerManagerEndpointUrl`, `etcdEndpointUrl`, `apiServerEndpointUrl`, and `schedulerEndpointUrl`

### Agent configuration [#agent-configuration]

The agent config file, previously specified in `config`, has been moved to `common.agentConfig`. The format of the file has not changed, and the full range of options that can be configured can be found [here](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/).

The following agent options were previously "aliased" in the root of the `values.yml` file, and are <DNT>**no longer available**</DNT>:

* `logFile` has been replaced by `common.agentConfig.log_file`.
* `eventQueueDepth` has been replaced by `common.agentConfig.event_queue_depth`.
* `customAttributes` has changed in format to a yaml object. The previous format, a manually JSON-encoded string, for example `{"team": "devops"}`, is deprecated.
* Previously, `customAttributes` had a default `clusterName` entry that might have unwanted consequences if removed. This is no longer the case; users may now safely override `customAttributes` in its entirety.
* `discoveryCacheTTL` has been completely removed, as the discovery is now performed using Kubernetes informers, which have a built-in cache.

### Integrations configuration [#integrations-configuration]

Integrations were previously configured under `integrations_config`, using an array format:

```yaml
integrations_config:
  - name: nri-redis.yaml
    data:
      discovery:  # ...
      integrations:  # ...
```

The mechanism remains the same, but we have changed the format to be more user-friendly:

```yaml
integrations:
  nri-redis-sampleapp:
    discovery:  # ...
    integrations:  # ...
```

Moreover, the `--port` and `--tls` flags are now mandatory in the discovery command. In the past, the following would work:

```yaml
integrations:
  nri-redis-sampleapp:
    discovery:
      command:
        exec: /var/db/newrelic-infra/nri-discovery-kubernetes
```

From v3 onwards, you must specify `--port` and `--tls`:

```yaml
integrations:
  nri-redis-sampleapp:
    discovery:
      command:
        exec: /var/db/newrelic-infra/nri-discovery-kubernetes --tls --port 10250
```

This change is required because in v2 and below, the `nrk8s-kubelet` component (or its equivalent) ran with `hostNetwork: true`, so `nri-discovery-kubernetes` could connect to the kubelet using `localhost` and plain http. For security reasons, this is no longer the case; hence, the need to specify both flags from now on.

For more details on how to configure on-host integrations in Kubernetes, please check our [Monitor services in Kubernetes](/docs/kubernetes-pixie/kubernetes-integration/link-apps-services/monitor-services-running-kubernetes) documentation.

### Miscellaneous chart values [#misc-chart-values]

While not related to the integration configuration, the following miscellaneous options for the Helm chart have also changed:

* `runAsUser` has been replaced by `securityContext`, which is templated directly into the pods and more configurable.
* `resources` has been removed, as now we deploy three different workloads. Resources for each one can be configured individually under:
  * `ksm.resources`
  * `kubelet.resources`
  * `controlPlane.resources`
* `tolerations` has been split into three and the previous one is no longer valid. All three default to tolerate any value for `NoSchedule` and `NoExecute`:
  * `ksm.tolerations`
  * `kubelet.tolerations`
  * `controlPlane.tolerations`
* `image` and all its subkeys have been replaced by individual sections for each of the three images that are now deployed:
  * `images.forwarder.*` to configure the infrastructure-agent forwarder.
  * `images.agent.*` to configure the image bundling the infrastructure-agent and on-host integrations.
  * `images.integration.*` to configure the image in charge of scraping k8s data.
