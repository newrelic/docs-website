---
name: crashLocation
events:
  - MobileCrash
---

The crashing class, file name, method, and line number if the crash is symbolicated. If not symbolicated, a memory address within the application binary (iOS), or obfuscated class, method, and line number (Android). Platform specific algorithms are applied to the stack to determine the crashing frame.
