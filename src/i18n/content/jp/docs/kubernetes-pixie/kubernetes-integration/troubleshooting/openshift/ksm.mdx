---
title: KSM メトリクスの入力エラー
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
  - OpenShift
metaDescription: Some troubleshooting tips if KSM metrics aren't being populated
freshnessValidatedDate: '2024-12-09T00:00:00.000Z'
translationType: machine
---

## 問題

Kubernetesインテグレーションには `kube-state-metrics` が必要です。 これが欠落しているか複数存在する場合は、 `nrk8s-ksm`コンテナ ログに次のようなエラーが表示されることがあります。

```shell
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, querying KSM: getting filtered metric families: error calling prometheus exposed metrics endpoint. Got status code: 400"
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, querying KSM: getting filtered metric families: error calling prometheus exposed metrics endpoint. Got status code: 400"
time="2024-10-18T04:04:21Z" level=warning msg="Error populating KSM metrics: populate errors:, no data was populated"
time="2024-10-18T04:04:21Z" level=error msg="retrieving scraper data: retrieving ksm data: KSM data was not populated after trying all endpoints"
```

## 解決

次のことを試してください。

* [「kube-state-Metrix の検出に失敗しました」](/docs/kubernetes-pixie/kubernetes-integration/troubleshooting/common-error-messages/failed-discover-kube)で提案を参照してください。
* `kube-state-metrics`コンテナの**namespace** \[ネームスペース]を指定します。 デフォルトでは、 Kubernetesインテグレーション バンドルは `newrelic` ネームスペースに作成します。

```yaml
newrelic-infrastructure:
  ksm:
    enabled: true
    config:
      selector: "app.kubernetes.io/name=kube-state-metrics"
      namespace: "newrelic"
```