---
title: 欠損ノード
type: troubleshooting
tags:
  - Integrations
  - Kubernetes integration
  - Troubleshooting
metaDescription: Some troubleshooting tips if you are not seeing data show up for your New Relic's Kubernetes integration.
freshnessValidatedDate: never
translationType: machine
---

## 問題

[インフラストラクチャエージェントをプロイメントし](/docs/infrastructure/infrastructure-monitoring/get-started/choose-infra-install-method/)、 [Kubernetesインストール手順](/install/kubernetes/)を完了しましたが、すべてのノードが表示されません。

## 解決

以下の手順に従ってください。

1. 次のコマンドを実行して、各ノードでインフラストラクチャ エージェントをスケジュールできることを確認します。

```shell
  kubectl describe daemonset RELEASE_NAME-nrk8s-kubelet
```

<Callout variant="caution">
  Kubernetesインテグレーションの V2 バージョンでは、このコマンドが変更されることに注意してください。 [欠落ノード（バージョン 2）](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/k8s-version2/troubleshooting/missing-nodes)を参照してください。
</Callout>

2. すべてのノードの時刻が正確であることを確認します。 2 分以上進んでいるノードまたは遅れているノードは、クラスター エクスプローラーに表示されません。 これが当てはまるかどうかを確認するには、次の NRQL クエリを使用できます。

```sql
FROM K8sNodeSample
SELECT latest(nr.ingestTimeMs - timestamp) / 1000 AS 'Clock offset seconds' FACET nodeName
LIMIT max SINCE 1 DAY AGO
```

3. クラスタ エクスプローラに表示されないノードの[インフラストラクチャ エージェントからログを取得し](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/get-logs-version/)、 [エラー メッセージ](/docs/kubernetes-pixie/kubernetes-integration/troubleshooting/common-error-messages/error-messages)がないことを確認します。