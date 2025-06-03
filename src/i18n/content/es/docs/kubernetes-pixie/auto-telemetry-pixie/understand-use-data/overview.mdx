---
title: Descripción general
tags:
  - Pixie Auto-telemetry
  - Service monitoring
  - Kubernetes
  - eBPF
metaDescription: Where to see Pixie data in the New Relic UI
freshnessValidatedDate: never
translationType: machine
---

Cuando instalas Pixie usando la instalación guiada New Relic , el complemento New Relic para Pixie se habilita automáticamente y tustelemetry data automática se almacenan en dos ubicaciones.

* Pixie almacena el [conjunto completo de telemetry data que recopila](#pixie-data-sources) en los nodos de su clúster en un almacenamiento a corto plazo (menos de 24 horas).
* El complemento New Relic para Pixie registra automáticamente el clúster con el [sistema de complemento Pixie](https://docs.px.dev/reference/plugins/plugin-system/) y [conserva telemetry dataseleccionados](#pixie-long-term-storage) en New Relic para almacenamiento a largo plazo.

<img
  title="The UI of New Relic pulls data from data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab. "
  alt="Pixie data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab. "
  src="/images/pixie_screenshot-full_services-otel-transactions.webp"
/>

<figcaption>
  Autotelemetría Pixie vista en la New Relic UI.
</figcaption>

Este modelo de almacenamiento híbrido le permite depurar su incidente activo Kubernetes con un amplio conjunto de los telemetry data más recientes, mientras solo paga para incorporar una cantidad seleccionada y configurable de datos en el almacenamiento a largo plazo.

<img
  title="The New Relic Pixie integration hybrid storage model"
  alt="New Relic Pixie integration hybrid storage model"
  src="/images/pixie_diagram_integration-hybrid-storage.webp"
/>

<figcaption>
  El modelo de almacenamiento híbrido de integración New Relic Pixie. Puedes interactuar con ambos conjuntos de datos de Pixie directamente desde la New Relic UI.
</figcaption>

## ¿Dónde puedo ver los datos de Pixie en la New Relic UI? [#explore-pixie-data]

En la New Relic UI, puedes interactuar con los de Pixie telemetry data tanto en el almacenamiento a corto como a largo plazo:

* consulte el conjunto completo de telemetry data de Pixie almacenados a corto plazo en su clúster utilizando la pestaña [Depuración en vivo con Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie) .
* [Explore los datos de Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/explore-pixie-data) persistentes en New Relic utilizando el explorador del clúster de Kubernetes.
* [Inspeccionar la solicitud de aplicación de cuerpo completo y las respuestas](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/pixie-entities) persistieron en New Relic.
* [Cree paneles de datos de Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/dashboard-pixie-data) persistentes en New Relic.
* [Los datos de consulta Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/query-pixie-data) persistieron en New Relic usando el generador de consultas y API NerdGraph.

## ¿Qué datos recopila Pixie? [#pixie-data-sources]

[Pixie utiliza eBPF](https://docs.px.dev/about-pixie/pixie-ebpf/) para recopilar automáticamente telemetry data , como solicitudes de aplicaciones de cuerpo completo, métricas de recursos y redes, perfiles de CPU de aplicaciones y más.

Para ver la lista completa de fuentes de datos que Pixie recopila automáticamente, consulte [los documentos de referencia](https://docs.px.dev/about-pixie/data-sources/) de Pixie.

## ¿Cuántos datos almacena Pixie? [#pixie-short-term-storage]

El objetivo principal del proyecto Pixie de código abierto es crear una plataforma de depuración en tiempo real. El almacenamiento a corto plazo en el clúster es limitado, por lo que telemetry data de Pixie se almacenan durante hasta 24 horas (como máximo) antes de que se agoten. Dado que estos datos se almacenan en su clúster, no paga por ingerirlos.

Para saber cómo aumentar o disminuir el almacenamiento a corto plazo de Pixie, consulta la [guía Administrar la memoria de Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/advanced-configuration/manage-pixie-memory/).

## ¿Qué datos de Pixie persisten en New Relic? [#pixie-long-term-storage]

La integración New Relic Pixie conserva telemetry data seleccionados de Pixie para su almacenamiento a largo plazo. El conjunto predeterminado de datos persistentes incluye:

* Intervalos de solicitudes HTTP (incluido HTTP/2) y métricas doradas (rendimiento, latencia, tasa de errores)
* Spans de solicitudes de DNS y latencia métrica
* Intervalos de solicitudes de MySQL y métricas doradas
* Intervalos de solicitudes de PostgreSQL y métricas doradas
* Cassandra solicita tramos y métricas doradas
* Intervalos de solicitudes de Redis y métricas doradas
* Mensajes kafka y métricas doradas
* JVM métrica

Puedes configurar qué datos de Pixie se conservan en New Relic, incluida la persistencia telemetry data de Pixie adicionales.

## Configurar qué datos de Pixie persisten en New Relic [#pixie-configure-storage]

<Callout variant="important">
  La característica <DNT>**Customize Pixie Ingest**</DNT> requiere la versión 2.X.X+ de la integración New Relic Pixie. Es posible que necesites [actualizar tu integración](/docs/kubernetes-pixie/auto-telemetry-pixie/install-auto-telemetry-pixie/#upgrade) para acceder a esta característica.
</Callout>

Puedes configurar qué telemetry data de Pixie se conservan en New Relic para el almacenamiento a largo plazo:

1. [Seleccione su clúster](https://one.newrelic.com/kubernetes-cluster-explorer) para navegar al explorador del clúster de Kubernetes.
2. Seleccione la pestaña <DNT>**Live debugging with Pixie**</DNT> .
3. Seleccione el botón <DNT>**Customize Pixie Ingest**</DNT> en la parte superior derecha.

<img
  title="Customize Pixie data ingest button"
  alt="Customize Pixie data ingest button"
  src="/images/pixie_screenshot-crop_customize-ingest-button.webp"
/>

<figcaption>
  Puedes personalizar qué telemetry data de Pixie se conservan en New Relic en la pestaña <DNT>**Live debugging with Pixie**</DNT>.
</figcaption>

La integración New Relic Pixie utiliza [el sistema de complemento](https://docs.px.dev/reference/plugins/plugin-system/) de Pixie para exportar telemetry data seleccionados de Pixie a New Relic para su almacenamiento a largo plazo. La página <DNT>**Customize Pixie Ingest**</DNT> contiene una vista integrada de la página de configuración del complemento de Pixie:

<img
  title="Customize Pixie data ingest page"
  alt="Customize Pixie data ingest page"
  src="/images/pixie_screenshot-full_customize-ingest.webp"
/>

<figcaption>
  Puede habilitar, deshabilitar y agregar más scripts de exportación para configurar qué telemetry data de Pixie ingiere New Relic.
</figcaption>

De forma predeterminada, la integración New Relic Pixie incluye varios scripts de exportación de Pixie que ya están habilitados. Puede optar por desactivar uno o más de estos scripts para reducir la ingesta telemetry data de Pixie. Pase el cursor sobre el nombre de un script o haga clic en el botón editar para ver una descripción del script de exportación.

Para exportar telemetry data de Pixie adicionales a New Relic, utilice el botón `+ CREATE SCRIPT`. Estos scripts están escritos en el lenguaje PxL de Pixie y utilizan los métodos de exportación OpenTelemetry de Pixie. Para aprender a escribir un script PxL para exportar datos de Pixie en formato OpenTelemetry, consulte este [tutorial](https://docs.px.dev/tutorials/integrations/otel/).
