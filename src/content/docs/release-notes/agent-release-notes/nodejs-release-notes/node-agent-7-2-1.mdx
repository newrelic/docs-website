---
subject: Node.js agent
releaseDate: '2021-03-29'
version: 7.2.1
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

## Improvements

* Bumped @grpc/grpc-js to ^1.2.11.

* Bumped @grpc/proto-loader to ^0.5.6.

## Fixes

* Fixed issue where capturing axios request errors could result in a memory leak.

  The agent now clears error references on transaction end, which are not used for later processing. Errors returned from 'axios' requests contain a reference to the request object which deeper down has a handle to a promise in `handleRequestError`. The TraceSegment associated with that promise has a handle to the transaction, which through the error capture ultimately kept the promise in memory and prevented it from being destroyed to free-up the TraceSegment from the segment map. This change also has the benefit of  freeing up some memory early for transactions held onto for transaction traces.

* Agent no longer propagates segments for promises via async-hooks when the transaction associated with the parentSegment has ended.

  This change reduces the amount of context tracking work needed for certain rare edge-case scenarios involving promises.

* Added active transaction check to `wrappedResEnd` to prevent unecessary work for ended transactions in the case of multiple `Response.prototype.end()` invocations.

* Dev-only sub-dependency bump of 'y18n' to clear npm audit warnings.

### Support statement:

* New Relic recommends that you upgrade the agent regularly to ensure that you're getting the latest features and performance benefits. Additionally, older releases will no longer be supported when they reach [end-of-life](https://docs.newrelic.com/docs/using-new-relic/cross-product-functions/install-configure/notification-changes-new-relic-saas-features-distributed-software).
