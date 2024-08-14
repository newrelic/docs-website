---
title: 平均応答時間の例(v2)
tags:
  - APIs
  - REST API v2
  - Application examples (v2)
metaDescription: Some examples of how to use the New Relic API Explorer (v2) to get your app's average application response time.
freshnessValidatedDate: never
translationType: machine
---

ここでは、New Relic API Explorer (v2) を使用して、指定した期間におけるアプリケーションの平均応答時間を取得する例を紹介します。

## 平均応答時間 [#average_response]

平均応答時間 (ミリ秒) は、 [APM <DNT>**Summary**</DNT>ページ](/docs/applications-menu/applications-overview)のアプリのメイン チャートに表示される値です。 New Relic 、レスポンスタイムを計算するために次の式を使用します。

```
Response time = HttpDispatcher:average_call_time + ((WebFrontend/Queue:call_count * WebFrontend/Queue:average_response_time) / HttpDispatcher:call_count)
```

メトリック値を取得するには、以下の2つのコマンドを使用します。

これらの例では、それぞれに同じ期間が使用されており、両方とも要約（平均）されています。

```bash
curl -X GET "https://api.newrelic.com/v2/applications/${APP_ID}/metrics/data.xml" \
     -H "X-Api-Key:${API_KEY}" -i \
     -d 'names[]=HttpDispatcher&values[]=average_call_time&values[]=call_count&from=2014-03-01T20:59:00+00:00&to=2014-03-01T21:59:00+00:00&summarize=true'
```

```bash
curl -X GET "https://api.newrelic.com/v2/applications/${APP_ID}/metrics/data.xml" \
     -H "X-Api-Key:${API_KEY}" -i \
     -d 'names[]=WebFrontend/QueueTime&values[]=call_count&values[]=average_response_time&from=2014-03-01T20:59:00+00:00&to=2014-03-01T21:59:00+00:00&summarize=true'
```

アプリケーションは、問題の期間のキュー時間がゼロである可能性があります。その場合、 `WebFrontend/QueueTime`指標の値はゼロになります。

<Callout variant="tip">
  アプリがキュー時間を報告し<DNT>**never**</DNT>場合、メトリックス`WebFrontend/QueueTime`は存在しません。
</Callout>

## レスポンスタイム [#app_rep_time]

[APM <DNT>**Summary**</DNT> ページ](/docs/applications-menu/applications-overview)では、[レスポンスタイムは](/docs/data-analysis/user-interface-functions/view-your-data/response-time)アプリのメイン チャート内にオーバーレイされた線です。 この行に表示されているメトリックス値を取得するには、上記と同じ数式と 2 つのコマンドを使用しますが、コマンドから`summarize=true`を削除します。
