---
title: Explorar datos de Pixie
tags:
  - Pixie Auto-telemetry
  - Pixie integration
  - Kubernetes
  - eBPF
metaDescription: Explore Pixie data in the UI of New Relic
freshnessValidatedDate: never
translationType: machine
---

La autotelemetría recopilada por Pixie se puede encontrar en toda New Relic de UI. Utilice telemetry data de Pixie para hacer lo siguiente:

* [Monitor la salud del servicio](#service-health)
* [Ver perfiles de CPU de la aplicación pod](#cpu-profiles)
* [Monitor problemas de red](#network-health)
* [Inspeccionar solicitudes de cuerpo completo](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/pixie-entities)

La UI de New Relic extrae telemetry data de Pixie del almacenamiento a corto y largo plazo. Obtenga más información sobre el modelo de almacenamiento híbrido para la integración de New Relic Pixie [aquí](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/overview).

## Monitor la salud del servicio [#service-health]

Pixie traza automáticamente las solicitudes HTTP (incluido HTTP/2) enviadas entre servicios, incluso si un extremo está fuera del clúster.

La integración de New Relic Pixie exporta tramos HTTP de Pixie a New Relic para el almacenamiento a largo plazo utilizando el protocolo OpenTelemetry. La vista <DNT>**Services - OpenTelemetry**</DNT> enumera los servicios identificados automáticamente por Pixie, junto con una descripción general de alto nivel del tiempo de respuesta, el rendimiento y la tasa de errores del servicio.

<img
  title="The <DNT>**Services - OpenTelemetry**</DNT> view lists all services identified by Pixie with high-level latency, error and throughput details."
  alt="The <DNT>**Services - OpenTelemetry**</DNT> view lists all services identified by Pixie with high-level latency, error and throughput details."
  src="/images/pixie_screenshot-full_services-otel.webp"
/>

<figcaption>
  La vista <DNT>**Services - OpenTelemetry**</DNT> enumera todos los servicios identificados por Pixie junto con detalles de alto nivel de latencia, errores y rendimiento.
</figcaption>

Al seleccionar un servicio de esta lista, se abrirá la vista del servicio <DNT>**Summary**</DNT> que muestra gráficos del tiempo de respuesta, rendimiento y tasa de errores para todas las solicitudes HTTP realizadas a este servicio.

<img
  title="The <DNT>**Services - OpenTelemetry**</DNT> service Summary view shows graphs of response time, throughput and error rate over time."
  alt="The <DNT>**Services - OpenTelemetry**</DNT> service Summary view shows graphs of response time, throughput and error rate over time."
  src="/images/pixie_screenshot-full_services-otel-details.webp"
/>

<figcaption>
  La vista del servicio OpenTelemetry <DNT>**Summary**</DNT> muestra gráficos de tiempo de respuesta, rendimiento y tasa de errores a lo largo del tiempo.
</figcaption>

Desde la vista del servicio OpenTelemetry, seleccione la pestaña <DNT>**Service map**</DNT> en la barra lateral izquierda. Esta vista de mapa de servicios ayuda a visualizar la dependencia de su aplicación al mostrar un gráfico de todas las entidades con las que se comunica el servicio.

<img
  title="The OpenTelemetry <DNT>**Service map**</DNT> view shows helps visualize your application's dependencies."
  alt="The OpenTelemetry <DNT>**Service map**</DNT> view shows helps visualize your application's dependencies."
  src="/images/pixie_screenshot-full_service-otel-map.webp"
/>

<figcaption>
  La vista OpenTelemetry <DNT>**Service map**</DNT> ayuda a visualizar la dependencia de su aplicación.
</figcaption>

La pestaña del servicio OpenTelemetry <DNT>**Transactions**</DNT> muestra los diferentes extremos a los que el servicio realiza solicitudes. Puedes ordenar el extremo por tiempo de respuesta o rendimiento.

<img
  title="Pixie data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab. "
  alt="Pixie data seen in the OpenTelemetry <DNT>**Transactions**</DNT> tab. "
  src="/images/pixie_screenshot-full_services-otel-transactions.webp"
/>

<figcaption>
  Datos de Pixie vistos en la pestaña OpenTelemetry <DNT>**Transactions**</DNT> .
</figcaption>

La pestaña <DNT>**Databases**</DNT> muestra cualquier solicitud de base de datos que realice el servicio.

<img
  title="Pixie data seen in the OpenTelemetry <DNT>**Databases**</DNT> tab."
  alt="Pixie data seen in the OpenTelemetry <DNT>**Databases**</DNT> tab."
  src="/images/pixie_screenshot-full_services-otel-databases.webp"
/>

<figcaption>
  Datos de Pixie vistos en la pestaña OpenTelemetry <DNT>**Databases**</DNT> .
</figcaption>

La información sobre el estado del servicio impulsada por Pixie también se puede encontrar en las vistas del explorador del clúster de Kubernetes (KCE). La vista de resumen de KCE incluye todos los servicios identificados automáticamente por Pixie.

<img
  title="The Kubernetes cluster explorer shows the services identified by Pixie."
  alt="The Kubernetes cluster explorer shows the services identified by Pixie."
  src="/images/pixie_screenshot-full_kce.webp"
/>

<figcaption>
  El explorador del clúster de Kubernetes muestra los servicios identificados por Pixie.
</figcaption>

Al seleccionar un servicio se muestra la barra lateral de detalles del servicio con datos de rendimiento HTTP, tasa de errores y tiempo de respuesta recopilados por Pixie:

<img
  title="The pod details page in the Kubernetes cluster explorer shows application metrics collected by Pixie."
  alt="The pod details page in the Kubernetes cluster explorer shows application metrics collected by Pixie."
  src="/images/pixie_screenshot-full_kce-pod-details.webp"
/>

<figcaption>
  La página de detalles pod en el explorador del clúster de Kubernetes muestra la aplicación métrica recopilada por Pixie.
</figcaption>

En la parte inferior de la vista de detalles del servicio, seleccione el botón <DNT>**Map View**</DNT> en la sección <DNT>**Related Entities**</DNT> .

Esta vista de mapa ayuda a visualizar la dependencia de su aplicación al mostrar un gráfico de todas las entidades con las que se comunica el servicio.

<img
  title="The service map shown in the pod details view is constructed using HTTP traces collected by Pixie."
  alt="The service map shown in the pod details view is constructed using HTTP traces collected by Pixie."
  src="/images/pixie_screenshot-full_kce-pod-details-map.webp"
/>

<figcaption>
  El mapa de servicio que se muestra en la vista de detalles pod se construye utilizando la traza HTTP recopilada por Pixie.
</figcaption>

En la parte superior de la vista de detalles del servicio, seleccione <DNT>**Check metrics in Pixie**</DNT> para ir al script `px/service` en la pestaña [Depuración en vivo con Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie) . El `px/service script` muestra una descripción general de alto nivel de las estadísticas de rendimiento de este servicio, así como de las solicitudes entrantes que utilizan los datos de Pixie a corto plazo almacenados en su clúster.

## Ver perfiles de CPU de la aplicación pod [#cpu-profiles]

Puede utilizar la característica de creación de perfiles continuos de Pixie para investigar picos en la utilización de la CPU o para identificar problemas de rendimiento dentro del código de su aplicación.

Seleccione un pod enumerado en la vista del explorador del clúster de Kubernetes para ver la vista de detalles pod .

<img
  title="The pod detail view contains an option to see a pod cpu flamegraph."
  alt="The pod detail view contains an option to see a pod cpu flamegraph."
  src="/images/pixie_screenshot-full_kce-pod.webp"
/>

<figcaption>
  El <DNT>**Pod details view**</DNT> en el explorador del clúster de Kubernetes tiene una opción para <DNT>**Check flamegraph in Pixie**</DNT>.
</figcaption>

En la vista de detalles del pod, seleccione la opción <DNT>**Check flamegraph in Pixie**</DNT> para ver un perfil de CPU que utiliza el amplio conjunto de datos que Pixie almacena en el almacenamiento a corto plazo en su clúster.

<img
  title="Check a pod's CPU profile using Pixie"
  alt="Check a pod's CPU profile using Pixie"
  src="/images/pixie_screenshot-crop_cpu-profile.webp"
/>

<figcaption>
  Utilice Pixie para ver gráficos de llamas de CPU para su módulo Kubernetes .
</figcaption>

Para ver un flamegraph de CPU para un nodo Kubernetes , use el script `px/node` en la pestaña [Depuración en vivo con Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie) . Desplácese hasta la parte inferior de esta vista para ver el flamegraph de la CPU del nodo.

Aprenda a interactuar con los flamegraphs de CPU de Pixie en el [Tutorial de creación de perfiles continuos](https://docs.px.dev/tutorials/pixie-101/profiler/).

## Monitor problemas de red [#network-health]

Puede utilizar Pixie para monitor su red Kubernetes junto con sus capas de aplicación e infraestructura.

La pestaña <DNT>**Summary**</DNT> del explorador del clúster de Kubernetes contiene una sección <DNT>**Kubernetes network monitoring with Pixie**</DNT> . Cada vista vinculada en esta sección está impulsada por el rico conjunto de telemetry data de Pixie [almacenados a corto plazo](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/overview) en su clúster.

<img
  title="Kubernetes network monitoring with Pixie"
  alt="Kubernetes network monitoring with Pixie"
  src="/images/pixie_screenshot-full_network-monitoring.webp"
/>

<figcaption>
  Utilice Pixie para Kubernetes Monitoreo de red.
</figcaption>

El enlace <DNT>**Spot DNS issues**</DNT> le mostrará un gráfico de todas las solicitudes de DNS en su clúster. Pase el cursor sobre cualquier borde del gráfico para ver información de latencia y rendimiento.

<img
  title="Spot DNS issues with Pixie's DNS flow graph"
  alt="Spot DNS issues with Pixie's DNS flow graph"
  src="/images/pixie_screenshot-full_dns-flow-graph.webp"
/>

<figcaption>
  Detecte problemas de DNS en su clúster utilizando el gráfico de flujo de DNS de Pixie.
</figcaption>

Los enlaces <DNT>**See TCP retransmissions**</DNT> y <DNT>**See dropped packets**</DNT> mostrarán gráficos de las retransmisiones y caídas de TCP en su clúster. Tenga en cuenta que deberá presionar el botón `RUN` para ver los resultados de estas vistas. La salida de caídas de TCP se muestra a continuación:

<img
  title="See TCP drops and TCP retransmissions using Pixie"
  alt="See TCP drops and TCP retransmissions using Pixie"
  src="/images/pixie_screenshot-full_tcp-drops.webp"
/>

<figcaption>
  Vea caídas de TCP y retransmisiones de TCP en su clúster usando Pixie.
</figcaption>

Tenga en cuenta que las vistas <DNT>**Kubernetes network monitoring with Pixie**</DNT> anteriores también se pueden ver en la pestaña [Depuración en vivo con Pixie](/docs/kubernetes-pixie/auto-telemetry-pixie/understand-use-data/live-debugging-with-pixie) usando el script `px/dns_flow_graph`, `px/tcp_drops` y `px/tcp_retransmits` . Estos scripts tienen argumentos opcionales que le permiten filtrar la salida para seleccionar entidad.
