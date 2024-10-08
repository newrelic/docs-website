---
title: Atlassian Jira 통합
tags:
  - Integrations
  - Open source telemetry integrations
  - OpenTelemetry
  - Atlassian
  - Quickstart
metaDescription: Monitor Atlassian with New Relic.
freshnessValidatedDate: '2024-04-24T00:00:00.000Z'
translationType: machine
---

뉴렐릭은 뉴렐릭 문제와 인시던트 정보를 Jira와 동기화하는 Atlassian Jira와의 통합을 제공합니다. 그러면 이 데이터는 [인시던트 기능](https://support.atlassian.com/jira-software-cloud/docs/what-is-the-incidents-feature/) 의 Jira에 나타나며 Jira 문제와 연결하여 중단 현상을 개선할 수 있습니다. 섹션에서는 이 통합을 설정하는 방법과 이를 사용하기 위한 모범 사례를 다룹니다.

<Callout title="시사">
  이 기능은 아직 개발 중이지만 꼭 사용해 보시기 바랍니다!

  이 기능은 현재 [출시 전 정책](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy) 에 따라 미리보기 프로그램의 일부로 제공됩니다.
</Callout>

## 데이터 공유 [#data-sharing]

Atlassian Marketplace에서 Jira용 뉴렐릭 앱을 설치하면 통합을 활성화하여 다음 작업을 수행할 수 있습니다.

* 엔터티, 인시던트 및 Jira의 이슈를 읽어보세요.
* 엔터티, 인시던트, 이슈를 Jira에 씁니다.
* 엔터티, 인시던트 및 뉴렐릭과 Jira의 이슈를 삭제하여 각 엔터티의 데이터 보고를 미러링하세요.

<Callout variant="caution">
  이 통합을 통해 관련 Jira 작업 공간의 모든 사용자에게 뉴렐릭 문제와 인시던트 정보가 노출됩니다. 이 작업공간의 Jira 사용자는 뉴렐릭에 액세스할 수 없을 수 있으며, 설사 그렇더라도 귀하의 API 키 사용자와 동일한 뉴렐릭 계정에 액세스하지 못할 수도 있습니다.

  숨기고 싶은 뉴렐릭 계정 정보가 있다면 민감한 계정에 접근할 수 없는 [통합사용자](/docs/more-integrations/best-practices-integration/#integration-user-leverage) 를 이용해 보세요.
</Callout>

## 설치 [#installation]

뉴렐릭을 Jira와 통합하려면 다음 단계를 따르세요.

<Steps>
  <Step>
    ## Jira 앱용 뉴렐릭 설치 [#install-nr-jira-app]

    뉴렐릭과 Atlassian 간에 데이터를 동기화하려면 Jira 앱용 뉴렐릭을 설치해야 합니다. 마켓플레이스 애플리케이션을 설치하려면 Jira 사이트 관리자 권한이 있어야 한다는 점을 명심하세요. [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1233828/new-relic-for-jira?tab=overview&hosting=cloud) 로 이동하여 **Install** \[설치] 버튼을 클릭하세요.

    <Callout variant="tip">
      사이트 관리자 권한이 없는 경우 관리자에게 요청할 수 있습니다. 애플리케이션 설치 프로세스를 완료하려면 Jira 사이트 관리자에게 후속 조치를 취하는 것이 좋습니다.
    </Callout>
  </Step>

  <Step>
    ## 뉴렐릭 API 키 만들기 [#create-new-relic-key]

    Jira 앱용 뉴렐릭을 설치한 후 [뉴렐릭 API 키를](/docs/apis/intro-apis/new-relic-api-keys/) 생성해야 합니다. Jira 사이트 관리자와 뉴렐릭 관리자가 Jira에 노출된 계정을 결정합니다. 올바른 뉴렐릭 계정 액세스 권한이 있는 사용자는 뉴렐릭 API 키를 생성할 수 있습니다. 뉴렐릭 API 키는 이를 생성한 사용자와 동일한 계정에 액세스할 수 있습니다.

    [뉴렐릭 API 키 UI](https://one.newrelic.com/launcher/api-keys-ui.api-keys-launcher) 페이지에서 API 키를 생성 및 관리하거나 [Atlassian API 의미](https://id.atlassian.com/manage-profile/security/api-tokens) 페이지에 로그인하고 **Create API toke** \[API 생성을] 클릭하세요.
  </Step>

  <Step>
    ## 뉴렐릭 API 키 적용 [#apply-new-relic-key]

    API 키를 생성한 후에는 뉴렐릭 connect의 첫 페이지에 해당 키를 적용할 수 있습니다.

    뉴렐릭 API 뜻을 뉴렐릭 Atlassian Marketplace에 붙여넣고 **Connect** \[연결을] 클릭하세요.

    <img width="50%;" title="Apply a New Relic API key" alt="Apply a New Relic API key" src="/images/opentelemetry_screenshot-crop_connect-nr-jira.webp" />
  </Step>

  <Step>
    ## 뉴렐릭 서비스를 선택하세요 [#select-nr-services]

    Jira 앱용 뉴렐릭이 API 키를 통해 연결되면 해당 API 키의 계정과 연결된 모든 엔터티 목록이 표시됩니다. 탐색에서 인시던트 기능을 선택한 다음 Jira에 노출하려는 엔터티를 연결하세요.

    [Jira에서 서비스를 연결하고 제거하는](https://support.atlassian.com/jira-software-cloud/docs/connect-jira-service-management-services-to-jira-software/) 방법을 알아보세요.

    <img title="Jira incident management page" alt="Jira incident management page" src="/images/opentelemetry_screenshot-full_jira-incident-mgt.webp" />
  </Step>

  <Step>
    ## Atlassian Jira에서 뉴렐릭 문제 및 인시던트를 확인하세요. [#see-issues-incidents]

    뉴렐릭 엔터티를 선택하면, 작곡이 뉴렐릭의 데이터를 Atlassian Jira로 동기화하기 시작합니다. 인시던트 탭을 열어 감지된 인시던트 목록을 확인하세요.
  </Step>
</Steps>

## 인시던트 기능을 활성화하세요 [#enable-incidents-feature]

프로젝트 관리자 권한이 있는 경우 다음 단계에 따라 인시던트 기능을 활성화하세요.

1. 프로젝트 사이드바에서 <DNT>**Project settings &gt; Features**</DNT> 으로 이동합니다.

2. <DNT>**Incidents**</DNT> 기능을 켜거나 끕니다.

3. 활성화되면 프로젝트 사이드바에서 <DNT>**Incidents**</DNT> 선택하여 기능을 사용하세요.

자세한 내용은 Atlassian 지원 문서의 [인시던트 기능](https://support.atlassian.com/jira-software-cloud/docs/what-is-the-incidents-feature/) 페이지를 참조하세요.

## 뉴렐릭과 Jira 사이의 연결 제거 [#remove-connection]

언제든지 뉴렐릭에서 데이터 동기화를 중지하고 동기화된 데이터를 제거할 수 있습니다. Jira 사이트 관리자 권한이 있는 경우 Jira 내의 뉴렐릭 설정 페이지에서 이 작업을 수행할 수 있습니다. 연결된 조직을 선택하고 <DNT>**Delete**</DNT> 클릭할 수 있습니다. 프로세스가 완료되면 더 이상 Jira의 인시던트 기능에 뉴렐릭 인시던트 및 문제 정보가 표시되지 않습니다.

## 다른 조직에 연결 [#different-organization]

다른 조직에 연결하거나 API 키가 제공하는 계정 액세스 권한을 변경하려면 Jira 내 뉴렐릭 설정 페이지로 이동하세요.

<DNT>**Connect another New Relic organization**</DNT> 선택하면 뉴렐릭 API 키를 제공해야 합니다. 새 키를 추가하면 Atlassian에 동기화된 모든 데이터를 포함하여 현재 연결이 삭제됩니다. 그런 다음 새 API 키의 계정과 조직 액세스 간에 새로운 동기화 프로세스가 시작됩니다.

<img title="New Relic configuration from Jira" alt="New Relic configuration from Jira" src="/images/opentelemetry_screenshot-full_jira-nr-configuration.webp" />