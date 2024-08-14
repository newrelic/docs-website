---
title: NRQL ルックアップ API
tags:
  - APIs
  - Lookups Service REST API
  - NRQL Lookups API
  - lookup
metaDescription: Use the NRQL Lookups API to create and manage lookup tables.
freshnessValidatedDate: '2023-09-18T00:00:00.000Z'
translationType: machine
---

NRQL Lookups API を使用して、[ルックアップ テーブル](/docs/logs/ui-data/lookup-tables-ui/#overview)を作成および管理します。

## 始める前に

NRQL Lookups API は、ルックアップ テーブルをプログラムで管理できるようにする REST API です。別のオプションとして、 [UI を通じてルックアップ テーブルを管理する](/docs/logs/ui-data/lookup-tables-ui/#lookup-ui)こともできます。

## HTTPエンドポイント [#http-endpoints]

### ベースURL

API 呼び出しでは、New Relic アカウントに適用できるベース URL を使用します。

米国（US）のエンドポイント。

```
https://nrql-lookup.service.newrelic.com
```

[European Union](/docs/using-new-relic/welcome-new-relic/get-started/introduction-eu-region-data-center) (EU)のエンドポイントです。

```
https://nrql-lookup.service.eu.newrelic.com
```

### エンドポイント

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        方法
      </th>

      <th>
        終点
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [`create`](#create-and-update)
      </td>

      <td>
        `POST /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        新しいテーブルをアップロードします。
      </td>
    </tr>

    <tr>
      <td>
        [`update`](#create-and-update)
      </td>

      <td>
        `PUT /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        既存のテーブルを置き換えます。
      </td>
    </tr>

    <tr>
      <td>
        [`read`](#read)
      </td>

      <td>
        `GET /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        以前にアップロードされたテーブルをダウンロードします。
      </td>
    </tr>

    <tr>
      <td>
        [`delete`](#delete)
      </td>

      <td>
        `DELETE /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        指定されたテーブルを削除します。
      </td>
    </tr>

    <tr>
      <td>
        [`list`](#list)
      </td>

      <td>
        `GET /v1/accounts/YOUR_ACCOUNT_ID`
      </td>

      <td>
        このアカウントに対して以前に更新されたテーブルをリストします。
      </td>
    </tr>
  </tbody>
</table>

上記の NRQL Lookups API エンドポイントで必要な変数は以下で定義されています。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        変数
      </th>

      <th style={{ width: "200px" }}>
        タイプ
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `YOUR_ACCOUNT_ID`
      </td>

      <td>
        `number`
      </td>

      <td>
        テーブルが属するアカウント
      </td>
    </tr>

    <tr>
      <td>
        `TABLE_NAME`
      </td>

      <td>
        `string`
      </td>

      <td>
        保存されているテーブルの名前。テーブル名は、 [カスタム イベント タイプの標準](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#general)に準拠する必要があります。

        * 最大長さ: 255
        * 英数字、アンダースコア、コロンを組み合わせて使用できます。
      </td>
    </tr>
  </tbody>
</table>

## 認証

<InlinePopover type="userKey"/>は NRQL Lookups API へのリクエストを認証するために使用され、HTTP ヘッダーとして渡す必要があります。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        ヘッダー
      </th>

      <th>
        対応値
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Api-Key`
      </td>

      <td>
        New Relic <InlinePopover type="userKey"/>。
      </td>
    </tr>
  </tbody>
</table>

## テーブルの作成/更新 [#create-and-update]

### HTTPエンドポイント [#create-and-update-http-endpoints]

#### クリエイト

`POST /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

新しいテーブルをアップロードするために使用されます。テーブルがすでに存在していることはできません。存在する場合、この呼び出しにより`400 Bad Request`応答が返されます。

#### アップデート

`PUT /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

既存のテーブルを置き換えるために使用されます。テーブルが存在しない場合、この呼び出しにより`404 Not Found`応答が返されます。

#### リクエストクエリパラメータ

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        名前
      </th>

      <th>
        タイプ
      </th>

      <th>
        デフォルト
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        応答にテーブル値を含めるかどうかを示します。
      </td>
    </tr>
  </tbody>
</table>

### HTTPヘッダー [#create-http-headers]

HTTPヘッダーを作成する際には、以下のガイドラインを参考にしてください。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        ヘッダー
      </th>

      <th>
        対応値
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Content-Type`
      </td>

      <td>
        * `multipart/form-data`
        * `application/json`
      </td>
    </tr>

    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### リクエストボディ [#create-request-body]

リクエスト本文で送信するデータは、 `multipart/form-data`または`application/json`のいずれかです。

<CollapserGroup>
  <Collapser
    id="multipart-form-data-request"
    title="multipart/form-data を含むリクエスト"
  >
    #### サポートされているフィールド

    `multipart/form-data`コンテンツを送信するときに、作成リクエストと更新リクエストに次のフィールドを指定できます。

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            フィールド
          </th>

          <th style={{ width: "200px" }}>
            値のタイプ
          </th>

          <th>
            必須
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `table`
          </td>

          <td>
            CSVファイル
          </td>

          <td>
            はい
          </td>

          <td>
            CSV コンテンツを含むマルチパート フォーム データ パーツ。CSV 解析ロジックの詳細は[、ここで](/docs/logs/ui-data/lookup-tables-ui/#valuetypes)説明されています。
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            `string`
          </td>

          <td>
            いいえ
          </td>

          <td>
            テーブルの説明を含む 2 番目のマルチパート フォーム データ パート。
          </td>
        </tr>
      </tbody>
    </table>

    #### ペイロードの例

    ```
    --__X_BOUNDARY__
    Content-Disposition: form-data; name="table"; filename="sample.csv"
    Content-Type: text/csv

    id,name,intvalue,floatvalue,boolvalue
    '1,abc,27,2.7,true
    '2,def,2622,26.22,false
    '2a,"g,hi",1234,43.21,false
    --__X_BOUNDARY__--
    Content-Disposition: form-data; name="description"

    A description of the table
    --__X_BOUNDARY__--
    ```
  </Collapser>

  <Collapser
    id="application-json-request"
    title="application/json によるリクエスト"
  >
    #### サポートされているフィールド

    `application/json`コンテンツを送信するときに、作成および更新で次のフィールドを指定できます。

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            フィールド
          </th>

          <th style={{ width: "200px" }}>
            値のタイプ
          </th>

          <th>
            必須
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `table`
          </td>

          <td>
            `JSON`
          </td>

          <td>
            はい
          </td>

          <td>
            <table>
              <tr>
                <td style={{ width: "200px" }}>
                  `headers`
                </td>

                <td>
                  テーブルの列名を表す`string`値の配列
                </td>
              </tr>

              <tr>
                <td style={{ width: "200px" }}>
                  `rows`
                </td>

                <td>
                  テーブルの値を表す配列の配列。すべての値は、 `string` 、 `number` 、または`boolean`値である必要があります。(複雑な JSON オブジェクトは許可されません。)
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            `string`
          </td>

          <td>
            いいえ
          </td>

          <td>
            テーブルの詳しい説明
          </td>
        </tr>
      </tbody>
    </table>

    #### ペイロードの例

    ```json
    {
           "table": {
               "headers": [
               "id", "name", "intvalue", "floatvalue", "boolvalue"
               ],
               "rows": [
                   ["1", "abc", 27, 2.7, true],
                   ["2", "def", 2622, 26.22, false],
                   ["2a", "d,ef", 1234, 43.21, false]
               ]
           },
           "description": "This is a description."
       }
    ```
  </Collapser>
</CollapserGroup>

### 応答本文 [#create-update-response]

リクエストが成功した場合、レスポンスの JSON ペイロードには次のフィールドが含まれる場合があります。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        フィールド
      </th>

      <th style={{ width: "200px" }}>
        値のタイプ
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `accountId`
      </td>

      <td>
        `number`
      </td>

      <td>
        テーブルが属するアカウント。これはパス内のアカウント値と一致します。
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        `string`
      </td>

      <td>
        保存されているテーブルの名前。これはパス内の名前の値と一致します。
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        `string`
      </td>

      <td>
        テーブルの詳しい説明
      </td>
    </tr>

    <tr>
      <td>
        `guid`
      </td>

      <td>
        `string`
      </td>

      <td>
        作成時にテーブルに割り当てられる guid。
      </td>
    </tr>

    <tr>
      <td>
        `size`
      </td>

      <td>
        `number`
      </td>

      <td>
        CSV 文字列としてのテーブルのサイズ。
      </td>
    </tr>

    <tr>
      <td>
        `rows`
      </td>

      <td>
        `number`
      </td>

      <td>
        テーブルの行数（ヘッダー行を除く）
      </td>
    </tr>

    <tr>
      <td>
        `updatedBy`
      </td>

      <td>
        `string`
      </td>

      <td>
        このテーブルを最後に作成または更新したユーザーのユーザー名/電子メール アドレス。
      </td>
    </tr>

    <tr>
      <td>
        `updatedAt`
      </td>

      <td>
        `string`
      </td>

      <td>
        テーブルが作成されたとき、または最後に更新されたときのタイムスタンプ。これは、S3 オブジェクトの最後に更新されたタイムスタンプを反映します。値は標準の ISO 8601 日付時刻文字列 (例:2023-02-13T19:49:28.023Z)
      </td>
    </tr>

    <tr>
      <td>
        `table`
      </td>

      <td>
        `JSON` オブジェクトリテラル
      </td>

      <td>
        <table>
          <tr>
            <td style={{ width: "200px" }}>
              `headers`
            </td>

            <td>
              テーブルの列名を表す`string`値の配列
            </td>
          </tr>

          <tr>
            <td style={{ width: "200px" }}>
              `rows`
            </td>

            <td>
              テーブルの値を表す配列の配列。
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
</table>

#### 応答の JSON ペイロードの例

```json
{
  "accountId": YOUR_ACCOUNT_ID,
  "name": "sample",
  "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
  "size": 120
  "rows": 3
  "updatedBy": "jondoe@example.com"
  "updatedAt": "2023-02-13T19:49:28.023Z",
  "table": {
    "headers": [
      "id", "name", "description", "intvalue", "floatvalue", "boolvalue"
    ],
    "rows": [
      [1, "abc", 27, 2.7, true],
      [2, "def", 2622, 26.22, false],
      ["2a", "d,ef", 1234, 43.21, false]
    ]
  }
}
```

### リクエストの例

<CollapserGroup>
  <Collapser
    id="create-a-new-table"
    title="新しいテーブルを作成する"
  >
    新しいルックアップ テーブルを作成するには、ルックアップ テーブルを記述する JSON ペイロードを含む POST リクエストを作成エンドポイントに送信します。

    `curl`コマンドの例を次に示します。

    ```bash
    curl -X "POST" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
          -H 'Content-Type: application/json' \
          -H 'Api-Key: YOUR_USER_KEY'\
          -d $'{
      "table": {
      "headers": ["id", "name", "intvalue", "floatvalue", "boolvalue"],
      "rows": [
          ["1", "abc", 27, 2.7, true],
          ["2", "def", 2622, 26.22, false]
      ]
      },
      "description": "This is a description."
      }'
    ```
  </Collapser>

  <Collapser
    id="update-a-table"
    title="既存のテーブルを更新する"
  >
    既存のルックアップ テーブルを置き換えるには、新しいテーブルを含む`multipart/form-data`リクエスト本文を含む PUT リクエストを更新エンドポイントに送信します。

    ```bash
    curl -X "PUT" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Api-Key: YOUR_USER_KEY'\
       -H 'Content-Type: multipart/form-data; charset=utf-8; boundary=__X_PAW_BOUNDARY__' \
       -F "table=id,name,description,intvalue,floatvalue,boolvalue
          1,abc,desc1,27,2.7,true
          2,def,desc2,2622,26.22,false
          " \
       -F "description=This is a description."
    ```
  </Collapser>
</CollapserGroup>

## 表を読む [#read]

### HTTPエンドポイント [#read-endpoint]

`GET /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

以前にアップロードされたテーブルをダウンロードするために使用されます。テーブルが存在しない場合、この呼び出しにより`404 Not Found`応答が返されます。このエンドポイントにはリクエスト ペイロードがありません。

#### リクエストクエリパラメータ

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        名前
      </th>

      <th style={{ width: "150px" }}>
        タイプ
      </th>

      <th>
        デフォルト
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        応答にテーブル値を含めるかどうかを示します。コンテンツ タイプが`text/csv`の場合は無視されます。
      </td>
    </tr>
  </tbody>
</table>

### HTTPヘッダー [#read-headers]

HTTPヘッダーを作成する際には、以下のガイドラインを参考にしてください。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        ヘッダー
      </th>

      <th>
        対応値
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
        * `text/csv`
      </td>
    </tr>
  </tbody>
</table>

### 応答本文 [#read-response-body]

リクエストが成功した場合、レスポンスのタイプは`application/json`または`text/csv`になります。

#### `application/json`タイプの応答

応答は[、作成/更新応答ペイロード](#create-update-response)と同じになります。

#### `text/csv`タイプの応答

応答には CSV 形式のテーブルが含まれます。

### リクエストの例 [#read-example-requests]

<Collapser
  id="download-an-existing-table"
  title="既存のテーブルをダウンロードする"
>
  以前にアップロードされたテーブルをダウンロードするには、更新エンドポイントに GET リクエストを送信します。

  `curl`コマンドの例を次に示します。

  ```bash
  curl "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Accept: text/csv' \
       -H 'Api-Key: YOUR_USER_KEY'
  ```

  `text/csv`応答の例を次に示します。

  ```csv
  id,name,intvalue,floatvalue,boolvalue
  '1,abc,27,2.7,true
  '2,def,2622,26.22,false
  '2a,"g,hi",1234,43.21,false
  ```
</Collapser>

## テーブルの削除 [#delete]

### HTTPエンドポイント [#delete-endpoint]

`DELETE /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

指定されたテーブルを削除するために使用されます。テーブルが存在しない場合、この呼び出しにより`404 Not Found`応答が返されます。このエンドポイントにはリクエスト ペイロードがありません。

<Callout variant="important">
  削除されたテーブルは回復できません。
</Callout>

#### リクエストクエリパラメータ

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        名前
      </th>

      <th>
        タイプ
      </th>

      <th>
        デフォルト
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        応答にテーブル値を含めるかどうかを示します。
      </td>
    </tr>
  </tbody>
</table>

### HTTPヘッダー [#delete-headers]

HTTPヘッダーを作成する際には、以下のガイドラインを参考にしてください。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        ヘッダー
      </th>

      <th>
        対応値
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### 応答本文 [#delete-response-body]

リクエストが成功し、 `Accept`ヘッダーが`application/json`に設定されている場合、レスポンス本文[は作成/更新レスポンス ペイロード](#create-update-response)と同じになります。

### リクエストの例 [#delete-example-request]

<Collapser
  id="delete-an-existing-table"
  title="既存のテーブルを削除する"
>
  以前にアップロードされたテーブルを削除するには、削除エンドポイントに DELETE リクエストを送信します。

  `curl`コマンドの例を次に示します。

  ```bash
  curl -X "DELETE" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Accept: application/json' \
       -H 'Api-Key: YOUR_USER_KEY'\
  ```
</Collapser>

## リストテーブル [#list]

### HTTPエンドポイント [#list-endpoint]

`GET /v1/accounts/YOUR_ACCOUNT_ID`

このアカウントに対して以前に更新されたテーブルをリストします。このエンドポイントにはリクエスト ペイロードがありません。

### HTTPヘッダー [#list-headers]

HTTPヘッダーを作成する際には、以下のガイドラインを参考にしてください。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        ヘッダー
      </th>

      <th>
        対応値
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### 応答本文 [#list-response-body]

リクエストが成功すると、レスポンスの JSON ペイロードはテーブル概要の配列で構成されます。各テーブルの概要には以下のフィールドを含めることができます。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        フィールド
      </th>

      <th style={{ width: "200px" }}>
        値のタイプ
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `accountId`
      </td>

      <td>
        `number`
      </td>

      <td>
        テーブルが属するアカウント。これはパス内のアカウント値と一致します。
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        `string`
      </td>

      <td>
        保存されているテーブルの名前。これはパス内の名前の値と一致します。
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        `string`
      </td>

      <td>
        テーブルの詳しい説明
      </td>
    </tr>

    <tr>
      <td>
        `guid`
      </td>

      <td>
        `string`
      </td>

      <td>
        作成時にテーブルに割り当てられる guid。
      </td>
    </tr>

    <tr>
      <td>
        `size`
      </td>

      <td>
        `number`
      </td>

      <td>
        CSV 文字列としてのテーブルのサイズ。
      </td>
    </tr>

    <tr>
      <td>
        `rows`
      </td>

      <td>
        `number`
      </td>

      <td>
        テーブルの行数（ヘッダー行を除く）
      </td>
    </tr>

    <tr>
      <td>
        `updateBy`
      </td>

      <td>
        `string`
      </td>

      <td>
        このテーブルを最後に更新したユーザーのユーザー名/電子メール アドレス。
      </td>
    </tr>

    <tr>
      <td>
        `updatedAt`
      </td>

      <td>
        `string`
      </td>

      <td>
        テーブルが作成されたとき、または最後に更新されたときのタイムスタンプ。これは、S3 オブジェクトの最後に更新されたタイムスタンプを反映します。値は標準の ISO 8601 日付時刻文字列 (例:2023-02-13T19:49:28.023Z)
      </td>
    </tr>
  </tbody>
</table>

### リクエストの例 [#list-example-request]

<Collapser
  id="list-tables"
  title="アカウント用に更新されたリストテーブル"
>
  アカウントのテーブルをリストするには、リスト エンドポイントに GET リクエストを送信します。

  `curl`コマンドの例を次に示します。

  ```bash
  curl "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID" \
       -H 'Accept: text/csv' \
       -H 'Api-Key: YOUR_USER_KEY'
  ```

  応答 JSON ペイロードの例を次に示します。

  ```json
  [
    {
      "accountId": YOUR_ACCOUNT_ID,
      "name": "sample",
      "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
      "size": 120
      "rows": 3
      "updatedBy": "jondoe@example.com"
      "updatedAt": "2023-02-13T19:49:28.023Z"
    },
    {
      "accountId": YOUR_ACCOUNT_ID,
      "name": "sample2",
      "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
      "size": 4096
      "rows": 2000
      "updatedBy": "janedoe@example.com"
      "updatedAt": "2023-02-14T13:30:21.100Z"
    }
  ]
  ```
</Collapser>

## エラーメッセージ [#error-messaging]

リクエストが失敗した場合、エラー応答ペイロードは次の形式になります。

```json
{
  "code": HTTP_STATUS_CODE(same as status header),
  "message": ERROR_MESSAGE
}
```
