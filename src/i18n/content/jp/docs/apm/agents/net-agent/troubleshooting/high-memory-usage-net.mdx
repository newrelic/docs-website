---
title: メモリ使用量が多い（.NET）
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting tips to determine if Windows Working Set memory usage is a concern after you install New Relic's .NET agent for your app.
freshnessValidatedDate: never
translationType: machine
---

## 問題

New Relic の .NET エージェントをインストールすると、Microsoft Windows <DNT>**Task Manager**</DNT>などの監視ツールで`Working Set`メモリ使用量が増加します。 通常、増加量はモニターアプリケーションごとに約 100 MB になります。 これは物理マシンと仮想マシンの両方で発生する可能性があります。

## 解決

通常、この`Working Set`メモリ使用量の増加はパフォーマンスに影響しません。Windows は特定のアプリ用に`Working Set`メモリを予約しますが、別のアプリがメモリを必要とする場合はいつでも解放できます。これは、Windows アプリにとって通常の予期される動作です。

ごくまれに、特にRAMが限られているシステムや多くのアプリプールがあるシステムでは、メモリ使用量がパフォーマンスに影響を与えることがあります。パフォーマンスに影響がある場合は、以下のいずれかの方法をお試しください。

* [特定のアプリプールでのみインストゥルメンテーションを有効にする](/docs/agents/net-agent/configuration/net-agent-configuration#include_exclude_apps)

* マシンにRAMを追加する。

* マシンからいくつかのアプリケーションプールを削除します。

* パフォーマンスを監視して、

  <DNT>
    **Task Manager**
  </DNT>

  に表示されるメモリ使用量の増加が実際にパフォーマンスに影響を与えているかどうかを確認します。 そうであれば、メモリを解放して他のプロセスと共有します。

## 原因

根本的な原因は[、Windows 自体がプロセスごとにメモリを予測して割り当てる](https://docs.microsoft.com/en-us/windows/win32/memory/working-set)方法にあります。Windows は、このメモリを`Working Set`メモリとして割り当てます。これは、オペレーティング システムがプロセス用に予約するメモリです。別のプロセスが必要とする場合、OS は`Working Set`メモリをすぐに解放できます。メモリ割り当ては Windows によって決定されるため、New Relic は使用中に表示されるメモリ量を減らすことができません。

通常、これに伴うパフォーマンスの低下がない限り、この増加は問題になりません。使用可能なメモリがすべて`Private Working Set`メモリとして占有されている場合、パフォーマンスの問題が発生する可能性があります。サーバーのメモリが不足している場合は、応答時間とトランザクション時間を監視して、このメモリ使用量が実際にパフォーマンスに影響を与えているかどうかを確認します。しばらく増加がなければ、メモリ使用量は問題ありません。

通常、 `Working Set`メモリ使用量は、RAM が限られているシステムでのみ問題を引き起こします。たとえば、New Relic のテスト システムでは、監視対象のアプリまたはアプリ プールごとに約 100 MB の増加が示される場合があります。80% の増加は、64 GB の 80% の場合は顕著ですが、4 GB の 80% の場合はそれほど顕著ではありません。

同様に、監視するアプリケーションプールの数も使用率に影響します。1つのアプリケーションプールで使用量が大幅に増加することはほとんどありませんが、4GBのRAMと30のアプリケーションプールを持つシステムでは問題が発生する可能性があります。
