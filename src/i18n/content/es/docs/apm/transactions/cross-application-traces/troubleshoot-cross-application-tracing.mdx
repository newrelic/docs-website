---
title: Solucionar problemas de rastreo multiaplicación
tags:
  - APM
  - Transactions
  - Cross application traces
metaDescription: Troubleshooting tips when viewing APM's cross application tracing maps.
freshnessValidatedDate: never
translationType: machine
---

A continuación se ofrecen consejos de resolución de problemas al utilizar [la multiaplicación traza](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces). Tenga en cuenta que esta función no es lo mismo que [el rastreo distribuido](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing), que se prefiere al rastreo multiaplicación.

## Versiones y protocolos del agente [#agents]

Asegúrese de cumplir con estos requisitos para la versión, los protocolos, las interfaces o la biblioteca de cola de mensajes de su agente. Si está utilizando un protocolo que no figura aquí, no verá una conexión entre su aplicación.

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Agent version**
        </DNT>
      </th>

      <th>
        <DNT>
          **Notes**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [Go 1.11 o superior](/docs/release-notes/agent-release-notes/go-release-notes/go-agent-111)
      </td>

      <td>
        HTTP, HTTPS
      </td>
    </tr>

    <tr>
      <td>
        [Java 3.9.0 o superior](/docs/release-notes/agent-release-notes/java-release-notes)
      </td>

      <td>
        HTTP, HTTP, JMS 1.1, RabbitMQ

        El agente de Java también admite varias bibliotecas de cola de mensajes, incluidas aquellas que utilizan la interfaz JMS 1.1.
      </td>
    </tr>

    <tr>
      <td>
        [.NET 4.2 o superior](/docs/release-notes/agent-release-notes/net-release-notes)
      </td>

      <td>
        HTTP y [sistemas de mensajería .NET compatibles](/docs/agents/net-agent/getting-started/compatibility-requirements-net-agent#messaging)
      </td>
    </tr>

    <tr>
      <td>
        [Node.js 2.0.0 o superior](/docs/release-notes/agent-release-notes/nodejs-release-notes)
      </td>

      <td>
        HTTP, HTTPS, RabbitMQ
      </td>
    </tr>

    <tr>
      <td>
        [PHP 4.19.0 o superior](/docs/release-notes/agent-release-notes/php-release-notes)
      </td>

      <td>
        HTTP, HTTPS y [sistemas de cola de mensajes PHP compatibles](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#queuing)
      </td>
    </tr>

    <tr>
      <td>
        [Python 2.38.0.31 o superior](/docs/release-notes/agent-release-notes/python-release-notes)
      </td>

      <td>
        HTTP, HTTPS y [sistemas de cola de mensajes Python compatibles](/docs/agents/python-agent/supported-features/python-message-queues)
      </td>
    </tr>

    <tr>
      <td>
        [Ruby 4.3.0 o superior](/docs/release-notes/agent-release-notes/ruby-release-notes)
      </td>

      <td>
        [HTTP](/docs/agents/ruby-agent/features/http-client-tracing-ruby), HTTPS, [RabbitMQ](/docs/agents/ruby-agent/features/message-queues)
      </td>
    </tr>
  </tbody>
</table>

## Requisitos del archivo de configuración [#requirements]

En general, la característica de rastreo multiaplicación de New Relic está habilitada de forma predeterminada. Los requisitos para cambiar su archivo de configuración varían, dependiendo de su agente New Relic:

* Go (no compatible)
* [Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Cross_Application_Tracer)
* [.NET](/docs/agents/net-agent/installation-and-configuration/net-agent-configuration#cross_application_tracer)
* [Node.js](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration) (no se necesitan configuraciones de archivos de configuración específicas para Node.js)
* [PHP](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-cross-app-tracer-enabled)
* [Python](/docs/agents/python-agent/installation-configuration/python-agent-configuration#cross-application-tracer)
* [Ruby](/docs/agents/ruby-agent/features/cross-application-tracing-ruby)

## Aplicaciones de alto rendimiento

Multiaplicación traza confiar en transacción evento para asociar transacciones relacionadas. Si tiene una aplicación de alto rendimiento, su agente puede alcanzar la cantidad máxima de eventos que puede registrar en un minuto y recurrirá al evento de muestreo. Si se muestrean los eventos de una transacción, es posible que vea una traza de multiaplicación incompleta, que a veces incluye solo las transacciones en las que está enfocado.

Si su aplicación tiene un alto rendimiento, alguna traza de multiaplicación aparecerá incompleta, a veces sin enlaces. Intente ver una traza de la transacción diferente. Para reducir o eliminar el muestreo, también puede ajustar la cantidad de eventos de transacción almacenados en la configuración de su agente.

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **High throughput apps**
        </DNT>
      </th>

      <th>
        <DNT>
          **Troubleshooting tips**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Java
      </td>

      <td>
        En la sección <DNT>**transaction_events**</DNT> , ajuste la [configuración](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#ae-max_samples_stored) para `max_samples_stored`.
      </td>
    </tr>

    <tr>
      <td>
        Ruby
      </td>

      <td>
        Ajuste la [configuración](/docs/agents/ruby-agent/installation-and-configuration/ruby-agent-configuration#analytics_events) para `analytics_events.max_samples_stored`.
      </td>
    </tr>
  </tbody>
</table>

## Apoderados

Si espera ver un enlace de traza multiaplicación pero no aparece constantemente, puede haber un proxy o intermediario entre la comunicación de su aplicación. El seguimiento de aplicaciones múltiples se basa en encabezados HTTP y propiedades JMS que se pasan de una aplicación a otra. Los servidores proxy HTTP y los intermediarios de mensajes a veces eliminan esos encabezados.

## Procesamiento multiproceso (Java) [#multi-threaded-processing]

Si una o más de sus aplicaciones Java utilizan un modelo de programación asíncrono o "reactivo", la actividad de una transacción puede abarcar varios subprocesos. New Relic admite el framework Play y Servlet Async, pero no todos los marcos asíncronos. Para un marco no compatible, la actividad en otros subprocesos no se informa como parte de la transacción. No se trazarán llamadas a otras aplicaciones.

## Multiples cuentas [#accounts]

Actualmente la multiaplicación traza no cruza cuentas de New Relic. Si tiene varias cuentas de New Relic (incluidas cuentas infantiles), solo verá la traza para la aplicación dentro de una cuenta.

Nuestra característica [de rastreo distribuido](/docs/distributed-tracing/concepts/introduction-distributed-tracing) cruza los límites de las cuentas.
