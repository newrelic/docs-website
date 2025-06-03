---
title: トラブルシューティングのためのトレースログの生成（Node.js）
tags:
  - Agents
  - Nodejs agent
  - Troubleshooting
metaDescription: 'To reduce disk space consumption, be sure to lower the ''trace'' log level after generating a troubleshooting log for your New Relic Node.js agent.'
freshnessValidatedDate: never
translationType: machine
---

New Relic [Node.js エージェント ログは、](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#logging_config)デフォルトの`info`レベルでエラーをキャプチャします。ただし、トラブルシューティングやデバッグを行う場合は、問題の発見と調査に役立つように、より詳細な`trace`ログを生成します。

<Callout variant="important">
  `trace`ログ設定は、非常に詳細なログ レベルです。ディスク容量の消費を減らすには、テスト後に`logging : {level}`セクションを[元の設定](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#logging_config)に戻します。
</Callout>

## ログファイルの生成 [#create]

詳細な`trace`ログ ファイルを生成するには:

1. `newrelic.js`ファイルを編集し、 `logging`セクションの`level`を`trace`に変更します。環境変数を使用する場合 (Lambda では、これが最も一般的な方法です)、 `NEW_RELIC_LOG_LEVEL`を`trace`に設定します。

   ```js
   logging: {
     level: 'trace'
   }
   ```

2. ノードを再起動します。

3. 十分なロギングデータを生成するために、Webアプリケーションを5分程度動かしてみてください。

4. テスト後、 `level`を`info` (デフォルト) などの、より冗長でない[ログ レベル](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#log_level)に変更します。

5. 生成されたログファイルを開いて確認します。

Lambdaを使用している場合、 [ログの設定方法を学ぶ](/docs/serverless-function-monitoring/aws-lambda-monitoring/troubleshooting/troubleshoot-enabling-serverless-monitoring-aws-lambda/#attach-logs).

## ログファイルの検証 [#logfile]

デフォルトでは、Node.js エージェントは [ログ ファイルを](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#log)現在の作業ディレクトリに`newrelic_agent.log`として保存します。ログ ファイルまたはフォルダーが表示されない場合:

1. ロギング パスを`stdout`または`stderr`に設定しているかどうかを確認してください。
2. 現在の作業ディレクトリと、ログファイルを置くディレクトリが同じであることを確認します。
