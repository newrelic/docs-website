---
title: Compreenda e use dados do ECS
tags:
  - Integrations
  - Elastic Container Service integration
  - Understand use data
metaDescription: 'How to understand, use, and query the data reported by New Relic''s Amazon ECS on-host integration.'
freshnessValidatedDate: never
translationType: machine
---

[A integração do ECS](/docs/introduction-amazon-ecs-integration) no host da New Relic relata e exibe dados de desempenho do seu ambiente [Amazon ECS](https://docs.aws.amazon.com/ecs/index.html) . Aqui explicamos como encontrar, compreender e usar os dados relatados por esta integração.

## Ver dados [#find-data]

Para visualizar o dashboard de integração do ECS:

1. Acesse

   <DNT>
     **[one.newrelic.com](https://one.newrelic.com/all-capabilities)**
   </DNT>

   e, no campo

   <DNT>
     **Filter by name or tags**
   </DNT>

   , pesquise cluster ECS ou digite o nome do cluster ECS.

2. Para visualizar um dashboard, selecione o nome da entidade correspondente ao seu cluster ECS.

Além do painel pré-construído, você também pode criar suas próprias consultas e gráficos personalizados usando o [criador de consulta](/docs/chart-builder/use-chart-builder/get-started/introduction-chart-builder). Para saber como consultar esses dados, veja [Entender os dados](#understand).

## Consulte seus dados [#understand]

Os dados reportados por esta integração são exibidos em seu [dashboard](#find-data) e também ficam disponíveis para [consulta](/docs/using-new-relic/data/understand-data/query-new-relic-data) e criação de gráficos e dashboard customizados.

Esta integração reporta um [evento](/docs/using-new-relic/data/understand-data/new-relic-data-types#events-new-relic) `EcsClusterSample`, com atributo `clusterName`, `awsRegion`, `ecsLaunchType` e `arn`.

Outros tipos de dados que podem estar disponíveis para consulta:

* [evento reportado por agente de infraestrutura, incluindo](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-events) [Docker](/docs/infrastructure/install-configure-manage-infrastructure/docker-installation/docker-instrumentation-infrastructure#docker-data)

Todos os eventos reportados de um cluster ECS contêm os atributos `ecsClusterName`, `ecsLaunchType` e `ecsClusterArn`.

Aqui está um exemplo [de consultaNRQL ](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql)que retorna a contagem de contêineres associados a cada imagem Docker em um cluster ECS chamado `MyClusterName` criado em `us-east-1`:

```sql
SELECT uniqueCount(containerId) 
FROM ContainerSample 
WHERE awsRegion = 'us-east-1' 
AND ecsClusterName = 'MyClusterName' 
FACET imageName SINCE 1 HOUR AGO
```

<Callout variant="important">
  Nos nós EC2 com Cgroup versão V2, a `nri-docker` integração coleta todos os contêineres métricos da docker API. Para uma lista de variações na métrica coletada, consulte o atributo [`ContainerSample`](/attribute-dictionary/?event=ContainerSample) .
</Callout>

Para saber mais sobre como criar consultas e gráficos personalizados:

* [Como consultar dados New Relic](/docs/using-new-relic/data/understand-data/query-new-relic-data)
* [Introdução ao NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql)
