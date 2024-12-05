---
title: 'Seguridad del agente APM: Java'
tags:
  - Agents
  - Java agent
  - Getting started
metaDescription: Increasing levels of security allow you to customize how your New Relic Java agent sends data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

La configuración de seguridad predeterminada de New Relic agente de Java proporciona automáticamente [seguridad para sus datos de APM](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security) para garantizar la privacidad de los datos y limitar el tipo de información que recibe New Relic. Es posible que tenga motivos comerciales para cambiar esta configuración.

Si desea restringir la información que recibe New Relic, puede habilitar [el modo de alta seguridad](#restricted). Si el modo de alta seguridad o la configuración predeterminada no funcionan para las necesidades de su negocio, puede aplicar configuraciones [personalizadas](#custom) .

Para obtener más información sobre las medidas de seguridad de New Relic, consulte nuestra [documentación de seguridad y privacidad](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) o visite el [sitio web de seguridad de New Relic](https://newrelic.com/security).

## Configuración de seguridad predeterminada [#default]

<Callout variant="caution">
  El rastreo del stack no se puede ofuscar y puede contener información confidencial, incluida la consulta SQL. Para obtener más información sobre el error omitido, consulte [configuración de error del agente de Java](/docs/agents/java-agent/configuration/java-agent-error-configuration).
</Callout>

De forma predeterminada, así es como el agente de Java New Relic maneja los siguientes datos potencialmente confidenciales:

* Parámetro de solicitud: El agente no captura el parámetro de solicitud HTTP.
* [HTTPS](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-ssl): el agente se comunica con New Relic mediante HTTPS.
* [SQL](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-record_sql): el agente establece la grabación de SQL en `obfuscated`, lo que elimina los valores literales de cadena y numéricos potencialmente confidenciales.

## Configuración del modo de alta seguridad [#restricted]

Cuando [habilita el modo de alta seguridad](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-enable_high_security), la [configuración predeterminada](#default) se bloquea para que el usuario no pueda cambiarla. Además:

* El agente no recopila el parámetro de la cola de mensajes.
* No se puede crear [un evento personalizado](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents#java-att).
* No se puede implementar [instrumentación personalizada utilizando el Editor de instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-instrument-ui).
* No puedes recopilar [atributos de usuario](/docs/insights/insights-data-sources/custom-attributes/collect-user-attributes-java).

## Configuraciones de seguridad personalizadas [#custom]

<Callout variant="caution">
  Si personaliza la configuración de seguridad, puede afectar la seguridad de su aplicación.
</Callout>

Si necesita configuraciones de seguridad diferentes a las del modo predeterminado o de alta seguridad, puede personalizar estas configuraciones:

* [Archivo de configuración del agente de Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file)
* [Atributo personalizado](/docs/agents/java-agent/attributes/enabling-disabling-attributes-java#NRaddCustomParameter)
* [Agente de API de Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api)

<table>
  <thead>
    <tr>
      <th width="300px">
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
        [`audit_mode`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-audit_mode)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        De forma predeterminada, el agente de Java no log todos los datos enviados a New Relic en el archivo de registro del agente.

        Si configura esto en `true`, los datos de registro del agente se envían al recolector de New Relic en el archivo de registro del agente. Luego puede evaluar la información que envía el agente revisando el archivo de registro del agente para ver si incluye información confidencial.
      </td>
    </tr>

    <tr>
      <td>
        [`high_security`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-enable_high_security)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        Para habilitar [el modo de alta seguridad](#restricted), configúrelo en `true` y [habilite la alta seguridad en New Relic](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled). Esto restringe la información que puede enviar a New Relic.
      </td>
    </tr>

    <tr>
      <td>
        [`proxy_host`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-proxy_user)

        _cadena_
      </td>

      <td>
        Predeterminado: (ninguno)

        Algunos servidores proxy utilizan HTTP de forma predeterminada, que es un protocolo menos seguro.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-attributes-enabled)

        _booleano_
      </td>

      <td>
        Por defecto: `true`

        Valor predeterminado para el [editor de instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-instrument-ui#options): `false`

        De forma predeterminada, estás enviando [atributos](/docs/agents/java-agent/attributes/enabling-disabling-attributes-java) a New Relic, excepto los métodos instrumentados usando el Editor de instrumentación personalizado. Si no desea enviar atributos a New Relic, configúrelo en `false`.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-attributes-exclude)

        _cadena_
      </td>

      <td>
        Predeterminado: (ninguno)

        Si hay claves de atributos específicas que **no** desea enviar a New Relic en la traza de la transacción, identifíquelas usando `attributes.exclude`. Esto restringe la información enviada a New Relic.

        Considere si desea excluir estos atributos potencialmente sensibles usando `attributes.exclude` o si necesita que la información se envíe a New Relic:

        * `request.headers.*`: Elimina todos los encabezados de solicitud.

          (Tenga en cuenta que los encabezados HTTP que contienen datos confidenciales como `cookie` y `authorization` nunca se recopilan).

        * `response.headers.*`: Elimina todos los encabezados de respuesta.

        * `request_uri`: Elimina la ruta de la solicitud entrante de la transacción.
      </td>
    </tr>

    <tr>
      <td>
        [`log_sql`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-log_sql)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        De forma predeterminada, envías consultas a New Relic usando `record_sql`. Si desea log consultas en el archivo de registro del agente y enviarlas a New Relic, configúrelo en `true`.
      </td>
    </tr>

    <tr>
      <td>
        [`record_sql`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-record_sql)

        _cadena_
      </td>

      <td>
        Por defecto: `obfuscated`

        De forma predeterminada, `record_sql` está configurado en `obfuscated`, lo que elimina los literales numéricos y de cadena.

        * Si no desea que el agente capture información de la consulta, configúrelo en `off`.
        * Si desea que el agente capture toda la información de la consulta en su formato original, configúrelo en `raw`.
        * Cuando habilita [el modo de alta seguridad](#restricted), se establece automáticamente en `obfuscated`.
      </td>
    </tr>

    <tr>
      <td>
        [`strip_exception_messages`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#strip_exception_messages)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        De forma predeterminada, está configurado en `false`, lo que significa que el agente envía mensajes de todas las excepciones al recolector de New Relic. Si habilita [el modo de alta seguridad](#restricted), este se cambia automáticamente a `true` y el agente elimina los mensajes de las excepciones.

        Si no estás usando el modo de alta seguridad pero aún deseas eliminar los mensajes de todas las excepciones excepto aquellos en tu [lista de 'permitidos'](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#strip_exception_messages_whitelist), configúralo en `true`.
      </td>
    </tr>

    <tr>
      <td>
        [`custom_insights_events.enabled`](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents#java-att)

        _booleano_
      </td>

      <td>
        Por defecto: `true`

        De forma predeterminada, el agente registra el evento enviado a la API de eventos a través de `recordCustomEvent()`. Si habilita [el modo de alta seguridad](#restricted), se establece automáticamente en `false`.
      </td>
    </tr>
  </tbody>
</table>
