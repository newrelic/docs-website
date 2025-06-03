---
title: Recolección de basura
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'To track garbage collection time with New Relic''s Ruby agent, use GC::Profiler.enable (CRuby 1.9.2 or higher) or GC.enable_stats (REE).'
freshnessValidatedDate: never
translationType: machine
---

La recolección de basura (GC) encuentra objetos de datos no utilizados y recupera ese espacio de memoria para que lo utilice otro proceso. El agente New Relic Ruby puede recopilar información sobre cuánto tiempo se dedica a la recolección de basura para aplicaciones que se ejecutan en CRuby 1.9.2 o superior o Ruby edición Enterprise, pero debes habilitar explícitamente esta característica en tu aplicación.

<Callout variant="important">
  Evite utilizar la recolección de basura en producción durante largos períodos de tiempo, ya que aumenta los gastos generales.
</Callout>

## Habilitar la instrumentación de recolección de basura. [#gc_setup]

Para activar la característica, agregue la llamada apropiada en la inicialización de su aplicación.

* CRuby 1.9.2 o superior: `GC::Profiler.enable`
* Ruby edición Empresa: `GC.enable_stats`

Para la aplicación Rails, puede agregar esta llamada a un inicializador en `config/initializers` o agregarla directamente a su archivo `config/application.rb` .

## Ver estadísticas de GC en toda la aplicación [#gc_view]

Para ver estadísticas generales de recolección de basura:

1. [Log en New Relic](https://one.newrelic.com), seleccione una aplicación Ruby y vaya a

   <DNT>
     **Summary**
   </DNT>

   .

2. En la página APM

   <DNT>
     **Summary**
   </DNT>

   , busque

   <DNT>
     **GC Execution**
   </DNT>

   estadísticas en el gráfico

   <DNT>
     **Web transactions time**
   </DNT>

   .

<img
  title="garbage_collection_overview"
  alt="garbage_collection_overview"
  src="/images/apm_screenshot-full_garbage-collection-transaction.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Ruby app) > Summary**</DNT>: En el gráfico de tiempo de transacción web, las estadísticas de recolección de basura están etiquetadas como <DNT>**GC Execution**</DNT>.
</figcaption>

## Ver GC métrica detallada [#detailed]

Para ver las métricas de recolección de basura por transacción, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Ruby app) > Transactions > (select a transaction)**</DNT>. Luego puede ver la cantidad de tiempo invertido en GC y el número promedio de veces que se llama a GC para cada transacción. Oculte otras etiquetas para obtener una vista detallada de la recolección de basura.

La información detallada incluye:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Garbage collection details**
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
        Tendencia del tiempo de recolección de basura.
      </td>

      <td>
        La recolección de basura suele tardar un poco de tiempo y, por lo tanto, es posible que la línea de tendencia no sea visible en los gráficos. Para ver la tendencia en el tiempo de recolección de basura, navegue hasta el [gráfico general](#gc_view) o hasta [la transacción métrica detallada](#detailed). Luego, oculte todas las etiquetas del gráfico excepto <DNT>**GC Execution**</DNT> seleccionando cada etiqueta.
      </td>
    </tr>

    <tr>
      <td>
        Número medio de llamadas
      </td>

      <td>
        Para ver el número promedio de llamadas de recolección de basura para cada acción del controlador: desde su [página](/docs/apm/applications-menu/monitoring/applications-overview-dashboard) [APM <DNT>**Summary**</DNT>](/docs/apm/applications-menu/monitoring/applications-overview-dashboard), seleccione <DNT>**Transaction**</DNT>. Luego seleccione una acción del controlador y vea el <DNT>**App Server Breakdown**</DNT>.
      </td>
    </tr>
  </tbody>
</table>
