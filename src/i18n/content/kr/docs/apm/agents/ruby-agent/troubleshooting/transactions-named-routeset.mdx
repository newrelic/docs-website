---
title: '''Middleware/Rack/ActionDispatch::Routing::RouteSet#call''이라는 라벨이 붙은 트랜잭션'
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: 'Find out what to do if you see transactions named Middleware/Rack/ActionDispatch::Routing::RouteSet#call in your APM UI.'
freshnessValidatedDate: '2023-11-13T00:00:00.000Z'
translationType: machine
---

## 문제 [#problem]

`Middleware/Rack/ActionDispatch::Routing::RouteSet#call` 이라는 APM UI에 트랜잭션이 표시되지만 그것이 무엇인지는 확실하지 않습니다.

## 원인 [#cause]

이름이 `Middleware/Rack/ActionDispatch::Routing::RouteSet#call` 인 트랜잭션은 계측되지 않은 Rails 앱의 경로를 나타냅니다. Rails 미들웨어가 계측되므로 New Relic은 트랜잭션에 소요된 시간을 캡처할 수 있지만 그 이상의 세부 정보는 제공할 수 없습니다.

`Middleware/Rack/ActionDispatch::Routing::RouteSet#call` 라는 트랜잭션으로 이어질 수 있는 상황은 다양합니다. 우리는 이 거래 유형의 가장 일반적인 원인에 대해 두 가지 솔루션을 제공했습니다.

## 해결책 [#solution]

<Tabs>
  <TabsBar>
    <TabsBarItem id="route-gem">
      계측되지 않은 gem에 사용자 정의 계측 추가
    </TabsBarItem>

    <TabsBarItem id="route-controller">
      컨트롤러를 직접 계측하세요
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="route-gem">
      앱의 경로가 계측된 미들웨어를 통해 계측되지 않은 gem으로 전달되는 경우 트랜잭션에 대한 보다 구체적인 데이터를 보려면 해당 gem에 사용자 지정 계측을 추가해야 합니다. 사용자 정의 계측을 추가하려면 [Ruby 사용자 정의 계측 문서 를](/docs/agents/ruby-agent/installation-configuration/ruby-custom-instrumentation) 읽어보는 것이 좋습니다.

      애플리케이션에 사용자 정의 계측을 추가하는 것이 이러한 트랜잭션에 대한 자세한 정보를 얻는 가장 좋은 방법입니다.
    </TabsPageItem>

    <TabsPageItem id="route-controller">
      Ruby 에이전트는 계측을 `ActionController::Base` 에 삽입하여 컨트롤러를 계측합니다. 그러나 경로가 `ActionController::Base` 상속하지 않는 컨트롤러를 통과하는 경우 해당 컨트롤러에는 계측이 필요합니다. 컨트롤러 클래스에 다음을 추가하여 컨트롤러를 직접 계측하세요.

      ```ruby
      include NewRelic::Agent::Instrumentation::ControllerInstrumentation
      ```
    </TabsPageItem>
  </TabsPages>
</Tabs>
