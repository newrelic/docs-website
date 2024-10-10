---
title: カスタム Docker イメージ レジストリ
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

環境でカスタム Docker イメージ レジストリを使用する必要がある場合は、Pixie を使用できます。

インストール中に、Helm を使用して Pixie コンテナーをカスタム リポジトリーにポイントします。カスタム イメージの設定については、[カスタム イメージ レジストリ](https://docs.pixielabs.ai/reference/admin/deploy-options/#custom-image-registry)プロセスを参照してください。

カスタム レジストリを使用する場合は、インストール中に次のパラメータを`newrelic-bundle` Helm チャートに追加します。

```sh
--set pixie-chart.registry="YOUR_REGISTRY_URL"
```

たとえば、AWS ECR レジストリを使用するように Pixie を設定する場合は、次の設定パラメータを実際の AWS アカウント ID とリージョンと共に Helm インストールまたは Helm アップグレード コマンドに追加します。

```sh
--set pixie-chart.registry="AWS_ACCOUNT_ID.dkr.ecr.AWS_REGION.amazonaws.com"
```

まったく新しいインストールを実行している場合は、New Relic のガイド付きインストールを提供する`helm upgrade --install`コマンドに`pixie-chart.registry`を追加する必要があります。

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

既存のインストールをアップグレードする場合は、次を使用します。

```sh
helm upgrade newrelic-bundle newrelic/nri-bundle --reuse-values -n newrelic --set pixie-chart.registry="YOUR_REGISTRY_URL"
```

Helm チャートの構成に`values.yaml`ファイルを使用している場合は、以下を含めます。

```yml
pixie-chart:
  registry: "YOUR_REGISTRY_URL"
```