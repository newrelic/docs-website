---
title: 認証付きのサイトを扱う
tags:
  - Synthetics
  - Synthetic monitoring
  - Using monitors
metaDescription: Supported authentication methods for synthetic monitors and how to provide authentication using scripted monitors.
freshnessValidatedDate: never
translationType: machine
---

シンセティック・モニタリングは、様々な認証メカニズムをサポートしています。選択したモニターの種類に応じて、Basic、Digest、NTLM、NTLMv2が含まれます。

## モニタータイプ別の対応認証 [#supported\_authentication][#supported_authentication]

様々な [のモニタータイプ](/docs/synthetics/new-relic-synthetics/using-monitors/add-edit-monitors#types-monitors) のサポートは、お客様のサイト構成によって異なります。

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Synthetic monitor type**
        </DNT>
      </th>

      <th style={{ textAlign: "center" }} width={150}>
        ベーシック
      </th>

      <th style={{ textAlign: "center" }} width={150}>
        ダイジェスト
      </th>

      <th style={{ textAlign: "center" }} width={150}>
        [NTLM](#tip)
      </th>

      <th style={{ textAlign: "center" }} width={150}>
        [NTLMv2](#tip)
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Ping
      </td>

      <td style={{ textAlign: "center" }}>
        <Icon name="fe-check" />
      </td>

      <td style={{ textAlign: "center" }} />

      <td style={{ textAlign: "center" }} />

      <td style={{ textAlign: "center" }} />
    </tr>

    <tr>
      <td>
        シンプルブラウザ
      </td>

      <td style={{ textAlign: "center" }}>
        <Icon name="fe-check" />
      </td>

      <td style={{ textAlign: "center" }}>
        <Icon name="fe-check" />
      </td>

      <td style={{ textAlign: "center" }}>
        <Icon name="fe-check" />
      </td>

      <td style={{ textAlign: "center" }}>
        <Icon name="fe-check" />
      </td>
    </tr>

    <tr>
      <td>
        スクリプト化ブラウザ
      </td>

      <td style={{ textAlign: "center" }}>
        <Icon name="fe-check" />
      </td>

      <td style={{ textAlign: "center" }}>
        <Icon name="fe-check" />
      </td>

      <td style={{ textAlign: "center" }}>
        <Icon name="fe-check" />
      </td>

      <td style={{ textAlign: "center" }}>
        <Icon name="fe-check" />
      </td>
    </tr>

    <tr>
      <td>
        APIテスト
      </td>

      <td style={{ textAlign: "center" }}>
        <Icon name="fe-check" />
      </td>

      <td style={{ textAlign: "center" }} />

      <td style={{ textAlign: "center" }} />

      <td style={{ textAlign: "center" }} />
    </tr>
  </tbody>
</table>

<Callout variant="tip">
  NTLM と NTLMv2 については、合成モニタリングでは Linux 環境で Chrome ブラウザを使用しているため、設定がこのクライアントサイドの環境に対応している必要がある。また、URIエンコードされたクレデンシャルを許可する必要がある。
</Callout>

## 認証情報の提供 [#url\_encoding][#url_encoding]

モニターは、要求された URL ( `http(s)://username:password@site.com`など) でエンコードすることにより、認証資格情報を提供します。これを行うには、スクリプトで`encodeURIComponent('string')` JavaScript 関数を使用します。例えば：

```js
var username = encodeURIComponent("username");
var password = encodeURIComponent("password");
var url = "https://" + username + ":" + password + "@site.com";
```

pingやシンプルなブラウザモニタの値をエンコードするには、 [以下の手順に従ってください](https://www.w3schools.com/tags/ref_urlencode.ASP) 。

完全な URL `http(s)://username:password@site.com`は、対応する合成のチェック データにプレーン テキストとして記録されます。このモニターの結果を表示すると、URL が表示されます。

## コード例 [#code\_example][#code_example]

ここでは、いくつかのモニタータイプのコード例を紹介します。

### スクリプト化ブラウザ

```js
$browser.get("https://username:password@site.com").then(function () {
  $browser.takeScreenshot();
});
```

```js
$browser.get("https://username@domain.com:password@site.com").then(function () {
  $browser.takeScreenshot();
});
```

### APIテスト

```js
$http.get("https://username:password@site.com", function (err, resp, body) {
  console.log(err, resp, body);
});
```

## NTLM認証に関する問題のトラブルシューティング

New Relic が NTLM エンドポイントに対して適切に認証できるかどうかは、 [curl](https://curl.haxx.se) またはスクリプトによる API モニターで確認することができます。エンドポイントにアクセスできるホストまたはロケーションを使用する必要があります。

### カール

これを行うには、以下のコマンドを実行します。URLはテストしたいエンドポイントに置き換えてください。

```sh
curl -v --ntlm http://example.com
```

このコマンドの出力には、サーバーが有効な認証メカニズムとして NTLM over HTTP を提供していることを示す次の`response`ヘッダーが表示されます。

```
WWW-Authenticate: NTLM
```

### スクリプトによるAPIモニター

新しいAPIテストモニターを作成し、エンドポイントにアクセスできる場所に割り当てます。URLを置換し、以下のスクリプトを検証します。このスクリプトは、すべてのレスポンス・ヘッダーをスクリプト・ログに出力します。

```js
$http.get("https://www.newrelic.com",
  {
    followRedirect: false,
  },
  // Callback
  function (err, response, body) {
    console.log(response.headers);
  }
);
```

WWW-Authenticate レスポンスヘッダに NTLM が含まれていることを確認する。

### リダイレクト

NTLM 認証の失敗は、リダイレクトにつながる`$browser.get`呼び出しが原因である可能性があります。モニター結果のタイムライン ビューで、要求の応答コードを確認します。リクエストがリダイレクトされている場合は、代わりに最初の`$browser.get`呼び出しでリダイレクト先を URL として使用する必要がある場合があります。