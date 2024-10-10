---
title: Página de estadísticas de la máquina virtual (VM) de Node.js
tags:
  - Agents
  - Nodejs agent
  - Extend your instrumentation
metaDescription: A description of the metric timeslice data that the Node.js agent for New Relic collects for the Node.js VM.
freshnessValidatedDate: never
translationType: machine
---

En APM de New Relic, la página <DNT>**Node VMs**</DNT> proporciona datos de tiempo de ejecución útiles para resolver problemas de rendimiento y monitorear el estado de su aplicación.

## Que necesitas [#requirements]

Algunos de los gráficos en la página <DNT>**Node VMs**</DNT> requieren que instale el [módulo métrico nativo New Relic](https://www.npmjs.com/package/@newrelic/native-metrics) además del agente Node.js. Para obtener instrucciones de instalación, consulte [Mediciones de la máquina virtual (VM) de Node.js.](/docs/agents/nodejs-agent/supported-features/node-vm-measurements)

## Ver estadísticas de la máquina virtual (VM) de Node.js [#view-data]

<img
  title="Screenshot of the Node.js VMs page"
  alt="Screenshot of the Node.js VMs page"
  src="/images/apm_screenshot-crop_nodejs-vm-page-overview.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Node VMs**</DNT>: cuando varios servidores informan a la misma aplicación, la página desglosa los gráficos por servidor. Puede ver los datos de un servidor individual y obtener detalles adicionales seleccionando un servidor del filtro <DNT>**Servers**</DNT> en la parte superior de la página.
</figcaption>

Para correlacionar picos o tendencias al alza en cualquiera de estas mediciones con transacciones específicas:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Node VMs**
   </DNT>

   .

2. Seleccione el período de tiempo haciendo clic y arrastrando dentro de cualquiera de los gráficos.

3. Navegue a la [página de transacción](/docs/apm/applications-menu/monitoring/transactions-page) o cualquier otra página.

A medida que vaya a otras páginas, la selección [del selector de tiempo](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) seguirá siendo la misma.

## Analizar problemas de rendimiento [#node-vm-charts]

A continuación se muestra un resumen de los datos disponibles en los gráficos <DNT>**Node VMs**</DNT> individuales. Al utilizar todos los gráficos juntos, puede solucionar problemas de rendimiento. Por ejemplo:

* Cuando la aplicación comience a utilizar más objetos, el uso de memoria aumentará y la recolección de basura (GC) se ejecutará con más frecuencia. La utilización de la CPU aumentará debido al tiempo dedicado a GC.

* La ejecución de código sincrónico anormalmente larga puede aumentar la utilización de la CPU. Esto mostrará picos en el gráfico

  <DNT>
    **Event loop max CPU time per tick**
  </DNT>

  .

<CollapserGroup>
  <Collapser
    id="time-in-garbage-collection"
    title="Tiempo de pausa del GC"
  >
    La cantidad de tiempo dedicado a la recolección de basura. Para un solo servidor, el gráfico muestra el tiempo promedio, máximo y total por minuto. Para varios servidores, el gráfico muestra el tiempo total agrupado por servidor.

    Normalmente, los picos en el tiempo o la frecuencia de GC indican un problema potencial.
  </Collapser>

  <Collapser
    id="gc-pause-frequency"
    title="Frecuencia de pausa del GC"
  >
    El número de veces que se ejecutaron ejecuciones de GC por minuto. Para un único servidor, el gráfico se desglosa por tipo de GC. Para varios servidores, el gráfico muestra el número total de llamadas de GC (todos los tipos combinados) agrupadas por servidor.
  </Collapser>

  <Collapser
    id="gc-pause-time-by-type"
    title="Tiempo de pausa de GC por tipo"
  >
    Este gráfico muestra el tiempo total dedicado a la recolección de basura por minuto, desglosado por tipo de GC. Solo se muestra cuando se visualiza un único servidor. Es posible que vea los siguientes tipos según su versión de Node.js y la actividad de la aplicación:

    <table>
      <thead>
        <tr>
          <th style={{ width: "225px" }}>
            <DNT>
              **Value**
            </DNT>
          </th>

          <th>
            <DNT>
              **Description**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `Scavenge`
          </td>

          <td>
            El método de recolección de basura más común. Normalmente, Node.js activará uno de estos cada vez que la máquina virtual (VM) esté inactiva.
          </td>
        </tr>

        <tr>
          <td>
            `MarkSweepCompact`
          </td>

          <td>
            El tipo más pesado de recolección de basura V8 puede ser suficiente. Si ve que suceden muchos de estos, necesitará mantener menos objetos en su proceso o aumentar el límite de almacenamiento dinámico de V8.
          </td>
        </tr>

        <tr>
          <td>
            `IncrementalMarking`
          </td>

          <td>
            Una recolección de basura por fases que intercala la recolección con la lógica de la aplicación para reducir la cantidad de tiempo que la aplicación está en pausa. Sólo en Node.js v6 o superior.
          </td>
        </tr>

        <tr>
          <td>
            `ProcessWeakCallbacks`
          </td>

          <td>
            Después de que se produzca una recolección de basura, V8 llamará a cualquier devolución de llamada de referencia débil registrada para los objetos que hayan sido liberados. Esta medida es desde el inicio de la primera devolución de llamada débil hasta el final de la última para una recolección de basura determinada. Sólo en Node.js v6 o superior.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="memory"
    title="Uso de memoria"
  >
    Este gráfico muestra la cantidad de memoria consumida por el proceso Node.js. Para varios servidores, el gráfico muestra la memoria total agrupada por servidor. Para un único servidor, el gráfico está segmentado por los siguientes tipos de memoria:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            <DNT>
              **Value**
            </DNT>
          </th>

          <th>
            <DNT>
              **Description**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            No montón
          </td>

          <td>
            La memoria asignada a datos fuera del montón de V8 (por ejemplo, buffers, sockets).
          </td>
        </tr>

        <tr>
          <td>
            Montón V8 (usado)
          </td>

          <td>
            La cantidad de memoria que utiliza V8 (por ejemplo, objetos JavaScript).
          </td>
        </tr>

        <tr>
          <td>
            Montón V8 (gratis)
          </td>

          <td>
            La cantidad de memoria reservada por V8 para la agrupación de memoria. Esta memoria no se utiliza activamente, pero se reserva para que V8 asigne libremente más según sea necesario.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="cpu"
    title="Utilización de la CPU"
  >
    Este gráfico muestra la utilización de CPU del proceso Node.js.

    Para varios servidores, el gráfico muestra la utilización total de la CPU agrupada por servidor. Para un solo servidor, el gráfico está segmentado de la siguiente manera:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            <DNT>
              **Value**
            </DNT>
          </th>

          <th>
            <DNT>
              **Description**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Usuario
          </td>

          <td>
            El tiempo dedicado a ejecutar el código de usuario, dividido por el tiempo de reloj.
          </td>
        </tr>

        <tr>
          <td>
            Sistema
          </td>

          <td>
            El tiempo transcurrido en el kernel del sistema en nombre del proceso Node.js, dividido por el tiempo de reloj.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="event-loop"
    title="Bucle de eventos: tics por minuto"
  >
    Este gráfico muestra el número de tics del bucle de eventos por minuto. Un tick es un solo giro del bucle de eventos, en el que se ejecutan funciones que están listas para ser ejecutadas.

    Como parte de cada giro del bucle de eventos, Node.js espera a que se complete la E/S pendiente. Una vez que se recibe cualquier evento de E/S, el bucle de eventos ejecuta la devolución de llamada asociada con él. Por lo tanto, el número de ticks por minuto corresponde a la frecuencia con la que ocurren los eventos de E/S.
  </Collapser>

  <Collapser
    id="event-loop-cpu"
    title="Bucle de eventos: tiempo máximo de CPU por tick"
  >
    Este gráfico muestra el tiempo máximo empleado en un solo tick por minuto. Esto es útil para detectar un tic de bucle de evento anormalmente largo, lo que indica una ejecución de código sincrónica prolongada.
  </Collapser>
</CollapserGroup>

## Ver clúster de múltiples procesos [#clustering]

Cuando varios procesos de Node.js en el mismo servidor informan a la misma aplicación New Relic, estos gráficos mostrarán datos agregados. Esto se debe a que cada proceso de trabajo en un clúster tiene su propio tiempo de ejecución de Node.js independiente y recopila datos separados.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Clusters**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Suma de todos los trabajadores
      </td>

      <td>
        Los siguientes gráficos muestran una suma de todos los trabajadores:

        * Tiempo de pausa del GC: tiempo total por minuto
        * Frecuencia de pausa del GC
        * Tiempo de pausa de GC por tipo
        * Utilización de la CPU
        * Ticks de bucle de evento por minuto
      </td>
    </tr>

    <tr>
      <td>
        Promedio de todos los trabajadores
      </td>

      <td>
        Los siguientes gráficos muestran un promedio de todos los trabajadores:

        * Uso de memoria
        * Tiempo de pausa del GC: promedio
      </td>
    </tr>

    <tr>
      <td>
        Máximo en todos los trabajadores
      </td>

      <td>
        Los siguientes gráficos muestran el máximo para todos los trabajadores:

        * Tiempo de pausa del GC: máx.
        * Bucle de eventos: tiempo máximo de CPU por tick
      </td>
    </tr>
  </tbody>
</table>
