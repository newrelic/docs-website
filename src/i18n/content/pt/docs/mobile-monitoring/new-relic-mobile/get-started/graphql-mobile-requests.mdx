---
title: Monitor solicitações GraphQL para aplicativos móveis
tags:
  - GraphQL
  - Mobile monitoring
  - Get started
metaDescription: Learn how to add custom names for GraphQL requests and view request data in New Relic.
freshnessValidatedDate: '2023-11-30T00:00:00.000Z'
translationType: machine
---

No domínio dinâmico do desenvolvimento de aplicativos móveis, o GraphQL permite que os desenvolvedores criem ferramentas de busca de dados poderosas e simplificadas. No entanto, com a crescente complexidade da consulta GraphQL e as complexidades da arquitetura de aplicativos móveis, a necessidade de monitoramento abrangente tornou-se ainda mais importante. A New Relic pode ajudá-lo monitor solicitações GraphQL para que você possa:

* Identifique e otimize consultas que estão causando atrasos ou lentidão no desempenho.
* Detecte erros proativamente antes que eles afetem o usuário.
* Garanta que os dados sejam carregados de forma rápida e tranquila a partir de solicitações do usuário final.

<img
  title="HTTP requests"
  alt="Screenshot of the HTTP requests UI"
  src="/images/mobile_screenshot-full_mobile-graphql-requests.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > HTTP requests**</DNT>: visualize suas solicitações GraphQL com base no nome personalizado de sua função.
</figcaption>

## Iniciar [#get-started]

A New Relic monitora perfeitamente todas as suas solicitações GraphQL por padrão. No entanto, para maior clareza e análise, recomendamos configurar manualmente os nomes das suas solicitações GraphQL. Isso permite categorizar solicitações com base em sua funcionalidade e visualizar dados de desempenho para grupos específicos de solicitações.

Ao contrário API REST, em que cada endpoint atende a uma finalidade distinta, todas as solicitações do GraphQL são direcionadas para um único endpoint `/graphql`. Isso torna difícil distinguir entre solicitações que executam ações diferentes. Ao atribuir nomes personalizados às suas solicitações, você pode obter uma compreensão mais clara de como sua API GraphQL está sendo usada e identificar potenciais gargalos de desempenho associados a funções de solicitação específicas.

Para personalizar o nome de suas solicitações GraphQL, você precisará:

1. Identifique o URL de solicitação de rede. Por exemplo, pode ser uma solicitação relacionada ao processo de checkout de um cliente com a URL `https://www.YOUR_MOBILE_APP.com/checkout`.

2. Use `addHTTPHeaderTracking method` para definir o cabeçalho `X-APOLLO-OPERATION-NAME` da solicitação identificada. Por exemplo, solicitações relacionadas ao processo de checkout de clientes poderiam ser denominadas `checkout`. O nome deve atender aos seguintes requisitos:

   * Comprimento: seja uma string entre 1 e 1024 caracteres.
   * Caracteres: Consistem exclusivamente em [caracteres ASCII](https://www.ascii-code.com/characters).

Siga as instruções específicas da plataforma abaixo:

<CollapserGroup>
  <Collapser
    id="objc"
    title="Objetivo-c"
  >
    1. Ao iniciar o agente, adicione o cabeçalho `operationName` :

       ```objectivec
       [NewRelic addHTTPHeaderTrackingFor:@[@"operationName"]]; 
       ```

    2. No cabeçalho da solicitação HTTP GraphQL, adicione o URL da solicitação e o nome personalizado:

       ```objectivec
       NSURLRequest *request = [NSURLRequest requestWithURL:[NSURL URLWithString:@"https://www.YOUR_MOBILE_APP.com/checkout"]]; // Add your request URL here.
       NSMutableURLRequest *mutableRequest = [request mutableCopy];
       [mutableRequest addValue:@"YOUR_CUSTOM_NAME" forHTTPHeaderField:@"operationName"]; // Add your custom name here.
       request = [mutableRequest copy];
       [[NSURLSession sharedSession] dataTaskWithRequest:request];
       ```
  </Collapser>

  <Collapser
    id="java"
    title="Java"
  >
    1. Ao iniciar o agente, adicione o cabeçalho `operationName` :

       ```java
       List<String> headers = new ArrayList<>(); 
       headers.add("operationName");
       NewRelic.addHTTPHeaderTrackingFor(headers);
       ```

    2. No cabeçalho da solicitação HTTP GraphQL, adicione o URL da solicitação e o nome personalizado:

       ```java
       Request request = new Request.Builder()
               .url("https://www.YOUR_MOBILE_APP.com/checkout") // Add your request URL here.
               .addHeader("operationName","YOUR_CUSTOM_NAME") // Add your custom name here.
               .build();
       ```
  </Collapser>

  <Collapser
    id="kotlin"
    title="Kotlin"
  >
    1. Ao iniciar o agente, adicione o cabeçalho `operationName` :

       ```kotlin
       // Add the operationName header.
               val headers = mutableListOf<String>()
               headers.add("operationName")

               NewRelic.addHTTPHeaderTrackingFor(headers);
       ```

    2. No cabeçalho da solicitação HTTP GraphQL, adicione o URL da solicitação e o nome personalizado:

       ```kotlin
       val request = Request.Builder()
           .url("https://www.YOUR_MOBILE_APP.com/checkout") // Add your request URL here.
           .addHeader("operationName", "YOUR_CUSTOM_NAME") // Add your custom name here.
           .build()
       ```
  </Collapser>

  <Collapser
    id="swift"
    title="Swift"
  >
    1. Ao iniciar o agente, adicione o cabeçalho `operationName` :

       ```swift
       NewRelic.addHTTPHeadersTracking(for:["operationName"])
       ```

    2. No cabeçalho da solicitação HTTP GraphQL, adicione o URL da solicitação e o nome personalizado:

       ```swift
       var request = URLRequest(url: URL(string:"https://www.YOUR_MOBILE_APP.com/checkout")!) // Add your request URL here.
       request.addValue("YOUR_CUSTOM_NAME", forHTTPHeaderField: "operationName") // Add your custom name here.
       URLSession.shared.dataTask(with: request)
       ```
  </Collapser>
</CollapserGroup>

## Visualizar dados no New Relic [#view-data]

Para visualizar suas solicitações GraphQL:

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile**
   </DNT>

   .

2. Selecione seu aplicativo móvel.

3. No menu à esquerda, clique em

   <DNT>
     **HTTP requests**
   </DNT>

   .

4. No dropdown

   <DNT>
     **Group by**
   </DNT>

   , selecione

   <DNT>
     **Operation Name**
   </DNT>

   . A página de solicitações HTTP mostrará todas as suas solicitações agrupadas pelo `operationName` que você definiu.

<img
  title="Filter by operation name"
  alt="Screenshot of filtering requests by the operation name"
  src="/images/mobile_screenshot-crop_group-by-dropdown.webp"
/>

Agora que você está vendo apenas suas solicitações GraphQL, clique em uma solicitação específica para ver a métrica sobre tempo de resposta e falha de rede.

<img
  title="Request details"
  alt="Screenshot of clicking into a specific request"
  src="/images/mobile_screenshot-crop_request-details.webp"
/>
