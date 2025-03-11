---
title: '2단계: 사용자 및 액세스 관리'
metaDescription: Use the delegated administration options in multi-tenancy to manage user access in other organizations
freshnessValidatedDate: '2024-09-05T00:00:00.000Z'
translationType: machine
---

다중 테넌시를 설정할 때 위임된 관리를 사용하여 다른 관리 조직 내에서 사용자 또는 액세스 관리 변경을 수행할 수 있습니다. 관리형 서비스 공급업체의 경우 위임된 관리를 통해 최종 고객을 대신하여 사용자 및 액세스 권한을 관리할 수 있습니다.

## 요구 사항 [#requirements]

다중 테넌시 기능을 사용하려면 조직에서 다음 작업을 완료했는지 확인하세요.

1. 승인 받기: 귀하의 조직이 다중 테넌시에 추가되었는지 확인하려면 계정 담당자에게 문의하세요. 승인되면 다중 테넌트 권한을 받게 됩니다.
2. 올바른 사용자 유형이 있는지 확인하세요: 위 기능 세트를 활용할 관리 조직 내의 사용자는 핵심 또는 전체 플랫폼 사용자로 프로비저닝되어야 합니다.
3. 적절한 그룹에 사용자 추가: 핵심 또는 전체 플랫폼 사용자 유형을 가진 사용자는 `tenant_settings` 적용된 그룹에 추가되어야 합니다.

## NerdGraph에서는 무엇을 호출할 수 있나요? [#user-calls]

다중 테넌시에 대한 요구 사항을 충족한다는 것을 확인하면 관리되는 조직의 사용자를 관리하기 위한 NerdGraph 쿼리와 뮤테이션을 호출할 수 있습니다.

모든 `customerAdministration` 필드를 쿼리하고 다양한 변형을 실행할 수 있습니다.

<CollapserGroup>
  <Collapser id="grant-access-to-group" title="사용자 그룹에 액세스 권한 부여">
    이 변형을 사용하면 그룹에 액세스 권한을 부여할 수 있습니다. `roleID` 을 찾으려면 [역할 목록을](#list-roles) 참조하세요.

    ```graphql
    mutation {
      authorizationManagementGrantAccess(
        grantAccessOptions: {
          groupId: "11111111-1111-1111-1111-111111111111"
          accountAccessGrants: {
            accountId: YOUR_ACCOUNT_ID
            roleId: "YOUR_ROLE_ID"
          }
        }
      ) {
        roles {
          displayName
          accountId
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="revoke-access-to-group" title="사용자 그룹에 대한 액세스 취소">
    ```graphql
    mutation {
      authorizationManagementRevokeAccess(
        revokeAccessOptions: {
          accountAccessGrants: {
            accountId: YOUR_ACCOUNT_ID
            roleId: "YOUR_ROLE_ID"
          }
          groupId: "YOUR_GROUP_ID"
        }
      ) {
        roles {
          accountId
          displayName
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="create-user-group" title="사용자 그룹 생성">
    ```graphql
    mutation {
      userManagementCreateGroup(
        createGroupOptions: {
          authenticationDomainId: "YOUR_AUTH_DOMAIN_ID"
          displayName: "GROUP_DISPLAY_NAME"
        }
      ) {
        group {
          displayName
          id
        }
      }
    }


    ```
  </Collapser>

  <Collapser id="delete-user-group" title="사용자 그룹 삭제">
    ```graphql
    mutation {
      userManagementDeleteGroup(groupOptions: {id: "GROUP_ID_HERE"}) {
        group {
          displayName
          id
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="add-user-to-group" title="그룹에 사용자 추가">
    ```graphql
    mutation {
       userManagementAddUsersToGroups(addUsersToGroupsOptions: {groupIds: ["II"], userIds: ["3"]}) {
       groups {
     	  id
     	  displayName
     	  users {
       	    totalCount
     	  }
       }
     }
    }
    ```
  </Collapser>

  <Collapser id="remove-user-from-group" title="그룹에서 사용자 제거">
    ```graphql
    mutation {
      userManagementRemoveUsersFromGroups(
        removeUsersFromGroupsOptions: {
          groupIds: [YOUR_GROUP_IDS]
          userIds: [YOUR_USER_IDS]
        }
      ) {
        groups {
          displayName
          id
        }
      }
    }

    ```
  </Collapser>

  <Collapser id="modify-group-name" title="그룹 이름 수정">
    ```graphql
    mutation {
      userManagementUpdateGroup(
        updateGroupOptions: {
          id: "YOUR_GROUP_ID"
          displayName: "NEW_GROUP_DISPLAY_NAME"
        }
      ) {
        group {
          displayName
          id
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="Create new user" title="새로운 사용자 생성">
    이 변형을 사용하여 새로운 사용자를 생성하세요. `authenticationDomainId` 을 찾으려면 [인증 도메인 쿼리를](#query-domains) 참조하세요.

    ```graphql
    mutation {
      userManagementCreateUser(
        createUserOptions: {
          authenticationDomainId: "B"
          email: "a@b.c"
          name: "A B C"
        }
      ) {
        createdUser {
          id
          email
          name
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="delete-user" title="사용자 삭제">
    ```graphql
    mutation {
      userManagementDeleteUser(deleteUserOptions: {id: "ID_OF_YOUR_USER"}) {
        deletedUser {
          id
        }
      }
    }

    ```
  </Collapser>

  <Collapser id="query-domains" title="인증 도메인 쿼리">
    ```graphql
    {
      customerAdministration {
        authenticationDomains(filter: {organizationId: {eq: "Y"}}) {
      	items {
        	  id
        	  name
        	  provisioningType
        	  authenticationType
      	}
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
</CollapserGroup>

<UserJourneyControls previousStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation","title":"1단계","body":"계정 및 조직 생성"}} nextStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/share-accounts","title":"3단계","body":"계정 공유(선택 사항)"}} />