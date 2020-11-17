---
name: serviceCheck.status
events:
  - NagiosServiceCheckSample
---

The return code of the service check. Options: 0 = Ok, 1 = Warning, 2 = Critical, 3 = Unknown.

For more information about return codes, see the Nagios documentation on [Plugin Return Codes](https://nagios-plugins.org/doc/guidelines.html#AEN78).