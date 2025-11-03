---
title: 'Password Protection (Public Dashboards)'
summary: 'Enhance the security of your publicly shared content by leveraging our new password protection feature so that only users with the URL and the password can access the shared content!'
releaseDate: '2025-07-30'
learnMoreLink: 'https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/share-charts-dashboards-externally/#create-dashboard-url'
getStartedLink: 'https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/share-charts-dashboards-externally/'
---

Secure your sensitive operational data with New Relic's new Password Protection feature for Public Dashboards! This exciting new capability allows you to add a password to your shared dashboards, ensuring only authorized individuals can access them. With auto-generated, complex passwords, session-based access, and API control, you can confidently share insights externally or with specific internal teams without compromising security. Plus, keep an eye out for upcoming enhancements like custom password options and more granular usage tracking!

## Key features [#key-features]

-   Password generation: Passwords are auto-generated and highly complex.
-   Password storage: New Relic DOES NOT store the plain-text password. It's only displayed once upon creation or reset. Users must copy and securely store the password themselves.
-   Session-based access: Once a user enters the correct password, they will have access to the dashboard for a 3-hour session. They will not need to re-enter the password during this period unless the session expires or their browser closes.
-   reCAPTCHA: A reCAPTCHA challenge may appear on the password entry page, particularly after multiple failed attempts.
-   API control: Full control over enabling, disabling, and resetting passwords is available via NerdGraph API.
-   UI control: Users can enable/disable password protection and initiate a password reset.

### Learn more [#learn-more]

-   [Password Protection for Public Dashboards](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/share-charts-dashboards-externally/#create-dashboard-url)
-   [Password Protection via API](https://docs.newrelic.com/docs/apis/nerdgraph/examples/manage-live-dashboard-urls-via-api/#enable-password-dashboard-url-nerdgraph)
-   [Password protection management & best practices](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/share-charts-dashboards-externally/#password-management)
