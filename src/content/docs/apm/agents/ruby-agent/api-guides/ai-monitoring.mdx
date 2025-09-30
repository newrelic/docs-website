---
title: AI monitoring APIs
tags:
  - Agents
  - Ruby agent
  - API guides
metaDescription: 'For information about customizing New Relic''s Ruby agent for AI monitoring.'
freshnessValidatedDate: never
redirects:
    - /docs/apm/agents/ruby-agent/api-guides/ruby-ai-monitoring-apis
    - /docs/apm/agents/ruby-agent/api-guides/ruby-ai-monitoring
---

When you've instrumented your app for AI monitoring, the New Relic Ruby agent automatically collects many AI metrics, but also provides APIs for collecting information on token count and user feedback.

<Callout variant="tip">
  AI monitoring APIs are available in Ruby agent version 9.8.0 and higher.
</Callout>

## Token count [#token-count]

You can set a callback proc for calculating `token_count` attributes for LlmEmbedding and LlmChatCompletionMessage events, and then pass that information to New Relic using the `NewRelic::Agent.set_llm_token_count_callback` API.

This API should be called only once to set a callback for use with all LLM token calculations. If it is called multiple times, each new callback will replace the old one. The proc will be called with a single hash as its input argument and must return an Integer representing the number of tokens used for that particular prompt, completion message, or embedding. Values less than or equal to 0 will not be attached to an event.

The hash has the following keys:

* `:model` (String) - The name of the LLM model
* `:content` (String) - The message content or prompt

The following example code demonstrates setting a callback that calculates token count and passing that callback to `NewRelic::Agent.set_llm_token_count_callback`.

```rb
    require 'tiktoken_ruby' # Example library for counting GPT model tokens used

    token_count_callback = proc do |hash|
      return unless hash[:model].includes?('gpt')
  
      enc = Tiktoken.encoding_for_model(hash[:model])
      enc.encode(hash[:content]).length
    end

    NewRelic::Agent.set_llm_token_count_callback(token_count_callback)
```

## User feedback [#user-feedback]

AI monitoring can correlate trace IDs between a generated message from your AI and the message feedback from an end user using `NewRelic::Agent.record_llm_feedback_event`.

`NewRelic::Agent.record_llm_feedback_event` accepts the following arguments:

* `trace_id` (required) - ID of the trace where the chat completion(s) related to the feedback occurred
* `rating` (required) - Rating provided by an end user (ex: 'Good', 'Bad', 1, 2, 5, 8, 10)
* `category` (optional) - Category of the feedback as provided by the end user (ex: “informative”, “inaccurate”)
* `message` (optional) - Freeform text feedback from an end user
* `metadata` (optional) - Set of key-value pairs to store any other desired data to submit with the feedback event

This API requires the current `trace_id` to correlate messages with feedback, which can be obtained using [NewRelic::Agent::Tracer.current_trace_id](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent/Tracer#current_trace_id-class_method).

The following example code uses a Sinatra app to demonstrate collecting the required user feedback and trace_id of a current transaction (along with this API's optional parameters), and then passing those parameters to `NewRelic::Agent.record_llm_feedback_event`.

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
