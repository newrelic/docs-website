---
title: Java Vert.x Event Bus integration
tags:
  - nrlabs
  - nrlabs-data
  - apm
  - java
  - vertx
  - vert.x
  - eventbus
  - expert services
metaDescription: Provides instrumentation for monitoring the Vert.x Event Bus.
freshnessValidatedDate: never
redirects:
  - /docs/more-integrations/java-integrations/vertx-eventbus-integration
  - /docs/apm/agents/java-agent/third-party-integrations/vertx/vertx-eventbus-integration
---

[Java Vert.x Event Bus Integration](https://github.com/newrelic/newrelic-java-vertx/tree/main) provides instrumentation for monitoring the (Vert.x)[https://vertx.io/] Event Bus, enabling the tracking of event flow across the bus. Specifically designed for Vert.x Verticles that extend` AbstractVerticle`, this extension instruments each deployed class to monitor all methods except those specifically defined by `AbstractVerticle`.

## Supported methods

The integrations tracks or excludes metrics. Here's a list of each:

Tracked methods:

* Methods that facilitate event flow tracking
* Methods that enchance visibility into application behavior and performance.

Excluded methods:

* Specific lifecycle and configuration methods (`start`, `stop`, `rxStart`, `rxStop`, `config`, `deploymentID`, `getVertx`, `init`, `processArgs`)

## Install the Java agent

The Java APM agent must be installed to configure the Java Vert.x extensions. Follow the instructions to [install the Java APM Agent](https://docs.newrelic.com/install/java/).

Once the Java APM agent is installed and configured for your application,create an `extensions` folder under the `newrelic` directory if it doesn't already exist:

```bash
# Open your Java APM Agent installation location and create 'extensions' folder ( if it is not existing) 
cd path/to/newrelic
mkdir extensions
```

## Install and configure Java Vert.x Event Bus integration [#install]

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
      To install and configure the Java Vert.x Event Bus integration, follow these steps:

      * Update the Java APM agent's `extensions` folder location in the provided bash script.
      * Copy the updated commands to a bash script `install_vertx_integration.sh`.
      * Run the script to integrate the Java Vert.x Event Bus monitoring with New Relic APM.

      ```sh
      #!/bin/bash

      # Define variables
      apiUrl="https://api.github.com/repos/newrelic/newrelic-java-vertx/releases/latest"
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
      To install and configure the Java Vert.x Event Bus Integration, follow these steps:

      * Update the Java APM agent's 'extensions' folder location in the provided powershell commands.

      ```sh
      # Define variables
      $apiUrl = "https://api.github.com/repos/newrelic/newrelic-java-vertx/releases/latest"
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
      From [Java Vert.x Event Bus Integration Releases](https://github.com/newrelic/newrelic-java-vertx/releases/), download `vertx-instrumentation-vx.y.z.zip` to a temporary directory and unzip it. Copy all 'jar' files to New Relic Java APM agent's 'extensions' folder.
    </TabsPageItem>
  </TabsPages>
</Tabs>

## Verify your integration

After configuring the Java Vert.x Event Bus Integration, you can visualize your application's Vert.x Event Bus transactions and traces directly within New Relic APM and Services.

## Reporting Integration Issues

If you encounter any issues with the Java Vert.x Event Bus Integration, please report them on the [GitHub repository](https://github.com/newrelic/newrelic-java-vertx/issues). Your feedback helps us identify and address issues promptly, ensuring a smooth and reliable monitoring experience for Vert.x applications. Thank you for contributing to the improvement of our integration.
