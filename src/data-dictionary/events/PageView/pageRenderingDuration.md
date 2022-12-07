---
name: pageRenderingDuration
type: attribute
units: seconds (s)
events:
  - PageView
---

The page rendering phase is the time between DOM completion (`domContentLoadedEventEnd`) and the window load event (`loadEventEnd`), in seconds. This phase measures browser-side processing and display of the page content.