---
title: Guía de mejores prácticas de APM
tags:
  - New Relic solutions
  - Best practices guides
metaDescription: Here are some best practices designed to help you become a APM master and a key asset to your team.
freshnessValidatedDate: never
translationType: machine
---

<DNT>
  **Application monitoring tips you need to know**
</DNT>

Una cosa es saber utilizar APM, pero otra cosa es saber utilizar bien el software de monitoreo del rendimiento de aplicaciones (APM) de New Relic. Aquí encontrarás algunas prácticas recomendadas diseñadas para ayudarte a convertirte en un <InlinePopover type="apm"/>profesional y en un activo clave para tu equipo.

¿Quiere un tutorial paso a paso sobre cómo resolver problemas de rendimiento? Consulte nuestro [tutorial Mi aplicación es lenta](/docs/journey-app-slow/root-causes/).

<Callout variant="tip">
  Para obtener una descripción general de alto nivel de todas sus aplicaciones y servicios, utilice nuestro [explorador de entidades](/docs/new-relic-one/use-new-relic-one/ui-data/new-relic-one-entity-explorer).
</Callout>

<Callout variant="tip">
  Consulte [Diagnóstico de ingeniería de confiabilidad](/docs/new-relic-solutions/observability-maturity/uptime-performance-reliability/diagnostics-beginner-guide) para obtener una guía sobre cómo encontrar problemas de rendimiento comunes usando APM y otras capacidades de New Relic.
</Callout>

## 1. Estandarizar los nombres de las aplicaciones [#naming]

La mayoría de los agentes de New Relic proporcionan un nombre de aplicación predeterminado, como "Mi aplicación" o "aplicación PHP", si no especifica uno en su archivo de configuración de New Relic. No querrás terminar con 20 aplicaciones con nombres idénticos, asegúrate de seleccionar un identificador descriptivo para tus aplicaciones tan pronto como las despliegues.

Para mantener la coherencia y la navegación fácil, New Relic recomienda estandarizar el nombre de sus aplicaciones (por ejemplo, todas las aplicaciones en de prueba añaden \[de prueba] o similares al final de sus nombres). Idealmente, desea que su nueva aplicación Java reciba un nombre automático para reducir las posibilidades de errores tipográficos y nombres incorrectos.

### Cómo hacerlo

Para aplicaciones Java, la denominación automática de aplicaciones puede provenir de las siguientes fuentes:

* Solicitar atributo
* Parámetro de inicio del servlet
* Parámetro de inicio del filtro
* Parámetro de contexto de la aplicación web
* Nombre del contexto de la aplicación web (nombre para mostrar)
* Ruta de contexto de la aplicación web

Elige el método que mejor se ajuste a tus necesidades y sigue [estos pasos](/docs/agents/java-agent/configuration/automatic-application-naming).

Para aplicaciones que no son Java, no existen métodos de denominación automática, así que consulte la [documentación de su agente APM](/docs/apm/new-relic-apm/getting-started/introduction-apm).

## 2. Agrega una etiqueta a tu aplicación [#labels]

Cuando varias aplicaciones diferentes usan la misma cuenta y cada aplicación abarca múltiples entornos (por ejemplo, desarrollo, prueba, preproducción, producción), puede resultar difícil encontrar una aplicación específica en su dashboard descripción general. Es por eso que recomendamos agregar etiquetas a tus aplicaciones para que puedas segmentarlas en grupos lógicos.

Las dos etiquetas más comunes que utilizan los clientes maduros de APM son el nombre de la aplicación y el entorno. Entonces, por ejemplo, si desea ver la aplicación de facturación en Prueba, simplemente puede filtrar por "aplicación de facturación" (etiqueta de nombre) y "prueba" (etiqueta de entorno).

<Callout variant="caution">
  En los archivos de configuración del agente APM, utilice el campo `labels` para agregar una etiqueta a sus datos. Por ejemplo, consulte esta descripción de la [configuración de etiquetas de Python](/docs/agents/python-agent/configuration/python-agent-configuration#labels).
</Callout>

APM está diseñado para que las aplicaciones puedan agruparse en un número ilimitado de categorías de etiquetas significativas.

### Cómo hacerlo

1. [Obtenga más información sobre las etiquetas.](/docs/new-relic-one/use-new-relic-one/core-concepts/tagging-use-tags-organize-group-what-you-monitor)
2. [Aprenda a agregar etiquetas.](/docs/new-relic-one/use-new-relic-one/core-concepts/use-tags-help-organize-find-your-data/#tag-sources)
3. [Aprenda a consultar etiquetas.](/docs/new-relic-one/use-new-relic-one/core-concepts/use-tags-help-organize-find-your-data/#query-apm-tags)

## 3. Crear y evaluar política de alertas [#alerts]

Cuando los indicadores de rendimiento clave aumentan o disminuyen, es necesario notificar a las personas y equipos de su organización. [Las alertas en New Relic](/docs/alerts/new-relic-alerts/getting-started/alerting-new-relic) proporcionan un conjunto de herramientas que incluyen anomalías dinámicas que le permiten detectar problemas antes de que afecten a su usuario final.

La política de alertas se puede configurar de dos maneras principales:

* <DNT>
    **Static threshold alerts**
  </DNT>

  son excelentes cuando ya conoce la naturaleza de una aplicación y no es probable que su comportamiento normal cambie pronto. La puntuación Apdex, el tiempo de respuesta, la tasa de errores y el rendimiento son algunos de los umbrales estáticos sobre los que puede crear una política de alertas.

* <DNT>
    **Dynamic anomaly alerts**
  </DNT>

  Facilite la determinación y el establecimiento de un umbral de alerta dinámico para su aplicación con diferentes patrones estacionales y tendencias de crecimiento (lo que dificulta establecer un umbral que defina el comportamiento normal). Estos

  <InlinePopover type="alerts"/>

  utilizan anomalías modeladas a partir de los datos métricos históricos de su aplicación.

Cada política de alertas puede contener tantas condiciones como necesite y cada condición de alerta incluye tres componentes:

* Tipo de condición (métrica, servicio externo, etc.)

* [entidad](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#alert-entity) a la que se dirige la política (por ejemplo, aplicaciones APM,

  <InlinePopover type="browser"/>

  aplicaciones o hosts)

* Umbral que escala hasta situaciones de alerta con gravedad creciente.

Una vez que haya configurado las alertas, deberá asegurarse de aprovechar todos los canales de notificación viables. Después de todo, ¿de qué sirven las alerta si nadie sabe de ellas?

Puede administrar alertas creando grupos de usuarios específicos y aprovechando los canales de alerta integrados de New Relic, incluidos Slack, PagerDuty, webhooks y correo electrónico. Asegúrese de evaluar la política de alertas periódicamente para asegurarse de que siempre sean válidas.

### Cómo hacerlo

Ver la documentación detallada:

* Para configurar una alerta de anomalía dinámica y elegir una aplicación, [siga los procedimientos estándar](/docs/alerts/new-relic-alerts/defining-conditions/create-anomaly-alert-conditions). Verá una vista previa de la métrica con la anomalía prevista. Puede seleccionar una métrica para esa aplicación y ver la anomalía correspondiente. Luego, utilizando los controles deslizantes de umbral, puede establecer qué tan cerca desea que su umbral siga la predicción de anomalía.
* Para configurar una alerta de umbral estático para su configuración de Apdex, [siga los procedimientos estándar](/docs/apm/new-relic-apm/apdex/change-your-apdex-settings).
* Para configurar su canal de alerta de notificación, [siga los procedimientos estándar](/docs/alerts-applied-intelligence/notifications/intro-notifications).

## 4. Identificar y configurar la clave de transacción [#key-transactions]

Dependiendo de la naturaleza de su aplicación, algunas transacciones pueden ser más importantes para usted que otras. La característica clave de transacción de New Relic está diseñada para ayudarlo monitor de cerca lo que considera que es la transacción más crítica para el negocio de su aplicación, ya sea el tiempo de respuesta del usuario final o de la aplicación, el recuento de llamadas, la tasa de errores o cualquier otra cosa. También puede establecer niveles de umbral de alerta para notificaciones cuando su clave de transacción tenga un rendimiento deficiente.

### Cómo hacerlo

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Key transactions**
   </DNT>

   y luego seleccione

   <DNT>
     **Add more**
   </DNT>

   . Luego seleccione la aplicación y la transacción web o, desde la transacción seleccionada, seleccione

   <DNT>
     **Track as key transaction**
   </DNT>

   .

2. Escriba un nombre para la transacción clave y seleccione

   <DNT>
     **Track key transaction**
   </DNT>

   .

3. Opcional: si el agente de la aplicación seleccionada admite alertas personalizadas, use los valores predeterminados que New Relic completa automáticamente o seleccione Editar política de transacción de alerta clave para establecer los valores de umbral de alerta y Apdex.

4. Para ver los detalles dashboard de transacción clave, seleccione

   <DNT>
     **View new key transaction**
   </DNT>

   .

## 5. Seguimiento del historial de despliegue [#deployments]

Cuando los equipos de desarrollo publican código nuevo con la mayor frecuencia posible, puede resultar difícil medir el impacto que cada implementación tiene en el rendimiento. Una forma de estar al tanto de cómo estos cambios afectan su aplicación es mediante informes desplegables.

Estos informes enumeran el despliegue reciente y su impacto en las puntuaciones Apdex del usuario final y de los servidores de aplicaciones, junto con el tiempo de respuesta, el rendimiento y los errores. También puede ver y profundizar en los detalles para detectar errores relacionados con la implementación reciente, o presentar un ticket y compartir detalles con su equipo.

### Cómo hacerlo

1. En la barra de menú New Relic , seleccione

   <DNT>
     **APM & services > (select an app) > Events > Deployments**
   </DNT>

   .

2. Para ver el rendimiento después de un despliegue, vaya al dashboard de descripción general de la aplicación seleccionada en la sección

   <DNT>
     **Recent events**
   </DNT>

   .

Una barra vertical azul en un gráfico indica un despliegue. Para ver información resumida sobre el despliegue, apunte a la barra azul.

## 6. Revisar los informes de APM [#reporting]

Desde SLA, implementación y capacidad hasta escalabilidad, informes de uso de host y más, APM ofrece una variedad de herramientas de informes descargables que revelan tendencias históricas, todas excelentes formas de informar a equipos ejecutivos senior o clientes. Eche un vistazo a la [lista completa de informes](/docs/apm/reports) y utilícelos a su favor.

### Cómo hacerlo

1. En la barra de menú de APM, seleccione

   <DNT>
     **Applications > (select an app) > Reports**
   </DNT>

   .

2. Seleccione el informe que desea ver.

3. Si desea guardar o exportar un informe para compartir, seleccione

   <DNT>
     **Download this report as .csv**
   </DNT>

   , lo que creará un informe con valores separados por comas.

## 7. Revise su entorno con mapas de servicios. [#entire-environment]

Utilice [mapas de servicios](/docs/data-analysis/service-maps/get-started/introduction-service-maps) de New Relic, una característica incluida en APM, para comprender cómo las aplicaciones y los servicios de su arquitectura se conectan y se comunican entre sí. Los mapas de servicios son [representaciones visuales y personalizables](/docs/apm/applications-menu/monitoring/customize-service-maps) de la arquitectura de su aplicación. Maps te muestra automáticamente [las conexiones y dependencias](/docs/data-analysis/service-maps/get-started/introduction-service-maps#connections) de tu aplicación, incluida la base de datos y los servicios externos. [Los indicadores de salud y la métrica de rendimiento](/docs/data-analysis/service-maps/get-started/introduction-service-maps#health-performance) le muestran el estado operativo actual de cada parte de su arquitectura.

<DNT>
  **How to do it**
</DNT>

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > More > Service maps**
   </DNT>

   .

2. Para comenzar, consulte [Introducción a los mapas de servicios](/docs/understand-dependencies/understand-system-dependencies/service-maps/introduction-service-maps).

## 8. Manténgase actualizado [#agents-current]

Con la plataforma SaaS de New Relic, obtener una nueva característica es tan fácil como actualizar su agente. Lo más probable es que su organización ya tenga un conjunto de secuencias de comandos para implementar actualizaciones de aplicaciones en su entorno. De manera similar, también puede automatizar el despliegue de su agente New Relic para asegurarse de que sus sistemas estén actualizados. [Ansible](https://github.com/newrelic/infrastructure-agent-ansible), [Chef](https://github.com/newrelic/infrastructure-agent-chef) y [Puppet](https://github.com/newrelic/infrastructure-agent-puppet) son excelentes ejemplos de marco de despliegue que hacen la vida más fácil al permitirle automatizar todo el proceso de despliegue y gestión.

### Cómo hacerlo

Revise periódicamente qué versión del agente está utilizando para saber cuándo es necesaria una actualización. Si la última versión del agente contiene una solución necesaria o una funcionalidad adicional, descárguela.

Para desplegar el agente automáticamente <DNT>**(preferred as a method to avoid errors)**</DNT>:

1. Utilice scripts de despliegue existentes, siempre que puedan adaptarse para manejar el despliegue.

   O

   Crear y mantener un script que despliegue y configure específicamente el agente New Relic. Idealmente, el script extraería los archivos del agente de un repositorio donde están versionados los archivos (para fines de reversión).

2. Una vez que se haya creado el script, cierre la aplicación (a menos que el script se encargue de esto).

3. Ejecute el script de implementación.

4. Inicie la aplicación (a menos que el script maneje esto).

5. Si surgen problemas, ejecute el script para volver a la versión anterior.

Para desplegar el agente manualmente:

1. Haga una copia de seguridad del directorio de agentes actual.

2. Desplegar el agente actualizado en el directorio de agentes existente.

3. Modifique los archivos de configuración comparando archivos nuevos con archivos existentes. En particular, asegúrese de que elementos como

   <InlinePopover type="licenseKey"/>

   y las extensiones personalizadas se copien en la nueva configuración.

4. Reinicie la aplicación.

5. Si surgen problemas, restaure el agente antiguo utilizando la copia de seguridad y reinicie.

## 9. Gestionar el acceso de los usuarios [#sso]

La forma en que administra su usuario depende del [modelo de usuario](/docs/accounts/original-accounts-billing/original-product-based-pricing/overview-user-models) en el que se encuentre:

* Consulte [los documentos de nuestro modelo de usuario original.](/docs/accounts/original-accounts-billing/original-users-roles/users-roles-original-user-model)
* Consulte [los documentos de nuestro modelo de usuario más nuevo.](/docs/accounts/accounts-billing/new-relic-one-user-management/introduction-managing-users)
