---
title: "End of Life Announcement: For Chrome 134 and Node.js 16 runtime for synthetics"
subject: "On February 9, 2026, New Relic will upgrade synthetics runtime to Chrome 140 and Node.js 22, ending support for Chrome 134 and Node.js 16 runtimes."
publishDate: '2025-11-05'
eolEffectiveDate: '2026-02-09'
---

On **February 9, 2026**, New Relic will upgrade synthetics runtime environments, ending support for:

* Chrome 134 browser runtime
* Node.js 16 runtime for both API and browser monitors

The following upgrades will be implemented:

* **Synthetics Node API runtime**: Upgraded to Node.js 22
* **Synthetics Node browser runtime**: Upgraded to Node.js 22  
* **Chrome browser**: Upgraded to Chrome 140

## What's changing?

The following monitor types will be affected by these changes:

* Scripted Browser
* Step Monitor
* Simple Browser Monitors
* Scripted API
* Cert Check
* Broken Link

**Note:** Moving to Chrome 140 automatically upgrades to Node.js 22.

## Transition timeline

### Public locations

* **Node API runtime**: Default remains Node.js 16 until February 8, 2026. On **February 9, 2026**, all monitors will be force upgraded to Node.js 22.

* **Node Browser runtime**: Default remains Chrome 134 for three months starting November 1, 2025. Force upgrade to Chrome 140 occurs on **February 9, 2026**.

### Private locations

* **Node API runtime**: The "latest" tag on `DESIRED_RUNTIMES` will point to Node.js 22 runtime starting **December 1, 2025**. Until then, "latest" points to Node.js 16 runtime.

* **Node Browser runtime**: The "latest" tag on `DESIRED_RUNTIMES` will point to Chrome 140 with Node.js 22 runtime starting **December 8, 2025**. Until then, "latest" points to Chrome 134 with Node.js 16 runtime.

## What you need to do

### During the transition period

1. **Review and test your monitors** using the new runtime options available in the monitor configuration screens.

2. **Address Node.js 22 time out behavior**: Node.js 22 has documented issues with time out behavior for resource handles. Review the [Node.js 22 release documentation](https://nodejs.org/en/blog/announcements/v22-release-announce) for details.

3. **Ensure monitors don't time out** with Node.js 22 before the transition date.

### Handle resource cleanup properly

Our analysis indicates that Node.js executes browser monitor scripts successfully but waits for open handles, eventually causing monitor time outs. Ensure proper cleanup of resource handles.

**Example 1 - Stream cleanup:**

```javascript
let downloadStream = got.stream(fileDownloadUrl);
// Add cleanup in finally block
finally { 
  if (downloadStream) { 
    downloadStream.destroy(); 
  } 
}
```

**Example 2 - HTTPS request cleanup:**

```javascript
const req = https.request(options, (res) => {
  try {
    const cert = res.socket.getPeerCertificate();
    
    // Always destroy the response and socket
    const cleanup = () => {
      try {
        res.destroy();
        if (res.socket && !res.socket.destroyed) {
          res.socket.destroy();
        }
      } catch (e) {
        console.log('Cleanup warning:', e.message);
      }
    };

    if (cert && Object.keys(cert).length > 0) {
      const validTo = cert.valid_to || cert.validTo;
      console.log("Raw certificate valid_to:", validTo);
      cleanup();
      resolve({ validTo: validTo });
    } else {
      cleanup();
      reject(new Error("Could not get certificate information"));
    }
  } catch (err) {
    res.destroy();
    if (res.socket) res.socket.destroy();
    reject(err);
  }
});
```

## Changes during transition period

### For public browser monitors

In the creation/edit monitor screen, you'll see the ability to select Chrome browser versions:

* Chrome 134 (current)
* Chrome 140 (new)

### For other monitor types

Select the runtime in the Configure monitor screen.

## Troubleshooting

### Monitor time-outs or failures after upgrade

* Check for usage of deprecated Node.js APIs that were removed or changed in Node.js 22
* Re-run monitors locally using Node.js 22 to reproduce and fix issues
* If failures persist only on browser monitors, verify Chrome 140-specific behavior and contact support

### Rollback options

* **Public locations**: Temporarily switch monitor runtime back to Chrome 134 during the transition window

## Additional resources

* [Synthetics runtime documentation](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/new-runtime/)

* If you have questions or need assistance during this transition, please contact our [support team](https://support.newrelic.com/s/).