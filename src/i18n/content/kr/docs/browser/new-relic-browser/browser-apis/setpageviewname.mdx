---
title: setPageViewName
type: apiDoc
shortDescription: URL 구조를 돕거나 URL의 라우팅 정보를 캡처하기 위해 페이지 보기를 그룹화합니다.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: 'Browser API call to group page views, to help URL structure or help capture the URL''s routing information.'
freshnessValidatedDate: never
translationType: machine
---

## 통사론

```js
newrelic.setPageViewName(string $name[, string $host])
```

URL 구조를 돕거나 URL의 라우팅 정보를 캡처하기 위해 페이지 보기를 그룹화합니다.

## 요구 사항

* 브라우저 Lite, Pro 또는 Pro+SPA 에이전트(v593 이상)

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

사용자 정의된 페이지 이름은 URL 구조가 유용한 그룹화를 제공하지 않거나 브라우저 에이전트가 라우팅 정보가 저장된 URL 부분을 캡처하지 않는 경우 페이지 보기를 보다 효과적으로 그룹화하는 데 도움이 될 수 있습니다. `PageView` [이벤트를](/docs/using-new-relic/data/understand-data/new-relic-data-types#event-data) 쿼리하면 맞춤 이름이 `browserTransactionName` 속성으로 노출됩니다. 맞춤 이름은 <InlinePopover type="browser"/>UI.

페이지 URL 대신 사용자 정의된 [페이지 보기 이름](/docs/browser/new-relic-browser/additional-standard-features/page-views-insights-your-sites-popularity) 을 사용하려면 이름을 슬래시로 구분된 문자열로 형식화하십시오. 올바르게 표시하려면 `window load` 이벤트가 발생하기 전에 이 호출을 수행하십시오.

<Callout variant="tip">
  이 API 호출은 브라우저의 표준 페이지 보기 및 [`PageView`](/docs/insights/insights-data-sources/default-data/browser-default-events-attributes-insights#browser-attributes-table) 이벤트의 데이터에 적용됩니다. SPA 페이지 보기 및 `BrowserInteraction` 이벤트에 대한 사용자 정의 이름을 설정하려면 [SPA: setName](/docs/browser/new-relic-browser/browser-agent-spa-api/spa-set-name) 을 참조하십시오. 두 통화를 함께 사용하는 것이 좋습니다.
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
        `$name`

        _끈_
      </td>

      <td>
        필수의. 사용하려는 페이지 이름입니다. 영숫자를 사용하십시오.
      </td>
    </tr>

    <tr>
      <td>
        `$host`

        _끈_
      </td>

      <td>
        선택 과목. 기본값은 `http://custom.transaction` 입니다. 일반적으로 `host` 을 사이트의 도메인 URI로 설정합니다.

        이러한 사용자 정의 트랜잭션을 추가로 그룹화하려면 사용자 정의 `host` 를 제공하십시오. 그렇지 않으면 페이지 보기에 기본 도메인 `custom.transaction` 이 할당됩니다. 이름 내의 세그먼트가 아직 표시되지 않은 경우 [URL 허용 목록 설정](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls) 에 명시적으로 추가해야 합니다.
      </td>
    </tr>
  </tbody>
</table>

## 예

```js
newrelic.setPageViewName('/login')
// Or
newrelic.setPageViewName('/login', 'https://www.myapp.com')
```
