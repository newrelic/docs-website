---
title: Instrumentación personalizada vía atributo (.NET)
tags:
  - Agents
  - NET agent
  - Custom instrumentation
metaDescription: How to collect data from uninstrumented parts of your code by using New Relic's .NET agent API for custom instrumentation.
freshnessValidatedDate: never
translationType: machine
---

El agente .NET de New Relic ofrece varias opciones para [instrumentación personalizada](/docs/agents/net-agent/instrumentation/net-custom-instrumentation). La instrumentación personalizada le permite instrumentar partes de su aplicación que no se instrumentan automáticamente. Este documento describe cómo instrumentar su aplicación decorando los métodos en el código de su aplicación con atributos.

* Utilice el atributo `Transaction` para crear una transacción personalizada. También puede marcar la transacción personalizada como una transacción web con la propiedad `Web` del atributo.
* Utilice el atributo `Trace` para agregar instrumentación personalizada a los métodos que se invocan dentro de una transacción preexistente.

## Requisitos y recomendaciones [#requirements]

Los requisitos incluyen:

* Agente .NET versión [6.16.178.0](/docs/release-notes/agent-release-notes/net-release-notes/net-agent-6161780) o superior.
* Debes estar dispuesto a modificar tu código fuente. Si no puede o no quiere modificar su código fuente, utilice [instrumentación personalizada a través de XML](/docs/agents/net-agent/custom-instrumentation/custom-instrumentation-xml-net).
* Su proyecto debe tener una referencia a `NewRelic.Api.Agent.dll` (por ejemplo, instalar el paquete y colocar `using NewRelic.Api.Agent;` en su código). Este paquete está en la [galería NuGet](https://www.nuget.org/packages/NewRelic.Agent.Api/).
* Los atributos `Transaction` y `Trace` deben aplicarse a implementaciones concretas de métodos. No se pueden aplicar en interfaces o definiciones de métodos de superclase.

## Transacción llamada dentro de transacción [#tx-vs-trace]

Los métodos decorados con el atributo `[Transaction]` solo crearán una nueva transacción cuando ya no exista ninguna. Cuando se llama a un método decorado con `[Transaction]` desde <DNT>**within**</DNT> una transacción iniciada anteriormente, se tratará como el atributo `[Trace]` y proporcionará más información sobre la transacción existente.

<CollapserGroup>
  <Collapser
    id="example-tx-vs-trace"
    title={<>Ejemplo: llamar <InlineCode>Transaction</InlineCode> en una transacción ya iniciada</>}
  >
    Durante la ejecución de esta aplicación de consola, se llamará primero a `OuterMethod` y se creará una nueva transacción. El `InnerMethod` se llama desde la transacción iniciada por `OuterMethod`, por lo que no creará una nueva transacción. En cambio, se realizará un seguimiento de la información sobre la ejecución de `InnerMethod` como si se hubiera aplicado el atributo `[Trace]` .

    ```cs
    static void Main(string[] args)
    {
        OuterMethod();
    }

    [Transaction]
    public void OuterMethod()
    {
        InnerMethod();
    }

    [Transaction]
    public void InnerMethod()
    {
        // inner method code
    }
    ```
  </Collapser>
</CollapserGroup>

## Crear una nueva transacción no web [#create-background-txn]

Para iniciar una transacción no web (también conocida como solicitud en segundo plano) con el atributo `Transaction` :

```cs
[Transaction]
public void Run()
{
    // your background task
}
```

Para obtener detalles sobre por qué utilizar web o no web, consulte [Clasificar como web o no web](/docs/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation#web-background).

## Crear una nueva transacción web [#create-web-txn]

Para indicarle al agente que marque una tarea que no sea web como una transacción browser web, utilice cualquiera de estas opciones:

* Establezca la propiedad `Web` del atributo `Transaction` en `true`.
* Establezca el URI de la transacción con [`SetTransactionUri()`](/docs/agents/net-agent/net-agent-api).

```cs
[Transaction(Web = true)]
public void Run()
{
    var uri = new Uri("https://www.mydomain.com/path");
    NewRelic.Api.Agent.NewRelic.SetTransactionUri(uri);

    // your web task
}
```

Cuando se utiliza dentro de una [transacción iniciada anteriormente](#tx-vs-trace), se tratará como un atributo `[Trace]` .

Para obtener detalles sobre por qué utilizar web o no web, consulte [Clasificar como web o no web](/docs/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation#web-background).

## Agregar detalles a la transacción existente con `Trace` [#add-trace]

Si su traza de la transacción muestra grandes bloques de tiempo no instrumentados y desea incluir métodos adicionales dentro de la traza, puede utilizar el atributo `Trace` :

```cs
[Trace]
protected void MethodWithinTransaction()
{
    // your app code
}
```

<Callout variant="important">
  Si algunos de sus métodos no aparecen en traza después de agregar el atributo `[Trace]` , deshabilite la inserción de métodos para esos métodos con `[MethodImpl(MethodImplOptions.NoInlining)]`.
</Callout>

<Callout variant="important">
  Ejecutar su aplicación desde Visual Studio en modo <DNT>**debug**</DNT> puede evitar que algunos métodos aparezcan en New Relic traza. Para garantizar que los métodos aparezcan en New Relic, ejecute la aplicación en modo de lanzamiento a través de la línea de comando.
</Callout>

## Propiedades para `Transaction` [#properties]

El atributo `Transaction` admite las siguientes propiedades:

<CollapserGroup>
  <Collapser
    id="trace-dispatcher"
    title={<InlineCode>Web</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            Booleano
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `false`
          </td>
        </tr>
      </tbody>
    </table>

    Si `true`, el agente inicia una transacción web cuando alcanza este atributo `Transaction` . Si una transacción está en curso, esa transacción continuará.

    Si es `false` (predeterminado), el agente inicia una transacción no web cuando alcanza este atributo `Transaction` . Por ejemplo:

    ```cs
    [Transaction(Web = true)]
    ```
  </Collapser>
</CollapserGroup>

## Ejemplo: instrumento cuatro métodos [#example-app]

<CollapserGroup>
  <Collapser
    id="example-app"
    title="Aplicación de ejemplo"
  >
    ```cs
    namespace Test
    {
        class Program
        {
            static void Main(string[] args)
            {
                var test = new MyClass();
                test.Method1(); // Creates a transaction named Method1 in the Web category.
                test.Method2(); // Creates a transaction named Method2 in the Custom category.
                test.Method3(); // Creates a transaction named Method2 in the Custom category.

                // Method4 won't create a new transaction, 
                // only add a segment to an existing transaction
                test.Method4();
            }
        }

        public class MyClass
        {
            // The agent creates a Web transaction that includes an external service 
            // request in its transaction traces.
            [Transaction(Web = true)]
            public void Method1()
            {
                new WebClient().DownloadString("https://www.google.com/");
            }

            // Creates a Custom transaction containing one segment.
            [Transaction]
            public void Method2()
            {
                // The Method3 segment will be created
                Method3();
                // The Method4 segment will contain your SQL query inside of it and 
                // possibly an execution plan.
                Method4();
            }

            // Method3 will be appear as a segment when called in Method2()
            // but will create a transaction when called directly in Main()
            [Transaction]
            public void Method3()
            {
                Thread.Sleep(1000);
            }

            // When Method4 is called directly in Main() the agent will not create a transaction.
            // However, when Method4 is called from Method2, Method4 will 
            // appear as a segment containing its SQL query.
            [Trace]
            public void Method4()
            {
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
        }
    }
    ```
  </Collapser>
</CollapserGroup>

## Leer publicaciones del foro sobre instrumentación [#discuss-posts]

Para obtener recomendaciones más específicas, consulte estas publicaciones en nuestra comunidad del Foro de soporte:

* [Solucionar problemas de instrumentación personalizada basada en atributos](https://discuss.newrelic.com/t/relic-solution-troubleshooting-attribute-based-custom-instrumentation-issues/68726)
* [Construya fábricas de rastreadores de instrumentación personalizada a partir del agente .NET archivo de registro](https://discuss.newrelic.com/t/building-custom-instrumentation-tracer-factories-from-net-agent-log-files/39363)

## Utilice otras funciones API [#other-api]

Para obtener más información sobre la API del agente .NET y su funcionalidad, consulte [la guía API del agente .NET](/docs/agents/net-agent/api-guides/guide-using-net-agent-api) de New Relic. Para instrumentación personalizada sin modificar su código fuente, consulte [Crear transacción vía XML](/docs/agents/net-agent/instrumentation/net-custom-transactions) y [Agregar detalles a transacción vía XML](/docs/agents/net-agent/custom-instrumentation/add-detail-transactions-xml-net).
