---
title: Crear un dashboard
metaDescription: create a dashboard to observe your data in New Relic
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  Este procedimiento es parte del curso que le muestra cómo crear un inicio rápido. Si aún no lo hiciste, consulta la [introducción del curso](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/contribute-quickstart).

  Cada procedimiento de este curso se basa en el anterior, así que cerciorar de [enviar la traza de su producto](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/send-traces) antes de continuar con este.
</Callout>

Con el panel New Relic , usted observa e interpreta los datos que recopila de su aplicación. Reúnes los datos que deseas ver en gráficos para personalizar la forma en que los ves.

En este procedimiento, crea un dashboard en New Relic.

## Crear un dashboard [#create-dashboard]

<Steps>
  <Step>
    Navegue hasta [New Relic](https://one.newrelic.com/) e inicie sesión con su cuenta. Aquí verá diferentes pestañas, como **Browser**, **Dashboards** y **Alerts** en la navegación de la izquierda.
  </Step>

  <Step>
    Vaya al **Dashboards** y haga clic en **Create a dashboard** en la esquina superior derecha y seleccione **Create a new dashboard**.

    <img
      title="Dashboards index"
      alt="Dashboards index"
      src="/images/dashboards_screenshot-full_dashboard-index.webp"
    />
  </Step>

  <Step>
    Asigne a su dashboard el nombre `FlashDB` y haga clic en **Create**.
  </Step>
</Steps>

## Agregue gráficos a su dashboard [#add-charts]

Una vez que el dashboard esté en su lugar, puede comenzar a crear gráficos. Vas a agregar los siguientes gráficos:

* Métodos de base de datos
* Tiempo de respuesta promedio
* Errores
* Tamaño de la base de datos
* Acierto de caché
* Llaves

### Métodos de base de datos [#database-methods]

Pase el cursor sobre el dashboard y haga clic en **Add a new chart**.

Desde esta pantalla, puede agregar gráficos usando nuestro generador de consultas o puede elegir agregar texto, imágenes o enlaces usando Markdown. Haga clic en **Add a chart**.

Puede abrir la opción del generador de consultas. Cambie al editor NRQL y edite la consulta de la siguiente manera:

```sql
SELECT count(*) FROM fdb_method FACET method 
```

Haga clic en **Run** para ver los resultados anteriores.

Aquí verá el recuento de cada consulta FlashDB, agrupada por método. Puede optar por presentar sus resultados en diferentes formatos, como tabla, cartelera o gráfico circular.

Cambie el tipo de gráfico a circular, nombre su gráfico "Métodos de base de datos" y haga clic en almacenar.

El gráfico ahora está visible en su dashboard.

Puede agregar más gráficos a su dashboard siguiendo el mismo patrón. Para hacerlo, haga clic en **+** en la esquina superior derecha.

Esto lo llevará a la misma página **Add to your dashboard** . Agregue otro gráfico a su dashboard.

### Tiempo de respuesta promedio [#average-response]

Ejecute la siguiente consulta para observar el tiempo de respuesta promedio de la consulta FlashDB.

```sql
SELECT average(fdb_create_responses), average(fdb_read_responses), average(fdb_update_responses), average(fdb_delete_responses) FROM Metric TIMESERIES
```

Aquí se observa el tiempo de respuesta promedio para diferentes consultas FlashDB. Haga clic en **Save** para agregar este gráfico a su dashboard. Siga el mismo procedimiento para agregar el resto de los gráficos.

### Errores [#errors]

Para el gráfico de errores, emplee la siguiente consulta:

```sql
SELECT sum(fdb_create_errors), sum(fdb_read_errors), sum(fdb_update_errors), sum(fdb_delete_errors) FROM Metric TIMESERIES
```

### Tamaño de la base de datos [#database-size]

Emplee la siguiente consulta para obtener la tabla de tamaños de la base de datos.

```sql
SELECT latest(fdb_size) FROM Metric
```

El gráfico muestra el tamaño de la base de datos.

### Acierto de caché [#cache-hits]

Para el gráfico de acierto de caché, emplee la siguiente consulta:

```sql
SELECT sum(fdb_cache_hits) FROM Metric TIMESERIES
```

Aquí, observas el número total de acierto de caché usando un gráfico de líneas.

### Llaves [#keys]

Emplee la siguiente consulta para contar la cantidad de claves en su base de datos.

```sql
SELECT count(fdb_keys) FROM Metric TIMESERIES
```

Aquí, observa el recuento de claves de FlashDB.

## Resumen [#summary]

En este procedimiento, creó un dashboard y le agregó varios gráficos para observar sus servicios en New Relic.

<Callout variant="tip">
  Este procedimiento es parte del curso que le muestra cómo crear un inicio rápido. Continúe con el siguiente procedimiento: [create alerts](/docs/new-relic-solutions/build-nr-ui/contribute-nr-io/create-alerts).
</Callout>
