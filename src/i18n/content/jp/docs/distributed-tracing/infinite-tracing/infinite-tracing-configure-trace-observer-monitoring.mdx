---
title: Infinite Tracing。トレースオブザーバーの監視設定
tags:
  - Understand dependencies
  - Distributed tracing
  - Infinite Tracing
metaDescription: The trace observer monitoring feature allows you to see if New Relic is handling your traces as you expect.
freshnessValidatedDate: never
translationType: machine
---

Infinite Tracing (以前は「New Relic Edge」と呼ばれていました) は、トレース オブザーバーの監視を提供するため、トレース オブザーバーのサンプリング動作に関する追加の洞察を得ることができます。このオプション機能は、トレース オブザーバーによって表示および保持されたトレースの量を示します。トレース オブザーバー メトリックは、選択したアカウントに書き込まれ、Infinite Tracing 設定またはクエリ ビルダーで表示できます。

モニタリングを有効にすると、トレースオブザーバーのメトリクスは、New Relic アカウント階層のどのアカウントにも書き込めるようになります。これにより、メトリクスの可視性をコントロールすることができます。モニタリングを有効にする前に、どのアカウントがトレースオブザーバーのメトリクスを受け取るかを決める必要があります。

<Callout variant="tip">
  この機能を有効にすると、若干の追加月額料金が発生します。例えば、現在の料金モデルでは、以下の条件で1.6セントの追加月額料金が発生します。

  * メトリクスの数2
  * レートです。10秒ごと
  * 属性の数2-5
</Callout>

## トレースオブザーバーの監視を有効にする [#enable-monitoring]

New Relic UI のトグルをクリックして、トレース オブザーバーの監視をオンにすることができます。トレース オブザーバーの監視を有効にするとすぐに、トレース オブザーバーのメトリックがキャプチャされてアプリに表示されるか、クエリ ビルダーで表示できます。トレース オブザーバーのメトリックは遡及的ではなく、トレース オブザーバーの監視が有効になっている場合にのみキャプチャされます。

トレース オブザーバーの監視を有効にするには:

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**
   </DNT>

   に移動します。

2. トレース オブザーバー メトリックを記録するアカウントにいることを確認します。

3. <DNT>
     **Trace observer monitoring**
   </DNT>

   トグルをクリックします。

## トレースオブザーバーの監視アカウントを切り替える [#switch-accounts]

ある時点で、トレース オブザーバー メトリックを受け取るアカウントを変更することにした場合は、Infinite Tracing 設定でこれを行うことができます。

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infinite Tracing settings**
   </DNT>

   に移動します。

2. アカウントセレクターを使って、トレースオブザーバーのメトリクスを書き込むアカウントに切り替えます。

3. トグルをクリックすると、トレースオブザーバーの監視が無効になります。

4. トグルをクリックすると、現在のアカウントでトレースオブザーバーのモニタリングが再び有効になります。

<Callout variant="tip">
  トレースオブザーバーの監視が有効または無効になっている場合、変更が発生したアカウントに`NrAuditEvent`が書き込まれます。このイベントは、トレースオブザーバーに加えられた変更を追跡するのに役立ちます。
</Callout>

## トレース・オブザーバー・メトリクスの表示 [#view-metrics]

監視アカウントにアクセスできる人は誰でも、Infinite Tracing 設定またはクエリ ビルダーでトレース オブザーバー メトリックを表示できます。

監視アカウントへのアクセス権がない場合、Infinite Tracing 設定でトレース オブザーバー メトリックを表示したり、これらのメトリックで NRQL クエリを実行したりすることはできません。アクセス権がない場合は、次のように表示されます。

<img
  title="Screenshot showing what appears in Infinite Tracing settings if you don't have access to the monitoring account that is receiving metrics."
  alt="Screenshot showing what appears in Infinite Tracing if you don't have access to the monitoring account that is receiving metrics."
  src="/images/distributed-tracing_screenshot-full_trace-monitoring-toggle.webp"
/>

### Infinite Tracing 設定でメトリックを表示する [#view-in-edge]

トレース オブザーバーの監視をオンにすると、トレース オブザーバーのメトリックが無限トレース設定に表示されます。

* メインのトレースオブザーバーリストに2つのカラムが追加されました。

  * <DNT>
      **Traces Seen**
    </DNT>

    : 過去 60 分間にトレース観測者が観測したトレースの数。

  * <DNT>
      **Traces Kept**
    </DNT>

    : 保持されたトレースの数と割合。

* 画面の右側に新しいペインが追加されます。

  * <DNT>**Monitoring account**</DNT>: 右側のペインの上部には、トレース オブザーバー メトリックが書き込まれるアカウントがあります。

  * <DNT>**How many traces were kept?**</DNT> (上のグラフ): <DNT>**Traces Kept**</DNT>と同じ情報が表示されますが、時間の経過に伴う変化が示されます。 サンプリングの規模と傾向を確認できます。

  * <DNT>**Which traces were kept?**</DNT> (下のグラフ): どのカテゴリのトレースが保持されたかを示します。 このグラフは、さまざまな種類の無限トレース フィルターによってトレースがキャプチャされたかどうかを示しています。

    * 持続時間（スロートレース）
    * 無作為
    * スパン属性フィルター（エラーなどの指定した属性を持つトレース）

    <img
      title="Screenshot of graph showing which traces were kept."
      alt="Screenshot of graph showing which traces were kept."
      src="/images/distributed-tracing_screenshot-crop_how-many-traces-kept.webp"
    />

### クエリビルダでの表示

メトリクスをプログラムで表示したい場合は、NRQL クエリの例をいくつか示します。これらの例は、Infinite Tracing 設定から 2 つのチャートを複製します。

<DNT>**How many traces were kept?**</DNT> （トップチャート）：

```sql
FROM Metric SELECT sum(monitoring.trace.opened.session.count) AS 'Traces seen', sum(monitoring.trace.sampled.count) AS 'Traces kept' WHERE account = INSERT_THE_MONITORING_ACCOUNT_ID TIMESERIES
```

<DNT>**Which traces were kept?**</DNT> （下のグラフ）：

```sql
FROM Metric SELECT sum(monitoring.trace.sampled.count) WHERE account = INSERT_THE_MONITORING_ACCOUNT_ID AND newRelic.traceFilter.type IS NOT NULL FACET newRelic.traceFilter.type LIMIT 3 TIMESERIES
```
