---
componentType: default
optionType: deployment
headingText: Install the agent
descriptionText: ""  
---

<Callout variant="tip">
  If you haven't already, you may want to [install the New Relic Infrastructure agent on your Elastic Beanstalk instances](/docs/infrastructure/install-infrastructure-agent/config-management-tools/configure-infrastructure-agent-aws-elastic-beanstalk/) for more details.
</Callout>

1. Create a `.ebextensions` folder at the root of your application and create a file named `newrelic-dotnet-agent-install.config`. (The exact filename isn't important, but it must have a `.config` extension).

2. Set `Copy to Output Directory` to `Copy if newer` for this file in your project, to ensure that it gets deployed with your application.

3. Based on the operating system for your .NET application, add the following content to the file:

   * Replace `YOUR_LICENSE_KEY` with your New Relic license key.
   * Replace `YOUR_APP_NAME` with your application name.

   <CollapserGroup>
     <Collapser
       id="elastic-beanstalk-windows"
       title="Windows"
     >
       ```yml
       packages:
         msi:
           # install the latest version of the New Relic .NET agent
           # To install a specific version, update the path to the msi
           dotnet: https://download.newrelic.com/dot_net_agent/latest_release/NewRelicDotNetAgent_x64.msi
       option_settings:
         aws:elasticbeanstalk:application:environment:
           CORECLR_ENABLE_PROFILING: "1"
           NEW_RELIC_LICENSE_KEY: "YOUR_LICENSE_KEY"
           NEW_RELIC_APP_NAME: "YOUR_APP_NAME"
       ```

       The <InlinePopover type="licenseKey"/> and app name aren't required environment variables; they [can be set in other ways](/docs/agents/net-agent/installation/net-agent-install-resources#env-variables).

       For more details on these variables, as well as correct values for other installation scenarios, please see [understanding .NET agent environment variables](/docs/apm/agents/net-agent/other-installation/understanding-net-agent-environment-variables/).
     </Collapser>

     <Collapser
       id="elastic-beanstalk-linux"
       title="Amazon Linux 2023"
     >
       ```yml
       commands:
         install_dotnet_agent:
           command: |
             sudo curl -o /etc/yum.repos.d/newrelic-dotnet-agent.repo https://download.newrelic.com/dot_net_agent/yum/newrelic-dotnet-agent.repo
             sudo yum -q makecache -y --disablerepo='*' --enablerepo='newrelic-dotnet-agent-repo'
             # this command installs the latest version of the dotnet agent.
             sudo yum install newrelic-dotnet-agent -y
             # to install a specific version, use something like the following:
             # sudo yum install newrelic-dotnet-agent-10.24.0-1.x86_64
       option_settings:
         aws:elasticbeanstalk:application:environment:
           CORECLR_ENABLE_PROFILING: "1"
           CORECLR_PROFILER: "{36032161-FFC0-4B61-B559-F6C5D41BAE5A}"
           CORECLR_NEWRELIC_HOME: "/usr/local/newrelic-dotnet-agent"
           CORECLR_PROFILER_PATH: "/usr/local/newrelic-dotnet-agent/libNewRelicProfiler.so"
           NEW_RELIC_LICENSE_KEY: "YOUR_LICENSE_KEY"
           NEW_RELIC_APP_NAME: "YOUR_APP_NAME"
       ```

       The <InlinePopover type="licenseKey"/> and app name aren't required environment variables; they [can be set in other ways](/docs/agents/net-agent/installation/net-agent-install-resources#env-variables).

       For more details on these variables, as well as correct values for other installation scenarios, please see [understanding .NET agent environment variables](/docs/apm/agents/net-agent/other-installation/understanding-net-agent-environment-variables/).
     </Collapser>
   </CollapserGroup>

4. Deploy your application using the latest version of the [AWS Toolkit for Visual Studio](https://aws.amazon.com/visualstudio/). You can also use the [AWS CLI](https://docs.aws.amazon.com/cli/) to deploy the application.

If your application is receiving traffic, data should appear within a few minutes. If it doesn't, see [No data appears](/docs/agents/net-agent/troubleshooting/no-data-appears-net).
