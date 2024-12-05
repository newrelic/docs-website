---
title: Node.js custom instrumentation
tags:
  - Agents
  - Nodejs agent
  - Extend your instrumentation
translate:
  - jp
metaDescription: 'Expand Node.js instrumentation in New Relic for non-web transactions (frameworks, databases, segments, etc.). Use custom tracers to track async work.'
redirects:
  - /docs/agents/nodejs-agent/extend-your-instrumentation/nodejs-custom-instrumentation
  - /docs/agents/nodejs-agent/supported-features/nodejs-custom-instrumentation
  - /docs/agents/nodejs-agent/extend-your-instrumentation
freshnessValidatedDate: never
---

New Relic for Node.js automatically instruments most standard web requests, but sometimes you want expanded instrumentation. With the agent's [custom instrumentation API](https://newrelic.github.io/node-newrelic/API.html), you can create instrumentation for otherwise unsupported [web frameworks](#web-framework), [datastores](#datastore), and [message service clients](#message-client).

The Node.js agent's custom instrumentation API also allows you to:

* Create [web transactions](#web-txn) (useful for things like web sockets, where transactions can't be automatically created).
* Create non-web [background transactions](#background-txn) (useful for recording background jobs).
* Target [specific sections of your code](#expanding-instrumentation) for deeper analysis.

## Agent version requirements [#version]

The custom instrumentation methods in this document are available as of [Node.js agent version 2.0.0](/docs/release-notes/agent-release-notes/nodejs-release-notes). For information on instrumentation using the custom instrumentation API v1.x, see the documentation for [legacy Node.js custom instrumentation](/docs/agents/nodejs-agent/supported-features/nodejs-v1x-custom-instrumentation-legacy).

## Instrument unsupported web frameworks [#web-framework]

Beginning with Node.js agent version 2.0.0, New Relic provides an API to expand instrumentation for additional web frameworks. For more information, see the [example application](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/instrument-webframework) on GitHub.

## Instrument unsupported message service clients [#message-client]

Beginning with Node.js agent version 2.0.0, New Relic provides an API to expand instrumentation for additional message service libraries. For more information, see the [example application](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/instrument-messages) on GitHub.

## Instrument unsupported datastores [#datastore]

Beginning with Node.js agent version 2.0.0, New Relic provides an API to expand instrumentation for additional datastore libraries. For more information, see the [example application](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/instrument-datastore) on GitHub.

## Instrument web transactions [#web-txn]

In order to create custom [web transactions](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm), call `startWebTransaction` to start the transaction. For more information, see the [example application](https://github.com/newrelic/newrelic-node-examples/tree/0a036fd669b4b47b8afbc7add8696980f799f0da/custom-instrumentation/start-web-transaction) on GitHub.

The linked example application only gives basic timing data for the transaction created. To create more intricate timing data and transaction naming for a particular framework, see the [Node.js API docs](https://newrelic.github.io/node-newrelic/API.html#instrumentWebframework) and the [related WebFramework example application](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/instrument-webframework) on GitHub.

## Instrument background transactions [#background-txn]

You can use custom transactions to instrument [non-web transactions](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions) (background tasks); for example:

* Periodic jobs within your app
* Work that continues after a request completes

To instrument background tasks, call [`startBackgroundTransaction`](https://newrelic.github.io/node-newrelic/API.html#startBackgroundTransaction) in your handler to start a background transaction.  For more information, see the [example application](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/background-transactions) on GitHub.

## Expand instrumentation within transactions [#expanding-instrumentation]

You can create instrumentation using the [instrumentation registration methods on the API](https://newrelic.github.io/node-newrelic/API.html#instrument). Writing instrumentation using the instrumentation API allows you to specify metrics and naming in greater detail by "monkey patching" methods (replacing functions) on relevant objects. Other options can offer visibility into web transactions that are already instrumented, or gain insight into databases and other in-transaction work that is not automatically instrumented.

To do this, wrap your callbacks in custom tracers. Custom tracers create and collect specific metrics for an additional segment within an existing transaction, such as a particular function or a database call. For more information, see the [example application](https://github.com/newrelic/newrelic-node-examples/tree/4284ee7eab69708238db0a44f97ff7e839e165cf/custom-instrumentation/segments) on GitHub.

