---
subject: Ruby agent
releaseDate: '2012-07-26'
version: 3.4.1
metaDescription: Release notes for Ruby Agent 3.4.1
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Bug Fixes

* Fix edge case in RUM auto instrumentation where X-UA-Compatible meta tag is present but `</head>` tag is missing.

  There is a somewhat obscure edge case where RUM auto instrumentation will crash a request. The issue seems to be triggered when the X-UA-Compatible meta tag is present and the `</head>` tag is missing.
* Fixed reference to `@service.request_timeout` to `@request_timeout in new_relic_service.rb`. (Thanks to Matthew Savage)

  When a timeout occurred during connection to the collector an "undefined method `request_timeout for nil:NilClass`" would get raised.
* preserve visibility on traced methods.

  Aliased methods now have the same visibility as the original traced method. A couple of the esoteric methods created in the process weren't getting the visibility set properly.
* Agent service does not connect to directed shard collector after connecting to proxy

  After connecting to collector proxy name of real collector was updated, but ip address was not being updated causing connections to go to the proxy. Agent now looks up ip address for real collector.
* corrupt marshal data from pipe children crashing agent

  If the agent received corrupted data from the Reqsue worker child agent it could crash the agent itself. fixed.
* should reset RubyBench GC counter between polls

  On Ruby REE, the GC profiler does not reset the counter between polls. This is only a problem if GC could happen _between_ transactions, as in, for example, out-of-band GC in Unicorn. fixed.
