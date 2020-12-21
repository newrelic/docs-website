---
subject: PHP agent
releaseDate: '2017-10-10'
version: 7.6.0.201
---

### New Features

* Internal functions can now be instrumented by enabling the `newrelic.transaction_tracer.internal_functions_enabled` configuration setting. When enabled, internal functions will appear in transaction traces like PHP functions.

  Note that enabling this option may result in transactions being slower, especially when collecting many traces from PHP 5.x. Enabling this option is only recommended when specifically debugging performance issues where an internal function is suspected to be slow.

### Bug Fixes

* In some cases, Magento 2's UI Component JSON data sources return with an (incorrect) `Content-Type` of `text/html`. This resulted in auto instrumentation insertions into JSON data that contained a `<head>` string. We now identify these specific JSON data sources and ensure the auto instrumentation is not inserted into this JSON data.
* On PHP 7, using `file_get_contents()` to get a HTTP URL in a function which also read from `$http_response_header` resulted in the external call not being linked correctly in the APM UI: the external call would appear in transaction traces without a link to the receiving application. This has been fixed.
* Using [`curl_setopt_array()`](http://php.net/curl_setopt_array) to set options on a cURL handle could result in cross application tracing failing. This has been fixed.
* When generating explain plans for queries issued with MySQLi, the PHP agent could bind parameters from the wrong query if the PHP object ID had been reused internally. This has been fixed.
* Due to a change in Laravel 5.5's router API, the PHP agent would crash when automatically naming a Laravel transaction. This has been fixed.
* On PHP 7, when naming transactions for the Laravel 5 framework, well-formed transaction names were being replaced by the too-generic `$METHOD/index.php`. This has been fixed.
* Invoking `newrelic_record_datastore_segment()` before the PHP agent had connected to New Relic would result in the query callback silently failing to execute. This has been fixed; the callback will always be invoked provided parameters of the correct type are given to the function, otherwise an `E_WARNING` will be generated.
