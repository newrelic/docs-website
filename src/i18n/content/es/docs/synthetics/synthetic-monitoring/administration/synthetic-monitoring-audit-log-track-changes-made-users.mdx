---
title: Seguimiento del uso del monitoreo sintético por parte de su equipo
tags:
  - Synthetics
  - Synthetic monitoring
  - Administration
metaDescription: 'For New Relic synthetic monitoring, how to get an audit log of changes made to your account.'
freshnessValidatedDate: never
translationType: machine
---

New Relic le permite ver un historial de 13 meses de eventos de auditoría de monitoreo sintético.

## Descripción de la característica [#description]

Cuando realiza acciones específicas en el monitoreo sintético, como crear o editar un monitor, se genera un [`NrAuditEvent`](/attribute-dictionary/?event=NrAuditEvent) . Este evento incluye detalles sobre la acción realizada y qué usuario realizó esa acción. Estos datos se almacenan durante 13 meses. Estos datos históricos pueden resultar útiles si desea investigar cómo se creó un problema con su cuenta y quién realizó ese cambio.

Los cambios del monitoreo sintético rastreados incluyen:

* Monitores

  * Creación
  * Ediciones (incluido cambio de ubicación, silenciar/activar silencio y habilitar/deshabilitar)
  * creación script , ediciones, validación (incluidas las credenciales seguras utilizadas)
  * Supresión

* Monitor el tiempo de inactividad

  * Creación
  * Ediciones
  * Supresión

* Credenciales seguras

  * Creación
  * Ediciones
  * Puntos de vista
  * Supresión

* Ubicación privada

  * Creación
  * Ediciones (incluida la eliminación de colas)
  * Supresión

Para obtener detalles sobre cómo consultar estos datos, consulte [Detalles de la consulta](#query-changes).

## Detalles de consulta [#query-changes]

Para consultar cambios, [utilice el generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para explorar `NrAuditEvent` y su atributo asociado. Para obtener una introducción al uso del evento `NrAuditEvent` , consulte [el registro de auditoría de cuenta de consulta](/docs/insights/use-insights-ui/manage-account-data/query-account-audit-logs-nrauditevent).

El `actionIdentifier` evento admitido actualmente incluye:

* Monitores

  * `synthetics_monitor.create`
  * `synthetics_monitor.update`
  * `synthetics_monitor.create_script`
  * `synthetics_monitor.update_script`
  * `synthetics_monitor.validate_script`
  * `synthetics_monitor.delete`

* Monitor el tiempo de inactividad

  * `synthetics_monitor_downtime.create`
  * `synthetics_monitor_downtime.update`
  * `synthetics_monitor_downtime.delete`

* Credenciales seguras

  * `synthetics_secure_credential.create`
  * `synthetics_secure_credential.update`
  * `synthetics_secure_credential.view`
  * `synthetics_secure_credential.delete`

* Ubicación privada

  * `synthetics_private_location.create​`
  * `synthetics_private_location.update​`
  * `synthetics_private_location.delete`

Cómo se realizó el cambio:

* El atributo `actorAPIKey` indica si el cambio se realizó a través de la API o por un usuario a través de la UI. Cuando este valor es nulo, es una actualización del usuario; cuando no es nulo, es una actualización de API.

Para ver ejemplos de consulta log de auditoría de monitoreo sintético, consulte:

* El [caso de uso de ejemplo](#example-use-case).
* Los ejemplos específicos de seguimiento sintético en [Ejemplos de consulta de auditoría](/docs/insights/insights-data-sources/default-data/nrauditevent-default-attributes-examples).

## Caso de uso de ejemplo: encontrar cambios realizados por un usuario [#example-use-case]

A continuación se muestra un ejemplo del uso del log de auditoría de monitoreo sintético para resolver un problema común:

Usted es gerente de una empresa que utiliza monitoreo sintético. Un nuevo empleado ha estado jugando con las cuentas de su empresa para aprender cómo funciona el monitoreo sintético. Desafortunadamente, a este empleado se le dio accidentalmente acceso completo a las cuentas de producción, en lugar de a las cuentas de preproducción.

Quiere determinar qué monitor de monitoreo sintético creó, eliminó y actualizó este empleado, para saber qué monitor debe repararse. En lugar de tener que revisar todos monitor de la cuenta, [abre el generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) y ejecuta la siguiente consulta NRQL del evento `NrAuditEvent`:

```
SELECT count(*) FROM NrAuditEvent
WHERE actionIdentifier = 'synthetics_monitor.update_script' AND
actorEmail = 'EMPLOYEE_EMAIL'
FACET actionIdentifier, description
SINCE 1 week ago LIMIT 1000
```

La consulta devolverá todos los monitores de monitoreo sintético que el empleado haya actualizado, eliminado, creado o deshabilitado. Uno por uno, usted y el empleado revisan la lista y actualizan el monitor editado.
