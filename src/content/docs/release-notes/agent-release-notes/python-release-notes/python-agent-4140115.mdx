---
subject: Python agent
releaseDate: '2019-02-13'
version: 4.14.0.115
downloadLink: 'https://pypi.python.org/pypi/newrelic'
---

## Notes

This release of the Python agent adds support for native coroutines and generators with the background task API and adds support for Kubernetes detection.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from the New Relic [download site](https://download.newrelic.com/python_agent/release).

## Features

* **@background_task can now be used with coroutines**

  The background_task decorator API can now be used with native coroutines and generators.

  ```
  @background_task(name='my_coroutine')
   async def my_coroutine():
     await asyncio.sleep(0.1)
  ```
* **Add support for collection of Kubernetes metadata**

  The agent will now collect environment variables prefixed by `NEW_RELIC_METADATA_` as additional metadata. Some of this metadata may be added to Transaction events to provide context between your Kubernetes cluster and your services. For details on the benefits (currently in beta) see [this blog post](https://blog.newrelic.com/engineering/monitoring-application-performance-in-kubernetes).

  The agent now also collects the `KUBERNETES_SERVICE_HOST` environment variable to detect when the application is running on Kubernetes. The data is used to link the application to the host machine when using the New Relic infrastructure product.

## Bug Fixes

* **Using time trace decorators allowed coroutines to become Iterables and generators to become awaitables**

  When using time trace decorators native coroutines were converted to iterables. Additionally generators were converted to awaitables. The behavior of generators, native coroutines, and awaitable generators is now unchanged when using time trace decorators.
