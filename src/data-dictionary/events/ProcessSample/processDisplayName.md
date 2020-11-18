---
name: processDisplayName
type: attribute
events:
  - ProcessSample
---

The display name (friendly name) of the process.

This is derived from the command name by default, but if it can be determined that the process is associated with a service from the inventory system, New Relic uses the service name. Another source of the name may be a parsed component of the command line, if it is a known command line format (for example, Java app).