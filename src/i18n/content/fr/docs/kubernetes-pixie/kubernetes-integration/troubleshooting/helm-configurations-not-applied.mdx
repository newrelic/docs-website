---
title: La configuration Helm n'est pas appliquée globalement
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting for other category of problems you might face in your New Relic Kubernetes integration.
freshnessValidatedDate: '2023-08-02T00:00:00.000Z'
translationType: machine
---

## Problème [#problem]

Vous avez installé l&apos; [intégration Kubernetes de New Relic](/install/kubernetes/?dropdown1=helm) avec Helm pour `nri-bundle`, mais nos modèles Helm ne respectent pas certaines [valeurs globales](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle#values) dans votre `values.yaml`.

## Solution [#solution]

Spécifiez directement le graphique, comme dans l&apos;exemple ci-dessous :

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