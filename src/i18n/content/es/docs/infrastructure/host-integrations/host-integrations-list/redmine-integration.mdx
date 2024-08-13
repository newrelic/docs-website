---
title: Integración de Redmine
tags:
  - Redmine  integration
  - New Relic integrations
metaDescription: Install our Redmine  dashboards and see your Redmine  data in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Con nuestro dashboard de Redmine, puede realizar un seguimiento fácil de la tasa de transacciones web, la tasa de errores de la aplicación y la base de datos. Construido con nuestro agente Ruby, el inicio rápido de Redmine le brinda un conjunto de valores predeterminados <InlinePopover type="dashboards"/>que le permiten ver su lugar más completo de datos críticos.

<img
  src="/images/infrastructure_screenshot-crop_redmine-io-dash.webp"
  title="Redmine dashboard"
  alt="Redmine dashboard"
/>

<figcaption>
  Después de configurar la integración con New Relic, vea sus datos en un panel como este, listo para usar.
</figcaption>

## Integra Redmine con el agente Ruby [#ruby]

Nuestro agente Ruby recopila e ingiere datos para que pueda realizar un seguimiento de su rendimiento de Redmine en New Relic. Puede instalar el agente Ruby usando nuestro [iniciador](https://one.newrelic.com/marketplace?account=1&state=eb17d004-3569-306a-d693-9506d3d0cf4e) o siguiendo [la instalación manual](/docs/apm/agents/ruby-agent/installation/install-new-relic-ruby-agent) con nuestros documentos.

Una vez instalado, confirme que New Relic está ingiriendo sus datos de Redmine yendo a <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capaibilities)**</DNT> y luego haciendo clic en <DNT>**Metrics & events**</DNT>. Ejecute la siguiente consulta NRQL para confirmar que New Relic está recibiendo datos de Redmine:

```sql
SELECT apm.service.transaction.duration FROM Metric
```

## Instalar el agente de infraestructura [#infrastructure]

Si bien nuestra integración de Redmine no está construida con nuestro agente de infraestructura, recomendamos instalarla si desea obtener datos de rendimiento sobre sus hosts. Puede instalar el agente de infraestructura de dos maneras diferentes:

* Nuestra [instalación guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) es una herramienta CLI que inspecciona su sistema e instala el agente de infraestructura junto con el agente de monitoreo de aplicaciones que mejor funcione para su sistema. Para obtener más información sobre cómo funciona nuestra instalación guiada, consulte nuestra [descripción general de la instalación guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* Si prefiere instalar nuestro agente de infraestructura manualmente, puede seguir un tutorial para la instalación manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) o [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).

## Ver Redmine métrica en un dashboard [#dash]

Nuestro dashboard predeterminado transforma esos datos sin procesar en tablas y gráficos, que brindan una vista panorámica del estado de su sistema. Para instalar nuestro panel predeterminado, vaya a nuestra [página de observabilidad instantánea de Redmine](https://newrelic.com/instant-observability/redmine).

## Crear consulta para panel personalizado [#custom]

Ciertos rendimientos métricos no están disponibles de fábrica con nuestro tablero prediseñado. Si bien es opcional, recomendamos instrumentación adicional para que pueda realizar un seguimiento métrico de Redmine, como problemas manejables, no manejables y vencidos. Para iniciar el seguimiento, instale el complemento [de monitoreo & Controlling](https://www.redmine.org/plugins/monitoring-controlling) para su aplicación Redmine.

1. Vaya a su carpeta `redmine-monitoring-controlling` y abra el archivo llamado `home_monitoring_controlling_project_controller.rb`. Esto se encuentra en su directorio de complementos.

2. Inserte este fragmento al final del archivo: `::NewRelic::Agent.record_metric(‘Custom/managementIssues’,@managementissues.count)`

3. Vaya a <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities)**</DNT> y luego haga clic en <DNT>**Metrics & events**</DNT>. Ejecute la siguiente consulta para confirmar que New Relic está reportando métrica personalizada:

   ```sql
   SELECT MAX(newrelic.timeslice.value) AS Manageable Issues FROM Metric WHERE metricTimesliceName like '%Custom/managementissues%'
   ```

## ¿Que sigue?

Para obtener más información sobre cómo crear una consulta NRQL y generar un panel, consulte estos documentos:

* [Introducción al generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para crear consultas básicas y avanzadas.
* [Introducción al panel](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar tu dashboard y realizar diferentes acciones.
* [Administre su dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar el modo de visualización de su panel o para agregar más contenido a su dashboard.
