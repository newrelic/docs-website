---
title: 'Synthetics Horde IP changes for private locations'
summary: ''
releaseDate: '2023-06-23'
learnMoreLink: 'https://docs.newrelic.com/docs/new-relic-solutions/get-started/networks/#synthetics' 
---

Starting **August 22, 2023**, the IP address range associated with the New Relic service used by [synthetics private locations](https://docs.newrelic.com/docs/new-relic-solutions/get-started/networks/#synthetics) will be updated.

**What’s changing?**
We’ll be migrating the IP address range for the New Relic service used by synthetics private locations to align with our [standard IP ranges](https://docs.newrelic.com/docs/new-relic-solutions/get-started/networks/#ingest-blocks) used across other data ingest.

**What action is required?**
If you’re utilizing synthetics private locations, it’s highly likely that you will need to make some configuration changes. To ensure uninterrupted access, update your firewall and proxy configurations to allow outbound traffic from your private locations to the new IP ranges listed below.

* US data center endpoints: ```162.247.240.0/22```
* EU data center endpoints: ```185.221.84.0/22```

**What if I don't use synthetics private locations?**
If you don’t use private locations, you don’t need to perform any action. The network rule changes for the Horde IP addresses will not affect your current monitors or configurations.

We understand that these changes may require some adjustments to your routine. Please know that we’re committed to supporting you throughout this process. If you have any questions or need further assistance, please don't hesitate to reach out to our [support team](https://support.newrelic.com/s/).