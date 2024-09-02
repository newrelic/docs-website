---
title: setErrorHandler
type: apiDoc
shortDescription: ブラウザ エージェントがキャプチャした既知のエラーを選択的に無視し、グループ化できます。
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser monitoring API call to allow selective ignoring and grouping of known errors captured by the agent.
freshnessValidatedDate: never
translationType: machine
---

## 構文

```js
newrelic.setErrorHandler(function $callback)
```

ブラウザ エージェントがキャプチャした既知のエラーを選択的に無視し、グループ化できます。

## 要件

* Browser Pro または Pro+SPA エージェント (v974 以降)

  * エラーのグループ化機能を使用するには、 [v1.230.0](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1.230.0)以降が必要です。

* npm を使用してブラウザ エージェントをインストールしている場合は、 `BrowserAgent`クラスをインスタンス化するときに`jserrors`機能を有効にする必要があります。`features`配列に以下を追加します。

  ```js
  import { JSErrors } from '@newrelic/browser-agent/features/jserrors';

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      JSErrors
    ]
  }
  ```

  詳細については、 [npm ブラウザのインストールに関するドキュメントを](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent)参照してください。

## 説明

`newrelic.setErrorHandler()` API 呼び出しを使用すると、ブラウザ エージェントがキャプチャした既知のエラーを選択的に無視できます。ブラウザー エージェントがキャプチャするエラーごとに呼び出される単一のエラー ハンドラー関数を使用します。ハンドラーが`true`を返す場合、New Relic はエラーを記録しませ**ん**。それ以外の場合、エラーは通常どおり処理されます。

さらに、エージェントの新しいバージョンでは、フィンガープリントまたはカスタム提供ラベルによる例外のグループ化がサポートされています。これを行うには、 `group` プロパティが目的の _文字列_に設定されたブール値の代わりにオブジェクトを返します。空の文字列、またはこの正確な仕様に準拠しないオブジェクトを指定すると、エラーが _無視される_ `true` の場合と同じように扱われることに注意してください。この動作は、以前のバージョンと下位互換性があります。

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
        必須<DNT>**.**</DNT>エラーが発生すると、エラー オブジェクトをパラメーターとしてコールバックが呼び出されます。 コールバックはエラーごとに呼び出されるため、1 つのエラーに固有のものではありません。
      </td>
    </tr>
  </tbody>
</table>

## 例

### 基本的なエラー ハンドラー関数を使用する [#include-error]

ブラウザエージェントが捕捉した特定のエラーを無視するには、コールバック関数の内部にエラーオブジェクトを含めます。

```js
newrelic.setErrorHandler(function(err) {
  if (shouldIgnoreError(err)) {
    return true;
  } else {
    return false;
  }
});
```

### ハンドラー関数のフィンガープリント エラー

カスタム ラベルを特定のエラーに割り当てて、エラー インボックス UI に表示します。

```js
newrelic.setErrorHandler(function(err) {
  if (isReferenceError(err)) {
    return { group: 'My reference errors' }; // error is included and tagged under this label
  } else if (isSomeSpecificError(err)) {
    return { group: '' }; // error will be excluded!
    // return { Group: 'still excluded - prop name has capital G!' };
  } else {
    return false; // error is included without any label
  }
})
```
