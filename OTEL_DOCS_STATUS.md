# OpenTelemetry API Support Documentation - Status Report

**Date**: February 16, 2026
**Doc File**: `src/content/docs/apm/agents/manage-apm-agents/opentelemetry-api-support.mdx`
**Due Date**: February 20, 2026

---

## ✅ COMPLETED SECTIONS

### 1. **.NET Agent Configuration** - 100% Complete
**Status**: Fully documented and ready for publication

**Includes:**
- Environment variables and XML configuration examples
- Complete list of traces instrumentations (out of the box)
- Complete list of metrics instrumentations (opt-in)
- List of conflicting instrumentations (disabled by default)
- Explanation of logs behavior (no changes needed)
- Configuration examples for include/exclude lists

---

### 2. **Java Agent Configuration** - 100% Complete
**Status**: Fully documented and ready for publication

**Includes:**
- System properties to enable OTel support (`-Dotelbridgemode=true`)
- Clear explanation that agent only instruments OTel APIs (doesn't ship instrumentations)
- Details on three types of instrumentation:
  - Manual instrumentation
  - Standalone library instrumentation
  - Native instrumentation
- Complete Elasticsearch configuration example
- Links to working examples (Armeria, API Bridge)
- Known limitations clearly documented

---

### 3. **Node.js Agent Configuration** - 100% Complete
**Status**: Fully documented and ready for publication

**Includes:**
- Configuration file settings (`newrelic.js`)
- Explanation that agent doesn't auto-enable OTel instrumentations
- Full documentation for Traces, Metrics, and Logs APIs
- GCP Pub/Sub configuration example
- Links to newrelic-node-examples repository
- Memory baseline increase documented (~1-2MB)
- Known limitations and instrumentation conflicts documented

---

### 4. **Python Agent Configuration** - 100% Complete
**Status**: Fully documented and ready for publication

**Includes:**
- Environment variables and INI config examples
- List of native instrumentations (Ariadne, Strawberry, Elasticsearch)
- Automatic detection and switching behavior
- List of excluded libraries (AWS, gRPC)
- API support status (Traces ✅, Metrics ❌, Logs ✅)
- Manual instrumentation code example
- Known limitations documented

---

### 5. **Core Documentation** - 100% Complete
**Status**: Fully documented and ready for publication

**Includes:**
- Benefits and value proposition
- Clear explanation of what the feature provides
- Supported languages table (with version placeholders)
- Supported instrumentation types
- Comprehensive limitations section
- Troubleshooting guide
- Verification steps
- What's next section

---

## ⚠️ REMAINING GAPS (Blocking Publication)

### Critical Information Needed from SMEs

#### 1. **Agent Minimum Versions** (All Agents)
**Impact**: HIGH - Needed for supported languages table

Missing version numbers for:
- [ ] Java: `[VERSION NUMBER]`
- [ ] Node.js: `[VERSION NUMBER]`
- [ ] .NET: `[VERSION NUMBER]`
- [ ] Python: `[VERSION NUMBER]`
- [ ] Ruby: `[VERSION NUMBER]`

**Action**: Contact each agent team to get minimum version that includes OTel API support

---

#### 2. **Ruby Agent Configuration** (Partial)
**Impact**: MEDIUM - Ruby section is mostly placeholder

Missing details:
- [ ] Environment variables to enable OTel support
- [ ] Config file settings (newrelic.yml)
- [ ] Supported native instrumentations
- [ ] Configuration examples
- [ ] Confirm: Span Links supported? (Yes/No)
- [ ] Confirm: Events on Spans supported? (Yes/No)
- [ ] Ruby-specific limitations or known issues

**Action**: Contact Ruby agent team for complete configuration details

---

## 📋 NICE-TO-HAVE (Post-Launch)

These items would enhance the documentation but are not blocking:

### 1. **UI Indicators**
- Are there UI indicators that distinguish OTel spans from NR spans?
- Screenshots showing OTel data in APM

### 2. **Data Model Mapping**
- How OTel semantic conventions map to NR data model
- Query examples for OTel data

### 3. **Relationship to OTel Collector**
- When to use OTel API support vs. OTel Collector
- Integration guidance

### 4. **Agent-Specific Troubleshooting**
- Common issues per agent beyond what's documented

### 5. **Code Examples**
- Language-specific code snippets for creating spans
- Adding attributes examples
- Recording metrics examples

---

## 📊 COMPLETION STATUS

| Component | Status | Completeness |
|-----------|--------|--------------|
| .NET Agent | ✅ Complete | 100% |
| Java Agent | ✅ Complete | 100% |
| Node.js Agent | ✅ Complete | 100% |
| Python Agent | ✅ Complete | 100% |
| Ruby Agent | ⚠️ Partial | 40% |
| Core Documentation | ✅ Complete | 95% |
| **Overall** | **⚠️ Near Complete** | **~90%** |

---

## 🚀 PUBLICATION READINESS

### To Publish MVP Documentation (by Feb 20):

**Must Complete:**
1. ✅ ~~Fill in .NET configuration~~ (DONE)
2. ✅ ~~Fill in Java configuration~~ (DONE)
3. ✅ ~~Fill in Node.js configuration~~ (DONE)
4. ✅ ~~Fill in Python configuration~~ (DONE)
5. ⚠️ **Get agent minimum versions** (5 version numbers)
6. ⚠️ **Complete Ruby configuration** (or mark as "Coming Soon")
7. 🔍 **Technical review** by agent teams
8. 🔍 **Product review** by Chris Pearcey
9. 🔍 **PMM review** by David Fabritius

### Decision Point: Ruby Agent

**Option A**: Wait for Ruby details (delays publication)
**Option B**: Publish without Ruby, add note "Ruby support coming soon"
**Option C**: Publish with minimal Ruby details, update later

**Recommendation**: Option B or C - Don't let Ruby block the other 80% of the doc

---

## 📝 NEXT STEPS

### Immediate (This Week - Feb 16-19)

1. **Send version request email** to all agent teams
   - Java team
   - Node.js team
   - .NET team
   - Python team
   - Ruby team

2. **Follow up with Ruby team** for complete configuration details
   - If not available by Feb 18, proceed with minimal Ruby section

3. **Schedule reviews**:
   - Technical review with agent SMEs (15-30 min each)
   - Product review with Chris Pearcey (30 min)
   - Final sign-off

### By Feb 20 (Publication)

4. **Update doc with version numbers** as they come in
5. **Final Ruby decision**: Include complete section or mark "Coming Soon"
6. **Create PR** for docs-website
7. **Get PR approved and merged**
8. **Announce publication** to stakeholders

### Post-Launch (Week of Feb 23)

9. **Monitor for support questions** - identify doc gaps
10. **Add nice-to-have content**:
    - Code examples
    - UI screenshots
    - Data model mapping
    - Migration guides
11. **Update Ruby section** when information is available

---

## 🎯 QUICK WIN

**You can publish 80% of this documentation NOW** with just version numbers!

The four major agents (Java, Node.js, .NET, Python) are fully documented. Ruby can be added as an update or marked "Coming Soon" without blocking the valuable content for the other agents.

---

## 📧 CONTACTS

**For version numbers**:
- Java: [AGENT TEAM LEAD]
- Node.js: [AGENT TEAM LEAD]
- .NET: [AGENT TEAM LEAD]
- Python: [AGENT TEAM LEAD]
- Ruby: [AGENT TEAM LEAD]

**For product questions**: Chris Pearcey
**For docs questions**: Chinmay Behera (you!)

---

## 📁 FILES

| File | Purpose | Status |
|------|---------|--------|
| `opentelemetry-api-support.mdx` | Main documentation page | ✅ ~90% complete |
| `SME_QUESTIONS_OTEL_API_SUPPORT.md` | Tracking document for SME input | ✅ Updated |
| `OTEL_DOCS_STATUS.md` | This status report | ✅ Complete |

---

**Last Updated**: February 16, 2026 by Chinmay Behera
