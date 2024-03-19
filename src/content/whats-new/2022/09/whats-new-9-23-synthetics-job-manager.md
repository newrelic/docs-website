---
title: 'Our Synthetics runtime is now available on private locations!'
summary: 'New Synthetics job manager allows next-gen runtime to run on private locations'
releaseDate: '2022-09-23'
learnMoreLink: 'https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/private-locations/job-manager-transition-guide/'
getStartedLink: 'https://one.newrelic.com/-/0gbRKzygzwE'
---

On Friday September 16, 2022, we launched the synthetics job manager, which lets you run our latest synthetics runtime on private locations! The job manager addresses many feature requests and resolves some deployment pain points. 

**Improvements** 

**Kubernetes**
The new synthetics job manager uses K8s CronJobs to execute scripted API and scripted browser monitors. This combined with the creation of a [new Helm chart](https://github.com/newrelic/helm-charts/tree/master/charts/synthetics-job-manager) allows the customer to control many requested settings and improves the success rate for customers across K8s flavors and container runtimes. 
In contrast, the containerized private minion (CPM) and the legacy runtime interacted directly with K8s APIs to spin up runner and health check pods. Because the configuration for these pods was stored inside the CPM, support for most configuration changes resulted in new feature requests that increased the internal backlog. 

**More customer control**
Additionally, the job manager uses runtime-specific container images. The synthetics job manager image is responsible for only coordinating jobs (hence the name job manager) while the CPM would run ping jobs from the minion container and any other job types from the large minion-runner container. Separate runtime images are available for the ping runtime, the Node API runtime, and the Node browser (Chrome) runtime. While the default behavior is to download and run all three runtimes, the `DESIRED_RUNTIMES` setting in Docker or the `.enabled` settings for each runtime in K8s can prevent downloading and running runtimes that are not used. 

**Reducing customer pain points**
Legacy runtimes are not bundled with the synthetics job manager. The containerized private minion (CPM) included a number of legacy runtimes versions of Node and Chrome as old as Chrome 44, which caused a number of security scan concerns for our customers. This resulted in a large runner container image. 
 
The CPM uses a mounted volume (Docker) or persistent volume and claim (K8s) for communication between the minion and the minion runner containers. The synthetics job manager uses HTTP for this communication instead, which reduces permissions issues in high security customer environments.

The synthetics job manager will reuse a single Docker network to communicate with runtime containers. In contrast, the CPM created a new Docker network for each non-ping job execution, which sometimes resulted in Docker IP range exhaustion and internal engine errors due to the volume of networks.

**Temporary limitations**
Ping monitor jobs cannot be routed to the synthetics job manager yet. This will be addressed short term and in a way that the ping monitor jobs can be load balanced between synthetics job manager and the containerized private minion (CPM). Migrations and runtime upgrades can occur if both are configured for the same private location.
 
A few less frequently used capabilities in the CPM are not yet available in the synthetics job manager. These include:
 
* SSL certificate expiration, broken link, and step monitors are not yet supported in the Chrome 100 / Node 16 runtimes
* Verified script execution (VSE)
* Check timeout overrides
* User defined environment variables
* Adjusting JVM configuration options
* Custom Node modules

Our team will prioritize the above features based on the volume of requests we receive. Please reach out to your account team if you feel prevented from using the new job manager due to requirement of the above features.

**What about legacy runtimes and the CPM?**
The synthetics job manager will only support the newest synthetic runtimes (Chrome 100 and Node 16). The containerized private minion (CPM) will only support legacy runtimes (Chrome 72, Node 10, and older). We are no longer bundling or supporting legacy runtimes with the synthetics job manager due to the build, support, and security scan challenges that arise.

**Private location configuration options**
Customers can either create a new private location to use with the synthetics job manager or they can configure the job manager to use an existing private location. If the same private location is used for both synthetics job manager and CPM, the CPM will run all legacy runtime jobs and the synthetics job manager will run all new runtime jobs. 

**Additional resources**
* [Synthetics job manager transition guide](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/private-locations/job-manager-transition-guide/)
* [New synthetics runtime transition guide](https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/using-monitors/new-runtime/)
