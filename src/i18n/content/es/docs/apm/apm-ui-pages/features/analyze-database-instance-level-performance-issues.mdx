---
title: Analizar problemas de rendimiento a nivel de instancia y de base de datos
tags:
  - APM
  - APM UI pages
  - Features
metaDescription: 'How to use APM to identify if performance problems and errors are due to database performance, one or more hosts/instances or services, or both.'
freshnessValidatedDate: never
translationType: machine
---

Cuando forma parte de un equipo de desarrollo, operaciones o DevOps , los problemas de la base de datos deben investigarse rápidamente. Para resolver problemas y errores de rendimiento con una aplicación lenta o defectuosa, debe poder analizar si la causa subyacente está relacionada con el rendimiento de la base de datos, uno o más hosts o servicios, o ambos.

Utilizando [la traza de la transacción](/docs/apm/transactions/transaction-traces/transaction-traces), [la consulta lenta traza](/docs/apm/applications-menu/monitoring/viewing-slow-query-details) y [los mapas de servicios](/docs/data-analysis/service-maps/get-started/service-maps-visualize-monitor-apps-entire-architecture) de APM, puede examinar la consulta específica, la instancia de la base de datos (host y puerto) y el nombre de la base de datos para el problema. La métrica de nivel de instancia de APM puede ayudarle a profundizar en la instancia o instancias específicas involucradas. Esto le ayuda a evaluar rápidamente el impacto y resolver el problema.

<img
  title="APM Databases slow query details: Database and instances information"
  alt="APM Databases slow query details: Database and instances information"
  src="/images/apm_screenshot-full_database-overview.webp"
/>

## Compatibilidad y requisitos [#compatibility]

New Relic recopila detalles de instancia para una variedad de base de datos y controlador de la base de datos. La capacidad de ver instancias específicas y los tipos de información de la base de datos en APM depende de su controlador de base de datos y de la versión del agente:

* <DNT>
    **Go:**
  </DNT>

  Consulte [Compatibilidad a nivel de instancia del agente Go](/docs/agents/go-agent/get-started/go-agent-compatibility-requirements#datastores) para almacenes de datos.

* <DNT>
    **Java:**
  </DNT>

  Consulte [compatibilidad a nivel de instancia de agente de Java](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent#instance-level-db) para obtener información sobre la base de datos.

* <DNT>
    **.NET:**
  </DNT>

  Consulte [Compatibilidad a nivel de instancia del agente .NET](/docs/agents/net-agent/getting-started/compatibility-requirements-net-agent#instance-details) para almacenes de datos.

* <DNT>
    **Node.js:**
  </DNT>

  Consulte [Compatibilidad a nivel de instancia del agente Node.js](/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent#instance-details) para almacenes de datos.

* <DNT>
    **PHP:**
  </DNT>

  Consulte [Compatibilidad a nivel de instancia del agente PHP](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#instance-details) para obtener base de datos.

* <DNT>
    **Python:**
  </DNT>

  Consulte [Compatibilidad a nivel de instancia del agente Python](/docs/agents/python-agent/getting-started/instrumented-python-packages#instance-details) para conocer la base de datos y los paquetes.

* <DNT>
    **Ruby:**
  </DNT>

  Consulte [Compatibilidad a nivel de instancia del agente Ruby](/docs/agents/ruby-agent/getting-started/ruby-agent-requirements-supported-frameworks#instance_details) para ORM y gemas.

Para solicitar información a nivel de instancia de almacenes de datos que actualmente no figuran en la lista de su agente, obtenga soporte en [support.newrelic.com](https://support.newrelic.com).

## Utilice los detalles de la instancia de almacenamiento de datos para monitor y solucionar problemas de su aplicación [#workflow-examples]

Utilice estos ejemplos como puntos de partida para monitor y solucionar problemas del rendimiento de las conexiones entre su aplicación y el almacenamiento de datos asociado. Los ejemplos describen las capacidades de New Relic que pueden ayudarlo a determinar si la causa subyacente detrás de los problemas de rendimiento de la aplicación se relaciona con sus aplicaciones, un problema de configuración de la instancia de la base de datos (como un índice faltante), los recursos de su organización o una combinación.

<CollapserGroup>
  <Collapser
    id="slow-sql-example"
    title="Ejemplo de detalles de traza de consulta lenta"
  >
    Tu [Apdex](/docs/apm/new-relic-apm/apdex/view-your-apdex-score) está cayendo y quieres determinar qué está afectando tu experiencia del usuario final con tu aplicación. En la página [de base de datos](/docs/apm/applications-menu/monitoring/databases-slow-queries-page) de APM, observa alguna consulta lenta y desea investigar más a fondo con las herramientas de su proveedor de base de datos.

    Para hacer esto, necesita saber el nombre de la base de datos y la instancia donde ocurrió la consulta lenta, ya que el problema puede ser específico de la instancia. Por ejemplo, el problema puede ser que falte un índice. Utilice [la consulta lenta traza](/docs/apm/applications-menu/monitoring/viewing-slow-query-details) de APM para revisar el desempeño de la consulta, localizar el nombre y la instancia de la base de datos e identificar cualquier consulta mal redactada o ineficiente.
  </Collapser>

  <Collapser
    id="tx-trace-example"
    title="Ejemplo de detalles de traza de la transacción"
  >
    Su aplicación tiene un problema de rendimiento y ha utilizado la página [Transacciones](/docs/apm/applications-menu/monitoring/transactions-page) de APM para identificar una transacción sospechosa. Cuando selecciona una [traza de la transacción](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page) para la transacción lenta, observa que el tiempo de la base de datos es el factor clave para el rendimiento de la transacción.

    De la [traza de la transacción seleccionada **Details**](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page), seleccionas la **base de datos** <Icon name="fe-database"/> icono para revisar la información **de la consulta de la base de datos** . Esto muestra tanto los detalles de la consulta como la instancia específica donde se ejecutó la consulta. Desde aquí puede utilizar las herramientas del proveedor de su base de datos para diagnosticar mejor el problema.

    <img
      title="APM transaction trace: Database and instances information"
      alt="APM transaction trace: Database and instances information"
      src="/images/apm_screenshot-full_transaction-trace-database-icon-drilldown.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Databases > (select a trace) > Trace details:**</DNT> Para ver información sobre una base de datos y una instancia específicas que pueden estar contribuyendo al problema de rendimiento de una aplicación, seleccione el icono <DNT>**Database**</DNT> .
    </figcaption>
  </Collapser>

  <Collapser
    id="insights-example"
    title="Ejemplo de generador de consultas"
  >
    Si está utilizando un agente APM que [admite detalles de instancia de base de datos](#compatibility), puede usar [el generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para generar informes sobre métricas, como el tiempo de respuesta y el rendimiento.
  </Collapser>

  <Collapser
    id="alerts-example"
    title="Alertas sobre métrica personalizada para ejemplo de desempeño de instancia"
  >
    Para recibir una notificación sobre un problema de rendimiento entre su aplicación y una instancia de base de datos antes de que afecte negativamente la experiencia de sus clientes, utilice [alerta](/docs/alerts/new-relic-alerts/getting-started/welcome-new-relic-alerts). Puede crear [una política de alertas](/docs/alerts/new-relic-alerts/configuring-alert-policies/alert-policy-workflow) que [notifique automáticamente al personal correspondiente](/docs/alerts/new-relic-alerts/managing-notification-channels/notification-channels-controlling-where-send-alerts) a través de PagerDuty, webhooks, etc. cuando los problemas escalan al umbral <DNT>**Critical**</DNT> que usted defina.

    Como parte de la configuración de la política de alertas, cree una condición con [métrica personalizada](/docs/alerts/new-relic-alerts/configuring-alert-policies/define-custom-metrics-alert-condition) para una instancia específica, usando este formato:

    ```
    Datastore/instance/vendor/host/port
    ```

    Por ejemplo:

    ```
    Datastore/instance/MySQL/msql-agent-1/12345
    ```
  </Collapser>
</CollapserGroup>
