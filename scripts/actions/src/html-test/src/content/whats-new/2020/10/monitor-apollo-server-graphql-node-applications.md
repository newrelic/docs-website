---
title: Monitor Apollo Server GraphQL Node applications
summary: Use our Node.js agent plugin to capture executed GraphQL queries.
releaseDate: '2020-10-27'
learnMoreLink: 'https://github.com/newrelic/newrelic-node-apollo-server-plugin'
---

The New Relic Apollo Server plugin for the Node.js agent captures executed GraphQL queries and parses those queries down to the individual field. This not only provides visibility into slow queries but also captures the duration spent resolving a piece of requested GraphQL data.

In addition, if you enable distributed tracing, you can follow the field resolution through to work done on other services and databases.
