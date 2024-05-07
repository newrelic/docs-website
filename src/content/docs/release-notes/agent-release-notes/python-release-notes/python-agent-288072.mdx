---
subject: Python agent
releaseDate: '2017-07-06'
version: 2.88.0.72
downloadLink: 'https://pypi.python.org/pypi/newrelic'
redirects:
  - /docs/release-notes/agent-release-notes/python-release-notes/python-agent-288071
---

## Notes

This release of the Python agent adds built-in [instrumentation](https://docs.newrelic.com/docs/agents/python-agent/supported-features/use-rabbitmq-message-queues) for the [pika RabbitMQ library](https://pypi.python.org/pypi/pika), a message broker API which can be used to add custom instrumentation for additional message brokers, and various bug fixes.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from the New Relic [download site](https://download.newrelic.com/python_agent/release/).

## New Features

* **Pika Instrumentation**

  The RabbitMQ pika library is now automatically instrumented. The agent will report data for messages sent and received by an application. Data on messages is available in both APM and Insights. Applications connected through a RabbitMQ exchange will now also be visible on Service Maps as part of Cross Application Tracing.
* **Message Broker API**

  A Message Broker API is now available for use in custom instrumentation. The Message Broker API will send data to [APM](https://docs.newrelic.com/docs/agents/python-agent/supported-features/use-rabbitmq-message-queues) and Insights (through message.routingKey and message.queueName attributes) for message broker related operations.
* **Tornado 4.5 Support**

  The Python Agent's out-of-the-box Tornado 4 instrumentation now supports Tornado version 4.5.
* **Tornado AsyncIO Loop**

  In addition to the Tornado PollIOLoop, the AsyncIO loop is now supported as part of our Tornado instrumentation. When Tornado is configured to use the AsyncIO loop, data will now be sent to New Relic. Note that AsyncIO is not yet generally supported.

## Bug Fixes

* **SQL comments beginning with a "--" resulted in an improperly parsed query**

  When executing SQL queries with comments that used the "--" comment syntax, the database operation and table was not properly parsed resulting in queries being absent from the Databases tab. Queries with "--" comments should now show up in the Database tab.
* **AttributeError generated when using Tornado 4 HTTPRequest objects in an external web call**

  When using the Tornado 4 HTTPRequest object as an argument to HTTPClient.fetch, it was possible to generate an AttributeError. The web call now completes as expected.
* **Slow network connections may result in lost data**

  When, due to a slow network, a 408 error is returned from New Relic data was not retransmitted. Data is now retransmitted when a 408 is received.
