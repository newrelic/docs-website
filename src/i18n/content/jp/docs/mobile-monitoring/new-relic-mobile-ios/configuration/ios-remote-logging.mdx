---
title: iOS エージェントを使用したロギング
tags:
  - Mobile logging
  - New Relic Mobile iOS
metaDescription: Suggestions for setting up the logging in your app with the New Relic agent
freshnessValidatedDate: never
translationType: machine
---

プロジェクト全体で一貫性のある包括的なログ記録を確保するために、iOS エージェントはログ記録 API を提供します。 エージェントのログ記録 API を使用して、モバイル アプリのログを New Relic に送信します。 これにより、ログが 1 か所に集められ、分析できるようになります。 詳細については、[モバイル ログ API を](/docs/mobile-monitoring/mobile-monitoring-ui/mobile-logs/#ios)参照してください。

## ログレベルの設定

エージェントおよびリモート ログの iOS エージェントログレベルを設定できます。

### エージェントログレベル

エージェント ログレベルは New Relic エージェントで設定され、どのログメッセージがデバイスのコンソールに書き込まれるかを決定します。 これには New Relic エージェント ログも含まれます。 すべての New Relic エージェントログを表示するには、ログレベルを`NRLogLevelDebug`に設定します。

### リモートログレベル

New Relic プラットフォームでは、リモート ログレベルによって、デバイスから New Relic に送信されるログの詳細度が制御されます。 これにより、データ量を管理し、関連する情報に焦点を当てることができます。

**設定**: New Relic ダッシュボードの<DNT>**Application**</DNT>タブでリモートログレベルを設定できます。 リモートログレベルの設定の詳細については、[モバイルログ](/docs/mobile-monitoring/mobile-monitoring-ui/mobile-logs)を参照してください。

## 自動ログ収集

New Relic プラットフォームでは、リモート ログ記録が有効になっている場合、iOS エージェントはアプリから`stdout`と`stderr`に書き込まれたすべてのログを収集します。 `NSLog()` 、Swift `print()` 、およびその他の印刷ファミリ関数へのすべての呼び出しをキャプチャします。 この方法で収集されたログは`NRLogLevelInfo`に設定されます。 この機能はデフォルトで無効になっています。 有効にするには、 `NRFeatureFlag_AutoCollectLogs`機能フラグを使用します。

エージェントは、 `'\n\n'`区切り文字を使用してログメッセージを区切ります。 タイムスタンプは、アプリケーションがログを書き込んだときではなく、エージェントがログを収集した時刻を反映します。 ログメッセージはエージェントによって収集される前にバッファリングされるため、これによりミリ秒の差が生じる可能性があります。

<Callout variant="important">
  この機能は Xcode の組み込みコンソールに干渉するため、デバッガーが接続されている間は有効にできません。
</Callout>