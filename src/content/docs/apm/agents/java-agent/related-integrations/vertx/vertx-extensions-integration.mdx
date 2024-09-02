---
title: New Relic Java Instrumentation for Vert.x Extensions
tags:
  - nrlabs
  - nrlabs-data
  - apm
  - java
  - vertx
  - vert.x
  - sql
  - kafka
  - mssql
  - postgres
  - oracle
  - db2
  - cassandra
  - jdbc
  - redis
  - rabbitmq
  - rxjava
  - mongodb
  - reactive
  - coroutines
  - expert services
metaDescription: provides instrumentation for monitoring the Vert.x Cassandra, JDBCClient, Coroutines, Kafka, RxJava, SQL Clients, Redis, MongoDB, Reactive and Service Proxy.
freshnessValidatedDate: never
redirects:
  - /docs/more-integrations/java-integrations/vertx-extensions-integration
  - /docs/apm/agents/java-agent/third-party-integrations/vertx/vertx-extensions-integration
---

[Java Instrumentation for Vert.x Extensions](https://github.com/newrelic/newrelic-java-vertx-extensions/tree/main) provides instrumentation for monitoring Vert.x Cassandra, JDBCClient, Coroutines, Kafka, RxJava, SQL Clients, Redis, MongoDB, Reactive and Service Proxy.

## Install the Java agent

The Java APM Agent must be installed to configure the Java Vert.x extensions. Follow the instructions to [install the Java APM Agent](https://docs.newrelic.com/install/java/)

Once the Java APM Agent is installed and configured for your application, create an `extensions` folder under the `newrelic` directory if it doesn't already exist:

```bash
# Open your Java APM Agent installation location and create 'extensions' folder ( if it is not existing) 
cd path/to/newrelic
mkdir extensions
```

## Install and configure Java instrumentation for Vert.x Extensions [#install]

<Tabs>
  <TabsBar>
    <TabsBarItem id="curl">
      curl
    </TabsBarItem>

    <TabsBarItem id="powershell">
      Powershell
    </TabsBarItem>

    <TabsBarItem id="web">
      Web
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="curl">
      To install and configure the Java Instrumentation for Vert.x Extensions, follow these steps:

      * Update the Java APM agent's `extensions` folder location in the provided bash script.
      * Copy the updated commands to a bash script, `install_vertx_integration.sh`.
      * Run the script to integrate the Java instrumentation for Vert.x Extensions with New Relic APM.

      ```sh
      #!/bin/bash

      # Define variables
      apiUrl="https://api.github.com/repos/newrelic/newrelic-java-vertx-extensions/releases/latest"
      tempZipPath="/tmp/latest.zip"
      tempExtractPath="/tmp/Extracted"
      extensionsDir="/path/to/newrelic/extensions"

      # Retrieve the download URL for the latest release ZIP file
      downloadUrl=$(curl -s "$apiUrl" | grep -o "browser_download_url.*\.zip" | cut -d '"' -f 3)

      echo $downloadUrl

      # Check if the download URL is empty or invalid
      if [ -z "$downloadUrl" ]; then
          echo "Failed to retrieve download URL. Exiting."
          exit 1
      fi

      # Download the latest release ZIP file
      curl -L -o "$tempZipPath" "$downloadUrl"

      # Check if the ZIP file was downloaded successfully
      if [ ! -f "$tempZipPath" ]; then
          echo "Failed to download the ZIP file. Exiting."
          exit 1
      fi

      # Create a temporary extraction folder
      mkdir -p "$tempExtractPath"

      # Extract the contents of the ZIP file to the temporary folder
      unzip -q "$tempZipPath" -d "$tempExtractPath"

      # Check if the extraction was successful
      if [ $? -ne 0 ]; then
          echo "Failed to extract the ZIP file. Exiting."
          exit 1
      fi

      # Copy all .jar files to the Java APM Agent 'extensions' directory
      find "$tempExtractPath" -name "*.jar" -exec cp {} "$extensionsDir" \;

      # Clean up temporary files
      rm "$tempZipPath"
      rm -r "$tempExtractPath"

      echo "Installation completed successfully."
      ```
    </TabsPageItem>

    <TabsPageItem id="powershell">
      To install and configure the Java Instrumentation for Vert.x Extensions, follow these steps:

      * Update the Java APM agent's 'extensions' folder location in the provided powershell commands:

      ```sh
      # Define variables
      $apiUrl = "https://api.github.com/repos/newrelic/newrelic-java-vertx-extensions/releases/latest"
      $tempZipPath = "C:\Temp\latest.zip"
      $tempExtractPath = "C:\Temp\Extracted"
      $extensionsDir = "C:\Path\To\newrelic\extensions"

      # Download the latest release ZIP file from GitHub
      $response = Invoke-WebRequest -Uri $apiUrl
      $downloadUrl = ($response.Content | ConvertFrom-Json).assets[0].browser_download_url
      Invoke-WebRequest -Uri $downloadUrl -OutFile $tempZipPath

      # Extract the contents of the ZIP file to a temporary folder
      New-Item -ItemType Directory -Path $tempExtractPath -Force
      Expand-Archive -Path $tempZipPath -DestinationPath $tempExtractPath

      # Copy all .jar files to the Java APM Agent 'extensions' directory
      Get-ChildItem -Path $tempExtractPath -Filter "*.jar" | Copy-Item -Destination $extensionsDir

      # Clean up temporary files
      Remove-Item -Path $tempZipPath -Force
      Remove-Item -Path $tempExtractPath -Recurse -Force
      ```
    </TabsPageItem>

    <TabsPageItem id="web">
      From [Java Instrumentation for Vert.x Extensions Releases](https://github.com/newrelic/newrelic-java-vertx-extensions/releases/), download `vertx-instrumentation-vx.y.z.zip` to a temporary directory and unzip it. Copy all `jar` files to New Relic Java APM agent's `extensions` folder.
    </TabsPageItem>
  </TabsPages>
</Tabs>

## Verify your integration

After configuring the Java Instrumentation for Vert.x Extensions, you can visualize your application's Vert.x extensions transactions and traces directly within New Relic APM and Services.

## Reporting Integration Issues

If you encounter any issues with the Java Instrumentation for Vert.x Extensions, please report them on the [GitHub repository](https://github.com/newrelic/newrelic-java-vertx-extensions/issues). Your feedback helps us identify and address issues promptly, ensuring a smooth and reliable monitoring experience for Vert.x applications. Thank you for contributing to the improvement of our integration!
