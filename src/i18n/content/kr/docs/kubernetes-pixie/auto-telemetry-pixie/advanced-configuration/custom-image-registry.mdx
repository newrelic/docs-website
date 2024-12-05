---
title: 커스텀 도커 이미지 레지스트리
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

환경에서 사용자 지정 Docker 이미지 레지스트리를 사용해야 하는 경우 Pixie를 사용할 수 있습니다.

설치하는 동안 Helm을 사용하여 Pixie 컨테이너가 사용자 지정 저장소를 가리키도록 합니다. 사용자 정의 이미지 설정에 대한 [사용자 정의 이미지 레지스트리](https://docs.pixielabs.ai/reference/admin/deploy-options/#custom-image-registry) 프로세스를 참조하십시오.

사용자 지정 레지스트리를 사용하려면 설치하는 동안 `newrelic-bundle` Helm 차트에 다음 매개변수를 추가하세요.

```sh
--set pixie-chart.registry="YOUR_REGISTRY_URL"
```

예를 들어, AWS ECR 레지스트리를 사용하도록 Pixie를 구성하려면 실제 AWS 계정 ID 및 리전과 함께 다음 구성 매개변수를 Helm 설치 또는 Helm 업그레이드 명령에 추가하십시오.

```sh
--set pixie-chart.registry="AWS_ACCOUNT_ID.dkr.ecr.AWS_REGION.amazonaws.com"
```

완전히 새로 설치하는 경우 New Relic의 안내 설치를 제공하는 `helm upgrade --install` 명령에 `pixie-chart.registry` 를 추가해야 합니다.

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

기존 설치를 업그레이드하는 경우 다음을 사용하십시오.

```sh
helm upgrade newrelic-bundle newrelic/nri-bundle --reuse-values -n newrelic --set pixie-chart.registry="YOUR_REGISTRY_URL"
```

Helm 차트를 구성하기 위해 `values.yaml` 파일을 사용하는 경우 다음을 포함합니다.

```yml
pixie-chart:
  registry: "YOUR_REGISTRY_URL"
```