---
title: Reduzca el ruido con alerta de calidad
metaDescription: Evaluate the quality of your alerts before a peak gameday event by installing the alert quality management dashboard.
freshnessValidatedDate: never
translationType: machine
---

Alerta redundante entierra incidentes críticos bajo ruido. Evaluar su alerta existente es una parte clave de su estrategia de priorización, ya que la calidad de su alerta se traduce en qué tan bien responden sus equipos al incidente. Si hay demasiado ruido, corre el riesgo de fatigar a su equipo con incidentes de baja prioridad que tienen poco o ningún impacto comercial. Los incidentes que no se alertan, sin embargo, provocan interrupciones que afectan la experiencia de los clientes.

## Objetivos [#objective]

Este tutorial asume que ya tienes alerta activa. Ofrece algunas recomendaciones sobre cómo gestionar la calidad de su alerta y proporciona algunas consultas NRQL para crear otras nuevas. Vas a:

* Instalar el dashboard alerta de gestión de calidad (AQM)
* Diferenciar entre una alerta buena y una mala
* Revise nuestras cadenas NRQL recomendadas para crear alertas

## Instalar el dashboard de AQM [#install]

AQM se centra en reducir el número de incidentes molestos para que su equipo se centre en <InlinePopover type="alerts"/>con un verdadero impacto empresarial. Eres un buen candidato para AQM si:

* Tienes demasiadas alertas.
* Tienes alerta que permanece abierta por largos periodos de tiempo.
* Sus clientes descubren sus problemas antes que sus herramientas de monitoreo.

Para comenzar, instale el dashboard de AQM a través de nuestro inicio rápido:

1. [Vaya a la página de observabilidad instantánea](https://newrelic.com/instant-observability/alert-quality-management)

   <DNT>
     [**Alert Quality Management**](https://newrelic.com/instant-observability/alert-quality-management)
   </DNT>

   [.](https://newrelic.com/instant-observability/alert-quality-management)

2. Haga clic en el botón

   <DNT>
     **Install now**
   </DNT>

   .

3. Siga el símbolo para elegir la cuenta en la que desea instalar el dashboard .

4. Vea su dashboard.

<img
  title="AQM Dashboard"
  alt="AQM Dashboard"
  src="/images/alerts_screenshot-crop_AQM-dashboard.webp"
/>

Le recomendamos que pase al menos dos semanas con el dashboard de AQM. Durante ese tiempo, el dashboard de AQM recopilará datos sobre cómo interactúan sus equipos con todas sus alertas.

Como regla general, recomendamos eliminar este tipo de alertas:

* Genere incidentes "siempre activos" que tengan miles de minutos o más de duración acumulada.
* Cuando el 30% o más de las incidencias estén abiertas por menos de 5 minutos.
* Cuyo tiempo medio de cierre sea superior a 30 minutos.
* Crea más de 350 incidentes por semana.

## Crear nueva alerta para picos de demanda [#new-alerts]

Con sus políticas existentes bajo revisión, es posible que desee crear nuevas alertas que se ajusten a los picos de demanda. Crear una buena alerta depende de la especificidad de su configuración. Dos alertas pueden compartir la misma consulta de condición de alerta, por ejemplo:

```sql
SELECT average(`apm.service.memory.heap.used`) FROM Metric WHERE appName = 'Inventory Service'
```

Si bien la consulta en sí es una política de alertas sólida, la forma en que se configura esta alerta puede generar redundancia o ruido. Una alerta mala puede tener una duración de ventana demasiado pequeña, un umbral bajo o ningún retraso o línea de base. Además, adjuntar una condición de alerta a una fuente de datos relativamente joven también puede crear problemas, ya que no hay suficiente historial para detectar un comportamiento anómalo.

Si estás listo para crear una nueva alerta, aquí tienes algunas consultas recomendadas que puedes utilizar para tu día de juego:

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
    title="Alerta cuando los datos alcanzan un máximo, mínimo o promedio"
  >
    Cree una alerta cuando sus datos alcancen un determinado máximo, mínimo o promedio. Esto garantiza que una duración o tiempo de respuesta no supere un determinado umbral.

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

<DocTiles numbered>
  <DocTile
    title="Get started"
    path="/docs/journey-demand/get-started"
  >
    Obtén datos sobre tu arquitectura con APM y agente de infraestructura
  </DocTile>

  <DocTile
    title="Create service levels for gameday"
    path="/docs/journey-demand/find-your-baseline/"
  >
    Cree un nivel de servicio informado por su línea de base
  </DocTile>
</DocTiles>

<DocTiles>
  <DocTile
    title="Reduce noise with quality alerts"
    number="3"
    path="/docs/journey-demand/create-quality-alerts/"
    label={{text: "You are here", color: "orange"}}
  >
    Evalúe su alerta con alerta gestión de calidad
  </DocTile>

  <DocTile
    title="Align your teams with workloads"
    number="4"
    path="/docs/journey-demand/organize-data-workloads/"
  >
    Alinee sus equipos en torno a los mismos datos
  </DocTile>

  <DocTile
    title="Autoscale your infrastructure with Kubernetes"
    number="5"
    path="/docs/journey-demand/autoscale-your-infra/"
  >
    Escale sus recursos a medida que la demanda alcance su punto máximo
  </DocTile>
</DocTiles>
