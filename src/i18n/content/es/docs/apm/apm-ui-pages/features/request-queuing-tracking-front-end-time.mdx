---
title: Solicitar cola y seguimiento del tiempo de frontend
tags:
  - APM
  - APM UI pages
  - Features
metaDescription: An overview of how New Relic measures request queuing and time spent in frontend web servers and load balancers.
freshnessValidatedDate: never
translationType: machine
---

APM rastrea el tiempo después de que una solicitud ingresa a sus sistemas de producción y antes de que llegue a su aplicación. A esta parte del ciclo de vida de su solicitud la llamamos <DNT>**request queuing**</DNT>. Dependiendo de las características específicas de sus sistemas de producción, esta medición del tiempo puede incluir o no una cola real en la que ingresan las solicitudes. También puede representar otras funciones (como equilibrio de carga o latencia de red interna).

## Utilice colas de solicitudes para identificar problemas de escalado [#performance-scaling]

El seguimiento del tiempo dedicado a la cola de solicitudes es útil para identificar ciertos tipos de problemas de rendimiento y escalamiento; Por ejemplo:

* Cuando su servidor web frontend pasa tiempo esperando que los trabajadores de la aplicación estén disponibles
* Cuando se dedica tiempo extra a preparar a los trabajadores de la aplicación después de desplegar o reiniciar

Debe configurar su [agente](/docs/features/configuring-request-queue-reporting) y [servidor](/docs/features/request-queue-server-configuration-examples) de New Relic para informar la cola de solicitudes. Luego la información aparecerá en el gráfico <DNT>**Requests time**</DNT> de la aplicación seleccionada para transacciones web (de la lista <DNT>**Applications**</DNT> de APM, seleccione la aplicación), así como en otros lugares de la interfaz de usuario. La leyenda del gráfico indica qué color representa la cola de solicitudes.

## Cálculos de Apdex [#apdex]

La cola de solicitudes es el tiempo desde que el browser solicita contenido hasta el momento en que lo recibe. Dado que su puntuación Apdex reflejará estos cálculos, puede seleccionar si desea informar el tiempo de cola de solicitudes por separado o no. Para obtener más información, consulte [Configuración del agente](/docs/features/configuring-request-queue-reporting).

## Desviación del reloj

Si el servidor web frontend (como Nginx) y su aplicación no residen en el mismo servidor físico, la cola de solicitudes informadas puede verse afectada por el desfase del reloj. [NTP](http://www.ntp.org/ "El enlace se abre en una ventana nueva.") proporciona una excelente manera de mantener sincronizados los relojes del servidor. Sin embargo, todavía se desviarán entre sí. Dado que el agente New Relic depende de una timestamp establecida por el servidor frontend, puede informar en exceso o en menos la cola de solicitudes si el reloj de ese servidor no está estrechamente sincronizado con el reloj del servidor de aplicaciones.

Esto puede parecer un problema importante con la característica; sin embargo, es poco probable que la desviación horaria provoque picos repentinos en las colas de solicitudes informadas. Los picos repentinos generalmente ocurren cuando una aplicación se reinicia o se sobrecarga con solicitudes. Nuestra experiencia es que los informes de cola de solicitudes pueden ser útiles para identificar problemas de rendimiento reales, pero asegúrese de considerar el desfase del reloj al interpretar estos datos.
