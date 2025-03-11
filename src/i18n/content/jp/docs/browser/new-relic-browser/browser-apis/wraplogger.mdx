---
title: ラップロガー
type: apiDoc
shortDescription: 既存のbrowserログ記録メソッドをラップします。
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Automatically capture data passing through your existing browser logging methods as log events.
freshnessValidatedDate: never
translationType: machine
---

## 構文 [#wrap-syntax]

```js
newrelic.wrapLogger(parent: Object, functionName: string, options?: Object<{ customAttributes?: Object, level?: 'debug|error|info|trace|warn'}>)
```

既存のbrowserログ記録方法を通過するデータをログイベントとして自動的にキャプチャします。

## 要件 [#wrap-requirements]

* browser Pro、または Pro+SPA エージェント (v1.261.0 以上)

* npm を使用して Browseragent をインストールし、非標準の実装を使用する場合は、 `BrowserAgent`クラスをインスタンス化するときに`logging`機能を有効にする必要があります。 たとえば、 `features`配列に次のコードを追加します。

  ```js
  import { Logging } from '@newrelic/browser-agent/features/logging'

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      Logging
    ]
  }
  ```

詳細については、 [npm ブラウザのインストールに関するドキュメントを](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent)参照してください。

## 説明 [#wrap-description]

このメソッドに有効な親コンテナと子関数名を指定すると、ブラウザエージェントはラップされた関数が呼び出されるたびに新しいログイベントを記録します。 最初の引数は、呼び出された関数にログのメッセージとして渡されます。 ログイベントの詳細については、[ログUI](/docs/logs/ui-data/use-logs-ui/)参照してください。

`options`引数を使用して、これらのキャプチャされたログとともにオプションの設定を渡すことができます。 `options` 引数 (`options.customAttributes`) でAPIコールに指定されたカスタム アトリビュートは、このラッパーによって作成されたすべてのログ イベントにトップレベルのプロパティとして追加され、 [setCustomAttribute](/docs/browser/new-relic-browser/browser-agent-spa-api/set-custom-attribute)によるグローバル カスタム アトリビュートよりも優先されます。 キャプチャされたログの`level`制御するには、 `options`引数 ( `options.level` ) に`level`指定します。 デフォルトでは、ログレベルは`info`に設定されます。

## パラメーター [#wrap-parameters]

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
        `parent`

        *オブジェクト*
      </td>

      <td>
        必須。 ラップするターゲット関数を含むオブジェクト。
      </td>
    </tr>

    <tr>
      <td>
        `functionName`

        *ストリング*
      </td>

      <td>
        必須。 ラップするターゲット関数の名前。 この関数は`parent`オブジェクト内に存在し、「function」のタイプと一致する必要があります。
      </td>
    </tr>

    <tr>
      <td>
        `options`

        *オブジェクト*
      </td>

      <td>
        オプション。 ラッパーによってキャプチャされたすべてのログにオプションの設定を提供するために使用されるオブジェクト。 `options.customAttributes`は、指定された属性ごとに作成されたログに最上位のプロパティと値を割り当てるキー:値のペアのオブジェクトです。 列挙型`options.level`は、作成されたログイベントにログレベルを割り当てます。 `level`は次のいずれかである必要があります: `debug | error | info | trace | warn` 。 ログレベルが指定されていない場合、デフォルトで`info`になります。
      </td>
    </tr>
  </tbody>
</table>

## 例 [#wrap-examples]

### ネイティブコンソールメソッドからログ項目をキャプチャする [#wrap-capture-log-items]

```js
newrelic.wrapLogger(console, 'info')
// from this point forward, every time `console.info` is invoked, it will save a log event with:
// a message of --> <the first argument passed to console.info>
// a level of --> 'info'
```

### カスタムロガーからログ項目をキャプチャする [#wrap-capture-custom-logger]

```js
const myLoggers = {
  logger: function(){...}
}
newrelic.wrapLogger(myLoggers, 'logger')
// from this point forward, every time `myLoggers.logger` is invoked, it will save a log event with:
// a message of --> <the first argument passed to myLoggers.logger>
// a level of --> 'info'
```

### 指定されたレベルでログ項目をキャプチャする [#wrap-specified-level]

```js
const myLoggers = {
  logger: function(){...}
}
newrelic.wrapLogger(myLoggers, 'logger', {level: 'debug'})
// from this point forward, every time `myLoggers.logger` is invoked, it will save a log event with:
// a message of --> <the first argument passed to myLoggers.logger>
// a level of --> 'debug'
```

### カスタムアトリビュートでログアイテムをキャプチャする [#wrap-custom-attributes]

```js
const myLoggers = {
  logger: function(){...}
}
newrelic.wrapLogger(myLoggers, 'logger', {customAttributes: {myFavoriteApp: true}})
// from this point forward, every time `myLoggers.logger` is invoked, it will save a log event with:
// a message of --> <the first argument passed to myLoggers.logger>
// a level of --> 'info'
// an attribute of --> 'myFavoriteApp: true'
```

### 複数のロガーをラップする [#wrap-multiple-loggers]

```js
const myLoggers = {
  myInfoLogger: function(){...},
  myDebugLogger: function(){...}
}
newrelic.wrapLogger(myLoggers, 'myInfoLogger', {level: 'info'})
newrelic.wrapLogger(myLoggers, 'myDebugLogger', {level: 'debug'})
// from this point forward, every time `myLoggers.myInfoLogger` is invoked, it will save a log event with:
// a message of --> <the first argument passed to myLoggers.myInfoLogger>
// a level of --> 'info'

// every time `myLoggers.myDebugLogger` is invoked, it will save a log event with:
// a message of --> <the first argument passed to myLoggers.myDebugLogger>
// a level of --> 'debug'
```