---
title: PHPエージェントのインスタンス数のトラブルシューティング
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: 'What the PHP instance count means on APM''s Applications Summary page, and why it may seem different than expected.'
freshnessValidatedDate: never
translationType: machine
---

## 問題

PHP エージェントの[APM <DNT>**Summary**</DNT>](/docs/apm/applications-menu/monitoring/apm-overview-dashboard)ページで、<DNT>**Hosts**</DNT> テーブル内の PHP エージェント インスタンス数はいくつですか? なぜこれらの数字は変化するのでしょうか、また、なぜそこに矛盾があるように見えるのでしょうか?

## 原因

<DNT>**Summary**</DNT>ページにリストされている各サーバーには、インスタンスの数が含まれます (例: <DNT>**42 app instances**</DNT> )。 Instance 数は、最後に報告された収集で PHP エージェントによって使用されたオープン ファイル記述子の最大数を示します。 これらのファイル記述子はオープン I/O ソケットであり、エージェント/デーモン通信チャネルを反映します。

インスタンスの数は、コマンドラインやバックグラウンド、外部プロセスが実行されている場合に増加します。また、処理能力の高さによっても影響を受けることがあります。例えば、Apacheサーバーは、負荷の増加に対応するために接続プールを増やすように設定されているかもしれません。

サーバー間で期待値に差がある場合は、バックグラウンドタスクが一方のサーバーで実行され、もう一方のサーバーでは実行されていないことを反映している可能性があります。また、予想外の数値は、ロードバランサーの設定ミスの可能性もあります。
