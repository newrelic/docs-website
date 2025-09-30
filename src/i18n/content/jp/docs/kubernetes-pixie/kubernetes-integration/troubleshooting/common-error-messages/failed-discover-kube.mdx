---
title: kube-state-metricsの検出に失敗しました。
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if kube-state-metrics is not found.
freshnessValidatedDate: '2024-09-02T00:00:00.000Z'
translationType: machine
---

## 問題

Kubernetesインテグレーションには `kube-state-metrics` が必要です。 これが欠落している場合は、 `nrk8s-ksm`コンテナ ログに次のようなエラーが表示されます。

```shell
  time="2022-06-21T09:12:20Z" level=error msg="retrieving scraper data: retrieving ksm data: discovering KSM endpoints: timeout discovering endpoints"
```

## 解決

次の点をチェックします。

* `kube-state-metrics` クラスターにデプロイされていません。
* `kube-state-metrics` カスタム展開を使用して展開されます。
* `kube-state-metrics`の複数のバージョンが実行されており、Kubernetes統合が正しいバージョンを検出していません。

Kubernetesインテグレーションはクラスタ内の `kube-state-metrics` を自動的に検出し、デフォルトですべてのネームスペースにわたってラベル `app.kubernetes.io/name=kube-state-metrics` を使用します。

<Callout variant="tip">
  [Helm チャート](https://github.com/newrelic/nri-kubernetes/blob/main/charts/newrelic-infrastructure/values.yaml)値の`ksm.config`で検出動作を変更できます。
</Callout>