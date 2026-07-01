---
title: "No-Code Log Parsing"
summary: "Enterprises face a shortage of experienced Grok and Regex knowledge, and equally, teams have more pressing issues than creating parsers."
releaseDate: "2026-02-19"
---

New Relic believes, extracting value from your logs should be easy. We’ve overhauled the custom parsing experience to make it faster, more intuitive, and accessible for everyone.We’ve overhauled the custom parsing experience to remove this technical barrier, make it faster. With the new **No-Code Parsing** experience, you can transform unstructured log data into queryable attributes in minutes, without needing deep technical expertise (**Parsing without the code**)

Traditionally, creating custom ingest-time parsing rules requires manual Grok or Regex patterns. With our new **No-Code Parsing** feature, you can now transform unstructured logs into searchable attributes using the new experience

  - **Auto-Detect Mode**: As soon as you open the editor, New Relic automatically identifies common data patterns and formats like key-value pairs or standard delimiters and drafts a rule for you instantly.
  - **Select to Parse**: Simply highlight a section of a log message with your cursor to extract it. The UI intelligently detects the underlying pattern and guide you as you authored the rule.  
  - **In-Context Rule Creation**: Start creating parsing rules directly from where you are. Click any value in the **Log Details View action** menu to pre-populate filters and jump straight into the visual editor.

## Refined control for power users

While the new experience is enabled by default to save you time, we’ve kept the flexibility you need. You can choose the **Write your own** mode to manually edit Grok logic or switch back to the **Classic View** at any time.

## Why it matters

  - **Reduced MTTR**: Spend less time configuring rules and more time querying data during incidents.
  - **Better Data Hygiene**: Easily turn **wall-of-text** logs into structured, faceted attributes for cleaner dashboards and more precise alerting.
  - **Lower Barrier to Entry**: Empower your entire team to enrich log data without needing to learn complex parsing syntax.

## Get started
The new experience is **available now** and enabled by default for all users.

  - **Try it**: Navigate to any log message, click a field value, and select **Parse value**.
  - **Learn more**: Check out our updated [Log Parsing Documentation](https://docs.newrelic.com/docs/logs/ui-data/parsing/).
