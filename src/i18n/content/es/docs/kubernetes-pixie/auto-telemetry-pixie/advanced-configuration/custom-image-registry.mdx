---
title: Registro de imágenes docker personalizado
tags:
  - Pixie Auto-telemetry
  - Docker
  - Kubernetes pods
  - Kubernetes
  - Manage Pixie data
metaDescription: How to use a custom Docker image registry with Pixie
freshnessValidatedDate: never
translationType: machine
---

Puede utilizar Pixie si su entorno requiere el uso de un registro de imágenes docker personalizado.

Durante la instalación, use Helm para apuntar el contenedor Pixie a su repositorio personalizado. Consulte el proceso [de Registro de imágenes personalizadas](https://docs.pixielabs.ai/reference/admin/deploy-options/#custom-image-registry) para configurar las imágenes personalizadas.

Si desea utilizar un registro personalizado, agregue el siguiente parámetro a su gráfico de timón `newrelic-bundle` durante la instalación:

```sh
--set pixie-chart.registry="YOUR_REGISTRY_URL"
```

Por ejemplo, si desea configurar Pixie para utilizar un registro de AWS ECR, agregue el siguiente parámetro de configuración con su ID de cuenta de AWS y región reales a su comando de instalación o actualización de Helm.

```sh
--set pixie-chart.registry="AWS_ACCOUNT_ID.dkr.ecr.AWS_REGION.amazonaws.com"
```

Si está realizando una instalación nueva, debe agregar `pixie-chart.registry` al comando `helm upgrade --install` que proporciona la instalación guiada de New Relic.

```sh
helm repo add newrelic https://helm-charts.newrelic.com && helm repo update && \
  kubectl create namespace newrelic ; helm upgrade --install newrelic-bundle newrelic/nri-bundle \
  --set global.licenseKey=NR_LICENSE_KEY \
  --set global.cluster=YOUR_CLUSTER_NAME \
  --namespace=newrelic \
  --set newrelic-infrastructure.privileged=true \
  --set global.lowDataMode=true \
  --set ksm.enabled=true \
  --set kubeEvents.enabled=true \
  --set newrelic-pixie.enabled=true \
  --set newrelic-pixie.apiKey=PIXIE_API_KEY \
  --set pixie-chart.enabled=true \
  --set pixie-chart.deployKey=PIXIE_DEPLOY_KEY \
  --set pixie-chart.clusterName=YOUR_CLUSTER_NAME \
  --set pixie-chart.registry="YOUR_REGISTRY_URL"
```

Utilice lo siguiente si está actualizando una instalación existente:

```sh
helm upgrade newrelic-bundle newrelic/nri-bundle --reuse-values -n newrelic --set pixie-chart.registry="YOUR_REGISTRY_URL"
```

Incluya lo siguiente si está utilizando un archivo `values.yaml` para configurar su gráfico Helm:

```yml
pixie-chart:
  registry: "YOUR_REGISTRY_URL"
```