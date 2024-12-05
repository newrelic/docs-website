---
title: Conecte hosts a su cuenta
tags:
  - Agents
  - Ruby agent
  - Configuration
metaDescription: 'To control which hosts connect to your New Relic account, use environment-specific settings in your Ruby agent''s config file.'
freshnessValidatedDate: never
translationType: machine
---

Puede controlar qué hosts se conectan a su cuenta utilizando configuraciones específicas del entorno en el archivo de configuración del agente New Relic. Puede establecer algunas propiedades de configuración para todos sus entornos o modificarlas para un entorno individual. Para obtener más información sobre el archivo de configuración y dónde encontrarlo, consulte la [documentación de configuración](/docs/site/configuring-the-agent) de su agente.

## Configuración por defecto [#default]

Muchos clientes de New Relic utilizan una configuración común en múltiples entornos (por ejemplo, de prueba y producción), pero solo pueden ejecutar New Relic en hosts en uno de esos entornos. Puede utilizar configuraciones específicas del entorno para aislar qué hosts informan a New Relic.

Las configuraciones predeterminadas para entornos comunes aparecen en la parte inferior del archivo de configuración. Aquí hay un ejemplo de producción y prueba:

```
staging:
  <<: *default_settings
  app_name: <%= app_name %> (Staging)

production:
  <<: *default_settings
```

## Configuraciones personalizadas [#customized]

Puede editar estas configuraciones según sea necesario. También puede agregar secciones de entorno personalizadas para situaciones únicas. Por ejemplo, [YAML](http://en.wikipedia.org/wiki/YAML%23Data_merge_and_references "El enlace se abre en una ventana nueva.") proporciona referencias de nodos ( `*` ) y fusiones hash (`<<`) que hacen referencia a un nodo etiquetado con una etiqueta de anclaje (`&`). El archivo de configuración predeterminado del agente New Relic se envía con opciones de configuración comunes configuradas en la etiqueta `&default_settings` , pero puede crear el suyo propio para compartir opciones de configuración entre entornos.

Para controlar qué hosts pueden conectarse a su cuenta, establezca `monitor_mode` en verdadero o falso en el entorno adecuado. Para que sus hosts de prueba se conecten a una cuenta y sus hosts de producción se conecten a otra cuenta, configure el `license_key` en cada entorno de acuerdo con cómo le gustaría que se conecten. Como puede ver en la captura de pantalla anterior, también puede configurar `app_name` y cualquier otra configuración que desee específica para un entorno determinado.

## Ambientes

El agente New Relic determina el entorno donde se ejecuta. Por ejemplo, Ruby usa la variable de entorno estándar `RAILS_ENV` para la aplicación Rails.
