---
title: 랙 미들웨어
tags:
  - Agents
  - Ruby agent
  - Instrumented gems
metaDescription: New Relic's Ruby agent instruments Rack middlewares and uses middlewares for functions like cross application tracing and browser auto-instrumentation.
freshnessValidatedDate: never
translationType: machine
---

Ruby 에이전트는 자동으로 [Rack](http://rack.github.io/) 미들웨어를 계측합니다. Rack 미들웨어의 기본 사항에 익숙하지 않은 경우 [Rails on Rack 가이드에 링크된 리소스](http://guides.rubyonrails.org/rails_on_rack.html#resources) 를 검토하십시오. 또한 Ruby 에이전트는 Rack 미들웨어를 통해 다음과 같은 몇 가지 기능을 제공합니다.

* [분산 추적](/docs/distributed-tracing/enable-configure/language-agents-enable-distributed-tracing/)

* 자동 측정,

  <InlinePopover type="browser">
    [](/docs/agents/ruby-agent/features/page-load-timing-ruby)
  </InlinePopover>

  에 대한 자동 로그

New Relic은 Rails 및 Sinatra용 미들웨어를 자동으로 설치합니다.

## 랙 계측 [#instrumentation]

Rack 미들웨어를 구성하는 가장 일반적인 두 가지 방법은 `Rack::Builder` API (대부분 <DNT>**config.ru**</DNT>에서 사용)와 Rails의 미들웨어 그리드 설정입니다.

<CollapserGroup>
  <Collapser
    id="rack_builder"
    title="랙::빌더"
  >
    <DNT>**config.ru**</DNT> 파일의 미들웨어는 `Rack::Builder` 사용하여 구성됩니다. `Rack::Builder` 의 루비 에이전트에서 리소스하드 미들웨어의 경우 앱이 버전 1.1.0을 실행해야 합니다. 또는 그 이상의 `rack` 보석. 이는 Sinatra 또는 순수 랙 애플리케이션과 함께 미들웨어를 사용하는 가장 일반적인 방법입니다.
  </Collapser>

  <Collapser
    id="rails_middlewares"
    title="레일스 미들웨어"
  >
    Rails는 `Rack::Builder` 대신 자체 클래스( `ActionDispatch::MiddlewareStack` )를 사용하여 미들웨어를 구성합니다. Rails 애플리케이션에 미들웨어를 명시적으로 추가하지 않은 경우에도 Rails 자체의 많은 구성 요소가 미들웨어로 구현되므로 미들웨어 데이터가 기본적으로 표시됩니다.

    <DNT>**Rails 3.0 or higher**</DNT> 의 `ActionDispatch::MiddlewareStack` 통해 자동으로 추가된 루비 에이전트 기능 미들웨어입니다. Rails를 사용한 미들웨어 구성에 대한 자세한 내용은 [Ruby on Rails 가이드를](http://guides.rubyonrails.org/rails_on_rack.html) 참조하세요.
  </Collapser>
</CollapserGroup>

## 미들웨어 데이터 보기 [#viewing_middleware_data]

APM에서 미들웨어 데이터를 볼 수 있습니다.

<CollapserGroup>
  <Collapser
    id="apm-overview"
    title="APM 요약 페이지에서"
  >
    앱 [APM <DNT>**Summary**</DNT> 페이지](/docs/apm/applications-menu/monitoring/applications-overview-dashboard) 의 기본 차트에는 애플리케이션의 모든 Rack 미들웨어에서 소요된 요청당 평균 시간을 보여주는 보라색 막대가 포함되어 있습니다.

    <img
      title="web_transactions.png"
      alt="web_transactions.png"
      src="/images/apm_screenshot-crop_web-transactions.webp"
    />

    <figcaption>
      <DNT>**APM > (selected application) > Summary:**</DNT> 미들웨어 시간은 앱의 기본 개요 차트에 보라색으로 표시됩니다.
    </figcaption>
  </Collapser>

  <Collapser
    id="apm-transactions"
    title="APM 트랜잭션 페이지에서"
  >
    또한 앱의 APM [<DNT>**Transactions**</DNT> 페이지](/docs/apm/applications-menu/monitoring/transactions-page) 에서 특정 트랜잭션 이름에 대한 개별 미들웨어의 시간을 확인할 수도 있습니다.

    <img
      title="transactions_page.png"
      alt="transactions_page.png"
      src="/images/apm_screenshot-full_transactionspagesummary.webp"
    />

    <figcaption>
      <DNT>**APM > (selected application) > Monitor > Transactions > (selected transaction) > Trace details:**</DNT> 다음은 앱에 대해 선택한 트랜잭션에 대한 미들웨어 시간의 예입니다.
    </figcaption>
  </Collapser>

  <Collapser
    id="apm-trace"
    title="APM 트랜잭션 추적 요약에서"
  >
    트랜잭션 추적은 또한 자세한 미들웨어 호출 정보를 캡처합니다.

    <img
      title="trace_summary.png"
      alt="trace_summary.png"
      src="/images/apm_screenshot-full_trace-summary.webp"
    />

    <figcaption>
      <DNT>**APM > (selected application) > Monitor > Transactions > (selected transaction trace):**</DNT> 다음은 프로세서 트레이스의 미들웨어 세부 정보의 예입니다.
    </figcaption>
  </Collapser>
</CollapserGroup>

## 랙 계측 비활성화 [#disabling]

랙 미들웨어를 계측하지 않으려면 [`disable_middleware_instrumentation`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration) 설정으로 랙 미들웨어 계측을 비활성화할 수 있습니다. [특정 거래를 무시할](/docs/agents/ruby-agent/installation-configuration/ignoring-specific-transactions) 수도 있습니다.

## Ruby 에이전트 미들웨어 수동 설치 [#manual]

New Relic의 [교차 애플리케이션 추적](/docs/apm/traces/cross-application-traces/cross-application-tracing) 기능에 대한 Ruby 에이전트의 구현은 랙 미들웨어 계측을 사용하여 모니터링되는 애플리케이션 간에 정보를 전달하는 데 필요한 HTTP 헤더를 읽고 씁니다. Sinatra를 사용 중이고 위에서 설명한 대로 미들웨어 계측을 비활성화했으며 교차 애플리케이션 추적을 사용하려면 미들웨어 스택에 `NewRelic::Rack::AgentHooks` 미들웨어를 수동으로 추가해야 합니다.

<Callout variant="important">
  버전 8.0.0부터 애플리케이션 간 추적이 더 이상 사용되지 않으며 [분산 추적](/docs/distributed-tracing/enable-configure/language-agents-enable-distributed-tracing/) 이 선호됩니다. 활성화하면 추가 미들웨어 없이도 모든 랙 기반 앱에 대해 분산 추적이 자동으로 구성됩니다.

  교차 애플리케이션 추적을 계속 사용하려면 [구성을 업데이트해야 합니다](/docs/agents/ruby-agent/features/cross-application-tracing-ruby#configuration) .
</Callout>

## 수동 랙 계측 [#manual_instrumentation]

이전 버전의 Ruby 에이전트는 `NewRelic::Agent::Instrumentation::Rack` 모듈을 통해 Rack 미들웨어를 수동으로 계측하는 것을 지원했습니다. 이 계측은 제거되었으며 Ruby 에이전트 버전 4.0.0 이상에서 작동이 보장되지 않습니다. 이러한 형태의 수동 계측은 자동 미들웨어 계측에서는 필요하지 않습니다. 3.9.0 이상으로 업그레이드한 후 코드에서 이 모듈에 대한 참조를 제거하는 것이 좋습니다.
