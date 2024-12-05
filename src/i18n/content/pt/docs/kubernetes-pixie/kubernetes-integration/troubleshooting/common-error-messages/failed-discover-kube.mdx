---
title: Falha ao descobrir kube-state-métrica
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if kube-state-metrics is not found.
freshnessValidatedDate: '2024-09-02T00:00:00.000Z'
translationType: machine
---

## Problema

A integração do Kubernetes requer `kube-state-metrics`. Se estiver faltando, você verá um erro como este no log do contêiner `nrk8s-ksm` :

```shell
  time="2022-06-21T09:12:20Z" level=error msg="retrieving scraper data: retrieving ksm data: discovering KSM endpoints: timeout discovering endpoints"
```

## Solução

Verifique o seguinte:

* `kube-state-metrics` não foi implantado no cluster.
* `kube-state-metrics` é implantar usando uma implantação personalizada.
* Há diversas versões de `kube-state-metrics` em execução e a integração do Kubernetes não está encontrando a versão correta.

A integração Kubernetes detecta automaticamente `kube-state-metrics` no seu cluster, usando por padrão o rótulo `app.kubernetes.io/name=kube-state-metrics` em todos os namespaces.

<Callout variant="tip">
  Você pode alterar o comportamento de descoberta no `ksm.config` dos valores do [gráfico do Helm](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml) .
</Callout>