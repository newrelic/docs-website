---
title: Gestionar el ciclo de vida de su recopilador de logs
metaDescription: Learn how to manage the life cycle of log collectors in New Relic.
freshnessValidatedDate: never
translationType: machine
---

<Callout title="avance">
  Todavía estamos trabajando en esta característica, ¡pero nos encantaría que la probaras!

  Esta característica se proporciona actualmente como parte de un programa de vista previa de conformidad con nuestras [políticas de prelanzamiento](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

## Descripción general

La solución de gestión del ciclo de vida del recopilador de logs de New Relic permite la gestión de su infraestructura de recopilación de logs en diversos entornos. Con esta solución, puede configurar y monitorear el ciclo de vida de su recopilador de logs.

Ahora tiene la capacidad de gestionar todo el ciclo de vida de su recolector de logs. Esto incluye monitorear su salud y configurar o implementar cambios según sea necesario.

Esta solución es útil para equipos DevOps , administradores de sistemas y gerentes de operaciones de TI que requieren visibilidad sobre su infraestructura de recopilación de logs. Tiene acceso a herramientas que mejoran sus capacidades de observabilidad y mantienen el rendimiento tanto en entornos en contenedores como en locales.

### Soluciones para diversas necesidades

* **Monitoreo del estado del recopilador de logs:** la de la Fluent Bit entidad UI proporciona capacidades de monitoreo para el recopilador de logs.

* **resolución de problemas: Puede** solucionar problemas y corregir problemas de configuración con su recopilador de logs empleando la Fluent Bit de entidad UI, que ayuda a identificar y resolver problemas.

  <img title="Fluent Bit entity dashboard" alt="Fluent Bit entity dashboard" src="/images/fluent-bit-dashboard.webp" />

/\* La siguiente sección se incorporará nuevamente cuando se envíe NR Control \*/ /\* ## Soluciones para diversas necesidades - \*\*Monitoreo del estado del recolector de logs:\*\* La Fluent Bit de entidad UI proporciona capacidades de monitoreo para el recolector de logs, disponibles con o sin New Relic Control. - resolución de problemas:\*\* Puede solucionar problemas y corregir problemas de configuración con su recopilador de logs empleando la Fluent Bit de entidad UI, que ayuda a identificar y resolver problemas. - configuración e implementación remota:\*\* Con New Relic Control, puedes gestionar de forma centralizada la configuración Fluent Bit , actualizarla e implementar cambios de forma remota. \*/

## Gestiona tu recopilador Fluent Bit para el clúster de Kubernetes

La solución de gestión del ciclo de vida del recopilador de logs actualmente brinda soporte para entornos Kubernetes . Le permite:

* Recopila y procesa logs de todas tus aplicaciones en contenedores.
* Agregue metadatos relacionados con Kubernetes a sus logs.
* Emplee el diseño liviano de Fluent Bit para procesar grandes volúmenes de datos sin consumir muchos recursos.

### Requisitos previos

Antes de instalar y configurar Fluent Bit para logging con New Relic, cerciorar de tener los siguientes requisitos previos:

* Acceso a un clúster de Kubernetes
* Las herramientas y licencias necesarias para la instalación y configuración
* Configuración de red y políticas de seguridad para permitir la comunicación con New Relic extremo
* Una cuenta de New Relic

/\* &lt;Callout variant=&quot;important&quot;&gt; También puedes gestionar Fluent Bit a través de New Relic Control. Para obtener más información, consulte \[Control de flota]\(/docs/New Relic-control/fleet-control/overview). \*/&lt;/Callout&gt;

Para obtener más información sobre estos requisitos, consulte [Reenviar sus logs a New Relic](/docs/logs/forward-logs/enable-log-management-new-relic).<br />

/\* Para obtener información sobre la configuración de New Relic Control, consulte \[Introducción a New Relic Control]\(/docs/New Relic-control/getting-started). \*/

### Configuración

Para instalar el agente Fluent Bit en el clúster de Kubernetes:

* Instalar la [integración de New Relic Kubernetes](/install/kubernetes/). Esta integración incluye el complemento Kubernetes para logs.
* Emplee las opciones de configuración disponibles en el [repositorio de newrelic-logging](https://github.com/newrelic/helm-charts/tree/master/charts/newrelic-logging#configuration) durante la [instalación guiada](/install/kubernetes/).

Para obtener más información, consulte [Habilitar Kubernetes para la administración de logs](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding/#enable-process).

/\* ## Instalar Fluent Bit con Fleet Control Si estás comenzando con Fleet Control, primero deberás configurar tu configuración de control de agente. Este proceso incluye la instalación del agente Fluent Bit y otros componentes esenciales. Para usar Fluent Bit con Agente Control, habilite el reenvío de logs como parte de la instalación de Agente Control, como se muestra en la configuración de muestra: &lt;CollapserGroup&gt; &lt;Collapser id=&quot;fluent-bit-config&quot; title=&quot;Sample config&quot; &gt; \`\`\`yaml global: clúster: &quot;YOUR\_CLUSTER\_NAME&quot; licenseKey: &quot;YOUR\_LICENSE\_KEY&quot; userKey: &quot;YOUR\_USER\_KEY&quot; # Valores relacionados con la versión del gráfico Helm del Agente Control. # \`https:\\/\\/github.com\\/newrelic\\/helm-charts\\/blob\\/master\\/charts\\/agent-control\\/values.yaml\` agente-control-despliegue: config: flee\_control: # Opcional: Especifique un flee\_id (guid de entidad) para conectarse automáticamente a una flota existente. fleec\_id: &quot;&quot; auth: # ID de la organización de New Relic a la que se conectará el agente. organizationId: &quot;YOUR\_ORGANIZATION\_ID&quot; # Lista de agentes gestionados que se implementarán. La clave representa el nombre del agente y el valor contiene la configuración. subAgentes: infraestructura: tipo: newrelic/com.newrelic.infraestructura:0.1.0 contenido: # Ref: \`https:\\/\\/github.com\\/newrelic\\/helm-charts\\/tree\\/master\\/charts\\/nri-bundle\` # Recomendado: verificar y definir una versión explícita del gráfico (la última estable) chart\_version: &quot;\*&quot; # chart\_values: # newrelic-infraestructura: # enableProcessMetrics: true logs: type: newrelic/io.fluentbit:0.1.0 contenido: # Ref: \`https:\\/\\/github.com\\/newrelic\\/helm-charts\\/tree\\/master\\/charts\\/newrelic-logging\` # Recomendado: verificar y definir una versión explícita del gráfico (la última estable) chart\_version: &quot;\*&quot; chart\_values: newrelic-logging: sendMetrics: true agente-operator: type: com.newrelic.agente:0.1.0 contenido: chart\_version: &quot;\*&quot; \`\`\` &lt;/Collapser&gt; &lt;/CollapserGroup&gt; Recuerde descomentar la configuración necesaria y reemplazar el marcador de posición como \`YOUR\_CLUSTER\_NAME\` y \`YOUR\_LICENSE\_KEY\` con sus valores reales. &lt;Callout variant=&quot;important&quot;&gt; Especifique una versión de gráfico explícita para garantizar la coherencia y la confiabilidad en toda la implementación. &lt;/Callout&gt; \*/ /\* ## Gestionar e implementar la configuración a través de Fleet Control Para agregar una nueva configuración Fluent Bit o editar una existente, use \[Fleet Control]\(/docs/New Relic-control/fleet-control/overview). Las tareas de alto nivel para gestionar y desplegar una configuración son: ### Crear una configuración Para crear una configuración de Fluent Bit , siga estos pasos: 1. En New Relic, ve a Todas las capacidades, busca New Relic Control y fíjalo a un costado. 2. En New Relic Control, abra la configuración. 3. Haga clic en \*\*Crear configuración\*\*. 4. Para crear una configuración desde cero, haga clic en \*\*Nuevo\*\* en el menú desplegable. Si tiene una configuración de Fluent Bit existente y desea aprovecharla, clónela haciendo clic en \*\*Clonar\*\*. 5. En el cuadro de diálogo Crear configuración, cerciorar de que \*\*Kubernetes\*\* esté seleccionado como entorno, seleccione \*\*Fluent Bit\*\* como tipo de agente e ingrese un nombre para la configuración. Luego, haga clic en \*\*Continuar\*\*. 6. En la columna de configuración, copie la plantilla de configuración y luego personalícela según sus requisitos. Para obtener más detalles, consulte \[parámetros admitidos]\(https:\\/\\/github.com\\/newrelic\\/helm-charts\\/tree\\/master\\/charts\\/newrelic-logging#supported-configuration-parámetro). 7. Almacene los cambios. Su configuración se agregará a la lista de configuraciones en la página de configuración. 8. Para editar su configuración, seleccione los tres puntos (…) junto a ella, haga clic en \*\*Editar configuración y realice los cambios. Luego, haga clic en \*\*Almacenar\*\*. ### Crear un despliegue 1. En New Relic Control, abre \*\*Flotas\*\*. 2. Seleccione la flota para la que desea crear una configuración de Fluent Bit. 3. Haga clic en \*\*Crear un despliegue. 4. En la página Nueva implementación, ingrese un nombre y una descripción de la implementación y luego haga clic en \*\*Agregar una configuración. 5. Seleccione \*\*Fluent Bit\*\* como tipo de agente, seleccione la configuración que desea implementar y luego haga clic en \*\*Siguiente\*\*. 6. Seleccione la versión de configuración. &lt;Callout variant=&quot;important&quot;&gt;Una configuración puede tener múltiples versiones. Elige la versión que deseas implementar. Para una configuración recién creada, solo tendrás una versión. 7. Haga clic en \*\*Agregar a implementación.&lt;/Callout&gt; &lt;Callout variant=&quot;important&quot;&gt; Cerciorar de que la flota tenga al menos una entidad gestionada. O bien, agrega uno. 8. Haga clic en \*\*Iniciar implementación.&lt;/Callout&gt; ### Ver flota En Flotas, seleccione la flota específica con la que desea trabajar. Esto abre la página de detalles de la flota. La pestaña Resumen muestra las entidades que forman parte de tu flota. Para ver los detalles del agente o despliegue, emplee la pestaña agente o despliegue. \*/

### Monitorea la salud y el rendimiento de tu recolector de logs

El monitoreo efectivo del rendimiento del agente Fluent Bit es crucial para la administración de logs y la optimización dentro de sus entornos Kubernetes . Al rastrear claves métricas, puede identificar problemas potenciales y facilitar la resolución de problemas.

#### Clave de rendimiento métrica a seguir

* **Tasa de rendimiento del log:** mide la eficiencia del flujo de log y resalta cualquier interrupción. Incluye una evaluación general del rendimiento, que se desglosa por complementos de entrada y salida para mostrar el flujo de registros y bytes procesados.
* **Utilización del búfer de memoria:** ayuda a identificar las restricciones de recursos que afectan el procesamiento del log. Incluye el uso del buffer, la instancia de desbordamientos, la longitud de la cola y la utilización general del proceso y de la memoria del contenedor.
* **Contenedor de eventos y bucles de retroceso:** alertas sobre condiciones anormales o fallas en el pod de log, incluidos errores, registros descartados y reintentos. Esta información valiosa ayuda a identificar y abordar problemas que puedan interrumpir el procesamiento del log.

Puede monitorear la salud y el rendimiento de su Fluent Bit agente en el Fluent Bit de entidad dashboard. Aquí te explicamos cómo puedes acceder:

#### Vía integración y agente

1. Abra la pestaña **Installed** . Verá la lista de agentes e integraciones actualmente instalados.
2. Emplee el campo de entidad de búsqueda o el filtro Tipo para limitar la lista al agente Fluent Bit .
3. Seleccione el agente que desea verificar.

#### Vía toda la entidad

1. Encuentre el agente que desea monitorear en el grupo Fluent Bit - Kubernetes.
2. Seleccione el agente.

/\* ### Vía Flota 1. En New Relic Control, abre \*\*Flotas\*\*. 2. Identifique y seleccione la flota que cuenta con la instrumentación Fluent Bit. 3. En la pestaña de agente, seleccione el agente Fluent Bit . \*/ /\* ## Ejemplo de caso de uso: Eficiencia del flujo de logs Imagine que los logs en su clúster de Kubernetes no llegan a New Relic al ritmo habitual. El flujo de log típico puede rondar los 150.000 logs por minuto, pero las observaciones actuales sugieren una caída notable. A continuación, le mostramos cómo puede abordar esta situación, aprovechando las herramientas de monitoreo New Relic Control y Fluent Bit para diagnosticar y resolver el problema. ### Paso 1: Monitorear el rendimiento de los logs Comience por verificar la velocidad a la que se reenvían los logs. Las discrepancias pueden indicar interrupciones en el proceso de reenvío de logs. ### Paso 2: Analizar contenedor métrico y eventos Acceda a la descripción general Kubernetes para identificar cualquier evento anormal o resetear en el pod de logging. Los reinicios frecuentes o eventos de advertencia, como interrupciones en el ciclo de fallas, pueden interrumpir su flujo de log e indicar problemas subyacentes. ### Paso 3: Verificar el uso de memoria Examine el consumo de memoria de su agente Fluent Bit . Un uso alto o errático de la memoria puede indicar errores de configuración o limitaciones de recursos que deben abordar. ### Paso 4: Emplee Fleet Control para la resolución de problemas Emplee Fleet Control para revisar los cambios de configuración recientes. Identificar y corregir cualquier configuración errónea, como límites de memoria incorrectos, puede resolver el cuello de botella y mejorar el rendimiento del log. ### Paso 5: Volver a implementar y verificar Luego de realizar los ajustes de configuración necesarios en Fleet Control, inicie una nueva implementación para aplicar los cambios. Emplee la vista de entidad Fluent Bit para monitorear el tiempo real métrica y observar el impacto de la nueva configuración. Busque una recuperación en el rendimiento del log y estabilidad en el uso de la memoria, lo que indica que los problemas se resolvieron. \*/

### Actualice su agente Fluent Bit

Actualice su agente Fluent Bit periódicamente para aprovechar las últimas características, mejoras de rendimiento y parches de seguridad. Podrás aprender directamente desde la New Relic UI [cuando haya una versión más nueva disponible](/docs/release-notes/fluentbit-release-notes).

Antes de actualizar, cerciorar de tener una copia de seguridad de su configuración actual. Revise las notas de la versión o la documentación para comprender las nuevas características o cambios.

#### Pasos para comprobar si estás actualizado

1. En su cuenta New Relic , haga clic en **Integrations &amp; Agents** y luego abra la pestaña **Installed** .<br />Verá la lista de agentes e integraciones actualmente instalados.
2. Emplee el campo de entidad de búsqueda o el filtro Tipo para limitar la lista al agente Fluent Bit .
3. Identifique el agente que requiere una actualización.
4. Haga clic en **Update from vx.y.x to X.Y.Z**.
5. En el panel lateral que se desliza, haga clic [en Ver notas de la versión](/docs/release-notes/fluentbit-release-notes).
6. En la página de notas de la versión de Fluent Bit, tenga en cuenta la última versión del gráfico Helm.

/\* 8. De regreso en New Relic, cierra el panel lateral y haz clic en la flota que contiene al agente. Abre el resumen de la flota en New Relic Control. 9. Seleccione la configuración Fluent Bit. 10. Actualice la versión del gráfico en el archivo de configuración según la versión del gráfico que anotó anteriormente y almacene los cambios. 11. Desplegar la configuración. \*/ /\* &lt;Callout variant=&quot;important&quot;&gt; Si un agente aún no es parte de una flota, \[primero agregue el agente a una flota]\() y luego realice los pasos para actualizar. \*/&lt;/Callout&gt;

Luego de la actualización, verifique la recopilación y el procesamiento de logs para confirmar que el agente funciona como se espera. Emplee las herramientas de monitoreo de New Relic para verificar que todo esté funcionando.