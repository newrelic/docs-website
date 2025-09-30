---
title: Métrica a nivel de código
metaDescription: See performance data at the method level.
freshnessValidatedDate: '2024-03-14T00:00:00.000Z'
translationType: machine
---

Sin tener que buscarlos, los datos de rendimiento se muestran contextualmente en el editor para que puedan informar el trabajo en cuestión. Digamos que estás trabajando en la corrección de un error y notas que el área del código en la que estás trabajando tiene una tasa de errores elevada. Tal vez aborde ese problema como parte de la corrección de errores para que no se convierta en un problema mayor.

<img
  title="A CodeLens displaying error rate and average duration for a method."
  alt="A screenshot CodeLens displaying error rate and average duration for a method."
  src="/images/codestream_screenshot-crop_code-level-metrics-example.webp"
/>

CodeStream muestra la duración promedio y la tasa de errores, durante los últimos 30 minutos, en un CodeLens encima de cada método instrumentado por el agente New Relic APM . Para Visual Studio, se muestra un icono New Relic en el margen del editor en lugar de CodeLens. Las métricas se calculan para el servicio actualmente seleccionado en el panel CodeStream. Ampliar un servicio diferente y actualizar la métrica en consecuencia.

Haga clic en CodeLens para ver gráficos que visualizan cada una de las métricas. Si el repositorio está asociado con varios servicios de New Relic-monitor, puede cambiar fácilmente entre ellos. Esto cambia el servicio en el que se basan las métricas a nivel de código que se muestran tanto en los gráficos como en el editor, y también cambia la selección de servicio en el panel CodeStream.

<img
  title="Code-level metrics details showing charts and errors."
  alt="A screenshot of code-level metrics details showing charts and errors."
  src="/images/codestream_screenshot-crop_code-level-charts.webp"
/>

Junto con un gráfico de la tasa de errores, también verá una lista de los errores reales que ocurren en el mismo período de tiempo, incluida la cantidad de ocurrencias para cada uno. Si la tasa de error está aumentando y ve que un error en particular está causando el problema, puede hacer clic en él para ver el rastreo de la pila y [comenzar a colaborar](/docs/codestream/observability/error-investigation) en la resolución.

## Cobertura [#coverage]

El agente New Relic intenta recopilar automáticamente datos para funciones en clases vinculadas a solicitudes HTTP. En muchos casos, y con muchos marcos que utilizan un framework MVC, estos suelen ser métodos en una clase de Controlador.

Debido a que no todas las solicitudes del agente de New Relic se recopilan todo el tiempo, es posible que los métodos de poco tráfico no vean ningún dato. Si faltan datos para un método específico del que desea ver resultados, puede utilizar instrumentación personalizada para llenar los vacíos. Consulte la guía para [Java](/docs/apm/agents/java-agent/custom-instrumentation/java-custom-instrumentation), [.NET](/docs/apm/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation), [PHP](/docs/apm/agents/php-agent/features/php-custom-instrumentation), [Python](/docs/apm/agents/python-agent/custom-instrumentation/python-custom-instrumentation), [Ruby](/docs/apm/agents/ruby-agent/api-guides/ruby-custom-instrumentation), [Go](/docs/apm/agents/go-agent/instrumentation/instrument-go-transactions) y [Node.js.](/docs/apm/agents/nodejs-agent/extend-your-instrumentation/nodejs-custom-instrumentation)

Ejecute la siguiente consulta NRQL para identificar dónde podría ver CodeLenses con un nivel de código métrico para uno de sus servicios. Simplemente reemplace el valor de ejemplo `entity.guid` con el del servicio dado. En los resultados de la consulta, observe el atributo `code.*` para ver si alguno de ellos representa su código y no el código framework .

```
SELECT *
FROM Span
WHERE entity.guid = 'MXxBUE18QVBQTElDQVRJT058MjM' AND code.function is not null
SINCE 30 minutes ago LIMIT MAX
```

## Requisitos [#requirements]

Para ver los datos de rendimiento en el editor, su servicio debe cumplir con los requisitos que se enumeran a continuación y el servicio debe haber recopilado datos en los últimos 30 minutos.

* [rastreo distribuido](/docs/distributed-tracing/enable-configure/language-agents-enable-distributed-tracing) debe estar habilitado. rastreo distribuido está activado de forma predeterminada en las versiones recientes de todos los agentes, por lo que solo debes preocuparte por esto si has desactivado rastreo distribuido.

* <DNT>
    **Go:**
  </DNT>

  Requiere la versión 3.24.0 o superior del agente Go. Si está utilizando VS Code, también debe tener instalada la extensión [Go for VS Code](https://marketplace.visualstudio.com/items?itemName=golang.go) con el servidor de idiomas habilitado.

* <DNT>
    **Java:**
  </DNT>

  Requiere agente de Java versión 7.11.0 o superior. Las métricas a nivel de código solo están disponibles para proyectos implementados con un [frameworkJava compatible](/docs/apm/agents/java-agent/getting-started/compatibility-requirements-java-agent/#frameworks). Si está utilizando VS Code, también debe tener instalada la extensión [Language Support for Java by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java) . Tenga en cuenta que la compatibilidad con Kotlin solo está disponible en IntelliJ.

* <DNT>
    **.NET:**
  </DNT>

  Requiere la versión 10.2.0 o superior del agente .NET. Si está utilizando Visual Studio, asegúrese de tener CodeLenses habilitado yendo a

  <DNT>
    **Tools > Options > Text Editor > All Languages > CodeLens**
  </DNT>

  y asegurándose de que "Habilitar CodeLens" y "Mostrar CodeStream a nivel de código métrico" estén marcados. Si está utilizando VS Code, debe tener instalada la extensión [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) .

* <DNT>
    **Node.js:**
  </DNT>

  Requiere la versión 10.5.0 o superior del agente Node.js. Si su base de código incluye funciones anónimas, necesitará usar [el seguimiento de cambios](/docs/change-tracking/change-tracking-introduction/) para enviar información de despliegue a New Relic, o deberá [enviar su SHA de compilación a través de una variable de entorno](/docs/codestream/observability/error-investigation/#buildsha) en su canal de compilación.

* <DNT>
    **PHP:**
  </DNT>

  Requiere la versión 10.6.0 o superior del agente PHP.

* <DNT>
    **Python:**
  </DNT>

  Requiere la versión 7.10.0.175 o superior del agente Python. Las métricas a nivel de código solo están disponibles para proyectos implementados con un [framework Python compatible](/docs/apm/agents/python-agent/getting-started/instrumented-python-packages) y para PHP versión 7.0 o superior. Si está utilizando VS Code, también debe tener instalada la extensión [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) con el servidor de idiomas habilitado.

* <DNT>
    **Ruby:**
  </DNT>

  Requiere la versión 8.10.0 o superior del agente Ruby. Las métricas a nivel de código solo están disponibles para la aplicación Rails y los métodos Ruby con traza manual ([obtenga más información sobre los métodos Ruby y CodeStream](/docs/apm/agents/ruby-agent/features/ruby-codestream-integration)). Si está utilizando VS Code, también debe tener instalada la extensión [Ruby](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby) o [Ruby Solargraph](https://marketplace.visualstudio.com/items?itemName=castwide.solargraph) con el servidor de idiomas habilitado.

Puede desactivar CodeLenses yendo a la sección CodeStream de la configuración de su IDE y desmarcando la configuración <DNT>**CodeStream: Show Golden Signals In Editor**</DNT> .
