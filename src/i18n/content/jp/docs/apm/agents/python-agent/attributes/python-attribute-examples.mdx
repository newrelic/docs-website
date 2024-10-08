---
title: Python属性の例
tags:
  - Agents
  - Python agent
  - Attributes
metaDescription: Examples of using attributes with the Python agent.
freshnessValidatedDate: never
translationType: machine
---

[属性](/docs/agents/python-agent/attributes/python-agent-attributes) をPythonエージェントで使用した例をご紹介します。

## キャプチャーリクエストパラメーター [#ex_req_params]

デフォルトでは、リクエスト パラメータのキャプチャは有効になっていません。次の構成では、デフォルトの宛先`transaction_tracer` 、 `transaction_events` 、および`error_collector`のパラメーター キャプチャがオンになります。宛先を制限するには、[特定の宛先の選択の例を](#ex_select_dest)参照してください。

<DNT>
  **Configuration:**
</DNT>

```ini
attributes.include = request.parameters.*
```

## 特定のリクエストパラメータのみを取得 [#ex_req_params_exclude]

特定のリクエスト パラメータのみを取得するには、リストを`attributes.include`に渡すだけです。

<DNT>**Configuration**</DNT>：

```ini
attributes.include = request.parameters.user_id request.parameters.product_id
```

## すべてのアトリビュートを無効にする [#ex_disable_all]

この例では、属性が無効になっているため、includeとexcludeのリストは無視され、すべての属性がフィルタリングされます。

<DNT>
  **Configuration:**
</DNT>

```ini
attributes.enabled = false
attributes.include = request.parameters.*
```

<DNT>
  **Input keys:**
</DNT>

```
foo, bar, request.parameters.foo, request.parameters.bar
```

<DNT>
  **Output for destinations:**
</DNT>

```
transaction_tracer: none
error_collector:    none
transaction_events: none
browser_monitoring: none
```

## 特定の目的地を選択 [#ex_select_dest]

この例では

* トランザクション トレースでは、属性が無効になります。インクルード リストとエクスクルード リストは無視され、この宛先ではすべての属性がフィルタリングされます。

* <InlinePopover type="browser"/>

  の属性もデフォルトで無効になっています。

* リクエストパラメータ（プレフィックスが`request.parameters.` ）は、すべての宛先でデフォルトでオフになっています。

その結果、トレースされたエラーとトランザクションイベントで送信されるのは`bar`のみです。

<DNT>
  **Configuration:**
</DNT>

```ini
attributes.enabled = true
transaction_tracer.attributes.enabled = false
attributes.exclude = foo
```

<DNT>
  **Input keys:**
</DNT>

```
foo, bar, request.parameters.foo, request.parameters.bar
```

<DNT>
  **Output for destinations:**
</DNT>

```
transaction_tracer: none
error_collector:    bar
transaction_events: bar
browser_monitoring: none
```

## 値と目的地の選択 [#ex_select_values_and_dest]

この例では、特定の出力先には特定の入力キーが選択され、他の出力先には選択されません。

* `food.fruit.banana`キーは、トランザクショントレースからのみ除外されます。
* `food`キーと`food.bread`キーはすべての宛先から除外されます。

<DNT>
  **Configuration:**
</DNT>

```ini
browser_monitoring.attributes.enabled = true
attributes.exclude = food*
attributes.include = food.fruit.*
transaction_tracer.attributes.exclude = food.fruit.banana
```

<DNT>
  **Input keys:**
</DNT>

```
food, food.bread, food.fruit.banana, food.fruit.apple
```

<DNT>
  **Output for destinations:**
</DNT>

```
transaction_tracer: food.fruit.apple
error_collector:    food.fruit.banana, food.fruit.apple
transaction_events: food.fruit.banana, food.fruit.apple
browser_monitoring: food.fruit.banana, food.fruit.apple
```
