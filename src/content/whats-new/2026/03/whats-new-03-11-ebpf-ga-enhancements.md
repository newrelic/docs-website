---
title: 'eBPF Network Metrics reach GA with enhanced APM capabilities'
summary: 'Get deeper network insights and expanded APM monitoring with production-ready eBPF technology'
releaseDate: '2026-03-11'
learnMoreLink: 'https://docs.newrelic.com/docs/ebpf/network-metrics/'
---

As we move through 2026, the landscape of software engineering is accelerating at an unprecedented pace. We’re excited to share several updates across the New Relic eBPF platform, including the General Availability of New Relic eBPF Network Metrics, enhancements to eBPF APM.

## New Relic eBPF Network Metrics is now GA!

We are excited to announce that eBPF Network Metrics has officially reached General Availability (GA).

In today’s cloud-native environments, the "network blind spot" is a major source of MTTR. Traditional tools tell you a request is slow, but they often can't tell you if the culprit is a DNS failure, a TCP handshake delay, or a hidden retransmission. In addition, we have ensured eBPF can intelligently coexist with APM agent - check out our [detailed blog post](https://newrelic.com/blog/infrastructure-monitoring/ebpf-network-metrics-for-kernel-network-view-apm-infra) for a deep dive into how this changes the game for NetOps and DevOps teams alike - all the telemetry is right in the context of service entities of interest in the industry-leading APM UI.

## Enhancements to New Relic eBPF APM

Since the General Availability of New Relic eBPF-powered APM in December 2025, we have been hard at work refining the engine. We’ve introduced several key enhancements to broaden your visibility across languages and infrastructure:

* **Expanded Linux Distro Support:** You can now deploy with confidence across more environments, including BottleRocket and Amazon Linux.

* **Broader Protocol Support:** In addition to our existing support for MySQL, MongoDB, Redis, and Postgres, we’ve expanded our reach to include Apache Thrift, MSSQL, and DynamoDB.

* **JVM Reporting via eBPF:** You can now capture critical JVM metrics (such as heap usage and garbage collection statistics), directly through the eBPF agent, providing deep Java insights without requiring an APM agent.


## The Exciting Road Ahead

We are just scratching the surface of what eBPF can do for the future of intelligent observability. We can’t wait to share even more capabilities with you in the near future.

In the meantime, we invite you to explore [New Relic eBPF Network Metrics](https://docs.newrelic.com/docs/ebpf/network-metrics/) and let us know your thoughts. Your feedback is the primary driver of our roadmap!