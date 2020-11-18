---
name: http.url
type: attribute
events:
  - Span
---

External URI for the call. Reported when 'category' is 'http.' It MUST NOT contain user, password, or query parameters. It MUST be set as an agent attribute and not as an intrinsic so that attribute filtering can be applied.