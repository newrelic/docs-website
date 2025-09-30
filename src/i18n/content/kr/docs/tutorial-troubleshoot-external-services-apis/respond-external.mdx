---
title: API 문제에 대응
metaDescription: Learn how to manage APIs and other external services
freshnessValidatedDate: '2023-09-02T00:00:00.000Z'
translationType: machine
---

거의 모든 애플리케이션과 서비스는 API 및 기타 외부 서비스를 호출합니다. 사이트에서 `buy` 버튼을 누르는 것만큼 간단한 일로 수십 개의 API 호출이 이루어질 수 있다면 문제가 발생하기 마련입니다. 문제가 있는 API 호출은 작은 재고 사고부터 사이트가 결제 프로세서와 통신할 수 없는 코드 레드 상황까지 발생할 수 있습니다.

이러한 오류를 분석하는 데는 시간이 많이 걸립니다. 구매 거래 호출이 실패하여 사이트에서 구매 처리에 실패하고 있나요? 아니면 결제 처리자에 대한 인증 호출일까요? 어쩌면 외부 API 문제가 아니라 내부 인벤토리 API 문제일 수도 있습니다. API 오류인가요, 아니면 자체 애플리케이션 내의 오류인가요? New Relic을 사용하면 수동으로 처리하는 데 걸리는 시간보다 훨씬 짧은 시간에 이러한 문제를 해결할 수 있습니다.

<img
  title="Maps overview"
  alt="Home maps overview"
  src="/images/apm_screenshot-crop_maps-home.webp"
/>

## 목표 [#objective]

이 튜토리얼 시리즈에서는 문제가 있는 API 상호 작용을 식별하는 방법과 New Relic 플랫폼을 사용하여 이를 해결하는 방법을 보여줍니다. 이 문서에서는 다음을 다룹니다.

* New Relic을 애플리케이션과 통합하여 모니터링할 데이터 보내기
* 외부 서비스 UI를 통해 문제가 있는 API 식별

## New Relic 유물 통합 [#integrate]

모니터링하거나 문제를 해결하려면 사용할 데이터를 수집하기 위한 에이전트를 설치해야 합니다.

<Steps>
  <Step>
    ## APM 에이전트 설치

    애플리케이션의 성능을 모니터링하려면 앱 언어용으로 특별히 생성된 에이전트를 사용합니다. 로고를 클릭하면 에이전트 설치 및 구성을 안내하는 New Relic 플랫폼으로 이동합니다.

    <TechTileGrid>
      <TechTile
        name="Go agent"
        icon="logo-go"
        to="https://one.newrelic.com/nr1-core?state=985d4005-ba90-a8c7-1da1-2af34539b03b"
      />

      <TechTile
        name="Java agent"
        icon="logo-java"
        to="https://one.newrelic.com/nr1-core?state=80d18bcb-4919-1fcb-2b77-9406838eb916"
      />

      <TechTile
        name=".NET agent"
        icon="logo-dotnet"
        to="https://one.newrelic.com/nr1-core?state=30e93090-6dfa-6b70-8e75-472f54414355"
      />

      <TechTile
        name="Node.js agent"
        icon="logo-nodejs"
        to="https://one.newrelic.com/marketplace/install-data-source?state=be2e62fa-cc3b-c428-27c4-8d662c9e80a1"
      />

      <TechTile
        name="PHP agent"
        icon="logo-php"
        to="https://one.newrelic.com/nr1-core?state=aa633b41-72d4-009c-3abf-55dcf64894fe"
      />

      <TechTile
        name="Python agent"
        icon="logo-python"
        to="https://one.newrelic.com/nr1-core?state=20fda75b-58fb-a92a-f9e1-7b052035c6e8"
      />

      <TechTile
        name="Ruby agent"
        icon="logo-ruby"
        to="https://one.newrelic.com/nr1-core?state=d69143ab-605c-579b-25bf-cc6e5fee5b80"
      />
    </TechTileGrid>

    에이전트를 설치했으면 **[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION'))** 으로 이동하여 앱을 선택합니다. 아직 많은 데이터가 표시되지 않으면 잠시 자리를 비우고 애플리케이션이 실행될 때 에이전트가 실시간 데이터를 수집하도록 하십시오.
  </Step>

  <Step>
    ## 추가 설정

    특정 구성에는 추가 설정이 필요할 수 있습니다. 자세한 내용은 [외부 서비스 설정 문서를](/docs/apm/apm-ui-pages/monitoring/external-services/external-services-setup/) 살펴보세요.

    위 문서의 추가 단계를 완료한 후 **[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION'))** > 앱 선택 > **External services** \[외부 서비스] 로 이동하세요.API 및 외부 서비스 흐름에 대한 데이터가 표시되어야 합니다.
  </Step>
</Steps>

## 문제가 있는 API 식별

이제 애플리케이션이 API 및 기타 외부 서비스와 상호 작용하는 방식을 추적할 수 있습니다. 해당 정보를 사용하여 문제를 일으키는 API 또는 외부 서비스를 식별해 보겠습니다.

<Steps>
  <Step>
    ## 근본 원인을 생각해 보세요.

    문제가 있는 API나 서비스를 찾고 있다면 이미 해결할 준비가 된 문제가 있을 것입니다. 사용자가 구매를 할 수 없거나 사이트에 로그인할 수도 없습니다.

    애플리케이션은 수십 또는 수백 개의 API를 호출할 수 있습니다. 다음 단계를 계속하는 동안 근본 문제를 염두에 두십시오. 구매에 문제가 있다는 것을 알고 있다면 구매 및 거래 관련 API에 집중해야 합니다. 로그인 문제인 경우 사용자 데이터베이스 또는 외부 인증 서비스에 대한 호출에 집중할 수 있습니다.
  </Step>

  <Step>
    ## 지도를 이용한 분류

    당신이 웹스토어를 운영하고 있는데 사용자들로부터 패키지가 도착했을 때 알림을 받지 못했다고 불평하는 이메일을 받았다고 가정해 보겠습니다. SMS와 이메일 알림을 모두 받았어야 했기 때문에 이것이 이상하다고 생각합니다.

    전체 배송 프로세스를 처리하는 서비스를 계측했습니다. **External services** \[외부 서비스] 페이지로 이동한 다음 **Maps** \[지도 를] 클릭합니다.

    <img
      title="Map view"
      alt="The maps view"
      src="/images/apm_screenshot-crop_external-maps.webp"
    />

    이는 모든 자체 서비스와 외부 서비스 또는 API 간의 관계를 보여줍니다. 이 경우 분류에 관심이 있는 서비스는 `Delivery` 입니다. 이는 `Order-Composer` 이라는 다른 서비스에 의해 호출되며 오른쪽에서 볼 수 있듯이 4개의 다른 서비스와 API를 호출합니다.
  </Step>

  <Step>
    ## 이상 징후 식별

    지도 보기에는 처리량과 응답 시간을 추적하는 데 유용한 몇 가지 차트가 표시될 뿐만 아니라 서비스와 호출하는 서비스 사이의 선의 두께와 색상을 통해 해당 측정항목을 시각적으로 나타냅니다.

    <img
      title="RPM"
      alt="Screenshot showing the hover view of map entities"
      src="/images/apm_screenshot-crop_maps-rpm.webp"
    />

    `Delivery` 서비스와 해당 종속 항목 사이의 줄은 `Sms notification` 가리키는 줄을 제외하고 모두 상당히 유사해 보입니다. 실제로 SMS 서비스 위로 마우스를 가져가면 처리량이 나머지 종속성보다 훨씬 높다는 것을 알 수 있습니다.
  </Step>
</Steps>

이제 `Sms notification` 가) 사용자 불만을 야기할 가능성이 있는 원인임을 확인했습니다. 이제 유력한 용의자를 식별했으므로 근본 문제를 해결할 수 있습니다.

<UserJourneyControls nextStep={{"path":"/docs/tutorial-external-services/solve-external","title":"다음 단계","body":"측정항목 차트, 시스템 맵, 추적을 사용하여 API 문제를 해결하세요."}}/>
