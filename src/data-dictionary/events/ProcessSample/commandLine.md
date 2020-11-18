---
name: commandLine
type: attribute
events:
  - ProcessSample
---

The full command line for the current process. This command line will be sanitized by default to strip options and arguments from the command line to prevent accidental leakage of private information.