---
title: 'Synthetics Horde legacy IPs released for private locations'
summary: 'The IPs used for synthetics private locations prior to August 2023 will be released.' 
releaseDate: '2023-11-17' 
---

On **January 15, 2024**, the IPs used for synthetics private location communication prior to August 2023 will be returned to Amazon. These IPs could be used by others in the future. 

**What’s changing?**
Horde is used by synthetics private locations to retrieve synthetic checks and return results. The IP ranges used by Horde changed in [August 2023](/whats-new/2023/06/whats-new-06-23-synthetics-horde-ip-changes/). The IPs used prior to August 2023 will be returned to Amazon on January 15, 2024 and could be used by others in the future.

Legacy US horde IPs:
* 13.248.153.51
* 76.223.21.185

Legacy EU horde IPs:
* 185.221.86.57

**What action is required?**
**There will be no impact to synthetic monitors using private locations or current private location connectivity.** If you are using private locations today, you are already utilizing the Horde IP ranges that were released in August 2023. 

If you utilized synthetics private locations prior to August 2023, it’s highly likely that you will need to clean up network rules. Any configurations allowing outbound connectivity to the IPs listed above can be removed at any time.

**What if I don't use synthetics private locations?**
If you don’t use private locations, you don’t need to perform any action. 

We understand that these changes may require some adjustments to your routine. Please know that we’re committed to supporting you throughout this process. If you have any questions or need further assistance, please don't hesitate to reach out to our [support team](https://support.newrelic.com/s/).