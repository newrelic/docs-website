---
title: 'Automated monitoring of EC2 instances with New Relic'
summary: 'Automate the monitoring of your AWS EC2 infrastructure with our EC2 quickstart solution. You can easily get started by deploying a CloudFormation template to install our infrastructure agent on your instances.'
releaseDate: '2023-08-08'
---

Our EC2 quickstart solution allows you to automate the monitoring of your AWS EC2 infrastructure. It provides enhanced monitoring of your EC2 instances and achieves deep observability within your AWS account.

To get started, deploy the [CloudFormation template](https://github.com/aws-quickstart/quickstart-ct-newrelic-one/blob/main/templates/EC2_Quickstart.yml). It automates the installation of our [infrastructure agent](https://docs.newrelic.com/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent) in existing EC2 instances (before this installation) and new ones (those created after this installation).

**Observability in New Relic after successful deployment**

**_New Relic infrastructure agent installation logs_**

![NewRelic infrastructure agent installation logs](/images/nr_agent_installation_logs.webp 'EC2 Metrics')

The EC2 CloudFormation template has undergone testing to ensure successful deployment. It not only installs the infrastructure agent but also sends the installation status of the agent as log data.

**_EC2 metrics dashboard in NewRelic_**

![EC2 Metrics Dashboard](/images/ec2_metrics_from_agent.webp 'EC2 Metrics')
