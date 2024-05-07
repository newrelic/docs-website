---
subject: Python agent
releaseDate: '2016-12-14'
version: 2.76.0.55
downloadLink: 'https://pypi.python.org/pypi/newrelic'
redirects:
  - /docs/release-notes/agent-release-notes/python-release-notes/python-agent-274055
---

## Notes

This release of the Python agent adds support for reporting datastore instance information for the [python-memcached](https://pypi.python.org/pypi/python-memcached) library. It also addresses a couple of Python 3 issues related to naming metrics and transactions.

Over the past few releases, support has been added to the agent for collecting datastore instance information for a number of drivers. See a [complete list of supported packages](https://docs.newrelic.com/docs/apm/applications-menu/features/analyze-database-instance-level-performance-issues#python-compatibility).

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from the New Relic [download site](https://download.newrelic.com/python_agent/release/).

## New Features

* **Datastore instance information for python-memcached**

  For most memcached operations made using the [python-memcached](https://pypi.python.org/pypi/python-memcached) package, the Python agent will collect the host and port of the memcached server, as well as the memcached database index number. This data will be displayed in transaction traces and in slow query traces in APM.

  Supported operations include: `add`, `append`, `cas`, `decr`, `delete`, `get`, `gets`, `incr`, `prepend`, `replace`, `set`.

  Currently, the Python agent does not collect instance information for operations that interact with multiple memcached instances. These include: `delete_multi`, `flush_all`, `get_multi`, `get_slabs`, `get_stats`, `set_multi`.

## Bug Fixes

* **Names for subclass methods in Python 3**

  Previously, when using Python 3, if a method was defined on a base class, but was called as a method on an instance of a subclass, the agent would generate a metric name or transaction name for that method using the base class. It would also use the module name of the base class in the metric or transaction name.

  With this release, the metric name or transaction name will use the class name of the subclass, as well as the module name of the subclass. This is consistent with how the naming works for Python 2.
* **Names for Flask pluggable views in Python 3**

  When monitoring Python 3 Flask applications, the agent would create metric and transaction names for Flask pluggable (or, class-based) views using the name of the `View.as_view()` classmethod, making it impossible to distinguish between different views in APM. Now, the metric and transaction name uses the name that is passed into `View.as_view()`.

  For example, a view defined as `view_func=ShowUsersView.as_view('show_users')` would use `show_users` as the view name. This is consistent with how the naming works for Python 2.
* **Redis client with custom connection pool**

  If a custom connection pool was used with the [redis](https://pypi.python.org/pypi/redis) client, the agent could throw an `AttributeError` when attempting to gather datastore instance information. One library known to define a custom connection pool that encountered this issue is [Redis Blaster](https://pypi.python.org/pypi/rb). With this release, the agent will no longer throw an error for custom connection pools. In addition, the agent will now be able to gather datastore instance information for some operations, even when using a custom connection pool.
* **Developer Mode error message during "fake" harvest**

  When using the configuration setting of `developer_mode = True`, the agent does not transmit any data to New Relic. Instead, it performs a "fake harvest". In some cases, it was possible for the agent to log an `AssertionError` during the "fake harvest", but this issue has now been fixed.
