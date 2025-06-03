---
title: 'Seguridad del agente APM: PHP'
tags:
  - Agents
  - PHP agent
  - Getting started
metaDescription: How to customize the security levels for data sent to New Relic from your PHP app.
freshnessValidatedDate: never
translationType: machine
---

La configuración de seguridad predeterminada del agente PHP proporciona automáticamente [seguridad para sus datos de APM](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security) para garantizar la privacidad de los datos y limitar el tipo de información que recibe New Relic. Es posible que tenga motivos comerciales para cambiar esta configuración.

Si desea restringir la información que recibe New Relic, puede habilitar [el modo de alta seguridad](#restricted). Si el modo de alta seguridad o la configuración predeterminada no funcionan para las necesidades de su negocio, puede aplicar configuraciones [personalizadas](#custom) .

Para obtener más información sobre las medidas de seguridad de New Relic, consulte nuestra [documentación de seguridad y privacidad](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) o visite el [sitio web de seguridad de New Relic](https://newrelic.com/security).

## Configuración de seguridad predeterminada [#default]

De forma predeterminada, así es como el agente PHP de New Relic maneja los siguientes datos potencialmente confidenciales:

* [Parámetro de solicitud](/docs/agents/php-agent/attributes/attribute-examples#ex_req_params): el agente no captura el parámetro de solicitud HTTP.
* [HTTPS](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-ssl): el agente se comunica con New Relic mediante HTTPS.
* [SQL](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-sql): el agente establece la grabación de SQL en `obfuscated`, lo que elimina los valores literales de cadena y numéricos potencialmente confidenciales.

## Configuración del modo de alta seguridad [#restricted]

Cuando [habilita el modo de alta seguridad](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-high-security), la [configuración predeterminada](#default) se bloquea para que el usuario no pueda cambiarla. Además:

* No se puede crear [un evento personalizado](/docs/agents/php-agent/php-agent-api/newrelic_record_custom_event).
* El agente elimina los mensajes de excepción de los errores.

## Configuraciones de seguridad personalizadas [#custom]

<Callout variant="caution">
  Si personaliza la configuración de seguridad, puede afectar la seguridad de su aplicación.
</Callout>

Si necesita configuraciones de seguridad diferentes a las del modo predeterminado o de alta seguridad, puede personalizar estas configuraciones:

* [Archivo de configuración del agente PHP](/docs/agents/php-agent/configuration/php-agent-configuration)
* [Configuración de atributos](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-attribute-settings)
* [API del agente PHP](/docs/agents/php-agent/api-guides/php-agent-api-guide)

<table>
  <thead>
    <tr>
      <th width="330px">
        <DNT>
          **Setting**
        </DNT>
      </th>

      <th>
        <DNT>
          **Effects on data security**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [`newrelic.daemon.auditlog`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-auditlog)

        _cadena_
      </td>

      <td>
        Predeterminado: (ninguno)

        Si usa esto para establecer el nombre del archivo de registro de auditoría, el agente log los detalles de los mensajes que pasan entre el proceso de monitoreo y el recolector de New Relic.

        Luego puede evaluar la información que el agente envía al recolector de New Relic para ver si incluye información confidencial.
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.high_security`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-high-security)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        Para habilitar [el modo de alta seguridad](#restricted), configúrelo en `true` y [habilite la alta seguridad en New Relic](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled). Esto restringe la información que puede enviar a New Relic.
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.daemon.proxy`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-proxy)

        _cadena_
      </td>

      <td>
        Predeterminado: (ninguno)

        Algunos servidores proxy utilizan HTTP de forma predeterminada, que es un protocolo menos seguro.
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.attributes.enabled`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-attributes-enabled)

        _booleano_
      </td>

      <td>
        Por defecto: `true`

        De forma predeterminada, estás enviando [atributos](/docs/agents/php-agent/attributes/enabling-disabling-attributes) a New Relic. Si no desea enviar atributos a New Relic, configúrelo en `false`.
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.attributes.exclude`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-attributes-include-exclude)

        _cadena_
      </td>

      <td>
        Predeterminado: (ninguno)

        Si hay claves de atributos específicas que **no** desea enviar a New Relic en la traza de la transacción, identifíquelas usando `newrelic.attributes.exclude`. Esto restringe la información enviada a New Relic.

        Considere si desea excluir estos atributos potencialmente sensibles usando `newrelic.attributes.exclude` o si necesita que la información se envíe a New Relic:

        * `request.headers.*`: Elimina todos los encabezados de solicitud.
        * `response.headers.*`: Elimina todos los encabezados de respuesta.
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.custom_insights_events.enabled`](/docs/agents/python-agent/configuration/python-agent-configuration#custom-insights-events-settings)

        _booleano_
      </td>

      <td>
        Por defecto: `true`

        De forma predeterminada, el agente registra el evento enviado a la API de eventos a través de [`newrelic_record_custom_event()`](/docs/agents/php-agent/php-agent-api/newrelic_record_custom_event). Si habilita [el modo de alta seguridad](#restricted), se establece automáticamente en `false`.
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.transaction_tracer.record_sql`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-sql)

        _cadena_
      </td>

      <td>
        Por defecto: `obfuscated`

        De forma predeterminada, `newrelic.transaction_tracer.record_sql` está configurado en `obfuscated`, lo que elimina los literales numéricos y de cadena.

        * Si no desea que el agente capture información de la consulta, configúrelo en `off`.
        * Si desea que el agente capture toda la información de la consulta en su formato original, configúrelo en `raw`.
        * Cuando habilita [el modo de alta seguridad](#restricted), se establece automáticamente en `obfuscated`.
      </td>
    </tr>
  </tbody>
</table>
