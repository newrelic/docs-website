---
title: Diagnosticar lentitud consulta de la base de datos
metaDescription: Improve query performance by troubleshooting your slow database with the New Relic database UI.
freshnessValidatedDate: never
translationType: machine
---

## Objetivos [#objectives]

Al final de este tutorial, podrá:

* Identificar consulta lenta de la base de datos
* Entender cómo resolver la consulta lenta de la base de datos
* Comprender cómo utilizar la UIde la base de datos

## Por qué optimizar en la consulta de la base de datos

Cuando su aplicación se interrumpe, sus clientes se quedan esperando mientras usted soluciona un problema que es tan complejo como su sistema. Se informan sus datos y tiene una idea aproximada de cuál podría ser el problema, pero ¿por dónde empezar?

Si su sitio depende de una base de datos (y probablemente así sea), querrá verificar que el tiempo de respuesta de la consulta sea el esperado. A menudo, el rendimiento de su sitio depende de qué tan bien su base de datos maneja las consultas enviadas por sus clientes. Con New Relic, puede utilizar UI usuario de nuestra base de datos para realizar un seguimiento del rendimiento de la base de datos a lo largo del tiempo, lo que le permitirá identificar cuándo ocurrió un problema para que pueda determinar qué tipo de solución necesita.

Este tutorial explica cómo solucionar problemas de consulta lenta en las operaciones de su base de datos.

## Identifica el problema con los datos de tu aplicación [#diagnose]

Nuestra UI de base de datos muestra gráficos creados con NRQL consulta. Estos gráficos utilizan datos de la métrica `apm.service.datastore.operation.duration` informada por el agente que instaló. Estos gráficos muestran el tiempo de respuesta de los procesos principales de su base de datos según las operaciones principales, su tiempo de consulta y el rendimiento de su aplicación.

Cuando esté analizando un problema, le recomendamos utilizar cada uno de estos diferentes puntos de entrada, ya que cuentan diferentes partes de la misma historia. Veamos cómo podría utilizar la UI para comenzar a diagnosticar problemas de rendimiento.

<img
  title="Default database homepage"
  alt="Default database homepage"
  src="/images/apm_screenshot-full_default-database-UI.webp"
/>

<figcaption>
  Para comenzar la resolución de problemas con su consulta más lenta, comenzará en UI de la base de datos predeterminada de APM.
</figcaption>

<Steps>
  <Step>
    Navegue a la UI de la base de datos: vaya a <DNT>**[one.newrelic.com](https://one.newrelic.com/nr1-core?filters=(domain%3D'APM'ANDtype%3D'APPLICATION')) > (select an app) > monitor > databases**</DNT>
  </Step>

  <Step>
    ### Tiempo consumido por las operaciones de la base de datos.

    El gráfico <DNT>**Most time consuming**</DNT> muestra el tiempo total de procesamiento de la consulta por operación de base de datos.

    <SideBySide>
      <Side>
        Este gráfico muestra cinco operaciones de base de datos y luego realiza un seguimiento de su tiempo para ejecutar una consulta. Este gráfico muestra en la parte superior la consulta más ocupada y a la que llama con más frecuencia. Si una consulta que se llama con poca frecuencia presenta sus consultas más ocupadas, puede indicar un problema con una consulta que necesita un mayor alcance para comprender por qué consume tanto tiempo de procesamiento.
      </Side>

      <Side>
        <img
          title="Top 5 Database operations over time"
          alt=""
          src="/images/apm_screenshot-crop_A-timeslice-chart-of-top-5-database-operations.webp"
        />

        <figcaption>
          La UI de la base de datos muestra gráficos de las operaciones de su base de datos a lo largo del tiempo.
        </figcaption>
      </Side>
    </SideBySide>
  </Step>

  <Step>
    ## Top base de datos por tiempo de consulta

    El gráfico <DNT>**Top databases by query time**</DNT> muestra el rendimiento de su base de datos en función del tiempo que lleva ejecutar una consulta.

    <SideBySide>
      <Side>
        Esta consulta NRQL crea un gráfico que muestra la base de datos superior y luego promedia el tiempo que tardan las consultas. Por ejemplo, si, en promedio, su base de datos Redis EVAL tarda aproximadamente medio segundo en procesar una consulta, pero el tiempo de consulta aumentó en dos segundos, entonces sabrá que debe profundizar en las consultas individuales.
      </Side>

      <Side>
        <img
          title="Top databases by query time"
          alt=""
          src="/images/apm_screenshot-crop_Top-databases-by-query-time.webp"
        />

        <figcaption>
          La UI de base de datos le muestra gráficos de sus principales bases de datos por tiempo de consulta.
        </figcaption>
      </Side>
    </SideBySide>
  </Step>

  <Step>
    ## Principal base de datos por rendimiento

    El gráfico <DNT>**Top databases by throughput**</DNT> muestra el rendimiento de su base de datos a lo largo del tiempo.

    <SideBySide>
      <Side>
        Los gráficos de rendimiento rastrean la cantidad de procesos que ejecuta una operación en un rango de tiempo determinado. Si su rendimiento se estanca, sabrá que debe profundizar en una operación en particular.
      </Side>

      <Side>
        <img
          title="Top 5 Database operations over time"
          alt=""
          src="/images/apm_screenshot-crop_Database-throughput.webp"
        />

        <figcaption>
          La UI de base de datos le muestra gráficos de sus principales bases de datos por rendimiento.
        </figcaption>
      </Side>
    </SideBySide>
  </Step>
</Steps>

## Profundizando en su consulta de la base de datos [#fix]

Profundizar significa seguir los datos. Identificar el área aproximada donde existe un problema es sólo una parte de encontrar una solución.

Después de observar el rendimiento promedio de su base de datos, el siguiente paso es seguir los datos con el tiempo de consulta, la transacción y el rastreo de la pila.

<DocTiles numbered>
  <DocTile
    title="Prepare to triage your application"
    path="/docs/journey-app-slow/root-causes"
  />

  <DocTile
    title="Identify problematic transactions"
    path="/docs/journey-app-slow/problematic-transactions"
  />
</DocTiles>

<DocTiles>
  <DocTile
    title="Identify slow database queries"
    number="3"
    label={{text: 'Current doc', color: '#FCD672'}}
    path="/docs/journey-app-slow/slow-database-queries"
  />

  <DocTile
    title="Identify slow external services"
    number="4"
    path="/docs/journey-app-slow/external-services"
  />

  <DocTile
    title="Create performance benchmarks"
    number="5"
    path="/docs/journey-app-slow/create-benchmarks/"
  />
</DocTiles>
