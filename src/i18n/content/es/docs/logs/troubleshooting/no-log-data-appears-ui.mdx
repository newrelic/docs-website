---
title: No aparecen datos log en la UI
type: troubleshooting
tags:
  - Logs
  - Log management
  - Troubleshooting
metaDescription: 'If no data appears in the logs UI in New Relic, follow these troubleshooting tips.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

No ves los log datos esperados en la New Relic UI después de diez minutos de instalar el agente de infraestructura, el <InlinePopover type="apm"/>agente o configurar el reenvío de registros.

## Soluciones

Si no aparecen datos después de configurar una solución de informes logy esperar unos cinco minutos, intente lo siguiente:

<table>
  <thead>
    <tr>
      <th>
        Registro de resolución de problemas
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Infraestructura y agente APM
      </td>

      <td>
        Estos agentes están diseñados para informar automáticamente los datos log . Esto se conoce como [contexto de inicio de sesión](/docs/logs/logs-context/logs-in-context). Si no ves esos datos, o quieres hacer una configuración adicional, algunas opciones:

        Para APM:

        * Revise [nuestros documentos sobre cómo habilitar el contexto de inicio de sesión APM ](/docs/logs/logs-context/get-started-logs-context).

        * Asegúrese de que su agente APM sea una versión que admita el contexto de inicio de sesión. A continuación se detallan los agentes y las versiones compatibles:

          * Logs en el contexto de Java (agente v7.6.0 o superior)

            * Log4j1 1.2.17 o superior
            * Log4j 2.6 o superior
            * Iniciar sesión 1.1 o superior
            * JULIO (java.util.logging) JDK 8+
            * JBoss Logging 1.3.0.Final a 2.x
            * Registro del asistente desplegable

          * Logs en el contexto .NET (agente v9.7.0.0 o superior)

            * NLog: 4.1+ (.NET framework), 4.5+ ..NET Core requiere .NET agente v9.7 o superior.
            * Serilog: 2.0 o superior (.NET framework), 2.5+ (.NET Core). Requiere el agente .NET v9.7.0 o superior.
            * Microsoft.Extensions.Logging: 3.0+. Requiere .NET agente v9.7.0 o superior (.NET Core), .NET agente v10.0.0 o superior (.NET framework).
            * Log4net, Serilog, Nlog

          * Logs en el contexto de Node.js (agente v8.11.0 o superior)

            * Winston 3.0.0 o mas alto
            * Pino 7.0.0 o superior
            * Bunyan 1.8.12 o superior

          * Logs en el contexto de Python (agente v7.12.0.176 o superior)

            * Biblioteca de registro compatible: logging y loguru

          * Logs en el contexto Ruby (agente v8.6.0 o superior)

            * Logger Clase (biblioteca estándar logger Ruby)

          * Logs en el contexto Go (agente v3.19.1 o superior)

            * Log de biblioteca estándar
            * Zerolog
            * Logs en el contexto Logrus PHP (agente v10.1.0)
            * Monólogo (versión 2 o 3)

        * Puede utilizar nuestra [aplicación Groundskeeper](https://onenr.io/0OQMXd57DjG) para ver si su agente APM está actualizado.

          Para el agente de infraestructura: consulte [opciones de configuración de registro](/docs/infrastructure/install-infrastructure-agent/configuration/infrastructure-agent-configuration-settings/#logging-variables).
      </td>
    </tr>

    <tr>
      <td>
        Acceso a los datos
      </td>

      <td>
        Es posible que no tenga los permisos o el acceso a la cuenta adecuados. Ver [Factores que afectan el acceso a características y datos](/docs/accounts/accounts-billing/account-structure/factors-affecting-access-features-data/).
      </td>
    </tr>

    <tr>
      <td>
        Compatibilidad
      </td>

      <td>
        Si configuró el reenviador de registros, asegúrese de haber instalado un [reenviador de registros compatible](/docs/logs/forward-logs/).
      </td>
    </tr>

    <tr>
      <td>
        Códigos de estado
      </td>

      <td>
        Verifique el código de estado de respuesta que se devuelve desde el extremo de colección de New Relic Logs. Por ejemplo, es posible que vea:

        ```
        HTTP Error 403: Forbidden. Review your license key.
        ```

        Este error significa que estás utilizando una clave de seguridad no válida. New Relic requiere un <InlinePopover type="licenseKey"/>para habilitar el envío log .

        Una respuesta `HTTP 202` indica éxito.
      </td>
    </tr>

    <tr>
      <td>
        Errores
      </td>

      <td>
        Ejecute una consulta utilizando el [evento`NrIntegrationErrors` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror/)para ver si hay algún error relacionado con el registro. Por ejemplo, busque mensajes como:

        ```
        Error unmarshalling message payload
        ```
      </td>
    </tr>

    <tr>
      <td>
        Consultar `Log`
      </td>

      <td>
        Intente consultar el tipo de datos `Log` :

        ```sql
        SELECT * FROM Log
        ```

        Si no aparecen datos en el generador de consultas, entonces no aparecerán datos en la UI <DNT>**Logs**</DNT>. Para obtener más información, consulte [nuestros documentos sobre opciones de consulta de datos](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data).
      </td>
    </tr>
  </tbody>
</table>
