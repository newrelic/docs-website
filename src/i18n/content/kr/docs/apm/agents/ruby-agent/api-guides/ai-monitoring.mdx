---
title: AI 모니터링 API
tags:
  - Agents
  - Ruby agent
  - API guides
metaDescription: For information about customizing New Relic's Ruby agent for AI monitoring.
freshnessValidatedDate: never
translationType: machine
---

AI 모니터링을 위해 앱을 추가한 경우 뉴렐릭 루비 에이전트는 자동으로 많은 AI 지표를 수집할 뿐만 아니라, 사용량 및 사용자 피드백에 대한 정보를 수집하기 위한 API 도 제공합니다.

<Callout variant="tip">
  AI 모니터링 API 루비 에이전트 버전 9.8.0 이상에서 사용할 수 있습니다.
</Callout>

## 토큰 수 [#token-count]

LlmEmbedding 및 LlmChatCompletionMessage 이벤트에 대한 `token_count` 속성을 계산하기 위해 콜백 프로세스를 설정한 다음 `NewRelic::Agent.set_llm_token_count_callback` API 사용하여 해당 정보를 뉴렐릭에 전달할 수 있습니다.

모든 LLM 토큰 계산에 사용할 콜백을 설정하려면 이 API를 한 번만 호출해야 합니다. 여러 번 호출되면 각각의 새로운 콜백이 이전 콜백을 대체합니다. proc은 단일 해시를 입력 인수로 사용하여 호출되며 해당 특정 프롬프트, 완료 메시지 또는 포함에 사용되는 토큰 수를 나타내는 정수를 반환해야 합니다. 0보다 작거나 같은 값은 이벤트에 첨부되지 않습니다.

해시에는 다음과 같은 키가 있습니다.

* `:model` (문자열) - LLM 모델의 이름
* `:content` (문자열) - 메시지 내용 또는 프롬프트

다음 예제 코드는 토큰 수를 계산하는 콜백을 설정하고 해당 콜백을 `NewRelic::Agent.set_llm_token_count_callback` 에 전달하는 방법을 보여줍니다.

```rb
    require 'tiktoken_ruby' # Example library for counting GPT model tokens used

    token_count_callback = proc do |hash|
      return unless hash[:model].includes?('gpt')
  
      enc = Tiktoken.encoding_for_model(hash[:model])
      enc.encode(hash[:content]).length
    end

    NewRelic::Agent.set_llm_token_count_callback(token_count_callback)
```

## 사용자 피드백 [#user-feedback]

AI 모니터링은 `NewRelic::Agent.record_llm_feedback_event` 을 사용하여 AI에서 생성된 메시지와 사용자 최종의 메시지 피드백 간의 트레이스 ID를 연관시킬 수 있습니다.

`NewRelic::Agent.record_llm_feedback_event` 다음 인수를 허용합니다.

* `trace_id` (필수) - 피드백 관련 채팅 완료가 발생한 트레이스의 ID
* `rating` (필수) - 최종 사용자가 제공한 평점(예: '좋음', '나쁨', 1, 2, 5, 8, 10)
* `category` (선택 사항) - 최종 사용자가 제공한 피드백 카테고리(예: "유익함", "부정확함")
* `message` (선택 사항) - 최종 사용자의 자유 형식 텍스트 피드백
* `metadata` (선택) - 피드백 이벤트와 함께 제출할 다른 원하는 데이터를 저장하는 핵심 가치 쌍 세트

이 API [NewRelic::에이전트::트레이서.current_trace_id를](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent/Tracer#current_trace_id-class_method) 사용하여 얻을 수 있는 피드백과 메시지를 연관시키려면 현재 `trace_id` 가 필요합니다.

다음 예제 코드는 Sinatra 앱을 사용하여 현재 카트리지의 필수 사용자 피드백 및 트레이스를 수집한 다음(이 API 의 선택적 매개변수와 함께) 해당 매개변수를 `NewRelic::Agent.record_llm_feedback_event`에 전달하는 방법을 보여줍니다.

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
