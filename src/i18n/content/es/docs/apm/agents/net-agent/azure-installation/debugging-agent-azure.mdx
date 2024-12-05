---
title: Depuración del agente .NET en Azure Web Apps
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting tips to debug New Relic .NET agent in Azure Web Apps.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Después de [instalar el agente .NET de New Relic para Azure](/docs/apm/agents/net-agent/azure-installation/install-net-agent-azure-web-apps/), tiene uno o más de los siguientes problemas:

* No ves ningún dato.
* Observa que el nombre de la aplicación aparece en New Relic, pero faltan datos.

## Solución

Cosas importantes para verificar y comprender:

* Asegúrese de que [se hayan seguido los pasos de instalación y ejecución](/docs/apm/agents/net-agent/azure-installation/install-net-agent-azure-web-apps/).

* <DNT>
    **must**
  </DNT>

  [Deshabilitas la aplicación información valiosa](/docs/agents/net-agent/azure-troubleshooting/net-profiler-conflict-microsoft-application-insights/) para que el agente .NET funcione correctamente.

* A partir de la versión 8.22.181.0 del agente .NET, La configuración `Always On` de Azure se puede habilitar sin interferir con el agente. Si su aplicación tiene como objetivo .NET framework 4.0 o inferior, `Always On` interferirá con el agente y las soluciones alternativas [aquí](/docs/agents/net-agent/azure-troubleshooting/azure-web-apps-using-always-no-data-appears) aún son aplicables.

## Paso 1: Verifique el registro del agente de la aplicación [#step-one]

<Callout variant="important">
  Puede utilizar [Kudu](https://github.com/projectkudu/kudu/wiki) para comprobar el registro del agente, que es un sitio que se ejecuta en paralelo con su sitio web y proporciona varias herramientas que se pueden utilizar para examinar procesos, observar el sistema de archivos y descargar archivos y directorios.

  Si la URL de su sitio web es `example.azurewebsites.net`, entonces el sitio de Kudu es `example.scm.azurewebsites.net`. Utilice las credenciales desplegables de su sitio para log en el sitio de Kudu.
</Callout>

Consejos importantes al comprobar el registro:

* Al utilizar la extensión del sitio de Azure New Relic, suponiendo que su aplicación web de Azure utilice una raíz del sistema de archivos `D:`, la ubicación log de forma predeterminada es `D:\home\LogFiles\NewRelic`. Si su Azure Web usa una raíz `C:` , deberá usar la letra de unidad correcta.
* Si instaló el agente con el paquete NuGet `NewRelic.Agent` o `NewRelic.Azure.WebSites` , encontrará la carpeta `logs` en el directorio donde se extrajo el agente dentro de su proyecto. Suele ser la carpeta `newrelic` dentro de la carpeta `wwwroot` .

Para verificar el registro del agente:

1. Asegúrate de estar mirando los datos actuales. Elimine o mueva cualquier archivo existente en el directorio de registro para asegurarse de que el registro que genere refleje el estado actual de su sistema.

2. Reinicie su aplicación.

3. Ejercite su aplicación durante al menos unos minutos de una manera que genere el tráfico que esperaría ver en su cuenta de New Relic.

4. Tome nota del ID de proceso (PID) con el que se ejecuta su aplicación, para que pueda verificar si se está creando un log para ese proceso. Puede encontrar el PID utilizando el

   <DNT>
     **Process Explorer**
   </DNT>

   integrado de Kudu.

5. Vuelva al directorio de registro del agente y busque un archivo de registro con un nombre que contenga el ID del proceso de su aplicación, por ejemplo, `NewRelic.Profiler.[PID].log`.

6. Si ve ese generador de perfiles archivo de registro en el directorio de registro, verifique también si hay un log de agente correspondiente. El log del agente contiene el prefijo `newrelic_agent`. Si está ejecutando varias aplicaciones .NET en su host, es posible que haya más de una. Si ves uno o más debes determinar cuál corresponde a la aplicación que estás intentando monitor.

7. Busque en el log del agente la cadena `(pid [your PID])`, por ejemplo `(pid 1573)`. Si encuentra esa cadena en el archivo de registro, entonces sabrá que es el log del agente asociado con su aplicación.

8. Busque errores de red u otros errores que puedan provocar que el agente no envíe datos a New Relic.

## Paso 2: Verifique si el generador de perfiles del agente .NET está cargado en el proceso de la aplicación [#step-two]

Para comprobar si el generador de perfiles está cargado:

1. Utilice el Explorador de procesos integrado de Kudu para instalaciones de Windows. Para instalaciones de Linux, consulte los comandos de [este artículo](/docs/apm/agents/net-agent/troubleshooting/debugging-net-core-agent-linux/).

2. En

   <DNT>
     **Process Explorer**
   </DNT>

   , busque el proceso que está intentando monitor y anote el número en la columna PID. Si está intentando monitor una aplicación web, el nombre del proceso probablemente será `w3wp.exe` sin la etiqueta SCM, que hace referencia al proceso Kudu en sí. El agente no debe intervenir en el proceso SCM (Kudu).

3. Cuando hayas localizado el proceso de tu aplicación, haz clic en el botón `Properties` .

4. Haga clic en la pestaña

   <DNT>
     **Modules**
   </DNT>

   y busque `NewRelic.Profiler.dll`. Esta DLL es necesaria para que el agente monitor su aplicación. Si no puede encontrarlo, asegúrese de que estén presentes las variables de entorno correctas (más sobre esto en [el paso 3](#step-three)) y de que [la aplicación Microsoft información valiosa esté deshabilitada](/docs/agents/net-agent/azure-troubleshooting/net-profiler-conflict-microsoft-application-insights/).

Si no ve `NewRelic.Profiler.dll`, continúe con el siguiente paso. Si ve esta DLL y la aplicación está recibiendo tráfico, debería ver el registro como se describe en [el paso 1](#step-one).

## Paso 3: Verifique las variables de entorno requeridas [#step-three]

Para verificar las variables de entorno requeridas:

1. En

   <DNT>
     **Process Explorer**
   </DNT>

   , ubique el proceso de su aplicación y haga clic en el botón `Properties` .

2. Seleccione la pestaña

   <DNT>
     **Environment**
   </DNT>

   .

Si se configuran las variables correctas y la aplicación que intenta monitor tiene acceso a ellas, debería ver un conjunto particular de variables de entorno, dependiendo de si el agente que ha instalado es .NET framework o .NET Core.

<Callout variant="important">
  Todos estos ejemplos suponen que su aplicación web de Azure utiliza una raíz del sistema de archivos `D:` . Si su Web de Azure usa una raíz `C:` , debe usar la letra de unidad correcta al configurar estas rutas.
</Callout>

<CollapserGroup>
  <Collapser
    id="env-var-framework-extension"
    title=".NET framework: verifique las variables de entorno al instalar a través de New Relic Azure Site Extension"
  >
    Las variables de entorno que aparecen en la pestaña <DNT>**Environment**</DNT> en <DNT>**Process Explorer**</DNT> de Kudu deberían ser similares a estas:

    ```ini
    COR_ENABLE_PROFILING = 1
    COR_PROFILER = {71DA0A04-7777-4EC6-9643-7D28B46A8A41}
    COR_PROFILER_PATH = D:\home\NewRelicAgent\Framework\NewRelic.Profiler.dll
    COR_PROFILER_PATH_32 = D:\home\NewRelicAgent\Framework\x86\NewRelic.Profiler.dll
    COR_PROFILER_PATH_64 = D:\home\NewRelicAgent\Framework\NewRelic.Profiler.dll
    NEWRELIC_HOME = D:\home\NewRelicAgent\Framework
    NEW_RELIC_LICENSE_KEY = YOUR_LICENSE_KEY
    NEW_RELIC_APP_NAME = YOUR_APP_NAME
    ```

    Si las variables de entorno no coinciden con lo que ve arriba, intente reinstalar la extensión New Relic Azure Site.

    <Callout variant="important">
      Para .NET framework, si la aplicación que desea monitor no está alojada en IIS (como un servicio de Windows autohospedado), debe habilitar explícitamente el agente para esa aplicación, como se indica en nuestros [documentos de instalación](/install/dotnet/?deployment=windowsInstallNonIis&docker=noDocker).
    </Callout>

    Si realizó algún cambio en las variables de entorno, asegúrese de reiniciar su aplicación a través del Portal de Azure. Luego, inspeccione el nuevo ID de proceso en Process Explorer para asegurarse de que los cambios se hayan realizado correctamente.
  </Collapser>

  <Collapser
    id="env-var-framework-nuget"
    title=".NET framework: verifique las variables de entorno al instalar a través de NuGet"
  >
    Para el paquete NuGet, las variables de entorno [deben agregarse como configuración de la aplicación](/docs/apm/agents/net-agent/azure-installation/install-net-agent-azure-web-apps/#nuget-install-net-framework).

    Las variables de entorno que aparecen en la pestaña <DNT>**Environment**</DNT> en <DNT>**Process Explorer**</DNT> de Kudu deberían ser similares a estas:

    ```ini
    COR_ENABLE_PROFILING = 1
    COR_PROFILER = {71DA0A04-7777-4EC6-9643-7D28B46A8A41}
    COR_PROFILER_PATH = D:\Home\site\wwwroot\newrelic\NewRelic.Profiler.dll
    NEWRELIC_HOME = D:\Home\site\wwwroot\newrelic
    NEW_RELIC_LICENSE_KEY = YOUR_LICENSE_KEY
    NEW_RELIC_APP_NAME = YOUR_APP_NAME
    ```

    Si las variables de entorno no coinciden con lo que ve arriba, puede intentar reinstalar la extensión New Relic Azure Site.

    <Callout variant="important">
      Para .NET framework, si la aplicación que desea monitor no está alojada en IIS (como un servicio de Windows autohospedado), debe habilitar explícitamente el agente para esa aplicación, como se indica en nuestros [documentos de instalación](/docs/apm/agents/net-agent/installation/install-net-agent-windows#enabling-the-agent).
    </Callout>

    Si realizó algún cambio en las variables de entorno, asegúrese de reiniciar su aplicación a través del Portal de Azure. Luego inspeccione el nuevo PID del proceso en <DNT>**Process Explorer**</DNT> para asegurarse de que los cambios se hayan realizado correctamente.
  </Collapser>

  <Collapser
    id="env-var-core-windows-extension"
    title=".NET Core (Windows): compruebe las variables de entorno cuando utilice la extensión del sitio New Relic Azure"
  >
    Las variables de entorno que aparecen en la pestaña <DNT>**Environment**</DNT> en <DNT>**Process Explorer**</DNT> de Kudu deberían ser similares a estas:

    ```ini
    CORECLR_ENABLE_PROFILING = 1
    CORECLR_PROFILER = {36032161-FFC0-4B61-B559-F6C5D41BAE5A}
    CORECLR_NEWRELIC_HOME = D:\home\NewRelicAgent\Core
    CORECLR_PROFILER_PATH_32 = D:\home\NewRelicAgent\Core\x86\NewRelic.Profiler.dll
    CORECLR_PROFILER_PATH_64 = D:\home\NewRelicAgent\Core\NewRelic.Profiler.dll
    NEW_RELIC_LICENSE_KEY = YOUR_LICENSE_KEY
    NEW_RELIC_APP_NAME = YOUR_APP_NAME
    ```
  </Collapser>

  <Collapser
    id="env-var-core-windows-nuget"
    title=".NET Core (Windows): busque variables de entorno cuando utilice el paquete NuGet"
  >
    Para el paquete NuGet, las variables de entorno [deben agregarse como configuración de la aplicación](/docs/apm/agents/net-agent/azure-installation/install-net-agent-azure-web-apps/#nuget-install-net-core). Las variables de entorno que aparecen en la pestaña <DNT>**Environment**</DNT> en <DNT>**Process Explorer**</DNT> de Kudu deberían ser similares a estas:

    ```ini
    CORECLR_ENABLE_PROFILING = 1
    CORECLR_PROFILER = {36032161-FFC0-4B61-B559-F6C5D41BAE5A}
    CORECLR_PROFILER_PATH_32 = D:\Home\site\wwwroot\newrelic\x86\NewRelic.Profiler.dll
    CORECLR_PROFILER_PATH_64 = D:\Home\site\wwwroot\newrelic\NewRelic.Profiler.dll
    CORECLR_NEWRELIC_HOME = D:\Home\site\wwwroot\newrelic
    NEW_RELIC_LICENSE_KEY = YOUR_LICENSE_KEY
    NEW_RELIC_APP_NAME = YOUR_APP_NAME
    ```

    Asegúrese de que el nodo log de su archivo `newrelic.config` incluya un atributo de directorio. Si Visual Studio le impide editar el archivo `newrelic.config` que NuGet agregó a su proyecto, debe hacer una copia local de este en su aplicación:

    ```xml
    <log directory="D:\Home\LogFiles\NewRelic" level="info"></log>
    ```

    Si no agregó este atributo de directorio al archivo de configuración, puede usar la configuración de la aplicación: `NEWRELIC_LOG_DIRECTORY=D:\Home\LogFiles\NewRelic`
  </Collapser>

  <Collapser
    id="env-var-core"
    title=".NET Core (Linux): compruebe las variables de entorno cuando utilice el paquete NuGet"
  >
    Para el paquete NuGet, las variables de entorno [deben agregarse como configuración de la aplicación](/docs/apm/agents/net-agent/azure-installation/install-net-agent-azure-web-apps/#nuget-install-net-core).

    Las variables de entorno que aparecen en la pestaña <DNT>**Environment**</DNT> en <DNT>**Process Explorer**</DNT> de Kudu deberían ser similares a estas:

    ```env
    CORECLR_ENABLE_PROFILING = 1
    CORECLR_PROFILER = {36032161-FFC0-4B61-B559-F6C5D41BAE5A}
    CORECLR_PROFILER_PATH = /home/site/wwwroot/newrelic/libNewRelicProfiler.so
    CORECLR_NEWRELIC_HOME = /home/site/wwwroot/newrelic
    NEW_RELIC_LICENSE_KEY = YOUR_LICENSE_KEY
    NEW_RELIC_APP_NAME = YOUR_APP_NAME
    ```

    Asegúrese de que el nodo <DNT>**log**</DNT> de su archivo `newrelic.config` incluya un atributo de directorio. Si Visual Studio le impide editar el archivo `newrelic.config` que NuGet agregó a su proyecto, debe hacer una copia local de este en su aplicación:

    ```xml
    <log directory="/home/LogFiles/NewRelic" level="info"></log>
    ```

    Si no agregó este atributo de directorio al archivo de configuración, puede usar la configuración de la aplicación: `NEWRELIC_LOG_DIRECTORY=/home/LogFiles/NewRelic`
  </Collapser>
</CollapserGroup>

Para obtener más información sobre estas variables de entorno y su funcionalidad, consulte cómo [comprender las variables de entorno del agente .NET](/docs/apm/agents/net-agent/other-installation/understanding-net-agent-environment-variables/).

Si el nombre de la aplicación aparece en New Relic, pero no aparece ninguna transacción, es probable que no haya tráfico llegando a la aplicación o que el agente no encuentre un framework conocido que pueda implementar automáticamente:

* Para marcos .NET framework instrumentados automáticamente, consulte nuestra [página de compatibilidad](/docs/apm/agents/net-agent/getting-started/net-agent-compatibility-requirements-net-framework/).
* Para conocer el marco .NET Core instrumentado automáticamente, consulte nuestra [página de compatibilidad](/docs/apm/agents/net-agent/getting-started/net-agent-compatibility-requirements-net-core/).
* Si su aplicación no utiliza uno de esos marcos de aplicaciones compatibles, es posible que deba implementar [instrumentación personalizada](/docs/apm/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation/) para indicarle al agente qué partes de su aplicación son importantes para el monitoreo y cuál constituye el alcance de una transacción.

Si los pasos anteriores no le ayudaron a solucionar sus problemas, le recomendamos que se comunique con el soporte o solicite ayuda en [nuestro Foro de soporte](https://discuss.newrelic.com/tag/dotnetagent).
