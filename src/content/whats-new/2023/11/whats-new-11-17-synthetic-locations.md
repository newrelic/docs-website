---
title: 'Synthetics Horde legacy IPs released for private locations'
summary: 'The IPs used for synthetics private locations prior to August 2023 will be released.' 
releaseDate: '2023-11-17' 
---

On **January 15, 2024**, IPs from pre-August 2023 used for synthetics private location communication will return to Amazon. Once returned to Amazon, these IPs could be used by others in the future. 

**What’s changing?**
Synthetics private locations use Horde to retrieve synthetic checks and return results. Horde IP ranges changed in [August 2023](https://docs.newrelic.com/whats-new/2023/06/whats-new-06-23-synthetics-horde-ip-changes/). The IPs used pre-August 2023 will return to Amazon on January 15, 2024 and could be used by others in the future.

Legacy US horde IPs:
* 13.248.153.51
* 76.223.21.185

Legacy EU horde IPs:
* 185.221.86.57

**What action is required?** If you utilized synthetics private locations before August 2023, it’s very likely that you need to clean up network rules. Any configurations allowing outbound connectivity to the IPs listed above can be removed at any time.

**There will be no impact to synthetic monitors using private locations or current private location connectivity.** If you're using private locations today, you're already utilizing the Horde IP ranges that we released in August 2023. 

**What if I don't use synthetics private locations?**
If you don’t use private locations, you don’t need to perform any action. 

We understand that these changes may require some adjustments to your routine. Please know that we’re committed to supporting you throughout this process. If you have any questions or need further assistance, please don't hesitate to reach out to our [support team](https://support.newrelic.com/s/).
