---
title: Guía de transacción clave
tags:
  - APM
  - Transactions
  - Key transactions
metaDescription: 'In APM, key transactions are used to monitor your application''''s important or unique transactions and processes.'
freshnessValidatedDate: never
translationType: machine
---

Transacción clave son una forma para que los equipos de ingeniería creen un monitoreo de nivel personalizado en su transacción más significativa. Las herramientas de monitoreo APM de New Relic lo ayudan a detectar y resolver problemas rápidamente antes de que afecten a su usuario al informar sobre _todas las transacciones_. Pero a veces la información que es esencial para administrar su negocio digital no es la que recibe mayor tráfico. Aquí es donde transacción clave puede ayudarle a realizar un seguimiento de las transacciones esenciales que desea monitor y administrar, independientemente del rendimiento general de la aplicación.

## Clave de transacción en la práctica

Pensemos en un escenario en el que un cliente inicia sesión en su aplicación de comercio electrónico para comprar un teléfono. Los clientes experimentan una respuesta lenta cuando intentan cargar la página de planes y navegar por los servicios. Esto da como resultado que los clientes abandonen el sitio y abandonen la compra. Su equipo de microservicios `PlanService` debe identificar rápidamente la causa raíz de esta desaceleración y solucionarla para evitar perder más clientes.

Su equipo comienza identificando la transacción comercial más importante de `PlanService`: `getPlans` (que carga la página de planes). Luego, debe realizar `getPlans` una transacción clave, aplicar la etiqueta relevante y analizarla dentro del contexto del [ecosistema de entidad](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic/) más amplio.

Puede obtener más información sobre transacciones y si su framework las admite en nuestros [documentos APM](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm/).

<CollapserGroup>
  <Collapser
    id="create-key-transactions"
    title="Crear clave de transacción"
  >
    Para realizar `getPlans` una transacción clave:

    1. Vaya a

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & Services**
       </DNT>

       .

    2. Vaya a

       <DNT>
         **Transactions**
       </DNT>

       en la navegación izquierda.

    3. Seleccione la transacción `getPlans` .

    4. Seleccione

       <DNT>
         **Make key transaction**
       </DNT>

       en la vista de detalles de la transacción. También puede automatizar este paso utilizando la API REST para crear y detener el seguimiento de la clave de transacción.

       <img
         title="Create a key transaction"
         alt="A screenshot decpicting how to create a key transaction"
         src="/images/apm_screenshot-full_make-a-key-transaction.webp"
       />

       Después de crear la clave de transacción, pasan a formar parte del ecosistema de entidad New Relic. Puede ver todas las transacciones, incluida la transacción clave `getPlans` que acaba de crear, en <DNT>**entity list view**</DNT>.
  </Collapser>

  <Collapser
    id="rename-a-key-transaction"
    title="Cambiar el nombre de una transacción clave"
  >
    Supongamos que desea cambiar el nombre de su transacción clave para que sea más precisa o más fácil de filtrar, así es como se hace:

    1. Vaya a

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Key transactions**
       </DNT>

       .

    2. En el índice, seleccione la transacción clave cuyo nombre desea cambiar.

    3. Elija

       <DNT>
         **Application**
       </DNT>

       en el área de configuración de la navegación izquierda.

    4. Ingrese un nuevo nombre para la transacción y luego guárdela.
  </Collapser>

  <Collapser
    id="change-apdex-settings"
    title="Cambiar la configuración de Apdex"
  >
    Puede establecer un [umbral Apdex](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction) personalizado para una transacción clave si se trata de una [transacción web](/docs/new-relic-solutions/get-started/glossary/#transaction). Apdex no es aplicable para [transacciones no web](/docs/new-relic-solutions/get-started/glossary/#non-web-transaction).

    <Callout variant="important">
      La configuración de Apdex de transacción clave anula el valor T establecido para esa aplicación. Esto puede significar, por ejemplo, que una transacción clave podría informarse como <DNT>**Satisfied**</DNT> pero una transacción diferente en la misma aplicación con el mismo tiempo de respuesta podría ser <DNT>**Frustrated**</DNT>.
    </Callout>

    Para cambiar el umbral Apdex de una transacción clave:

    1. Vaya a

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Key transactions**
       </DNT>

       .

    2. En el índice, seleccione el

       <DNT>
         **key transaction**
       </DNT>

       cuyo nombre desea cambiar.

    3. Elija la aplicación en el área de configuración de la navegación izquierda.

    4. Ingrese un nuevo valor en segundos bajo el encabezado

       <DNT>
         **Apdex T**
       </DNT>

       y luego guárdelo.

       El umbral de Apdex afecta cómo se crean las claves de la traza de la transacción.
  </Collapser>

  <Collapser
    id="delete-key-transactions"
    title="Eliminar clave de transacción"
  >
    1. Vaya a

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Key transactions**
       </DNT>

       .

    2. Desde el índice, seleccione la transacción clave que desea eliminar.

    3. Elija

       <DNT>
         **Application**
       </DNT>

       en el área de configuración de la navegación izquierda.

    4. Seleccione

       <DNT>
         **stop tracking**
       </DNT>

       transacción clave.

       New Relic elimina automáticamente cualquier alerta y evento asociado a la transacción clave eliminada.
  </Collapser>
</CollapserGroup>

## Etiqueta clave de transacción

En APM, puedes organizar y filtrar la clave de transacción para poder determinar rápidamente los equipos, entornos o niveles de prioridad, agregando un <DNT>**tag**</DNT> a tu [clave de transacción](/docs/apm/transactions/key-transactions/introduction-key-transactions/). Estas etiquetas también proporcionan contexto para que pueda aislar el problema cuando recibe una notificación de alerta.

Etiqueta son metadatos asociados con la transacción. Son útiles para aplicar a transacciones que tienen cosas en común. Por ejemplo, puede aplicar una etiqueta `checkout` a todas las claves de transacción que forman parte del proceso de pago. Luego puedes filtrar por `checkout` para ver todas esas transacciones en un solo lugar.

En nuestro escenario, el equipo de microservicios `PlanService` está intentando identificar ralentizaciones en el proceso de pago y es posible que deseen filtrar fácilmente por `environment` o `accountid` para poder identificar problemas y encontrar soluciones rápidas.

<CollapserGroup>
  <Collapser
    id="assign-tags"
    title="Asignar etiqueta"
  >
    Para asignar una etiqueta a una transacción clave:

    1. Vaya a <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities)**</DNT> y seleccione una transacción clave.

    2. Cerca del nombre de la entidad en la parte superior de la página, seleccione el menú <DNT>**See metadata and manage tags**</DNT> .

    3. En el campo <DNT>**Add a new tag...**</DNT> del menú emergente, agregue una etiqueta con este formato: `accountId: 123456789`.

       <img
         title="Tag a key transaction"
         alt="A screenshot depicting how to tag a key transaction"
         src="/images/apm_screenshot-full_tag-a-key-transaction.webp"
       />

    4. Para el agente APM, si desea utilizar esas etiquetas en la consulta NRQL, reinicie su servicio.
  </Collapser>

  <Collapser
    id="filter"
    title="Etiqueta de filtro"
  >
    Para filtrar clave de transacción por etiqueta:

    1. Vaya a

       <DNT>
         **[one.newrelic.com](https://one.newrelic.com/all-capabilities)**
       </DNT>

       .

    2. Haga clic en el campo

       <DNT>
         **Filter by ...**
       </DNT>

       para ver un menú desplegable de atributos y etiquetas disponibles o ingrese una etiqueta por la que desee filtrar, como `accountId: 123456789`.
  </Collapser>
</CollapserGroup>

## Agrupar clave de transacción y crear alertas

Después de haber creado una transacción clave, puede aumentar su visibilidad conectándola a nuestro <InlinePopover type="alerts"/>y a nuestras herramientas de inteligencia aplicada y carga de trabajo.

<CollapserGroup>
  <Collapser
    id="key-transaction-workload"
    title="Agregue su transacción clave a una carga de trabajo"
  >
    En New Relic, puedes usar carga de trabajo para agrupar entidades que conforman un servicio comercial específico. Esta agrupación facilita el aislamiento y la solución de problemas. Agregue su clave de transacción a carga de trabajo junto con los servicios y hosts relacionados, para que pueda obtener una vista agregada del estado y la actividad de la entidad que compone su stack.

    Esta captura de pantalla de ejemplo muestra una vista completa de la carga de trabajo de la transacción clave `getPlans` con todas las demás entidades relacionadas.

    <img
      title="Workloads and key transactions"
      alt="A screenshot depiciting workloads and key transactions"
      src="/images/apm_screenshot-full_workloads-and-key-transactions.webp"
    />
  </Collapser>

  <Collapser
    id="set-alerts"
    title="Configurar alertas para una transacción clave"
  >
    Ahora que su transacción clave es parte de una carga de trabajo y una etiqueta, el siguiente paso es crear alertas para recibir notificaciones cuando haya algún comportamiento inusual en su transacción. Puede configurar [alertas estáticas](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/your-first-nrql-condition/#static-threshold) y [alertas de anomalía](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/your-first-nrql-condition/#anomaly-threshold) en la clave de transacción utilizando el potente y flexible [sistema de alerta NRQL](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/) y ahora también puede agregar su clave de transacción al tablero. Si desea configurar alertas o agregar la clave de transacción al tablero, puede hacerlo directamente desde los gráficos de clave de transacción haciendo clic en los puntos suspensivos.
  </Collapser>

  <Collapser
    id="create-service-levels"
    title="Crear nivel de servicio para clave de transacción."
  >
    Además del umbral de alerta, también puede medir el rendimiento desde el punto de vista del usuario de su aplicación. Para hacer esto, configure [el nivel de servicio](/docs/service-level-management/intro-slm/) contra la clave de transacción comercial.
  </Collapser>
</CollapserGroup>

## Utilice la clave de transacción en contexto

Después de haber creado una transacción clave, agregado una etiqueta, creado la carga de trabajo y configurado alertas, puede comenzar a analizar sus datos en contexto con otra entidad que monitor. Una vez que comprenda su función dentro de su sistema más amplio, podrá tomar medidas adicionales para mejorar el tiempo de actividad y la confiabilidad.

<CollapserGroup>
  <Collapser
    id="lookout"
    title="Analiza la desviación con New Relic Lookout"
  >
    Para analizar rápidamente la desviación en todas sus claves de transacción, puede comenzar con New Relic [Lookout](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-lookout-monitor-your-estate-glance/). Esto proporciona una vista en tiempo real de su transacción en todas sus cuentas, destacando los cambios en toda su telemetría. En este ejemplo, puede ver que la transacción `getPlans` muestra un aumento en el tiempo de respuesta:

    <img
      title="New Relic Lookout and key transactions"
      alt="A screenshot depicting New Relic Lookout and key transactions."
      src="/images/apm_screenshot-full_lookout-and-key-transactions.webp"
    />
  </Collapser>

  <Collapser
    id="service-maps"
    title="Comprender el impacto a través de mapas de servicios"
  >
    Para comprender el impacto completo de la degradación del rendimiento de la transacción `getPlans` , puede utilizar un [mapa de servicios](/docs/new-relic-solutions/new-relic-one/ui-data/service-maps/introduction-service-maps/). Puede visualizar el estado de todas las demás entidades conectadas, como el servicio de origen, los hosts, la base de datos y otras claves de transacción.

    <img
      title="Service maps and key transactions"
      alt="A screenshot depicting service level maps and key transactions"
      src="/images/apm_screenshot-full_service-maps-and-key-transactions.webp"
    />
  </Collapser>

  <Collapser
    id="change tracking"
    title="Cambio de camino"
  >
    Para realizar un seguimiento del impacto de cualquier evento de cambio, como despliegue de código, cambios de configuración y eventos comerciales, puede utilizar los [marcadores de seguimiento de cambios](/docs/change-tracking/change-tracking-view-analyze/) en los gráficos de claves de transacción. Esto le ayuda a profundizar más en la traza para solucionar los cambios que están causando problemas.

    En esta captura de pantalla, puede ver un aumento en el tiempo de transacción `getPlans` justo después de un despliegue para optimizar una consulta de la base de datos. Esto te ayuda a trazar el problema hasta el despliegue. En este ejemplo, cuando revertimos el cambio, el tiempo de transacción volvió a la normalidad y la página de planes comenzó a cargarse rápidamente.

    <img
      title="Key transactions and change tracking"
      alt="A screenshot depicting change tracking and key transactions"
      src="/images/apm_screenshot-full_key-transactions-track-changes.webp"
    />
  </Collapser>
</CollapserGroup>
