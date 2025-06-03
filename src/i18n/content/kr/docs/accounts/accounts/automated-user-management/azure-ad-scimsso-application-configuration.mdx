---
title: Microsoft Entra ID SCIM /SSO 애플리케이션 구성
tags:
  - Accounts
  - Accounts and billing
  - Automated user management
metaDescription: 'With New Relic, you can set up automated user provisioning and management for Azure Active Directory (AD) SSO.'
freshnessValidatedDate: never
translationType: machine
---

[자동화된 사용자 관리](/docs/accounts/accounts/automated-user-management/automated-user-provisioning-single-sign) 를 통해 SCIM을 통해 ID 공급자로부터 New Relic 사용자 및 그룹을 가져오고 구성할 수 있습니다. 이 가이드에서는 New Relic Azure AD SCIM/SSO 애플리케이션을 구성하는 방법에 대한 Azure AD 관련 세부 정보를 제공합니다.

## 요구 사항

이 안내서를 사용하기 전에 [요구 사항 및 절차 개요](/docs/assign-users-automated-provisioning-allow-single-sign#requirements) 를 읽으십시오.

이 지침은 귀하의 신원 제공자와 New Relic 사이를 왔다갔다 해야 한다는 점에 유의하십시오.

## 1단계. 인증 도메인 생성 및 SCIM 활성화 [#auth-domain]

New Relic 인증 도메인 UI에 접근하는 방법은 [인증 도메인](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#ui) 을 참조하십시오.

아직 인증 도메인이 없는 경우 <DNT>**+ Add new**</DNT> 클릭하여 SCIM 프로비저닝 사용자를 위한 새 인증 도메인을 생성합니다.

해당 인증 도메인의 경우 <DNT>**Source of users**</DNT> 아래에서 <DNT>**SCIM**</DNT> 선택합니다. 나중에 사용할 수 있도록 API 토큰을 복사하고 저장하세요. 이 내용은 한 번만 표시됩니다.

## 2단계. Azure의 New Relic 앱 설정 [#azure-app]

다음으로 Azure의 New Relic SAML/SCIM 앱을 설정합니다. 이전에 Azure AD로 알려진 Microsoft Entra ID는 New Relic이 제공하는 것을 포함하여 Microsoft Entra ID에 대한 다양한 통합을 포함하는 애플리케이션 갤러리를 제공합니다. 이를 설정하려면:

1. Microsoft Entra ID 관리 센터로 이동하여 필요한 경우 로그인하세요. [aad.portal.azure.com/](https://aad.portal.azure.com/)

2. 왼쪽 메뉴에서

   <DNT>
     **Applications**
   </DNT>

   클릭합니다.

3. 드롭다운에서

   <DNT>
     **Enterprise applications**
   </DNT>

   클릭합니다.

4. <DNT>
     **+New Application**
   </DNT>

   을 클릭합니다.

5. 검색 창 이름에

   <DNT>
     **New Relic**
   </DNT>

   을 입력하여 SCIM/SSO 기능을 찾고, 제작

   <DNT>
     **New Relic by organization**
   </DNT>

   (

   <DNT>
     **New Relic by account**
   </DNT>

   아님)을 클릭하세요.

6. <DNT>
     **Create**
   </DNT>

   을 클릭합니다.

## 3단계. 연결 구성 [#configure]

사용자를 New Relic에 자동으로 프로비저닝하도록 New Relic SCIM/SSO 애플리케이션을 구성합니다.

1. 뉴렐릭 SCIM/SSO 전설 페이지의 사이드바에 있는

   <DNT>
     **Provisioning**
   </DNT>

   링크를 클릭하세요.

2. 기본 창에서

   <DNT>
     **Get started**
   </DNT>

   클릭합니다.

3. <DNT>
     **Provisioning Mode**
   </DNT>

   선택 목록에서

   <DNT>
     **Automatic**
   </DNT>

   선택합니다.

4. New Relic의 [인증 도메인 UI](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more) 에서 [SCIM이 활성화](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more#source-users) 된 새 도메인을 설정합니다.

5. Azure AD의 뉴렐릭 SCIM/SSO 앱의

   <DNT>
     **Admin credentials**
   </DNT>

   섹션에서 뉴렐릭의 인증 UI 에 제공된 값으로

   <DNT>
     **Tenant URL**
   </DNT>

   및

   <DNT>
     **Secret token**
   </DNT>

   필드를 채웁니다.

6. 뉴렐릭에 연결할 수 있는지 확인하려면

   <DNT>
     **Test Connection**
   </DNT>

   클릭하세요.

7. 확인 성공을 알리는 메시지가 표시되면

   <DNT>
     **Save**
   </DNT>

   클릭합니다.

New Relic SCIM/SSO 애플리케이션은 이제 New Relic과 연결할 수 있습니다. 프로비저닝 규칙을 구성하려면 다음 섹션을 계속하십시오.

## 4단계. 프로비저닝 규칙 구성 [#configure-rules]

처음에는 New Relic으로 전송되도록 구성된 것이 없습니다. 사용자 생성, 업데이트 및 비활성화에 대한 변경 사항을 보내려면 Microsoft Entra ID를 구성해야 합니다.

<DNT>**Provisioning**</DNT> 페이지로 이동하여 다음을 완료하세요.

1. 개요 페이지에서 <DNT>**Edit attribute mappings**</DNT> 클릭합니다.

2. <DNT>**Mappings**</DNT> 섹션을 확장합니다.

3. <DNT>**Provision Azure Active Directory Users**</DNT> 을(를) 클릭합니다.

4. <DNT>**Target Object Actions**</DNT>, <DNT>**Create**</DNT>, <DNT>**Update**</DNT> 및 <DNT>**Delete**</DNT> 확인란이 모두 선택되어 있는지 확인합니다.

5. <DNT>**Attribute Mappings**</DNT> 이 사용자 환경에 맞는지 확인하세요. 목록에 표시된 각 뉴렐릭 속성은 값을 받아야 합니다.

   <Callout variant="tip">
     왼쪽 목록에 표시된 Azure Active Directory 속성이 뉴렐릭으로 보낼 정보에 대한 좋은 소스인지 확인하세요. 특히 모든 환경이 <DNT>**mail**</DNT> 속성을 설정하는 것은 아닙니다. 사용자 환경에서 <DNT>**mail**</DNT> 속성을 설정하지 않은 경우 <DNT>**userPrincipalName**</DNT> 좋은 대안이 될 수 있습니다.
   </Callout>

6. 다음 섹션에서 사용자 및 그룹 구성을 완료할 때까지 <DNT>**Enabled**</DNT> 의 스위치를 <DNT>**No**</DNT> 로 설정된 상태로 둡니다. 모든 구성이 준비되면 이 페이지로 돌아와 스위치를 <DNT>**Yes**</DNT> 로 설정하세요.

7. <DNT>**Save**</DNT> 을(를) 클릭합니다.

다음은 기본값으로 채워진 속성 매핑 페이지의 예입니다. 상황에 따라 값이 다르게 구성될 수 있습니다.

<img
  title="Azure_AD_Provisioning_Attribute_Mapping.png"
  alt="Screen capture showing how to set attributes."
  src="/images/accounts_screenshot-crop_Azure-AD-attribute-mapping.webp"
/>

프로비저닝 규칙을 저장한 후 New Relic SCIM/SSO 애플리케이션은 애플리케이션에 할당된 사용자에 대한 변경 사항을 프로비저닝할 준비가 됩니다. 다음 섹션을 계속 진행하여 New Relic SCIM/SSO 애플리케이션에 사용자 및 그룹을 할당합니다.

## 5단계. 사용자의 사용자 유형 설정 [#user-type]

사용자가 뉴렐릭에 프로비저닝되면 [<DNT>**User management**</DNT> UI](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where) 에서 볼 수 있습니다.

SCIM을 통해 New Relic에 사용자를 추가하지만 SCIM을 통해 [사용자 유형](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) 을 관리 **하지 않는** 경우 [기본 사용자](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) 로 시작합니다. 사용자를 업그레이드하려면 두 가지 옵션이 있습니다.

* [사용자 관리 UI](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#edit-user-type) 를 사용하여 사용자를 편집합니다.
* [사용자 유형을 관리하도록 Azure 앱을 구성합니다.](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#manage-user-type-scim)

## 6단계. 그룹 액세스 할당 [#assign-users]

이 단계가 완료되면 [사용자 관리 UI](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where) 로 이동하여 New Relic에서 사용자를 볼 수 있습니다. 이제 사용자가 New Relic에 있으므로 역할 및 계정에 대한 액세스 권한을 부여해야 합니다. 이것이 완료되지 않으면 사용자는 아직 New Relic에 액세스할 수 없습니다. 이 작업을 수행하는 방법을 알아보려면 다음을 참조하세요.

* [사용자 액세스 작동 방식](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#understand-concepts)
* [사용자 관리 튜토리얼](/docs/accounts/accounts-billing/new-relic-one-user-management/tutorial-add-new-user-groups-roles-new-relic-one-user-model/)

## 7단계. SAML SSO 구성 [#saml]

사용자에 대해 SAML SSO를 활성화하려면 [SAML 지침](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#authentication) 을 참조하십시오.
