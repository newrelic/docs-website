---
subject: Ruby agent
releaseDate: '2016-03-24'
version: 3.15.1.316
downloadLink: 'https://rubygems.org/gems/newrelic_rpm/versions/3.15.1.316'
metaDescription: Release notes for Ruby Agent 3.15.1.316.
---

## v3.15.1

* Rack 2 alpha support

  This release includes experimental support for Rack 2 as of 2.0.0.alpha. Rack 2 is still in development, but the agent should work as expected for those who are experimenting with Rack 2.
* Rails 5 beta 3 support

  We've tweaked our Action View instrumentation to accommodate changes introduced in Rails v5.0.0.beta3.
* Defer referencing ::ActiveRecord::Base to avoid triggering its autoloading too soon

  In 3.12.1 and later versions of the agent, the agent references (and therefore loads) ActiveRecord::Base earlier on in the Rails loading process. This could jump ahead of initializers that should be run first. We now wait until ActiveRecord::Base is loaded elsewhere.
* Fix explain plans for non-parameterized queries with single quote literals

  The agent does not run explain plans for queries still containing parameters (such as `SELECT * FROM UNICORNS WHERE ID = $1 LIMIT 1`). This check was unfortunately mutating the query to be obfuscated, causing an inability to collect an explain plan. This has now been fixed.
* Fix default metric name for tracing class methods

  When using `add_method_tracer` on a class method but without passing in a `metric_name_code`, the default metric name will now look like `Custom/ClassName/Class/method_name`. We also addressed default metric names for anonymous classes and modules.
* Fix issue when rendering SQL strings in developer mode

  When we obfuscate SQL statements, we rewrite the Statement objects as SQL strings inline in our sample buffers at harvest time. However, in developer mode, we also read out of these buffers when rendering pages. Depending on whether a harvest has run yet, the buffer will contain either Statement objects, SQL strings, or a mix. Now, developer mode can handle them all!
* Fix DelayedJob Sampler reporting incorrect counts in Active Record 3 and below

  When fixing various deprecation warnings on ActiveRecord 4, we introduced a regression in our DelayedJob sampler which caused us to incorrectly report failed and locked job counts in ActiveRecord 3 and below. This is now fixed. Thanks Rangel Dokov for the contribution!
