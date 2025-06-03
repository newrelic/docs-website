---
title: Introducción a New Relic para PHP
tags:
  - Agents
  - PHP agent
  - Getting started
metaDescription: 'For an overview of New Relic''s PHP agent (compatibility, requirements, installation, configuration, troubleshooting, known issues), start here.'
freshnessValidatedDate: never
translationType: machine
---

Nuestro agente PHP monitorea su aplicación para ayudarlo [a identificar y resolver problemas de rendimiento](#monitor-performance). También puede ampliar el monitoreo del rendimiento del agente para [recopilar y analizar datos comerciales](#business-data) para ayudarlo a mejorar la experiencia de los clientes y tomar decisiones comerciales impulsadas por datos.

Utilice el agente PHP de New Relic para resolver los problemas de rendimiento de su aplicación con nuestro [tutorial Mi aplicación es lenta](/docs/journey-app-slow/root-causes/).

## monitor el rendimiento de la aplicación [#monitor-performance]

<img
  title="PHP - APM Summary"
  alt="PHP - APM Summary"
  src="/images/apm_screenshot-full_php-summary-page.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Summary**</DNT>: Después de instalar el agente PHP, vea un resumen del rendimiento de su aplicación.
</figcaption>

<DNT>
  **View the big picture of your app**
</DNT>

* monitor [el Apdex de su aplicación (satisfacción del usuario)](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction)
* Obtenga un [resumen de alto nivel de su aplicación](/docs/apm/applications-menu/monitoring/apm-overview-page)
* Crea [mapas arquitectónicos](/docs/data-analysis/user-interface-functions/view-your-data/service-maps-visualize-monitor-apps-entire-architecture) de tu aplicación

<DNT>
  **Find errors and problems quickly**
</DNT>

* Seguimiento [de clave de transacción](/docs/apm/transactions/key-transactions/key-transactions-tracking-important-transactions-or-events)
* [Busque y cree gráficos personalizables](/docs/insights/new-relic-insights/explore/metric-explorer-search-chart-metrics-sent-new-relic-agents) para el intervalo de tiempo de datos métricos más importantes para usted, incluida cualquier [métrica personalizada](/docs/agents/manage-apm-agents/agent-data/custom-metrics) que envíe a New Relic.
* [alerta](/docs/alerts/alert-policies/understanding-alert-policies/alerting-new-relic) a tu equipo cuando ocurren errores o problemas antes de que afecten a tu usuario
* Seguimiento del rendimiento [después de un despliegue](/docs/agents/php-agent/features/recording-deployments-using-php-script)

<DNT>
  **Drill down into performance details**
</DNT>

* Examinar [la traza de la transacción](/docs/apm/transactions/transaction-traces/transaction-traces)a nivel de código
* Examinar [consulta de la base de datos traza](/docs/apm/transactions/transaction-traces/sql-statements)
* Examinar [error traza](/docs/apm/applications-menu/events/viewing-apm-errors-error-traces)

<DNT>
  **View logs for your infrastructure data**
</DNT>

Reúna los datos de su registro y de la aplicación para que la resolución de problemas sea más fácil y rápida. No es necesario cambiar a otra página de UI.

* Con [el contexto de inicio de sesión](/docs/logs/logs-context/configure-logs-context-php/), puede ver el mensaje de registro relacionado con sus errores y la traza directamente en UI de su aplicación.
* También puede ver el inicio de sesión en el contexto de [los datos de su infraestructura](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/), como el clúster de Kubernetes.

<DNT>
  **Analyze business data**
</DNT>

Utilice el agente PHP para organizar, consultar y visualizar sus datos para responder preguntas clave sobre el rendimiento de la aplicación y la experiencia de los clientes.

* Utilice [el atributo de transacción predeterminado](/docs/insights/new-relic-insights/decorating-events/apm-default-attributes-insights) o [agregue el suyo propio](/docs/insights/new-relic-insights/decorating-events/insights-custom-attributes)
* consulta tus datos [mediante NRQL](/docs/insights/new-relic-insights/using-new-relic-query-language/using-nrql)
* Envía [tus propios datos del evento](/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events-new-relic-apm-agents#php-att)
* Cree y comparta [un panel](/docs/insights/new-relic-insights/managing-dashboards-data)interactivo y personalizable

## Arquitectura

El agente PHP tiene dos binarios que trabajan juntos para reenviar datos a New Relic:

* El agente maneja la instrumentación automática y API de su código PHP.
* El daemon actúa como un proxy entre el agente y la plataforma New Relic.

Puede conectar hasta 500 aplicaciones/agente a un daemon. El daemon impone [el muestreo](/docs/agents/manage-apm-agents/agent-data/new-relic-events-limits-sampling) cuando se alcanzan los límites del ciclo de recolección, así que considere esto al decidir cuántas aplicaciones/agentes conectar a un solo daemon.

<Callout variant="tip">
  La cantidad de aplicaciones/agentes por daemon puede ser menor cuando se ejecuta en un contenedor Docker separado, dependiendo de la capacidad de la conexión entre contenedores.
</Callout>

<img
  title="PHP agent diagram"
  alt="This diagram shows the flow of data from the PHP agent to New Relic."
  src="/images/apm_diagram_php-agent-diagram.webp"
/>

<figcaption>
  El flujo de datos desde su aplicación PHP a New Relic.
</figcaption>

El flujo de trabajo entre su aplicación y New Relic debe ocurrir en este orden:

1. El agente establece una conexión de socket con el daemon enviando la primera carga útil de datos de instrumentación.
2. El daemon establece un enlace HTTPS con la plataforma New Relic. El daemon debe invocarse antes de que se invoque su aplicación instrumentada. Esto se llama [modo agente](/docs/agents/php-agent/advanced-installation/starting-php-daemon-advanced) y es el predeterminado.

Para evitar perder datos reportados, asegúrese de que su aplicación instrumentada no envíe transacciones antes de que se establezcan ambas conexiones.

## Instalar el agente [#installation]

Antes de instalar el agente PHP, asegúrese de que su sistema cumpla con el [requisito del sistema](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements). El agente PHP admite muchos de los [marcos](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#frameworks), [bases de datos](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#databases) y [bibliotecas](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#databases) de PHP más comunes. También puede utilizar el agente en un [entorno flexible de Google App Engine (GAE)](/docs/agents/php-agent/advanced-installation/install-new-relic-php-agent-gae-flexible-environment).

<Callout variant="tip">
  Si está [instalando el agente en un servicio de alojamiento compartido](/docs/agents/php-agent/installation/install-php-agent-shared-hosting-service), asegúrese de tener permisos de root para instalar el agente o comuníquese con su proveedor de alojamiento para obtener asistencia técnica.
</Callout>

Para instalar el agente, primero [regístrese en New Relic](https://newrelic.com/signup) . Una vez que inicie sesión, use nuestro iniciador o consulte las instrucciones para una instalación específica.

<ButtonLink
  role="button"
  to="https://one.newrelic.com/marketplace/install-data-source?state=d1b7b1cb-4089-8af0-16b2-86c7072e2cae"
  variant="primary"
>
  Agregar datos PHP
</ButtonLink>

Para <DNT>**standard installations**</DNT>, consulte:

* [Descripción general de la instalación del agente PHP](/docs/agents/php-agent/installation/php-agent-installation-overview) (los pasos de instalación básicos para las configuraciones más comunes).
* [Instalación en RedHat o CentOS](/docs/agents/php-agent/installation/php-agent-installation-redhat-and-centos)
* [Instalación en Ubuntu o Debian](/docs/agents/php-agent/installation/php-agent-installation-ubuntu-and-debian)
* [Instalación con archivo tar](/docs/agents/php-agent/installation/php-agent-installation-tar-file) (método genérico para usar en cualquier sistema compatible, como variantes de Linux, OpenSolaris, SmartOS, FreeBSD, macOS, etc.)
* [El script newrelic-install](/docs/agents/php-agent/installation/newrelic-install-script) (cómo utilizar el script interactivo que automatiza algunas tareas de instalación)

Para otros tipos de instalación de PHP y temas <DNT>**advanced installation**</DNT> , consulte:

* [Instalación del agente PHP: PHP no estándar](/docs/agents/php-agent/installation/php-agent-installation-non-standard-php)
* [Iniciar el daemonPHP](/docs/agents/php-agent/installation/starting-php-daemon-advanced) (una instalación estándar de New Relic inicia el daemon automáticamente, pero también puede [daemon manualmente](/docs/agents/php-agent/installation/starting-php-daemon-advanced#selecting-external))
* [Modo silencioso para el script de instalación](/docs/agents/php-agent/installation/running-php-install-script-silent-mode)
* [Instalación del entorno flexible de Google App Engine (GAE)](/docs/agents/php-agent/advanced-installation/install-new-relic-php-agent-gae-flexible-environment) para el agente PHP de New Relic

## Configurar el agente [#configuration]

El agente incluye una variedad de [opciones de configuración](/docs/agents/php-agent/configuration/php-agent-configuration) para personalizar y ajustar aún más su instalación.

<Callout variant="tip">
  La parte más importante de la configuración del agente es darle a su aplicación un [nombre descriptivo](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-appname). New Relic [usa el nombre de esta aplicación para métrica agregada](/docs/agents/manage-apm-agents/app-naming/name-your-application#app-name) cuando tienes varias aplicaciones o hosts.
</Callout>

Después de cambiar las opciones de configuración del agente, reinicie su servidor web.

## Ampliar la instrumentación del agente [#extend]

Después de instalar el agente, vaya más allá y amplíe la instrumentación del agente:

* [Tiempo de carga de la página](/docs/agents/php-agent/features/page-load-timing-php): integre el agente PHP con

  <InlinePopover type="browser">
    [](/docs/browser/new-relic-browser/getting-started/new-relic-browser)
  </InlinePopover>

  para obtener visibilidad de la actividad del usuario final.

* [instrumentación personalizada](/docs/agents/php-agent/features/php-custom-instrumentation): transacción instrumentada no capturada como parte de nuestro framework de instrumentación.

* [API del agente](/docs/agents/php-agent/configuration/php-agent-api): utilice la API del agente para personalizar el comportamiento del agente. Por ejemplo, puede recopilar métricas personalizadas, marcar un error o ignorar por completo una transacción en particular.

* [Atributo de agente](/docs/agents/php-agent/attributes/php-agent-attributes): Personaliza el [atributo](/docs/agents/manage-apm-agents/agent-metrics/agent-attributes) adjunto a la transacción. La personalización de atributos le permite evitar el envío de atributos sensibles o recopilar atributos adicionales para una visibilidad más profunda de su transacción.

## Solucionar problemas de su instalación [#troubleshoot]

Si tiene problemas, consulte los documentos de resolución de problemas del agente PHP. Algunos de los documentos de resolución de problemas más importantes en esa sección incluyen:

* [No aparecen datos (PHP)](/docs/agents/php-agent/troubleshooting/no-data-appears-php)
* [Determinar los requisitos de permisos](/docs/agents/php-agent/troubleshooting/determining-permissions-requirements)
* [La configuración INI no tiene efecto inmediatamente](/docs/agents/php-agent/troubleshooting/ini-settings-not-taking-effect-immediately)
* [Por qué y cuándo reiniciar su servidor web (PHP)](/docs/agents/php-agent/troubleshooting/why-when-restart-your-web-server-php)
