---
title: オンホスト統合のためのデータ収集とレポート作成
tags:
  - Integrations
  - On-host integrations
  - Understand and use data
metaDescription: How New Relic on-host integrations that work with the infrastructure agent collect and report data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

このドキュメントでは、オンホスト統合がデータを収集してレポートする方法について説明します。

## データ収集と報告のプロセス [#data-collection]

これは、オンホスト統合が New Relic にデータを送信する方法です。

1. 起動時に、インフラストラクチャエージェントは、統合の定義ファイルを含むディレクトリをスキャンします。
2. インフラストラクチャ・エージェントは、定義ファイルで定義されたすべての統合実行ファイルを登録します。
3. エージェントは専用のディレクトリをスキャンして統合設定ファイルを探します。
4. これらの設定ファイルが、インフラストラクチャ・エージェントに登録されている統合を指定している場合、エージェントは統合をセットアップしてスケジューリングします。
5. スケジュールされた間隔（デフォルトは15秒）で、エージェントは統合機能からデータを取得し、送信の準備をします。60秒ごとに、そのデータを他のインフラストラクチャーのデータと一緒にNew Relicに送信します。
6. コレクションパスに成功すると、統合実行ファイルが終了します。

<img
  title="Agents and New Relic"
  alt="Agents and New Relic"
  src="/images/infrastructure_diagram_agents-and-nr.webp"
/>

## 統合アーキテクチャ [#example-diagram]

SQL Server 統合がどのように機能するかの例を次に示します。

* Infrastructureエージェントがインストールされているホスト1には、ポート`1433`のアウトバウンドルールが必要です。
* SQL Serverのホスト2には、ポート`1433`のインバウンドルールが必要です。

この例において、ホスト1はホスト2からデータを取得します。

## ファイル構成と仕様 [#file-structure]

これらのオンホスト統合のファイル構造を理解すると、統合のカスタマイズ、データの理解と使用、問題のトラブルシューティングに役立ちます。

これらの統合は、一連のオープンソース仕様に準拠しています。これらのファイル仕様の説明については、 [「 ファイル仕様 」](/docs/integrations/integrations-sdk/file-specifications)を参照してください。
