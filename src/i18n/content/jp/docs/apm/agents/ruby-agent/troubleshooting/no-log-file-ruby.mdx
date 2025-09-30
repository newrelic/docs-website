---
title: ログファイルがない(Ruby)
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: Ensure your New Relic Ruby agent has been configured to generate log files.
freshnessValidatedDate: never
translationType: machine
---

## 問題

`log/newrelic_agent.log`には New Relic ログファイルがありません。

## 解決

`newrelic_agent.log`ファイルがない場合は、次の手順を試して診断してください。

1. お客様のアプリケーションでエージェントが実際に必要とされているかどうかを確認してください。

   * `Gemfile`の`newrelic_rpm` gem 行が`require: false`でマークされていないことを確認してください。これにより、Bundler が gem を要求できなくなります。`require: false`ステートメントを削除することも、アプリケーションの起動時にコード内の別の場所で`require 'newrelic_rpm'`を呼び出して、 `newrelic_rpm` gem を手動で制御することもできます。
   * `newrelic_rpm` gem が`Gemfile`内のグループにある場合は、そのグループがデプロイ先の環境に読み込まれていることを確認してください。
   * `Gemfile`の`newrelic_rpm`行が、デプロイ先の環境で false と評価される条件でラップされていないことを確認してください。

2. アプリケーションのルート ディレクトリ内に`log`ディレクトリが存在し、アプリケーションを実行しているユーザーが書き込み可能であることを確認してください。

3. アプリサーバー プロセスを開始する現在の作業ディレクトリがアプリのルート ディレクトリと同じであることを確認してください (つまり、現在の作業ディレクトリには`log`ディレクトリが含まれている必要があります)。

デバッグの目的で、エージェントを強制的に有効にし、そのログ出力を`STDOUT`に送信すると役立つ場合があります。これを行うには、アプリケーション サーバーの起動時に環境変数`NEW_RELIC_LOG=stdout`と`NEW_RELIC_AGENT_ENABLED=1`を設定します。
