---
title: Log de auditoría del agente Ruby
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: 'New Relic''s Ruby agent audit log is disabled by default. To enable it in your newrelic.yml file, add audit_log. enabled: true.'
freshnessValidatedDate: never
translationType: machine
---

Para fines de auditoría de seguridad, el agente Ruby registra todos los datos enviados al recolector New Relic en un archivo de registro en un formato legible por humanos. Esta característica está disponible con la versión 3.5.5 y superior del agente Ruby.

## Configurar el logde auditoría [#configure]

<Callout variant="caution">
  Habilite esta característica solo si necesita información detallada sobre lo que se transmite con fines de depuración o auditoría. Habilitar esta característica durante un período prolongado puede sobrecargar el archivo de registro de auditoría.
</Callout>

El log de auditoría está deshabilitado de forma predeterminada y debe habilitarse manualmente. Para habilitarlo, agregue lo siguiente a su archivo <DNT>**newrelic.yml**</DNT> : `audit_log.enabled: true`.

De forma predeterminada, el agente Ruby de New Relic escribe el log de auditoría en un archivo al lado del log principal del agente New Relic en <DNT>**log/newrelic_audit.log**</DNT>. Para controlar la ubicación del archivo de registro de auditoría, establezca el parámetro de configuración `audit_log.path` en la ruta completa donde desea el log de auditoría.

## Contenido log de auditoría [#content]

El archivo de registro de auditoría no necesita herramientas especiales para ser leído. Contiene dos líneas para cada solicitud que el agente de New Relic realiza al recolector de New Relic:

* La primera línea enumera el host y la ruta URI contra la que se realizó la solicitud.
* La segunda línea incluye el contenido completo del cuerpo de la solicitud en un formato legible por humanos.

Los cuerpos de solicitud en el log de auditoría no representan las secuencias de bytes exactas enviadas al recolector de New Relic, ya que pueden tener varias capas de codificación aplicadas antes de la transmisión al recolector de New Relic. Sin embargo, cuando se vuelcan al log de auditoría, no se agrega ninguna otra información a las solicitudes salientes.

<Callout variant="tip">
  Para capturar los cuerpos de solicitud sin procesar en su forma codificada, utilice una herramienta de captura de paquetes como <DNT>**tcpdump**</DNT>.
</Callout>

## Formato del cuerpo de la solicitud [#format]

El formato del cuerpo de la solicitud depende del formato de comunicación utilizado por el agente:

* Las versiones más nuevas de Ruby utilizan JSON para la serialización de datos, por lo que el log de auditoría contendrá representaciones JSON de los cuerpos de solicitud.
* Las versiones anteriores de Ruby utilizan el formato Marshal nativo de Ruby para serializar los cuerpos de las solicitudes. Como se trata de un formato opaco, el log de auditoría contiene el resultado de llamar a `Object#inspect`. Esto produce una representación legible por humanos del gráfico del objeto de solicitud inmediatamente antes de la serialización.
