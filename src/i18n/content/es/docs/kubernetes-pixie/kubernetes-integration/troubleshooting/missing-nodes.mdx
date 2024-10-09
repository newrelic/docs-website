---
title: Nodos faltantes
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if you are not seeing data show up for your New Relic's Kubernetes integration.
freshnessValidatedDate: never
translationType: machine
---

## Problema

[Implementa el agente de infraestructura](/docs/infrastructure/infrastructure-monitoring/get-started/choose-infra-install-method/) y completa el [procedimiento de instalaciónKubernetes ,](/install/kubernetes/) pero no aparecen todos los nodos.

## Solución

Sigue estos pasos:

1. Confirme que puede programar el agente de infraestructura en cada nodo ejecutando este comando:

```shell
  kubectl describe daemonset RELEASE_NAME-nrk8s-kubelet
```

<Callout variant="caution">
  Tenga en cuenta que en la versión V2 de la integración de Kubernetes este comando cambia. Ver [Nodos faltantes (versión 2)](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/troubleshooting/missing-nodes).
</Callout>

2. Confirme que la hora en todos los nodos sea precisa. Los nodos que estén más de 2 minutos adelante o atrás no aparecerán en el explorador de clúster. Se puede emplear la siguiente consulta NRQL para comprobar si este es el caso:

```sql
FROM K8sNodeSample
SELECT latest(nr.ingestTimeMs - timestamp) / 1000 AS 'Clock offset seconds' FACET nodeName
LIMIT max SINCE 1 DAY AGO
```

3. [Recupere el log del agente de infraestructura](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/) sobre los nodos que no aparecen en el explorador de clúster y confirme que no haya ningún [mensaje de error](/docs/kubernetes-pixie/kubernetes-integration/troubleshooting/common-error-messages/error-messages).