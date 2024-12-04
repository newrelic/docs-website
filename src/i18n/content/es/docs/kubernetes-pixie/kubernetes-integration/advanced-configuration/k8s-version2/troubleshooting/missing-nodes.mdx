---
title: Nodos faltantes para la versión 2
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration v2
  - Troubleshooting
metaDescription: Some troubleshooting tips if you're not seeing data show up for your New Relic's Kubernetes integration.
freshnessValidatedDate: never
translationType: machine
---

## Problema

[Implementa el agente de infraestructura](/docs/infrastructure/infrastructure-monitoring/get-started/choose-infra-install-method/) y completa el [procedimiento de instalaciónKubernetes ,](/install/kubernetes/) pero no aparecen todos los nodos.

## Solución

Sigue estos pasos:

1. Confirme que puede programar el agente de infraestructura en cada nodo ejecutando este comando:

```shell
  kubectl describe daemonset newrelic-infra
```

2. Confirme que la hora en todos los nodos sea exacta. Los nodos que estén más de 2 minutos por delante o por detrás no aparecerán en el explorador de clústeres. Se puede utilizar la siguiente consulta NRQL para comprobar si este es el caso:

```sql
FROM K8sNodeSample
SELECT latest(nr.ingestTimeMs - timestamp) / 1000 AS 'Clock offset seconds'
FACET nodeName LIMIT max SINCE 1 DAY AGO
```

3. [Recuperar el log del agente de infraestructura](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/overview/#logs-version2) sobre los nodos que no aparecen en el cluster explorer y confirmar que no hay ningún [mensaje de error](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/errors/).