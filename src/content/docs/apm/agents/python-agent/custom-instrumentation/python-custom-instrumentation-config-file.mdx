---
title: Python custom instrumentation via config file
tags:
  - Agents
  - Python agent
  - Custom instrumentation
metaDescription: Modify your config file to add additional instrumentation to a monitored application when using the Python agent.
redirects:
  - /docs/agents/python-agent/custom-instrumentation/python-custom-instrumentation-config-file
  - /docs/python/python-instrumentation-by-config-file
  - /docs/agents/python-agent/customization-and-extension/python-instrumentation-config-file
  - /docs/agents/python-agent/customization-extension/python-instrumentation-config-file
  - /docs/agents/python-agent/customization-extension/python-custom-instrumentation-config-file
freshnessValidatedDate: never
---

You can extend the Python agent's monitoring to trace time spent in additional functions or methods of classes by editing your [`newrelic.ini` configuration file](/docs/apm/agents/python-agent/configuration/python-agent-configuration/#agent-configuration-file). This form of [custom instrumentation](/docs/python/python-custom-instrumentation) is simpler to implement than API calls, and doesn't require you to modify your code. However, for more complex needs, you may need to [instrument via API](/docs/python/python-instrumentation-by-api) instead.

## Listing functions in the configuration file [#listing_functions]

To extend instrumentation to designated functions and class methods, add them to the `transaction_tracer.function_trace` setting within the `newrelic` section of the agent configuration file. The identifier for a function should have the form `module:function` and that of a class method `module:class.function`.

<CollapserGroup>
  <Collapser
    id="dumdbm-example"
    title="Using dumbdbm"
  >
    In this example, you use the Python <DNT>**`dumbdbm`**</DNT> module and want to instrument the time it took to open a database, and then to write that database back to a file. In this case you would use:

    ```ini
    transaction_tracer.function_trace = dumbdbm:open
                                                   dumbdbm:_Database._commit
    ```
  </Collapser>
</CollapserGroup>

To list more than one item, use either of these methods:

* One line: Separate each item with a space.
* Multiple lines: Follow the <DNT>**ini**</DNT> file convention to indent the subsequent lines.

When data is reported for the instrumented function, the metric will have a name in the form `Function/module:function` or `Function/module:class.function`. In the performance breakdown for a transaction, the category will show as `Function` and the segment will be `module:function` or `module:class.function`. For slow transaction traces, only the segment name appears. Note that where a function is actually returning a generator, only the time spent in returning the generator will be recorded and not the consumption of the values from the generator.

## Restrictions on wrapping extension APIs [#restrictions_on_wrapping]

When wrapping functions by listing them in the agent configuration file, you cannot designate class methods this way when the method is a member of a class which is implemented in C code by a C extension module. This is because it is not possible to modify the method table of a type implemented using the Python C API.

## Overriding the reported function name [#overriding_the_name]

When using the `transaction_tracer.function_trace` setting in the agent configuration file, the name of the function will be used in the metric name, with it being classified as a `Function`. If it is necessary to override what function name may be used in the metric name or classify it differently, then an alternate means of defining the function trace in the configuration file can be used. The equivalent for:

```ini
transaction_tracer.function_trace = dumbdbm:open
                                               dumbdbm:_Database._commit
```

would be to create two new configuration sections in the agent configuration file, one for each function to be traced:

```ini
[function-trace:dumbdbm-1]
enabled = true
function = dumbdbm:open
name = dumbdbm:open
group = Function

[function-trace:dumbdbm-2]
enabled = true
function = dumbdbm:_Database._commit
name = dumbdbm:_Database._commit
group = Function
```

The `.ini` file section name should start with `function-trace:`. The name component that follows that prefix can be anything but should be unique across all function trace sections in the configuration file. You can override the `group` and `name` settings to get the desired metric name. The `enabled` setting defaults to `false` and you must change it to `true` to enable the function trace.

## Instrument with the API [#function_decorators]

For simple custom instrumentation purposes, the config file method works well. For more precise and customized instrumentation and agent behavior adjustments, use the [Python agent API](/docs/agents/python-agent/api/python-agent-api-guide).
