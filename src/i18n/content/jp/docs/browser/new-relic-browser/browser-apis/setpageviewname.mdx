---
title: setPageViewName
type: apiDoc
shortDescription: ページビューをグループ化して、URLの構造を助けたり、URLのルーティング情報を取得したりします。
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: 'Browser API call to group page views, to help URL structure or help capture the URL''s routing information.'
freshnessValidatedDate: never
translationType: machine
---

## 構文

```js
newrelic.setPageViewName(string $name[, string $host])
```

ページビューをグループ化して、URLの構造を助けたり、URLのルーティング情報を取得したりします。

## 要件

* ブラウザ Lite、Pro、または Pro+SPA エージェント (v593 以降)

* npm を使用してブラウザ エージェントをインストールしている場合は、 `BrowserAgent`クラスをインスタンス化するときに少なくとも 1 つの機能を有効にする必要があります。たとえば、次を`features`配列に追加します。

  ```js
  import { Metrics } from '@newrelic/browser-agent/features/metrics'

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      Metrics
    ]
  }
  ```

  詳細については、 [npm ブラウザのインストールに関するドキュメントを](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent)参照してください。

## 説明

URL 構造で有用なグループ化が提供されない場合、またはブラウザ エージェントがルーティング情報が保存されている URL の部分をキャプチャしない場合、カスタマイズされたページ名を使用すると、ページ ビューをより効果的にグループ化することができます。`PageView`[イベント](/docs/using-new-relic/data/understand-data/new-relic-data-types#event-data)をクエリすると、カスタム名が`browserTransactionName`属性として公開されます。カスタム名は<InlinePopover type="browser"/> UI。

ページ URL の代わりにカスタマイズされた[ページ ビュー名](/docs/browser/new-relic-browser/additional-standard-features/page-views-insights-your-sites-popularity)を使用するには、名前をスラッシュで区切られた文字列としてフォーマットします。正しく表示するには、 `window load`イベントが発生する前にこの呼び出しを行ってください。

<Callout variant="tip">
  この API 呼び出しは、ブラウザの標準ページ ビューと[`PageView`](/docs/insights/insights-data-sources/default-data/browser-default-events-attributes-insights#browser-attributes-table)イベントのデータに適用されます。SPA ページ ビューと`BrowserInteraction`イベントのカスタム名を設定するには、 [SPA: setName](/docs/browser/new-relic-browser/browser-agent-spa-api/spa-set-name)を参照してください。両方の呼び出しを一緒に使用することをお勧めします。
</Callout>

## パラメーター

<table>
  <thead>
    <tr>
      <th width="25%">
        パラメータ
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$name`

        _ストリング_
      </td>

      <td>
        必須項目です。使用するページ名です。半角英数字で入力してください。
      </td>
    </tr>

    <tr>
      <td>
        `$host`

        _ストリング_
      </td>

      <td>
        オプション。デフォルトは`http://custom.transaction`です。通常、 `host`をサイトのドメイン URI に設定します。

        これらのカスタム トランザクションをさらにグループ化するには、カスタム`host`を指定します。それ以外の場合、ページ ビューにはデフォルト ドメイン`custom.transaction`が割り当てられます。名前内のセグメントがまだ表示されていない場合は、 [URL 許可リスト設定](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls)に明示的に追加する必要があります。
      </td>
    </tr>
  </tbody>
</table>

## 例

```js
newrelic.setPageViewName('/login')
// Or
newrelic.setPageViewName('/login', 'https://www.myapp.com')
```
