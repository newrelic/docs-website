---
title: 'Update to New Relic Synthetics IP CIDR ranges'
summary: 'Updating Synthetics IP ranges change'
releaseDate: '2025-01-30'
learnMoreLink: 'https://docs.newrelic.com/docs/new-relic-solutions/get-started/networks/#synthetics' 
---

Effective from **March 31, 2025**, the IP ranges for New Relic Synthetics will be changing as part of our service enhancements. If your systems allowlist Synthetics traffic based on IP ranges, you will need to update your configurations to maintain monitor connectivity. You will need to update your configurations to ensure continued monitor connectivity.

## What’s changing? 
We’ll be migrating the IP address range for the New Relic service used by synthetics locations to align with our standard IP ranges used across other data ingest. 

## What action is required? 

**If you allowlist Synthetics traffic,** Update your allow lists with the new IP ranges provided below before **March 31, 2025**. Failure to do so may result in failed connections and trigger alerts.

**New IP ranges to allowlist:**

`152.38.128.0/19`

`212.32.0.0/20`

`64.251.192.0/20`

Old IP ranges to remove: Please refer to the table below for a complete list of current IP ranges that need to be **removed after March 31, 2025**.

**NOTE:** If you do not allowlist by IP range, no action is required.

## What if no action is taken?

If you do not update your allowlist by the deadline **March 31, 2025**, your synthetic checks may fail to connect to your applications, potentially causing disruptions and alerts.

## Next Steps

Before **March 31, 2025**,  add the new IP ranges to your allow list configuration.
After **March 31, 2025**, remove the old IP ranges, as they will no longer be used by New Relic and may be reassigned to other instances.

## Additional Support

We understand that these changes may require some adjustments to your routine. Please know that we’re committed to supporting you throughout this process. If you have any questions or need further assistance, please don't hesitate to reach out to our [support team](https://support.newrelic.com/s/).