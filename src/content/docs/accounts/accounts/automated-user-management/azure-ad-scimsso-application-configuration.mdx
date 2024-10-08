---
title: Microsoft Entra ID SCIM /SSO application configuration
tags:
  - Accounts
  - Accounts and billing
  - Automated user management
metaDescription: 'With New Relic, you can set up automated user provisioning and management for Azure Active Directory (AD) SSO.'
redirects:
  - /docs/azure-scim-assign-users-automated-provisioning-beta
  - /docs/azure-scimsso-application-configuration
freshnessValidatedDate: never
---

Our [automated user management](/docs/accounts/accounts/automated-user-management/automated-user-provisioning-single-sign) allows you to import and configure your New Relic users and groups from your identity provider via SCIM. This guide provides Azure AD-specific details on how to configure the New Relic Azure AD SCIM/SSO application.

## Requirements

Before using this guide, read the [requirements and procedure overview](/docs/assign-users-automated-provisioning-allow-single-sign#requirements).

Note that these instructions require going back and forth between your identity provider and New Relic.

## Step 1. Create authentication domain and enable SCIM [#auth-domain]

For how to get to the New Relic authentication domain UI, see [Authentication domain](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#ui).

If you don't already have one, create a new authentication domain for your SCIM-provisioned users by clicking <DNT>**+ Add new**</DNT>.

For that authentication domain, under <DNT>**Source of users**</DNT>, select <DNT>**SCIM**</DNT>. Copy and save the API token for later use. Note that this will be shown only once.

## Step 2. Set up Azure's New Relic app [#azure-app]

Next, you'll set up Azure's New Relic SAML/SCIM app. Microsoft Entra ID, formerly know as Azure AD, provides an application gallery, which includes various integrations for Microsoft Entra ID, including the ones that New Relic offers. To set this up:

1. Go to the Microsoft Entra ID admin center, and sign in if necessary. [aad.portal.azure.com/](https://aad.portal.azure.com/)
2. Click on <DNT>**Applications**</DNT> in the left hand menu.
3. In the drop down, click on <DNT>**Enterprise applications**</DNT>.
4. Click on <DNT>**+New Application**</DNT>.
5. Find our SCIM/SSO application by entering <DNT>**New Relic**</DNT> in the name search box, and click on the application <DNT>**New Relic by organization**</DNT> (not <DNT>**New Relic by account**</DNT>).
6. Click on <DNT>**Create**</DNT>.

## Step 3. Configure connection [#configure]

Configure the New Relic SCIM/SSO application to automatically provision your users to New Relic.

1. From the New Relic SCIM/SSO application page, click on the <DNT>**Provisioning**</DNT> link in the sidebar.
2. In the main pane, click on <DNT>**Get started**</DNT>.
3. In the <DNT>**Provisioning Mode**</DNT> pick-list, choose <DNT>**Automatic**</DNT>.
4. In New Relic's [authentication domain UI](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more), set up a new domain with [SCIM enabled](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more#source-users).
5. In Azure AD's New Relic SCIM/SSO app, in the <DNT>**Admin credentials**</DNT> section, fill out the <DNT>**Tenant URL**</DNT> and <DNT>**Secret token**</DNT> fields with the values provided in New Relic's authentication domain UI.
6. To verify you can connect to New Relic, click <DNT>**Test Connection**</DNT>.
7. When you see a message indicating verification success, click <DNT>**Save**</DNT>.

The New Relic SCIM/SSO application can now connect with New Relic. Continue with the following section to configure the provisioning rules.

## Step 4. Configure provisioning rules [#configure-rules]

Initially, nothing is configured to be sent to New Relic. You must configure Microsoft Entra ID to send changes for user creation, updates, and deactivation.

Go to the <DNT>**Provisioning**</DNT> page and complete the following:

1. In the overview page click on <DNT>**Edit attribute mappings**</DNT>.
2. Expand the <DNT>**Mappings**</DNT> section.
3. Click <DNT>**Provision Azure Active Directory Users**</DNT>.
4. Verify the <DNT>**Target Object Actions**</DNT>, <DNT>**Create**</DNT>, <DNT>**Update**</DNT>, and <DNT>**Delete**</DNT> checkboxes are all checked.
5. Verify the <DNT>**Attribute Mappings**</DNT> look correct for your environment. Each of the New Relic attributes shown in the list must receive a value.

   <Callout variant="tip">
     Ensure that the Azure Active Directory attributes shown in the list on the left are good sources for the information to send to New Relic. In particular, not all environments set the <DNT>**mail**</DNT> attribute. If your environment does not set the <DNT>**mail**</DNT> attribute, <DNT>**userPrincipalName**</DNT> could be a good alternative.
   </Callout>
6. Leave the switch for <DNT>**Enabled**</DNT> set to <DNT>**No**</DNT> until you're done with the user and group configuration in the next section. Once all configuration is ready, return to this page and set the switch to <DNT>**Yes**</DNT>.
7. Click <DNT>**Save**</DNT>.

Here's an example of a filled-in attribute mapping page with the default values. Your values may be configured differently depending on your situation.

<img
  title="Azure_AD_Provisioning_Attribute_Mapping.png"
  alt="Screen capture showing how to set attributes."
  src="/images/accounts_screenshot-crop_Azure-AD-attribute-mapping.webp"
/>

After saving the provisioning rules, the New Relic SCIM/SSO application is ready to provision any changes made to users assigned to the application. Continue with the following section to assign users and groups to the New Relic SCIM/SSO application.

## Step 5. Set your users' user type [#user-type]

When your users are provisioned in New Relic, you're able to see them in the [<DNT>**User management**</DNT> UI](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where).

If you're adding users to New Relic via SCIM but **not** managing their [user type](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) via SCIM, they start out as [basic users](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type). To upgrade users, you have two options:

* Use the [User management UI](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#edit-user-type) to edit users.
* [Configure the Azure app to manage user type.](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#manage-user-type-scim)

## Step 6. Assign group access [#assign-users]

Once these steps are completed, you should be able to see your users in New Relic by going to the [User management UI](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where). Now that your users are present in New Relic, you must grant them access to roles and accounts. If this is not done, your users don't yet have access to New Relic. To learn how to do this, see:

* [How user access works](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#understand-concepts)
* The [user management tutorial](/docs/accounts/accounts-billing/new-relic-one-user-management/tutorial-add-new-user-groups-roles-new-relic-one-user-model/)

## Step 7. Configure SAML SSO [#saml]

To enable SAML SSO for your users, see the [SAML instructions](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#authentication).
