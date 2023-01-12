---
title: Introducing AsyncLocalStorage context manager for the Node.js agent
summary:  Reduce your CPU and stabilize your memory footprint while using the Node.js agent with the new AsyncLocalStorage context manager
releaseDate: '2023-01-12'
learnMoreLink: 'https://github.com/newrelic/node-newrelic/blob/main/documentation/feature-flags.md#async_local_context'
---

[Version 9.4.0](https://github.com/newrelic/node-newrelic/releases/tag/v9.4.0) of the New Relic Node.js agent introduced a new context manager built on top of [AsyncLocalStorage](https://nodejs.org/api/async_context.html#class-asynclocalstorage). It should reduce your CPU overhead and offer a more stable use of memory while using the New Relic Node.js agent. CPU reduction will vary based on how your application is composed. Even if you are happy with your CPU overhead and memory management, it's worth opting in and providing feedback to us.

To enable this new context manager, set `config.feature_flag.async_local_context = true` or via environment variable `NEW_RELIC_FEATURE_FLAG_ASYNC_LOCAL_CONTEXT=1`. It's currently behind a feature flag, but we have plans for our next upcoming major release to make this the default context manager. Future versions of the agent will increasingly rely on the `AsyncLocalStorage` context manager, and eventually it will be the only context manager the agent uses.

Asynchronous context tracking is crucial for Node.js application performance monitoring and is essential for tracing application execution across event loop scheduling via timers, callbacks, and promises. As the language has evolved, so have the solutions for asynchronous context tracking. The New Relic Node.js agent predates the modern approaches to asynchronous context tracking like async hooks, `AsyncResource`, and `AsyncLocalStorage`. These changes to the agent bring it up to date with the latest standards and remove several points of overhead incurred by our earlier methods of tracking asynchronous context.


