---
title: Meraki 컨트롤러 엔터티에 메트릭이 누락되었습니다.
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'Meraki API polling is working, but expected metrics are missing.'
freshnessValidatedDate: never
translationType: machine
---

## 문제 [#problem]

Meraki API 모니터링 중에는 분기에 대해 예상되는 지표가 모두 표시되지 않습니다.

## 해결책 [#solution]

다음 NRQL 쿼리를 실행하여 New Relic에 어떤 메트릭이 있는지 식별합니다.

```sql
FROM Metric, KExtEvent SELECT
  count(*)
FACET
  metricName OR eventType(),
  instrumentation.name
WHERE instrumentation.name LIKE 'meraki%'
OR eventType() = 'KExtEvent'
SINCE 1 HOUR AGO
LIMIT MAX
```

이 쿼리는 지난 한 시간 동안 Meraki 컨트롤러에서 수집된 모든 차원 지표 및 구성 변경 이벤트 목록을 제공합니다. [Meraki API 통합에 대한 구성 문서에서는](/docs/network-performance-monitoring/advanced/advanced-config/#meraki) 설정의 다양한 옵션에 따라 사용 가능한 측정항목과 속성을 설명합니다.
