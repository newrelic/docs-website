---
title: 取り込むデータを削減
tags:
  - Integrations
  - Kubernetes integration
  - Understand and use data
metaDescription: 'New Relic''s Kubernetes integration: How to reduce the data ingested.'
freshnessValidatedDate: '2024-07-09T00:00:00.000Z'
translationType: machine
---

[データの取り込み](/docs/data-apis/manage-data/manage-data-coming-new-relic/)を見直し、送信するデータ量を減らして取り込むデータ量を減らしたい場合は、次のソリューションをご利用いただけます。

* セット `global.lowDataMode`
* スクラップ間隔の変更
* フィルターネームスペース

それぞれのオプションについて説明しましょう。

## 設定により取り込むデータを削減 `global.lowDataMode` [#reduce-data-ingest]

コストを削減したい場合は、 `global.lowDataMode`値を変更できます。 これにより、送信するメトリクスの数が削減されます。 この コンテナーの変更は、 Kubernetesインストールに使用した方法によって異なります。

* **ガイド付きインストール**(New Relic CLI、Helm、マニフェスト)。 インストレーション コマンドには、引数`NRI_CLI_LOW_DATA_MODE` 、 `NRI_CLI_PROMETHEUS_AGENT_LOW_DATA_MODE` 、 `NRI_CLI_LOGGING_LOW_DATA_MODE`があるため、デフォルトで`lowDataMode`含まれます。
* **Helm**。 [`nri-bundle`チャート](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle)の`global.lowDataMode`を true に設定します。
* **Manifest**。 `LowDataMode` Helm チャート専用であり、Helms チャートはマニフェストに適用されるテンプレートです。 誰かが Helm チャートに`LowDataMode`を適用すると、最終的なマニフェストにいくつかの小さな変更が加えられます。 マニフェストの変更は特定の設定に関するものですが、 `LowDataMode`という名前のインスタンスには適用されません。

`lowDataMode`は、 [`nri-bundle`](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle)チャートの次の特定のコンポーネントに影響します。

<CollapserGroup>
  <Collapser
    id="nr-infra"
    title="New Relicのインフラ"
  >
    `lowDataMode`が有効になっている場合、デフォルトのスクレイプ間隔は`15s`から`30s`に変更されます。 `config.interval`を使用してカスタム値を指定することもできます。これは`lowDataMode`よりも優先されます。
  </Collapser>

  <Collapser
    id="prometheus-agent"
    title="プロメテウスエージェントインテグレーション"
  >
    `lowDataMode`を有効にすると、デフォルトでこれらのプレフィックスで始まるメトリックが除外されます: `kube_` 、 `container_` 、 `machine_` 、または`cadvisor_` 。 これは、 New Relic Kubernetesインテグレーションがすでに収集して使用しているためです。
  </Collapser>

  <Collapser
    id="nr-logging"
    title="New Relic のログ記録"
  >
    `lowDataMode`を有効にすると、New Relic に転送されるログからラベルと注釈が除外されます。 これにより、New Relic への全体的なデータ取り込みが削減されます。 次のフィールドを保持します: `cluster_name` 、 `container_name` 、 `namespace_name` 、 `pod_name` 、 `stream` 、 `message` 、 `log` 。

    このログ レコードには[、 New Relic Kubernetesプラグインが](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding/)通常ログにキャプチャするすべての属性が表示されます。

    ```json
    [
    {
        "cluster_name": "api-test",
        "kubernetes": {
        "annotations": {
            "kubernetes.io/psp": "eks.privileged"
        },
        "container_hash": "fryckbos/test@sha256:5b098eaf3c7d5b3585eb10cebee63665b6208bea31ef31a3f0856c5ffdda644b",
        "container_image": "fryckbos/test:latest",
        "container_name": "newrelic-logging",
        "docker_id": "134e1daf63761baa15e035b08b7aea04518a0f0e50af4215131a50c6a379a072",
        "host": "ip-192-168-17-123.ec2.internal",
        "labels": {
            "app": "newrelic-logging",
            "app.kubernetes.io/name": "newrelic-logging",
            "controller-revision-hash": "84db95db86",
            "pod-template-generation": "1",
            "release": "nri-bundle"
        },
        "namespace_name": "nrlogs",
        "pod_id": "54556e3e-719c-46b5-af69-020b75d69bf1",
        "pod_name": "nri-bundle-newrelic-logging-jxnbj"
        },
        "message": "[2021/09/14 12:30:49] [ info] [engine] started (pid=1)\n",
        "plugin": {
        "source": "kubernetes",
        "type": "fluent-bit",
        "version": "1.8.1"
        },
        "stream": "stderr",
        "time": "2021-09-14T12:30:49.138824971Z",
        "timestamp": 1631622649138
    }
    ]
    ```

    `lowDataMode`を有効にした後の前のログ レコードは次のようになります。

    ```json
    [
    {
        "cluster_name": "api-test",
        "container_name": "newrelic-logging",
        "namespace_name": "nrlogs",
        "pod_name": "nri-bundle-newrelic-logging-jxnbj",
        "message": "[2021/09/14 12:30:49] [ info] [engine] started (pid=1)\n",
        "stream": "stderr",
        "timestamp": 1631622649138
    }
    ]
    ```
  </Collapser>

  <Collapser
    id="nr-pixie-integration"
    title="New Relic Pixie インテグレーション"
  >
    `lowDataMode`を有効にすると、 `newrelic-pixie`インテグレーションは Pixie スパンのサンプリングをより頻繁に実行し、データの収集頻度が低くなります (10 秒から 15 秒に)。 これらは`lowDataMode`設定です:

    ```
    HTTP_SPAN_LIMIT: 750
    DB_SPAN_LIMIT: 250
    COLLECT_INTERVAL_SEC: 15
    ```

    これらの 構造体 およびその他のデフォルト設定は[、newrelic-pixie-インテグレーション](https://github.com/newrelic/newrelic-pixie-integration)Github リポジトリ で確認できます。
  </Collapser>
</CollapserGroup>

## スクレイピング間隔を変更して取り込むデータを削減する [#scrape-interval]

New Relic Kubernetesインテグレーションでは、クラスタからメトリックを収集する際のスクレイピング間隔を変更することができます。 これにより、データの解像度と使用量の適切なバランスを選択できます。 最良のエクスペリエンスを得るには、15 ～ 30 秒のスクレイピング間隔を選択することをお勧めします。

<Callout variant="tip">
  `lowDataMode`では、スクレイプ間隔がすでに 30 秒に設定されています。
</Callout>

スクレイプ間隔を変更する方法は、Kubernetes のインストールに使用した方法によって異なります。

* **ガイド付きインストール**( New Relic CLI、Helm、マニフェスト): ガイド付きインストール フローに従ってこの値を変更することはできません。
* **Helm** : [`nri-bundle`チャート](https://github.com/newrelic/helm-charts/tree/master/charts/nri-bundle)のスクレイプ間隔を必要な値に設定します。
* **Manifest**: マニフェスト構成 YAML ファイル内のスクレイプ間隔を必要な値に設定します。 [インストール手順](/install/kubernetes/?dropdown1=manifest)に従った場合、ファイル名は`newrelic-manifest.yaml`になります。

Helm またはマニフェストを使用していて、スクレイプ間隔を変更する場合は、 `newrelic-infrastructure`セクションの下に間隔値を追加するだけです。 Helm でどのように見えるかを確認するには、 `values-newrelic.yaml`ファイルのこの例を見てください。

```yaml
global:
  licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
  cluster: _K8S_CLUSTER_NAME_

# ... Other settings

# Configuration for newrelic-infrastructure
newrelic-infrastructure:
  # ... Other settings
  common:
    config:
      interval: 25s
```

<Callout variant="important">
  [Kubernetes](/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/#navigator-preview) [](/docs/kubernetes-pixie/kubernetes-integration/understand-use-data/kubernetes-cluster-explorer/#cluster-explorer-use)ナビゲーター の代わりに クラスター エクスプローラー を使用している場合は、`interval` より大きい値に設定できないことに注意してください。`40s`
</Callout>

## フィルタリングにより取り込まれるデータを削減 [#filter-namespace]

ネームスペースにラベルを付けて、 Kubernetesインテグレーションがスクレイピングするネームスペースをフィルタリングできます。 すべてのネームスペースはデフォルトでスクレイピングされます。

Kubernetes と同じように`namespaceSelector`使用します。 ラベルに一致するネームスペースのみを含めるには、 `namespaceSelector`を変更するだけです。 `values-newrelic.yaml`ファイルの`newrelic-infrastructure`セクションに次のコードを追加します。

```yaml
common:
  config:
    namespaceSelector:
      matchLabels:
        key1 : "value1"
```

### ネームスペースの例 [#include-namespaces]

<CollapserGroup>
  <Collapser
    id="namespaces-label-true"
    title={<>ラベル<InlineCode>newrelic.com/scrape</InlineCode>が設定されたネームスペースでネームスペースをスクレイピングする <InlineCode>true</InlineCode></>}
  >
    ```yaml
    global:
    licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
    cluster: _K8S_CLUSTER_NAME_

    # ... Other settings 

    # Configuration for newrelic-infrastructure
    newrelic-infrastructure:
    # ... Other settings 
    common:
        config:
        namespaceSelector:
            matchLabels:
            newrelic.com/scrape: "true"
    ```
  </Collapser>

  <Collapser
    id="k8s-expressions"
    title="Kubernetes式を使用してネームスペースを含めるか除外する"
  >
    次の構文を使用して、 Kubernetes式を使用してネームスペースを含めたり除外したりすることもできます。

    ```yaml
    common:
    config:
        namespaceSelector:
        matchExpressions:
        - {key: newrelic.com/scrape, operator: NotIn, values: ["false"]}
        - {key: key1, operator: In, values: ["value1"]}
    ```

    <Callout variant="tip">
      `matchExpressions`の下の式は連結されます。
    </Callout>
  </Collapser>

  <Collapser
    id="exclude-namespaces"
    title={<>ラベル<InlineCode>newrelic.com/scrape</InlineCode>が設定されているネームスペースを除外する <InlineCode>false</InlineCode></>}
  >
    ```yaml
    global:
    licenseKey: _YOUR_NEW_RELIC_LICENSE_KEY_
    cluster: _K8S_CLUSTER_NAME_

    # ... Other settings 

    # Configuration for newrelic-infrastructure
    newrelic-infrastructure:
    # ... Other settings
    common:
        config:
        namespaceSelector:
            matchExpressions:
            - {key: newrelic.com/scrape, operator: NotIn, values: ["false"]}
    ```
  </Collapser>
</CollapserGroup>

変更できる設定の完全なリストは、[チャートの README ファイル](https://github.com/newrelic/nri-kubernetes/tree/main/charts/newrelic-infrastructure)で確認できます。

### どの名前空間が除外されているかを確認するにはどうすればよいですか? [#excluded-namespaces]

`K8sNamespace`サンプルは、クラスタ内のすべてのネームスペースを表示します。 `nrFiltered`プロパティは、ネームスペースに関連するデータをスクレイピングするかどうかを決定します。 このクエリは、どのネームスペースがモニターされているかを表示します。

```sql
FROM K8sNamespaceSample SELECT displayName, nrFiltered WHERE clusterName = <clusterName> SINCE 2 MINUTES AGO
```

### 除外された名前空間からどのデータが破棄されていますか？ [#namespaces-discarded-data]

これらのサンプルは、除外されたネームスペースでは利用できません。

* `K8sContainerSample`
* `K8sDaemonsetSample`
* `K8sDeploymentSample`
* `K8sEndpointSample`
* `K8sHpaSample`
* `K8sPodSample`
* `K8sReplicasetSample`
* `K8sServiceSample`
* `K8sStatefulsetSample`
* `K8sVolumeSample`
