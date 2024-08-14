---
title: 'Seguridad del agente APM: Python'
tags:
  - Agents
  - Python agent
  - Getting started
metaDescription: How to customize the security levels for data sent to New Relic from your Python app.
freshnessValidatedDate: never
translationType: machine
---

La configuración de seguridad predeterminada del agente Python proporciona automáticamente [seguridad a sus datos](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security) para garantizar la privacidad de los datos y limitar el tipo de información que ingerimos. Es posible que tenga motivos comerciales para cambiar esta configuración.

Si desea restringir la información que ingerimos puede habilitar [el modo de alta seguridad](#restricted). Si el modo de alta seguridad o la configuración predeterminada no funcionan para las necesidades de su negocio, puede aplicar configuraciones [personalizadas](#custom) .

Para obtener más información sobre las medidas de seguridad, consulte nuestra [documentación de seguridad y privacidad](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) o visite el [sitio web de seguridad de New Relic](https://newrelic.com/security).

## Configuración de seguridad predeterminada [#default]

De forma predeterminada, así es como el agente Python maneja los siguientes datos potencialmente confidenciales:

* [Parámetro de solicitud](/docs/agents/python-agent/attributes/python-attribute-examples#ex_req_params): el agente no captura el parámetro de solicitud HTTP.
* [SQL](/docs/agents/python-agent/installation-configuration/python-agent-configuration#txn-tracer-sql): el agente establece la grabación de SQL en `obfuscated`, lo que elimina los valores literales de cadena y numéricos potencialmente confidenciales.

## Configuración del modo de alta seguridad [#restricted]

Cuando [habilita el modo de alta seguridad](/docs/agents/python-agent/installation-configuration/python-agent-configuration#high_security), la [configuración predeterminada](#default) se bloquea para que el usuario no pueda cambiarla. Además:

* El agente no recopila [el parámetro de la cola de mensajes](/docs/agents/python-agent/api/python-agent-api-guide#messaging).
* No se puede crear [un evento personalizado](/docs/agents/python-agent/python-agent-api/record_custom_event).
* El agente elimina [los mensajes de excepción de los errores](/docs/agents/python-agent/installation-configuration/python-agent-configuration#strip_exception_messages_enabled).

## Configuraciones de seguridad personalizadas [#custom]

<Callout variant="caution">
  Si personaliza la configuración de seguridad, puede afectar la seguridad de su aplicación.
</Callout>

Si necesita configuraciones de seguridad diferentes a las del modo predeterminado o de alta seguridad, puede personalizar estas configuraciones:

* [Archivo de configuración del agente Python](/docs/agents/python-agent/installation-configuration/python-agent-configuration)
* [Atributo personalizado](/docs/agents/python-agent/python-agent-api/add_custom_attribute)
* [API del agente Python](/docs/agents/python-agent/api/python-agent-api-guide)

<Callout variant="tip">
  Algunas de estas configuraciones se pueden cambiar usando variables de entorno. Consulte [Variables de entorno del agente Python](/docs/agents/python-agent/installation-configuration/python-agent-configuration#environment-variables) para obtener la lista completa.
</Callout>

<table>
  <thead>
    <tr>
      <th width="340px">
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
        [`audit_log_file`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#audit-log-file)

        _cadena_
      </td>

      <td>
        Predeterminado: (ninguno)

        Si usa esto para establecer el nombre del archivo de registro de auditoría, el agente log los detalles de los mensajes que se transmiten entre el proceso de monitoreo y el recolector de datos.

        Luego puede evaluar la información que el agente envía al recolector para ver si incluye información confidencial.
      </td>
    </tr>

    <tr>
      <td>
        [`high_security`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#high_security)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        Para habilitar [el modo de alta seguridad](#restricted), configúrelo en `true` y [habilite la alta seguridad](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled). Esto restringe la información que puede enviar.
      </td>
    </tr>

    <tr>
      <td>
        [`proxy_host`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#proxy)

        _cadena_
      </td>

      <td>
        Predeterminado: (ninguno)

        Algunos servidores proxy utilizan HTTP de forma predeterminada, que es un protocolo menos seguro.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.enabled`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#cfg-attributes-enabled)

        _booleano_
      </td>

      <td>
        Por defecto: `true`

        De forma predeterminada, estás enviando [atributo](/docs/agents/python-agent/attributes/enabling-disabling-attributes-python). Si no desea enviar atributo, configúrelo en `false`.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.exclude`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#cfg-attributes-exclude)

        _cadena_
      </td>

      <td>
        Predeterminado: (ninguno)

        Si hay claves de atributos específicas que **no** desea enviar en la traza de la transacción, identifíquelas usando `attributes.exclude`. Esto restringe la información enviada.

        Considere si desea excluir estos atributos potencialmente sensibles usando `attributes.exclude` o si necesita que se envíe la información:

        * `request.headers.*`: Elimina todos los encabezados de solicitud.

          (Tenga en cuenta que los encabezados HTTP que contienen datos confidenciales como `cookie` y `authorization` nunca se recopilan).

        * `response.headers.*`: Elimina todos los encabezados de respuesta.
      </td>
    </tr>

    <tr>
      <td>
        [`custom_insights_events.enabled`](/docs/agents/python-agent/configuration/python-agent-configuration#custom-insights-events-settings)

        _booleano_
      </td>

      <td>
        Por defecto: `true`

        De forma predeterminada, el agente registra el evento enviado a la API de eventos a través de [`record_custom_event()`](/docs/agents/python-agent/api/python-agent-api-guide#record_custom_event). Si habilita [el modo de alta seguridad](#restricted), se establece automáticamente en `false`.
      </td>
    </tr>

    <tr>
      <td>
        [`transaction_tracer.record_sql`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#txn-tracer-sql)

        _cadena_
      </td>

      <td>
        Por defecto: `obfuscated`

        De forma predeterminada, `transaction_tracer.record_sql` está configurado en `obfuscated`, lo que elimina los literales numéricos y de cadena.

        * Si no desea que el agente capture información de la consulta, configúrelo en `off`.
        * Si desea que el agente capture toda la información de la consulta en su formato original, configúrelo en `raw`.
        * Cuando habilita [el modo de alta seguridad](#restricted), se establece automáticamente en `obfuscated`.
      </td>
    </tr>

    <tr>
      <td>
        [`strip_exception_messages.enabled`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#strip_exception_messages_enabled)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        Si habilita [el modo de alta seguridad](#restricted), se establece automáticamente en `true`. Si no está utilizando el modo de alta seguridad pero desea eliminar los mensajes de todas las excepciones excepto aquellos en su [lista de 'permitidos'](/docs/agents/python-agent/configuration/python-agent-configuration#strip_exception_messages_whitelist), configúrelo en `true`.
      </td>
    </tr>
  </tbody>
</table>
