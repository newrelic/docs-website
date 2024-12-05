---
title: 無限のトレーシングスパン属性のトレースフィルターの設定
tags:
  - Understand dependencies
  - Distributed tracing
  - Infinite Tracing
metaDescription: Here is how to customize span attribute filters for a trace observer.
freshnessValidatedDate: never
translationType: machine
---

トレースオブザーバーは、デュレーションフィルタやランダムフィルタに加えて、スパン属性のトレースフィルタを使用して有用なトレースを見つけます。特定の属性を持つスパンを持つトレースを保持または破棄するように、フィルタルールをカスタマイズすることができます。

## 概要

フィルタルールは、個々のトレースオブザーバーに固有のキーと値のペアです。無限トレース設定アプリを使用して、それらを定義および表示します。

スパン属性のトレースフィルタでは、合計3つのルールを設定することができますが、デフォルトでは、エラーを捕捉するために2つのルールが用意されています。デフォルトの2つのエラールールを削除することもできますが、デフォルトの2つのエラールールを維持し、必要に応じて追加のルールを追加することをお勧めします。

## カスタムルールの追加 [#add-custom-rule]

これは、ユーザー`sally@some_company.com`を含む属性を持つスパンを持つすべてのトレースを保持するルールを追加する方法の例です。

1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Apps > Your apps > Infinite Tracing settings**</DNT>に移動します。

2. 変更したいトレースオブザーバーについて、歯車のアイコンをクリックしてフィルターを開きます。

3. <DNT>**Create new rule**</DNT>の下で、 <DNT>**Span key**</DNT>の下に`user`を入力し、 <DNT>**Key operator**</DNT>ドロップダウンで値<DNT>**Equals**</DNT>を選択します。

   <img
     title="span_key.png"
     alt="Screenshot showing how to enter a span key."
     src="/images/distributed-tracing_screenshot-crop_update-span-key.webp"
   />

4. <DNT>**Span value**</DNT>の下に`sally@some_company.com`と入力し、 <DNT>**Value operator**</DNT>ドロップダウンで<DNT>**Equals**</DNT>を選択します。

   <img
     title="span_value.png"
     alt="Screenshot showing how to enter a span value."
     src="/images/distributed-tracing_screenshot-crop_update-span-value.webp"
   />

5. <DNT>**Observer action**</DNT>ドロップダウンで、 <DNT>**Keep**</DNT>を選択します。

   <Callout variant="tip">
     このルールにマッチするトレースがあれば、ルールの下にリストアップされています。
   </Callout>

6. カスタムルールを保存するには、 <DNT>**Add rule**</DNT>クリックします。

カスタムルールを追加すると、そのトレースオブザーバーに対して直ちに有効になります。

## ルールの優先順位

各ルールは個別に評価されます。 いずれかのルールが一致すると、そのオブザーバーアクション<DNT>**Keep**</DNT>または<DNT>**Discard**</DNT>が実行されます。 トレースに、 <DNT>**Keep**</DNT>と<DNT>**Discard**</DNT>両方のフィルター ルールに一致する属性を持つスパンが含まれる場合、トレースは破棄されます。

たとえば、エラーメッセージに特定のフレーズが含まれている一部の想定エラーを保存したくないとします。 エラーメッセージのみをターゲットにし、エラーのある他のすべてのトレースを保持する<DNT>**Discard**</DNT>フィルター ルールを作成できます。
