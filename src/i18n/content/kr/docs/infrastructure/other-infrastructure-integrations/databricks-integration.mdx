---
title: DataBricks 통합
tags:
  - databricks integration
  - New Relic integration
metaDescription: Install the DataBricks integration to monitor your spark metrics.
freshnessValidatedDate: '2024-09-19T00:00:00.000Z'
translationType: machine
---

뉴롤릭 Databricks 통합은 Databricks에서 실행되는 Spark뿐만 아니라 Databricks에서 실행되지 않는 모든 Spark 배포에서도 텔넷리를 수집할 수 있습니다.

기본적으로 통합은 지정된 작업 공간에서 UI 나 API 통해 생성된 모든 유형의 Spark 배포판에 자동으로 연결하여 텔레메트리를 수집합니다. 이 통합은 Collect Spark 텔레메트리 기능을 지원합니다.

## 통합 설정 [#setup]

이 통합은 뉴렐릭 실험용 독립형 도구를 사용합니다. 이러한 통합은 호스트에서 실행할 수도 있고, 테스트를 위해 로컬에서 실행할 수도 있습니다. 이 통합은 다음 호스트 플랫폼에서 실행됩니다.

* 리눅스 amd64
* 윈도우 amd64

<Callout variant="tip">
  자세한 내용은 이 통합에 대한 [GitHub ReadMe](https://github.com/newrelic-experimental/newrelic-databricks-integration) 를 참조하세요.
</Callout>

### 호스트에 구현하다, 배포하다 [#on-host-deploy]

호스트(예: EC2)에서 이 통합을 구현하거나 배포하려면 다음 단계를 따르세요.

1. [최신 릴리스](https://github.com/newrelic-experimental/newrelic-databricks-integration/releases) 에서 귀하의 플랫폼에 적합한 아카이브를 다운로드하세요.

2. 새 디렉토리나 기존 디렉토리에 보관 파일을 추출합니다.

3. 같은 디렉토리에 **configs** 라는 디렉토리를 만듭니다.

4. configs 디렉토리에 `config.yml` 이라는 이름의 파일을 만들고 이 저장소에 있는 [`configs/config.template.yml`](https://github.com/newrelic-experimental/newrelic-databricks-integration/blob/main/configs/config.template.yml) 파일의 내용을 여기에 복사합니다.

5. `config.yml` 파일을 편집하여 사용자 환경에 맞게 통합을 [구성하세요](https://github.com/newrelic-experimental/newrelic-databricks-integration#configuration) .

6. 아카이브가 추출된 디렉토리에서 다음 명령을 사용하여 통합 바이너리를 실행하고 필요에 따라 [명령줄 옵션을](https://github.com/newrelic-experimental/newrelic-databricks-integration#command-line-options) 복사합니다.

```bash
# Linux
 ./newrelic-databricks-integration 
 
 # Windows
 .\newrelic-databricks-integration.exe
```

### databricks 클러스터에 구현하다, 배포하다 [#databricks-deploy]

뉴렐릭 Databricks 통합은 클러스터 범위 init 펼쳐보기를 사용하여 Databricks 클러스터의 드라이버 노드에서 구현, 배포할 수 있습니다. init 파일은 사용자 정의 환경 변수를 사용하여 통합 설정에 필요한 설정 초기화를 지정합니다.

init 스크립트를 설치하려면 다음 단계를 따르세요.

1. Databricks 계정에 로그인하고 원하는 [작업 공간](https://docs.databricks.com/en/getting-started/concepts.html#accounts-and-workspaces) 으로 이동합니다.

2. `cluster_init_integration.sh` 스프레드시트를 권장되는 방식으로 작업 공간 내에 저장하려면 [init 스프레드시트에 대한 권장 사항을](https://docs.databricks.com/en/init-scripts/index.html#recommendations-for-init-scripts) 따르세요. 예를 들어, 작업 공간이 [Unity 카탈로그에 대해 활성화](https://docs.databricks.com/en/data-governance/unity-catalog/get-started.html#step-1-confirm-that-your-workspace-is-enabled-for-unity-catalog) 된 경우 [Unity 카탈로그 볼륨](https://docs.databricks.com/en/ingestion/file-upload/upload-to-volume.html) 에 init 스크립트를 저장해야 합니다.

3. **Compute** 탭으로 가서 원하는 다목적 컴퓨터나 작업용 컴퓨터를 선택하면 컴퓨터 세부정보 UI 가 열립니다.

4. **Edit** \[편집] 버튼을 클릭하면 [컴퓨트의 설정을 편집할 수 있습니다](https://docs.databricks.com/en/compute/clusters-manage.html#edit-a-compute).

5. UI를 사용하여 [클러스터 범위 init 스크립트를](https://docs.databricks.com/en/init-scripts/cluster-scoped.html#configure-a-cluster-scoped-init-script-using-the-ui) 구성하는 단계를 따르고 위의 2단계에서 init 스크립트를 저장한 위치를 가리킵니다.

6. 클러스터가 실행 중이 아니면 **Confirm** \[확인] 버튼을 클릭하여 변경 사항을 저장하세요. 그런 다음 클러스터를 다시 시작합니다. 클러스터가 이미 실행 중이면 **Confirm and restart** \[확인 및 다시 시작] 버튼을 클릭하여 변경 사항을 저장하고 클러스터를 다시 시작합니다.

또한, 다음 환경 변수를 추가하려면 [환경 변수를 설정하는](https://docs.databricks.com/en/compute/configure.html#environment-variables) 단계를 따르세요.

* `NEW_RELIC_API_KEY`: 귀하의 [뉴렐릭 사용자 API 키](/docs/apis/intro-apis/new-relic-api-keys/#user-key).

* `NEW_RELIC_LICENSE_KEY`: 귀하의 [뉴렐릭 클러스터 키](/docs/apis/intro-apis/new-relic-api-keys/#license-key).

* `NEW_RELIC_ACCOUNT_ID`: 귀하의 [뉴렐릭 계정 ID입니다](/docs/accounts/accounts-billing/account-structure/account-id/).

* `NEW_RELIC_REGION`: 뉴렐릭 계정의 [지역입니다](/docs/accounts/accounts-billing/account-setup/choose-your-data-center/#regions-availability) . **미국** 또는 **EU** 중 하나입니다.

* `NEW_RELIC_DATABRICKS_WORKSPACE_HOST`: 해리의 [이름](https://docs.databricks.com/en/workspace/workspace-details.html) , 목표 Databricks 제거.

* `NEW_RELIC_DATABRICKS_ACCESS_TOKEN`:[](https://github.com/newrelic-experimental/newrelic-databricks-integration#authentication) [개인 액세스 토큰](https://docs.databricks.com/en/dev-tools/auth/pat.html#databricks-personal-access-tokens-for-workspace-users) 으로 인증 하려면 개인 액세스 토큰이 필요합니다.

* `NEW_RELIC_DATABRICKS_OAUTH_CLIENT_ID`: [Databricks(OAuth M2M)에서 서비스 주체를 사용하여 인증](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html) 하려면 서비스 주체에 대한 OAuth 클라이언트 ID가 필요합니다.

* `NEW_RELIC_DATABRICKS_OAUTH_CLIENT_SECRET`: [Databricks(OAuth M2M)에서 서비스 주체를 사용하여 인증](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html) 하려면 서비스 주체와 연결된 OAuth 클라이언트 비밀이 필요합니다.

<Callout variant="tip">
  `NEW_RELIC_API_KEY` 및 `NEW_RELIC_ACCOUNT_ID` 은 현재 사용되지 않지만 통합에 사용되는 [`new-relic-client-go` 모듈](https://github.com/newrelic/newrelic-client-go) 에 필요합니다.

  또한, 개인 액세스 토큰이나 OAuth 자격 증명 중 하나만 지정하면 되며, 둘 다 지정하면 안 됩니다. 둘 다 지정된 경우, OAuth 자격 증명이 우선합니다.

  마지막으로 환경 변수를 설정한 후에는 리눅스를 다시 시작해야 합니다.
</Callout>

## DataBricks 모니터링 대시보드 설치 [#add-dashboard]

사전 구축된 DataBricks 대시보드를 실제 메트릭을 모니터링하도록 설정하려면 [DataBricks 대시보드 설치](https://one.newrelic.com/marketplace?state=34e67b15-4fe1-28ef-ff41-99658fb36820) 로 이동하여 지침을 따르세요. 대시보드를 설치하면 대시보드에 지표가 표시됩니다.

대시보드에 대한 도움이 필요하면 다음을 참조하세요.

* [대시보드를 사용자 지정하고 다양한 작업을 수행하기 위한 대시보드 소개](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)
* [대시보드를 관리하여](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) <InlinePopover type="dashboards" />디스플레이 모드를 조정하거나 대시보드에 더 많은 콘텐츠를 추가하세요.