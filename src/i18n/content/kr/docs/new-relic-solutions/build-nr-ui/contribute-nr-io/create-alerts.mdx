---
title: 알림 생성
metaDescription: create alerts in New Relic
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  이 절차는 퀵스타트를 만드는 방법을 가르치는 과정의 일부입니다. 아직 확인하지 않으셨다면 [과정 소개를](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart) 확인해 보세요.

  이 과정의 각 절차는 마지막 절차를 기반으로 작성되므로 이 과정을 진행하기 전에 [대시보드를 생성해야](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/create-a-dashboard) 합니다.
</Callout>

뉴렐릭 알림을 사용하면 서비스를 모니터링하고 관심 있는 문제에 대한 공지를 받을 수 있으므로 문제 해결에 빠르게 대응할 수 있습니다. 뉴렐릭에는 두 가지 유형의 알림이 있습니다.

* 공전
* 기준선

이 절차에서는 이러한 알림을 생성하는 방법을 알아봅니다.

<Callout variant="tip">
  알림 기본 사항에 대해 이미 잘 알고 있다고 가정합니다. 이제 막 시작했다면 계속 진행하기 전에 [공지 문서를](/docs/alerts-applied-intelligence/overview) 방문하여 기본 사항을 숙지하세요.
</Callout>

## 경고 정책 만들기 [#create-alert-policy]

공지 조건을 설정하기 전에 정책을 생성해야 합니다.

왼쪽 탐색 메뉴의 **알림** 에서 **공지 조건** 섹션으로 이동하세요. 그런 다음 **새 공지 를** 클릭하세요.

정책 이름을 `FlashDB alert policy` 으로 지정합니다.

나머지 필드에는 기본값을 사용하고 페이지를 아래로 스크롤한 후 **공지 없이 정책 만들기를** 클릭합니다.

다음 단계는 공지사항에 조건을 추가하는 것입니다.

## 경고 조건 만들기 [#create-alert-conditions]

다음과 같은 공지 조건을 추가하겠습니다.

* 느린 읽기 응답
* 낮은 리치 히트 비율

### 높은 응답 시간 공지 조건 생성 [#crete-response-time]

**FlashDB alert policy** \[FlashDB 공지 사항] 아래에서 **Create a condition** \[조건 생성 을] 클릭합니다.

다음 페이지에서는 귀하의 상태에 대한 카테고리를 선택하라는 메시지를 표시합니다. NRQL 쿼리를 사용하여 조건을 생성할 수 있는 NRQL을 선택합니다. 그런 다음 **Next, define thresholds** \[다음을 클릭하고 레버 값, 예측을 정의합니다].

읽기 작업이 예상보다 오래 걸리는 경우 뉴렐릭이 알림을 보내도록 하려고 합니다. 공지 조건의 이름을 "느린 읽기 응답"으로 지정하고 조건에 대해 다음 NRQL 쿼리를 입력하세요.

```sql
SELECT average(fdb_read_responses) FROM Metric
```

여기에서는 FlashDB에 대한 평균 읽기 응답을 선택했습니다.

같은 페이지에서 아래로 스크롤하여 레버 값을 정의하세요. 레버값, 릴레이 유형을 **Static** 으로 선택합니다. 가장 간단한 레버 값 유형이며 쿼리에서 반환된 숫자 값을 기반으로 조건을 생성합니다.

임계값, 경계값을 0.9로 설정합니다. 여기서는 읽기 응답 시간이 5분 이상 0.9를 초과할 때마다 위반을 개시하는 조건을 정의했습니다.

다음으로 **Add warning threshold** \[경고 추가를] 클릭하세요.

읽기 응답이 5분 이상 0.8을 초과할 때 경고를 받으려면 노인 값을 0.8로 입력하세요.

나머지 필드에는 기본값을 사용하고 페이지를 아래로 스크롤한 후 **Save condition** \[조건 저장 을] 클릭합니다.

이제 FlashDB 공지에서 새로운 상태를 확인하실 수 있습니다.

### 리치히트 비율 조건 생성 [#create-cache-hit]

귀하는 해당 공간에서 귀하의 데이터베이스가 가장 빠르다고 주장했기 때문에 뉴렐릭이 쿠키 히트 비율이 너무 낮을 경우 이를 알려 주기를 원합니다. **Add a condition** \[조건 추가를] 클릭하여 동일한 정책에 다른 조건을 추가합니다.

다음 페이지에서는 귀하의 상태에 맞는 카테고리를 선택하라는 메시지가 표시됩니다. NRQL 선택하고 **Next, define threshold** \[다음을 클릭한 후 청년값, 릴레이를 정의합니다].

조건에 "Lowches 히트 비율"이라는 이름을 입력하고 다음 NRQL 쿼리를 사용하세요.

```sql
SELECT sum(fdb_cache_hits)/sum(fdb_read_responses) FROM Metric
```

**Threshold Type** \[임계값 유형] 에서 **Anomaly** \[이상]을 선택하고 **Threshold direction** \[임계값 방향] 을 **Lower only** \[낮은 것만] 으로 변경합니다. 다음으로, 임계값과 경고 값을 각각 3과 2 표준으로 설정합니다.

조건을 저장하여 공지사항에 추가하면 다음과 같이 표시됩니다.

## 공지플로우 만들기 [#create-notification]

공개된 목록에 대한 공지를 받으려면 공지 커뮤니티도 생성해야 합니다.

먼저 **Notification settings** \[공지 설정] 탭으로 이동한 뒤, **Create workflow** \[생성된 콘텐츠를] 클릭하세요.

**Create a new workflow to get notified** \[알림 페이지를 받기 위해 새로운 워크플로우를 생성] 하게 됩니다. 채널 옵션 목록에서 **Email** \[이메일 을] 클릭합니다.

공지를 받을 이메일을 입력하고 **Email subject** \[이메일 제목을] 업데이트한 후 **Save** \[저장을] 클릭하세요.

그러면 공지 채널이 추가된 **Create a new workflow to get notified** \[알림 페이지를 확인하기 위해 새 워크플로우 만들기] 로 돌아갑니다. 다음으로 **Activate workflow** \[Activate 흐름흐름을] 클릭하세요.

이제 **Notification settings** \[공지 설정] 아래에 워크플로우가 보입니다.

## 요약 [#summary]

이 과정에서 FlashDB 공지사항을 생성하고 여기에 느린 읽기 응답과 낮은 리치치 비율 조건을 추가했습니다. 또한 공개된 모든 회원에 대한 공지를 받기 위해 워크플로우를 생성했습니다.

<Callout variant="tip">
  이 절차는 퀵스타트를 만드는 방법을 가르치는 과정의 일부입니다. 다음 절차로 계속 진행하세요: [퀵스타트 만들기](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/build-a-quickstart).
</Callout>
