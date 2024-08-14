---
title: Integración de monitoreo de Amazon EFS
tags:
  - Integrations
  - Amazon integrations
  - AWS integrations list
metaDescription: 'New Relic''s Amazon EFS monitoring integration: what data it reports, and how to enable it.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Habilite la [integraciónAWS CloudWatch Metric Streams ](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-metric-stream/)para monitor todas las métricas de CloudWatch desde sus servicios de AWS, incluido el espacio de nombres personalizado. La integración individual ya no es nuestra opción recomendada.
</Callout>

[La integración de New Relic](/docs/infrastructure/integrations-getting-started/getting-started/introduction-infrastructure-integrations) incluye una integración de Amazon EFS para informar sus datos de EFS a New Relic. Este documento explica la característica de la integración, cómo activarla y qué datos se pueden reportar.

## Característica [#features]

Con la integración de New Relic para el monitoreo [AWS Elastic File System (EFS)](http://docs.aws.amazon.com/efs/latest/ug/whatisefs.html), puede monitor el tamaño del sistema de archivos EFS, las operaciones de lectura/escritura, la capacidad de E/S, el rendimiento y más. Los datos de integración AWS también están disponibles para [análisis, consultas y creación de gráficos](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure#insights).

Si está conectado a través de una [VPC](/docs/infrastructure/amazon-integrations/amazon-integrations/aws-vpc-monitoring-integration), también puede utilizar el sistema de archivos EFS con sus propios servidores locales, lo que le permite compartir sistemas de archivos entre diferentes aplicaciones alojadas en soluciones híbridas.

## Activar la integración [#activate]

Para habilitar esta integración, siga los procedimientos estándar para [conectar los servicios de AWS a New Relic](/docs/infrastructure/infrastructure-integrations/getting-started/connect-aws-integrations-infrastructure).

## Configuración y sondeo [#polling]

Puede cambiar la frecuencia de sondeo y filtrar datos usando [las opciones de configuración](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations).

Información [de sondeo predeterminada](/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-polling-intervals-infrastructure-integrations) para la integración de Amazon EFS:

* New Relic intervalo de sondeo: 5 minutos
* Intervalo de datos de Amazon CloudWatch: 1 minuto o 5 minutos

## Buscar y utilizar datos [#find-data]

Para encontrar los datos de esta integración, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS**</DNT> y seleccione uno de los enlaces de integración de Amazon EFS.

Puedes [consultar y explorar tus datos](/docs/using-new-relic/data/understand-data/query-new-relic-data) utilizando el [tipo de evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) `BlockDeviceSample` , con un valor `provider` de `EfsFileSystem`.

Para obtener más información sobre cómo buscar y utilizar datos de integración, consulte [Comprender los datos de integración](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

## Datos métricos [#metrics]

Esta integración recoge las siguientes métricas de Amazon EFS:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Métrica
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `BurstCreditBalance`
      </td>

      <td>
        La cantidad de créditos en ráfaga que tiene un sistema de archivos.

        Los créditos de ráfaga permiten que un sistema de archivos alcance niveles de rendimiento superiores al nivel de línea de base de un sistema de archivos durante períodos de tiempo. Para obtener más información, consulte [Escalado del rendimiento en Amazon EFS](http://docs.aws.amazon.com/efs/latest/ug/performance.html#bursting).

        La estadística `Minimum` es el saldo de crédito más pequeño en cualquier minuto durante el período. La estadística `Maximum` es el saldo de crédito más grande en cualquier minuto durante el período. La estadística `Average` es el saldo de crédito promedio durante el período.

        Unidades: Bytes

        Estadísticas válidas: `Minimum, Maximum, Average`
      </td>
    </tr>

    <tr>
      <td>
        `ClientConnections`
      </td>

      <td>
        El número de conexiones de clientes a un sistema de archivos. Cuando se utiliza un cliente estándar, hay una conexión por cada instancia de Amazon EC2 montada.

        Nota: Para calcular el promedio `ClientConnections` para períodos superiores a un minuto, divida la estadística `Sum` por la cantidad de minutos del período.

        Unidades: recuento de conexiones de clientes

        Estadísticas válidas: `Sum`
      </td>
    </tr>

    <tr>
      <td>
        `DataReadIOBytes`
      </td>

      <td>
        El número de bytes para cada operación de lectura del sistema de archivos.

        La estadística `Sum` es el número total de bytes asociados con operaciones de lectura. La estadística `Minimum` es el tamaño de la operación de lectura más pequeña durante el período. La estadística `Maximum` es el tamaño de la operación de lectura más grande durante el período. La estadística `Average` es el tamaño promedio de las operaciones de lectura durante el período. La estadística `SampleCount` proporciona un recuento de operaciones de lectura.

        Unidades:

        * Bytes para `Minimum, Maximum, Average,` y `Sum`.

        * Cuente para `SampleCount`.

          Estadísticas válidas: `Minimum, Maximum, Average, Sum, SampleCount`
      </td>
    </tr>

    <tr>
      <td>
        `DataWriteIOBytes`
      </td>

      <td>
        El número de bytes para cada operación de escritura del sistema de archivos.

        La estadística `Sum` es el número total de bytes asociados con operaciones de escritura. La estadística `Minimum` es el tamaño de la operación de escritura más pequeña durante el período. La estadística `Maximum` es el tamaño de la operación de escritura más grande durante el período. La estadística `Average` es el tamaño promedio de las operaciones de escritura durante el período. La estadística `SampleCount` proporciona un recuento de operaciones de escritura.

        Unidades:

        * Los bytes son las unidades de las estadísticas `Minimum, Maximum, Average` y `Sum` .

        * Cuente para `SampleCount`.

          Estadísticas válidas: `Minimum, Maximum, Average, Sum, SampleCount`
      </td>
    </tr>

    <tr>
      <td>
        `MetadataIOBytes`
      </td>

      <td>
        El número de bytes para cada operación de metadatos.

        La estadística `Sum` es el número total de bytes asociados con operaciones de metadatos. La estadística `Minimum` es el tamaño de la operación de metadatos más pequeña durante el período. La estadística `Maximum` es el tamaño de la operación de metadatos más grande durante el período. La estadística `Average` es el tamaño de la operación de metadatos promedio durante el período. La estadística `SampleCount` proporciona un recuento de operaciones de metadatos.

        Unidades:

        * Los bytes son las unidades de las estadísticas `Minimum, Maximum, Average,` y `Sum` .

        * Cuente para `SampleCount`.

          Estadísticas válidas: `Minimum, Maximum, Average, Sum, SampleCount`
      </td>
    </tr>

    <tr>
      <td>
        `PercentIOLimit`
      </td>

      <td>
        Muestra qué tan cerca está un sistema de archivos de alcanzar el límite de E/S del modo de rendimiento de uso general. Si esta métrica está al 100% la mayoría de las veces, considere mover su aplicación a un sistema de archivos usando el modo de rendimiento Max I/O.

        Nota: Esta métrica solo se envía para sistemas de archivos que utilizan el modo de rendimiento de uso general.

        Unidades: Porcentaje
      </td>
    </tr>

    <tr>
      <td>
        `PermittedThroughput`
      </td>

      <td>
        La cantidad máxima de rendimiento que se permite a un sistema de archivos, dado el tamaño del sistema de archivos y `BurstCreditBalance`. Para obtener más información, consulte [Rendimiento de Amazon EFS](http://docs.aws.amazon.com/efs/latest/ug/performance.html).

        La estadística `Minimum` es el rendimiento más pequeño permitido para cualquier minuto durante el período. La estadística `Maximum` es el rendimiento más alto permitido para cualquier minuto durante el período. La estadística `Average` es el rendimiento promedio permitido durante el período.

        Unidades: Bytes por segundo

        Estadísticas válidas: `Minimum, Maximum, Average`
      </td>
    </tr>

    <tr>
      <td>
        `TotalIOBytes`
      </td>

      <td>
        El número de bytes para cada operación del sistema de archivos, incluidas las operaciones de lectura y escritura de datos y metadatos.

        La estadística `Sum` es el número total de bytes asociados con todas las operaciones del sistema de archivos. La estadística `Minimum` es el tamaño de la operación más pequeña durante el período. La estadística `Maximum` es el tamaño de la operación más grande durante el período. La estadística `Average` es el tamaño promedio de una operación durante el período. La estadística `SampleCount` proporciona un recuento de todas las operaciones.

        Nota: Para calcular el promedio de operaciones por segundo durante un período, divida la estadística `SampleCount` por la cantidad de segundos del período. Para calcular el rendimiento promedio (bytes por segundo) durante un período, divida la estadística `Sum` por la cantidad de segundos del período.

        Unidades:

        * Bytes para estadísticas `Minimum, Maximum, Average,` y `Sum` .

        * Cuente para `SampleCount`.

          Estadísticas válidas: `Minimum, Maximum, Average, Sum, SampleCount`
      </td>
    </tr>
  </tbody>
</table>
