---
title: setCurrentRouteName(SPA API)
type: apiDoc
shortDescription: SPA 경로에 기본 이름보다 더 정확한 이름을 제공합니다. 기본 그룹화보다는 특정 경로를 모니터링합니다.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call with browser monitoring to give routes more accurate names and monitor specific routes rather than by default grouping.
freshnessValidatedDate: never
translationType: machine
---

## 통사론

```js
newrelic.setCurrentRouteName(string $name)
```

SPA 경로에 기본 이름보다 더 정확한 이름을 제공합니다. 기본 그룹화보다는 특정 경로를 모니터링합니다.

## 요구 사항

* 브라우저 Pro+SPA 에이전트(v998 이상)

* npm을 사용하여 브라우저 에이전트를 설치하는 경우 `BrowserAgent` 클래스를 인스턴스화할 때 `spa` 기능을 활성화해야 합니다. `features` 배열에 다음을 추가합니다.

  ```js
  import { Spa } from '@newrelic/browser-agent/features/spa';

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      Spa
    ]
  }
  ```

  자세한 내용은 [npm 브라우저 설치 설명서를](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent) 참조하세요.

## 설명

이 메서드는 현재 경로의 이름을 지정합니다. 이것은 다음과 같은 경우에 유용할 수 있습니다.

* 경로에 기본적으로 있는 것보다 더 정확한 이름을 지정합니다.
* 기본적으로 다른 경로와 그룹화될 수 있는 경로를 모니터링합니다.

현재 이 방법은 SPA [`BrowserInteraction`](/docs/insights/explore-data/attributes/browser-default-attributes-insights#browserinteraction-attributes) 이벤트에만 적용됩니다. 이 API를 사용하면 이전 경로와 대상 경로를 추적하는 두 개의 새로운 사용자 지정 속성이 생성됩니다.

* `previousRouteName`
* `targetRouteName`

이 API를 사용할 때 [`browserInteractionName`](/docs/insights/explore-data/attributes/browser-default-attributes-insights#interaction-name) 속성은 `targetRouteName` 값을 사용합니다. `setName` 를 사용하여 브라우저 상호 작용 이름을 설정하는 경우 해당 이름이 우선 적용됩니다.

`setCurrentRouteName()` API는 [`BrowserInteraction` 이벤트](/docs/insights/explore-data/attributes/browser-default-attributes-insights#browserinteraction-attributes) 의 이름 속성을 결정하므로 경로가 변경되면 이 API를 <DNT>**every time**</DNT> 로 호출해야 합니다. 이렇게 하면 `BrowserInteraction` 이벤트에 올바른 속성이 있게 됩니다.

<Callout variant="tip">
  경로가 아닌 브라우저 상호작용의 이름을 설정하는 [`setName()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsetname) 와 비교하십시오.
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
        필수의. 페이지의 현재 경로 이름입니다.

        `setCurrentRouteName()` 에 전달된 경로 이름은 어떤 문자열이든 가능하지만 특정 리소스가 아닌 라우팅 <DNT>**pattern**</DNT> 을 나타내야 합니다. 예를 들어, `/users/123` 대신 `/users/:id` 사용하세요.

        `null` 이면 경로 변경 요구 사항을 종료하고 기본 이름 지정 전략을 반환합니다.
      </td>
    </tr>
  </tbody>
</table>

## 예

```js
router.onChange(function(route) {
  newrelic.setCurrentRouteName(route.name);
});
```
