---
title: A configuração do Helm não é aplicada globalmente
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting for other category of problems you might face in your New Relic Kubernetes integration.
freshnessValidatedDate: '2023-08-02T00:00:00.000Z'
translationType: machine
---

## Problema [#problem]

Você instalou a [integração do Kubernetes do New Relic](/install/kubernetes/?dropdown1=helm) com o Helm para o `nri-bundle`, mas nossos modelos do Helm não estão respeitando alguns [valores globais](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle#values) no seu `values.yaml`.

## Solução [#solution]

Especifique o gráfico diretamente, como no exemplo abaixo:

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