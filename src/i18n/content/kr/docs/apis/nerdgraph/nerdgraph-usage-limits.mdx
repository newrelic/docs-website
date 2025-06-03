---
title: NerdGraph 사용 제한
tags:
  - APIs
  - GraphQL API
  - NerdGraph
  - Rate Limit
  - Concurrency Limit
metaDescription: New Relic NerdGraph limits the number of concurrent connections users make.
freshnessValidatedDate: '2023-08-08T00:00:00.000Z'
translationType: machine
---

NerdGraph API는 사용자당 동시 요청에 제한을 적용합니다.

## 한도 세부정보 [#limit-enforcement]

NerdGraph는 <DNT>**25 concurrent requests per user**</DNT> 제한을 적용합니다.

요청 속도는 제한되지 않으며 요청 수는 <DNT>**concurrent**</DNT> 개뿐입니다.

동시성은 사용자 키가 **아닌** 사용자별로 추적 및 적용됩니다. 여러 사용자 키를 사용하여 동일한 사용자가 만든 요청은 모두 해당 사용자의 총 동시 요청에 기여합니다.

시스템 상태에 따라 사용자당 25개 이상의 동시 요청을 허용할 수 있지만, <DNT>**only 25 concurrent requests are guaranteed.**</DNT>

요청이 제한된 경우 HTTP 상태 코드 `429` 와 함께 거부됩니다. 진행 중인 요청이 완료되고 총 동시성이 떨어지면 새 요청이 자동으로 다시 성공하기 시작합니다.

## 한도에 도달하지 않도록 [#avoid-limit]

코드에서 NerdGraph에 대한 동시 요청을 만드는 경우 클라이언트 측 총 동시성을 제한하는 것이 중요합니다. 예를 들어 100개의 요청을 해야 하는 경우 다음과 같이 할 수 있습니다.

* 동시 연결이 사용 가능한 것으로 감지된 경우에만 요청이 이루어지도록 풀링 솔루션을 구현합니다.
* 25개의 동시 호출 배치로 요청을 보냅니다.
* 동시성 코드를 순차 코드로 교체하고 이전 요청이 완료된 후에만 요청하십시오.

이러한 권장 사항 중 일부 구현과 관련된 코드 예제는 [NerdGraph 동시성 튜토리얼을](/docs/apis/nerdgraph/examples/nerdgraph-concurrency-tutorial)참조하세요.

한 번에 여러 위치에서 실행되는 코드를 염두에 두십시오. 비동시 코드라도 여러 위치에서 실행되는 경우 동시성을 생성합니다.
