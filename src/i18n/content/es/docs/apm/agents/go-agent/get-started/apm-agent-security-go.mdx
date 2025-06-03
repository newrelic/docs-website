---
title: 'Seguridad del agente APM: Go'
tags:
  - Agents
  - Go agent
  - Get started
metaDescription: How to customize the security levels for data sent to New Relic from your Go app.
freshnessValidatedDate: never
translationType: machine
---

La configuración de seguridad predeterminada del agente New Relic Go proporciona automáticamente [seguridad para sus datos de APM](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security) para garantizar la privacidad de los datos y limitar el tipo de información que recibe New Relic. Es posible que tenga motivos comerciales para cambiar esta configuración.

Si desea restringir la información que recibe New Relic, puede habilitar [el modo de alta seguridad](#restricted). Si el modo de alta seguridad o la configuración predeterminada no funcionan para las necesidades de su negocio, puede aplicar configuraciones [personalizadas](#custom) .

Para obtener más información sobre las medidas de seguridad de New Relic, consulte nuestra [documentación de seguridad y privacidad](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) o visite el [sitio web de seguridad de New Relic](https://newrelic.com/security).

## Configuración de seguridad predeterminada [#default]

De forma predeterminada, así es como el agente de New Relic Go maneja los siguientes datos potencialmente confidenciales:

* Parámetro de solicitud: El agente no captura el parámetro de solicitud HTTP.
* [HTTPS](/docs/agents/go-agent/instrumentation/go-agent-configuration#use-tls): el agente se comunica con New Relic mediante HTTPS.

## Configuración del modo de alta seguridad [#restricted]

Cuando [habilita el modo de alta seguridad](/docs/agents/go-agent/instrumentation/go-agent-configuration#high_security), la [configuración de seguridad predeterminada](#default) se bloquea para que el usuario no pueda cambiarla. Además:

* No se puede crear [un evento personalizado](/docs/agents/go-agent/features/create-custom-events-insights-go).
* El agente elimina [los mensajes de excepción de los errores](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#error-reporting).
* El agente elimina `QueryParameters` de los segmentos de la base de datos.

## Configuraciones de seguridad personalizadas [#custom]

<Callout variant="caution">
  Si personaliza la configuración de seguridad, puede afectar la seguridad de su aplicación.
</Callout>

Si necesita configuraciones de seguridad diferentes a las del modo predeterminado o de alta seguridad, puede personalizar estas configuraciones:

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
        [`HighSecurity`](/docs/agents/go-agent/instrumentation/go-agent-configuration#high_security)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        Para habilitar [el modo de alta seguridad](#restricted), configúrelo en `true` y [habilite la alta seguridad (V2)](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled). Esto restringe la información que puede enviar a New Relic.
      </td>
    </tr>

    <tr>
      <td>
        [`Attributes.Enabled`](https://github.com/newrelic/go-agent/blob/master/config.go#L220)

        _booleano_
      </td>

      <td>
        Por defecto: `true`

        Por defecto, estás enviando [algún atributo](/docs/agents/go-agent/instrumentation/go-agent-attributes#attributes) a New Relic. Si no desea enviar estos atributos predeterminados a New Relic, establezca `Attributes.Enabled` en `false`.
      </td>
    </tr>

    <tr>
      <td>
        [`Attributes.Exclude`](/docs/agents/go-agent/instrumentation/go-agent-attributes#turn-attributes-on-off)

        _cadena_
      </td>

      <td>
        Predeterminado: (ninguno)

        Si hay claves de atributos específicas que **no** desea enviar a New Relic en la traza de la transacción, identifíquelas usando `Attributes.Exclude`. Esto restringe la información enviada a New Relic.

        Para ver ejemplos de cómo deshabilitar la grabación de cada atributo, consulte sus descripciones en la [página de atributos del agente Go](/docs/agents/go-agent/instrumentation/go-agent-attributes#attributes).
      </td>
    </tr>

    <tr>
      <td>
        [`CustomInsightsEvents.Enabled`](/docs/agents/go-agent/instrumentation/go-agent-configuration#custom-insights-events-enabled)

        _booleano_
      </td>

      <td>
        Por defecto: `true`

        De forma predeterminada, el agente registra el evento enviado a la API de eventos usando [`RecordCustomEvent`](/docs/agents/go-agent/features/create-custom-events-insights-go). Si habilita [el modo de alta seguridad](#restricted), se establece automáticamente en `false`.
      </td>
    </tr>
  </tbody>
</table>
