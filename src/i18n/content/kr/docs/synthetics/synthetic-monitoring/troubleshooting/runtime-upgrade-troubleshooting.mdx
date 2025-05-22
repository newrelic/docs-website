---
title: 런타임 업그레이드 오류 문제 해결
type: troubleshooting
tags:
  - Synthetics
  - Synthetic monitoring
  - Troubleshooting
  - Runtime conversion
metaDescription: null
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  2024년 8월 26일부터 공개 또는 위치 위치에서 구형 런타임을 사용하여 새 모니터를 생성할 수 없습니다. 2024년 10월 22일부로 컨테이너화된 미니언(분당 호출 수) 및 구형 신세틱스 손잡이 버전이 [종료됩니다](/whats-new/2024/04/whats-new-04-09-eol-synthetics-runtime-cpm) .

  * 표시 위치의 경우 [런타임 업그레이드 UI](/docs/synthetics/synthetic-monitoring/using-monitors/runtime-upgrade-ui/) 사용하여 모니터를 최신 런타임으로 업데이트하세요.
  * 위치 위치의 경우 모니터 성능 저하를 방지하기 위해 [권장되는 마이그레이션 단계를](/docs/synthetics/synthetic-monitoring/private-locations/job-manager-transition-guide/#monitorMigration) 검토하십시오.
</Callout>

## 스크립팅된 브라우저: 요소와 상호 작용하려는 시도가 실패함 [#promises]

이전 런타임에서 생성된 모니터를 [Chrome 100(또는 최신) 런타임](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100) 과 비교할 때, `findElement` 및 페이지에서 요소를 찾아 상호작용하는 다른 메서드는 약속 처리 차이로 인해 실패할 수 있습니다. 모니터가 구형 런타임에서 전달되고 새 런타임에서 실패하며 해당 요소가 스크린샷에 존재하는 경우, 약속 처리 로직을 개선해야 할 수도 있습니다.

셀레니엄 웹드라이버 약속 관리자와 제어 흐름을 통해 약속을 관리하지 않고도 일부 기능이 원형 런타임에서 순서대로 실행될 수 있었습니다. 이 기능은 셀레니엄 웹드라이버 4.0에서 제거되었으며 더 이상 런타임에서 사용할 수 없습니다. 모든 비동기 함수와 약속은 `await` 또는 `.then` 약속 체인으로 관리해야 합니다. 이렇게 하면 스크립트 기능이 예상 순서대로 실행됩니다.

예를 들어, 약속 관리자와 제어 흐름은 `$browser.get` 이 약속을 반환하고 약속이 올바르게 처리되지 않더라도 이 부분 스크립트가 성공적으로 완료되도록 허용할 수 있습니다.

```js
$browser.get('http://example.com');

$browser.findElement($driver.By.css('h1'));
```

[Chrome 100(또는 그 이상) 런타임](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100) 에서는 약속을 반환하는 모든 메서드는 단계를 올바르게 순서 지정하기 위해 await 또는 `.then` 구문을 사용해야 합니다. 더 깔끔한 구문과 쉬운 사용으로 인해 await를 사용하는 것이 좋지만, `.then` promise 체인도 여전히 지원됩니다.

```js
await $browser.get('http://example.com');

let el = await $browser.findElement($driver.By.css('h1'));
```

## 스크립팅된 API: `request` 과의 차이점 `got` [#request]

[Node.js 10 및 이전 버전의 스크립트 API 런타임은](/docs/synthetics/synthetic-monitoring/using-monitors/manage-monitor-runtimes/#dependencies) [API테스트하는](/docs/synthetics/synthetic-monitoring/scripting-monitors/write-synthetic-api-tests-legacy/) 데 사용할 수 있는 `$http` 객체를 제공하기 위해 `request` Node.js 모듈을 사용했습니다.

[Node.js 16 및 최신 스크립트 API 런타임은](/docs/synthetics/synthetic-monitoring/using-monitors/manage-monitor-runtimes/#apidependencies) `request` 대신 `got` 사용합니다. `request` 모듈은 2020년에 더 이상 사용되지 않으며 새로운 API나 브라우저 기반 런타임에 더 이상 포함되지 않습니다. `$http` 객체는 기본적인 사용 사례에 대한 이전 버전과의 호환성을 제공하면서도 더 이상 사용되지 않는 모듈을 사용하지 않도록 하기 위해 `got` 의 지원을 받는 동시에 `request`와 유사한 사용자 지정 환경을 제공합니다. `request` 의 모든 고급 사용 사례가 지원되지는 않거나 지원되지 않을 수도 있습니다. [스크립트 예제와 변환 가이드가](/docs/synthetics/synthetic-monitoring/scripting-monitors/write-synthetic-api-tests/) 제공됩니다.

<Callout variant="tip">
  `$http` 객체가 제공하는 `request` 유사 환경은 Node.js 16 및 최신 스크립트 API 런타임에서 직접 `request` 를 사용하려는 모든 고객에게도 반환됩니다.
</Callout>

## 스크립트 API: 예상치 못한 토큰 `JSON.parse` [#scripted-api-unexpected]

응답 본문과 상호작용하는 동안 `JSON.parse` 함수를 사용하려고 하면 Node.js 16 이상 런타임을 사용하는 스크립트 API 모니터에서 예기치 않은 토큰 오류가 발생할 수 있습니다. 콘텐츠 유형 응답 헤더가 `application/json` 인 경우 `$http` 객체에서 반환되는 응답 본문은 JSON으로 구문 분석됩니다. 응답 본문을 구문 분석하기 위해 `JSON.parse` 사용하려는 추가 호출은 응답 본문이 이미 구문 분석되었기 때문에 이 오류와 함께 실패합니다.

콘텐츠 유형 응답 헤더가 `application/json` 이 아닌 경우 응답 본문은 자동으로 구문 분석되지 않으며 `JSON.parse` 함수를 계속 사용해야 합니다.

## 스크립트 API: `HEAD` 또는 `GET` [#scripted-api-head-get]

HTTP `HEAD` 또는 `GET` 요청에는 요청 본문을 포함할 수 없습니다. Node 10 및 이전 런타임에서 사용된 `request` 모듈은 이를 허용했지만, 이로 인해 새 런타임에서 오류가 발생합니다. 몇 가지 다른 설정으로 인해 오류가 발생할 수 있지만 가장 일반적인 제안은 다음과 같습니다.

* 본문이 비어 있더라도 요청에 본문을 포함하지 마세요.
* `HEAD` 또는 `GET` 요청에서 불필요한 옵션을 피하세요. `json: true`

## 스크립트 API: 쿼리 문자열(qs) 차이점 [#scripted-api-query]

Node 10 이하 런타임에서는 쿼리 문자열 설정이 `qs:` 옵션을 사용하여 전달되었습니다. Node 16 런타임의 경우 대신 `searchParams:` 옵션을 사용하세요. 옵션의 이름만 변경하면 됩니다. 쿼리 문자열의 내용은 업데이트할 필요가 없습니다.

## 스크립트 API: 쿠키 항아리 차이점 [#scripted-api-cookie]

Node 10 또는 이전 런타임에서는 `jar: true` 옵션을 사용하여 요청 간에 쿠키를 쿠키 항아리에 저장할 수 있습니다.

Node 16 런타임에서는 `tough-cookie` 모듈을 사용하여 쿠키 항아리를 만든 다음 요청에서 해당 쿠키 항아리를 참조해야 합니다. 쿠키라는 이름의 쿠키 항아리를 만든 경우 옵션에서 이를 참조하세요. `cookieJar: cookies`

## 스크립트 API: 양식 차이점 [#scripted-api-form]

Node 10 및 이전 런타임에서 `$http` 객체에 사용되는 `request` 모듈과 Node 16 런타임에서 `$http` 객체에 사용되는 `got` 모듈의 차이로 인해 API 모니터에서 양식을 사용하는 요청에서 문제가 발생할 수 있습니다.

그렇다면 이 부분적인 예에서 보여준 대로 `form-data` 모듈을 사용하여 요청이 포함된 양식을 만들고 포함하세요.

```js
const FormData = require('form-data');

let form = new FormData();
form.set('fieldName1','value1');
form.set('fieldName2','value2');

let req = {
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'multipart/form-data',
  },
  body: form
}
```

## UUID 모듈 버전 차이점 [#uuid-module-version]

Node 16 런타임에는 업데이트된 `require` 구문을 사용하도록 강제하는 최신 버전의 `uuid` 모듈이 포함되어 있습니다.

노드 10 및 이전: `const uuid = require('uuid');`

노드 16( `uuidv4` 사용 가정): `const { v4: uuidv4 } = require('uuid');`

## 스크립트 브라우저: 사용 중단 경고(`$browser` 및 `$driver` [#deprecations]

`$browser` 및 `$driver` 에 대한 사용 중단 경고는 브라우저 런타임 2.0.29 이상 버전부터 제거되었습니다. 더 이상 공개 위치를 사용할 때 이러한 경고를 받지 않게 됩니다. 로케이션을 사용할 때 이러한 경고를 받으면 노드 브라우저 런타임 이미지를 업데이트하세요.

## 스크립트된 브라우저: `waitForAndFindElement` 및 `waitForPendingRequests` [#waitMethods]

`waitForAndFindElement` 및 `waitForPendingRequests` 메서드는 Chrome 72 및 이전 스크립트 브라우저 런타임에서 제공되는 New Relic 사용자 지정 메서드입니다. Chrome 100 및 최신 런타임에서 `$driver` 및 `$browser` 와 함께 계속 사용할 수 있지만 `$selenium` 및 `$webDriver` 와 함께 직접 Selenium WebDriver 4.1 API를 사용할 때는 사용할 수 없습니다. 이 변경은 New Relic의 Selenium WebDriver 구현을 기본 Selenium WebDriver 구현과 더 잘 맞출 것입니다.

새 런타임에서 `waitForAndFindElement` 또는 `waitForPendingRequests` 을 계속 사용하기로 선택한 고객은 [코드 예제](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100/#waitForAndFindElement) 를 모니터에 붙여넣을 수 있습니다.