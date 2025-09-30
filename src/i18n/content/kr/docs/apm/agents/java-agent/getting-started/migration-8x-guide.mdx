---
title: Java 에이전트 7.x에서 8.x로 마이그레이션 가이드
tags:
  - Agents
  - Java agent
  - Getting started
freshnessValidatedDate: never
translationType: machine
---

이 가이드에서는 Java 에이전트 7.x와 8.x 시리즈 간의 주요 변경 사항을 다룹니다. 업그레이드하는 동안 발생할 수 있는 문제와 버전 8.x로 성공적으로 마이그레이션하는 방법을 다룹니다. 주요 변경 사항은 다음과 같습니다.

* [트랜잭션 및 범위 속성 변경 및 제거](#changed_and_removed_attributes)
* [계측이 제거됨](#removed_instrumentation)

<Callout variant="important">
  버전 8.0-8.7에서 제거된 속성이 8.8.0에 다시 도입되었습니다. 이는 <InlinePopover type="alerts"/>또는 대시보드에 해당 속성을 계속 사용하는 고객에게 이전 버전과의 호환성을 제공합니다.
</Callout>

## 트랜잭션 및 범위 속성 변경 및 제거 [#changed_and_removed_attributes]

APM 에이전트 전반에 걸쳐 일관성을 제공하고 업계 표준에 더 잘 부합하기 위해 우리는 저항 에이전트의 프로세서 및 범위 속성을 변경했습니다. 배터리 에이전트 버전 7.6.0부터, 새로운 표준 속성 <DNT>**http.statusCode**</DNT> 및 <DNT>**http.statusText**</DNT> 도입하고 <DNT>**httpResponseCode**</DNT>, <DNT>**response.status**</DNT> 및 <DNT>**response.statusMessage**</DNT> 를 더 이상 사용되지 않는 것으로 표시했습니다.

| 더 이상 사용되지 않는 속성                       | 새로운 속성                         | 데이터 유형 변경                    |
| ------------------------------------- | ------------------------------ | ---------------------------- |
| <DNT>**httpResponseCode**</DNT>       | <DNT>**http.statusCode**</DNT> | <DNT>**String to INT**</DNT> |
| <DNT>**response.status**</DNT>        | <DNT>**http.statusCode**</DNT> | <DNT>**String to INT**</DNT> |
| <DNT>**response.statusMessage**</DNT> | <DNT>**http.statusText**</DNT> | <DNT>**N/A**</DNT>           |

## 권장 조치

* 더 이상 사용되지 않는 속성을 사용하는 경고 또는 대시보드가 있고 에이전트 버전 8.0 - 8.7을 사용하는 경우 에이전트를 8.8로 업데이트하거나 제거된 속성에 대한 참조를 업데이트해야 합니다. 모든 경고 또는 대시보드를 새 표준 속성으로 업데이트한 경우 호환성 플래그를 비활성화하여 새 표준 속성만 사용할 수 있습니다. 호환성 플래그 설정에 대해 알아보려면 `http_attribute_mode` 구성을 참조하세요.
* 더 이상 사용되지 않는 속성을 사용하는 경고 및 대시보드를 업데이트합니다.

### 영향을 받은 경고 쿼리 찾기

영향을 받은 알림을 찾아 수정하려면 다음 안내를 따르세요.

1. [NerdGraph Explorer를](https://one.newrelic.com/nerdgraph-graphiql) 사용하고 찾고 있는 각 속성에 대해 `queryLike` 연산자를 사용하여 경고를 검색하세요. 예를 들어:

   ```
   {
     actor {
       user {
         name
       }
       account(id: <ACCOUNTID>) {
         alerts {
           nrqlConditionsSearch(searchCriteria: {queryLike: "httpResponseCode"}) {
             nrqlConditions {
               nrql {
                 query
               }
               id
               name
               policyId
             }
           }
         }
       }
     }
   }  
   ```

2. 반환된 각 공지에 대해 <DNT>**Alerts> [Alerts Conditions](https://one.newrelic.com/alerts-ai/condition-builder/condition-list)**</DNT> UI 의 ID나 이름을 사용하여 공지를 찾을 수 있습니다.

3. 경고 조건과 신호 적용 범위를 검토하여 경고에 미치는 영향을 확인하세요.

4. NRQL 문을 업데이트하려면 [영향을 받은 경고 및 대시보드 NRQL 문 수정](#fixing_nrql) 의 지침을 사용하세요.

### 영향을 받은 대시보드 쿼리 찾기

대시보드에 대해 영향을 받는 쿼리를 찾으려면 다음을 수행합니다.

1. NerdGraph Explorer와 대시보드의 메타데이터에 있는 엔터티 GUID를 사용하면 대시보드에 대한 모든 NRQL 쿼리를 얻을 수 있습니다.

   ```
    {
     actor {
       entity(guid: "[ENTITY GUID]") {
         ... on DashboardEntity {
           guid
           name
           pages {
             widgets {
               rawConfiguration
             }
           }
         }
       }
     }
   }
   ```

2. NRQL 쿼리는 `rawConfiguration` 항목으로 반환됩니다. 텍스트 검색을 사용하여 제거된 속성을 찾을 수 있습니다.

3. NRQL 문을 업데이트하려면 [영향을 받은 경고 및 대시보드 NRQL 문 수정](#fixing_nrql) 의 지침을 사용하세요.

다음 쿼리를 사용하여 모든 대시보드에 대한 엔터티 GUID 목록을 가져올 수도 있습니다.

```
 {
  actor {
    entitySearch(query: "domain IN ('VIZ')") {
      results {
        entities {
          guid
          accountId
        }
      }
    }
  }
}
```

### 영향을 받은 경고 및 대시보드 NRQL 문 수정 [#fixing_nrql]

<DNT>**http.statusCode**</DNT> 데이터 유형도 다른 <DNT>**httpResponseCode**</DNT> 또는 <DNT>**response.status**</DNT> 에 대한 참조를 대체합니다. 이전에는 다음과 같은 참조를 사용했습니다.

`[...] WHERE (Numeric(response.status)\>399 [...]`

문자열 데이터 유형을 숫자로 변환합니다. 더 이상 이 작업을 수행할 필요가 없으며 대신 다음과 같은 간단한 숫자 연산을 사용할 수 있습니다.

`[...] WHERE (http.statusCode \>399) [...]`

<DNT>**http.statusText**</DNT> <DNT>**response.statusMessage**</DNT> 에 대한 참조를 대체합니다. 이 속성의 데이터 유형은 변경되지 않았습니다.

## 계측이 제거됨 [#removed_instrumentation]

해당 유지 관리 담당자가 더 이상 지원하지 않는 라이브러리 버전에 대해 다음 계측 모델을 제거했습니다.

* 카산드라-datastax-2.1.2
* http클라이언트-3.0
* jdbc-임베디드-더비-10.2.1.6
* jdbc-임베디드-더비-10.10.1.1
* 부두-7
* 부두-7.6
* 부두-9
* 부두-9.0.4
* 부두-9.1
* 몽고디비-2.12
* 몽고디비-2.14
* 몽고디비-3.0
* khttp-3.0.0
* khttp-3.4.0
* khttp-3.5.0

애플리케이션이 라이브러리 중 하나를 사용하는 경우 Java 에이전트 버전 v8.x로 업데이트할 때 해당 라이브러리에 대한 계측에서 생성된 메트릭과 트랜잭션을 더 이상 수신하지 않습니다.

## 권장 조치

가능하다면 영향을 받는 라이브러리를 관리자와 New Relic이 지원하는 버전으로 업데이트하고 에이전트를 업데이트하세요. EOL된 라이브러리를 업데이트할 수 없는 경우에도 에이전트를 업데이트할 수 있지만 제거된 데이터로 인해 중요한 영역에 공백이 발생하는지 확인하기 위해 에이전트를 테스트하고 검토하는 것이 좋습니다.
