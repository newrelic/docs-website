---
subject: Node.js agent
releaseDate: '2019-03-04'
version: 5.6.0
---

### New features

* Added `product` attribute to existing datastore instrumentations.
* Added `db.collection` to datastore span event attributes.

### Improvements

* `trusted_account_key`, `account_id`, and `primary_application_id` may now be configured via a configuration file while in serverless mode.
* Optimized exclusive time duration calculator.

Previously, the agent would spend a lot of time sorting redundant arrays while calculating the exclusive time for the segments of a trace. This has been refactored into a single postorder traversal over the tree which will calculate the exclusive time for all segments in the subtree rooted at a given segment.

### Fixes

* Fixed a bug where data belonging to distributed traces starting in the Node.js agent would be prioritized over data produced from traces starting in other language agents. Previously, the agent would use the same random number for both the transaction priority (used for data sampling) and the distributed tracing trace sampling decision (whether to create DT data for a given transaction). This random number reuse resulted in a bias that caused data from distributed traces started in the Node.js agent to be prioritized above data that belongs to distributed traces started in other language agents. The agent now makes individual rolls for each of these quantities (i.e. the transaction priority and trace sampling decision), eliminating the bias.
* Prevent a split on undefined location under certain conditions in Memcached.
