---
title: El agente .NET informa errores manejados
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

Los informes del agente .NET de New Relic manejaron los errores como si fueran errores estándar. Esto es más común con roles de trabajo de Azure, aplicaciones de consola, trabajo asíncrono y operaciones similares.

## Solución

Para evitar informes de errores falsos, utilice un método que contenga directa o indirectamente el controlador de excepciones. Instrumente el método objetivo definiendo un archivo [de instrumentación personalizado](/docs/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation) , o envolviendo el método en una [transacción personalizada](/docs/agents/net-agent/custom-instrumentation/create-transactions-xml-net), como se muestra en este ejemplo:

<CollapserGroup>
  <Collapser
    id="get-response-block"
    title="GetResponse() arroja un error"
  >
    En este ejemplo, New Relic informa un error de `GetResponse()` <DNT>**unless**</DNT> el método `Foo()` está instrumentado. Siempre que `Foo` esté instrumentado, New Relic comienza una transacción cuando se llama a `Foo` y finaliza la transacción cuando finaliza `Foo` .

    Debido a que el error se maneja antes de que finalice `Foo` , New Relic no informará un error. Tenga en cuenta también que `GetResponse()` se convierte en un segmento de la transacción `Foo` .

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
    title="Definir un fichero personalizado de instrumentación"
  >
    Al instrumento `Foo`:

    1. Definir un [fichero de instrumentación personalizado](/docs/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation); por ejemplo, `CustomInstrumentation.xml`:

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

    2. Coloque `CustomInstrumenation.xml` en la carpeta de extensiones de New Relic, junto a `CoreInstrumentation.xml`, y reinicie su aplicación.
  </Collapser>

  <Collapser
    id="custom-transaction"
    title="Envuelva el método en una transacción personalizada"
  >
    Para instrumento `Foo`, envuélvalo en una [transacción personalizada](/docs/agents/net-agent/custom-instrumentation/create-transactions-xml-net):

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

Los únicos errores que informa el agente .NET de New Relic son errores no controlados que finalizan una transacción. Si su aplicación llama a un controlador de excepciones antes de que finalice la transacción, New Relic no informará un error.

Sin embargo, New Relic no siempre detecta controladores de excepciones cuando el error ocurre fuera de una transacción web, una transacción WCF o una transacción personalizada. Esto se debe a que el agente crea "mini-transacciones" para métodos instrumentados que no están asociados con una transacción.

Cuando el método instrumentado sale, la mini-transacción finaliza. Si la mini-transacción arroja un error y el método instrumentado no lo maneja, New Relic informará un error.

Puede ver esto en una aplicación de consola que llama a `GetResponse()`, como se muestra en el [ejemplo](#get-response-block). Si `GetResponse` arroja un error, New Relic lo informará, aunque se llame a `GetResponse()` dentro de un bloque try/catch. El agente reporta un error porque la `GetResponse()` "mini-transacción" finalizó y el error aún no se había solucionado al salir de la transacción.
