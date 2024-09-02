---
title: Obtenga más detalles sobre sus límites de datos
tags:
  - Ingest data manage data
  - Manage data
  - Resource metrics
  - system limits
freshnessValidatedDate: never
translationType: machine
---

New Relic tiene límites de recursos establecidos para proteger su experiencia, nuestros sistemas y a nuestros demás clientes. Estos límites van desde la cantidad máxima de caracteres que puede tener en una consulta hasta tasas de solicitud de API y más.

Esta página describe la métrica de límite y [los eventos`NrIntegrationError` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror)que le permiten ver sus límites, su uso actual de datos y el consumo general de recursos en comparación con esos límites, y el impacto de experimentar un evento de límite. También proporcionamos una serie de consultas que, cuando se compilan en un dashboard, pueden brindarle información valiosa y constante sobre el estado de sus límites.

<Callout variant="important">
  Si bien `NrIntegrationError` evento proporciona datos sobre muchos tipos de límites, las métricas de límite de recursos actualmente solo cubren los límites de tasa de ingesta de solicitudes y consultas de API.
</Callout>

## ¿Qué pasa cuando llegas a un límite?

Nuestra respuesta al alcanzar un límite depende de varios factores: el [tipo de límite que se alcanza](/docs/telemetry-data-platform/manage-data/view-system-limits/#incidents), así como la duración, la frecuencia y la cantidad en la que se excede el límite. Exceder un límite no siempre significa que experimente un evento de límite, como datos perdidos, tráfico rechazado o que sus datos se apaguen por el resto del día. A veces permitimos un pequeño margen antes de imponer un límite. Dicho esto, cualquier recurso consumido por encima del 100 % corre el riesgo de sufrir un impacto límite en cualquier momento.

Muchos de nuestros límites de tarifas se aplican proporcionalmente. Eso significa que si apenas excede el límite, tomaremos menos medidas que si lo excede en un 200 %.

Los límites métricos solo son visibles si envías datos a una API `dataType` o `limitName` correspondiente. Por ejemplo, si envía datos a través de la API métrica, verá el recurso API métrica métrica, pero si no envía ningún dato <InlinePopover type="apm"/>, no verá el recurso métrica APM.

<Callout variant="tip">
  El impacto métrico se generará independientemente del impacto; si no hay impacto, verás un 0.
</Callout>

Se genera un [evento`NrIntegrationError` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror)cuando experimentas un impacto y es una buena manera de ver rápidamente si estás experimentando algún evento límite. Consulte [Ver límites del sistema](/docs/telemetry-data-platform/manage-data/view-system-limits/) para obtener más información.

## Cree un dashboard para ver el estado de su límite

Usando tres límites métricos juntos en un dashboard, puede ver rápidamente imágenes detalladas de sus `Ingest Resource Request Per Minute` límites y con `NrIntegrationError` obtener una vista de más límites.

<img
  title="data limits dashboard"
  alt="data limits dashboard"
  src="/images/accounts_screenshot-crop_limits-dashboard.webp"
/>

<figcaption>
  Dashboard que muestra el estado de los límites mediante un puñado de consultas.
</figcaption>

Usamos la siguiente consulta para crear este dashboard. Para crear un dashboard como este en New Relic, seleccione <DNT>**Dashboards**</DNT> y luego <DNT>**Create a dashboard**</DNT>. Luego, agregue un nuevo gráfico para cada consulta que desee monitor periódicamente. Los tres límites métricos incluidos en esta consulta se describen en una sección separada a continuación.

De izquierda a derecha, de arriba a abajo:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id=""
    title="Límites de consumo de recursos como %"
  >
    ```
    FROM Metric select rate(sum(newrelic.resourceConsumption.currentValue), 1 minute) /latest(newrelic.resourceConsumption.limitValue) * 100 facet limitName where limitTimeInterval = '1 minute' timeseries limit max
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id=""
    title="% máximo de consumo en una hora"
  >
    ```
    SELECT max(`usage`) FROM (FROM Metric select rate(sum(newrelic.resourceConsumption.currentValue), 1 minute) / latest(newrelic.resourceConsumption.limitValue) * 100 as 'usage' facet limitName timeseries ) facet limitName limit max
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id=""
    title="APM API del agente transacción evento solicitud por minuto"
  >
    ```
    FROM Metric select rate(sum(newrelic.resourceConsumption.currentValue), 1 minute) where limitName = 'APM Agent API transaction events requests per minute' TIMESERIES
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id=""
    title="Traza API Con línea límite"
  >
    ```
    FROM Metric select rate(sum(newrelic.resourceConsumption.currentValue), 1 minute) as 'usage', latest(newrelic.resourceConsumption.limitValue) as 'limit' where limitName = 'Trace API requests per minute' TIMESERIES
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id=""
    title="FACETA de impacto"
  >
    ```
    From Metric select rate(sum(newrelic.resourceConsumption.impact), 1 minute) facet dataType, impact, resource TIMESERIES 1 minute limit max
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id=""
    title="NrIntegrationError por límite"
  >
    ```
    FROM NrIntegrationError select count(*) facet limitName TIMESERIES MAX  since 1 day ago limit max
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id=""
    title="Límites de cuentas múltiples (solo en gráficos de series temporales)"
  >
    Si desea ver los límites para varias cuentas en un gráfico:

    1. ejecute esta consulta desde una de las cuentas:

       ```
       FROM Metric select rate(sum(newrelic.resourceConsumption.currentValue), 1 minute) / latest(newrelic.resourceConsumption.limitValue) * 100 facet limitName, consumingAccountId where limitTimeInterval = '1 minute' timeseries limit max
       ```

    2. Haga clic en <DNT>**Add another query**</DNT>.

    3. Seleccione una cuenta diferente.

    4. Luego ejecute esta consulta nuevamente:

       ```
        FROM Metric select rate(sum(newrelic.resourceConsumption.currentValue), 1 minute) / latest(newrelic.resourceConsumption.limitValue) * 100 facet limitName, consumingAccountId where limitTimeInterval = '1 minute' timeseries limit max
       ```

    5. Finalmente, guárdalo.
  </Collapser>

  <Collapser
    className="freq-link"
    id=""
    title="Lista de límites y NrIntegrationError"
  >
    ```
    FROM Metric, NrIntegrationError select rate(sum(newrelic.resourceConsumption.currentValue), 1 minute) as 'Per Minute Count',latest(newrelic.resourceConsumption.limitValue) as ' limit Value',(rate(sum(newrelic.resourceConsumption.currentValue), 1 minute)/latest(newrelic.resourceConsumption.limitValue)*100)as 'Percent Used', filter (count(*), where NrIntegrationError.limitValue is not null) as 'limit reached count' facet limitName limit 1000
    ```
  </Collapser>
</CollapserGroup>

## Límite métrico

Estas métricas, utilizadas en la consulta dashboard anterior, pueden centrarse en un único límite o recurso. O bien, con la ayuda de `FACET limitName or resource` proporciona una vista de todos tus límites.

<CollapserGroup>
  <Collapser
    className="freq-link"
    id=""
    title="newrelic.resourceConsumption.limitValue"
  >
    `limitValue` le permite ver la configuración de un límite de `limitName` y comprender más sobre qué recurso está vinculado a este límite. Los siguientes ejemplos utilizan la métrica de valor límite en la consulta:

    * Ejemplo de solicitudes API métricas por minuto.

      ```
      FROM Metric select latest(newrelic.resourceConsumption.limitValue) where limitName = 'Metric API requests per minute'
      ```

    * Para mostrar todos los límites, agregue `FACET limitName` y considere agrupar por `limitTimeInterval`.

      ```
      FROM Metric select latest(newrelic.resourceConsumption.limitValue) WHERE limitTimeInterval = '1 minute' FACET limitName limit max
      ```
  </Collapser>

  <Collapser
    className="freq-link"
    id=""
    title="newrelic.resourceConsumption.currentValue"
  >
    `currentValue` le muestra la cantidad de un recurso determinado que está consumiendo actualmente. Para tener una mejor idea de cómo nuestros sistemas ven su consumo, use una función `rate()` con el período de tiempo que se alinea con el `limitTimeInterval`. Límite 200.

    * Ejemplo de solicitud API métrica por minuto:

      ```
      FROM Metric select rate(sum(newrelic.resourceConsumption.currentValue),1 minute) where limitName = 'Metric API requests per minute'
      ```

    * Para mostrar todos los límites, agregue `FACET limitName` y considere agrupar por `limitTimeInterval`.

      ```
      FROM Metric select rate(sum(newrelic.resourceConsumption.currentValue),1 minute) where limitTimeInterval = '1 minute' FACET limitName limit max
      ```
  </Collapser>

  <Collapser
    className="freq-link"
    id=""
    title="newrelic.resourceConsumption.impact"
  >
    `impact` le permite saber para cualquier recurso determinado qué impacto está teniendo el evento de límite. Los ceros significan que usted no está afectado actualmente.

    El más granular que tenemos es `dataType`. Es posible que varias instancias de `limitName` afecten a un solo tipo, como RPM métrica y DPM. Si lo sabemos, mostraremos `limitName`.

    ```
    From Metric select rate(sum(newrelic.resourceConsumption.impact), 1 minute) facet dataType, resource, impact, limitName TIMESERIES limit max
    ```
  </Collapser>
</CollapserGroup>

### Atributo métrico

Atributo en `newrelic.resourceConsumption.limitValue` y `newrelic.resourceConsumption.currentValue`:

* `limitName`: el nombre del límite para los datos de la métrica, por ejemplo `RPM Metric API`.
* `dataType`: qué tipo de datos rastrea la métrica, por ejemplo `Metric`, `Log` o `APM`.
* `Resource`: Qué recurso se está consumiendo, por ejemplo `Requests` o `DPM`.
* `limitTimeInterval`: Qué ventana de tiempo se evalúa para limitar este recurso.
* `consumingAccountId`: La cuenta New Relic donde se consume el recurso.

Atributo en `newrelic.resourceConsumption.impact`

* `dataType`: el tipo de datos que se ven afectados, por ejemplo `Metric`, `Log` o `APM`.
* `Resource`: Qué recurso se ve afectado, por ejemplo `Request Rate`.
* `Impact`: un recuento de lo que sucede cuando el recurso excede el límite establecido, por ejemplo, solicitudes descartadas.
* `consumingAccountId`: La cuenta New Relic donde se consume el recurso.

## Establecer alerta sobre recurso métrica

Si bien es útil crear un dashboard para ver todos sus límites, poder automatizarlo es aún mejor. Puede establecer <InlinePopover type="alerts"/>en su límite métrico para proporcionar actualizaciones sobre los cambios de límites.

<Callout variant="tip">
  Debido a que actualmente solo tenemos métrica en ventanas de tiempo de 1 minuto, configurar TimeWindow = 1 minuto las cubrirá todas. Con el tiempo, tendremos más métricas disponibles; es posible que desee establecer alertas separadas para los límites que se aplican en diferentes ventanas de tiempo.
</Callout>

Puede utilizar la siguiente consulta NRQL para crear alerta. Aprenda cómo crear alerta con [NRQL consulta aquí](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/#create).

<CollapserGroup>
  <Collapser
    className="freq-link"
    id=""
    title="Límites facetados por LimitName y con alcance por Timewindow"
  >
    ```
    From Metric select (rate(sum(newrelic.resourceConsumption.currentValue), 1 minute)/latest(newrelic.resourceConsumption.limitValue))*100 facet limitName
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id=""
    title="Alerta en un solo límite"
  >
    ```
    From Metric select (rate(sum(newrelic.resourceConsumption.currentValue), 1 minute)/latest(newrelic.resourceConsumption.limitValue))*100 where limitName = 'my limit'
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id=""
    title="Alerta sobre el impacto límite facetado por tipo de datos, impacto, recurso y motivo"
  >
    ```
    From Metric select rate(sum(newrelic.resourceConsumption.impact), 1 minute) facet dataType, impact, resource, reason
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id=""
    title="Alerta sobre el impacto de un solo tipo de datos"
  >
    ```
    From Metric select rate(sum(newrelic.resourceConsumption.impact), 1 minute) facet dataType, impact, resource, reason  WHERE dataType = 'important things'
    ```
  </Collapser>
</CollapserGroup>
