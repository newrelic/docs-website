---
title: AjaxRequestイベントのフィルタリング
metaDescription: 'For New Relic browser monitoring: use the app settings page to filter which network calls are recorded as AjaxRequest events.'
freshnessValidatedDate: never
translationType: machine
---

[エージェント バージョン 1211](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/)以降では、ページによって行われたすべてのネットワーク リクエストが`AjaxRequest`イベントとして記録されます。 <DNT>**Application settings**</DNT>ページの拒否リスト設定オプションを使用して、イベントを記録する要求をフィルタリングできます。

## 拒否リストの使用

リクエストは3つの方法でブロックされます。

* すべての`AjaxRequest`イベントの記録をブロックするには、アスタリスク`*`をワイルドカードとして追加します。
* ドメインへの`AjaxRequest`イベントの記録をブロックするには、ドメイン名のみを入力します。例： `example.com`
* 特定のドメインとパスへの`AjaxRequest`イベントの記録をブロックするには、ドメインとパスを入力します。例： `example.com/path`

拒否リストでは、URLのプロトコル、ポート、サーチ、ハッシュは無視されます。

## 拒否リストへのアクセス

アプリケーションがイベント作成時にフィルタリングするURLの拒否リストを更新するには、アプリの設定ページに移動します。

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Settings > Application settings**
   </DNT>

   に移動します。

2. <DNT>
     **Ajax Request Deny List**
   </DNT>

   の下に、アプリに適用するフィルターを追加します。

3. エージェント設定を更新するには、

   <DNT>
     **Save application settings**
   </DNT>

   選択します。

4. [Browser エージェントを再デプロイします](/docs/browser/new-relic-browser/installation/upgrade-browser-agent)(関連付けられている

   <InlinePopover type="apm"/>

   エージェントを再起動するか、コピー/貼り付けのbrowserインストレーションを更新します)。

## バリデーション

追加したフィルターが期待どおりに機能するかどうかを検証するには、フィルターに一致する`AjaxRequest`イベントに対して NRQL クエリを実行します。

```sql
FROM AjaxRequest SELECT * WHERE requestUrl LIKE `%example.com%`
```
