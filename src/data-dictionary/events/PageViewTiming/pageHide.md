---
name: pageHide
type: attribute
events:
  - PageViewTiming
---

Sent when the document becomes hidden to the user, which in modern practice signals the end of a user's session. This event always accompanies `windowUnload` but can also occurred when the user switches tab, for example.