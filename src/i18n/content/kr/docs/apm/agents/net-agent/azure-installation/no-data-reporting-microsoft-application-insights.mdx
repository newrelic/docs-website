---
title: 'Azure Web Apps 문제 해결: App Insights 충돌'
tags:
  - Agents
  - NET agent
  - Azure troubleshooting
metaDescription: What to do if no data appears and Microsoft's Application Insights profiler is preventing the New Relic .NET profiler from instrumenting your app.
freshnessValidatedDate: never
translationType: machine
---

## 문제

.NET 에이전트가 설치되었고 필수 <DNT>**App Settings**</DNT> 이 설정되었으나 데이터가 표시되지 않으며 `D:\Home\Logfiles\NewRelic\` 에 뉴렐릭 로그가 생성되지 않습니다. 또한 Azure Kudu 콘솔의 <DNT>**Process Explorer**</DNT> 를 사용하여 애플리케이션의 <DNT>**Environment Variables**</DNT> 검사하면 `COR_PROFILER_PATH_64` 및 `COR_PROFILER_PATH_32` 가 설정되어 있고 다음을 가리키는 것으로 표시됩니다.

```
D:\Program Files (x86)\SiteExtensions\InstrumentationEngine\1.0.19\Instrumentation64\MicrosoftInstrumentationEngine_x64.dll
```

## 해결책

.NET CLR(공용 언어 런타임)은 하나의 프로파일러만 허용합니다. Microsoft의 Application Insights 프로파일러가 시스템에 설치된 경우 New Relic 프로파일러는 응용 프로그램을 계측하지 않으며 데이터도 표시되지 않습니다. 자세한 내용은 [Microsoft Azure Web Apps 설명서](https://docs.microsoft.com/en-us/azure/azure-monitor/app/azure-web-apps) 를 참조하십시오.

이 문제를 해결하려면 애플리케이션에서 Application Insights를 제거하거나 비활성화하세요.

기능인사이트 사이트 확장을 <DNT>**remove**</DNT> 하려면:

1. <DNT>**Application > Settings > Application Settings**</DNT> 및 <DNT>**Save**</DNT> 에서 기능인사이트와 관련된 모든 설정을 제거합니다. 여기에는 다음 키가 포함될 수 있습니다.

   * 로 시작하는 모든 키 `APPINSIGHTS_`
   * 로 시작하는 모든 키 `APPLICATIONINSIGHTS_`
   * 로 시작하는 모든 키 `XDT_MicrosoftApplicationInsights_`
   * `DiagnosticServices_EXTENSION_VERSION`
   * `InstrumentationEngine_EXTENSION_VERSION`
   * `MicrosoftInstrumentationEngine_LatestPath`

2. <DNT>**Application > Tools > Extensions**</DNT> 에서 확장을 제거합니다. 확장 프로그램을 마우스 오른쪽 버튼으로 클릭하고 <DNT>**Delete**</DNT> 클릭합니다.

3. <DNT>**Application Panel**</DNT> (있는 경우)에서 <DNT>**Tile Add-On**</DNT> 를 제거합니다.

4. 응용 프로그램을 다시 시작하십시오.

Azure Portal을 통해 <DNT>**disable**</DNT> 건축인사이트를 수행하려면: <DNT>**Settings**</DNT> 아래의 건축인사이트 패널로 이동합니다. 앱이 다시 시작될 수 있습니다.
