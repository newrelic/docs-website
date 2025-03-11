---
title: Configurar informes de cola de solicitudes
tags:
  - APM
  - APM UI pages
  - Features
metaDescription: How to configure the APM agent to report request queue timing.
freshnessValidatedDate: never
translationType: machine
---

[La cola de solicitudes](/docs/apm/applications-menu/features/request-queuing-tracking-frontend-time) se produce antes de que la solicitud llegue a su aplicación (donde reside el agente). Es por eso que necesita realizar una configuración sencilla del agente y sus hosts de producción para aprovechar esta característica.

## Encabezado HTTP

Para informar la cola de solicitudes, la mayoría de los agentes de New Relic dependen de un encabezado HTTP establecido por el [servidor](/docs/features/request-queue-server-configuration-examples) web frontend (como Apache o Nginx) o el equilibrador de carga (como HAProxy o F5). Puede configurar estos servidores frontend para establecer la timestamp en el encabezado HTTP que representa cuando la solicitud ingresó por primera vez a su infraestructura de producción.

<Callout variant="tip">
  Configure este encabezado tan pronto como sea posible después de que la solicitud ingrese a su infraestructura para que sea menos probable que pase por alto problemas de rendimiento en su infraestructura que ocurren antes de que se establezca el encabezado.
</Callout>

La mayoría de los agentes de New Relic interpretarán un encabezado `X-Queue-Start` o `X-Request-Start` y lo utilizarán para calcular la cola de solicitudes. El agente trata estos encabezados de manera idéntica. Incluya un valor en el formato `t=MICROSECONDS_SINCE_EPOCH` donde `MICROSECONDS_SINCE_EPOCH` es un valor entero del número de microsegundos que han transcurrido desde el comienzo de la época Unix (por ejemplo, el 1 de enero de 1970).

Casi cualquier servidor HTTP frontend o equilibrador de carga se puede configurar para agregar este encabezado. Los detalles adicionales dependen de la configuración específica de su agente y servidor. Para obtener más información, consulte los [ejemplos de configuración de la cola de solicitudes](/docs/apm/applications-menu/features/request-queue-server-configuration-examples).

## Agente de Go [#go]

Con el agente Go, configure cualquiera de los encabezados para registrar una métrica.

## Java, Node.js, Python, agente Ruby [#most-agents]

Las versiones más recientes de Java, Node.js, Python y Ruby agente brindan más flexibilidad en el formato del encabezado `X-Request-Start` o `X-Queue-Start` . Estos agentes permiten que la timestamp se envíe en segundos, milisegundos o microsegundos como un valor entero o de punto flotante. Estos agentes también permiten omitir el `t=` inicial en el valor del encabezado.

Según el orden de magnitud, estos agentes interpretan automáticamente la unidad de tiempo como segundos, milisegundos o microsegundos. New Relic puede hacer esto de manera confiable ya que una timestamp de milisegundos, interpretada como microsegundos, daría como resultado un tiempo de cola de más de 40 años.

<DNT>**Python agent only:**</DNT> Cuando se utiliza Apache/mod_wsgi 3.4 o superior, mod_wsgi insertará automáticamente un equivalente al encabezado `X-Queue-Start` en el diccionario de entorno WSGI para cada solicitud. Esto marcará el momento específico en el que Apache aceptó la solicitud por primera vez. El valor establecido por mod_wsgi será recogido y utilizado por el agente Python si no se ha configurado manualmente ningún encabezado `X-Request-Start` o `X-Queue-Start` separado en la interfaz de un servidor web o en el propio Apache.

## Agente .NET [#net]

El agente .NET no requiere (e ignorará) ninguna configuración de encabezados HTTP para calcular el tiempo de cola. Funciona instrumentando el mecanismo de cola de IIS directamente e informa el tiempo de cola como la diferencia entre el momento en que se ejecuta el constructor `HttpContext` y el momento en que se activa el evento `HttpApplication.BeginRequest` .

El tiempo de cola de solicitudes solo se informa para la aplicación .NET framework alojada en IIS (por ejemplo: aplicación ASP.NET). **No** se informa para la aplicación ASP .NET Core (dirigida a .NET Core o framework), ni para la aplicación OWIN autohospedada.

## Agente PHP [#php]

El agente PHP solo admite el encabezado `X-Request-Start` . Esto identifica la timestamp en microsegundos como un número entero, con un `t=` opcional en el valor del encabezado. Para asegurarse de que el encabezado se lea correctamente, verifique su `phpinfo()` en la sección <DNT>**PHP Variables**</DNT> y verifique que `_SERVER["HTTP_X_REQUEST_START"]` exista y tenga el formato esperado.

Si está utilizando Nginx, consulte [Ejemplos de configuración del servidor de cola de solicitudes](/docs/apm/other-features/request-queueing/request-queue-server-configuration-examples#nginx) para obtener información adicional sobre cómo configurar el encabezado.
