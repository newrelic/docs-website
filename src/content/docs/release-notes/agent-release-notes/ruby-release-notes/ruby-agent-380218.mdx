---
subject: Ruby agent
releaseDate: '2014-04-22'
version: 3.8.0.218
metaDescription: Release notes for Ruby Agent 3.8.0.218.
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Notes

* Better support for forking and daemonizing dispatchers (e.g. Puma, Unicorn)

  The agent should now work out-of-the box with no special configuration on servers that fork or daemonize themselves (such as Unicorn or Puma in some configurations). The agent's background thread will be automatically restarted after the first transaction processed within each child process.

  This change means it's no longer necessary to set the 'restart_thread_in_children setting' in your agent configuration file if you were doing so previously.
* Rails 4.1 support

  Rails 4.1 has shipped, and the Ruby agent is ready for it! We've been running our test suites against the release candidates with no significant issues, so we're happy to announce full compatibility with this new release of Rails.
* Ruby VM measurements

  The Ruby agent now records more detailed information about the performance and behavior of the Ruby VM, mainly focused around Ruby's garbage collector. This information is exposed on the new 'Ruby VM' tab in the UI. For details about what is recorded, see:

  [http://docs.newrelic.com/docs/ruby/ruby-vm-stats](http://docs.newrelic.com/docs/ruby/ruby-vm-stats)
* Separate in-transaction GC timings for web and background processes

  Previously, an application with GC instrumentation enabled, and both web and background processes reporting in to it would show an overly inflated GC band on the application overview graph, because data from both web and non-web transactions would be included. This has been fixed, and GC time during web and non-web transactions is now tracked separately.
* More accurate GC measurements on multi-threaded web servers

  The agent could previously have reported inaccurate GC times on multi-threaded web servers such as Puma. It will now correctly report GC timings in multi-threaded contexts.
* Improved ActiveMerchant instrumentation

  The agent will now trace the store, unstore, and update methods on ActiveMerchant gateways. In addition, a bug preventing ActiveMerchant instrumentation from working on Ruby 1.9+ has been fixed.

  Thanks to Troex Nevelin for the contribution!
* More robust Real User Monitoring script injection with charset meta tags

  Previous versions of the agent with Real User Monitoring enabled could have injected JavaScript code into the page above a charset meta tag. By the HTML5 spec, the charset tag must appear in the first 1024 bytes of the page, so the Ruby agent will now attempt to inject RUM script after a charset tag, if one is present.
* More robust connection sequence with New Relic servers

  A rare bug that could cause the agent's initial connection handshake with New Relic servers to silently fail has been fixed, and better logging has been added to the related code path to ease diagnosis of any future issues.
* Prevent over-counting of queue time with nested transactions

  When using add_transaction_tracer on methods called from within a Rails or Sinatra action, it was previously possible to get inflated queue time measurements, because queue time would be recorded for both the outer transaction (the Rails or Sinatra action) and the inner transaction (the method given to add_transaction_tracer). This has been fixed, so only the outermost transaction will now record queue time.
