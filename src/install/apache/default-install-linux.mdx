---
componentType: default
headingText: Configure the  integration
---

1. Change directory to the integrations configuration folder by running:

   ```shell
   cd /etc/newrelic-infra/integrations.d
   ```

2. Copy the sample configuration file by running:

   ```shell
   sudo cp nri-apache-config.yml.sample nri-apache-config.yml
   ```

3. Edit the `nri-apache-config.yml` file. The only two required fields are `_cluster_name` and `_uri`. This example config file collects all metrics:

   ```yml
   integrations:
     - name: nri-apache
       env:
         METRICS: "true"
         STATUS_URL: http://127.0.0.1/server-status?auto
         REMOTE_MONITORING: true
       interval: 15s
       labels:
         env: production
         role: load_balancer

     - name: nri-apache
       env:
         INVENTORY: "true"
         STATUS_URL: http://127.0.0.1/server-status?auto
         REMOTE_MONITORING: true
       interval: 60s
       labels:
         env: production
         role: load_balancer
       inventory_source: config/apache
   ```

You can find all the config options at the bottom of this doc along with more complex config examples.
