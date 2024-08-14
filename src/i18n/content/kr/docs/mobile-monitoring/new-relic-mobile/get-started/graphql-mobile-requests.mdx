---
title: 모바일 앱에 대한 GraphQL 요청 모니터링
tags:
  - GraphQL
  - Mobile monitoring
  - Get started
metaDescription: Learn how to add custom names for GraphQL requests and view request data in New Relic.
freshnessValidatedDate: '2023-11-30T00:00:00.000Z'
translationType: machine
---

모바일 앱 개발의 동적 영역에서 GraphQL을 사용하면 개발자는 강력하고 간소화된 데이터 가져오기 도구를 구축할 수 있습니다. 그러나 GraphQL 쿼리가 점점 복잡해지고 모바일 앱 아키텍처가 복잡해지면서 포괄적인 모니터링의 필요성이 더욱 중요해졌습니다. New Relic은 GraphQL 요청을 모니터링하여 다음을 수행하는 데 도움이 됩니다.

* 지연이나 성능 저하를 유발하는 쿼리를 식별하고 최적화합니다.
* 사용자에게 영향을 미치기 전에 오류를 사전에 포착합니다.
* 최종 사용자 요청에 따라 데이터가 빠르고 원활하게 로드되도록 보장합니다.

<img
  title="HTTP requests"
  alt="Screenshot of the HTTP requests UI"
  src="/images/mobile_screenshot-full_mobile-graphql-requests.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > HTTP requests**</DNT>: 함수의 사용자 정의 이름을 기반으로 GraphQL 요청을 봅니다.
</figcaption>

## 시작하다 [#get-started]

New Relic은 기본적으로 모든 GraphQL 요청을 원활하게 모니터링합니다. 그러나 명확성과 분석을 강화하려면 GraphQL 요청 이름을 수동으로 구성하는 것이 좋습니다. 이를 통해 기능에 따라 요청을 분류하고 특정 요청 그룹에 대한 성능 데이터를 볼 수 있습니다.

각 엔드포인트가 서로 다른 용도로 사용되는 REST API와 달리 모든 GraphQL 요청은 단일 `/graphql` 엔드포인트로 전달됩니다. 이로 인해 서로 다른 작업을 수행하는 요청을 구별하기가 어렵습니다. 요청에 사용자 지정 이름을 할당하면 GraphQL API가 어떻게 사용되는지 더 명확하게 이해하고 특정 요청 기능과 관련된 잠재적인 성능 병목 현상을 식별할 수 있습니다.

GraphQL 요청의 이름을 사용자 지정하려면 다음을 수행해야 합니다.

1. 네트워크 요청 URL을 식별합니다. 예를 들어 URL이 `https://www.YOUR_MOBILE_APP.com/checkout` 인 고객 체크아웃 프로세스와 관련된 요청일 수 있습니다.

2. 식별된 요청에 대해 `X-APOLLO-OPERATION-NAME` 헤더를 설정하려면 `addHTTPHeaderTracking method` 를 사용하세요. 예를 들어 고객 체크아웃 프로세스와 관련된 요청의 이름은 `checkout` 일 수 있습니다. 이름은 다음 요구 사항을 충족해야 합니다.

   * 길이: 1-1024자 사이의 문자열이어야 합니다.
   * 문자: [ASCII 문자](https://www.ascii-code.com/characters) 로만 구성됩니다.

아래의 플랫폼별 지침을 따르세요.

<CollapserGroup>
  <Collapser
    id="objc"
    title="목표-c"
  >
    1. 에이전트를 시작할 때 `operationName` 헤더를 추가합니다.

       ```objectivec
       [NewRelic addHTTPHeaderTrackingFor:@[@"operationName"]]; 
       ```

    2. GraphQL HTTP 요청 헤더에 요청 URL과 사용자 정의 이름을 추가합니다.

       ```objectivec
       NSURLRequest *request = [NSURLRequest requestWithURL:[NSURL URLWithString:@"https://www.YOUR_MOBILE_APP.com/checkout"]]; // Add your request URL here.
       NSMutableURLRequest *mutableRequest = [request mutableCopy];
       [mutableRequest addValue:@"YOUR_CUSTOM_NAME" forHTTPHeaderField:@"operationName"]; // Add your custom name here.
       request = [mutableRequest copy];
       [[NSURLSession sharedSession] dataTaskWithRequest:request];
       ```
  </Collapser>

  <Collapser
    id="java"
    title="자바"
  >
    1. 에이전트를 시작할 때 `operationName` 헤더를 추가합니다.

       ```java
       List<String> headers = new ArrayList<>(); 
       headers.add("operationName");
       NewRelic.addHTTPHeaderTrackingFor(headers);
       ```

    2. GraphQL HTTP 요청 헤더에 요청 URL과 사용자 정의 이름을 추가합니다.

       ```java
       Request request = new Request.Builder()
               .url("https://www.YOUR_MOBILE_APP.com/checkout") // Add your request URL here.
               .addHeader("operationName","YOUR_CUSTOM_NAME") // Add your custom name here.
               .build();
       ```
  </Collapser>

  <Collapser
    id="kotlin"
    title="코틀린"
  >
    1. 에이전트를 시작할 때 `operationName` 헤더를 추가합니다.

       ```kotlin
       // Add the operationName header.
               val headers = mutableListOf<String>()
               headers.add("operationName")

               NewRelic.addHTTPHeaderTrackingFor(headers);
       ```

    2. GraphQL HTTP 요청 헤더에 요청 URL과 사용자 정의 이름을 추가합니다.

       ```kotlin
       val request = Request.Builder()
           .url("https://www.YOUR_MOBILE_APP.com/checkout") // Add your request URL here.
           .addHeader("operationName", "YOUR_CUSTOM_NAME") // Add your custom name here.
           .build()
       ```
  </Collapser>

  <Collapser
    id="swift"
    title="빠른"
  >
    1. 에이전트를 시작할 때 `operationName` 헤더를 추가합니다.

       ```swift
       NewRelic.addHTTPHeadersTracking(for:["operationName"])
       ```

    2. GraphQL HTTP 요청 헤더에 요청 URL과 사용자 정의 이름을 추가합니다.

       ```swift
       var request = URLRequest(url: URL(string:"https://www.YOUR_MOBILE_APP.com/checkout")!) // Add your request URL here.
       request.addValue("YOUR_CUSTOM_NAME", forHTTPHeaderField: "operationName") // Add your custom name here.
       URLSession.shared.dataTask(with: request)
       ```
  </Collapser>
</CollapserGroup>

## New Relic에서 데이터 보기 [#view-data]

GraphQL 요청을 보려면:

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile**
   </DNT>

   으)로 이동합니다.

2. 모바일 앱을 선택하세요.

3. 왼쪽 메뉴에서

   <DNT>
     **HTTP requests**
   </DNT>

   클릭합니다.

4. <DNT>
     **Group by**
   </DNT>

   드롭다운 메뉴에서

   <DNT>
     **Operation Name**
   </DNT>

   선택하세요. HTTP 요청 페이지에는 설정한 `operationName` 별로 그룹화된 모든 요청이 표시됩니다.

<img
  title="Filter by operation name"
  alt="Screenshot of filtering requests by the operation name"
  src="/images/mobile_screenshot-crop_group-by-dropdown.webp"
/>

이제 GraphQL 요청만 보고 있으므로 특정 요청을 클릭하여 응답 시간 및 네트워크 오류에 대한 측정항목을 확인하세요.

<img
  title="Request details"
  alt="Screenshot of clicking into a specific request"
  src="/images/mobile_screenshot-crop_request-details.webp"
/>
