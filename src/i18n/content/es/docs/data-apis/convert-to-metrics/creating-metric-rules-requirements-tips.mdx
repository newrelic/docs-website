---
title: 'Reglas para crear métrica: requisitos y consejos.'
tags:
  - Telemetry Data Platform
  - Ingest and manage data
  - Convert data to metrics
metaDescription: 'How to create metric rules for data from events, logs, or spans in New Relic.'
freshnessValidatedDate: never
translationType: machine
---

A continuación se muestran algunos límites, requisitos y recomendaciones al crear métricas a partir de eventos, registros o intervalos.

## Agregación métrica [#summary-and-uniquecount]

Su consulta NRQL debe utilizar una de las siguientes funciones `summary`, `uniqueCount` o `distribution` para métrica agregada:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Función
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `summary`
      </td>

      <td>
        Crea un punto de datos de métrica resumido para cada ventana de tiempo (actualmente 1 minuto). Utilícelo si su consulta NRQL utiliza [funciones de agregador](/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions#functions) admitidas por el tipo de métrica de resumen, como promedio, suma, mínimo o máximo.

        <DNT>
          **Example rule-creation query:**
        </DNT>

        ```
        SELECT summary(duration) AS 'service.responseTime' FROM Transaction 
        WHERE appName = 'Data Points Staging' FACET name, appName, host
        ```
      </td>
    </tr>

    <tr>
      <td>
        `uniqueCount`
      </td>

      <td>
        Crea un punto de datos de métrica `uniqueCount` para cada ventana de tiempo de 1 minuto. Utilícelo si su consulta NRQL utiliza el [tipo de agregador](/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions#functions) `uniqueCount` .

        Ejemplo de consulta de creación de reglas:

        ```
        FROM Transaction SELECT uniqueCount(request.headers.userAgent) 
        AS 'server.request.header.userAgent.uniqueCount' 
        WHERE appName = 'Browser Monitoring Router' FACET http.statusCode, name, appName, host
        ```
      </td>
    </tr>

    <tr>
      <td>
        `distribution`
      </td>

      <td>
        Crea un punto de datos de métrica de distribución para cada ventana de tiempo de 1 minuto. Utilícelo si su consulta NRQL utiliza [funciones de agregador](/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions#functions) como percentil, histograma, mínimo, máximo, promedio, suma o recuento. Utilice solo el atributo de interés como argumento y descarte el resto de los argumentos de `percentile` o `histogram`. La métrica generada admite cualquier argumento en `percentile` o `histogram`.

        <DNT>
          **Example of creating a `distribution` rule:**
        </DNT>

        ```
        SELECT distribution(duration) AS 'service.responseTime' FROM Transaction 
        WHERE appName = 'Data Points Staging' FACET name, appName, host
        ```
      </td>
    </tr>

    <tr>
      <td>
        Recuento simple: `summary(1)` y `sum`
      </td>

      <td>
        Si desea una métrica que sea un recuento simple del evento, registro o intervalos que coincidan con una cláusula `WHERE` particular, use la métrica `summary(1)` . Este tipo de métrica cuenta el número de eventos, registros o intervalos especificados por minuto. Al consultar la métrica creada, utilice el método `sum` para ver el resultado.

        <DNT>**Example:**</DNT> Si desea crear una métrica denominada `foo.count` que cuente la transacción denominada `foo`, el NRQL se vería así:

        ```
        FROM Transaction SELECT summary(1) AS 'foo.count' WHERE name = 'foo'
        ```

        Entonces lo consultarías así:

        ```
        FROM Metric SELECT sum(foo.count) SINCE 30 minutes ago
        ```

        Para más información sobre métrica, consulta nuestra documentación sobre [tipos métricas](/docs/telemetry-data-platform/ingest-manage-data/understand-data/metric-data-type#metric-types).
      </td>
    </tr>
  </tbody>
</table>

## Límites de creación de reglas [#limits]

Estos límites afectan la creación de reglas métricas:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Límites
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Límites de cuenta
      </td>

      <td>
        Una cuenta puede tener un máximo de 1.000 reglas de creación métrica.
      </td>
    </tr>

    <tr>
      <td>
        Límites de la regla métrica
      </td>

      <td>
        Una regla puede:

        * Crea un [máximo de 10 métricas](#multiple-metrics).
        * Utilice solo un tipo de datos (evento, registro o intervalos).
        * Seleccione un máximo de 20 atributos (facetas) para incluir en una métrica.
      </td>
    </tr>

    <tr>
      <td>
        Límites de la ventana de tiempo
      </td>

      <td>
        Límite de 50 000 en combinaciones únicas de nombre de métrica/valor de atributo para una sola métrica en un período de tiempo de 30 segundos. Se aplicarán [los límites de cardinalidad normales en las acumulaciones](/docs/data-apis/ingest-apis/metric-api/metric-api-limits-restricted-attributes/#requirements) .

        Si se excede el límite de 50k en una ventana de 30 segundos, la regla se desactiva y se crea un [evento`NrIntegrationError` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror)en esa cuenta que incluye:

        * Los detalles de la regla
        * Un mensaje sobre tener demasiadas facetas
        * Un valor de atributo `newRelicFeature` de `eventToMetric`
      </td>
    </tr>
  </tbody>
</table>

## Límites de cardinalidad [#attributes-limit]

[Los límites de creación de reglas](#limits) incluyen límites en el número de combinaciones únicas de nombres métricos y valores de atributos. Este límite existe porque una gran cantidad de atributos y/o valores de atributos pueden generar un aumento exponencial en el tamaño de los datos reportados.

<DNT>
  **Example metric creation rule that attaches five attributes:**
</DNT>

```
FROM ProcessSample SELECT summary(ioTotalReadBytes) 
WHERE entityType = 'ComputeSample' 
FACET awsRegion, awsAvailabilityZone, commandName, entityName, processId
```

Si cada uno de los cinco atributos reportara diez valores únicos dentro de un período de tiempo de un minuto, el número de combinaciones únicas de nombre de métrica/atributo tendría teóricamente un máximo de 10x10x10x10x10, o 100.000. Múltiples atributos con múltiples valores únicos pueden generar una gran cantidad de entradas métricas únicas.

En la práctica, este no suele ser el caso, porque los atributos suelen estar relacionados. Por ejemplo, si un atributo es `hostname` y otro es `awsRegion`, cuando vea el nombre de host A, siempre estará en la región B de AWS; nunca verá el nombre de host A ni otros valores de región de AWS.

Por eso es importante, durante el [proceso de creación de NRQL](#create-nrql), utilizar la función `uniqueCount` para verificar cuántas combinaciones únicas de nombre de métrica/valor de atributo está generando su consulta NRQL.

## Métrica múltiple a partir de una regla [#multiple-metrics]

Una regla puede crear hasta diez métricas. No existen diferencias funcionales entre las métricas creadas de una en una y las creadas con una sola regla. Razones para crear múltiples métricas con una sola regla:

* Es menos probable que alcance [el límite de reglas por cuenta](#limits).
* Es más fácil agregar el mismo atributo a múltiples métricas.

<DNT>
  **Example creating multiple metrics with a single rule:**
</DNT>

```
FROM Transaction SELECT uniqueCount(request.headers.userAgent) AS 'server.request.header.userAgent.uniqueCount', 
summary(duration) AS 'server.duration', summary(totalTime) AS 'server.totalTime' 
WHERE appName = 'Browser Monitoring Router' FACET http.statusCode, name, appName, host
```

## Denominación métrica [#naming]

Una métrica recibe un nombre con la cláusula `AS` , como parte del [proceso de creación de reglas NRQL](#create-nrql). En el siguiente ejemplo de NRQL, el nombre de la métrica es `io.totalread.bytes`:

```
FROM ProcessSample SELECT summary(ioTotalReadBytes) AS 'io.totalread.bytes' WHERE entityType = 'ComputeSample' FACET awsRegion, awsAvailabilityZone, commandName
```

Si no hay ningún nombre asignado con la cláusula `AS` , el nombre de la métrica es el nombre del atributo de consulta. En este ejemplo, si no se asignó ningún nombre, el nombre de la métrica sería `ioTotalReadBytes`.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Nombres métricos
      </th>

      <th>
        Requisitos y recomendaciones
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Requisitos
      </td>

      <td>
        Requisitos para nombrar una métrica:

        * Menor o igual a 255 (UTF-16) unidades de código de 16 bits. Una forma de asegurarse de estar por debajo del límite es mantener cada cadena por debajo de 127 de lo que sea más fácil de contar.

        * No hay espacios.

        * Comience con una letra.

          Ejemplos de nombres métricos fuertes:

        * `rubyvm.memory.heap_used`

        * `redis.container.cpu.percent`

        * `memcached.process_virtual_memory.bytes`
      </td>
    </tr>

    <tr>
      <td>
        Longitud y estructura
      </td>

      <td>
        Decida un nombre y una estructura que facilite que otros encuentren, comprendan y utilicen esta métrica.

        * Recomendamos mantener el nombre de su métrica por debajo de 40 caracteres para una legibilidad ideal. Los nombres más largos pueden cortarse o superponerse con otros nombres.
        * Su esquema de nomenclatura métrica dependerá de su lógica empresarial. Es posible que desee utilizar un espacio de nombres para anteponer el nombre de su métrica, o es posible que sus nombres deban ser más generales.
      </td>
    </tr>

    <tr>
      <td>
        Componentes dentro del nombre
      </td>

      <td>
        Si desea crear componentes dentro de su nombre métrico (como la fuente de las métricas y lo que está midiendo), le recomendamos ir de lo amplio a lo específico (de izquierda a derecha):

        1. Utilice un punto para separar esos componentes para que sean coherentes con nuestros nombres métricos New Relic.

        2. Luego, utiliza un guión bajo para separar las palabras dentro de los puntos.

           <DNT>
             **Example:**
           </DNT>

           ```
           application.page_view.duration
           ```
      </td>
    </tr>

    <tr>
      <td>
        Atributo
      </td>

      <td>
        Evite poner atributo en el nombre de su métrica. Los atributos son cualidades de su métrica que puede usar para filtrar o facetar sus datos, como clúster o zona de disponibilidad.

        <DNT>**Example:**</DNT> Si incluyera la zona de disponibilidad en el nombre de su métrica, significaría que, para esa métrica, no podría ver los resultados en todas las zonas de disponibilidad.
      </td>
    </tr>

    <tr>
      <td>
        Cambiando nombres métricos
      </td>

      <td>
        Si cambia el nombre de una métrica, los datos históricos **no** se actualizarán con ese nuevo nombre. Para consultar o trazar esos datos históricos, deberá especificar el nombre de la métrica anterior.
      </td>
    </tr>
  </tbody>
</table>
