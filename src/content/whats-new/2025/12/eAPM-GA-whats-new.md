---
title: 'eAPM Genearl Availability and eBPF Network Metrics Public Preview'
summary: 'eAPM enables zero-code, language-agnostic application monitoring with Network Metrics for network visibiilty and fast troubleshooting.'
releaseDate: '2025-12-03'
getStartedLink: 'https://docs.newrelic.com/docs/ebpf/overview/'
---


## Background

Our customers are faced with these challenges:

The first challenge is the observability gap. Traditional APM tools miss kernel-level network and system metrics. This means that during an incident, it is not easy to figure out whether the root cause is the application code or a network-related issue.

Secondly, in microservices environments, customers often deploy heterogeneous agents. This creates operational time overhead, potential agent conflicts, and requires application modification and restarts, which is a pain point for Devops teams.

The third problem is siloed data. After data is collected, correlating application logs with network spans and infrastructure metrics requires lots of work, leading to incomplete observability.

With eAPM and eBPF network metrics, we aim to solve these problems by unification and simplification by pushing observability into the kernel. Because we are operating at the kernel level, our single agent can simultaneously collect o11y data including application span, logs, network traffic, and infra metrics. This solves the silo problem. In addition, this approach simplifies rollout in microservices-heavy environments because we can now instrument the system without modifying applications.


## What's New in eAPM (GA)
* Architecture Support: Full support for both x86 and ARM64 architectures.
* Kubernetes and Host Support: Comprehensive Linux host support in addition to Kubernetes.
* Simplified Onboarding: Get started quickly with the dedicated Integration Tile for ease of installation. Only one agent for a single host / node.
* Continuous Service Discovery: Automatically maps your application services and lights up your APM UI.
* Segmented linking: Transaction now supports multiple segments for deeper APM visibility

![eAPM detecting database with segment linking](./images/eAPM-detect-database-calls.jpg "eAPM detecting database with segment linking")
## Introducing eBPF Network Metrics (Public Preview)

Dive deep into application communication with rich network behavior insights. This capability delivers granular TCP and DNS telemetry - handshake latency, retransmissions, DNS failures - captured from the Linux kernel. Correlated with your application telemetry, this unified view helps engineers pinpoint root causes faster, improve reliability, and avoid the cost and complexity of multiple monitoring tools.

This capability is complementary to APM. It works independently of your APM instrumentation method to give you a complete picture of your application's network communication health.

![eBPF Network Metrics augments application performance monitoring](./images/enpm-latency.png "eBPF Network Metrics augments application performance monitoring")
