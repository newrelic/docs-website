---
title: 'Automated monitoring of EC2 instances with New Relic'
summary: 'The EC2 QuickStart solution automates the monitoring of AWS EC2 instances in New Relic by using a CloudFormation template to install New Relic Infrastructure Agent on the instances.'
releaseDate: '2023-07-27' 

---

The ec2 quickstart solution provided here is designed for individuals seeking to enhance observability on AWS EC2 instances within their AWS Account by monitoring host metrics.

After successfully deploying the [cloudformation template](), users will be able to monitor ec2 instances present across multiple regions and AWS Accounts in New Relic. It automates the installation of [New Relic Infrastructure Agent](https://docs.newrelic.com/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent/) in existing (before installation of this solution) and new ec2 instances (any instance spinned post installation of this solution). This agent is responsible for sending host metrics to New Relic.  

**Observability in New Relic post successful deployment**
 
***NewRelic Infrastructure Agent installation Logs***


![NewRelic Infrastructure Agent installation Logs](./images/nr_agent_installation_logs.png "EC2 Metrics")

The EC2 CloudFormation template has undergone testing to ensure successful deployment. It not only installs the New Relic Infrastructure Agent but also sends installation status of agent to New Relic logs.



***EC2 Metrics Dashboard in NewRelic***

![EC2 Metrics Dashboard](./images/ec2_metrics_from_agent.png "EC2 Metrics")


