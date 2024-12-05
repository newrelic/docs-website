---
title: Adicionar detalhes à transação via XML (.NET)
tags:
  - Agents
  - NET agent
  - Custom instrumentation
metaDescription: 'New Relic .NET agent: Use an XML file to collect data from un-instrumented methods and to block instrumentation of methods you do not want instrumented.'
freshnessValidatedDate: never
translationType: machine
---

A New Relic coleta e relata informações sobre transações de browsers da web e transações fora da web (tarefas em segundo plano). Normalmente o agente .NET produz informações completas automaticamente, sem necessidade de você modificar o código do seu aplicativo. No entanto, se o New Relic não oferecer suporte à sua [framework](/docs/agents/net-agent/getting-started/compatibility-requirements-net-agent#architecture), pode ser necessário adicionar [instrumentação personalizada](/docs/agents/net-agent/instrumentation/net-custom-instrumentation).

A New Relic usa o rastreador de método para implementar instrumentação personalizada. Um tracer de método é uma sonda de software que você pode colocar em um método de qualquer classe. O agente .NET carrega as diretivas de instrumentação que definem quais métodos devem ser rastreados de todos os arquivos XML no diretório de extensões.

Este documento descreve o trabalho instrumentado quando o agente já está cobrando a transação, mas deseja adicionar mais detalhes a essa transação. Para que o instrumento funcione quando o agente não está criando a transação automaticamente, consulte [Criar transação via XML](/docs/agents/net-agent/instrumentation/net-custom-transactions). Você também pode adicionar detalhes e criar transações [decorando seu código com atributo](/docs/agents/net-agent/api-guides/net-agent-api-instrument-using-attributes).

## Adicione detalhes com instrumentação personalizada [#procedures]

Os arquivos de extensão definem um número de fábricas tracer em um elemento de instrumentação. Cada fábrica tracer contém elementos de correspondência que definem o assembly, o nome completo da classe e o nome do método a serem correspondidos. Para definir um novo arquivo XML de instrumentação personalizada:

1. Crie um novo arquivo `.xml` no diretório de extensões usado pelo agente .NET para ler cada arquivo XML e definir seu conjunto de instrumentação. Para o agente do .NET framework , use o seguinte local:

   ```
   C:\ProgramData\New Relic\.NET Agent\Extensions
   ```

   <Callout variant="important">
     **Não** coloque o .xml arquivo no diretório `C:\Program Files\New Relic\.NET agent\Extensions` . O arquivo deve estar no local do arquivo `ProgramData` para que a instrumentação personalizada funcione.

     Não modifique os arquivos XML distribuídos. Esses arquivos são substituídos sempre que o agente é atualizado.
   </Callout>

2. Copie este modelo no arquivo que você criou e use [a amostra](#sample) como exemplo. Este instrumento tem dois métodos, mas você pode adicionar métodos ao seu arquivo de instrumentação.

   <Callout variant="tip">
     Os valores `AssemblyName`, `NameSpace.ClassName` e `MethodName` diferenciam maiúsculas de minúsculas.
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

3. [Valide o arquivo de instrumentação `.xml` ](#xsd-validate)em relação a `extension.xsd`.

4. Aplicativos não IIS (como um aplicativo de console ou processo em segundo plano): você também deve [criar uma transação via XML](/docs/agents/net-agent/instrumentation/net-custom-transactions) para conter os métodos que você instrumento. Métodos personalizados instrumentados fora de uma transação não serão informados à New Relic.

5. <Callout variant="important">
     Se a versão do seu agente .NET for 7.0 ou superior, este é o fim do procedimento.

     Se a versão do seu agente .NET for inferior a 7.0, prossiga para as próximas etapas.
   </Callout>

6. Se o seu aplicativo estiver hospedado no IIS, reinicie o IIS.

7. Para aplicativos não IIS, reinicie o processo host do seu aplicativo ou o próprio aplicativo.

<Callout variant="important">
  Se alguns dos seus métodos ainda não aparecerem no rastreamento depois de adicionar a instrumentação personalizada XML, desative o método embutido para esses métodos com `[MethodImpl(MethodImplOptions.NoInlining)]`.
</Callout>

## Ignorar uma transação [#blocking-instrumentation]

Você pode impedir que uma transação seja informada usando um arquivo de instrumentação personalizada. Sempre que um método ignorado é chamado, o agente .NET ignora toda a transação pai. Isso é o mesmo que chamar `IgnoreTransaction()`.

Para ignorar uma transação:

1. [Adicione instrumentação personalizada](#procedures).

2. Adicione um `tracerFactory` cujo nome é `NewRelic.Agent.Core.Tracer.Factories.IgnoreTransactionTracerFactory`:

   ```xml
   <tracerFactory name="NewRelic.Agent.Core.Tracer.Factories.IgnoreTransactionTracerFactory">
     <match assemblyName="System.Web.Extensions" className="System.Web.Handlers.ScriptResourceHandler">
       <exactMethodMatcher methodName="Throw404" />
     </match>
   </tracerFactory>
   ```

## Acompanhe o trabalho assíncrono em uma transação separada [#track-async]

Em alguns casos, o trabalho assíncrono pode ser rastreado como uma transação separada aplicando a instrumentação `AsyncForceNewTransactionWrapper` :

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
        Considerações de uso assíncrono
      </th>

      <th>
        Comentários
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Método instrumentado
      </td>

      <td>
        O método instrumentado deve ser invocado usando `Task.Run`, `Task.Factory.StartNew` ou `new Thread()`. Não pode ser invocado usando a palavra-chave `await` .
      </td>
    </tr>

    <tr>
      <td>
        Tipo de retorno
      </td>

      <td>
        O método instrumentado não precisa ser `async`. Porém, se for `async`, deverá ter um tipo de retorno `Task` ou `Task<T>`. Não pode ter um tipo de retorno `void` .
      </td>
    </tr>

    <tr>
      <td>
        Atributo instrumentação
      </td>

      <td>
        O método instrumentado não pode ter atributo instrumentação aplicada a ele. Não pode ser decorado com o atributo `[Transaction]` ou `[Trace]` .
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="async-method-definitions"
    title="Exemplo de definições de método"
  >
    Os métodos a seguir podem ser instrumentados usando a instrumentação personalizada `AsyncForceNewTransactionWrapper` :

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

    Os seguintes métodos <DNT>**cannot**</DNT> podem ser instrumentados usando a `AsyncForceNewTransactionWrapper` instrumentação personalizada:

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
    title="Exemplo de invocações de método"
  >
    As seguintes chamadas de método podem ser usadas com instrumentação `AsyncForceNewTransactionWrapper` :

    ```cs
    Task.Run(SyncMethod);

    Task.Factory.StartNew(AsyncMethod_Task);

    var newThread = new Thread(new ThreadStart(SyncMethod));
    newThread.Start();
    ```

    As seguintes chamadas de método <DNT>**cannot**</DNT> podem ser usadas com instrumentação `AsyncForceNewTransactionWrapper` :

    ```cs
    SyncMethod();              // This is not an asynchronous call

    await AsyncMethod_Task();  // Not started with Task.Run, Task.Factor.StartNew, or new Thread()

    AsyncMethod_Void();        // Async Void is not supported
    ```
  </Collapser>
</CollapserGroup>

## Exemplo MinhaInstrumentação.xml [#sample]

Este exemplo instrumento dois métodos e ignora outro método:

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

Para implementar este esquema de instrumentação personalizada, utilize o seguinte arquivo de exemplo e métodos instrumentados:

<CollapserGroup>
  <Collapser
    id="example-file"
    title="Exemplo de arquivo de instrumentação personalizada"
  >
    A seguir está um exemplo de arquivo de instrumentação personalizada denominado `MyInstrumentation.xml`:

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
    title="Exemplos de métodos a serem instrumentados"
  >
    Este código contém os três métodos especificados pelo [arquivo de instrumentação personalizada de exemplo](#example-file):

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

## Nome métrica

A métrica criada a partir do rastreador será nomeada usando o nome da classe e o nome do método correspondente. Você pode substituir esse nome pelo atributo `metricName` . Comece `metricName` com `Custom/` (por exemplo, `metricName="Custom/OrderSubmissions"`).

```xml
<!-- instruments MyCompany.Order.Submit() and creates a metric named Custom/OrderSubmissions -->
<tracerFactory metricName="Custom/OrderSubmissions">
  <match assemblyName="MyCompany" className="MyCompany.Order">
    <exactMethodMatcher methodName="Submit" />
  </match>
</tracerFactory>
```

## Nome transação

O agente nomeia as transações usando o tracer na transação com maior prioridade de nomenclatura.

* A transação da web pode ser nomeada usando o manipulador HTTP, o nome ASP, o nome do controlador MVC ou o nome do serviço web, dependendo do rastreador invocado na execução da transação.
* As transações em segundo plano sem tracer que nomeie explicitamente a transação são acumuladas em um único nome de transação.

Use o atributo `transactionNamingPriority` para instruir o agente a dar prioridade de nomenclatura a uma transação tracer . Os valores válidos são `1` a `7`, onde `7` tem precedência sobre `1` a `6`. Além disso, o atributo `metricName` deve começar com `Custom/` (por exemplo, `metricName="Custom/instance"`).

```xml
<!-- instructs the agent to create a metric for MyControllerBase.Execute and to name the transaction using this tracer's metric name -->
<tracerFactory metricName="Custom/instance" transactionNamingPriority="7">
  <match assemblyName="MyCompany" className="MyCompany.MyControllerBase">
    <exactMethodMatcher methodName="Execute" />
  </match>
</tracerFactory>
```

## Validação XSD [#xsd-validate]

O arquivo de instrumentação XML pode ser verificado em relação ao arquivo XSD (localizado em `C:\ProgramData\New Relic\.NET Agent\Extensions\extension.xsd`) com qualquer validador XSD.

## Resolução de problemas

O agente .NET escreverá uma mensagem do log em `NewRelic.Profiler.####.log` (onde `####` é o PID do processo instrumentado) enquanto reescreve os métodos. Isso ajuda a verificar se a instrumentação customizada está sendo lida e se os métodos adequados estão sendo instrumentados.

<Callout variant="tip">
  Evite usar o atributo `name` do elemento `tracerFactory` na instrumentação personalizada. Para obter mais informações, revise o arquivo de esquema `extension.xsd` no diretório do agente.
</Callout>
