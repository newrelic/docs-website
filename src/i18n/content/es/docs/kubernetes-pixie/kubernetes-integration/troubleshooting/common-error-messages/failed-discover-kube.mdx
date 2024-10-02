---
title: No se pudo descubrir kube-state-métrica
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

La integración de Kubernetes requiere `kube-state-metrics`. Si falta esto, verá un error como el siguiente en el registro del contenedor `nrk8s-ksm` :

```shell
  time="2022-06-21T09:12:20Z" level=error msg="retrieving scraper data: retrieving ksm data: discovering KSM endpoints: timeout discovering endpoints"
```

## Solución

Verifique lo siguiente:

* `kube-state-metrics` no se ha implementado en el clúster.
* `kube-state-metrics` es desplegar usando un despliegue personalizado.
* Hay varias versiones de `kube-state-metrics` ejecutándose y la integración de Kubernetes no encuentra la correcta.

La integración Kubernetes detecta automáticamente `kube-state-metrics` en su clúster y emplea de forma predeterminada la etiqueta `app.kubernetes.io/name=kube-state-metrics` en todos los espacios de nombres.

<Callout variant="tip">
  Puede cambiar el comportamiento de descubrimiento en los valores del [gráfico de Helm](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml) `ksm.config` .
</Callout>