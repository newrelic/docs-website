---
title: 'End of life for Node.js 16 and Chrome 134 runtimes in synthetic monitors'
summary: 'New Relic is sunsetting the Node.js 16 and Chrome 134 runtimes for synthetic monitors. Force-upgrades to the **Latest** runtimes begin May 18, 2026, with scripted browser monitors fully migrated by Aug 18, 2026 and scripted API monitors by Nov 18, 2026.'
publishDate: '2026-05-18'
eolEffectiveDate: '2026-11-18'
---

As part of our commitment to maintaining a secure platform, New Relic is sunsetting the Node.js 16 and Chrome 134 runtimes for synthetic monitors. Continuing to use older runtimes can leave your monitors vulnerable. This transition is especially critical following the [recent Google Chrome CVE](/docs/security/new-relic-security/security-bulletins/security-bulletin-nr26-04/). The new runtimes improve the runtime environment while increasing security and easier maintenance.

## Key dates and action needed

Pursuant to this migration, Node.js 16 and Chrome 134 legacy runtimes will be permanently discontinued and the following upgrades will be implemented. This will involve a sequence of changes that will **require customers to take critical actions** prior to certain dates:

| Date | Changes | Customer action needed |
|------|---------|------------------------|
| **May 18, 2026** | All non-scripted monitors (simple browser, step, cert check, and broken links monitors) will be force-upgraded to **Latest** runtimes by default. All **new** scripted monitors created via the New Relic UI, NerdGraph API, or Terraform will be created on the **Latest** runtime environment by default. | None. |
| **June 18, 2026** | All DISABLED scripted monitors will be force-upgraded to **Latest** runtimes. | None. If you don't want your DISABLED monitors force-upgraded, change the monitor status to ENABLED before June 18, 2026. |
| **July 18, 2026** | The `latest` tag on the Docker image of the **browser runtime** will point to the latest stable version (Chrome 147 or higher) with Node.js 22. The `latest` tag on the Docker image of the **API runtime** will point to Node.js 22. | **Private locations:** Ensure your scripts for both scripted browser and scripted API monitors run successfully in **Latest** runtimes if you want to use the Docker images with the `latest` tags. If you need more time, reference older Docker image versions instead of using `latest` tags. |
| **Aug 18, 2026** | **Synthetics Node browser runtime is upgraded to Chrome 147 or higher.** ENABLED scripted browser monitors are force-upgraded to the **Latest** runtime. | **Public locations:** Scripted browser monitors that could be upgraded without script modifications have already been upgraded from the backend. Monitors that require script updates can be updated using the runtime upgrade tool. |
| **Nov 18, 2026** | **Synthetics Node API runtime is upgraded to Node.js 22.** ENABLED scripted API monitors are force-upgraded to the **Latest** runtime. | **Public locations:** Scripted API monitors that could be upgraded without script modifications have already been upgraded from the backend. Monitors that require script updates can be updated using the runtime upgrade tool. |

## What's changing

1. **Auto-upgrade to the Latest runtime environments.**
   * Effective May 18, 2026, all non-scripted monitors (simple browser, step, cert check, and broken links monitors) have been upgraded and will be maintained on the **Latest** runtime environment by default.
   * Some scripted browser and scripted API monitors will require customer attention because the scripts are owned by customers.
     * We have upgraded all scripted browser and API monitors that were compatible with the **Latest** runtimes.
     * Only those monitors that did not require any script modifications have been upgraded so far from our end.
2. **New scripted monitors.**
   * Effective May 18, 2026, all scripted monitors created via the UI, NerdGraph API, or Terraform will be created on the **Latest** runtime environment by default.
3. **Existing scripted monitors.**
   * All scripted monitors that are DISABLED as of June 17, 2026 will be force-upgraded to the **Latest** runtime environment on June 18, 2026.
   * For scripted browser monitors that are currently ENABLED on older runtimes, you'll need to update the scripts. ENABLED monitors on older runtimes will be force-upgraded on Aug 18, 2026.
   * For scripted API monitors that are currently ENABLED on older runtimes, you'll need to update the scripts. ENABLED monitors on older runtimes will be force-upgraded on Nov 18, 2026.

## Scripted monitors in public locations

### Transition timeline

* **Node browser runtime (affects scripted browser monitors):**
  * Until Aug 18, 2026, existing monitors on Chrome 134 will still be supported. On Aug 18, 2026, all monitors will be force-upgraded to the latest stable version (Chrome 147 or higher).
  * **Note:** Migrating runtimes to the latest stable version (Chrome 147 or higher) automatically upgrades the runtimes to Node.js 22.
* **Node API runtime (affects scripted API monitors):**
  * Until Nov 18, 2026, existing monitors on Node.js 16 will still be supported. On Nov 18, 2026, all monitors will be force-upgraded to Node.js 22.

### What you need to do

* To make script updates easier, we have created an in-product experience for all scripted monitors deployed in **public locations**.
  * All scripted monitors (ENABLED or DISABLED) that could not be validated successfully in the **Latest** runtimes without script modifications are now shown in the runtime upgrade tool for further action.
  * The tool allows you to edit and validate your scripts in parallel, saving time and effort during the runtime upgrade process. You can make script changes manually or use Gen AI to save time.
  * The AI-assisted script update feature in the tool requires Advanced Compute (aCCU) credits. You can use this feature if you already have aCCU credits. If you don't have aCCU credits, contact your New Relic representative if you'd like to purchase Advanced Compute credits.
  * If you choose to use AI to update scripts, test those scripts before deploying the monitors in production. For more details about the runtime upgrade tool, see the [runtime upgrade UI documentation](/docs/synthetics/synthetic-monitoring/using-monitors/runtime-upgrade-ui/).
* On Aug 18, 2026, all scripted browser monitors that are yet to be upgraded and that still remain on older runtimes will be **force-upgraded** to the latest stable version (Chrome 147 or higher).
* On Nov 18, 2026, all scripted API monitors that are yet to be upgraded and that still remain on older runtimes will be **force-upgraded** to Node.js 22.
* **Transition guides:** [Scripted browser](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-browser-monitors-to-chrome-latest/), [Scripted API](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-api-monitors-to-node-22/).

### If no action is taken

* If your monitors have open requests or open handles in their scripts, those scripts will start timing out when monitors are force-upgraded to **Latest** runtimes.
* When monitors on older runtimes are force-upgraded to Node.js 22 and the latest stable version (Chrome 147 or higher), this may trigger alerts and incidents within your New Relic services.

## Scripted monitors in private locations

### Transition timeline

Unlike monitors in public locations, there is **no forced upgrade** for monitors deployed in private locations at the end of the EOL notice period. If you need more time to update the scripts for monitors deployed in private locations, you can reference older versions of the Docker images. Here are the timelines for when we'll transition the `latest` tag associated with our Docker images:

* **Node browser runtime upgrade (affects scripted browser monitors):**
  * The `latest` tag on the [Docker image of the browser runtime](https://hub.docker.com/r/newrelic/synthetics-node-browser-runtime/tags) will point to the latest stable version (Chrome 147 or higher) with Node.js 22 starting July 18, 2026. Until then, `latest` points to Chrome 134 with Node.js 16.
* **Node API runtime upgrade (affects scripted API monitors):**
  * The `latest` tag on the [Docker image of the API runtime](https://hub.docker.com/r/newrelic/synthetics-node-api-runtime/tags) will point to Node.js 22 starting July 18, 2026. Until then, `latest` points to Node.js 16.

### What you need to do

You always have the option to use runtimes with older versions by using the relevant Docker images:

* **Node browser runtime upgrade (affects scripted browser monitors):**
  * If you want to use the latest stable version (Chrome 147 or higher), you **can already do so** by using Docker images with `rc1.x` tags: [Docker image of the browser runtime for the latest stable version (Chrome 147 or higher)](https://hub.docker.com/r/newrelic/synthetics-node-browser-runtime/tags).
  * After July 18, 2026, if you want to use older Chrome versions in agents deployed on private locations, you can do that by using older Docker images: [Docker image of the browser runtime for Chrome 134](https://hub.docker.com/layers/newrelic/synthetics-node-browser-runtime/3.0.55/images/sha256-206db6d9843aafb5398e576432e51c05caf95cfcb0d59b413b404ae53cd4d604).
* **Node API runtime upgrade (affects scripted API monitors):**
  * If you want to use Node.js 22, you **can already do so** by using Docker images with `rc1.x` tags: [Docker image of the API runtime for Node.js 22](https://hub.docker.com/r/newrelic/synthetics-node-api-runtime/tags).
  * After July 18, 2026, if you want to use older Node.js versions in agents deployed on private locations, you can do that by using older Docker images: [Docker image of the API runtime for Node.js 16](https://hub.docker.com/layers/newrelic/synthetics-node-api-runtime/1.2.134/images/sha256-ad26493527290b42a8086a87ac1c7ad77a2a2ef29504d90bc2a5473fdb862c60).
* **Transition guides:** [Private locations](/docs/synthetics/synthetic-monitoring/private-locations/runtime-transition-guide/), [Scripted browser](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-browser-monitors-to-chrome-latest/), [Scripted API](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-api-monitors-to-node-22/).

### If no action is taken

* The `latest` tag on `NODE_BROWSER_RUNTIME` and `NODE_API_RUNTIME` will point to the latest stable version (Chrome 147 or higher) and Node.js 22 starting July 18, 2026.
* If you have open requests or open handles in your scripts, those scripted monitors need to be updated. Alternatively, you can choose to update your scripts later and continue using older runtimes by using the relevant Docker images.
* Unless you make changes to your individual scripts by July 18, 2026, your scripts will start timing out.

## Troubleshooting

Refer to the examples in our transition guides on handling commonly found timeout errors. Key things to remember:

### Avoid bulk updates

When upgrading monitors to the latest stable version (Chrome 147 or higher), avoid bulk updates. This can lead to widespread timeout issues that are difficult to handle. Instead, validate changes in scripts one at a time.

### Handle resource cleanup properly

Our analysis indicates that Node.js executes browser monitor scripts successfully but waits for open handles, eventually causing monitor timeouts. Ensure proper cleanup of resource handles.

### Monitor timeouts or failures after upgrade

* Review and test your monitors using the new runtime options available in the monitor configuration screens.
* Address Node.js 22 timeout behavior:
  * Node.js 22 has documented issues with timeout behavior for resource handles. Review the [Node.js 22 release documentation](https://nodejs.org/en/blog/announcements/v22-release-announce) for details.
  * Ensure monitors don't time out with Node.js 22 before the transition date. Check for usage of deprecated Node.js APIs that were removed or changed in Node.js 22.
  * Re-run monitors locally using Node.js 22 to reproduce and fix issues.
* If failures persist only on browser monitors, verify the latest stable version (Chrome 147 or higher) specific behavior and contact support.

## Useful links

* [Transition guide for the new API runtime](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-api-monitors-to-node-22/)
* [Transition guide for the new browser runtime](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetics-scripted-browser-monitors-to-chrome-latest/)
* [Troubleshoot scripted API and scripted browser errors](/docs/synthetics/synthetic-monitoring/troubleshooting/simple-scripted-or-scripted-api-non-ping-errors/)
* [Troubleshoot runtime upgrade errors](/docs/synthetics/synthetic-monitoring/troubleshooting/runtime-upgrade-troubleshooting/)
* [Transition guide for private locations](/docs/synthetics/synthetic-monitoring/private-locations/runtime-transition-guide/)
* [Troubleshoot private locations](/docs/synthetics/synthetic-monitoring/private-locations/troubleshoot-private-locations/)

If you have questions or need assistance during this transition, please contact our [support team](https://support.newrelic.com/s/).
