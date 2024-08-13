---
title: .NET OpenTracing에서 AWS Lambda 레이어로 마이그레이션 가이드
tags:
  - Agents
  - NET agent
  - Migration guides
metaDescription: This guide helps New Relic AWS Lambda Agent for .NET users migrate from NewRelic.OpenTracing.AmazonLambda.Tracer to AWS Lambda layers
freshnessValidatedDate: never
translationType: machine
---

이 가이드에서는 `NewRelic.OpenTracing.AmazonLambda.Tracer` 와 .NET 에이전트 Lambda 계층 간의 주요 변경 사항을 간략하게 설명합니다. 또한 업그레이드 시 사용 가능한 다양한 옵션과 .NET 에이전트 Lambda 계층을 사용하여 성공적으로 마이그레이션하는 방법에 대해 자세히 설명합니다.

<Callout variant="important">
  플러그인된 AWS Lambda 함수에 대한 지원은 .NET 에이전트 v10.24.0부터 시작됩니다.
</Callout>

이번 전환의 주요 변경 사항은 다음과 같습니다.

* `NewRelic.OpenTracing.AmazonLambda.Tracer` 패키지가 에이전트 측정과 충돌하므로 제거해야 합니다.
* OpenTracing용 AWS Lambda 함수에 대한 모든 코드 변경 사항을 되돌려야 합니다.
* 뉴렐릭.NET 에이전트는 AWS Lambda 함수를 디버깅하는 데 사용됩니다.
* AWS Lambda 레이어는 .NET 에이전트와 필수 뉴렐릭 Lambda 확장을 번들로 묶을 때 사용할 수 있습니다.
* 대부분의 경우 AWS Lambda 함수 계측은 자동으로 수행됩니다.
* .NET 에이전트는 AWS Lambda 함수에서 데이터를 전송하기 위해 뉴렐릭 Lambda 확장을 사용합니다.
* 레이어는 블루렐릭 Lambda CLI 도구, 서버리스 프레임워크 플러그인을 사용하거나 수동으로 구성할 수 있습니다.
* 함수가 포함된 방식이 근본적으로 변경되었기 때문에 지표 이름과 타이밍이 달라집니다.
* 이전 지표를 기반으로 하는 대시보드, 알림 또는 쿼리는 마이그레이션 후에 업데이트해야 합니다.

## NewRelic.OpenTracing.AmazonLambda.트레이서 및 OpenTracing 제거 [#remove]

.NET 에이전트를 사용하기 전에 `NewRelic.OpenTracing.AmazonLambda.Tracer` 패키지를 제거해야 하며 이를 지원하기 위해 AWS Lambda 함수에 적용된 모든 변경 사항을 실행 취소해야 합니다.

1. `NewRelic.OpenTracing.AmazonLambda.Tracer` 패키지를 설정하려면 원본 `FunctionHandler` 를 호출하는 새 `FunctionHandler` 를 생성하고 이를 래핑하여 계측을 활성화해야 합니다. `NewRelic.OpenTracing.AmazonLambda.Tracer` 을 제거하기 전에 해당 호출을 실행 취소하여 정리가 보다 원활하게 진행되도록 해야 합니다.
2. .NET 에이전트는 OpenTracing API를 사용하여 사용자 지정 데이터를 전달하는 것을 지원하지 않습니다. .NET 에이전트 API를 사용하려면 직접 또는 `NewRelic.OpenTracing.AmazonLambda.Tracer` 패키지를 통해 OpenTracing API 에 의존하는 코드에 대한 모든 변경 사항을 제거하거나 마이그레이션해야 합니다.
3. 프로젝트에서 `NewRelic.OpenTracing.AmazonLambda.Tracer` 패키지를 제거합니다. 제거와 관련된 남은 문제를 정리합니다.

## 레이어 설치 방법 선택 [#install]

`NewRelic.OpenTracing.AmazonLambda.Tracer` 패키지를 제거한 후 다음 단계는 .NET AWS Lambda 계층을 설치하고 구성하는 데 사용할 방법을 선택하는 것입니다. 위에서 언급했듯이 기본적으로 세 가지 옵션이 있습니다.

* 뉴렐릭 Lambda CLI
* 뉴렐릭 Serverless 프레임워크
* 완전 수동 설치

대부분의 설정을 자동화하므로 Lambda CLI 또는 Serverless 프레임워크 플러그인을 선택하는 것이 좋습니다. 각각은 고려해야 할 의존성/종속성과 요구 사항이 있으며, 그 중 일부는 다음 섹션에서 설명됩니다. 이러한 접근 방식 중 하나를 이미 사용하고 있다면 모든 AWS Lambda 함수에 동일한 접근 방식을 사용하여 작업을 단순하게 유지하는 것이 좋습니다.

AWS Lambda 모니터링에 대한 자세한 시작 지침 전체를 보려면 [활성화 가이드 를](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/enable-aws-lambda-monitoring/) 참조하세요.

## 뉴렐릭 Lambda CLI [#cli]

<Callout variant="important">
  .NET 에이전트 AWS Lambda 계층에 대한 지원은 Lambda CLI v0.9.2부터 시작됩니다.
</Callout>

Lambda CLI [퀵스타트에는](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/) .NET 에이전트 계층을 사용하도록 AWS Lambda 함수를 업데이트하는 명령의 예가 있습니다. 그러면 함수의 실행 시간이 자동으로 감지되고 적절한 레이어가 선택됩니다. [Lambda CLI 리포지터리](https://github.com/newrelic/newrelic-lambda-cli?tab=readme-ov-file#recommendations) 에서 추가 설정 옵션을 찾을 수 있습니다.

## 뉴렐릭 Serverless 프레임워크 [#serverless]

<Callout variant="important">
  .NET 에이전트 AWS Lambda 계층에 대한 지원은 Serverless 프레임워크 플러그인 v5.3.0부터 시작됩니다.
</Callout>

[Serverless 프레임워크 플러그인 퀵스타트에는](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/) 플러그인을 설치하고 Serverless 프레임워크 설정을 업데이트하는 데 필요한 단계가 있습니다. [Serverless 프레임워크 플러그인 리포지터리](https://github.com/newrelic/serverless-newrelic-lambda-layers) 에서 추가 설정 옵션을 찾을 수 있습니다.

## 완전 수동 설치 [#manual]

AWS Lambda 함수를 수동으로 작성하는 것을 권장하지는 않지만 [여기에서](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/#console) 이를 수행하는 데 필요한 단계에 대한 정보를 확인할 수 있습니다.

* .NET 에이전트는 대부분의 경우 수동으로 설치할 때 AWS Lambda 함수를 자동으로 다운로드합니다.
* 데이터를 전송하려면 뉴렐릭 Lambda 확장이 여전히 필요합니다.
