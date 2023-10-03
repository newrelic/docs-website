---
title: 'Enhance optimization recommendations with new AWS Compute Optimizer integration' 
summary: 'Data Plus customers using our AWS infrastructure agent can now use New Relic memory utilization metrics for Amazon EC2 to supercharge their AWS Compute Optimizer recommendations.' 
releaseDate: '2022-11-28' 
learnMoreLink: 'https://aws.amazon.com/compute-optimizer/' 
---
## AWS Compute Optimizer integration

New Relic is pleased to partner with AWS to allow joint customers on our Data Plus plan to feed memory utilization data to AWS’ Compute Optimizer engine, at no additional cost. AWS Compute Optimizer recommendations made with memory utilization metrics from New Relic take into account many additional EC2 instance types and can show much greater savings potential.

![AWS Compute Optimizer Recommendations](./images/AWS_Compute_Optimizer_Recommendations.webp "AWS Compute Optimizer Recommendations")
AWS Compute Optimizer Recommendations

To prepare for this integration, be sure to first deploy the New Relic infrastructure agent to any EC2 instances in AWS that you want to monitor. Instructions for using AWS System Manager Distributor to easily do so can be found [here](https://docs.newrelic.com/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-sys-dist).

To enable this integration, first select New Relic as your third party provider in AWS Compute Optimizer.

![Third-party Metrics Selector](./images/ACOSelection.webp "Third-party Metrics Selector")
Third-party Metrics Selector

Once this is done, send a request for AWS Compute Optimizer to aco@newrelic.com. Include your AWS account ID(s) and New Relic account ID. Once you are notified that the integration has been enabled, it will take up to 30 hours of data flowing for the recommendations to reflect the memory utilization metrics.

AWS will always ensure no rightsizing recommendations risk harming application performance. However, without this integration their lack of memory metrics will limit the cost savings potential. Unlock the full potential of rightsizing your EC2 environment with AWS Compute Optimizer powered by New Relic memory metrics.
