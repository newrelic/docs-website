---
name: pageHide
type: attribute
events:
  - PageViewTiming
---

Sent when the document becomes hidden to the user, which in modern practice signals the _potential end_ of an user session. This event always accompanies `windowUnload` if that occurs, but it can also fire separately when the user switches tab, for example, in which case the unload isn't fired.