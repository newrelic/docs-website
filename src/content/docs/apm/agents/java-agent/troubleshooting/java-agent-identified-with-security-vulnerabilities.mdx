---
title: Java agent identified with security vulnerabilities
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
redirects:
  - /docs/apm/agents/java-agent/troubleshooting/large-number-false-positive-security-vulnerabilities
  - /docs/agents/java-agent/troubleshooting/large-number-false-positive-security-vulnerabilities
freshnessValidatedDate: never
---

## Problem

When a security scan is performed, it reports back vulnerabilities for the New Relic Java agent (`newrelic.jar`).

## Cause

While any software product can potentially have security vulnerabilities, the New Relic Java agent may be erroneously identified by security products. Security products that scan for certain string patterns in files may mistakenly flag instrumentation modules that are a part of the agent as vulnerable libraries.

These instrumentation modules are JAR files named after the software frameworks designed to instrument and their versions. They don't contain code from the frameworks but may contain classes with the same name. Some security scanning tools detect these names/versions and interpret them as being the actual software framework itself, when it's just an instrumentation module.

They're found inside `newrelic.jar` under the `instrumentation` package, or inside `newrelic-security-agent.jar` under the `instrumentation-security` package.

Warnings for any jar files within `newrelic.jar` or `newrelic-security-agent.jar` are false positives, and should be suppressed.

## Solution

Suppress the false positive warnings coming from the `instrumentation` package in `newrelic.jar` and the `instrumentation-security` package in `newrelic-security-agent.jar` with your scanning tool, including all JAR files whose names match the modules listed in the [New Relic Java agent repository](https://github.com/newrelic/newrelic-java-agent/tree/main/instrumentation) or in the [New Relic SecurityAgent for Java](https://github.com/newrelic/csec-java-agent/tree/main/instrumentation-security).

For example, false positives discovered by the `DependencyCheck` project at [github.com/jeremylong/DependencyCheck](https://github.com/jeremylong/DependencyCheck) can be suppressed with:

```jar
<suppress>
    <notes><![CDATA[newrelic-agent false positives due to the instrumentation package]]></notes>
    <filePath regex="true">.*newrelic.*\.jar[\\\/]instrumentation.*\.jar</filePath>
    <cpe regex="true">.*</cpe>
</suppress>
```

Consult your security scan vendor for the appropriate configuration to suppress false positives.
