---
title: Actualizar la configuración de Java para versiones legacy del agente
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'New Relic Java agent versions earlier than 3.16.1: How to update your newrelic.yml file to the latest version of agent attribute configuration.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Utiliza agente de Java versión 3.16.1 o inferior y necesita actualizar a la [última versión](/docs/release-notes/agent-release-notes/java-release-notes), pero utiliza opciones de configuración obsoletas para configurar el atributo del agente.

## Solución

En `newrelic.yml`, edite las propiedades de configuración que utiliza para compatibilidad con las últimas versiones:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Deprecated property**
        </DNT>
      </th>

      <th>
        <DNT>
          **New property**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `analytics_events`
      </td>

      <td>
        `transaction_events`

        La sección del archivo de configuración <DNT>**newrelic.yml**</DNT> denominada `analytics_events` ha quedado obsoleta. Utilice la sección `transaction_events` en su lugar.
      </td>
    </tr>

    <tr>
      <td>
        `capture_params`
      </td>

      <td>
        `attributes.include: request.parameters.*`

        De forma predeterminada, los parámetros de solicitud no se envían a New Relic. Agregue `request.parameters.*` a la lista `attributes.include` para activar todos los parámetros de solicitud. La propiedad `capture_params` ha quedado obsoleta.
      </td>
    </tr>

    <tr>
      <td>
        `ignored_params`
      </td>

      <td>
        `attributes.exclude: request.parameters.{name}`

        Agregue cada clave de parámetro de solicitud a la lista `attributes.exclude` . Asegúrese de anteponer la clave con `request.parameters`. La propiedad `ignored_params` ha quedado obsoleta.
      </td>
    </tr>

    <tr>
      <td>
        `capture_messaging_params`
      </td>

      <td>
        `attributes.include: message.parameters.*`

        De forma predeterminada, los parámetros de la cola de mensajes no se envían a New Relic. Anteriormente, establecer `capture_messaging_params` en `true` habilitaría el parámetro de cola de mensajes. Ahora debes agregar `message.parameters.*` a la lista `attributes.include` .
      </td>
    </tr>

    <tr>
      <td>
        `ignored_messaging_params`
      </td>

      <td>
        `attributes.exclude: message.parameters.{name}`

        Anteriormente, podía establecer `ignored_messaging_params` en una lista de claves de parámetros de cola de mensajes para excluir. Ahora debe agregar cada clave de parámetro de la cola de mensajes a la lista `attributes.exclude` . Asegúrese de anteponer la clave con `message.parameters`.
      </td>
    </tr>

    <tr>
      <td>
        `capture_attributes`
      </td>

      <td>
        `attributes.enabled`

        El antiguo indicador `capture_attributes` desactivaría la recopilación de atributos del usuario. Esto ha quedado obsoleto. Utilice `attributes.enabled` en su lugar.
      </td>
    </tr>
  </tbody>
</table>

En este ejemplo, el agente de Java recopila parámetros de solicitud y los registra en los destinos del rastreador de transacciones y del recolector de errores. Esto emula la habilitación de las opciones legacy [de configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) para `Capture attributes` o `Capture parameters`.

Para personalizar el elemento [`attributes`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#attributes) en su archivo de configuración de agente de Java:

```
attributes.enabled: true
  attributes.include: request.parameters.*
```
