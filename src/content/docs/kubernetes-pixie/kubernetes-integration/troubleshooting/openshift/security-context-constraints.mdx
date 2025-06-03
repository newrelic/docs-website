---
title: 'Forbidden: not useable by user or service account'
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
  - OpenShift
metaDescription: Some troubleshooting tips if there are permissions issues with OpenShift 
freshnessValidatedDate: 2024-12-09
---
## Problem
The service account for a container doesn't have the correct permissions. 
## Solution
1. Find out the service account that is running on that pod.
```shell 
oc get pod <pod-name> -o jsonpath='{.spec.serviceAccountName}' -n <namespace>
```
2. Add the privileged security context constraint (or the scc you want to use) to that service account.
```shell
oc adm policy add-scc-to-user privileged system:serviceaccount:<namespace>:<release_name>-newrelic-infrastructure
```
