---
title: Node.js 커스텀 메트릭
tags:
  - Agents
  - Nodejs agent
  - Extend your instrumentation
metaDescription: An overview of custom metrics for New Relic's Node.js agent and how to implement them for your application.
freshnessValidatedDate: never
translationType: machine
---

타이밍 또는 컴퓨터 리소스 데이터와 같은 API 호출을 통해 임의의 성능 데이터를 기록합니다. [메트릭 및 이벤트](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer) 를 사용하여 사용자 정의 메트릭을 검색하고, 사용자 정의 가능한 차트를 생성하고, 해당 차트를 New Relic 대시보드에 추가하십시오. 사용자 지정 메트릭을 사용하면 New Relic 내에서 모니터링을 통합할 수 있습니다.

<Callout variant="caution">
  너무 많은 메트릭을 수집하면 애플리케이션과 New Relic 에이전트의 성능에 영향을 줄 수 있습니다. 데이터 문제를 방지하려면 고유한 사용자 정의 측정항목의 총 수를 2000개 미만으로 유지하십시오.
</Callout>

## 측정항목 이름 지정 [#metric\_names][#metric_names]

측정항목 이름은 `/` 문자로 구분된 경로입니다. 맞춤 측정항목의 경우 다음 패턴을 사용하세요.

```
<category>/<class>/<method>
```

맞춤 측정항목 이름의 경우 `<class>/<method>` 또는 `<category>/<name>` 을 사용합니다. 예를 들어, `MyCategory/My_method` 사용).

<Callout variant="important">
  Node.js 에이전트 v5 이전 버전의 경우 측정항목 앞에 `Custom/` 을 추가해야 합니다. 에이전트는 내부 메트릭과의 충돌을 방지하기 위해 사용자 지정 메트릭을 자동으로 추가하지 않습니다.
</Callout>

## 맞춤 측정항목 기록 [#recording-custom-metrics]

측정항목 데이터 기록을 위한 공개 API는 `newrelic` 의 두 가지 메서드로 구성됩니다.

* [`recordMetric`](https://newrelic.github.io/node-newrelic/API.html#recordMetric): 새로운 맞춤 지표를 만드는 데 사용됩니다.
* [`incrementMetric`](https://newrelic.github.io/node-newrelic/API.html#incrementMetric): 맞춤 지표 값을 업데이트하는 데 사용됩니다.

자세한 내용은 GitHub의 [예제 애플리케이션을](https://github.com/newrelic/newrelic-node-examples/tree/69d500e02077d2565c4762c21bf779e3e39845bf/custom-instrumentation/attributes-events-metrics) 참조하세요.