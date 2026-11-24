---
title: 'React Native symbolication support launches'
summary: 'Shorten MTTR with better stack trace visibility into your mobile errors'
releaseDate: '2026-08-25'
learnMoreLink: 'https://docs.newrelic.com/docs/mobile-monitoring/new-relic-monitoring-react-native/react-native-agent-js-error-reporting'
---

New Relic now supports React Native symbolication. Apply source map files to unminify stack traces so you can see the exact line of code behind every mobile JavaScript error, and resolve issues faster.

Source map support helps with:

* **Speeding up debugging and lowering MTTR:** Remove the guesswork and see the exact line of code that caused an error.
* **Easy controls using enhanced API:** Search for and list source maps via an API.
* **Easier triaging:** Teams can identify whether an error belongs to app code or a third-party package.

## Key features

**Intuitive UI:** See React Native errors in errors inbox in the platform. Get better visibility into your overall React Native JavaScript error rate and users affected.

**Query map files via NerdGraph or NRQL:** Standard API operations mean you can audit and view your uploaded source map files.

**Query new event:** Add to existing dashboards and track `errorMessage` and `errorType` fields and more. Example NRQL query:

```sql
FROM MobileJSError SELECT errorMessage, errorName, isFatalError SINCE 1 week ago
```

## Important: breaking change in error reporting

These events are now captured as `MobileJSError` events rather than as `MobileHandledException` events. Upon updating the agent, revisit the following:

* **Drop rules:** If you have existing drop rules for `MobileHandledException` events for React Native apps and don't want this data, you'll need to change them to handle the new event type.

* **Alert conditions:** Create new conditions to get threshold alerts for the new event type. Error rates under `MobileHandledException` may not stay the same.

* **Dashboards:** Create new nerdlets in dashboards to track `MobileJSError` events.

* **Service levels:** If your team has service levels set up to track health metrics for your mobile app, consider creating new rules for `MobileJSError`.

## Get started

React Native symbolication support is now available and included in the New Relic platform. This feature contributes to your GB/ingest pricing and reports under `MobileJSError` instead of `MobileHandledException`. Start using today with the latest agent versions:

* iOS Agent: 7.7.6
* Android Agent: 7.8.0
* React Native Agent: 1.9.0

To learn more, see the [React Native JavaScript error reporting documentation](https://docs.newrelic.com/docs/mobile-monitoring/new-relic-monitoring-react-native/react-native-agent-js-error-reporting).
