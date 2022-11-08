---
title: Using a custom Docker image registry with Pixie
tags:
  - Pixie Auto-telemetry
  - Docker
  - Kubernetes pods
  - Kubernetes
  - manage Pixie data
metaDescription: 
redirects:
  - /docs/auto-telemetry-pixie/custom-image-registry
---

If your environment requires use of a custom Docker image registry, Pixie supports configuration for this. During install, use Helm to point the Pixie containers at your custom repositories. Please also refer to the process described in Pixie documentation for [https://docs.pixielabs.ai/reference/admin/deploy-options/#custom-image-registry](setting up the custom images).

## Use a custom Docker image registry [#use-custom-registry]

If you want to use a custom registry, add the following parameters to your Helm chart during installation:

* `registry` - use to identify the custom image registry. For example:

  ```
  --set pixie-chart.registry="[YOUR REGISTRY URL]"
  ```

For example, if you wanted to configure Pixie to use an AWS ECR registry, append the following config parameter with your actual AWS account ID and region to your Helm install or Helm upgrade command.

```
  --set pixie-chart.registry="[AWS ACCOUNT ID].dkr.ecr.[AWS REGION].amazonaws.com"
```


If you're performing a brand new install, you'll need to append `pixie-chart.registry` to the `helm upgrade --install` command provided by New Relic's guided install:

```
helm repo add newrelic https://helm-charts.newrelic.com && helm repo update && \
kubectl create namespace newrelic ; helm upgrade --install newrelic-bundle newrelic/nri-bundle \
 --set global.licenseKey=[NEW RELIC API KEY FROM GUIDED INSTALL] \
 --set global.cluster=[YOUR CLUSTER NAME] \
 --namespace=newrelic \
 --set newrelic-infrastructure.privileged=true \
 --set global.lowDataMode=true \
 --set ksm.enabled=true \
 --set kubeEvents.enabled=true \
 --set newrelic-pixie.enabled=true \
 --set newrelic-pixie.apiKey=[PIXIE API KEY FROM GUIDED INSTALL] \
 --set pixie-chart.enabled=true \
 --set pixie-chart.deployKey=[PIXIE DEPLOY KEY FROM GUIDED INSTALL] \
 --set pixie-chart.clusterName=[YOUR CLUSTER NAME] \
 --set pixie-chart.registry="[YOUR REGISTRY URL]"
 ```

If you're just upgrading an existing install, then this is a much simpler approach:

```
helm upgrade newrelic-bundle newrelic/nri-bundle --reuse-values -n newrelic --set pixie-chart.registry="[YOUR REGISTRY URL]"
```

And if you're using a values.yaml file to configure your Helm chart, include this setting:

```
pixie-chart:
  registry: "[YOUR REGISTRY URL]"
```
