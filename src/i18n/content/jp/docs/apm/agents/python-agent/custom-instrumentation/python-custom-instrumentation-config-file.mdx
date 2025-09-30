---
title: 設定ファイルによるPythonのカスタムインストルメント
tags:
  - Agents
  - Python agent
  - Custom instrumentation
metaDescription: Modify your config file to add additional instrumentation to a monitored application when using the Python agent.
freshnessValidatedDate: never
translationType: machine
---

[`newrelic.ini`構成ファイル](/docs/apm/agents/python-agent/configuration/python-agent-configuration/#agent-configuration-file)を編集することで、Python エージェントの監視を拡張して、追加の関数やクラスのメソッドに費やされた時間をトレースできます。この形式の[カスタム インストルメンテーション](/docs/python/python-custom-instrumentation)は、API 呼び出しよりも実装が簡単で、コードを変更する必要がありません。ただし、より複雑なニーズの場合は、代わりに[API を介して計測する](/docs/python/python-instrumentation-by-api)必要がある場合があります。

## 設定ファイルの機能一覧 [#listing_functions]

インストルメンテーションを指定された関数とクラス メソッドに拡張するには、それらをエージェント構成ファイルの `newrelic` セクション内の `transaction_tracer.function_trace` 設定に追加します。関数の識別子の形式は `module:function` であり、クラス メソッドの識別子は `module:class.function`である必要があります。

<CollapserGroup>
  <Collapser
    id="dumdbm-example"
    title="dumbdbmの使用"
  >
    この例では、Python <DNT>**`dumbdbm`**</DNT>モジュールを使用して、データベースを開いてそのデータベースをファイルに書き戻すのにかかった時間を計測します。 この場合は次のように使用します:

    ```ini
    transaction_tracer.function_trace = dumbdbm:open
                                                   dumbdbm:_Database._commit
    ```
  </Collapser>
</CollapserGroup>

複数のアイテムをリストアップするには、以下のいずれかの方法を使用します。

* 一行で表示します。各項目をスペースで区切ります。

* 複数行: 後続の行をインデントするには、

  <DNT>
    **ini**
  </DNT>

  ファイルの規則に従います。

インストルメント化された関数のデータが報告されると、メトリクスには `Function/module:function` または `Function/module:class.function`の形式の名前が付けられます。トランザクションのパフォーマンスの内訳では、カテゴリは `Function` として表示され、セグメントは `module:function` または `module:class.function`として表示されます。低速トランザクション追跡の場合は、セグメント名のみが表示されます。関数が実際にジェネレーターを返している場合、ジェネレーターを返すのに費やした時間だけが記録され、ジェネレーターからの値の消費は記録されないことに注意してください。

## 拡張APIのラッピングに関する制限 [#restrictions_on_wrapping]

エージェント設定ファイルに関数をリストアップしてラッピングする際、メソッドがC拡張モジュールによってCコードで実装されたクラスのメンバーである場合は、この方法でクラスメソッドを指定することはできません。これは、Python C APIで実装された型のメソッドテーブルを変更することができないためです。

## 報告された関数名のオーバーライド [#overriding_the_name]

エージェント構成ファイルで `transaction_tracer.function_trace` 設定を使用する場合、関数の名前はメトリック名に使用され、 `Function`として分類されます。メトリック名で使用できる関数名をオーバーライドする必要がある場合、またはメトリック名を別の方法で分類する必要がある場合は、構成ファイルで関数トレースを定義する代替手段を使用できます。同等のもの:

```ini
transaction_tracer.function_trace = dumbdbm:open
                                               dumbdbm:_Database._commit
```

この場合、エージェント設定ファイルに2つの新しい設定セクションを作成し、トレースする機能ごとに1つずつ設定することになります。

```ini
[function-trace:dumbdbm-1]
enabled = true
function = dumbdbm:open
name = dumbdbm:open
group = Function

[function-trace:dumbdbm-2]
enabled = true
function = dumbdbm:_Database._commit
name = dumbdbm:_Database._commit
group = Function
```

`.ini`ファイルのセクション名は`function-trace:`で始まる必要があります。このプレフィックスに続く名前コンポーネントは何でもかまいませんが、構成ファイル内のすべての関数トレース セクションにわたって一意である必要があります。`group`および`name`設定をオーバーライドして、目的のメトリクス名を取得できます。`enabled`設定のデフォルトは`false`であり、関数トレースを有効にするにはこれを`true`に変更する必要があります。

## APIを使った機器 [#function_decorators]

単純なカスタム インストルメンテーションの目的では、構成ファイルによる方法がうまく機能します。より正確にカスタマイズされたインストルメンテーションとエージェントの動作を調整するには、 [Python エージェント API](/docs/agents/python-agent/api/python-agent-api-guide)を使用します。
