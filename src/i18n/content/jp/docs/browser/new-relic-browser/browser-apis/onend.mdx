---
title: onEnd (SPA API)
type: apiDoc
shortDescription: SPAインタラクションに関連する値を、そのインタラクションが保存される前に変更することができます。
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call to add and update values at the end of an interaction event for browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

## 構文

```js
newrelic.interaction().onEnd(function $callback)
```

インタラクションを保存する前に、SPA インタラクションに関連付けられた値を変更します。

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

この呼び出しは、 [`getContext()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractiongetcontext)と同じオブジェクトを提供します。これが呼び出されると、インタラクションを記録する前に最終的な調整を行うことができます。たとえば、コンテキスト値に基づいて追加の[属性](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#attribute)を追加できます。

他にも、相互作用を修正する方法があります。

* [`setName()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsetname)
* [`save()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsave)
* [`ignore()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionignore)
* [`setAttribute()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsetattribute)

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
        必要です。この関数は、インタラクションの終了時に呼び出されます。この関数は、1つのパラメータ（インタラクションコンテキスト）を指定して呼び出されます。
      </td>
    </tr>
  </tbody>
</table>

## 戻り値

このメソッドは、 `interaction()`によって作成されたものと同じAPIオブジェクトを返します。

## 例

```js
// router.js
router.addRoute('/dashboard', () => {
  const interaction = newrelic.interaction().onEnd(ctx => {
    interaction.setAttribute(
      'averageChartLoadTime',
      ctx.totalChartLoadTime / ctx.chartLoadCount
    );
  });
  getCharts().forEach(loadChart);
});

// chart-loader.js
function loadChart(chart) {
  const start = Date.now();
  chart.load().then(() => {
    const loadTime = Date.now() - start;
    interaction.getContext(ctx => {
      ctx.totalChartLoadTime = (ctx.totalChartLoadTime || 0) + loadTime;
      ctx.chartLoadCount += (ctx.chartLoadCount || 0) + 1;
    });
  })
}
```
