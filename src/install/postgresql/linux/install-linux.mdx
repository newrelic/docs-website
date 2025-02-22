---
componentType: default
headingText: Configure the PostgreSQL integration
---

1. To change directory to the integrations configuration folder, run:

   ```shell
   cd /etc/newrelic-infra/integrations.d
   ```

2. To copy the sample configuration file, run:

   ```shell
   sudo cp postgresql-config.yml.sample postgresql-config.yml
   ```

3. Edit the `postgresql-config.yml` file. This example config file collects all metrics:

   ```yml
   integrations:
     - name: nri-postgresql
       env:
         USERNAME: postgres
         PASSWORD: pass
         HOSTNAME: psql-sample.localnet
         PORT: 6432
         DATABASE: postgres

         COLLECT_DB_LOCK_METRICS: false
         COLLECTION_LIST: 'ALL'
         # Enable query performance monitoring - Defaults to false
         ENABLE_QUERY_MONITORING: 'true'
         # Set the threshold for query response time (in ms) to retrieve individual query performance metrics. Defaults to 500 ms.
         # QUERY_MONITORING_RESPONSE_TIME_THRESHOLD: '500ms' 
         # The number of records for each query performance metrics - Defaults to 20
         # QUERY_MONITORING_COUNT_THRESHOLD: '20' 
         TIMEOUT:  10
       interval: 15s
       labels:
         env: production
         role: postgresql
       inventory_source: config/postgresql
   ```

4. To enable automatic Postgresql parsing and forwarding, copy or rename the `postgresql-log.yml.example` file to `postgresql-log.yml`. You don't need to restart the agent but you may need to update the YML file with the location of your postgresql log files, if you aren't using the default locations.

   For example:

   ```shell
   sudo cp /etc/newrelic-infra/logging.d/postgresql-log.yml.example /etc/newrelic-infra/logging.d/postgresql-log.yml
   ```

You can find all the config options at the bottom of this doc along with more complex config examples.
