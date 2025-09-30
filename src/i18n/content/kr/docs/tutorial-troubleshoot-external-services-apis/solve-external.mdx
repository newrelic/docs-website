---
title: 외부 서비스 문제를 해결하세요
metaDescription: Resolve the root cause of your API or external service problems
freshnessValidatedDate: '2023-09-02T00:00:00.000Z'
translationType: machine
---

이제 주의가 필요한 API 또는 외부 서비스를 식별했습니다. 이 튜토리얼에서는 문제를 해결하는 데 필요한 단계를 안내합니다.

API 및 외부 서비스 문제에 대한 단일 솔루션은 없습니다. 이 튜토리얼의 아이디어를 출발점으로 삼아 뭔가를 발견할 때마다 자세히 알아보세요.

## 목표

이 문서에서는 문제가 있는 API 또는 외부 서비스의 예로 [이전 튜토리얼 문서에서](/docs/tutorial-external-services/respond-external) 식별한 외부 서비스인 `Sms notification` 을 사용합니다. 이 문서에서는 다음을 다룹니다.

* 측정항목 차트에서 이상 항목 찾기
* 추적을 사용하여 근본 원인 찾기

## 근본 원인을 파악하고 해결하세요.

이미 지도 보기를 사용하여 문제가 있는 외부 서비스를 식별했지만 이를 사용하여 더 자세히 알아볼 수 있습니다.

<Steps>
  <Step>
    ## 측정항목으로 이상 징후 식별

    지도 보기에서 문제가 있는 API 또는 외부 서비스 위에 마우스를 놓고 **Show entity preview** \[항목 미리 보기 표시를] 선택합니다.

    <img
      title="The preview pane for an external service"
      alt="The preview pane for an external service"
      src="/images/apm_screenshot-crop_maps-preview.webp"
    />

    그러면 서비스의 일반적인 상태에 대한 개요를 볼 수 있는 창이 열립니다. 이미 이러한 측정항목 중 일부를 사용하여 문제를 식별했지만 여기에서 자세히 살펴보는 것이 유용합니다. 다음 사항을 주의 깊게 살펴보세요.

    * 차트의 스파이크.
    * 확실히 응답률이나 처리량이 높습니다.
    * 응답률과 처리량이 동시에 최고치와 최저치를 기록합니다.

      이상 현상을 식별한 경우 오른쪽 상단의 시간 선택기를 사용하여 보고 있는 시간 범위를 확장하세요. 이는 패턴이 아닌 이상 현상을 식별하는 데 유용합니다.

      위의 스크린샷에서 처리량이 예상보다 약간 높다는 점을 제외하면 눈에 띄는 것은 아무것도 없다는 것을 알 수 있습니다. 즉시 걱정할 것은 없습니다.
  </Step>

  <Step>
    ### 추적으로 코드 수준 문제 찾기

    문제가 있는 외부 서비스 위로 다시 마우스를 가져간 다음 이번에는 **View traces** \[추적 보기를] 클릭합니다.

    <img
      title="The trace pane for an external service"
      alt="The trace pane for an external service"
      src="/images/apm_screenshot-crop_maps-trace.webp"
    />

    해당 서비스와 관련된 추적에 대한 다양한 차트가 표시됩니다. 이 경우에는 사용자가 구매 버튼을 클릭하여 생성된 데이터를 SMS 알림을 보내는 API 호출까지 추적할 수 있는 `Controller/Sinatra//purchase` 라는 단일 추적이 있습니다.

    유용하다고 생각되는 만큼 깊이 클릭하되 차트에서 이상이나 오류를 찾는 데 다시 집중하세요. 예를 들어 사용자의 저장된 전화번호를 해독하는 API 호출까지 추적을 추적할 수 있습니다. 여기서 오류가 발생하면 전체 문제가 드러날 수 있습니다. 암호 해독 호출이 실패하고 유효한 전화번호를 반환하지 않으면 사용자는 전화 알림을 받을 수 없습니다.

    이는 또한 `Sms notification` 차트에 오류가 표시되지 않은 이유를 설명합니다. 해당 API는 올바르게 작동했지만 추가 업스트림 API가 실제로 목적에 부합하지 않는 데이터를 제공했습니다.
  </Step>

  <Step>
    ## 데이터를 사용하여 논리적 오류 식별

    모든 솔루션이 오류나 이상 현상에서 직접적으로 나오는 것은 아닙니다. 근본 원인은 훨씬 더 평범할 수 있습니다.

    예를 들어, `Sms notification` API와 관련된 모든 차트를 탐색했다고 가정해 보겠습니다. 또한 모든 추적을 조사하여 오류나 이상한 이상 현상을 식별하지 못했습니다. 모든 것이 잘 작동하는 것 같지만 고객은 여전히 알림을 받지 못하고 있습니다.

    `Sms notification` 에 대한 처리량 차트를 본 기억이 나고 갑자기 결제 대행업체가 제공하는 구매 한도에 도달했을 수도 있다는 사실을 깨달았습니다. 해당 API가 귀하의 호출을 받았지만 귀하가 할당량에 도달했기 때문에 받은 요청에 대해 아무 작업도 수행하지 않았습니다. 심지어 당신에게 오류를 던지지도 않았습니다.
  </Step>
</Steps>

## 다음은 뭐지? [#next]

이제 API 문제를 해결하고 전체 시스템 맵을 추적했으므로 우리 플랫폼을 더 탐색할 준비가 되었습니다.

* 앱이 느리게 실행되고 있나요? [내 앱은 느립니다](/docs/tutorial-app-slow/root-causes) 튜토리얼을 통해 앱의 대기 시간을 분류하고 진단하는 방법을 알아보세요.
* 수요가 가장 많은 날이 다가오면 New Relic이 [용량 계획](/docs/tutorial-peak-demand/get-started) 에 어떻게 도움이 되는지 알아보십시오.
* 고품질 알림을 생성하시겠습니까? [경고 자습서는](/docs/tutorial-create-alerts/create-new-relic-alerts/) 경고 시스템을 설정하는 데 도움이 될 수 있습니다.

<UserJourneyControls previousStep={{"path":"/docs/tutorial-external-services/respond-external","title":"이전 단계","body":"API 문제에 대응하고 애플리케이션에 New Relic을 설정하세요."}}/>
