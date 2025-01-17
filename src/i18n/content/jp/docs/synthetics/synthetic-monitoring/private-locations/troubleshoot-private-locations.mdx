---
title: プライベートロケーションのトラブルシューティング
tags:
  - Synthetics
  - Synthetic monitoring
  - Private locations
metaDescription: Troubleshooting tips if you encounter problems with private locations or private minions or job managers with synthetic monitoring in New Relic.
freshnessValidatedDate: never
translationType: machine
---

New Relic の合成モニタリング用に [プライベート ロケーション](/docs/synthetics/new-relic-synthetics/private-locations/private-locations-overview-monitor-internal-sites-add-new-locations) を設定しているときに問題が発生した場合は、以下のトラブルシューティングのヒントを試して、ミニオンまたはジョブ マネージャーの一般的な問題を特定してください。

## 仕事の需要と消費 [#job-demand]

現在のスループットを特定し、CPM またはジョブ マネージャーがジョブの負荷に対応できるかどうかを評価します。

* ジョブズは1分あたりのスループットを要求する。

  ```sql
  SELECT rate(uniqueCount(jobId), 1 minute) FROM SyntheticRequest 
  WHERE type != 'SIMPLE' FACET location SINCE 2 days ago
  ```

* 1分あたりのジョブ数の推移

  ```sql
  SELECT rate(uniqueCount(jobId), 1 minute) FROM SyntheticRequest 
  WHERE type != 'SIMPLE' FACET location SINCE 2 weeks ago TIMESERIES
  ```

* キューの伸びを把握する。

  ```sql
  SELECT derivative(checksPending, 1 minute) AS 'queue growth rate (per minute)' 
  FROM SyntheticsPrivateLocationStatus WHERE name = 'YOUR_PRIVATE_LOCATION' SINCE 2 days ago TIMESERIES
  ```

* 消費率。

  ```sql
  SELECT rate(uniqueCount(jobId), 1 minute) FROM SyntheticRequest 
  WHERE type != 'SIMPLE' FACET location SINCE 2 weeks ago TIMESERIES
  ```

* リソースを消費している障害のあるモニターをクリーンアップします。

  ```sql
  SELECT 100*latest(minionJobsFailed)/latest(minionJobsReceived) AS 'job failure rate (%)' 
  FROM SyntheticsPrivateMinion FACET minionLocation SINCE 2 weeks ago TIMESERIES MAX
  ```

## メモリ使用量のトラブルシューティング [#memory]

CPM ごとの推奨メモリ割り当て:

* Docker: Docker CPM の場合、CPU コアあたり 2.5 GiB

* KubernetesのCPMです。

  * CPM ヘビーワーカーあたり 3 GiB
  * ヘルスチェック ポッドあたり 3 GiB
  * ミニオン ポッドの場合は 1.6 GiB

* 目標60%の最大メモリ使用率

合成ジョブ マネージャーごとに推奨されるメモリ割り当て:

* Docker: Docker 合成ジョブ マネージャーの CPU コアあたり 3.256 GiB

* Kubernetes シンセティック ジョブ マネージャー (値は構成可能):

  * ジョブ マネージャー ポッド用に 1.6 GiB
  * ping ランタイム ポッド用に 1.0 GiB
  * Node.js API ランタイム ポッドあたり 2 GiB
  * Node.js ブラウザー ランタイム ポッドあたり 3 GiB

* 目標60%の最大メモリ使用率

現在の使用状況を確認するのに便利なクエリ。

* ロケーションごとのメモリ使用量。

  ```sql
  SELECT latest(minionPhysicalMemoryUsedPercentage) FROM SyntheticsPrivateMinion
  FACET minionLocation SINCE 2 weeks ago TIMESERIES MAX
  ```

* ホスト名ごとのメモリ使用量。

  ```sql
  SELECT latest(minionPhysicalMemoryUsedPercentage) FROM SyntheticsPrivateMinion 
  WHERE minionLocation = 'YOUR_PRIVATE_LOCATION' FACET minionHostname SINCE 2 weeks ago TIMESERIES MAX
  ```

## CPU使用率のトラブルシューティング [#cpu-usage]

CPUの需要が高くなる可能性のある期間を特定する。

* 全体のCPU使用率

  ```sql
  SELECT latest(minionProcessorsUsagePercentage) FROM SyntheticsPrivateMinion 
  FACET minionLocation SINCE 2 weeks ago TIMESERIES MAX
  ```

* 指定した場所のCPU使用率。

  ```sql
  SELECT latest(minionProcessorsUsagePercentage) FROM SyntheticsPrivateMinion 
  WHERE minionLocation = 'YOUR_PRIVATE_LOCATION' FACET minionHostname SINCE 2 weeks ago TIMESERIES MAX
  ```

## ネットワークトラブルシューティング [#network]

<DNT>
  **Network access is red:**
</DNT>

プライベートミニオンは、 New Relicにチェックを入れて、パブリック ネットワーク アクセスを検証します。 パブリック ネットワーク アクセスが利用できない場合、 [プライベートミニオンの<DNT>**Overview**</DNT>ページ](/docs/synthetics/new-relic-synthetics/pages/synthetics-overview-page-view-monitors-performance)の<DNT>**Network Access**</DNT>アイコンは赤色になりますが、それ以外の場合、プライベートミニオンは完全に機能します。 これが予想される動作である場合は、このエラーを無視しても問題ありません。

また、以下のようなログエントリが表示されることがあります。

```log
2016-01-21 21:47:09,401 [dw-22 - GET /private-location/status] c.n.s.m.util.PrivateMinionUtils WARN Unable to detect Public Network Access trying to fetch https://newrelic.com/synthetics: java.net.ConnectException: Connection refused
```

<DNT>
  **New Relic access is red:**
</DNT>

プライベート ミニオンは、実行するジョブのリストを取得し、New Relic ユーザー インターフェースで表示できる結果を公開するために、 `https://synthetics-horde.nr-data.net`へのアクセス権を持っている必要があります。ファイアウォール ルールで直接アクセスが許可されていない場合は、[プロキシ アクセスを構成](/docs/synthetics/new-relic-synthetics/private-locations/install-configure-private-minions)する必要があります。必要に応じて、DNS エンドポイントを許可リストに追加します。

<DNT>
  **Network IOPS:**
</DNT>

ネットワークIOPSは、CPMにクラウドプロバイダーを使用している場合、トラブルシューティングに適した場所でもあります。DockerとKubernetesのCPMは、どちらも適切な量の書き込みスループットを必要とします。平均IOPSを分析し、1秒あたりのディスク操作に必要な適切なボリュームサイズを決定します。

## ホスト上で Docker コンテナを実行するとポートの競合が発生する [#port-conflicts-docker]

同じホスト内で複数の Docker プライベート ロケーション コンテナーを実行している場合、ポートの競合が発生します。このポートの競合を回避するには、ジョブ マネージャーのセットアップを開始するときに必ず次のことを行ってください。

* 異なるホストでジョブ マネージャーと CPM を実行します。
* 各ジョブ マネージャーを個別のホストで実行します。
* 各 CPM を異なるホストで実行します。