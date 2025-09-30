---
title: end (SPA API)
type: apiDoc
shortDescription: Ends the SPA interaction at the current time.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call with browser to end the interaction at the current time.
redirects:
  - /docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionend
  - /docs/browser/new-relic-browser/browser-agent-spa-api/browser-spa-api-newrelicinteractionend
  - /docs/browser/new-relic-browser/browser-agent-spa-api/spa-end
  - /docs/browser/new-relic-browser/browser-agent-spa-api/end-browser-spa-api
freshnessValidatedDate: never
---

## Syntax

```js
newrelic.interaction().end()
```

Ends the SPA interaction at the current time.

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

This SPA method will end the browser interaction at the current time. Any subsequent callbacks or requests will not be included as part of the SPA interaction.

## Return values

This method returns the same API object created by `interaction()`.

## Examples

```js
router.addRoute('/profile', () => {
  startSlowBackgroundAjax(); // Start work that will continue past the end of the interaction
  renderProfileComponents().then(() => { // Do work that is part of the interaction
    newrelic.interaction().end(); // End the interaction once the important components an the page have finished rendering
  });
});
```
