---
title: La configuración INI no tiene efecto inmediatamente
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: 'If you change INI settings for your New Relic PHP agent, restart your web server to ensure the new settings take effect properly.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Los cambios en el archivo `newrelic.ini` no entran en vigor de inmediato.

## Solución

Reinicie su servidor web (Apache, Nginx, PHP-FPM, etc.) después de realizar cambios en la configuración de INI.

## Causa

Cuando su servidor web (Apache, Nginx, PHP-FPM, etc.) se inicia e inicializa PHP por primera vez, lee todas las configuraciones INI. También establece los valores predeterminados globales para cualquier configuración que falte.

Luego, Apache crea un grupo de procesos "trabajadores" para manejar las solicitudes. Estos procesos de trabajo heredan la configuración establecida durante la inicialización. No tiene forma de saber exactamente qué proceso de trabajo se ocupará de una solicitud determinada. Cuando realiza cambios en el archivo INI, es posible que todavía queden cientos de procesos de trabajo con la configuración anterior, y el proceso principal de Apache (que periódicamente eliminará los procesos de trabajo existentes y generará nuevos) también tiene la configuración INI original.

Hasta que reinicie su servidor Apache, la mayoría de los cambios en sus archivos INI pasarán desapercibidos. La única excepción es si utiliza el mecanismo de configuración "por directorio" de PHP utilizando archivos `.htaccess` . Estos entornos son raros.
