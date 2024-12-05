---
title: APM アプリケーションのデプロイメントについてチームに通知する
tags:
  - APM
metaDescription: 'After you set up the changes you want to monitor, you can use a webhook to notify your colleagues about the impacts of those changes.'
freshnessValidatedDate: '2023-08-29T00:00:00.000Z'
translationType: machine
---

APM アプリケーション エンティティのデプロイメントを記録した後、Webhook を使用してそれらの変更についてチームに常に通知できます。これらは、変更追跡機能を使用してデプロイメントを記録するか、古い [REST API を](/docs/apm/apm-ui-pages/events/record-deployments/#api-instructions)使用して記録するかに関係なく使用できます。

## 必要な権限 [#requirements]

変更追跡通知設定には特定の[権限](/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions)が必要です。

* Webhook の`create`へ: `Applied intelligence > Destinations`および`Applied intelligence > Channels`に対する`Modify`権限。
* Webhook の`view`と`test`へ: `Applied intelligence > Destinations`と`Applied intelligence > Channels`に対する`View`権限。
* Webhook の`modify`へ: `Applied intelligence > Destinations`と`Applied intelligence > Channels`に対する`View`権限、および`Applied intelligence > Destinations`に対する`Modify` 。
* Webhook の`delete`へ: `Applied intelligence > Destinations`および`Applied intelligence > Channels`に対する`Delete`権限。

## Webhook の宛先 URL を取得する [#get-webhook-url]

デプロイメント データをさまざまな Webhook 宛先に送信できます。Webhook URL を取得するには、使用しているツールの指示に従ってください。URL を取得したら、次のセクションの手順を実行して Webhook 通知を構成します。

Slack を使用している場合は、次の手順に従ってレガシーNew Relic <InlinePopover type="alerts"/>アプリを設定してください。

1. Slack アカウントに管理者としてログインし、

   <DNT>
     **Apps**
   </DNT>

   に移動します。

2. <DNT>
     **New Relic Alerts**
   </DNT>

   を検索し、そのタイルをクリックします。

3. <DNT>
     **New Relic Alerts**
   </DNT>

   リストで、New Relic アイコンの下にある

   <DNT>
     **Configuration**
   </DNT>

   ボタンをクリックします。

4. 見出し

   <DNT>
     **New Relic Alerts**
   </DNT>

   の下の

   <DNT>
     **Configuration**
   </DNT>

   タブをクリックします。

5. <DNT>
     **Configuration**
   </DNT>

   タブで、鉛筆アイコンをクリックします。

6. <DNT>
     **Webhook URL**
   </DNT>

   セクションまで下にスクロールし、

   <DNT>
     **Copy URL**
   </DNT>

   をクリックします。

## 追跡された変更に対する Webhook 通知を構成する [#configure-webhook]

New Relic UI に Webhook URL を挿入します。

1. 企業通知設定画面に移動します:

   <DNT>
     **[one.newrelic.com](https://one.newrelic.com/) > (user menu) > Administration > Integrations > Deploy notifications**
   </DNT>

   。

2. Webhook URL を

   <DNT>
     **Webhook URL**
   </DNT>

   フィールドに貼り付けて、

   <DNT>
     **Save**
   </DNT>

   をクリックします。

3. <DNT>
     **Send a test request**
   </DNT>

   をクリックすると、人工データを含むサンプル ペイロードが Webhook URL に送信されます。

   <img
     style={{align: "left"}}
     title="A screenshot showing how to test the webhook"
     alt="A screenshot showing how to test the webhook"
     src="/images/tracking_screenshot-crop_webhook_test.webp"
   />

4. <DNT>
     **Toggle this webhook**
   </DNT>

   では、トグルをスライドすることで、Webhook 通知を無効にしたり、再度有効にしたりできます。

5. Webhook 通知設定を完全に削除するには、

   <DNT>
     **Delete this webhook**
   </DNT>

   をクリックします。

## 通知ペイロード構造 [#payload-structure]

デプロイ通知が有効になって変更の追跡を開始すると、Webhook はタイプ`application/x-www-form-urlencoded`のペイロードを持つ`POST`リクエストを受信します。キーと値は、キーと値の間に `=` 記号を入れて、 `&`で区切られたキーと値のタプルにエンコードされます。キーと値の両方の英数字以外の文字は URL エンコードされます。

デプロイメントおよびデプロイされた APM アプリケーション エンティティの属性に基づいて、次のキーと値が送信されます。

<table>
  <thead>
    <tr>
      <th>
        鍵
      </th>

      <th>
        価値
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `created_at`
      </td>

      <td>
        ISO 8601 形式の展開のタイムスタンプ
      </td>
    </tr>

    <tr>
      <td>
        `application_name`
      </td>

      <td>
        APM アプリケーション エンティティの名前
      </td>
    </tr>

    <tr>
      <td>
        `account_name`
      </td>

      <td>
        APM アプリケーション エンティティを所有するアカウントの名前
      </td>
    </tr>

    <tr>
      <td>
        `changelog`
      </td>

      <td>
        デプロイメントに含まれる変更のリスト
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        導入の説明
      </td>
    </tr>

    <tr>
      <td>
        `revision`
      </td>

      <td>
        導入されたソフトウェアのバージョン
      </td>
    </tr>

    <tr>
      <td>
        `deployment_url`
      </td>

      <td>
        APM アプリケーション エンティティの展開 UI へのリンク
      </td>
    </tr>

    <tr>
      <td>
        `deployed_by`
      </td>

      <td>
        アプリケーションをデプロイしたユーザー
      </td>
    </tr>
  </tbody>
</table>
