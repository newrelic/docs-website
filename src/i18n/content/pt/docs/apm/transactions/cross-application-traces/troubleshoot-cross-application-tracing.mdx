---
title: Solucionar problemas de rastreamento multiaplicativo
tags:
  - APM
  - Transactions
  - Cross application traces
metaDescription: Troubleshooting tips when viewing APM's cross application tracing maps.
freshnessValidatedDate: never
translationType: machine
---

Aqui estão algumas dicas de resolução de problemas ao usar [o trace multiaplicativo](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces). Observe que esse recurso não é o mesmo que [distributed tracing](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing), que é preferível ao rastreamento multiaplicativo.

## Versões e protocolos do agente [#agents]

Certifique-se de atender a esses requisitos para a versão, protocolos, interfaces ou biblioteca de fila de mensagens do seu agente. Se você estiver usando um protocolo que não esteja listado aqui, você não verá uma conexão entre o seu aplicativo.

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
        [Go 1.11 ou superior](/docs/release-notes/agent-release-notes/go-release-notes/go-agent-111)
      </td>

      <td>
        HTTP, HTTPS
      </td>
    </tr>

    <tr>
      <td>
        [Java 3.9.0 ou superior](/docs/release-notes/agent-release-notes/java-release-notes)
      </td>

      <td>
        HTTP, HTTPs, JMS 1.1, RabbitMQ

        O agente Java também suporta diversas filas de mensagens da biblioteca, inclusive aquelas que utilizam a interface JMS 1.1.
      </td>
    </tr>

    <tr>
      <td>
        [.NET 4.2 ou superior](/docs/release-notes/agent-release-notes/net-release-notes)
      </td>

      <td>
        HTTP e [sistemas de mensagens .NET compatíveis](/docs/agents/net-agent/getting-started/compatibility-requirements-net-agent#messaging)
      </td>
    </tr>

    <tr>
      <td>
        [Node.js 2.0.0 ou superior](/docs/release-notes/agent-release-notes/nodejs-release-notes)
      </td>

      <td>
        HTTP, HTTPS, RabbitMQ
      </td>
    </tr>

    <tr>
      <td>
        [PHP 4.19.0 ou superior](/docs/release-notes/agent-release-notes/php-release-notes)
      </td>

      <td>
        [Sistemas de enfileiramento de mensagens HTTP, HTTPS e PHP suportados](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#queuing)
      </td>
    </tr>

    <tr>
      <td>
        [Python 2.38.0.31 ou superior](/docs/release-notes/agent-release-notes/python-release-notes)
      </td>

      <td>
        HTTP, HTTPS e [sistemas de enfileiramento de mensagens Python suportados](/docs/agents/python-agent/supported-features/python-message-queues)
      </td>
    </tr>

    <tr>
      <td>
        [Ruby 4.3.0 ou superior](/docs/release-notes/agent-release-notes/ruby-release-notes)
      </td>

      <td>
        [HTTP](/docs/agents/ruby-agent/features/http-client-tracing-ruby), HTTPS, [RabbitMQ](/docs/agents/ruby-agent/features/message-queues)
      </td>
    </tr>
  </tbody>
</table>

## Requisitos do arquivo de configuração [#requirements]

Em geral, o recurso de rastreamento multiaplicativo do New Relic está habilitado por padrão. Os requisitos para alterar seu arquivo de configuração variam dependendo do seu agente New Relic:

* Go (não suportado)
* [Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Cross_Application_Tracer)
* [.NET](/docs/agents/net-agent/installation-and-configuration/net-agent-configuration#cross_application_tracer)
* [Node.js](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration) (nenhuma configuração específica de arquivo de configuração necessária para Node.js)
* [PHP](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-cross-app-tracer-enabled)
* [Python](/docs/agents/python-agent/installation-configuration/python-agent-configuration#cross-application-tracer)
* [Ruby](/docs/agents/ruby-agent/features/cross-application-tracing-ruby)

## Altas taxas de transferência de aplicativos

O rastreamento multiaplicativo depende do evento de transação para associar transações relacionadas. Se você tiver uma aplicação de altas taxas de transferência, seu agente poderá atingir o número máximo de eventos que pode registrar em um minuto e voltará ao evento de amostragem. Se os eventos de uma transação forem amostrados, você poderá ver um trace multiaplicativo incompleto, incluindo às vezes apenas as transações nas quais você está focado.

Se o seu aplicativo tiver altas taxas de transferência, algum rastreamento multiaplicativo aparecerá incompleto, às vezes sem links. Tente visualizar um rastreamento de transação diferente. Para reduzir ou eliminar a amostragem, você também pode ajustar o número de eventos de transação armazenados na configuração do seu agente.

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
        Na seção <DNT>**transaction_events**</DNT> , ajuste a [configuração](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#ae-max_samples_stored) de `max_samples_stored`.
      </td>
    </tr>

    <tr>
      <td>
        Ruby
      </td>

      <td>
        Ajuste a [configuração](/docs/agents/ruby-agent/installation-and-configuration/ruby-agent-configuration#analytics_events) para `analytics_events.max_samples_stored`.
      </td>
    </tr>
  </tbody>
</table>

## Proxies

Se você espera ver um link trace multiaplicativo mas ele não aparece consistentemente, pode haver um proxy ou broker entre a comunicação da sua aplicação. o rastreamento multiaplicativo depende de cabeçalhos HTTP e propriedades JMS sendo passadas de um aplicativo para outro. Os proxies HTTP e os corretores de mensagens às vezes removem esses cabeçalhos.

## Processamento multithread (Java) [#multi-threaded-processing]

Se um ou mais aplicativos Java usarem um modelo de programação assíncrono ou "reativo", a atividade de uma transação poderá abranger vários threads. New Relic oferece suporte à framework Play e Servlet Async, mas não a toda estrutura assíncrona. Para estruturas não suportadas, a atividade em outros threads não é relatada como parte da transação. As chamadas para outro aplicativo não serão rastreadas.

## Várias contas [#accounts]

Atualmente o rastreamento multiaplicativo não cruza contas New Relic. Se você tiver várias contas New Relic (incluindo contas infantis), verá apenas o rastreamento do aplicativo em uma conta.

Nosso recurso [distributed tracing](/docs/distributed-tracing/concepts/introduction-distributed-tracing) ultrapassa os limites da conta.
