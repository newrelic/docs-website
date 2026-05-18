---
title: 'End of life for Node.js 16 and Chrome 134 runtimes in synthetic monitors'
publishDate: '2026-05-18'
eolEffectiveDate: '2026-11-18'
---

As part of our commitment to maintaining a secure platform, New Relic is sunsetting the Node.js 16 and Chrome 134 runtimes for synthetic monitors. Continuing to use older runtimes can leave your monitors vulnerable. This transition is especially critical following the [recent Google Chrome CVE](https://docs.newrelic.com/docs/security/new-relic-security/security-bulletins/security-bulletin-nr26-04/). The new runtimes improve the runtime environment while increasing security and easier maintenance.

## Key Dates & Action Needed

Pursuant to this migration, Node.js 16 and Chrome 134 legacy runtimes will be permanently discontinued and the following upgrades will be implemented. This will involve a sequence of changes that will **require customers to take critical actions** prior to certain dates as follows:

<table>
  <thead>
    <tr>
      <th style="text-align: center;">Date</th>
      <th>Changes</th>
      <th>Customer Action Needed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center;"><strong>May 18, 2026</strong></td>
      <td>All non-scripted monitors (viz. simple browser monitor, step monitor, cert check monitor and broken links monitor) will be force-upgraded to LATEST runtimes by default.</td>
      <td>None.</td>
    </tr>
    <tr>
      <td style="text-align: center;"></td>
      <td>All <strong>new</strong> scripted monitors that are created either by the New Relic UI, NerdGraph API or Terraform will be created on the LATEST runtime environment by default.</td>
      <td>None.</td>
    </tr>
    <tr>
      <td style="text-align: center;"><strong>June 18, 2026</strong></td>
      <td>All DISABLED scripted monitors will be force-upgraded to LATEST runtimes</td>
      <td>None. If customers wish to <strong>not</strong> have any of their DISABLED monitor(s) force-upgraded to LATEST runtimes, they can change the monitor status to ENABLED before June 18, 2026.</td>
    </tr>
    <tr>
      <td style="text-align: center;"><strong>July 18, 2026</strong></td>
      <td>The "latest" tag on Docker Image of <strong>Browser runtime</strong> will point to the latest stable version (Chrome 147 or higher) with Node.js 22 runtime. The "latest" tag on Docker Image of <strong>API runtime</strong> will point to Node.js 22 runtime.</td>
      <td><strong>For Private Locations:</strong> Customers need to ensure that their scripts for both scripted browser and scripted api monitors run successfully in LATEST runtimes should they want to use the Docker Images with the "latest" tags. Customers that require more time to update the scripts for monitors deployed in private locations, can do so by referencing older versions of Docker Images instead of using images with the "latest" tags.</td>
    </tr>
    <tr>
      <td style="text-align: center;"><strong>Aug 18, 2026</strong></td>
      <td><strong>Synthetics Node browser runtime will be upgraded to Chrome 147 or higher.</strong> ENABLED scripted browser monitors force-upgraded to LATEST runtime.</td>
      <td><strong>For Public Locations:</strong> Scripted browser monitors that could be upgraded to LATEST runtimes without any modification to scripts have been upgraded from the backend. The monitors that now require an update to their scripts can be updated using the runtime upgrade tool.</td>
    </tr>
    <tr>
      <td style="text-align: center;"><strong>Nov 18, 2026</strong></td>
      <td><strong>Synthetics Node API runtime will be upgraded to Node.js 22.</strong> ENABLED scripted api monitors force-upgraded to LATEST runtime.</td>
      <td><strong>For Public Locations:</strong> Scripted api monitors that could be upgraded to LATEST runtimes without any modification to scripts have been upgraded from the backend. The monitors that now require an update to their scripts can be updated using the runtime upgrade tool.</td>
    </tr>
  </tbody>
</table>

## What's changing

1. Auto upgrade to LATEST runtime environments  
   * Effective May 18, 2026, all non-scripted monitors (viz. simple browser monitor, step monitor, cert check monitor and broken links monitor) have been upgraded and will be maintained on the LATEST runtime environment by default.  
   * Some scripted browser and scripted API monitors will require customer attention as the scripts are owned by customers.   
     1. We have upgraded all scripted browser and API monitors that were compatible with the LATEST runtimes.   
     2. Only those monitors that did not require any script modifications have been upgraded so far from our end.  
2. New Scripted Monitors  
   * Effective May 18, 2026, all scripted monitors that are going to be created either by UI, NerdGraph API or Terraform will be created on the LATEST runtime environment by default.  
3. Existing Scripted Monitors  
   * All the scripted monitors that are DISABLED as of June 17, 2026 will be force upgraded to the LATEST runtime environment on June 18, 2026  
   * For all the scripted browser monitors that are currently ENABLED and on older runtimes, customers will be required to update the scripts at their end. The ENABLED monitors on older runtimes will be force upgraded on Aug 18, 2026  
   * For all the scripted api monitors that are currently ENABLED and on older runtimes, customers will be required to update the scripts at their end. The ENABLED monitors on older runtimes will be force upgraded on Nov 18, 2026

## Scripted Monitors in Public Locations

###  Transition timeline

* **Node Browser runtime affecting Scripted Browser monitors**:   
  * Until Aug 18, 2026, existing monitors on Chrome 134 will still be supported. On Aug 18, 2026, all monitors will be force upgraded to the latest stable version (Chrome 147 or higher).   
  * **Note:** Migrating the runtimes to the latest stable version (Chrome 147 or higher) will automatically upgrade the runtimes to Node.js 22\.  
* **Node API runtime affecting Scripted API monitors:**   
  * Until Nov 18, 2026, existing monitors on Node.js 16 will still be supported. On Nov 18, 2026, all monitors will be force upgraded to Node.js 22\.

## What do you need to do

* To make it easier to update the scripts, we have created an in-product experience for all scripted monitors deployed in **public locations.**  
  * All scripted monitors (ENABLED or DISABLED) that could not be validated successfully in the LATEST runtimes without modifications to scripts are now shown in the runtime upgrade tool for further action.   
  * The tool allows customers to edit and validate their scripts in parallel, saving time and effort involved in the runtime upgrade process. Customers can make script-related changes manually or choose to make use of Gen AI to save time in updating their scripts.   
  * The AI-assisted script update feature in the tool requires Advanced Compute (aCCU) credits. You can use this feature if you already have aCCU credits. If you don’t have aCCU credits, customers are advised to contact their New Relic representatives if they would like to purchase Advanced Compute credits.  
  * Customers who choose to use AI to update scripts are advised to test those scripts before deploying the monitors in production. More details about the runtime upgrade tool can be found [here](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/runtime-upgrade-ui/).  
* On Aug 18, 2026, all scripted browser monitors that are yet to be upgraded and that still remain on older runtimes will be **force upgraded** to the latest stable version (Chrome 147 or higher).  
* On Nov 18, 2026, all scripted api monitors that are yet to be upgraded and that still remain on older runtimes will be **force upgraded** to Node.js 22\.  
* **Transition Guides:** [Scripted Browser](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-browser-monitors-to-chrome-latest/), [Scripted API](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-api-monitors-to-node-22/)

## If no action is taken

* If customers don’t take action and if their monitors have open requests or open handles in their scripts, their scripts will start timing out when monitors are force upgraded to LATEST runtimes.  
* When monitors on older runtimes are force upgraded to Node.js 22 and the latest stable version (Chrome 147 or higher), this may lead to alerts and incidents being triggered within your New Relic services.

## Scripted Monitors in Private Locations

### Transition timeline

Unlike monitors in public locations, there’s **NO FORCED UPGRADE** for monitors deployed in the private locations at the end of the EOL notice period. Customers desiring more time to update the scripts for monitors deployed in private locations, can do so by referencing older versions of Docker Images. Here are the timelines when we’ll transition the “latest” tag associated with our Docker Images:

* **Node Browser runtime upgrade that affects Scripted Browser monitors:**  
  * The "latest" tag on [Docker Image of Browser runtime](https://hub.docker.com/r/newrelic/synthetics-node-browser-runtime/tags) will point to the latest stable version (Chrome 147 or higher) with Node.js 22 runtime starting July 18, 2026\. Until then, "latest" points to Chrome 134 with Node.js 16 runtime.  
* **Node API runtime upgrade that affects Scripted API monitors:**  
  * The "latest" tag on [Docker Image of API runtime](https://hub.docker.com/r/newrelic/synthetics-node-api-runtime/tags) will point to Node.js 22 runtime starting July 18, 2026\. Until then, "latest" points to Node.js 16 runtime.

## What you need to do

Customers will always have the option to use runtimes with older versions by making use of relevant Docker Images:

* **Node Browser runtime upgrade that affects Scripted Browser monitors:**  
  * Customers desiring to use the latest stable version (Chrome 147 or higher) **can already do** so by using Docker images with “rc1.x” tags: [Docker Image of Browser runtime for latest stable versions (Chrome 147 or higher)](https://hub.docker.com/r/newrelic/synthetics-node-browser-runtime/tags)  
  * Post July 18, 2026, if customers wish to use older versions Chrome (for browser runtime) in the agents deployed on private locations, they can do that by using older Docker images: [Docker Image of Browser runtime for Chrome 134](https://hub.docker.com/layers/newrelic/synthetics-node-browser-runtime/3.0.55/images/sha256-206db6d9843aafb5398e576432e51c05caf95cfcb0d59b413b404ae53cd4d604)  
* **Node API runtime upgrade that affects Scripted API monitors:**  
  * Customers desiring to use latest runtimes Node.js 22 **can already do** so by using Docker images with “rc1.x” tags: [Docker Image of API runtime for Node 22](https://hub.docker.com/r/newrelic/synthetics-node-api-runtime/tags)  
  * Post July 18, 2026, if customers wish to use older versions of Node.js in the agents deployed on private locations, they can do that by using older Docker images: [Docker Image of API runtime for Node 16](https://hub.docker.com/layers/newrelic/synthetics-node-api-runtime/1.2.134/images/sha256-ad26493527290b42a8086a87ac1c7ad77a2a2ef29504d90bc2a5473fdb862c60)  
* **Transition Guides:** [Private Locations](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/private-locations/runtime-transition-guide/), [Scripted Browser**,**](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-browser-monitors-to-chrome-latest/)  [Scripted API](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-api-monitors-to-node-22/)

## If no action is taken

* The "latest" tag on NODE\_BROWSER\_RUNTIME and NODE\_API\_RUNTIME will point to the latest stable version (Chrome 147 or higher) and Node.js 22 runtime starting July 18, 2026\.  
* If customers have open requests or open handles in their scripts, those scripted monitors need to be updated. Alternatively, customers could choose to update their scripts later and continue using older runtimes by making use of relevant Docker Images.  
* Unless changes are enacted by customers to their individual scripts by July 18 2026, their scripts will start timing out.

## Troubleshooting

Customers can refer to examples in our transition guides on handling commonly found timeout errors. Key things to remember include:

### Avoid bulk updates

When upgrading monitors to the latest stable version (Chrome 147 or higher), customers should avoid a bulk update. This can lead to widespread timeout issues that are difficult to handle. Instead, we recommend validating changes in scripts one at a time.

### Handle resource cleanup properly

Our analysis indicates that Node.js executes browser monitor scripts successfully but waits for open handles, eventually causing monitor time-outs. Ensure proper cleanup of resource handles.

### Monitor time-outs or failures after upgrade

* Review and test your monitors using the new runtime options available in the monitor configuration screens.  
* Address Node.js 22 time out behavior:   
  * Node.js 22 has documented issues with time out behavior for resource handles. Review the [Node.js 22 release documentation](https://nodejs.org/en/blog/announcements/v22-release-announce) for details.  
  * Ensure monitors don't time out with Node.js 22 before the transition date. Check for usage of deprecated Node.js APIs that were removed or changed in Node.js 22\.  
  * Re-run monitors locally using Node.js 22 to reproduce and fix issues.  
* If failures persist only on browser monitors, verify the latest stable version (Chrome 147 or higher) specific behavior and contact support.

### Useful Links

[Transition Guide for New API Runtime](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-api-monitors-to-node-22/)  
[Transition Guide for New Browser Runtime](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-browser-monitors-to-chrome-latest/)  
[Troubleshooting Scripted API and Scripted Browser Errors](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/troubleshooting/simple-scripted-or-scripted-api-non-ping-errors/)  
[Troubleshooting Runtime Upgrade Errors](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/troubleshooting/runtime-upgrade-troubleshooting/)  
[Transition Guide for Private Locations](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/private-locations/runtime-transition-guide/)  
[Troubleshooting Private Locations](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/private-locations/troubleshoot-private-locations/)

If you have questions or need assistance during this transition, please contact our [support team](https://support.newrelic.com/s/).