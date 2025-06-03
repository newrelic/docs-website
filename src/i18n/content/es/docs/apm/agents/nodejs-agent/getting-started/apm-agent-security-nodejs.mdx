---
title: 'Seguridad del agente APM: Node.js'
tags:
  - Agents
  - Nodejs agent
  - Getting started
metaDescription: Increasing levels of security you can customize for how your New Relic Node.js agent sends data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

La configuración de seguridad predeterminada del agente New Relic Node.js proporciona automáticamente [seguridad para sus datos APM](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security) para garantizar la privacidad de los datos y limitar el tipo de información que recibe New Relic. Es posible que tenga motivos comerciales para cambiar esta configuración.

Si desea restringir la información que recibe New Relic, puede habilitar [el modo de alta seguridad](#restricted). Si el modo de alta seguridad o la configuración predeterminada no funcionan para las necesidades de su negocio, puede aplicar configuraciones [personalizadas](#custom) .

Para obtener más información sobre las medidas de seguridad de New Relic, consulte nuestra [documentación de seguridad y privacidad](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) o visite el [sitio web de seguridad de New Relic](https://newrelic.com/security).

## Configuración de seguridad predeterminada [#default]

De forma predeterminada, así es como el agente de Node.js maneja los siguientes datos potencialmente confidenciales:

* Parámetro de solicitud: El agente no captura el parámetro de solicitud HTTP. Si desea capturar todos los parámetros de solicitud, agregue `'request.parameters.*'` a [`attributes.include`](/docs/agents/nodejs-agent/attributes/nodejs-agent-attributes#cfg-attributes-include) en su archivo de configuración.
* [HTTPS](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#ssl): el agente se comunica con New Relic mediante HTTPS.
* [SQL](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#record-sql): el agente establece la grabación de SQL en `off`. Cuando se establece en `off`, el agente no captura la consulta lenta y no incluye backtraces ni SQL en la traza de la transacción.

## Configuración del modo de alta seguridad [#restricted]

Cuando [habilita el modo de alta seguridad](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#high_security), la [configuración predeterminada](#default) se bloquea para que el usuario no pueda cambiarla. Además:

* El agente no recopila el parámetro de la cola de mensajes.
* La configuración de `record_sql` se cambia a `obfuscated`, lo que elimina los literales numéricos y de cadena.

## Configuraciones de seguridad personalizadas [#custom]

<Callout variant="caution">
  Si personaliza la configuración de seguridad, puede afectar la seguridad de su aplicación.
</Callout>

Si necesita configuraciones de seguridad diferentes a las del modo predeterminado o de alta seguridad, puede personalizar estas configuraciones:

* [Archivo de configuración del agente Node.js](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration)
* [Atributo personalizado](/docs/agents/nodejs-agent/api-guides/nodejs-agent-api#add-custom-param)
* [API del agente Node.js](/docs/agents/nodejs-agent/api-guides/guide-using-nodejs-agent-api)

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
        [`audit_log.enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#audit_log)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        De forma predeterminada, el agente no log todos los datos enviados a New Relic en el archivo de registro del agente.

        Si configura esto en `true`, el agente registra los datos enviados al recolector New Relic en el archivo de registro del agente. Luego puede evaluar la información que envía el agente revisando el archivo de registro del agente para ver si incluye información confidencial.
      </td>
    </tr>

    <tr>
      <td>
        [`high_security`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#high_security)

        _booleano_
      </td>

      <td>
        Por defecto: `false`

        Para habilitar [el modo de alta seguridad](#restricted), configúrelo en `true` y [habilite la alta seguridad en New Relic](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled). Esto restringe la información que puede enviar a New Relic.
      </td>
    </tr>

    <tr>
      <td>
        [`proxy_host`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#proxy_host)

        _cadena_
      </td>

      <td>
        Predeterminado: (ninguno)

        Algunos servidores proxy utilizan HTTP de forma predeterminada, que es un protocolo menos seguro.
      </td>
    </tr>

    <tr>
      <td>
        [`record_sql`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#record-sql)

        _cadena_
      </td>

      <td>
        Por defecto: `off`

        De forma predeterminada, `record_sql` está configurado en `off`. Si habilita [el modo de alta seguridad](#restricted), esto se cambia automáticamente a `obfuscated`.

        Puede cambiar esta configuración para ajustar la información que el agente envía al recolector de New Relic.

        * Si no desea que el agente capture la consulta lenta o incluya backtraces y SQL en la traza de la transacción, configúrelo en `off`.
        * Si desea que el agente elimine los literales numéricos y de cadena, configúrelo en `obfuscated`.
        * Si desea que el agente capture toda la información de la consulta en su formato original, configúrelo en `raw`.
      </td>
    </tr>
  </tbody>
</table>
