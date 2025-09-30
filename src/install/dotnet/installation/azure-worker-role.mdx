---
componentType: default
optionType: deployment
headingText: Instrument worker role
descriptionText: ""  
---

A `Worker` role is a non-web process run as an Azure Cloud Service. To instrument a `Worker` role, you must create [custom transactions](/docs/agents/net-agent/instrumentation/net-custom-transactions).

The .NET agent automatically instruments external calls and database calls, but it does not instrument default methods for transactions. Creating custom transactions solves this. After the `Worker` role starts up and the method executes, transaction data will appear in the APM <DNT>Summary</DNT> and <DNT>Transactions</DNT> pages under the [<DNT>Non-web</DNT> category](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions).

The NuGet installer automatically adds the `NewRelic.AppName` parameter to the application config. This appears as `<YOUR_WORKER_ROLE_NAME>.dll.config` in `E:\approot`.

The .NET agent also automatically instruments `WaWorkerHost.exe`. This is the name of the actual `Worker` role process.

<CollapserGroup>
  <Collapser
    id="custom-transactions"
    title="Custom instrumentation example for Worker role"
  >
    This is a custom instrumentation example for a `Worker` role. It creates a custom transaction named `ProcessMessage`. The transaction begins when the `ProcessMessage` method is entered, and it ends when the method returns.

    The following example uses `MyWorkerRole` as the `namespace`. If you do not specify a name, it will default to the Solution name.

    ```cs
    namespace MyWorkerRole
    {
        public class NotificationQueue
        {
            public bool ProcessMessage(Message message) {
                // code to process message
            }
        }
    }
    ```

    Here is the custom instrumentation file for the code:

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <extension xmlns="urn:newrelic-extension">
      <instrumentation>
        <tracerfactory name="NewRelic.Agent.Core.Tracer.Factories.BackgroundThreadTracerFactory" metricName="Custom/ProcessMessage">
          <match assemblyname="MyWorkerRole" classname="MyWorkerRole.NotificationQueue">
            <exactmethodmatcher methodName="ProcessMessage" />
          </match>
        </tracerfactory>
      </instrumentation>
    </extension>
    ```

    On a local installation, place this instrumentation file in `C:\ProgramData\New Relic\.NET Agent\Extensions`.
  </Collapser>

  <Collapser
    id="send-file"
    title="Custom instrumentation file deployment"
  >
    Optional: To send the custom instrumentation file up with an Azure Cloud Service deployment:

    1. In your Azure Cloud project, add the instrumentation file to your `Worker` role inside the `Roles` folder.
    2. After installing the New Relic .NET agent NuGet package, locate `newrelic.cmd` in your Worker Role project.
    3. Find the statement `IF %ERRORLEVEL% EQU 0` within the `:INSTALL_NEWRELIC_AGENT` block, and add the following statement to the conditional:

       ```batch
       IF %ERRORLEVEL% EQU 0 (
           copy /Y "%RoleRoot%\approot\MyInstrumentation.xml" "%NR_HOME%\extensions" >> %RoleRoot%\nr.log
       ) ELSE (
       ```

       In this example, the `newrelic.cmd` batch file copies the custom instrumentation file to the `Extensions` folder in `D:\ProgramData\New Relic\.NET Agent\`, or `%NR_HOME%`. This example uses `MyInstrumentation.xml`, but any name will work as long as the file name and copy command match, and the file is valid XML.
  </Collapser>
</CollapserGroup>
