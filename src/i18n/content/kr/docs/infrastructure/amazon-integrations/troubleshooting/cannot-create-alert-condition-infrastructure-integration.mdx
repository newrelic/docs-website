---
title: 인프라 통합에 대한 경고 조건을 생성할 수 없습니다.
type: troubleshooting
tags:
  - Integrations
  - Amazon integrations
  - Troubleshooting
metaDescription: Troubleshooting suggestions if you cannot create an alert condition for your New Relic infrastructure integration.
freshnessValidatedDate: never
translationType: machine
---

## 문제

공지하려는 지표가 국방부 알림 페이지의 섹션에 표시되지 않기 때문에 [국방부 공지 조건을 생성할 수](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/infrastructure-alerts-add-edit-or-view-host-alert-information) 없습니다.<DNT>**Define thresholds**</DNT> UI

## 해결책

New Relic의 인프라 UI를 사용하는 대신 [인프라 REST API 호출](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/rest-api-calls-new-relic-infrastructure-alerts) 을 사용하여 경보 조건을 생성하십시오.

1. [쿼리 구문을 검토하여 인프라 조건을 생성(POST)합니다](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/rest-api-calls-new-relic-infrastructure-alerts#post-conditions) .

2. [측정항목 조건에 대한 API 요구사항을](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/rest-api-calls-new-relic-infrastructure-alerts#metric-api) 검토하십시오.

3. 조건을 생성할 때: `select_value` 필드에 대해 다음 구문을 사용하여 측정항목 이름을 빌드합니다. 여기서 `provider` 은 표준 접두사 문자열입니다.

   ```
   provider.metric.aggregation_type
   ```

   * `metric`: 통합을 위한 New Relic 문서에 설명된 대로 메트릭 이름을 사용하십시오.
   * `aggregation_type` `Sum` , `Average` , `Minimum` 또는 `Maximum` 을(를) 사용합니다. 각 메트릭에 사용할 수 있는 통계 집계를 확인하려면 통합 클라우드 공급자의 원본 문서를 참조하십시오.

4. `policy_id` 필드의 경우 조건과 연결된 알림 정책의 고유 ID를 사용합니다. 정책 URL에서 정책 ID를 찾습니다.

   ```
   https://alerts.newrelic.com/accounts/ACCOUNT_ID/policies/ALERT_POLICY_ID
   ```

## 원인

이는 뷰 UI 의 <DNT>**Define thresholds**</DNT> 드롭다운 메뉴 목록에 뉴렐릭이 지난 1시간 동안 수집할 수 있었던 지표만 표시되기 때문에 발생합니다.
