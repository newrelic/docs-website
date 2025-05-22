---
title: Go의 쉬운 계측
tags:
  - Agents
  - Go agent
  - Installation
metaDescription: How to use a script to get code suggestions to instrument your Golang apps and services.
freshnessValidatedDate: '2024-08-20T00:00:00.000Z'
translationType: machine
---

<Callout title="시사">
  이 기능은 아직 개발 중이지만 꼭 사용해 보시기 바랍니다!

  이 기능은 현재 [출시 전 정책](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy) 에 따라 미리보기 프로그램의 일부로 제공됩니다.
</Callout>

Go는 불투명한 런타임을 갖춘 컴파일 언어이므로 다른 언어처럼 자동 계측을 지원할 수 없습니다. 이러한 이유로 뉴렐릭 Go 에이전트는 SDK로 설계되었습니다. Go 에이전트는 SDK이므로 자동 통계를 지원하는 언어의 에이전트보다 설정에 더 많은 수동 작업이 필요합니다.

계측을 보다 쉽게 하기 위해 Go 에이전트 팀은 현재 미리보기 단계에 있는 Go 간편 계측 도구를 만들었습니다. 이 도구는 뉴렐릭 Go 에이전트를 사용하여 소스 코드에 대한 변경 사항을 제안함으로써 대부분의 작업을 수행합니다.

시작하려면 [4분 분량의 영상을](https://asciinema.org/a/r0Il7o2eMiZaLKHIlew3IL2nx) 시청하거나 바로 [작동 원리 페이지](#how-it-works) 로 이동하세요.

## 미리보기 공지 [#preview-notice]

<CollapserGroup>
  <Collapser id="preview-usage-details" title="이 미리보기에서 기대할 수 있는 것">
    이 기능은 현재 제품 미리보기의 일부로 제공되며 당사의 뉴스렉릭 실험적 정책이 적용됩니다. 권장되는 코드 변경 사항은 제안일 뿐이며 정확성, 적용 가능성 및 사용자 환경에 대한 적합성을 확인하기 위해 사람이 검토해야 합니다. 이 기능은 민감한 데이터를 포함하지 않는 비중요한 비운영 환경에서만 사용해야 합니다.

    이 프로젝트와 코드, UX는 현재 진행 중이므로 변경될 가능성이 있습니다. 미리보기에 참여할 때 이 점을 고려해 주시기 바랍니다. 문제가 발생하면 [Github 이슈를](https://github.com/newrelic/go-easy-instrumentation) 사용하여 보고해 주시고, 이 도구를 개선할 수 있도록 이슈 템플릿을 최대한 많이 작성해 주세요.
  </Collapser>
</CollapserGroup>

## 작동 원리 [#how-it-works]

이 도구는 애플리케이션의 작동을 방해하지 않으며, 코드를 직접 변경하지 않습니다. 다음과 같은 일이 발생합니다.

* 이는 코드를 분석하고 Go 에이전트가 텔리메트리 데이터를 캡처할 수 있도록 변경 사항을 제안합니다.
* `.diff` 파일의 변경 사항을 검토하고 소스 코드에 추가할 변경 사항을 결정합니다.

분석의 일부로, 이 도구는 `go get` 또는 기타 Go 언어 툴체인 명령을 호출할 수 있으며, 이는 `go.mod` 파일을 수정할 수 있지만 실제 소스 코드는 수정할 수 없습니다.

<Callout variant="important">
  이 도구는 이미 뉴렐릭시스템이 있는지 감지할 수 없습니다. 이 도구는 다운로드 없이 다운로드에만 사용하시기 바랍니다.
</Callout>

## 측정된 것은 무엇인가? [#what-is-instrumented]

이 도구가 사용자의 추가에서 로그아웃할 수 있는 범위는 다음 작업으로 제한됩니다.

* 프로세서에 의해 래핑된 함수 또는 트레이스의 오류 캡처
* 트랜잭션을 사용하여 애플리케이션의 `main()` 메서드에서 호출되는 로컬로 정의된 함수 추적
* 비동기 세그먼트를 사용하여 비동기 함수 및 함수 리터럴 추적
* 추적을 위해 지원되는 라이브러리에 미들웨어 추가
* 외부 트래픽에 분산 추적 주입

### 지원 라이브러리 [#supported-libraries]

* 표준 라이브러리
* 넷/http
* gin
* gRPC

## 설치 [#go-easy-install]

아래 설치 단계를 시작하기 전에 현재 [Go 프로그래밍 언어 수명 주기](https://endoflife.date/go) 에 대한 지원 기간 내에 있는 Go 버전이 설치되어 있는지 확인하세요.

Go easy 계측 설치:

```sh
go install github.com/newrelic/go-easy-instrumentation@latest
```

<CollapserGroup>
  <Collapser id="setup-go-path" title="GOPATH 설정하기">
    `go-easy-instrumentation` 설치하려면 `GOPATH` bin이 `PATH` 에 있는지 확인하세요.

    <CollapserGroup>
      <Collapser id="unix-gopath" title="맥이나 리눅스">
        터미널, bashrc 또는 zshrc에서 다음 줄은 `GOPATH` bin 경로를 `PATH` 에 추가합니다.

        ```sh
        export PATH=$PATH:$(go env GOPATH)/bin
        ```
      </Collapser>

      <Collapser id="windows-gopath" title="윈도우">
        Windows 터미널이나 PowerShell 창에서 다음 줄은 `GOPATH` bin의 경로를 `PATH` 에 추가합니다.

        ```sh
        go env -w GOPATH=c:\go-work
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>
</CollapserGroup>

## 계측 제안 생성 [#generate-suggestions]

이 도구는 Git에서 가장 잘 작동합니다. 생성된 변경 사항을 적용하기 전에 애플리케이션이 스테이징되지 않은 변경 사항이 없는 브랜치에 있는지 확인하는 것이 좋습니다. 이를 확인한 후 다음 단계에 따라 뉴렐릭 Go 에이전트를 DB에 설치하는 변경 사항을 생성하고 적용합니다.

1. 다음 CLI 명령을 실행하여 작업 디렉토리에 `new-relic-instrumentation.diff` 이라는 이름의 파일을 만듭니다.
   ```sh
   go-easy-instrumentation instrument ../my-application/
   ```
2. `.diff` 파일을 열고 내용을 확인하거나 수정하세요.
3. 계측 제안에 만족하면 파일을 저장한 다음 변경 사항을 적용합니다.
   ```sh
   mv new-relic-instrumentation.diff ../my-application/
   cd ../my-application
   git apply new-relic-instrumentation.diff
   ```

변경 사항이 적용되면 뉴렐릭 Go 에이전트가 설치된 상태로 실행되어야 합니다. 에이전트 설치가 원하는 대로 작동하지 않는 경우, 일반적인 Git 명령을 사용하면 쉽게 복구할 수 있습니다. 예를 들어, 다음 중 하나를 시도해 볼 수 있습니다.

* 변경 사항을 저장하세요 `git stash`
* 코드를 이전 커밋으로 되돌리기

## 다음은 뭐지? [#what-is-next]

제안사항이 있거나 문제점을 발견하시면 [Github 이슈를](https://github.com/newrelic/go-easy-instrumentation) 만들어 주세요.