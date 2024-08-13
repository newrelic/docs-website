---
title: 메트릭 API 소개
tags:
  - Ingest and manage data
  - Ingest APIs
metaDescription: Learn how to report metrics to New Relic from any source with the Metric API.
freshnessValidatedDate: never
translationType: machine
---

New Relic의 Metric API는 다양한 소스에서 New Relic으로 [메트릭 데이터](/docs/using-new-relic/data/understand-data/new-relic-data-types#dimensional-metrics) 를 보내는 데 사용할 수 있습니다. 이 API는 일부 통합 및 내보내기의 메트릭이 New Relic에 들어가는 방법입니다.

Metric API를 사용해 보고 싶으십니까? 무료 [로 New Relic 계정을 만드](https://newrelic.com/signup) 십시오! 신용 카드가 필요하지 않습니다.

## 메트릭 API란 무엇입니까? [#why-use]

Metric API는 메트릭 데이터를 New Relic으로 가져오는 방법입니다. API는 메트릭 데이터가 포함된 JSON 페이로드와 함께 HTTP 엔드포인트에 POST 요청을 전송하여 작동합니다.

Metric API는 당사의 [오픈 소스 내보내기](/docs/data-ingest-apis/get-data-new-relic/new-relic-sdks/telemetry-sdks-send-custom-telemetry-data-new-relic#external-data) (DropWizard 및 Prometheus와 같은)를 포함하여 일부 [통합](https://newrelic.com/instant-observability/) 에서 메트릭을 수집하는 방법입니다. Metric API는 데이터 수집 API를 더 쉽게 사용할 수 있게 해주는 언어별 도구인 [Telemetry SDK](/docs/data-ingest-apis/get-data-new-relic/new-relic-sdks/telemetry-sdks-send-custom-telemetry-data-new-relic) 에서도 사용됩니다.

Metric API를 사용하여 다음을 수행할 수 있습니다.

* New Relic 에이전트 없이 New Relic에 메트릭 데이터를 보고합니다.
* 오픈 소스 또는 사내 개발 도구, 라이브러리 또는 프레임워크의 메트릭 데이터를 통합합니다.
* 해상도 및 관련 치수를 포함하여 전송하는 측정항목 데이터를 완전히 제어합니다.
* [메트릭 데이터](/docs/using-new-relic/data/understand-data/new-relic-data-types#metrics) 를 쿼리하기 위해 New Relic의 쿼리 언어인 [NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql) 의 기능을 활용하십시오.
* [측정항목 데이터에 대한 알림을](#create-alerts) 설정합니다.

## 요구 사항

[지역](/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers) 과 일치하는 [CIDR 범위](/docs/using-new-relic/cross-product-functions/install-configure/networks/#infrastructure) 에 대해 TCP 포트 443의 아웃바운드 연결이 허용되는지 확인합니다. 기본 구성 방법은 DNS 이름 `metric-api.newrelic.com` 또는 `metric-api.eu.newrelic.com` 을 사용하는 것입니다.

데이터를 보내려는 뉴렐릭 계정에 대한 뉴렐릭 <InlinePopover type="licenseKey"/>이 필요합니다. 제한 및 제한된 속성에 대한 자세한 내용은 [지표 API 요구 사항 및 제한을](/docs/metric-api-general-requirements-limits) 참조하세요.

## 시작하다

메트릭 보고 요구 사항을 충족하는 기존 [통합 또는 빠른 시작](https://newrelic.com/instant-observability/) 이 없는 경우 두 가지 옵션이 있습니다.

* 측정항목 및 기타 데이터를 전송하는 데 도움이 되는 언어별 도구인 [Telemetry SDK를 사용하세요](/docs/data-ingest-apis/get-data-new-relic/new-relic-sdks/telemetry-sdks-send-custom-telemetry-data-new-relic) .
* [Metric API를 직접 사용하십시오](/docs/report-metrics-metric-api) .

## 데이터 찾기 및 사용 [#find-data]

다음 위치에서 Metric API(이 API를 사용하는 통합 포함)를 통해 전송된 데이터를 찾을 수 있습니다.

* <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities)**</DNT> 에서 <DNT>**Explorer**</DNT> 선택하고 서비스를 찾으세요.

* `Metric` 데이터 유형을 쿼리합니다. 예를 들어 [NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql) 을 사용하여 다음을 실행할 수 있습니다.

  ```sql
  SELECT * FROM Metric
  ```

  쿼리에 대한 자세한 내용은 [메트릭 쿼리 예](/docs/data-ingest-apis/get-data-new-relic/metric-api/view-query-you-metric-data) 를 참조하세요. 일반적인 쿼리에 대한 정보는 [쿼리 데이터](/docs/using-new-relic/data/understand-data/query-new-relic-data) 를 참조하십시오.

## 측정항목 데이터에 대한 경고 [#create-alerts]

지표 API 로 생성된 지표에 대한 공지를 사용하려면 [NRQL 공지 조건을](/docs/alerts/new-relic-alerts/defining-conditions/create-alert-conditions-nrql-queries) 사용하십시오. 조건을 정의할 때 NRQL 범주를 선택한 다음 `FROM Metric ...` NRQL 쿼리 구문을 사용하여 표현합니다. 이러한 공지 조건을 생성하면 <InlinePopover type="alerts"/>(는) 사용 가능한 가장 세밀한 데이터(원시 지표 데이터 포인트)를 자동으로 사용하여 알림을 평가합니다.

## 데이터 보존 [#retention]

모든 원시 메트릭 데이터 포인트는 30일 동안 유지됩니다. 원시 메트릭 데이터 포인트에서 파생된 모든 추가 집계 데이터(예: 1분 롤업)는 13개월 동안 유지됩니다. 이러한 기간을 초과하여 보존 기간을 변경하면 귀하에게 요금이 부과될 수 있습니다.

## 문제점 해결

[`NrIntegrationError` 이벤트 문제 해결을](/docs/troubleshoot-nrintegrationerror-event) 참조하세요.
