---
title: （オプション）プライバシー設定を構成する
metaDescription: Customizing Privacy Settings for user interactions to debug faster and improve page performance.
freshnessValidatedDate: '2024-12-19T00:00:00.000Z'
translationType: machine
---

セッションリプレイを記録する場合、ユーザーのプライバシーは重要な考慮事項です。 デフォルト設定は機密情報を保護するように設計されていますが、特定のニーズを満たすためにプライバシー設定を調整する必要がある場合もあります。 このセクションでは、セッションリプレイの機能を維持しながら、プライバシー標準に準拠するために特定のデータをマスク、ブロック、または無視する方法について説明します。

デフォルトでは、すべてのテキストと入力はアスタリスクに置き換えられます。 デフォルトのプライバシーでリプレイがどのように表示されるかの例を次に示します。

<img title="Example of default privacy settings" alt="Example of default privacy settings" src="/images/browser_screenshot-full_text-masking-example.webp" />

この設定が適切であれば、次の手順に進みます。

キャプチャするコンテンツまたはユーザー入力をカスタマイズする必要がある場合は、コンテンツまたはユーザー入力の特定のクラスと属性をマスク、ブロック、または無視するオプションがあります。 プライバシー設定を変更する前に、必ずプライバシー チームに確認してください。

## 機密テキストをマスクする [#mask-text]

機密テキストをマスクすることができます。つまり、テキストはアスタリスク（\*）に置き換えられます。 たとえば、URL に表示されるユーザーのアカウント ID をマスクできます。

どの入力をマスクするかを指定するには、いくつかのオプションがあります。

* <DNT>**Application settings**</DNT>ページで、独自の CSS セレクターを追加するか、マスキング ボックスをオンにします。 マスク セレクターを使用してもユーザー入力はマスクされないことに注意してください。ユーザー入力を非表示にする必要がある場合は、ブロック セレクターを使用することをお勧めします。

  <img title="Mask settings" alt="Screenshot of mask settings in the ui" src="/images/browser_screenshot-full_mask-settings.webp" />

* CSS クラス`nr-mask`または属性`data-nr-mask`を Web ページの HTML に追加します。

  たとえば、アカウント ID が URL に表示されないようにするには、アカウント ID を含む`<div>`に`nr-mask`を追加します。

  `<div>Account ID: <span class="nr-mask">99881123</span></div>`

これらのオプションでは、アスタリスク (\*) を使用してその要素内のすべてのテキストをマスクし、実際のテキストを非表示にしますが、入力された文字数は表示します。 ただし、アスタリスクは有効な数字ではないため、電話番号やクレジットカード番号などの番号タイプ固有のフィールドをマスクすると、リプレイでは空白のフィールドになります。

## サイトのコンテンツをブロックする [#block-content]

サイト上のコンテンツのセクション全体をブロックすることができます。この場合、そのセクションはセッションリプレイでは空のプレースホルダーとして表示されます。 たとえば、「会社概要」Web ページに画像があり、それをキャプチャする必要がない場合は、画像を含むクラスをブロックできます。

特定のクラスまたは属性をブロックするには、いくつかのオプションがあります。

* \[アプリケーション設定] ページで、\[\**ブロック セレクター]*フィールドに CSS セレクターを追加します。

  <img title="Block Selectors" alt="Screenshot of session replay settings" src="/images/browser_screenshot-full_session-replay-app-settings.webp" />

* CSS クラス`nr-block`または属性`data-nr-block`をウェブページの HTML に手動で追加します。 たとえば、セッションのリプレイから無関係なテキストや画像をブロックしたい場合は、 `nr-block`を`<div class>`に追加します。

  ```html
  <html>
  <head>
    <title>Sample image and text</title>
  </head>
  <body>
    <div class="image-text-container nr-block">
      <img src="https://example.com/image.png" alt="Image description">
    </div>
  </body>
  </html>
  ```

## ユーザー入力を無視する [#ignore-input]

ユーザー入力フィールドへの変更を無視することができます。つまり、入力フィールドはリプレイに引き続き表示されますが、値の変更は表示されません。 たとえば、電子メール アドレスやクレジットカード フィールドを含むクラスを無視できます。 パスワード入力フィールドは常にマスクされます。

入力を無視するには、入力フィールドのクラス名に CSS クラス`nr-ignore`を追加します。 たとえば、請求ページの機密情報を無視したい場合は、 `class="nr-ignore"`を`<input type>`に追加します。

```html
<div class="sensitive-information">
  <h2>Sensitive Information</h2>
  <p>Credit card number: <input type="number" class="nr-ignore" id="creditCardNumber"></p>
  <p>Expiration date: <input type="number" class="nr-ignore" id="expirationDate"></p>
  <p>CVV code: <input type="number" class="nr-ignore" id="cvvCode"></p>
</div>
```