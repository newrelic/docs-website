---
title: Configurar traza de la transacción
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: How to configure transaction trace settings in APM.
freshnessValidatedDate: never
translationType: machine
---

En APM, [la traza de la transacción](/docs/apm/transactions/transaction-traces/transaction-traces) registra detalles detallados sobre la transacción de su aplicación y las llamadas a la base de datos. Puede editar la configuración predeterminada para la traza de la transacción.

## Configurar los ajustes de la traza de la transacción a través del agente [#agent-trace-config]

Puede personalizar la configuración de su traza de la transacción a través de archivos de configuración del agente New Relic y otros métodos de configuración "locales", como variables de entorno. Para obtener más información sobre las opciones de configuración de traza de la transacción, consulte la documentación específica del agente de lenguaje de New Relic:

* [Go](/docs/agents/go-agent/instrumentation/go-agent-configuration#transaction-tracer)
* [Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#h2-transaction-tracer)
* [.NET](/docs/agents/net-agent/installation-configuration/net-agent-configuration#transaction_tracer)
* [Nodo](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx_tracer_config)
* [PHP](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-settings)
* [Python](/docs/agents/python-agent/installation-configuration/python-agent-configuration#txn-tracer-settings)
* [Ruby](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#transaction_tracer)

## Configurar la traza de la transacción usando la configuración del lado del servidor [#fields]

La capacidad de configurar la traza de la transacción utilizando [la configuración del lado del servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) depende del [agente de New Relic](#agent-trace-config). Si no se admite la configuración del lado del servidor, la configuración de la traza de la transacción será visible en la UI pero no editable.

Si los ajustes de configuración del lado del servidor están disponibles para su agente de New Relic, puede verlos en lo siguiente: <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Settings > Application > Server-side agent configuration**</DNT>.

Las configuraciones de traza de la transacción disponibles usando la configuración del lado del servidor diferirán según el [agente de New Relic](#agent-trace-config) que utilice. La UI incluye descripciones de cada uno. Las configuraciones en la UI pueden incluir:

* Seguimiento y umbral de transacciones.
* Grabar SQL, incluido el nivel de grabación y los campos de entrada
* Log SQL y rastreo del umbral de pila
* Planes de consulta SQL y umbral
* Colección de errores, incluido el código HTTP y la clase de error
* Consulta lenta rastreo
* Hilo generador de perfiles
* Rastreo multiaplicación

## Configurar traza para específica (transacción clave [#key-txns]

Si desea monitor o alertar sobre una transacción de manera diferente a otras transacciones, conviértala en una [transacción clave](/docs/apm/transactions/key-transactions/key-transactions-tracking-important-transactions-or-events). Esto es útil, por ejemplo, cuando desea [establecer un Apdex específico de transacción](/docs/apm/new-relic-apm/apdex/change-your-apdex-settings#key-transaction) que sea diferente de su [umbral Apdex T](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction#what-is) general.

Cambiar el Apdex de una transacción clave cambia la probabilidad de que cree una traza de la transacción. Por ejemplo:

* Si desea aumentar la probabilidad de que una transacción clave genere una traza de la transacción,

  <DNT>
    **lower**
  </DNT>

  su valor Apdex T.

* Si desea que una transacción clave tenga menos probabilidades de ser trazada,

  <DNT>
    **raise**
  </DNT>

  su valor Apdex T.

<Callout variant="important">
  Si tiene el [umbral de traza de la transacción](#fields) establecido en una cantidad de segundos, y no en la configuración predeterminada de Apdex, el umbral de cantidad de segundos actuará como el umbral para <DNT>**all**</DNT> transacción, incluso para claves de transacción que tienen Apdex personalizado. ajustes.
</Callout>

## Ver el registro de sus datos de infraestructura y APM [#logs-context]

También puede reunir los datos de su registro y de la aplicación para que la resolución de problemas sea más fácil y rápida. Con [el contexto de inicio de sesión](/docs/logs/logs-context/configure-logs-context-apm-agents/), puede ver el mensaje de registro relacionado con sus errores y la traza directamente en UI de su aplicación. También puede ver el inicio de sesión en el contexto de [los datos de su infraestructura](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/), como el clúster de Kubernetes. No es necesario cambiar a otra página de UI.

## Crear transacción personalizada [#custom-txns]

Puede crear transacciones personalizadas para la actividad de la aplicación que el agente de New Relic no captura automáticamente como una transacción. Para más información, consulte [instrumentación personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/).

## Recopilar atributo de solicitud HTTP, parámetro [#config-attributes]

Por [razones de seguridad de los datos](/docs/apm/transactions/transaction-traces/security-options-transaction-traces), la traza de la transacción no recopila atributos de solicitud HTTP potencialmente sensibles, a veces llamados <DNT>**parameters**</DNT>. traza recopila algunos atributos de solicitud HTTP básicos, que New Relic llama <DNT>**agent attributes**</DNT>. Para editar la configuración de la colección de atributos, consulte el agente New Relic específico:

* [Go](/docs/agents/go-agent/instrumentation/go-agent-attributes)
* [Java](/docs/agents/java-agent/attributes/java-agent-attributes)
* [.NET](/docs/agents/net-agent/attributes/net-agent-attributes)
* [Node.js](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#params) (no permite configuración de atributos HTTP)
* [PHP](/docs/agents/php-agent/attributes/php-agent-attributes)
* [Python](/docs/agents/python-agent/attributes/python-agent-attributes)
* [Ruby](/docs/agents/ruby-agent/attributes/ruby-agent-attributes)

Para obtener más información, consulte [Recopilar atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes).

## Eliminar una traza de la transacción [#delete-trace]

Cuando eliminas una traza de la transacción, se elimina permanentemente.

<CollapserGroup>
  <Collapser
    id="delete-trace"
    title="Eliminar una sola traza de la transacción"
  >
    Para eliminar un registro de traza de la transacción de forma permanente:

    1. Vaya a

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions**
       </DNT>

       .

    2. Debajo de

       <DNT>
         **Transaction traces**
       </DNT>

       haz clic en la traza que deseas eliminar.

    3. En la página de detalles, seleccione

       <DNT>
         **Delete this trace**
       </DNT>

       .
  </Collapser>

  <Collapser
    id="delete-all"
    title="Eliminar toda la traza de la transacción"
  >
    Para eliminar <DNT>**all**</DNT> traza de la aplicación seleccionada de forma permanente:

    1. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions**</DNT>.

    2. Haga clic en <DNT>**Delete all traces**</DNT>.

       Pueden pasar quince minutos o más hasta que todos los registros de traza de la transacción desaparezcan de la UI.

       Para eliminar todas las trazas de su cuenta, contáctenos en [support.newrelic.com](https://support.newrelic.com).

       <Callout variant="tip">
         Si está realizando una limpieza general de registros, es posible que también desee eliminar [la base de datos y consultar la traza lenta](/docs/apm/applications-menu/monitoring/databases-slow-queries-page) o [la traza del error](/docs/apm/applications-menu/events/viewing-apm-errors-error-traces). Esto eliminará datos potencialmente confidenciales y al mismo tiempo conservará otros datos de su aplicación (como Apdex, información desplegable, etc.).
       </Callout>
  </Collapser>
</CollapserGroup>
