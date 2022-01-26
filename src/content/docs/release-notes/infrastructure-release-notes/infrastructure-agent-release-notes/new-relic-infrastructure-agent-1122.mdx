---
subject: Infrastructure agent
releaseDate: '2020-08-12'
version: 1.12.2
---

## Notes

A new version of the agent has been released. Follow standard procedures to [update your Infrastructure agent](https://docs.newrelic.com/docs/infrastructure/install-configure-manage-infrastructure/update-or-uninstall/update-infrastructure-agent).

## Fixed

* [PR-50](https://github.com/newrelic/infrastructure-agent/pull/59) Fixed inventory deltas submission for remote (non host) entities. This fixes inventory errors showing up on the log for `DEBUG` level with message `error field deltas not in expected order: have delta ID XXX, want YYY`.

### Context

Inventory deltas are JSON diffs and they need to be applied in order aiming to provide a consistent state. Both the infrastructure agent and the New Relic database stored their latest **delta ID** received/submitted.

This delta ID is incremented in each plugin entity inventory submission to New Relic. When these IDs go out of sync between agent and platform, the latter provides its latest known **ID** for the given inventory plugin and entity. Then a reconciliation process is run by the agent for that plugin so that the next **ID** will match the one expected by New Relic.

### Root cause

For remote, non-host entities the agent side didn't store delta IDs on a per-entity basis as the New Relic database did. This means that for a given inventory plugin or integration providing more than 1 entity there'd be _delta ID order_ issues, which were only seen on agent's DEBUG level (verbose mode > 0). At some point all data would usually be submitted as reconciliation process attempts to fix this. But for high load integrations producing multiple remote entities this reconciliation process would be triggered every time an entity needs to be submitted as for each of them platform keeps a record, while the agent recorded ID on a per-plugin basis. Therefore, for high-load integrations, the agent reconciliation process might enter in race-condition loop when trying to fix the delta IDs.

### Fix

This release fixes this behaviour by keeping track of delta IDs in the same way as the New Relic database does (or a per-plugin, per-entity basis).

As state might be stored on disk for inventory deltas, if any integration had it persisted before the fix it'll take a reconciliation run per entity to fix agent's locally stored IDs. In this case you might still see some log entries, but they'll be gone during their first submissions.
