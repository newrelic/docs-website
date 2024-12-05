---
title: setApplicationVersion
type: apiDoc
shortDescription: 페이지의 후속 이벤트에 사용자 정의 애플리케이션 버전 문자열을 추가합니다.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to add an application version string to subsequent events on the page.
freshnessValidatedDate: '2023-08-17T00:00:00.000Z'
translationType: machine
---

## 통사론

```js
newrelic.setApplicationVersion(value: string|null)
```

페이지의 후속 이벤트에 사용자 정의 애플리케이션 버전 문자열을 추가합니다.

## 요구 사항

* 브라우저 Lite, Pro 또는 Pro+SPA 에이전트(v1.238.0 이상)

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

유효한 값으로 이 함수를 실행하면 브라우저 에이전트는 속성이 수동으로 설정 해제되거나 페이지가 언로드될 때까지 모든 후속 이벤트에 `application.version` 속성을 추가합니다. 함수가 두 번 이상 호출되면 제공된 가장 최근 값만 후속 이벤트에 전송됩니다. 이 함수가 `null` 값으로 호출되면 기존 애플리케이션 버전은 후속 이벤트 전송을 중단합니다.

`application.version` 속성을 설정하면 오류를 생성하는 소프트웨어 버전을 식별하는 데 도움이 됩니다. 다가오는 오류 수신함 릴리스는 오류를 생성하는 소프트웨어 버전을 자동으로 추적합니다. 호환되는 에이전트 버전과 함께 [SPA 모니터링을](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring) 사용하는 경우 애플리케이션 버전도 [`newrelic.interaction`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteraction) 이벤트에 포함됩니다.

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
        필수의. 모든 브라우저 이벤트를 특정 릴리스 태그에 연결하는 데 유용한 웹 애플리케이션의 버전을 나타내는 문자열입니다. `value` 매개변수는 고유하지 않아도 됩니다. ID가 고유해야 하는 경우 호출자가 해당 유효성 검사를 담당합니다.

        `null` 값을 전달하면 기존 애플리케이션 버전이 설정 해제됩니다.
      </td>
    </tr>
  </tbody>
</table>

## 예

### 애플리케이션 버전으로 이벤트 꾸미기

```js
newrelic.setApplicationVersion('1.2.3') // decorates events with the property 'application.version':'1.2.3'
```

### 애플리케이션 버전 꾸미기에서 이벤트 중지

```js
newrelic.setApplicationVersion(null) // events will no longer have an 'application.version' property set
```
