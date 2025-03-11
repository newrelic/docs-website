---
title: Error de discrepancia de protocolo
type: troubleshooting
tags:
  - Agents
  - PHP agent
  - Troubleshooting
metaDescription: Protocol mismatch errors mean your agent and daemon are out of sync. Follow these steps to fix it.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Ve errores en el archivo de registro de su daemon después de actualizar su agente como este:`protocol mismatch: A.B != X.Y`.

## Solución

1. Asegúrese de que su agente y daemon estén actualizados con el mismo número de versión.

2. Reinicie su servidor web (Apache, Nginx, PHP-FPM, etc.).

3. Si el número `A.B` es menor que el número `X.Y`, significa que tiene un agente desactualizado intentando comunicarse con un daemon más moderno.

   Si el número `A.B` es mayor que el número `X.Y`, entonces significa que su daemon está desactualizado y la causa más probable es que tiene demasiados daemons ejecutándose. En este caso, finalice todos los procesos `newrelic-daemon` actualmente en ejecución y reinicie el daemon usando `/etc/init.d/newrelic-daemon start`.

## Causa

La única razón de este error es que su agente y daemon no están sincronizados entre sí. El daemon y el agente real (la extensión PHP) son un par muy estrechamente acoplado, y el daemon sólo aceptará conexiones y comandos de un agente que coincida con él.

A veces, el proceso de actualización no logrará eliminar el daemon antiguo correctamente y es posible que aún tenga procesos daemon antiguos ejecutándose. Con frecuencia, este error se debe a que no se reinicia el servidor web después de una actualización. Si el daemon se actualizó correctamente, pero su servidor web aún contiene un agente más antiguo, verá este error. El error en sí indica cuál está desactualizado.
