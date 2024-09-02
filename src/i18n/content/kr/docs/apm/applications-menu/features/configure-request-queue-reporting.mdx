---
title: 요청 대기열 보고 구성
tags:
  - APM
  - APM UI pages
  - Features
metaDescription: How to configure the APM agent to report request queue timing.
freshnessValidatedDate: never
translationType: machine
---

[요청 대기열은](/docs/apm/applications-menu/features/request-queuing-tracking-frontend-time) 요청이 애플리케이션(에이전트가 상주하는 곳)에 도달하기 전에 발생합니다. 그렇기 때문에 이 기능을 활용하려면 에이전트와 프로덕션 호스트에 대해 몇 가지 간단한 구성을 수행해야 합니다.

## HTTP 헤더

요청 대기열을 보고하기 위해 대부분의 New Relic 에이전트는 프런트엔드 웹 [서버](/docs/features/request-queue-server-configuration-examples) (예: Apache 또는 Nginx) 또는 로드 밸런서(예: HAProxy 또는 F5)에서 설정한 HTTP 헤더에 의존합니다. 요청이 프로덕션 인프라에 처음 들어간 시간을 나타내는 HTTP 헤더의 타임스탬프를 설정하도록 이러한 프런트엔드 서버를 구성할 수 있습니다.

<Callout variant="tip">
  헤더가 설정되기 전에 발생하는 인프라의 성능 문제를 놓칠 가능성을 줄이려면 요청이 인프라에 들어간 즉시 이 헤더를 설정하십시오.
</Callout>

대부분의 New Relic 에이전트는 `X-Queue-Start` 또는 `X-Request-Start` 헤더를 해석하고 이를 사용하여 요청 대기열을 계산합니다. 에이전트는 이러한 헤더를 동일하게 취급합니다. `t=MICROSECONDS_SINCE_EPOCH` 형식의 값을 포함합니다. 여기서 `MICROSECONDS_SINCE_EPOCH` 은 Unix epoch의 시작(예: 1970년 1월 1일) 이후 경과된 마이크로초 수의 정수 값입니다.

거의 모든 프런트엔드 HTTP 서버 또는 로드 밸런서가 이 헤더를 추가하도록 구성할 수 있습니다. 추가 세부 정보는 특정 에이전트 및 서버 구성에 따라 다릅니다. 자세한 내용은 [요청 대기열 구성 예 를](/docs/apm/applications-menu/features/request-queue-server-configuration-examples)참조하십시오.

## 에이전트 이동 [#go]

Go 에이전트를 사용하여 메트릭을 기록하도록 헤더 중 하나를 설정합니다.

## Java, Node.js, Python, Ruby 에이전트 [#most-agents]

최신 버전의 Java, Node.js, Python 및 Ruby 에이전트는 `X-Request-Start` 또는 `X-Queue-Start` 헤더 형식에 더 많은 유연성을 제공합니다. 이러한 에이전트를 사용하면 타임스탬프를 정수 또는 부동 소수점 값으로 초, 밀리초 또는 마이크로초 단위로 제출할 수 있습니다. 이러한 에이전트를 사용하면 헤더 값의 선행 `t=` 를 생략할 수도 있습니다.

크기 순서에 따라 이러한 에이전트는 시간 단위를 초, 밀리초 또는 마이크로초로 자동 해석합니다. New Relic은 마이크로초로 해석되는 밀리초 타임스탬프로 인해 40년 이상의 대기열 시간이 발생하므로 이를 안정적으로 수행할 수 있습니다.

<DNT>**Python agent only:**</DNT> Apache/mod_wsgi 3.4 이상을 사용하는 경우 mod_wsgi는 각 요청에 대해 WSGI Environ 사전에 `X-Queue-Start` 헤더에 해당하는 항목을 자동으로 삽입합니다. 이는 Apache가 처음으로 요청을 수락한 특정 시점을 표시합니다. 웹 서버의 프런트엔드 또는 Apache 자체에 별도의 `X-Request-Start` 또는 `X-Queue-Start` 헤더가 수동으로 구성되지 않은 경우 mod_wsgi에서 설정한 값이 Python 에이전트에서 선택되어 사용됩니다.

## .NET 에이전트 [#net]

.NET 에이전트는 대기열 시간을 계산하기 위해 HTTP 헤더 구성을 요구하지 않으며 무시합니다. IIS 대기열 메커니즘을 직접 계측하여 작동하고 대기열 시간을 `HttpContext` 생성자가 실행되는 시점과 `HttpApplication.BeginRequest` 이벤트가 실행되는 시점 간의 차이로 보고합니다.

요청 대기열 시간은 IIS에서 호스팅되는 .NET Framework 응용 프로그램(예: ASP.NET 응용 프로그램)에 대해서만 보고됩니다. ASP .NET Core 애플리케이션(.NET Core 또는 Framework를 대상으로 함)이나 자체 호스팅 OWIN 애플리케이션에 대해서는 보고 **되지 않습니다** .

## PHP 에이전트 [#php]

PHP 에이전트는 `X-Request-Start` 헤더만 지원합니다. 이는 헤더 값에 선택적 `t=` 사용하여 마이크로초 단위의 타임스탬프를 정수로 식별합니다. 헤더가 제대로 읽혔는지 확인하려면 <DNT>**PHP Variables**</DNT> 섹션에서 `phpinfo()` 확인하고 `_SERVER["HTTP_X_REQUEST_START"]` 가 존재하며 예상 형식인지 확인하세요.

Nginx를 사용하는 경우 헤더 설정에 대한 추가 정보는 [요청 대기열 서버 구성 예제](/docs/apm/other-features/request-queueing/request-queue-server-configuration-examples#nginx) 를 참조하십시오.
