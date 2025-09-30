---
title: Página de errores legacy
tags:
  - APM
  - APM UI pages
  - Error analytics
metaDescription: Use APM's Errors page for detailed investigations of reported errors.
freshnessValidatedDate: never
translationType: machine
---

Con la UI <DNT>**Errors**</DNT>, puedes ver la línea de código que está causando una mala experiencia a tus usuarios y obtener suficientes datos para reproducir el problema y poder solucionarlo. Cuando lo haga, podrá confirmar que su solución está funcionando en producción.

Utilice la pestaña <DNT>**Errors**</DNT> para:

* Agrupe y filtre eventos para clasificar errores importantes.

* Reciba notificaciones de alerta sobre errores.

* Revise el rastreo del stack, [log](#logs-context) y otros detalles.

* Comparta la información del error con gráficos y panel.

* Informe nuevos errores utilizando instrumentación, evite que se informen ciertos errores y filtre errores ruidosos usando

  <DNT>
    [**expected errors**](#expected-errors)
  </DNT>

  .

## Perfiles de error: solucionar problemas de tendencias

Cuando los expertos en DevOps necesitan rastrear las causas de los errores en su aplicación, puede que no sea fácil identificar la causa. Los perfiles de error de APM comparan automáticamente un conjunto de eventos con otro.

Cada perfil de error proporciona detalles visuales sobre diferencias significativas en la frecuencia de diferentes valores para el evento. Para cada [atributo](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#attribute), el perfil de error incluye:

* Un gráfico circular que muestra cómo se distribuye el atributo del error para los valores que más se desvían
* Una tabla que compara la distribución del atributo de error con la de la transacción sin errores.

Esto le ayuda a eliminar más conjeturas al resolver los errores de su aplicación. Puede determinar más fácilmente si puede ignorar el error de forma segura o si debe intentar resolver el error con una nueva implementación, ediciones de código, comunicaciones con los clientes u otras acciones.

## Ejemplos de atributos de perfil de error [#error-profile-attributes]

Para acceder a los perfiles de error, vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > Errors > Error profiles**</DNT>

<img
  title="APM: Error profiles example"
  alt="APM: Error profiles example"
  src="/images/apm_screenshot-full_seldon-error-profiles.webp"
/>

<figcaption>
  Utilice perfiles de error para solucionar problemas de tendencias y diferencias significativas en la frecuencia de eventos de error para su aplicación.
</figcaption>

Un perfil de error es una colección de [atributos](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#attribute) con características significativamente diferentes en comparación con los que no son errores. Un atributo es "inusual" si un conjunto de eventos representa lo que es normal (por ejemplo, errores comparados con todo el tráfico durante un período de tiempo determinado) o diferencias entre criterios similares (por ejemplo, dos hosts diferentes).

Los errores pueden estar relacionados con eventos como:

* Nombres [web de transacciones](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) específicas o nombres [de transacciones sin web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions) , nombres de subprocesos JVM, etc.
* Tipos únicos de mensaje de error, clases, etc.
* Interacción aleatoria con clientes; por ejemplo, un error particular proviene de la cuenta de un solo cliente, mientras que el tráfico normal proviene de una amplia variedad de cuentas.
* Recuento o duración de llamadas externas
* Diferencias de tiempo entre los hosts de su ecosistema, ID de agentes del clúster, etc.
* Otra anomalía

## Seleccionar criterios de perfil de error [#criteria]

Según los criterios de [la página<DNT>**Errors**</DNT> ](/docs/apm/applications-menu/error-analytics/error-analytics-explore-events-behind-errors)de su aplicación, New Relic analiza y enumera las tendencias inusuales según su importancia. Los criterios seleccionados incluyen:

* [Ventana de tiempo](/docs/data-analysis/user-interface-functions/view-your-data/time-picker-setting-time-periods-view-data)

* <DNT>
    **Errors**
  </DNT>

  filtros de página

* Criterios de búsqueda en la página

  <DNT>
    **Errors**
  </DNT>

  o en la pestaña

  <DNT>
    **Error profiles**
  </DNT>

A medida que examina los resultados del perfil de error y desea profundizar más, agregue o cambie los criterios del perfil de error de su aplicación. La pestaña <DNT>**Error profile**</DNT> se actualiza para mostrar las características que distinguen los errores que coinciden con los criterios actualizados.

<CollapserGroup>
  <Collapser
    id="profile-criteria-example"
    title="Ejemplo de criterios de perfil de error"
  >
    La pestaña <DNT>**Error profile**</DNT> de tu aplicación actualmente muestra varias clases o mensajes de error. Para filtrar por una clase de error o mensaje específico, utilice cualquiera de estas opciones:

    * Desde el selector de tiempo de la página

      <DNT>
        **Errors**
      </DNT>

      , cambia el rango de tiempo. Por ejemplo, cambie el valor predeterminado (30 minutos) a

      <DNT>
        **Last 24 hours, ending now**
      </DNT>

      .

    * Desde el filtro de la página

      <DNT>
        **Errors**
      </DNT>

      <Icon name="fe-filter"/>

      sección: seleccione

      <DNT>
        **Back to groupings list**
      </DNT>

      y luego seleccione otro

      <DNT>
        **Error groups**
      </DNT>

      ,

      <DNT>
        **Error attributes**
      </DNT>

      o

      <DNT>
        **Custom attributes**
      </DNT>

      .

    * Desde el filtro de la página

      <DNT>
        **Errors**
      </DNT>

      <Icon name="fe-filter"/>

      sección: haga clic en un elemento específico de la lista para limitar el filtro. Por ejemplo, si aparecen varios mensajes de error, haga clic solo en el mensaje que le interese.

    * Desde la búsqueda de la pestaña

      <DNT>
        **Error profiles**
      </DNT>

      <Icon name="fe-search"/>

      cuadro, escriba `class`, `message` u otros valores de búsqueda.
  </Collapser>
</CollapserGroup>

## Analizar los resultados del perfil de error [#details]

Para examinar los detalles de los resultados del atributo en el perfil de error de su aplicación, debe usar la vista APM clásica.

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Errors**
   </DNT>

   y luego alterne

   <DNT>
     **Show new view**
   </DNT>

   para que APM muestre la vista clásica de la página

   <DNT>
     **Errors**
   </DNT>

   .

2. En la página

   <DNT>
     **Errors**
   </DNT>

   , seleccione la pestaña

   <DNT>
     **Error profile**
   </DNT>

   .

3. En la pestaña

   <DNT>
     **Error profile**
   </DNT>

   , revise la lista de atributos de error que coinciden con los [criterios del perfil de error](#criteria) seleccionado actualmente.

4. Para ver los detalles de un atributo específico, haga clic en él.

5. Para resaltar detalles de error específicos, pase el mouse sobre cualquier segmento del gráfico circular o fila de la tabla para el atributo.

6. Para investigar un atributo específico para los errores de su aplicación, escriba su nombre en la ventana de búsqueda de la pestaña

   <DNT>
     **Error profiles**
   </DNT>

   o cambie los [criterios del perfil de error](#criteria) actualmente seleccionado.

Compare valores con grandes diferencias para identificar los rasgos que distinguen los errores de un atributo. Los datos comparativos en los resultados del perfil de error y los [detalles de la traza de error](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces) pueden ayudarle a decidir qué pasos seguir para una resolución adicional de problemas y la resolución del error.

## Distribución de errores y no errores. [#distribution]

Dependiendo de los atributos de un error, a veces el atributo se distribuye de manera diferente para los errores que para los que no son errores.

<CollapserGroup>
  <Collapser
    id="top"
    title="Principales valores divergentes"
  >
    New Relic analiza cada atributo en busca de errores de su aplicación y compara la distribución de errores que coinciden con sus criterios con transacciones sin errores. Si las proporciones entre estos errores son aproximadamente las mismas en comparación con la transacción sin errores, el atributo no contiene mucha información útil para la depuración.

    New Relic limita el gráfico circular y la tabla del perfil de error para cada atributo para mostrar solo los valores que se desvían más. Cuando las proporciones son aproximadamente las mismas, New Relic no las incluye en el perfil de error.
  </Collapser>

  <Collapser
    id="other"
    title="Otra categoria"
  >
    Después de los valores que más se desvían, el perfil de error agrupa el resto en una categoría <DNT>**Other**</DNT> . Esto le ayuda a centrarse en los valores que son diferentes para estos errores.
  </Collapser>

  <Collapser
    id="no-value"
    title="Sin categoría de valor"
  >
    Si los valores están inusualmente presentes o no están presentes en los errores, es posible que vea una categoría <DNT>**No value**</DNT> en la lista de perfiles de error.
  </Collapser>

  <Collapser
    id="filters"
    title="Filtros"
  >
    Si no tiene ningún filtro seleccionado, el perfil muestra los rasgos distintivos que exhiben sus errores en conjunto.

    <DNT>**Example:**</DNT> Cierto tipo de transacción representa el 20% de todo su tráfico y es responsable del 80% de sus errores. El perfil de error mostrará proporciones inesperadas en el atributo `Transaction` .

    Ajuste [los criterios de su perfil de error](#criteria) para profundizar aún más en los resultados del perfil, de modo que pueda solucionar problemas y resolver eventos de error específicos de manera más efectiva.
  </Collapser>
</CollapserGroup>
