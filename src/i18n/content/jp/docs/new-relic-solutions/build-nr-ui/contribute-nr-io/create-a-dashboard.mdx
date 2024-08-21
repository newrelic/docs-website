---
title: ダッシュボードの作成
metaDescription: create a dashboard to observe your data in New Relic
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  この手順は、クイックスタートを構築する方法を教えるコースの一部です。 まだご覧になっていない方は、[コース紹介を](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart)ご覧ください。

  このコースの各手順は前回の手順に基づいて構築されるため、この手順に進む前に、必ず[製品からトレースを送信してください](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/send-traces)。
</Callout>

New Relic ダッシュボードを使用すると、アプリケーションから収集したデータを観察および解釈できます。 表示したいデータをグラフに集めて、表示方法をカスタマイズします。

この手順では、New Relic でダッシュボードを作成します。

## ダッシュボードの作成 [#create-dashboard]

<Steps>
  <Step>
    [New Relic](https://one.newrelic.com/)に移動し、アカウントでサインインします。 ここでは、左側のナビゲーションに**Browser** 、**Dashboards**、**Alerts**などのさまざまなタブが表示されます。
  </Step>

  <Step>
    **Dashboards** \[ダッシュボード]に移動し、右上隅の**Create a dashboard** \[ダッシュボードの作成を]クリックして、 **Create a new dashboard** \[新しいダッシュボードの作成]を選択します。

    <img
      title="Dashboards index"
      alt="Dashboards index"
      src="/images/dashboards_screenshot-full_dashboard-index.webp"
    />
  </Step>

  <Step>
    ダッシュボードに`FlashDB`という名前を付けて、 **Create** \[作成を]クリックします。
  </Step>
</Steps>

## ダッシュボードにグラフを追加する [#add-charts]

ダッシュボードが配置されたら、グラフの作成を開始できます。 次のグラフを追加します。

* データベースメソッド
* 平均応答時間
* エラー
* データベースのサイズ
* キャッシュのヒット
* キー

### データベースメソッド [#database-methods]

ダッシュボードにマウスを移動し、 **Add a new chart** \[新しいグラフを追加]をクリックします。

この画面から、クエリビルダーを使用してグラフを追加するか、Markdown を使用してテキスト、画像、またはリンクを追加することを選択します。 **Add a chart** \[グラフを追加]をクリックします。

クエリビルダー オプションが開く場合があります。 NRQL エディターに切り替えて、クエリを次のように編集します。

```sql
SELECT count(*) FROM fdb_method FACET method 
```

上記の結果を表示するには、 **Run** \[実行]をクリックします。

ここでは、メソッドごとにグループ化された各 FlashDB クエリの数が表示されます。 結果を表、ビルボード、円グラフなどのさまざまな形式で表示することを選択できます。

グラフの種類を円グラフに変更し、グラフの名前を「データベース メソッド」にして、\[保存] をクリックします。

チャートがダッシュボードに表示されるようになりました。

同じパターンに従って、ダッシュボードにさらにグラフを追加できます。 これを行うには、右上隅の**+** をクリックします。

これにより、同じ**Add to your dashboard** \[ダッシュボードに追加]ページに移動します。 ダッシュボードに別のグラフを追加します。

### 平均応答時間 [#average-response]

次のクエリを実行して、FlashDB クエリの平均応答時間を観察します。

```sql
SELECT average(fdb_create_responses), average(fdb_read_responses), average(fdb_update_responses), average(fdb_delete_responses) FROM Metric TIMESERIES
```

ここでは、さまざまな FlashDB クエリの平均応答時間を確認します。 このグラフをダッシュボードに追加するには、 **Save** \[保存] をクリックします。 同じ手順に従って、残りのグラフを追加します。

### エラー [#errors]

エラー チャートの場合は、次のクエリを使用します。

```sql
SELECT sum(fdb_create_errors), sum(fdb_read_errors), sum(fdb_update_errors), sum(fdb_delete_errors) FROM Metric TIMESERIES
```

### データベースのサイズ [#database-size]

次のクエリを使用して、データベース サイズ チャートを取得します。

```sql
SELECT latest(fdb_size) FROM Metric
```

グラフにはデータベースのサイズが表示されます。

### キャッシュのヒット [#cache-hits]

キャッシュのヒットチャートの場合は、次のクエリを使用します。

```sql
SELECT sum(fdb_cache_hits) FROM Metric TIMESERIES
```

ここでは、折れ線グラフを使用してキャッシュのヒットの合計数を観察します。

### キー [#keys]

次のクエリを使用して、データベース内のキーの数をカウントします。

```sql
SELECT count(fdb_keys) FROM Metric TIMESERIES
```

ここで、FlashDB キーの数を確認します。

## 概要 [#summary]

この手順では、ダッシュボードを作成し、複数のグラフを追加して、New Relic でサービスを観察しました。

<Callout variant="tip">
  この手順は、クイックスタートを構築する方法を教えるコースの一部です。 次の手順[「アラートの作成」](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/create-alerts)に進みます。
</Callout>
