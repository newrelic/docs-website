---
title: Rastreo de errores con Errors Inbox
metaDescription: 'Errors inbox is an error tracking solution designed to give you the tools to proactively detect, triage, and resolve errors across your full application stack.'
freshnessValidatedDate: never
translationType: machine
---

## Experiencia unificada de rastreo de errores [#matters]

Errors Inbox proporciona una experiencia unificada de rastreo de errores para detectar y clasificar errores:

* Vea y clasifique los problemas en las aplicaciones y servicios que interesan a su equipo para resolver errores más rápido.

* Notificación proactiva con información detallada de errores en Slack.

* Perfiles de error para mostrar similitudes entre el evento de error y descubrir la causa raíz mediante el análisis del atributo.

* Analice errores en el contexto de la stack completa y resuelva errores con precisión.

* Los errores de

  <InlinePopover type="apm"/>

  ,

  <InlinePopover type="browser"/>

  ,

  <InlinePopover type="mobile"/>

  y la función Lambda de AWS se capturan en la misma bandeja de entrada.

¿Listo para comenzar? Consulte nuestros documentos sobre cómo [crear su primera carga de trabajo](/docs/errors-inbox/getting-started).

## Monitor errores [#monitor-errors]

Una vez que haya configurado su Errors Inbox, puede comenzar a monitorear proactivamente todos los errores en su stack:

### Grupos de errores [#groups]

Los grupos de errores son conjuntos de eventos que forman un error único. Los grupos de errores se almacenan a largo plazo y contienen métricas, log de actividad, discusiones e información básica sobre el error único. Los grupos de errores están vinculados a la [entidad](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/), por lo que realizar un cambio en el estado de un grupo de errores en una Errors Inbox afectará a todas las demás bandejas de entrada que contengan esa entidad.

### Cómo funcionan los grupos de errores [#how-groups-work]

Los eventos de error se agrupan en un grupo de errores cuando comparten la misma huella digital. A medida que New Relic ingiere el evento, ejecutamos el evento a través de un conjunto de reglas administradas que generan una huella digital. Cada huella digital única tiene un único grupo de errores asociado.

Las reglas administradas de New Relic normalizan los datos de error, identificando e ignorando valores únicos como UUID, valores hexadecimales y direcciones de correo electrónico que causarían errores de agrupación "me gusta" en grupos únicos. New Relic `account ID`, `entity ID`, `error class`, `error message`, `stack trace` y `exception` son datos que pueden afectar una huella digital.

¿Algo de lo siguiente se aplica a su Errors Inbox hoy?

* Los errores no están agrupados de la manera que tenga más sentido para su aplicación.
* Varios grupos no fusionados que le gustaría ver fusionados.
* Una bandeja de entrada “ruidosa” debido a una mala agrupación que te empuja a superar el límite diario de grupos de errores únicos.
* Un grupo de errores en su bandeja de entrada que contiene errores no relacionados.

Tener errores bien agrupados ayuda a la Errors Inbox a clasificar y diagnosticar mejor los problemas en su sistema. Si bien la Errors Inbox proporciona un conjunto de agrupaciones predeterminadas, ocasionalmente es necesario realizar ajustes.

Hay dos opciones para ajustar los grupos de errores: actualizar el mensaje de error [usando un atributo personalizado](/docs/errors-inbox/errors-inbox/#best-practices) o crear sus propios grupos de errores.

#### Crea tus propios grupos de errores [#create-error-groups]

Muchos de nuestros agentes ahora tienen una característica que permite que su código observe un error y designe un grupo de errores antes de enviarlo a New Relic. Luego, el grupo designado se agrega como atributo `error.group.name` en el evento de error. Para comenzar, consulte los enlaces de APM a continuación, o los [documentos del agente del navegador](/docs/browser/browser-monitoring/getting-started/introduction-browser-monitoring/), para obtener información sobre cómo especificar un grupo de errores personalizado. Esto garantizará que los errores y atributos recopilados por el agente se conserven y agrupen a su gusto.

Agente soportado APM:

* [Browser](/docs/browser/new-relic-browser/browser-apis/seterrorhandler/#fingerprinting-errors-in-handler-function)
* [Go](/docs/apm/agents/go-agent/api-guides/guide-using-go-agent-api/#error-fingerprinting)
* [Java](/docs/apm/agents/java-agent/api-guides/java-agent-api-register-error-group-callback-to-set-fingerprint)
* [Node.js](/docs/apm/agents/nodejs-agent/api-guides/nodejs-agent-api/#setErrorGroupCallback)
* [.Net](/docs/apm/agents/net-agent/net-agent-api/seterrorgroupcallback-net-agent-api)
* [Python](/docs/apm/agents/python-agent/python-agent-api/seterrrorgroupcallback-python-agent-api)
* [Ruby](/docs/apm/agents/ruby-agent/api-guides/sending-handled-errors-new-relic/#error-fingerprinting)
* [PHP](/docs/apm/agents/php-agent/php-agent-api/newrelic_set_error_group_callback)

Incluso si no admitimos su idioma, aún puede configurar `error.group.name` como atributo personalizado. Esto nos indica que el evento pertenece a un grupo personalizado, pero los eventos capturados no tendrán otro atributo de agente.

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="similar-events"
    title="Resolución de problemas: eventos de apariencia similar no se agrupan"
  >
    Si ve un evento de error "me gusta" agrupado incorrectamente en diferentes grupos de error, revise nuestra sección de mejores prácticas para obtener orientación sobre cómo ajustar [el mensaje de error](#best-practices).

    Si tiene una sola aplicación que informa como entidad múltiple en New Relic (ejecutándose en diferentes clústeres, celdas, etc.), es posible que vea grupos de errores duplicados, ya que nuestra lógica de agrupación analiza los ID de cuentas y entidades como parte del proceso de huellas dactilares. Puede considerar [agrupar las múltiples entidades en una sola entidad](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app/) e incluir solo esa entidad acumulada como parte de su Errors Inbox.

    También puede utilizar la herramienta de comentarios en la UI de New Relic para compartir grupos de errores que podrían necesitar una agrupación mejorada. Actualizamos continuamente nuestras reglas para mejorar la calidad de los grupos de errores.
  </Collapser>
</CollapserGroup>

### Mejores prácticas para la creación significativa de grupos de errores [#best-practices]

Si bien nuestras reglas administradas pueden proporcionar agrupación automática de errores basada en un conjunto predefinido de patrones, es imposible reconocer todas las combinaciones posibles. Por lo tanto, eliminar valores de alta variabilidad del mensaje de error garantizará que sus errores estén agrupados correctamente.

Por ejemplo, considere estos dos mensajes de error:

* "Error de análisis: pusiste 124 y eso no está permitido"
* "Error de análisis: pusiste 456 y eso no está permitido"

Estos mensajes de error parecen similares, pero es menos probable que estos errores se agrupen correctamente debido a los números que tienen menos de 4 dígitos (124). Si hay información adicional (p. ej. sentencias SQL, ids, etc) que desee incluir en el mensaje de error, puede enviarlo mediante un atributo personalizado.

Nuestras recomendaciones:

* Evite el uso de números de menos de 4 dígitos dentro del mensaje de error.
* Evite incluir caracteres especiales dentro del mensaje de error.
* Evite incluir declaraciones SQL dentro del mensaje de error.
* Evite incluir rastreo del stack en el mensaje de error. El rastreo del stack no se formateará cuando se envíe como mensaje de error, por lo que no funcionará con la integración de CodeStream.
* Evite incluir datos que tengan una alta variabilidad (por ejemplo, identificadores, fechas, JSON). usuario estará mejor servido si estos valores se recopilaran como atributo. Estos atributos se pueden ver a nivel de ocurrencia individual así como a nivel de grupo de errores en la Errors Inbox dentro de la [pestaña de atributos](/docs/errors-inbox/errors-inbox/#attributes).
* Advertimos el uso de fechas/marcas de tiempo. Aunque detectamos y agrupamos algunos mensajes de error que contienen marcas de tiempo, no podemos garantizar que reconozcamos todos los formatos.

### Ocurrencias [#occurrences]

Su Errors Inbox muestra el número total de ocurrencias de cada grupo de errores dentro del período de tiempo seleccionado. El minigráfico correspondiente muestra el número total de ocurrencias por día durante el período de tiempo seleccionado al pasar el cursor sobre él.

### Ordenar por filtro [#sort-by]

Usando el menú desplegable en la parte superior derecha, puede ordenar la lista de errores agrupados por el número de ocurrencias o por el error que se vio por última vez en el rango de tiempo seleccionado. Por ejemplo, si el selector de tiempo seleccionado es `Jan 24 5:00pm ET -- Jan 24 5:45pm ET` y ordena por última vez, verá los grupos de errores ordenados con aquellos que contienen primero la aparición más reciente.

### Etiqueta de regresión

Un grupo de errores se etiqueta con una etiqueta de regresión cuando un nuevo error coincide con la huella digital de un grupo de errores resuelto. La etiqueta de regresión desaparecerá una vez que se cambie el estado de un grupo de errores en regresión.

<img
  title="Screenshot of regression tag text."
  alt="Screenshot of regression tag text."
  src="/images/errors-inbox_screenshot-crop_regression-errors.webp"
/>

### Error esperado etiqueta [#expected-errors-tags]

Un grupo de errores se etiqueta con una etiqueta <DNT>**expected**</DNT> si se esperan todas las ocurrencias de errores en el grupo. Se etiqueta con una etiqueta <DNT>**contains expected**</DNT> si se esperan algunos errores y otros no. Estas etiquetas están disponibles en todos los errores después del 21 de enero de 2023.

Vea más sobre cómo marcar errores como se [esperaba](#expected).

<img
  title="Expected errors"
  alt="A screenshot depicting expected error tags in the UI"
  src="/images/errors-inbox_screenshot-crop_expected-errors-tag.webp"
/>

### Acciones masivas [#bulk-actions]

<img
  title="The bulk actions available for errors inbox: resolve, ignore, or unresolve all."
  alt="A screenshot that shows the bulk actions dropdown available for errors inbox."
  src="/images/errors-inbox_screenshot-full_bulk-actions.webp"
/>

<figcaption>
  Puede resolver, ignorar o anular la resolución de errores de forma masiva con el menú desplegable <DNT>**Edit groups**</DNT> .
</figcaption>

Puede actualizar el estado de varios grupos de errores (hasta 2000) todos a la vez. En la vista de la bandeja de entrada, marque la casilla de verificación <DNT>**Error groups**</DNT> para actualizar todos sus grupos de errores en la bandeja de entrada. También puede seleccionar grupos de errores individuales para actualizar sus estados.

### Primera y última fecha vista [#dates]

Entendemos que es muy útil saber cuándo se vio por primera vez un grupo de errores para correlacionarlo con un cambio en el código/sistema. La precisión de las fechas de primera y última visualización depende de los tres escenarios que se describen a continuación:

* <DNT>**Scenario 1:**</DNT> Si un grupo de errores se creó por primera vez el 17/05/2022 o después, los primeros y últimos valores vistos son precisos.
* <DNT>**Scenario 2:**</DNT> Si un grupo de errores se creó por primera vez antes del 17/05/2022, la fecha vista por primera vez no será precisa. La primera fecha vista es el 17/05/2022 o la fecha de la primera aparición (si la ventana de tiempo seleccionada es anterior al 17/05/2022). El último valor visto será exacto.
* <DNT>**Scenario 3:**</DNT> Si un grupo de errores ocurre una vez por semana o menos, las fechas de la primera y la última vez que se vieron son estimaciones basadas en el momento en que ocurrió una sola vez. Solo realizamos un seguimiento preciso de las fechas de primera y última visualización para detectar errores que aparecen más de una vez por semana.

## Errores de clasificación [#triage-errors]

Errors Inbox le permite clasificar grupos de errores directamente desde la pantalla principal o desde la página de detalles del error. La clasificación ayuda a eliminar el ruido de su Errors Inbox y le permite concentrarse en los errores de alto impacto que necesitan atención.

### Estado de errores [#status]

Cuando clasifica su bandeja de entrada, puede elegir entre una variedad de estados. Puede optar por resolver los errores inmediatamente o incluso marcarlos para que se ignoren. En otros casos, es posible que desees resolver los problemas en la próxima versión o en una versión específica.

<Callout variant="tip">
  Las opciones **Resolve in next version** y **Resolve in specific version** solo se admiten si su equipo utiliza control de versiones semántico.
</Callout>

<img
  style={{ align: 'left',maxWidth: '100%' }}
  title="Screenshot showing resolve in version"
  alt="Screenshot showing resolve in version"
  src="/images/errors-inbox_screenshot-full_resolve-in-version.webp"
/>

<figcaption>
  En la Errors Inbox UI, puede indicar cuándo desea resolver los errores.
</figcaption>

Puede establecer uno de los siguientes estados y filtrar su bandeja de entrada por estado:

* **Sin resolver**: este es el estado predeterminado de los grupos de errores.

* **Resolver en la próxima versión**: le recomendamos que utilice este estado si espera resolver este grupo de errores en su próxima versión. Para habilitar esta opción, debe configurar [el seguimiento de cambios](/docs/change-tracking/change-tracking-introduction/#start-tracking) para su aplicación para que Errors Inbox pueda detectar una nueva versión y verificar que el grupo de errores realmente se haya resuelto. En el caso de que el grupo de errores aún se detecte en la próxima versión o en cualquier versión futura, el grupo de errores no se resolverá automáticamente, se marcará con una regresión y recibirás una notificación de Slack sobre la regresión.

* **Resolver en versión específica**: elija esta opción para resolver grupos de errores en estas situaciones:

  * Si sabe que el grupo de errores se resolverá en una versión específica
  * Si sabe que el grupo de errores se resuelve en una versión existente
  * Si desea ingresar a una versión específica

  Para habilitar esta opción, debe configurar [el seguimiento de versiones](/docs/errors-inbox/version-tracking/) para su aplicación o servicio. Si se detecta un error con una versión semántica equivalente o superior, el grupo de errores no se resolverá automáticamente, se marcará con una regresión y recibirás una notificación de Slack sobre la regresión.

* **Resolver**: configurar un grupo de errores como resuelto lo ocultará de la vista predeterminada de la bandeja de entrada a menos que se actualicen los filtros para incluir grupos de errores resueltos. Si se produce un evento que coincida con la huella digital del grupo de errores después de marcar un grupo de errores como resuelto, se restablecerá automáticamente el estado a **Sin resolver**. Esto puede resultar útil para identificar regresiones.

* **Ignorar**: esto ocultará el grupo de errores de la vista de la bandeja de entrada a menos que se actualicen los filtros para incluir el error omitido o hasta que deje de ignorar el grupo de errores.

### Error esperado [#expected]

Errors Inbox le permite filtrar los errores esperados para la entidad APM. Puede [marcar los errores como se esperaba](/docs/apm/agents/manage-apm-agents/agent-data/manage-errors-apm-collect-ignore-or-mark-expected#expected) y filtrarlos de su bandeja de entrada para eliminar el ruido.

* <DNT>
    **error.expected != true**
  </DNT>

  : Este es el valor predeterminado. Oculta todos los grupos de errores que solo tienen el error esperado y marca los grupos de errores que tienen una combinación de errores esperados e inesperados con la etiqueta "Contiene lo esperado".

* <DNT>
    **error.expected = true**
  </DNT>

  : este filtro mostrará grupos de errores donde se esperan algunos o todos los errores del grupo. Esto puede resultar útil para identificar qué errores están marcados como se esperaba.

* Al eliminar el filtro error.expected se mostrarán todos los grupos de errores, ya sea que contengan errores marcados como esperados o no.

* El error esperado siempre se elimina de la notificación.

* Todas las características anteriores, así como la etiqueta de error esperado, están disponibles en errores posteriores al 21 de enero de 2023.

## Error de detalles [#error-details]

<img
  title="Error group details page"
  alt="An image showing the details page of an error group"
  src="/images/errors-inbox_screenshot-crop_error-context.webp"
/>

Al hacer clic en un grupo de errores específico, accederá a la página de detalles del error, donde encontrará el contexto completo del problema. Este contexto puede ayudarle a clasificar el error y asignarlo al equipo o individuo correcto.

Así es como funcionan las distintas pestañas de la página de detalles:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="occurrences-tab"
    title="Pestaña de ocurrencias"
  >
    La pestaña <DNT>**Occurrences**</DNT> incluye no solo el número y la frecuencia de los errores, sino que también incluye información relacionada con la cuenta, el rastreo de la pila, el rastreo distribuido, [el contexto de inicio de sesión](/docs/logs/logs-context/logs-in-context) y el atributo de error.

    Desde la vista detallada, puede recorrer errores específicos usando el interruptor en la esquina superior derecha para navegar entre la primera instancia del error, la última o cualquier instancia intermedia.

    Si ha configurado [rastreo distribución](/docs/distributed-tracing/concepts/quick-start/) y si hay trazas de muestra relacionadas con errores, verá opciones para ver los detalles de la traza. Esta es una forma rápida de ver la información de la traza sin tener que ir a la página principal de rastreo distribuido:

    * En el panel izquierdo etiquetado como <DNT>**Distributed traces**</DNT>, puede expandir el encabezado para mostrar una lista de todas las trazas asociadas con errores en este grupo de errores. Alternativamente, puede hacer clic en <DNT>**Explore all**</DNT> para abrir una lista de todas las trazas.

      <img
        style={{ align: "left" }}
        title="Screenshot showing how to expand the list of traces"
        alt="Screenshot showing how to expand the list of traces"
        src="/images/errors-inbox_screenshot-crop_list-of-traces.webp"
      />

    * En el panel derecho con la etiqueta <DNT>**Distributed trace**</DNT>, verá la traza asociada con la ocurrencia de error que se muestra en esta página. Para ver los vanos de la traza en vista de cascada:

      * Haga clic directamente en el nombre de la traza o haga clic en el icono con una flecha a la derecha, que abre la vista de enfoque en cascada que resalta los tramos de la traza con errores.

        <img
          style={{ align: "left" }}
          title="Screenshot showing the trace related to your error"
          alt="Screenshot showing the trace related to your error"
          src="/images/errors-inbox_screenshot-crop_trace-for-error.webp"
        />

      * Haga clic en <DNT>**Explore**</DNT> para abrir una cascada sin filtrar donde puede hacer clic en todos los tramos.
  </Collapser>

  <Collapser
    className="freq-link"
    id="attributes"
    title="Pestaña de atributos"
  >
    La pestaña <DNT>**Attributes**</DNT> le ayuda a observar tendencias interesantes en todas las apariciones de errores dentro de un grupo de errores específico. Puede descargar esta información como un archivo CSV para su posterior análisis. Cuando hace clic en una barra de atributos, se representa una tabla que muestra el desglose de los atributos y los recuentos.

    También puedes enviar [atributo personalizado](/docs/data-apis/custom-data/custom-events/collect-custom-attributes/).

    <img
      title="Error group attributes tab"
      alt="An image showing the attributes tab inside an error group"
      src="/images/errors-inbox_screenshot-crop_error-context2.webp"
    />
  </Collapser>

  <Collapser
    className="freq-link"
    id="activity"
    title="Pestaña de actividad"
  >
    La pestaña <DNT>**Activity**</DNT> muestra un log de los cambios de estado y las asignaciones de usuarios de un grupo de errores.
  </Collapser>

  <Collapser
    className="freq-link"
    id="discussions"
    title="Pestaña de debates"
  >
    La pestaña <DNT>**Discussions**</DNT> ofrece espacio para una colaboración detallada y organizada. Esto es clave para involucrar a los colaboradores y garantizar que todo el equipo tenga el mismo contexto independientemente de dónde se sienten. Las discusiones incluyen:

    * <DNT>
        **Threaded conversations**
      </DNT>

      : responda directamente a los comentarios de nivel superior para vincular las respuestas a publicaciones específicas.

    * <DNT>
        **Comment deletion**
      </DNT>

      : Eliminar comentarios. El contenido de la publicación se eliminará a menos que sea el padre de un hilo, en cuyo caso el cuadro permanecerá con el mensaje. `Comment deleted by user.`

    * <DNT>
        **Markdown support**
      </DNT>

      : agregue estilo y enlaces a sus comentarios en Markdown.
  </Collapser>
</CollapserGroup>

## Asignar errores [#assign]

Puede asignar un grupo de errores a cualquier persona. Simplemente seleccione el usuario en el menú desplegable de asignación. También puede asignar un error a cualquier dirección de correo electrónico, incluso si no es un usuario de New Relic.

Puede actualizar el filtro en Errors Inbox para mostrar solo los errores asignados a usted o a un compañero de equipo.

## Rol de usuario en Errors Inbox [#user-roles]

Las restricciones de rol estándar (solo lectura, estándar, etc.) solo se aplican en los comentarios del grupo de errores característicos de Errors Inbox. Fuera de la capacidad de comentarios, no se aplican restricciones de roles. Por lo tanto, un usuario de solo lectura tiene la capacidad de asignar un grupo de errores dentro de una cuenta, fuera de la cuenta y actualizar los estados del grupo de errores (como ignorado, resuelto, no resuelto).
