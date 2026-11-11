---
title: 'NRQL Macros is now generally available'
summary: 'Save a NRQL expression as a reusable, named shortcut you can use across your queries and dashboards.'
releaseDate: '2026-10-26'
learnMoreLink: 'https://docs.newrelic.com/docs/nrql/nrql-macros/nrql-macros-overview'
---

We're excited to announce that NRQL Macros is now generally available. Macros allows you to save a NRQL expression as a reusable, named shortcut. This can be used to simplify your queries, set an alias, create a single source of truth, and many more applications.

Example macro: `$podnameAlias = (podName OR pod_name OR pod.name)`

Macro in action: `SELECT count(*) FROM Log FACET $podnameAlias`

A macro can be a small alias like above, or a large WHERE clause taking up space. Best of all, you can change this one macro and it will update every query it is a part of. This can particularly come in handy if a handful of widgets on a dashboard need to be updated all at once.

Macros can be created/edited in the **Administration > NRQL Macro** UI, or via our API.

We're excited to see all the different ways you will use macros to optimize/simplify your NRQL!

Learn more about [NRQL Macros](https://docs.newrelic.com/docs/nrql/nrql-macros/nrql-macros-overview).

