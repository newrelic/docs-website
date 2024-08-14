---
title: Integración de monitoreo de Amazon ECS/ECR
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s Amazon ECS/ECR monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

Puede informar los datos de su [servicio de contenedor (ECS) Amazon EC2 ](https://aws.amazon.com/documentation/ecs/)y los datos de su [registro de contenedor (ECR) Amazon EC2 ](http://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html)a New Relic.

## Alternativas recomendadas [#alternatives]

Como alternativa preferida a esta integración, puede monitor todas las métricas de CloudWatch desde sus servicios de AWS, incluido el espacio de nombres personalizado. Para hacer esto, habilite la [integración de AWS CloudWatch Metric Streams](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream).

También ofrecemos una [integración ECS en el host](/docs/integrations/elastic-container-service-integration/get-started/introduction-amazon-ecs-integration), que informa un conjunto de datos diferente al de esta integración basada en la nube.

## Descripción general de la integración [#overview]

La integración de monitoreo New Relic ECS/ECR le permite monitor la capacidad reservada versus utilizada, la ejecución de tareas y el registro del contenedor. Los datos de integración de AWS también están disponibles para [análisis y creación de gráficos](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure#insights).

## Activar la integración [#activate]

Para habilitar esta integración, siga nuestra documentación para [conectar los servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

Si tiene servicios ejecutándose en ECS, también puede [habilitar el monitoreo de esos servicios](/docs/integrations/host-integrations/host-integrations-list/monitor-services-running-amazon-ecs).

<Callout variant="important">
  En AWS, debe [optar](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-arn-timeline) por el nuevo formato ARN ([anuncio](https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-deployment-to-the-new-arn-and-resource-id-format-2/)) para distinguir entre servicios con el mismo nombre en diferentes clústeres. De lo contrario, podría producirse una colisión de datos.
</Callout>

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Los valores [de sondeo predeterminados](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) para la integración de Amazon ECS/ECR son:

* New Relic intervalo de sondeo: 5 minutos
* Intervalo de datos de Amazon CloudWatch: 1 minuto o 5 minutos

## Buscar y utilizar datos [#find-data]

Para encontrar los datos de esta integración, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> y seleccione uno de los enlaces de integración de Amazon ECS/ECR.

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) utilizando el [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `ComputeSample` . Utilice un valor `provider` de `EcsCluster` para los datos del clúster o un valor `provider` de `EcsService` para los datos del servicio del clúster.

La integración recopila estas definiciones de ECR/ECS:

<table>
  <thead>
    <tr>
      <th style={{ width: "240px" }}>
        Nombre
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `ClusterName`
      </td>

      <td>
        Esta dimensión filtra los datos que solicita para todos los recursos en un clúster específico. Todas las métricas de Amazon ECS están filtradas por `ClusterName`.
      </td>
    </tr>

    <tr>
      <td>
        `ServiceName`
      </td>

      <td>
        Esta dimensión filtra los datos que solicita para todos los recursos en un servicio específico dentro de un clúster específico.
      </td>
    </tr>
  </tbody>
</table>

Para obtener más información sobre cómo buscar y utilizar datos de integración, consulte [Comprender los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Datos métricos [#metrics]

La integración ECS/ECR recopila los siguientes datos:

<Callout variant="tip">
  Para obtener descripciones completas de estas métricas, consulte la documentación de Amazon sobre [ECS](https://aws.amazon.com/documentation/ecs/) y [ECR](https://aws.amazon.com/documentation/ecr/).
</Callout>

### Clúster y servicio métrico

<table>
  <thead>
    <tr>
      <th style={{ width: "285" }}>
        Nombre
      </th>

      <th>
        Tipo de datos
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `CPUUtilization`
      </td>

      <td>
        por ciento
      </td>
    </tr>

    <tr>
      <td>
        `MemoryUtilization`
      </td>

      <td>
        por ciento
      </td>
    </tr>
  </tbody>
</table>

### Racimo métrico [#cluster]

<table>
  <thead>
    <tr>
      <th style={{ width: "285" }}>
        Nombre
      </th>

      <th>
        Tipo de datos
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `CPUReservation`
      </td>

      <td>
        por ciento
      </td>
    </tr>

    <tr>
      <td>
        `MemoryReservation`
      </td>

      <td>
        por ciento
      </td>
    </tr>
  </tbody>
</table>

### Servicio métrico [#service]

<table>
  <thead>
    <tr>
      <th style={{ width: "285" }}>
        Nombre
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Active Service`
      </td>

      <td>
        La cantidad de servicios que se ejecutan en el clúster en un estado `ACTIVE`
      </td>
    </tr>

    <tr>
      <td>
        `Pending Tasks`
      </td>

      <td>
        Número de tareas en el clúster que están en estado `PENDING`
      </td>
    </tr>

    <tr>
      <td>
        `Running Tasks`
      </td>

      <td>
        Número de tareas en el clúster que están en estado `RUNNING`
      </td>
    </tr>

    <tr>
      <td>
        `Registered Instances`
      </td>

      <td>
        Número de instancia de contenedor registrada en el clúster
      </td>
    </tr>
  </tbody>
</table>
