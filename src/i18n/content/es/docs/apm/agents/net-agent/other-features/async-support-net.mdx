---
title: Soporte asíncrono en .NET
tags:
  - Agents
  - NET agent
  - Other features
metaDescription: 'How to activate asynchronous mode with New Relic''s .NET agent, plus a summary of new, disabled, or unavailable features when async mode is active.'
freshnessValidatedDate: never
translationType: machine
---

El agente .NET de New Relic incluye automáticamente instrumentación framework asincrónico a partir de [la versión 6.0](/docs/release-notes/agent-release-notes/net-release-notes) del agente. Con el patrón estándar `async-await` , introducido en .NET 4.5, las llamadas a métodos asíncronos pueden regresar aunque el trabajo que se está realizando en el método llamado todavía esté en progreso. El agente .NET observa este trabajo asincrónico en progreso y espera a que se complete antes de registrar los tiempos.

## Característica que admite instrumentación asíncrona [#features]

Con la adición de soporte asíncrono, hay características adicionales disponibles en nuestro agente .NET. Sin embargo, como parte de esta mejora, una pequeña cantidad de características proporcionadas anteriormente por el agente actualmente no están disponibles. Excepto que se indique lo contrario, el agente no utiliza métodos asíncronos para ninguno de los otros [marcos admitidos](/docs/agents/net-agent/getting-started/compatibility-requirements-net-agent) por el agente .NET.

<CollapserGroup>
  <Collapser
    id="HttpClient"
    title="Métodos asíncronos de HttpClient"
  >
    El agente instrumentó estos `HttpClient` métodos asíncronos:

    * `SendAsync`
    * `GetAsync`
    * `PostAsync`
    * `PutAsync`
    * `DeleteAsync`
    * `GetStringAsync`
    * `GetStreamAsync`
    * `GetByteArrayAsync`
  </Collapser>

  <Collapser title="Métodos asíncronos de RestClient">
    El agente instrumentó estos `RestClient` métodos asíncronos:

    * `ExecuteTaskAsync`
    * `ExecuteGetTaskAsync`
    * `ExecutePostTaskAsync`
  </Collapser>

  <Collapser
    id="SqlCommand"
    title="Métodos asíncronos de SqlCommand"
  >
    El agente instrumentó estos `SqlCommand` métodos asíncronos:

    * `ExecuteReaderAsync`
    * `ExecuteNonQueryAsync`
    * `ExecuteScalarAsync`
    * `ExecuteXmlReaderAsync`
  </Collapser>

  <Collapser
    id="SqlDataReader"
    title="Métodos asíncronos de SqlDataReader"
  >
    El agente instrumentó estos `SqlDataReader` métodos asíncronos:

    * `NextResultAsync`
    * `ReadAsync`
  </Collapser>

  <Collapser
    id="NpgsqlCommand"
    title="Métodos asíncronos de NpgsqlCommand (Postgres)"
  >
    El agente instrumentó estos `NpgsqlCommand` métodos asíncronos (Postgres):

    * `ExecuteReaderAsync`
    * `ExecuteNonQueryAsync`
    * `ExecuteScalarAsync`
  </Collapser>

  <Collapser
    id="custom-instrumentation"
    title="Instrumentación personalizada"
  >
    El agente .NET admite [instrumentación personalizada](/docs/agents/net-agent/instrumentation/net-custom-transactions#example-custom-txn-async) de sus propios métodos asíncronos.
  </Collapser>
</CollapserGroup>

## Limitaciones conocidas [#known-issues]

A continuación se muestra un resumen de las limitaciones conocidas para la instrumentación asíncrona con nuestro agente .NET.

<CollapserGroup>
  <Collapser
    id="response-time1"
    title="El tiempo de respuesta es menor que el tiempo total."
  >
    Se espera que el tiempo de respuesta sea menor que el tiempo total invertido en `async`-`await` escenarios de uso. Considere el siguiente ejemplo de código para un extremo web:

    ```cs
    async Task<string> WebEndpointExample() 
    {
        await DoSomethingForSomeSecondsAsync(5); //kick off a 5-second-work to be done.
        return "Complete";
    }

    [Trace]
    [MethodImpl(MethodImplOptions.NoInlining)]
    private static async Task DoSomethingForSomeSecondsAsync(int seconds)
    {
        await Task.Delay(TimeSpan.FromSeconds(seconds));
    }
    ```

    En este ejemplo de código, el `WebEndpointExample` tarda aproximadamente 5 segundos en completarse, por lo que el tiempo de respuesta para la transacción que representa la solicitud al extremo `WebEndpointExample` será de aproximadamente 5 segundos.

    El agente también captura el tiempo "ocupado" (el tiempo que el método instrumentado se está ejecutando realmente) de cada segmento individual que constituye la transacción. Son `WebEndpointExample` y `DoSomethingForSomeSecondsAsync`. Idealmente, el tiempo total de ejecución de los dos segmentos es igual al tiempo de respuesta (aproximadamente 5 segundos).

    Es fácil ver que el tiempo de ejecución de `DoSomethingForSomeSecondsAsync` es de 5 segundos. Sin embargo, el tiempo de ejecución de `WebEndpointExample` debe ser cercano a 0 segundos. (No hace ningún trabajo; es necesario que `await`se complete `DoSomethingForSomeSecondsAsync` .)

    Sin embargo, el agente todavía mide su tiempo de ejecución en aproximadamente 5 segundos. Esto se debe a la incapacidad del agente para detectar el tiempo bloqueado (no el tiempo de CPU) cuando un método está `await`trabajando para otro. Por lo tanto, el tiempo total se informa como 10 segundos, que es mayor que el tiempo de respuesta (aproximadamente 5 segundos).

    Al mismo tiempo, el agente no puede asumir que llamar a los métodos `async` siempre bloquearía a la persona que llama durante todo el tiempo. El siguiente ejemplo demuestra esto:

    ```cs
    async Task<string> WebEndpointExample()
    {
        var task = DoSomethingForSomeSecondsAsync(5); //kick off a 5-second-work to be done.

        //Do something less than 5 seconds here.

        await task;
        return "Complete";
    }

    [Trace]
    [MethodImpl(MethodImplOptions.NoInlining)]
    private static async Task DoSomethingForSomeSecondsAsync(int seconds)
    {
        await Task.Delay(TimeSpan.FromSeconds(seconds));
    }
    ```

    En este ejemplo, el tiempo de respuesta sigue siendo de aproximadamente 5 segundos, pero el tiempo de ejecución real de `WebEndpointExample` ya no es aproximadamente 0.
  </Collapser>

  <Collapser
    id="asp-pipeline"
    title="Requiere pipeline ASP actualizado"
  >
    El agente .NET no utilizará métodos asíncronos si el pipeline ASP legacy está presente. Dado que Microsoft reemplazó el pipeline ASP legacy mucho antes de que se introdujeran los métodos asíncronos, este problema normalmente solo afecta a las aplicaciones creadas en .NET framework 4.0 o inferior y luego migradas a .NET framework 4.5 o superior.

    Para ver si este problema afecta su solicitud y cómo resolverlo si lo hace, [revise los procedimientos de resolución de problemas](/docs/agents/net-agent/troubleshooting/missing-async-metrics).
  </Collapser>

  <Collapser
    id="task-not-void"
    title="Tipo de devolución Requisitos de la tarea"
  >
    El agente .NET no admite la instrumentación de métodos asíncronos que tengan un tipo de retorno distinto de `Task` o `Task<T>`. El agente no admite `async void` métodos.

    Para obtener más información, consulte la documentación de Microsoft sobre [los tipos de devolución asíncronos](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/async-return-types):

    * [`Task<TResult>`](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/async-return-types#BKMK_TaskTReturnType) tipo de devolución
    * [Vacío Async](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/async-return-types#BKMK_VoidReturnType)
    * [Tipos de retorno asíncronos generalizados](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/async-return-types#generalized-async-return-types-and-valuetasktresult)
  </Collapser>

  <Collapser
    id="begin-end-style"
    title="Sin instrumentación para el estilo de inicio y fin."
  >
    El agente .NET no utiliza ningún método .NET que utilice el estilo `begin*` y `end*` , excepto [la aplicación WCF](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-call-wcf-service-operations-asynchronously). Fuera de esta excepción, si su aplicación llama a este tipo de métodos, el agente no creará segmentos para ellos. Sin embargo, el resto de su transacción y segmentos se crearán correctamente.
  </Collapser>

  <Collapser
    id="manual-created-threads-capture"
    title="Segmentos/métricas con alcance en roscas creadas manualmente"
  >
    El agente .NET no captura métricas de alcance ni segmentos dentro de subprocesos creados manualmente por su aplicación.
  </Collapser>

  <Collapser
    id="async-await"
    title="Los métodos asíncronos instrumentados deben usar await, no Task.Result"
  >
    Si su aplicación llama a métodos asíncronos instrumentados, utilice `await` en lugar de `Task` métodos relacionados como `Task.Result()` para esperar los resultados. De lo contrario, es posible que la instrumentación no funcione correctamente.

    En general, evite utilizar `Task.Result()` al llamar a métodos asíncronos. Puede conducir a [puntos muertos](https://blog.stephencleary.com/2012/07/dont-block-on-async-code.html).
  </Collapser>

  <Collapser
    id="continue-with-timing"
    title="El bloque Continuar con puede afectar las mediciones de tiempo"
  >
    Si agrega su propio bloque `ContinueWith({})` a la promesa devuelta por un método asíncrono instrumentado, puede afectar las mediciones de tiempo informadas por la instrumentación. Por ejemplo, el tiempo puede incluir el tiempo que tarda su `ContinueWith` en ejecutarse.
  </Collapser>

  <Collapser
    id="iis-wcf-nesting"
    title="Problema con el anidamiento en aplicaciones WCF alojadas en IIS"
  >
    [Los servicios WCF](/docs/agents/net-agent/instrumentation/instrumenting-wcf-applications) alojados en IIS no anidan correctamente el segmento <DNT>**WCF**</DNT> debajo del segmento `ExecuteRequestHandler` . Los dos segmentos aparecerán como hermanos dentro de una traza de la transacción, aunque [el tiempo total](/docs/data-analysis/user-interface-functions/response-time#response-time-total-time) informado será exacto.
  </Collapser>

  <Collapser
    id="stack-traces-segments"
    title="Los segmentos no crean automáticamente el rastreo del stack"
  >
    Los segmentos en una traza de la transacción no generarán el rastreo de la pila automáticamente, incluso si duran más de `transaction_tracer.stack_trace_threshold`.
  </Collapser>
</CollapserGroup>
