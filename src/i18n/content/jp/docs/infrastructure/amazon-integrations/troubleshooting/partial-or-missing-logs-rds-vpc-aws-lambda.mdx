---
title: RDS、VPC、AWS Lambdaのログの一部または欠落
type: troubleshooting
tags:
  - Integrations
  - Amazon integrations
  - Troubleshooting
metaDescription: 'New Relic AWS integrations: What to do if the NewRelic-log-ingestion lambda function for pushing logs is not working or only sends partial data.'
freshnessValidatedDate: never
translationType: machine
---

## 問題

`NewRelic-log-ingestion`を使用しています。これは、AWS から RDS 拡張モニタリング、VPC フロー ログ統合、または AWS Lambda のモニタリングの初期バージョン (アルファおよびベータ) にログをプッシュするためのラムダ関数です。動作していないか、部分的なデータを送信しています。

## 解決

2.1 より前の`NewRelic-log-ingestion`ラムダ バージョンは非推奨になります。AWS Serverless Repository で公開されている最新のラムダに更新します。[New Relic CLI を](https://developer.newrelic.com/build-tools/new-relic-one-applications/cli)使用することも、手動で更新することもできます。

推奨: ログ取り込み Lambda 関数を更新する主な方法は、[ ](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/update-lambda-monitoring)New RelicCLI を使用して関数を更新する 標準の手順 に従うことです。

また、手動で機能をアップデートすることもできます。

1. アラートでの誤検知を避ける。 [UI手順](/docs/alerts/new-relic-alerts/configuring-alert-policies/update-or-disable-policies-conditions#condition-on-off) または [API手順](/alerts/rest-api-alerts/new-relic-alerts-rest-api/disable-enable-alerts-conditions-using-api) に従って、AWS Lambda、RDS Enhanced Monitoring、VPC Flow Logsとのモニタリング統合に関連するすべてのアラート条件を無効にします。
2. 古いラムダ バージョンのラムダを削除します。AWS Lambda コンソールに移動し、 `newrelic-log-ingestion`を削除します。これにより、次のステップが完了するまで、RDS 拡張モニタリングと VPC フロー ログの統合が停止することに注意してください。
3. サービスを再有効化します。 [RDS Enhanced Monitoring](/docs/integrations/amazon-integrations/aws-integrations-list/aws-rds-enhanced-monitoring-integration#activate) または [VPC Flow Logs](/docs/integrations/amazon-integrations/aws-integrations-list/aws-vpc-flow-logs-monitoring-integration#enable) の手順に従うか、 [configure CloudWatch logs to stream to New Relic Lambda](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#stream-logs) の手順に従う。
4. 新しいラムダにデータが流れていることを確認します。
