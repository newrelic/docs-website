---
title: Detectar anomalía en la ingesta
metaDescription: Use your baseline report to detect ingest anomalies.
freshnessValidatedDate: '2023-07-31T00:00:00.000Z'
translationType: machine
---

Una vez que hayas instalado el [dashboard de línea de base](/docs/tutorial-optimize-telemetry/create-baseline-report/), deberás estar atento a él para detectar cualquier anomalía en la ingesta con la mayor frecuencia posible. Si bien debe esperar hasta tener suficientes datos para optimizar su ingesta, puede usar su dashboard para encontrar problemas con su ingesta mucho antes. Puede usar el dashboard de línea de base tal como está o descargar el panel opcional para brindarle opciones de detección de anomalías aún mayores.

También debe configurar <InlinePopover type="alerts"/>para que le notifique los problemas a medida que se produzcan. Puede utilizar nuestra [guía de alertas de ingesta](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/usage-queries-alerts) para crear una gran variedad de alertas, pero le recomendamos que configure estas dos alertas como mínimo:

* Una alerta de umbral para notificar si excede el objetivo mensual de ingesta de datos más allá de los aumentos estacionales.
* Una alerta de anomalía para notificarle sobre un aumento repentino y brusco de datos de ingesta

<Callout variant="tip">
  ¿Eres nuevo en la creación de alertas con nuestra plataforma? Consulte nuestro [tutorial de creación y gestión de alertas](/docs/tutorial-create-alerts/create-new-relic-alerts/) para aprender todo lo que necesita sobre la creación de alertas New Relic.
</Callout>

## Monitor anomalías con vista Lookout [#lookout]

Después de instalar el dashboard, puede obtener una vista de alto nivel de sus patrones de ingesta con la vista <DNT>**Lookout**</DNT>. Desde allí, puede crear una consulta NRQL para buscar cualquier anomalía en la ingesta. Por ejemplo, la siguiente consulta NRQL le brindará información sobre todas las anomalías ingeridas por `usageMetric` durante las últimas 24 horas:

```sql
SELECT rate(sum(GigabytesIngested), 1 day) AS avgGbIngest FROM NrConsumption WHERE productLine='DataPlatform' FACET usageMetric 
```

<img
  src="/images/oma-oe-dg_screenshot-crop_lookout-view-telem-type.webp"
  alt="Lookout view usage metric"
  title="Lookout view usage metric"
/>

Puede cambiar el campo de faceta a cualquier cosa que desee para obtener más o menos granularidad en sus datos de ingesta. Por ejemplo, cambiar `usageMetric` a `consumingAccountName` le brindaría información aún más detallada al generar informes sobre la ingesta por nombre de cuenta, como se muestra a continuación:

<img
  src="/images/oma-oe-dg_screenshot-crop_lookout-view-consuming-account.webp"
  alt="Lookout view consuming account"
  title="Lookout view consuming account"
/>

### Instalar el dashboard de desglose de la entidad (opcional) [#install-entity-breakdown-dashboard]

El dashboard de ingesta de línea de base que utiliza `NrConsumption` como fuente principal. Pero es posible que también desee información sobre cómo estimar el tráfico de ingesta para otro evento o métrica. Si lo hace, puede instalar el dashboard de desglose de entidad, que le ayuda a crear otras visualizaciones que utilizan `bytescountestimate()` para ayudar a estimar sus datos de ingesta.

Para instalar el dashboard de averías de entidad:

1. Vaya al [mismo inicio rápido](https://onenr.io/0PoR8zpDYQG) que utilizó para el dashboard de línea de base.

2. Seleccione <DNT>**Install this quickstart**</DNT>.

3. Instale el dashboard en cualquier cuenta que contenga <InlinePopover type="apm"/>, <InlinePopover type="browser"/>, monitoreo de móviles o clúster de Kubernetes utilizando la [función de importación dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/#dashboards-import). Puede instalar este dashboard en varias cuentas, pero evite dashboard en una cuenta de propietario de asociación o POA.

   <Callout variant="tip">
     Si tiene una estructura de cuenta principal/secundaria, puede instalar el dashboard en una cuenta principal y dashboard para tener dashboard completo de gráficos específicos de la cuenta.
   </Callout>

4. Seleccione <DNT>**Done**</DNT>.

5. Cuando el inicio rápido termine de instalarse, abra el dashboard <DNT>**Data governance entity breakdowns**</DNT> para acceder a sus datos.

Puede consultar [esta sección](/docs/new-relic-solutions/observability-maturity/operational-efficiency/dg-baselining#understand-nr-consumption-metrics) para ver exactamente qué tipos de eventos se utilizan en estos desgloses. Tenga en cuenta que estas consultas consumen más recursos porque no funcionan a partir de una fuente de datos agregada previamente como `NrConsumption`, por lo que es posible que deba ajustar los plazos mediante el uso de cláusulas `WHERE` y `LIMIT` adicionales para que funcionen mejor. en algunos de sus entornos.

### Instale el panel de integración en la nube (opcional) [#install-cloud-integration-dashboards]

La integración en la nube de New Relic a menudo le brinda una fuente importante de crecimiento en la ingesta de datos. Pero sin buenas visualizaciones, a menudo es difícil encontrar de dónde proviene el crecimiento ingerido. Generalmente se debe a que estas integraciones no son parte del proceso normal de CI/CD de una organización o no son parte del sistema de gestión de configuración normal.

Afortunadamente, tenemos un conjunto de paneles que puedes instalar [directamente desde New Relic Instant Observabilidad](https://onenr.io/0EPwJJO9Ow7). El panel individual instalado por este paquete incluye:

* Integración de AWS
* Integración de azure
* Integración de la plataforma Google Cloud
* Integracion on-host
* Kubernetes

<Collapser
  id="Exercise"
  title="Comprobando tus datos"
>
  Responder las siguientes preguntas le ayudará a desarrollar confianza en su capacidad para interpretar datos de línea de base y hacer inferencias correctas. Puede responder estas preguntas utilizando la línea de base de ingesta de datos y el panel de desglose de entidades de ingesta de datos. Instale esos paneles como se describe y vea cuántas de estas preguntas puede responder.

  <table>
    <thead>
      <tr>
        <th>
          Preguntas
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          ¿Cuál es la tasa de ingesta diaria típica para toda la organización (todas las cuentas) durante la semana pasada? ¿Qué fue tres meses antes?
        </td>
      </tr>

      <tr>
        <td>
          ¿Cuáles son los tres principales tipos de telemetría (para la organización en su conjunto) por ingesta? Enumere cada tipo de telemetría y su tasa de ingesta de 30 días más reciente.
        </td>
      </tr>

      <tr>
        <td>
          ¿Cuántas cuentas contribuyen a la ingesta de esta organización?
        </td>
      </tr>

      <tr>
        <td>
          ¿Cuántas cuentas (si las hay) aportan actualmente más de 50 TB al mes?
        </td>
      </tr>

      <tr>
        <td>
          ¿Cuáles son las tres cuentas principales en términos de ingesta durante los últimos 30 días?
        </td>
      </tr>

      <tr>
        <td>
          ¿Cuál es la ingesta de GB para el mes calendario de enero pasado para la cuenta de mayor consumo?
        </td>
      </tr>

      <tr>
        <td>
          ¿Cuáles son las tres cuentas principales en términos de ingesta de `ApmEventsBytes` durante los últimos 30 días?
        </td>
      </tr>

      <tr>
        <td>
          ¿Cuál es el mayor aumento en términos de ingesta de tipos de telemetría para una cuenta determinada en los últimos 9 meses? ¿Qué pasa con las disminuciones?
        </td>
      </tr>

      <tr>
        <td>
          Vaya a la cuenta que aporta más `ApmEventsBytes` e instale/abra el `data governance entity breakdown dashboard`. Enumere las tres principales aplicaciones de APM por ingesta durante las últimas 24 horas y sus respectivas tasas de ingesta de 24 horas.
        </td>
      </tr>
    </tbody>
  </table>
</Collapser>

## ¿Que sigue? [#whats-next]

Si ha seguido el tutorial hasta ahora, ha instalado al menos el dashboard de línea de base, ha generado un informe y ha configurado sistemas para ayudarle a detectar su anomalía en la ingesta. Solo queda un paso más por dar: ¡usar los datos de ingesta para optimizar la telemetría!

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-optimize-telemetry/develop-optimize-plan/","title":"Próximo paso","body":"Aprenda cómo desarrollar un plan de optimización para ayudar a reducir sus costos de ingesta"}}
  previousStep={{"path":"/docs/tutorial-optimize-telemetry/create-baseline-report/","title":"Paso anterior","body":"Aprenda a utilizar el dashboard correcto para crear su línea de base de ingesta"}}
/>
