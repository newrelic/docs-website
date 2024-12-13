---
title: 'Error populating KSM metrics'
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
  - OpenShift
metaDescription: Some troubleshooting tips if KSM metrics aren't being populated
freshnessValidatedDate: 2024-12-09
---
## Problem

The kubernetes integration requires `kube-state-metrics`. If this is missing or there is more than one, you may see an error in the `nrk8s-ksm` container logs similar to:
```shell
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, querying KSM: getting filtered metric families: error calling prometheus exposed metrics endpoint. Got status code: 400"
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, querying KSM: getting filtered metric families: error calling prometheus exposed metrics endpoint. Got status code: 400"
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, no data was populated"
time="2024-10-18T04:04:21Z" level=error msg="retrieving scraper data: retrieving ksm data: KSM data was not populated after trying all endpoints"
```
## Solution

Try the following: 
* Refer suggestions at [Failed to discover kube-state-metrics](/docs/kubernetes-pixie/kubernetes-integration/troubleshooting/common-error-messages/failed-discover-kube).
* Specify **namespace** for the `kube-state-metrics` container. By default, the Kubernetes integration bundle creates it in the `newrelic` namespace.
```yaml
newrelic-infrastructure:
  ksm:
    enabled: true
    config:
      selector: "app.kubernetes.io/name=kube-state-metrics"
      namespace: "newrelic"
```