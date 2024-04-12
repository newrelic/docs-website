---
title: 'Upgrade to the new synthetic monitor runtime to prevent impacts to your synthetic monitors'
summary: 'Support for legacy synthetics runtimes and Containerized Private Minion will be concluded on October 22, 2024'
releaseDate: '2024-04-22'
learnMoreLink: 'https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/runtime-upgrade-ui'
getStartedLink: ''
---

On October 22, 2024, New Relic will end-of-life (EOL):

 * The Containerized Private Minion (CPM) capability
 * Legacy synthetics runtimes, including our legacy Chrome 72 (and older) and Node version 10 (and older) runtimes. 

Please refer to our [transition guide](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/new-runtime/) to update to the latest runtimes or contact support. 

The new runtimes provide many customer benefits that cannot be replicated in the legacy runtime environment, including but not limited to: 
- The elimination of security CVE findings that cannot be resolved due to the legacy runtime design and backward compatibility requirements of the Containerized Private Minion (CPM)
- Support for newer Chrome and Node.js versions, including easier upgrade paths
- More frequent browser version updates
- Access to newer capabilities, such as device emulation

## What you need to do:
**All customers must be on the new runtime by October 22, 2024 in order to prevent synthetic monitoring degradation from occurring.**

### For public locations:
1. New Relic will upgrade all broken link and certificate check monitors to the new runtime
2. Customers should upgrade their scripted API, scripted browser, and step monitors to the new runtime [using the runtime upgrade UI](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/runtime-upgrade-ui) before October 22, 2024. If not, we will upgrade your monitors to the new runtime **which may result in check failures and triggered alerts.**
    - Remember to use the test results from the runtime upgrade UI to determine which monitors may require modifications before being upgraded to the new runtime.
3. Customers will be unable to create new monitors using legacy runtimes on public locations as of June 30, 2024.

### For private locations:
1. Customers should [upgrade to our new job manager](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/private-locations/job-manager-transition-guide/), that allows support of our new runtime on private locations. **If not, your monitors will stop running at the EOL date.**
2. Once on the new job manager, customers should upgrade their monitors to the new runtime using the runtime upgrade UI. This includes all non-ping monitor types. If not, we will upgrade monitors to the new runtime, **which may result in check failures and triggered alerts.**
    - Remember to use the test results from the runtime upgrade UI to determine which monitors may require modifications before being upgraded to the new runtime.
3. If you are using advanced features of the containerized private minion such as verified script execution (VSE), custom environment variables, or custom node modules, we anticipate support for these features will be available in Synthetics Job Manager by April 5, 2024.
4. Customers will be unable to create new monitors using legacy runtimes on private locations as of June 30, 2024.

## Links to additional resources:
- [Runtime Transition Guide](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/new-runtime/)
- [Runtime Upgrade Troubleshooting Guide](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/troubleshooting/runtime-upgrade-troubleshooting/)
- [Runtime Upgrade UI Documentation](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/runtime-upgrade-ui)
