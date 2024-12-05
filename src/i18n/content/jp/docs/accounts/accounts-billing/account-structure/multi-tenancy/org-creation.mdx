---
title: 'ステップ1: アカウントと組織を作成する'
metaDescription: Create organizations and accounts in the multi-tenency structure
freshnessValidatedDate: '2024-09-05T00:00:00.000Z'
translationType: machine
---

マルチテナントを使用すると、プライマリの管理組織に関連付けられた管理対象組織をNew Relicに任意の数設定できます。 マルチテナントを設定する最初のステップは、アカウントと組織を作成することです。 これを行うには、作成する組織構造に応じて、さまざまな NerdGraph ミューテーションを使用します。

* [ハイタッチ](#high-touch): マネージド サービスプロバイダーは通常、 New Relicに直接アクセスしたい顧客をオンボードするためにこのアプローチを使用します。

* [ロータッチ](#low-touch): エンタープライズ企業はこのアプローチを使用して、New Relic でビジネス ユニットまたは子会社の新しい組織とアカウントを作成します。

どのアプローチを取ればよいか分からないですか? [マルチテナント アプローチの概要を](/docs/accounts/accounts-billing/account-structure/multi-tenancy/intro-to-multi-tenancy#approaches)参照してください。

<Callout variant="tip">
  消費価格設定のマルチテナント顧客の場合、取り込み数とユーザー数は管理対象組織全体で集計されます。 この集計データは管理組織のみに表示されます。
</Callout>

## 要件 [#requirements]

なお、マルチテナント機能を使用するには、組織で次の作業が完了していることを確認してください。

1. 承認を得る: アカウント担当者に連絡して、組織がマルチテナントに追加されたことを確認します。 承認されると、マルチテナントの権限が付与されます。
2. ユーザー タイプが正しいことを確認してください。上記の機能セットを利用する管理組織内のユーザーは、コア プラットフォーム ユーザーまたはフル プラットフォーム ユーザーとしてプロビジョニングする必要があります。
3. ユーザーを適切なグループに追加: コアまたは完全なプラットフォーム ユーザー タイプを持つユーザーは、 `tenant_settings`が適用されたグループに追加する必要があります。

## NerdGraph で何を呼び出すことができますか? [#org-calls]

あなたが採用したいアプローチ（ロータッチまたはハイタッチ）に当てはまる以下の変異を見つけてください。

### ハイタッチ構造 [#high-touch]

あなたがマネージド サービスプロバイダーのアドミニストレーターである場合、または子会社を大幅に制御したい企業の場合は、次の手順を実行します。

<CollapserGroup>
  <Collapser id="high-touch-only-share" title="ハイタッチ: 共有するためのアカウントを作成する">
    ハイタッチ アプローチの主な利点は、独自の管理組織内で顧客アカウントを直接作成できることです。 管理組織内のこれらのアカウントを使用すると、顧客のテレメトリーを監視できます。

    その後、顧客が監視しているアカウントのデータを確認したい場合、顧客用の組織を作成するときにアカウントを共有できます。 管理対象組織内のユーザーは、指定したアカウントのデータのみを表示できます。

    管理対象組織と共有する予定のアカウントを作成するには、次のミューテーションを実行します。

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

    間違ってアカウント名を変更する必要がある場合は、 [NerdGraph チュートリアル](/docs/apis/nerdgraph/examples/manage-accounts-nerdgraph/#rename-accounts)を参照してください。

    共有したいアカウントを作成したら、組織を作成する準備が整います。
  </Collapser>

  <Collapser id="high-touch-org" title="ハイタッチ: 組織を作る">
    ハイタッチ構造で組織を作成する場合、自分の組織で管理しているアカウントを管理対象組織のユーザーと共有したい場合がよくあります。 組織を作成し、同時にアカウントを共有するには、次のようなミューテーションを実行します。

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

    最初に管理対象組織とアカウントを共有したくない場合は、後でいつでも`organizationCreateSharedAccount`ミューテーションを使用できます。 このミューテーションの使用方法の詳細については、 [「ステップ 3: アカウントを共有する」](/docs/accounts/accounts-billing/account-structure/multi-tenancy/share-accounts)を参照してください。
  </Collapser>
</CollapserGroup>

### ロータッチ構造 [#low-touch]

あなたが企業組織のアドミニストレーターであり、子会社をあまり制御する必要がない場合は、1 回の呼び出しで管理対象組織と管理対象アカウントを作成できます。

<CollapserGroup>
  <Collapser id="low-touch-org" title="ロータッチ：組織を作る">
    このミューテーションにより、組織と新しい管理対象アカウントが作成されます。

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

### あなたの組織をクエリする [#org-queries]

管理対象組織を追跡するには、次のクエリを使用します。

<CollapserGroup>
  <Collapser id="list-orgs" title="管理対象組織を一覧表示する">
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

<UserJourneyControls previousStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/intro-to-multi-tenancy","title":"スタートに戻る","body":"マルチテナントの概要"}} nextStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/delegated-administration","title":"ステップ2","body":"ユーザーとアクセスを管理する"}} />