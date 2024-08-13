---
title: 브라우저 에이전트 데이터 난독화
tags:
  - Browser monitoring
  - Obfuscation
metaDescription: You can configure the browser agent to obfuscate the data it sends.
freshnessValidatedDate: '2023-10-24T00:00:00.000Z'
translationType: machine
---

<Callout variant="important">
  이 기능은 현재 복사/붙여넣기 또는 NPM 브라우저 설치 방법을 사용하는 사용자에게 제공됩니다. 현재 사용 가능한 UI 또는 NerdGraph 구성 옵션이 없습니다. 우리는 이러한 구성 옵션과 기타 구성 옵션에 대한 액세스를 개선하기 위해 지속적으로 노력하고 있습니다.
</Callout>

New Relic은 애플리케이션의 공개 구조에서 민감한 정보를 사용하지 않는 것을 권장하지만, 이것이 항상 가능한 것은 아니라는 것도 알고 있습니다. 전송하는 모든 페이로드의 데이터를 선택적으로 난독화하도록 브라우저 에이전트를 구성할 수 있습니다. 이는 탐색 경로, 오류 메시지 등과 같이 에이전트가 캡처하는 위치에서 애플리케이션이 민감한 데이터를 사용하는 경우 유용할 수 있습니다.

## 작동 원리 [#how-it-works]

브라우저 에이전트 [버전 1216](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes) 이상에서는 나가는 수집 페이로드에 난독화 규칙을 적용할 수 있습니다.

이러한 규칙을 설정하려면 다음 브라우저 에이전트 속성을 구성해야 합니다.

* `init.obfuscate` 속성에는 전송하기 전에 각 수확을 수정하는 데 사용되는 선택기 및 교체 배열이 포함되어 있습니다.

  * 난독화에는 현재 복사/붙여넣기 또는 NPM 설치 방법을 사용해야 하므로 JavaScript 구성 섹션을 수동으로 편집하고 난독화 조건을 포함하도록 `obfuscate` 배열을 설정해야 합니다.

### 권장 사항

이 속성을 구성할 때 다음을 권장합니다.

* 난독화가 필요한 항목만 난독화하려면 의도적인 정규식 패턴을 사용하세요.

  * 불필요하게 난독화하면 데이터를 그룹화할 때 세분성이 떨어지고 에이전트가 캡처한 내용을 소화하는 능력이 떨어지는 등의 부작용이 있을 수 있습니다.

* 민감한 데이터를 어떤 데이터가 수정되었는지 나타내는 중립적이고 일반적인 용어로 바꾸세요.

  * 예: `/account-id/g` --> `ACCOUNT_ID`

### 복사/붙여넣기 설치 [#copy-paste]

복사/붙여넣기 설치 방법을 사용하는 경우 에이전트 로더 전에 브라우저 JavaScript 구성에 다음 구성을 추가하세요.

```js
window.NREUM.init = {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: <RegExp | string>
        replacement: <string>
      },
      ...<other obfuscation rules>...
    ]
}
```

### NPM 설치 [#npm]

NPM 브라우저 설치 방법을 사용하는 경우 브라우저 에이전트를 초기화할 때 다음 구성을 추가하세요.

```js
new BrowserAgent({ 
  init: {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: <RegExp | string>
        replacement: <string>
      },
      ...<other obfuscation rules>...
    ]
  }
})
```

### 예

```js
window.NREUM.init = {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: /user-id/g,
        replacement: 'USER_ID'
      },
    ]
}
```

```js
new BrowserAgent({ 
  init: {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: /account-id/g,
        replacement: 'ACCOUNT_ID'
      },
    ]
  }
})
```
