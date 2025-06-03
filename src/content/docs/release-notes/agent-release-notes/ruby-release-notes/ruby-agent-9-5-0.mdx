---
subject: Ruby agent
releaseDate: '2023-09-12'
version: 9.5.0
downloadLink: https://rubygems.org/downloads/newrelic_rpm-9.5.0.gem
features: ["Add Stripe instrumentation", "Report transaction HTTP status codes when middleware instrumentation is disabled", "Permit capturing only certain Sidekiq job arguments"]
bugs: ["Update Elasticsearch datastore instance metric to use port instead of path", "Resolve inverted logic of NewRelic::Rack::AgentHooks.needed?"]
security: []
---

<Callout variant="important">
  We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read more about [keeping agents up to date](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/).

  See the New Relic Ruby agent [EOL policy](https://docs.newrelic.com/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/) for information about agent releases and support dates.
</Callout>

## v9.5.0

Version 9.5.0 introduces Stripe instrumentation, allows the agent to record additional response information on a transaction when middleware instrumentation is disabled, introduces new `:'sidekiq.args.include'` and `:'sidekiq.args.exclude:` configuration options to permit capturing only certain Sidekiq job arguments, updates Elasticsearch datastore instance metrics, and fixes a bug in `NewRelic::Rack::AgentHooks.needed?`.

* **Feature: Add Stripe instrumentation**

  [Stripe](https://stripe.com/) calls are now automatically instrumented. Additionally, new `:'stripe.user_data.include'` and `:'stripe.user_data.exclude'` configuration options permit capturing custom `user_data` key-value pairs that can be stored in [Stripe events](https://github.com/stripe/stripe-ruby#instrumentation). No `user_data` key-value pairs are captured by default. The agent currently supports Stripe versions 5.38.0+. [PR#2180](https://github.com/newrelic/newrelic-ruby-agent/pull/2180)

* **Feature: Report transaction HTTP status codes when middleware instrumentation is disabled**

  Previously, when `disable_middleware_instrumentation` was set to `true`, the agent would not record the value of the response code or content type on the transaction. This was due to the possibility that a middleware could alter the response, which would not be captured by the agent when the middleware instrumentation was disabled. However, based on customer feedback, the agent will now report the HTTP status code and content type on a transaction when middleware instrumentation is disabled. [PR#2175](https://github.com/newrelic/newrelic-ruby-agent/pull/2175)

* **Feature: Permit capturing only certain Sidekiq job arguments**

  New `:'sidekiq.args.include'` and `:'sidekiq.args.exclude'` configuration options have been introduced to permit fine grained control over which Sidekiq job arguments (args) are reported to New Relic. By default, no Sidekiq args are reported. To report any Sidekiq options, the `:'attributes.include'` array must include the string `'jobs.sidekiq.args.*'`. With that string in place, all arguments will be reported unless one or more of the new include/exclude options are used. The `:'sidekiq.args.include'` option can be set to an array of strings. Each of those strings will be passed to `Regexp.new` and collectively serve as an allowlist for desired args. For job arguments that are hashes, if a hash's key matches one of the include patterns, then both the key and its corresponding value will be included. For scalar arguments, the string representation of the scalar will need to match one of the include patterns to be captured. The `:'sidekiq.args.exclude'` option works similarly. It can be set to an array of strings that will each be passed to `Regexp.new` to create patterns. These patterns will collectively serve as a denylist for unwanted job args. Any hash key, hash value, or scalar that matches an exclude pattern will be excluded (not sent to New Relic). [PR#2177](https://github.com/newrelic/newrelic-ruby-agent/pull/2177)

  `newrelic.yml` examples:

  Any string in the `:'sidekiq.args.include'` or `:'sidekiq.args.exclude'` arrays will be turned into a regular expression. Knowledge of [Ruby regular expression support](https://ruby-doc.org/3.2.2/Regexp.html) can be leveraged but is not required. If regular expression syntax is not used, inexact matches will be performed and the string "Fortune" will match both "Fortune 500" and "Fortune and Glory". For exact matches, use [regular expression anchors](https://ruby-doc.org/3.2.2/Regexp.html#class-Regexp-label-Anchors).

  ```yaml
  # Include any argument whose string representation matches either "apple" or "banana"
  # The "apple" pattern will match both "green apple" and "red apple"
  sidekiq.args.include:
    - apple
    - banana

  # Exclude any arguments that match either "grape", "orange", or "pear"
  sidekiq.args.exclude:
    - grape
    - orange
    - pear

  # Exclude any argument that is a 9 digit number
  sidekiq.args.exclude:
    - '\d{9}'

  # Include anything that starts with "blue" but exclude anything that ends in "green"
  sidekiq.args.include
    - '^blue'

  sidekiq.args.exclude
    - 'green$'
  ```

* **Bugfix: Update Elasticsearch datastore instance metric to use port instead of path**

  Previously, the Elasticsearch datastore instance metric (`Datastore/instance/Elasticsearch/<host>/*`) used the path as the final value. This caused a [metrics grouping issue](https://docs.newrelic.com/docs/new-relic-solutions/solve-common-issues/troubleshooting/metric-grouping-issues) for some users, as every document ID created a unique metric. Now, the datastore instance metric has been updated to use the port as the final value. This also has the benefit of being more accurate for datastore instance metrics, as this port is directly associated with the already listed host.

* **Bugfix: Resolve inverted logic of NewRelic::Rack::AgentHooks.needed?**

  Previously, `NewRelic::Rack::AgentHooks.needed?` incorrectly used inverted logic. This has now been resolved, allowing AgentHooks to be installed when `disable_middleware_instrumentation` is set to true. [PR#2175](https://github.com/newrelic/newrelic-ruby-agent/pull/2175)
