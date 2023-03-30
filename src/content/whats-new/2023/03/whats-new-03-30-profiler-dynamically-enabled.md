---
title: 'Real-time profiling for Java dynamically enabled'
summary: 'Dynamically enable and disable our real-time profiling feature on the spot, without bouncing the application'
releaseDate: '2023-03-30'
learnMoreLink: 'https://forum.newrelic.com/s/hubtopic/aAX8W00000005W8/on-demand-realtime-profiling-for-java-applications'
getStartedLink: 'https://docs.newrelic.com/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/#jfr-real-time-profiling'
---

Our **real-time profiling** using Java Flight Recorder (JFR) is a powerful tool to continuously profile Java applications and JVM in production environments. And now, the Java agent allows you to change the real-time profiling configuration **without turning your application on or off**.

Real-time profiling offers visibility into how resources are allocated in a process, how CPU is used, and garbage collection impact on performance per JVM — every five minutes! This especially comes in handy while troubleshooting; allowing you to pinpoint what caused an incident, and the performance issues resulting from it.

On top of JVM behaviour, it also shows call trees, CPU time, and memory resources consumed by your classes and methods. This enables you to easily see what methods are used most in your application and the resources they require, so that you can optimize when and where required.

Seamlessly change your profiling configuration by toggling the setting in **Settings > Application > Java Flight Recorder**, or by changing the configuration yaml: 

![Change your profiling configuration by toggling the setting in Settings > Application > Java Flight Recorder or by changing the configuration yaml.](./images/whats-new-04-06-profiler-dynamically-enabled.png "A screenshot showing real time profiling toggle in Application settings")
<figcaption>To enable or disable the real-time profiling feature navigate to Settings > Application and click on the Java Flight recorder toggle.</figcaption>
