---
name: db.statement
type: attribute
events:
  - Span
---

The database statement in the format most permissive by configuration. Reported when 'category' is 'datastore.' For a span with a 'component' of 'MySql', an example value would be: SELECT \* FROM accounts.