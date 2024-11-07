---
title: Azure 사이트 확장 프로그램을 사용한 Node.js 에이전트 설치
tags:
  - Agents
  - Nodejs agent
  - Installation and configuration
  - Azure Site Extension
metaDescription: Procedures and resources to install New Relic's Node.js agent for Azure web apps using the New Relic Azure Site Extension for Node.
freshnessValidatedDate: never
translationType: human
---

Node.js용 Azure 사이트 확장 프로그램을 사용하면 Azure에서 관리하는 웹 앱에 Node.js 에이전트를 설치할 수 있습니다. 이 문서에서는 Azure 웹 앱 데이터를 뉴렐릭으로 가져오기 위한 호환성, 설치 및 설정 과정을 안내합니다.

## 호환성 및 요구사항 [#compatibility-requirements]

Azure 사이트 확장 프로그램은 코드로 구현되는 윈도우 기반 앱 서비스 앱에서만 사용할 수 있습니다. 윈도우 32에서 실행되는 애플리케이션의 경우, 전체 코드 레벨 메트릭 지원(파일 경로, 줄, 열)을 사용할 수 없습니다. 프로파일링은 함수 이름으로만 돌아갑니다.

## Azure 사이트 확장 프로그램을 사용한 Node.js 에이전트 설치 [#install-azure-site-extension]

뉴렐릭 Azure 사이트 확장 프로그램을 설치하려면 Azure 홈페이지에서 `NewRelic.Azure.WebSites.Extension.NodeAgent` 사이트 확장 프로그램을 추가합니다. 다음 단계를 따릅니다.

1. Azure 홈 페이지에서 App Services 타일을 클릭한 후 표시된 목록에서 타깃 애플리케이션을 선택합니다.
2. <DNT>**Development Tools**</DNT> 카테고리 아래 왼쪽에 나열된 옵션에서 아래로 스크롤 하여 <DNT>**Extensions**</DNT>를 찾습니다.
3. 페이지 상단의 <DNT>**+ Add**</DNT>를 클릭하여 확장 프로그램 드롭다운으로 토글한 다음 <DNT>**New Relic Node Agent**</DNT>를 선택합니다. 상자를 체크하여 법적 요건에 동의합니다.
4. 확장 프로그램 설치를 시작하려면 페이지 하단의 <DNT>**Add**</DNT>를 클릭합니다.

확장 프로그램을 설치하면 다음과 같은 아티팩트가 생성됩니다.

* 폴더: `C:\home\SiteExtensions\NewRelic.Azure.Websites.Extension.NodeAgent`
* XML 문서 변환(XDT): 애플리케이션 시작 시 필요한 `NODE_OPTIONS` 환경 변수를 추가하는 `applicationHost.xdt`
* 뉴렐릭 Node 에이전트와 종속성 설치 경로: `C:\home\site\wwwroot\node_modules`

로깅이 활성화된 에이전트를 성공적으로 설치한 후 에이전트는 `C:\home\site\wwwroot\newrelic_agent.log`에 있는 파일에 로그를 추가합니다. 확장 프로그램이 설치되지 않으면 `C:\home\SiteExtensions\NewRelic.Azure.Websites.Extension.NodeAgent\install.log`에 로그 파일이 생성됩니다.

## Node.js 에이전트 설정 [#configure-agent]

Node.js 에이전트는 `newrelic.js` 파일이나 환경 변수를 통해 설정됩니다. [보다 자세한 설정은 해당 문서를 참조하십시오](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/).

사이트 확장 프로그램이 설치되면 애플리케이션을 재시작하기 전에 하나의 설정 항목을 수동으로 입력해야 합니다. 왼쪽에 나열된 옵션에서 **Settings**를 찾은 다음 **Environment variables**까지 스크롤합니다. 라이선스 키 값으로 `NEW_RELIC_LICENSE_KEY` 변수를 추가합니다.

뉴렐릭 사이트 확장 프로그램은 자동으로 `NODE_OPTIONS` 환경 변수를 `-r newrelic` 값으로 추가합니다. 이렇게 하면 Node가 시작될 때 에이전트가 삽입됩니다. 이전에 정의된 `NODE_OPTIONS`는 제거되고 `-r newrelic`으로 재설정됩니다.

<Callout variant="important">
  웹 애플리케이션이 중지된 동안 Azure 사이트 확장 프로그램을 설치하거나 제거하는 것이 좋습니다.
</Callout>