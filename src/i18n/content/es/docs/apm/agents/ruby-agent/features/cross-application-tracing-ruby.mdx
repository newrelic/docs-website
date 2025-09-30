---
title: Rastreo multiaplicación en Ruby
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'To set up cross application tracing for the New Relic Ruby agent, start here.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  A partir de la versión 8.0.0 del agente Ruby, [rastreo distribuido](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing) está activado de forma predeterminada. rastreo distribuido mejora el rastreo multiaplicación y se recomienda para sistemas distribuidos grandes.

  El rastreo de aplicaciones múltiples está obsoleto en favor de distributed tracing y se eliminará en una futura versión de agente. Si necesita continuar usando el rastreo de múltiples aplicaciones, como para un framework de middleware no estándar, consulte la [información de configuración](#configuration) en este documento.
</Callout>

## Requisitos

Siga estos requisitos para utilizar el rastreo multiaplicación con el agente Ruby:

1. Asegúrese de que las solicitudes instrumentadas utilicen una [biblioteca de cliente HTTP compatible](/docs/ruby/ruby-http-clients).
2. Instale o actualice al [último agente Ruby](/docs/ruby/ruby-agent-installation) (versión 3.5.5.38 o superior).
3. Siga los requisitos para la instalación de middleware.

## Instalación de middleware [#middleware]

El rastreo de aplicaciones múltiples funciona con Rack y, por lo tanto, requiere Rails 2.3 o superior, u otro framework compatible.

* Si usa Rails, el agente Ruby instalará el middleware automáticamente.
* Si utiliza un framework diferente basado en Rack, agregue manualmente el middleware `NewRelic::Rack::AgentHooks` a su stack.

## Configuración [#configuration]

El rastreo multiaplicación se puede controlar mediante un flag de configuración. A partir de la versión 8.0.0 del agente Ruby, el valor predeterminado para `cross_application_tracer.enabled` es `false`, incluso cuando no se especifica. Para habilitar el seguimiento de aplicaciones múltiples, debe establecer este indicador en `true` y establecer `distributed_tracing.enabled` en `false`.

```yaml
cross_application_tracer:
  enabled: true
distributed_tracing:
  enabled: false
```

Para versiones inferiores a 8.0.0, la multiaplicación se puede configurar usando la siguiente configuración.

```yaml
cross_application_tracer:
  enabled: true
```

## Multiaplicación traza mediciones [#cat-measurements]

La medida <DNT>**external**</DNT> (de la aplicación que llama) siempre será mayor que la medida <DNT>**internal**</DNT> (de la aplicación llamada). La medición externa se recopila mediante la instrumentación de New Relic de la biblioteca del cliente HTTP (como Net::HTTP). La medición interna la toma la instrumentación de New Relic del framework web (como Rails) en la aplicación llamada.

Estos son algunos de los componentes principales incluidos en la medición externa que **no** están incluidos en la medición interna:

<CollapserGroup>
  <Collapser
    id="calling"
    title="De aplicación de llamadas a host objetivo"
  >
    * Tiempo de DNS para resolver el nombre de host de destino
    * Es hora de establecer una nueva conexión TCP con el host de destino (apretón de manos de tres vías TCP más negociación SSL, si SSL está en uso)
    * Tiempo dedicado a la biblioteca del cliente HTTP para preparar y serializar la solicitud HTTP
    * Latencia de red para enviar la solicitud a través del cable al host objetivo
  </Collapser>

  <Collapser
    id="receiving"
    title="Anfitrión receptor"
  >
    * Tiempo para que el servidor web frontend en el host receptor procese la solicitud y la envíe al servidor web backend en el host receptor

    * Tiempo para que la solicitud se analice en el servidor web backend en el host receptor

    * Tiempo para que la solicitud se "filtre" a través de los middlewares de Rack en el host receptor

    * Tiempo para que el framework web dirija la solicitud a la acción del controlador adecuada

      Una vez que el framework web lo ha dirigido a la acción del controlador adecuada, aquí es donde ocurre la medición interna. Entonces:

    * Es hora de que la solicitud se "filtre" hacia atrás a través de los middlewares de Rack

    * Latencia de red para escribir la respuesta al servidor solicitante

    * Tiempo en el host solicitante para que la biblioteca del cliente HTTP analice la respuesta HTTP
  </Collapser>
</CollapserGroup>

Algunos de estos componentes son más fáciles de controlar que otros. Por ejemplo, para capturar tiempos para los <DNT>**Receiving host**</DNT> elementos anteriores, asegúrese de tener configurado [el monitoreo de la cola de solicitudes](/docs/features/configuring-request-queue-reporting) en la aplicación receptora.

## Obtener rastreo distribuido [#distributed-tracing]

A partir de la versión 8.0.0 del agente Ruby, [rastreo distribuido](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing) está activado de forma predeterminada. rastreo distribuido es una mejora del rastreo multiaplicación y se recomienda para sistemas distribuidos grandes.
