---
title: 브라우저 모니터링 및 Ruby 에이전트
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: Instrumentation for your New Relic Ruby agent to set up New Relic browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

루비 에이전트를 사용하면 웹페이지에 자동 또는 수동으로 [유체 분석 에이전트를](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser) 주입할 수 있습니다. 기본적으로 루비 에이전트는 Javascript를 감지하면 자동으로 <InlinePopover type="browser"/>설치합니다.

브라우저 모니터링을 수동으로 추가하려는 경우 또는 브라우저 에이전트 설치 옵션에 대해 알아보려면 [브라우저 에이전트 설치 가이드를 참조하세요](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent).

## 요구 사항 [#requirements]

[지원되는 모든 루비 에이전트 버전에서](/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/) 자동 브라우저 리소스를 사용할 수 있습니다. 환경이 자동 계측을 위한 준비가 되었는지 확인하려면 [브라우저 모니터링 호환성 및 요구 사항 가이드를](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring) 검토하세요.

## 자동 계측 사용 [#auto-instrumentation]

뉴렐릭의 기본 설정 브라우저는 모델링 자동 측정, 자동 생성을 활성화합니다.

```yaml
browser_monitoring:
  auto_instrument: true
```

이는 최종 사용자를 모니터링하는 가장 간단한 방법입니다. 루비 에이전트는 로드 시 각 페이지를 검사하고 헤더에 브라우저 JavaScript를 자동으로 삽입합니다. 자동 측정, 자동 로그는 Rack을 사용하는 환경에서 작동합니다. 성능상의 이유로 에이전트는 헤더 계측 지점에 대한 애플리케이션 응답의 처음 50,000줄만 스캔합니다. `X-UA-Compatible` 메타 태그가 있고 `<head>` 태그가 50k보다 긴 경우 자동 측정, 자동 컨테이너는 정상적으로 실패합니다.

자동 측정, 자동 로그는 `X-UA-Compatible` 메타 태그를 찾고 바로 뒤에 JavaScript를 삽입합니다. 자동 측정, 자동 로그가 `X-UA-Compatible` 메타 태그를 찾을 수 없는 경우, 시작 헤드 태그 뒤에 삽입합니다. 그렇지 않으면 여는 body 태그 뒤에 삽입됩니다. 이러한 태그 중 하나라도 조건부나 주석으로 래핑된 경우 자동 실행, 자동 로그가 실패할 가능성이 높습니다.

자동 측정, 자동 로그는 'Content-Type' 첨부 파일이 있는 페이지에서 또는 스트리밍 요청을 감지하는 경우 발생하지 않습니다.

자동 측정, 자동 리소스 작성이 기능 페이지를 올바르게 작성하지 못하는 경우 에이전트 사용하여 수동으로 리소스 [작성을 수행 해야](#manual-instrumentation) API 합니다.

## 에이전트 API를 통해 수동으로 계측 [#manual-instrumentation]

페이지에 적절한 스크립트를 포함시켜 최종 사용자 모니터링을 수동으로 설정할 수 있습니다. 뉴렐릭 루비 에이전트의 API 사용하여 펼쳐보기를 생성하세요. API는 이 스크립트를 페이지에 삽입합니다.

예를 들어, 에이전트를 호출하도록 애플리케이션 템플릿을 수정하려면 다음을 사용하십시오.

```erb
<head>
    <%= ::NewRelic::Agent.browser_timing_header rescue "" %>
    # existing template code ...
</head>
```

## CSP 논스 지원 [#csp-nonce-support]

콘텐츠 보안 정책이 'unsafe-inline'으로 설정된 경우, 브라우저 에이전트를 자동으로 투입할 수 있습니다. [CSP Nonce를](https://content-security-policy.com/nonce/) 사용하려면 수동 설정을 추가해야 할 수도 있습니다.

### 레일스 CSP 논스 [#rails-csp-nonce]

[Rails 버전 5.2+에는](https://guides.rubyonrails.org/security.html#adding-a-nonce) API를 사용하여 CSP nonce를 설정하는 기능이 포함되어 있습니다. 루비 에이전트 버전 9.10.0+에서는 Rails CSP nonce가 자동으로 감지되어 라이브러리 에이전트에 적용됩니다.

`newrelic.yml` 를 다음과 같이 업데이트하여 이 기능을 비활성화할 수 있습니다.

```yaml
  browser_monitoring:
    content_security_policy_nonce: false
```

또는 환경 변수 `NEW_RELIC_BROWSER_MONITORING_CONTENT_SECURITY_POLICY=false` 를 설정하십시오.

### API 호출 [#api-call]

루비 에이전트 버전 7.1.0+에서는 CSP nonce를 `NewRelic::Agent.browser_timing_header` API 에 전달할 수 있습니다.

이 메서드에 nonce를 전달할 때 도구 모니터링 자동 측정, 자동 로그를 비활성화하고 에이전트 API 통해 수동 리소스를 사용해야 합니다.

`newrelic.yml` ) 업데이트하여:

```yaml
browser_monitoring:
  auto_instrument: false
```

또는 환경 변수 `NEW_RELIC_BROWSER_MONITORING_AUTO_INSTRUMENT=false` 를 설정하십시오.

이제 에이전트가 브라우저 계측에 nonce를 삽입할 수 있도록 API 메서드에 nonce를 인수로 전달할 수 있습니다. 예: `NewRelic::Agent.browser_timing_header(nonce)` .

## 문제점 해결 [#troubleshooting]

브라우저 데이터가 보고되지 않으면 HTML 소스를 보고 다음과 유사한 두 개의 스크립트 블록이 HTML 헤드에 있는지 확인하세요.

```html
<script type="text/javascript">window.NREUM||(NREUM={});...</script>
```

이러한 항목이 없으면 다음을 확인하세요.

* 자동 측정, 자동 로그 설정
* 템플릿 파일에 수동 계측 배치
* nonce를 적용하는 방식

## 자동 계측 비활성화 [#disable-instrumentation]

[`auto-instrument`](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#browser-monitoring) 의 기본값은 `true` 입니다(지정되지 않은 경우에도). 자동 측정, 자동 로그를 비활성화하려면 이 플래그를 `false` 로 설정하세요.

```yaml
browser_monitoring:
  auto_instrument: false
```

자동 측정을 비활성화하려면 특정 컨트롤러 또는 컨트롤러 작업에 대해서만 자동 로그를 사용하려면 [`newrelic_ignore_enduser`](/docs/agents/ruby-agent/installation-configuration/ignoring-specific-transactions#page-load-timing-rum) 사용하세요. 서버측 계측은 이 호출의 영향을 받지 않습니다.
