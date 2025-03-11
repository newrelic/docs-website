---
title: AjaxRequests에서 GraphQL 메타데이터를 찾을 수 없습니다.
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: Troubleshooting for not seeing GraphQL metadata on AjaxRequest events for your browser app.
freshnessValidatedDate: '2023-10-19T00:00:00.000Z'
translationType: machine
---

## 문제

AjaxRequest 이벤트가 표시되지만 브라우저 앱에 대한 다음 GraphQL 메타데이터 속성이 포함되어 있지 않습니다.

* [운영 프레임워크](/attribute-dictionary/?event=AjaxRequest&attribute=operationFramework)
* [작업 이름](/attribute-dictionary/?event=AjaxRequest&attribute=operationName)
* [작업 유형](/attribute-dictionary/?event=AjaxRequest&attribute=operationType)

## 원인

브라우저 에이전트는 각 AJAX 요청 본문과 쿼리를 분석하고 일반적인 GraphQL 패턴을 식별하려고 시도합니다. 이러한 패턴을 감지하면 수집되는 나가는 AjaxRequest 이벤트에 추가 메타데이터 속성을 추가합니다. 에이전트가 이러한 패턴을 감지하지 못하면 추가 이벤트 속성을 추가하지 않습니다.

## 해결책

애플리케이션 [에 최신 버전의 브라우저 모니터링이 설치되어](/docs/browser/new-relic-browser/installation-configuration/troubleshooting-browser-monitoring-installation) 있고 모든 [Pro 기능](/docs/browser/new-relic-browser/browser-pro-features) 에 대한 데이터를 수집하는 경우 AJAX 요청이 표준 GraphQL 형식을 사용하여 전송되고 있는지 확인하세요.

AJAX 요청 형식을 확인하려면 브라우저의 개발자 콘솔을 사용하여 요청을 보고 아래 구문과 비교하세요.

<CollapserGroup>
  <Collapser
    id="post"
    title="GraphQL POST 요청"
  >
    POST GraphQL 쿼리, 변형 및 구독의 경우 브라우저 에이전트는 다음과 같은 형식의 데이터에 대한 요청 본문을 구문 분석합니다.

    ```js
    {
        "query": ...,
        "operationName": ...,
        "variables": ... 
      }
    ```
  </Collapser>

  <Collapser
    id="get"
    title="GraphQL GET 요청"
  >
    GET GraphQL 쿼리의 경우 브라우저 에이전트는 다음과 같은 형식의 데이터에 대한 요청 쿼리 매개 변수를 구문 분석합니다.

    ```js
    ?query=...&operationName=...&variables=...
    ```
  </Collapser>

  <Collapser
    id="batch"
    title="GraphQL 일괄 POST 요청"
  >
    일괄 GraphQL 작업의 경우 브라우저 에이전트는 다음과 같은 형식의 데이터에 대한 요청 본문을 구문 분석합니다.

    ```js
    [
        {
          "query": ...,
          "operationName": ...,
          "variables": ... 
        },
        {
          "query": ...,
          "operationName": ...,
          "variables": ... 
        },
        ...etc
      ]
    ```
  </Collapser>
</CollapserGroup>

이러한 표준에 대한 자세한 설명은 [GraphQL 문서를](https://graphql.org/learn/serving-over-http/#post-request) 참조하세요.

에이전트는 이 페이로드의 콘텐츠를 사용하여 GraphQL 패턴을 감지하고 메타데이터 속성을 구축합니다. `query` 섹션이 누락된 요청 본문이나 쿼리는 전혀 GraphQL 데이터로 처리되지 않습니다.

GraphQL 페이로드가 이 패턴을 따르지 않는 경우 에이전트는 GraphQL 메타데이터를 안정적으로 감지할 수 없습니다.

이러한 문제 해결 단계 중 하나라도 실패하거나 AJAX 데이터 속성 누락 문제가 계속 발생하는 경우 [support.newrelic.com](https://support.newrelic.com) 에서 지원을 받으세요.
