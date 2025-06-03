---
title: 'Failed to discover kube-state-metrics'
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if kube-state-metrics is not found.
freshnessValidatedDate: 2024-09-02
---

## Problem

The Kubernetes integration requires `kube-state-metrics`. If this is missing, you'll see an error like the following in the `nrk8s-ksm` container logs:

  ```shell
    time="2022-06-21T09:12:20Z" level=error msg="retrieving scraper data: retrieving ksm data: discovering KSM endpoints: timeout discovering endpoints"
  ```

## Solution

Check the following:

  * `kube-state-metrics` has not been deployed into the cluster.
  * `kube-state-metrics` is deployed using a custom deployment.
  * There are multiple versions of `kube-state-metrics` running and the Kubernetes integration is not finding the correct one.

The Kubernetes integration automatically detects `kube-state-metrics` in your cluster, using by default the label `app.kubernetes.io/name=kube-state-metrics` across all namespaces.


<Callout variant="tip">
  You can change the discovery behavior in the `ksm.config` of the [Helm chart](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml) values.
</Callout>
