---
title: 'Proibido: não pode ser usado por usuário ou conta de serviço'
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

A conta de serviço de um contêiner não tem as permissões corretas.

## Solução

1. Descubra a conta de serviço que está em execução naquele pod.

```shell
oc get pod <pod-name> -o jsonpath='{.spec.serviceAccountName}' -n <namespace>
```

2. Adicione a restrição de contexto de segurança privilegiada (ou o scc que você deseja usar) a essa conta de serviço.

```shell
oc adm policy add-scc-to-user privileged system:serviceaccount:<namespace>:<release_name>-newrelic-infrastructure
```