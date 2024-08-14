---
title: CPUまたはメモリの過剰な消費
type: troubleshooting
tags:
  - Integrations
  - Prometheus integrations
  - Troubleshooting
metaDescription: Troubleshooting tips for the Prometheus OpenMetrics integration for Docker or Kubernetes if no data appears in New Relic's UI.
freshnessValidatedDate: never
translationType: machine
---

## 問題

[Prometheus OpenMetrics integration](/docs/integrations/prometheus-integrations/install-configure-openmetrics/install-update-or-uninstall-your-prometheus-openmetrics-integration) for Docker or Kubernetesをインストールしたところ、メモリやCPUを大量に消費してしまいました。

## 解決

数百のターゲットをスクレイピングする巨大なクラスタで統合を実行すると、CPU とメモリの消費量が増加し、ワーカーの数が`scrape_duration`に影響を与える可能性があります。

例えば、Prometheus OpenMetricsの統合では、2.5のCPUと700MbのRAMを消費します。

* `800 targets`をスクレイピングし、それぞれ`1000 timeseries`を露出させます。
* それぞれのレイテンシは`150ms`で、 `scrape_duration`は 30 秒です。

資源の消費を抑えるために

1. インテグレーションを最新の利用可能なイメージに更新します。

2. `emitter_harvest_period`を下げることで収穫時間を短縮します。(デフォルト値は`1s`であり、間隔は`200ms`より小さくすることはできません。)メトリクスがより頻繁に送信されるため、メモリ消費量が削減されます。

3. `scrape_duration`を増やすことでメトリクスの収集頻度を減らし、メモリ消費と CPU 使用率の両方を削減します。

4. ワーカーの数を減らして、メモリ消費と CPU 使用率の両方を削減します。スクレイピングの速度が低下し、 `scrape_duration.`を超える可能性があります。

   * インテグレーションを、利用可能な最新バージョンの画像に更新します。
   * `worker_threads`デフォルト値の`4`から希望の値まで減らします。
