---
title: インシデントイベントREST API
tags:
  - Alerts
  - Incident intelligence
metaDescription: Read about how to report activities from your incident management system to New Relic for advanced correlation.
freshnessValidatedDate: never
translationType: machine
---

[API](/docs/data-apis/ingest-apis/introduction-event-api)を使用して、カスタム アラートインシデント トリガー イベントをNew Relicに報告できます。 このイベントはインシデントを直接作成するものではありませんが、インシデントの作成をトリガーします。

このAPIは、非同期エンドポイントです。つまり、大量のPOSTSを確実に、低レスポンスで送信することができます。

## APIの使用：概要 [#overview]

ここでは、カスタムインシデントイベントをインシデントイベントAPI経由でNew Relicに送信するための一般的なプロセスを説明します。

1. データをレポートするアカウントの<InlinePopover type="licenseKey" />を生成します。
2. カスタムアトリビュートの作成を始める前に、 [Event APIの制限と制限文字について確認してください](/docs/data-apis/ingest-apis/introduction-event-api/#limits) 。
3. [JSONフォーマットのガイドライン](/docs/data-apis/ingest-apis/introduction-event-api#instrument) に従ったインシデントイベントのJSONを生成します。
4. 圧縮されたJSONペイロード（gzipやdeflateなど）を、POSTリクエストでcurlを使ってHTTPSエンドポイントに送信します。

インシデントイベントデータのNew Relicへの送信を開始したら、解析エラーの通知を受けるために、 [NRQLアラート条件](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions) を設定することをお勧めします。

## JSONの例 [#example-json]

JSONのペイロードは、以下の例のようになります。

```json
[
  {
    "eventType": "NrAiIncidentExternal",
    "title": "Test",
    "description": "The latency is above threshold of 500000 MS",
    "state": "trigger",
    "source": "luna",
    "entityName": "testEntity",
    "entity.guid": "testEntity123",
    "aggregationTag.serviceId": 5,
    "aggregationTag.environment": "testing",
    "aggregationTag.errorId": 10543,
    "tag.stackTrace": "some stack trace...",
    "version": 1
  }
]
```

`eventType`フィールドは`NrAiIncidentExternal`を使用する必要があります。

## コマンドラインからインシデントイベントを送信 [#cli]

ここでは、curlを使ってJSONペイロードを送信する例を紹介します。

```bash
gzip -c example_incidents.json | curl --data-binary @-  \
-X POST -H "Content-Type: application/json"  \
-H "Api-Key: YOUR_LICENSE_KEY" -H "Content-Encoding: gzip" \
https://insights-collector.newrelic.com/v1/accounts/YOUR_ACCOUNT/events
```

```json
Response
{"success":true, "uuid":"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"}%
```

インシデント イベント データを正常に送信すると、アラート UI で確認したり、 [そのデータをクエリして](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language)確認したりできます。

## インシデントイベントAPI仕様 [#api-specs]

incident event APIは、Event APIのvalue typesを使用します。これらの値タイプの説明と使用のガイドラインについては、 [our event API JSON guidelines](/docs/data-apis/ingest-apis/introduction-event-api/#json-guidelines) を参照してください。

<Callout variant="caution">
  まったく同じ`aggregationTag`を持つ 2 つのトリガー イベントを作成すると、それらは同じインシデントに集約されます。 つまり、複数のトリガーから作成されるインシデントは 1 つだけです。
</Callout>

<table>
  <thead>
    <tr>
      <th>
        フィールド
      </th>

      <th>
        説明
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `aggregationTag.*`

        *string*, *number*, or *timestamp*
      </td>

      <td>
        <DNT>
          **REQUIRED**
        </DNT>

        `aggregationTag`で始まる属性は、トリガーイベントをまとめるために使用されます。

        つまり、同じ集約タグを持つ 2 つのトリガー イベントが同じインシデントに集約されます。 (トリガー イベントのいずれも解決イベントではないと仮定します)。

        インシデントを解決するときは、解決イベントに同じ集約タグが含まれていることが重要です。

        予約されたキーワードを持つ集約タグは除外されます。たとえば、 `aggregationTag.priority: 2`のJSONペイロードでは、このキーと値のペアは、次の予約済みキーワードを使用したインシデントイベントで省略されます。

        ```json
        reserved_key: {"priority",  "accountId", "originalAccountId", "policyId", "conditionId", "aggregationKey", "entityType", "entityName", "entityId", "violationUuid", "violationId", "nrIncidentId" }
        ```
      </td>
    </tr>

    <tr>
      <td>
        `state`

        *列挙型: (`trigger` 、 `resolve`)*
      </td>

      <td>
        <DNT>
          **REQUIRED**
        </DNT>

        イベントが新しいインシデントをトリガーするか、既存のインシデントを解決するか。インシデントの更新は、トリガーを使用して送信することもできます。
      </td>
    </tr>

    <tr>
      <td>
        `priority`

        *列挙型: (`low` 、 `medium` 、 `high` 、 `critical`)*
      </td>

      <td>
        インシデントの優先順位。デフォルト: `high` 。

        異なる優先順位で送信された場合、最高の優先順位が使用されます。
      </td>
    </tr>

    <tr>
      <td>
        `title`

        *ストリング*
      </td>

      <td>
        <DNT>
          **REQUIRED, when `state` is `trigger`**
        </DNT>

        イベントのタイトルです。
      </td>
    </tr>

    <tr>
      <td>
        `source`

        *ストリング*
      </td>

      <td>
        <DNT>
          **REQUIRED, when `state` is `trigger`**
        </DNT>

        インシデントの発生源、またはそのトリガーとなった監視システム（障害が発生したエンティティではない）。
      </td>
    </tr>

    <tr>
      <td>
        `description`

        *ストリング*
      </td>

      <td>
        起爆剤となるイベントの説明。
      </td>
    </tr>

    <tr>
      <td>
        `deepLinkUrl`

        *ストリング*
      </td>

      <td>
        インシデントに関連するページへのディープリンクです。
      </td>
    </tr>

    <tr>
      <td>
        `runbookUrl`

        *ストリング*
      </td>

      <td>
        ランブックのURLです。
      </td>
    </tr>

    <tr>
      <td>
        `externalId`

        *ストリング*
      </td>

      <td>
        イベントに付けることができる外部ID。

        例えば、このイベントの取り込みに関連するエラーを照会するために使用できます。
      </td>
    </tr>

    <tr>
      <td>
        `entityName`

        *ストリング*
      </td>

      <td>
        インシデントを発生させたエンティティの名前。
      </td>
    </tr>

    <tr>
      <td>
        `entity.guid`

        *ストリング*
      </td>

      <td>
        インシデントを発生させたエンティティのID。
      </td>
    </tr>

    <tr>
      <td>
        `version`

        *浮く*
      </td>

      <td>
        現在のフォーマットのバージョンです。
      </td>
    </tr>
  </tbody>
</table>