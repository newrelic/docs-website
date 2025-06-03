---
title: Best practices for integration users
tags:
  - Best practices
  - Integrations
metaDescription: Here are some best practices for controlling how you expose your New Relic data when you're using an integration.
freshnessValidatedDate: 2024-04-24T00:00:00.000Z
redirects:
  - /docs/more-integrations/best-practices-integration
---

As a New Relic administrator, you must operate your New Relic organization with the principle of least privilege. This principle is a security concept in which a user should only have access to the specific data, systems, and resources needed to complete a necessary task for the organization. By following this principle, you can reduce the risk of unauthorized access to sensitive data. This includes assigning permissions based on job roles and responsibilities. In a [New Relic organization](/docs/accounts/accounts-billing/account-structure/new-relic-account-structure/), account-based access allows you to control what information is available to the users in your organization. This ensures that sensitive data remains secure and only authorized personnel can view it.

Dealing with integrations with third-party systems can complicate application access. For example, users in Atlassian Jira may not have access to New Relic. The system may also lack centralized permissions or controls. Learn about best practices for data sharing on this page.

## Account and API key scope [#account-api-key-scope]

The first thing to consider when controlling access to your New Relic data is the scope of your account. Your organization can have multiple accounts and users are then given access to accounts. This allows you to limit the data these users can see. If your organization only has a single account, this means that all users have access to the same information. In this situation, you may only want to expose some data through an integration.

Some integrations with New Relic take advantage of the ability to generate an API key to expose your data to other systems (for example, the Atlassian integration). If a user has access to 3 out of 5 accounts in a New Relic organization, their generated API key will have access to those same 3 accounts.

<Callout variant="important">
  Note that an API key inherits the account permissions of the user who generated it.
</Callout>

It's important to understand this distinction when setting up an integration. For example, you may want to make sure about generating an API key from a user who has the correct permissions. You may want the user to only have access to certain accounts in the application. This limits what they can see and share with others. For example, say you have more users in your Atlassian application than in your New Relic accounts, and you configure the Atlassian integration. The users in the Atlassian integration will be able to see the New Relic data shared with Atlassian in the Atlassian application, regardless of whether those users have access to the corresponding New Relic accounts.

## Integration user leverage [#integration-user-leverage]

When configuring third-party integrations with New Relic, we highly recommend using a dedicated integration user. This means [creating a New Relic user](/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions/) just for a specific integration. You can give this user a name that represents the integration in question. A big advantage of this is that you don't need to use your Admin-level access for the integration. All you have to do is create the new user and assign only the accounts that you want to expose to the integration. Then, generate an API key for the integration user. This allows the API key that you use for an integration to expose only the account details that you want to use for the integration. It also allows you to decouple your personal New Relic access from that of the integration.
