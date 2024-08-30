---
title: 'Seguridad del agente APM: Ruby'
tags:
  - Agents
  - Ruby agent
  - Getting started
metaDescription: Increasing levels of security you can customize for how your New Relic Ruby agent sends data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

La configuración de seguridad predeterminada del agente New Relic Ruby proporciona automáticamente [seguridad para sus datos de APM](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security) para garantizar la privacidad de los datos y limitar el tipo de información que recibe New Relic. Es posible que tenga motivos comerciales para cambiar esta configuración.

Si desea restringir la información que recibe New Relic, puede habilitar el modo de alta seguridad. Si el modo de alta seguridad o la configuración predeterminada no funcionan para las necesidades de su negocio, puede aplicar configuraciones personalizadas.

Para obtener más información sobre las medidas de seguridad de New Relic, consulte nuestra [documentación de seguridad y privacidad](/docs/security/new-relic-security/data-privacy/data-privacy-new-relic) o visite el [sitio web de seguridad de New Relic](https://newrelic.com/security).

## Configuración de seguridad predeterminada [#default]

De forma predeterminada, así es como el agente New Relic Ruby maneja los siguientes datos potencialmente confidenciales:

* [Parámetro de solicitud](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#capture_params): el agente no captura el parámetro de solicitud HTTP.
* [HTTPS](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#ssl): el agente se comunica con New Relic mediante HTTPS.
* [SQL](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer-record_sql): el agente establece la grabación de SQL en `obfuscated`, lo que elimina los valores literales de cadena y numéricos potencialmente confidenciales.

## Configuración del modo de alta seguridad [#restricted]

Cuando [habilita el modo de alta seguridad](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#high_security), la [configuración predeterminada](#default) se bloquea para que el usuario no pueda cambiarla. Además, el agente no recopila el parámetro de la cola de mensajes.

## Configuraciones de seguridad personalizadas [#custom]

<Callout variant="caution">
  Si personaliza la configuración de seguridad, puede afectar la seguridad de su aplicación.
</Callout>

Si necesita configuraciones de seguridad diferentes a las del modo predeterminado o de alta seguridad, puede personalizar estas configuraciones:

* [Archivo de configuración del agente Ruby](/docs/agents/ruby-agent/configuration/ruby-agent-configuration)
* [Atributo personalizado](/docs/agents/ruby-agent/attributes/enabling-disabling-attributes-ruby)
* [API del agente Ruby](/docs/agents/ruby-agent/api-guides/ruby-agent-api-guide)
* [Instrumentación personalizada](/docs/agents/ruby-agent/customization/ruby-custom-instrumentation)
* [Certificado SSL personalizado](/docs/agents/ruby-agent/configuration/custom-ssl-certificates-ruby)

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
        [`audit_log.enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#audit_log-enabled)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        De forma predeterminada, el agente no log todos los datos enviados a New Relic en el archivo de registro del agente.

        Si configura esto en `true`:

        * Los datos de registro del agente se envían al recolector de New Relic en el archivo de registro del agente. Luego puede evaluar la información que envía el agente revisando el archivo de registro del agente para ver si incluye información confidencial.
        * Todos los extremos están incluidos en el archivo de registro del agente. Puede especificar que solo se incluyan determinados extremos en el log de auditoría utilizando [`audit_log.endpoints`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#audit_log-endpoints).
      </td>
    </tr>

    <tr>
      <td>
        [`high_security`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#high_security)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        Para habilitar [el modo de alta seguridad](#restricted), configúrelo en `true` y [habilite la alta seguridad en New Relic](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled). Esto restringe la información que puede enviar a New Relic.
      </td>
    </tr>

    <tr>
      <td>
        [`proxy_host`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#proxy_host)

        _cadena_
      </td>

      <td>
        Predeterminado: (ninguno)

        Algunos servidores proxy utilizan HTTP de forma predeterminada, que es un protocolo menos seguro.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#attributes-enabled)

        _booleano_
      </td>

      <td>
        Por defecto: `true`

        De forma predeterminada, estás enviando [atributos](/docs/agents/ruby-agent/attributes/enabling-disabling-attributes-ruby) a New Relic. Si no desea enviar atributos a New Relic, configúrelo en `false`.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.exclude`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#attributes-exclude)

        _matriz_
      </td>

      <td>
        Por defecto: `[]`

        Si hay claves de atributos específicas que **no** desea enviar a New Relic en la traza de la transacción, identifíquelas usando `attributes.exclude`. Esto restringe la información enviada a New Relic.

        Considere si desea excluir estos atributos potencialmente confidenciales usando `attributes.exclude` o si necesita que esta información se envíe a New Relic:

        * `request.headers.*`: Elimina todos los encabezados de solicitud.

          (Tenga en cuenta que los encabezados HTTP que contienen datos confidenciales como `cookie` y `authorization` nunca se recopilan).

        * `response.headers.*`: Elimina todos los encabezados de respuesta.
      </td>
    </tr>

    <tr>
      <td>
        [`transaction_tracer.record_sql`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer-record_sql)

        _cadena_
      </td>

      <td>
        Por defecto: `obfuscated`

        De forma predeterminada, `transaction_tracer.record_sql` está configurado en `obfuscated`, lo que elimina los literales numéricos y de cadena.

        * Si no desea que el agente capture información de la consulta, configúrelo en `none`.
        * Si desea que el agente capture toda la información de la consulta en su formato original, configúrelo en `raw`.
        * Cuando habilita [el modo de alta seguridad](#restricted), se establece automáticamente en `obfuscated`.
      </td>
    </tr>

    <tr>
      <td>
        [`strip_exception_messages.enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#strip_exception_messages-enabled)

        _booleano_
      </td>

      <td>
        Predeterminado: el valor de la opción de configuración `high_security`

        De forma predeterminada, está configurado en `false`, lo que significa que el agente envía mensajes de todas las excepciones al recolector de New Relic. Si habilita [el modo de alta seguridad](#restricted), este se cambia automáticamente a `true` y el agente elimina los mensajes de las excepciones.

        Si no estás utilizando el modo de alta seguridad pero aún deseas eliminar los mensajes de todas las excepciones excepto aquellos en tu [lista de 'permitidos'](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#strip_exception_messages-whitelist), configúralo en `true`.
      </td>
    </tr>
  </tbody>
</table>
