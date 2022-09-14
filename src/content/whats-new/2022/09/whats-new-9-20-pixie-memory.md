---
title: 'Pixie launches low memory mode to reduce resource requirements'
summary: 'Low memory mode is now a viable option for more clusters.'
releaseDate: '2022-09-20'
learnMoreLink: 'https://docs.newrelic.com/docs/kubernetes-pixie/auto-telemetry-pixie/advanced-configuration/manage-pixie-memory' 
getStartedLink: 'https://docs.newrelic.com/docs/kubernetes-pixie/auto-telemetry-pixie/install-auto-telemetry-pixie'

---

## Deploy Pixie to more clusters with reduced memory requirements.

1. We've reduced Pixie's memory requirements by 50%, dropping its minimum memory requirement down to 1 GB.
2. Systems with as little as 4GB of total memory are now viable to run Pixie (to accommodate application pods, we recommend that no more than 25% of the nodes' total memory be allocated to Pixie).
3. For larger clusters, we still recommend using the default 2 GB memory configuration for optimal performance.

## How to get started

* By default, the vizier-pem's memory request is the same as the limit. 
* If you want to specify a different memory request, you can add the following configuration parameter to your Helm chart during installation. For example, for a 1 GB memory request you'd use: **--set pixie-chart.pemMemoryRequest=1Gi**

Learn more in [our Pixie docs](https://docs.newrelic.com/docs/kubernetes-pixie/auto-telemetry-pixie/advanced-configuration/manage-pixie-memory/).
