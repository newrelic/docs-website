---
subject: Ruby agent
releaseDate: '2017-12-19'
version: 4.7.0.339
redirects:
  - /docs/release-notes/agent-release-notes/ruby-release-notes/ruby-agent-470
---

### Notes

* Expected Error API

  The agent now sends up `error.expected` as an intrinsic attribute on error events and error traces. When you pass `expected: true` to the `notice_error` method, both Insights and APM will indicate that the error is expected.
* Typhoeus Hydra Instrumentation

  The agent now has request level visibility for HTTP requests made using Typhoeus Hydra.
* Total Time Metrics are Recorded

  The agent now records Total Time metrics. In an application where segments execute concurrently, the total time can exceed the wall-clock time for a transaction. Users of the new Typhoeus Hydra instrumentation will notice this as changes on the overview page. Immediately after upgrading there will be an alert in the APM dashboard that states: "There are both old and new time metrics for this time window". This indicates that during that time window, some transactions report the total time metrics, while others do not. The message will go away after waiting for enough time to elapse and / or updating the time window.
* Add `:message` category to `set_transaction_name` public API method

  The agent now permits the `:message` category to be passed into the public API method `set_transaction_name`, which will enable the transaction to be displayed as a messaging transaction.
* Create `prepend_active_record_instrumentation` config option

  Users may now set the `prepend_active_record_instrumentation` option in their agent config to install Active Record 3 or 4 instrumentation using `Module.prepend` rather than `alias_method`.
* Use Lazy load hooks for `ActionController::Base` and `ActionController::API`

  The agent now uses lazy load hooks to hook on `ActionController::Base` and `ActionController::API`. Thanks Edouard Chin for the contribution!
* Use Lazy load hooks for `ActiveRecord::Base` and `ActiveRecord::Relation`

  The agent uses lazy load hooks when recording supportability metrics for `ActiveRecord::Base` and `ActiveRecord::Relation`. Thanks Joseph Haig for the contribution!
* Check that `Rails::VERSION` is defined instead of just `Rails`

  The agent now checks that `Rails::VERSION` is defined since there are cases where `Rails` is defined but `Rails::VERSION` is not. Thanks to Alex Riedler and nilsding for the contribution!
* Support fast RPC/direct reply-to in RabbitMQ

  The agent can now handle the pseudo-queue 'amq.rabbitmq.reply-to' in its Bunny instrumentation. Previously, using fast RPC led to a `NoMethodError` because the reply-to queue was expected to be a `Queue` object instead of a string.
