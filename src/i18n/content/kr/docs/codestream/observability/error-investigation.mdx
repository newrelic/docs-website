---
title: 오류 조사
metaDescription: Investigating errors using CodeStream.
freshnessValidatedDate: '2024-12-11T00:00:00.000Z'
translationType: machine
---

CodeStream은 사용자에게 할당된 오류와 IDE에서 열린 코드에서 발생한 최근 오류를 포함하여 모든 APM 또는 브라우저 모니터링 서비스에 대한 오류를 표시합니다. 이 섹션의 제목에 있는 드롭다운 메뉴 목록을 통해 기간을 제어할 수 있습니다. 이 목록은 New Relic의 [큼스 인박스(errors inbox)](/docs/errors-inbox/errors-inbox/) 에 표시된 오류의 하위 집합일 수 있습니다.

<img
  title="The list of recent errors in CodeStream."
  alt="A screenshot of the list of recent errors in CodeStream."
  src="/images/codestream_screenshot-crop_errors-list.webp"
/>

오류를 클릭하면 근본 원인을 파헤치고 조사에 팀원과 협력할 수 있습니다.

<Video
  type="wistia"
  id="l65l4cqqhd"
/>

스택 추적에서 아무 프레임이나 클릭하면 해당 파일과 줄 번호로 바로 이동합니다. [git 참조를 오류와 연결하는](#buildsha) 경우 CodeStream은 환경에서 오류를 발생시킨 파일의 읽기 전용 편집기 탭을 엽니다. git 참조를 연결하지 않으면 파일의 로컬 버전이 대신 열립니다. 저장소(예: 외부 라이브러리)의 일부가 아닌 코드를 나타내는 스택 추적 프레임은 클릭할 수 없습니다.

브라우저 모니터링 서비스 오류의 경우 스택 추적이 축소 해제되어 각 프레임의 코드로 이동할 수 있도록 [소스 맵을 업로드](/docs/browser/browser-monitoring/browser-pro-features/upload-source-maps-un-minify-js-errors/) 해야 합니다.

스택 추적을 탐색하면서 문제의 원인으로 보이는 코드를 찾고 댓글 버튼으로 토론을 시작할 수 있습니다. CodeStream은 해당 코드를 가장 최근에 터치한 사람을 자동으로 언급하므로 올바른 사람을 토론에 쉽게 참여시킬 수 있습니다.

<img
  title="A comment with the most recent code contributor automatically mentioned."
  alt="A screenshot of a comment with the most recent code contributor automatically mentioned."
  src="/images/codestream_screenshot-crop_error-auto-mention.webp"
/>

문제를 식별하면 오류를 할당하거나 오류 상태를 `unresolved` 에서 `resolved` 또는 `ignored` 로 업데이트할 수 있습니다.

## 오류 받은편지함에서 시작 [#errors-inbox]

[논스 인박스(errors inbox)](/docs/errors-inbox/errors-inbox/) 의 오류에서 직접 이와 동일한 오류 경험을 할 수 있습니다 New Relic. 스택 추적으로 오류를 볼 때 <DNT>**Open in IDE**</DNT> 클릭하여 IDE의 코드로 직접 이동하세요.

<img
  title="A stack trace error in errors inbox with the &quot;Open in IDE button"
  alt="A screenshot of a stack trace error in errors inbox with the &quot;Open in IDE button.&quot;"
  src="/images/codestream_screenshot-crop_open-in-ide-codestream.webp"
/>

또한 CodeStream과 오류 받은 편지함 간에 토론이 동기화되어 있으므로 어느 위치에서든 참여할 수 있습니다.

### 빌드 SHA 또는 릴리스 태그를 오류와 연결 [#buildsha]

CodeStream에서 오류를 볼 때 git 참조가 없으면 오류와 관련된 빌드 SHA 또는 릴리스 태그가 표시될 수 있습니다. CodeStream은 git 참조를 사용하여 특정 스택 추적 오류를 오류를 트리거한 환경에서 실행 중인 코드 버전과 일치시킵니다. 오류를 조사하기 위해 구성된 git 참조가 필요하지 않지만 오류를 발생시킨 코드 버전을 확인하지 않을 수도 있다는 점을 명심하세요.

<img
  title="The git reference not configured warning message."
  alt="A screenshot of the git reference not configured warning message."
  src="/images/codestream_screenshot-crop_build-sha-not-configured.webp"
/>

환경 변수를 사용하여 New Relic <InlinePopover type="apm"/>에이전트가 프로젝트의 각 빌드와 관련된 [커밋 샤를](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection) 알 수 있도록 할 수 있습니다. 실행 중인 소프트웨어 버전과 관련된 [릴리스 태그를](https://git-scm.com/book/en/v2/Git-Basics-Tagging) 사용할 수도 있습니다.

APM의 경우 커밋 샤 및/또는 릴리스 태그(`tags.commit` 및 `tags.releaseTag`)가 `Transaction` 및 `TransactionError` 이벤트에 속성으로 추가됩니다. APM 환경 변수를 사용하여 이러한 속성을 설정할 수 있습니다. 빌드 파이프라인의 일부로 다음 변수 중 하나 또는 둘 다를 설정하는 것이 좋습니다.

* `NEW_RELIC_METADATA_COMMIT`: 커밋 샤. 전체 내용을 포함하거나 처음 7자만 포함할 수 있습니다(예: `734713b`).
* `NEW_RELIC_METADATA_RELEASE_TAG`: 릴리스 태그(예: `v0.1.209` 또는 `release-209`)입니다. 이는 사람이 읽을 수 있다는 장점이 있습니다.

이러한 변수를 설정하는 방법에 대한 자세한 내용은 각 언어에 대한 특정 구성 세부정보입니다.

* [가다](/docs/agents/go-agent/configuration/go-agent-configuration/)
* [자바](/docs/agents/java-agent/configuration/java-agent-configuration-config-file/)
* [.그물](/docs/agents/net-agent/configuration/net-agent-configuration/)
* [노드.js](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/)
* [PHP](/docs/agents/php-agent/configuration/php-agent-configuration/)
* [파이썬](/docs/agents/python-agent/configuration/python-agent-configuration/)

git 참조를 구성한 경우 CodeStream은 로컬에 있는 코드 버전에 오류와 관련된 참조가 포함되어 있지 않은지 알려줍니다. 이 경우 오류를 보다 효과적으로 조사하고 해결할 수 있도록 해당 참조가 포함된 코드 버전을 확인해야 할 수 있습니다.

<img
  title="The git reference not found warning message."
  alt="A screenshot of the git reference not found warning message."
  src="/images/codestream_screenshot-crop_build-sha-not-found.webp"
/>

CodeStream은 오류에 연결된 스택 추적이 없는 경우에도 알려줍니다. 이것은 스택 추적이 New Relic에서 만료되었을 때 오래된 오류에서 발생합니다.
