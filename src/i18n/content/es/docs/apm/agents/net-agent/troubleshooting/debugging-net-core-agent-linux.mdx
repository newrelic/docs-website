---
title: Depuración de .NET Core en Linux
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting tips to determine why your .NET Core application running on Linux isn't reporting to New Relic.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Después de instalar el agente .NET de New Relic en Linux, no ve ningún dato, nota que faltan datos o no ve ningún registro.

## Solución

<Callout variant="important">
  * Asegúrese de tener privilegios de administrador en su host para continuar
  * Asegúrese de que se hayan seguido los pasos de instalación y ejecución ([guía de instalación](/docs/agents/net-agent/installation/install-net-agent-linux))
</Callout>

## Paso 1: Verifique el registro del agente de la aplicación [#step-one]

<Callout variant="tip">
  * Si instaló nuestro agente para .NET Core o instaló cualquiera de los agentes con el paquete `NewRelic.Agent` NuGet, encontrará una carpeta `logs` en el directorio donde se extrajo el agente en su sistema.
  * En algunos métodos de instalación en Linux, el valor predeterminado es `/usr/local/newrelic-dotnet-agent` (versiones del agente 10.0.0 o superiores) o `/usr/local/newrelic-netcore20-agent` (versiones del agente 9.9.0 o inferiores).
</Callout>

1. Asegúrate de estar mirando los datos actuales. Elimine o mueva cualquier archivo existente en el directorio de registro para asegurarse de que el registro que genere refleje el estado actual de su sistema.
2. Reinicie su aplicación.
3. Ejercite su aplicación durante al menos un minuto de una manera que genere el tráfico que esperaría ver en su cuenta de New Relic.
4. Tome nota del ID de proceso (PID) con el que se ejecuta su aplicación para que pueda verificar si se está creando un log para ese proceso. Puede encontrar el PID utilizando cualquiera de los siguientes comandos a través de la línea de comando: `pidof dotnet` o `pidof the_process_name`.
5. Vuelva al directorio de registro del agente y busque un archivo de registro con un nombre que contenga el ID del proceso de su aplicación, por ejemplo `NewRelic.Profiler.[PID].log`.
6. Si ve ese archivo `profiler log` en el directorio de registro, verifique también si hay un log de agente correspondiente.
7. Busque otro archivo con el prefijo `newrelic_agent`. Puede haber más de uno de estos si está ejecutando varias aplicaciones .NET en su host. Si ves uno o más debes determinar cuál corresponde a la aplicación que estás intentando monitor.
8. Busque en el log del agente la cadena `(pid [your PID])`, por ejemplo `(pid 1573)`. Si encuentra esa cadena en el archivo de registro, entonces sabrá que es el log del agente asociado con su aplicación.

## Paso 2: Verifique si el generador de perfiles del agente está cargado en el proceso de la aplicación [#step-two]

En la consola, ejecute lo siguiente, reemplazando `pid` con su ID de proceso:

```bash
sudo cat /proc/PID/maps | grep "libNewRelicProfiler.so"
```

Según el resultado, esto es lo que debe hacer:

* Si no obtiene ningún resultado con ese comando, continúe con el siguiente paso.
* Si obtiene resultados, salte al [Paso 4](#step-four) (permisos).

## Paso 3: verifique las variables de entorno requeridas: [#step-three]

Ejecute lo siguiente, reemplazando `PID` con su ID de proceso.

```bash
xargs --null --max-args=1 < /proc/PID/environ | grep "CORECLR_"
```

Según el resultado, esto es lo que debe hacer:

* Si no obtiene resultados, configure sus [variables de entorno](https://discuss.newrelic.com/t/relic-solution-net-core-agent-required-environment-variables/68972), reinicie su aplicación y regrese al Paso 1.

* Si obtiene resultados, asegúrese de que las cuatro variables requeridas estén configuradas y tengan valores válidos:

  * `CORECLR_ENABLE_PROFILING`: Siempre debe establecerse en 1.
  * `CORECLR_PROFILER`: Siempre debe estar configurado en `{36032161-FFC0-4B61-B559-F6C5D41BAE5A}`.
  * `CORECLR_NEWRELIC_HOME`: debe establecerse en la ruta completa al directorio del agente para .NET Core (el directorio donde se encuentran `newrelic.config`, `libNewRelicProfiler.so` y el directorio de extensiones).
  * `CORECLR_PROFILER_PATH`: Debe establecerse en la ruta completa al archivo `libNewRelicProfiler.so`. Esto casi siempre es igual a `CORECLR_NEWRELIC_HOME` + `/libNewRelicProfiler.so`.

* Si realizó algún cambio en sus variables de entorno, reinicie su aplicación y regrese al [Paso 1](#step-one).

Para obtener más detalles sobre estas variables, consulte [Comprender las variables de entorno del agente .NET](/docs/apm/agents/net-agent/other-installation/understanding-net-agent-environment-variables/).

## Paso 4: Verifique los permisos [#step-four]

Verifique las siguientes tareas de permisos:

* Asegúrese de que el usuario bajo el cual se ejecuta el proceso de su aplicación tenga permisos de lectura/escritura/ejecución en el directorio donde se extrajo el agente .NET para .NET Core en su sistema (`CORECLR_NEWRELIC_HOME`) y en todos sus subdirectorios.
* Si realizó algún cambio, reinicie su aplicación y regrese al [Paso 1](#step-one).

Si los pasos anteriores no solucionaron el problema, le recomendamos que se comunique con el soporte para solicitar ayuda en [el Foro de soporte](https://discuss.newrelic.com/).
