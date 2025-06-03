---
title: OpenTelemetryAPMUI
tags:
  - Integrations
  - Open source telemetry integrations
  - OpenTelemetry
metaDescription: The OpenTelemetry APM UI provides tools for identifying and diagnosing problems with services monitoring with OpenTelemetry.
freshnessValidatedDate: '2024-05-17T00:00:00.000Z'
translationType: machine
---

OpenTelemetry APM UI は、[サービス エンティティ](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources/#services)で利用できる厳選されたエクスペリエンスです。 New RelicとOpenTelemetryを使用してサービスを構成していない場合は、 [OpenTelemetry APM監視」](/docs/opentelemetry/get-started/apm-monitoring/opentelemetry-apm-intro/)を参照してください。

OpenTelemetry APM UI ページは、問題を迅速に特定して診断できるように設計されています。 多くの場合、データはさまざまな[OpenTelemetry セマンティック規則](https://opentelemetry.io/docs/specs/semconv/)に準拠する必要がありますが、一部は汎用的です。

次の New Relic の概念は、ページ間で繰り返されるか、重複しています。

* [黄金の信号](#golden-signals)
* [フィルターでデータを絞り込む](#narrow-with-filters)
* [メトリクスまたはスパンの切り替え](#metrics-spans-toggle)

## OpenTelemetry APM サービスを探す [#find-apm-services]

OpenTelemetry APM サービスを見つけるには、 **All entities &gt; Services &gt; OpenTelemetry**または**APM &amp; Services**に移動します。 サービスをクリックすると、そのサービスの[Summary page](#summary-page) \[概要ページ]に移動します。

エンティティ エクスプローラー内では、 [エンティティ タグ](/docs/new-relic-solutions/new-relic-one/core-concepts/use-tags-help-organize-find-your-data/)でフィルターできます。 エンティティ タグの計算方法の詳細については、 [New Relic の OpenTelemetry リソース](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources)を参照してください。

## ページ: 概要 [#summary-page]

概要ページには、次のようなサービスの健全性の概要が表示されます。

* **続きゴールデン**: レスポンスタイム、スループット、エラー率。 これらの計算方法の詳細については、[ゴールデン シグナル](#golden-signals)を参照してください。
* **関連エンティティ**: このサービスと通信する他のサービスおよび関連インフラストラクチャ。 詳細なビューについては、[Service map](#service-map-page)参照してください。
* **アクティビティ**: このサービスに対してアクティブなアラートのステータス。
* **ディストリビューティッド（分散）ト インレーシング サイト**: 下流または上流のエンティティがパフォーマンスの低下に寄与している可能性があるかどうかを発見します。 詳細については、[関連するトレース エンティティ信号](/docs/distributed-tracing/ui-data/related-trace-entity-signals/)を参照してください。
* **インスタンス**: サービスが水平方向にスケーリングされる場合のインスタンスごとのゴールデン多数の内訳。 `service.instance.id`リソース属性に依存します (詳細については[サービスを](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources/#services)参照してください)。

## ページ: ディストリビューティッド（分散）トレーシング [#distributed-tracing-page]

ディストリビューティッド（分散）ト レーシング ページでは、 OpenTelemetryトレース データの詳細が提供されています。 ページの使用情報については[、ディストリビューティッド（分散）トレーシングを](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/)参照してください。 データが [OpenTelemetryNew Relic](/docs/opentelemetry/best-practices/opentelemetry-best-practices-traces)に取り込まれる方法の詳細についてはOpenTelemetryNew Relic 、 Relic の を参照してください。

[ゴールデンシグナル](#golden-signals)と同様に、スパンのステータスが`ERROR`に設定されている場合 (たとえば、 `otel.status_code = ERROR` )、スパンはエラーとして分類されます。 スパンはエラーの場合、**エラーの詳細**にスパンのステータスの説明（たとえば、 `otel.status_description` ）が表示されます。

OpenTelemetryスパン イベントは、追加のイベント コンテキスト情報を特定のスパンに添付します。 これらは例外情報をキャプチャするために最もよく使用されます。 利用可能な場合は、**trace details** \[トレースの詳細]でスパンのイベントを表示できます。

<Callout variant="tip">
  スパンの例外イベントが存在するだけでは、スパン自体がエラーであるとはみなされません。 スパン ステータスが`ERROR`に設定されているスパンのみがエラーとして分類されます。
</Callout>

<img title="Screenshot showing the right pane showing the two links for span events" alt="Screenshot showing the right pane showing the two links for span events" src="/images/opentelemetry_screenshot-crop_view-span-events.webp" />

## ページ: サービスマップ [#service-map-page]

サービス マップ ページでは、アーキテクチャ全体を視覚的に表現します。 詳細については、[サービス マップを](/docs/new-relic-solutions/new-relic-one/ui-data/service-maps/service-maps/)参照してください。

## ページ: 履歴書 [#transactions-page]

トランザクション ページには、サービスの[トランザクション](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm/#txn-defined)に関する問題を特定し、分析するためのツールが提供されます。

メトリクスの場合、この書き込みでは、データが[HTTP メトリクス](https://opentelemetry.io/docs/specs/semconv/http/http-metrics/)または[RPC メトリクスの](https://opentelemetry.io/docs/specs/semconv/rpc/rpc-metrics/)意味規則に準拠していると想定されます。 `http.route`属性と`rpc.method`属性は、トランザクションによるリスト表示とフィルタリングに使用されます。

スパンの場合には、クエリは汎用的であり、最上位レベルのスパンのデータ モデルのみを利用します。 スパンは、ゴールデン[ストップ](#golden-signals)で説明されているように、瞬間スループットと応答タイムにカウントされます。 スパンの名フィールドは、トランザクションによるリスト表示とフィルタリングに使用されます。

## ページ: データベース [#databases-page]

データベース ページには、サービスのデータベース クライアント操作に関する問題を特定し、分析するためのツールが用意されています。

現在、利用できるセマンティック規則がないため、データベースのメトリックスベースのビューはありません。

スパンの場合には、クエリはデータが[DB スパンの](https://opentelemetry.io/docs/specs/semconv/database/database-spans/)セマンティック規則に準拠していると想定します。 スパン名、 `db.system` 、 `db.sql.table` 、 `db.operation`属性は、データベース操作の一覧表示とフィルタリングに使用されます。

## ページ: 外部サービス [#externals-page]

外部ページには、呼び出し元エンティティ (上流サービス) や呼び出し先エンティティ (下流サービス) などのサービスの外部呼び出しに関する問題を特定し、分析するためのツールが用意されています。

外部サービスページのメトリックスベースのビューはありません。

スパンの場合には、クエリは汎用的であり、最上位レベルのスパンのデータ モデルのみを利用します。 スパンは、サービスを終了する場合、外部サービスのスループットと応答タイムにカウントされ、 `WHERE span.kind = client OR span.kind = producer`のヒューリスティックを使用して計算されます。 データベース クライアントスパンは、 `WHERE db.system is null`を使用してフィルタリングされます ([ページ: データベース](#databases-page)を参照)。 [ゴールデンシグナル](#golden-signals)と同様に、スパンのステータスコードが`ERROR` (たとえば、 `otel.status_code = ERROR` ) の場合、そのスパンはエラーになります。 利用可能な場合、 [HTTP スパン](https://opentelemetry.io/docs/specs/semconv/http/http-spans/)および[RPC スパンの](https://opentelemetry.io/docs/specs/semconv/rpc/rpc-spans/)セマンティック規則のデータを使用して、外部サービス呼び出しを分類します。

## ページ: JVM ランタイム [#jvm-runtime-page]

JVM ランタイム ページには、Java サービスの JVM の問題を特定し、分析するためのツールが提供されています。 このページは、 [OpenTelemetry java を](https://opentelemetry.io/docs/languages/java/)使用するサービスに対してのみ表示されます。 個別のサービス インスタンスを区別するために、ページでは`service.instance.id`リソース属性を設定する必要があります (詳細については、 [「サービス」](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources/#services)を参照してください)。

JVMゴールデン ランタイム ページには、ランタイムの問題とサービスの使用状況を関連付けるために、 JVMランタイム メトリクスの横に、ストップが表示されます。 [メトリクスまたはスパンの切り替えは、ゴールデン ストップ](#metrics-spans-toggle)[が](#golden-signals)スパン データまたはメトリクス データのどちらによって駆動されるかを決定します。 JVMランタイム メトリクスにはスパンベースのビューはありません。

メトリクスの場合、書き込みはデータが[JVMメトリクスの](https://opentelemetry.io/docs/specs/semconv/runtime/jvm-metrics/)意味規則に準拠していることを前提としています。 これらの規則は、 [OpenTelemetry Java](https://github.com/open-telemetry/opentelemetry-java-instrumentation/tree/main/instrumentation/runtime-telemetry/runtime-telemetry-java8/library)エージェントに自動的に組み込まれるOpenTelemetry Java ランタイム インストゥルメンテーション ライブラリに具体化されていることに注意してください。

## ページ: Go ランタイム [#go-runtime-page]

Go ランタイム ページには、Go サービスのランタイムの問題を特定し、分析するためのツールが提供されています。 このページは、 [OpenTelemetry Go を](https://opentelemetry.io/docs/languages/go/)使用するサービスに対してのみ表示されます。 個別のサービス インスタンスを区別するために、ページでは`service.instance.id`リソース属性を設定する必要があります (詳細については、 [「サービス」](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources/#services)を参照してください)。

Go ランタイムのゴールデン ページには、ランタイムの問題とサービスの使用状況を関連付けるために、Go ランタイム メトリクスの横に「マイナス」が表示されます。 [メトリクスまたはスパンの切り替えは、ゴールデン ストップ](#metrics-spans-toggle)[が](#golden-signals)スパン データまたはメトリクス データのどちらによって駆動されるかを決定します。 Go ランタイム メトリクスにはスパンベースのビューはありません。

メトリクスの場合、クエリは[OpenTelemetry Go ランタイム インストゥルメンテーション ライブラリ](https://github.com/open-telemetry/opentelemetry-go-contrib/tree/main/instrumentation/runtime)によってデータが生成されることを前提としています。 なお、現在、Go ランタイム メトリックスにはセマンティック規則はありません。

## ページ: ログ [#logs-page]

ログ ページには、問題を特定し、サービスのログを分析するためのツールが提供されます。 詳細については、 [「ログ UI の使用」](/docs/logs/ui-data/use-logs-ui/)を参照してください。

## ページ: Errors Inbox [#errors-inbox-page]

エラー受信トレイ ページには、サービスのエラーを検出してトリアージするためのツールが提供されます。 詳細については、 [「エラー受信トレイの使用開始」を](/docs/errors-inbox/getting-started/)参照してください。

Errors Inboxページはトレース データによって駆動されます。 [ゴールデンシグナル](#golden-signals)と同様に、スパンのステータスが`ERROR`に設定されている場合 (たとえば、 `otel.status_code = ERROR` )、スパンはエラーとして分類されます。

エラー スパンは、UUID、16 進数値、電子メール アドレスなどの識別値を正規化して計算されたエラー フィンガープリントごとにグループ化されます。 それぞれの個別のエラー スパンは、エラー グループ内の個別のインスタンスです。 エラー グループ メッセージは次のように決定されます。

* スパンステータスの説明（例： `otel.status_description` ）
* `rpc.grpc.status_code` [RPCスパン](https://opentelemetry.io/docs/specs/semconv/rpc/rpc-spans/)セマンティック規約から
* `http.status_code` [HTTPスパン](https://opentelemetry.io/docs/specs/semconv/http/http-spans/)セマンティック規約から
* `http.response.status_code` [HTTPスパン](https://opentelemetry.io/docs/specs/semconv/http/http-spans/)セマンティック規約から
* `undefined` 上記のいずれも存在しない場合

## ページ: メトリクスエクスプローラー [#metrics-explorer-page]

メトリクス エクスプローラーは、サービスのメトリクスを一般的な方法で探索するためのツールを提供します。 詳細については、 [「データの探索」](/docs/query-your-data/explore-query-data/browse-data/introduction-data-explorer/#explore-data)を参照してください。

## 黄金の信号 [#golden-signals]

最長、レスポンスタイム、エラー率のゴールデン シグナルは、 OpenTelemetry APM UI全体の複数の場所に表示されます。 使用する場合、次のように計算されます。

メトリクスの場合、この書き込みでは、データが[HTTP メトリクス](https://opentelemetry.io/docs/specs/semconv/http/http-metrics/)または[RPC メトリクスの](https://opentelemetry.io/docs/specs/semconv/rpc/rpc-metrics/)意味規則に準拠していると想定されます。

スパンの場合には、クエリは汎用的であり、最上位レベルのスパンのデータ モデルのみを利用します。 スパンは、サービスへのルート エントリ スパンの場合には、長さと応答時間にカウントされ、ヒューリスティック`WHERE span.kind = server OR span.kind = consumer`を使用して計算されます。 スパンのステータス コードが`ERROR` (たとえば、 `otel.status_code = ERROR` ) の場合、そのスパンはエラーになります。

## フィルターでデータを絞り込む [#narrow-with-filters]

いくつかのページには、**Narrow data to...** \[データを絞り込む]などのオプションを含むフィルター バーが含まれています。 これにより、ページ上のクエリを基準に合わせてフィルタリングできます。 たとえば、 `service.version='1.2.3-canary'`をフィルタリングすることで、特定のカナリアデプロイメントに絞り込むことができます。 ページ間を移動するときにフィルターは保持されます。

## メトリクスまたはスパンの切り替え [#metrics-spans-toggle]

さまざまなページにメトリクスまたはスパンの切り替えが含まれています。 これにより、分析要件とデータの可用性に基づいて、執筆をスパン データまたはメトリクス データのどちらによって行うかを選択できます。

メトリックはサンプリングの対象ではないため、特に中間率などのレートを計算する場合はより正確です。 ただし、メトリックはカーディナリティ制約の対象であり、分析に重要な特定の属性が欠落している可能性があります。 対照的に、スパンはサンプリングされるため、精度の問題が生じますが、カーディナリティ制約の対象ではないため、より豊富な属性を持ちます。

歴史的に、 OpenTelemetry言語APIと SDK、およびインストゥルメンテーションはトレース インストゥルメンテーションを優先していました。 ただし、プロジェクトは長い道のりを経て、メトリクスはほぼすべての言語で利用できるようになりました。 詳細については、関連する言語とインストゥルメンテーションの[ドキュメント](https://opentelemetry.io/docs/languages/)を確認してください。

## ゴールデンメトリクス

ゴールデン メトリクスは、HTTP/RPC メトリクスなどの逆ゴールデン データの低カーディナリティ バージョンです。 これらは、エンティティ エクスプローラー、ワークロード アクティビティ ページ、変更追跡 (変更追跡機能) 詳細ページなど、さまざまなプラットフォーム エクスペリエンスに組み込まれます。 これらのメトリクスは、 `newrelic.goldenmetrics.ext.service.*`のような名前を使用します。

<Callout variant="important">
  歴史的に、 OpenTelemetryゴールデンメトリクスはスパンから計算されていました。 スパンは、通常、サンプリングされるため、部分的な画像しか提供されません。 ゴールデン メトリクスが広く利用できるようになった現在、ゴールデン メトリクスはスパン データではなくメトリクス データを使用して計算されます。
</Callout>