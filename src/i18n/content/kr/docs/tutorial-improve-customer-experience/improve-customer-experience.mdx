---
title: 고객 경험 개선
metaDescription: 'New Relic observability maturity series: this guide gives you a quality foundation for optimizing your web application''s performance to improve your customer experience.'
freshnessValidatedDate: '2023-08-16T00:00:00.000Z'
translationType: machine
---

[디지털 경험 성능의 현재 상태를 확립한](/docs/tutorial-customer-experience/establish-current-state/) 후에는 수집한 정보를 활용하여 고객 경험 개선을 시작할 차례입니다. 귀하의 요구 사항은 다양할 수 있으므로 개선해야 할 영역이 무엇인지는 귀하만이 알 수 있습니다. 다음 단계는 고객 경험을 개선하기 위해 권장되는 순서이며, 가장 관련성이 높은 항목에 주의를 집중하고 그렇지 않은 항목은 건너뛸 수 있습니다. 이는 지속적인 프로세스이므로 나중에 KPI가 변경될 때 참조할 수 있도록 이 페이지를 북마크에 추가하는 것이 좋습니다.

[현재 상태를 설정한](/docs/tutorial-customer-experience/establish-current-state/) 후에는 시스템 전체에서 사용자 경험이 어떻게 보이는지 알 수 있습니다. 여기에서 다음 영역 중 개선해야 할 영역을 결정해야 합니다.

1. **비즈니스 우선순위부터 시작하세요.** 명확한 비즈니스 지침이 있다면 조직에 가장 중요한 것에 집중해야 합니다. 예를 들어, 귀하의 회사가 최근 사업 부문을 중심으로 새로운 이니셔티브를 시작했지만 UI와 관련된 KPI가 목표보다 낮은 경우 여기에 노력을 집중할 수 있는 좋은 장소입니다.
2. **KPI에 맞춰 데이터 정렬:** 핵심 성과 지표는 고객의 불만 사항으로 작용하는 시스템의 다양한 측면에 대한 통찰력을 제공합니다. 해당 데이터를 KPI와 비교하여 개선이 필요한 부분을 파악하세요.
3. **각 세그먼트 필터링:** 이전 문서에서 생성한 각 세그먼트를 그룹화하여 특정 지역, 장치 또는 기타 유용한 그룹화에 더 집중해야 하는지 확인하세요.

### 목표 KPI 개선 [#improve-kpi]

진행 상황을 추적하려면 새 대시보드를 만들고(또는 기존 대시보드에 새 페이지를 추가) 이름을 `Quality Foundation KPI Improvement` 로 지정하세요. 자세한 내용은 [웹 가동 시간 향상을](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-web-uptime) 참조하세요.

### 페이지 로드 성능 향상 [#improve-performance]

품질 기반 대시보드를 생성한 후에는 목표 KPI 값을 충족하지 않는 특정 페이지로 초점을 좁힐 때입니다.

품질 기반 대시보드에서 불량으로 보고되는 각 페이지 로드 KPI 결과에 대해 `COMPARE WITH` 절을 제거하고 `FACET pageUrl/targetGroupedUrl LIMIT MAX` 추가하여 실적이 저조한 페이지를 찾습니다. 고객 ID가 URL의 일부인 경우와 같이 결과가 많은 경우에는 `targetGroupedUrl` 사용하세요. 그렇지 않으면 `pageUrl` 사용하십시오.

원래 대시보드 쿼리:

```
FROM PageViewTiming SELECT percentile(largestContentfulPaint, 75) WHERE appName ='WebPortal' AND pageUrl LIKE '%phone%' SINCE 1 week AGO COMPARE WITH 1 week AGO 
```

문제 페이지를 식별하는 새로운 쿼리:

```
FROM PageViewTiming SELECT percentile(largestContentfulPaint, 75) WHERE appName ='WebPortal' AND pageUrl LIKE '%phone%' FACET targetGroupedUrl LIMIT MAX
```

개선할 페이지를 식별했으면[페이지 로드 성능 개선](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-page-load) 의 지침을 참조하세요.

### AJAX 응답 시간 개선 [#improve-ajax-response]

부족한 페이지 로드 시간을 찾아서 수정한 후 AJAX 응답 시간은 다음 단계로 넘어가기에 좋은 부분입니다. 느린 AJAX 응답 시간을 찾으려면 다음을 수행하십시오.

1. 대시보드에서 AJAX 기간 위젯으로 이동합니다.
2. **View query** \[쿼리 보기 를] 선택한 다음 쿼리 빌더에서 엽니다.
3. 쿼리 끝에 `facet requestUrl LIMIT MAX` 을 추가합니다.
4. 쿼리를 실행합니다.
5. 결과를 테이블로 보고 KPI 개선 대시보드에 `LOB - AjaxResponseTimes` 으)로 저장합니다.
6. `timeToSettle` > 2.5초로 요청을 개선하는 데 집중하세요.

AJAX 요청 개선에 대한 자세한 내용은 [AJAX 문제 해결 팁을](/docs/browser/browser-monitoring/browser-pro-features/ajax-page-identify-time-consuming-calls/) 확인하세요.

### AJAX 오류율 개선 [#improve-ajax-error]

AJAX 응답 시간을 식별하고 개선한 후에는 이미 AJAX를 다루고 있으므로 오류율도 개선해야 합니다. 실패한 요청을 찾으려면 다음 안내를 따르세요.

1. 이동

   <InlinePopover type="dashboards"/>

   \> Query builder.

2. 다음 쿼리를 입력하고 실행합니다.

   ```
   FROM AjaxRequest 
   SELECT percentage(count(*), WHERE httpResponseCode >= 400) 
   WHERE httpResponseCode >= 200 AND <Ajax Request filter>
   SINCE 1 week AGO facet pageUrl, appName
   ```

3. 결과를 테이블로 보고 KPI 개선 대시보드에 `LOB - Pages with AjaxErrors` 으)로 저장합니다.

4. 가장 문제가 많은 페이지에 대해 쿼리를 다시 실행하여 실패한 요청을 찾습니다.

   ```
   FROM AjaxRequest 
   SELECT percentage(count(*), WHERE httpResponseCode >= 400) 
   WHERE httpResponseCode >= 200 AND pageUrl=PROBLEMATIC_PAGE AND appName = YOUR_APP_NAME <Ajax Request filter> 
   SINCE 1 week AGO facet requestUrl
   ```

   부족한 AJAX 오류율을 성공적으로 식별한 후 응답 시간을 개선할 수 있는 방법에 대한 자세한 내용은 [AJAX 문제 해결 팁을](/docs/browser/browser-monitoring/browser-pro-features/ajax-page-identify-time-consuming-calls) 참조하세요.

### 자바스크립트 오류 개선 [#improve-java]

개선 프로세스를 마무리하려면 과도한 JavaScript 오류를 수정하는 데 집중해야 합니다. 가장 일반적인 오류를 찾으려면 다음을 수행하십시오.

1. 이동

   <InlinePopover type="dashboards"/>

   \> Query builder

2. 다음 쿼리를 입력하고 실행합니다.

   ```
   FROM JavaScriptError 
   SELECT count(errorClass) 
   SINCE 1 week AGO WHERE <PageView filter>  
   FACET transactionName, errorClass, errorMessage, domain
   ```

3. 결과를 테이블로 보고 KPI 개선 대시보드에 `LOB - Javascript Errors` 으)로 저장합니다.

4. 이 정보를 사용하여 해결해야 할 오류를 파악하세요. 자세한 내용은 [JavaScript 오류 페이지: 오류 감지 및 분석](/docs/browser/new-relic-browser/browser-pro-features/javascript-errors-page-detect-analyze-errors/) 문서를 참조하세요.

5. 가치를 더하지 않는 제3자 오류를 제거하세요.

<Callout variant="tip">
  시끄럽지만 예상대로 작동하는 타사 JavaScript를 사용하고 있을 수 있습니다. 다음과 같은 몇 가지 접근 방식을 취할 수 있습니다.

  * JavaScript 오류/페이지뷰 비율 위젯에서 도메인 이름을 제거하고 자체 위젯으로 추가하여 예기치 않은 변경 사항을 볼 수 있도록 합니다. [Anomaly NRQL](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-baseline-alert-conditions/) 경고를 사용하여 이에 대해 경고할 수 있습니다.
  * [드롭 필터](/docs/logs/log-management/ui-data/drop-data-drop-filter-rules) 를 사용하여 JavaScript 오류를 삭제하십시오. 오류 볼륨이 데이터 수집에 상당한 영향을 미치는 경우에만 이 옵션을 사용하십시오. 드롭 필터에서 최대한 구체적으로 작성하십시오.
</Callout>

## 앞으로 나아가 다 [#movingforward]

위의 절차를 따른 후에는 KPI를 정기적으로 재검토하여 고객 경험이 항상 적절한 수준인지 확인하는 것이 좋습니다. 각 조직마다 요구 사항이 다르므로 사용하는 절차는 조직마다 고유합니다. 그러나 다음 제안 사항을 염두에 둘 수 있습니다.

* 각 스프린트가 끝날 때 성능 메트릭을 다시 확인하십시오.
* 개발자 스프린트에 성능 개선 사항을 통합합니다.
* 지원하는 비즈니스 라인 및 기타 내부 이해 관계자와 메트릭을 공개적으로 공유하십시오.
* 고객 경험 SLO를 정의합니다.
* 품질 기반 KPI의 비즈니스에 중요한 하락에 대한 [경고를 생성합니다](/docs/tutorial-create-alerts/create-new-relic-alerts/) .

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-customer-experience/bottom-funnel-analysis/","title":"다음 단계","body":"전환율을 개선하기 위해 고객 경험의 마지막 부분을 분석하는 방법을 알아보세요."}}
  previousStep={{"path":"/docs/tutorial-customer-experience/establish-current-state/","title":"이전 단계","body":"현재 상태를 설정하여 기준선을 만드는 방법을 알아보세요."}}
/>
