---
title: Generar log para resolución de problemas el agente de infraestructura
type: troubleshooting
tags:
  - Infrastructure
  - Infrastructure monitoring troubleshooting
  - Troubleshoot logs
metaDescription: 'Enable verbose logging or smart verbose mode for the New Relic infrastructure agent, then collect about 3 to 5 minutes worth of data to help troubleshoot.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Cuando su agente de infraestructura resuelva los problemas, genere el registro `debug` durante unos minutos para encontrar e investigar errores. Esto puede ser útil para su propia resolución de problemas o cuando trabaja con New Relic Support.

<Callout variant="important">
  El registro detallado genera una gran cantidad de datos muy rápidamente. Cuando termine de generar el registro, asegúrese de configurar `level: info` (o menos) para reducir el consumo de espacio en disco y la ingesta de datos al reenviar el registro a New Relic.
</Callout>

Puede automatizar este proceso utilizando el comando `newrelic-infra-ctl` . Para obtener más información, consulte la [documentación sobre resolución de problemas binarios](/docs/infrastructure/install-configure-manage-infrastructure/manage-your-agent/troubleshoot-running-agent).

## Solución

Para generar `debug` archivo de registro es necesario editar su archivo de configuración. Para obtener un archivo de configuración de muestra que incluye todas las configuraciones aplicables, consulte la [plantilla de ejemplo](/docs/infrastructure/new-relic-infrastructure/configuration/infrastructure-config-file-template-newrelic-infrayml). Para generar un registro detallado:

<table>
  <thead>
    <tr>
      <th>
        Paso
      </th>

      <th>
        Trámites
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        1.
      </td>

      <td>
        Edite su archivo `newrelic-infra.yml` con la configuración de registro:

        ```
        log:
          level: debug
          file: /path/to/logfile.log
        ```

        1. Habilite el registro de depuración: [`level: debug`](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#logging-variables). (Si utiliza un agente de infraestructura en contenedores en CoreOS, consulte [las notas específicas del sistema](#system-notes)).
        2. Establezca [`file`](/docs/infrastructure/install-configure-infrastructure/configuration/infrastructure-configuration-settings#file) en una ubicación conveniente para el archivo de registro.
        3. [Reinicie el agente](/docs/infrastructure/new-relic-infrastructure/configuration/start-stop-restart-check-infrastructure-agent-status) para que note la nueva configuración.
      </td>
    </tr>

    <tr>
      <td>
        2.
      </td>

      <td>
        Deje que su host se ejecute con carga normal durante unos tres minutos para generar suficientes datos de registro.
      </td>
    </tr>

    <tr>
      <td>
        3.
      </td>

      <td>
        Restablezca su configuración predeterminada:

        1. Deshabilite el registro detallado configurando [`level: info`](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#level) en `newrelic-infra.yml`.
        2. Opcional: deshabilite el registro en un archivo personalizado eliminando la línea [`file`](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#file) de la sección `log` en `newrelic-infra.yml`.
        3. [Reinicie el agente](/docs/infrastructure/new-relic-infrastructure/configuration/start-stop-restart-check-infrastructure-agent-status) para que note la nueva configuración.
      </td>
    </tr>

    <tr>
      <td>
        4.
      </td>

      <td>
        Examine el archivo de registro en busca de errores.

        Si necesita enviar su archivo de registro al soporte New Relic :

        1. Incluye la línea en tu archivo de registro que contiene la versión del agente:

           ```
           New Relic infrastructure agent version X.YY.ZZZ
           ```

        2. Adjunte el archivo de registro a su ticket de soporte, junto con su `newrelic-infra.yml`.
      </td>
    </tr>
  </tbody>
</table>

### Modo detallado inteligente

A veces los errores no ocurren hasta que ha pasado bastante tiempo. Esto dificulta la depuración, porque normalmente los registros detallados solo se habilitan durante un período corto de tiempo; de lo contrario, habrá muchos registros de depuración. Por ejemplo, si se produce un error una hora después de que se haya iniciado el agente de infraestructura, obtener el registro de depuración alrededor del momento del error puede resultar complicado o poco práctico.

A partir del agente de infraestructura v1.9.0 o superior, puede utilizar el modo detallado inteligente para el registro. El modo detallado inteligente solo registra los mensajes de depuración más recientes después de que se haya registrado un error. Esto le permite dejar el modo detallado inteligente ejecutándose hasta que ocurra un error, sin registrar muchos mensajes de depuración irrelevantes y solo registrar los mensajes de depuración más recientes. (La cantidad de mensajes está determinada por su configuración).

Para obtener más información sobre el modo detallado inteligente, consulte los documentos [sobre el comportamiento de registro del agente de infraestructura](/docs/infrastructure/infrastructure-troubleshooting/troubleshoot-logs/infrastructure-agent-logging-behavior#smart-verbose-mode) y utilice la documentación [de configuración de infraestructura](/docs/infrastructure/install-configure-manage-infrastructure/configuration/infrastructure-configuration-settings#verbose) para obtener detalles sobre cómo habilitar el modo detallado inteligente.

### Reenvía el registro del agente a New Relic [#forward-logs-to-nr-logs]

El agente de infraestructura se puede configurar para [enviar su propio registro a New Relic](/docs/logs/new-relic-logs/get-started/introduction-new-relic-logs). Esto puede ser útil para la resolución de problemas con el reenvío de registros, el agente de infraestructura o al contactar al soporte.

Para obtener detalles sobre cómo habilitar el reenvío de registros para el agente de infraestructura, consulte [Solucionar problemas de reenvío de registros](/docs/logs/enable-new-relic-logs/1-enable-logs/forward-your-logs-using-new-relic-infrastructure#troubleshoot).

### Notas para sistemas específicos [#system-notes]

Estas son algunas notas y requisitos adicionales para sistemas específicos, que se utilizan para complementar las [instrucciones generales de registro](#verbose):

<CollapserGroup>
  <Collapser
    id="coreos"
    title="Agente en contenedores"
  >
    Si está utilizando un agente de infraestructura en contenedores:

    1. Elija una de estas opciones para cambiar el nivel de registros a detallado:

       * <DNT>**Recommended:**</DNT> Establezca la variable de entorno `NRIA_LOG_LEVEL` en `debug`. Ejecutar esto en la línea de comando se vería así:

         ```
         -e NRIA_LOG_LEVEL=debug
         ```

         O

       * Edite el archivo de configuración para configurar `level: debug` en la sección `log` . (No se recomienda editar el archivo de configuración en un contenedor, porque requiere reconstruir la imagen dos veces: una para agregar el registro detallado y otra para eliminarlo).

    2. Utilice `journalctl` para recopilar el registro:

       ```
       journalctl -u newrelic-infra > newrelic-infra.log
       ```

    3. Vuelva a establecer el nivel de registro en `info` o `warn` después de recopilar el registro durante unos minutos.
  </Collapser>
</CollapserGroup>
