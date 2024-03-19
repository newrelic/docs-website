---
title: 'Send more custom events with the next APM agent update starting Oct 26'
summary: 'Track critical actions for analysis using the increased custom event limits'
releaseDate: '2022-10-26'
learnMoreLink: 'https://discuss.newrelic.com/t/send-more-custom-events-with-the-latest-apm-agents/190497'
---

Starting Oct 26th, 2022, when you update to the latest APM language agents (Go, Java, .NET, Node.js, Python, Ruby), the default custom event limit will be automatically increased. Additionally, we're introducing a new higher maximum limit. 

Custom events can be used to define, visualize, and get alerts on additional data, just as you can with any data reported by default from our agents. With the custom event limit increase, you can now ingest more custom events to track critical actions for analysis and troubleshooting. 

You always have direct control over which data you send to New Relic:

* **Ingest monitoring:** To monitor your custom event ingest, in the New Relic UI go to the **Manage your data** section, click **Data ingestion**, and look for the **Custom events** in the usage chart.  
* **Change the custom event limit anytime:** You can modify the maximum number of custom events you send to New Relic anytime by configuring the respective agents ([**Go**](https://docs.newrelic.com/docs/apm/agents/go-agent/configuration/go-agent-configuration/#custom-insights-events-settings), [**Java**](https://docs.newrelic.com/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/#Custom_Events), [**.NET**](https://docs.newrelic.com/docs/apm/agents/net-agent/configuration/net-agent-configuration/#custom_events), [**Node.js**](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom-events), [**Python**](https://docs.newrelic.com/docs/apm/agents/python-agent/configuration/python-agent-configuration/#custom-events-settings), [**Ruby**](https://docs.newrelic.com/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#custom-events)).
* **Disable custom events:** Turn off custom events reporting at any point by configuring the respective agents ([**Go**](https://docs.newrelic.com/docs/apm/agents/go-agent/configuration/go-agent-configuration/#custom-insights-events-settings), [**Java**](https://docs.newrelic.com/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/#Custom_Events), [**.NET**](https://docs.newrelic.com/docs/apm/agents/net-agent/configuration/net-agent-configuration/#custom_events), [**Node.js**](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom-events), [**Python**](https://docs.newrelic.com/docs/apm/agents/python-agent/configuration/python-agent-configuration/#custom-events-settings), [**Ruby**](https://docs.newrelic.com/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#custom-events)).

