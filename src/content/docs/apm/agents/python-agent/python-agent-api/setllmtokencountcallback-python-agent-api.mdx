---
title: set_llm_token_count_callback (Python agent API)
type: apiDoc
shortDescription: Registers a callback to calculate LLM token counts
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call registers a callback to calculate LLM token counts'
redirects:
  - /docs/agents/python-agent/python-agent-api/setllmtokencountcallback-python-agent-api
  - /docs/agents/python-agent/python-agent-api/set_llm_token_count_callback
freshnessValidatedDate: never
---

## Syntax [#syntax]

```py
    newrelic.agent.set_llm_token_count_callback(callback, application=None)
```

Registers a callback function which will be used for calculating token counts on Large Language Model (LLM) events.

## Requirements [#requirements]

Python agent version 9.8.0 or higher.

## Description [#description]

This API registers a callback to calculate and store token counts on `LlmEmbedding` and `LlmChatCompletionMessage` events.

* This function should be used when `ai_monitoring.record_content.enabled` is set to `false`. This setting prevents the agent from sending AI content to the New Relic server, where the token counts are attached server side.
* If you'd still like to capture token counts for LLM events, you can implement a callback in your app code to determine the token counts locally and send this information to New Relic.

In most cases, this API will be called exactly once, but you can make multiple calls to this API. Each fresh call made to the endpoint overwrites the previously registered callback with the new one that is provided. To unset the callback completely, pass `None` in place of the original callback.

## API Parameters [#api-parameters]

<table>
  <thead>
    <tr>
      <th width="25%">
        Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `callback`

        _callable_ or _None_
      </td>

      <td>
        Required. The callback to calculate token counts. To unset the current callback, pass `None` in instead of a callback function.
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _object_
      </td>

      <td>
        Optional. The specific application object to associate the API call with. An application object can be obtained using the [`newrelic.agent.application`](/docs/apm/agents/python-agent/python-agent-api/application-python-agent-api/) function.
      </td>
    </tr>
  </tbody>
</table>

## Return values [#return-values]

None.

## Callback Requirements [#callback-requirements]

Provided callbacks must return a positive integer token count value or no token count will be captured on LLM events.

## Callback Parameters [#callback-parameters]

<table>
  <thead>
    <tr>
      <th width="25%">
        Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `model`

        _string_
      </td>

      <td>
        Required. The name of the LLM model.
      </td>
    </tr>

    <tr>
      <td>
        `content`

        _string_
      </td>

      <td>
        Required. The message content/ prompt or embedding input.
      </td>
    </tr>
  </tbody>
</table>

## Examples [#examples]

### Calculating token counts and registering the callback

Example with tiktoken:

```py
import newrelic.agent
def token_count_callback(model, content):
    """
    Calculate token counts locally based on the model being used and the content.
    This callback will be invoked for each message sent or received during a LLM call.
    If the application supports more than one model, it may require finding libraries for
    each model to support token counts appropriately.

    Arguments:
    model -- name of the LLM model
    content -- the LLM message content
    """
    import tiktoken

    try:
        enc = tiktoken.encoding_for_model(model)
    except KeyError:
        return None # Unknown model
    return len(enc.encode(content))

newrelic.agent.set_llm_token_count_callback(token_count_callback)
```

Example API usage with an application object passed in:

```py
    application = newrelic.agent.register_application(timeout=10.0)
    newrelic.agent.set_llm_token_count_callback(token_count_callback, application)
```
