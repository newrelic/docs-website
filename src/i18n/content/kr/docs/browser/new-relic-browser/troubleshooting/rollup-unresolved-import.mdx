---
title: 해결되지 않은 가져오기 롤업
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: 'If you use rollup to bundle your project and get an UNRESOLVED_IMPORT error, you may need to update your dependencies.'
freshnessValidatedDate: never
translationType: machine
---

## 문제

번들링을 위해 롤업을 사용하는 프로젝트에서 브라우저 에이전트 NPM 패키지를 사용하여 프로젝트를 빌드하는 동안 `UNRESOLVED_IMPORT` 오류가 발생합니다.

## 해결책

`node-resolve` [플러그인을](https://www.npmjs.com/package/@rollup/plugin-node-resolve) 사용하려면 롤업 설정을 업데이트하세요. 이 플러그인을 이미 사용하고 있다면 플러그인을 최소 버전 `15.2.1` 으로 업데이트하세요.

### 스텐실 프로젝트

프로젝트에서 스텐실 프레임워크를 사용하는 경우 `node-resolve` 플러그인 버전을 재정의할 수 없습니다. 프로젝트에서 아래 나열된 해결 방법을 사용하고 스텐실 github 저장소에서 [이](https://github.com/ionic-team/stencil/issues/3605) 문제를 모니터링하세요.

## 대체 해결 방법

`node-resolve` 플러그인을 업데이트할 수 없거나 재정의할 수 없는 플러그인을 번들로 제공하는 프레임워크를 사용하는 경우 브라우저 에이전트 가져오기 문을 변경해야 합니다.

```js
// Instead of importing the browser agent like this
import { MicroAgent } from "@newrelic/browser-agent/loaders/micro-agent";

// Import like this
import { MicroAgent } from "@newrelic/browser-agent/src/loaders/micro-agent";
```

`src` 디렉터리에는 ES2019+ 코드가 포함되어 있습니다. 이 코드에 변환을 적용할 수 없고 이전 브라우저를 지원해야 하는 경우 브라우저 에이전트 NPM 패키지를 버전 1.252.0으로 업그레이드하고 아래 import 문을 사용하세요.

```js
import { MicroAgent } from "@newrelic/browser-agent/dist/esm/loaders/micro-agent";
```

`dist` 디렉토리의 내용은 [브라우저 지원 설명을](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring/#browser-types) 따릅니다.
