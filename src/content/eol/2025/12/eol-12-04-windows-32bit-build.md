---
title: 'End of Life: 32-bit Windows Binaries for Infrastructure Agent'
subject: End of Life - 32-bit Windows Binaries for Infrastructure Agent
publishDate: '2025-12-04'
eolEffectiveDate: '2025-12-04'
---

As of Infrastructure Agent version 1.71.2 (released December 4, 2025), New Relic has discontinued the creation of 32-bit Windows binaries for the Infrastructure Agent and Native On-Host Integrations.

## What Changed

Creation of 32-bit Windows binaries has been discontinued. All releases from version 1.71.2 onward only support x64 Windows binaries.

## Why This Change Was Made

This change aligns with [Microsoft's EOL date of Windows 10](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro), which was the last supported OS that had earlier been available in a 32-bit x86 version. Our focus remains on supporting modern and secure operating systems.

## Impact

* Customers using Windows 10 (32-bit) will no longer be able to upgrade to infrastructure agent versions 1.71.2 or later
* Existing installations of earlier versions will continue to function
* Customers on actively supported Windows versions, including all modern Windows Server OS editions, are already on 64-bit versions
* Customers on any OS that is beyond its vendor's EOL date are expected to upgrade to an OS version that is actively supported
* The old 32-bit binaries created before version 1.71.2 will no longer be covered by New Relic's Support team assistance but will be available for downloading if needed

## Documentation and Resources

* [Infrastructure Agent - OS compatibility](/docs/infrastructure/infrastructure-agent/requirements-infrastructure-agent/#os)
* [Infrastructure Agent 1.71.2 Release Notes](/docs/release-notes/infrastructure-release-notes/infrastructure-agent-release-notes/new-relic-infrastructure-agent-1712)
* [PR #2144 - Technical details](https://github.com/newrelic/infrastructure-agent/pull/2144)

We encourage customers to [regularly update to the most current versions of New Relic agents](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/#update-your-agents-regularly) to maintain optimal functionality and security.
