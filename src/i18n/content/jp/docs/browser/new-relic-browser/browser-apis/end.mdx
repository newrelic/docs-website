---
title: end (SPA API)
type: apiDoc
shortDescription: 現在の時刻でのSPAインタラクションを終了します。
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call with browser to end the interaction at the current time.
freshnessValidatedDate: never
translationType: machine
---

## 構文

```js
newrelic.interaction().end()
```

現在の時刻でのSPAインタラクションを終了します。

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

この SPA メソッドは、現在の時点でのブラウザとの対話を終了します。それ以降のコールバックやリクエストは、SPA インタラクションの一部としては含まれません。

## 戻り値

このメソッドは、 `interaction()`によって作成されたものと同じAPIオブジェクトを返します。

## 例

```js
router.addRoute('/profile', () => {
  startSlowBackgroundAjax(); // Start work that will continue past the end of the interaction
  renderProfileComponents().then(() => { // Do work that is part of the interaction
    newrelic.interaction().end(); // End the interaction once the important components an the page have finished rendering
  });
});
```
