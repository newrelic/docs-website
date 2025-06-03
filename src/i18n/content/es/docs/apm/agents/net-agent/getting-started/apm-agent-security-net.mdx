---
title: 'Seguridad del agente APM: .NET'
tags:
  - Agents
  - NET agent
  - Getting started
metaDescription: Increasing levels of security allow you to customize how your New Relic .NET agent sends data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

La configuración de seguridad predeterminada del agente New Relic .NET proporciona automáticamente [seguridad para sus datos APM](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security) para garantizar la privacidad de los datos y limitar el tipo de información que recibe New Relic. Es posible que tenga motivos comerciales para cambiar esta configuración.

Si desea restringir la información que recibe New Relic, puede habilitar [el modo de alta seguridad](#restricted). Si el modo de alta seguridad o la configuración predeterminada no funcionan para las necesidades de su negocio, puede aplicar configuraciones [personalizadas](#custom) .

Para obtener más información sobre las medidas de seguridad de New Relic, consulte nuestra [documentación de seguridad y privacidad](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) o visite el [sitio web de seguridad de New Relic](https://newrelic.com/security).

## Configuración de seguridad predeterminada [#default]

De forma predeterminada, así es como el agente New Relic .NET maneja los siguientes datos potencialmente confidenciales:

* Parámetro de solicitud: El agente no captura el parámetro de solicitud HTTP.
* [HTTPS](/docs/agents/net-agent/configuration/net-agent-configuration#service-ssl): el agente se comunica con New Relic mediante HTTPS.
* [SQL](/docs/agents/net-agent/configuration/net-agent-configuration#tracer-recordSql): el agente establece la grabación de SQL en `obfuscated`, lo que elimina los valores literales de cadena y numéricos potencialmente confidenciales.

## Configuración del modo de alta seguridad [#restricted]

Cuando [habilita el modo de alta seguridad](/docs/agents/net-agent/configuration/net-agent-configuration#high_security_mode), la [configuración predeterminada](#default) se bloquea para que el usuario no pueda cambiarla. Además:

* No se puede crear [un evento personalizado](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents#net-att).
* No puedes recopilar [atributos de usuario](/docs/agents/net-agent/attributes/net-agent-attributes#NRaddCustomParameter).
* El agente [elimina los mensajes de excepción](/docs/agents/net-agent/configuration/net-agent-configuration#strip_exception_messages).

## Configuraciones de seguridad personalizadas [#custom]

<Callout variant="caution">
  Si personaliza la configuración de seguridad, puede afectar la seguridad de su aplicación.
</Callout>

Si necesita configuraciones de seguridad diferentes a las del modo predeterminado o de alta seguridad, puede personalizar estas configuraciones:

* [Archivo de configuración del agente .NET](/docs/agents/net-agent/configuration/net-agent-configuration)
* [Atributo personalizado](/docs/agents/net-agent/attributes/net-agent-attributes#NRaddCustomParameter)
* [API del agente .NET](/docs/agents/net-agent/api-guides/guide-using-net-agent-api)

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
        [`auditLog`](/docs/agents/net-agent/configuration/net-agent-configuration#log-auditLog)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        Registra todos los datos enviados y recibidos de New Relic tanto en un archivo de registro auditlog como en el archivo de registro estándar.
      </td>
    </tr>

    <tr>
      <td>
        [`highSecurity`](/docs/agents/net-agent/configuration/net-agent-configuration#high_security_mode)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        Para habilitar [el modo de alta seguridad](#restricted), configúrelo en `true` y [habilite la alta seguridad en New Relic](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled). Esto restringe la información que puede enviar a New Relic.
      </td>
    </tr>

    <tr>
      <td>
        [`proxy.host`](/docs/agents/net-agent/configuration/net-agent-configuration#proxy-host)

        _cadena_
      </td>

      <td>
        Predeterminado: (ninguno)

        Algunos servidores proxy utilizan HTTP de forma predeterminada, que es un protocolo menos seguro.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.enabled`](/docs/agents/net-agent/configuration/net-agent-configuration#agent-attributes-enabled)

        _booleano_
      </td>

      <td>
        Por defecto: `true`

        De forma predeterminada, estás enviando [atributos](/docs/agents/net-agent/attributes/net-agent-attributes) a New Relic.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.exclude`](/docs/agents/net-agent/configuration/net-agent-configuration#agent-attributes-exclude)

        _cadena_
      </td>

      <td>
        Predeterminado: (ninguno)

        Si hay claves de atributos específicas que **no** desea enviar a New Relic en la traza de la transacción, identifíquelas usando `attributes.exclude`. Esto restringe la información enviada a New Relic.

        Considere si desea excluir estos atributos potencialmente sensibles usando `attributes.exclude` o si necesita que la información se envíe a New Relic:

        * `request.referer`: Elimina el referente de la solicitud.
        * `request.uri`: Elimina la ruta de la solicitud entrante de la transacción.
      </td>
    </tr>

    <tr>
      <td>
        [`recordSql`](/docs/agents/net-agent/configuration/net-agent-configuration#tracer-recordSql)

        _cadena_
      </td>

      <td>
        Por defecto: `obfuscated`

        De forma predeterminada, `recordSql` está configurado en `obfuscated`, lo que elimina los literales numéricos y de cadena.

        * Si no desea que el agente capture información de la consulta, configúrelo en `off`.
        * Si desea que el agente capture toda la información de la consulta en su formato original, configúrelo en `raw`.
        * Cuando habilita [el modo de alta seguridad](#restricted), se establece automáticamente en `obfuscated`.
      </td>
    </tr>

    <tr>
      <td>
        [`stripExceptionMessages`](/docs/agents/net-agent/configuration/net-agent-configuration#strip_exception_messages)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        De forma predeterminada, está configurado en `false`, lo que significa que el agente envía mensajes de todas las excepciones al recolector de New Relic. Si habilita [el modo de alta seguridad](#restricted), este se cambia automáticamente a `true` y el agente elimina los mensajes de las excepciones.
      </td>
    </tr>

    <tr>
      <td>
        [`customEvents.enabled`](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents#net-att)

        _booleano_
      </td>

      <td>
        Por defecto: `true`

        De forma predeterminada, el agente registra el evento enviado a la API de evento personalizado a través de `RecordCustomEvent()`. Si habilita [el modo de alta seguridad](#restricted), se establece automáticamente en `false`.
      </td>
    </tr>
  </tbody>
</table>
