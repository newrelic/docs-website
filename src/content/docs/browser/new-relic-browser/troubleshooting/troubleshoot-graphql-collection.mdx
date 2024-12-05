---
title: GraphQL metadata is not found on AjaxRequests
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: Troubleshooting for not seeing GraphQL metadata on AjaxRequest events for your browser app.
redirects:
freshnessValidatedDate: 2023-10-19
---

## Problem

You are seeing AjaxRequest events, but they do not contain the following GraphQL metadata properties for your browser app.

* [Operation Framework](/attribute-dictionary/?event=AjaxRequest&attribute=operationFramework)
* [Operation Name](/attribute-dictionary/?event=AjaxRequest&attribute=operationName)
* [Operation Type](/attribute-dictionary/?event=AjaxRequest&attribute=operationType)

## Cause

The browser agent analyzes each AJAX request body and query and attempts to identify common GraphQL patterns. When detecting these patterns, it will append extra metadata properties to the outgoing AjaxRequest event being harvested. If the agent fails to detect these patterns, it will not add the extra event properties.

## Solution

If your application is [instrumented with the latest version of browser monitoring](/docs/browser/new-relic-browser/installation-configuration/troubleshooting-browser-monitoring-installation) and is collecting data for all [Pro features](/docs/browser/new-relic-browser/browser-pro-features), make sure your AJAX requests are being sent using standard GraphQL formatting.

To verify the format of your AJAX request, use your browser's dev console to view the requests and compare them to the syntax below.

<CollapserGroup>
  <Collapser
    id="post"
    title="GraphQL POST Requests"
  >
    For POST GraphQL queries, mutations, and subscriptions, the browser agent parses the request body for data formatted as such:

    ```js
    {
        "query": ...,
        "operationName": ...,
        "variables": ... 
      }
    ```
  </Collapser>

  <Collapser
    id="get"
    title="GraphQL GET Requests"
  >
    For GET GraphQL queries, the browser agent parses the request query parameters for data formatted as such:

    ```js
    ?query=...&operationName=...&variables=...
    ```
  </Collapser>

  <Collapser
    id="batch"
    title="GraphQL Batched POST Requests"
  >
    For batched GraphQL operations, the browser agent parses the request body for data formatted as such:

    ```js
    [
        {
          "query": ...,
          "operationName": ...,
          "variables": ... 
        },
        {
          "query": ...,
          "operationName": ...,
          "variables": ... 
        },
        ...etc
      ]
    ```
  </Collapser>
</CollapserGroup>

See [GraphQL's documentation](https://graphql.org/learn/serving-over-http/#post-request) for a thorough description of these standards.

The agent uses the contents of this payload to detect GraphQL patterns and build the metadata properties. Any request body or query missing the `query` section will not be processed as GraphQL data at all.

If you see your GraphQL payloads not following this pattern, the agent will not be able to reliably detect the GraphQL metadata.

If any of these troubleshooting steps fail or you are still having issues with missing AJAX data properties, get support at [support.newrelic.com](https://support.newrelic.com).
