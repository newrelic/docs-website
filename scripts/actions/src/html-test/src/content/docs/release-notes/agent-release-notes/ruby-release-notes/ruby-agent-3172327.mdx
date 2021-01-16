---
subject: Ruby agent
releaseDate: '2016-12-13'
version: 3.17.2.327
downloadLink: 'https://rubygems.org/downloads/newrelic_rpm-3.17.2.327.gem'
---

## v3.17.2

* Compatibility with Ruby 2.4.0-preview3

  The Ruby agent has been updated to work on Ruby 2.4.0-preview3.
* Early Access Sinatra 2.0 instrumentation

  Our Sinatra instrumentation has been updated to work with Sinatra 2.0.0.beta2.
* Include controller instrumentation module in Rails 5 API

  The agent now includes the ControllerInstrumentation module into ActionController::API. This gives Rails API controllers access to helper methods like `newrelic_ignore` in support of the existing event-subscription-based action instrumentation. Thanks Andreas Thurn for the contribution!
* Use Module#prepend for ActiveRecord 5 Instrumentation

  Rails 5 deprecated the use of `alias_method_chain` in favor of using `Module#prepend`. Mixing `Module#prepend` and `alias_method_chain` can lead to a SystemStackError when an `alias_method_chain` is applied after a module has been prepended. This should ensure better compatibility between our ActiveRecord Instrumentation and other third party gems that modify ActiveRecord using `Module#prepend`.
* Use license key passed in to NewRelic::Agent.manual_start

  Previously, the license key passed in when manually starting the agent with NewRelic::Agent.manual_start was not referenced when setting up the connection to report data to New Relic. This is now fixed.
* Account for DataMapper database connection errors

  Our DataMapper instrumentation traces instances of DataObjects::SQLError being raised and removes the password from the URI attribute. However, when DataObjects cannot connect to the database (ex: could not resolve host), it will raise a DataObjects::ConnectionError. This inherits from DataObjects::SQLError but has `nil` for its URI attribute, since no connection has been made yet. To avoid the password check here on `nil`, the agent catches and re-raises any instances of DataObjects::ConnectionError explicitly. Thanks Postmodern for this contribution!
* Account for request methods that require arguments

  When tracing a transaction, the agent tries to get the request object from a controller if it wasn't explicitly passed in. However, this posed problems in non-controller transactions with their own `request` methods defined that required arguments, such as in Resque jobs. This is now fixed.
