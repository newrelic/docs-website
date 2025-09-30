---
title: Proxy agent code and analytics data
tags:
  - Browser monitoring
  - Proxy
metaDescription: "The agent can be configured to fetch its code and send analytics through a proxy server instead of New Relic's endpoints."
freshnessValidatedDate: 2023-09-22
---

<Callout variant="important">
  This feature is currently available for those using the copy/paste or NPM browser installation methods. There is currently no UI or NerdGraph configuration options available. We are continuing to work on improving access to these and other configuration options.
</Callout>

Setting a proxy URL for the browser agent can be a valuable way to ensure that observability data is still collected for performance purposes.

When you use the proxy method, it is important to ensure that you have the right to do so based on any contractual, regulatory, or other legal obligations you may have to your end users and/or site visitors. If you have verified that this method is a viable and compliant solution for your organization, you can look at the setup instructions below.

## How it works [#how-it-works]

As of browser agent [version 1.240.0](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes) and higher, you can set up two different types of proxies, depending on what kind of data you want to forward: a proxy to fetch the browser agent code, and a proxy to forward analytics data to New Relic.

To set up these proxies, you'll need to configure the following browser agent properties:

* `init.proxy.assets` determines where to fetch the browser agent.
  * If you’re using the copy/paste installation method, you’ll need to manually edit your JavaScript snippet and set `assets` to your domain URL.
  * For example, if you’re using browser agent v1.240.0 Pro+SPA, and you set `init.proxy.assets` to `assets.mydomain.com`, the browser agent will be loaded from `https://assets.mydomain.com/nr-spa.<hash>-1.240.0.min.js` instead of `https://js-agent.newrelic.com/nr-spa.<hash>-1.240.0.min.js`.
  * If you’re using the NPM installation method, this configuration is not relevant. NPM-installed browser agents undergo the same bundling process as the host application and should result in agent assets in the `output` directory alongside the host application. When the host application is deployed, those agent assets should be deployed as well resulting in agent code already loading from the same domain as the site.
* `init.proxy.beacon` determines where analytics data gets sent.
  * For both installation methods, you’ll need to set `beacon` to your domain URL.
  * For example, if you set `beacon` to `beacon.mydomain.com`, all observability data will be sent to `https://beacon.mydomain.com/OBSERVABILITY_ENDPOINT`.

If you’re concerned about user privacy, you can exclude the `X-Forwarded-For HTTP` header, which is used to geolocate clients. If you exclude it, New Relic will geolocate your proxy as the client instead.

## Get started [#set-up]

To get started redirecting requests to your proxy, see the instructions below based on which deployment method you used to install the browser agent.

### Recommendations

When configuring these properties, we recommend the following:

* Use a first-party subdomain. Even though you can technically use another third-party domain, it’s likely to get blocked by ad blockers and security VPNs.
* The input pattern is `<domain>[:<port>][/<path>]`. Make sure to omit the protocol (like `https://`) and any end slash. The `port` and `path` are optional and will be respected if added.
* If you’re configuring both `assets` and  `beacon`, set different values for each proxy by using different subdomains or different paths. This will make configuring the proxy server a lot easier.

### Copy/paste installation [#copy-paste]

If you're using the copy/paste installation method, add the following configuration to your browser JavaScript configurations before the agent loader:

```js
window.NREUM.init = {
    ...<other init properties>,
    proxy: {
        assets: <URL string>
        beacon: <URL string>
    }
}
```

### NPM installation [#npm]

If you’re using the NPM browser installation method, add the following configuration when initializing the browser agent:

```js
new BrowserAgent({ 
  init: {
    ...<other init properties>,
    proxy: {
        beacon: <URL string>
    }
  }
})
```

## Using proxies [#using-proxies]

New Relic does not provide or support a cloud proxy service, so you must configure and manage your own proxy servers. To ensure full functionality, we make the following assumptions about your proxies:

* <DNT>**Load the browser agent code from the New Relic CDN and pass it back to the client.**</DNT> If you’re using the `assets` field, your proxy should load the browser agent code from `https://js-agent.newrelic.com/` and pass it back to the client. For example, for browser agent v1.240.0, requests to `https://assets.mydomain.com/nr-spa.3b61d78f-1.240.0.min.js` should yield the same response as from the upstream `https://js-agent.newrelic.com/nr-spa.3b61d78f-1.240.0.min.js`.
* <DNT>**Forward client payloads to New Relic.**</DNT> The `beacon` proxy forwards client payloads to New Relic. Your original endpoint can be found in your [browser application settings page](/docs/browser/new-relic-browser/configuration/browser-app-settings-page/). In the JavaScript snippet, look for `;NREUM.info={beacon:"_____",...`. For most apps, this would be `(https://)bam.nr-data.net`. However, it could be different due to compliance and legal reasons. For example, requests to `https://yourproxy.com/1/asdf?a=123` should be passed through to `https://bam.nr-data.net/1/asdf?a=123`.
* <DNT>**Do not modify requests and responses.**</DNT> Requests and responses through the proxy server should not be modified.
* <DNT>**Support the bandwidth and traffic generated by observability data collection.**</DNT> Your system must be able to support proxying load, but the amount of data generated will depend on your site's usage.
