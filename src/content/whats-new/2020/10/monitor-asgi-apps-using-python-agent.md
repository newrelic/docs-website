---
title: Monitor ASGI apps using the Python agent
summary: 'The Python agent now supports monitoring Uvicorn, Starlette, and FastAPI ASGI applications.'
releaseDate: '2020-10-27'
learnMoreLink: 'https://docs.newrelic.com/docs/apm/agents/python-agent/web-frameworks-servers/uvicorn'
---

The Python agent now provides out-of-the-box monitoring support for Uvicorn, Starlette, and FastAPI ASGI applications.

### Uvicorn Server, Starlette and FastAPI

Get full visibility into your ASGI applications that use [Uvicorn Server](https://docs.newrelic.com/docs/agents/python-agent/web-frameworks-servers/python-agent-uvicorn-web-server), [Starlette](https://docs.newrelic.com/docs/agents/python-agent/web-frameworks-servers/python-agent-starlette-web-framework) framework or the [FastAPI](https://docs.newrelic.com/docs/agents/python-agent/web-frameworks-servers/python-agent-fastapi-web-framework) framework. This includes timing of ASGI requests and ensuring those requests are trackable using distributed tracing. It also handles error reporting and reporting of KPIs such as response time and throughput.

### ASYNCPG Support

And that’s not all. We have seen an increasing demand from ASGI users to have asyncpg support, so we built that as well! This support extracts Postgres database query timing, the statement, the database, and the associated host, providing you with complete visibility into your Postgres queries.

### ASGI API

Use the [ASGI API](https://docs.newrelic.com/docs/agents/python-agent/python-agent-api/asgiapplication-python-agent-api) to monitor web transactions for your ASGI applications not using Uvicorn or Starlette. To create meaningful transactions, when using this API we encourage you to use [newrelic.agent.set_transaction_name API](https://docs.newrelic.com/docs/agents/python-agent/python-agent-api/settransactionname-python-agent-api).
