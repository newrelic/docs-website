---
title: Java Solr Troubleshooting
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: "If your Java app's Solr data is missing, not reporting to New Relic, or too much data is being reported, follow these troubleshooting steps to ensure Solr is configured correctly."
redirects:
  - /docs/agents/java-agent/troubleshooting/java-solr-data-does-not-appear
  - /docs/agents/java-agent/troubleshooting/solr-metrics-not-appearing-solr-tab
  - /docs/agents/java-agent/troubleshooting/solr-metrics-not-appearing-apm-solr-tab
  - /docs/agents/java-agent/troubleshooting/solr-data-not-appearing-apm-solr-tab
  - /docs/agents/java-agent/troubleshooting/solr-data-not-appearing-apm-solr-tab-java
freshnessValidatedDate: never
---

## Problem 1: Solr Data Does not Appear [#problem-1]

You are using the [Solr platform](http://lucene.apache.org/solr/) in your web application, but Solr data does not appear in the <InlinePopover type="apm"/> UI for your app from <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Java app) > Monitor**</DNT>.

### Solution [#solution-1]

To ensure Solr is [configured](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent#other) correctly and data is reporting to New Relic, do the following as applicable:

* <DNT>**JMX:**</DNT> Ensure JMX is enabled in your Solr configuration in `solrconfig.xml` by using the `<jmx/>` tag. The `solrconfig.xml` file is the configuration file with the most parameters affecting Solr itself.
* <DNT>**Jetty:**</DNT> If you are a Jetty user, [manually enable JMX for Jetty](https://wiki.eclipse.org/Jetty/Tutorial/JMX#Enabling_JMXConnectorServer_for_Remote_Access).
* <DNT>**Solr metrics:**</DNT> Check the JMX console for Solr metrics. The Solr cache and updates come from MBeans.

## Problem 2: Solr JMX Metric Changes from Agent v8.10 Increased Injest or Dashboards Stopped Reporting. [#problem-2]

After 8.10 release of the agent, JMX metrics produced by Solr have changed their formatting and had increased granularity to deal with clusters.
As a consequence, injest has increased and certain queries will not work anymore.

Before 8.10 Solr JMX metrics were in the format: 
```JMX/solr/{collection name}/%/{attribute}/```
After 8.10 was released they are in the format: 
```JMX/solr/{collection name}.{shard}.{core name}/{name_value}/%/{attribute}/```

### Solution [#solution-2]

To revert back to the old formatting of JMX metrics so that old queries and metrics ingest is lower, apply the following config:
```yml
common: &default_settings
# .... configurations above ...
  jmx:
    enable_iterated_objectname_keys: true
# ... configurations below ...
```
