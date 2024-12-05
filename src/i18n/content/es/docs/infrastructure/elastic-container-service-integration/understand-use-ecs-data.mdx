---
title: Comprender y utilizar datos de ECS
tags:
  - Integrations
  - Elastic Container Service integration
  - Understand use data
metaDescription: 'How to understand, use, and query the data reported by New Relic''s Amazon ECS on-host integration.'
freshnessValidatedDate: never
translationType: machine
---

[La integración de ECS](/docs/introduction-amazon-ecs-integration) en el host de New Relic informa y muestra datos de rendimiento de su entorno [de Amazon ECS](https://docs.aws.amazon.com/ecs/index.html) . Aquí explicamos cómo encontrar, comprender y utilizar los datos reportados por esta integración.

## Ver datos [#find-data]

Para ver el dashboard de integración de ECS:

1. Vaya a

   <DNT>
     **[one.newrelic.com](https://one.newrelic.com/all-capabilities)**
   </DNT>

   y, en el campo

   <DNT>
     **Filter by name or tags**
   </DNT>

   , busque el clúster de ECS o escriba el nombre de su clúster de ECS.

2. Para ver un dashboard, seleccione el nombre de la entidad correspondiente a su clúster ECS.

Además del panel prediseñado, también puedes crear tus propias consultas y gráficos personalizados utilizando el [generador de consultas](/docs/chart-builder/use-chart-builder/get-started/introduction-chart-builder). Para saber cómo consultar estos datos, consulte [Comprender los datos](#understand).

## Consulta tus datos [#understand]

Los datos reportados por esta integración se muestran en su [panel](#find-data) y también están disponibles para [consultas](/docs/using-new-relic/data/understand-data/query-new-relic-data) y creación de gráficos y paneles personalizados.

Esta integración reporta un [evento](/docs/using-new-relic/data/understand-data/new-relic-data-types#events-new-relic) `EcsClusterSample`, con atributo `clusterName`, `awsRegion`, `ecsLaunchType` y `arn`.

Otros tipos de datos que pueden estar disponibles para su consulta:

* [Evento reportado por agente de infraestructura, incluido](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-events) [docker](/docs/infrastructure/install-configure-manage-infrastructure/docker-installation/docker-instrumentation-infrastructure#docker-data)

Todos los eventos reportados desde un clúster ECS contienen el atributo `ecsClusterName`, `ecsLaunchType` y `ecsClusterArn`.

Aquí hay un ejemplo [de consultaNRQL ](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql)que devuelve el recuento de contenedores asociados con cada imagen docker en un clúster ECS llamado `MyClusterName` creado en `us-east-1`:

```
SELECT uniqueCount(containerId) 
  FROM ContainerSample 
  WHERE awsRegion = 'us-east-1' 
  AND ecsClusterName = 'MyClusterName' 
  FACET imageName SINCE 1 HOUR AGO
```

<Callout variant="important">
  En los nodos EC2 con Cgroup versión V2, la `nri-docker` integración recopila todos los contenedores métricos de la docker API. Para obtener una lista de variaciones en la métrica recopilada, consulte el atributo [`ContainerSample`](/attribute-dictionary/?event=ContainerSample) .
</Callout>

Para obtener más información sobre cómo crear consultas y gráficos personalizados:

* [Cómo consultar datos New Relic](/docs/using-new-relic/data/understand-data/query-new-relic-data)
* [Introducción al NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql)
