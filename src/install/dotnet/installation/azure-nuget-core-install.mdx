---
componentType: default
optionType: deployment
headingText: Install using NuGet (.NET Core)
descriptionText: ""  
---

The NuGet installation method packages the New Relic agent with your application so that it is available to the Azure Web App Host.

Our .NET agent supports .NET Core Linux and Windows applications on Azure App Services. The installation process for Azure App Services differs from those for Linux and Windows.

To install the .NET agent on an Azure Web App using NuGet:

1. Install the `NewRelic.Agent` NuGet package.
2. Modify the <DNT>**log**</DNT> node by adding a directory attribute to your `newrelic.config` file (<DNT>**Note:**</DNT> If Visual Studio prevents you from editing the `newrelic.config` file that was added to your project by NuGet then you will need to make a local copy of this in your application):

   <CollapserGroup>
     <Collapser
       id="log-windows"
       title="Log file configuration for Windows"
     >
       ```xml
       <log directory="D:\Home\LogFiles\NewRelic" level="info"></log>
       ```

       <Callout variant="tip">
         If you don't want to modify the config file, add a new application setting: `NEWRELIC_LOG_DIRECTORY=D:\Home\LogFiles\NewRelic`
       </Callout>
     </Collapser>

     <Collapser
       id="log-linux"
       title="Log file configuration for Linux"
     >
       ```xml
       <log directory="/home/LogFiles/NewRelic" level="info"></log>
       ```

       <Callout variant="tip">
         If you don't want to modify the config file, add a new application setting: `NEWRELIC_LOG_DIRECTORY=/home/LogFiles/NewRelic`
       </Callout>
     </Collapser>
   </CollapserGroup>
3. Publish your application.
4. In the Azure portal, open the web app you want to monitor, then select <DNT>**Settings > Configuration**</DNT>.
5. From <DNT>**Configuration**</DNT>, select <DNT>**+ New application setting**</DNT> and add these key/value pairs.

   <Callout variant="important">
     These examples all assume that your Azure Web App uses a `D:` file system root. If your Azure Web uses a `C:` root, you need to use the correct drive letter when configuring these paths.
   </Callout>

   <CollapserGroup>
     <Collapser
       id="nuget-windows"
       title="Environment variables for Windows"
     >
       <table>
         <thead>
           <tr>
             <th width={250}>
               Key
             </th>

             <th>
               Value
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               `CORECLR_ENABLE_PROFILING`
             </td>

             <td>
               `1`
             </td>
           </tr>

           <tr>
             <td>
               `CORECLR_PROFILER`
             </td>

             <td>
               `{36032161-FFC0-4B61-B559-F6C5D41BAE5A}`
             </td>
           </tr>

           <tr>
             <td>
               `CORECLR_PROFILER_PATH_32`
             </td>

             <td>
               `D:\Home\site\wwwroot\newrelic\x86\NewRelic.Profiler.dll`
             </td>
           </tr>

           <tr>
             <td>
               `CORECLR_PROFILER_PATH_64`
             </td>

             <td>
               `D:\Home\site\wwwroot\newrelic\NewRelic.Profiler.dll`
             </td>
           </tr>

           <tr>
             <td>
               `CORECLR_NEWRELIC_HOME`
             </td>

             <td>
               `D:\Home\site\wwwroot\newrelic`
             </td>
           </tr>
         </tbody>
       </table>
     </Collapser>

     <Collapser
       id="nuget-linux"
       title="Environment variables for Linux"
     >
       <table>
         <thead>
           <tr>
             <th width={250}>
               Key
             </th>

             <th>
               Value
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               `CORECLR_ENABLE_PROFILING`
             </td>

             <td>
               `1`
             </td>
           </tr>

           <tr>
             <td>
               `CORECLR_PROFILER`
             </td>

             <td>
               `{36032161-FFC0-4B61-B559-F6C5D41BAE5A}`
             </td>
           </tr>

           <tr>
             <td>
               `CORECLR_PROFILER_PATH`
             </td>

             <td>
               `/home/site/wwwroot/newrelic/libNewRelicProfiler.so`
             </td>
           </tr>

           <tr>
             <td>
               `CORECLR_NEWRELIC_HOME`
             </td>

             <td>
               `/home/site/wwwroot/newrelic`
             </td>
           </tr>

           <tr>
             <td>
               `NEWRELIC_LOG_DIRECTORY`
             </td>

             <td>
               `/home/LogFiles/NewRelic`
             </td>
           </tr>
         </tbody>
       </table>
     </Collapser>
   </CollapserGroup>
6. In the Azure portal, add New Relic [app settings](#web-app-agent-settings) to your Azure App Service.
7. Restart your web app.
