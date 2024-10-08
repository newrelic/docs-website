---
title: HTTP client tracing in Ruby
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'Information about HTTP tracing in the New Relic Ruby agent, including supported clients and versions.'
redirects:
  - /docs/agents/ruby-agent/features/http-client-tracing-ruby
  - /docs/ruby/ruby-http-clients
freshnessValidatedDate: never
---

The Ruby agent can trace outgoing HTTP requests made by your application or script to:

* Record metrics about how long your HTTP requests are taking and which hosts they're hitting.
* Annotate transaction traces with nodes for each HTTP request.
* Provide [distributed tracing](/docs/distributed-tracing/concepts/introduction-distributed-tracing/) for requests between applications instrumented with New Relic.

## Supported HTTP client libraries [#supported_libraries]

The following HTTP client libraries are currently supported by the Ruby agent:

<table>
  <thead>
    <tr>
      <th width={150}>
        Name
      </th>

      <th width={200}>
        Minimum supported version
      </th>

      <th>
        Notes
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [Async::HTTP](https://github.com/socketry/async-http)
      </td>

      <td>
        0.59.0
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        [Curb](https://github.com/taf2/curb)
      </td>

      <td>
        0.9.3
      </td>

      <td>
        Curl::Multi requests get partial instrumentation. See [Curb notes](#curb).
      </td>
    </tr>

    <tr>
      <td>
        [Ethon](https://github.com/typhoeus/ethon)
      </td>

      <td>
        0.12.0
      </td>

      <td>
        See [Ethon notes](#ethon).
      </td>
    </tr>

    <tr>
      <td>
        [Excon](https://github.com/geemus/excon)
      </td>

      <td>
        0.56.0
      </td>

      <td>
        See [Excon notes](#excon).
      </td>
    </tr>

    <tr>
      <td>
        [HTTPClient](https://github.com/nahi/httpclient)
      </td>

      <td>
        2.8.3
      </td>

      <td>
        Instrumentation of asynchronous requests is not supported.
      </td>
    </tr>

    <tr>
      <td>
        [http.rb](https://github.com/httprb/http)
      </td>

      <td>
        2.2.2
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        [HTTPX](https://honeyryderchuck.gitlab.io/httpx/)
      </td>

      <td>
        1.0.0
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        Net::HTTP
      </td>

      <td>
        N/A (part of the Ruby standard library)
      </td>

      <td>
        Also includes libraries built upon Net::HTTP, such as [httparty](http://johnnunemaker.com/httparty/).
      </td>
    </tr>

    <tr>
      <td>
        [Typhoeus](https://github.com/typhoeus/typhoeus)
      </td>

      <td>
        1.3.0
      </td>
    </tr>
  </tbody>
</table>

## Ethon notes [#ethon]

The same team that maintains Ethon and depends on Ethon for its functionality also maintains Typhoeus. To prevent duplicate reporting for each HTTP request, the agent disables Ethon instrumentation when it detects Typhoeus.

## Excon notes [#excon]

The Ruby agent supports Excon version <DNT>**0.56.0 or higher.**</DNT> Excon instrumentation relies on the ability to add an Excon middleware to the `:middlewares` key of `Excon.defaults`, so if your application modifies `Excon.defaults` you should ensure that you preserve the value of the `:middlewares` key.

## Curb notes [#curb]

The Ruby agent supports Curb version <DNT>**0.9.3 or higher.**</DNT> Curb instrumentation on JRuby is **not** supported.

Requests made via the `Curl::Multi` API currently only have partial distributed tracing support. The Ruby agent will record a single transaction trace node representing the entire batch, but you won't be able to see the details about individual requests in the batch.
