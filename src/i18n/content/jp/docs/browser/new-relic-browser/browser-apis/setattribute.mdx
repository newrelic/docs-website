---
title: setAttribute (SPA API)
type: apiDoc
shortDescription: ブラウザでの現在のインタラクションにのみ、カスタム SPA 属性を追加します。
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call with browser monitoring to add a custom attribute only to the current interaction.
freshnessValidatedDate: never
translationType: machine
---

## 構文

```js
newrelic.interaction().setAttribute(string $key, any $value)
```

ブラウザでの現在のインタラクションにのみ、カスタム SPA 属性を追加します。

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

このメソッドは、カスタム属性をインタラクションに追加します。保存すると、この属性は結果の[`BrowserInteraction`](/docs/insights/explore-data/attributes/browser-default-attributes-insights#browserinteraction-attributes)イベントで新しいプロパティとして公開されます。[`setCustomAttribute()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-api-newrelicsetcustomattribute)で追加された属性とは異なり、インタラクションに追加された属性は現在のインタラクションにのみ適用され、 [`PageAction`](/docs/insights/explore-data/attributes/browser-default-attributes-insights#pageaction-list)イベントには追加されません。

New Relic は、これらのカスタム属性を[`setCustomAttribute()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-api-newrelicsetcustomattribute)の呼び出しによって設定されたカスタム属性と、サーバー側エージェントによって設定されたカスタム属性とマージします。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Order of precedence**
        </DNT>
      </th>

      <th>
        <DNT>
          **Custom attributes**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        最高レベル
      </td>

      <td>
        `BrowserInteraction` SPA API で設定された属性: これらは、他の 2 つの方法で設定された属性を上書きします。
      </td>
    </tr>

    <tr>
      <td>
        次のレベル
      </td>

      <td>
        `setCustomAttribute()`によって設定された属性: これらはサーバー側のカスタム属性を上書きします。
      </td>
    </tr>

    <tr>
      <td>
        最下位
      </td>

      <td>
        サーバーサイドで設定されるカスタム属性。
      </td>
    </tr>
  </tbody>
</table>

カスタム属性のエラーは、 [JS エラー ページ](/docs/browser/new-relic-browser/browser-pro-features/javascript-errors-page-detect-analyze-errors)のイベントに含まれます。API を介してカスタム属性のエラーを表示または記録するには、ブラウザ エージェント API の[`noticeError`](/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicnoticeerror-browser-agent-api)呼び出しを使用します。

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
        `$key`

        _ストリング_
      </td>

      <td>
        必須。`BrowserInteraction`イベントで属性名として使用されます。
      </td>
    </tr>

    <tr>
      <td>
        `$value`

        _どんな_
      </td>

      <td>
        必須。`BrowserInteraction`イベントの属性値として使用されます。これは、文字列、数値、ブール値、またはオブジェクトにすることができます。オブジェクトの場合、New Relic はそれを JSON 文字列にシリアル化します。
      </td>
    </tr>
  </tbody>
</table>

## 戻り値

このメソッドは、 `interaction()`によって作成されたものと同じAPIオブジェクトを返します。

## 例

```js
router.addRoute('/profile', () => {
  const user = getCurrentUser();
  newrelic.interaction()
    .setAttribute('username', user.username)
    .setAttribute('userId', user.id);
  renderProfile(user);
});
```
