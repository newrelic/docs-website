---
title: finished
type: apiDoc
shortDescription: 'Records an additional time point as &quot;finished&quot; in a session trace, and sends the event to New Relic.'
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: 'Browser API call to record an additional time point as a finished event in a browser session trace, and report it to New Relic.'
redirects:
  - /docs/browser/new-relic-browser/browser-agent-apis/browser-api-newrelicfinished
  - /docs/browser/new-relic-browser/browser-agent-api/browser-api-newrelicfinished
  - /docs/browser/new-relic-browser/browser-agent-spa-api/newrelicfinished-browser-agent-api
  - /docs/browser/new-relic-browser/browser-agent-spa-api/finished
freshnessValidatedDate: never
---

## Syntax

```js
newrelic.finished(time $time_stamp)
```

Records an additional time point as "finished" in a session trace, and sends the event to New Relic.

## Requirements

* Browser Pro, Pro+SPA, or Lite agent (v593 or higher)
* If you're using npm to install the browser agent, you must enable the `generic_events` and/or `session_trace` feature when instantiating the `BrowserAgent` class. In the `features` array, add the following:

  ```js
  import { GenericEvents } from '@newrelic/browser-agent/features/generic_events'
  import { SessionTrace } from '@newrelic/browser-agent/features/session_trace';

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      GenericEvents
      SessionTrace
    ]
  }
  ```

  For more information, see the [npm browser installation documentation](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Description

Records an additional time point when the page is finished according to your custom criteria, either before or after the page load event. This is useful, for example, for pages with many components that load asynchronously.

You can only call this method once per page load, and it does not change the other page load timing data recorded for the load. For an individual page load, this call:

1. Adds a `finished` event to the current [browser session trace](/docs/browser/new-relic-browser/browser-pro-features/session-traces-exploring-webpages-life-cycle), if one is in progress.
2. Submits a [`PageAction` event](/docs/insights/explore-data/attributes/browser-default-attributes-insights#pageaction-list) with the name `finished` to New Relic.

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
        `$time_stamp`

        _integer_ (UNIX time)
      </td>

      <td>
        Optional. Defaults to the current time of the call. If used, this marks the time that the page is "finished" according to your own criteria.
      </td>
    </tr>
  </tbody>
</table>

## Examples

```js
aboveTheFoldContent.on('ready', function() {
  newrelic.finished();
});
```
