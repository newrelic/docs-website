---
title: getContext (SPA API)
type: apiDoc
shortDescription: 現在のSPAインタラクションの値を非同期的にBrowserに格納します。
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call to store values across the current SPA interaction asynchronously in browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

## 構文

```js
newrelic.interaction().getContext(function $callback)
```

現在の SPA インタラクションの値をブラウザに非同期的に格納します。

## 要件

* ブラウザ Pro+SPA エージェント (v963 以降)

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

このAPIメソッドは、現在のインタラクションに関連するコンテキストオブジェクトと非同期に呼び出されるコールバックを取ります。このメソッドは、現在のインタラクションに関連するデータを集約するために使用します。これらの値は、コードの他の部分で使用することができます。

このコンテキストは、 [`onEnd`](/docs/browser/new-relic-browser/browser-agent-spa-api/spa-on-end)呼び出しによっても提供されます。

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
        `$callback`

        _機能_
      </td>

      <td>
        必要です。インタラクション・コンテキスト・オブジェクトを唯一の引数として受け取る関数です。
      </td>
    </tr>
  </tbody>
</table>

## 戻り値

このメソッドは、 `interaction()`によって作成されたものと同じAPIオブジェクトを返します。

## 例

```js
router.addRoute('/products/{productId}', params => {
  newrelic.interaction().getContext(ctx => ctx.productId = params.productId);
  renderProduct(params.productId);
  updateHash();
});

window.addEventListener('hashchange', (ev) => {
  const interaction = newrelic.interaction();
  interaction.getContext(ctx => {
    if (ctx.productId) {
      interaction.setAttribute('productId', ctx.productId);
    }
  });
});
```
