---
title: Amazon ECS/ECR monitoramento de integração
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s Amazon ECS/ECR monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

Você pode relatar seus dados [Amazon EC2 contêiner Service (ECS)](https://aws.amazon.com/documentation/ecs/) e seus dados [Amazon EC2 contêiner Registry (ECR)](http://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) para New Relic.

## Alternativas recomendadas [#alternatives]

Como alternativa preferencial a esta integração, você pode monitor todas as informações do CloudWatch a partir de seus serviços da AWS, incluindo namespace personalizado. Para fazer isso, habilite a [integração do AWS CloudWatch Metric Streams](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream).

Também oferecemos uma [integração ECS no host](/docs/integrations/elastic-container-service-integration/get-started/introduction-amazon-ecs-integration), que relata um conjunto de dados diferente desta integração baseada em nuvem.

## Visão geral da integração [#overview]

A integração de monitoramento ECS/ECR New Relic permite monitor capacidade reservada vs. utilizada, execução de tarefas e registro de contêiner. Os dados de integração da AWS também estão disponíveis para [análise e criação de gráficos](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure#insights).

## Ative a integração [#activate]

Para habilitar essa integração, siga nossa documentação para [conectar os serviços da AWS ao New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

Se você tiver serviços em execução no ECS, também poderá [ativar o monitoramento desses serviços](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).

<Callout variant="important">
  Na AWS, você deve [aceitar](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-arn-timeline) o novo formato ARN ([anúncio](https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-deployment-to-the-new-arn-and-resource-id-format-2/)) para distinguir entre serviços com o mesmo nome em clusters diferentes. Caso contrário, você poderá ter colisão de dados.
</Callout>

## Configuração e polling [#polling]

Você pode alterar a frequência de pesquisa e filtrar dados usando [opções de configuração](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Os valores [de pesquisa padrão](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) para a integração do Amazon ECS/ECR são:

* Intervalo de sondagem New Relic : 5 minutos
* Intervalo de dados do Amazon CloudWatch: 1 minuto ou 5 minutos

## Encontre e use dados [#find-data]

Para encontrar os dados dessa integração, acesse <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> e selecione um dos links de integração do Amazon ECS/ECR.

Você pode [consultar e explorar seus dados](/docs/using-new-relic/data/understand-data/query-new-relic-data) usando o [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `ComputeSample` . Use um valor `provider` de `EcsCluster` para dados de cluster ou um valor `provider` de `EcsService` para dados de serviço de cluster.

A integração coleta estas definições de ECR/ECS:

<table>
  <thead>
    <tr>
      <th style={{ width: "240px" }}>
        Nome
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `ClusterName`
      </td>

      <td>
        Esta dimensão filtra os dados solicitados para todos os recursos em um cluster especificado. Todas as métricas do Amazon ECS são filtradas por `ClusterName`.
      </td>
    </tr>

    <tr>
      <td>
        `ServiceName`
      </td>

      <td>
        Esta dimensão filtra os dados solicitados para todos os recursos em um serviço especificado em um cluster especificado.
      </td>
    </tr>
  </tbody>
</table>

Para obter mais informações sobre como localizar e usar dados de integração, consulte [Compreender os dados de integração](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Dados métricos [#metrics]

A integração ECS/ECR coleta os seguintes dados:

<Callout variant="tip">
  Para obter descrições completas dessas métricas, consulte a documentação da Amazon sobre [ECS](https://aws.amazon.com/documentation/ecs/) e [ECR](https://aws.amazon.com/documentation/ecr/).
</Callout>

### Métrica cluster e serviço

<table>
  <thead>
    <tr>
      <th style={{ width: "285" }}>
        Nome
      </th>

      <th>
        Tipo de dados
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `CPUUtilization`
      </td>

      <td>
        por cento
      </td>
    </tr>

    <tr>
      <td>
        `MemoryUtilization`
      </td>

      <td>
        por cento
      </td>
    </tr>
  </tbody>
</table>

### Métrica de cluster [#cluster]

<table>
  <thead>
    <tr>
      <th style={{ width: "285" }}>
        Nome
      </th>

      <th>
        Tipo de dados
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `CPUReservation`
      </td>

      <td>
        por cento
      </td>
    </tr>

    <tr>
      <td>
        `MemoryReservation`
      </td>

      <td>
        por cento
      </td>
    </tr>
  </tbody>
</table>

### Métrica de serviço [#service]

<table>
  <thead>
    <tr>
      <th style={{ width: "285" }}>
        Nome
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Active Service`
      </td>

      <td>
        O número de serviços em execução no cluster em um estado `ACTIVE`
      </td>
    </tr>

    <tr>
      <td>
        `Pending Tasks`
      </td>

      <td>
        Número de tarefas no cluster que estão no estado `PENDING`
      </td>
    </tr>

    <tr>
      <td>
        `Running Tasks`
      </td>

      <td>
        Número de tarefas no cluster que estão no estado `RUNNING`
      </td>
    </tr>

    <tr>
      <td>
        `Registered Instances`
      </td>

      <td>
        Quantidade de instância do contêiner cadastrada no cluster
      </td>
    </tr>
  </tbody>
</table>
