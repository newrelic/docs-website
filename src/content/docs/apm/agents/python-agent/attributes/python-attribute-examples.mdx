---
title: Python attribute examples
tags:
  - Agents
  - Python agent
  - Attributes
metaDescription: Examples of using attributes with the Python agent.
redirects:
  - /docs/agents/python-agent/attributes/python-attribute-examples
  - /docs/agents/python-agent/miscellaneous/python-attribute-examples
freshnessValidatedDate: never
---

Here are some examples of using [attributes](/docs/agents/python-agent/attributes/python-agent-attributes) with the Python agent.

## Capture request parameters [#ex_req_params]

Capturing request parameters is not enabled by default. The following configuration will turn on parameter capture for the default destinations: `transaction_tracer`, `transaction_events`, and `error_collector`. To limit the destinations see the [Selecting specific destinations example](#ex_select_dest).

<DNT>
  **Configuration:**
</DNT>

```ini
attributes.include = request.parameters.*
```

## Capture only specific request parameters [#ex_req_params_exclude]

To capture only specific request parameters, you can simply pass a list to `attributes.include`:

<DNT>**Configuration**</DNT>:

```ini
attributes.include = request.parameters.user_id request.parameters.product_id
```

## Disable all attributes [#ex_disable_all]

In this example, attributes are disabled, so the include and exclude lists will be ignored and all attributes will be filtered out.

<DNT>
  **Configuration:**
</DNT>

```ini
attributes.enabled = false
attributes.include = request.parameters.*
```

<DNT>
  **Input keys:**
</DNT>

```
foo, bar, request.parameters.foo, request.parameters.bar
```

<DNT>
  **Output for destinations:**
</DNT>

```
transaction_tracer: none
error_collector:    none
transaction_events: none
browser_monitoring: none
```

## Select specific destinations [#ex_select_dest]

In this example:

* Attributes are disabled for transaction traces. The include and exclude lists will be ignored, and all attributes will be filtered out for this destination.
* Attributes are also disabled for <InlinePopover type="browser"/> by default.
* Request parameters (prefixed with `request.parameters.`) are off by default for all destinations.

As a result, only `bar` is sent in traced errors and transaction events.

<DNT>
  **Configuration:**
</DNT>

```ini
attributes.enabled = true
transaction_tracer.attributes.enabled = false
attributes.exclude = foo
```

<DNT>
  **Input keys:**
</DNT>

```
foo, bar, request.parameters.foo, request.parameters.bar
```

<DNT>
  **Output for destinations:**
</DNT>

```
transaction_tracer: none
error_collector:    bar
transaction_events: bar
browser_monitoring: none
```

## Select values and destinations [#ex_select_values_and_dest]

In this example, specific input keys are selected for certain output destinations and excluded from others.

* The `food.fruit.banana` key will be excluded only from transaction traces.
* The `food` and `food.bread` keys will be excluded from all destinations.

<DNT>
  **Configuration:**
</DNT>

```ini
browser_monitoring.attributes.enabled = true
attributes.exclude = food*
attributes.include = food.fruit.*
transaction_tracer.attributes.exclude = food.fruit.banana
```

<DNT>
  **Input keys:**
</DNT>

```
food, food.bread, food.fruit.banana, food.fruit.apple
```

<DNT>
  **Output for destinations:**
</DNT>

```
transaction_tracer: food.fruit.apple
error_collector:    food.fruit.banana, food.fruit.apple
transaction_events: food.fruit.banana, food.fruit.apple
browser_monitoring: food.fruit.banana, food.fruit.apple
```
