---
componentType: default
headingText: Configure the RabbitMQ integration
---

1. Change directory to the integrations configuration folder by running:

   ```shell
   cd /etc/newrelic-infra/integrations.d
   ```

2. Copy the sample configuration file by running:

   ```shell
   sudo cp rabbitmq-config.yml.sample rabbitmq-config.yml
   ```

3. Edit the `rabbitmq-config.yml` file. This is the basic configuration with SSL:

   ```yml
   integrations:
     - name: nri-rabbitmq
       env:
         HOSTNAME: localhost
         PORT: 15672
         USERNAME: admin
         PASSWORD: admin
         CA_BUNDLE_DIR: /path/to/bundle/dir/
         NODE_NAME_OVERRIDE: local_node_name@localhost
         CONFIG_PATH: /path/to/config/file/rabbitmq.conf
         USE_SSL: true

         QUEUES: '["myQueue1","myQueue2"]'
         QUEUES_REGEXES: '["queue[0-9]+",".*"]'

         EXCHANGES: '["exchange1","exchange2"]'
         EXCHANGES_REGEXES: '["exchange[0-9]+",".*"]'

         VHOSTS: '["vhost1","vhost2"]'
         VHOSTS_REGEXES: '["vhost[0-9]+",".*"]'
       interval: 15s
       labels:
         env: production
         role: rabbitmq
       inventory_source: config/rabbitmq
   ```

4. To enable automatic Rabbitmq error log parsing and forwarding, copy (or rename) the `rabbitmq-log.yml.example` file to `rabbitmq-log.yml`. No need to restart the agent.

   <DNT>
     **Example:**
   </DNT>

   ```bash
   sudo cp /etc/newrelic-infra/logging.d/rabbitmq-log.yml.example /etc/newrelic-infra/logging.d/rabbitmq-log.yml
   ```

You can find all the config options at the bottom of this doc along with more complex config examples.
