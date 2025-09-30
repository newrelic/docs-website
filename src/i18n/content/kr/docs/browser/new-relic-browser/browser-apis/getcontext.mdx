---
title: getContext(SPA API)
type: apiDoc
shortDescription: 현재 SPA 상호 작용에 대한 값을 브라우저에 비동기적으로 저장합니다.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call to store values across the current SPA interaction asynchronously in browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

## 통사론

```js
newrelic.interaction().getContext(function $callback)
```

현재 SPA 상호 작용에 대한 값을 브라우저에 비동기적으로 저장합니다.

## 요구 사항

* 브라우저 Pro+SPA 에이전트(v963 이상)

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

이 API 메서드는 현재 상호 작용과 연결된 컨텍스트 개체와 비동기적으로 호출되는 콜백을 사용합니다. 현재 상호 작용과 관련된 데이터를 집계하는 데 사용합니다. 이 값은 코드의 다른 부분에서 사용할 수 있습니다.

이 컨텍스트는 [`onEnd`](/docs/browser/new-relic-browser/browser-agent-spa-api/spa-on-end) 호출에서도 제공됩니다.

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
        `$callback`

        _기능_
      </td>

      <td>
        필수의. 상호작용 컨텍스트 객체를 유일한 인수로 받아들이는 함수.
      </td>
    </tr>
  </tbody>
</table>

## 반환 값

이 메서드는 `interaction()` 에서 생성한 것과 동일한 API 객체를 반환합니다.

## 예

```js
router.addRoute('/products/{productId}', params => {
  newrelic.interaction().getContext(ctx => ctx.productId = params.productId);
  renderProduct(params.productId);
  updateHash();
});

window.addEventListener('hashchange', (ev) => {
  const interaction = newrelic.interaction();
  interaction.getContext(ctx => {
    if (ctx.productId) {
      interaction.setAttribute('productId', ctx.productId);
    }
  });
});
```
