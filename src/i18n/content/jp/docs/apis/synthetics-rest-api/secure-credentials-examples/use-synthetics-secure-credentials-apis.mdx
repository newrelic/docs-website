---
title: シンセティック・モニタリング・セキュア・クレデンシャル・APIの使用
tags:
  - APIs
  - Synthetic monitoring REST API
  - Secure credentials examples
metaDescription: Use REST API to manage secure credentials in your synthetic monitors.
freshnessValidatedDate: never
translationType: machine
---

[合成モニタリングRESTAPI](/docs/apis/synthetics-rest-api/monitor-examples/manage-synthetics-monitors-rest-api)を使用すると、API呼び出しを行って、 [安全な資格情報](/docs/synthetics/new-relic-synthetics/using-monitors/secure-credentials-store-credentials-information-scripted-browsers)データを変更または取得できます。このドキュメントでは、API要件について説明し、APIcurlコマンドの例を示します。

セキュアな認証情報の設定およびUIでの設定に関する一般的なガイドラインについては、 [セキュアな認証情報](/docs/synthetics/new-relic-synthetics/using-monitors/secure-credentials-store-credentials-information-scripted-browsers) を参照してください。

<Callout variant="important">
  これで、 [NerdGraphAPIを使用](/docs/apis/nerdgraph/examples/nerdgraph-synthetics-tutorial#manage-your-secure-credentials)して安全なクレデンシャルを管理できます。
</Callout>

## 要求事項とルール [#requirements]

この機能に関する一般的なルールについては、 [secure credentials requirements](/docs/synthetics/new-relic-synthetics/using-monitors/secure-credentials-store-credentials-information-scripted-browsers#requirements) を参照してください。

APIの要件やルールには

* 一般的な[合成モニタリングRESTAPI要件](/docs/apis/synthetics-rest-api/monitor-examples/manage-synthetics-monitors-rest-api#use-api)を参照してください。
* アカウントのリクエスト数は、1秒間に3回に制限されています。この制限を超えたリクエストには、429のレスポンスコードが返されます。
* キーの値は、APIを介してアクセスすることはできません。権限のないユーザーは、安全なキーの値にアクセスすることはできません。

## APIの例

<CollapserGroup>
  <Collapser id="add-secure-credential" title="セキュアなクレデンシャルの追加">
    安全な認証情報を New Relic アカウントに送信するには、安全な認証情報を記述した JSON ペイロードを含む`POST`リクエストを`https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials`に送信します。 次に例を示します。

    ```json
    {
      "key": string [required, 1-64 characters uppercase],
      "value": string [required, 1-3,000 characters],
      "description": string [optional]
    }
    ```

    ここでは、curlコマンドを使った例を紹介します。

    ```sh
    curl -v \
         -X POST -H "Api-Key:$API_KEY" \
         -H 'Content-Type: application/json' \ 
         'https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials' \
         -d '{ "key": "MYKEY", "value": "my value", "description": "Description of MYKEY" }'
    ```

    リクエストが成功すると、 `location`ヘッダーで指定された新しく作成された安全なクレデンシャルのURIを使用して`201 Created`応答が返されます。考えられるエラーコードは次のとおりです。

    * `303 See Other`：指定されたキーはすでに存在します。返されるロケーションヘッダーには、キーへのURIが含まれます。
    * `400 Bad Request`：キーが長すぎるか欠落している、値が長すぎるか欠落している、解析できないJSONペイロード。
  </Collapser>

  <Collapser id="get-all-secure-credential" title="すべてのセキュアな認証情報を取得">
    New Relic アカウント内のすべての安全な認証情報のリストを表示するには、 `GET`リクエストを`https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials`に送信します。 例えば：

    ```sh
    curl -v \
         -H "Api-Key:$API_KEY" \
         'https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials'
    ```

    リクエストが成功すると、 `200 OK`レスポンスが返されます。返されるデータは、次の形式のJSONオブジェクトになります。

    ```json
    {
      "secureCredentials": [
        {
          "key": "MYKEY1",
          "description": "Description of MYKEY1",
          "createdAt": "2016-09-26T23:12:46.981+0000",
          "lastUpdated": "2016-09-26T23:12:46.981+0000"
        }, {
          "key": "MYKEY2",
          "description": "Description of MYKEY2",
          "createdAt": "2016-09-26T23:12:46.981+0000",
          "lastUpdated": "2016-09-26T23:12:46.981+0000"
        }
      ],
      "count": 2
    }
    ```
  </Collapser>

  <Collapser id="get-secure-credential" title="特定のセキュアなクレデンシャルの取得">
    単一の安全な認証情報を表示するには、 `GET`リクエストを`https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials/$KEY`に送信します。

    ```SH
    curl -v \
         -H "Api-Key:$API_KEY" \
         'https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials/$KEY'
    ```

    リクエストが成功すると、 `200 OK`レスポンスが返されます。 [返されるデータは](/docs/apis/synthetics-rest-api/monitor-examples/payload-attributes-synthetics-rest-api#api-attributes)、次の形式のJSONオブジェクトになります。

    ```json
    {
      "key": string,
      "description": string,
      "createdAt": date,​
      "lastUpdated": date
    }
    ```

    無効なキーは`404 Not Found: The specified key doesn't exist`を返します。
  </Collapser>

  <Collapser id="update-secure-credential" title="既存のセキュアなクレデンシャルの更新">
    New Relic の既存の資格情報を更新するには、 `PUT`リクエストを`https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials/$KEY`に送信します。

    ```sh
    curl -v \
         -X PUT -H "Api-Key:$API_KEY" \
         -H 'Content-Type: 'application/json' \
         https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials/$KEY' \
         -d  '{ "key": "MYKEY", "value": "my value", "description": "Description of MYKEY" }'
    ```

    無効なキーは`404 Not Found: The specified key doesn't exist`を返します。
  </Collapser>

  <Collapser id="delete-secure-credential" title="既存のセキュアクレデンシャルの削除">
    New Relic 内の既存の資格情報を削除するには、 `DELETE`リクエストを`https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials/$KEY`に送信します。

    ```sh
    curl -v \
         -H "Api-Key:$API_KEY" \
         -X DELETE \
         https://synthetics.newrelic.com/synthetics/api/v1/secure-credentials/$KEY
    ```

    なお、指定したキーが存在しない場合はエラーになりません。
  </Collapser>
</CollapserGroup>