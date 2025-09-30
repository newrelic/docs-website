---
title: Pythonランタイムメトリクス
tags:
  - Agents
  - Python agent
  - Supported features
metaDescription: The Python agent records runtime metrics for garbage collection and CPU/ memory usage
freshnessValidatedDate: never
translationType: machine
---

Python エージェントは実行時メトリックを記録し、Python プロセスとインタープリターのパフォーマンスを分析できるようにします。 これには、CPU 使用率、メモリ使用量、ガベージ コレクションに関連するメトリックが含まれます。 この動作はデフォルトで有効になっています。 これを無効にするには、[構成ファイルまたは環境変数のいずれかの設定を無効にします](/docs/apm/agents/python-agent/configuration/python-agent-configuration#runtime-metrics)。

## CPU使用率

CPUランタイムメトリクスでは、ユーザーとシステムのCPU使用率を調べてCPUの使用状況を監視したり、CPUのさまざまなコンポーネントに費やされた時間を確認したりすることができます。以下のようなCPU使用率のメトリクスがあります。

* <DNT>
    **CPU time**
  </DNT>

  : CPU のさまざまな状態に費やされた時間を追跡します。 これには、ユーザー (アプリケーション コードの実行時間) とシステム (OS で費やされた時間) が含まれます。 このメトリックは、経過時間の合計を秒単位で表します。

* <DNT>
    **CPU utilization**
  </DNT>

  : CPU のさまざまなコンポーネントによって時間の経過とともに使用されている処理リソースの量を分析します。 これには、ユーザー コンポーネント (アプリケーション コードを実行するため) とシステム コンポーネント (カーネル コードを実行するため) が含まれます。 このメトリックは、指定された CPU コンポーネントで費やされた時間を経過した CPU 時間の合計で割ったパーセンテージとして報告されます。

## メモリ使用量

システム全体のメモリ消費量や、プロセスやホストごとの使用率を監視することができます。以下のメモリ使用量のメトリクスがあります。

* <DNT>
    **Total physical memory**
  </DNT>

  : 時間の経過とともにシステムで使用されている物理メモリの合計量 (メガバイト単位) を監視します。 このメトリックは、個々のプロセス ID でも使用できます。

* <DNT>
    **Memory utilization**
  </DNT>

  : システムおよび個々のプロセスのメモリ使用率を時間の経過とともに追跡します。 このメトリックは、システム (または特定のプロセス) によって使用されている物理メモリの合計を使用可能なメモリの合計量で割った値で表されます。

## ガーベッジコレクション

<Callout variant="important">
  ガベージ コレクション プロファイリングは、エージェントではデフォルトで無効になっています。これを有効にするには、 [こちら](/docs/agents/python-agent/configuration/python-agent-configuration/#garbage-collection-runtime-metrics)のドキュメントを参照してください。
</Callout>

ガベージコレクタは、使用されていないデータオブジェクトを見つけ、そのメモリ空間を別のプロセスが使用できるように取り戻します。Pythonエージェントは、以下のガベージコレクションメトリクスを提供します。

* <DNT>
    **Object count by type**
  </DNT>

  : 関連する収集カウントを表示することで、ガベージ コレクターによって収集される最も一般的なオブジェクト タイプについて詳しく知ることができます。 [top_object_count_limit 設定](/docs/agents/python-agent/configuration/python-agent-configuration/#garbage-collection-runtime-metrics)を構成することで、このメトリクス タイプによって報告されるオブジェクト タイプの最大数をカスタマイズできます。

* <DNT>
    **Object count by generation**
  </DNT>

  : ガベージ コレクターの各世代でコレクションが発生すると、生き残ったオブジェクトは上位の世代に昇格されます。 このメトリクスを使用すると、ガベージコレクターの各世代に保存されているオブジェクトの数を時間の経過とともに表示できます。

* <DNT>
    **Total time by generation**
  </DNT>

  : ガベージ コレクターがコレクションの各世代に費やしている時間量を分析します。

* <DNT>
    **Garbage collector collections**
  </DNT>

  : コレクションの数は、各世代に設定されたオブジェクト閾値によって影響を受けます。 閾値に達すると、収集プロセスがトリガーされます。 コレクションは[、 gc.collect()](https://docs.python.org/3/library/gc.html#gc.collect)を呼び出してアプリケーション コード内で手動でトリガーすることもできます。 このメトリクスは、時間の経過とともに各世代で発生したガベージ コレクター スイープの数を報告します。

* <DNT>
    **Garbage collector uncollectable**
  </DNT>

  : 一部のインスタンスでは、ガベージ コレクター が特定のオブジェクトに到達できず、解放できず、収集不可能と判断されることがあります。 このメトリクスでは、各世代でガベージコレクターによって収集できなかったオブジェクトの数を表示できます。

* <DNT>
    **Garbage collector collected**
  </DNT>

  : このメトリクスは、各世代でガベージコレクターによって収集されたオブジェクトの合計数を報告します。
