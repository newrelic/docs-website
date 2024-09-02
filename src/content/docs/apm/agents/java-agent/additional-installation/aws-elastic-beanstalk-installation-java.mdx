---
title: AWS Elastic Beanstalk installation for Java
tags:
  - Agents
  - Java agent
  - Additional installation
metaDescription: Directions for installing the New Relic Java agent with Elastic Beanstalk.
redirects:
  - /docs/agents/java-agent/additional-installation/aws-elastic-beanstalk-installation-java
  - /docs/general/using-new-relic-with-aws-elastic-beanstalk
  - /docs/java/using-new-relic-with-aws-elastic-beanstalk
  - /docs/java/elastic-beanstalk-installation-for-java
  - /docs/agents/java-agent/frameworks/aws-elastic-beanstalk-installation-java
freshnessValidatedDate: never
---

If you are an [<DNT>AWS Elastic Beanstalk</DNT>](http://docs.amazonwebservices.com/elasticbeanstalk/latest/gsg/) user, the Java agent requires additional configuration.

## Prerequisites

Before completing the configuration, you must first:

* Create a supported [Amazon Web Services account](http://aws.amazon.com/elasticbeanstalk/).
* Create a [New Relic account](http://newrelic.com/signup).
* [Download and install the Java agent](/docs/agents/java-agent/installation/java-agent-manual-installation).

To complete Java agent installation on <DNT>AWS Elastic Beanstalk</DNT>, follow the steps for your platform:

## Tomcat platform

For applications deployed with the <DNT>AWS Elastic Beanstalk Tomcat</DNT> Platform:

1. In your WAR file, add the `newrelic.jar` and `newrelic.yml` files to `WEB-INF/lib/`.

2. Repackage and deploy your new WAR file as a new application or an update to a previous application.

3. Locate and connect to the underlaying EC2 instance. Once connected, find the path to `newrelic.jar` file using this command - ensure you search one directory at a time. Use either `/var` or `/usr` as appropriate.

   ```sh
   sudo find /var -name "newrelic.jar"
   sudo find /usr -name "newrelic.jar"
   ```

   To pass the `-javaagent` flag to the JVM:

4. In the AWS console, open the Elastic Beanstalk.

5. Select the relevant region.

6. Select your environment.

7. In the left pane, select <DNT>**Configurations**</DNT>.

8. Scroll to <DNT>**Updates, monitoring, and logging**</DNT> and select <DNT>**Edit**</DNT> in the upper right corner.

9. Scroll to <DNT>**Platform Software**</DNT> and add the following line to the <DNT>**JVM Options**</DNT> field:

   ```sh
   -javaagent:/full/path/to/newrelic.jar
   ```

10. Select <DNT>**Apply**</DNT> to save.

Your <DNT>Elastic Beanstalk</DNT> will then update your environment.

## Java SE Platform

For applications deployed with the <DNT>AWS Elastic Beanstalk Java SE</DNT> Platform:

1. Add the `newrelic.jar` and `newrelic.yml` files to your project, such in a subdirectory named `opt/newrelic`.

2. To use custom JVM arguments with your Java SE application, we recommend that you include a `Procfile` at the root of the source bundle of your application. See [Java SE documentation](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/java-se-platform.html) for details.

   Pass the `-javaagent` flag as a JVM argument in the `Procfile`:

   ```makefile
   web:java -javaagent:path/from/bundle/root/to/newrelic.jar -jar <your-application>.jar
   ```

3. Repackage and deploy the source bundle to your Elastic Beanstalk.
