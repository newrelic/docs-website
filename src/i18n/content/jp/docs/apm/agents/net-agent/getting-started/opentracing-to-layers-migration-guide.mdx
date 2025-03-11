---
title: .NET OpenTracing から AWS Lambda レイヤーへの移行ガイド
tags:
  - Agents
  - NET agent
  - Migration guides
metaDescription: This guide helps New Relic AWS Lambda Agent for .NET users migrate from NewRelic.OpenTracing.AmazonLambda.Tracer to AWS Lambda layers
freshnessValidatedDate: never
translationType: machine
---

このガイドでは、 `NewRelic.OpenTracing.AmazonLambda.Tracer`と .NET エージェント Lambda レイヤー間の主な変更点について説明します。 また、アップグレード時に使用できるさまざまなオプションと、.NET エージェント Lambda レイヤーを使用して正常に移行する方法についても詳しく説明します。

<Callout variant="important">
  インストゥルメントされたAWS Lambda関数のサポートは、.NETエージェントのv10.24.0から開始されます。
</Callout>

この移行による主な変更点は次のとおりです。

* `NewRelic.OpenTracing.AmazonLambda.Tracer`パッケージはエージェントインストゥルメンテーションと競合しているため、削除する必要があります。
* OpenTracing のAWS Lambda 関数に加えられたコード変更はすべて元に戻す必要があります。
* New Relic .NET エージェントはAWS Lambda 関数を実装するために使用されます。
* AWS Lambda レイヤーは、.NET エージェントと必要な New Relic Lambda 拡張機能をバンドルすると利用できます。
* ほとんどの場合、 AWS Lambda 関数のインストゥルメンテーションは自動で行われます。
* .NET エージェントは、New Relic LambdaAWS 関数でデータを送信するために Lambda 拡張機能に依存します。
* レイヤーは、 New Relic Lambda CLI ツール、サーバーレス フレームワーク プラグイン、または手動で構成できます。
* 関数の実行方法が根本的に変更されたため、メトリクスの名前とタイミングが異なります。
* 古いメトリックに基づくダッシュボード、アラート、クエリは、移行後に更新する必要があります。

## NewRelic.OpenTracing.AmazonLambda.トレーサーとOpenTracingの削除 [#remove]

.NET エージェントを使用する前に `NewRelic.OpenTracing.AmazonLambda.Tracer` パッケージを削除し、それをサポートするためにAWS Lambda 関数に加えた変更をすべて元に戻す必要があります。

1. `NewRelic.OpenTracing.AmazonLambda.Tracer`パッケージを設定するには、元の`FunctionHandler`を呼び出す新しい`FunctionHandler`を作成し、それをラップしてインストゥルメンテーションを有効にする必要があります。 `NewRelic.OpenTracing.AmazonLambda.Tracer`を削除する前に、クリーンアップをよりスムーズに行うためにその呼び出しを元に戻す必要があります。
2. .NET エージェントは、OpenTracing API を使用してカスタム データを渡すことをサポートしていません。 OpenTracing APIに直接依存するコードへの変更、または `NewRelic.OpenTracing.AmazonLambda.Tracer` パッケージ経由の変更は、.NET エージェント API を使用するために削除または移行する必要があります。
3. プロジェクトから`NewRelic.OpenTracing.AmazonLambda.Tracer`パッケージを削除します。 削除に関連して残っている問題をクリーンアップします。

## レイヤー配置方法の選択 [#install]

`NewRelic.OpenTracing.AmazonLambda.Tracer`パッケージを削除した後、次の手順では、.NET AWS Lambda レイヤーをインストールして構成するために使用する方法を選択します。 上で述べたように、主に 3 つのオプションがあります。

* New Relic Lambda CLI
* New Relic Serverless フレームワーク プラグイン
* 完全に手動でインストール

設定の大部分を自動化するため、Lambda CLI または Serverless Framework プラグインのいずれかを選択することをお勧めします。 それぞれに考慮すべき依存関係と要件があり、そのいくつかは次のセクションで概説します。 これらのアプローチのいずれかをすでに使用している場合は、すべてのAWS Lambda 関数に同じアプローチを使用して、シンプルさを保つことをお勧めします。

AWS Lambda監視の詳細な開始手順については、 [有効化ガイド](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/enable-aws-lambda-monitoring/)をご覧ください。

## New Relic Lambda CLI [#cli]

<Callout variant="important">
  .NET エージェント AWS Lambda レイヤーのサポートは、Lambda CLI の v0.9.2 から開始されます。
</Callout>

Lambda CLI [クイックスタートには、](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/) .NET エージェント レイヤーを使用するようにAWS Lambda 関数を更新するコマンドの例があります。 これにより、関数の実行時間が自動的に検出され、適切なレイヤーが選択されます。 追加のセットアップ オプションについては[、Lambda CLI リポジトリ](https://github.com/newrelic/newrelic-lambda-cli?tab=readme-ov-file#recommendations)を参照してください。

## New Relic Serverless フレームワーク プラグイン [#serverless]

<Callout variant="important">
  .NET エージェントAWS Lambdaレイヤーのサポートは、Serverless フレームワーク プラグインの v5.3.0 から開始されます。
</Callout>

[Serverless Framework プラグイン クイックスタートには、](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/)プラグインをインストールし、Serverless Framework 設定を更新するために必要な手順が記載されています。 追加のセットアップオプションについては[、 Serverless framework プラグイン リポジトリ を](https://github.com/newrelic/serverless-newrelic-lambda-layers)ご覧ください。

## 完全に手動でインストール [#manual]

AWS Lambda 関数を手動でインストゥルメントすることはお勧めしませんが、そのために必要な手順については[ここに](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/#console)情報があります。

* .NETエージェントは、手動でインストールした場合、ほとんどの場合、 AWS Lambda関数を自動的に計算します。
* データの送信にはNew Relic Lambda Extensionが依然として必要
