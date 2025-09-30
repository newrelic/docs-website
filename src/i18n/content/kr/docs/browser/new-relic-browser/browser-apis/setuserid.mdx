---
title: setUserId
type: apiDoc
shortDescription: 페이지의 후속 이벤트에 사용자 정의 식별자 문자열을 추가합니다.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to add an identifier to subsequent events on the page.
freshnessValidatedDate: never
translationType: machine
---

## 통사론

```js
newrelic.setUserId(value: string|null)
```

페이지의 후속 이벤트에 사용자 정의 식별자 문자열을 추가합니다.

## 요구 사항

* 브라우저 Lite, Pro 또는 Pro+SPA 에이전트(v1.230.0 이상)

* npm을 사용하여 브라우저 에이전트를 설치하는 경우 `BrowserAgent` 클래스를 인스턴스화할 때 하나 이상의 기능을 활성화해야 합니다. 예를 들어, `features` 배열에 다음을 추가합니다.

  ```js
  import { Metrics } from '@newrelic/browser-agent/features/metrics'

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      Metrics
    ]
  }
  ```

  자세한 내용은 [npm 브라우저 설치 설명서를](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent) 참조하세요.

## 설명

유효한 값으로 이 함수를 실행하면 브라우저 에이전트는 속성이 수동으로 설정 해제될 때까지 모든 이벤트와 함께 값을 `enduser.id` 속성으로 기록합니다. 식별자는 브라우저에 저장되므로 _동일한_ 출처의 후속 페이지 방문 시 이벤트 <DNT>**within a session**</DNT> 범위에 식별자가 연결됩니다. 이 기능은 최종 사용자 브라우저 개인 정보 보호 설정에 따라 달라질 수 있습니다. 이 함수가 `value = null` 와 함께 호출되면 기존 사용자 ID가 <DNT>**both**</DNT> 현재 페이지의 이벤트 및 저장소에서 삭제됩니다.

ID는 특히 [오류 받은 편지함](/docs/errors-inbox/errors-inbox/) 사용을 위해 JavaScriptError 이벤트에 첨부됩니다. 호환되는 에이전트 버전으로 [SPA 모니터링을](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring) 사용하는 경우 사용자 ID도 [`newrelic.interaction`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteraction) 이벤트에 포함됩니다.

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
        `value`

        _문자열_ 또는 _널_
      </td>

      <td>
        필수의. 모든 브라우저 이벤트를 특정 사용자와 연결하는 데 유용한 최종 사용자의 문자열 식별자입니다. `value` 매개변수는 고유하지 않아도 됩니다. ID가 고유해야 하는 경우 호출자가 해당 유효성 검사를 담당합니다.

        `null` 값을 전달하면 기존 사용자 ID가 설정 해제됩니다.
      </td>
    </tr>
  </tbody>
</table>

## 예

### 최종 사용자의 "세션 시작" 표시

```js
newrelic.setUserId('user-1234-v1.0')
```

### 이벤트가 현재 사용자에게 귀속되지 않도록 중지

```js
newrelic.setUserId(null)
```
