---
title: Use arrays for organization
metaDescription: "How to use arrays in NRQL, the New Relic query language"
redirects: 
  - /docs/query-your-data/nrql-new-relic-query-language/get-started/arrays-in-nrql
freshnessValidatedDate: 2024-03-19
---

As part of our support for the OpenTelemetry Protocol (OTLP), New Relic can process attributes containing arrays. But what are arrays? Essentially, arrays are data structures containing an ordered collection of values that you can query with NRQL. Typically, arrays display in a format like `[1, 2, 3, 4, 5]` or `["US", "CA", "UK"]`.

Currently, we only support simple, single-dimension arrays. You can use simple arrays to store a list of values of the same primitive type; for example, numeric, boolean, or string. To quickly verify that an array contains any data, you can use the JSON chart type to see if the data displays in an array structure.

## Supported features [#supported-features]

* The `FACET` clause supports array attributes.
* You can run the functions `getfield()`, `length()`, and `contains()` on arrays.
* You can also use the `uniques()`, `uniqueCount()`, and `latest()` aggregator functions.
* Arrays can contain up to 64 elements.

## Unsupported features [#unsupported-features]

* Comparison operators such as `=`, `!=`, and `IN` aren't supported with arrays.
* You can't aggregate arrays with other aggregator functions, such as `sum()`, `min()`, `max()`, etc.
* Arrays can't contain other arrays, such as `["UK", "US", ["CA", "OR", "ATL"]]`.
* Arrays can't contain `NULL`.

## Array functions and examples [#array-functions]

<CollapserGroup>
  <Collapser
    className="freq-link"
    title={<InlineCode>getfield(attribute, i) OR attribute[i]</InlineCode>}
  >
    Use the `getfield()` notation to get the `i`th element in an array.

    <Callout variant="important">
      Array indexing starts with `0`.
    </Callout>

    <DNT>**Example:**</DNT> Consider a simple array, `[100, 110, 90, 100, 105]`, stored in a durations attribute.

    `getfield(durations, 2)` will return `90`.

    You can use the square brackets `[ ]` shorthand instead of the function `getfield()`.

    <DNT>**Example:**</DNT> `durations[4]` will return `105`.
  </Collapser>

  <Collapser
    className="freq-link"
    title={<InlineCode>length(attribute)</InlineCode>}
  >
    Use the `length()` function to return the number of elements in an array.

    <DNT>**Example:**</DNT> Consider a simple array, `countries`, with the value `["US", "CA", "UK"]`.

    `length(countries)` will return `3`.
  </Collapser>

  <Collapser
    className="freq-link"
    title={<InlineCode>contains(attribute, element)</InlineCode>}
  >
    Use the `contains()` function to see if there's an element in an array.

    <CollapserGroup>
      <Collapser title="Example: Check if array contains an element">
        Example: Consider an array, `guids`, as `["9999-1234-9999", "3333-7890-3333", "5555-3456-555"]`.

        `contains(guids, '5555-3456-555')` will return `TRUE`.
      </Collapser>

      <Collapser title={<>Use contains to filter items in <InlineCode>count(*)</InlineCode></>}>
        Consider a `Transaction` event type including a `guids` array with the value `["9999-1234-9999", "3333-7890-3333", "5555-3456-555"]`.
        To find the count of transactions that include the `"9999-1234-9999"` GUID, use:

        ```sql
        SELECT count(*) FROM Transaction WHERE contains(guids, '9999-1234-9999')
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>
</CollapserGroup>
