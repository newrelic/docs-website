---
title: Comprender las variables de entorno del agente .NET necesarias
tags:
  - Agents
  - NET agent
  - Other installation
freshnessValidatedDate: never
translationType: machine
---

Nuestro agente .NET es un generador de perfiles .NET CLR y se basa en las variables de entorno de su aplicación para conectar su aplicación .NET con New Relic. Para obtener más información sobre qué variables de entorno utiliza el agente .NET, consulte las secciones siguientes.

## Resumen de términos [#terms-overview]

A continuación se ofrecen algunos consejos para comprender los términos utilizados en esta página:

* ".NET Core" se refiere a las versiones de .NET (y aplicaciones creadas con y para versiones de .NET) 5.0 y superiores (solo ".NET"), así como a ..NET Core 2.0 a 3.1.
* "Generador de perfiles" se refiere al componente del agente que implementa la API de perfiles .NET. Cuando todo está configurado correctamente, CLR adjunta el generador de perfiles a su aplicación .NET. Luego, el generador de perfiles carga el resto del agente en la aplicación.

## Cómo utiliza el agente .NET las variables de entorno [#env-variables]

Nuestro agente .NET es un [generador de perfiles .NET CLR](https://learn.microsoft.com/en-us/dotnet/framework/unmanaged-api/profiling/profiling-overview) e implementa un subconjunto de la API de creación de perfiles .NET. [Ciertas variables de entorno](https://learn.microsoft.com/en-us/dotnet/framework/unmanaged-api/profiling/setting-up-a-profiling-environment) deben estar presentes en el entorno de un proceso .NET para indicarle al tiempo de ejecución de .NET que se debe perfilar el proceso y mediante qué generador de perfiles. El propio agente .NET utiliza variables de entorno adicionales para informarle dónde y cómo está instalado.

Para utilizar el agente .NET, necesitamos variables de entorno para:

* [Habilitar la creación de perfiles e identificar el generador de perfiles correcto](#enable)
* [Decirle al generador de perfiles dónde está el resto del agente](#agent)

### Variables para habilitar la creación de perfiles e identificar el generador de perfiles correcto [#enable]

Hay un conjunto de tres variables de entorno que se utilizan para indicarle al tiempo de ejecución de .NET si habilitar o no la creación de perfiles y qué generador de perfiles usar: `COR_ENABLE_PROFILING`, `COR_PROFILER` y `COR_PROFILER_PATH`. Los nombres de estas variables y el valor correcto de cada una dependen de si su aplicación está diseñada para .NET framework o .NET Core.

#### Para la aplicación framework .NET:

`COR_ENABLE_PROFILING` le dice al tiempo de ejecución si habilitar o no la creación de perfiles para una aplicación. Establezca en 1 para habilitar la creación de perfiles, establezca en 0 para deshabilitarla.

`COR_PROFILER` le dice al tiempo de ejecución qué generador de perfiles usar. El valor es un GUID exclusivo de un generador de perfiles determinado. Para el generador de perfiles de New Relic para .NET framework, el valor correcto es `{71DA0A04-7777-4EC6-9643-7D28B46A8A41}`.

`COR_PROFILER_PATH` le indica al motor de ejecución dónde encontrar el generador de perfiles en el sistema y depende del tipo de instalación y la plataforma. Tenga en cuenta que esto puede no ser necesario si el agente se instaló con el instalador MSI, que registra la DLL del generador de perfiles con el sistema según el GUID establecido en `COR_PROFILER`. Sin embargo, es seguro configurarlo de todos modos siempre que el valor esté establecido en la ruta correcta.

Valores típicos:

```ini
COR_ENABLE_PROFILING=1
COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
COR_PROFILER_PATH="C:\Program Files\New Relic\.NET Agent\netframework\NewRelic.Profiler.dll"
```

#### Para la aplicación .NET Core:

`CORECLR_ENABLE_PROFILING` le dice al tiempo de ejecución si habilitar o no la creación de perfiles para una aplicación. Establezca en 1 para habilitar la creación de perfiles, establezca en 0 para deshabilitarla.

`CORECLR_PROFILER` le dice al tiempo de ejecución qué generador de perfiles usar. El valor es un GUID exclusivo de un generador de perfiles determinado. Para el generador de perfiles de New Relic para .NET Core, el valor correcto es `{36032161-FFC0-4B61-B559-F6C5D41BAE5A}`.

`CORECLR_PROFILER_PATH` le dice al tiempo de ejecución dónde encontrar el generador de perfiles en el sistema.

Valores típicos:

```ini
CORECLR_ENABLE_PROFILING=1
CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
CORECLR_PROFILER_PATH="C:\Program Files\New Relic\.NET Agent\netcore\NewRelic.Profiler.dll"
```

Nota: El comportamiento del generador de perfiles del agente .NET difiere ligeramente entre .NET framework y .NET Core. Para .NET framework, incluso cuando la creación de perfiles está habilitada en el entorno de un proceso de .NET framework , el agente solo la instrumentará si se cumple una de las siguientes condiciones:

* La aplicación está alojada en IIS (a) los grupos de aplicaciones están configurados para instrumentarse de forma predeterminada, o (b) el grupo de aplicaciones que aloja la aplicación está configurado para instrumentarse explícitamente.
* La aplicación está configurada explícitamente para instrumentarse en el archivo `newrelic.config` de todo el sistema.
* `AgentEnabled="true"` está configurado en un archivo `newrelic.config` local de la aplicación

Sin embargo, para el agente .NET, cualquier proceso en el que `CORECLR_ENABLE_PROFILING` esté establecido en 1 en su entorno será instrumentado por el agente. Por lo tanto, no recomendamos configurar esta variable de entorno en `1` en todo el sistema, ya que puede provocar un consumo excesivo de recursos del sistema y/o que se envíen más datos a New Relic de lo esperado. En su lugar, establezca esta variable únicamente en `1` en el entorno de los procesos que desea instrumentar.

### Variables para indicarle al generador de perfiles dónde está el resto del agente .NET [#agent]

Ahora que el tiempo de ejecución de .NET sabe cómo encontrar el generador de perfiles y adjuntarlo a su aplicación, se necesitan otras variables de entorno para encontrar el resto de los activos del agente, que incluyen componentes binarios (DLL) y de configuración (XML). Estas variables también son utilizadas por partes del resto del agente.

Nota: Dependiendo de su escenario de instalación, solo se requieren algunas de estas variables.

#### `NEWRELIC_HOME`

Esta variable:

* solo se usa en la versión .NET framework del agente
* se utiliza para encontrar los activos de configuración del agente (`newrelic.config` y los archivos XML de instrumentación en la subcarpeta `extensions` )
* Se puede utilizar para encontrar los activos binarios del agente, si están instalados en el mismo lugar que los activos de configuración.

Nota: Cuando el agente se instala con el instalador MSI, es posible que no sea necesario configurar esta variable, ya que MSI también establece una clave de registro (`HKEY_LOCAL_MACHINE\Software\New Relic\.NET Agent\NewRelicHome`) con el valor correcto. La variable de entorno tiene prioridad si se establece.

#### `CORECLR_NEWRELIC_HOME`

Esta variable es:

* Solo se utiliza en la versión .NET Core del agente.
* Se utiliza para buscar los recursos de configuración del agente (`newrelic.config` y los archivos XML de instrumentación en la subcarpeta `extensions` )
* Se puede utilizar para encontrar los activos binarios del agente, si están instalados en el mismo lugar que los activos de configuración.

Nota: Esta variable siempre debe configurarse para la versión .NET Core del agente.

#### `NEWRELIC_INSTALL_PATH`

Esta variable se utiliza principalmente:

* Cuando las versiones .NET y .NET Core del agente están instaladas en paralelo en el sistema
* Cuando los componentes binarios del agente están instalados en una ubicación diferente en el sistema que los activos de configuración
* Cuando el agente se instala con el instalador MSI en Windows (que hace las dos cosas anteriores)

Esta variable se establece en un directorio/carpeta y el generador de perfiles la utiliza para encontrar el agente `Core.dll`. Si la ruta especificada en esta variable contiene el archivo `NewRelic.Agent.Core.dll` , se utiliza. Si no se encuentra el `Core.dll` , el generador de perfiles agrega `netframework` o `netcore` a la ruta especificada y busca el `Core.dll` en esa ubicación. Si aún no se encuentra `Core.dll`, el generador de perfiles vuelve a buscar en `NEWRELIC_HOME` (.NET framework) o `CORECLR_NEWRELIC_HOME` (.NET Core).

El agente también utiliza esta variable para cargar los archivos binarios de la extensión de instrumentación desde la subcarpeta `extensions` . El agente siempre agrega `netframework` o `netcore` al valor de esta variable cuando está configurada. Si no está configurado, el agente vuelve a buscar en `NEWRELIC_HOME\extensions` (.NET framework) o `CORECLR_NEWRELIC_HOME\extensions` (.NET Core).

### Valores para escenarios de instalación típicos

#### Instalador MSI (Windows)

MSI es fácil de usar porque hace casi todo automáticamente, pero lo que hace detrás de escena es complicado. El instalador de MSI coloca diferentes partes del agente en diferentes lugares del sistema. De forma predeterminada, coloca los activos del agente binario en `C:\Program Files\New Relic\.NET Agent` y coloca los activos de configuración en `C:\ProgramData\New Relic\.NET Agent`. Esto es para admitir escenarios en los que un usuario sin privilegios puede acceder/editar archivos en `ProgramData` pero no en `Program Files`. El instalador MSI instala las versiones Core y framework del agente en paralelo. El instalador MSI también establece una serie de claves de registro que hacen innecesaria la configuración explícita de algunas de las variables de entorno requeridas, como se explicó anteriormente.

Suponiendo que no especifica una ruta de instalación personalizada cuando utiliza el instalador MSI, estos son los valores correctos de las variables de entorno:

##### Para la aplicación framework .NET:

```ini
COR_ENABLE_PROFILING=1
COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
COR_PROFILER_PATH="C:\Program Files\New Relic\.NET Agent\netframework\NewRelic.Profiler.dll" # may not be necessary due to profiler being registered with the system
NEWRELIC_INSTALL_PATH="C:\Program Files\New Relic\.NET Agent"
NEWRELIC_HOME="C:\ProgramData\New Relic\.NET Agent" # may not be necessary due to registry key being set
```

##### Para la aplicación .NET Core:

```ini
CORECLR_ENABLE_PROFILING=1
CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
CORECLR_PROFILER_PATH="C:\Program Files\New Relic\.NET Agent\netcore\NewRelic.Profiler.dll"
NEWRELIC_INSTALL_PATH="C:\Program Files\New Relic\.NET Agent"
CORECLR_NEWRELIC_HOME="C:\ProgramData\New Relic\.NET Agent"
```

#### Archivo ZIP (Windows)

El archivo ZIP del agente para Windows contiene las versiones framework y Core del agente en directorios en paralelo. Reemplace `CUSTOM_AGENT_PATH` con la ruta donde descomprima el archivo en su sistema.

##### Para la aplicación framework .NET:

```ini
COR_ENABLE_PROFILING=1
COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
COR_PROFILER_PATH="CUSTOM_AGENT_PATH\netframework\NewRelic.Profiler.dll"
NEWRELIC_HOME="CUSTOM_AGENT_PATH\netframework"
```

##### Para la aplicación .NET Core:

```ini
CORECLR_ENABLE_PROFILING=1
CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
CORECLR_PROFILER_PATH="CUSTOM_AGENT_PATH\netcore\NewRelic.Profiler.dll"
CORECLR_NEWRELIC_HOME="CUSTOM_AGENT_PATH\netcore"
```

#### Paquetes de Linux

El paquete de instalación de Linux (.deb o .rpm, según corresponda para su distribución de Linux) instala el agente .NET para .NET Core. De forma predeterminada, instala todo en `/usr/local/newrelic-dotnet-agent`.

```ini
CORECLR_ENABLE_PROFILING=1
CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
CORECLR_PROFILER_PATH="/usr/local/newrelic-dotnet-agent/libNewRelicProfiler.so"
CORECLR_NEWRELIC_HOME="/usr/local/newrelic-dotnet-agent"
```

También hay un archivo `.tar.gz` del agente para instalación manual en Linux. En ese caso, reemplace `/usr/local/newrelic-dotnet-agent` con el lugar donde descomprima el archivo en su sistema en las variables anteriores.

#### Paquete NuGet NewRelic.Agent

Cuando se agrega al proyecto de su aplicación, el paquete NewRelic.Agent NuGet agrega el agente a un subdirectorio `newrelic` de su aplicación. Se agrega la versión correcta del agente para .NET framework o .NET Core según el tipo de aplicación. Se agregan los perfiladores para Windows y Linux, incluidas las versiones de 64 y 32 bits del generador de perfiles de Windows y las versiones x64 y arm64 del generador de perfiles de Linux. Al usar `<YOUR_APPLICATION_PATH>` como marcador de posición para cualquier lugar donde se despliegue su aplicación en el sistema, estos son los valores correctos de las variables de entorno.

##### Para aplicaciones .NET framework (64 bits):

```ini
COR_ENABLE_PROFILING=1
COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
COR_PROFILER_PATH="<YOUR_APPLICATION_PATH>\newrelic\NewRelic.Profiler.dll"
NEWRELIC_HOME="<YOUR_APPLICATION_PATH>\newrelic"
```

##### Para la aplicación .NET framework (32 bits):

```ini
COR_ENABLE_PROFILING=1
COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
COR_PROFILER_PATH="<YOUR_APPLICATION_PATH>\newrelic\x86\NewRelic.Profiler.dll"
NEWRELIC_HOME="<YOUR_APPLICATION_PATH>\newrelic"
```

##### Para la aplicación .NET Core (Windows):

```ini
CORECLR_ENABLE_PROFILING=1
CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
CORECLR_PROFILER_PATH="<YOUR_APPLICATION_PATH>\newrelic\NewRelic.Profiler.dll"
CORECLR_NEWRELIC_HOME="<YOUR_APPLICATION_PATH>\newrelic"
```

##### Para aplicaciones .NET Core (Linux, x64):

```ini
CORECLR_ENABLE_PROFILING=1
CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
CORECLR_PROFILER_PATH="<YOUR_APPLICATION_PATH>/newrelic/libNewRelicProfiler.so"
CORECLR_NEWRELIC_HOME="<YOUR_APPLICATION_PATH>/newrelic"
```

##### Para la aplicación .NET Core (Linux, arm64):

```ini
CORECLR_ENABLE_PROFILING=1
CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
CORECLR_PROFILER_PATH="<YOUR_APPLICATION_PATH>/newrelic/linux-arm64/libNewRelicProfiler.so"
CORECLR_NEWRELIC_HOME="<YOUR_APPLICATION_PATH>/newrelic"
```
