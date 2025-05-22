---
componentType: default
optiontype: task
headingText: Migrate to the CloudWatch Metric Streams integration
---

You can migrate from API polling by creating a CloudFormation template, or by re-adding your AWS account and following our in-app guided install procedures. We recommend that you use the CloudFormation template method, as it's the most efficient way to migrate. These integrations are not supported by CloudWatch Metric Streams and can't be migrated to our integration:

    * AWS CloudTrail
    * AWS Health
    * AWS Trusted Advisor
    * AWS X-Ray

If you use these integrations, you still need to use the API polling method. 

<CollapserGroup>
    <Collapser
        id="with-template"
        title="Migrate with CloudFormation template (Recommended)"
    >

The CloudFormation template allows you to update a template with preconfigured namespaces based on your polling configuration. 

    1. Go to **[one.newrelic.com > Infrastructure > AWS](https://one.newrelic.com/infra/infrastructure/cloud-aws)**, then click **<DNT>Migrate to CloudWatch Metric stream</DNT>**. 
    1. Follow the procedures. You'll download the template, then replicate the namespaces from API polling. Be sure to add your account details to the downloaded template.
    1. From AWS Console, go to <DNT>**Cloud Formation > Create Stack > Upload a template file**</DNT>. Upload your updated CloudFormation template. 

    </Collapser>
    <Collapser
        id="without-template"
        title="Migrate without CloudFormation template"
    >

If you don't want to use the CloudFormation method, you need to re-add your AWS account even if you've already linked your AWS account with polling integrations. These procedures may have you leave this doc, but remember to return to disable your polling integrations. 

    1. Go to <DNT>**[one.newrelic.com > All capabilities >Infrastructure > AWS](https://one.newrelic.com/infra/infrastructure/cloud-aws)**</DNT>, then click <DNT>**Add AWS account**</DNT>. Choose your method.  
    1. Follow the AWS Console steps from the [AWS Console flow](/install/aws-cloudwatch/?task=console) in this doc. 
    1. [Disable all unnecessary polling integrations](/docs/infrastructure/amazon-integrations/connect/uninstall-aws/) in the previous AWS provider account. 

When disabling, keep in mind that [some integrations are not supported by CloudWatch Metric Streams](/docs/infrastructure/amazon-integrations/connect/connect-aws-new-relic-infrastructure-monitoring/).
    </Collapser>
</CollapserGroup>

Our CloudWatch Metric Streams integration uses the Metric API to push metrics in the [dimensional metric](/docs/data-apis/understand-data/new-relic-data-types/#dimensional-metrics) format. Our API polling method, on the other hand, pushes metrics based on [events](/docs/data-apis/understand-data/new-relic-data-types/#events-new-relic). 

    * To assist in the transition, we provide a shimming mechanism that transparently lets you write queries in any format. These queries are processed as expected based on the source that's available, either from events to metrics or metrics to events. 
    * We recommend reviewing [some limitations](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/query-infrastructure-dimensional-metrics-nrql/#known-limitations) about the shimming mechanism that lets you use event-based queries with the CloudWatch Metric Stream integration.

After migrating, some of New Relic features that depend on your API polling data may behave differently:

* <DNT>**Dashboards**</DNT>: Custom dashboards that use poll-based AWS integration events will still work as expected.
* <DNT>**Alerts**</DNT>: Alert conditions that use poll-based AWS events will still work. We recommend adapting those to the dimensional metric format that uses NRQL as source.
* <DNT>**Entities**</DNT>: Your list of monitored entities might show duplicated entities for up to 24 hours.
* <DNT>**Attributes**</DNT>: Poll-based AWS integrations prefix collected resource tags with `label.`, while the AWS CloudWatch Metric Streams integration prefixes collected resource tags with `tags.`. If both integrations are enabled for the same AWS account, resource tags will appear under both prefixes when using the Event format.