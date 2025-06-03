---
title: Integração de monitoramento do Azure Load Balancer
tags:
  - Integrations
  - Microsoft Azure integrations
  - Azure integrations list
metaDescription: 'New Relic''s Microsoft Azure Load Balancer integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

[O monitoramento de infraestrutura New Relic ](/docs/infrastructure)fornece uma integração para [Microsoft Azure Load Balancer](https://docs.microsoft.com/en-us/azure/load-balancer/) que reporta dados do seu serviço Azure Load Balancer para a New Relic. Este documento explica como ativar esta integração e descreve os dados que podem ser capturados.

## Recurso

A integração da New Relic para Azure Load Balancer reporta dados métricos sobre balanceadores de carga TCP e UDP que distribuem tráfego entre instâncias de serviços definidas em um conjunto com balanceamento de carga. os dados métricos incluem disponibilidade de IP virtual e IP dinâmico e contagens de bytes e pacotes processados. Também coleta dados sobre o status e a configuração do serviço.

Usando o New Relic, você pode:

* Visualize os dados do Azure Load Balancer em um painel pré-criado.
* [Execute uma consulta personalizada e visualize os dados](/docs/using-new-relic/data/understand-data/query-new-relic-data).
* Crie condição do alerta para notificá-lo sobre alterações nos dados.

## Requisitos

As métricas do Load Balancer serão coletadas somente se você usar o SKU Microsoft Load Balancer Standard.

## Ativar integração [#activate]

Para ativar a integração:

1. Certifique-se de estar usando o [SKU padrão do Microsoft Load Balancer](#requirements).
2. Siga os procedimentos padrão para [ativar seu serviço Azure no New Relic](/docs/infrastructure/microsoft-azure-integrations/getting-started/activate-azure-integrations).

## Configuração e polling [#polling]

Você pode alterar a frequência de pesquisa e filtrar dados usando [opções de configuração](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

A New Relic consulta os serviços do Azure Load Balancer de acordo com um intervalo [de sondagem](/docs/integrations/microsoft-azure-integrations/getting-started/azure-integration-polling) padrão, que varia dependendo da integração. Frequência de sondagem para a integração do Azure Load Balancer:

* Intervalo de sondagem: 5 minutos
* Resolução: 1 minuto

## Encontre e use dados [#find-and-use]

Para [explorar seus dados de integração](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), acesse <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > Azure > (select an integration)**</DNT>.

Você pode [consultar e explorar seus dados](/docs/using-new-relic/data/understand-data/query-new-relic-data) usando o [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `AzureLoadBalancerSample` , com um valor `provider` de `AzureLoadBalancer`.

## Dados métricos [#metrics]

Para visualizar as métricas reportadas pela integração do Azure Load Balancer, consulte o tipo de evento `AzureLoadBalancerSample` . Use os metadados associados a cada métrica para [filtrar e facetar](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric) os dados que estão sendo relatados. Para obter informações métricas detalhadas, consulte a documentação [métrica suportada pelo Azure](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/metrics-supported#microsoftnetworkloadbalancers) .

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Métrica
      </th>

      <th>
        Descrição
      </th>

      <th>
        Metadados
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `vipAvailability`
      </td>

      <td>
        Disponibilidade média do caminho de dados do Load Balancer por duração.
      </td>

      <td>
        `frontendIPAddress`

        `frontendPort`
      </td>
    </tr>

    <tr>
      <td>
        `dipAvailability`
      </td>

      <td>
        Status médio da investigação de integridade do Load Balancer por duração.
      </td>

      <td>
        `frontendIPAddress`

        `frontendPort`

        `backendIPAddress`

        `backendPort`

        `protocolType`
      </td>
    </tr>

    <tr>
      <td>
        `byteCount`
      </td>

      <td>
        Número total de bytes transmitidos no período.
      </td>

      <td>
        `frontendIPAddress`

        `frontendPort`

        `direction`
      </td>
    </tr>

    <tr>
      <td>
        `packetCount`
      </td>

      <td>
        Número total de pacotes transmitidos dentro do período.
      </td>

      <td>
        `frontendIPAddress`

        `frontendPort`

        `direction`
      </td>
    </tr>

    <tr>
      <td>
        `synCount`
      </td>

      <td>
        Número total de pacotes SYN transmitidos dentro do período.
      </td>

      <td>
        `frontendIPAddress`

        `frontendPort`

        `direction`
      </td>
    </tr>

    <tr>
      <td>
        `snatConnectionCount`
      </td>

      <td>
        Número total de novas conexões SNAT, ou seja, conexões de saída criadas dentro do período.
      </td>

      <td>
        `frontendIPAddress`

        `backendIPAddress`

        `connectionState`
      </td>
    </tr>

    <tr>
      <td>
        `allocatedSnatPorts`
      </td>

      <td>
        Número total de portas SNAT alocadas no período.
      </td>

      <td>
        `frontendIPAddress`

        `backendIPAddress`

        `protocolType`
      </td>
    </tr>

    <tr>
      <td>
        `usedSnatPorts`
      </td>

      <td>
        Número total de portas SNAT usadas no período.
      </td>

      <td>
        `frontendIPAddress`

        `backendIPAddress`

        `protocolType`
      </td>
    </tr>
  </tbody>
</table>
