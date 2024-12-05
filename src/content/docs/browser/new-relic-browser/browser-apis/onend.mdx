---
title: onEnd (SPA API)
type: apiDoc
shortDescription: Change the values associated with a SPA interaction before the interaction is saved .
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call to add and update values at the end of an interaction event for browser monitoring.
redirects:
  - /docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractiononend
  - /docs/browser/new-relic-browser/browser-agent-spa-api/browser-spa-api-newrelicinteractiononend
  - /docs/browser/new-relic-browser/browser-agent-spa-api/newrelicinteractiononend-browser-spa-agent-api
  - /docs/browser/new-relic-browser/browser-agent-spa-api/spa-on-end
freshnessValidatedDate: never
---

## Syntax

```js
newrelic.interaction().onEnd(function $callback)
```

Change the values associated with a SPA interaction before the interaction is saved.

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

This call provides the same object as [`getContext()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractiongetcontext). When this is called, you can make final adjustments to the interaction before it's recorded. For example, you could add additional [attributes](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#attribute) based on the context values.

Other methods for modifying the interaction include:

* [`setName()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsetname)
* [`save()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsave)
* [`ignore()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionignore)
* [`setAttribute()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsetattribute)

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
        Required. This function is called when the interaction ends. It is called with one parameter, which is the interaction context.
      </td>
    </tr>
  </tbody>
</table>

## Return values

This method returns the same API object created by `interaction()`.

## Examples

```js
// router.js
router.addRoute('/dashboard', () => {
  const interaction = newrelic.interaction().onEnd(ctx => {
    interaction.setAttribute(
      'averageChartLoadTime',
      ctx.totalChartLoadTime / ctx.chartLoadCount
    );
  });
  getCharts().forEach(loadChart);
});

// chart-loader.js
function loadChart(chart) {
  const start = Date.now();
  chart.load().then(() => {
    const loadTime = Date.now() - start;
    interaction.getContext(ctx => {
      ctx.totalChartLoadTime = (ctx.totalChartLoadTime || 0) + loadTime;
      ctx.chartLoadCount += (ctx.chartLoadCount || 0) + 1;
    });
  })
}
```
