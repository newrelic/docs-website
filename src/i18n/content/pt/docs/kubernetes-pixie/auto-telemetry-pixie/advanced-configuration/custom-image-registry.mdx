---
title: Registro de imagem Docker personalizado
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

Você pode usar o Pixie se o seu ambiente exigir o uso de um registro de imagem Docker personalizado.

Durante a instalação, utilize o Helm para apontar o contêiner Pixie para seu repositório customizado. Consulte o processo [de registro de imagens personalizadas](https://docs.pixielabs.ai/reference/admin/deploy-options/#custom-image-registry) para configurar as imagens personalizadas.

Se desejar usar um registro personalizado, adicione o seguinte parâmetro ao gráfico do Helm `newrelic-bundle` durante a instalação:

```sh
--set pixie-chart.registry="YOUR_REGISTRY_URL"
```

Por exemplo, se você deseja configurar o Pixie para usar um registro AWS ECR, anexe o seguinte parâmetro de configuração com o ID e a região reais da sua conta da AWS ao comando de instalação do Helm ou de atualização do Helm.

```sh
--set pixie-chart.registry="AWS_ACCOUNT_ID.dkr.ecr.AWS_REGION.amazonaws.com"
```

Se estiver executando uma instalação totalmente nova, você precisará anexar `pixie-chart.registry` ao comando `helm upgrade --install` que fornece a instalação guiada do New Relic.

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

Use o seguinte se estiver atualizando uma instalação existente:

```sh
helm upgrade newrelic-bundle newrelic/nri-bundle --reuse-values -n newrelic --set pixie-chart.registry="YOUR_REGISTRY_URL"
```

Inclua o seguinte se estiver usando um arquivo `values.yaml` para configurar seu gráfico do Helm:

```yml
pixie-chart:
  registry: "YOUR_REGISTRY_URL"
```