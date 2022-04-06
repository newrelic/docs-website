---
name: MobileCrash
type: event
dataSources:
  - Mobile
---

The MobileCrash event is created when an app crashes. MobileCrash includes attributes such as crash line number, class, and crash message.

MobileCrash events for native crashes will also include attributes such as crashing shared library, address within crashing file of the nearest source line, register contents and other low-level system state.
