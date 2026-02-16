# Email Template: Request for Agent Version Information

Use this template to quickly request minimum version numbers from each agent team.

---

## Email to All Agent Teams (Java, Node.js, .NET, Python, Ruby)

**Subject**: URGENT: OpenTelemetry API Support Docs - Need Minimum Agent Version

**To**: [Agent Team Lead/Contact]
**CC**: Chris Pearcey, Krishnaveni Mudduluru
**Priority**: High

---

Hi [Team Name] team,

I'm finalizing the documentation for OpenTelemetry API support in our agents (launching Feb 2026) and need one critical piece of information from you:

**What is the minimum agent version that includes OpenTelemetry API support?**

**For [Agent Name] agent:**
- Minimum version with OTel API support: `__________________`

### Optional but helpful:
- Is there a specific version you recommend customers use? `__________________`
- Any known issues in early versions we should note? `__________________`

**Timeline**: I need this by **EOD Wednesday, Feb 18** to publish documentation by Feb 20.

### Context:
I've already documented the configuration details for your agent based on the information from the planning docs. I just need the version number to complete the "Supported languages" table.

You can see the draft documentation here: [LINK TO PR OR BRANCH]

Please reply ASAP - this is blocking publication. Thanks!

Best,
Chinmay

---

## Individual Follow-Up Template (If No Response)

**Subject**: RE: OpenTelemetry API Support - Just Need Version Number

Hi [Name],

Quick ping on this - I literally just need the minimum agent version number to complete the OpenTelemetry API support documentation.

Just reply with:
**"Version X.Y.Z"**

That's it! Takes 10 seconds and unblocks the docs for the Feb 20 launch.

Thanks!
Chinmay

---

## Slack Message Template (Alternative)

```
Hey @[agent-team-channel] 👋

Quick question for the OpenTelemetry API support docs (launching Feb 20):

**What's the minimum [Agent Name] agent version with OTel API support?**

Just need the version number (e.g., "v8.5.0") to complete the docs.

Thanks! 🙏
```

---

## Ruby Team Specific Email

**Subject**: URGENT: Ruby Agent OpenTelemetry Support - Config Details Needed

**To**: [Ruby Team Lead]
**CC**: Chris Pearcey, Krishnaveni Mudduluru
**Priority**: High

---

Hi Ruby team,

I'm finalizing the OpenTelemetry API support documentation and need configuration details for the Ruby agent. The docs are due Feb 20, so I need your help ASAP.

### Critical Information Needed:

1. **Minimum agent version** with OTel API support: `__________________`

2. **How to enable** OpenTelemetry API support:
   - Environment variable(s): `__________________`
   - Config file setting (newrelic.yml):
   ```yaml
   # Please provide example YAML config
   ```

3. **Supported features - please confirm**:
   - Traces API: ✅ Yes / ❌ No
   - Metrics API: ✅ Yes / ❌ No
   - Logs API: ✅ Yes / ❌ No
   - Span Links: ✅ Yes / ❌ No / ⚠️ TBD
   - Events on Spans: ✅ Yes / ❌ No / ⚠️ TBD

4. **Supported instrumentations**:
   - What native OpenTelemetry instrumentations work automatically?
   - Any known conflicts or instrumentations to exclude?

5. **Configuration example**:
   - Please provide a complete, copy/paste ready example

6. **Known limitations or issues**:
   - Any Ruby-specific limitations we should document?

### Timeline:
- **Need by: EOD Wednesday, Feb 18** to publish Feb 20
- If not available: I'll publish with a "Coming Soon" note for Ruby and update later

### Current Status:
I have complete documentation for Java, Node.js, .NET, and Python. Ruby is the last piece needed.

You can see the draft documentation here: [LINK TO PR OR BRANCH]

Please prioritize this - happy to jump on a quick call if that's easier!

Thanks,
Chinmay

---

## If Ruby Team Can't Meet Deadline

**Plan B Email**

**Subject**: OpenTelemetry Docs Publishing Without Ruby Section

Hi [Ruby Team],

Since we're approaching the Feb 20 deadline and I haven't received the Ruby configuration details, I'm going to proceed with publishing the OpenTelemetry API support documentation **without** a complete Ruby section.

**What I'll do:**
- Publish complete docs for Java, Node.js, .NET, and Python
- Add a note in the Ruby section: "Configuration details coming soon"
- Keep the Ruby section in the supported languages table but mark features as TBD
- Create a follow-up ticket to complete Ruby documentation when information is available

**Impact:**
- 80% of our agent users (Java, Node.js, .NET, Python) get complete documentation
- Ruby users will see that support exists but need to contact support for configuration details
- We meet the Feb 20 GA deadline

**Next steps:**
- I'll send you a follow-up request for Ruby details after launch
- We can update the docs as soon as you provide the information
- Update will be a quick content change, not requiring full review cycle

Please confirm this approach is acceptable, or provide the Ruby details by EOD Tuesday, Feb 18.

Thanks,
Chinmay

---

## Tracking Responses

Use this checklist to track who has responded:

### Agent Version Numbers:
- [ ] **Java**: Received from ______________ on __/__
  - Version: `__________________`
- [ ] **Node.js**: Received from ______________ on __/__
  - Version: `__________________`
- [ ] **.NET**: Received from ______________ on __/__
  - Version: `__________________`
- [ ] **Python**: Received from ______________ on __/__
  - Version: `__________________`
- [ ] **Ruby**: Received from ______________ on __/__
  - Version: `__________________`

### Ruby Configuration Details:
- [ ] **Configuration method**: Received on __/__
- [ ] **Supported features confirmed**: Received on __/__
- [ ] **Instrumentation list**: Received on __/__
- [ ] **Configuration example**: Received on __/__
- [ ] **Known limitations**: Received on __/__

---

## Quick Reference: Who to Contact

Based on the planning docs, key contacts are:

**Product**:
- Chris Pearcey (cpearcey@newrelic.com) - PM
- Krishnaveni Mudduluru - EM

**Agent Teams**:
- Java: [CONTACT]
- Node.js: Erik Lucus mentioned, [TEAM CONTACT]
- .NET: [CONTACT]
- Python: [CONTACT]
- Ruby: [CONTACT]

**If you don't have direct contacts:**
- Check internal Slack channels: #apm-agents, #agent-java, #agent-node, etc.
- Check the JIRA ticket for linked engineers
- Ask Chris Pearcey or Krishnaveni for intros

---

**Tips for Getting Fast Responses:**

1. **Use Slack first** if you have access to agent team channels - faster than email
2. **Keep it simple** - just ask for version number first
3. **Show urgency** - mention the Feb 20 deadline
4. **Make it easy** - provide a template they can fill in
5. **Follow up quickly** - if no response in 24 hours, ping again
6. **Escalate if needed** - loop in Chris Pearcey or Krishnaveni if you're blocked

---

**Remember**: You can publish 80% of the documentation with just 5 version numbers! Don't let perfect be the enemy of good.
