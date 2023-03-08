---
title: 'Add a spatial dimension to logs with locations from IP addresses'
summary: 'Geolocate IP addresses in logs and add location data automatically'
releaseDate: '2023-03-15'
getStartedLink: 'https://docs.newrelic.com/docs/logs/ui-data/parsing/#geo'
learnMoreLink: 'https://docs.newrelic.com/docs/logs/get-started/logging-best-practices/#parsing-logs'
---

Everything on the internet has an address, and these addresses often end up in your logs. New Relic can now take these IP addresses, locate them in the world, and add related geographic information to your log events, making it possible to use attributes like "city", "countryCode", and "postalCode" when querying logs.

Create or update your parsing rules to get started slicing and dicing logs by their geography with this new functionality.

![Geolocate ip addresses with parsing](./images/whats-new-03-15-geolocate-logged-ip-addresses.png "A screenshot that shows parsing rule with geo grok action")


For more information, see our [log parsing docs](https://docs.newrelic.com/docs/logs/ui-data/parsing/#geo).
