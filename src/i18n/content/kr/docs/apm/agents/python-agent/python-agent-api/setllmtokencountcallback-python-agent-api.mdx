---
title: set_llm_token_count_callback(Python 에이전트 API)
type: apiDoc
shortDescription: LLM 토큰 수를 계산하기 위해 콜백을 등록합니다.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call registers a callback to calculate LLM token counts'
freshnessValidatedDate: never
translationType: machine
---

## 통사론 [#syntax]

```py
    newrelic.agent.set_llm_token_count_callback(callback, application=None)
```

해당 언어 모델(LLM) (LLM) 이벤트에 대한 해당 개수를 계산하는 데 사용되는 콜백 함수를 등록합니다.

## 요구 사항 [#requirements]

Python 에이전트 버전 9.8.0 이상.

## 설명 [#description]

이 API는 `LlmEmbedding` 및 `LlmChatCompletionMessage` 이벤트의 토큰 수를 계산하고 저장하기 위한 콜백을 등록합니다.

* 이 함수는 `ai_monitoring.record_content.enabled` `false` 로 설정된 경우에 사용해야 합니다. 이 설정은 에이전트가 에이전트의 에이전트 개수가 서버 측에 첨부된 서버로 AI 콘텐츠를 보내는 것을 방지합니다.
* 여전히 LLM 이벤트에 대한 의미 개수를 캡처하려면 앱 코드에 콜백을 구현하여 로컬에서 의미 개수를 결정하고 이 정보를 뉴렐릭으로 보낼 수 있습니다.

대부분의 경우 이 API는 정확히 한 번 호출되지만 이 API를 여러 번 호출할 수 있습니다. 엔드포인트에 대한 각각의 새로운 호출은 이전에 등록된 콜백을 제공된 새 콜백으로 덮어씁니다. 콜백 설정을 완전히 해제하려면 원래 콜백 대신 `None` 를 전달하세요.

## API 규제합니다. [#api-parameters]

<table>
  <thead>
    <tr>
      <th width="25%">
        매개변수
      </th>

      <th>
        설명
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `callback`

        _호출 가능_ 또는 _없음_
      </td>

      <td>
        필수의. 토큰 수를 계산하는 콜백입니다. 현재 콜백을 설정 해제하려면 콜백 함수 대신 `None` 를 전달하세요.
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _물체_
      </td>

      <td>
        선택 과목. API 호출을 연결할 특정 애플리케이션 개체입니다. 애플리케이션 객체는 [`newrelic.agent.application`](/docs/apm/agents/python-agent/python-agent-api/application-python-agent-api/) 함수를 사용하여 얻을 수 있습니다.
      </td>
    </tr>
  </tbody>
</table>

## 반환 값 [#return-values]

없음.

## 콜백 요구 사항 [#callback-requirements]

제공된 콜백은 양의 정수 토큰 개수 값을 반환해야 합니다. 그렇지 않으면 LLM 이벤트에서 토큰 개수가 캡처되지 않습니다.

## 콜백 매개변수 [#callback-parameters]

<table>
  <thead>
    <tr>
      <th width="25%">
        매개변수
      </th>

      <th>
        설명
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `model`

        _끈_
      </td>

      <td>
        필수의. LLM 모델의 이름입니다.
      </td>
    </tr>

    <tr>
      <td>
        `content`

        _끈_
      </td>

      <td>
        필수의. 메시지 내용/프롬프트 또는 임베딩 입력입니다.
      </td>
    </tr>
  </tbody>
</table>

## 예 [#examples]

### 토큰 수 계산 및 콜백 등록

틱토큰의 예:

```py
import newrelic.agent
def token_count_callback(model, content):
    """
    Calculate token counts locally based on the model being used and the content.
    This callback will be invoked for each message sent or received during a LLM call.
    If the application supports more than one model, it may require finding libraries for
    each model to support token counts appropriately.

    Arguments:
    model -- name of the LLM model
    content -- the LLM message content
    """
    import tiktoken

    try:
        enc = tiktoken.encoding_for_model(model)
    except KeyError:
        return None # Unknown model
    return len(enc.encode(content))

newrelic.agent.set_llm_token_count_callback(token_count_callback)
```

전달된 애플리케이션 객체를 사용한 API 사용 예시:

```py
    application = newrelic.agent.register_application(timeout=10.0)
    newrelic.agent.set_llm_token_count_callback(token_count_callback, application)
```
