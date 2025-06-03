---
title: Agregar detalle a transacción vía XML (.NET)
tags:
  - Agents
  - NET agent
  - Custom instrumentation
metaDescription: 'New Relic .NET agent: Use an XML file to collect data from un-instrumented methods and to block instrumentation of methods you do not want instrumented.'
freshnessValidatedDate: never
translationType: machine
---

New Relic recopila y reporta información sobre transacciones browser web y transacciones no web (tareas en segundo plano). Normalmente, el agente .NET produce información completa automáticamente, sin necesidad de modificar el código de su aplicación. Sin embargo, si New Relic no es compatible con su [framework](/docs/agents/net-agent/getting-started/compatibility-requirements-net-agent#architecture), es posible que deba agregar [instrumentación personalizada](/docs/agents/net-agent/instrumentation/net-custom-instrumentation).

New Relic utiliza el método rastreador para implementar instrumentación personalizada. Un rastreador de métodos es una sonda de software que se puede aplicar a un método de cualquier clase. El agente .NET carga las directivas de instrumentación que definen qué métodos deben trazarse desde todos los archivos XML en el directorio de extensiones.

Este documento describe el trabajo instrumentado cuando el agente ya está cobrando la transacción, pero desea agregar más detalles a esas transacciones. Para que el instrumento funcione cuando el agente no está creando transacciones automáticamente, consulte [Crear transacción vía XML](/docs/agents/net-agent/instrumentation/net-custom-transactions). También puedes agregar detalles y crear transacciones [decorando tu código con atributo](/docs/agents/net-agent/api-guides/net-agent-api-instrument-using-attributes).

## Agregue detalles con instrumentación personalizada [#procedures]

Los archivos de extensión definen una serie de fábricas de rastreadores en un elemento de instrumentación. Cada fábrica de rastreador contiene elementos coincidentes que definen el ensamblado, el nombre de clase completo y el nombre del método a coincidir. Para definir un nuevo archivo XML de instrumentación personalizada:

1. Cree un nuevo archivo `.xml` en el directorio de extensiones utilizado por el agente .NET para leer cada archivo XML y definir su conjunto de instrumentación. Para el agente de .NET framework , utilice la siguiente ubicación:

   ```
   C:\ProgramData\New Relic\.NET Agent\Extensions
   ```

   <Callout variant="important">
     **No** pongas el .xml archivo en el directorio `C:\Program Files\New Relic\.NET agent\Extensions` . El archivo debe estar en la ubicación del archivo `ProgramData` para que funcione la instrumentación personalizada.

     No modifique los archivos xml distribuidos. Estos archivos se sobrescriben cada vez que se actualiza el agente.
   </Callout>

2. Copie esta plantilla en el archivo que creó y utilice [la muestra](#sample) como ejemplo. Esto instrumentó dos métodos pero puede agregar métodos a su archivo de instrumentación.

   <Callout variant="tip">
     Los valores `AssemblyName`, `NameSpace.ClassName` y `MethodName` distinguen entre mayúsculas y minúsculas.
   </Callout>

   ```xml
   <?xml version="1.0" encoding="utf-8"?>
   <extension xmlns="urn:newrelic-extension">
     <instrumentation>
       <!-- These methods appear in the transactions breakdown table and in transaction traces -->
       <tracerFactory metricName="Category/Name">
         <match assemblyName="AssemblyName" className="NameSpace.ClassName">
           <exactMethodMatcher methodName="MethodName" />
         </match>
       </tracerFactory>
       <tracerFactory metricName="Category/Name2"> 
          <match assemblyName="AssemblyName" className="NameSpace.ClassName2"> 
           <exactMethodMatcher methodName="MethodName2" /> 
          </match>
       </tracerFactory>
     </instrumentation>
   </extension>
   ```

3. [Valide el archivo de instrumentación `.xml` ](#xsd-validate)con `extension.xsd`.

4. Aplicaciones que no son IIS (como una aplicación de consola o un proceso en segundo plano): también debe [crear transacciones a través de XML](/docs/agents/net-agent/instrumentation/net-custom-transactions) para contener los métodos que utiliza. Los métodos personalizados instrumentados fuera de una transacción no serán informados a New Relic.

5. <Callout variant="important">
     Si la versión de su agente .NET es 7.0 o superior, este es el final del procedimiento.

     Si la versión de su agente .NET es inferior a 7.0, continúe con los siguientes pasos.
   </Callout>

6. Si su aplicación está alojada en IIS, reinicie IIS.

7. Para aplicaciones que no sean IIS, reinicie el proceso de host de su aplicación o la aplicación misma.

<Callout variant="important">
  Si algunos de sus métodos aún no aparecen en traza después de agregar instrumentación personalizada XML, deshabilite la inserción de métodos para esos métodos con `[MethodImpl(MethodImplOptions.NoInlining)]`.
</Callout>

## Ignorar una transacción [#blocking-instrumentation]

Puede evitar que una transacción sea reportada utilizando un archivo de instrumentación personalizada. Siempre que se llama a un método ignorado, el agente .NET ignora toda la transacción principal. Esto es lo mismo que llamar a `IgnoreTransaction()`.

Para ignorar una transacción:

1. [Agregue instrumentación personalizada](#procedures).

2. Añade un `tracerFactory` cuyo nombre es `NewRelic.Agent.Core.Tracer.Factories.IgnoreTransactionTracerFactory`:

   ```xml
   <tracerFactory name="NewRelic.Agent.Core.Tracer.Factories.IgnoreTransactionTracerFactory">
     <match assemblyName="System.Web.Extensions" className="System.Web.Handlers.ScriptResourceHandler">
       <exactMethodMatcher methodName="Throw404" />
     </match>
   </tracerFactory>
   ```

## Seguimiento del trabajo asincrónico en una transacción separada [#track-async]

En algunos casos, se puede realizar un seguimiento del trabajo asincrónico como una transacción independiente aplicando la instrumentación `AsyncForceNewTransactionWrapper` :

```xml
<tracerFactory name="AsyncForceNewTransactionWrapper">
  <match assemblyName="AssemblyName" className="Namespace.ClassName">
    <exactMethodMatcher methodName="MethodName" />
  </match>
</tracerFactory>
```

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Consideraciones de uso asíncrono
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Método instrumentado
      </td>

      <td>
        El método instrumentado debe invocarse mediante `Task.Run`, `Task.Factory.StartNew` o `new Thread()`. No se puede invocar utilizando la palabra clave `await` .
      </td>
    </tr>

    <tr>
      <td>
        Tipo de devolución
      </td>

      <td>
        No es necesario que el método instrumentado sea `async`. Sin embargo, si es `async`, debe tener un tipo de retorno de `Task` o `Task<T>`. No puede tener un tipo de devolución `void` .
      </td>
    </tr>

    <tr>
      <td>
        Instrumentación de atributos
      </td>

      <td>
        Al método instrumentado no se le puede aplicar instrumentación de atributos. No se puede decorar con el atributo `[Transaction]` o `[Trace]` .
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="async-method-definitions"
    title="Definiciones de métodos de ejemplo"
  >
    Los siguientes métodos se pueden instrumentar utilizando la instrumentación personalizada `AsyncForceNewTransactionWrapper` :

    ```cs
    private void SyncMethod()
    {
    }

    private async Task AsyncMethod_Task()
    {
    }

    private async Task<string> AsyncMethod_TypedTask()
    {
        return "ok";
    }
    ```

    Los siguientes métodos <DNT>**cannot**</DNT> se instrumentan utilizando la `AsyncForceNewTransactionWrapper` instrumentación personalizada:

    ```cs
    private async void AsyncMethod_Void()
    {
    }

    [Transaction]
    private void TransactionAttributedMethod()
    {
    }

    [Trace]
    private void TracedAttributedMethod()
    {
    }
    ```
  </Collapser>

  <Collapser
    id="async-method-invocations"
    title="Invocaciones de métodos de ejemplo"
  >
    Las siguientes llamadas a métodos se pueden utilizar con la instrumentación `AsyncForceNewTransactionWrapper` :

    ```cs
    Task.Run(SyncMethod);

    Task.Factory.StartNew(AsyncMethod_Task);

    var newThread = new Thread(new ThreadStart(SyncMethod));
    newThread.Start();
    ```

    Las siguientes llamadas al método <DNT>**cannot**</DNT> se utilizarán con la instrumentación `AsyncForceNewTransactionWrapper` :

    ```cs
    SyncMethod();              // This is not an asynchronous call

    await AsyncMethod_Task();  // Not started with Task.Run, Task.Factor.StartNew, or new Thread()

    AsyncMethod_Void();        // Async Void is not supported
    ```
  </Collapser>
</CollapserGroup>

## Ejemplo MiInstrumentación.xml [#sample]

Este ejemplo instrumentó dos métodos e ignora otro método:

* <DNT>
    **Instrument**
  </DNT>

  : `CustomInstrumentDemo.Controllers.FirstController.FirstExample()`

* <DNT>
    **Instrument**
  </DNT>

  : `CustomInstrumentDemo.Controllers.SecondController.SecondExample()`

* <DNT>
    **Ignore**
  </DNT>

  : `CustomInstrumentDemo.Controllers.SecondController.ThirdExample()`

* <DNT>
    **Instrument**
  </DNT>

  : `CustomInstrumentDemo.Controllers.SecondController.FourthExample(int id, string name)`

Para implementar este esquema de instrumentación personalizada, utilice el siguiente archivo de ejemplo y métodos instrumentados:

<CollapserGroup>
  <Collapser
    id="example-file"
    title="Ejemplo de fichero personalizado de instrumentación"
  >
    El siguiente es un ejemplo de archivo personalizado de instrumentación denominado `MyInstrumentation.xml`:

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <extension xmlns="urn:newrelic-extension">
      <instrumentation>
        <!-- instrument CustomInstrumentDemo.Controllers.FirstController.FirstExample and creates metric named Custom/Foo1 -->
        <tracerFactory metricName="Custom/Foo1">
          <match assemblyName="CustomInstrumentDemo" className="CustomInstrumentDemo.Controllers.FirstController">
            <exactMethodMatcher methodName="FirstExample" />
          </match>
        </tracerFactory>

        <!-- instrument CustomInstrumentDemo.Controllers.SecondController.SecondExample -->
        <tracerFactory>
          <match assemblyName="CustomInstrumentDemo" className="CustomInstrumentDemo.Controllers.SecondController">
            <exactMethodMatcher methodName="SecondExample" />
          </match>
        </tracerFactory>

        <!-- ignore CustomInstrumentDemo.Controllers.SecondController.ThirdExample -->
        <tracerFactory name="NewRelic.Agent.Core.Tracer.Factories.IgnoreTransactionTracerFactory">
          <match assemblyName="CustomInstrumentDemo" className="CustomInstrumentDemo.Controllers.SecondController">
            <exactMethodMatcher methodName="ThirdExample" />
          </match>
        </tracerFactory>

        <!-- instrument CustomInstrumentDemo.Controllers.SecondController.FourthExample and creates metric named Custom/{value},
             where {value} is the value of the first string parameter of the instrumented method
             (in this case, the first string parameter is "name"). -->
        <tracerFactory name="NewRelic.Agent.Core.Tracer.Factories.CustomSegmentTracerFactory">
          <match assemblyName="CustomInstrumentDemo" className="CustomInstrumentDemo.Controllers.SecondController">
            <exactMethodMatcher methodName="FourthExample" />
          </match>
        </tracerFactory>
      </instrumentation>
    </extension>
    ```
  </Collapser>

  <Collapser
    id="example-methods"
    title="Métodos de ejemplo para ser instrumentado"
  >
    Este código contiene los tres métodos especificados en el [archivo de instrumentación personalizado de ejemplo](#example-file):

    ```cs
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using System.Web.Mvc;
    using System.Threading;

    namespace CustomInstrumentDemo.Controllers
    {
        public class FirstController : Controller
        {
            public ActionResult Foo1()
            {
                ViewBag.Message = "Your Sample Page";
                FirstExample();
                return View();
            }

            public void FirstExample()
            {
                int firstVar = 1;
                for (int i = 0; i <= 500; i++)
                {
                    firstVar *= 5;
                    Thread.Sleep(50);
                } 
            }
        }

        public class SecondController : Controller
        {
            public ActionResult Foo2()
            {
                ViewBag.Message = "This view will include detailed information on the SecondExample method";
                SecondExample();
                return view;
            }

            public ActionResult Foo3()
            {
                ViewBag.Message = "This view will be ignored because of the inclusion of the ThirdExample method";
                ThirdExample();
            }

            public void SecondExample()
            {
                int secondVar = 2;

                using (var connection = new SqlConnection(ConnectionStrings["MsSqlConnection"].ConnectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand("SELECT * FROM table", connection))
                    using (var reader = command.ExecuteReader())
                    {
                        reader.Read();
                    }
                }
            }

            public void ThirdExample()
            {
                try
                {
                    var ImNotABool = "43";
                    bool.Parse(ImNotABool);
                }
                catch (Exception ex)
                {
                    NewRelic.Api.Agent.NewRelic.NoticeError(ex);
                }
            }

            public void FourthExample(int id, string name)
            {
                Console.WriteLine("The ID passed in was " + id + " and the name passed in was " + name);
            }
        }
    }
    ```
  </Collapser>
</CollapserGroup>

## Nombre métrica

La métrica creada desde rastreador se nombrará utilizando el nombre de clase y el nombre del método coincidente. Puede anular este nombre con el atributo `metricName` . Comience `metricName` con `Custom/` (por ejemplo, `metricName="Custom/OrderSubmissions"`).

```xml
<!-- instruments MyCompany.Order.Submit() and creates a metric named Custom/OrderSubmissions -->
<tracerFactory metricName="Custom/OrderSubmissions">
  <match assemblyName="MyCompany" className="MyCompany.Order">
    <exactMethodMatcher methodName="Submit" />
  </match>
</tracerFactory>
```

## Nombre transacción

El agente nombra las transacciones utilizando el rastreador en la transacción con la mayor prioridad de denominación.

* La transacción web puede denominarse utilizando el controlador HTTP, el nombre de ASP, el nombre del controlador MVC o el nombre del servicio web, dependiendo del rastreador invocado en la ejecución de la transacción.
* Las transacciones en segundo plano sin ningún rastreador que nombre explícitamente la transacción se resumen en un único nombre de transacción.

Utilice el atributo `transactionNamingPriority` para indicarle al agente que le dé prioridad al nombre de una transacción rastreadora. Los valores válidos son `1` a `7`, donde `7` tiene prioridad sobre `1` a `6`. Además, el atributo `metricName` debe comenzar con `Custom/` (por ejemplo, `metricName="Custom/instance"`).

```xml
<!-- instructs the agent to create a metric for MyControllerBase.Execute and to name the transaction using this tracer's metric name -->
<tracerFactory metricName="Custom/instance" transactionNamingPriority="7">
  <match assemblyName="MyCompany" className="MyCompany.MyControllerBase">
    <exactMethodMatcher methodName="Execute" />
  </match>
</tracerFactory>
```

## Validación XSD [#xsd-validate]

El archivo de instrumentación XML se puede comparar con el archivo XSD (ubicado en `C:\ProgramData\New Relic\.NET Agent\Extensions\extension.xsd`) con cualquier validador XSD.

## Resolución de problemas

El agente .NET escribirá un mensaje de registro en `NewRelic.Profiler.####.log` (donde `####` es el PID del proceso instrumentado) a medida que reescribe los métodos. Esto ayuda a verificar que se esté leyendo la instrumentación personalizada y que se estén instrumentando los métodos adecuados.

<Callout variant="tip">
  Evite utilizar el atributo `name` del elemento `tracerFactory` en instrumentación personalizada. Para obtener más información, revise el archivo de esquema `extension.xsd` en el directorio del agente.
</Callout>
