---
title: Sin archivo de registro (Java)
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'How to ensure your New Relic Java agent has been configured to generate log files, by checking the log file directory, config files, and boot logs.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Su agente de Java New Relic no genera un archivo de registro.

## Solución

Asegúrese de que su agente de Java New Relic esté configurado para generar `newrelic_agent.log` archivos verificando lo siguiente:

<CollapserGroup>
  <Collapser
    id="no-log-file"
    title="Directorio de archivo de registro"
  >
    El agente de Java de New Relic almacena el archivo de registro en el directorio `logs` . El agente de Java crea este directorio en la misma ubicación utilizada para el `newrelic.jar` en el conmutador `-javaagent` . Si no puede encontrar `newrelic_agent.log`, asegúrese de que el proceso JVM tenga permisos para escribir en el directorio `logs` .

    La administración de permisos varía mucho según el entorno, así que trabaje con el administrador del sistema para verificar que esto no sea un problema. Si los permisos no son el problema, verifique que no haya personalizado la ubicación del directorio `logs` .

    <Callout variant="tip">
      Puede especificar un directorio y un nombre diferentes con las configuraciones `log_file_path` y `log_file_name` .
    </Callout>
  </Collapser>

  <Collapser
    id="config"
    title="Archivo de configuración"
  >
    Asegúrese de que el formato YAML en `newrelic.yml` sea válido utilizando un [validador YAML](http://yamllint.com/). Esta herramienta verifica que su YAML sea válido. También le ofrece una versión interpretada sin comentarios.

    Si su YAML no es válido, use un editor que mantenga espacios en las líneas, como Sublime Text. Esto le ayudará a realizar cambios en su `newrelic.yml` con la cantidad correcta de espacios.
  </Collapser>

  <Collapser
    id="bootlog"
    title="Logde arranque"
  >
    Puede iniciar su servidor de aplicaciones para que imprima en la consola. A continuación se muestran algunos ejemplos de dónde se almacena:

    * <DNT>**JBoss**</DNT>: `log/boot.log`

    * <DNT>**Glassfish**</DNT>: `domain-dir/logs/server.log`

    * <DNT>**Tomcat**</DNT>: `catalina.out` (si se especifica en `catalina.sh`) o `catalina.bat`

    * <DNT>**WebLogic**</DNT>:[`server_name.log`](http://docs.oracle.com/cd/E17904_01/web.1111/e13739/logging_services.htm#i1179712)

    * <DNT>**WebObjects**</DNT>: `/var/log/webobjects.log`

      Al iniciar su JVM, verifique que el registro generado muestre que el archivo `newrelic.jar` se abrió y que el agente de Java interpretó el archivo de configuración `newrelic.yml` . Si no se encuentra ningún archivo o no se abre correctamente, aparecerá en el registro.

      La carga exitosa del agente se verá así:

      ```
      Aug 29, 2017 15:02:49 -0700 NewRelic 1 INFO: Agent is using Logback
      Aug 29, 2017 15:02:49 -0700 NewRelic 1 INFO: Loading configuration file
      "/path/on/your/host/newrelic/.newrelic.yml"
      ```
  </Collapser>
</CollapserGroup>
