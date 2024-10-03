---
title: バージョン 2 のノードが見つかりません
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration v2
  - Troubleshooting
metaDescription: Some troubleshooting tips if you're not seeing data show up for your New Relic's Kubernetes integration.
freshnessValidatedDate: never
translationType: machine
---

## 問題

[インフラストラクチャエージェントをプロイメントし](/docs/infrastructure/infrastructure-monitoring/get-started/choose-infra-install-method/)、 [Kubernetesインストール手順](/install/kubernetes/)を完了しましたが、すべてのノードが表示されません。

## 解決

以下の手順に従ってください。

1. 次のコマンドを実行して、各ノードでインフラストラクチャ エージェントをスケジュールできることを確認します。

```shell
  kubectl describe daemonset newrelic-infra
```

2. すべてのノードの時刻が正確であることを確認します。2 分以上進んでいる、または遅れているノードは、クラスタ・エクスプローラに表示されません。以下の NRQL クエリを使用して、この問題が発生しているかどうかを確認できます。

```sql
FROM K8sNodeSample
SELECT latest(nr.ingestTimeMs - timestamp) / 1000 AS 'Clock offset seconds'
FACET nodeName LIMIT max SINCE 1 DAY AGO
```

3. [クラスタ エクスプローラに表示されないノードのインフラストラクチャ エージェントからログを取得し](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/overview/#logs-version2)、[エラー メッセージ](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/errors/)がないことを確認します。