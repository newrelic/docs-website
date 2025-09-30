---
title: Record_ml_event(Python 에이전트 API)
type: apiDoc
shortDescription: 쿼리에 사용할 기계 학습 사용자 지정 이벤트를 기록합니다.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call records a machine learning event for use in querying.'
freshnessValidatedDate: '2023-09-13T00:00:00.000Z'
translationType: machine
---

## 통사론

```py
newrelic.agent.record_ml_event(event_type, params, application=None)
```

쿼리에 사용할 기계 학습 이벤트를 기록합니다.

## 요구 사항

Python 에이전트 버전 9.1.0 또는 더 높게.

## 설명

이는 New Relic UI에서 보고 쿼리할 수 있는 기계 학습 [이벤트를](/docs/data-apis/understand-data/new-relic-data-types/#event-data) 기록합니다. 모니터링되는 트랜잭션의 컨텍스트 외부에서 이를 사용하려면 애플리케이션 매개변수를 사용하세요.

<Callout variant="important">
  `event_type` 및 `params` 에 대한 제한사항은 [제한사항 및 제한된 문자](/docs/data-apis/custom-data/custom-events/apm-report-custom-events-attributes/#limits) 및 [예약어를](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#reserved-words) 참조하세요.
</Callout>

<Callout variant="important">
  [높은 보안 모드가](/docs/apm/agents/python-agent/getting-started/apm-agent-security-python/#restricted) 활성화되면 이 설정이 비활성화됩니다.
</Callout>

## 매개변수

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
        `event_type`

        _끈_
      </td>

      <td>
        필수의. `event_type` 는 기계 학습 이벤트의 이름(또는 유형)을 정의하며 문자열이어야 합니다. 트랜잭션에 대해 기록된 추가 속성은 기계 학습 이벤트에 추가되지 않습니다.
      </td>
    </tr>

    <tr>
      <td>
        `params`

        _딕셔너리_
      </td>

      <td>
        필수의. 기계 학습 속성을 이벤트에 연결합니다. `params` 으로 전달된 속성만 추가됩니다. 트랜잭션에 대해 기록된 추가 속성은 기계 학습 이벤트에 추가되지 않습니다.
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _물체_
      </td>

      <td>
        선택 과목. 모니터링되는 트랜잭션의 컨텍스트 외부에서 이벤트를 기록하려면 이를 사용하여 호출을 특정 애플리케이션 개체와 연결하세요. 애플리케이션 객체는 [`newrelic.agent.application`](/docs/apm/agents/python-agent/python-agent-api/application-python-agent-api/) 함수를 사용하여 얻을 수 있습니다.
      </td>
    </tr>
  </tbody>
</table>

## 반환 값

없음.

## 예

### 백그라운드 작업에서 기계 학습 이벤트 기록 [#bg-task-event]

다음은 백그라운드 작업과 관련된 기계 학습 이벤트를 기록하는 예입니다.

```py
@newrelic.agent.background_task() 
def bg_task(): 
    # do some type of work in this background task...
    application = newrelic.agent.application()
    newrelic.agent.record_ml_event('your_event_type', {'param1':'value1'}, application)
```
