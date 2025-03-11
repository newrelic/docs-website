---
title: setUserId
type: apiDoc
shortDescription: ページ上の後続のイベントにユーザー定義の識別子文字列を追加します。
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to add an identifier to subsequent events on the page.
freshnessValidatedDate: never
translationType: machine
---

## 構文

```js
newrelic.setUserId(value: string|null)
```

ページ上の後続のイベントにユーザー定義の識別子文字列を追加します。

## 要件

* ブラウザ Lite、Pro、または Pro+SPA エージェント (v1.230.0 以降)

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

有効な値でこの関数を実行すると、属性が手動で設定解除されるまで、Browseragent はすべてのイベントとともに値を`enduser.id`属性として記録します。 識別子はbrowserに保存されるため、_同じ_オリジンの以降のページ訪問では、イベント <DNT>**within a session**</DNT> スパンに識別子が付加されます。 この機能は、 browserプライバシー設定に応じて変動する場合がありますのでご了承ください。 この関数が`value = null`で呼び出されると、既存のユーザー ID が<DNT>**both**</DNT>現在のページのイベントとストレージから削除されます。

ID は、特に [Errors Inbox](/docs/errors-inbox/errors-inbox/) の使用のために、JavaScriptError イベントに添付されます。互換性のあるエージェント バージョンで [SPA 監視を](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring) 使用している場合、ユーザー ID も [`newrelic.interaction`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteraction) イベントに含まれます。

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
        必要。エンド ユーザーの文字列識別子。すべてのブラウザー イベントを特定のユーザーに関連付けるのに役立ちます。 `value` パラメータは一意である必要はありません。ID が一意である必要がある場合は、呼び出し元がその検証を担当します。

        `null` 値を渡すと、既存のユーザー ID が設定解除されます。
      </td>
    </tr>
  </tbody>
</table>

## 例

### エンド ユーザーの「セッションの開始」をマークする

```js
newrelic.setUserId('user-1234-v1.0')
```

### イベントが現在のユーザーに帰属しないようにする

```js
newrelic.setUserId(null)
```
