---
title: 코드 수준 측정항목
metaDescription: See performance data at the method level.
freshnessValidatedDate: '2024-12-04T00:00:00.000Z'
translationType: machine
---

직접 찾을 필요 없이 성능 데이터가 편집기에 상황에 맞게 표시되어 당면한 작업을 알릴 수 있습니다. 버그 수정 작업을 하고 있는데 작업 중인 코드 영역의 오류율이 높다는 것을 알게 되었다고 가정해 보겠습니다. 더 큰 문제로 확대되지 않도록 버그 수정의 일부로 해당 문제를 해결할 수도 있습니다.

<img title="A CodeLens displaying error rate and average duration for a method." alt="A screenshot CodeLens displaying error rate and average duration for a method." src="/images/codestream_screenshot-crop_code-level-metrics-example.webp" />

CodeStream은 New Relic APM 에이전트가 각 메서드에 권한을 부여한 CodeLens에서 지난 30분 동안의 평균 지속 시간과 오류율을 보여줍니다. Visual Studio의 경우 CodeLens 대신 New Relic 아이콘이 편집기 여백에 표시됩니다. CodeStream 창에서 현재 선택된 서비스에 대한 지표가 계산됩니다. 다른 서비스를 확장하면 그에 따라 지표가 업데이트됩니다.

CodeLens를 클릭하면 각 측정항목을 시각화하는 차트를 볼 수 있습니다. 리포지토리가 여러 New Relic 모니터링 서비스와 연결되어 있는 경우 해당 서비스 간에 쉽게 전환할 수 있습니다. 이렇게 하면 차트와 편집기에 표시되는 코드 수준 지표의 기반이 되는 서비스가 변경되고 CodeStream 창에서 서비스 선택도 변경됩니다.

<img title="Code-level metrics details showing charts and errors." alt="A screenshot of code-level metrics details showing charts and errors." src="/images/codestream_screenshot-crop_code-level-charts.webp" />

오류율 차트와 함께 각 발생 횟수를 포함하여 동일한 기간에 발생한 실제 오류 목록도 볼 수 있습니다. 오류율이 급등하고 특정 오류 하나가 문제를 일으키는 것으로 확인되면 해당 오류를 클릭하여 스택 추적을 확인하고 해결을 위한 [공동 작업을 시작할](/docs/codestream/observability/error-investigation) 수 있습니다.

## 적용 범위 [#coverage]

뉴렐릭 에이전트는 HTTP 요청에 연결된 클래스의 함수에 대한 데이터를 자동으로 수집하려고 시도합니다. 많은 경우 MVC 프레임워크를 사용하는 많은 프레임워크에서 이들은 Controller 클래스의 메서드인 경우가 많습니다.

New Relic 에이전트의 모든 요청이 항상 수집되지는 않기 때문에 트래픽이 적은 방법에서는 데이터가 표시되지 않을 수 있습니다. 결과를 확인하려는 특정 방법에 대한 데이터가 누락된 경우 사용자 지정 계측을 사용하여 공백을 메울 수 있습니다. [Java](/docs/apm/agents/java-agent/custom-instrumentation/java-custom-instrumentation), [.NET](/docs/apm/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation), [PHP](/docs/apm/agents/php-agent/features/php-custom-instrumentation), [Python](/docs/apm/agents/python-agent/custom-instrumentation/python-custom-instrumentation), [Ruby](/docs/apm/agents/ruby-agent/api-guides/ruby-custom-instrumentation), [Go](/docs/apm/agents/go-agent/instrumentation/instrument-go-transactions) 및 [Node.js](/docs/apm/agents/nodejs-agent/extend-your-instrumentation/nodejs-custom-instrumentation) 에 대한 지침을 참조하세요.

다음 NRQL 쿼리를 실행하여 서비스 중 하나에 대해 CodeLenses가 포함된 앱 레벨 지표를 볼 수 있는 위치를 식별하세요. 예시의 `entity.guid` 값을 해당 서비스의 값으로 바꾸면 됩니다. 쿼리 결과에서 `code.*` 속성을 살펴보고 프레임워크 코드가 아닌 코드를 나타내는 것이 있는지 확인하세요.

```sql
SELECT * FROM Span
WHERE entity.guid = 'YOUR_ENTITY_GUID' AND code.function IS NOT NULL
SINCE 30 minutes ago LIMIT MAX
```

## 요구 사항 [#requirements]

편집기 내 성능 데이터를 보려면 서비스가 아래 나열된 요구 사항을 충족해야 하며 서비스가 지난 30분 동안 데이터를 수집했어야 합니다.

* [분산 추적을](/docs/distributed-tracing/enable-configure/language-agents-enable-distributed-tracing) 사용하도록 설정해야 합니다. 분산 추적은 모든 에이전트의 최신 버전에서 기본적으로 켜져 있으므로 분산 추적을 비활성화한 경우에만 이에 대해 걱정하면 됩니다.
* VS Code를 사용하는 경우, [자바](https://marketplace.visualstudio.com/items?itemName=redhat.java), [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp), [PHP](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client), [파이썬](https://marketplace.visualstudio.com/items?itemName=ms-python.python), [Go](https://marketplace.visualstudio.com/items?itemName=golang.go) 또는 [루비](https://marketplace.visualstudio.com/items?itemName=Shopify.ruby-lsp) 에 대한 언어 지원 확장 프로그램이 설치되어 있어야 합니다.
* <DNT>**Java:**</DNT> 코드 레벨 메트릭은 [지원되는 지속 프레임워크](/docs/apm/agents/java-agent/getting-started/compatibility-requirements-java-agent/#frameworks) 로 구현된 프로젝트에서만 사용할 수 있습니다. Kotlin 지원은 IntelliJ에서만 제공됩니다.
* <DNT>**.NET:**</DNT> Visual Studio를 사용하는 경우 <DNT>**Tools &gt; Options &gt; Text Editor &gt; All Languages &gt; CodeLens**</DNT> 에서 CodeLenses가 활성화되었는지 확인하고 **Enable CodeLens** 와 **Show CodeStream Code-Level Metrics** \[Show CodeStream 코드 레벨 지표가] 모두 선택되어 있는지 확인하세요.
* <DNT>**Node.js:**</DNT> 코드 베이스에 익명 함수가 포함된 경우 [추적 변경을](/docs/change-tracking/change-tracking-introduction/) 사용하여 형상, 배포 정보를 뉴렐릭으로 보내거나 빌드 파이프라인의 [환경 변수를 사용하여 빌드 SHA를](/docs/codestream/observability/error-investigation/#buildsha) 보내야 합니다.
* <DNT>**Python:**</DNT> 코드 레벨 메트릭은 [지원되는 끌어서 프레임워크](/docs/apm/agents/python-agent/getting-started/instrumented-python-packages) 로 구현된 프로젝트와 PHP 버전 7.0 이상에서만 사용할 수 있습니다.
* <DNT>**Ruby:**</DNT> 코드 레벨 지표는 수동 트레이스를 사용하는 Rails 및 루비 메서드에만 사용할 수 있습니다([루비 메서드 및 CodeStream에 대해 자세히 알아보세요](/docs/apm/agents/ruby-agent/features/ruby-codestream-integration)).

IDE 설정의 CodeStream 섹션으로 이동하고 <DNT>**CodeStream: Show Golden Signals In Editor**</DNT> 설정을 선택 취소하여 CodeLense를 끌 수 있습니다.