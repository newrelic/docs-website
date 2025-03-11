---
title: 'Prohibido: no utilizable por el usuario o la cuenta de servicio'
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
  - OpenShift
metaDescription: Some troubleshooting tips if there are permissions issues with OpenShift
freshnessValidatedDate: '2024-12-09T00:00:00.000Z'
translationType: machine
---

## Problema

La cuenta de servicio de un contenedor no tiene las licencias correctas.

## Solución

1. Descubra la cuenta de servicio que se está ejecutando en ese pod.

```shell
oc get pod <pod-name> -o jsonpath='{.spec.serviceAccountName}' -n <namespace>
```

2. Agregue la restricción de contexto de seguridad privilegiado (o el scc que desea usar) a esa cuenta de servicio.

```shell
oc adm policy add-scc-to-user privileged system:serviceaccount:<namespace>:<release_name>-newrelic-infrastructure
```