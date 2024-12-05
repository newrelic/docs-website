---
title: ブラウザエージェントデータの難読化
tags:
  - Browser monitoring
  - Obfuscation
metaDescription: You can configure the browser agent to obfuscate the data it sends.
freshnessValidatedDate: '2023-10-24T00:00:00.000Z'
translationType: machine
---

<Callout variant="important">
  この機能は現在、コピー/ペーストまたは NPM ブラウザーのインストール方法を使用しているユーザーが利用できます。現在、利用可能な UI または NerdGraph 構成オプションはありません。私たちは、これらおよびその他の構成オプションへのアクセスを改善するために引き続き取り組んでいます。
</Callout>

New Relic は、アプリケーションのパブリック構造で機密情報を使用しないことを推奨していますが、これが常に可能であるとは限らないことも理解しています。送信するすべてのペイロード内のデータを選択的に難読化するようにブラウザー エージェントを構成できます。これは、アプリケーションがナビゲーション パスやエラー メッセージなど、エージェントがキャプチャする場所で機密データを使用する場合に便利です。

## 使い方 [#how-it-works]

ブラウザ エージェント[バージョン 1216](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes)以降では、送信ハーベスト ペイロードに難読化ルールを適用できます。

これらのルールを設定するには、次のブラウザ エージェント プロパティを設定する必要があります。

* プロパティ`init.obfuscate`には、送信前に各ハーベストを変更するために使用されるセレクターと置換の配列が含まれています。

  * 現在、難読化するにはコピー/ペーストまたは NPM インストール方法を使用する必要があるため、JavaScript 構成セクションを手動で編集し、難読化条件が含まれるように`obfuscate`配列を設定する必要があります。

### 推奨事項

このプロパティを構成するときは、次のことをお勧めします。

* 意図的な正規表現パターンを使用して、難読化が必要なもののみを難読化します。

  * 不必要に難読化すると、データをグループ化する際の粒度が低下したり、エージェントがキャプチャした内容を理解する能力が低下したりするなどの副作用が生じる可能性があります。

* 機密データを、どのデータが編集されたかを示す中立的かつ一般的な用語に置き換えます。

  * 例: `/account-id/g` --> `ACCOUNT_ID`

### コピー＆ペーストでインストール [#copy-paste]

コピー/ペーストのインストール方法を使用している場合は、エージェント ローダーの前にブラウザの JavaScript 設定に次の設定を追加します。

```js
window.NREUM.init = {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: <RegExp | string>
        replacement: <string>
      },
      ...<other obfuscation rules>...
    ]
}
```

### NPMのインストール [#npm]

NPM ブラウザーのインストール方法を使用している場合は、ブラウザー エージェントの初期化時に次の構成を追加します。

```js
new BrowserAgent({ 
  init: {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: <RegExp | string>
        replacement: <string>
      },
      ...<other obfuscation rules>...
    ]
  }
})
```

### 例

```js
window.NREUM.init = {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: /user-id/g,
        replacement: 'USER_ID'
      },
    ]
}
```

```js
new BrowserAgent({ 
  init: {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: /account-id/g,
        replacement: 'ACCOUNT_ID'
      },
    ]
  }
})
```
