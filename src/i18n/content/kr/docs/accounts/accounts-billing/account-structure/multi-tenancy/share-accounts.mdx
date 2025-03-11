---
title: '3단계: 계정 공유(선택 사항)'
metaDescription: Share accounts with managed organizations using multi-tenency
freshnessValidatedDate: '2024-09-05T00:00:00.000Z'
translationType: machine
---

<Callout variant="important">
  접촉이 적은 조직 구조를 구축한 경우 이 단계는 적용되지 않습니다. [1단계: 계정 및 조직 만들기](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation) 에서 간단한 세부 정보를 확인하세요.
</Callout>

계정 공유를 통해 관리 조직의 관리자는 모니터링 중인 데이터를 관리 조직에 표시할 수 있습니다. 하이터치 조직 구조에서 초기 계정 공유를 설정한 후( [계정 만들기 및 조직](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation) 참조), 몇 가지 후속 변경 작업을 해야 할 수도 있습니다.

귀하가 고객 Wayne Enterprises의 관리 계정을 모니터링하는 Betty&apos;s MSP(관리 서비스 공급 업체)의 관리자라고 가정해 보겠습니다. 또한 해당 계정을 Wayne Enterprises 조직과 공유했습니다. 수행할 수 있는 후속 작업은 다음과 같습니다.

<CollapserGroup>
  <Collapser id="create-share-accounts" title="추가 계정 생성 및 공유">
    고객인 Wayne Enterprises가 다른 계정을 원한다고 결정하면 다음과 같이 하세요.

    1. NerdGraph 돌연변이 `accountManagementCreateAccount` 사용하여 관리 조직에 다른 Wayne Enterprises 계정을 만듭니다.
    2. Wayne Enterprises에서도 새 계정의 데이터를 직접 보고 싶어하는 경우 `organizationCreateSharedAccount` 사용하여 해당 계정을 해당 조직과 공유하면 됩니다.
  </Collapser>

  <Collapser id="revoke-access-to-share" title="공유 계정에 대한 액세스 취소">
    고객 Wayne Enterprises와 더 이상 계정을 공유할 필요가 없다고 결정하면 `organizationRevokeSharedAccount` 변형을 사용하여 공유를 취소할 수 있습니다.
  </Collapser>

  <Collapser id="update-roles" title="공유 계정의 역할 업데이트">
    Wayne Enterprises 공유 계정의 사용자 역할을 변경해야 하는 경우 `organizationUpdateSharedAccount` 변형을 사용할 수 있습니다.
  </Collapser>
</CollapserGroup>

## 요구 사항 [#requirements]

이 기능을 사용하려면 조직에 대해 다음 사항을 완료해야 합니다.

1. 승인 받기: 귀하의 조직이 다중 테넌시에 추가되었는지 확인하려면 계정 담당자에게 문의하세요. 승인되면 다중 테넌트 권한을 받게 됩니다.
2. 올바른 사용자 유형이 있는지 확인하세요: 위 기능 세트를 활용할 관리 조직 내의 사용자는 핵심 또는 전체 플랫폼 사용자로 프로비저닝되어야 합니다.
3. 적절한 그룹에 사용자 추가: 핵심 또는 전체 플랫폼 사용자 유형을 가진 사용자는 `tenant_settings` 적용된 그룹에 추가되어야 합니다.

## Nerdgraph에서는 뭐라고 부를 수 있나요? [#share-calls]

계정 공유에 익숙해지는 데 도움이 되도록 몇 가지 기본적인 예를 아래에 제시했습니다. 먼저, 일반적인 루틴을 살펴보세요.

1. 소스 조직은 조직, 조직 조직으로부터 조직 ID를 얻습니다. 조직, 조직 조직 ID는 조직, 조직 조직 사용자가 **Access Management** \[액세스 관리] 탭을 볼 때 얻을 수 있습니다.
2. 소스 조직은 API 호출하고 조직, 조직 조직 ID, 계정 ID, 제한 역할을 전달합니다. 소스 조직은 전체 조직에서 사용자의 최대 기능을 정의하는 제한 역할을 선언할 수 있습니다.

계정 공유를 위해 할 수 있는 전화 유형은 다음과 같습니다.

<CollapserGroup>
  <Collapser id="create-a-share" title="공유 만들기">
    이 변형을 사용하려면 먼저 목표 기관인 타깃을 생성해야 합니다. 아직 해당 사항이 없다면 [1단계: 계정 및 조직 만들기를](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation) 확인하세요.

    ```graphql
    mutation {
      organizationCreateSharedAccount(
        sharedAccount: {
          accountId: ACCOUNT_ID_TO_SHARE
          limitingRoleId: 0
          targetOrganizationId: "CUSTOMER_ORGANIZATION_ID_HERE"
        }
      ) {
        sharedAccount {
          accountId
          id
          limitingRoleId
          name
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="revoke-share" title="공유 취소">
    ```graphql
    mutation {
      organizationRevokeSharedAccount(
        sharedAccount: { id: "SHARED_ACCOUNT_ID_HERE" }
      ) {
        sharedAccount {
          accountId
          id
          limitingRoleId
          name
          sourceOrganizationId
          sourceOrganizationName
          targetOrganizationId
          targetOrganizationName
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="find-orgs-for-account" title="특정 공유 계정이 있는 관리되는 조직 찾기">
    ```graphql
    {
      customerAdministration {
        accountShares(
          cursor: ""
          filter: { accountId: { eq: 1234 } }
          sort: { direction: ASCENDING, key: ACCOUNT_ID }
        ) {
          items {
            accountId
            id
            limitingRole {
              id
            }
            name
            source {
              id
              name
            }
            target {
              id
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="find-shared-accounts" title="지정된 관리 조직과 공유된 계정 찾기">
    ```graphql
    {
      customerAdministration {
        accounts(
          cursor: "",
          filter: {
            id: {eq: 1234},
            name: {contains: "text"},
            organizationId: {eq: "org-id"},
            sharingMode: {eq: SHARED_WITH_THIS_ORGANIZATION},
            status: {eq: ACTIVE}
          },
          sort: {direction: ASCENDING, key: ID}
        ) {
          nextCursor
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="list-roles" title="역할 목록">
    ```graphql
    {
      customerAdministration {
        roles(filter: {organizationId: {eq: "ANY_ORG_ID"}}) {
          items {
            id
            name
            scope
            type
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="update-roles" title="역할 업데이트">
    이 변형을 사용하면 공유 계정 역할을 변경합니다. 기존 계정의 역할을 찾으려면 [역할 목록](#list-roles) 에 있는 쿼리를 사용하세요.

    ```graphql
    mutation {
      organizationUpdateSharedAccount(
        sharedAccount: {
          id: "SHARE_ACCOUNT_ID"
          limitingRoleId: NEW_LIMTING_ROLE_ID
        }
      ) {
        sharedAccount {
          accountId
          id
          limitingRoleId
          name
          sourceOrganizationId
          sourceOrganizationName
          targetOrganizationId
          targetOrganizationName
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

<UserJourneyControls previousStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/delegated-administration","title":"이전 단계","body":"사용자 및 액세스 관리"}} />