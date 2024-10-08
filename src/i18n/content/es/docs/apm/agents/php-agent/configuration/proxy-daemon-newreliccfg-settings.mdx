---
title: Proxy daemon (newrelic.cfg) ajustes
tags:
  - Agents
  - PHP agent
  - Configuration
metaDescription: How to change configuration settings for New Relic's PHP proxy daemon (a process that acts as a communications proxy between the agent and the data collectors).
freshnessValidatedDate: never
translationType: machine
---

El daemon (`newrelic-daemon`) actúa como proxy entre el agente PHP y el recolector New Relic para reducir el tráfico de red y mejorar el tiempo de respuesta de la aplicación instrumentada. El proceso daemon comienza cuando se inicia su sistema y debe estar ejecutándose para que los datos se envíen a New Relic.

## Configuración recomendada

A partir de la versión 3.0 del agente PHP, el agente puede configurar e iniciar automáticamente el daemon . La configuración automática no requiere el archivo `newrelic.cfg` . Esta es la configuración recomendada.

Sin embargo, todavía hay algunos casos en los que iniciar manualmente el daemon es útil. Para obtener más información sobre el proceso de inicio, consulte [Modos de inicio del daemon New Relic](/docs/agents/php-agent/installation/starting-php-daemon).

## Configuración manual [#proxy-settings]

Durante la instalación se creó un archivo de configuración daemon de muestra. Para configurar manualmente el daemon, copie y cambie el nombre de `newrelic.cfg.template` de `/etc/newrelic/newrelic.cfg.template` a `/etc/newrelic/newrelic.cfg` y edite el archivo. Todas las configuraciones son opcionales y la mayoría tiene valores predeterminados.

<Callout variant="important">
  El agente no iniciará automáticamente el daemon si encuentra un archivo `newrelic.cfg` en el directorio `/etc/newrelic/`.
</Callout>

<CollapserGroup>
  <Collapser
    id="cfgvar-logfile"
    title={<InlineCode>logfile</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `[none]`
          </td>
        </tr>
      </tbody>
    </table>

    Establece el nombre del archivo de registro que se utilizará.

    Se puede configurar en la línea de comando mediante la opción daemon `-l`. Establecer este valor en la línea de comando anulará el valor establecido en `newrelic.cfg` Aunque el daemon en sí no proporciona un nombre predeterminado para el archivo de registro, el script de inicio daemon usa la opción <DNT>**-l**</DNT> para establecer la ubicación y el nombre predeterminados en `/var/log/newrelic/newrelic-daemon.log`.
  </Collapser>

  <Collapser
    id="cfgvar-loglevel"
    title={<InlineCode>loglevel</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `info`
          </td>
        </tr>
      </tbody>
    </table>

    Establece el nivel de detalle de los mensajes enviados al [archivo de registro](#cfgvar-logfile). Este campo tiene los mismos valores posibles que el agente, que son, en orden creciente de detalle:

    * `error`

    * `warning`

    * `info`

    * `debug`

      Si tiene problemas con el daemon, establezca el nivel de registros <DNT>**debug**</DNT> durante al menos el tiempo suficiente para reproducir el problema. A menudo es necesario un <DNT>**debug**</DNT> archivo de registro para depurar problemas con el daemon proxy.

      Se puede configurar en la línea de comando usando la opción daemon `--loglevel`. Establecer este valor en la línea de comando anulará el valor establecido en `newrelic.cfg`
  </Collapser>

  <Collapser
    id="cfgvar-ssl"
    title={<InlineCode>SSL</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `yes`
          </td>
        </tr>
      </tbody>
    </table>

    Esta opción de configuración solo está disponible en versiones del agente PHP inferiores a 8.0. Las versiones 8.0 y superiores ignorarán esta configuración y siempre usarán el cifrado HTTPS para comunicarse con New Relic.

    Cuando se establece en `yes`, el proxy solo utilizará una conexión segura para comunicarse con el recolector. Si bien la configuración especifica SSL, la configuración se refiere al cifrado HTTPS según los últimos estándares de la industria. El agente se comunica con New Relic a través de HTTPS de forma predeterminada, y New Relic requiere HTTPS para todo el tráfico hacia New Relic y la API REST de New Relic.

    Se puede habilitar o deshabilitar en la línea de comando mediante la opción daemon `--tls`. Establecer este valor en la línea de comando anulará el valor establecido en `newrelic.cfg`
  </Collapser>

  <Collapser
    id="cfgvar-ssl-ca-bundle"
    title={<InlineCode>ssl_ca_bundle</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `""`
          </td>
        </tr>
      </tbody>
    </table>

    Establece la ubicación de un archivo que contiene certificados de CA en formato PEM. Cuando se configuran, los certificados de este archivo se utilizarán para autenticar el recolector New Relic. En la mayoría de los casos, no debería ser necesario configurar un paquete de CA. El agente PHP de New Relic viene incluido con los certificados CA necesarios.

    Si también se establece [`ssl_ca_path`](#cfgvar-ssl-ca-path) (ver más abajo), se buscarán primero los certificados de este archivo, seguidos de los certificados contenidos en el directorio [`ssl_ca_path`](#cfgvar-ssl-ca-path) .

    Esta configuración no tiene ningún efecto cuando [`ssl`](#cfgvar-ssl) se establece en `false`.
  </Collapser>

  <Collapser
    id="cfgvar-ssl-ca-path"
    title={<InlineCode>ssl_ca_path</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `""`
          </td>
        </tr>
      </tbody>
    </table>

    Establece la ubicación de un directorio que contiene certificados de CA confiables en formato PEM. Cuando se configuran, los certificados en este directorio se utilizarán para autenticar el recolector New Relic. En la mayoría de los casos, no debería ser necesario configurar una ruta de CA. El agente PHP de New Relic viene incluido con los certificados CA necesarios.

    Si también se establece [`ssl_ca_bundle`](#cfgvar-ssl-ca-bundle) (ver arriba), se buscará primero seguido de los certificados contenidos en [`ssl_ca_path`](#cfgvar-ssl-ca-path).

    Esta configuración no tiene ningún efecto cuando [`ssl`](#cfgvar-ssl) se establece en `false`.
  </Collapser>

  <Collapser
    id="cfgvar-proxy"
    title={<InlineCode>proxy</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `[none]`
          </td>
        </tr>
      </tbody>
    </table>

    Ciertos sitios tienen un firewall de salida muy restrictivo y requieren el uso de un proxy para comunicarse con el mundo exterior. Si esto se aplica a su sitio, deberá establecer este valor.

    El valor tiene el formato `scheme://user:password@hostname:port`.

    Los valores `scheme`, `user`, `password` y `port` pueden omitirse según la configuración de su proxy. Por ejemplo, si está utilizando un proxy HTTP que no requiere un nombre de usuario ni contraseña, puede usar simplemente `hostname:port`. El puerto predeterminado es 1080 para la mayoría de los servidores proxy.

    Se puede configurar en la línea de comando usando la opción daemon `--proxy`. Establecer este valor en la línea de comando anulará el valor establecido en `newrelic.cfg`
  </Collapser>

  <Collapser
    id="cfgvar-port"
    title={<><InlineCode>address</InlineCode> (alias de <InlineCode>port</InlineCode>)</>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `/tmp/.newrelic.sock`
          </td>
        </tr>
      </tbody>
    </table>

    Establece el extremo del socket en el que escuchará el daemon . Este extremo permite al agente comunicarse con el daemon. Debe ser el mismo valor que la configuración [`newrelic.daemon.address`](/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-daemon-port) del agente. Esto se puede especificar de estas maneras:

    * <DNT>**Recommended.**</DNT> Para utilizar un archivo específico como socket de dominio UNIX (UDS), proporcione un nombre de ruta <DNT>**absolute**</DNT> como una cadena.

    * Para utilizar un puerto TCP estándar, especifique un número en el rango `1` a `65534`.

    * Para utilizar un socket abstracto, utilice el valor `@newrelic-daemon` (disponible para la versión del agente 5.2.0.141 o superior).

    * Para habilitar conexiones desde aplicaciones que se ejecutan en diferentes hosts (útil para [entornos de contenedor](/docs/agents/php-agent/advanced-installation/install-php-agent-docker)), establezca este valor en `host:port`, donde `host` indica el nombre de host o la dirección IP del host local y `port` indica un puerto válido. número. Se admiten tanto IPv4 como IPv6. Está disponible para la versión 9.2.0.247 o superior del agente PHP.

      Estas opciones también se pueden configurar a través de la línea de comando usando la opción daemon `--address`. Establecer este valor en la línea de comando anulará el valor establecido en `newrelic.cfg`.
  </Collapser>

  <Collapser
    id="cfgvar-pidfile"
    title={<InlineCode>pidfile</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `/tmp/newrelic.pid`
          </td>
        </tr>
      </tbody>
    </table>

    Establece el nombre del archivo en el que el daemon registrará su ID de proceso (pid).

    Aunque el daemon establece esto en un valor predeterminado de `/tmp/newrelic.pid`, el script de inicio casi siempre usa la opción `--pidfile` para establecerlo en `/var/run/newrelic-daemon.pid`.

    Se puede configurar en la línea de comando usando la opción daemon `--pidfile`. Establecer este valor en la línea de comando anulará el valor establecido en `newrelic.cfg`
  </Collapser>

  <Collapser
    id="cfgvar-auditlog"
    title={<InlineCode>auditlog</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `[none]`
          </td>
        </tr>
      </tbody>
    </table>

    Esta característica se introdujo en la versión 3.4. Cuando esté habilitado, el agente creará un log de auditoría, que contiene todos los datos enviados desde el daemon a New Relic. Estos datos incluyen la URL completa, la fecha, la hora y los datos sin comprimir y sin codificar para cada solicitud. Esto le permite observar exactamente qué datos se envían a New Relic para garantizar que no se incluyan datos confidenciales.

    El archivo especificado no puede ser el mismo archivo que el daemon log, como se describe anteriormente. Este log de auditoría puede llegar a ser muy grande muy rápidamente, por lo que New Relic recomienda que no lo utilice durante períodos de tiempo prolongados.

    Se puede configurar en la línea de comando usando la opción daemon `--auditlog`. Establecer este valor en la línea de comando anulará el valor establecido en `newrelic.cfg`
  </Collapser>
</CollapserGroup>
