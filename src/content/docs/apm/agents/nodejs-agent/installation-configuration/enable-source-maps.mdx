---
title: Enable source maps support
tags:
  - Agents
  - Nodejs agent
metaDescription: Enable source map support in Node.js to see more meaningful error traces.
freshnessValidatedDate: never
---

Transpiled applications, such as those written in TypeScript or Babel, will show error stack traces that typically point to files, lines, and functions within the built files, rather than the source files.

If you enable source mapping in Node.js, you'll get more meaningful error traces that point to lines and functions within the source code.

## How to enable source mapping [#enable-command]

You can enable Node's source map support in the `node` command that starts your application:

```shell
node --enable-source-maps -r newrelic ./dist/server.js
```

## Example [#source-map-example]

An application run without source map support might display an error stack trace like this:

```shell
[output] Error: Failed to get all entries in model
[output]    at /dist/models/entries.js:41:23
[output]    ... (multiple functions in New Relic Node agent js files)
[output]    at /dist/models/entries.js:39:35
[output]    at Generator.next (<anonymous>)
```

<Callout variant="tip">
  Note that the trace refers to the built files in `/dist`.
</Callout>

The same application with source map support enabled will instead reference the source code files:

```shell
[output] Error: Failed to get all entries in model
[output]    at <anonymous> (/src/models/entries.ts:28:13)
[output]    ... (multiple functions in New Relic Node agent js files)
[output]    at <anonymous> (/src/models/entries.ts:26:19)
[output]    at Generator.next (<anonymous>)
```

This stack trace points to specific functions and line numbers within your source files, so you can find errors more easily.

You can observe this behavior by running our [source maps example application](https://github.com/newrelic/newrelic-node-examples/tree/main/source-maps), which makes it easy to compare error traces both with and without source maps enabled.
