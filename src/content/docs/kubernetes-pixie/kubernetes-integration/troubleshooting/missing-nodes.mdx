---
title: Missing nodes
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if you are not seeing data show up for your New Relic's Kubernetes integration.
redirects:
  - /docs/integrations/kubernetes-integration/troubleshooting/kubernetes-integration-troubleshooting-missing-nodes
freshnessValidatedDate: never
---

## Problem

You [deployed the infrastructure agent](/docs/infrastructure/infrastructure-monitoring/get-started/choose-infra-install-method/) and completed the [Kubernetes installation procedure](/install/kubernetes/) but not all nodes show up.

## Solution

Follow these steps:

1. Confirm that you can schedule the infrastructure agent on each node by running this command:

  ```shell
    kubectl describe daemonset RELEASE_NAME-nrk8s-kubelet
  ```

  <Callout variant="caution">
    Notice that in V2 version of the Kubernetes integration this command changes. See [Missing nodes (version 2)](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/troubleshooting/missing-nodes).
  </Callout>

2. Confirm that the time on all nodes is accurate. Nodes that are more than 2 minutes ahead or behind will not show up in the cluster explorer. The following NRQL query can be used to check if this is the case:

  ```sql
  FROM K8sNodeSample
  SELECT latest(nr.ingestTimeMs - timestamp) / 1000 AS 'Clock offset seconds' FACET nodeName
  LIMIT max SINCE 1 DAY AGO
  ```

3. [Retrieve the logs from the infrastructure agent](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/) on the nodes that do not appear in the cluster explorer and confirm there are no [error messages](/docs/kubernetes-pixie/kubernetes-integration/troubleshooting/common-error-messages/error-messages).
