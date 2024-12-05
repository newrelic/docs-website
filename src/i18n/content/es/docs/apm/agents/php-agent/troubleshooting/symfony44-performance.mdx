---
title: Symfony 4.4 sobrecarga con opcache.preload
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
  - Symfony 4.4
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Cuando usas Symfony 4.4, experimentas grandes impactos en el rendimiento cuando `opcache.preload` está activo.

## Solución [#solution]

1. En su archivo `newrelic.ini` , configure `newrelic.preload_framework_library_detection = false`.

2. Asegúrese de que [la configuración de precarga sea compatible con Symfony](https://symfony.com/doc/current/performance.html#use-the-opcache-class-preloading).

   <Callout variant="tip">
     Si está utilizando PHP 7.4, consulte:

     * [Documentación de precarga de PHP 7.4 de Symfony](https://symfony.com/blog/new-in-symfony-4-4-preloading-symfony-applications-in-php-7-4)
     * [Precargando la aplicación Symfony en PHP 7.4](https://symfonycasts.com/screencast/symfony5-upgrade/preload)
   </Callout>

3. Reinicie su servicio.

## Causa [#cause]

Cuando `newrelic.preload_framework_library_detection` y `opcache.preload` están habilitados, consultamos el estado de `opcache` con cada llamada de función. Sin embargo, hay varios problemas relacionados con el uso de Symfony 4.4 que pueden provocar que esta consulta devuelva `null`. Esto sucede constantemente y causará una sobrecarga significativa en el agente PHP de New Relic.

Actualmente, este problema solo ha sido reportado por entornos que utilizan Kubernetes.
