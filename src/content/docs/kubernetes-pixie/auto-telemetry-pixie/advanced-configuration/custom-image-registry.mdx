---
title: Custom Docker image registry
tags:
  - Pixie Auto-telemetry
  - Docker
  - Kubernetes pods
  - Kubernetes
  - Manage Pixie data
metaDescription: How to use a custom Docker image registry with Pixie
freshnessValidatedDate: never
---

You can use Pixie if your environment requires the use of a custom Docker image registry.

During the installation, use Helm to point the Pixie containers at your custom repositories. See the [Custom Image Registry](https://docs.pixielabs.ai/reference/admin/deploy-options/#custom-image-registry) process for setting up the custom images.

If you want to use a custom registry, add the following parameters to your `newrelic-bundle` Helm chart during installation:

```sh
--set pixie-chart.registry="YOUR_REGISTRY_URL"
```

For example, if you want to configure Pixie to use an AWS ECR registry, append the following configuration parameter with your actual AWS account ID and region to your Helm install or Helm upgrade command.

```sh
--set pixie-chart.registry="AWS_ACCOUNT_ID.dkr.ecr.AWS_REGION.amazonaws.com"
```

If you're performing a brand new install, you need to append `pixie-chart.registry` to the `helm upgrade --install` command that provides the guided install of New Relic.

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

Use the following if you're upgrading an existing install:

```sh
helm upgrade newrelic-bundle newrelic/nri-bundle --reuse-values -n newrelic --set pixie-chart.registry="YOUR_REGISTRY_URL"
```

Include the following if you're using a `values.yaml` file to configure your Helm chart:

```yml
pixie-chart:
  registry: "YOUR_REGISTRY_URL"
```
