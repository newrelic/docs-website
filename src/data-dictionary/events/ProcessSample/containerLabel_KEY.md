---
name: containerLabel_KEY
type: attribute
events:
  - ProcessSample
---

For processes running inside a Docker container, the Docker label associated with this process.

Docker labels consist of key/value pairs. The key is captured in the attribute name as `containerLabel_KEY`, and the returned `string`type value is then associated with that attribute.

For example, to query a `owner` label for containers maintained by `Test User`:

SELECT cpuPercent FROM ProcessSample WHERE containerLabel\_owner = 'Test User'