---
title: No aparecen datos (Java)
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: Troubleshooting procedures if you do not see data for your app in the New Relic UI after installing the Java agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Después de generar tráfico para su aplicación y esperar unos minutos para que aparezcan los datos en la UI de New Relic, su aplicación Java no informa datos.

## Solución

Después de enviar una solicitud a su aplicación web, los datos deberían aparecer en la UI de APM en dos o tres minutos. Si no aparecen datos después de unos minutos:

1. Reinicie su servidor web.

2. Utilice [New Relic Diagnostics](/docs/agents/manage-apm-agents/troubleshooting/new-relic-diagnostics) para intentar identificar automáticamente el problema.

3. Verifique que el archivo `newrelic.jar` se haya instalado correctamente y que el argumento `-javaagent` se haya pasado correctamente a la JVM:

   1. Inicie su servidor web si aún no se está ejecutando.

   2. En su terminal o consola, ejecute el comando apropiado:

      Linux o Mac OS:

      ```
      ps -ef | grep java
      ```

      Ventanas:

      ```
      wmic process where "name='java.exe'" get ProcessID, Commandline /format:list
      ```

   3. Encuentre el proceso para el servicio que está intentando monitor y vea si el argumento `-javaagent` está presente:

      * Si ve un argumento `-javaagent` : El problema está en el inicio del agente o el agente no puede comunicarse a través de su firewall con [el rango de IP de nuestro recolector](/docs/using-new-relic/cross-product-functions/install-configure/networks).
      * Si no ve un argumento `-javaagent` : el argumento no se pasó a su JVM. Verifique su secuencia de comandos de inicio u otros recursos para asegurarse de que no haya nada que impida su aprobación. Para obtener más información sobre cómo pasar el argumento para su entorno, consulte [Incluir el agente de Java con un argumento JVM](/docs/agents/java-agent/installation/include-java-agent-jvm-argument).

   4. Si ninguna de las soluciones funciona, sigue leyendo.

4. Verifique que sus archivos `newrelic.jar` y `newrelic.yml` estén en el mismo [directorio](/docs/agents/manage-apm-agents/troubleshooting/find-agent-root-directory#java-agent). Si ha especificado una ubicación no predeterminada para el archivo de configuración utilizando la propiedad del sistema `newrelic.config.file` , asegúrese de que el archivo de configuración exista en esa ubicación y tenga el formato correcto.

5. [Genere un registro de nivel `finest` ](/docs/agents/java-agent/troubleshooting/generating-logs-troubleshooting)y compruebe si hay errores en el registro. En el caso de que no se pueda encontrar ningún archivo de registro, consulte [Sin archivo de registro (Java)](/docs/agents/java-agent/troubleshooting/no-log-file-java).

6. Consulte el registro del servidor de aplicaciones para detectar errores relacionados con New Relic agente de Java. Puede ver las páginas de resolución de problemas [Error arrancar agente de Java](/docs/agents/java-agent/troubleshooting/error-bootstrapping-new-relic-java-agent) y [Errores al iniciar el servidor de aplicaciones Java](/docs/agents/java-agent/troubleshooting/errors-starting-java-app-server) para ver ejemplos de errores observables en el registro del servidor de aplicaciones que impiden que los datos del agente de Java informen.

7. Verifique que su aplicación informe con el nombre esperado: en sus archivos de New Relic Logs, busque `"reporting to"` y luego seleccione el enlace en el mensaje. Por ejemplo:

   ```
   {"message":"Reporting to: https://rpm.newrelic.com/accounts/000/applications/000000"}
   ```

   Si está informando a [varios nombres de aplicaciones](/docs/apm/new-relic-apm/installation-configuration/using-multiple-names-app), busque varias líneas con este mensaje.

8. Si el enlace del mensaje no va a la aplicación esperada, asegúrese de que la configuración del nombre de su aplicación sea la misma tanto en `newrelic.yml` como en la configuración `web.xml` `display-name` .
