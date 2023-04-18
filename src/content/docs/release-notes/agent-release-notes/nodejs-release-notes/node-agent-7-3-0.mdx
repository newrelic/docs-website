---
subject: Node.js agent
releaseDate: '2021-04-06'
version: 7.3.0
features: ["Add new feature-flag 'new_promise_tracking' which enables cleaning up of segment references on native promise resolve instead of destroy."]
bugs: ["Fix a memory leak introduced when Infinite Tracing is enabled."]
security: []
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

## New Features

* Added new feature-flag 'new_promise_tracking' which enables cleaning up of segment references on native promise resolve instead of destroy. Includes usage of async-await. This can be enabled via `feature_flag: { new_promise_tracking: true }` in the config file or `NEW_RELIC_FEATURE_FLAG_NEW_PROMISE_TRACKING=1` in your ENV vars.

  Applications with heavy promise usage or high-throughput applications with some promise usage should see moderate to high reduction in memory usage and may see a slight reduction in CPU usage. A bump in throughput may also be noticed in some cases. Results will vary by application.

  If you are experiencing high overhead levels with your promise usage and the agent attached, we recommend testing your application with  'new_promise_tracking' set to true to see if overhead is reduced. You'll also want to verify your data is still being captured correctly in case it falls into a known or unknown limitation of this approach.  **NOTE: chaining of promise continuations onto an already resolved promise across an async hop (scheduled timer) will result in state-loss with this new functionality turned on. This is a less-common use-case but worth considering with your applications.**

## Fixes

* Fixed memory leak introduced when Infinite Tracing is enabled.

  When Infinite Tracing endpoints reconnected they would instantiate a new gRPC client prior to calling `client.recordSpan()`. It appears several objects created by grpc-js (`ChannelImplementation` and child objects, promises, etc.) are held in memory indefinitely due to scheduled timers even when the client is no-longer referenced and the associated stream closed. We now avoid this situation by only creating the client once and then reusing it to establish new stream connections.

### Support statement:

* New Relic recommends that you upgrade the agent regularly to ensure that you're getting the latest features and performance benefits. Additionally, older releases will no longer be supported when they reach [end-of-life](https://docs.newrelic.com/docs/using-new-relic/cross-product-functions/install-configure/notification-changes-new-relic-saas-features-distributed-software).
