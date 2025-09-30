---
title: 'Recommended alert policies and dashboards'
tags:
  - Integrations
  - Kubernetes integration
  - Alert policies
redirects:
  - /docs/integrations/kubernetes-integration/installation/kubernetes-integration-recommended-alert-policy
  - /docs/kubernetes-pixie/kubernetes-integration/installation/kubernetes-integration-recommended-alert-policy/
freshnessValidatedDate: 2024-09-02
---


When you first [install the Kubernetes integration](/install/kubernetes/), we deploy a default set of recommended alerts conditions and dashboards to your account that form the basis for alert conditions and dashboards on your Kubernetes cluster. Alert conditions are grouped into a couple of policies: [<DNT>Kubernetes alert policy</DNT>](#k8s-alert-conditions) and [<DNT>Google Kubernetes Engine alert policy</DNT>](#google-alert-policies).

While we've tried to address the most common use cases in all environments, there are a number of additional alerts you can set up to extend the default policy. See [Getting started with New Relic alerts](/docs/tutorial-create-alerts/create-new-relic-alerts/) to know more about alerts.

## Adding the recommended alert conditions and dashboards [#add-recommended-alert-policy]

To add recommended alert policies and dashboards, follow these steps:

1. Go to <DNT>**[one.newrelic.com](https://one.newrelic.com) > Integrations & Agents**</DNT>.

2. In the search box, type `kubernetes`.

    <img
      title="Integrations & Agents"
      alt="Integrations & Agents"
      src="/images/kubernetes_screenshot-crop_integrations-agents.webp"
    />

3. Select one of these options:

    * <DNT>**Kubernetes**</DNT>: To add the default set of recommended alert conditions and a dashboard.
    
    * <DNT>**Google Kubernetes Engine**</DNT>: To add the default set of recommended Google Kubernetes engine alert conditions and a dashboard.

4. Click <DNT>**Begin installation**</DNT> if you need to install the Kubernetes integration or click <DNT>**Skip this step**</DNT> if you already setup this integration.

5. Depending on the option you selected in step 3, you'll see different resources to add.

  <img
    title="Add the default set of recommended alert conditions"
    alt="Add the default set of recommended alert conditions"
    src="/images/kubernetes_screenshot-crop_recommended-alert-conditions.webp"
  />

  <figcaption>
    Default set of recommended alert conditions and a dashboard when you select <DNT>**Kubernetes**</DNT> in step 3.
  </figcaption>

  <img
    width="60%;"
    title="Add the default set of recommended Google Kubernetes engine alert conditions"
    alt="Add the default set of recommended Google Kubernetes engine alert conditions"
    src="/images/kubernetes_screenshot-crop_recommended-google-alert-conditions.webp"
  />

  <figcaption>
    Default set of recommended Google Kubernetes engine alert conditions and a dashboard when you select <DNT>**Google Kubernetes Engine**</DNT> in step 3.
  </figcaption>

6. Click <DNT>**See your data**</DNT> to see a dashboard with your Kubernetes data in New Relic.

## How to see the recommended alert policies [#see-recommended-alert-policy]

To view the recommended alert policies you've added, do this:

1. Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Alerts**</DNT>. 

2. Click <DNT>**Alert Policies**</DNT> in the left navigation pane.

3. You'll see <DNT>**Kubernetes alert policy**</DNT> and <DNT>**Google Kubernetes engine alert policy**</DNT>.

    <img
      title="Add Kubernetes alerts"
      alt="Add Kubernetes alerts"
      src="/images/kubernetes_screenshot-crop_recommended-alert-policies.webp"
    />

## How to see the Kubernetes dashboards [#see-dashboards]

There is a collection of recommended pre-built dashboards to help you instantly visualize your Kubernetes data for common use cases. See [Manage your recommended dashboards](/docs/query-your-data/explore-query-data/dashboards/prebuilt-dashboards) to know how to see these dashboards.


## Kubernetes alert policy [#k8s-alert-conditions]

This is the default set of recommended alert conditions you'll add:

<CollapserGroup>
    <Collapser
        id="k8s-dashboard"
        title="Kubernetes Dashboard (dashboard)"
    >
      This dashboard includes charts and visualizations that help you instantly visualize your Kubernetes data for common use cases.

    </Collapser>
    <Collapser
        id="container-cpu-throttling-high"
        title="Container CPU throttling is high (alert condition)"
    >
      This alert condition generates an alert when a container is throttled by more than 25% for more than 5 minutes. It runs this query:

        ```sql
        FROM K8sContainerSample
        SELECT sum(containerCpuCfsThrottledPeriodsDelta) / sum(containerCpuCfsPeriodsDelta) * 100 
        WHERE clusterName IN ('YOUR_CLUSTER_NAME') 
        AND namespaceName IN ('YOUR_NAMESPACE_NAME') 
        FACET containerName, podName, namespaceName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/ContainerCPUThrottling.yaml) for more info.

    </Collapser>

    <Collapser
        id="container-high-cpu-utilization"
        title="Container high CPU utilization (alert condition)"
    >
      This alert condition generates an alert when the average container CPU usage against the limit exceeds 90% for over 5 minutes. It runs this query:

        ```sql
        FROM K8sContainerSample
        SELECT average(cpuCoresUtilization)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME') 
        AND namespaceName IN ('YOUR_NAMESPACE_NAME') 
        FACET containerName, podName, namespaceName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/ContainerHighCPUUtil.yaml) for more info.

    </Collapser>

    <Collapser
        id="container-high-memory-utilization"
        title="Container high memory utilization (alert condition)"
    >
      This alert condition generates an alert when the average container memory usage against the limit exceeds 90% for over 5 minutes. It runs this query:

        ```sql
        FROM K8sContainerSample
        SELECT average(memoryWorkingSetUtilization)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME') 
        AND namespaceName IN ('YOUR_NAMESPACE_NAME') 
        FACET containerName, podName, namespaceName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/ContainerHighMemUtil.yaml) for more info.
    </Collapser>

    <Collapser
        id="container-restarting"
        title="Container is restarting (alert condition)"
    >
      This alert condition generates an alert when container restarts exceed 0 in a 5-minute sliding window. It runs this query:

        ```sql
        FROM K8sContainerSample
        SELECT sum(restartCountDelta)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME') 
        AND namespaceName IN ('YOUR_NAMESPACE_NAME') 
        FACET containerName, podName, namespaceName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/ContainerRestarting.yaml) for more info.

    </Collapser>
    <Collapser
        id="container-waiting"
        title="Container is waiting (alert condition)"
    >
      This alert condition generates an alert when a container waits over 5 minutes. It runs this query:

        ```sql
        FROM K8sContainerSample
        SELECT uniqueCount(podName)
        WHERE status = 'Waiting' AND clusterName IN ('YOUR_CLUSTER_NAME') 
        AND namespaceName IN ('YOUR_NAMESPACE_NAME') 
        FACET containerName, podName, namespaceName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/ContainerWaiting.yaml) for more info.
    </Collapser>

    <Collapser
        id="daemonset-missing-pods"
        title="Daemonset is missing pods (alert condition)"
    >
      This alert condition generates an alert when the daemonset is missing any pods for a period longer than 5 minutes. It runs this query:

        ```sql
        FROM K8sDaemonsetSample
        SELECT latest(podsMissing)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME')
        AND namespaceName IN ('YOUR_NAMESPACE_NAME')
        FACET daemonsetName, namespaceName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/DaemonsetPodsMissing.yaml) for more info.

    </Collapser>

    <Collapser
        id="deployment-missing-pods"
        title="Deployment is missing pods (alert condition)"
    >
      This alert condition generates an alert when the deployment is missing any pods for a period longer than 5 minutes. It runs this query:

        ```sql
        FROM K8sDeploymentSample
        SELECT latest(podsMissing)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME') 
        AND namespaceName IN ('YOUR_NAMESPACE_NAME') 
        FACET deploymentName, namespaceName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/DeploymentPodsMissing.yaml) for more info.

    </Collapser>

    <Collapser
        id="etcd-utilization-high"
        title={<><InlineCode>Etcd</InlineCode> file descriptor utilization is high (alert condition)</>}
    >
      This alert condition generates an alert when the `Etcd` file descriptor usage exceeds 90% for over 5 minutes. It runs this query:

        ```sql
        FROM K8sEtcdSample
        SELECT max(processFdsUtilization)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME')
        FACET displayName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/EtcdFileDescriptors.yaml) for more info.
    </Collapser>

    <Collapser
        id="etcd-no-leader"
        title={<><InlineCode>Etcd</InlineCode> has no leader (alert condition)</>}
    >
      This alert condition generates an alert when the `Etcd` file descriptor is leaderless for over 1 minute. It runs this query:

        ```sql
        FROM K8sEtcdSample
        SELECT min(etcdServerHasLeader)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME') 
        FACET displayName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/EtcdHasNoLeader.yaml) for more info.
    </Collapser>

    <Collapser
        id="hpa-current-replicas"
        title="HPA current replicas < desired replicas (alert condition)"
    >
      This alert condition generates an alert when the current replicas of a horizontal pod autoscaler are lower than the desired replicas for more than 5 minutes. It runs this query:

        ```sql
        FROM K8sHpaSample
        SELECT latest(desiredReplicas - currentReplicas)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME') 
        AND namespaceName IN ('YOUR_NAMESPACE_NAME') 
        FACET displayName, namespaceName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/HPAMissingReplicas.yaml) for more info.
    </Collapser>

    <Collapser
        id="hpa-maximum-replicas"
        title="HPA has reached maximum replicas (alert condition)"
    >
      This alert condition generates an alert when a horizontal pod autoscaler exceeds 5 replicas. It runs this query:

        ```sql
        FROM K8sHpaSample
        SELECT latest(maxReplicas - currentReplicas)
        WHERE clusterName in ('YOUR_CLUSTER_NAME') 
        AND namespaceName IN ('YOUR_NAMESPACE_NAME') 
        FACET displayName, namespaceName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/HPAMaxReplicas.yaml) for more info.
    </Collapser>

    <Collapser
        id="job-failed"
        title="Job Failed (alert condition)"
    >
      This alert condition generates an alert when a job reports a failed status. It runs this query:

        ```sql
        FROM K8sJobSample
        SELECT uniqueCount(jobName)
        WHERE failed = 'true' and clusterName in ('YOUR_CLUSTER_NAME') and namespaceName in ('YOUR_NAMESPACE_NAME') facet jobName, namespaceName, clusterName, failedPodsReason
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/JobFailed.yaml) for more info.
    </Collapser>

    <Collapser
        id="more-five-pods-failing"
        title="More than 5 pods failing in namespace (alert condition)"
    >
      This alert condition generates an alert when more than 5 pods in a namespace fail for more than 5 minutes. It runs this query:

        ```sql
        FROM K8sPodSample
        SELECT uniqueCount(podName)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME') 
        AND namespaceName IN ('YOUR_NAMESPACE_NAME') 
        AND status = 'Failed'
        FACET namespaceName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/PodsFailingNamespace.yaml) for more info.
    </Collapser>

    <Collapser
        id="node-allocatable-cpu"
        title="Node allocatable CPU utilization is high (alert condition)"
    >
      This alert condition generates an alert when the average node allocable CPU utilization exceeds 90% for more than 5 minutes. It runs this query:

        ```sql
        FROM K8sNodeSample
        SELECT average(allocatableCpuCoresUtilization)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME') 
        FACET nodeName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/NodeHighAllocatableCPUUtil.yaml) for more info.
    </Collapser>

    <Collapser
        id="node-allocatable-memory-high"
        title="Node allocatable memory utilization is high (alert condition)"
    >
      This alert condition generates an alert when the average node allocable memory utilization exceeds 90% for more than 5 minutes. It runs this query:

        ```sql
        FROM K8sNodeSample
        SELECT average(allocatableMemoryUtilization)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME') 
        FACET nodeName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/NodeHighAllocatableMemUtil.yaml) for more info.
    </Collapser>

    <Collapser
        id="node-not-ready"
        title="Node is not ready (alert condition)"
    >
      This alert condition generates an alert when a node is unavailable for 5 minutes. It runs this query:

        ```sql
        FROM K8sNodeSample
        SELECT latest(condition.Ready)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME') 
        FACET nodeName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/NodeIsNotReady.yaml) for more info.
    </Collapser>

    <Collapser
        id="node-unschedulable"
        title="Node is unschedulable (alert condition)"
    >
      This alert condition generates an alert when a node is marked unscheduled. It runs this query:

        ```sql
        FROM K8sNodeSample
        SELECT latest(unschedulable)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME') 
        FACET nodeName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/NodeUnschedulable.yaml) for more info.
    </Collapser>

    <Collapser
        id="node-pod-nearing-capacity"
        title="Node pod count nearing capacity (alert condition)"
    >
      This alert condition generates an alert when a node's running pods exceed 90% of the node's pod capacity for more than 5 minutes. It runs this query:

        ```sql
        FROM K8sPodSample, K8sNodeSample
        SELECT ceil
        (filter
          (
            uniqueCount(podName),
            WHERE status = 'Running'
          ) / latest(capacityPods) * 100
        ) AS 'Pod Capacity %' 
        WHERE nodeName != '' AND nodeName IS NOT NULL 
        AND clusterName IN ('YOUR_CLUSTER_NAME') 
        FACET nodeName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/NodePodCapacity.yaml) for more info.
    </Collapser>

    <Collapser
        id="node-root-capacity-high"
        title="Node root file system capacity utilization is high (alert condition)"
    >
      This alert condition generates an alert when the average node root file system capacity utilization exceeds 90% for more than 5 minutes. It runs this query:

        ```sql
        FROM K8sNodeSample
        SELECT average(fsCapacityUtilization)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME') 
        FACET nodeName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/NodeHighFSCapacityUtil.yaml) for more info.
    </Collapser>

    <Collapser
        id="volume-errors"
        title="Persistent volume has errors (alert condition)"
    >
      This alert condition generates an alert when persistent volume is in a failed or pending state for more than 5 minutes. It runs this query:

        ```sql
        FROM K8sPersistentVolumeSample
        SELECT uniqueCount(volumeName)
        WHERE statusPhase IN ('Failed','Pending') 
        AND clusterName IN ('YOUR_CLUSTER_NAME') 
        FACET volumeName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/PersistentVolumeErrors.yaml) for more info.
    </Collapser>

    <Collapser
        id="pod-not-scheduled"
        title="Pod cannot be scheduled (alert condition)"
    >
      This alert condition generates an alert when a pod is unable to be scheduled for more than 5 minutes. It runs this query:

        ```sql
        FROM K8sPodSample
        SELECT latest(isScheduled)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME')
        AND namespaceName IN ('YOUR_NAMESPACE_NAME') 
        FACET podName, namespaceName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/PodNotScheduled.yaml) for more info.
    </Collapser>

    <Collapser
        id="pod-not-ready"
        title="Pod is not ready (alert condition)"
    >
      This alert condition generates an alert when a pod is unavailable for over 5 minutes. It runs this query:

        ```sql
        FROM K8sPodSample
        SELECT latest(isReady)
        WHERE status NOT IN ('Failed', 'Succeeded') 
        AND clusterName IN ('YOUR_CLUSTER_NAME')
        AND namespaceName IN ('YOUR_NAMESPACE_NAME')
        FACET podName, namespaceName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/PodNotReady.yaml) for more info.
    </Collapser>

    <Collapser
        id="statefulset-missing-pods"
        title={<><InlineCode>statefulset</InlineCode> is missing pods (alert condition)</>}
    >
      This alert condition generates an alert when `statefulset` is missing pods over 5 minutes. It runs this query:

        ```sql
        FROM K8sStatefulsetSample
        SELECT latest(podsMissing)
        WHERE clusterName IN ('YOUR_CLUSTER_NAME')
        AND namespaceName IN ('YOUR_NAMESPACE_NAME') 
        FACET daemonsetName, namespaceName, clusterName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/kubernetes/StatefulsetPodsMissing.yaml) for more info.
    </Collapser>

</CollapserGroup>


## Google Kubernetes engine alert policy [#google-alert-policies]

This is the default set of recommended Google Kubernetes engine alert conditions you'll add:

<CollapserGroup>
    <Collapser
        id="k8s-google-dashboard"
        title="Google Kubernetes Engine (dashboard)"
    >
      This dashboard includes charts and visualizations that help you instantly visualize your Google Kubernetes data for common use cases.

    </Collapser>

    <Collapser
        id="google-high-cpu-utilization"
        title="High CPU utilization (alert condition)"
    >
      This alert condition generates an alert when a node's CPU utilization exceeds 90% for at least 15 minutes. It runs this query:

        ```sql
        FROM Metric
        SELECT max(`gcp.kubernetes.node.cpu.allocatable_utilization`) * 100
        WHERE clusterName LIKE '%' FACET gcp.kubernetes.nodeName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/google-kubernetes-engine/HighCPU.yml) for more info.
    </Collapser>
    <Collapser
        id="google-high-memory-usage"
        title="High memory usage (alert condition)"
    >
      This alert condition generates an alert when a node's memory usage exceeds 85% of its total capacity. It runs this query:

        ```sql
        FROM K8sPodSample
        SELECT max(gcp.kubernetes.node.memory.allocatable_utilization) * 100 
        WHERE clusterName LIKE '%' FACET gcp.kubernetes.nodeName
        ```
        
      See the [GitHub configuration file](https://github.com/newrelic/newrelic-quickstarts/blob/main/alert-policies/google-kubernetes-engine/HighMemoryUsage.yml) for more info.
    </Collapser>
</CollapserGroup>




