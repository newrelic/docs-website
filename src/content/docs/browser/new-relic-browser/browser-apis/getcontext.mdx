---
title: getContext (SPA API)
type: apiDoc
shortDescription: Stores values for the current SPA interaction asynchronously in Browser.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call to store values across the current SPA interaction asynchronously in browser monitoring.
redirects:
  - /docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractiongetcontext
  - /docs/browser/new-relic-browser/browser-agent-spa-api/browser-spa-api-newrelicinteractiongetcontext
  - /docs/browser/new-relic-browser/browser-agent-spa-api/newrelicinteractiongetcontext-browser-spa-agent-api
  - /docs/browser/new-relic-browser/browser-agent-spa-api/spa-get-context
  - /docs/browser/new-relic-browser/browser-agent-spa-api/getcontext-browser-spa-api
freshnessValidatedDate: never
---

## Syntax

```js
newrelic.interaction().getContext(function $callback)
```

Stores values for the current SPA interaction asynchronously in browser.

## Requirements

* Browser Pro+SPA agent (v963 or higher)
* If you're using npm to install the browser agent, you must enable the `spa` feature when instantiating the `BrowserAgent` class. In the `features` array, add the following:

  ```js
  import { Spa } from '@newrelic/browser-agent/features/spa';

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      Spa
    ]
  }
  ```

  For more information, see the [npm browser installation documentation](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Description

This API method takes a callback that will be invoked asynchronously with the context object associated with the current interaction. Use this for aggregating data associated with the current interaction. These values can be used in other parts of your code.

This context is also provided by the [`onEnd`](/docs/browser/new-relic-browser/browser-agent-spa-api/spa-on-end) call.

## Parameters

<table>
  <thead>
    <tr>
      <th width="25%">
        Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$callback`

        _function_
      </td>

      <td>
        Required. A function that accepts the interaction context object as its only argument.
      </td>
    </tr>
  </tbody>
</table>

## Return values

This method returns the same API object created by `interaction()`.

## Examples

```js
router.addRoute('/products/{productId}', params => {
  newrelic.interaction().getContext(ctx => ctx.productId = params.productId);
  renderProduct(params.productId);
  updateHash();
});

window.addEventListener('hashchange', (ev) => {
  const interaction = newrelic.interaction();
  interaction.getContext(ctx => {
    if (ctx.productId) {
      interaction.setAttribute('productId', ctx.productId);
    }
  });
});
```
