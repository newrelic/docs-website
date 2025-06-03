---
componentType: default
headingText: Configure the NGINX integration 
---

1. Navigate to the integrations directory:

   ```shell
   cd /etc/newrelic-infra/integrations.d
   ```

2. Copy the sample configuration file by running:

   ```shell
   sudo cp nginx-config.yml.sample nginx-config.yml
   ```

3. Edit the `nginx-config.yml` file. This example config file collects basic metrics like Metrics and Inventory:

   ```yml
   integrations:
     - name: nri-nginx
       env:
         METRICS: "true"
         STATUS_URL: http://127.0.0.1/status
         STATUS_MODULE: discover
         REMOTE_MONITORING: true
       interval: 30s
       labels:
         env: production
         role: load_balancer

     - name: nri-nginx
       env:
         INVENTORY: "true"
         STATUS_URL: http://127.0.0.1/status
         CONFIG_PATH: /etc/nginx/nginx.conf
         REMOTE_MONITORING: true
       interval: 60s
       labels:
         env: production
         role: load_balancer
       inventory_source: config/nginx
   ```

Specific settings related to NGINX are defined using the `env:` section of the configuration file. These settings control the connection to your NGINX instance as well as other security settings and features. The list of valid settings is described in the next section of this document.

You can find all the config options at the bottom of this doc along with more complex config examples.
