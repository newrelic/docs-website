---
title: 'ステップ3: アカウントを共有する（オプション）'
metaDescription: Share accounts with managed organizations using multi-tenency
freshnessValidatedDate: '2024-09-05T00:00:00.000Z'
translationType: machine
---

<Callout variant="important">
  ロータッチ組織構造を設定した場合、この手順は適用されません。 [手順 1: アカウントと組織を作成する で、](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation)手間のかからない詳細を確認してください。
</Callout>

アカウント共有により、管理組織のアドミニストレーターが監視しているデータを管理組織に公開できるようになります。 ハイタッチ組織構造で最初のアカウント共有を設定した後 ( [「アカウントと組織の作成」](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation)を参照)、フォローアップの変更が必要になる場合があります。

あなたが Betty&apos;s MSP (マネージド サービスプロバイダー) のアドミニストレーターで、顧客 Wayne Enterprises のマネージド アカウントを監視しているとします。 また、そのアカウントを Wayne Enterprises 組織と共有しました。 実行できるフォローアップ タスクは次のとおりです。

<CollapserGroup>
  <Collapser id="create-share-accounts" title="追加のアカウントを作成して共有する">
    顧客である Wayne Enterprises が別のアカウントを希望する場合、次のようにします。

    1. NerdGraph ミューテーション`accountManagementCreateAccount`を使用して、管理組織に別の Wayne Enterprises アカウントを作成します。
    2. Wayne Enterprises も新しいアカウントのデータを直接確認したい場合は、 `organizationCreateSharedAccount`使用してそのアカウントを組織と共有します。
  </Collapser>

  <Collapser id="revoke-access-to-share" title="共有アカウントへのアクセスを取り消す">
    顧客 Wayne Enterprises とアカウントを共有する必要がなくなったと判断した場合は、ミューテーション`organizationRevokeSharedAccount`を使用して共有を取り消すことができます。
  </Collapser>

  <Collapser id="update-roles" title="共有アカウントの役割を更新する">
    Wayne Enterprises の共有アカウントのいずれかのユーザーロールを変更する必要がある場合は、ミューテーション`organizationUpdateSharedAccount`を使用できます。
  </Collapser>
</CollapserGroup>

## 要件 [#requirements]

この機能を使用するには、組織で次の作業が完了していることを確認してください。

1. 承認を得る: アカウント担当者に連絡して、組織がマルチテナントに追加されたことを確認してください。 承認されると、マルチテナントの権限が付与されます。
2. ユーザー タイプが正しいことを確認してください。上記の機能セットを利用する管理組織内のユーザーは、コア プラットフォーム ユーザーまたはフル プラットフォーム ユーザーとしてプロビジョニングする必要があります。
3. ユーザーを適切なグループに追加: コアまたは完全なプラットフォーム ユーザー タイプを持つユーザーは、 `tenant_settings`が適用されたグループに追加する必要があります。

## Nerdgraph では何を呼び出すことができますか? [#share-calls]

アカウント共有について理解を深めていただくために、以下に基本的な例をいくつか示します。 まず、一般的なルーチンを見てみましょう。

1. ソース組織はターゲット組織から組織 ID を取得します。 目標組織ユーザーが**Access Management** \[アクセス管理]タブを表示すると、目標組織 ID を取得できます。
2. ソース組織は API を呼び出し、ターゲット組織 ID、アカウント ID、制限ロールを渡します。 ソース組織は、ターゲット組織のユーザーが制限される最大の機能を定義する制限ロールを宣言できます。

アカウント共有のために実行できる通話の種類は次のとおりです。

<CollapserGroup>
  <Collapser id="create-a-share" title="シェアを作成する">
    このミューテーションを使用するには、ターゲット組織をすでに作成しておく必要があります。 まだ設定されていない場合は、 [「ステップ 1: アカウントと組織を作成する」](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation)を確認してください。

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

  <Collapser id="revoke-share" title="共有を取り消す">
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

  <Collapser id="find-orgs-for-account" title="特定の共有アカウントを持つ管理対象組織を検索する">
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

  <Collapser id="find-shared-accounts" title="特定の管理対象組織と共有されているアカウントを検索する">
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

  <Collapser id="update-roles" title="役割の更新">
    共有アカウントのロールを変更するには、このミューテーションを使用します。 既存のアカウントのロールを検索するには、 [「ロールの一覧表示」](#list-roles)のクエリを使用します。

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

<UserJourneyControls previousStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/delegated-administration","title":"一つ前の手順","body":"ユーザーとアクセスを管理する"}} />