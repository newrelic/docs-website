---
title: setApplicationVersion
type: apiDoc
shortDescription: Adds a user-defined application version string to subsequent events on the page.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to add an application version string to subsequent events on the page.
redirects:
freshnessValidatedDate: 2023-08-17
---

## Syntax

```js
newrelic.setApplicationVersion(value: string|null)
```

Adds a user-defined application version string to subsequent events on the page.

## Requirements

* Browser Lite, Pro, or Pro+SPA agent (v1.238.0 or higher)
* If you're using npm to install the browser agent, you must enable at least one feature when instantiating the `BrowserAgent` class. For example, add the following in the`features` array:

  ```js
  import { Metrics } from '@newrelic/browser-agent/features/metrics'

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      Metrics
    ]
  }
  ```

  For more information, see the [npm browser installation documentation](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Description

Upon executing this function with a valid value, the browser agent appends an `application.version` attribute to all subsequent events until the attribute is manually unset or the page is unloaded. If the function is called more than once, only the most recent value provided will be sent on subsequent events. If this function is called with a value of `null`, any existing application version will cease to send on subsequent events.

Setting the `application.version` attribute will help you identify which versions of your software are producing the errors. An upcoming release of errors inbox will automatically track which versions of your software are producing errors. If you are using [SPA monitoring](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring) with a compatible agent version, application version will also be included in [`newrelic.interaction`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteraction) events.

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
        `value`

        _string_ OR _null_
      </td>

      <td>
        Required. A string representing the web application's version, useful for tying all browser events to specific release tags. The `value` parameter does not have to be unique. If IDs should be unique, the caller is responsible for that validation.

        Passing a `null` value unsets any existing application version.
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Decorating events with an application version

```js
newrelic.setApplicationVersion('1.2.3') // decorates events with the property 'application.version':'1.2.3'
```

### Stopping events from decorating application version

```js
newrelic.setApplicationVersion(null) // events will no longer have an 'application.version' property set
```
