---
title: Pixieデータを調べる
tags:
  - Pixie Auto-telemetry
  - Pixie integration
  - Kubernetes
  - eBPF
metaDescription: Explore Pixie data in the UI of New Relic
freshnessValidatedDate: never
translationType: machine
---

Pixieによって収集された自動テレメトリは、NewRelicのUI全体にあります。Pixieテレメトリデータを使用して、次のことを行います。

* [サービスの状態を監視する](#service-health)
* [ポッドアプリケーションのCPUプロファイルを参照してください](#cpu-profiles)
* [ネットワークの問題を監視する](#network-health)
* [フルボディのリクエストを検査する](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/pixie-entities)

New Relic の UI は、短期ストレージと長期ストレージの両方から Pixie テレメトリ データを取得します。New Relic Pixie 統合のハイブリッド ストレージ モデルの詳細については、[こちら](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/overview)をご覧ください。

## サービスの状態を監視する [#service-health]

Pixieは、1つのエンドポイントがクラスターの外部にある場合でも、サービス間で送信されたHTTP（HTTP / 2を含む）要求を自動的にトレースします。

New RelicPixie インテグレーションは、New Relic プロトコルを使用して、長期保存のために Pixie から に HTTPOpenTelemetry スパンをエクスポートします。<DNT>**Services - OpenTelemetry**</DNT>ビューには、Pixie によって自動的に識別されたサービスが、サービスのレスポンス時間、完了時間、エラー率の概要とともに一覧表示されます。

<img
  title="The <DNT>**Services - OpenTelemetry**</DNT> view lists all services identified by Pixie with high-level latency, error and throughput details."
  alt="The <DNT>**Services - OpenTelemetry**</DNT> view lists all services identified by Pixie with high-level latency, error and throughput details."
  src="/images/pixie_screenshot-full_services-otel.webp"
/>

<figcaption>
  <DNT>**Services - OpenTelemetry**</DNT>ビューには、Pixie によって識別されたすべてのサービスと、高レベルのレイテンシ、エラー、スループットの詳細が一覧表示されます。
</figcaption>

このリストからサービスを選択すると、サービス<DNT>**Summary**</DNT>ビューが開き、このサービスに対して行われたすべての HTTP リクエストのレスポンス時間、最大レスポンス、エラー率のグラフが表示されます。

<img
  title="The <DNT>**Services - OpenTelemetry**</DNT> service Summary view shows graphs of response time, throughput and error rate over time."
  alt="The <DNT>**Services - OpenTelemetry**</DNT> service Summary view shows graphs of response time, throughput and error rate over time."
  src="/images/pixie_screenshot-full_services-otel-details.webp"
/>

<figcaption>
  OpenTelemetryサービス <DNT>**Summary**</DNT> ビューには、時間の経過に伴うレスポンス時間、最大値、エラー率のグラフが表示されます。
</figcaption>

OpenTelemetry サービス ビューから、左側のサイドバーの<DNT>**Service map**</DNT>タブを選択します。 このサービス マップ ビューは、サービスが通信するすべてのエンティティのグラフを表示することで、アプリケーションの依存関係を視覚化するのに役立ちます。

<img
  title="The OpenTelemetry <DNT>**Service map**</DNT> view shows helps visualize your application's dependencies."
  alt="The OpenTelemetry <DNT>**Service map**</DNT> view shows helps visualize your application's dependencies."
  src="/images/pixie_screenshot-full_service-otel-map.webp"
/>

<figcaption>
  OpenTelemetry <DNT>**Service map**</DNT>ビューは、アプリケーションの依存関係を視覚化するのに役立ちます。
</figcaption>

OpenTelemetry サービスの<DNT>**Transactions**</DNT>タブには、サービスがリクエストを送信するさまざまなエンドポイントが表示されます。 エージェントを応答時間または完了で並べ替えることができます。

<img
  title="Pixie data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab. "
  alt="Pixie data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab. "
  src="/images/pixie_screenshot-full_services-otel-transactions.webp"
/>

<figcaption>
  OpenTelemetry <DNT>**Transactions**</DNT>タブに表示される Pixie データ。
</figcaption>

<DNT>**Databases**</DNT>タブには、サービスが行うデータベース要求が表示されます。

<img
  title="Pixie data seen in the OpenTelemetry <DNT>**Databases**</DNT> tab."
  alt="Pixie data seen in the OpenTelemetry <DNT>**Databases**</DNT> tab."
  src="/images/pixie_screenshot-full_services-otel-databases.webp"
/>

<figcaption>
  OpenTelemetry <DNT>**Databases**</DNT>タブに表示される Pixie データ。
</figcaption>

Pixieを利用したサービスヘルス情報は、Kubernetesクラスターエクスプローラー（KCE）ビューからも見つけることができます。KCEの概要ビューには、Pixieによって自動的に識別されたすべてのサービスが含まれます。

<img
  title="The Kubernetes cluster explorer shows the services identified by Pixie."
  alt="The Kubernetes cluster explorer shows the services identified by Pixie."
  src="/images/pixie_screenshot-full_kce.webp"
/>

<figcaption>
  Kubernetesクラスターエクスプローラーは、Pixieによって識別されたサービスを表示します。
</figcaption>

サービスを選択すると、Pixieによって収集されたHTTPスループット、エラーレート、および応答時間のデータを含むサービス詳細サイドバーが表示されます。

<img
  title="The pod details page in the Kubernetes cluster explorer shows application metrics collected by Pixie."
  alt="The pod details page in the Kubernetes cluster explorer shows application metrics collected by Pixie."
  src="/images/pixie_screenshot-full_kce-pod-details.webp"
/>

<figcaption>
  Kubernetesクラスターエクスプローラーのポッド詳細ページには、Pixieによって収集されたアプリケーションメトリックが表示されます。
</figcaption>

サービス詳細ビューの下部にある<DNT>**Related Entities**</DNT>セクションの<DNT>**Map View**</DNT>ボタンを選択します。

このマップ ビューは、サービスが通信するすべてのエンティティのグラフを表示することで、アプリケーションの依存関係を視覚化するのに役立ちます。

<img
  title="The service map shown in the pod details view is constructed using HTTP traces collected by Pixie."
  alt="The service map shown in the pod details view is constructed using HTTP traces collected by Pixie."
  src="/images/pixie_screenshot-full_kce-pod-details-map.webp"
/>

<figcaption>
  ポッドの詳細ビューに表示されるサービスマップは、Pixieによって収集されたHTTPトレースを使用して作成されます。
</figcaption>

サービス詳細ビューの上部で<DNT>**Check metrics in Pixie**</DNT>を選択すると、[\[Pixie によるライブ デバッグ\]](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie)タブの`px/service`スクリプトに移動します。 `px/service script`には、クラスターに保存されている短期 Pixie データを使用したこのサービスのパフォーマンス統計と受信リクエストの概要が表示されます。

## ポッドアプリケーションのCPUプロファイルを参照してください [#cpu-profiles]

Pixieの継続的なプロファイリング機能を使用して、CPU使用率の急上昇を調査したり、アプリケーションコード内のパフォーマンスの問題を特定したりできます。

Kubernetesクラスターエクスプローラービューにリストされているポッドを選択して、ポッドの詳細ビューを表示します。

<img
  title="The pod detail view contains an option to see a pod cpu flamegraph."
  alt="The pod detail view contains an option to see a pod cpu flamegraph."
  src="/images/pixie_screenshot-full_kce-pod.webp"
/>

<figcaption>
  Kubernetesクラスタ エクスプローラーの <DNT>**Pod details view**</DNT> には、<DNT>**Check flamegraph in Pixie**</DNT> のオプションがあります。
</figcaption>

ポッドの詳細ビューから<DNT>**Check flamegraph in Pixie**</DNT>オプションを選択すると、Pixie がクラスターの短期ストレージに保存する豊富なデータ セットを使用して CPU プロファイルが表示されます。

<img
  title="Check a pod's CPU profile using Pixie"
  alt="Check a pod's CPU profile using Pixie"
  src="/images/pixie_screenshot-crop_cpu-profile.webp"
/>

<figcaption>
  Pixieを使用して、KubernetesポッドのCPUフレームグラフを確認します。
</figcaption>

KubernetesノードのCPUフレームグラフを表示するには、\[[Pixieを使用したライブデバッグ](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie)]タブで`px/node`スクリプトを使用します。このビューの一番下までスクロールして、ノードのCPUフレームグラフを確認します。

[連続プロファイリングチュートリアル](https://docs.px.dev/tutorials/pixie-101/profiler/)で、ピクシーのCPUフレームグラフを操作する方法を学びます。

## ネットワークの問題を監視する [#network-health]

Pixieを使用して、アプリケーションレイヤーとインフラストラクチャレイヤーとともにKubernetesネットワークを監視できます。

Kubernetesクラスタ エクスプローラーの <DNT>**Summary**</DNT> タブには <DNT>**Kubernetes network monitoring with Pixie**</DNT> セクションが含まれています。 このセクションでリンクされている各ビューは、クラスタ上の[短期ストレージに保存されている](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/overview)豊富な Pixie テレメトリーデータ セットによって駆動されます。

<img
  title="Kubernetes network monitoring with Pixie"
  alt="Kubernetes network monitoring with Pixie"
  src="/images/pixie_screenshot-full_network-monitoring.webp"
/>

<figcaption>
  KubernetesネットワークモニタリングにはPixieを使用してください。
</figcaption>

<DNT>**Spot DNS issues**</DNT>リンクには、クラスター内のすべての DNS 要求のグラフが表示されます。 グラフ上の任意の端にマウスを置くと、レイテンシとスループットの情報が表示されます。

<img
  title="Spot DNS issues with Pixie's DNS flow graph"
  alt="Spot DNS issues with Pixie's DNS flow graph"
  src="/images/pixie_screenshot-full_dns-flow-graph.webp"
/>

<figcaption>
  PixieのDNSフローグラフを使用して、クラスター内のDNSの問題を特定します。
</figcaption>

<DNT>**See TCP retransmissions**</DNT>および<DNT>**See dropped packets**</DNT>リンクには、クラスター内の TCP 再送信と TCP ドロップのグラフが表示されます。 これらのビューの結果を表示するには、 `RUN`ボタンを押す必要があることに注意してください。 TCP ドロップの出力を以下に示します。

<img
  title="See TCP drops and TCP retransmissions using Pixie"
  alt="See TCP drops and TCP retransmissions using Pixie"
  src="/images/pixie_screenshot-full_tcp-drops.webp"
/>

<figcaption>
  Pixieを使用したクラスター内のTCPドロップとTCP再送信を確認してください。
</figcaption>

上記の<DNT>**Kubernetes network monitoring with Pixie**</DNT>ビューは、 `px/dns_flow_graph` 、 `px/tcp_drops` 、 `px/tcp_retransmits`スクリプトを使用して、[\[Pixie によるライブ デバッグ\]](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie)タブでも表示できることに注意してください。 これらのスクリプトには、出力をフィルタリングしてエンティティを選択できるオプションの引数があります。
