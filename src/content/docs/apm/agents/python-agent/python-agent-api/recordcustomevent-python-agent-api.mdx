---
title: record_custom_event (Python agent API)
type: apiDoc
shortDescription: Records a custom event for use in querying
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call records a custom event for use in querying.'
redirects:
  - /docs/agents/python-agent/python-agent-api/recordcustomevent-python-agent-api
  - /docs/agents/python-agent/python-agent-api/record_custom_event
freshnessValidatedDate: never
---

## Syntax

```py
newrelic.agent.record_custom_event(event_type, params, application=None)
```

Records a custom event for use in querying

## Requirements

Python agent version 2.60.0.46 or higher.

## Description

This records a custom [event](/docs/data-apis/understand-data/new-relic-data-types/#event-data) that can be viewed and queried in the New Relic UI. If you want to use this outside of the context of a monitored transaction, use the application parameter.

For custom machine learning events, see [the record_ml_event page](/docs/apm/agents/python-agent/python-agent-api/recordmlevent-python-agent-api) for more information.

<Callout variant="important">
  For limits and restrictions on `event_type` and `params`, see [Limits and restricted characters](/docs/data-apis/custom-data/custom-events/apm-report-custom-events-attributes/#limits) and [Reserved words](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#reserved-words).
</Callout>

<Callout variant="important">
  This setting is disabled when [high security mode](/docs/apm/agents/python-agent/getting-started/apm-agent-security-python/#restricted) is enabled.
</Callout>

## Parameters

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
        `event_type`

        _string_
      </td>

      <td>
        Required. The `event_type` defines the name (or type) of the custom event, and must be a string. No additional attributes recorded for the transaction are added to custom events.
      </td>
    </tr>

    <tr>
      <td>
        `params`

        _dict_
      </td>

      <td>
        Required. Attaches custom attributes to the event. Only attributes passed in as `params` are added. No additional attributes recorded for the transaction are added to custom events.
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _object_
      </td>

      <td>
        Optional. If you want to record an event outside of the context of a monitored transaction, use this to associate the call with a specific application object. An application object can be obtained using the [`newrelic.agent.application`](/docs/apm/agents/python-agent/python-agent-api/application-python-agent-api/) function.
      </td>
    </tr>
  </tbody>
</table>

## Return values

None.

## Examples

### Record custom event in background task [#bg-task-event]

Here's an example of recording a custom event associated with a background task:

```py
@newrelic.agent.background_task() 
def bg_task(): 
    # do some type of work in this background task...
    application = newrelic.agent.application()
    newrelic.agent.record_custom_event('your_event_type', {'param1':'value1'}, application)
```

### Create a killed-query custom event [#event-example]

An example of creating a killed-query custom event inside a database-logging function:

```PY
application = newrelic.agent.register_application(timeout=10)

def task_runner(): 
    event_type = "Killed_Query" 
    params = {'query_info':'select * from all_things;', 'killed_time': '2016-05-18 00:59:00', 'host': 'my_host'} 
    newrelic.agent.record_custom_event(event_type, params, application=application)
```
