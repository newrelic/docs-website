---
title: Guía para mejorar el rendimiento de carga de la página
tags:
  - Observability maturity
  - Customer experience
  - Digital customer experience
  - Implementation guide
  - Core web vitals
  - Page load
  - Page render
metaDescription: Guide on how to improve page load and render metrics.
freshnessValidatedDate: never
translationType: machine
---

La medición del rendimiento de carga de páginas continúa evolucionando. Para mejorar el rendimiento general y la experiencia del usuario, es útil comprender las diferentes métricas y cómo se relacionan entre sí.

<img
  title="Page Load and Render Timings"
  alt="Page Load and Render Timings"
  src="/images/cx_diagram_page_load_render_timings.webp"
/>

Antes de seguir las instrucciones que aparecen a continuación, limite su alcance a páginas específicas que esté intentando mejorar. Para lograr el máximo impacto, concéntrese en las páginas a las que se accede con frecuencia pero que tienen una puntuación inferior a la aceptada para el percentil 75 de usuarios.

## KPI de carga de página

Cómo mejorar el tiempo hasta el primer byte (TTFB):

El tiempo hasta el primer byte mide el tiempo desde el inicio de la navegación (un usuario hace clic en un enlace) hasta que el browser recibe el primer byte de la respuesta del servidor. Si un usuario en el percentil 75 experimenta un TTFB superior a 0,5 s para una o más de sus páginas, puede desglosar aún más los tiempos consultando el siguiente atributo en [PageView](/attribute-dictionary/?dataSource=Browser+agent&event=PageView):

* `backendDuration`
* `connectionSetupDuration`
* `dnsLookupDuration`
* `networkDuration`

A menudo, la lentitud antes de la renderización se debe a la lentitud en el backend, ya sea por API de terceros o por aplicaciones de backend.

El monitoreo sintético de API de terceros ayuda a los equipos de operaciones y desarrollo a comprender cuándo la causa raíz está fuera de su control. Incluso si no puede controlar el código, puede influir en el resultado compartiendo los resultados de Sintético con terceros para ayudarles a comprender lo que están experimentando sus clientes.

Si la aplicación backend es de su propiedad o de su equipo, puede utilizar <InlinePopover type="apm"/>agente, Pixie u OpenTelemetry para comprender y administrar el rendimiento. Para facilitar la comunicación entre equipos, recomendamos implementar administración a nivel de límites de servicio.

## Cambio de diseño acumulativo (CLS)

El cambio de diseño acumulativo es una puntuación que indica cuánto contenido cambia una vez que ya se ha cargado. Consejos y trucos generales para mejorar CLS:

* Especifique dimensiones para las hojas de estilo y deje que el CSS predeterminado del browser controle la relación de aspecto.
* Reserve espacio estáticamente para espacios publicitarios.
* Evite los anuncios cerca de la parte superior de la ventana gráfica.
* Evite insertar contenido nuevo encima del contenido existente.
* Calcule previamente suficiente espacio para incrustaciones.

Recursos adicionales:

* [El enfoque de Google para la optimización CLS](https://web.dev/optimize-cls/).
* [Lighthouse](https://developers.google.com/web/tools/lighthouse) es una herramienta de Google que ejecuta una prueba sintética en una página específica y proporciona una lista de recomendaciones que incluyen cómo optimizar CLS.

## Pintura con contenido más grande (LCP)

La pintura con contenido más grande mide la diferencia entre el inicio de la representación de la página hasta el momento de pintar el elemento de contenido más grande. Causas comunes de un LCP lento, según [web.dev](https://web.dev):

* Tiempo de respuesta del servidor lento
* JavaScript y CSS que bloquean el renderizado
* Tiempos de carga de recursos lentos
* Representación del lado del cliente

Utilice [la información del rastreo de sesión del navegador](/docs/browser/browser-monitoring/browser-pro-features/session-traces-explore-webpages-life-cycle/) para comprender cuál de las causas comunes anteriores influye en la página en particular que está intentando optimizar.

Enfoques para mejorar el LCP:

* Utilice CDN y preste atención al almacenamiento en caché y al rendimiento del servidor perimetral.
* Establezca conexiones de terceros con anticipación.
* Retrasar Javascript y CSS no críticos.

Recursos adicionales:

* [El enfoque de Google para la optimización LCP](https://web.dev/optimize-lcp/).
* [Lighthouse](https://developers.google.com/web/tools/lighthouse) es una herramienta de Google que ejecuta una prueba sintética en una página específica y proporciona una lista de recomendaciones que incluyen cómo optimizar CLS.

## Interacción con la siguiente pintura (INP) [#INP]

La interacción con la siguiente pintura (INP) calcula cuándo un usuario interactúa con una página mediante clics, toques e interacción del teclado con una página a lo largo de su vida útil. Es una métrica de campo que varía según el comportamiento real del usuario (los resultados varían según la impaciencia del usuario y el tiempo de acción), pero se puede optimizar reduciendo el tiempo total de bloqueo (TBT).

Para hacer esto, necesitas:

* Divida las tareas de bloqueo largas.
* Optimice el JavaScript inflado.
* Mire el lado del servidor de lógica móvil y/o utilice trabajadores web para ejecutar subprocesos en segundo plano.

Utilice [la información del rastreo de sesión del navegador](/docs/browser/browser-monitoring/browser-pro-features/session-traces-explore-webpages-life-cycle/) para comprender dónde se producen los intervalos de bloqueo y cuánto duran.

Recursos adicionales:

* [El enfoque de Google para la optimización INP](https://web.dev/articles/optimize-inp).
* [Lighthouse](https://developers.google.com/web/tools/lighthouse) es una herramienta de Google que ejecuta una prueba sintética en una página específica y proporciona una lista de recomendaciones que incluyen cómo optimizar INP.
