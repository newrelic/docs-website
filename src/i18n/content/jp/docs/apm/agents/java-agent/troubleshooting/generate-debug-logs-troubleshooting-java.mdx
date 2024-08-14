---
title: トラブルシューティングのためのデバッグログの生成（Java）
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'When troubleshooting your New Relic Java agent, change the newrelic_agent.log level temporarily to FINEST, then collect about 5 minutes of log data.'
freshnessValidatedDate: never
translationType: machine
---

New Relic Java エージェントのトラブルシューティングを行う場合は、 `finest`ログを生成してエラーを見つけて調査します。トラブルシューティングが終了したら、必ずログ ファイルを`info`などのより冗長な設定に戻してください。

## 要件 [#requirement]

`newrelic.yml` ファイル内のログファイル設定のみを変更する場合は、サーバーまたはJVMを再起動する必要はありません。 ただし、その他の変更を行った場合は、サーバーまたは JVM を<DNT>**must**</DNT>再起動する必要があります。

`newrelic.yml`ファイル内の元の行インデントを必ず維持してください。YAML は「スペースに依存」しており、適切なインデントが必要です。

`audit_mode`設定 ( `true`に設定されている場合) では、Java エージェントと New Relic の間の通信もログ ファイルに記録されます。New Relic サポートは、追加のトラブルシューティングのために[監査モードのログ](/docs/agents/manage-apm-agents/configuration/log-audit-all-data-your-new-relic-agent-transmits)を要求する場合があります。

## ログファイルの生成 [#finer]

詳細な`finest`ログ ファイルを生成するには:

1. `newrelic.yml`ファイルを編集し、 [`log_level`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-log_level)を`finest`に変更します。 これらの行は必ず[インデント<DNT>**two spaces**</DNT>](#requirements)してください。

   ```
   # The agent uses its own log file to keep its logging
     # separate from that of your application. Specify the log level here.
     # This setting is dynamic, so changes do not require restarting your application.
     # The levels in increasing order of verboseness are:
     # off, severe, warning, info, fine, finer, finest
     # Default is info.
     log_level: finest

     # Log all data sent to and from New Relic in plain text.
     # This setting is dynamic, so changes do not require restarting your application.
     # Default is false.
     audit_mode: false
   ```

2. 十分なロギングデータを生成するために、Webアプリケーションを5分程度動かしてみてください。

3. テスト後、 [`log_level`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-log_level)を`info` (デフォルト) などの冗長レベルに変更します。

4. ログファイルを開いて、エラーがないか調べてください。

## ログファイルの検証 [#logfile]

<Callout variant="important">
  `finest`ログ設定は、非常に詳細なログ レベルです。テスト後にディスク容量の消費を減らすには、 `log_level`を元の設定に戻します。
</Callout>

デフォルトでは、ログ ファイルは、 `newrelic.jar`と同じディレクトリ内の`logs`サブディレクトリに保存されます。必要に応じて、[ログ ファイルが表示されない場合のトラブルシューティング手順](/docs/agents/java-agent/troubleshooting/no-log-file-java)に従います。
