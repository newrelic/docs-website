---
subject: PHP agent
releaseDate: '2016-08-23'
version: 6.6.0.169
---

### New Features

* Support has been added for Laravel 5.3.
* Experimental Laravel Queue support.

  Experimental support for the [Laravel Queue component](http://laravel.com/docs/5.2/queues) has been added. This supports all versions of Laravel from 4.0 to 5.3, inclusive.

  Whether run via `artisan queue:listen` or `artisan queue:work`, queue workers will now generate a separate background transaction for each job that is processed. These transactions will be named with the class name of the job, or `IlluminateQueueClosure` if a closure was queued.

  Additionally, a transaction that queues one or more jobs will be linked to the background transaction(s) that processed those jobs on the transaction map in the New Relic UI.

  To enable this support, you will need to set the `laravel_queue` feature flag in newrelic.ini. For most users, this will simply involve adding this line:

  newrelic.feature_flag=laravel_queue

  As this is presently an experimental feature, we would welcome feedback — both positive and negative — on whether this feature helps users using the Laravel Queue component better visualise the structure and performance of their applications.

  If all goes well, it is anticipated that Laravel Queue support will be enabled by default in a future version of the agent.

### Upgrade Notices

* Symfony 1 transactions that generate 404 errors due to no routes being matched will now be named based on the module and action that are actually used, rather than the module and action inferred from the request URL. In most cases, this will result in the transaction name being based on the `error_404_module` and `error_404_action` Symfony settings.

  Note that, as a result of this change, if the configured 404 action calls `sfAction::forward()` to forward to another action, the transaction name will be based on the final action. All other uses of `sfAction::forward()` are unaffected.

### Bug Fixes

* Previously, calling `PDO::query` with more than one argument resulted in the query being counted under the 'other' category on the Datastores page in the New Relic UI. This has been fixed. The agent will now correctly categorize the query as 'select', 'insert', 'update', or 'delete'.
* Previously, calling `PDO::query` with more than one argument resulted in the agent reporting "(unknown sql)" if the query was slow. (i.e., it exceeded the threshold given by the [newrelic.transaction_tracer.explain_threshold](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-epthreshold) setting.) This has been fixed.
* Previously, calling `SQLite3::querySingle` with two arguments resulted in the query being counted under the 'other' category on the Datastores page in the New Relic UI. This has been fixed. The agent will now correctly categorize the query as 'select', 'insert', 'update', or 'delete'.
* Previously, calling `SQLite3::querySingle` with two arguments resulted in the agent reporting "(unknown sql)" if the query was slow. (i.e. It exceeded the threshold given by the [newrelic.transaction_tracer.explain_threshold](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-epthreshold) setting.) This has been fixed.
* Transient Magento 2 tables now have the unique numbers removed from their names to avoid metric grouping issues.
* Pressflow 6 applications were incorrectly detected as Drupal 7 applications. This could cause POST requests made using `drupal_http_request` to be converted into GET requests. This has been fixed.
* Explain plan generation is now always performed on a separate database connection. This has been changed to avoid issues when using MySQL's `SELECT FOUND_ROWS()` feature.
* Previously, instrumenting method calls that resolved to `__call()` or `__callStatic()` calls could result in crashes on PHP 7. This primarily manifested in crashes for users of certain WordPress plugins (for example, wp-external-links) that registered hooks or actions that used magic methods. This has been fixed.
