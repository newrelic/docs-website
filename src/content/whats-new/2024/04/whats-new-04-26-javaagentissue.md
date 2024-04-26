---
title: 'Java agent v8.10.0 may impact normal operations of your applications'
summary: 'Upgrade your Java agent to v8.11.0 to avoid higher CPU/memory usage '
releaseDate: '2024-04-26'
learnMoreLink: ''
getStartedLink: 'https://docs.newrelic.com/docs/release-notes/agent-release-notes/java-release-notes/java-agent-8110/'
---

We've identified a potential bug in the New Relic Java agent version 8.10.0 that can lead to higher CPU and memory usage and potentially impact normal operations of your application.

## Upgrade to version 8.11.0
This issue is resolved in the subsequent agent release (version 8.11.0). Upgrading to this version is the recommended solution to resolve the issue and gain access to the latest platform features. For more information about this release, please review our doc. 

## If you can't upgrade
If you’re unable to upgrade immediately, you can temporarily turn off the instrumentation by adding the following flag: 

```
  -Dnewrelic.config.class_transformer.com.newrelic
    .instrumentation.httpurlconnection.enabled=false
    
```

**Note**: Turning off the instrumentation is a temporary measure and not a substitute for upgrading. It will prevent the recording of external client calls, which may impact your application performance monitoring (APM) capabilities.


