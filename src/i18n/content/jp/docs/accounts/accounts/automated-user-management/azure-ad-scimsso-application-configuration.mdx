---
title: Microsoft Entra ID SCIM /SSO アプリケーションの構成
tags:
  - Accounts
  - Accounts and billing
  - Automated user management
metaDescription: 'With New Relic, you can set up automated user provisioning and management for Azure Active Directory (AD) SSO.'
freshnessValidatedDate: never
translationType: machine
---

[自動化されたユーザー管理](/docs/accounts/accounts/automated-user-management/automated-user-provisioning-single-sign)により、SCIM を介して ID プロバイダーから New Relic ユーザーとグループをインポートして構成できます。このガイドでは、New Relic Azure AD SCIM/SSO アプリケーションの構成方法に関する Azure AD 固有の詳細を提供します。

## 要件

このガイドを使用する前に、 [要件と手順の概要](/docs/assign-users-automated-provisioning-allow-single-sign#requirements) をお読みください。

なお、この手順では、IDプロバイダーとNew Relicの間を行き来する必要があります。

## Step 1.認証ドメインの作成とSCIMの有効化 [#auth-domain]

New Relic の認証ドメイン UI へのアクセス方法については、 [認証ドメイン](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#ui) を参照してください。

まだ認証ドメインがない場合は、 <DNT>**+ Add new**</DNT>をクリックして、SCIM プロビジョニングされたユーザー用の新しい認証ドメインを作成します。

その認証ドメインに対して、 <DNT>**Source of users**</DNT>の下で<DNT>**SCIM**</DNT>を選択します。 後で使用するために API トークンをコピーして保存します。 これは一度だけ表示されることに注意してください。

## ステップ 2.AzureのNew Relicアプリをセットアップする [#azure-app]

次に、Azure の New Relic SAML/SCIM アプリをセットアップします。以前は Azure AD として知られていた Microsoft Entra ID は、New Relic が提供するものを含む、Microsoft Entra ID のさまざまな統合を含むアプリケーション ギャラリーを提供します。これを設定するには:

1. Microsoft Entra ID 管理センターに移動し、必要に応じてサインインします。[aad.portal.azure.com/](https://aad.portal.azure.com/)

2. 左側のメニューで

   <DNT>
     **Applications**
   </DNT>

   をクリックします。

3. ドロップダウンで、

   <DNT>
     **Enterprise applications**
   </DNT>

   をクリックします。

4. <DNT>
     **+New Application**
   </DNT>

   をクリックします。

5. 名前検索ボックスに

   <DNT>
     **New Relic**
   </DNT>

   と入力して SCIM/SSO アプリケーションを見つけ、アプリケーション

   <DNT>
     **New Relic by organization**
   </DNT>

   (

   <DNT>
     **New Relic by account**
   </DNT>

   ではありません) をクリックします。

6. <DNT>
     **Create**
   </DNT>

   をクリックします。

## Step 3.接続の設定 [#configure]

New Relic SCIM/SSO アプリケーションを設定して、ユーザーを自動的に New Relic にプロビジョニングします。

1. New Relic SCIM/SSO アプリケーション ページで、サイドバーの

   <DNT>
     **Provisioning**
   </DNT>

   リンクをクリックします。

2. メインペインで、

   <DNT>
     **Get started**
   </DNT>

   をクリックします。

3. <DNT>
     **Provisioning Mode**
   </DNT>

   選択リストで、

   <DNT>
     **Automatic**
   </DNT>

   を選択します。

4. New Relic の [認証ドメイン UI](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more) で、 [SCIM を有効にした新しいドメイン](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more#source-users) を設定します。

5. Azure AD の New Relic SCIM/SSO アプリの

   <DNT>
     **Admin credentials**
   </DNT>

   セクションで、

   <DNT>
     **Tenant URL**
   </DNT>

   フィールドと

   <DNT>
     **Secret token**
   </DNT>

   フィールドに、New Relic の認証ドメイン UI で提供された値を入力します。

6. New Relic に接続できることを確認するには、

   <DNT>
     **Test Connection**
   </DNT>

   をクリックします。

7. 検証が成功したことを示すメッセージが表示されたら、

   <DNT>
     **Save**
   </DNT>

   をクリックします。

New Relic SCIM/SSO アプリケーションが New Relic と接続できるようになりました。次のセクションに進み、プロビジョニングルールを設定します。

## Step 4.プロビジョニングルールの設定 [#configure-rules]

初期状態では、New Relic に何も送信されるように設定されていません。ユーザーの作成、更新、非アクティブ化の変更を送信するには、Microsoft Entra ID を構成する必要があります。

<DNT>**Provisioning**</DNT>ページに移動して、次の操作を完了してください。

1. 概要ページで<DNT>**Edit attribute mappings**</DNT>をクリックします。

2. <DNT>**Mappings**</DNT>セクションを展開します。

3. <DNT>**Provision Azure Active Directory Users**</DNT>をクリックします。

4. <DNT>**Target Object Actions**</DNT> 、 <DNT>**Create**</DNT> 、 <DNT>**Update**</DNT> 、 <DNT>**Delete**</DNT>のチェックボックスがすべてオンになっていることを確認します。

5. <DNT>**Attribute Mappings**</DNT>ご使用の環境に対して正しいことを確認してください。 リストに表示される各 New Relic 属性には値を指定する必要があります。

   <Callout variant="tip">
     左側のリストに表示されている Azure Active Directory 属性が、New Relic に送信する情報の適切なソースであることを確認します。 特に、すべての環境で<DNT>**mail**</DNT>属性が設定されるわけではありません。 環境で<DNT>**mail**</DNT>属性が設定されていない場合は、 <DNT>**userPrincipalName**</DNT>適切な代替手段となる可能性があります。
   </Callout>

6. 次のセクションでユーザーとグループの構成が完了するまで、 <DNT>**Enabled**</DNT>スイッチを<DNT>**No**</DNT>に設定したままにしておきます。 すべての設定が完了したら、このページに戻り、スイッチを<DNT>**Yes**</DNT>に設定します。

7. <DNT>**Save**</DNT>をクリックします。

以下は、デフォルト値で記入された属性マッピングページの例です。お客様の状況に応じて、異なる値が設定される場合があります。

<img
  title="Azure_AD_Provisioning_Attribute_Mapping.png"
  alt="Screen capture showing how to set attributes."
  src="/images/accounts_screenshot-crop_Azure-AD-attribute-mapping.webp"
/>

プロビジョニングルールを保存すると、New Relic SCIM/SSO アプリケーションは、アプリケーションに割り当てられたユーザーに加えられた変更をプロビジョニングする準備が整います。次のセクションに進み、New Relic SCIM/SSO アプリケーションにユーザーとグループを割り当てます。

## ステップ5.ユーザーのユーザータイプの設定 [#user-type]

ユーザーが New Relic でプロビジョニングされると、 [<DNT>**User management**</DNT> UI](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where)で確認できるようになります。

SCIMを介してNewRelicにユーザーを追加しているが、SCIMを介して[ユーザータイプ](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type)を管理してい**ない**場合、ユーザーは[基本ユーザー](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type)として開始されます。ユーザーをアップグレードするには、次の2つのオプションがあります。

* ユーザーの編集には、ユーザー管理UI [を使用します。](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#edit-user-type)
* [](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#edit-user-type)
* [](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#edit-user-type)[ユーザータイプを管理するためにAzureアプリを設定します。](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#manage-user-type-scim)

## ステップ 6. グループ アクセスの割り当て [#assign-users]

これらの手順が完了すると、 [ユーザー管理 UI](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where)に移動して、New Relic でユーザーを確認できるようになります。ユーザーが New Relic に存在するようになったので、ロールとアカウントへのアクセスを許可する必要があります。これが行われていない場合、ユーザーはまだ New Relic にアクセスできません。これを行う方法については、次を参照してください。

* [ユーザー アクセスの仕組み](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#understand-concepts)
* [ユーザー管理のチュートリアル](/docs/accounts/accounts-billing/new-relic-one-user-management/tutorial-add-new-user-groups-roles-new-relic-one-user-model/)

## Step 7.SAML SSOの設定 [#saml]

ユーザーにSAML SSOを有効にするには、 [SAMLの説明](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#authentication) を参照してください。
