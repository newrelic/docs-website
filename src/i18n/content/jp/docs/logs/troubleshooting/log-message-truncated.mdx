---
title: ログメッセージが途切れてしまう
type: troubleshooting
tags:
  - Logs
  - Log management
  - Troubleshooting
metaDescription: 'New Relic log management troubleshooting: your log data is not being displayed completely; it ends incompletely, with an ellipses.'
freshnessValidatedDate: never
translationType: machine
---

## 問題

メッセージまたは特定の属性のすべてのログ データが表示されているわけではありません。ログ データは省略記号 (`...`) で終わり、残りのデータは表示されません。

## 解決

これは、New Relic のログデータストアがフィールドの長さを 4,094 文字に制限しているために発生します。それ以上の長さのデータは取り込み時に切り捨てられます。

文字数制限を超える値がある場合は、以下の方法をお試しください。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        トラブルシューティングのヒント
      </th>

      <th>
        コメントコメント
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        長いメッセージを解析する
      </td>

      <td>
        ログ メッセージを短いキーと値のペアに解析します。一般的な例は、NGINX アクセス ログの 1 つのログ行です。そのログ メッセージは、 [Logstash](https://www.elastic.co/guide/en/logstash/7.9/logstash-config-for-filebeat-modules.html) 、 [Fluentd](https://docs.fluentd.org/parser/nginx) 、または[Fluent Bit](https://fluentbit.io/documentation/0.12/parser/)を介した組み込み解析を使用して解析できます。詳細については、[ログ データの解析](/docs/logs/log-management/ui-data/parsing/)に関するドキュメントを参照してください。
      </td>
    </tr>

    <tr>
      <td>
        JSON出力の使用
      </td>

      <td>
        出力形式として、プレーンテキストではなくJSONを使用します。JSONのログメッセージは、自動的にキーと値のペアに解析されるため、文字数制限にかかる可能性が非常に低くなります。
      </td>
    </tr>

    <tr>
      <td>
        ブロブデータの拡張
      </td>

      <td>
        ログ メッセージの最初の 4,094 文字は文字列として保存されます。次の 128,000 バイトは`blob`として格納されます。

        New Relic でこのストレージ制限を超えた可能性があるログをクエリするには、次のクエリを実行します。

        ```sql
        SELECT * FROM Log WHERE length(message) >= 4094
        ```

        BLOBデータを展開するには、 `message`またはその他の属性を使用して次のクエリを実行します。ブロブの属性は必ずバッククォートで囲んでください。例えば：

        ```sql
        SELECT message, another-attribute, blob(`newrelic.ext.message`), blob(`newrelic.ext.another-attribute`)
        FROM Log
        ```

        詳細については、 [BLOB として保存された長いメッセージ](/docs/logs/log-management/ui-data/long-logs-blobs/)に関するドキュメントを参照してください。
      </td>
    </tr>
  </tbody>
</table>
