---
title: Not seeing specific page or endpoint names in browser data
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: 'Troubleshooting tips if you do not see expected page views, URLs, or AJAX when using New Relic browser or SPA monitoring.'
redirects:
  - /docs/browser/new-relic-browser/troubleshooting/not-seeing-specific-page-names-page-views
freshnessValidatedDate: never
---

## Problem

You're looking for performance breakdowns for specific pages or endpoints on the <InlinePopover type="browser"/> [<DNT>**Page views**</DNT> UI page](/docs/browser/new-relic-browser/additional-standard-features/page-views-insights-your-sites-popularity) or [<DNT>**AJAX**</DNT> UI page](/docs/browser/new-relic-browser/browser-pro-features/ajax-dashboard-identifying-time-consuming-calls). The UI doesn't show the URL group you're looking for, or it only shows `/` and `/*`. This behavior also appears in SPA data in `BrowserInteraction` events and applies to `browserInteractionName`, `targetGroupedUrl`, and `previousGroupedUrl` attributes.

## Solution

Browser monitoring automatically "learns" to group your page views when your application is first deployed, and it adds that information to an [allow list for URLs](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls). Sometimes this grouping may not match your current page view information.

To solve this problem, manage your application's [URL segment list settings](/docs/browser/new-relic-browser/configuration/browser-settings-ui-options-apdex-geography#enabling) by [editing existing rules](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls#maintaining) or by [adding the domains and URL segments](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls#adding) that make up your site's URLs. After you add the necessary rules, you should see a useful breakdown of your information in the UI.

Here are some useful tips:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Adding segments to your allow list**
        </DNT>
      </th>

      <th>
        <DNT>
          **Tip**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Use constant URL segments.
      </td>

      <td>
        Only add the URL segments that remain constant across many page views. Do not add unique segments such as IDs or highly-specific categories, because this can lead to [metric grouping issues](/docs/features/metric-grouping-issues).
      </td>
    </tr>

    <tr>
      <td>
        Enter exact matches.
      </td>

      <td>
        Enter any URL segments as exact matches, including case.
      </td>
    </tr>

    <tr>
      <td>
        Use existing rules.
      </td>

      <td>
        If a rule already appears for a domain:

        1. Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Settings > Segment allow lists**</DNT>.
        2. Rather than creating a new rule, edit the existing rule, and add the domain to the UI's <DNT>**Allow listed segments**</DNT> field.
      </td>
    </tr>

    <tr>
      <td>
        Group sub-domains.
      </td>

      <td>
        Group similar sub-domains such as `foo.domain.com` and `bar.domain.com` under `*.domain.com`. This grouping must occur just before the top-level domain name.
      </td>
    </tr>

    <tr>
      <td>
        Set up single-page apps.
      </td>

      <td>
        If your site is a single-page application and you only see `/` under page views, then your grouping is working correctly. New Relic records subsequent requests as AJAX loads, and your [<DNT>**AJAX**</DNT> page](/docs/browser/new-relic-browser/browser-pro-features/ajax-dashboard-identifying-time-consuming-calls) will contain more detailed information. If it doesn't, then follow the tips in this document.
      </td>
    </tr>

    <tr>
      <td>
        Remove rules when appropriate.
      </td>

      <td>
        If you need to remove a rule, get support at [support.newrelic.com](https://support.newrelic.com/).
      </td>
    </tr>
  </tbody>
</table>
