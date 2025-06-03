---
title: Nós ausentes para a versão 2
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

Você [implantou o agente de infraestrutura](/docs/infrastructure/infrastructure-monitoring/get-started/choose-infra-install-method/) e concluiu o [procedimento de instalaçãoKubernetes ](/install/kubernetes/), mas nem todos os nós aparecem.

## Solução

Siga esses passos:

1. Confirme se você pode agendar o agente de infraestrutura em cada nó executando este comando:

```shell
  kubectl describe daemonset newrelic-infra
```

2. Confirme se a hora em todos os nós está precisa. Os nós que estão mais de 2 minutos à frente ou atrás não aparecerão no cluster Explorer. A seguinte consulta NRQL pode ser usada para verificar se este é o caso:

```sql
FROM K8sNodeSample
SELECT latest(nr.ingestTimeMs - timestamp) / 1000 AS 'Clock offset seconds'
FACET nodeName LIMIT max SINCE 1 DAY AGO
```

3. [Recupere o log do agente de infraestrutura](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/overview/#logs-version2) nos nós que não aparecem no cluster explorer e confirme que não há [mensagem de erro](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/errors/).