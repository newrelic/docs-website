---
title: 'New Relic Outlier Detection in Public Preview'
summary: 'New Relic Outlier Detection now in Public Preview'
releaseDate: '2025-11-05'
---

Proactively find "noisy neighbors" and abnormal behavior in your stack.

New Relic is excited to announce that Outlier Detection is now available in Public Preview as of November 4, 2025!

This feature automatically identifies entities (like hosts or containers) that are behaving significantly differently from their peers. Unlike anomaly detection, which tracks changes over time, outlier detection spots deviations within a group, helping you pinpoint problems early and reduce your MTTD and MTTR.

## What's New in public preview

Based on feedback from our limited preview, we've made key improvements:

  * **New 'Auto Mode'**: We've introduced an Automatic mode that dramatically simplifies setup. Just set your desired Sensitivity and New Relic handles the algorithm configuration for you.
  * **Opt-In Required**: For our valued users who participated in the limited preview, please note you will need to opt-in again to access the new Public Preview features.

## Key Use Cases

  * Find imbalanced Kafka brokers with abnormal CPU I/O wait times.
  * Identify resource utilization outliers (both under- or over-utilized).
  * Detect "noisy neighbor" applications hogging shared resources.
  * Spot Java applications with abnormal Out of Memory (OOM) error rates.

## How to Get Started

Outlier detection is now available to try in Public Preview.

To create your first condition, navigate to All capabilities > Alerts > Alert Conditions. When you reach the Set thresholds page, simply select the outliers option. You can then choose the new Automatic Mode for simplicity or Manual Mode (DBSCAN) for fine-grained control.

Check out our documentation to get started:

[Setup guide] (https://docs.newrelic.com/docs/alerts/create-alert/set-thresholds/outlier-detection/)
