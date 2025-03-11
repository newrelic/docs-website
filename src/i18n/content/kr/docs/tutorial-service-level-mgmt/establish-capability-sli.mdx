---
title: 기능 SLI 설정
metaDescription: 'New Relic observability maturity series: our service level management guide shows you how to easily measure and communicate the overall health, performance, and quality of your digital products and services to all stakeholders.'
freshnessValidatedDate: never
translationType: machine
---

로그인이나 결제 승인과 같은 중요한 비즈니스 기능에 대한 서비스 레벨을 보유하면 IT와 비즈니스 간의 언어 장벽이 빠르게 사라질 것입니다. 서비스 레벨의 기능 점수는 서비스 레벨이 악화되기 시작할 때 이를 수정할 수 있는 더 나은 기회도 제공합니다. 예를 들어 로그인 서비스 레벨이 저하되기 시작하면 소비자 지향 API에서 시작하는 의존성/종속성 및 워크플로우를 살펴봐야 합니다.

이 작업을 완료하기 위해 애플리케이션이나 서비스에 대한 깊은 지식이 필요하지 않습니다. 소비자 지향 API(서비스 경계)를 찾고 아래 단계에 따라 기능 레벨 서비스를 생성하기만 하면 됩니다.

1. [출력 SLI 문서 설정](/docs/tutorial-service-level-mgmt/establish-output-sli/) 에 설명된 대로 서비스 경계 애플리케이션을 식별합니다.

2. 다음 NRQL 쿼리를 실행하여 가장 자주 사용되는 트랜잭션에 대한 기준을 식별합니다. `Order-Processing` 식별한 애플리케이션 이름으로 바꿔야 합니다.

   ```
   FROM Transaction SELECT count(*), percentile(duration, 95) WHERE appName='Order-Processing' FACET name SINCE 1 WEEK AGO
   ```

   아래 스크린샷과 비슷한 내용이 표시되어야 합니다. 첫 번째 프로세서에서 "구매"와 관련이 있다고 명시되어 있습니다. 이제 '구매' 기능을 생성할 수 있습니다.

   <img
     alt="transaction list query"
     src="/images/queries-nrql_screenshot-full_transaction-list-nrql.webp"
   />

3. 쿼리 끝에 `WHERE name='Controller/Sinatra//purchase'` 추가하고 `Controller/Sinatra//purchase` 프로세서 이름으로 바꿉니다.

4. 쿼리를 실행하여 작동하는지 확인하세요. 이제 결과에 하나의 프로세서만 표시되어야 합니다. 이 쿼리와 `DURATION (95%)` 결과를 메모장에 복사하세요. 잠시 후 둘 다 필요합니다.

5. 플랫폼에서 새 서비스 수준을 만듭니다. 새 서비스 수준 시작 [은 입력 성능 SLI 설정에](#establishing-input-sli) 설명되어 있습니다.

이 경우 항목 GUID를 통해 메타데이터(태그)를 유지할 수 있도록 목록에서 애플리케이션(APM `Entity` 유형)을 찾고 싶습니다. 위 섹션의 "합성 모니터" 대신 엔터티 필터 드롭다운에서 "APM"을 선택합니다.

6. "지연시간" 안내 흐름을 선택하면 유효한 쿼리가 자동으로 채워집니다.

7. 메모장을 사용하여 `name='your/transaction/name/here'` 만 복사합니다.

8. 아래 스크린샷에서 밑줄이 그어진 것처럼 서비스 수준의 두 쿼리에 **`AND `이 앞에** 오는 이 조건을 추가합니다.

   <img
     alt="capability query clause"
     src="/images/apm_screenshot-crop_capability-filter-clause.webp"
   />

9. 메모장에 복사된 원본 기준의 `DURATION (95%)` 결과와 일치하도록 두 번째 쿼리의 `duration < 1.78` 부분을 조정합니다.

10. 이 서비스 레벨의 이름을 지정하고 설명을 업데이트한 후 서비스 레벨을 저장하세요.

여기에서 이러한 기능 중 몇 가지를 설정하고 피드백을 위해 애플리케이션 팀과 리더십에 제시하는 것이 좋습니다.

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-service-level-mgmt/improve-with-slm/","title":"다음 단계","body":"SLM 기술을 사용하여 신뢰성을 향상시키는 방법을 알아보세요."}}
  previousStep={{"path":"/docs/tutorial-service-level-mgmt/establish-input-sli/","title":"이전 단계","body":"입력 지표 및 목표를 만드는 방법 알아보기"}}
/>
