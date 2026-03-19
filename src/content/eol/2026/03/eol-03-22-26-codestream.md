---
title: 'End-of-life notice: CodeStream In-IDE product'
summary: 'New Relic is ending support for the CodeStream In-IDE product, including its extensions and anomaly detection service.'
publishDate: '2026-03-22'
eolEffectiveDate: '2026-03-22'
---

New Relic has decided to end-of-life its CodeStream In-IDE product, based on industry trends and usage patterns we're seeing with the recent advancement of AI in all areas of software development.

## Background

As increasingly more work is being undertaken through agentic code creation, the rationale for a tight coupling of observability data designed for humans laboring in their IDE is less relevant. This has been borne out by customer usage patterns of CodeStream over the last few years. As New Relic continues to align its products for the modern AI-first engineering era, we no longer see CodeStream as offering the value to our customers that it once did and we feel we can re-align CodeStream's resources within New Relic elsewhere to better serve them.

## What's changing

The CodeStream extensions will be removed from the respective IDE marketplaces. CodeStream's cloud based components and API endpoints will be shut down. Direct API access to New Relic data will no longer be available from within the IDE. However, all the observability data other than anomaly detection will still be available in the New Relic web site.

Of note is CodeStream's Anomaly Detection Service within the New Relic ecosystem. It too will be shuttered. Its usage of late has been low demonstrating our customers do not generally find it to be of value.

## Action required

As the vast majority of CodeStream's offering is duplicated on New Relic's web based interface, there is nothing you need to do other than remove the CodeStream extension from your IDE. If you generated API keys specifically for the CodeStream extension, you should consider destroying them as well.

Log viewing, stack traces, dashboards and other CodeStream features will continue to be available via New Relic's site. As mentioned above, anomaly detection will no longer be available.

## Additional support

If you have any questions or need assistance, please reach out to our [support team](https://support.newrelic.com/s/).
