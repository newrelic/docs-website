---
title: Los datos dejan de informar
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Learn what to do if the New Relic PHP agent starts and then stops reporting data.
freshnessValidatedDate: never
translationType: machine
---

## Problema

El agente PHP de New Relic estaba informando datos anteriormente pero luego dejó de hacerlo. Además:

* Cuando revisó el archivo de registro `/var/log/newrelic/newrelic-daemon.log` daemon de su agente, vio el mensaje `Lack of activity within 10ms`.

* El estado de salud de la aplicación es gris.

* La opción para eliminar la aplicación aparece en el menú

  <DNT>
    **Settings**
  </DNT>

  de la aplicación cuando selecciona la opción

  <Icon name="fe-settings"/>

  icono.

## Solución

Utilice cualquiera de estos métodos para evitar que su aplicación entre en estado inactivo:

* Establezca el valor de tiempo de espera para [`newrelic.daemon.app_timeout`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-app_timeout) en al menos el doble del intervalo de su transacción. Por ejemplo, para un trabajo en segundo plano por horas, establezca el tiempo de espera en dos horas.

* <DNT>
    **Recommendation:**
  </DNT>

  Si tiene procesos largos o poco frecuentes, ejecute una tarea cron cada cinco minutos con una transacción simple, como `phpinfo()`. Esto ayudará a garantizar que la aplicación no entre en un estado inactivo.

<Callout variant="important">
  No configure `newrelic_ignore_transaction` para ignorar el trabajo cron. El agente PHP entrará en un estado inactivo si el trabajo no se ejecuta ni informa.
</Callout>

## Causa

Si la transacción de una aplicación tarda más de diez minutos o ocurre con menos frecuencia que una vez cada diez minutos, la aplicación entra y permanece en un estado inactivo.

Cuando el agente PHP está en estado inactivo, debe ocurrir <DNT>**two**</DNT> transacción antes de que comience a informar nuevamente:

* La primera transacción despierta al daemon y restablece la conexión con New Relic.
* La segunda transacción informa datos a New Relic.
