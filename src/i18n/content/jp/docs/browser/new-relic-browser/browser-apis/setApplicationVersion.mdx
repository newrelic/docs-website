---
title: setApplicationVersion
type: apiDoc
shortDescription: ユーザー定義のアプリケーションのバージョン文字列をページ上の後続のイベントに追加します。
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to add an application version string to subsequent events on the page.
freshnessValidatedDate: '2023-08-17T00:00:00.000Z'
translationType: machine
---

## 構文

```js
newrelic.setApplicationVersion(value: string|null)
```

ユーザー定義のアプリケーションのバージョン文字列をページ上の後続のイベントに追加します。

## 要件

* ブラウザ Lite、Pro、または Pro+SPA エージェント (v1.238.0 以降)

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

有効な値を指定してこの関数を実行すると、ブラウザ エージェントは、属性が手動で設定解除されるか、ページがアンロードされるまで、後続のすべてのイベントに `application.version` 属性を追加します。関数が複数回呼び出された場合、指定された最新の値のみが後続のイベントで送信されます。この関数が値 `null`で呼び出された場合、既存のアプリケーション バージョンは後続のイベントで送信を停止します。

`application.version` 属性を設定すると、エラーが発生しているソフトウェアのバージョンを特定するのに役立ちます。エラー受信箱の今後のリリースでは、ソフトウェアのどのバージョンでエラーが発生しているかを自動的に追跡します。互換性のあるエージェント バージョンで [SPA モニタリング](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring) を使用している場合、アプリケーション バージョンも [`newrelic.interaction`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteraction) イベントに含まれます。

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
        `value`

        _文字列_ または _null_
      </td>

      <td>
        必要。Web アプリケーションのバージョンを表す文字列。すべてのブラウザ イベントを特定のリリース タグに結び付けるのに役立ちます。`value` パラメータは一意である必要はありません。ID が一意である必要がある場合、呼び出し元がその検証を行う必要があります。

        `null` 値を渡すと、既存のアプリケーションのバージョンの設定が解除されます。
      </td>
    </tr>
  </tbody>
</table>

## 例

### アプリケーションバージョンでイベントを装飾する

```js
newrelic.setApplicationVersion('1.2.3') // decorates events with the property 'application.version':'1.2.3'
```

### アプリケーションのバージョンを装飾するイベントの停止

```js
newrelic.setApplicationVersion(null) // events will no longer have an 'application.version' property set
```
