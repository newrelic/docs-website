---
title: Los datos SNMP tienen lagunas
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'You''re collecting metrics from an SNMP device, but the data has inconsistent gaps.'
freshnessValidatedDate: never
translationType: machine
---

## Problema [#problem]

Tiene un dispositivo que a veces recopila los datos esperados, pero hay lagunas inconsistentes en los gráficos.

Esto suele ocurrir cuando un dispositivo no puede responder de manera confiable a las solicitudes SNMP dentro del período de tiempo de espera porque la red entre el contenedor `ktranslate` y el dispositivo sondeado está experimentando contención de ancho de banda, perdiendo paquetes o tiene una latencia alta.

Otro escenario podría ser que el dispositivo esté sobrecargado y no pueda responder rápidamente a las solicitudes SNMP. Esto suele ocurrir cuando intentas recopilar OID de tablas muy grandes con un `poll_time_sec` que es demasiado rápido para que el dispositivo lo pueda seguir.

## Solución [#solution]

Como regla general, ubique su contenedor de sondeo lo más cerca posible de los dispositivos monitores para reducir la posibilidad de que la carga UDP SNMP no realice el viaje.

En los casos en los que deba sondear enlaces WAN con mayor latencia, es posible que deba editar el archivo `snmp-base.yaml` para aumentar `timeout_ms` desde los 5000 ms predeterminados a un intervalo más largo.

Si cree que puede tener una conexión no confiable con el sitio remoto, considere aumentar el `retries` desde el valor predeterminado de 0. Tener una gran cantidad de reintentos, pero un tiempo de espera demasiado corto, probablemente no mejorará su situación y potencialmente puede Aumente las cargas en el dispositivo monitor mientras intenta responder a más solicitudes y ninguna regresa antes de que expire el tiempo de espera.

Si está sondeando grandes tablas de datos de dispositivos, como un equilibrador de carga ocupado, el dispositivo monitor puede tardar algún tiempo adicional en recopilar los datos necesarios para la respuesta. Esto puede requerir establecer un período `timeout_ms` más largo y establecer un retraso más largo para `poll_time_sec`.
