---
title: Crear alerta
metaDescription: create alerts in New Relic
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  Este procedimiento es parte del curso que le muestra cómo crear un inicio rápido. Si aún no lo hiciste, consulta la [introducción del curso](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart).

  Cada procedimiento de este curso se basa en el anterior, así que cerciorar de [crear un dashboard](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/create-a-dashboard) antes de continuar con este.
</Callout>

Con las alertas New Relic , puede monitor sus servicios y recibir notificaciones sobre los problemas que le interesan, para que pueda reaccionar rápidamente para solucionarlos. Hay dos tipos de alertas que puedes tener en New Relic:

* Estático
* Línea de base

En este procedimiento, aprenderá cómo crear estas alertas.

<Callout variant="tip">
  Se supone que ya está familiarizado con los conceptos básicos de las alertas. Si recién estás comenzando, visita la [documentación de alerta](/docs/alerts-applied-intelligence/overview) para familiarizarte con los conceptos básicos antes de continuar.
</Callout>

## Crear una política de alertas [#create-alert-policy]

Antes de establecer la condición de alerta, debe crear una política.

Desde **alertas** en la navegación de la izquierda, vaya a la sección **Alert conditions**. Luego, haga clic en **New alert policy**.

Asigne un nombre a su política `FlashDB alert policy`.

Emplee los valores predeterminados para el resto de los campos, desplazar hacia abajo en la página y haga clic en **Create policy without notifications**.

El siguiente paso es agregar condiciones a la política de alertas.

## Crear condición de alerta [#create-alert-conditions]

Vas a agregar la siguiente condición de alerta:

* respuestas de lectura lenta
* baja relación de rendimiento de caché

### Crear una condición de alerta de tiempo de respuesta alto [#crete-response-time]

En **FlashDB alert policy**, haga clic en **Create a condition**.

La siguiente página le pide que elija una categoría para su condición. Elija NRQL, que le permite crear una condición empleando una consulta NRQL. Luego, haga clic en **Next, define thresholds**.

Quiere que New Relic le notifique si la operación de lectura está tardando más de lo esperado. Asigne a su condición de alerta el nombre "respuestas de lectura lenta" e ingrese la siguiente consulta NRQL para su condición.

```sql
SELECT average(fdb_read_responses) FROM Metric
```

Aquí, seleccionó la respuesta de lectura promedio para FlashDB.

Desplazar hacia abajo en la misma página para definir el umbral. Seleccione **Static** como tipo de umbral. Es el tipo de umbral más simple y crea una condición basada en el valor numérico devuelto por la consulta.

Establezca el valor del umbral crítico en 0,9. Aquí, definió una condición que abrirá una infracción siempre que el tiempo de respuesta de lectura sea superior a 0,9 durante al menos 5 minutos.

A continuación, haga clic en **Add warning threshold**.

Ingrese el valor de umbral en 0,8 para recibir una advertencia cuando la respuesta de lectura sea superior a 0,8 durante al menos 5 minutos.

Emplee los valores predeterminados para el resto de los campos, desplazar hacia abajo en la página y haga clic en **Save condition**.

Ahora, puede ver su nueva condición en su política de alertas de FlashDB.

### Crear una condición de relación de acierto de caché [#create-cache-hit]

Afirmaste que tu base de datos es la más rápida en el espacio, por lo que también quieres que New Relic te notifique si tu proporción de caché es demasiado baja. Agregue otra condición bajo la misma política haciendo clic en **Add a condition**.

La siguiente página le pide que elija la categoría para su condición. Elija NRQL y haga clic en **Next, define threshold**.

Ingrese el nombre "Low acierto de caché ratio" para su condición y emplee la siguiente consulta NRQL.

```sql
SELECT sum(fdb_cache_hits)/sum(fdb_read_responses) FROM Metric
```

En **Threshold Type** , elija **Anomaly** y cambie la **Threshold direction** a **Lower only**. A continuación, establezca el umbral crítico y de advertencia en 3 y 2 desviación estándar respectivamente.

Almacene la condición para agregarla a su política de alertas, que ahora se parece a la siguiente.

## Crear un flujo de trabajo de notificación [#create-notification]

Para recibir una notificación por cualquier infracción abierta, también necesita crear una notificación de flujo de trabajo.

Primero, vaya a la pestaña de **Notification settings** y haga clic en **Create workflow**.

Esto lo llevará a la página **Create a new workflow to get notified**. En la lista de opciones de canales, haga clic en **Email**.

Ingrese el email en el que desea recibir su notificación, actualice el **Email subject** y haga clic en **Save**.

Esto lo llevará de regreso a la página **Create a new workflow to get notified** donde verá que ahora se agregó el canal de notificación. A continuación, haga clic en **Activate workflow**.

Ahora verás el flujo de trabajo en **Notification settings**.

## Resumen [#summary]

Durante este procedimiento, creó la política de alertas de FlashDB y le agregó respuestas de lectura lenta y condiciones de baja proporción de caché. También creó un flujo de trabajo para recibir notificaciones sobre cualquier infracción abierta.

<Callout variant="tip">
  Este procedimiento es parte del curso que le muestra cómo crear un inicio rápido. Continúe con el siguiente procedimiento: [crear un inicio rápido](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/build-a-quickstart).
</Callout>
