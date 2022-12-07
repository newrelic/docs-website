---
subject: Browser agent
releaseDate: '2022-04-20'
version: '1216'
---

* Internal NR Platform release date: 04/19/2022
* Production APM-injected release date: 04/20/2022
* Production Standalone release date: 04/27/2022

## New Features

### Introduced obfuscation mechanism to payloads

Added internal mechanism for applying regex and replacement rules to all strings in payloads to obfuscate before sending to ingest.

### Automatically obfuscate `file://` protocol

A change has been implemented in our handling of applications hosted locally on a `file://` protocol. For security reasons, we can not send payloads that contain file information, so our previous implementation revolved around completely shutting the agent down when `file://` protocols were detected. This change automatically obfuscates all `file://` paths from our payloads before sending to ingest.

## Bug Fixes

### Fixed issue with trace ID random hex character length

The final character in trace ID hex generation was returning as `undefined`, which translated to always be `0` (`undefined & 15 === 0`).  This change fixes this final character and ensures it is valid.
