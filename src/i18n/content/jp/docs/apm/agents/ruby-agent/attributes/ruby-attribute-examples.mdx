---
title: Ruby属性の例
tags:
  - Agents
  - Ruby agent
  - Attributes
metaDescription: Examples of using attributes with the New Relic Ruby agent.
freshnessValidatedDate: never
translationType: machine
---

このドキュメントでは、New Relic Ruby エージェントを使用して属性コレクションを構成する方法の例を示します。属性のすべての Ruby エージェント構成設定のリストについては、 [Ruby エージェント構成: 属性](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#attributes)を参照してください。

## キャプチャーリクエストパラメーター [#ex\_req\_params][#ex_req_params]

デフォルトでは、リクエスト パラメータのキャプチャは有効になっていません。次の構成では、デフォルトの宛先`transaction_tracer` 、 `transaction_events` 、および`error_collector`のパラメーター キャプチャがオンになります。宛先を制限するには、[特定の宛先の選択の例を](#ex_select_dest)参照してください。

<DNT>
  **Configuration:**
</DNT>

```yml
attributes.include: request.parameters.*
```

リクエスト パラメータには文字列`request.parameters`のプレフィックスが付き、ネストされたパラメータにはそのネストを反映するキーがあります。たとえば、プロファイルの下にネストされた場所属性を持つユーザーのキーは`request.parameters.user.profile.location`になります。

同様に、コレクションのメンバーである属性には、メンバーシップを反映するインデックスを持つキーがあります。ユーザーが複数の電話番号を持っている場合、キーは`request.parameters.phone_numbers.0` 、 `request.parameters.phone_numbers.1`などのように表示されます。

## リクエストパラメータを取得する際に機密データを除外する [#ex\_req\_params\_exclude][#ex_req_params_exclude]

パスワードやクレジットカード番号などの機密情報をリクエストパラメータから省略したい場合があります。以下の設定でそれが可能になります。

<DNT>**Configuration**</DNT>：

```yml
attributes.include: request.parameters.*
attributes.exclude: [request.parameters.password, request.parameters.credit_card_no]
```

## 特定のリクエストパラメータのみを取得 [#ex\_req\_params\_capture\_specific][#ex_req_params_capture_specific]

特定のリクエスト パラメータのみを取得するには、リストを`attributes.include`に渡すだけです。

<DNT>**Configuration**</DNT>：

```yml
attributes.include: [request.parameters.user_id, request.parameters.shard_id]
```

## キャプチャレスクの仕事論 [#ex\_resque\_args][#ex_resque_args]

デフォルトでは、Resqueのジョブ引数はキャプチャされません。この機能を有効にするには、以下の設定を行います。

```yml
attributes.include: job.resque.args.*
```

<DNT>
  **Note:**
</DNT>

Resque ジョブへの引数は位置指定であり、生成されるキーにはこれが反映されます。たとえば、2 つの引数を取るジョブには、キー`job.resque.args.0`と `job.resque.args.1`

## Sidekiqジョブの引数をキャプチャ [#ex\_sidekiq\_args][#ex_sidekiq_args]

デフォルトでは、Sidekiqのジョブ引数はキャプチャされません。この機能を有効にするには、以下の設定を行います。

```yml
attributes.include: job.sidekiq.args.*
```

<DNT>
  **Note:**
</DNT>

Sidekiq ジョブへの引数は位置指定であり、生成されるキーにはこれが反映されます。たとえば、2 つの引数を取るジョブには、キー`job.sidekiq.args.0`と `job.sidekiq.args.1`

## すべてのアトリビュートを無効にする [#ex\_disable\_all][#ex_disable_all]

この例では、属性が無効になっているため、includeとexcludeのリストは無視され、すべての属性がフィルタリングされます。

<DNT>
  **Configuration:**
</DNT>

```yml
attributes.enabled: false
attributes.include: request.parameters.*
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

* transaction\_tracer: なし
* error\_collector: なし
* transaction\_events: なし
* browser\_monitoring: なし

## 特定の目的地を選択する [#ex\_select\_dest][#ex_select_dest]

この例では

* トランザクション トレースでは、属性が無効になります。インクルード リストとエクスクルード リストは無視され、この宛先ではすべての属性がフィルタリングされます。
* <InlinePopover type="browser" />の属性もデフォルトで無効になっています。
* リクエストパラメータ（プレフィックスが`request.parameters.` ）は、すべての宛先でデフォルトでオフになっています。

その結果、トレースされたエラーとトランザクションイベントで送信されるのは`bar`のみです。

<DNT>
  **Configuration:**
</DNT>

```yml
attributes.enabled: true
transaction_tracer.attributes.enabled: false
attributes.exclude: foo
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

* transaction\_tracer: なし
* error\_collector: バー
* transaction\_events: バー
* browser\_monitoring: なし

## 値と目的地の選択 [#example3]

この例では、特定の出力先には特定の入力キーが選択され、他の出力先には選択されません。

* `food.fruit.banana`キーは、トランザクショントレースからのみ除外されます。
* `food`キーと`food.vegetable`キーはすべての宛先から除外されます。

<DNT>
  **Configuration:**
</DNT>

```yml
browser_monitoring.attributes.enabled: true
attributes.exclude: food*
attributes.include: food.fruit.*
transaction_tracer.attributes.exclude: food.fruit.banana
```

<DNT>
  **Input keys:**
</DNT>

```
food, food.vegetable, food.fruit.apple, food.fruit.banana
```

<DNT>
  **Output for destinations:**
</DNT>

* transaction\_tracer: food.fruit.apple
* error\_collector: food.fruit.apple、food.fruit.banana
* transaction\_events: food.fruit.apple, food.fruit.banana
* browser\_monitoring: food.fruit.apple, food.fruit.banana