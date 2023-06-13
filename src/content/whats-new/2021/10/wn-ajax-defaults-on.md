---
title: 'Browser agent update: capturing all AJAX requests'
summary: 'With agent version 1211, all AJAX requests will be captured as events.'
releaseDate: '2021-10-12'
learnMoreLink: 'https://docs.newrelic.com/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1211/'
getStartedLink: 'https://docs.newrelic.com/docs/browser/single-page-app-monitoring/get-started/introduction-single-page-app-monitoring/'
---
Today, with the use of the [SPA Browser agent](https://docs.newrelic.com/docs/browser/single-page-app-monitoring/get-started/introduction-single-page-app-monitoring/), you can query in dashboards AJAX requests that are part of a route change. With the release [v1211](https://docs.newrelic.com/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1211/), we are expanding this ability to make all AJAX requests available to filter and facet on in the dashboard for customers using the Pro or SPA agent. In addition, we will ensure all AJAX requests show up as spans in distributed tracing.

**What’s the impact?**

With the addition of this feature, if you are using the Pro or SPA version of the agent, you will now see an increase in data consumption. If you want to dial back the amount of data consumed, you have two options:

**Option 1 (recommended option):** In browser settings on NR1, there is a deny list where you can add URLs where you don’t need AJAX data collection. This will ensure the agent does not collect those AJAX calls. Refer to [this documentation](https://docs.newrelic.com/docs/browser/new-relic-browser/configuration/filter-ajax-request-events/) for more information.

![New AJAX settings](./images/browser-with-ajax-highlighted.webp "Browser with AJAX Settings Highlighted")

**Option 2:** Drop data on ingest. Because the AJAX requests are being stored as events, you also have an option to set up rules to drop them on ingest. Refer to [this documentation](https://docs.newrelic.com/docs/browser/new-relic-browser/configuration/filter-ajax-request-events/) for more information.
