---
title: 'Kubernetes: Metric update'
summary: 'Moving to container_memory_working_set_bytes and away from container_memory_usage_bytes metric'
releaseDate: '2021-03-30'
getStartedLink: 'https://docs.newrelic.com/docs/integrations/kubernetes-integration/installation/kubernetes-integration-install-configure/'
---
​
The `container_memory_usage_bytes` metric isn't an accurate indicator for out of memory (OOM) prevention as it includes cached data (i.e., filesystem) that can evict in memory pressure scenarios. However, the `container_memory_working_set_bytes` metric excludes cached data and is what Kubernetes uses for OOM/scheduling decisions, making it a better metric for monitoring/alerting memory saturation.
​
This change will be reflected within New Relic One as follows: 
​
​
*   [Kubernetes integration: Predefined alert policy.](https://docs.newrelic.com/docs/integrations/kubernetes-integration/kubernetes-events/kubernetes-integration-predefined-alert-policy/) The “Container memory usage % is too high” alert condition now uses the new `memoryWorkingSetUtilization` attribute instead of (`memoryUsedBytes`/`memoryLimitBytes`)/100. 
    * **Please note that existing alert conditions won’t be automatically updated. If you are using our predefined alert policy, we strongly recommend you to update it accordingly.**
*   The following widgets are now using working set bytes in Kubernetes dashboard:
    *   Resources Used
    *   Container Memory Usage - % Used vs Limit
    *   Container MBytes of Memory Used
    *   Node Resource Consumption
*   [Golden metrics definition for containers](https://github.com/newrelic/entity-definitions/blob/main/definitions/infra-container/golden_metrics.yml#L10) will now use `memoryWorkingSetBytes`
*   The Kubernetes cluster explorer now shows the container's memory consumption compared to the limit, using the `WorkingSetBytes` metric in the Pod preview
*   New alerts can now be created based on:
    *   Memory Working Set Bytes
    *   Memory Working Set Utilization
    *   Requested Memory Working Set Utilization
​
These attributes can be used to define thresholds in the integrations section of the [infrastructure alerts](https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/infrastructure-alerts-add-edit-or-view-host-alert-information/) when selecting the `K8sContainerSample` data source, and they can also be used for nrql alerts.