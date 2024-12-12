---
title: Lambda 経由で CloudWatch からログが表示されない
type: troubleshooting
tags:
  - Logs
  - Log management
  - Troubleshooting
metaDescription: Troubleshooting tips if the Logs are not appearing from CloudWatch via Lambda.
freshnessValidatedDate: never
translationType: machine
---

## 問題

Lambdaインテグレーション設定を介した CloudWatch の New Relic にログが表示されません。

## 解決

考えられる原因とその解決策:

* New Relic の取り込みライセンスキーが有効ではない可能性があります。 AWS アカウントで、 <DNT>**CloudFormation stack &gt; Resources**</DNT>から論理 ID `NewRelicLogsLicenseKeySecret`のリソースを見つけて、キーを確認します。

* さらにデバッグするには、 <DNT>**CloudFormation Stack &gt; Resources &gt; NewRelicServerlessLogForwarder (Lambda Function) &gt; Configuration &gt; Environment Variables**</DNT>に移動し、 `DEBUG_MODE` true に設定します。 次に、CloudWatch ログでLambda関数を確認し、デバッグ ログを取得します。

* このイベントは完全に失敗だったかもしれない。 確認するには、 <DNT>**CloudFormation Stack &gt; Resources &gt; NewRelicLogForwarderDLQ**</DNT>に移動するか、AWS SQS で DLQ を検索して、DLQ リソースを調べます。

* New Relic リージョンと、 Lambda関数または Firehose に提供される取り込みライセンスキーが一致しない可能性があります。 検証して一致させます。

  たとえば、New Relic リージョンが EU の場合、EU リージョンから New Relic のインジェスト ライセンスキーを提供します。

* `NewRelicServerlessLogForwarder` CloudWatch トリガーがない可能性があります。 ネストされた CloudFormation スタックの出力を調べます。