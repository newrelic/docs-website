---
title: addRelease
type: apiDoc
shortDescription: 동일한 페이지에 여러 JavaScript 번들이 있는 릴리스를 식별하기 위해 고유한 이름과 ID를 추가합니다.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to identify releases with multiple components on the same page.
freshnessValidatedDate: never
translationType: machine
---

## 통사론

```js
newrelic.addRelease(string $release_name, string $release_id)
```

동일한 페이지에 여러 JavaScript 번들이 있는 릴리스를 식별하기 위해 고유한 이름과 ID를 추가합니다.

## 요구 사항

* Browser Pro 또는 Pro+SPA 에이전트(v1016 이상)

* npm을 사용하여 브라우저 에이전트를 설치하는 경우 `BrowserAgent` 클래스를 인스턴스화할 때 `jserrors` 기능을 활성화해야 합니다. `features` 배열에 다음을 추가합니다.

  ```js
  import { JSErrors } from '@newrelic/browser-agent/features/jserrors';

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      JSErrors
    ]
  }
  ```

  자세한 내용은 [npm 브라우저 설치 설명서를](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent) 참조하세요.

## 설명

<InlinePopover type="browser"/>에서 릴리스는 현재 실행 중인 애플리케이션 버전에 대한 정보로 오류에 태그를 지정하는 방법입니다. 이는 공유 구성 요소를 서로 다른 팀이 소유하거나 여러 구성 요소가 독립적으로 구현되고 배포되지만 동일한 페이지에서 실행되는 사이트에 유용합니다.

최신 웹 응용 프로그램에는 상호 연결되는 부분이 많기 때문에 응용 프로그램에는 동일한 페이지 로드와 관련된 여러 릴리스(이름이 다른)가 있을 수 있습니다. 예를 들어 릴리스를 사용하여 다음을 수행할 수 있습니다.

* 이전에 캐시된 앱 버전의 오류와 새 버전의 오류 간의 차이점을 확인하세요.
* A/B 테스트, 느린 롤아웃, 기능 플래그 및 기타 고급 배포 방법 중에 발견된 문제를 식별합니다.
* 사용할 [브라우저 소스 맵](/docs/new-relic-browser-source-map-support) 의 버전을 결정하십시오.

JavaScript의 URL이 고유하지 않은 경우 브라우저 에이전트에 대한 이 API 호출로 릴리스 이름과 식별자를 지정해야 합니다. 이 정보는 소스 맵을 스토리지 서비스에 게시할 때도 필요합니다. 이 API는 동일한 페이지에 여러 JavaScript 번들이 있는 릴리스를 식별하기 위해 브라우저 모니터링을 위한 ID를 추가합니다.

코드를 구현, 배포할 때마다 앱의 JavaScript 번들에 대한 URL이 <DNT>**is unique**</DNT> 인 경우, 브라우저 모니터링에서는 릴리스를 식별하기 위해 추가 정보가 필요하지 않습니다. 예를 들어 일부 프런트엔드 배포 도구는 구현하다, 배포하다 코드의 파일 이름에 Jenkins 빌드 번호 또는 `git commit sha` 사용합니다. 이는 오류를 일으킨 릴리스를 고유하게 확인하는 데 충분합니다.

페이지가 로드된 후 최대한 빨리 `newrelic.addRelease()` 을(를) 호출하십시오. 브라우저 에이전트에 표시되는 모든 오류는 해당 버전의 JavaScript 코드와 연결됩니다.

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
        `$release_name`

        _끈_
      </td>

      <td>
        <DNT>**Required.**</DNT> 구성 요소에 대한 간단한 설명입니다. 예를 들어 프로젝트, 애플리케이션, 파일 또는 라이브러리의 이름입니다.
      </td>
    </tr>

    <tr>
      <td>
        `$release_id`

        _끈_
      </td>

      <td>
        <DNT>**Required.**</DNT> 이 릴리스의 ID 또는 버전입니다. 예를 들어 버전 번호, CI 환경의 빌드 번호, GitHub SHA, GUID 또는 콘텐츠 해시 등이 있습니다. 뉴렐릭은 이 값을 문자열로 변환하므로 필요한 경우 `null` 또는 `undefined` 사용할 수도 있습니다.

        `$release_name` 및 `$release_id` 조합은 고유해야 합니다. 예를 들어:

        * `'signup', '2.4.0'`

        * `'signup', '2.4.1'`

          그러나 다른 구성 요소에 대해 동일한 버전을 사용할 수 있습니다. 예를 들어:

        * `'signup', '2.4.0'`

        * `'logout', '2.4.0'`
      </td>
    </tr>
  </tbody>
</table>

## 예

### 현재 짧은 SHA [#release-id-example1]

```js
newrelic.addRelease('checkout page', 'a818994')
```

### 시맨틱 버전 관리 [#release-id-example2]

```js
newrelic.addRelease('jquery.min.js', 'v3.1.1')
```
