---
title: Browser monitoring and the Ruby agent
tags:
    - Agents
    - Ruby agent
    - Features
metaDescription: Instrumentation for your New Relic Ruby agent to set up New Relic browser monitoring.
redirects:
    - /docs/agents/ruby-agent/features/new-relic-browser-ruby-agent
    - /docs/ruby/real-user-monitoring-in-ruby
    - /docs/ruby/page-load-timing-in-ruby
    - /docs/agents/ruby-agent/features/page-load-timing-ruby
freshnessValidatedDate: never
---

With the Ruby agent, you can inject the [browser monitoring agent](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser) into your webpages either automatically or manually. By default, if the Ruby agent detects Javascript, it automatically installs <InlinePopover type="browser"/>.

If you prefer to add browser monitoring manually or want to learn about options to install the browser agent, [consult the browser agent installation guide](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent).

## Requirements [#requirements]

Automatic browser instrumentation is available [for all supported versions of the Ruby agent](/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/). To make sure your environment is ready for automatic instrumentation, review the [browser monitoring compatibility and requirements guide](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring).

## Use auto-instrumentation [#auto-instrumentation]

New Relic's default configuration enables browser monitoring auto-instrumentation:

```yaml
browser_monitoring:
  auto_instrument: true
```

This is the simplest way to monitor end users. The Ruby agent examines each page of your application when it loads and automatically injects the browser JavaScript in the header. Auto-instrumentation works for environments using Rack. For performance reasons, the agent only scans the first 50k lines of your application's response for the header instrumentation point. In cases where a `X-UA-Compatible` meta tag is present and the `<head>` tag is longer than 50k, auto-instrumentation will fail gracefully.

Auto-instrumentation looks for an `X-UA-Compatible` meta tag and inserts the JavaScript directly after it. If the auto-instrumentation can't find an `X-UA-Compatible` meta tag, it will insert it after the opening head tag. If it can't, it will insert it after the opening body tag. If any of these tags are wrapped in conditionals or comments, the auto-instrumentation is likely to fail.

Auto-instrumentation will not occur on pages with an attachment 'Content-Type' or when it detects streaming requests.

If auto-instrumentation fails to correctly instrument your application's pages, you will need to [manually instrument](#manual-instrumentation) using the Agent API.

## Manually instrument via agent API [#manual-instrumentation]

You can set up end user monitoring manually by including appropriate scripts in your pages. Use the New Relic Ruby agent's API to generate the script. The API injects this script into your pages.

For example, to modify your application's template to call the agent, use:

```erb
<head>
    <%= ::NewRelic::Agent.browser_timing_header rescue "" %>
    # existing template code ...
</head>
```

## CSP Nonce support [#csp-nonce-support]

If the content security policy is set to 'unsafe-inline', you can automatically instrument the browser agent. If you want to use a [CSP Nonce](https://content-security-policy.com/nonce/), you may need to add some manual configuration.

### Rails CSP Nonce [#rails-csp-nonce]

[Rails versions 5.2+](https://guides.rubyonrails.org/security.html#adding-a-nonce) include a feature to set a CSP nonce using an API. On Ruby agent versions 9.10.0+, the Rails CSP nonce will be automatically detected and applied to the browser agent injection script.

You can disable this feature by updating your `newrelic.yml` to the following:

```yaml
  browser_monitoring:
    content_security_policy_nonce: false
```

Or set the environment variable, `NEW_RELIC_BROWSER_MONITORING_CONTENT_SECURITY_POLICY=false`.

### API call [#api-call]

You can pass a CSP nonce to the `NewRelic::Agent.browser_timing_header` API in Ruby agent versions 7.1.0+.

When passing a nonce to this method, you must disable browser monitoring auto-instrumentation and use manual instrumentation via the agent API.

Update your `newrelic.yml` to:

```yaml
browser_monitoring:
  auto_instrument: false
```

Or set the environment variable, `NEW_RELIC_BROWSER_MONITORING_AUTO_INSTRUMENT=false`.

You may now pass a nonce as an argument into the API method to allow the agent to insert the nonce into the browser instrumentation. For example, `NewRelic::Agent.browser_timing_header(nonce)`.

## Troubleshooting [#troubleshooting]

If browser data isn't reported, view the HTML source and confirm two blocks of script similar to the following are in your HTML head:

```html
<script type="text/javascript">window.NREUM||(NREUM={});...</script>
```

If these aren't present, check:

* The auto-instrumentation settings
* The placement of manual instrumentation in your template files
* The way you're applying a nonce

## Disable auto-instrumentation [#disable-instrumentation]

The default value of [`auto-instrument`](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#browser-monitoring) is `true` (even when unspecified). To disable auto-instrumentation, set this flag to `false`.

```yaml
browser_monitoring:
  auto_instrument: false
```

To disable auto-instrumentation only for certain controllers or controller actions, use [`newrelic_ignore_enduser`](/docs/agents/ruby-agent/installation-configuration/ignoring-specific-transactions#page-load-timing-rum). Server-side instrumentation isn't affected by this call.
