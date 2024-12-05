---
title: Kubernetes 統合バージョン 3 で導入された変更
tags:
  - Integrations
  - Kubernetes integration
  - Changelog
metaDescription: Changes introduced in Kubernetes integration version 3
freshnessValidatedDate: never
translationType: machine
---

バージョン 3 の時点で、New Relic Kubernetes 統合は、よりモジュール化して構成可能にすることを目的とした [アーキテクチャ](/docs/kubernetes-pixie/kubernetes-integration/get-started/kubernetes-components/#architecture) を特徴としており、デプロイ方法をより多く選択できるようになり、より多くの環境と互換性が得られます。

Kubernetes 統合バージョン 3 によって報告されるデータは、バージョン 2 から変更されていません。バージョン 3 では、構成可能性、安定性、およびユーザー エクスペリエンスに重点を置きました。統合に関する最新のリリース ノートは [、こちらを](/docs/release-notes/infrastructure-release-notes/kubernetes-integration-release-notes/)参照してください。

<Callout variant="important">
  Kubernetesインテグレーション バージョン 3 (`appVersion`) は、 [`nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle)チャート `version` に含まれています 4.
</Callout>

## マイグレーションガイド [#migration-guide]

以前のバージョンからの移行をできるだけ簡単にするために、古い `newrelic-infrastructure` チャートの構成可能なオプションのほとんどを新しい対応するものに変換する互換性レイヤーを開発しました。この互換性レイヤーは一時的なもので、将来削除される予定です。このガイドを注意深く読み、人間の監督の下で構成を移行することをお勧めします。更新された `newrelic-infrastructure` グラフの詳細については [、こちらを](https://github.com/newrelic/nri-kubernetes/tree/main/charts/newrelic-infrastructure#newrelic-infrastructure)ご覧ください。

### Kube State Metrics (KSM) 構成 [#ksm-config]

<Callout variant="tip">
  KSM 監視は、ほとんどの構成でそのまま使用できます。ほとんどのユーザーはこの設定を変更する必要はありません。
</Callout>

* `disableKubeStateMetrics` `ksm.enabled`に置き換えられました。デフォルトは同じです（KSMスクレイピングが有効）。
* `kubeStateMetricsScheme`、 `kubeStateMetricsPort` 、 `kubeStateMetricsUrl` 、 `kubeStateMetricsPodLabel` 、および`kubeStateMetricsNamespace`は、より包括的で柔軟な`ksm.config`に置き換えられました。
* 注意: KSM v2+ では、ラベル メトリックはデフォルトで無効になっています。 [ここで](https://github.com/kubernetes/kube-state-metrics/blob/main/docs/developer/cli-arguments.md)説明する `metric-labels-allowlist` オプションをKubernetesクラスタで使用することで、ターゲット ラベル メトリックをモニターできるようになります。

`ksm.config`オブジェクトの構造は次のとおりです。

```yaml
ksm:
  config:
    # When autodiscovering KSM, force the following scheme. By default, `http` is used.
    scheme: "http"
    # Label selector to find kube-state-metrics endpoints. Defaults to `app.kubernetes.io/name=kube-state-metrics`.
    selector: "app.kubernetes.io/name=kube-state-metrics"
    # Restrict KSM discovery to this particular namespace. Defaults to all namespaces.
    namespace: ""
    # When autodiscovering, only consider endpoints that use this port. By default, all ports from the discovered `endpoint` are probed.
    # port: 8080
    # Override autodiscovery mechanism completely and specify the KSM url directly instead
    # staticUrl: "http://test.io:8080/metrics"
```

### コントロールプレーンの構成 [#controlplane-configuration]

コントロール プレーンの構成が大幅に変更されました。以前にコントロール プレーン監視を有効にしたことがある場合は、 [「コントロール プレーン監視の構成」](/docs/kubernetes-pixie/kubernetes-integration/advanced-configuration/configure-control-plane-monitoring) ドキュメントを参照することをお勧めします。

以下のオプションは、上記のリンク先のセクションで説明されている、より包括的な設定に置き換えられています。

* `apiServerSecurePort`
* `etcdTlsSecretName`
* `etcdTlsSecretNamespace`
* `controllerManagerEndpointUrl`、 `etcdEndpointUrl` 、 `apiServerEndpointUrl` 、および `schedulerEndpointUrl`

### エージェントの構成 [#agent-configuration]

以前に `config`で指定されていたエージェント構成ファイルは、 `common.agentConfig`に移動されました。ファイルの形式は変更されておらず、構成可能なオプションの全範囲は [ここに](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/)あります。

次のエージェント オプションは、以前は`values.yml`ファイルのルートに「エイリアス」されており、 <DNT>**no longer available**</DNT>です。

* `logFile` `common.agentConfig.log_file`に置き換えられました。
* `eventQueueDepth` `common.agentConfig.event_queue_depth`に置き換えられました。
* `customAttributes` 形式が yaml オブジェクトに変更されました。 以前の形式、つまり手動で JSON エンコードされた文字列 (例: `{"team": "devops"}` ) は非推奨です。
* 以前は、 `customAttributes` はデフォルトの `clusterName` エントリがあり、削除すると望ましくない結果が生じる可能性がありました。これはもう当てはまりません。ユーザーは、 `customAttributes` 全体を安全にオーバーライドできるようになりました。
* `discoveryCacheTTL` 組み込みキャッシュを持つ Kubernetes インフォーマーを使用して検出が実行されるようになったため、完全に削除されました。

### インテグレーションの設定 [#integrations-configuration]

統合は、以前は配列形式を使用して`integrations_config`で構成されていました。

```yaml
integrations_config:
  - name: nri-redis.yaml
    data:
      discovery:  # ...
      integrations:  # ...
```

仕組みは変わりませんが、より使いやすいようにフォーマットを変更しました。

```yaml
integrations:
  nri-redis-sampleapp:
    discovery:  # ...
    integrations:  # ...
```

さらに、検出コマンドでは `--port` フラグと `--tls` フラグが必須になりました。以前は、次のように機能していました。

```yaml
integrations:
  nri-redis-sampleapp:
    discovery:
      command:
        exec: /var/db/newrelic-infra/nri-discovery-kubernetes
```

v3以降では、 `--port`と`--tls`を指定する必要があります。

```yaml
integrations:
  nri-redis-sampleapp:
    discovery:
      command:
        exec: /var/db/newrelic-infra/nri-discovery-kubernetes --tls --port 10250
```

v2 以前では、 `nrk8s-kubelet` コンポーネント (または同等のもの) が `hostNetwork: true`で実行され、そのため、 `nri-discovery-kubernetes` `localhost` とプレーン http を使用して kubelet に接続できたため、この変更が必要です。セキュリティ上の理由から、これは当てはまりません。したがって、今後は両方のフラグを指定する必要があります。

Kubernetes でオンホスト統合を構成する方法の詳細については、 [Kubernetes の監視サービスの](/docs/kubernetes-pixie/kubernetes-integration/link-apps-services/monitor-services-running-kubernetes) ドキュメントを参照してください。

### その他のチャート値 [#misc-chart-values]

統合構成とは関係ありませんが、Helm チャートの次のその他のオプションも変更されました。

* `runAsUser` `securityContext`に置き換えられました。これは、ポッドに直接テンプレート化され、より構成可能です。

* `resources` 現在、3つの異なるワークロードを展開しているため、削除されました。それぞれのリソースは、以下で個別に構成できます。

  * `ksm.resources`
  * `kubelet.resources`
  * `controlPlane.resources`

* `tolerations` は 3 つに分割され、前の 1 つは無効になりました。デフォルトでは、3 つすべてが `NoSchedule` と `NoExecute`の任意の値を許容します。

  * `ksm.tolerations`
  * `kubelet.tolerations`
  * `controlPlane.tolerations`

* `image` そして、そのすべてのサブキーは、現在デプロイされている3つのイメージのそれぞれについて個別のセクションに置き換えられています。

  * `images.forwarder.*` インフラストラクチャエージェントフォワーダを設定します。
  * `images.agent.*` インフラストラクチャエージェントとオンホストの統合をバンドルするイメージを構成します。
  * `images.integration.*` k8sデータのスクレイピングを担当するイメージを構成します。
