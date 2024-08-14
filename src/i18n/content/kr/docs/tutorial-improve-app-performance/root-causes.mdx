---
title: 느린 애플리케이션 성능 문제 해결
metaDescription: Discover actionable steps for troubleshooting slow application performance to identify and resolve issues for a smoother user experience.
freshnessValidatedDate: never
translationType: human
---

앱이 느립니다. 너무 느리면 다운타임이나 관련 서비스에 문제가 발생할 수도 있고, 단순히 백엔드 응답이 느려서 사용자 경험이 조금 더 저하될 수도 있습니다. 어떤 조치를 취해야 할까요?

이 튜토리얼은 뉴렐릭을 사용해여 애플리케이션을 분류하고 앱 성능 저하의 근본 원인을 식별하는 방법을 설명합니다. 에이전트로 앱을 '계측'하는 것으로 문제 해결을 시작할 수 있습니다. 계측한다는 것은 언어 및 프레임워크용 통합을 사용해 앱에 대한 데이터를 뉴렐릭에 보고하는 코드 조각을 설치하는 것을 의미합니다. 뉴렐릭에서 이 데이터를 사용해, 애플리케이션의 성능을 자세히 살펴보고 문제가 되는 느린 트랜잭션, 느린 데이터베이스 쿼리 또는 느린 외부 서비스를 식별할 수 있습니다.

## 뉴렐릭을 사용해 느리게 실행되는 애플리케이션의 문제를 해결하는 방법

느리게 실행되는 애플리케이션 문제를 해결하려면 성능 문제의 근본 원인을 식별하는 데 체계적인 접근 방식을 취해야 합니다. 다음은 애플리케이션 속도에 부정적인 영향을 미치는 문제를 진단 및 해결하는 데 필요한 단계입니다.

## 애플리케이션 계측을 통한 성능 모니터링 구현 [#prereq]

사이트 성능을 향상하려면, 먼저 현재 상황을 파악할 수 있어야 합니다. 뉴렐릭 모니터링은 항상 통합(<DNT>**integration**</DNT>) 즉, 관련 기술에서 데이터를 수집하여 뉴렐릭에 보고하는 코드로 시작됩니다. 애플리케이션 성능을 모니터링하려면 앱이 사용하는 언어용으로 특별히 생성된 에이전트를 사용해야 합니다.

에이전트를 설치하려면 로고를 클릭합니다. 그러면 에이전트를 설치 및 구성하는 과정을 안내해주는 뉴렐릭 플랫폼으로 이동합니다.

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

에이전트를 설치한 후 <DNT>**[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION'))**</DNT>으로 이동하여 앱을 선택합니다. 아직 많은 데이터가 표시되지 않으면 애플리케이션이 실행되어 에이전트가 실시간 데이터를 수집할 수 있도록 잠시 기다립니다.

## 애플리케이션 문제 식별 [#identify]

<SideBySide>
  <Side>
    웹 트랜잭션 시간(<DNT>**Web transactions time**</DNT>) 차트를 살펴봅니다. 이 차트는 앱 내 특정 메트릭들의 평균 응답 시간을 표시합니다. 차트가 데이터로 채워지면 모든 선이나 세그먼트에서 비정상적인 스파이크가 있는지 확인해 기록해 둡니다. 동시에, 지속적으로 많은 시간이 걸리는 세그먼트나 선을 기록해 둡니다.

    <Callout variant="tip">
      페이지 오른쪽 상단에 있는 타임 피커를 사용하여 다양한 시간 범위에서 스파이크가 나타나는지 확인할 수 있습니다.
    </Callout>
  </Side>

  <Side>
    <img
      title="Default web transactions chart"
      alt="Default web transactions chart"
      src="/images/journey_screenshot-web-transactions.webp"
    />
  </Side>
</SideBySide>

## 애플리케이션 진단

제공된 차트의 정보를 통해 애플리케이션 트랜잭션, 데이터베이스 쿼리 및 외부 서비스의 현재 속도와 효율성을 분석할 수 있습니다. 다음 단계는 성능 향상을 위해 수정해야 할 사항의 우선순위를 정하고 구현하는 것입니다.

차트에서 어떤 색상이 가장 큰 부분을 차지하는지, 스파이크가 나타나는지 또는 기타 비정상적인 동작이 표시되는지에 따라 이 튜토리얼의 다음 단계를 선택합니다.

<DocTiles>
  <DocTile
    title="If it's the blue line: slow application traces"
    path="/docs/journey-app-slow/problematic-transactions"
  >
    파란색 선은 애플리케이션 코드(<DNT>**application code**</DNT>)입니다. 애플리케이션에서 외부 또는 데이터베이스 호출이 아닌 코드에 소요된 시간을 의미합니다. 이 문제를 해결하려면 여기를 클릭하여 튜토리얼 2단계를 확인합니다.
  </DocTile>

  <DocTile
    title="If it's the yellow segment: slow database queries"
    path="/docs/journey-app-slow/slow-database-queries"
  >
    노란색 세그먼트는 데이터베이스 쿼리(<DNT>**database queries**</DNT>)입니다. 데이터베이스 쿼리 호출 및 대기에 소요된 시간을 의미합니다. 이 문제를 해결하려면 여기를 클릭하여 튜토리얼 3단계를 확인합니다.
  </DocTile>

  <DocTile
    title="If it's the green segment: slow external services"
    path="/docs/journey-app-slow/external-services/"
  >
    녹색 세그먼트는 외부 서비스(<DNT>**external services**</DNT>)입니다. HTTP 서비스 또는 엔드포인트를 호출하는 데 소요된 시간을 의미합니다. 이는 동일한 앱에 속한 HTTP 엔드포인트일 수도 있고, 동일한 시스템에 속한 다른 서비스일 수도 있으며, 완전한 서드파티 외부 API일 수도 있습니다. 이 문제를 해결하려면 여기를 클릭하여 튜토리얼 4단계를 확인합니다.
  </DocTile>
</DocTiles>
