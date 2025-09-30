---
title: Kubecost による Kubernetes コストの可観測性
tags:
  - Integrations
  - Kubernetes integration
  - Kubecost
  - Cost observability
  - Opencost
metaDescription: Understand the costs associated with your Kubernetes resources
freshnessValidatedDate: '2023-08-12T00:00:00.000Z'
translationType: machine
---

<Callout title="プレビュー">
  この機能はまだ開発中ですが、ぜひお試しください。

  この機能は現在、弊社の[プレリリース ポリシー](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy)に従ってプレビュー プログラムの一部として提供されています。
</Callout>

New Relic と [Kubecost](https://kubecost.github.io/cost-analyzer/)を使用すると、各 Kubernetes リソースに関連するコストを理解できます。

実用的な洞察:

* クラスターのコストの主な要因 (CPU、ストレージ、下りなど) は何ですか?
* クラスター内の最近のコスト増加を引き起こしているノードはどれですか?
* アプリケーションのワークロードの名前空間ごとのコストの内訳は何ですか?
* クラウド プロバイダーから提供された価格/割引に基づいてコスト見積もりを調整するにはどうすればよいですか?

## 始めましょう

このガイドは、Kubecost にバンドルされている Prometheus サーバーを使用することを前提としています。このガイドの範囲外ですが、独自のものを使用することもできます。

New Relic で`Remote Write`エンドポイントを作成する必要があります。これは、このページの緑色の \[Prometheus データの追加] ボタンをクリックすることで実行できます。ベアラートークンが使用されることに注意してください。[プロメテウスのリモート書き込み](/docs/infrastructure/prometheus-integrations/install-configure-remote-write/set-your-prometheus-remote-write-integration/)

### Prometheus リモート書き込みのセットアップ

1. Prometheus データを受信するアカウントを選択します。
2. データソースに名前を付けます (例: `kubecost` 。
3. 次の一連の手順で使用する URL とベアラー トークンを生成します。

### Kubecost エージェントをクラスターにインストールする

次に、Helm 経由で Kubecost エージェントをインストールします。

1. Kubecost エージェントのインストール用のテンプレート YAML ファイルをダウンロードします。それを `kubecost-values.yaml`に保存します。

   ```yaml
   prometheus:
     serverFiles:
       prometheus.yml:
         remote_write:
         - url: https://metric-api.newrelic.com/prometheus/v1/write?prometheus_server=YOUR_CLUSTER_NAME
           bearer_token: YOUR_BEARER_TOKEN
     server:
       global:
         external_labels:
           cluster_id: YOUR_CLUSTER_NAME
   kubecostProductConfigs:
     clusterName: YOUR_CLUSTER_NAME
   ```

2. 選択したエディタで `kubecost-values.yaml` を開きます。

3. 前の手順でリモート書き込みエンドポイントをコピーして貼り付け、5 行目と 6 行目を置き換えます。

4. 両方の`YOUR_CLUSTER_NAME`エントリをクラスターの名前に置き換えます。

5. 以下の Helm コマンドを実行して Kubecost エージェントをクラスターに追加し、New Relic へのデータの送信を開始します。

   ```shell
   helm upgrade --install kubecost \
   --repo https://kubecost.github.io/cost-analyzer/ cost-analyzer \
   --namespace kubecost --create-namespace \
   --values kubecost-values.yaml
   ```

6. 数分お待ちください。 リモート書き込みを設定した前のタブで、 <DNT>**See your data**</DNT>ボタンをクリックしてデータが受信されたかどうかを確認します。

7. データをクエリします。

   ```sql
   SELECT sum(`Total Cost($)`) AS 'Total Monthly Cost'
   FROM (FROM Metric SELECT (SELECT sum(`total_node_cost`)
   FROM (FROM Metric SELECT (average(kube_node_status_capacity_cpu_cores) * average(node_cpu_hourly_cost)
   * 730 + average(node_gpu_hourly_cost)
   * 730 + average(kube_node_status_capacity_memory_bytes) / 1024 / 1024 / 1024
   * average(node_ram_hourly_cost) * 730) AS 'total_node_cost' FACET node))
   + (SELECT (sum(acflb) / 1024 / 1024 / 1024 * 0.04) AS 'Container Cost($)'
   FROM (SELECT (average(container_fs_limit_bytes) * cardinality(container_fs_limit_bytes)) AS 'acflb'
   FROM Metric WHERE (NOT ((device = 'tmpfs')) AND (id = '/'))))
   + (SELECT sum(aphc * 730 * akpcb / 1024 / 1024 / 1024) AS 'Total Persistent Volume Cost($)'
   FROM (FROM Metric SELECT average(pv_hourly_cost)
   AS 'aphc', average(kube_persistentvolume_capacity_bytes) AS 'akpcb' FACET persistentvolume, instance))
   AS 'Total Cost($)')
   ```

Kubecost のドキュメントに従って、 [Ingress で Kubecost UI を公開](https://docs.kubecost.com/install-and-configure/install/ingress-examples)できます。
