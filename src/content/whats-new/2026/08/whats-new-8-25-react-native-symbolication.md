---
title: 'React Native symbolication support launches'
summary: 'Shorten MTTR with better stack trace visibility into your mobile errors'
releaseDate: '2026-08-25'
learnMoreLink: ''
---

## React Native symbolication support launches 


# Troubleshoot quicker and shorten MTTR with better stack trace visibility into your mobile errors. To learn more, [see our docs.]()  

New Relic is excited to announce that we now support React Native symbolication, which will allow you to see the underlying code from mobile JavaScript errors to speed up issue resolution. 

The application of source map files to unminify stack traces helps with:

* **Speeding up debugging and lowering MTTR:** Remove the guesswork and see the exact line of code that caused an error. 
* **Easy controls using enhanced API:** Search for and list source maps via an API. 
* **Easier triaging:** Teams can identify whether an error belongs to app code or a third-party package. 

**Key Features:** 

**Intuitive UI:** See React Native errors in Errors Inbox in the platform. Get better visibility into and understand your overall React Native JavaScript error rate and users affected. 

**Query map files via NerdGraph or NRQL:** Standard API operations mean you can easily audit and view your uploaded source map files. 

**Query new event:** Add to existing dashboards and track errorMessage and errorType fields and more. Example NRQL query: 

FROM MobileJSError SELECT errorMessage, errorName, isFatalError since 1 week ago

**With newer React Native Agent update, please note:** 

These events are now captured as MobileJSError events rather than as HandledException events. Upon updating the agent, you should revisit the following: 

* Drop rules for HandledException events for React Native apps. If you have existing drop rules whereby you do not want this data, you will need to modify to handle for the new event. 

* Alert conditions. Creating new conditions to be notified on thresholds for the new event type. As this data will be captured under the new event, error rates under HandledException may not stay the same. 

* Dashboards. Creating new nerdlets in dashboards to monitor MobileJSError events. 

* Service Levels. If your team has service levels set up to monitor health metrics for your mobile app, consider creating new rules for tracking MobileJSError. 

Get started

React Native symbolication support is now available and included in the New Relic platform. This feature will contribute to your GB/ingest pricing, though rather than report under HandledException event, it will report under MobileJSError event. Start using today with the latest agent versions listed below: 

* iOS Agent: 7.7.6
* Android Agent: 7.8.0
* React Native v1.9.0 


