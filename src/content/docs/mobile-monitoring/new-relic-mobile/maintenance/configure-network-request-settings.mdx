---
title: Configure mobile network request settings
tags:
  - Mobile monitoring settings
  - Network requests
metaDescription: Block or allow hostnames, create rules for status codes, and create aliases for hostnames.
freshnessValidatedDate: never
---

The mobile network request settings page can help you customize how network metrics and events are reported. You can [block or allow hostnames](#blockallow-hostnames), [ignore HTTP status codes from certain hosts](#ignore-status-codes), and [create aliases to rename hosts or group subdomains](#group-into-alias).

To configure these settings, go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select a mobile app) > Settings > Network settings**</DNT>.

## Block/allow hostnames [#blockallow-hostnames]

You can allow or block certain hostnames from being monitored. For example, if you want to only allow subdomains of `ecommerce.com`:

1. On the <DNT>**Network settings page**</DNT>, select the <DNT>**Show only hostnames**</DNT> tab.
2. Click <DNT>**Add a hostname**</DNT>.
3. Enter the hostname `*.ecommerce.com` and click <DNT>**Add to list**</DNT>.

<img
  title="Allow a hostname"
  alt="Allow a hostname"
  src="/images/mobile_screenshot-full_show-hostname.webp"
/>

Wait up until 2 hours for the rule to be applied.

## Ignore HTTP status codes [#ignore-status-codes]

You can ignore specific HTTP error status code on a hostname. For example, if you want to ignore `401`, `403`, and `404` errors from all `ecommerce.com` subdomains:

1. On the <DNT>**Network settings page**</DNT>, select the <DNT>**Status codes**</DNT> tab.
2. Click <DNT>**Create a status code rule**</DNT>.
3. Enter the host `*.ecommerce.com`.
4. Enter status codes `401`, `403`, and `404`  and click <DNT>**Add to list**</DNT>.

<img
  title="Create a status code rule"
  alt="Create a status code rule in the UI"
  src="/images/mobile_screenshot-full_new-status-rule.webp"
/>

Wait up until 2 hours for the rule to be applied.

## Create aliases for hostnames [#group-into-alias]

You can create aliases to rename or group hostnames that make the most sense to you. For example, if you want to create an alias that groups all subdomains of `ecommerce.com`:

1. On the <DNT>**Network settings**</DNT> page, select the <DNT>**Aliases and groups**</DNT> tab.
2. Click <DNT>**Create an alias**</DNT>.
3. Enter `*.ecommerce.com` to group all subdomains of `ecommerce.com`.
4. Enter the alias `ecommerce.com` and click <DNT>**Save alias**</DNT>.

<img
  title="Create an alias"
  alt="create an alias"
  src="/images/mobile_screenshot-full_create-alias.webp"
/>

Wait up until 2 hours for the rule to be applied.

### Recommendations for using wildcards [#about-wildcards]

When using `*` (a wildcard), the regex rules are slightly different. The wildcard is used for a whole segment, or the values between two dots in a hostname (i.e., the whole segment for `hostname.1219.com` is `1219`).

Here are some examples of successfully using wildcards to create an alias:

<table>
  <thead>
    <tr>
      <th>
        Hosts
      </th>

      <th>
        Alias
      </th>

      <th>
        Example domain
      </th>

      <th>
        Result
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `192.168.*.100`
      </td>

      <td>
        LOCAL
      </td>

      <td>
        `192.168.10.100`
      </td>

      <td>
        LOCAL
      </td>
    </tr>

    <tr>
      <td>
        `tbr.*.something.com`
      </td>

      <td>
        tbr.\*.something.com
      </td>

      <td>
        `tbr.gh99898.something.com`
      </td>

      <td>
        tbr.\*.something.com
      </td>
    </tr>

    <tr>
      <td>
        `api1.mydomain.co.uk`
      </td>

      <td>
        API
      </td>

      <td>
        `api1.mydomain.co.uk`
      </td>

      <td>
        API
      </td>
    </tr>

    <tr>
      <td>
        `api2.mydomain.co.uk`
      </td>

      <td>
        API
      </td>

      <td>
        `api2.mydomain.co.uk`
      </td>

      <td>
        API
      </td>
    </tr>
  </tbody>
</table>

Now that you've seen some example of how this works, let's look at some examples of _what won't work_.

<table>
  <thead>
    <tr>
      <th>
        Hosts
      </th>

      <th>
        Alias
      </th>

      <th>
        Example domain
      </th>

      <th>
        Result
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `tbr.gh*.something.com`
      </td>

      <td>
        tbr.gh\*.something.com
      </td>

      <td>
        `tbr.gh99898.something.com`
      </td>

      <td>
        tbr.gh99898.something.com
      </td>
    </tr>

    <tr>
      <td>
        `cs-*.company.jp`
      </td>

      <td>
        cs-\*.company.jp
      </td>

      <td>
        `cs-23.company.jp`
      </td>

      <td>
        cs-23.company.jp
      </td>
    </tr>

    <tr>
      <td>
        `cs-*.company.jp`
      </td>

      <td>
        customer_survey
      </td>

      <td>
        `cs-*.company.jp`
      </td>

      <td>
        customer_survey
      </td>
    </tr>
  </tbody>
</table>

Remember, a wildcard will only affect a whole segment. Since the `*` can only be used for a full segment, the `*` here will be taken literally and not as a wildcard.
