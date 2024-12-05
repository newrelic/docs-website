---
title: Relatórios do agente .NET trataram erros
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: How to prevent New Relic's .NET agent from reporting handled errors as though they are standard errors.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Os relatórios do agente .NET da New Relic trataram os erros como se fossem erros padrão. Isto é mais comum com funções de trabalhador do Azure, aplicações de consola, trabalho assíncrono e operações semelhantes.

## Solução

Para evitar falsos relatórios de erros, utiliza-se um método que contém direta ou indiretamente o manipulador de exceções. instrumento o método alvo definindo um arquivo [de instrumentação personalizada](/docs/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation) , ou envolvendo o método em uma [transação customizada](/docs/agents/net-agent/custom-instrumentation/create-transactions-xml-net), conforme mostrado neste exemplo:

<CollapserGroup>
  <Collapser
    id="get-response-block"
    title="GetResponse() gera um erro"
  >
    Neste exemplo, o New Relic relata um erro de `GetResponse()` <DNT>**unless**</DNT> o método `Foo()` é instrumentado. Contanto que `Foo` seja instrumentado, o New Relic inicia uma transação quando `Foo` é chamado e termina a transação quando `Foo` termina.

    Como o erro é tratado antes do término de `Foo` , o New Relic não reportará um erro. Observe também que `GetResponse()` se torna um segmento da transação `Foo` .

    ```cs
    using System;
    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;
    using System.Net;
    using System.IO;

    namespace ErrorTester
    {
        class Program
        {
            static void Main(string[] args)
            {
                var i = 0;
                while (true)
                {
                    Foo(++i);
                }
            }

            static void Foo(int i)
            {
                try
                {
                    GetNotFound();
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Got it " + i + "!");
                    Thread.Sleep(1000);
                }
            }

            static string GetNotFound()
            {
                string uri = "https://localhost/Test/this/is/not/a/real/page";
                var request = (HttpWebRequest)WebRequest.Create(uri);
                var response = request.GetResponse();
                var data = new StreamReader(response.GetResponseStream()).ReadToEnd();
                response.Close();
                return data;
            }
        }
    }
    ```
  </Collapser>

  <Collapser
    id="custom-instrumentation"
    title="Definir um arquivo de instrumentação personalizado"
  >
    Para o instrumento `Foo`:

    1. Definir um [arquivo de instrumentação personalizada](/docs/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation); por exemplo, `CustomInstrumentation.xml`:

       ```xml
       <?xml version="1.0" encoding="utf-8"?>
       <!-- © 2008-2014 New Relic, Inc. All rights reserved. -->
       <!--
           When you edit this file, please use an XML aware editor (such as Visual Studio),
           and pair with the companion file extension.xsd to minimize the
           chance of introducing typos that may confuse the agent when it is run.
       -->
       <extension xmlns="urn:newrelic-extension">
         <instrumentation>
           <tracerFactory >
             <match assemblyName="ErrorTester" className="ErrorTester.Program">
               <exactMethodMatcher methodName="Foo" /> 
             </match>
           </tracerFactory>
         </instrumentation>
       </extension>
       ```

    2. Coloque `CustomInstrumenation.xml` na pasta de extensões New Relic, ao lado de `CoreInstrumentation.xml` e reinicie seu aplicativo.
  </Collapser>

  <Collapser
    id="custom-transaction"
    title="Envolva o método em uma transação personalizada"
  >
    Para o instrumento `Foo`, envolva-o em uma [transação personalizada](/docs/agents/net-agent/custom-instrumentation/create-transactions-xml-net):

    ```xml
    <extension xmlns="urn:newrelic-extension">
      <instrumentation>
         <tracerFactory name="NewRelic.Agent.Core.Tracer.Factories.BackgroundThreadTracerFactory" metricName="Background/Task">
           <match assemblyName="ErrorTester" className="ErrorTester.Program">
             <exactMethodMatcher methodName="Foo" />
           </match>
        </tracerFactory>
      </instrumentation>
    </extension>
    ```
  </Collapser>
</CollapserGroup>

## Causa

Os únicos erros relatados pelo agente .NET da New Relic são erros não tratados que encerram uma transação. Se seu aplicativo chamar um manipulador de exceção antes do término da transação, o New Relic não reportará um erro.

No entanto, o New Relic nem sempre detecta manipuladores de exceção quando o erro ocorre fora de uma transação da web, transação WCF ou transação personalizada. Isso ocorre porque o agente cria “minitransações” para métodos instrumentados que não estão associados a uma transação.

Quando o método instrumentado termina, a minitransação termina. Se a minitransação gerar um erro e o método instrumentado não tratar isso, o New Relic reportará um erro.

Você pode ver isso em um aplicativo de console que chama `GetResponse()`, conforme mostrado no [exemplo](#get-response-block). Se `GetResponse` gerar um erro, o New Relic irá reportá-lo, mesmo que `GetResponse()` seja chamado dentro de um bloco try/catch. O agente reporta um erro porque a `GetResponse()` "mini-transação" terminou e o erro ainda não foi tratado na saída da transação.
