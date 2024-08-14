---
title: 'Streamline log parsing'
summary: 'Use our new options to generate ingest parsing or query time parsing rules'
releaseDate: '2024-06-11'
learnMoreLink: 'https://newrelic.com/blog/how-to-relic/click-to-parse'
getStartedLink: 'https://youtu.be/tvK6MlkvD6Y?si=5klygPBzQyY5qsI8'
---

While New Relic applies built-in parsing rules during the ingestion of logs into the New Relic platform, you may want to create additional parsing rules yourself. Logs parsing just became easier for both types of parsing at New Relic:

- Ingest parsing: These are rules that create permanent changes in your logs and are based on Grok rules. In the past, you had to create your own Grok rules, but now we can create these complex rules for you with our New Relic AI assistant.
- Query time parsing: We generate temporary parsing rules written in NRQL as you make log selections in our UI.

## Ingest parsing with AI assistance

We are expanding our public preview for our AI-powered ingest to allow you to parse your logs using automatically generated Grok rules. New Relic AI can help you create and troubleshoot parsing rules by:

- **Suggesting parsing rules**: When you create a parsing rule in the UI, ask NRAI to create the parsing rule for you.
- **Explaining parsing rules**: If you don't understand the parsing rule our AI suggests, you can ask AI to explain the rule and suggest an even more efficient one if available.

![A screenshot showing NRAI enabled.](/images/new_relic_ai_logs_parsing.webp 'A screenshot showing NRAI enabled.')

<figcaption>Ask AI to help you generate Grok patterns for ingest parsing.</figcaption>

To try the new AI-powered log parsing capability, join our public preview:

1. Go to the user menu at the bottom left of the New Relic UI.
2. Click the **Features** tab.
3. Scroll down to the **New Relic AI** section and click **Enable**.
4. **Give Us Feedback** by following the option under the Help pulldown.

## Query time parsing rules

New Relic's query time parsing feature allows you to select any string from your log file and then parse out repeatable values, reducing the time it takes to create queries. We do all the work for you by creating the NRQL query as you make selections from your logs in the UI.

To get started:

1. [Read our blog post](https://newrelic.com/blog/how-to-relic/click-to-parse)
2. [Review our docs page](https://docs.newrelic.com/docs/logs/ui-data/query-time-parsing/)
3. [Watch a step-by-step video](https://www.youtube.com/watch?v=tvK6MlkvD6Y)

![A screenshot showing how to extract a value from a string.](/images/logs_screenshot-full_logs-detail-entry-point.webp 'A screenshot showing how to extract a value from a string.')

<figcaption>Use query time parsing to extract the value from a string for easy querying.</figcaption>
