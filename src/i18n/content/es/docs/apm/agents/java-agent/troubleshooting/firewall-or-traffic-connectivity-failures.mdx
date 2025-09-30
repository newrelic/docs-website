---
title: Fallos de firewall o conectividad de tráfico
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'If your Java app''s logs show INFO messages about connectivity failures with New Relic, follow these troubleshooting steps based on frequency of the message.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Los [datoslog ](/docs/agents/java-agent/troubleshooting/generate-debug-logs-troubleshooting-java)de su aplicación Java muestran fallas al conectarse a New Relic. Desea verificar si los mensajes `INFO` se deben a la conectividad del tráfico o a las reglas del firewall, o si se deben a problemas más graves.

## Solución

Los fallos ocasionales al conectarse al [recolector New Relic](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector) no deberían ser motivo de preocupación. Estas fallas no deberían afectar el rendimiento métrico disponible en la interfaz de usuario New Relic de su aplicación.

El agente de Java de New Relic intenta conectarse aproximadamente una vez por minuto. Para solucionar el problema:

1. Busque en su archivo de registro [`INFO` mensajes sobre fallas de conexión](#info-messages).
2. Compruebe [con qué frecuencia aparecen los mensajes](#message-frequency).

Por ejemplo, busque mensajes como:

```
Jul 31, 2017 21:37:14 +0000 NewRelic 10
INFO: Failed to connect to collector.newrelic.com.:443 for My Application:java.net.
ConnectException: Connection refused:connect
```

o

```
Jul 31, 2017 21:37:14 +0000 NewRelic 40
INFO: The data collector is temporarily unavailable.
This can happen periodically. In the event that availability of our servers 
is not restored after a period of time, 
then please report this to New Relic.
java.net.SocketException: Connection reset
```

Dependiendo de la frecuencia con la que aparezca el mensaje, haga lo siguiente para solucionar el problema:

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Frequency of INFO message**
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
        Unos minutos
      </td>

      <td>
        El agente de Java de New Relic puede almacenar en caché una cantidad significativa de datos métricos cuando no puede conectarse. Incluso si la interrupción dura unos minutos, en general, esto no resultará en ninguna pérdida de información en laUI <InlinePopover type="apm"/>. Puede ignorar estos mensajes con seguridad.
      </td>
    </tr>

    <tr>
      <td>
        De forma intermitente durante unos días.
      </td>

      <td>
        Los problemas de conexión intermitentes pueden provocar ocasionalmente muchos de estos mensajes en poco tiempo. Si esto ocurre solo una vez cada pocos días y todos los datos de su aplicación aparecen en la UI de New Relic, puede ignorar estos mensajes con seguridad.
      </td>
    </tr>

    <tr>
      <td>
        Cada minuto durante varios minutos.
      </td>

      <td>
        Si se producen fallas cada minuto durante más de unos pocos minutos, entonces el agente de Java no podrá recibir datos de su aplicación y no se podrán informar datos. En esta situación:

        1. Verifique si New Relic está experimentando problemas de disponibilidad: verifique el estado de New Relic en [status.newrelic.com](https://status.newrelic.com).
        2. Si New Relic no informa ningún problema, [recopile información de resolución de problemas](/docs/agents/java-agent/troubleshooting/gather-troubleshooting-information-java) para su aplicación.
      </td>
    </tr>
  </tbody>
</table>

## Causa

A pesar del texto log , este error generalmente se debe a una falla de conectividad o tráfico de firewall en lugar de que el recolector New Relic no esté disponible. Para obtener más información, consulte las listas de [rangos de IP](/docs/apm/new-relic-apm/getting-started/networks) utilizados por todos los servicios de New Relic.
