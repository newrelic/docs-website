---
title: 'Update to New Relic Synthetics IP ranges'
summary: 'Updating Synthetics IP ranges.'
publishDate: '2025-02-11'
eolEffectiveDate: '2025-05-14'
---

In order to ensure the best service to our customers, New Relic will change the IP ranges for New Relic Synthetics checks **effective May 14, 2025.**

If Synthetics traffic is part of your allowlist, **you will need to update your configurations** to maintain monitor connectivity. 

Failure to update your allowlist by **May 14, 2025**, may result in your synthetic checks failing to connect to your applications, potentially causing disruptions and alerts. 

**NOTE:** If you do not allowlist by IP range, no action is required.

## What's changing?
We will be migrating the IP address range for the New Relic service used by Synthetics public locations to align with our standard IP ranges used across other data ingest. 

## What action is required?

* Before **May 14, 2025**, update your allow lists with the new IP ranges provided below.

  **New IP ranges to allowlist:**

  * `152.38.128.0/19`

  * `212.32.0.0/20`

  * `64.251.192.0/20`

* The following IP ranges will remain in use for the `us-east-1` region:
  * 44.202.178.0/24
  * 44.202.180.0/23
  * 44.210.68.0/24
  * 44.210.110.0/25

* After **September 30, 2025**, remove the old IP ranges from the allowlist. Failure to do so may result in failed connections and trigger alerts.

**Old IP ranges to remove:** The following table list the old IP ranges that you must remove before September 30, 2025.

<table>
  <thead>
    <tr>
      <th>Region Name</th>
      <th>Region Location</th>
      <th>Current CIDR Block Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>us-east-2</td>
      <td>Columbus, OH, USA</td>
      <td>3.145.224.0/24 <br> 3.145.225.0/25 <br> 3.145.234.0/24</td>
    </tr>
      <tr>
        <td>us-west-1</td>
        <td>San Francisco, CA, USA</td>
        <td>3.101.204.0/23 <br> 3.101.212.0/24 <br> 3.101.209.192/26</td>
    </tr>
      <tr>
        <td>us-west-2</td>
        <td>Portland, OR, USA</td>
        <td>35.89.46.0/23 <br> 35.92.27.0/24</td>
      </tr>
        <tr>
          <td>ap-southeast-2</td>
          <td>Sydney, AU</td>
          <td>3.26.252.0/24 <br> 3.26.245.128/25 <br> 3.27.51.0/25</td>
      </tr>
        <tr>
          <td>eu-central-1</td>
          <td>Frankfurt, DE</td>
          <td>3.71.170.0/24 <br> 3.71.103.96/27 <br> 3.75.4.128/25</td>
        </tr>
          <tr>
            <td>eu-west-1</td>
            <td>Dublin, IE</td>
            <td>3.251.231.0/24 <br> 3.251.230.64/26 <br> 3.252.47.0/25</td>
          </tr>
            <tr>
              <td>eu-west-2</td>
              <td>London, England, UK</td>
              <td>13.40.201.0/24 <br> 13.40.208.0/25 <br> 13.41.206.128/25 <br> 13.41.206.64/26</td>
            </tr>
  </tbody>
</table>

## Additional Support

We understand that these changes may require some adjustments to your routine. Please know that we’re committed to supporting you throughout this process. If you have any questions or need further assistance, please don't hesitate to reach out to our [support team](https://support.newrelic.com/s/).
