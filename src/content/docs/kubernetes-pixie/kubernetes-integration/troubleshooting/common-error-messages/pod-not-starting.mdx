---
title: 'Pod is not starting'
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if the Pod is not starting.
freshnessValidatedDate: 2024-09-02
---

## Problem

You get the output error `nrk8s-kubelet pod is not starting` when you follow the guided installation.

## Solution

This error indicates that the Kubernetes kubelet pod can't be started within 5 minutes, and the installation script fails due to this timeout.

In this case, you can run this command to see the pod's status and restarts:

  ```bash
    kubectl get pods -o wide -n newrelic | grep nrk8s-kubelet
  ```

Check the following:

  * If the pod is in `ImagePullBackOff` status, please check your network connection to allow image pulling from the [right domains](/docs/new-relic-solutions/get-started/networks).

  
  * If the pod is in `Pending` or `ContainerCreating` status, please run these commands to find out the possible reasons from the [debug logs](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/#verbose-logging):

  ```bash
  kubectl logs newrelic-bundle-nrk8s-kubelet-n newrelic
  kubectl logs newrelic-bundle-nrk8s-kubelet-n newrelic -c kubelet
  ```
