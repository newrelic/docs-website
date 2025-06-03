---
title: Rubyエージェントの監査ログ
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: 'New Relic''s Ruby agent audit log is disabled by default. To enable it in your newrelic.yml file, add audit_log. enabled: true.'
freshnessValidatedDate: never
translationType: machine
---

セキュリティ監査を目的として、Ruby エージェントは New Relic コレクターに送信されたすべてのデータを、人間が読める形式のログファイルに記録します。この機能は、Ruby エージェントのバージョン 3.5.5 以降で利用できます。

## 監査ログの設定 [#configure]

<Callout variant="caution">
  この機能を有効にするのは、デバッグや監査のために送信内容に関する詳細な情報が必要な場合のみです。この機能を長時間有効にすると、監査ログファイルに負荷がかかることがあります。
</Callout>

監査ログはデフォルトで無効になっており、手動で有効にする必要があります。 有効にするには、 <DNT>**newrelic.yml**</DNT>ファイルに次の内容を追加します: `audit_log.enabled: true` 。

デフォルトでは、New Relic Ruby エージェントは、監査ログをメインの New Relic エージェント ログの隣の<DNT>**log/newrelic_audit.log**</DNT>ファイルに書き込みます。 監査ログファイルの場所を制御するには、 `audit_log.path`設定引数を監査ログを保存する場所のフルパスに設定します。

## 監査ログの内容 [#content]

監査ログファイルは、読むために特別なツールを必要としません。このファイルには、New Relic エージェントが New Relic コレクターにリクエストするごとに 2 行が含まれます。

* 1行目には、リクエストが行われたホストとURIパスが記載されています。
* 2行目には、人間が読める形式のリクエストボディの全内容が含まれています。

監査ログに記録されるリクエストボディは、New Relic コレクターに送信される前に何層ものエンコーディングが適用されている可能性があるため、New Relic コレクターに送信された正確なバイトシーケンスを表していません。しかし、監査ログにダンプされる際には、送信されるリクエストに他の情報は追加されません。

<Callout variant="tip">
  生のリクエスト本文をエンコードされた形式でキャプチャするには、 <DNT>**tcpdump**</DNT>などのパケット キャプチャ ツールを使用します。
</Callout>

## リクエストボディのフォーマット [#format]

リクエストボディのフォーマットは、エージェントが使用する通信フォーマットによって異なります。

* 新しいバージョンのRubyでは、データのシリアライズにJSONを使用しているため、監査ログにはリクエストボディのJSON表現が含まれます。
* Ruby の古いバージョンでは、Ruby のネイティブ Marshal 形式を使用してリクエスト本文をシリアル化します。これは不透明な形式であるため、監査ログには`Object#inspect`を呼び出した結果が含まれます。これにより、シリアル化の直前に、人間が判読できるリクエスト オブジェクト グラフの表現が生成されます。
