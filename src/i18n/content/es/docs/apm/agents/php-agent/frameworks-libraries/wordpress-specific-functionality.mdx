---
title: Funcionalidad específica de WordPress
tags:
  - Agents
  - PHP agent
  - Frameworks and libraries
metaDescription: 'WordPress websites: Use the newrelic.framework.wordpress.hooks INI setting to capture special metrics for hooks, plugins, and themes with New Relic.'
freshnessValidatedDate: never
translationType: machine
---

Si [instala New Relic para sitios web de WordPress](/docs/agents/php-agent/installation/install-php-agent-shared-hosting-service), el agente PHP recibe métrica adicional. Aparece una página <DNT>**WordPress**</DNT> en la interfaz de usuario de New Relic: Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a WordPress app)**</DNT>.

## Configuración

Puedes controlar qué métrica específica de WordPress envía tu aplicación a New Relic utilizando la configuración `ini` `newrelic.framework.wordpress.hooks` del agente PHP. Esto está habilitado de forma predeterminada en las versiones <DNT>**5.3**</DNT> o superiores y se puede deshabilitar con:

```ini
newrelic.framework.wordpress.hooks = false
```

Aunque esta configuración usa la palabra `.hooks`, controla la captura de todas las métricas específicas de WordPress.

La nueva versión 10.16 de PHP de Relic agente agrega la configuración `newrelic.framework.wordpress.hooks.options` `ini` que permite ajustar qué métricas específicas de WordPress y qué datos se envían en esas métricas. Esta configuración acepta los siguientes valores: `"all_callbacks"`, `"plugin_callbacks"` y `"threshold"`. De forma predeterminada, todas las funciones de devolución de llamada de gancho están instrumentadas (`newrelic.framework.wordpress.hooks.options="all_callbacks"`). Las configuraciones `"plugin_callbacks"` y `"threshold"` permiten reducir la sobrecarga del agente ajustando los datos recopilados por el agente. Configurar `newrelic.framework.wordpress.hooks.options` en `"plugin_callbacks"` limita la instrumentación a solo el complemento/tema de devolución de llamada. Establecer `newrelic.framework.wordpress.hooks.options` en `"threshold"` deshabilita el monitoreo de complementos/temas y, en este modo de operación, el agente PHP New Relic solo registra la ejecución de enlaces que exceden `newrelic.framework.wordpress.hooks.threshold` (1 ms es el umbral predeterminado).

## Métrica

El agente PHP recibe métrica por lo siguiente:

* <DNT>
    **Hooks**
  </DNT>

  : Estas métricas indican el tiempo invertido dentro de cada gancho de WordPress. El tiempo se calcula a partir de las funciones de envío de ganchos `apply_filters`, `apply_filters_ref_array`, `do_action` y `do_action_ref_array`. Cuando `newrelic.framework.wordpress.hooks.options="all_callbacks"` esto incluye la devolución de llamada principal de WordPress. Cuando `newrelic.framework.wordpress.hooks.options="plugin_callbacks"` esto incluye solo devolución de llamada de complementos/temas. En ambos casos la cuenta métrica indica el número de devolución de llamada llamada. Sin embargo cuando `newrelic.framework.wordpress.hooks.options="threshold"`, el conteo métrico indica la cantidad de veces que se ejecutó un gancho.

* <DNT>
    **Plugins and themes**
  </DNT>

  : Estas métricas indican el tiempo dedicado a cada complemento y tema de WordPress. El tiempo se calcula a partir de las funciones de envío de los ganchos. Esta métrica solo se genera cuando `newrelic.framework.wordpress.hooks.options` es `"all_callbacks"` o `"plugins_only"`.

## Integración con socios de New Relic [#integration]

Al integrar su aplicación de WordPress con APM, puede ver el rendimiento directamente desde la página <DNT>**Administration**</DNT> de su aplicación de WordPress. Por ejemplo, [W3 Total Cache](https://newrelic.com/blog/best-practices/web-performance-optimization-automation) es uno de los socios de New Relic que se especializa en aplicaciones de WordPress.
