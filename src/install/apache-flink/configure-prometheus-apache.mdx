---
componentType: default
headingText: Configure Prometheus for Apache Flink
---

1. Create the following file if it doesn't exist: `/etc/newrelic-infra/integrations.d/nri-prometheus-config.yml`
2. Paste the following information, updating `cluster_name` and and urls:

   ```yml
   integrations:
     - name: nri-prometheus
       config:
       standalone: false
       # Defaults to true. When standalone is set to `false`, `nri-prometheus` requires an infrastructure agent to send data.
       emitters: infra-sdk
       # When running with infrastructure agent emitters will have to include infra-sdk
       cluster_name: "YOUR_DESIRED_CLUSTER_NAME"
       # Match the name of your cluster with the name seen in New Relic. 
       targets:
         - description: "YOUR_DESIRED_DESCRIPTION_HERE"
           urls: ["http://YOUR_DOMAIN:9250", "http://YOUR_DOMAIN:9251"]
       #    tls_config:
       #      ca_file_path: "/etc/etcd/etcd-client-ca.crt"
       #      cert_file_path: "/etc/etcd/etcd-client.crt"
       #      key_file_path: "/etc/etcd/etcd-client.key"

       verbose: false
       # Defaults to false. This determines whether or not the integration should run in verbose mode.
       audit: false
       # Defaults to false and does not include verbose mode. Audit mode logs the uncompressed data sent to New Relic and can lead to a high log volume.
       # scrape_timeout: "YOUR_TIMEOUT_DURATION"
       # `scrape_timeout` is not a mandatory configuration and defaults to 30s. The HTTP client timeout when fetching data from endpoints.
       scrape_duration: "5s"
       # worker_threads: 4
       # `worker_threads` is not a mandatory configuration and defaults to `4` for clusters with more than 400 endpoints. Slowly increase the worker thread until scrape time falls between the desired `scrape_duration`. Note: Increasing this value too much results in huge memory consumption if too many metrics are scraped at once.
       insecure_skip_verify: false
       # Defaults to false. Determins if the integration should skip TLS verification or not.
       timeout: 10s
   ```
