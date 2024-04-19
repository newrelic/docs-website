---
title: 'Update to the new synthetic monitor runtime to prevent impacts to your synthetic monitors'
summary: 'Support for legacy synthetics runtimes and Containerized Private Minion will be concluded on October 22, 2024'
releaseDate: '2024-04-22'
learnMoreLink: 'https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/runtime-upgrade-ui'
getStartedLink: ''
---

On October 22, 2024, New Relic will end-of-life (EOL):

    * The Containerized Private Minion (CPM) capability
    * Legacy synthetic monitoring runtimes, including our legacy Chrome 72 (or older) and Node version 10 (or older) runtimes 

Update to the latest runtimes by [following procedures in our transition guide](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/new-runtime/), or by contacting support.

The new runtimes improve on our legacy runtime environment, including but not limited to these changes:  

    - Updating to the new runtime will remove certain CVE findings that cannot be resolved with legacy runtime environments. The legacy runtime design and Containerized Private Minion (CPM) include deprecated technologies that may trigger CVE findings that cannot be resolved without impacting the functionality of legacy runtimes.
    - Support for newer Chrome and Node.js versions, including easier upgrade paths
    - More frequent browser version updates
    - Access device emulation and other new capabilities 

## What you need to do:

**All customers must be on the new runtime by October 22, 2024 in order to prevent synthetic monitoring degradation from occurring.**

Below are instructions for updating your public and private locations. 

### For public locations:

1. New Relic will update all broken link and certificate check monitors to the new runtime.
1. Customers should update their scripted API, scripted browser, and step monitors to the new runtime [using the runtime upgrade UI](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/runtime-upgrade-ui) before October 22, 2024. 
   - If you do not update, we’ll force update your monitors to the new runtime on the EOL date. **This may result in check failures and triggered alerts.**
   - Remember to use the test results from the runtime upgrade UI to determine the monitors that may require modifications before updating to the new runtime.
1. As of June 30, 2024, customers will be unable to create new monitors using legacy runtimes on public locations.

### For private locations:

1. Customers should [update to our new job manager](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/private-locations/job-manager-transition-guide/), which provides support for our new runtime on private locations. **If not, your monitors will stop running at the EOL date.**
1. Once you're using the new job manager, customers should update their monitors to the new runtime using the runtime upgrade UI. This includes all non-ping monitor types. 
   - If you do not update, we'll force update your monitors to the new runtime. **This may result in check failures and triggered alerts.**
   - Remember to use the test results from the runtime upgrade UI to determine the monitors that may require modifications before updating to the new runtime.
1. If you're using advanced features of the containerized private minion such as verified script execution (VSE), custom environment variables, or custom node modules, we anticipate support for these features will be available in Synthetics Job Manager by April 5, 2024.
1. Customers will be unable to create new monitors using legacy runtimes on private locations as of June 30, 2024.

## Links to additional resources:

- [Runtime Transition Guide](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/new-runtime/)
- [Runtime Upgrade Troubleshooting Guide](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/troubleshooting/runtime-upgrade-troubleshooting/)
- [Runtime Upgrade UI Documentation](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/runtime-upgrade-ui)
