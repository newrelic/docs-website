---
title: Crear condición de alerta NRQL
tags:
  - Alerts
  - Alert conditions
metaDescription: How to define thresholds that trigger alert notifications based on your NRQL queries.
freshnessValidatedDate: never
translationType: machine
---

Puede utilizar [la consulta NRQL](/docs/insights/new-relic-insights/using-new-relic-query-language/using-nrql) para crear una condición de alerta. Una vez que haya definido su señal, puede definir aún más sus niveles de umbral crítico y de advertencia. Esto determina cuándo se crea un incidente de alerta. Para obtener más información sobre conceptos clave relacionados con NRQL condición de alerta y alerta de transmisión, consulte [Alerta de transmisión: términos y conceptos clave](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/streaming-alerts-key-terms-concepts).

## Crear una condición de alerta NRQL a partir de una política [#alert-condition-from-policy]

Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Alerts > Alert Conditions & Policies**</DNT> para crear una condición de alerta NRQL a partir de una política. Luego, haga clic en <DNT>**+ New alert condition**</DNT>.

<img
  width="80%;"
  title="Create a NRQL alert condition from a policy"
  alt="An image of the UI demonstrating how to create a NRQL alert condition from a policy."
  src="/images/queries-nrql_screenshot-crop_create-alert-condition.webp"
/>

<figcaption>
  Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Alerts > Alert Conditions & Policies > + New alert condition**</DNT>.
</figcaption>

Sigue estos pasos.

<CollapserGroup>
  <Collapser
    id="step1"
    title="Paso 1. Define tu señal"
  >
    1. Elija la opción

       <DNT>
         **Build a query**
       </DNT>

       . Esta opción le permite identificar una señal y agregar una consulta NRQL. Consulte [Cómo usar NRQL: la mecánica de las consultas](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-how-nrql-works/) si necesita ayuda para agregar una consulta.

    2. Haga clic en

       <DNT>
         **Next**
       </DNT>

       .
  </Collapser>

  <Collapser
    id="step2"
    title="Paso 2. Ajústese al comportamiento de la señal"
  >
    Sintonice esta condición para ajustar la frecuencia, la irregularidad o los espacios en su señal. Aquí puede configurar la [agregación de datos](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/choose-your-aggregation-method/), la [estrategia de llenado de espacios](#data-gaps) y el [retraso de la evaluación](#evaluation-delay).

    Haga clic en <DNT>**Next**</DNT> cuando termine su configuración.
  </Collapser>

  <Collapser
    id="step3"
    title="Paso 3. Define tu umbral"
  >
    Puede definir [un umbral](/docs/alerts-applied-intelligence/new-relic-alerts/advanced-alerts/advanced-techniques/set-thresholds-alert-condition/) para determinar qué abrirá un incidente. Una vez definido, haga clic en <DNT>**Next**</DNT>.
  </Collapser>

  <Collapser
    id="step4"
    title="Paso 4. Añade detalles"
  >
    Agregue los detalles de la condición de alerta. Agregue un nombre a la condición de alerta para encontrarla y usarla fácilmente. Luego, conéctelo a una política. Puede seleccionar una existente o crear una nueva política.

    Si selecciona <DNT>**New policy**</DNT>:

    * Agregue un [nombre significativo](/docs/alerts-applied-intelligence/new-relic-alerts/alert-policies/create-edit-or-find-alert-policy/#best-practices-policies) para la política con un máximo de 64 caracteres.
    * Selecciona la forma en la que quieres [agrupar tu incidente](/docs/alerts-applied-intelligence/new-relic-alerts/alert-policies/specify-when-alerts-create-incidents/).
    * Configure los [ajustes adicionales](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/your-first-nrql-condition/#additional-settings) si es necesario.
    * Haga clic en <DNT>**Save & set up notifications**</DNT>.

      Si ha seleccionado <DNT>**Existing policy**</DNT>, haga clic en <DNT>**Save condition**</DNT> una vez que haya elegido una política.
  </Collapser>
</CollapserGroup>

## Crear una condición a partir de un gráfico [#create-chart]

La mayoría de nuestros gráficos, con excepción de algunos más antiguos, le permiten crear una condición a partir de ellos.

Para crear una condición de alerta NRQL a partir de un gráfico:

1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & Services**</DNT> y seleccione una aplicación.

2. En el panel izquierdo, seleccione <DNT>**Metrics explorer**</DNT> y agregue su configuración.

3. En la esquina derecha del gráfico, haga clic en <Icon name="fe-more-horizontal"/> icono y seleccione <DNT>**Create alert condition**</DNT>.

   <img
     title="Create alert condition from the metrics explorer"
     alt="Create alert condition from the metrics explorer"
     src="/images/queries-nrql_screenshot-crop_metrics-create-alert-condition.gif"
   />

4. Siga los pasos explicados en [Crear una condición de alerta NRQL a partir de una política](#alert-condition-from-policy) , pero tenga en cuenta que el paso 1 es un poco diferente porque, ahora, la consulta se crea con los datos que configuró previamente.

## Sintaxis de alerta NRQL [#syntax]

Aquí está la sintaxis básica para crear todas las condiciones de alerta NRQL.

```sql
SELECT function(attribute)
	FROM Event
	WHERE attribute [comparison] [AND|OR ...]
```

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        <DNT>
          **Clause**
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
        `SELECT function(attribute)`

        <DNT>
          **Required**
        </DNT>
      </td>

      <td>
        [Las funciones](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#functions) admitidas que devuelven números incluyen:

        * `apdex`

        * `average`

        * `count`

        * `latest`

        * `max`

        * `min`

        * `percentage`

        * `percentile`

        * `sum`

        * `uniqueCount`

          <Callout variant="tip">
            Si utiliza el agregador `percentile` en una condición de alerta facetada con muchas facetas, esto puede causar este error:

            `An error occurred while fetching chart data.`

            Si ve este error, utilice `average` en su lugar.
          </Callout>
      </td>
    </tr>

    <tr>
      <td>
        `FROM data type`

        <DNT>
          **Required**
        </DNT>
      </td>

      <td>
        Se pueden apuntar múltiples [tipos de datos](/docs/data-apis/understand-data/new-relic-data-types/) .

        Tipos de datos admitidos:

        * Evento
        * `Metric` (Se devolverán puntos de datos RAW)
      </td>
    </tr>

    <tr>
      <td>
        `WHERE attribute [comparison] [AND|OR ...]`
      </td>

      <td>
        Utilice la cláusula `WHERE` para especificar una serie de una o más condiciones. Todos los [operadores](/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#where-operators) son compatibles. Se utiliza para filtrar los datos devueltos en la consulta.
      </td>
    </tr>

    <tr>
      <td id="facet">
        `FACET` atributo
      </td>

      <td>
        Incluya una cláusula `FACET` opcional en su sintaxis NRQL según el [tipo de umbral](#threshold-types) (estático o anomalía).

        Utilice la cláusula [`FACET`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-facet) para separar sus resultados por atributo y alertar sobre cada atributo de forma independiente. No se permite ninguna cláusula `LIMIT` , pero toda consulta recibirá el máximo número de facetas posible.

        La consulta facetada puede devolver un máximo de 5000 valores para condiciones [estáticas y anormales](#threshold-types) .

        <Callout variant="important">
          Si la consulta devuelve más que el número máximo de valores, no se puede crear la condición de alerta. Si crea la condición y la consulta devuelve más que este número más adelante, la alerta fallará. Modifique su consulta para que devuelva una menor cantidad de valores.
        </Callout>
      </td>
    </tr>
  </tbody>
</table>

## Reformatear NRQL incompatible [#reformatting]

Algunos elementos de NRQL utilizados en los gráficos no tienen sentido en el contexto de la alerta de transmisión. A continuación se incluye una lista de los elementos incompatibles más comunes y sugerencias para reformatear una consulta de alerta NRQL para lograr el mismo efecto.

<table>
  <thead>
    <tr>
      <th style={{ width: "300px" }}>
        <DNT>
          **Element**
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
        `SINCE` y `UNTIL`
      </td>

      <td>
        Ejemplo:

        ```sql
        SELECT percentile(largestContentfulPaint, 75) FROM PageViewTiming WHERE (appId = 837807) SINCE yesterday
        ```

        Las condiciones NRQL producen un flujo interminable de resultados de consulta en ventanas, por lo que las palabras clave `SINCE` y `UNTIL` para abarcar la consulta en un momento determinado no son compatibles. Para su comodidad, eliminamos automáticamente `SINCE` y `UNTIL` de una consulta al crear una condición desde el contexto de un gráfico.
      </td>
    </tr>

    <tr>
      <td>
        `TIMESERIES`
      </td>

      <td>
        En la consulta NRQL, la cláusula `TIMESERIES` se utiliza para devolver datos como una serie de tiempo desglosada por un período de tiempo específico.

        Para condiciones NRQL y si no se utiliza la agregación de ventana deslizante, la propiedad equivalente a `TIMESERIES` es la duración de la ventana de agregación de datos. Si utiliza la agregación de ventanas deslizantes, la propiedad equivalente es el valor de la agregación de ventanas deslizantes.
      </td>
    </tr>

    <tr>
      <td>
        `histogram()`
      </td>

      <td>
        La función de agregación `histogram()` se utiliza para generar histograma.

        `histogram()` no es compatible con las alertas NRQL: las agregaciones de histogramas no se pueden formatear como series de tiempo. Para crear una alerta a partir de una parte de un histograma (por ejemplo, percentil 95), utilice la función de agregación [`percentile()`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-percentile) .
      </td>
    </tr>

    <tr>
      <td>
        `bytecountestimate()`, `cardinality()`
      </td>

      <td>
        Estas funciones aún no son compatibles con las alertas NRQL.
      </td>
    </tr>

    <tr>
      <td>
        Múltiples funciones de agregación
      </td>

      <td>
        Cada condición sólo puede tener como objetivo un único valor agregado. Para alertar sobre varios valores simultáneamente, deberá descomponerlos en condiciones individuales dentro de la misma política.

        Consulta original:

        ```sql
        SELECT count(foo), average(bar), max(baz) from Transaction
        ```

        Descompuesto:

        ```sql
        SELECT count(foo) from Transaction

        SELECT average(bar) from Transaction

        SELECT max(baz) from Transaction
        ```
      </td>
    </tr>

    <tr>
      <td>
        `COMPARE WITH`
      </td>

      <td>
        La cláusula `COMPARE WITH` se utiliza para comparar los valores de dos rangos de tiempo diferentes. Este tipo de consulta es incompatible con las alertas NRQL. Recomendamos utilizar una [condición de alerta de anomalía](/docs/alerts-applied-intelligence/applied-intelligence/anomaly-detection/custom-anomalies/) para detectar dinámicamente la desviación de una señal en particular.
      </td>
    </tr>

    <tr>
      <td>
        `SLIDE BY`
      </td>

      <td>
        La cláusula `SLIDE BY` admite una característica conocida como [ventanas deslizantes](#sliding-window-aggregation). Con las ventanas deslizantes, los datos `SLIDE BY` se recopilan en "ventanas" de tiempo que se superponen entre sí. Estas ventanas pueden ayudar a suavizar los gráficos de líneas con mucha variación en los casos en que el agregado móvil (como una media móvil) es más importante que los agregados de ventanas de tiempo estrechas.

        Puede habilitar ventanas deslizantes en la UI. Al crear o editar una condición, vaya a <DNT>**Adjust to signal behavior > Data aggregation settings > Use sliding window aggregation**</DNT>.

        Por ejemplo, para crear una condición de alerta equivalente a

        ```sql
        SELECT count(*) from Transaction TIMESERIES 1 minute SLIDE BY 5 minutes
        ```

        Utilizaría una ventana de agregación de datos con una duración de 5 minutos, con una ventana de agregación deslizante de 1 minuto.
      </td>
    </tr>

    <tr>
      <td>
        `LIMIT`
      </td>

      <td>
        En NRQL consulta, la cláusula `LIMIT` se utiliza para controlar la cantidad de datos que devuelve una consulta, ya sea el número máximo de valores de faceta devueltos por `FACET` consulta o el número máximo de elementos devueltos por `SELECT \*` consulta.

        `LIMIT` no es compatible con las alertas NRQL: la evaluación siempre se realiza en el conjunto de resultados completo.
      </td>
    </tr>

    <tr>
      <td>
        Subconsultas
      </td>

      <td>
        [Las subconsultas](/docs/query-your-data/nrql-new-relic-query-language/get-started/subqueries-in-nrql) no son compatibles con la transmisión <InlinePopover type="alerts"/>porque su ejecución requiere múltiples pases a través de los datos.
      </td>
    </tr>

    <tr>
      <td>
        Subconsultas JOIN
      </td>

      <td>
        [Las UNIONES de subconsulta](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/subquery-joins) no son compatibles con la alerta de transmisión porque la ejecución de la subconsulta requiere múltiples pases a través de los datos.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos de umbrales de alerta NRQL [#examples]

A continuación se muestran algunos casos de uso comunes para condiciones NRQL. Estas consultas funcionarán para [tipos de condiciones](#threshold-types) estáticas y anormales.

<CollapserGroup>
  <Collapser
    id="constrained-alerts"
    title="Alerta sobre segmentos específicos de sus datos"
  >
    Cree alertas restringidas que apunten a un segmento específico de sus datos, como algunos clientes clave o un rango de datos. Utilice la cláusula `WHERE` para definir esas condiciones.

    ```sql
    SELECT average(duration) FROM Transaction WHERE account_id in (91290, 102021, 20230)
    ```

    ```sql
    SELECT percentile(duration, 95) FROM Transaction WHERE name LIKE 'Controller/checkout/%'
    ```
  </Collapser>

  <Collapser
    id="nth-percentile"
    title="Alerta en el percentil enésimo de tus datos"
  >
    Cree una alerta cuando un enésimo percentil de sus datos alcance un umbral específico; por ejemplo, mantener el nivel de servicio SLA. Dado que evaluamos la consulta NRQL en función de la duración de la ventana de agregación, el percentil se calculará para cada duración por separado.

    ```sql
    SELECT percentile(duration, 95) FROM Transaction
    ```

    ```sql
    SELECT percentile(databaseDuration, 75) FROM Transaction
    ```
  </Collapser>

  <Collapser
    id="max-min-avg"
    title="Alerta sobre máximo, mínimo y promedio de tus datos"
  >
    Cree una alerta cuando sus datos alcancen un determinado máximo, mínimo o promedio; por ejemplo, garantizar que una duración o tiempo de respuesta no supere un determinado umbral.

    ```sql
    SELECT max(duration) FROM Transaction
    ```

    ```sql
    SELECT average(duration) FROM Transaction
    ```
  </Collapser>

  <Collapser
    id="percentage"
    title="Alerta sobre un porcentaje de tus datos"
  >
    Cree una alerta cuando una proporción de sus datos supere o baje de un determinado umbral.

    ```sql
    SELECT percentage(count(*), WHERE duration > 2) FROM Transaction
    ```

    ```sql
    SELECT percentage(count(*), WHERE http.statusCode = '500') FROM Transaction
    ```
  </Collapser>

  <Collapser
    id="apdex"
    title="Alerta en Apdex con cualquier valor T"
  >
    Crea alertas en [Apdex](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction), aplicando tu propio valor T para determinada transacción. Por ejemplo, reciba una notificación de alerta cuando su Apdex para un valor T de 500 ms en transacciones para aplicaciones de producción sea inferior a 0,8.

    ```sql
    SELECT apdex(duration, t:0.5) FROM Transaction WHERE appName like '%prod%'
    ```
  </Collapser>
</CollapserGroup>

## Condiciones NRQL y orden de consulta de operaciones. [#query-order]

De forma predeterminada, la duración de la ventana de agregación es de 1 minuto, pero puede cambiar la ventana para adaptarla a sus necesidades. Cualquiera que sea la ventana de agregación, New Relic recopilará datos para esa ventana utilizando la función en la consulta de la condición NRQL. Nuestros sistemas analizan y ejecutan la consulta en el siguiente orden:

1. `FROM` cláusula. ¿Qué tipo de evento es necesario capturar?
2. `WHERE` cláusula. ¿Qué se puede filtrar?
3. `SELECT` cláusula. ¿Qué información debe devolverse del conjunto de datos ahora filtrado?

### Ejemplo: valor nulo devuelto [#example-null]

Digamos que esta es su consulta de condición de alerta:

```sql
SELECT count(*) FROM SyntheticCheck WHERE monitorName = 'My Cool Monitor' AND result = 'FAILED'
```

Si no hay errores en la ventana de agregación:

1. El sistema ejecutará la cláusula `FROM` capturando todos los eventos `SyntheticCheck` de su cuenta.
2. Luego ejecutará la cláusula `WHERE` para filtrar esos eventos buscando solo los que coincidan con el nombre del monitor y el resultado especificado.
3. Si aún quedan eventos por analizar después de completar las operaciones `FROM` y `WHERE` , se ejecutará la cláusula `SELECT` . Si no queda ningún evento restante, la cláusula `SELECT` no se ejecutará.

Esto significa que agregadores como `count()` y `uniqueCount()` nunca devolverán un valor cero. Cuando hay un recuento de 0, la cláusula `SELECT` se ignora y no se devuelven datos, lo que da como resultado un valor de `NULL`.

### Ejemplo: valor cero devuelto [#example-zero]

Si tiene una fuente de datos que proporciona ceros numéricos legítimos, la consulta devolverá valores cero y no valores nulos.

Digamos que esta es su consulta de condición de alerta y que `MyCoolEvent` es un atributo que a veces puede devolver un valor cero.

```sql
SELECT average(MyCoolAttribute) FROM MyCoolEvent
```

Si, en la ventana de agregación que se está evaluando, hay al menos una instancia de `MyCoolEvent` y si el valor promedio de todos los atributos `MyCoolAttribute` de esa ventana es igual a cero, entonces se devolverá un valor `0` . Si no hay ningún evento `MyCoolEvent` durante ese minuto, entonces se devolverá un `NULL` debido al orden de las operaciones.

### Ejemplo: valor nulo versus cero devuelto [#example-null-zero]

Para determinar cómo se manejarán los valores nulos, ajuste la configuración de pérdida de señal y llenado de espacios en la [UI de condición de alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/#signal-loss).

Puede evitar `NULL` valores por completo con un acceso directo de consulta de orden de operaciones. Para hacer esto, use una subcláusula `filter` y luego incluya todos los elementos de filtro dentro de esa subcláusula. El cuerpo principal de la consulta debe incluir una cláusula `WHERE` que defina al menos una entidad de modo que, para cualquier ventana de agregación donde el monitor realice una verificación, la señal estará vinculada a esa entidad. Luego, la cláusula `SELECT` se ejecutará y aplicará los elementos de filtro a los datos devueltos por el cuerpo principal de la consulta, que devolverá un valor de `0` si los elementos de filtro no dan como resultado datos coincidentes.

A continuación se muestra un ejemplo para alertar sobre `FAILED` resultados:

```sql
SELECT filter(count(*), WHERE result = 'FAILED') FROM SyntheticCheck WHERE monitorName = 'My Favorite Monitor'
```

En este ejemplo, una ventana con un resultado exitoso devolvería un `0`, lo que permitiría que el umbral de la condición se resuelva por sí solo.

Para obtener más información, consulte nuestra [publicación de blog](https://discuss.newrelic.com/t/relic-solution-how-can-i-figure-out-when-to-use-gap-filling-and-loss-of-signal/120401) sobre resolución de problemas para valores cero versus valores nulos.

## Alerta NRQL de agregación anidada [#h2-nested-aggregation-nrql-alerts]

[Las consultas de agregación anidadas](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/nested-aggregation-make-ordered-computations-single-query) son una forma poderosa de consultar sus datos. Sin embargo, tienen algunas restricciones que es importante tener en cuenta.

<CollapserGroup>
  <Collapser
    id="non-faceted_innermost_query"
    title="Actualmente no se admiten consultas anidadas con una consulta interna sin facetas"
  >
    Sin un `FACET`, la consulta interna produce un único resultado, por lo que la consulta externa no tiene nada que agregar. Si está utilizando una consulta anidada, asegúrese de que su consulta interna tenga facetas.

    ```sql
    SELECT max(cpu) FROM (FROM SystemSample SELECT min(cpuPercent) as 'cpu' FACET hostname) ​​​​
    ```
  </Collapser>

  <Collapser
    id="aggregation_window_size"
    title="La consulta en todos los niveles debe tener el mismo tamaño de ventana de agregación."
  >
    Con una ventana de agregación de alertas de 1 minuto, la consulta interna produciría dos ventanas más pequeñas de 30 segundos. En teoría, estas dos ventanas podrían agregarse mediante la consulta externa. Sin embargo, esto no es compatible actualmente.

    ```sql
    SELECT max(cpu) FROM (FROM Event SELECT min(cpuTime) as cpu TIMESERIES 30 seconds)​​
    ```
  </Collapser>

  <Collapser
    id="signal_loss"
    title="La pérdida de señal aún no es compatible con consultas anidadas"
  >
    Para obtener más información sobre la pérdida de señal, consulte [API NerdGraph: pérdida de señal y llenado de espacios](/docs/alerts-applied-intelligence/new-relic-alerts/alerts-nerdgraph/nerdgraph-api-loss-signal-gap-filling).
  </Collapser>

  <Collapser
    id="with_metric_format"
    title="Actualmente no se admiten consultas anidadas sobre datos de intervalo de tiempo de métrica"
  >
    No se admiten consultas anidadas para [intervalo de tiempo de métrica](/docs/data-apis/understand-data/new-relic-data-types/#timeslice-data) . Más específicamente, estos términos no están permitidos en la consulta interna de NRQL condición de alerta:

    * `WITH METRIC_FORMAT`
    * `metricTimesliceName`
    * `keyset`, `uniques`, `nativesizeestimate` o `bytecountestimate` llamado en el tipo `Metric`
    * `newrelic.timeslice.value`
    * `apm.service.*`, `apm.browser.*` , `apm.mobile.*`, `apm.key.transaction.*`
  </Collapser>
</CollapserGroup>

## Consejos para la creación de condiciones NRQL [#condition-tips]

A continuación se ofrecen algunos consejos para crear y utilizar una condición NRQL:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Tema
      </th>

      <th>
        Consejos
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Tipos de condición
      </td>

      <td>
        Los tipos de condiciones NRQL incluyen [estática y anomalía](#threshold-types).
      </td>
    </tr>

    <tr>
      <td>
        Crear una descripción
      </td>

      <td>
        Para las condiciones NRQL, puede crear una [descripción](/docs/alerts/new-relic-alerts/defining-conditions/alert-condition-descriptions) personalizada para agregar a cada incidente. Las descripciones se pueden mejorar con sustitución de variables basadas en metadatos del incidente específico.
      </td>
    </tr>

    <tr>
      <td>
        Resultados de la consulta
      </td>

      <td>
        Consulta debe devolver un número. La condición evalúa el número devuelto frente al umbral que ha establecido.
      </td>
    </tr>

    <tr>
      <td>
        Periodo de tiempo
      </td>

      <td>
        Las condiciones NRQL evalúan los datos según cómo se agregan, utilizando ventanas de agregación de 30 segundos a 120 minutos, en incrementos de 15 segundos. Para obtener mejores resultados, recomendamos utilizar los métodos de agregación de flujo de eventos o temporizador de eventos.

        Para el método de agregación de cadencia, la cláusula `SINCE ... UNTIL` implícita que especifica qué minuto evaluar está controlada por su configuración [de retardo/temporizador](#delay-timer) . Dado que los datos muy recientes pueden estar incompletos, es posible que desees consultar los datos de hace 3 minutos o más, especialmente para:

        * Aplicación que se ejecuta en múltiples hosts.
        * `SyntheticCheck` datos: Los tiempos de espera pueden tardar 3 minutos, por lo que se recomiendan 5 minutos o más.

          Además, si una consulta generará datos intermitentes, considere utilizar la opción de señal avanzada [`slide by`](#sliding-window-aggregation) .
      </td>
    </tr>

    <tr>
      <td>
        Umbral de señal perdida (pérdida de detección de señal)
      </td>

      <td>
        Puede utilizar la detección de pérdida de señal para alertar sobre cuándo sus datos (una señal de telemetría) deben considerarse perdidos. Una pérdida de señal puede indicar que un servicio o entidad ya no está en línea o que no se pudo ejecutar un trabajo periódico. También puede usar esto para asegurarse de que los incidentes de datos esporádicos, como recuentos de errores, se cierren cuando no llega ninguna señal.
      </td>
    </tr>

    <tr>
      <td>
        Configuración de señal avanzada
      </td>

      <td>
        Estas configuraciones le brindan opciones para manejar mejor las señales de transmisión continua de datos que a veces pueden faltar. Estas configuraciones incluyen la duración de la ventana de agregación, el retraso/temporizador y una opción para llenar los vacíos de datos. Para obtener más información sobre su uso, consulte [Configuración de señal avanzada](#advanced-signal).
      </td>
    </tr>

    <tr>
      <td>
        Configuración de condiciones
      </td>

      <td>
        Utilice el <DNT>**Condition settings**</DNT> para:

        * Cree un [nombre de condición](/docs/alerts/new-relic-alerts/configuring-alert-policies/define-alert-conditions#rename-condition) conciso y descriptivo.

        * Proporcione una descripción de incidente personalizada para la condición en la página

          <DNT>
            **Add details**
          </DNT>

          que se incluirá en incidentes y notificación.

        * Agregue la URL del runbook para incluir los procedimientos de su organización para manejar incidentes. También puede agregar esta información a la descripción personalizada del incidente.
      </td>
    </tr>

    <tr>
      <td>
        Límites de las condiciones
      </td>

      <td>
        Ver los [valores máximos](/docs/alerts/new-relic-alerts/getting-started/minimum-maximum-values).
      </td>
    </tr>

    <tr>
      <td>
        Estado de salud
      </td>

      <td>
        Para que una [visualización de estado de salud de](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/view-entity-health-status-find-entities-without-alert-conditions) condición de alerta NRQL funcione correctamente, la consulta debe tener como alcance una sola entidad. Para hacer esto, use una cláusula WHERE (por ejemplo, `WHERE appName = 'MyFavoriteApp'`) o use una cláusula FACET para limitar cada señal a una sola entidad (por ejemplo, `FACET hostname` o `FACET appName`).
      </td>
    </tr>

    <tr>
      <td>
        Ejemplos
      </td>

      <td>
        Para más información, ver:

        * [Sintaxis NRQL esperada](#syntax)
        * [Ejemplos de consulta de condición NRQL](#examples)
      </td>
    </tr>
  </tbody>
</table>

## Gestión de etiquetas en condiciones. [#condition-edit]

Cuando edita una condición NRQL existente, tiene la opción de agregar o eliminar la etiqueta asociada con la entidad de condición. Para hacer esto, haga clic en el botón <DNT>**Manage tags**</DNT> debajo del nombre de la condición. En el menú que aparece, agregue o elimine una etiqueta.

## Las ediciones de condiciones pueden restablecer la evaluación de condiciones [#evaluation-resets]

Cuando edita la condición de alerta NRQL de algunas maneras específicas (que se detallan a continuación), sus evaluaciones se restablecen, lo que significa que cualquier evaluación hasta ese punto se pierde y la evaluación comienza de nuevo desde ese punto. Las dos formas en que esto le afectará son:

* Para el umbral "durante al menos x minutos": debido a que la ventana de evaluación se ha restablecido, habrá un retraso de al menos x minutos antes de que se pueda informar cualquier incidente.
* Para [condiciones de anomalía](/docs/alerts-applied-intelligence/applied-intelligence/anomaly-detection/custom-anomalies/): la condición comienza de nuevo y se pierde todo el aprendizaje de anomalías.

Las siguientes acciones provocan un restablecimiento de la evaluación de las condiciones NRQL:

* Cambiando la consulta
* Cambiar la ventana de agregación, el método de agregación o la configuración del temporizador/retardo de agregación
* Cambiar la configuración de "incidente cercano en pérdida de señal"
* Cambiar cualquier configuración de relleno de huecos
* Cambiar la dirección de la anomalía (si corresponde): superior, inferior o superior/inferior
* Cambiar el valor de umbral, la ventana de umbral o el operador de umbral
* Cambiar el intervalo de deslizamiento (solo en condiciones [de agregación de ventanas deslizantes](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/#sliding-window-aggregation) )

Las siguientes acciones (junto con cualquier otra acción no cubierta en la lista anterior) **no** restablecerán la evaluación:

* Cambiar la ventana de tiempo de pérdida de señal (duración de vencimiento)
* Cambiar la función de tiempo (cambiar "al menos" a "al menos una vez", o viceversa)
* Alternar la configuración "abrir incidente en caso de pérdida de señal"

## Tipos de condición de alerta [#threshold-types]

Cuando crea una alerta NRQL, puede elegir entre diferentes tipos de condiciones:

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Tipos de condición de alerta NRQL
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Estático
      </td>

      <td>
        Este es el tipo más simple de condición NRQL. Le permite crear una condición basada en una consulta NRQL que devuelve un valor numérico.

        Opcional: incluya una cláusula `FACET` .
      </td>
    </tr>

    <tr>
      <td>
        [anomalía](/docs/alerts-applied-intelligence/applied-intelligence/anomaly-detection/custom-anomalies/) (anomalía dinámica)
      </td>

      <td>
        Utiliza una condición de autoajuste basada en el comportamiento pasado de los valores del monitor. Utiliza el mismo formulario de consulta NRQL que el tipo estático, incluida la cláusula opcional `FACET` .
      </td>
    </tr>
  </tbody>
</table>

## Establecer el umbral de pérdida de señal [#signal-loss]

<Callout variant="important">
  La característica de pérdida de señal requiere que haya una señal presente antes de que pueda detectar que la señal se ha perdido. Si habilita una condición mientras no hay señal presente, no se detectará ninguna pérdida de señal y la característica de pérdida de señal no se activará.
</Callout>

La pérdida de señal ocurre cuando ningún dato coincide con la condición NRQL durante un período de tiempo específico. Puede establecer la duración del umbral de pérdida de señal y también qué sucede cuando se cruza el umbral.

<img
  width="80%;"
  title="signal-loss-ui.png"
  alt="signal-loss-ui.png"
  src="/images/queries-nrql_screenshot-full_signal-loss-ui.webp"
/>

<figcaption>
  Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Alerts > Alert conditions (Policies)**</DNT> y luego <DNT>**+ New alert condition**</DNT>. La pérdida de señal solo está disponible para condiciones NRQL.
</figcaption>

También puede administrar estas configuraciones utilizando la API GraphQL (recomendada) o la API REST. Vaya aquí para ver [ejemplos específicos de API GraphQL](/docs/alerts-applied-intelligence/new-relic-alerts/alerts-nerdgraph/nerdgraph-api-loss-signal-gap-filling).

<DNT>
  **Loss of signal settings:**
</DNT>

La configuración de pérdida de señal incluye una duración de tiempo y dos acciones posibles.

* <DNT>
    **Signal loss expiration time**
  </DNT>

  * Etiqueta UI :

    <DNT>
      **Signal is lost after:**
    </DNT>

  * Nodo GraphQL: [expiration.expirationDuration](/docs/apis/nerdgraph/examples/nerdgraph-api-loss-signal-gap-filling/#loss-of-signal)

  * La duración de la caducidad es un temporizador que se inicia y se reinicia cuando recibimos un punto de datos en el canal de alerta de transmisión. Si no recibimos otro punto de datos antes de que expire su 'tiempo de vencimiento', consideramos que esa señal se perdió. Esto puede deberse a que no se envían datos a New Relic o a que la cláusula `WHERE` de su consulta NRQL filtra esos datos antes de transmitirlos al canal de alerta. Tenga en cuenta que cuando tiene una consulta por facetas, cada faceta es una señal. Entonces, si alguna de esas señales finaliza durante la duración especificada, se considerará una pérdida de señal.

  * La pérdida del tiempo de vencimiento de la señal es independiente de la duración del umbral y se activa tan pronto como expira el temporizador.

  * La duración máxima de caducidad es de 48 horas. Esto es útil cuando se monitorea la ejecución de trabajos poco frecuentes. El mínimo son 30 segundos, pero recomendamos utilizar al menos 3-5 minutos.

* <DNT>
    **Loss of signal actions**
  </DNT>

  Una vez que se considera perdida una señal, puede cerrar un incidente abierto, abrir un incidente nuevo o ambos.

  * Cerrar todos los incidentes abiertos actuales: Cierra todos los incidentes abiertos que estén relacionados con una señal específica. No necesariamente cerrará todos los incidentes por una condición. Si está alertando sobre un servicio efímero o sobre una señal esporádica, querrá elegir esta acción para asegurarse de que el incidente se cierre correctamente. El nombre del nodo GraphQL para esto es ["closeViolationsOnExpiration](/docs/apis/nerdgraph/examples/nerdgraph-api-loss-signal-gap-filling/#loss-of-signal)"
  * Abrir nuevo incidente: Esto abrirá un nuevo incidente cuando la señal se dé por perdida. Estas incidencias nos indicarán que se deben a una pérdida de señal. Según sus preferencias de incidentes, esto debería generar una notificación. El nombre del nodo GraphQL para esto es ["openViolationOnExpiration](/docs/apis/nerdgraph/examples/nerdgraph-api-loss-signal-gap-filling/#loss-of-signal)"
  * Cuando habilita ambas acciones, primero cerraremos todos los incidentes abiertos y luego abriremos un nuevo incidente por pérdida de señal.

Para crear una alerta NRQL configurada con pérdida de detección de señal en la UI:

1. Para una política, cuando crea una condición, en

   <DNT>
     **Select a product**
   </DNT>

   , haga clic en

   <DNT>
     **NRQL**
   </DNT>

   y luego haga clic en

   <DNT>
     **Next, define thresholds**
   </DNT>

   .

2. Escriba una [consulta NRQL](/docs/alerts/new-relic-alerts/defining-conditions/create-alert-conditions-nrql-queries#syntax) que devuelva los valores sobre los que desea alertar.

3. Para

   <DNT>
     **Threshold type**
   </DNT>

   , seleccione

   <DNT>
     **Static**
   </DNT>

   o

   <DNT>
     **Anomaly**
   </DNT>

   .

4. Haga clic en

   <DNT>
     **+ Add lost signal threshold**
   </DNT>

   y luego establezca el tiempo de duración de vencimiento de la señal en minutos o segundos en el campo

   <DNT>
     **Consider the signal lost after**
   </DNT>

   .

5. Elige lo que quieres que suceda cuando se pierda la señal. Puede marcar uno o ambos de

   <DNT>
     **Close all current open incidents**
   </DNT>

   y

   <DNT>
     **Open new "lost signal" incident**
   </DNT>

   . Estos controlan cómo se manejará el incidente de pérdida de señal para la condición.

6. Asegúrese de nombrar su condición antes de guardarla.

Incidente apertura por pérdida de señal cierre cuando:

* la señal vuelve. El incidente de señal perdida recién abierto se cerrará inmediatamente cuando se evalúen nuevos datos.

* expira la condición a la que pertenecen. De forma predeterminada, las condiciones caducan después de 3 días.

* cierras manualmente el incidente con la opción

  <DNT>
    **Close all current open incidents**
  </DNT>

  .

<Callout variant="tip">
  La detección de pérdida de señal no funciona en consultas NRQL que utilizan agregación anidada o subconsultas.
</Callout>

## Configuración de señal avanzada [#advanced-signal]

<img
  width="80%;"
  title="Screenshot showing advanced signal settings"
  alt="Screenshot showing advanced signal settings"
  src="/images/queries-nrql_screenshot-full_fine-tune-signals.webp"
/>

<figcaption>
  Al crear una condición de alerta NRQL, utilice la configuración de señal avanzada para controlar [la transmisión de datos de alerta](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/streaming-alerts-key-terms-concepts) y evitar falsas alarmas.
</figcaption>

Al crear una condición NRQL, existen varias [configuraciones de señal avanzadas](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/your-first-nrql-condition/#advanced-signal-settings):

* Duración de la ventana de agregación
* Agregación de ventanas deslizantes
* Método de transmisión
* Temporizador de retardo
* Llenar lagunas de datos
* Retraso en la evaluación

Para leer una explicación de qué son estas configuraciones y cómo se relacionan entre sí, consulte [Conceptos de alertas de transmisión](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/streaming-alerts-key-terms-concepts). A continuación encontrará instrucciones y consejos sobre cómo configurarlos.

### Duración de la ventana de agregación [#window-duration]

Puede configurar la [duración de la ventana de agregación](/docs/alerts-applied-intelligence/new-relic-alerts/advanced-alerts/understand-technical-concepts/streaming-alerts-key-terms-concepts/#window-duration) para elegir cuánto tiempo se acumulan los datos en una ventana de tiempo de transmisión antes de agregarlos. Puede configurarlo entre 30 segundos y 120 minutos. El valor predeterminado es un minuto.

### Agregación de ventanas deslizantes [#sliding-window-aggregation]

Puede utilizar [ventanas deslizantes](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/create-smoother-charts-sliding-windows) para crear gráficos más fluidos. Esto se hace creando ventanas de datos superpuestas.

Aprenda cómo configurar ventanas corredizas en este breve video (2:30 minutos):

<Video
  id="-5--8DZynFE"
  type="youtube"
/>

Una vez habilitado, configure el "intervalo de diapositiva por" para controlar cuánto tiempo de superposición tienen sus ventanas agregadas. El intervalo debe ser más corto que la ventana de agregación y al mismo tiempo dividirse uniformemente en ella.

<Callout variant="important">
  Inmediatamente después de crear una nueva condición de alerta de ventanas deslizantes o realizar cualquier acción que pueda provocar un [restablecimiento de la evaluación](#evaluation-resets), su condición necesitará tiempo para crear un "búfer agregado" durante la primera ventana de agregación. Durante ese tiempo no se producirá ningún incidente. Una vez que haya pasado esa única ventana de agregación, se habrá creado un "búfer" completo y la condición funcionará normalmente.
</Callout>

### Método de transmisión [#streaming]

Elija entre [tres métodos de agregación de transmisión](/docs/alerts-applied-intelligence/new-relic-alerts/advanced-alerts/understand-technical-concepts/streaming-alerts-key-terms-concepts/#aggregation-methods) para obtener los mejores resultados de evaluación para sus condiciones.

### Temporizador de retardo [#delay-timer]

Puede ajustar el [retraso/temporizador](/docs/alerts-applied-intelligence/new-relic-alerts/advanced-alerts/understand-technical-concepts/streaming-alerts-key-terms-concepts/#delay-timer) para coordinar [nuestro algoritmo de alerta de transmisión](/docs/new-relic-solutions/get-started/glossary/#streaming-algorithm) con el comportamiento de sus datos. Si sus datos son escasos o inconsistentes, es posible que desee utilizar el método de agregación del temporizador de eventos.

Para el método de cadencia, la latencia total admitida es la suma de la duración de la ventana de agregación y el retraso.

Si el tipo de datos proviene de un [agente de lenguaje APM](/docs/apm/new-relic-apm/getting-started/introduction-apm) y se agrega desde muchas instancias de aplicación (por ejemplo, `Transactions`, `TransactionErrors`, etc.), recomendamos usar el método de flujo de eventos con la configuración predeterminada.

<Callout variant="important">
  Al crear condiciones NRQL para datos recopilados de [Infraestructura integrada en la nube](/docs/infrastructure/infrastructure-integrations/get-started/introduction-infrastructure-integrations/#cloud) como AWS CloudWatch o Azure, le recomendamos que utilice el método de temporizador de eventos.
</Callout>

### Llenar lagunas de datos [#data-gaps]

El relleno de espacios le permite personalizar los valores que utilizará cuando sus señales no tengan ningún dato. Puede llenar los vacíos en sus flujos de datos con una de estas configuraciones:

* <DNT>
    **None**
  </DNT>

  : (Predeterminado) Elija esto si no desea realizar ninguna acción en ventanas de agregación vacías. Durante la evaluación, una ventana de agregación vacía restablecerá el temporizador de duración del umbral. Por ejemplo, si una condición dice que todas las ventanas de agregación deben tener puntos de datos por encima del umbral durante 5 minutos y 1 de las 5 ventanas de agregación está vacía, entonces la condición no será un incidente.

* <DNT>
    **Custom static value**
  </DNT>

  : elija esto si desea insertar un valor estático personalizado en las ventanas de agregación vacías antes de que se evalúen. Esta opción tiene un parámetro obligatorio adicional de `fillValue` (como se nombra en la API) que especifica qué valor estático se debe usar. El valor predeterminado es `0`.

* <DNT>
    **Last known value**
  </DNT>

  : Esta opción inserta el último valor visto antes de que se produzca la evaluación. Mantenemos el estado del último valor visto durante un mínimo de 2 horas. Si la duración del umbral configurado es superior a 2 horas, este valor se mantiene durante esa duración.

<Callout variant="tip">
  El sistema de alerta llena los vacíos en las señales reportadas activamente. Este historial de señales se elimina después de un período de inactividad y, para llenar los espacios, los puntos de datos recibidos después de este período de inactividad se tratan como señales nuevas. La duración de la inactividad es de 2 horas o la duración del umbral configurado, lo que sea mayor.

  Para obtener más información sobre la pérdida de señal, el llenado de espacios y cómo solicitar acceso a estas características, consulte [esta publicación del Foro de soporte](https://discuss.newrelic.com/t/announcing-new-relic-one-streaming-alerts-for-nrql-conditions/115361).
</Callout>

Opciones para editar la configuración de la brecha de datos:

* En la UI de condiciones NRQL, vaya a

  <DNT>
    **Condition settings > Advanced signal settings > fill data gaps with**
  </DNT>

  y elija una opción.

* Si utiliza nuestra [API Nerdgraph](/docs/alerts-applied-intelligence/new-relic-alerts/alerts-nerdgraph/nerdgraph-api-loss-signal-gap-filling) (preferida), este nodo se encuentra en: `actor : account : alerts : nrqlCondition : signal : fillOption | fillValue`

* NerdGraph es nuestra API recomendada para esto, pero si está utilizando nuestra API REST, puede encontrar esta configuración en el explorador de API REST en la sección

  <DNT>
    **"signal"**
  </DNT>

  de [la API de condiciones alerta NRQL](https://rpm.newrelic.com/api/explore/alerts_nrql_conditions/list).

### Retraso en la evaluación [#evaluation-delay]

Puede habilitar el indicador `Use evaluation delay` y configurar hasta 120 minutos para retrasar la evaluación de las señales entrantes.

Cuando se implementan nuevas entidades por primera vez, la utilización de recursos en la entidad suele ser inusualmente alta. En entornos de escala automática, esto puede crear fácilmente muchas alertas falsas. Al retrasar el inicio de la detección de alertas en señales emitidas por una nueva entidad, puede reducir significativamente la cantidad de falsas alarmas asociadas con el despliegue en entornos orquestados o de escala automática.

Opciones para habilitar el retraso de la evaluación:

* En la UI de condiciones NRQL, vaya a

  <DNT>
    **Adjust to signal behavior > Use evaluation delay**
  </DNT>

  .

* Si utiliza nuestra [API Nerdgraph](/docs/apis/nerdgraph/examples/nerdgraph-api-nrql-condition-alerts/#static-condition), este nodo se encuentra en: `actor : account : alerts : nrqlCondition : signal : evaluationDelay`
