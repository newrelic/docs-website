---
title: "End of life for the browser monitoring `createTracer()` API call"
summary: "We're end-of-lifing this API call, because it's blocking our ability to update and improve the browser SPA agent."
publishDate: '2024-04-24'
eolEffectiveDate: '2024-10-15'
---

On October 15, 2024, New Relic will end of life the browser monitoring `createTracer()` API call.   

New Relic is updating the browser SPA agent to be more performant, with improved accuracy and fewer lines of code. These updates simplify the agent, letting customers diagnose issues with their browser apps more easily. Before New Relic can update the browser SPA agent, we need to remove the `createTracer()` API.

Accounts using the `createTracer()` API at the time of end of life will lose performance metrics about their SPAs.

## What you need to do

We recommend that you migrate to the `addPageAction()` API call to collect time data about sub-components on your pages.

See our doc on [`addPageAction`](https://docs.newrelic.com/docs/browser/new-relic-browser/browser-apis/addpageaction/) for information on how to implement this API call.

