---
title: Rollup unresolved imports
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: 'If you use rollup to bundle your project and get an UNRESOLVED_IMPORT error, you may need to update your dependencies.'
freshnessValidatedDate: never
---

## Problem

You receive an `UNRESOLVED_IMPORT` error while building your project using the browser agent NPM package in a project that uses rollup for bundling.

## Solution

Update your rollup configuration to use the `node-resolve` [plugin](https://www.npmjs.com/package/@rollup/plugin-node-resolve). If you already use this plugin, update the plugin to a minimum version of `15.2.1`.

### Stencil Projects

If your project uses the stencil framework, you won't be able to override the `node-resolve` plugin version. Use the workaround listed below in your project and monitor [this](https://github.com/ionic-team/stencil/issues/3605) issue in the stencil github repository.

## Alternative workaround

If you can't update the `node-resolve` plugin or you're using a framework that bundles the plugin that you can't override, you'll need to change your browser agent import statement.

```js
// Instead of importing the browser agent like this
import { MicroAgent } from "@newrelic/browser-agent/loaders/micro-agent";

// Import like this
import { MicroAgent } from "@newrelic/browser-agent/src/loaders/micro-agent";
```

The `src` directory contains our ES2019+ code. If you can't apply transpilation to this code and need to support older browsers, upgrade the browser agent NPM package to version 1.252.0 and use the below import statement:

```js
import { MicroAgent } from "@newrelic/browser-agent/dist/esm/loaders/micro-agent";
```

The contents of the `dist` directory follow our [browser support statement](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring/#browser-types).
