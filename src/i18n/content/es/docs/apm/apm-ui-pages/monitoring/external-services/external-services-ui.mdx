---
title: Cómo utilizar la UIde servicios externos
metaDescription: Here are tips about how to use the external services UI
freshnessValidatedDate: never
translationType: machine
---

La UI para servicios externos es un excelente lugar para analizar un único servicio junto con sus servicios ascendentes y descendentes. La UI usuario comienza con un mapa del servicio seleccionado, junto con gráficos de rendimiento que muestran los cinco resultados principales en cuanto a tiempo de respuesta, rendimiento y tasa de errores. Si lo prefieres, también puedes ver los mismos detalles del mapa representados en [formato de tabla](#table-view).

## Cómo encontrar la característica de servicios externos [#where-externals]

La característica de servicios externos está disponible en el panel de navegación izquierdo una vez que selecciona un servicio de monitor APM. Puedes abrirlo yendo a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & Services**</DNT>. Seleccione una aplicación y luego, en la sección <DNT>**Monitor**</DNT> , haga clic en <DNT>**External services**</DNT>.

## El mapa de servicios exteriores [#use-the-map]

El mapa de apertura muestra el servicio seleccionado como un vértice (forma hexagonal) con rectángulos alrededor de los servicios ascendentes o descendentes. La vista inicial es el servicio descendente, por lo que la pestaña <DNT>**Downstream entities**</DNT> está seleccionada de forma predeterminada. Cuando está en esa pestaña, los gráficos de rendimiento (<DNT>**Response time**</DNT>, <DNT>**Throughput**</DNT> y <DNT>**Error rate**</DNT>) se aplican a los servicios posteriores. Puede hacer clic en <DNT>**Upstream entities**</DNT> para cambiar a esos gráficos de rendimiento.

<img
  title="Screenshot showing the opening map for external services"
  alt="Screenshot showing the opening map for external services"
  src="/images/apm_screenshot-crop_external-service-intro.webp"
/>

### Ver detalles de la transacción [#drill-down]

En la página inicial de servicios externos, cada uno de los rectángulos contiene vértices que representan los servicios ascendentes o descendentes. Los vértices están conectados a través de servicios mediante aristas (líneas). Cuando profundiza en un servicio en particular, los vértices de esas páginas de desglose se convierten en el extremo del servicio para que pueda ver los detalles de la transacción.

El grosor de las líneas representa el rendimiento del servicio y la oscuridad de la línea representa el tiempo consumido (rendimiento multiplicado por la duración).

### Leyenda del mapa [#map-legend]

En la leyenda del mapa tienes la opción de seleccionar dos tipos de servicios:

* <DNT>
    **Services**
  </DNT>

  : Estos son servicios que usted posee y que ha instrumentado.

* <DNT>
    **Uninstrumented externals**
  </DNT>

  : Estos son servicios no instrumentados que usted puede o no ser propietario.

## Cómo funcionan los gráficos de rendimiento [#understand-data]

La página inicial de servicios externos muestra tres gráficos de rendimiento. Para el agente APM, estos gráficos de rendimiento iniciales se completan con datos métricos, mientras que para OpenTelemetry, los valores iniciales se completan con datos de muestra.

A medida que explora debajo de la página inicial, ya sea OpenTelemetry o agente APM, cada página secundaria se completa con datos de muestra. Esto significa que si no ve los datos que espera en páginas que muestran datos de muestra, es posible que deba aumentar su [muestreo](/docs/apm/apm-ui-pages/monitoring/external-services/external-services-setup#adjust-sampling).

Los gráficos de rendimiento siempre reflejan los datos de la página que está viendo, pero el conjunto de gráficos de rendimiento cambia a medida que avanza debajo de la página inicial. Esto es lo que necesita para comprender estos gráficos:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Tabla de rendimiento
      </th>

      <th>
        Página
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Tiempo de respuesta
      </td>

      <td>
        Todas las páginas<br/> (APM y<br/> OpenTelemetry)
      </td>

      <td>
        La duración promedio de las llamadas entre servicios en la vista inicial o entre transacciones en las vistas desglosadas. La vista inicial de APM muestra el tiempo de respuesta como datos métricos, que se basan en todas las llamadas. La vista inicial de OpenTelemetry muestra el tiempo de respuesta como datos de traza, que se basan únicamente en llamadas de muestra.

        El tiempo de respuesta en todas las páginas detalladas muestra el tiempo de respuesta como datos de traza, que se basan únicamente en llamadas de muestra. Qué tan bien represente esto el rendimiento real del sistema depende de la frecuencia de muestreo efectiva.
      </td>
    </tr>

    <tr>
      <td>
        Rendimiento
      </td>

      <td>
        Página de apertura<br/> (sólo APM)
      </td>

      <td>
        El número total de llamadas entre dos servicios.
      </td>
    </tr>

    <tr>
      <td>
        Tasa de errores
      </td>

      <td>
        Página de apertura<br/> (sólo APM)
      </td>

      <td>
        El número de errores por minuto para llamadas entre dos servicios.
      </td>
    </tr>

    <tr>
      <td>
        Recuento de llamadas de traza
      </td>

      <td>
        Página de apertura<br/> (OpenTelemetry)

        Páginas detalladas<br/> (APM y<br/> OpenTelemetry)
      </td>

      <td>
        Representa el número de llamadas muestreadas que tenemos para un trayecto determinado entre dos servicios o transacción. Esto es inferior al rendimiento total, a menos que esté probando el 100 % de sus solicitudes.
      </td>
    </tr>

    <tr>
      <td>
        Recuento de errores de traza
      </td>

      <td>
        Página de apertura<br/> (OpenTelemetry)

        Páginas detalladas<br/> (APM y<br/> OpenTelemetry)
      </td>

      <td>
        El número de llamadas muestreadas entre dos servicios o transacciones que tuvieron errores.
      </td>
    </tr>
  </tbody>
</table>

## La mesa de servicios externos. [#table-view]

Como complemento de la vista de mapa, la vista de tabla enumera todos los servicios relacionados en formato de columnas. Cuando hace clic en <DNT>**List**</DNT> en la parte superior derecha de la página, ve los mismos servicios en la vista del mapa:

<img
  title="Screenshot showing the table version of the external services map"
  alt="Screenshot showing the table version of the external services map"
  src="/images/apm_screenshot-crop_external-services-table.webp"
/>

De manera similar a la vista del mapa, puede hacer clic en una entidad (servicios) específica para ver la transacción en las tablas desglosadas. A medida que profundizas y encuentras un extremo interesante, puedes hacer clic en <DNT>**Traces**</DNT> para cambiar a los detalles del rastreo distribuido.

A la derecha de cada columna de rendimiento hay una columna <DNT>**% change**</DNT> (cambio porcentual) correspondiente. El cálculo del cambio porcentual se basa en el período de tiempo que elija en el selector de tiempo principal y en el selector de tiempo de comparación (<DNT>**Compare to**</DNT>). El selector de tiempo de comparación indica cuánto antes de la ventana de tiempo principal debe comenzar la comparación.

Aquí hay un ejemplo con <DNT>**Response time**</DNT>: si la hora actual son las 11 a. m. y el selector de tiempo principal es <DNT>**last 30 minutes**</DNT> y el selector de tiempo <DNT>**Compare to**</DNT> es <DNT>**1 hour ago**</DNT>:

* La duración es la media de 10:30-11:00 am.

* El

  <DNT>
    **% change**
  </DNT>

  lo compara con el promedio de 9:30 a 10:00 a. m.

## Ejemplo de flujo de trabajo [#workflow-example]

A continuación se muestra un flujo de trabajo de mapas típico:

1. Busque la línea más gruesa y oscura en el mapa y sígala hasta su servicio ascendente o descendente.

2. Haga clic en el vértice aguas arriba o aguas abajo.

3. Vea un desglose de la transacción entre los dos servicios.

   <img
     title="Screenshot showing calls to various endpoints in downstream service"
     alt="Screenshot showing calls to various endpoints in downstream service"
     src="/images/apm_screenshot-crop_external-services-downstream.webp"
   >
     <figcaption>
       En este ejemplo, uno de los bordes (líneas) más gruesos va desde el servicio Order-Composer hasta el extremo del almacén en el servicio Order Status.
     </figcaption>
   </img>

4. Si decide que una transacción en particular está tomando más tiempo, haga clic en esa transacción para centrarse específicamente en su dependencia.

   <img
     title="Screenshot showing the transaction between the Order-Composer service and the warehouse endpoint in the Order-Status service"
     alt="Screenshot showing the transaction between the Order-Composer service and the warehouse endpoint in the Order-Status service"
     src="/images/apm_screenshot-crop_external-services-specific-transaction.webp"
   >
     <figcaption>
       En esta vista detallada, puede ver la transacción entre el servicio Order-Composer y el extremo del almacén en el servicio Order-Status.
     </figcaption>
   </img>

5. Desde cualquier punto de este flujo, consulte los gráficos de rendimiento de respaldo, que muestran los cambios a lo largo del tiempo.

6. Si llega a un punto en el desglose donde desea ver el rastreo distribuido, haga clic en

   <DNT>
     **List**
   </DNT>

   en la esquina superior derecha y luego haga clic en

   <DNT>
     **Traces**
   </DNT>

   en la tabla.

   <img
     title="Screenshot showing the trace link in the table view"
     alt="Screenshot showing the trace link in the table view"
     src="/images/apm_screenshot-crop_external-services-link-table.webp"
   />

## Cómo ver servicios externos clásicos [#classic-toggle]

La vista clásica de servicios externos todavía está disponible si está monitoreando servicios existentes que utilizan el seguimiento de múltiples aplicaciones. Dado que la vista predeterminada son los servicios externos ampliados, debe hacer clic en el botón <DNT>**Show new view**</DNT> para cambiar a la vista clásica.
