---
title: addRelease
type: apiDoc
shortDescription: 同一ページに複数のJavaScriptバンドルを使用したリリースを識別するために、一意の名前とIDを追加します。
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to identify releases with multiple components on the same page.
freshnessValidatedDate: never
translationType: machine
---

## 構文

```js
newrelic.addRelease(string $release_name, string $release_id)
```

同一ページに複数のJavaScriptバンドルを使用したリリースを識別するために、一意の名前とIDを追加します。

## 要件

* Browser Pro または Pro+SPA エージェント (v1016 以降)

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

<InlinePopover type="browser"/>では、リリースは、現在実行されているアプリケーションのバージョンに関する情報を使用してエラーをタグ付けする方法です。 これは、共有コンポーネントが異なるチームによって所有されているサイトや、複数のアプリケーションが独立してデプロイされているが同じページで実行されるサイトで役立ちます。

最近のウェブアプリケーションは相互に関連する部分が多いため、1つのアプリケーションには、同じページの読み込みに関連する複数の（異なる名前の）リリースが存在する場合があります。例えば、リリースを使って次のようなことができます。

* キャッシュされた古いバージョンのアプリで発生したエラーと、新しいバージョンで発生したエラーの違いを確認できます。
* A/Bテスト、スローロールアウト、機能フラグ、その他の高度なデプロイメント方法で発見された問題を特定します。
* [ブラウザのソースマップ](/docs/new-relic-browser-source-map-support) のどのバージョンを使用するかを決定します。

JavaScriptのURLが一意でない場合は、ブラウザエージェントへのこのAPI呼び出しでリリース名と識別子を指定する必要があります。この情報は、ソースマップをストレージサービスに公開するときにも必要です。このAPIは、同じページに複数のJavaScriptバンドルがあるリリースを識別するためのブラウザー監視用のIDを追加します。

コードをデプロイするたびにアプリの JavaScript バンドルの URL が<DNT>**is unique**</DNT>である場合、ブラウザ監視ではリリースを識別するための追加情報は必要ありません。 たとえば、一部のフロントエンド デプロイメント ツールでは、デプロイされたコードのファイル名に Jenkins ビルド番号または`git commit sha`使用されます。 これらは、エラーの原因となったリリースを一意に特定するのに十分です。

ページの読み込み後、できるだけ早く`newrelic.addRelease()`を呼び出します。ブラウザー エージェントが確認するすべてのエラーは、そのバージョンの JavaScript コードに関連付けられます。

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
        `$release_name`

        _ストリング_
      </td>

      <td>
        <DNT>**Required.**</DNT> コンポーネントの簡単な説明。たとえば、プロジェクト、アプリケーション、ファイル、ライブラリの名前など。
      </td>
    </tr>

    <tr>
      <td>
        `$release_id`

        _ストリング_
      </td>

      <td>
        <DNT>**Required.**</DNT> このリリースの ID またはバージョン。たとえば、バージョン番号、CI 環境のビルド番号、GitHub SHA、GUID、またはコンテンツのハッシュなど。 New Relic はこの値を文字列に変換するため、必要に応じて`null`または`undefined`使用することもできます。

        `$release_name`と`$release_id`の組み合わせは一意でなければなりません。例えば：

        * `'signup', '2.4.0'`

        * `'signup', '2.4.1'`

          しかし、同じバージョンを異なるコンポーネントに使用することは可能です。例えば、次のようになります。

        * `'signup', '2.4.0'`

        * `'logout', '2.4.0'`
      </td>
    </tr>
  </tbody>
</table>

## 例

### 現在のショートSHA [#release-id-example1]

```js
newrelic.addRelease('checkout page', 'a818994')
```

### セマンティック・バージョニング [#release-id-example2]

```js
newrelic.addRelease('jquery.min.js', 'v3.1.1')
```
