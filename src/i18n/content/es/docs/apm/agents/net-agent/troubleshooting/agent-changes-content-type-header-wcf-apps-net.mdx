---
title: El agente cambia el encabezado de tipo de contenido para aplicaciones WCF (.NET)
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting steps if data does not appear in your app after you installed the New Relic .NET agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Con el agente .NET habilitado para una aplicación Windows Communication Foundation (WCF), el encabezado de respuesta `Content-Type` cambia inesperadamente a `application/xml`.

## Solución

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Basic solutions**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Deshabilite la característica Multiaplicación Tracing (CAT).
      </td>

      <td>
        Lea acerca de cómo [cambiar la configuración CAT](/docs/agents/net-agent/configuration/net-agent-configuration#cross_application_tracer).

        Si necesita que CAT permanezca habilitado, consulte las otras soluciones.
      </td>
    </tr>

    <tr>
      <td>
        Utilice la característica rastreo distribuido (DT) en lugar de CAT.
      </td>

      <td>
        Lea acerca de cómo [habilitar la configuración de DT](/docs/agents/net-agent/configuration/net-agent-configuration#distributed_tracing).

        DT es una forma nueva y mejorada de realizar el rastreo y tiene una característica mejorada, en comparación con CAT, en la UI de New Relic.

        DT no requiere modificaciones en los encabezados de respuesta y no se verá afectado por el cambio de encabezados de respuesta.
      </td>
    </tr>

    <tr>
      <td>
        Agregue el encabezado `Content-Type` que desee tanto al mensaje como `OperationContext`.
      </td>

      <td>
        Esta solución requiere que modifique el código de su aplicación.
      </td>
    </tr>
  </tbody>
</table>

## Causa

La característica Multiaplicación Tracing (CAT) está habilitada por defecto en el agente .NET. CAT funciona agregando encabezados tanto a los mensajes de solicitud como a los mensajes de respuesta.

Esto es lo que sucede en el agente:

1. Se ejecuta la implementación del método de servicio WCF.
2. El agente intentará agregar encabezados CAT a la respuesta WCF agregando una instancia `HttpResponseMessageProperty` , con los encabezados CAT, a `OperationContext.Current.OutgoingMessageProperties`.
3. El `DispatchMessageFormatter` personalizado se ejecuta y crea un nuevo mensaje donde el encabezado `Content-Type` esperado se agrega directamente al nuevo mensaje.
4. La implementación de WCF de Microsoft intentará fusionar las propiedades del mensaje definidas en el mensaje de respuesta con las propiedades del mensaje definidas en `OperationContext`. Consulte esta [referencia de Microsoft en ImmutableDispatchRuntime.cs](https://referencesource.microsoft.com/#System.ServiceModel/System/ServiceModel/Dispatcher/ImmutableDispatchRuntime.cs,725) para obtener más detalles.
5. El `HttpResponseMessageProperty` no admite la combinación, por lo que se utiliza el valor definido en `OperationContext` en lugar del valor definido en el mensaje.
6. Como resultado, el encabezado `Content-Type` que se agregó originalmente al mensaje formateado se descarta y se utiliza el encabezado `Content-Type` predeterminado.

Dado que el agente debe admitir múltiples enlaces WCF, debe agregar nuestros encabezados CAT al `OperationContext`.
