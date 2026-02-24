---
title: 'Workflow Automation now generally available'
summary: 'Automate incident response, infrastructure management, and operational tasks with no-code workflows that connect New Relic with AWS, Azure, Slack, PagerDuty, and more.'
releaseDate: '2026-02-24'
learnMoreLink: 'https://docs.newrelic.com/docs/workflow-automation/introduction-to-workflow'
---

New Relic is excited to announce the general availability of Workflow Automation, a powerful feature that enables you to automate routine tasks and incident responses without writing code. Connect New Relic with AWS, Azure, Slack, PagerDuty, and custom HTTP APIs to build workflows that respond to alerts, manage infrastructure, and streamline operational tasks.

## Automate your operational workflows

Workflow Automation transforms how teams respond to incidents and manage infrastructure by embedding intelligent automation directly into your observability platform. Build workflows that automatically remediate issues, integrate with your existing tools, and execute complex automation logic—all without leaving New Relic.

## Key features

* **Versatile Triggers**: Start workflows from alert events, on-demand, or on a recurring schedule using cron expressions.

* **Drag-and-Drop Builder**: Chain actions, add conditional logic (if/else), and create loops without managing scripts or servers.

* **Pre-built templates**: Deploy ready-to-use workflows for common scenarios including Slack notifications, deployment rollbacks, EC2 auto-scaling, and more.

* **AWS, Azure & Tool Ecosystem**: Direct, secure integrations with AWS (EC2, Lambda, API Gateway), Azure, Slack, PagerDuty, and more.

* **NerdGraph (GraphQL) Integration**: Query and mutate your own New Relic data directly within workflows, enabling power users to make automation decisions based on their observability data.

* **Production-Safe Gates**: Add human-in-the-loop approvals. Require a "thumbs up" in Slack before scaling production infrastructure or rolling back a deployment.

* **Version control**: Automatically track workflow versions with the ability to pin specific versions for scheduled executions, ensuring stability while you iterate.

## Common use cases

* **Auto-Remediation**: Automatically restart services or resize EC2 instances when performance thresholds are breached—reducing MTTR without manual intervention.

* **Deployment Guardrails**: Trigger an automatic rollback if a deployment causes error rate spikes or performance degradation, protecting production stability.

* **Enriched Notifications**: Don't just send an alert—send a Slack message with captured log snippets, stack traces, and relevant context to accelerate troubleshooting.

* **Infrastructure Management**: Scale services on schedules, manage AWS and Azure resources, and execute runbooks automatically based on your operational needs.

## Pricing and availability

Workflow Automation is now generally available and included in the New Relic platform. Advanced executions and heavy data processing may contribute to your Advanced Compute usage. Start building today via the **Workflow Automation** menu in your All Capabilities.

Want to know more? Check out our [Workflow Automation documentation](/docs/workflow-automation/introduction-to-workflow).
