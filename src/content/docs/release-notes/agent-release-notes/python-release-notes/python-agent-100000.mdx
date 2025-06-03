---
subject: 'Python agent'
releaseDate: '2024-09-26'
version: 10.0.0
downloadLink: 'https://pypi.python.org/pypi/newrelic'
features: ['Remove Python 2.7 support', 'Add Kafka server metric', 'Add capturing of memcache host and port', 'Add support for kafka-python-ng', 'Add support for uvicorn_workers', 'Automatically detect function signature in LangChain similarity search', 'Add environment variable for garbage collector runtime metrics']
bugs: ['Fix bug in gRPC entity name detection', 'Fix issue in LangChain where a thread is started and the transaction context is lost', 'Fix parsing of request and response when running OpenAI via LangChain', 'Instrument new path to OpenAI chat class', 'Fix pyscopg v3 API incompatibilities', 'Remove versioned logic in loguru instrumentation']
security: []
---

## Notes

This release of the Python agent drops support for Python 2.7 and adds the following:

 * a Kafka server metric
 * host and port attributes for memcache
 * support for [kafka-python-ng](https://pypi.org/project/kafka-python-ng/)
 * support for [uvicorn_worker](https://pypi.org/project/uvicorn-worker/)
 * an environment variable for garbage collector (GC) runtime metrics
 * automatic detection for the function signature in [LangChain](https://pypi.org/project/langchain/)'s `similarity_search`
 * updated support for [OpenAI](https://pypi.org/project/openai/)'s chat class
 * a fix for a bug in gRPC's entity name detection
 * a fix for transaction context propagation loss in [LangChain](https://pypi.org/project/langchain/) in the case of a new thread
 * parsing of the request and response when running [OpenAI](https://pypi.org/project/openai/) via [LangChain](https://pypi.org/project/langchain/)
 * a fix for [pyscopg](https://pypi.org/project/psycopg/) v3 API incompatibilities
 * a fix that removes versioned logic in [loguru](https://pypi.org/project/loguru/) instrumentation
 
Install the agent using `easy_install/pip/distribute` via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or download it directly from the [New Relic download site](https://download.newrelic.com/python_agent/release).

## Deprecations

* Remove Python 2.7 Support

  * Removes compatibility with Python 2.7. Also removes support for the following libraries that were only supported on Python 2.7:
    * [umemcache](https://pypi.org/project/umemcache/)
    * [oursql](https://pypi.org/project/oursql/)
    * [pywapi](https://pypi.org/project/pywapi/)
    * [Pylons](https://pypi.org/project/Pylons/)
    * [web2py](https://pypi.org/project/web2py/)
    * [weberror](https://pypi.org/project/WebError/)

## New features

* Add Kafka server metric

  * Adds a metric to capture the host and port information for Kafka entities on both consumers and producers. This metric allows the UI to link AWS information with AWS MSK entities in the service map.

* Add capturing of memcache `host` and `port`

  * Adds capturing of `host` and `port` info on the following memcache libraries: [bmemcached](https://pypi.org/project/python-binary-memcached/), [aiomcache](https://pypi.org/project/aiomcache/), and [pymemcache](https://pypi.org/project/pymemcache/). This allows the UI to link AWS information with AWS memcache entities in the service map.

* Add support for [kafka-python-ng](https://pypi.org/project/kafka-python-ng/)

  * [kafka-python](https://pypi.org/project/kafka-python/) has been released under a new name: [kafka-python-ng](https://pypi.org/project/kafka-python-ng/). This continues to support kafka-python under the new package name.

* Add support for [uvicorn_worker](https://pypi.org/project/uvicorn-worker/)

  * `uvicorn.workers` has been moved to a separate package called `uvicorn_worker`. This checks for both names of the module when reporting dispatcher information.

* Automatically detect function signature in [LangChain](https://pypi.org/project/langchain/) `similarity_search`

  * Automatically detect the function signature when wrapping `similarity_search`.

* Add environment variable for garbage collector runtime metrics

  * Garbage collector runtime metrics can now be enabled/disabled via the following environment variable: `NEW_RELIC_GC_RUNTIME_METRICS_ENABLED`. 

## Bug fixes

* Fix bug in gRPC entity name detection

  * Previously, the gRPC channel entity name was missing the first character(s) in specific cases. This bug has been fixed.

* Fix issue in [LangChain](https://pypi.org/project/langchain/) where a thread is started and the transaction context is lost

  * Previously, when LangChain called certain chains, such as retrieval chains, LangChain started a thread that caused the transaction to be lost, resulting in broken instrumentation. This has been fixed so the transaction context is passed across threads and instrumentation still works for retrieval chains.

* Fix parsing of request and response when running [OpenAI](https://pypi.org/project/openai/) via [LangChain](https://pypi.org/project/langchain/)

  * Previously, when running [OpenAI](https://pypi.org/project/openai/) via [LangChain](https://pypi.org/project/langchain/) the request and response were a different format and were not being recorded. This issue has been fixed.

* Instrument new path to [OpenAI](https://pypi.org/project/openai/) chat completions class

    * [OpenAI](https://pypi.org/project/openai/) moved the `ChatCompletions` class to a different path which prevented the instrumentation from being applied. This has been fixed.

* Fix [pyscopg](https://pypi.org/project/psycopg/) v3 API incompatibilities

    * Expand DBAPI2 wrappers to allow arbitrary `kwargs` on `executemany()`. Upgrade [psycopg](https://pypi.org/project/psycopg/) v3 instrumentation to allow arbitrary `kwargs` on `executemany()`. Rename existing psycopg v3 wrapper arguments to match the upstream library's names for compatibility.

* Remove versioned logic in loguru instrumentation

    * Removed versioned logic in [loguru](https://pypi.org/project/loguru/) instrumentation to fix a bug that occurred when the version was undeterminable.

## Support statement

We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read [more](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/) about keeping agents up to date.

See the New Relic Python agent [EOL policy](/docs/apm/agents/python-agent/getting-started/python-agent-eol-policy/) for information about agent releases and support dates.
