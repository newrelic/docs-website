---
title: Funcionalidad específica de Drupal
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: 'Drupal websites: Use the newrelic.framework.drupal.modules INI setting to capture special metrics for modules, hooks, views, and browser instrumentation.'
freshnessValidatedDate: never
translationType: machine
---

El agente PHP captura métricas especiales para sitios web Drupal. Cuando se recopilan estas métricas, aparece una pestaña <DNT>**Drupal**</DNT> en la interfaz de usuario de New Relic: Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Drupal app)**</DNT>.

## Configuración

La colección de métricas específicas de Drupal se puede controlar mediante [`newrelic.framework.drupal.modules`](/docs/php/php-agent-phpini-settings#inivar-framework-drupal-modules). Está habilitado de forma predeterminada (en versiones <DNT>**3.0**</DNT> o superiores) y se puede deshabilitar con:

```ini
newrelic.framework.drupal.modules = 0
```

Aunque esta configuración utiliza la palabra "módulos", controla la colección de todas las métricas de Drupal: módulos, vistas y ganchos.

## Métrica

El agente PHP recopila métrica para lo siguiente:

* <DNT>
    **Modules**
  </DNT>

  : Versiones 2.5 o superiores. Estas métricas indican el tiempo empleado dentro de cada módulo Drupal. En las versiones 3.5 o superiores, el tiempo se calcula a partir de las funciones de envío de enlaces `module_invoke` y `module_invoke_all`. En versiones anteriores, el tiempo se calculaba a partir de funciones de un archivo con el nombre ".module". extensión donde el nombre del archivo y el prefijo de función coincidían.

* <DNT>
    **Hooks**
  </DNT>

  : Versiones 3.5 o superiores. Estas métricas indican el tiempo transcurrido dentro de cada gancho de Drupal. El tiempo se calcula a partir de las funciones de envío de ganchos `module_invoke` y `module_invoke_all`.

* <DNT>
    **Views**
  </DNT>

  : Versiones 3.5 o superiores. Estas métricas indican el tiempo transcurrido dentro del método `view::execute` de una vista.

## Instrumentación Drupal y browser . [#page-load-timing-rum]

En Drupal 7.15, <DNT>**Compress cached pages**</DNT> está activado de forma predeterminada. Si también selecciona <DNT>**Cache pages for anonymous users**</DNT>, el JavaScript <InlinePopover type="browser"/>no se inserta en las páginas servidas para usuarios anónimos. Esto se debe a que las páginas de Drupal se comprimen directamente desde la base de datos antes de almacenarlas en el caché (con gzip), por lo que el agente PHP de New Relic no tiene la posibilidad de analizar ningún HTML.

En esta situación, la instrumentación manual brinda una mejor oportunidad de capturar datos para usuarios anónimos. Para obtener más información, consulte [monitoreo del navegador y el agente PHP](/docs/php/page-load-timing-in-php).

## Tareas cron [#cron]

Drupal admite la ejecución periódica de tareas para realizar mantenimiento de rutina o trabajos similares en nombre de los módulos Drupal instalados. Estas tareas se pueden ejecutar sin ninguna participación manual más allá de la configuración inicial. Comúnmente, estas se conocen como [tareas cron](https://drupal.org/cron "El enlace se abre en una ventana nueva."). A partir de la versión 4.3, el agente PHP de New Relic detecta la ejecución de estas tareas y las marca automáticamente como [transacciones en segundo plano](/docs/features/monitoring-background-processes#ui) independientemente de cómo se iniciaron.
