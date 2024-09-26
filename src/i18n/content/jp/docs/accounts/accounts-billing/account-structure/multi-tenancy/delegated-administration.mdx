---
title: 'ステップ2: ユーザーとアクセスを管理する'
metaDescription: Use the delegated administration options in multi-tenancy to manage user access in other organizations
freshnessValidatedDate: '2024-09-05T00:00:00.000Z'
translationType: machine
---

マルチテナントを設定する場合、委任管理を使用して、他の管理対象組織内でユーザーまたはアクセス管理の変更を行うことができます。 マネージド サービスプロバイダーの場合、管理の委任により、エンド カスタマーに代わってユーザーとアクセスを管理できます。

## 要件 [#requirements]

なお、マルチテナント機能を使用するには、組織で次の作業が完了していることを確認してください。

1. 承認を得る: アカウント担当者に連絡して、組織がマルチテナントに追加されたことを確認してください。 承認されると、マルチテナントの権限が付与されます。
2. ユーザー タイプが正しいことを確認してください。上記の機能セットを利用する管理組織内のユーザーは、コア プラットフォーム ユーザーまたはフル プラットフォーム ユーザーとしてプロビジョニングする必要があります。
3. ユーザーを適切なグループに追加: コアまたは完全なプラットフォーム ユーザー タイプを持つユーザーは、 `tenant_settings`が適用されたグループに追加する必要があります。

## NerdGraph で何を呼び出すことができますか? [#user-calls]

マルチテナントの要件を満たしていることを確認したら、管理対象組織内のユーザーを管理するための NerdGraph クエリとミューテーションを呼び出すことができます。

すべての`customerAdministration`フィールドをクエリし、さまざまなミューテーションを実行できるようになります。

<CollapserGroup>
  <Collapser id="grant-access-to-group" title="ユーザーグループへのアクセスを許可する">
    このミューテーションを使用してグループへのアクセスを許可します。 `roleID`を見つけるには、 [「ロールの一覧表示」](#list-roles)を参照してください。

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

  <Collapser id="revoke-access-to-group" title="ユーザーグループへのアクセスを取り消す">
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

  <Collapser id="create-user-group" title="ユーザーグループを作成する">
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

  <Collapser id="delete-user-group" title="ユーザーグループを削除">
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

  <Collapser id="add-user-to-group" title="ユーザーをグループに追加する">
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

  <Collapser id="remove-user-from-group" title="グループからユーザーを削除する">
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

  <Collapser id="modify-group-name" title="グループ名を変更する">
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

  <Collapser id="Create new user" title="新しいユーザーを作成">
    このミューテーションを使用して新しいユーザーを作成します。 `authenticationDomainId`を見つけるには、 [「認証ドメインのクエリ」](#query-domains)を参照してください。

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

  <Collapser id="delete-user" title="ユーザーの削除">
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

  <Collapser id="query-domains" title="認証ドメインのクエリ">
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

  <Collapser id="list-roles" title="役割を一覧表示する">
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

<UserJourneyControls previousStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation","title":"ステップ1","body":"アカウントと組織を作成する"}} nextStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/share-accounts","title":"ステップ3","body":"アカウントを共有する（オプション）"}} />