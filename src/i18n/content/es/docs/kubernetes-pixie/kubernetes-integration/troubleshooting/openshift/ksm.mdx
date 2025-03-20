---
title: Error al rellenar KSM métrica
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

La integración de Kubernetes requiere `kube-state-metrics`. Si falta esto o hay más de uno, es posible que vea un error en los logs del contenedor `nrk8s-ksm` similar al siguiente:

```shell
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, querying KSM: getting filtered metric families: error calling prometheus exposed metrics endpoint. Got status code: 400"
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, querying KSM: getting filtered metric families: error calling prometheus exposed metrics endpoint. Got status code: 400"
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, no data was populated"
time="2024-10-18T04:04:21Z" level=error msg="retrieving scraper data: retrieving ksm data: KSM data was not populated after trying all endpoints"
```

## Solución

Pruebe lo siguiente:

* Consulte las sugerencias en [No se pudo descubrir kube-state-métrica](/docs/kubernetes-pixie/kubernetes-integration/troubleshooting/common-error-messages/failed-discover-kube).
* Especifique **namespace** para el contenedor `kube-state-metrics`. De forma predeterminada, el paquete de integración Kubernetes lo crea en el namespace `newrelic`.

```yaml
newrelic-infrastructure:
  ksm:
    enabled: true
    config:
      selector: "app.kubernetes.io/name=kube-state-metrics"
      namespace: "newrelic"
```