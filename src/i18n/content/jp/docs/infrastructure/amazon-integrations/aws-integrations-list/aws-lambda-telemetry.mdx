---
title: AWS Lambda 拡張機能 Telemetry API の統合
tags:
  - Integrations
  - Amazon integrations
  - Lambda Extension
freshnessValidatedDate: never
translationType: machine
---

<DNT>
  **Work in progress**
</DNT>

New Relic AWS Lambda Telemetry 拡張機能を使用すると、ユーザーはテレメトリ データをラムダ関数から直接 New Relic に送信できます。トリガーをセットアップしたり、Amazon CloudWatch に接続したりする必要はありません。拡張機能をレイヤーとして追加することで、ログ、イベント、メトリクス、トレースを送信し、New Relic プラットフォームでデータから即座に洞察を得ることができます。

## インストール

1. AWS コンソールで<DNT>**Lambda > Functions**</DNT>に移動し、データを取り込む関数を選択します。

2. <DNT>**Layers > Add Layer**</DNT>を選択します。

3. <DNT>**Choose a layer**</DNT>で<DNT>**Specify a layer by providing the ARN**</DNT>オプションを選択します。

4. [https://layers.newrelic-external.com/](https://layers.newrelic-external.com/)にアクセスし、リージョンで AwsLambdaExtension を検索して、最新のレイヤー バージョンの`ARN`を見つけ、それを AWS コンソールの`ARN`フィールドに貼り付けます。AwsLambdaExtension が見つからない場合は、次のパターンを使用して`arn`を取得します。

   `arn:aws:lambda:{your-region}:533243300146:layer:AwsLambdaExtension:{version}`

拡張機能の最新バージョンを取得するには、バージョン 1 を選択し、 <DNT>**Save**</DNT>をクリックします。 次に、 <DNT>**Edit**</DNT>をクリックして、利用可能な最新バージョンを選択します。 5. <DNT>**Configuration**</DNT>に移動し、 <DNT>**Environment variables**</DNT>を選択して`Key: NEW_RELIC_LICENSE_KEY Value: YOUR_LICENSE_KEY`を追加します。 注: `Key: NEW_RELIC_ACCOUNT_ID`はオプションのパラメーターであり、New Relic アカウント ID に設定する必要があります。

セットアップが正しく行われたことを確認するには、 <DNT>**code**</DNT>セクションの<DNT>**Test**</DNT>ボタンをクリックします。

## データを検索する

New Relic でデータを検索するには、 <DNT>**[https://one.newrelic.com/](https://one.newrelic.com/)**</DNT>に移動し、左側のメニューで次のいずれかのカテゴリを選択します: <DNT>**Logs**</DNT> 、 <DNT>**Metrics & events**</DNT> 、または<DNT>**...Add More > Traces**</DNT> 。

### ログ:

ログは特定の属性セットによってフィルタリングできます。 左側のメニューで<DNT>**Attributes**</DNT>をクリックし、目的の属性を選択します。 例えば：

```
NEWRELIC > SOURCE > api.logs
AWS > EXTENSION.NAME > AwsLambdaExtension
PLUGIN > TYPE > lambda extension
```

### メトリクス：

拡張機能によって送信されるメトリックには、プレフィックス`aws.telemetry.lambda_ext.`が付きます。現在、6 つの AWS ラムダ メトリクスがあります。

```
'durationMs'
'billedDurationMs'
'initDurationMs'
'memorySizeMB'
'maxMemoryUsedMB'
'producedBytes'
```

### イベント

この拡張機能によって送信されたイベントを確認するには、 <DNT>**Custom events**</DNT>セクションで`AwsLambdaExtension`を探します。 現在、イベントの種類は 12 種類あります。

```
platform_initStart
platform_initRuntimeDone
platform_initReport
platform_start
platform_runtimeDone
platform_fault
platform_report
platform_extension
platform_telemetrySubscription
platform_logsDropped
function
extension
```

`Dimensions`メニューでデータをさらにフィルタリングできます。

### トレース

トレースデータは<DNT>**Traces**</DNT>タブに表示されます。 拡張機能によって送信されたトレースを表示するには、「AwsLambdaExtension」を検索します。
