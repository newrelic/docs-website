---
title: Monitor solicitudes GraphQL para aplicaciones móviles
tags:
  - GraphQL
  - Mobile monitoring
  - Get started
metaDescription: Learn how to add custom names for GraphQL requests and view request data in New Relic.
freshnessValidatedDate: '2023-11-30T00:00:00.000Z'
translationType: machine
---

En el ámbito dinámico del desarrollo de aplicaciones móviles, GraphQL permite a los desarrolladores crear herramientas de recuperación de datos potentes y optimizadas. Sin embargo, con la creciente complejidad de la consulta GraphQL y las complejidades de la arquitectura de las aplicaciones móviles, la necesidad de un monitoreo integral se ha vuelto aún más importante. New Relic puede ayudarlo monitor las solicitudes de GraphQL para que pueda:

* Identifique y optimice las consultas que están provocando retrasos o ralentizaciones en el rendimiento.
* Detecte errores de forma proactiva antes de que afecten al usuario.
* Asegúrese de que los datos se carguen de forma rápida y fluida a partir de las solicitudes finales de los usuarios.

<img
  title="HTTP requests"
  alt="Screenshot of the HTTP requests UI"
  src="/images/mobile_screenshot-full_mobile-graphql-requests.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > HTTP requests**</DNT>: vea sus solicitudes de GraphQL según el nombre personalizado de su función.
</figcaption>

## Empezar [#get-started]

New Relic monitorea sin problemas todas sus solicitudes GraphQL de forma predeterminada. Sin embargo, para mayor claridad y análisis, recomendamos configurar manualmente los nombres de sus solicitudes GraphQL. Esto le permite categorizar las solicitudes según su funcionalidad y ver datos de rendimiento para grupos específicos de solicitudes.

A diferencia de las API REST, donde cada extremo tiene un propósito distinto, todas las solicitudes de GraphQL se dirigen a un único extremo `/graphql` . Esto dificulta distinguir entre solicitudes que realizan diferentes acciones. Al asignar nombres personalizados a sus solicitudes, puede obtener una comprensión más clara de cómo se utiliza su API GraphQL e identificar el rendimiento potencial asociado con funciones de solicitud específicas.

Para asignar un nombre personalizado a sus solicitudes GraphQL, deberá:

1. Identifique la URL de solicitud de red. Por ejemplo, podría ser una solicitud relacionada con el proceso de pago de un cliente con la URL `https://www.YOUR_MOBILE_APP.com/checkout`.

2. Utilice `addHTTPHeaderTracking method` para configurar el encabezado `X-APOLLO-OPERATION-NAME` para la solicitud identificada. Por ejemplo, las solicitudes relacionadas con el proceso de pago de los clientes podrían denominarse `checkout`. El nombre debe cumplir los siguientes requisitos:

   * Longitud: debe ser una cadena de entre 1 y 1024 caracteres.
   * Caracteres: Constan exclusivamente de [caracteres ASCII](https://www.ascii-code.com/characters).

Siga las instrucciones específicas de la plataforma a continuación:

<CollapserGroup>
  <Collapser
    id="objc"
    title="C objetivo"
  >
    1. Cuando inicie el agente, agregue el encabezado `operationName` :

       ```objectivec
       [NewRelic addHTTPHeaderTrackingFor:@[@"operationName"]]; 
       ```

    2. En el encabezado de solicitud HTTP GraphQL, agregue la URL de su solicitud y el nombre personalizado:

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
    1. Cuando inicie el agente, agregue el encabezado `operationName` :

       ```java
       List<String> headers = new ArrayList<>(); 
       headers.add("operationName");
       NewRelic.addHTTPHeaderTrackingFor(headers);
       ```

    2. En el encabezado de solicitud HTTP GraphQL, agregue la URL de su solicitud y el nombre personalizado:

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
    1. Cuando inicie el agente, agregue el encabezado `operationName` :

       ```kotlin
       // Add the operationName header.
               val headers = mutableListOf<String>()
               headers.add("operationName")

               NewRelic.addHTTPHeaderTrackingFor(headers);
       ```

    2. En el encabezado de solicitud HTTP GraphQL, agregue la URL de su solicitud y el nombre personalizado:

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
    1. Cuando inicie el agente, agregue el encabezado `operationName` :

       ```swift
       NewRelic.addHTTPHeadersTracking(for:["operationName"])
       ```

    2. En el encabezado de solicitud HTTP GraphQL, agregue la URL de su solicitud y el nombre personalizado:

       ```swift
       var request = URLRequest(url: URL(string:"https://www.YOUR_MOBILE_APP.com/checkout")!) // Add your request URL here.
       request.addValue("YOUR_CUSTOM_NAME", forHTTPHeaderField: "operationName") // Add your custom name here.
       URLSession.shared.dataTask(with: request)
       ```
  </Collapser>
</CollapserGroup>

## Ver datos en New Relic [#view-data]

Para ver sus solicitudes de GraphQL:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile**
   </DNT>

   .

2. Selecciona tu aplicación móvil.

3. En el menú de la izquierda, haga clic en

   <DNT>
     **HTTP requests**
   </DNT>

   .

4. En el menú desplegable

   <DNT>
     **Group by**
   </DNT>

   , seleccione

   <DNT>
     **Operation Name**
   </DNT>

   . La página de solicitudes HTTP mostrará todas sus solicitudes agrupadas por el `operationName` que configuró.

<img
  title="Filter by operation name"
  alt="Screenshot of filtering requests by the operation name"
  src="/images/mobile_screenshot-crop_group-by-dropdown.webp"
/>

Ahora que está viendo solo sus solicitudes GraphQL, haga clic en una solicitud específica para ver la métrica del tiempo de respuesta y la falla de la red.

<img
  title="Request details"
  alt="Screenshot of clicking into a specific request"
  src="/images/mobile_screenshot-crop_request-details.webp"
/>
