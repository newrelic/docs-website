---
title: '1단계: 계정 및 조직 만들기'
metaDescription: Create organizations and accounts in the multi-tenency structure
freshnessValidatedDate: '2024-09-05T00:00:00.000Z'
translationType: machine
---

다중 테넌시를 사용하면 기본 관리 기관과 관련된 관리 기관을 원하는 수만큼 설정할 수 있습니다. 다중 테넌시를 설정하는 첫 번째 단계는 계정과 조직을 만드는 것입니다. 이를 위해 만들려는 조직 구조에 따라 다양한 NerdGraph 변형을 사용합니다.

* [하이 터치](#high-touch): 관리형 서비스 공급업체는 일반적으로 뉴렐릭에 직접 액세스하려는 고객을 온보딩하기 위해 이 접근 방식을 사용합니다.

* [로우 터치](#low-touch): 대기업은 이 접근 방식을 사용하여 뉴렐릭의 사업부나 자회사를 위한 새로운 조직과 계정을 만듭니다.

어떤 접근방법을 취해야 할지 모르시겠습니까? [다중 테넌시 접근 방식 개요를](/docs/accounts/accounts-billing/account-structure/multi-tenancy/intro-to-multi-tenancy#approaches) 참조하세요.

<Callout variant="tip">
  소비 가격을 적용하는 다중 테넌트 고객인 경우 수집 및 사용자 수는 관리되는 조직 전체에서 집계됩니다. 이 집계 데이터는 관리 조직에서만 볼 수 있습니다.
</Callout>

## 요구 사항 [#requirements]

다중 테넌시 기능을 사용하려면 조직에서 다음 작업을 완료했는지 확인하세요.

1. 승인 받기: 귀하의 조직이 멀티 테넌시에 추가되었는지 확인하려면 계정 담당자에게 문의하세요. 승인되면 다중 테넌트 권한을 받게 됩니다.
2. 올바른 사용자 유형이 있는지 확인하세요: 위 기능 세트를 활용할 관리 조직 내의 사용자는 핵심 또는 전체 플랫폼 사용자로 프로비저닝되어야 합니다.
3. 적절한 그룹에 사용자 추가: 핵심 또는 전체 플랫폼 사용자 유형을 가진 사용자는 `tenant_settings` 적용된 그룹에 추가되어야 합니다.

## NerdGraph에서는 무엇을 호출할 수 있나요? [#org-calls]

당신이 취하고자 하는 접근 방식, 즉 낮은 접촉이나 높은 접촉에 적용되는 변형을 아래에서 찾아보세요.

### 하이터치 구조 [#high-touch]

관리 서비스 공급업체의 관리자이거나 자회사에 대한 많은 통제력을 원하는 기업의 경우 다음을 완료하세요.

<CollapserGroup>
  <Collapser id="high-touch-only-share" title="하이터치: 공유를 위해 계정을 만드세요">
    하이터치 방식의 주요 이점은 자체 관리 조직에서 바로 고객 계정을 만들 수 있다는 것입니다. 관리 조직의 이러한 계정을 사용하면 고객의 스프레드시트를 모니터링할 수 있습니다.

    그런 다음 고객이 귀하가 모니터링하고 있는 계정의 데이터를 보고 싶어한다면, 고객을 위해 조직을 만들 때 해당 계정을 공유할 수 있습니다. 관리되는 조직의 사용자는 지정된 계정의 데이터만 볼 수 있습니다.

    관리되는 조직과 공유할 계정을 만들려면 다음 뮤테이션을 실행하세요.

    ```graphql
    mutation {
      accountManagementCreateAccount(
        managedAccount: { name: "NEW_ACCOUNT_NAME", regionCode: "eu01" }
      ) {
        managedAccount {
          id
          name
          regionCode
        }
      }
    }
    ```

    실수로 계정 이름을 변경해야 하는 경우 [NerdGraph 튜토리얼을](/docs/apis/nerdgraph/examples/manage-accounts-nerdgraph/#rename-accounts) 참조하세요.

    공유하려는 계정을 만들면 조직을 만들 준비가 된 것입니다.
  </Collapser>

  <Collapser id="high-touch-org" title="하이터치: 조직을 만들어라">
    접촉이 잦은 구조에서 조직을 만들면 자체 조직에서 관리하는 계정을 관리되는 조직의 사용자와 공유하고 싶어하는 경우가 많습니다. 조직을 만들고 동시에 계정을 공유하려면 다음과 유사한 뮤테이션을 실행하세요.

    ```graphql
    mutation {
      organizationCreate(
        customerId: "CC-1234567890"
        organization: {name: "New Customer Organization Name"}
        sharedAccount: {accountId: 1234, limitingRoleId: 0}
      ) {
        jobId
      }
    }
    ```

    처음에 관리되는 조직과 계정을 공유하지 않으려면 나중에 언제든지 `organizationCreateSharedAccount` 변형을 사용할 수 있습니다. 해당 돌연변이를 사용하는 방법에 대한 자세한 내용은 [3단계: 계정 공유를](/docs/accounts/accounts-billing/account-structure/multi-tenancy/share-accounts) 참조하세요.
  </Collapser>
</CollapserGroup>

### 로우터치 구조 [#low-touch]

자회사에 대한 통제력이 크게 필요하지 않은 기업 조직의 관리자라면 한 번의 통화로 관리되는 조직과 관리되는 계정을 만들 수 있습니다.

<CollapserGroup>
  <Collapser id="low-touch-org" title="로우터치: 조직 만들기">
    이 변형은 조직과 새로운 관리 계정을 생성합니다.

    ```graphql
    mutation {
      organizationCreate(
        customerId: "CC-123456789"
        newManagedAccount: {name: "New Managed Account Name", regionCode: EU01}
        organization: {name: "New Organizanization Name"}
      ) {
        jobId
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### 귀하의 조직을 검색 [#org-queries]

다음 쿼리를 사용하여 관리되는 조직을 추적하세요.

<CollapserGroup>
  <Collapser id="list-orgs" title="관리되는 조직을 나열하세요">
    ```graphql
    {
      customerAdministration {
        organizations {
          items {
            id
            name
          }
          nextCursor
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

<UserJourneyControls previousStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/intro-to-multi-tenancy","title":"시작으로 돌아가기","body":"멀티 테넌시 소개"}} nextStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/delegated-administration","title":"2단계","body":"사용자 및 액세스 관리"}} />