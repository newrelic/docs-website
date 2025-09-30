---
title: ランタイム アップグレード エラーのトラブルシューティング
type: troubleshooting
tags:
  - Synthetics
  - Synthetic monitoring
  - Troubleshooting
  - Runtime conversion
metaDescription: null
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  2024年8月26日以降、パブリックロケーションまたはプライベートロケーションでレガシーランタイムを使用して新しいモニターを作成することはできなくなります。 2024年10月22日をもって、コンテナ化されたプライベートミニオン（1分間あたりの呼出し回数）とレガシーsyntheticランタイムバージョンの[サポートを終了](/whats-new/2024/04/whats-new-04-09-eol-synthetics-runtime-cpm)します。

  * パブリックロケーションの場合は、[ランタイム アップグレードUI](/docs/synthetics/synthetic-monitoring/using-monitors/runtime-upgrade-ui/)使用してモニターを最新のランタイムに更新します。
  * プライベートロケーションの場合、モニターの低下を回避するために[推奨する移行手順](/docs/synthetics/synthetic-monitoring/private-locations/job-manager-transition-guide/#monitorMigration)を確認してください。
</Callout>

## Scripted Browser: 要素を操作しようとすると失敗する [#promises]

古いランタイムで作成されたモニターを[Chrome 100 (またはそれ以降) のランタイム](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100)に対して検証する場合、Promise 処理の違いにより、ページ上の要素を見つけて操作する`findElement`などのメソッドが失敗する可能性があります。 モニターがレガシー ランタイムでは合格し、新しいランタイムでは失敗し、スクリーンショットに要素が存在する場合は、Promise 処理ロジックを改善する必要がある可能性があります。

Seleniumウェブの意見 Promise Manager と制御フローにより、Promise を管理せずに、レガシー ランタイムで一部の関数を順番に実行できるようになりました。 この機能はSeleniumウェブ意見 4.0 で削除され、ランタイムでは使用できなくなりました。 すべての非同期関数と Promise は、 `await`または`.then` Promise チェーンを使用して管理する必要があります。 これにより、スクリプト関数が期待どおりの順序で実行されるようになります。

たとえば、Promise マネージャーと制御フローにより、 `$browser.get` Promise を返し、Promise が正しく処理されていない場合でも、この部分的なスクリプトが正常に完了する可能性があります。

```js
$browser.get('http://example.com');

$browser.findElement($driver.By.css('h1'));
```

[Chrome 100 (またはそれ以降) のランタイム](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100)では、Promise を返すメソッドは、ステップを適切に順序付けるために await または`.then`構文を使用する必要があります。 より簡潔な構文と簡単な使用法のため、await の使用が推奨されますが、 `.then`プロミス チェーンも引き続きサポートされています。

```js
await $browser.get('http://example.com');

let el = await $browser.findElement($driver.By.css('h1'));
```

## スクリプト API: `request`との違い `got` [#request]

[Node.js 10 以前のスクリプトAPIランタイムは、](/docs/synthetics/synthetic-monitoring/using-monitors/manage-monitor-runtimes/#dependencies) `request` Node.js モジュールを使用して、 [APIテスト](/docs/synthetics/synthetic-monitoring/scripting-monitors/write-synthetic-api-tests-legacy/)に使用できる `$http` オブジェクトを提供していました。

[Node.js 16 以降のスクリプト API ランタイムでは、](/docs/synthetics/synthetic-monitoring/using-monitors/manage-monitor-runtimes/#apidependencies) `request`ではなく`got`が使用されます。 `request` モジュールは 2020 年に廃止され、新しいAPIまたはbrowserベースのランタイムには含まれなくなります。 `$http`オブジェクトは、 `got`を利用して、基本的なユースケースに対する下位互換性を提供しながら、非推奨のモジュールの使用を回避しながら、カスタムの`request`のようなエクスペリエンスを提供します。 `request`の高度な使用例はすべてサポートされているわけではありません。 [スクリプトの例と変換ガイド](/docs/synthetics/synthetic-monitoring/scripting-monitors/write-synthetic-api-tests/)が用意されています。

<Callout variant="tip">
  `$http`オブジェクトによって提供される`request`のようなエクスペリエンスは、Node.js 16 以降のスクリプト化された API ランタイムで`request`を直接使用しようとするすべての顧客に対しても返されます。
</Callout>

## スクリプト API: 予期しないトークン `JSON.parse` [#scripted-api-unexpected]

応答本文の操作中に`JSON.parse`関数を使用しようとすると、Node.js 16 以降のランタイムを使用するスクリプト API モニターで予期しないトークン エラーが発生する可能性があります。content-type 応答ヘッダーが`application/json`の場合、 `$http`オブジェクトによって返される応答本文は解析された JSON になります。`JSON.parse`を使用して応答本文を解析しようとする追加の呼び出しは、応答本文がすでに解析されているため、このエラーで失敗します。

コンテンツ タイプ応答ヘッダーが`application/json`でない場合、応答本文は自動的に解析されず、 `JSON.parse`関数を使用する必要があります。

## スクリプトAPI: `HEAD`または `GET` [#scripted-api-head-get]

HTTP `HEAD`または`GET`リクエストにリクエスト本文を含めることはできません。 Node 10 以前のランタイムで使用される`request`モジュールではこれが許可されていましたが、新しいランタイムではエラーが発生します。 いくつかの異なる設定によりエラーが発生する可能性がありますが、最も一般的な提案は次のとおりです。

* たとえ空であっても、リクエストに本文を含めないでください。
* `HEAD`または`GET`リクエストで不要なオプションは使用しないでください。 `json: true`

## スクリプト API: クエリ文字列 (qs) の違い [#scripted-api-query]

Node 10 以前のランタイムでは、書き込み文字列設定は`qs:`オプションを使用して渡されました。 Node 16 ランタイムの場合は、代わりに`searchParams:`オプションを使用してください。 オプションの名前のみを変更する必要があります。 クエリ文字列の内容を更新する必要はありません。

## スクリプト API: Cookie jar の違い [#scripted-api-cookie]

Node 10 以前のランタイムでは、オプション`jar: true`を使用して、リクエスト間で Cookie を Cookie jar に保存できました。

Node 16 ランタイムでは、 `tough-cookie`モジュールを使用して Cookie jar を作成し、代わりにリクエストでその Cookie jar を参照する必要があります。 cookiesという名前のクッキージャーを作成した場合は、オプションで次のように参照します。 `cookieJar: cookies`

## スクリプト API: フォームの違い [#scripted-api-form]

Node 10 以前のランタイムの`$http`オブジェクトに使用される`request`モジュールと、Node 16 ランタイムの`$http`オブジェクトに使用される`got`モジュールの違いにより、API モニターのフォームを使用したリクエストで問題が発生する可能性があります。

その場合は、この部分的な例に示すように、 `form-data`モジュールを使用してフォームを作成し、リクエストに含めてください。

```js
const FormData = require('form-data');

let form = new FormData();
form.set('fieldName1','value1');
form.set('fieldName2','value2');

let req = {
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'multipart/form-data',
  },
  body: form
}
```

## UUID モジュールのバージョンの違い [#uuid-module-version]

Node 16 ランタイムには、更新された`require`構文の使用を強制する`uuid`モジュールの新しいバージョンが含まれています。

Node 10以前: `const uuid = require('uuid');`

ノード 16 ( `uuidv4`の使用を想定): `const { v4: uuidv4 } = require('uuid');`

## スクリプトbrowser : 非推奨の警告 (`$browser` および `$driver` [#deprecations]

browserランタイムのバージョン 2.0.29 以降では、`$browser` および `$driver` の非推奨警告が削除されました。 パブリックロケーションを使用するときにこれらの警告は表示されなくなります。 プライベートプライベートロケーションの使用時にこれらの警告が表示される場合は、ノードbrowserランタイム イメージを更新してください。

## スクリプトbrowser : `waitForAndFindElement` および `waitForPendingRequests` [#waitMethods]

`waitForAndFindElement`メソッドと`waitForPendingRequests`メソッドは、Chrome 72 以前のスクリプト化されたブラウザ ランタイムで提供される New Relic カスタム メソッドです。Chrome 100 以降のランタイムでは引き続き`$driver`および`$browser`で使用できますが、Selenium WebDriver 4.1 API を`$selenium`および`$webDriver`で直接使用する場合は使用できません。この変更により、New Relic の Selenium WebDriver 実装が基本の Selenium WebDriver 実装とより適切に連携します。

新しいランタイムで`waitForAndFindElement`または`waitForPendingRequests`を引き続き使用することを選択したお客様は、 [コード例](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100/#waitForAndFindElement)をモニターに貼り付けることができます。