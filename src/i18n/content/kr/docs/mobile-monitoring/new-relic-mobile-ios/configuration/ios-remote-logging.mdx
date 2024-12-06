---
title: iOS 에이전트로 로깅
tags:
  - Mobile logging
  - New Relic Mobile iOS
metaDescription: Suggestions for setting up the logging in your app with the New Relic agent
freshnessValidatedDate: never
translationType: machine
---

프로젝트 전체에 걸쳐 일관되고 포괄적인 로깅을 보장하기 위해 iOS 에이전트는 로깅 API를 제공합니다. 에이전트의 로깅 API 사용하여 모바일 앱 로그를 뉴렐릭으로 보내세요. 이렇게 하면 분석을 위해 로그를 한곳에 모아둘 수 있습니다. 자세한 내용은 [모바일 로깅 API를](/docs/mobile-monitoring/mobile-monitoring-ui/mobile-logs/#ios) 참조하세요.

## 로그 레벨 구성

에이전트 및 원격 로깅을 위해 iOS 에이전트 로그 레벨을 구성할 수 있습니다.

### 에이전트 로그 레벨

에이전트 로그 레벨은 뉴렐릭 에이전트에서 구성되며 어떤 로그 메시지가 장치 콘솔에 기록되는지 결정합니다. 여기에는 뉴렐릭 에이전트 로그도 포함됩니다. 모든 뉴렐릭 에이전트 로그를 보려면 로그 레벨을 `NRLogLevelDebug` 으로 설정하세요.

### 원격 로그 레벨

뉴렐릭 플랫폼에서는 원격 로그인 레벨이 기기에서 뉴렐릭으로 전송되는 로그의 자세한 정도를 제어합니다. 이를 통해 데이터 볼륨을 관리하고 관련 정보에 집중할 수 있습니다.

**설정**: 뉴렐릭 대시보드의 <DNT>**Application**</DNT> 탭에서 원격 로그인 레벨을 설정할 수 있습니다. 원격 로그인 레벨 설정에 대한 자세한 내용은 [모바일 로그인을](/docs/mobile-monitoring/mobile-monitoring-ui/mobile-logs) 참고하세요.

## 자동 로그 수집

뉴렐릭 플랫폼에서 원격 로깅이 활성화되면 iOS 에이전트는 앱에서 `stdout` 및 `stderr` 에 작성된 모든 로그를 수집합니다. `NSLog()`, 스위프트 `print()` 및 기타 인쇄 패밀리 기능에 대한 모든 호출을 캡처합니다. 이 방법으로 수집된 로그는 `NRLogLevelInfo` 로 설정됩니다. 이 기능은 기본적으로 비활성화되어 있습니다. 이를 활성화하려면 `NRFeatureFlag_AutoCollectLogs` 기능 플래그를 사용하세요.

에이전트는 `'\n\n'` 구분 기호를 사용하여 로그 메시지를 구분합니다. 타임스탬프는 애플리케이션이 로그를 작성한 시점이 아니라 에이전트가 로그를 수집한 시점을 반영합니다. 에이전트가 로그 메시지를 수집하기 전에 버퍼링했기 때문에 밀리초 차이가 발생할 수 있습니다.

<Callout variant="important">
  이 기능은 Xcode의 내장 콘솔과 충돌하므로 디버거가 연결되어 있는 동안에는 활성화할 수 없습니다.
</Callout>