---
title: Nuxt.js 통합
tags:
  - nuxt.js integration
  - nuxt integration
  - new relic integrations
metaDescription: 'Learn how to query your New Relic data with NRQL, our SQL-like query language.'
freshnessValidatedDate: never
translationType: machine
---

Nuxt.js 대시보드를 사용하면 애플리케이션 오류율, 초기 페이지 로드 평균, 경로 변경, 처리량 및 JavaScript 오류가 있는 페이지 보기를 쉽게 추적할 수 있습니다. 우리의 에이전트 에이전트와 Vue <InlinePopover type="browser"/>로 구축된 Nuxt.js 대시보드를 사용하면 올인원 위치에서 중요한 정보를 볼 수 있습니다.

<img
  title="Nuxt.js dashboard"
  alt="A screenshot of a Nuxt.js dashboard"
  src="/images/infrastructure_screenshot-crop_nuxtjs-dashboard.webp"
/>

## 1. 인프라 에이전트 설치 [#infra]

데이터를 뉴렐릭으로 가져오려면 먼저 인프라 에이전트를 설치해야 합니다.(설치한 경우 이 단계를 건너뛰십시오.) 이를 통해 뉴렐릭은 애플리케이션 오류율, 처리량 및 JavaScript 오류가 있는 페이지 뷰가 대시보드에 나타날 수 있도록 데이터를 수집할 수 있습니다. 이 단계는 선택 사항이지만, 모든 호스트 및 브라우저 모니터링 데이터를 보려면 인프라 에이전트를 설치하는 것이 좋습니다.

인프라 에이전트를 설치하는 방법에는 두 가지가 있습니다.

* [안내 설치](https://one.newrelic.com/marketplace?state=607786be-99a9-fa66-4b67-3f7f3b9551d4)에 따라 인프라 에이전트로 시스템을 계측합니다.
* 명령줄을 사용하여 [인프라 에이전트를 설치합니다](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux).

## 2. Vue 브라우저 모니터링 설치 [#install]

인프라 에이전트를 설치한 후 다음 단계는 브라우저 모니터를 설치하는 것입니다. <DNT>**[one.newrelic.com](https://one.newrelic.com)**</DNT> 부터:

1. 딸깍 하는 소리

   <DNT>
     **Integrations & Agents**
   </DNT>

2. 딸깍 하는 소리

   <DNT>
     **Browser & mobile**
   </DNT>

3. <DNT>
     **Vue**
   </DNT>

   클릭합니다. 여기에서 안내에 따라 3단계에서 사용된 자바스크립트 코드 스니펫을 생성합니다. 브라우저 모니터링 에이전트와 Vue 통합은 본질적으로 동일한 서비스를 제공하지만 Vue 통합은 JavaScript(Nuxt.js의 프레임워크)에만 적용됩니다. JavaScript가 아닌 다른 서비스를 모니터링하려면 브라우저 모니터링 에이전트를 사용해야 합니다.

## 3. 통합 구성 [#config]

Nuxt.js 애플리케이션에 JavaScript 스니펫을 추가하려면:

1. nuxt.js 애플리케이션의

   <DNT>
     **`static`**
   </DNT>

   폴더에 자바스크립트 파일을 만듭니다.

   ```bash
   touch <FILENAME>.js
   ```

2. 새로 생성된 JavaScript 파일에서 함수를 생성하고 생성된 스크립트를 함수 내에 추가합니다.

   ```js
   function FUNCTION_NAME() {
     // GENERATED SCRIPT IS PASTED HERE BY REMOVING OPENING AND CLOSING <script> TAGS>
   }
   FUNCTION_NAME();
   ```

3. 아래 코드 스니펫을 복사하여 `nuxt.config.js` 파일의 `HEADER tag`에 붙여넣고 함수 이름과 파일 이름을 업데이트합니다.

   ```js
     __dangerouslyDisableSanitizers: ["script"],
     script: [
       {
         hid: "<FUNCTION_NAME>",
         src: "/<FILENAME>.js",
         defer: true,
         type: "text/javascript",
         charset: "utf-8",
       },
     ],
   ```

4. 응용 프로그램을 다시 시작하십시오.

## 4. one.newrelic.com에서의 애플리케이션 모니터링 [#monitor]

이제 탐색 모음에서 <DNT>**Browser**</DNT> 선택하면 <DNT>**[one.newrelic.com](https://one.newrelic.com)**</DNT> 에서 애플리케이션을 볼 수 있습니다. <DNT>**one.newrelic.com**</DNT> 플랫폼에서 캡처된 모든 지표를 보려면 귀하의 앱을 선택하세요. 다음 쿼리를 사용하여 NRQL로 데이터를 볼 수도 있습니다.

```sql
SELECT firstPaint 
FROM PageView
```

## 다음은 뭐지?

NRQL 쿼리 작성 및 대시보드 생성에 대해 자세히 알아보려면 다음 문서를 확인하세요.

* 기본 및 고급 쿼리를 생성 [하기 위한 쿼리 빌더 소개](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)

* [대시보드를 사용자 지정하고 다양한 작업을 수행하기 위한 대시보드 소개](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)

* [대시보드를 관리하여](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)

  <InlinePopover type="dashboards"/>

  의 디스플레이 모드를 조정하거나 대시보드에 더 많은 콘텐츠를 추가하세요.
