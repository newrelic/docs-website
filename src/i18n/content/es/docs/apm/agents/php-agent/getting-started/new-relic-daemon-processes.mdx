---
title: New Relic daemon procesos
tags:
  - Agents
  - PHP agent
  - Getting started
metaDescription: Information about daemons for New Relic PHP agent installations prior to 3.0.
freshnessValidatedDate: never
translationType: machine
---

El agente PHP consta de dos partes:

* El módulo de extensión PHP, `newrelic.so`
* El daemon agente, `newrelic-daemon`

El daemon actúa como un proxy entre el agente PHP y el recolector New Relic para reducir el tráfico de la red y mejorar el tiempo de respuesta de la aplicación instrumentada. Si el daemon no se está ejecutando, no se informan datos a New Relic.

## Estados iniciales o inactivos daemon PHP [#daemon]

Cuando el daemon está en un estado inicial o inactivo, debe ocurrir <DNT>**two**</DNT> transacción antes de que comience a informar.

En un estado <DNT>**initial**</DNT> :

* Con la primera transacción, el daemon agrega su aplicación recién informada a su propia tabla de información de la aplicación.
* Una vez que se agrega la aplicación, el daemon informa la segunda transacción a New Relic.

En un estado <DNT>**idle**</DNT> :

* La primera transacción despierta al daemon y restablece la conexión con New Relic.
* La segunda transacción informa datos a New Relic.

## Procesos de vigilancia y trabajadores. [#processes]

Si realiza una lista de procesos, verá que siempre hay dos procesos daemon ejecutándose:

```
$ ps -ef | grep newrelic-daemon
newrelic     1368     1  0 00:28 ?     00:00:00 /usr/bin/newrelic-daemon ...
newrelic     1370  1368  0 00:28 ?     00:00:00 /usr/bin/newrelic-daemon ...
```

Tener dos procesos en ejecución es un comportamiento normal. La primera columna es el propietario del proceso, la segunda es el ID del proceso (PID) y la tercera es el ID del proceso principal (PPID).

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Procesos daemon
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Perro guardián (primer proceso)
      </td>

      <td>
        El primer proceso, el que pertenece al PID 1, es el proceso de "vigilancia". Vigila el segundo proceso, que es el proceso del "trabajador".
      </td>
    </tr>

    <tr>
      <td>
        Trabajador (segundo proceso)
      </td>

      <td>
        El proceso de trabajo hace lo siguiente:

        * Acepta conexiones del agente PHP
        * Frunce métrico
        * Se comunica con el recolector de New Relic.
      </td>
    </tr>

    <tr>
      <td>
        Terminando procesos
      </td>

      <td>
        Cuando el daemon se finaliza correctamente (normalmente ejecutando `/etc/init.d/newrelic-daemon stop`), enviará una señal de terminación al proceso de vigilancia. Esto finalizará limpiamente el proceso de trabajo y le dará la oportunidad de enviar cualquier dato pendiente a New Relic.

        <Callout variant="important">
          Si necesita finalizar manualmente el daemon, finalice siempre el perro guardián, no el trabajador.
        </Callout>

        Si el proceso de trabajo encuentra un error fatal y finaliza inesperadamente, el proceso de vigilancia volverá a generar inmediatamente un nuevo proceso de trabajo. Esto ayuda a garantizar que el daemon experimente un tiempo de inactividad mínimo absoluto.
      </td>
    </tr>
  </tbody>
</table>

## Detener el daemon [#killing]

Se pueden utilizar los siguientes métodos para matar al daemon:

* <DNT>**Recommended process:**</DNT> Utilice `/etc/init.d/newrelic-daemon stop`. Este es el método preferido para interactuar con el daemon.

* Mata el proceso directamente con su ID de proceso:

  ```
  kill 1368
  ```

* Utilice el archivo PID de vigilancia:

  ```
  kill `cat /var/run/newrelic-daemon.pid`
  ```
