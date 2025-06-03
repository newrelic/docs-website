---
title: Investigación de errores
metaDescription: Investigating errors using CodeStream.
freshnessValidatedDate: '2024-12-11T00:00:00.000Z'
translationType: machine
---

CodeStream le muestra errores para cualquier APM o servicio de monitoreo del navegador, incluidos los errores asignados a usted y los errores recientes que ocurren en el código abierto en su IDE. Puede controlar el plazo a través de la lista desplegable en el encabezado de esta sección. Tenga en cuenta que esta lista puede ser un subconjunto de los errores que se muestran en la [Errors Inbox](/docs/errors-inbox/errors-inbox/) de New Relic.

<img
  title="The list of recent errors in CodeStream."
  alt="A screenshot of the list of recent errors in CodeStream."
  src="/images/codestream_screenshot-crop_errors-list.webp"
/>

Simplemente haga clic en un error para profundizar en la causa raíz y colaborar con sus compañeros de equipo en la investigación.

<Video
  type="wistia"
  id="l65l4cqqhd"
/>

Haga clic en cualquier cuadro en el rastreo de la pila para saltar directamente al archivo y número de línea correspondiente. Si está [asociando referencias de git con sus errores](#buildsha), CodeStream abre una pestaña del editor de solo lectura del archivo que desencadenó el error en el entorno. Si no está asociando referencias de git, se abre una versión local del archivo. No podrá hacer clic en el rastreo de los marcos de pila que representan código que no forma parte de su repositorio (por ejemplo, una biblioteca externa).

Para errores en el monitoreo de los servicios del navegador, deberá [cargar mapas fuente](/docs/browser/browser-monitoring/browser-pro-features/upload-source-maps-un-minify-js-errors/) para que el rastreo de la pila pueda desminificarse, lo que le permitirá saltar al código de cada cuadro.

Mientras navega por el rastreo de la pila, puede encontrar el código que parece ser la fuente de su problema e iniciar una discusión con el botón de comentarios. CodeStream menciona automáticamente a la persona más reciente que tocó ese código, lo que le facilita incorporar a la discusión a las personas adecuadas.

<img
  title="A comment with the most recent code contributor automatically mentioned."
  alt="A screenshot of a comment with the most recent code contributor automatically mentioned."
  src="/images/codestream_screenshot-crop_error-auto-mention.webp"
/>

Una vez que haya identificado el problema, puede asignar el error o actualizar el estado del error de `unresolved` a `resolved` o `ignored`.

## Comenzando desde la Errors Inbox [#errors-inbox]

Puede acceder a esta misma experiencia de errores directamente desde un error en la [Errors Inbox](/docs/errors-inbox/errors-inbox/) en New Relic. Al ver un error con un rastreo del stack, haga clic en <DNT>**Open in IDE**</DNT> para ir directamente al código en su IDE.

<img
  title="A stack trace error in errors inbox with the &quot;Open in IDE button"
  alt="A screenshot of a stack trace error in errors inbox with the &quot;Open in IDE button.&quot;"
  src="/images/codestream_screenshot-crop_open-in-ide-codestream.webp"
/>

También tenga en cuenta que las discusiones se mantienen sincronizadas entre CodeStream y la Errors Inbox, por lo que puede participar desde cualquier ubicación.

### Asociar SHA de compilación o etiqueta de lanzamiento con errores [#buildsha]

Al ver un error en CodeStream, es posible que vea un SHA de compilación o una etiqueta de versión asociada con el error si no tiene una referencia de git. CodeStream utiliza la referencia de git para hacer coincidir el error de rastreo del stack específico con la versión del código que se ejecuta en el entorno que desencadenó el error. Si bien no necesita una referencia de git configurada para investigar el error, tenga en cuenta que es posible que no esté viendo la versión del código que lo causó.

<img
  title="The git reference not configured warning message."
  alt="A screenshot of the git reference not configured warning message."
  src="/images/codestream_screenshot-crop_build-sha-not-configured.webp"
/>

Puede utilizar una variable de entorno para que el agente New Relic <InlinePopover type="apm"/>conozca el [sha de confirmación](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection) asociado con cada compilación de su proyecto. También puede utilizar la [etiqueta de versión](https://git-scm.com/book/en/v2/Git-Basics-Tagging) asociada con la versión en ejecución de su software.

Para APM, la etiqueta de confirmación sha y/o liberación (`tags.commit` y `tags.releaseTag`) se agregan como atributo en los eventos `Transaction` y `TransactionError` . Puede utilizar variables de entorno APM para configurar estos atributos. Recomendamos configurar una o ambas de estas variables como parte de su canal de compilación:

* `NEW_RELIC_METADATA_COMMIT`: El compromiso sha. Puede incluirlo completo o solo los primeros siete caracteres (por ejemplo, `734713b`).
* `NEW_RELIC_METADATA_RELEASE_TAG`: una etiqueta de lanzamiento (como `v0.1.209` o `release-209`). Esto tiene la ventaja de ser legible por humanos.

Para obtener más información sobre cómo configurar estas variables, aquí hay detalles de configuración específicos para cada idioma:

* [Go](/docs/agents/go-agent/configuration/go-agent-configuration/)
* [Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file/)
* [.NET](/docs/agents/net-agent/configuration/net-agent-configuration/)
* [Node.js](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/)
* [PHP](/docs/agents/php-agent/configuration/php-agent-configuration/)
* [Python](/docs/agents/python-agent/configuration/python-agent-configuration/)

Si tiene referencias de git configuradas, CodeStream le informará si la versión del código en la que se encuentra localmente no contiene la referencia asociada con el error. En este caso, es posible que desee consultar la versión del código que contiene esa referencia para poder investigar y resolver el error de manera más efectiva.

<img
  title="The git reference not found warning message."
  alt="A screenshot of the git reference not found warning message."
  src="/images/codestream_screenshot-crop_build-sha-not-found.webp"
/>

CodeStream también le permitirá saber si el error no tiene un rastreo del stack asociado. Esto sucede con errores más antiguos cuando el rastreo del stack ha caducado en New Relic.
