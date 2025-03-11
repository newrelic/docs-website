---
title: 경고 조건에서 엔터티 관리
tags:
  - Alerts
  - REST API alerts
metaDescription: Read about how to use the REST API (v2) to add or remove apps and other entities from an alerts policy condition.
freshnessValidatedDate: never
translationType: machine
---

<InlinePopover type="alerts" />에서 <DNT>**entity**</DNT> 은 디자인, 브라우저, 호스트 등 모델링을 위한 목표로 정의됩니다. [알림 UI에는](http://one.newrelic.com/alerts/) 선택 가능한 엔터티가 표시됩니다. REST API와 API Explorer를 사용하여 조건에 맞는 엔터티를 [추가](https://api.newrelic.com/docs/#/Alerts%20Entity%20Conditions/put_alerts_entity_conditions__entity_id__json) 하거나 [제거할](https://api.newrelic.com/docs/#/Alerts%20Entity%20Conditions/delete_alerts_entity_conditions__entity_id__json) 수도 있습니다.

## REST API를 사용하기 전에 [#before-start]

REST API는 더 이상 알림을 프로그래밍 방식으로 관리하는 데 선호되는 방법이 아닙니다. 더 자세한 내용을 알아보려면 [알림 API 소개를](/docs/alerts/scale-automate/nerdgraph/nerdgraph-api-examples/) 읽어보세요.

## 요구 사항

조건의 엔터티 목록을 수정하려면 다음 사항을 알아야 합니다.

* [API 키](/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key)
* 모니터링하려는 엔터티의 [\{&apos;\{entity\_ID}&apos;}](/docs/new-relic-solutions/get-started/glossary/#entity)
* 수정하려는 조건의 [\{&apos;\{condition\_ID}&apos;}](/docs/new-relic-solutions/get-started/glossary/#alert-condition)

## 일반 절차 [#basic\_process][#basic_process]

조건에 대한 항목 목록을 업데이트하려면 다음 안내를 따르세요.

1. 해당 엔터티 ID를 찾습니다(예: [애플리케이션 ID](/docs/apis/rest-api-v2/requirements/listing-host-instance-application-server-ids) , [브라우저 ID)](/docs/apis/rest-api-v2/browser-examples-v2/add-or-list-browser-apps-api-v2/).

2. [이름이나 유형으로 정책 ID를 식별합니다](/docs/alerts/scale-automate/rest-api/rest-api-calls-alerts/#alert-policies).

3. 정책과 연결된 조건 목록을 가져오고 적절한 범주에 대해 수정할 조건을 선택합니다.

   * [APM, 브라우저 모니터링, 모바일 모니터링](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#conditions)
   * [외부 서비스](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#ext-services-conditions)
   * [합성 모니터링](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#synthetics-conditions)

4. [API 요청](/docs/alerts/scale-automate/rest-api/rest-api-calls-alerts/#alert-entity-conditions) 추가 또는 제거를 사용하여 조건을 수정합니다.

<Callout variant="important">
  조건에 추가할 수 있는 [최소 및 최대 엔터티 수에](/docs/alerts/new-relic-alerts/configuring-alert-policies/minimum-maximum-values) 대한 요구 사항을 따르십시오.
</Callout>

## 예: 엔터티 추가 또는 제거 [#example]

다음 예에서는 조건에 `TimberTime` 이라는 Ruby 애플리케이션을 추가하는 방법과 동일한 조건에서 항목을 제거하는 방법을 보여줍니다.

이 예제의 첫 번째 단계만 Ruby 앱을 엔터티로 선택하는 데 고유합니다. 나머지 단계는 선택한 엔터티에 대해 동일합니다.

1. `entity_id` 가져오기 ; 예: `application_id` :

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/applications.json' \
        -H $API_KEY -i
   ```

   또는

   애플리케이션 이름을 알고 있는 경우 이 명령을 사용하고 `app_name` 을 지정합니다.

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/applications.json' \
        -H $API_KEY -i \
        -d 'filter[name]=TimberTime'
   ```

2. 출력을 검토하여 `application_id` 을 찾고 이를 `entity_id` 로 사용합니다.

   ```json
   {
     "applications": [
       {
         "id": 12345,         // application_id == entity_id
         "name": "TimberTime",
         "language": "ruby",
         "health_status": "gray",
         ...
       },
   ```

3. 업데이트하려는 `policy_id` 을(를) 가져옵니다. 예를 들어 `TimberTime` 앱의 `Logjam Alert` 정책입니다. `policy_id` 을 얻으려면 다음 명령을 사용하십시오.

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/alerts_policies.json' \
        -H $API_KEY -i \
        -G -d 'filter[name]= Logjam Alert'   # policy_name
   ```

4. 정책 결과를 검토합니다. 예를 들어:

   ```json
   {
     "policies": [
       {
         "id": 85,      // policy_id
         "incident_preference": "PER_POLICY",
         "name": "Logjam Alert",
         "created_at": 1461176510393,
         "updated_at": 1461176510393
       },
   ```

5. 이 정책의 모든 조건을 나열하고 `condition_id` 를 찾습니다.

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/alerts_conditions.json' \
        -H $API_KEY -i \
        -G -d 'policy_id=85'
   ```

   정책 조건을 검토합니다. 예를 들어:

   ```json
   {
     "conditions": [
       {
         "id": 234567,               // condition_id
         "type": "apm_app_metric",
         "name": "Throughput (web) (High)",
         "enabled": true,
         "entities": [
           "8288171"                 // Entity currently included in the policy
         ],
         "metric": "response_time_web",
         "terms": [
           {
             "duration": "5",
             "operator": "above",
             "priority": "critical",
             "threshold": "500",
             "time_function": "all"
           }
         ]
       }
     ]
   }
   ```

6. API 요청을 사용하여 정책 조건에서 엔터티를 추가하거나 제거합니다.

   `entity_id` 12345를 `condition_id` 234567에 추가하려면 `entity_type` 를 `Application` 으로 설정합니다.

   ```shell

   curl -X PUT 'https://api.newrelic.com/v2/alerts_entity_conditions/12345.json' \
        -H $API_KEY -i \
        -H 'Content-Type: application/json' \
        -G -d 'entity_type=Application&condition_id=234567'
   ```

   `condition_id` } 234567에서 `entity_id` 8288171을 제거하려면 `entity_type` 를 `Application` 으로 설정합니다.

   ```shell

   curl -X DELETE 'https://api.newrelic.com/v2/alerts_entity_conditions/8288171.json' \
        -H $API_KEY -i \
        -G -d 'entity_type=Application&condition_id=234567'
   ```