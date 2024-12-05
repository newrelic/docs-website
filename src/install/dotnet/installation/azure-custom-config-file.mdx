---
componentType: default
optionType: deployment
headingText: Create custom config file
descriptionText: ""  
---

You can create a custom configuration file in Visual Studio. This allows you to make changes to `newrelic.config` inside Visual Studio, without having to remote into your Azure Role instance every time you make a change. Whenever you publish your app, the config file in Visual Studio is automatically uploaded to the remote host.

The choices you make with the installation wizard don't matter as installing locally doesn't affect your Azure development environment.

1. In Visual Studio, select the <DNT>**Solution Explorer**</DNT>, then open `NewRelicAgent_x64_XYZ.msi`.
2. Follow the steps to install the agent locally.
3. Next, import `newrelic.config` into your project: In <DNT>**Solution Explorer**</DNT> > <DNT>**Cloud Project**</DNT>, right-click the <DNT>**Web Role**</DNT>, then select <DNT>**Add**</DNT> > <DNT>**Existing Item**</DNT>. Navigate to `C:\\ProgramData\\New Relic\\.NET Agent` and select `newrelic.config`.
4. From `C:\\ProgramData\\New Relic\\.NET Agent`, edit `newrelic.cmd`.
5. In the `:INSTALL_NEWRELIC_AGENT` section, find this statement:

   ```batch
   IF $ERRORLEVEL% EQU 0 (
   ```
6. Add the following code as another statement inside the `IF` block, then save the file:

   ```batch
   copy /Y "%RoleRoot%\approot\newrelic.config" "%NR_HOME%" >> %RoleRoot%\nr.log
   ```

You can now edit the `newrelic.config` hosted in Visual Studio. Whenever you publish your app, the `copy` command will upload the config file to the remote host.
