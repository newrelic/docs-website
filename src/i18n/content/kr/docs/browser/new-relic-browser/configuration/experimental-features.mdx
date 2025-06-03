---
title: 브라우저 모니터링의 실험적 기능
metaDescription: Opt-in to use experimental features in New Relic browser monitoring before they're generally available.
freshnessValidatedDate: never
translationType: machine
---

뉴렐릭 브라우저 기능은 안정성과 신뢰성을 보장하기 위해 점진적으로 출시됩니다. 하지만 GA 이전에도 일부 기능을 사용해 볼 수 있습니다. 이것을 실험적 기능이라고 합니다.

## 현재 실험 기능

뉴렐릭 브라우저에서는 다음과 같은 실험적 기능을 사용할 수 있습니다.

* 브라우저 에이전트 v1.272.0 - [네이티브 마크 및 측정값을 `BrowserPerformance` 이벤트로 자동 추적합니다](/docs/browser/new-relic-browser/browser-pro-features/marks-and-measures).
* 브라우저 에이전트 v1.276.0 - [페이지 리소스 자산을 `BrowserPerformance` 이벤트로 자동 관찰합니다](/docs/browser/new-relic-browser/browser-pro-features/page-resources).

<Callout variant="important">
  실험적 기능은 복사 및 붙여넣기나 에이전트의 NPM 구현을 통해 수동으로 선택하는 경우에만 사용할 수 있습니다. APM이 주입된 애플리케이션에 액세스하려면 지원 담당자에게 문의하세요. 실험적 기능은 변경될 수 있으므로 주의해서 사용해야 합니다.
</Callout>

## 실험적 기능을 사용하도록 수동으로 선택

### 브라우저 성능의 복사/붙여넣기 구현 - 마크, 측정 및 리소스

1. Pro 또는 Pro+Spa와 동등한 빌드에서 실험적 기능과 호환되는 Newrellic Browser Agent 버전을 사용하고 있는지 확인하세요.
2. 웹페이지 HTML 또는 JS에서 뉴렐릭 브라우저 에이전트 코드를 찾으세요.
3. `init` 설정 개체에 `performance` 기능 설정을 추가합니다. 다음은 마크와 측정값 감지를 모두 활성화하는 예입니다.

```js
<script type="text/javascript"> ;window.NREUM||(NREUM={});init={ …, performance: {
  capture_marks: true, // enable to capture browser performance marks (default false)
  capture_measures: true // enable to capture browser performance measures (default false)
  resources: {
    enabled: true, // enable to capture browser peformance resource timings (default false)
    asset_types: [], // Asset types to collect -- an empty array will collect all types (default []). See https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/initiatorType for the list of types.
    first_party_domains: [], // when included, will decorate any resource as a first party resource if matching (default [])
    ignore_newrelic: true // ignore capturing internal agent scripts and harvest calls (default true)
  }
} }:
```

4. 앱을 배포합니다.

### NPM 브라우저 성능 구현 - 마크, 측정 및 리소스

1. 실험 기능과 호환되는 뉴렐릭 브라우저 에이전트 버전을 사용하고 있는지 확인하세요.
2. 인력 구현에서 뉴렐릭 브라우저 에이전트 생성자를 찾으세요.
3. `init` 설정 개체에 `performance` 기능 설정을 추가합니다. 다음은 마크와 측정값 감지를 모두 활성화하는 예입니다.

```js
import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'

// Populate using values in copy-paste JavaScript snippet.
const options = {
  init: {
    // ... other configurations
    performance: {
      capture_marks: true, // enable to capture browser performance marks (default false)
      capture_measures: true // enable to capture browser performance measures (default false)
      resources: {
        enabled: true, // enable to capture browser peformance resource timings (default false)
        asset_types: [], // Asset types to collect -- an empty array will collect all types (default []). See https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/initiatorType for the list of types.
        first_party_domains: [], // when included, will decorate any resource as a first party resource if matching (default [])
        ignore_newrelic: true // ignore capturing internal agent scripts and harvest calls (default true)
      }
    }
   },
  info: { ... },
  loader_config: { ... } 
}

// The agent loader code executes immediately on instantiation.
new BrowserAgent(options)
```

NPM을 통해 에이전트를 구성하는 방법에 대한 자세한 내용은 [NPM 패키지 설명서를](https://www.npmjs.com/package/@newrelic/browser-agent) 참조하세요.

## APM 주입 애플리케이션에 참여하세요

APM이 제공하는 웹 애플리케이션은 지원 담당자에게 연락하거나, 지원 티켓을 제출하거나, `[Experimental Features]: `로 시작하는 제목으로 `browser-agent@newrelic.com` 에 이메일을 보내 실험적 기능을 선택할 수 있습니다.