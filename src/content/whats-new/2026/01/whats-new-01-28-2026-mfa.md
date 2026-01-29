---
title: "Enhance account security with multi-factor authentication"
summary: "Secure your authentication domains by requiring multi-factor authentication (MFA) for all users."
releaseDate: "2026-01-28"
learnMoreLink: "https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#mfa"
---

Protect your data and control access to your New Relic organization by enabling multi-factor authentication (MFA). This feature allows administrators to add an essential layer of security to authentication domains, ensuring that users provide two or more verification factors to gain access.

By requiring MFA, you significantly reduce the risk of unauthorized access resulting from compromised credentials. This feature is available for organizations that do not use a third-party identity provider (IdP) for SAML SSO but still want to maintain high security standards for their users.

To get started, navigate to the **Authentication domains** UI under **Administration**. From there, you can select an authentication domain and toggle the **MFA** requirement. Once enabled, users in that authentication domain will be prompted to verify their email at their next login and all subsequent logins. They will also receive ten backup codes the first time they are required to verify their email that can be used in case they cannot access their email. Ensure that your users copy these codes to a secure location.

[**Learn more**](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#mfa) about configuring authentication domains and securing your account.
