---
title: Cómo se cierran las condiciones de alerta incidente
tags:
  - Alerts
  - Alert incidents
metaDescription: Read about how you can close alerts incidents manually and automatically.
freshnessValidatedDate: never
translationType: machine
---

Este documento explica las diferentes formas en que se puede cerrar el incidente.

## Cómo se cierra automáticamente el incidente [#close-automatic]

Un incidente se cerrará automáticamente cuando la señal objetivo regrese a un estado sin infracción durante el período de tiempo indicado en el umbral de la condición. Este tiempo de espera se llama [período de recuperación](/docs/using-new-relic/welcome-new-relic/get-started/glossary#recovery-period).

Por ejemplo: si el comportamiento de infracción es "Puntuación Apdex inferior a 0,80 al menos una vez cada 5 minutos", el incidente se cerrará automáticamente cuando la puntuación Apdex sea igual o superior a 0,80 durante 5 minutos consecutivos. Lo mismo se aplica a un umbral "durante al menos x minutos": se requieren x minutos de comportamiento sin infracción para cerrar automáticamente el incidente.

Cuando un incidente se cierra automáticamente:

1. La timestamp de cierre tiene una fecha retroactiva al inicio del período de recuperación.
2. La evaluación se reinicia y se reinicia desde que finalizó el incidente anterior.

Todas las condiciones tienen una configuración [de límite de tiempo de incidente](#time-limit) que forzará el cierre automático de un incidente de larga duración.

## Establecer un límite de tiempo para incidentes duraderos [#time-limit]

La configuración del límite de tiempo del incidente forzará el cierre automático de un incidente de larga duración después de la cantidad de días/horas que seleccione. Esto es más útil para entidades efímeras que, cuando desaparecen, provocan un incidente continuo que no se cerrará automáticamente.

<DNT>
  **Limits and Defaults**
</DNT>

* A todo incidente de alerta se le aplicará un tiempo límite de incidencia. Most condición de alerta le permitirá editar este campo.
* El valor predeterminado, si no se proporciona uno durante la configuración, es de 3 días (24 horas para condiciones de infraestructura).
* El límite de tiempo de incidente para condiciones que no son de infraestructura se puede establecer desde 5 minutos hasta 30 días. Si, por algún motivo, la señal sigue fallando en 30 días, el incidente se cerrará y se abrirá un nuevo incidente. Las condiciones de infraestructura se pueden configurar en las siguientes horas: 1, 2, 4, 8, 12, 24, 48 o 72.

<Callout variant="tip">
  Esta configuración está relacionada con la [configuración del problema inactivo](/docs/alerts-applied-intelligence/applied-intelligence/incident-intelligence/user-settings/#auto-close-issue-window).

  Cuando los períodos de tiempo en estas dos configuraciones son diferentes, nuestro sistema utiliza el período de tiempo más corto, independientemente de la configuración. Por ejemplo, si la configuración del tiempo para cerrar el incidente abierto es de 2 días y la configuración del tiempo para el problema inactivo es de 3 días, nuestro sistema esperará 2 días antes de cerrar el problema.
</Callout>

<DNT>
  **Examples:**
</DNT>

* Estableciste el límite de tiempo del incidente en 12 horas. Si ese incidente dura 12 horas, se cerrará a las 12 horas y se restablecerá la evaluación de condición de esa entidad.
* Su JVM tiene un pico de CPU y esto crea un incidente. Luego, la JVM falla y es reemplazada por una nueva JVM. Si no ha establecido un límite de tiempo para el incidente, el incidente de la JVM bloqueada nunca se cerrará.
