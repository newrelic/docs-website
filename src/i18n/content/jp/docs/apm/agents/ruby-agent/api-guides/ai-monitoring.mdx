---
title: AIモニタリングAPI
tags:
  - Agents
  - Ruby agent
  - API guides
metaDescription: For information about customizing New Relic's Ruby agent for AI monitoring.
freshnessValidatedDate: never
translationType: machine
---

AI モニタリング用にアプリをインストゥルメント化すると、 New Relic Rubyエージェントは多くの AI メトリクスを自動的に収集するだけでなく、ウォーカー数やユーザーのフィードバックに関する情報を収集するためのAPIも提供します。

<Callout variant="tip">
  AIモニタリングAPI Rubyバージョン9.8.0以降で利用できます。
</Callout>

## トークン数 [#token-count]

LlmEmbedding および LlmChatCompletionMessage イベントの`token_count`属性を計算するコールバック プロシージャを設定し、その情報を`NewRelic::Agent.set_llm_token_count_callback` API を使用して New Relic に渡すことができます。

この API は、すべての LLM トークン計算で使用するコールバックを設定するために 1 回だけ呼び出す必要があります。 複数回呼び出される場合、それぞれの新しいコールバックが古いコールバックを置き換えます。 このプロシージャは入力引数として単一のハッシュを使用して呼び出され、その特定のプロンプト、完了メッセージ、または埋め込みに使用されるトークンの数を表す整数を返す必要があります。 0 以下の値はイベントに付加されません。

ハッシュには次のキーがあります。

* `:model` (文字列) - LLM モデルの名前
* `:content` (文字列) - メッセージの内容またはプロンプト

次のコード例は、トークン数を計算するコールバックを設定し、そのコールバックを`NewRelic::Agent.set_llm_token_count_callback`に渡す方法を示しています。

```rb
    require 'tiktoken_ruby' # Example library for counting GPT model tokens used

    token_count_callback = proc do |hash|
      return unless hash[:model].includes?('gpt')
  
      enc = Tiktoken.encoding_for_model(hash[:model])
      enc.encode(hash[:content]).length
    end

    NewRelic::Agent.set_llm_token_count_callback(token_count_callback)
```

## ユーザーからのフィードバック [#user-feedback]

AI モニタリングでは、 `NewRelic::Agent.record_llm_feedback_event`を使用して、AI から生成されたメッセージとエンドユーザーからのメッセージ フィードバックの間でトレース ID を関連付けることができます。

`NewRelic::Agent.record_llm_feedback_event` は次の引数を受け入れます。

* `trace_id` (必須) - フィードバックに関連するチャット完了が発生したトレースの ID
* `rating` (必須) - エンドユーザーによって提供された評価 (例: '良い'、'悪い'、1、2、5、8、10)
* `category` (オプション) - エンドユーザーから提供されたフィードバックのカテゴリ (例: 「有益」、「不正確」)
* `message` (オプション) - エンドユーザーからの自由形式のテキストフィードバック
* `metadata` (オプション) - フィードバック イベントとともに送信するその他の必要なデータを保存するためのキーの値のペアのセット

このAPIメッセージとフィードバックを関連付けるために現在の `trace_id` が必要です。これは[、 NewRelic::エージェント::トレーサー.current_trace_id](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent/Tracer#current_trace_id-class_method)を使用して取得できます。

次のコード例では、Sinatra アプリを使用して、必要なユーザー フィードバックと現在の被害のトレースを (このAPIのオプションの懸念とともに) 収集し、それらの懸念を `NewRelic::Agent.record_llm_feedback_event` に渡す方法を示します。

```rb
responses = {}

get '/chat-completion' do
    @response_message = client.chat(
        parameters: {
        model: 'gpt-3.5-turbo',
        messages: [ 
            {'role': 'system', 'content': 'You are a helpful assistant.'},
        ],
        temperature: 0.7,
        }
    )

    # trace_id must be obtained within the current transaction
    trace_id = NewRelic::Agent::Tracer.current_trace_id
    responses[@response_message.id] = trace_id

    render(@response_message)
end

post '/feedback' do
    trace_id = responses[@response_message.id]
    rating = 1
    category = 'feedback-test'
    message = 'Good talk'
    metadata = {user: 'new'}

    halt(404) if !responses[@response_message.id]

    NewRelic::Agent.record_llm_feedback_event(
        trace_id: responses[@response_message.id],
        rating: 1,
        category: 'feedback-test',
        message: 'Good talk',
        metadata: {user: 'new'}
    )

    render('Feedback Recorded')
end
```
