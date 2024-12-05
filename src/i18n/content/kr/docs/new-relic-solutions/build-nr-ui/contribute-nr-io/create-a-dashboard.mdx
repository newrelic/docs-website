---
title: 대시보드 만들기
metaDescription: create a dashboard to observe your data in New Relic
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  이 절차는 퀵스타트를 만드는 방법을 가르치는 과정의 일부입니다. 아직 확인하지 않으셨다면 [과정 소개를](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart) 확인해 보세요.

  이 과정의 각 절차는 마지막 절차를 기반으로 하므로 이 과정을 진행하기 전에 [제품에서 트레이스를 보내야](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/send-traces) 합니다.
</Callout>

뉴롤릭 대시보드를 사용하면 멋진 데이터에서 수집한 데이터를 관찰하고 해석할 수 있습니다. 보고 싶은 데이터를 차트로 모아서 보는 방식을 맞춤설정할 수 있습니다.

이 절차에서는 뉴렐릭에서 대시보드를 만듭니다.

## 대시보드 만들기 [#create-dashboard]

<Steps>
  <Step>
    [뉴렐릭](https://one.newrelic.com/) 로 이동하여 계정으로 로그인하세요. 여기에서는 왼쪽 탐색 메뉴에 **Browser**, **Dashboards**, **Alerts** 과 같은 다양한 탭이 표시됩니다.
  </Step>

  <Step>
    **Dashboards** \[대시보드] 로 이동하고 오른쪽 상단에서 **Create a dashboard** \[대시보드 생성을] 클릭한 후 **Create a new dashboard** \[새 대시보드 생성을] 선택합니다.

    <img
      title="Dashboards index"
      alt="Dashboards index"
      src="/images/dashboards_screenshot-full_dashboard-index.webp"
    />
  </Step>

  <Step>
    대시보드 이름을 `FlashDB` 로 지정하고 **Create** \[만들기를] 클릭합니다.
  </Step>
</Steps>

## 대시보드에 차트 추가 [#add-charts]

대시보드가 준비되면 차트 생성을 시작할 수 있습니다. 다음 차트를 추가합니다.

* 데이터베이스 방법
* 평균 응답 시간
* 오류
* 데이터베이스 크기
* 리치히트
* 열쇠

### 데이터베이스 방법 [#database-methods]

대시보드 위에 마우스를 놓고 **Add a new chart** \[새 차트 추가 를] 클릭합니다.

이 화면에서 쿼리 빌더를 사용하여 차트를 추가하거나 Markdown을 사용하여 텍스트, 이미지 또는 링크를 추가하도록 선택할 수 있습니다. **Add a chart** \[차트 추가 를] 클릭합니다.

쿼리 빌더 옵션이 열릴 수 있습니다. NRQL 편집기로 전환하고 다음과 같이 쿼리를 편집합니다.

```sql
SELECT count(*) FROM fdb_method FACET method 
```

위의 결과를 보려면 **Run** \[실행을] 클릭하세요.

여기에서는 메서드별로 그룹화된 각 FlashDB 쿼리의 개수를 볼 수 있습니다. 표, 광고판, 원형 차트 등 다양한 형식으로 결과를 표시하도록 선택할 수 있습니다.

차트 유형을 원형으로 변경하고 차트 이름을 "데이터베이스 방법"으로 지정한 다음 저장을 클릭하세요.

이제 대시보드에 차트가 표시됩니다.

동일한 패턴에 따라 대시보드에 더 많은 차트를 추가할 수 있습니다. 그렇게 하려면 오른쪽 상단에 있는 **+**를 클릭하세요.

그러면 동일한 **Add to your dashboard** \[대시보드에 추가] 페이지로 이동됩니다. 대시보드에 다른 차트를 추가하세요.

### 평균 응답 시간 [#average-response]

FlashDB 쿼리의 평균 응답 시간을 관찰하려면 다음 쿼리를 실행하십시오.

```sql
SELECT average(fdb_create_responses), average(fdb_read_responses), average(fdb_update_responses), average(fdb_delete_responses) FROM Metric TIMESERIES
```

여기서는 다양한 FlashDB 쿼리에 대한 평균 응답 시간을 관찰합니다. 이 차트를 대시보드에 추가하려면 **Save** \[저장을] 클릭하세요. 동일한 절차에 따라 나머지 차트를 추가합니다.

### 오류 [#errors]

오류 차트의 경우 다음 쿼리를 사용합니다.

```sql
SELECT sum(fdb_create_errors), sum(fdb_read_errors), sum(fdb_update_errors), sum(fdb_delete_errors) FROM Metric TIMESERIES
```

### 데이터베이스 크기 [#database-size]

데이터베이스 크기 차트를 얻으려면 다음 쿼리를 사용하십시오.

```sql
SELECT latest(fdb_size) FROM Metric
```

차트에는 데이터베이스 크기가 표시됩니다.

### 리치히트 [#cache-hits]

리치히트 차트의 경우 다음 쿼리를 사용합니다.

```sql
SELECT sum(fdb_cache_hits) FROM Metric TIMESERIES
```

여기에서는 꺾은선형 차트를 사용하여 총 히트 히트 개수를 관찰합니다.

### 열쇠 [#keys]

다음 쿼리를 사용하여 데이터베이스의 키 수를 계산합니다.

```sql
SELECT count(fdb_keys) FROM Metric TIMESERIES
```

여기서는 FlashDB 키 개수를 관찰합니다.

## 요약 [#summary]

이 절차에서는 대시보드를 만들고 여기에 여러 차트를 추가하여 뉴렐릭에서 서비스를 관찰했습니다.

<Callout variant="tip">
  이 절차는 퀵스타트를 만드는 방법을 가르치는 과정의 일부입니다. 다음 절차인 [알림 생성을](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/create-alerts) 계속 진행하세요.
</Callout>
