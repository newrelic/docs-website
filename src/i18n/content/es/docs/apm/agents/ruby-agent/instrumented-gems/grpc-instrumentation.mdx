---
title: Instrumentación gRPC
tags:
  - Agents
  - Ruby agent
  - Instrumented gems
metaDescription: The New Relic Ruby agent automatically instruments gRPC clients and servers.
freshnessValidatedDate: never
translationType: machine
---

El [agente New Relic Ruby](/docs/agents/ruby-agent/getting-started/new-relic-ruby) instrumentó automáticamente clientes y servidores [gRPC](https://grpc.io/) que usan la gema [grpc](https://rubygems.org/gems/grpc) (versión 1.0.0 o superior). Se admiten todos los tipos de comunicación: unaria, bidireccional, transmisión de cliente y transmisión de servidor.

<Callout variant="important">
  La instrumentación de gRPC requiere la versión 8.10.0 o superior del agente Ruby.
</Callout>

## Configuración (todas las configuraciones son opcionales) [#config-overview]

Puede configurar la instrumentación de clientes y servidores gRPC por separado. De forma predeterminada, ambas opciones de configuración están configuradas en `auto`, que es la abreviatura de `automatic`. El comportamiento automático del agente para cada uno es habilitar la instrumentación intentando aprovechar el comportamiento de anteposición del módulo Ruby al principio y recurriendo al comportamiento del método Ruby si se encuentran problemas de compatibilidad conocidos.

Vea opciones y ejemplos adicionales en las secciones siguientes.

### Opciones de cliente y servidor [#combined-options]

Puede alterar el comportamiento del agente modificando el archivo de configuración de New Relic o configurando variables de entorno. Estas son las opciones que se aplican tanto a clientes como a servidores:

* `auto`: El valor predeterminado que se habilita mediante la selección automática de comportamiento del método Ruby.
* `disabled`: instrumentación desactivada
* `prepend`: Fuerza el uso del método Ruby anteponiendo
* `chain`: Forzar el uso del método Ruby cadena

### Opciones específicas del cliente [#client-specific]

Utilice lo siguiente sólo para clientes:

* parámetro del archivo de configuración: `instrumentation.grpc_client`
* Variable ambiental: `NEW_RELIC_INSTRUMENTATION_GRPC_CLIENT`

### Opciones específicas del servidor [#server-specific]

Utilice lo siguiente sólo para servidores:

* parámetro del archivo de configuración: `instrumentation.grpc_server`
* Variable ambiental: `NEW_RELIC_INSTRUMENTATION_GRPC_SERVER`

### Ejemplos de configuración de cliente y servidor. [#combined-examples]

Para deshabilitar la instrumentación del servidor gRPC a través del archivo de configuración:

```
# newrelic.yml
instrumentation.grpc_server: disabled
```

Para deshabilitar la instrumentación del cliente gRPC a través de una variable de entorno:

```
export NEW_RELIC_INSTRUMENTATION_GRPC_CLIENT=disabled
```

## Verificación [#verification]

Una vez que se inicia el agente New Relic Ruby, detectará la presencia de la gema `grpc` que se ha cargado y luego intentará aplicar la instrumentación gRPC. Cuando tenga éxito en aplicar esta instrumentación para los componentes del cliente y del servidor gRPC, el agente escribirá las siguientes líneas en su archivo de registro (`log/newrelic_agent.log` de forma predeterminada):

```
INFO : Installing New Relic supported gRPC_Client instrumentation using Prepend
INFO : Installing New Relic supported gRPC_Server instrumentation using Prepend
```

## Uso [#usage]

Siempre que la instrumentación funcione correctamente (consulte [Verificación](#verification) arriba para confirmar esto), toda la instrumentación realizada por el agente New Relic Ruby debe ser completamente automática y no requerir ninguna modificación en ninguno de los códigos de cliente y/o servidor gRPC existentes.

La instrumentación gRPC del agente New Relic Ruby incluye encabezados de rastreo distribuido en tramos, lo que permite que las llamadas de cliente y servidor de gRPC se conecten a cualquier otro servicio que admita W3C rastreo distribuido. Las solicitudes de gRPC se pueden enviar desde un cliente basado en Ruby a un servidor basado en otro idioma, y un servidor basado en Ruby puede recibir solicitudes provenientes de un cliente basado en otro idioma.

<Callout variant="important">
  Las solicitudes de clientes de gRPC no se informarán a New Relic a menos que se generen cuando esté presente una transacción de New Relic existente. Normalmente, esto significa que un método de controlador Rails o un proceso de trabajo en segundo plano está activo y es responsable de la invocación de la solicitud del cliente gRPC. Luego, la solicitud se acumulará bajo la transacción de ese contenedor externo en la UI web de New Relic.

  Las solicitudes del servidor gRPC siempre generarán una nueva transacción New Relic y no requerirán ni se acumularán en ninguna transacción New Relic preexistente.
</Callout>

## Ver datos [#view-data]

Puede ver los datos de gRPC recopilados en varias páginas de la UI de New Relic.

### Página de resumen [#summary]

En la UI [página Resumen](/docs/apm/applications-menu/monitoring/apm-overview-page), las solicitudes de los clientes de gRPC aparecen como transacciones web y aportan datos a los siguientes gráficos: <DNT>**Web transactions time**</DNT>, <DNT>**Throughput**</DNT> y <DNT>**Error rate**</DNT>.

### Pagina de rastreo distribuido [#distributed-tracing-page]

<Callout variant="tip">
  rastreo distribuido está activado de forma predeterminada en el nuevo agente Ruby, pero si tienes preguntas, consulta [rastreo distribuido para tus servicios Ruby](/docs/apm/agents/ruby-agent/configuration/distributed-tracing-ruby-agent/).
</Callout>

Consulte los datos de gRPC en la página de rastreo distribuido de la UI:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services**
   </DNT>

   .

2. Haga clic en su entidad (servicio).

3. En la sección

   <DNT>
     **Monitor**
   </DNT>

   del panel izquierdo, haga clic en

   <DNT>
     **Distributed tracing**
   </DNT>

   .

4. Haga clic en un grupo de trazas.

5. Elija una traza de la lista y haga clic en ella.

6. Haga clic en

   <DNT>
     **Expand all**
   </DNT>

   .

7. En la lista resultante de tramos de traza, haga clic en un tramo de traza individual.

8. Haga clic en la pestaña

   <DNT>
     **Attributes**
   </DNT>

   en el panel derecho.

   * <DNT>
       **Client instances:**
     </DNT>

     Deberían aparecer los atributos `grpc_status`, `grpc_type`, `http.method` y `http.url` . En el caso de una solicitud de cliente fallida (que tendrá un valor `grpc_status` distinto de `0`), aparecerá un atributo `grpc_message` adicional con el mensaje de estado de gRPC.

   * <DNT>
       **Server instances:**
     </DNT>

     Los atributos `request.grpc_type`, `request.method` y `request.uri` deberían aparecer.

Siempre que tanto la aplicación cliente como la del servidor estén siendo monitoreadas por un agente New Relic con soporte para gRPC (en Ruby u otro idioma), el mapa rastreo distribuido debe hacer lo siguiente:

* Muestra la aplicación cliente y servidor.
* Informe sobre cuántos tipos de llamadas distintas se realizaron entre ellos.

En el caso de una excepción de Ruby basada en gRPC, la información sobre la excepción aparecerá en la página <DNT>**Events > Errors**</DNT> .

## Apoyo y comentarios [#support-feedback]

Cuando se comunique con New Relic para obtener soporte y/o comentarios relacionados con la instrumentación gRPC del agente Ruby de New Relic, intente tener respuestas a las siguientes preguntas:

* ¿Qué versión de la gema `grpc` estás usando?
* ¿Utilizas New Relic Infinite Tracing?
* ¿Cómo describiría el entorno de su aplicación? framework, versión Ruby, otras tecnologías clave utilizadas)
* ¿Para qué usas gRPC?
* ¿Utiliza Ruby para clientes gRPC?
* ¿Utiliza un idioma diferente para los clientes de gRPC?
* ¿Utiliza Ruby para servidores gRPC?
* ¿Utiliza un idioma diferente para los servidores gRPC?
* ¿A dónde llamas a tu código de cliente gRPC? (desde un controlador, un trabajo en segundo plano, etc.)
* ¿Qué estrategia/estrategias estás utilizando para enviar tus datos? (unario, bidireccional, streaming de cliente, streaming de servidor)
