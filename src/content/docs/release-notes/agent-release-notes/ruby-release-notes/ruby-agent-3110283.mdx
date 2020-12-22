---
subject: Ruby agent
releaseDate: '2015-03-18'
version: 3.11.0.283
---

### Unified view for SQL database and NoSQL datastore products.

The response time charts in the application overview page will now include NoSQL datastores, such as MongoDB, and also the product name of existing SQL databases such as MySQL, Postgres, etc.

The Databases page will now enable the filtering of metrics and operations by product, and includes a table listing all operations.

For existing SQL databases, in addition to the existing breakdown of SQL statements and operations, the queries are now also associated with the database product being used.

For NoSQL datastores, such as MongoDB, we have now added information about operations performed against those products, similar to what is being done for SQL databases.

Because this introduces a notable change to how SQL database metrics are collected, it is important that you upgrade the agent version on all hosts. If you are unable to transition to the latest agent version on all hosts at the same time, you can still access old and new metric data for SQL databases, but the information will be split across two separate views.

For more information see [https://docs.newrelic.com/docs/apm/applications-menu/monitoring/database...](https://docs.newrelic.com/docs/apm/applications-menu/monitoring/databases-slow-queries-dashboard)

### Track background transactions as Key Transactions

In prior versions of the Ruby agent, only web transactions could be tracked as Key Transactions. This functionality is now available to all transactions, including custom Apdex values and X-Ray sessions.

For more information see [https://docs.newrelic.com/docs/apm/selected-transactions/key-transaction...](https://docs.newrelic.com/docs/apm/selected-transactions/key-transactions/key-transactions-tracking-important-transactions-or-events)

### More support and documentation for third-party extensions

It's always been possible to write extension gems for the Ruby agent, but now there's one location with best practices and recommendations to guide you in writing extensions. Check out [https://docs.newrelic.com/docs/agents/ruby-agent/frameworks/third-party-...](https://docs.newrelic.com/docs/agents/ruby-agent/frameworks/third-party-instrumentation)

We've also added simpler APIs for tracing datastores and testing your extensions. It's our way of giving back to everyone who's helped build on the agent over the years. &lt;3

### Fix for anonymous class middleware naming

Metric names based off anonymous middlewares lacked a class name in the UI. The Ruby agent will now look for a superclass, or default to AnonymousClass in those cases.

### Improved exit behavior in the presence of Sinatra

The agent uses an `at_exit` hook to ensure data from the last &lt; 60s before a process exits is sent to New Relic. Previously, this hook was skipped if Sinatra::Application was defined. This unfortunately missed data for short-lived background processes that required, but didn't run, Sinatra. Now the agent only skips its `at_exit` hook if Sinatra actually runs from `at_exit`.
