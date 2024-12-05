---
title: '애플리케이션이 응답하지 않음: ANR 오류 추적 및 분석'
tags:
  - Mobile monitoring
  - Mobile monitoring UI
  - Application not responding
  - Errors
metaDescription: Use New Relic's Application Not Monitoring UI page to track and analyze ANR errors.
freshnessValidatedDate: '2024-06-24T00:00:00.000Z'
translationType: machine
---

Android 모바일 앱에서는 기능의[](https://developer.android.com/topic/performance/vitals/anr) 기본 UI 스레드가 5초 이상 차단되면 ANR(기능 없음 응답) 오류가 발생합니다. ANR 오류는 네트워크 호출, 복잡한 계산, 리소스 경합 등 다양한 요인으로 인해 발생할 수 있습니다. 빈도와 발생 패턴을 모니터링하면 앱의 전반적인 안정성과 사용자 환경에 귀중한 인사이트를 얻을 수 있습니다.

## ANR 오류가 뉴렐릭에 보고되는 방식 [#anr-reporting]

기본적으로 Android 에이전트는 ANR 오류를 [`MobileApplicationExit`](/attribute-dictionary/?event=MobileApplicationExit) 이벤트로 보고합니다. 이 이벤트는 Android의 [`ApplicationExitInfo` API를](https://developer.android.com/reference/android/app/ApplicationExitInfo) 활용하여 앱 종료의 다양한 원인을 모니터링하고 보고합니다. 에이전트는 다음 앱에서 `ApplicationExitInfo` API 읽고 기록의 각 앱 종료에 대해 `MobileApplicationExit` 이벤트를 뉴렐릭에 비동기적으로 보냅니다.

### 뉴렐릭과 Google Play Console 간의 ANR 불일치 이해 [#new-relic-vs-google-play]

뉴렐릭과 Google Play Console 간에 ANR 수와 발생률에 차이가 있을 수 있습니다. 이는 데이터 수집 방법의 차이로 인해 발생합니다.

* Android 버전 적용 범위:

  * 뉴렐릭은 Android 11 이상을 실행하는 기기의 ANR에 중점을 둡니다.
  * Google Play Console은 모든 Android 버전에서 ANR을 캡처합니다.

* 장치 및 앱 범위:

  * 뉴렐릭은 앱 소스와 상관없이 뉴렐릭 에이전트가 설치된 기기에서 보고합니다.
  * Google Play Console은 Play 스토어를 통해 다운로드한 앱이 있는 인증된 기기에서만 보고합니다.

자세한 내용은 [Google Play 설명서를](https://developer.android.com/topic/performance/vitals) 참조하세요.

## 뉴렐릭에서 ANR 보기 [#view-anr-in-new-relic]

기본적으로 Android 에이전트는 ANR 오류를 수집하여 뉴렐릭에 보고합니다. ANR 데이터는 다음 두 위치에서 찾을 수 있습니다.

* 요약 페이지에는 오류 비율을 표시하는

  <DNT>
    **ANR rate**
  </DNT>

  라는 위젯이 있습니다.

* ANR 페이지에서 오류율 분석, 영향을 받은 사용자 그룹, 속성 세부정보를 볼 수 있습니다.

<img
  title="ANR UI page"
  alt="screenshot of ANR UI page"
  src="/images/mobile_screenshot-full_anr-ui-page.webp"
  style="float: left;"
/>

ANR 페이지를 보려면 다음 안내를 따르세요.

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities)**
   </DNT>

   으)로 이동합니다.

2. <DNT>
     **Mobile**
   </DNT>

   을(를) 클릭합니다.

3. 안드로이드 앱을 선택하세요.

4. 왼쪽 창에서

   <DNT>
     **ANR**
   </DNT>

   클릭합니다.

### ANR 그룹별로 필터링 [#filter]

ANR 페이지의 위젯은 ANR 그룹을 기반으로 합니다. 기본적으로 ANR은 `description` 속성으로 그룹화됩니다.

<img
  title="top occurences chart"
  width="50%"
  alt="screenshot of top occurences chart"
  src="/images/mobile_screenshot-crop_group-by.webp"
  style="float: left;"
/>

ANR이 그룹화되는 방식(예: 기기 유형, 앱 버전, [맞춤 속성](/docs/data-apis/custom-data/custom-events/collect-custom-attributes/))을 변경하려면 <DNT>**Group by**</DNT> 를 클릭하고 목록에서 속성을 선택하세요. ANR 페이지가 업데이트되어 새 ANR 그룹에 대한 데이터가 표시됩니다.

### ANR 비율 모니터링 [#anr-rate-chart]

일반적으로 ANR에 예상치 못한 급증, 급락 또는 패턴이 있는지 한눈에 확인할 수 있는 <DNT>**ANR rate**</DNT> 차트입니다.

예를 들어 최근 앱 버전을 출시한 경우 ANR 비율 차트는 시간이 지남에 따라 오류가 발생한 세션의 비율을 앱 버전별로 분류하여 전체 세션의 비율로 표시합니다. 평균 ANR 세션 비율은 오른쪽 상단에 표시됩니다.

<img
  title="anr rate chart"
  alt="screenshot of anr rate chart"
  src="/images/mobile_screenshot-crop_anr-rate-chart.webp"
  style="float: left;"
  width="60%"
/>

<DNT>**ANR rate by day**</DNT> 차트는 시간 경과에 따라 ANR을 경험한 순 사용자의 비율을 모든 순 사용자의 비율로 표시합니다.

참고: 선택한 시간에 관계없이 이 차트에는 지난 28일 동안의 평균 ANR 비율이 표시됩니다.

### 중요도별로 ANR 발생 보기 [#anr-occurences]

<DNT>**ANR occurrences by importance**</DNT> 차트는 ANR로 인해 종료되기 전 앱 프로세스의 상대적 중요성에 따른 ANR 분포를 보여줍니다. 앱의 프로세스 중요성에 대한 자세한 내용은 [여기에서](https://developer.android.com/reference/android/app/ApplicationExitInfo#getImportance) 확인할 수 있습니다.

<img
  title="anr occurrences by importance"
  alt="screenshot of anrs by importance"
  src="/images/mobile_screenshot-crop_anr-occurences-by-importance.webp"
  style="float: left;"
/>

### ANR 프로필을 통해 더 자세히 알아보세요. [#anr-profiles]

ANR 프로필은 모든 ANR 발생에 대한 속성 분포를 표시하므로 패턴을 식별하여 근본 원인을 빠르게 좁히고 문제를 해결할 수 있습니다.

<img
  title="anr profiles"
  alt="screenshot of anr profiles"
  src="/images/mobile_screenshot-crop_anr-profiles.webp"
  style="float: left;"
/>

## ANR 모니터링 비활성화 [#disable-anr-monitoring]

<Callout variant="important">
  서버 측 설정은 항상 로컬 에이전트 설정보다 우선합니다. 동시에 활성화된 장치가 100,000개 미만인 모바일 앱의 경우 최종 사용자 장치에 변경 사항을 적용하는 데 최대 10분이 걸릴 수 있습니다. 활성 장치가 100,000개가 넘는 앱의 경우 몇 시간이 걸릴 수 있습니다.
</Callout>

ANR 모니터링을 비활성화해야 하는 경우:

1. 뉴렐릭에서 모바일 앱으로 이동합니다.

2. <DNT>
     **Settings**
   </DNT>

   아래의 왼쪽 창에서

   <DNT>
     **Application**
   </DNT>

   클릭합니다.

3. **Application Not Responding (ANR)** \[애플리케이션 응답 없음(ANR)을] 끕니다.

4. **저장** 을 클릭합니다.

<img
  title="ANR setting toggle"
  alt="Screenshot of the ANR setting"
  src="/images/mobile_screenshot-crop_anr-setting-toggle.webp"
  style="float: left;"
/>
