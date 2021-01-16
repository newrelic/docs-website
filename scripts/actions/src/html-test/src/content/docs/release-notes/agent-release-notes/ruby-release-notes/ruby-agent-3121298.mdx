---
subject: Ruby agent
releaseDate: '2015-06-30'
version: 3.12.1.298
downloadLink: 'https://rubygems.org/gems/newrelic_rpm/versions/3.12.1.298'
redirects:
  - /docs/release-notes/agent-release-notes/ruby-agent-3121298
---

### Notes

* More granular Database metrics for ActiveRecord 3 and 4

  Database metrics recorded for non-SELECT operations (UPDATE, INSERT, DELETE, etc.) on ActiveRecord 3 and 4 now include the model name that the query was being executed against, allowing you to view these queries broken down by model on the Datastores page. Thanks to Bill Kayser for reporting this issue!
* Support for Multiverse testing third party gems

  The Ruby agent has rich support for testing multiple gem versions, but previously that wasn't accessible to third party gems. Now you can now simply `require 'task/multiverse'` in your Rakefile to access the same test:multiverse task that New Relic uses itself. For more details, see [Multiverse: Test against multiple gem versions](/docs/agents/ruby-agent/frameworks/third-party-instrumentation#multiverse)
* Use Sidekiq 3.x's error handler

  Sidekiq versions 3.0 or higher provide an error handler for internal and middleware related failures. Failures at these points were previously unseen by the Ruby agent, but now they are properly traced.
* Better error messages for common configuration problems with Capistrano

  Templating errors in **newrelic.yml** would result in obscure error messages during Capistrano deployments. These messages now more properly reflect the root cause of the errors.
* `newrelic_ignore` methods allow strings

  The `newrelic_ignore` methods previously only supported passing symbols, and would quietly ignore any strings passed. Now strings can be passed as well to get the intuitive ignoring behavior you'd expect.
* Replace DNS resolver for Resque jobs with Resolv

  In some circumstances customers with a very high number of short-lived Resque jobs were experiencing deadlocks during DNS resolution. Resolv is an all Ruby DNS resolver that replaces the libc implementation to prevent these deadlocks.
