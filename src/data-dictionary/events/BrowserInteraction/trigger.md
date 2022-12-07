---
name: trigger
type: attribute
events:
  - BrowserInteraction
---

The cause of the route change or page load. The default values are `click`, `submit`, `popstate`, or `initial page load`. For a custom event created with the API, the default value for trigger will be `api`. This value can also be set via the API.