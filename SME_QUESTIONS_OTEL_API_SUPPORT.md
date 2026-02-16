# SME Questions for OpenTelemetry API Support Documentation

This document tracks all the information needed from SMEs to complete the OpenTelemetry API support documentation.

**Status**: Draft documentation created at: `src/content/docs/apm/agents/manage-apm-agents/opentelemetry-api-support.mdx`

**Due Date**: February 20, 2026

---

## Critical Questions (Blocking Publication)

### 1. Agent Minimum Versions

**Where in doc**: Supported languages table

For each agent, what is the minimum version that includes OpenTelemetry API support?

- [ ] **Java**: `[VERSION NUMBER]`
- [ ] **Node.js**: `[VERSION NUMBER]`
- [ ] **.NET**: `[VERSION NUMBER]`
- [ ] **Python**: `[VERSION NUMBER]`
- [ ] **Ruby**: `[VERSION NUMBER]`

---

### 2. Ruby Agent Feature Confirmation

**Where in doc**: Supported languages table

Ruby shows "traces only" but we need confirmation on:

- [ ] **Span Links**: Supported? (Yes/No)
- [ ] **Events on Spans**: Supported? (Yes/No)

---

### 3. Java Agent Configuration ✅ COMPLETED

**Status**: Configuration section is complete with all details provided

**What was added:**
- ✅ System properties to enable OTel support (`-Dotelbridgemode=true`)
- ✅ Explanation that agent only instruments OTel APIs (doesn't ship instrumentations)
- ✅ Details on manual, standalone library, and native instrumentation
- ✅ Elasticsearch configuration example
- ✅ Links to examples (Armeria, API Bridge)
- ✅ Known limitations documented

---

### 4. Node.js Agent Configuration ✅ COMPLETED

**Status**: Configuration section is complete with all details provided

**What was added:**
- ✅ Config file settings in `newrelic.js`
- ✅ Explanation that agent doesn't auto-enable OTel instrumentations
- ✅ Full support for Traces, Metrics, and Logs APIs
- ✅ GCP Pub/Sub configuration example
- ✅ Links to newrelic-node-examples repository
- ✅ Memory baseline increase documented (~1-2MB)
- ✅ Known limitations documented

---

### 5. Python Agent Configuration ✅ COMPLETED

**Status**: Configuration section is complete with all details provided

**What was added:**
- ✅ Environment variables and INI config
- ✅ List of native instrumentations (Ariadne, Strawberry, Elasticsearch)
- ✅ Explanation of automatic detection and switching
- ✅ List of excluded libraries (AWS, gRPC)
- ✅ Traces API supported, Metrics not yet, Logs already works
- ✅ Code example for manual instrumentation
- ✅ Known limitations documented

---

### 6. Ruby Agent Configuration

**Where in doc**: "Ruby agent configuration" collapser

Need complete details:

- [ ] **Environment variables** to enable OpenTelemetry API support
- [ ] **Config file settings** in `newrelic.yml` (example YAML snippet)
- [ ] **List of supported native instrumentations** out of the box
- [ ] **Known conflicts** or instrumentations to exclude
- [ ] **Complete configuration example**
- [ ] **Confirm**: Only traces API is supported (no metrics/logs) - is this accurate?

---

## Important Questions (Enhance Documentation)

### 7. UI Indicators

**Where in doc**: "Verify it's working" section

- [ ] Are there any UI indicators that distinguish OpenTelemetry-generated spans from New Relic agent spans?
- [ ] Are there any specific UI views or filters for OTel data?
- [ ] Any screenshots we should include?

---

### 8. Data Model Mapping

**Where in doc**: Could add a new section or callout

- [ ] How do OpenTelemetry semantic conventions map to New Relic's data model?
- [ ] Are there any automatic transformations?
- [ ] Are there queries customers need to update?

---

### 9. Relationship to OTel Collector

**Where in doc**: "What's next?" or limitations section

- [ ] Does this feature relate to or conflict with the OpenTelemetry Collector integration?
- [ ] When should customers use OTel API support in agents vs. OTel Collector?
- [ ] Should we link to OTel Collector docs? What's the guidance?

---

### 10. Agent-Specific Troubleshooting

**Where in doc**: "Troubleshooting" section

For each agent, are there specific common issues we should document?

- [ ] **Java**: [Any known issues or common mistakes?]
- [ ] **Node.js**: [Beyond memory increase, any other issues?]
- [ ] **.NET**: [Any known issues or common mistakes?]
- [ ] **Python**: [Any known issues or common mistakes?]
- [ ] **Ruby**: [Any known issues or common mistakes?]

---

### 11. What's Next / Related Docs

**Where in doc**: "What's next?" section

- [ ] Links to migration guides (if they exist)
- [ ] Links to best practices docs
- [ ] Links to per-agent detailed docs (if we're creating them)
- [ ] Links to OTel semantic convention guides

---

## Nice-to-Have (Post-Launch)

### 12. Code Examples

Should we include code snippets showing:
- [ ] How to create a custom span using OTel APIs (per language)
- [ ] How to add attributes to spans
- [ ] How to record metrics (for agents that support it)

### 13. Migration Guide

Should we create a separate guide for:
- [ ] Migrating from NR APIs to OTel APIs
- [ ] Best practices for mixed NR + OTel instrumentation

---

## Review Checklist

Before publishing, ensure:

- [ ] All `[SME: ...]` placeholders are replaced with actual content
- [ ] All `[VERSION]` placeholders have real version numbers
- [ ] Configuration examples are tested and accurate
- [ ] Links to external docs are valid
- [ ] Technical review completed by agent teams
- [ ] Product team review completed (Chris Pearcey)
- [ ] PMM review completed (David Fabritius)
- [ ] Legal/compliance review (if needed for external links)

---

## Contact Information

**For questions about**:
- **Product strategy**: Chris Pearcey (cpearcey@newrelic.com)
- **Engineering details**: Krishnaveni Mudduluru
- **Java agent**: [AGENT TEAM CONTACT]
- **Node.js agent**: [AGENT TEAM CONTACT]
- **.NET agent**: [AGENT TEAM CONTACT]
- **Python agent**: [AGENT TEAM CONTACT]
- **Ruby agent**: [AGENT TEAM CONTACT]
- **Documentation**: Chinmay Behera (cbehera@newrelic.com)

---

## Notes

### .NET Configuration (COMPLETED)
.NET configuration is complete in the draft documentation including:
- ✅ Environment variables and XML config examples
- ✅ List of supported traces instrumentations
- ✅ List of supported metrics instrumentations
- ✅ List of conflicting instrumentations (disabled by default)
- ✅ Explanation of logs behavior (no changes needed)

### Node.js Known Issues
From the planning docs:
- Library instrumentation conflicts with certain frameworks (express, http)
- Memory baseline increase (~1-2MB)
- Configuration complexity for enabling/disabling specific instrumentations

### General Limitations to Emphasize
- Library instrumentation NOT supported (only native)
- Java bytecode instrumentation conflicts
- Feature is OFF by default
- Configuration not portable to pure OTel collectors
