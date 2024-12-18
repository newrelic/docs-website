---
title: O pod não está iniciando
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if the Pod is not starting.
freshnessValidatedDate: '2024-09-02T00:00:00.000Z'
translationType: machine
---

## Problema

Você obtém o erro de saída `nrk8s-kubelet pod is not starting` ao seguir a instalação guiada.

## Solução

Este erro indica que o pod kubelet do Kubernetes não pode ser iniciado em 5 minutos, e o script de instalação falha devido a esse tempo limite.

Nesse caso, você pode executar este comando para ver o status e as reinicializações do pod:

```bash
  kubectl get pods -o wide -n newrelic | grep nrk8s-kubelet
```

Verifique o seguinte:

* Se o pod estiver no status `ImagePullBackOff`, verifique sua conexão de rede para permitir a extração de imagens do [domínio correto](/docs/new-relic-solutions/get-started/networks).

* Se o pod estiver no status `Pending` ou `ContainerCreating`, execute estes comandos para descobrir os possíveis motivos no [log de depuração](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/#verbose-logging):

```bash
kubectl logs newrelic-bundle-nrk8s-kubelet-n newrelic
kubectl logs newrelic-bundle-nrk8s-kubelet-n newrelic -c kubelet
```