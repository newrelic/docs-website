---
title: Nós ausentes
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

Você [implantou o agente de infraestrutura](/docs/infrastructure/infrastructure-monitoring/get-started/choose-infra-install-method/) e concluiu o [procedimento de instalaçãoKubernetes ](/install/kubernetes/), mas nem todos os nós aparecem.

## Solução

Siga esses passos:

1. Confirme se você pode agendar o agente de infraestrutura em cada nó executando este comando:

```shell
  kubectl describe daemonset RELEASE_NAME-nrk8s-kubelet
```

<Callout variant="caution">
  Observe que na versão V2 da integração do Kubernetes esse comando muda. Veja [Nós ausentes (versão 2)](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/troubleshooting/missing-nodes).
</Callout>

2. Confirme se a hora em todos os nós está correta. Nós que estiverem mais de 2 minutos à frente ou atrás não aparecerão no explorador de cluster. A seguinte consulta NRQL pode ser usada para verificar se esse é o caso:

```sql
FROM K8sNodeSample
SELECT latest(nr.ingestTimeMs - timestamp) / 1000 AS 'Clock offset seconds' FACET nodeName
LIMIT max SINCE 1 DAY AGO
```

3. [Recupere o log do agente de infraestrutura](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/) sobre os nós que não aparecem no cluster explorer e confirme que não há [mensagem de erro](/docs/kubernetes-pixie/kubernetes-integration/troubleshooting/common-error-messages/error-messages).