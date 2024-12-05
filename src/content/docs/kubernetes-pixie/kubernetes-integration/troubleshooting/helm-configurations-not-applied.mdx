---
title: 'Helm configurations are not applied globally'
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting for other category of problems you might face in your New Relic Kubernetes integration.
freshnessValidatedDate: 2023-08-02
---

## Problem [#problem]

You've installed the [New Relic's Kubernetes integration](/install/kubernetes/?dropdown1=helm) with Helm for the `nri-bundle`, but our Helm templates are not respecting some [global values](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle#values) in your `values.yaml`.

## Solution [#solution]

Specify the chart directly, as in the example below:

```yml
global: 
  licenseKey: <set_elsewhere>
  cluster: <set_elsewhere>
  tolerations: # We are interested in setting this toleration for our pods, but the global value is not respected for some reason 
    - key: role
      operator: Exists
      effect: NoSchedule

# Directly specify the chart, and the desired pod toleration will always be respected
newrelic-infrastructure: 
   kubelet: 
     tolerations: 
       - key: role
         operator: Exists
         effect: NoSchedule 
```
