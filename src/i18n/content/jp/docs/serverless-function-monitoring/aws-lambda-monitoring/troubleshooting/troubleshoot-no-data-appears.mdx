---
title: AWS Lambda にデータが表示されない問題のトラブルシューティング
type: troubleshooting
tags:
  - Serverless function monitoring
  - AWS Lambda monitoring
  - Troubleshooting
metaDescription: Troubleshooting steps if data does not appear in your app for AWS Lambda.
freshnessValidatedDate: never
translationType: machine
---

## 問題

AWS Lambda関数のトラフィックを生成し、5分待っても、関数データがNew Relic UIに表示されません。 ログにはエラーはなく、New Relic UI には`NRIntegrationErrors`または`NRIntegrationWarnings`はありません。

## 解決

データが表示されず、エラーも発生しない最も一般的な理由は[、ライセンスキーとアカウント ID](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/account-linking/)が異なるアカウントのものであることです。 不一致の場合、[ クラウド ウォッチ ログを処理する New Relic Lambda 拡張機能](https://github.com/newrelic/newrelic-lambda-extension) または[ lambda](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream/) はデータを正常に報告しますが、アカウント ID が一致しないため、データを黙ってドロップします。これにより、エラーや警告は発生しません。

この問題を解決するには、ライセンスキーとアカウント ID が同じアカウントのものであることを確認してください。 このような問題を最小限に抑えるには、 [New Relic Lambda CLI](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/account-linking/#rec)を使用してサーバーレス監視を有効にすることをお勧めします。 AWS Secrets Manager でライセンスキーを更新できます。 AWS Secrets Manager を使用していないアカウント ID と設定の場合、正しいライセンスキーまたはアカウント ID を使用して[環境変数を](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/account-linking/#env-var)更新することで問題を修正できます。
