---
title: 뉴렐릭에서 Azure Functions 모니터링 설치 및 구성
metaDescription: Configure your Azure Functions with New Relic
freshnessValidatedDate: never
translationType: machine
---

## 시작하기 전에 [#begin]

Azure Functions가 [호환성 및 요구 사항을](/docs/serverless-function-monitoring/azure-function-monitoring/compatibility-requirement-azure-monitoring) 충족하는지 확인하세요.

<Steps>
  <Step>
    ## Azure 계정을 뉴렐릭에 연결하세요

    Azure Monitor 지표의 폴링을 구성하여 Azure 계정을 뉴렐릭에 연결할 수 있습니다. 이렇게 하면 뉴렐릭 UI 에서 테크닉을 볼 수 있습니다. 자세한 내용은 [Azure 통합을](https://docs.newrelic.com/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-functions-monitoring-integration/#polling) 참조하세요.
  </Step>

  <Step>
    ## 뉴렐릭 .NET 에이전트를 사용하여 Azure Functions 배포합니다.

    귀하의 요구 사항에 따라 다음 옵션 중 하나를 선택하여 새로운 .NET 에이전트로 Azure Functions 관리하세요.

    <Tabs>
      <TabsBar>
        <TabsBarItem id="linux-instrumentation">Linux</TabsBarItem> <TabsBarItem id="windows-instrumentation">Windows</TabsBarItem> <TabsBarItem id="containerized-instrumentation">컨테이너화된 기능</TabsBarItem>
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="linux-instrumentation">
          1. 애플리케이션 프로젝트에 `NewRelic.Agent` NuGet 패키지를 추가합니다.

             * Visual Studio 코드 편집기에서 NuGet 패키지 매니저를 사용하여 `NewRelic.Agent` 의 최신 버전을 검색하고 디버그에 추가하세요.
             * 다른 개발 환경을 사용하는 경우 `dotnet add package NewRelic.Agent` 를 사용하여 패키지를 추가할 수 있습니다.

          2. 선호하는 게시 메커니즘을 사용하여 업데이트된 Azure 를 구현, 배포합니다. 여기에는 `/home/site/www/newrelic` 폴더에 설치된 뉴렐릭 에이전트가 포함됩니다.
        </TabsPageItem>

        <TabsPageItem id="windows-instrumentation">
          뉴렐릭 Azure Websites Extension(v1.6.0 이상)은 Windows Azure Functions에 대한 측정, 계측을 자동으로 구성합니다.

          뉴럴릭 Azure Websites 확장 프로그램을 설치하려면 다음 단계를 따르세요.

          1. Azure Portal에서 함수 앱으로 이동합니다.
          2. <DNT>**Development tools**</DNT> 섹션을 클릭하고 <DNT>**Extensions**</DNT> 선택하세요.
          3. <DNT>**+ Add**</DNT> 을(를) 클릭합니다.
          4. <DNT>**Search for an extension to install**</DNT> 선택하고 <DNT>**Filter items**</DNT> 상자에 `New Relic .NET Agent` 입력합니다.
          5. <DNT>**New Relic .NET Agent(vx.x.x) - New Relic**</DNT> 확장자를 선택하고 <DNT>**Add**</DNT> 클릭하세요.
          6. 설치가 완료되면 설치된 확장 프로그램 목록에 해당 확장 프로그램이 나타납니다. 설치가 올바르게 되었는지 확인하려면 &quot;찾아보기&quot; 열 아래의 링크를 클릭하여 설치 로그를 확인하세요.
        </TabsPageItem>

        <TabsPageItem id="containerized-instrumentation">
          뉴렐릭 .NET 에이전트를 설치하려면 Dockerfile의 마지막 단계에서 다음 행을 추가합니다.

          ```dockerfile
          # Install the latest New Relic .NET agent using the apt-get package manager
          RUN apt-get update && apt-get install -y wget ca-certificates gnupg \
              && echo 'deb http://apt.newrelic.com/debian/ newrelic non-free' | tee /etc/apt/sources.list.d/newrelic.list \
              && wget https://download.newrelic.com/548C16BF.gpg \
              && apt-key add 548C16BF.gpg \
              && apt-get update \
              && apt-get install -y newrelic-dotnet-agent \
              && rm -rf /var/lib/apt/lists/*
          ```
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## 환경 변수 구성

    .NET 에이전트를 사용하여 Azure Functions 계측한 후 다음을 수행하여 데이터를 .NET 에이전트로 전송하기 위한 [환경 변수를](/docs/serverless-function-monitoring/azure-function-monitoring/env-variables-azure) 구성합니다.

    1. Azure Portal에서 Azure Functions로 이동하여 **Settings** \[설정] 아래에서 **Environment variables** \[환경 변수를] 클릭한 다음 **Advanced edit** \[고급 편집을] 클릭합니다.

    2. 귀하의 제작 요구 사항에 따라 다음 값을 붙여넣습니다.

    <Callout variant="important">
      마지막 줄의 끝에 쉼표를 추가하고 다음 설정에서 라이선스 키와 앱 이름을 업데이트하세요.
    </Callout>

    <Tabs>
      <TabsBar>
        <TabsBarItem id="linux-configuration">Linux</TabsBarItem> <TabsBarItem id="windows-configuration">Windows</TabsBarItem> <TabsBarItem id="containerized-configuration">컨테이너화된 기능</TabsBarItem>
      </TabsBar>

      <TabsPages>
        <TabsPageItem id="linux-configuration">
          ```json
          {
            "name": "CORECLR_ENABLE_PROFILING",
            "value": "1",
            "slotSetting": false
          },
          {
            "name": "CORECLR_NEW_RELIC_HOME",
            "value": "/home/site/wwwroot/newrelic",
            "slotSetting": false
          },
          {
            "name": "CORECLR_PROFILER",
            "value": "{36032161-FFC0-4B61-B559-F6C5D41BAE5A}",
            "slotSetting": false
          }, 
          {
            "name": "CORECLR_PROFILER_PATH",
            "value": "/home/site/wwwroot/newrelic/libNewRelicProfiler.so",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_AZURE_FUNCTION_MODE_ENABLED",
            "value": "1",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_LOG_DIRECTORY",
            "value": "/home/LogFiles/NewRelic",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_LICENSE_KEY",
            "value": "<your newrelic license key here>",
            "slotSetting": false
          }
          ```
        </TabsPageItem>

        <TabsPageItem id="windows-configuration">
          ```json
          {
            "name": "NEW_RELIC_LICENSE_KEY",
            "value": "YOUR_NEW_RELIC_LICENSE_KEY",
            "slotSetting": false
          }
          ```

          선택적으로 다음 환경 변수를 추가하여 설치하려는 .NET 에이전트의 버전을 지정할 수 있습니다.

          ```json
          {
            "name": "NEW_RELIC_AGENT_VERSION_OVERRIDE",
            "value": "10.35.0",
            "slotSetting": false
          }
          ```
        </TabsPageItem>

        <TabsPageItem id="containerized-configuration">
          ```json
          {
            "name": "CORECLR_ENABLE_PROFILING",
            "value": "1",
            "slotSetting": false
          },
          {
            "name": "CORECLR_NEW_RELIC_HOME",
            "value": "/usr/local/newrelic-dotnet-agent",
            "slotSetting": false
          },
          {
            "name": "CORECLR_PROFILER",
            "value": "{36032161-FFC0-4B61-B559-F6C5D41BAE5A}",
            "slotSetting": false
          }, 
          {
            "name": "CORECLR_PROFILER_PATH",
            "value": "/usr/local/newrelic-dotnet-agent/libNewRelicProfiler.so",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_AZURE_FUNCTION_MODE_ENABLED",
            "value": "1",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_LOG_DIRECTORY",
            "value": "/home/LogFiles/NewRelic",
            "slotSetting": false
          },
          {
            "name": "NEW_RELIC_LICENSE_KEY",
            "value": "<your newrelic license key here>",
            "slotSetting": false
          }
          ```
        </TabsPageItem>
      </TabsPages>
    </Tabs>
  </Step>

  <Step>
    ## Azure Functions 다시 시작

    환경 변수를 추가한 후 Azure Functions를 다시 시작하여 변경 사항을 적용합니다.
  </Step>
</Steps>

## 무엇 향후 계획

설치 및 설정 단계를 완료한 후 Azure Functions 로 트래픽을 보내 뉴렐릭 UI 대시보드에서 지표를 확인하세요.