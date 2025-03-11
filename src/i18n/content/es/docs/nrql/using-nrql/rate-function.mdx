---
title: Utilice rate() para visualizar períodos de tiempo
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'For New Relic Query Language (NRQL): how to use the rate() function to visualize event occurrences over a set period of time.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

La función `rate()` agrega ocurrencias de un evento en depósitos según ventanas de tiempo. Puede utilizar esto para visualizar la frecuencia de ocurrencia de eventos. Por ejemplo, puede ver cuántos errores se produjeron por hora durante el último día. Puede aprovechar mucho esta función en NRQL si tiene grandes períodos de tiempo que desea monitor, pero necesita visualizar períodos de tiempo más pequeños dentro de esos períodos más grandes.

<Callout variant="tip">
  Para ver ejemplos sobre los límites de la función rate(), consulte nuestro [documento sobre límites de rate()](/docs/nrql/using-nrql/rate-limits-nrql-queries/).
</Callout>

## Utilice la función rate()

Cuando utilice `rate()`, puede utilizar la palabra clave `TIMESERIES` para generar un gráfico de líneas con tasas a lo largo del tiempo. Al omitir `TIMESERIES` se generará una vista de cartelera que muestra un valor de tarifa único promediado a lo largo del tiempo. Aquí hay una consulta que visualizará los errores de transacción por minuto durante los últimos 30 minutos en forma de gráfico de líneas:

```sql
SELECT rate(count(*), 1 minute) AS 'Errors' FROM TransactionError TIMESERIES SINCE 30 minutes ago
```

<img
  title="Rate function with timeseries"
  alt="A screenshot displaying an example of the rate() function"
  src="/images/example_rate_function.webp"
/>

Al ejecutar la misma consulta sin incluir `TIMESERIES` , se mostrará un valor único que representa el promedio de ocurrencias durante un período de tiempo.

<SideBySide>
  <Side>
    ```sql
    SELECT rate(count(*), 1 minute) AS 'Errors' FROM TransactionError SINCE 30 minutes ago
    ```
  </Side>

  <Side>
    <img
      title="Rate function without timeseries"
      alt="A screenshot displaying an example of the rate() function without TIMESERIES"
      src="/images/example_rate_function_no_timeseries.webp"
    />
  </Side>
</SideBySide>

## Utilice lastRate() para realizar un seguimiento de la tasa de cambio

La función `latestRate()` utiliza un atributo y un intervalo de tiempo específicos para devolver la tasa de cambio de un valor en los dos puntos de datos más recientes. Las unidades de la función estarán en `change in attribute` / `time window`. Puede utilizar esta función para ver las tendencias de vanguardia.

Aquí hay una consulta de ejemplo que devolverá el cambio en la duración por segundo de los dos últimos errores de transacción:

<SideBySide>
  <Side>
    ```sql
    SELECT latestrate(duration, 1 second) FROM TransactionError SINCE 30 minutes ago
    ```
  </Side>

  <Side>
    <img
      title="Latestrate function"
      alt="A screenshot displaying an example of the latestRate() function"
      src="/images/example_latestrate_function.webp"
    />
  </Side>
</SideBySide>

<Callout variant="important">
  Recuerde que la función `latestRate()` utiliza los dos puntos de datos más recientes con resultados a veces volátiles. Considere simplemente usar `rate()` si desea un promedio de grupos más grandes de ocurrencias de eventos.
</Callout>

## Ejemplos de rate()

<CollapserGroup>
  <Collapser
    id="error-by-hostname"
    title="Visualizar tasa de errores por host"
  >
    Para trazar líneas según su anfitrión, puede `FACET` mediante `host`. Este ejemplo muestra cómo puede utilizar la función `rate()` para identificar un host incorrecto:

    ```sql
    SELECT rate(count(*), 1 minute) FROM TransactionError TIMESERIES SINCE 30 minutes ago FACET host
    ```

    Al ejecutar la consulta se devuelve un gráfico con líneas separadas para cada host.
  </Collapser>

  <Collapser
    id="average-appname-errors"
    title="Errores promedio durante la última hora por nombre de aplicación"
  >
    Si desea ver los errores por aplicación, puede `FACET` mediante `appName`. Este ejemplo muestra cómo puede identificar los errores promedio por aplicación durante la última hora:

    ```sql
    SELECT rate(count(*), 1 minute) FROM TransactionError SINCE 30 minutes ago FACET appName
    ```

    Al ejecutar la consulta se devuelve una tabla de resultados por nombre de la aplicación.
  </Collapser>
</CollapserGroup>
