---
title: Nerdpack 만들기
metaDescription: Create a Nerdpack
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  이 강의는 처음부터 New Relic 제작 방법을 가르치는 과정의 일부입니다. 아직 확인하지 않았다면 개요를 확인하세요.

  과정의 각 단원은 마지막 단원을 기반으로 하므로 이 단원을 시작하기 전에 마지막 단원인 New Relic One CLI 설치 및 구성을 완료했는지 확인하세요.
</Callout>

Nerdpack은 New Relic 피규어 또는 시각화를 구성하는 모든 파일이 포함된 패키지입니다. Nerdpack에는 메타데이터, Nerdlet, 자산 등에 대한 파일이 포함되어 있습니다. Nerdpack을 생성하려면 New Relic One CLI를 사용하세요:

```bash
nr1 create --type nerdpack
```

구성 요소 이름에 대해 `nr1` 을 적용할 때 "ab-test"를 사용하고 도구가 Nerdpack의 기반을 만드는 것을 지켜보세요. 완료되면 생성된 파일을 탐색하세요.

## 용도 [#root]

루트 수준에는 `ab-test` 이라는 디렉터리가 있습니다. 이 디렉토리 내부의 모든 것은 Nerdpack의 일부입니다:

```bash
ls ab-test
[output] README.md         {blue}nerdlets{plain}          nr1.json          package.json
[output] {blue}launchers         node_modules{plain}      package-lock.json
```

`Readme.md` Nerdpack 요소를 생성하고 애플리케이션을 로컬로 제공하기 위한 지침을 제공합니다. 명령줄 도구를 사용하여 Nerdpack과 상호작용하는 방법을 잊어버린 경우 이 기능과 `nr1 --help` 유용합니다.

### 자바스크립트 파일 [#javascript]

`package.json`, `package-lock.json` 및 _node_modules는_ JavaScript 애플리케이션을 실행하는 데 중요하지만 Nerdpacks에만 있는 것은 아닙니다. 조정이 필요한 경우 JavaScript 과정에서 이러한 모듈에 대해 배울 수 있습니다. 지금은 이 디렉토리에서 가장 관련성이 높은 파일 중 하나인 `nr1.json` 살펴보세요.

### 메타데이터 파일 [#metadata]

`nr1.json` 스키마 유형, 고유 식별자, 표시 이름 및 설명이 포함된 Nerdpack의 메타데이터 파일입니다. A/B 테스트 실행 및 분석을 위한 New Relic 군대를 구축하고 있으므로 패키지의 `displayName` "A/B 테스트"로 업데이트하고 설명을 "New Relic One을 사용하여 A/B 테스트"로 설정합니다.

```json
fileName=nr1.json
{
    "schemaType": "NERDPACK",
    "id": "311bcd0c-f7eb-4285-afed-4219179bf91d",
    "displayName": "A/B Test",
    "description": "A/B test your application using New Relic One."
}
```

특히 다른 사람이 사용할 수 있도록 애플리케이션을 게시하려는 경우에는 애플리케이션의 목적을 설명하는 것이 좋습니다.

다음으로 `launchers` 및 `nerdlets` 하위 디렉터리를 살펴보세요.

## 발사대 [#launchers]

`launchers` New Relic 제작을 위한 여러 개의 런처를 생성할 수 있기 때문에 디렉토리입니다. `nr1 create` Nerdpack용 실행기를 하나만 만들고 'ab-test-launcher'라고 불렀습니다. 해당 디렉토리 안에는 두 개의 파일이 있습니다:

* `icon.png` 애플리케이션을 나타내는 이미지입니다.
* `nr1.json` 런처의 메타데이터 파일입니다

실행기의 `displayName` 에는 "A/B 테스트 실행기"를 사용하고 _nr1.json_ 의 `description` 에는 "A/B 테스트 Nerdlet 열기"를 사용합니다.

```json
fileName=launchers/ab-test-launcher/nr1.json
{
    "schemaType": "LAUNCHER",
    "id": "ab-test-launcher",
    "displayName": "A/B Test Launcher",
    "description": "Open the A/B test Nerdlet",
    "rootNerdletId": "ab-test-nerdlet"
}
```

런처에는 `rootNerdletId` 이 있습니다. 이는 선택 시 실행 프로그램이 열리는 Nerdlet을 식별합니다. 이 Nerdpack에는 `ab-test-nerdlet` 이라는 Nerdlet이 하나만 있지만 일부 Nerdpack에는 여러 개가 있을 수 있습니다. 실행 프로그램을 열려는 Nerdlet에 `rootNerdletId` 를 설정했는지 확인하세요.

## 너들렛 [#nerdlets]

`nerdlets` 디렉토리에는 New Relic 피규어를 구성하는 모든 Nerdlet이 포함되어 있습니다. `ab-test-nerdlet` 은(는) 이 Nerdpack의 유일한 Nerdlet이므로 하위 디렉토리가 하나만 있습니다. `nerdlets/ab-test-nerdlet` 에는 다음 세 개의 파일이 있습니다.

* `index.js` Nerdlet 구성 요소가 포함된 JavaScript 파일입니다.
* `styles.scss` Nerdlet을 위한 Sass 스타일시트를 보유하고 있습니다.
* `nr1.json` Nerdlet의 메타데이터가 포함되어 있습니다.

Nerdlet의 `displayName` "A/B 테스트"로 업데이트하고 `description` "A/B 테스트 결과 제어 및 보기"로 업데이트합니다.

```json fileName=nerdlets/ab-test-nerdlet/nr1.json
{
    "schemaType": "NERDLET",
    "id": "ab-test-nerdlet",
    "displayName": "A/B Test",
    "description": "Control and view results of your A/B test"
}
```

이제 유용한 표시 이름과 설명을 사용하여 Nerdpack, Nerdlet 및 실행 프로그램을 사용자 정의했습니다. 하지만 애플리케이션이 실제로 수행하는 작업은 무엇입니까? 기본 Nerdlet의 모양을 보려면 `index.js` 확인하세요.

```js fileName=nerdlets/ab-test-nerdlet/index.js
import React from 'react';

export default class AbTestNerdletNerdlet extends React.Component {
    render() {
        return <h1>Hello, ab-test-nerdlet Nerdlet!</h1>;
    }
}
```

여기에는 `nr1` (가) 귀하를 위해 생성한 `AbTestNerdletNerdlet` 이 있습니다. 첫 번째 수준의 환영 제목을 렌더링하는 React 구성 요소입니다. 이것이 런처의 `nr1.json` 파일에 지정된 루트 Nerdlet이기 때문에 New Relic 플랫폼에서 런처를 클릭하면 런처가 이 제목을 표시하는 보기를 엽니다.

<Callout variant="tip">
  이 강의에서는 `nr1 create` 사용하여 런처와 Nerdlet이 포함된 Nerdpack을 만들었습니다. Nerdpack에 다른 Nerdlet 또는 Launcher를 생성하려면 `nr1 create` 사용하여 수행할 수도 있습니다.

  ```sh
  nr1 create --type nerdlet
  nr1 create --type launcher
  ```

  `--type` 플래그를 건너뛰고 목록에서 옵션을 선택할 수도 있습니다.

  ```sh
  nr1 create
  [output] {green}?{plain} What kind of component do you want to create? {muted}› - Use arrow-keys. Return to submit.
  [output]     nerdpack
  [output] {green}❯   nerdlet{muted} - create a/an Nerdlet Nerdpack item inside your Nerdpack.
  [output]     launcher
  [output]     catalog
  [output]     visualization
  ```
</Callout>

다음 강의에서는 Nerdpack을 로컬로 제공하는 방법과 앱이 실제로 작동하는 모습을 살펴보겠습니다.

<Callout variant="tip">
  이 강의는 처음부터 New Relic 제작 방법을 가르치는 과정의 일부입니다. 다음 단원으로 계속 진행하세요: Serve your New Relic 제작.
</Callout>
