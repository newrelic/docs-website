---
title: Docker용 Node.js 에이전트 설치
tags:
  - Agents
  - Nodejs agent
  - Installation and configuration
metaDescription: How to use New Relic's Node.js agent to instrument Node.js applications deployed in Docker containers.
freshnessValidatedDate: never
translationType: machine
---

Node.js 에이전트를 사용하여 docker 컨테이너에서 Node.js 기능 구현, 배포할 수 있습니다. 이 문서에서는 뉴렐릭으로 제공한 Dockerized Node.js를 빌드, 구성, 구현, 배포하는 방법을 설명합니다.

Node.js 에이전트 설치에 대한 일반적인 도움이 필요한 경우 [기본 설치 지침을](/docs/apm/agents/nodejs-agent/installation-configuration/install-nodejs-agent) 참조하세요.

## 컨테이너 계측 [#instrument]

<Callout variant="caution">
  Dockerfile 또는 Docker 이미지에 라이선스 키를 포함하지 마세요. 자세한 내용 [은 라이선스 키 보안에 대한 설명서를](/docs/accounts/install-new-relic/account-setup/license-key#license-key-security) 참조하십시오.
</Callout>

몇 가지 설정을 변경하고 기존 Dockerfile에 뉴렐릭 환경 변수를 추가하면 Node.js 에이전트를 사용하여 Docker화된 앱을 로그아웃할 수 있습니다.

1. `package.json` 에 `newrelic` 추가:

   ```json
   "newrelic": "latest",
   ```

   `latest` 값을 업데이트하여 특정 버전을 설치하거나 [`package.json` 형식](https://docs.npmjs.com/files/package.json#dependencies) 에서 제공하는 다른 옵션을 사용할 수 있습니다. 이전 에이전트 버전에 대한 정보는 [Node.js 에이전트 릴리스 노트를](/docs/release-notes/agent-release-notes/nodejs-release-notes) 확인하세요.

2. `node` 시작 명령에 에이전트를 삽입하여 앱을 제작하세요. 컨테이너 설정을 사용하면 노드 명령이 호출될 때 Node.js `-r`/`--require` 플래그를 사용하여 `ENTRYPOINT` 을 편집하여 먼저 `newrelic` 모듈을 포함할 수 있습니다. Dockerfile에 다음 시작 명령이 포함되어 있는 경우 다음과 같이 변경할 수 있습니다.

   * `node YOUR_PROGRAM.js` 을(를)로 변경 `node -r newrelic YOUR_PROGRAM.js`
   * `ENTRYPOINT ['node', 'YOUR_PROGRAM.js']` 을(를)로 변경 `ENTRYPOINT ['node', '-r', 'newrelic', 'YOUR_PROGRAM.js']`
   * `CMD ['node', 'YOUR_PROGRAM.js']` 을(를)로 변경 `CMD ['node', '-r', 'newrelic', 'YOUR_PROGRAM.js']`
   * `npm start` 와 같은 프로그램을 실행하기 위한 npm 스크립트가 있는 경우 `npm pkg set scripts.start="node -r newrelic your-program.js"` 실행하여 이 스크립트를 프로그래밍 방식으로 수정할 수 있습니다.
   * 프로그램 실행 방식을 제어할 수 없는 경우, `require('newrelic')` 입력 파일 맨 위에 추가하여 프로그램의 다른 모듈보다 먼저 `newrelic` 모듈을 로드할 수 있습니다.

3. 평소와 같이 Docker 이미지를 빌드합니다.

4. 에이전트가 활성화된 상태로 docker 앱을 실행하려면 <InlinePopover type="licenseKey" />및 [앱 이름을](/docs/agents/manage-apm-agents/app-naming/name-your-application) 환경 변수로 `docker run` 명령에 추가하세요.

   ```bash
   docker run -e NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY \
           -e NEW_RELIC_APP_NAME="YOUR_APP_NAME" \
           YOUR_IMAGE_NAME:latest
   ```

<InstallFeedback />

## 기타 구성 옵션 [#configure]

<Callout variant="important">
  Node.js 에이전트가 [v7.2.0](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-7-2-0) 보다 이전 버전인 경우 구성 파일 없이 에이전트를 실행할 수 있도록 Dockerfile에 환경 변수 `NEW_RELIC_NO_CONFIG_FILE=true` 를 추가해야 합니다. 구성 설정 및 우선 순위에 대한 자세한 내용은 [여기에서](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/) 확인할 수 있습니다.

  Node.js 에이전트가 [v8.3.0](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-8-3-0) 보다 이전 버전이고 [분산 추적을](/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing) 사용하려면 환경 변수 `NEW_RELIC_DISTRIBUTED_TRACING_ENABLED` 를 `true` 로 설정하여 분산 추적을 활성화해야 합니다.
</Callout>

애플리케이션 이름이나 라이선스 키를 설정하는 것 외에도 `-e` 옵션으로 컨테이너를 시작하여 [다른 구성 옵션을](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration) 설정할 수 있습니다. 또한 다음을 수행할 수 있습니다.

* 아래 스니펫과 같이 환경 변수(`NEW_RELIC_NAME_OF_FEATURE_FLAG_ENABLED`)를 사용하여 기능 플래그를 활성화합니다. 여기서 `NAME_OF_FEATURE_FLAG` 대문자로 시작하는 기능 플래그 이름으로 바꿉니다.

  ```bash
  docker run -e NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY \
          -e NEW_RELIC_APP_NAME="YOUR_APP_NAME" \
          -e NEW_RELIC_NAME_OF_FEATURE_FLAG_ENABLED=true \
          YOUR_IMAGE_NAME:latest
  ```

* `ENV` 지시문을 사용하여 Dockerfile에서 구성 옵션을 설정합니다.

  ```dockerfile
  ENV NEW_RELIC_NAME_OF_FEATURE_FLAG_ENABLED=true \
      NEW_RELIC_LOG=stdout
      # etc.
  ```