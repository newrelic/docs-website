---
title: Uso elevado de memoria (.NET)
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting tips to determine if Windows Working Set memory usage is a concern after you install New Relic's .NET agent for your app.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Después de instalar el agente .NET de New Relic, verá un aumento en el uso de memoria `Working Set` en herramientas de monitoreo como Microsoft Windows <DNT>**Task Manager**</DNT>. El aumento suele ser de unos 100 MB por aplicación de monitor. Esto puede ocurrir tanto en máquinas físicas como virtuales.

## Solución

Este aumento en el uso de memoria `Working Set` normalmente no afecta el rendimiento. Windows reserva `Working Set` memoria para una aplicación en particular, pero puede liberarse en cualquier momento si otra aplicación necesita la memoria. Este es un comportamiento normal y esperado para cualquier aplicación de Windows.

En casos excepcionales, especialmente en sistemas con RAM limitada o muchos grupos de aplicaciones, el uso de la memoria puede afectar el rendimiento. Si su rendimiento se ve afectado, pruebe cualquiera de estas opciones:

* [Habilite la instrumentación solo para grupos de aplicaciones específicos](/docs/agents/net-agent/configuration/net-agent-configuration#include_exclude_apps)

* Agregue más RAM a la máquina.

* Retire algunos grupos de aplicaciones de la máquina.

* Monitor el rendimiento para ver si el aumento en el uso de memoria que se muestra en

  <DNT>
    **Task Manager**
  </DNT>

  realmente está afectando el rendimiento. Si es así, libere memoria y compártala con otros procesos.

## Causa

La causa subyacente es la forma en que [el propio Windows anticipa y asigna memoria por proceso](https://docs.microsoft.com/en-us/windows/win32/memory/working-set). Windows asigna esta memoria como memoria `Working Set` , que es la memoria que el sistema operativo reserva para el proceso. El sistema operativo puede liberar la memoria `Working Set` rápidamente si otro proceso la necesita. Debido a que Windows decide la asignación de memoria, New Relic no puede reducir la cantidad de memoria que se muestra en uso.

Normalmente este aumento no es un problema a menos que haya una caída correspondiente en el rendimiento. Pueden ocurrir problemas de rendimiento si toda la memoria disponible está ocupada como memoria `Private Working Set` . Si el servidor se está quedando sin memoria, monitor su tiempo de respuesta y tiempo de transacción para ver si este uso de memoria realmente está afectando el rendimiento. Si no hay ningún aumento durante un tiempo, entonces el uso de la memoria no es un problema.

Normalmente, el uso de memoria `Working Set` solo causa problemas en sistemas con RAM limitada. Por ejemplo, los sistemas de prueba de New Relic pueden mostrar un aumento de aproximadamente 100 MB por aplicación de monitor o grupo de aplicaciones. Un aumento del 80% es notable cuando es el 80% de 64 GB, pero menos notable cuando es el 80% de 4 GB.

De manera similar, la cantidad de grupos de aplicaciones que se monitorean afecta el uso. Un único grupo de aplicaciones rara vez aumenta el uso de manera significativa, pero un sistema con 4 GB de RAM y 30 grupos de aplicaciones puede tener problemas.
