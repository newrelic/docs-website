---
title: 'Scheduled NRQL searches reach general availability'
summary: 'Automate recurring NRQL queries and receive results by email on the schedule you define.'
releaseDate: '2026-07-15'
getStartedLink: 'https://docs.newrelic.com/docs/nrql/using-nrql/schedule-nrql-searches/'
isFeatured: true
---

New Relic is excited to announce the general availability of **Scheduled NRQL searches** — a new feature that puts your most-run queries on autopilot.

If you already run the same NRQL query every morning, every Monday, or every hour, you know how repetitive monitoring eats into your day — and how easy it is to miss something the moment you stop watching. Scheduled NRQL searches solve that. Define a query, pick a schedule, and let the results arrive in your inbox automatically — no open tab, no reminders, no manual reruns.

## What you can do

* **Automate any NRQL query** you already run interactively in the platform.
* **Flexible scheduling** with cron expressions — from every 15 minutes to once a month, and anything in between.
* **Email delivery** with results attached as a CSV file, ready to drop into spreadsheets or downstream tools.
* **Multiple recipients per search** so the right people stay informed without anyone forwarding emails.
* **Centralized management** under **Administration > Scheduled searches** to view, edit, pause, or delete every automated query from a single place.

## How to get started

You can create a scheduled NRQL search from either the Logs UI or the Administration UI:

* **From the Logs UI** — apply your filters in **Logs**, then click **Schedule a search** from the query bar or the log table toolbar. Your current query and time range are carried over into the scheduled search configuration, so you don't have to rewrite the NRQL.
* **From Administration > Scheduled searches** — go to **one.newrelic.com > Administration > Scheduled Searches** and click **Schedule a search** to start fresh with a blank query.

We invite you to explore Scheduled NRQL searches and put your most-run queries on autopilot. Your feedback drives our roadmap — we're already exploring additional output formats and destinations to make scheduled searches even more powerful.

![Scheduled NRQL search notification setup showing destination, subject, message, and result format options.](/images/nrql_scheduled-query_-set-up-notification.webp "Configure scheduled NRQL search notifications")
