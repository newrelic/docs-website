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
         # Enable query performance monitoring by setting its value to true to obtain query monitoring metrics.
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
