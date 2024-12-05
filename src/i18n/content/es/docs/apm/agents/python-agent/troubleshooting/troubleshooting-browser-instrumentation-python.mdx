---
title: Resolución de problemas de instrumentación browser en Python
type: troubleshooting
tags:
  - Agents
  - Python agent
  - Troubleshooting
metaDescription: Troubleshooting procedures if you have problems injecting the browser agent via New Relic's Python agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Si tiene problemas [al instrumentar el navegador](/docs/agents/python-agent/supported-features/page-load-timing-python) con el agente Python, siga los [procedimientos estándar de resolución de problemas](/docs/browser/new-relic-browser/installation-configuration/troubleshooting-browser-monitoring-installation) para <InlinePopover type="browser"/>. A continuación se ofrecen algunos consejos adicionales para Python.

## Solución

Siga estas recomendaciones para verificar la estructura del contenido y verificar que la compresión del contenido no interfiera.

<CollapserGroup>
  <Collapser
    id="solution-content"
    title="Verifique la estructura del contenido."
  >
    Si espera ver el agente del navegador agregado automáticamente pero no lo hace, verifique si se aplica alguna de estas restricciones.

    * El `Content-Type` de la respuesta HTML debe ser `text/html`.

    * No se puede configurar el encabezado de respuesta `Content-Encoding` .

    * El encabezado de respuesta `Content-Disposition` no puede marcar la respuesta como un archivo adjunto.

    * El `Content-Disposition` especificado en una metaetiqueta `http-equiv` dentro del elemento HTML`<head>` no puede marcar la respuesta como un archivo adjunto.

    * El elemento `<body>` de la respuesta HTML debe aparecer dentro de los primeros 64 kbytes.

      Si está generando respuestas de página HTML y utiliza el `Content-Type` de `application/xhtml+xml`, puede anular los tipos de contenido permitidos para enumerar este tipo de contenido y `text/html` en su archivo de configuración del agente.

      ```
      browser_monitoring.content_type = text/html application/xhtml+xml
      ```

      Asegúrese de que `browser_monitoring.content_type`sea una lista de tipos de contenido separados por espacios.

      Al agregar `application/xhtml+xml` como tipo de contenido permitido para la instrumentación automática, tenga en cuenta que la página resultante ya no se validará correctamente como `application/xhtml+xml`, aunque el navegador aún debe cargar y representar correctamente la página.

      Para resolver problemas con otras limitaciones de contenido, utilice [la instrumentación manual](/docs/agents/python-agent/supported-features/page-load-timing-python#manual_instrumentation).
  </Collapser>

  <Collapser
    id="solution-compression"
    title="Verifique que la compresión del contenido no esté interfiriendo."
  >
    Si está utilizando un middleware WSGI o framework web o un complemento que codifica el contenido de la respuesta, como cuando se realiza la compresión de respuestas, es posible que la instrumentación automática no funcione. El agente Python proporciona soporte específico para Django `GZipMiddleware` y `Flask-Compress` con instrumentación automática. Sin embargo, actualmente esto no es compatible con `paste.gzipper` porque contiene un error que lo hace inutilizable junto con el middleware WSGI del agente que agrega la instrumentación de monitoreo del navegador.

    Si encuentra este problema, utilice [la instrumentación manual](/docs/agents/python-agent/supported-features/page-load-timing-python#manual_instrumentation) o cambie y utilice su servidor web o proxy de interfaz para comprimir el contenido de la respuesta, en lugar de realizar la compresión dentro de su aplicación web. Esta última solución también puede ofrecer beneficios de rendimiento.
  </Collapser>

  <Collapser
    id="solution-compression"
    title="Verifique la fuente de la página para ver los bloques condicionales."
  >
    Al inspeccionar la fuente de su página, verá el agente del navegador insertado incorrectamente dentro de un bloque condicional.

    ```
    <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <script type="text/javascript">/*Browser agent here*/</script>
    <![endif]-->
    ```

    Esto puede suceder porque el agente Python no verifica estos bloques condicionales cuando decide colocar el agente del navegador. Considere utilizar [instrumentación manual](/docs/agents/python-agent/supported-features/page-load-timing-python#manual_instrumentation) en este caso.
  </Collapser>
</CollapserGroup>
