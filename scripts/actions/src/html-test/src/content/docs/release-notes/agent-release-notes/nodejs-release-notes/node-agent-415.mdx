---
subject: Node.js agent
releaseDate: '2018-06-11'
version: 4.1.5
---

### Fixes

* Make `require()` statements explicitly reference `package.json` as a `.json` file.

This solves a problem when requiring/importing `newrelic` from a Typescript file.

* Check if `process.mainModule.filename` exists before using in missing config file check.

When the agent is preloaded with Node's `--require` flag, `mainModule` is not yet defined when the agent checks for a config file, resulting in a `TypeError` in the event that no config file exists. Defaulting to the file path being executed in `process.argv` ensures that the app will not crash when preloaded without a config file.

* Updated dev dependency tap to `v12.0.1`.
* Fixed identification of errors with express.

Previously the call `next('router')` was considered an error. This is actually valid usage of express and will no longer generate an error.

* Removed `debug.internal_metrics` configuration.

This legacy debug configuration was never used since trace-level logging provides everything this did and more.

* Upgraded optional dependency `@newrelic/native-metrics` to v3.

With this update comes pre-built binaries for Node 5 and 7. GC metrics are also now aggregated in C++ until the agent is ready to harvest them instead of hopping into JS for each event.

* Added additional checks to `uninstrumented` ensuring that files with names matching instrumented modules do not result in a false uninstrumented status.

For example, some users load config/env info before the agent. In that case, a file responsible for exporting DB config information (`config/redis.js`), may result in a false uninstrumented status, because the agent would interpret `redis.js` as the module itself.
