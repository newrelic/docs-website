---
componentType: default
optionType: docker
headingText: Configure Docker
descriptionText: ""
---

How you configure Docker to work with our .NET agent will depend on your setup. We'll give some example Docker files below but these are only examples. The Docker files are meant to accomplish the same things that our standard install procedures do.

Some notes about how to implement your Docker file:

* The .NET agent must be installed on the containers you want to monitor.
* The .NET agent must be installed and enabled at runtime.

<Callout variant="important">
  Note that Windows Nano Server images aren't supported.
</Callout>

### Example Windows dockerfile for .NET framework application using IIS [#example-windows-dockerfile-framework]

<Callout variant="important">
  For non-IIS hosted applications:

  * The `INSTALLLEVEL=50` switch must be used to set the [required environment variables](/docs/apm/agents/net-agent/configuration/net-agent-configuration/#net-framework-env-variables).
  * Enable the agent for your application using: [application config](/install/dotnet/?deployment=windowsInstallNonIis&docker=noDocker#app-config), [app name in newrelic.config](/install/dotnet/?deployment=windowsInstallNonIis&docker=noDocker#newrelic-config), or [a local newrelic.config](/install/dotnet/?deployment=windowsInstallNonIis&docker=noDocker#newrelic-config-local).
</Callout>

```dockerfile
FROM mcr.microsoft.com/dotnet/framework/aspnet

# Publish your application.
COPY YOUR_APP_TO_BE_PUBLISHED /inetpub/wwwroot

# Download the New Relic .NET agent installer
RUN [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12;\
 Invoke-WebRequest "https://download.newrelic.com/dot_net_agent/latest_release/NewRelicDotNetAgent_x64.msi"\
 -UseBasicParsing -OutFile "NewRelicDotNetAgent_x64.msi"

# Install the New Relic .NET agent
RUN Start-Process -Wait -FilePath msiexec -ArgumentList /i, "NewRelicDotNetAgent_x64.msi", /qn,\
 NR_LICENSE_KEY=INSERT_YOUR_LICENSE_KEY

# Remove the New Relic .NET agent installer
RUN Remove-Item "NewRelicDotNetAgent_x64.msi"

# Set your application name
ENV NEW_RELIC_APP_NAME=INSERT_YOUR_APP_NAME
```

### Example Windows dockerfile for .NET Core application [#example-windows-dockerfile-net-core]

```dockerfile
FROM mcr.microsoft.com/windows/servercore:ltsc2019

# Publish your application.
COPY INSERT_NAME_OF_APP_TO_BE_PUBLISHED /app

# Download the New Relic .NET agent installer
RUN powershell.exe [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12;\
 Invoke-WebRequest "https://download.newrelic.com/dot_net_agent/latest_release/NewRelicDotNetAgent_x64.msi"\
 -UseBasicParsing -OutFile "NewRelicDotNetAgent_x64.msi"

# Install the New Relic .NET agent
RUN powershell.exe Start-Process -Wait -FilePath msiexec -ArgumentList /i, "NewRelicDotNetAgent_x64.msi", /qn,\
 NR_LICENSE_KEY=INSERT_YOUR_LICENSE_KEY

# Remove the New Relic .NET agent installer
RUN powershell.exe Remove-Item "NewRelicDotNetAgent_x64.msi"

# Enable the agent
ENV CORECLR_ENABLE_PROFILING=1

# Set your application name
ENV NEW_RELIC_APP_NAME=INSERT_YOUR_APP_NAME

# windows/servercore images may not include the .NET Core SDK or runtime
RUN dotnet sdk/runtime installer

WORKDIR /app

ENTRYPOINT ["dotnet", ".\\INSERT_YOUR_APP_NAME.dll"]
```
