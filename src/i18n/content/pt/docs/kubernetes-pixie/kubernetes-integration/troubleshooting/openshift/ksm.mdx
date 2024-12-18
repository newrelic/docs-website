---
title: Erro ao preencher KSM métrica
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
  - OpenShift
metaDescription: Some troubleshooting tips if KSM metrics aren't being populated
freshnessValidatedDate: '2024-12-09T00:00:00.000Z'
translationType: machine
---

## Problema

A integração do Kubernetes requer `kube-state-metrics`. Se isso estiver faltando ou houver mais de um, você poderá ver um erro nos logs do contêiner `nrk8s-ksm` semelhante a:

```shell
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, querying KSM: getting filtered metric families: error calling prometheus exposed metrics endpoint. Got status code: 400"
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, querying KSM: getting filtered metric families: error calling prometheus exposed metrics endpoint. Got status code: 400"
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, no data was populated"
time="2024-10-18T04:04:21Z" level=error msg="retrieving scraper data: retrieving ksm data: KSM data was not populated after trying all endpoints"
```

## Solução

Tente o seguinte:

* Consulte sugestões em [Falha ao descobrir kube-state-métrica](/docs/kubernetes-pixie/kubernetes-integration/troubleshooting/common-error-messages/failed-discover-kube).
* Especifique o **namespace** para o contêiner `kube-state-metrics` . Por padrão, o pacote de integração do Kubernetes o cria no namespace `newrelic` .

```yaml
newrelic-infrastructure:
  ksm:
    enabled: true
    config:
      selector: "app.kubernetes.io/name=kube-state-metrics"
      namespace: "newrelic"
```