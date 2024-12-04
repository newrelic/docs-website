---
title: "Missing nodes for version 2"
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration v2
  - Troubleshooting
redirects:
  - /docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/troubleshooting
metaDescription: Some troubleshooting tips if you're not seeing data show up for your New Relic's Kubernetes integration.
freshnessValidatedDate: never
---

## Problem

You [deployed the infrastructure agent](/docs/infrastructure/infrastructure-monitoring/get-started/choose-infra-install-method/) and completed the [Kubernetes installation procedure](/install/kubernetes/) but not all nodes show up.

## Solution

Follow these steps:

1. Confirm that you can schedule the infrastructure agent on each node by running this command:

  ```shell
    kubectl describe daemonset newrelic-infra
  ```

2. Confirm that the time on all nodes is accurate. Nodes that are more than 2 minutes ahead or behind will not show up in the Cluster explorer. The following NRQL query can be used to check if this is the case:

  ```sql
  FROM K8sNodeSample
  SELECT latest(nr.ingestTimeMs - timestamp) / 1000 AS 'Clock offset seconds'
  FACET nodeName LIMIT max SINCE 1 DAY AGO
  ```

3. [Retrieve the logs from the infrastructure agent](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/overview/#logs-version2) on the nodes that do not appear in the cluster explorer and confirm there are no [error messages](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/errors/).
