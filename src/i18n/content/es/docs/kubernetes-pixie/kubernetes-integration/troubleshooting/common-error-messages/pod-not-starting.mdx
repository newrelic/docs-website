---
title: El pod no arranca
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

Obtendrás el error de salida `nrk8s-kubelet pod is not starting` cuando sigues la instalación guiada.

## Solución

Este error indica que el pod kubelet de Kubernetes no se puede iniciar en 5 minutos y el script de instalación falla debido a este tiempo de espera.

En este caso, puede ejecutar este comando para ver el estado del pod y los reinicios:

```bash
  kubectl get pods -o wide -n newrelic | grep nrk8s-kubelet
```

Verifique lo siguiente:

* Si el pod está en estado `ImagePullBackOff`, verifique su conexión de red para permitir la extracción de imágenes desde el [dominio correcto](/docs/new-relic-solutions/get-started/networks).

* Si el pod está en estado `Pending` o `ContainerCreating`, ejecute estos comandos para averiguar las posibles razones en el [log de depuración](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/#verbose-logging):

```bash
kubectl logs newrelic-bundle-nrk8s-kubelet-n newrelic
kubectl logs newrelic-bundle-nrk8s-kubelet-n newrelic -c kubelet
```