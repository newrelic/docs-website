---
title: actionText (SPA API)
type: apiDoc
shortDescription: ブラウザの操作を開始するためにクリックされたHTML要素のテキスト値を設定します。
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call with browser to set the name and trigger of a browser interaction that is not a route change or URL change.
freshnessValidatedDate: never
translationType: machine
---

## 構文

```js
newrelic.interaction().actionText(string $value)
```

ブラウザの操作を開始するためにクリックされたHTML要素のテキスト値を設定します。

## 要件

* ブラウザ Pro+SPA エージェント (v1099 以降)

* npm を使用してブラウザ エージェントをインストールしている場合は、 `BrowserAgent`クラスをインスタンス化するときに`spa`機能を有効にする必要があります。`features`配列に以下を追加します。

  ```js
  import { Spa } from '@newrelic/browser-agent/features/spa';

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      Spa
    ]
  }
  ```

  詳細については、 [npm ブラウザのインストールに関するドキュメントを](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent)参照してください。

## 説明

このSPA監視メソッドは、ブラウザの操作を開始するためにクリックされたHTML要素のテキスト値を設定します。値は、 `BrowserInteraction`イベントで[`actionText`](/docs/insights/explore-data/attributes/browser-default-attributes-insights#interaction-actionText)属性として公開されます。

注: エージェントは、クリックされた HTML 要素のテキスト値を自動的に決定しようとします。これは、 `<a>` 、 `<button>` 、および`<input>`要素にのみ適用されます。`actionText` API は、これでは不十分または正確でない場合に使用できます。

<Callout variant="tip">
  この 呼び出しは、API の[ SPA ページ ビュー のデータと](/docs/browser/single-page-app-monitoring/get-started/introduction-single-page-app-monitoring)browser [`BrowserInteraction`](/docs/insights/insights-data-sources/default-data/browser-default-events-attributes-insights#browserinteraction-attributes)イベント タイプに適用されます。標準ページビューと<DNT>**`PageView`**</DNT>イベント タイプにカスタム名を設定するには、 [`setPageViewName`](/docs/browser/new-relic-browser/browser-agent-spa-api/set-pageview-name)を参照してください。 両方の呼び出しを一緒に使用することをお勧めします。
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
        `$value`

        _ストリング_
      </td>

      <td>
        インタラクションを開始したアクションを表すHTML要素のテキスト値です。
      </td>
    </tr>
  </tbody>
</table>

## 戻り値

このメソッドは、 `interaction()`によって作成されたものと同じAPIオブジェクトを返します。

## 例

```js
document.getElementById('subscribe').addEventListener('submit', () => {
    newrelic.interaction().actionText('Create Subscription');
    createSubscription();
});
```
