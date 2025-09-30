---
componentType: default
headingText: Configure the vSphere integration
---

1. Change directory to the integrations configuration folder by running:

   ```shell
   cd /etc/newrelic-infra/integrations.d
   ```

2. Copy the sample configuration file by running:

   ```shell
   sudo cp vsphere-config.yml.sample vsphere-config.yml
   ```

3. Edit the `vsphere-config.yml` file. The following is a basic config file:

   ```yml
   integrations:
     - name: nri-vsphere
       env:
       # vSphere API connection data (vCenter or ESXi servers)
       URL: https://<YOUR_VSPHERE_API_URL>/sdk
       USER: <YOUR_VSPHERE_USER>
       PASS: <YOUR_PASSWORD>

       # Collect events data
       ENABLE_VSPHERE_EVENTS: true

       # Collect vSphere tags
       ENABLE_VSPHERE_TAGS: true

       # If defined, only resources tagged with any of the tags will be included in the results.
       # You must also include 'ENABLE_VSPHERE_TAGS' in order for this option to work.
       # INCLUDE_TAGS: >
       #   <TAG_CATERGORY=TAG_1>
       #   <TAG_CATERGORY=TAG_2>

       # Collect snapshots's data
       # ENABLE_VSPHERE_SNAPSHOTS: true

       # Collect performance metrics. Enabling this feature could overload 
       # vCenter depending on size of your environment. 
       # ENABLE_VSPHERE_PERF_METRICS: true

       # Performance metric collection level [1-4]. Be mindful when setting a
       # higher collection level, as this process triggers significant increase
       # of resource usage on vCenter. Levels 3 and 4 should only be used for a 
       # short period of time. For a more granular selection check the 
       # vsphere-performance.metrics file.
       # PERF_LEVEL: 1

       # Path to the performance metrics config file. This file contains the
       # performance counters that are going to be collected if available.
       # PERF_METRIC_FILE: /etc/newrelic-infra/integrations.d/vsphere-performance.metrics

       # Enable if you require SSL validation
       # VALIDATE_SSL: true 

       # Data center location label can be added to all entities in vSphere.
       # DATACENTER_LOCATION: <YOUR_VSPHERE_LOCATION_LABEL>
       
       # Proxy configuration can be set up. For more information, see the docs:
       # https://docs.newrelic.com/docs/integrations/integrations-sdk/file-specifications/integration-configuration-file-specifications-agent-v180
       # Uncomment the lines below to add a proxy.
       # HTTP_PROXY: socks5://YOUR_PROXY_URL:PROXY_PORT
       # HTTPS_PROXY: socks5://YOUR_PROXY_URL:PROXY_PORT
       
       # Execution interval. Set a value higher than 20s, as real-time vSphere samples are run every 20s.
       interval: 60s

       # If the integration takes more than 120s to collect data form vCenter the timeout parameter needs to be increased
       # to avoid the agent kill the integration before it finish.
       # timeout: 120s
   ```

You can find all the config options at the bottom of this doc along with more complex config examples.
