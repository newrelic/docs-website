---
title: 'NerdGraph 튜토리얼: 서비스 수준 구성'
tags:
  - Full-Stack Observability
  - Observe everything
  - Service level management
  - SLI/SLO
  - Configure
  - Consume
  - NerdGraph
metaDescription: Our new offer to create and consume SLI/SLOs using the NerdGraph API.
freshnessValidatedDate: never
translationType: machine
---

New Relic을 사용하면 애플리케이션에 대한 [서비스 수준](/docs/service-level-management/create-slm) 을 구현하고, 계획 세션 및 인시던트 대응 중에 UI에서 쉽게 결과를 [사용](/docs/service-level-management/consume-slm) 하고, 원하는 사용자 경험에 맞게 목표를 조정하기 위해 구성을 점진적으로 반복할 수 있습니다.

UI 외에도 [NerdGraph API 탐색기](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/) 를 사용하여 SLI 및 해당 SLO를 만들고 편집할 수도 있습니다. 또는 [Terraform 서비스 수준 리소스](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs/resources/service_level) 를 사용하여 이 구성을 자동화할 수 있습니다.

<Callout variant="important">
  서비스 수준을 생성하려면 사용자에게 [이벤트-메트릭 규칙을 수정하고 삭제할 수 있는 권한이](/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions#insights) 필요합니다.
</Callout>

## SLO로 SLI 생성 [#create-sli-slo]

SLI가 연결된 엔터티 등 SLI 및 SLO 설정의 기본 개념을 알아보려면 [SLI 및 SLO 생성 및 편집을](/docs/service-level-management/create-slm#sli-entity) 참조하세요. 또한 해당 문서를 참조하여 <InlinePopover type="apm" />서비스 및 <InlinePopover type="browser" />애플리케이션에 대한 가장 일반적인 표시기의 예를 찾을 수 있습니다.

다음은 `serviceLevelCreate` 변형 쿼리를 사용하여 SLI를 생성하는 NerdGraph 호출의 예입니다.

```graphql
mutation {
  serviceLevelCreate(
    entityGuid: "entityGuid"
    indicator: {
      name: "Latency below 0.25 seconds"
      description: "The proportion of valid requests that were served faster than 0.25s, which is considered to correspond to a good experience."
      events: {
        validEvents: { 
          from: "Transaction", 
          where: "entityGuid = 'entityGuid'" 
        }
        goodEvents: {
          from: "Transaction"
          where: "entityGuid = 'entityGuid' and duration < 0.25"
        }
        accountId: accountId
      }
      objectives: {
        target: 99.5
        timeWindow: { 
          rolling: { 
            count: 7, 
            unit: DAY 
          } 
        }
      }
    }
  ) {
    id
    description
  }
}
```

여기에는 다음 필드가 포함됩니다.

* <DNT>**`entityGuid`**</DNT>: 이 SLI를 연결하려는 [엔터티](https://docs-preview.newrelic.com/docs/service-level-management/create-slm#sli-entity) (예: <InlinePopover type="apm" />서비스, 브라우저 애플리케이션 등)의 GUID입니다. UI에서는 엔터티 페이지의 <DNT>**See metadata and manage tags**</DNT> 아래에서 이 GUID를 찾을 수 있습니다.

* <DNT>**`description`**</DNT>: 좋은 이벤트를 결정짓는 선택된 노인값, 관련 항목을 포함하여 상세한 설명을 사용합니다.

  * 예를 들어 가용성 SLI의 경우 &quot;오류 없이 제공된 유효한 요청의 비율&quot;과 같은 항목을 포함합니다.
  * 또는 지연 SLI의 경우 &quot;좋은 경험에 해당하는 것으로 간주되는 0.25초보다 빠르게 제공된 유효한 요청의 비율&quot;과 같은 설명을 포함합니다.

* <DNT>**`accountId`**</DNT>: SLI/SLO 계산을 위한 NRDB 데이터가 포함된 <InlinePopover type="apm" />서비스 또는 브라우저 애플리케이션이 속한 계정의 ID입니다.

* <DNT>**`badEvents.from`**</DNT>, <DNT>**`badEvents.where`**</DNT>

  * 잘못된 이벤트 `SELECT count(*) FROM badEvents.from WHERE badEvents.where` 를 정의하는 NRQL 쿼리에는 이러한 `FROM` 및 `WHERE` 절이 필요합니다.
  * 유효한 이벤트와 잘못된 이벤트에서 SLI를 정의한 경우 `goodEvents` 객체를 비워 둡니다.

* <DNT>**`goodEvents.from`**</DNT>, <DNT>**`goodEvents.where`**</DNT>

  * 좋은 이벤트 `SELECT count(*) FROM goodEvents.from WHERE goodEvents.where` 를 정의하는 NRQL 쿼리에는 이러한 `FROM` 및 `WHERE` 절이 필요합니다.
  * 유효하고 양호한 이벤트에서 SLI를 정의한 경우 `badEvents` 객체를 비워 둡니다.

* <DNT>**`validEvents.from`**</DNT>, <DNT>**`validEvents.where`**</DNT>
  * 이는 유효한 이벤트를 정의하는 NRQL 쿼리에 대한 `FROM` 및 `WHERE` 절이며 결과는 `SELECT count(*) FROM validEvents.from WHERE validEvents.where` 입니다.

* <DNT>**`name`**</DNT>: 서비스 수준이 무엇인지 이해하는 데 도움이 되는 SLI의 짧은 카테고리 이름입니다. SLI 정의와 관련된 특정 활동, 필터 및 필터를 포함하는 것이 좋습니다. 예:

  * 유효성
  * 4초 미만의 지연 시간
  * 0.1 미만 데스크톱용 CLS

* <DNT>**`objectives`**</DNT>: SLI에 대한 목표(SLO)의 제외입니다.

  * `target`: SLO의 목표, 최대 100.00. 이 필드는 소수점 이하 5자리까지 지원합니다.
    * 사용자가 현재 환경에 만족하면 현재 기준과 일치하도록 SLO 백분율을 설정합니다. 예를 들어, SLI의 양호한 이벤트를 결정하는 데 사용되는 백분위수입니다.
  * `timeWindow.rolling.count`: SLO를 계산하기 위해 고려한 기간의 길이입니다. 지원되는 값은 `1` , `7` , `14` , `28` 및 `30` 입니다.
  * `timeWindow.rolling.unit`: `DAY` 은 지원되는 값입니다.

### 사용 `SELECT` [#select-functions]

선택적 `SELECT` 속성이 있으며 기본적으로 `count(*)` 로 설정됩니다. 더 복잡한 시나리오가 있는 경우 `select` 사용하여 쿼리하려는 메트릭 또는 이벤트 속성에 대해 명시할 수 있습니다. `SELECT` 의 경우 `SUM` 함수와 와일드카드(`%`)도 지원됩니다. 더 복잡한 `SELECT` 구성의 예를 살펴보겠습니다.

```graphql
mutation {
  serviceLevelCreate(
    entityGuid: "entityGuid"
    indicator: {
      name: "Success request"
      description: "The proportion of success requests count is 99% that the total count"
      events: { 
        validEvents: { 
          select: {
            function: SUM
            attribute: "http.request.status.%.count"
          },
          from: "Metric"
        }
        goodEvents: {
          select: {
            function: SUM
            attribute: "http.request.status.2%.count"
          },
          from: "Metric"
        }
        accountId: accountId
      }
      objectives: {
        target: 99.5
        timeWindow: { 
          rolling: { 
            count: 7, 
            unit: DAY 
          } 
        }
      }
    }
  ) {
    id
    description
  }
}
```

이제 `events` 의 `validEvents` 및 `goodEvents` 속성에 `select`가 포함되어 있습니다. 선택에서 기능을 구성할 수 있습니다.

* `COUNT`: 기본 기능, 결과 수를 계산합니다.
* `SUM`: 선택한 이벤트/지표의 모든 값을 합산합니다.

이 예의 또 다른 중요한 차이점은 와일드카드(`%`)를 사용하여 동일한 형식의 모든 메트릭 값을 쿼리한다는 것입니다. 애플리케이션이 상태(예: `http.request.status.200.count`, `http.request.status.201.count`, `http.request.status.400.count`등)별로 요청 수를 보고한다고 가정하면 쿼리는 와일드카드를 사용하여 일치하는 모든 메트릭 이름을 합산합니다.

## APM 서비스에 대한 SLI 구성 검색 [#retrieve-config]

이 쿼리를 사용하여 `id` 을(를) 포함하여 SLI의 구성을 검색합니다.

```graphql
{
  actor {
    entity(guid: "entityGuid") {
      guid
      name
      serviceLevel {
        indicators {
          createdAt
          createdBy {
            email
          }
          description
          entityGuid
          id
          name
          objectives {
            target
            timeWindow {
              rolling {
                count
                unit
              }
            }
          }
        }
      }
    }
  }
}
```

## SLI의 SLO 업데이트 [#update-slo]

`serviceLevelUpdate` 변형을 사용하여 각 SLI에 대해 하나 이상의 SLO를 정의합니다. SLI의 `id` 을 얻으려면 위의 쿼리를 사용하십시오.

```graphql
mutation {
  serviceLevelUpdate(
    id: "indicators.id"
    indicator: {
      objectives: {
        target: 99.00
        timeWindow: { 
          rolling: { 
            count: 7, 
            unit: DAY 
          }
        }
      }
    }
  ) {
    id
  }
}
```