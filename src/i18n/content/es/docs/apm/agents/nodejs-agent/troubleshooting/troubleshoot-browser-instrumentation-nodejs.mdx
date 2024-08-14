---
title: Solucionar problemas de instrumentación browser en Node.js
type: troubleshooting
tags:
  - Agents
  - Nodejs agent
  - Troubleshooting
metaDescription: How to interpret any error messages you see when manually inserting the browser agent with New Relic's Node.js agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Si tiene problemas [al instrumentar la aplicación del browser](/docs/nodejs/page-load-timing-in-nodejs) a través de su agente New Relic Node.js, siga los [procedimientos estándar de <InlinePopover type="browser"/>resolución de problemas](/docs/new-relic-browser/troubleshooting-page-view-monitoring). A continuación se ofrecen algunos consejos adicionales para Node.js.

## Solución

Los códigos de error aparecerán automáticamente en el código fuente del sitio y en el registro del agente de Node.js. Busque [`NREUM`](/docs/new-relic-browser/troubleshooting-page-view-monitoring#javascript) para encontrar estos códigos.

<table>
  <thead>
    <tr>
      <th width={100}>
        <DNT>
          **Error code**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        0
      </td>

      <td>
        El monitoreo del browser ha sido explícitamente deshabilitado. Esto se hizo en `newrelic.js` o con una variable de entorno. (`NEW_RELIC_BROWSER_MONITOR_ENABLE` por defecto es `true`.)
      </td>
    </tr>

    <tr>
      <td>
        1
      </td>

      <td>
        Se llamó al agente del browser fuera de una transacción web. Esto puede ocurrir si intentó generar los datos del browser una vez y luego almacenarlos en caché, o si lo llamó en una tarea en segundo plano.
      </td>
    </tr>

    <tr>
      <td>
        2
      </td>

      <td>
        Ocurrió algo inesperado.
      </td>
    </tr>

    <tr>
      <td>
        3
      </td>

      <td>
        La transacción no tiene nombre. Si no está utilizando Express o Restify y no nombró explícitamente la transacción, aparece este error. Esto es para evitar que el nombre de la transacción pase a <DNT>\*\*/\*\*</DNT>\*. Para obtener más información, consulte [cómo nombrar su transacción](/docs/nodejs/nodejs-agent-api).
      </td>
    </tr>

    <tr>
      <td>
        4
      </td>

      <td>
        El agente de Node.js aún no ha realizado un "apretón de manos" con el recolector. La aplicación se inició y un usuario accedió al sitio antes de que el recolector pudiera hablar con el agente. Esto puede ocurrir porque:

        * La página browser se cargó antes de que el agente realizara su conexión inicial a New Relic.

        * La clave de licencia no es válida.

        * Se produjo algún otro problema que impediría que el ID de la aplicación estuviera disponible.

          Si estos errores persisten durante más de 1 minuto, verifique su <InlinePopover type="licenseKey"/>. De lo contrario, los errores deberían desaparecer por sí solos.
      </td>
    </tr>

    <tr>
      <td>
        5
      </td>

      <td>
        El monitoreo del browser ha sido deshabilitado en el lado del recolector. Por ejemplo, el recolector no devolvió suficientes datos para habilitar el monitoreo del browser. Este es un problema del recolector, porque [algunas opciones de configuración del lado del servidor](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#methods-and-precedence) para Node.js no están disponibles actualmente.
      </td>
    </tr>
  </tbody>
</table>
