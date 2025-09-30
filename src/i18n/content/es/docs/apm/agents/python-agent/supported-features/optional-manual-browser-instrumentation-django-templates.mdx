---
title: Instrumentación manual opcional browser con plantillas Django.
tags:
  - Agents
  - Python agent
  - Supported features
metaDescription: Python agent (Django) instrumentation with browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

El agente de Python puede agregar automáticamente <InlinePopover type="browser"/>a las respuestas de cualquier página HTML. Para el marco web Python más popular, incluidos Django, Flask y Pyramid, utilice [la instrumentación automática browser ](/docs/agents/python-agent/supported-features/page-load-timing-python).

Si necesita utilizar instrumentación manual con plantillas de Django, puede registrarse manualmente y utilizar la biblioteca de etiquetas `newrelic_tags` .

## Agregar etiqueta de plantilla Django [#django_template_tags]

Siga este procedimiento <DNT>**only**</DNT> si necesita utilizar instrumentación manual para insertar el agente de monitoreo de navegador en lugar de la [instrumentación automática](/docs/agents/python-agent/supported-features/page-load-timing-python) del agente Python.

Para que esta biblioteca de etiquetas de plantilla esté disponible, debe [agregar manualmente `newrelic.extras.framework_django`](/docs/release-notes/agent-release-notes/python-release-notes/python-agent-110192) a la lista de `INSTALLED_APPS` en los archivos de configuración de su proyecto Django.

1. En la parte superior del archivo de plantilla, agregue una referencia a la biblioteca de etiquetas a la lista de bibliotecas de etiquetas que carga la macro de carga.

   ```
   {% load ... newrelic_tags %}
   ```

2. Agregue lo siguiente lo más cerca posible del inicio del elemento `<head>` de la página de plantilla. Coloque esta <DNT>**after**</DNT> cualquier metaetiqueta que especifique una propiedad de juego de caracteres o cualquier `http-equiv` metaetiqueta para `X-UA-Compatible`.

   ```
   {% newrelic_browser_timing_header %}
   ```

3. Al final del elemento `<body>` de la página de plantilla, agregue:

   ```
   {% newrelic_browser_timing_footer %}
   ```
