---
title: Monitor GraphQL requests for mobile apps
tags:
    - GraphQL
    - Mobile monitoring
    - Get started
metaDescription: "Learn how to add custom names for GraphQL requests and view request data in New Relic."
freshnessValidatedDate: 2023-11-30
---

In the dynamic realm of mobile app development, GraphQL enables developers to build powerful and streamlined data fetching tools. However, with the increasing complexity of GraphQL queries and the intricacies of mobile app architecture, the need for comprehensive monitoring has become even more important. New Relic can help you monitor GraphQL requests so you can:

* Identify and optimize queries that are causing delays or performance slowdowns.
* Proactively catch errors before they impact users.
* Ensure data loads quickly and smoothly from end-user requests.

<img
  title="HTTP requests"
  alt="Screenshot of the HTTP requests UI"
  src="/images/mobile_screenshot-full_mobile-graphql-requests.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > HTTP requests**</DNT>: View your GraphQL requests based on the custom name of their function.
</figcaption>

## Get started [#get-started]

New Relic seamlessly monitors all your GraphQL requests by default. However, for enhanced clarity and analysis, we recommend manually configuring the names of your GraphQL requests. This allows you to categorize requests based on their functionality and view performance data for specific groups of requests.

Unlike REST APIs, where each endpoint serves a distinct purpose, all GraphQL requests are directed to a single `/graphql` endpoint. This makes it challenging to distinguish between requests that perform different actions. By assigning custom names to your requests, you can gain a clearer understanding of how your GraphQL API is being used and identify potential performance bottlenecks associated with specific request functions.

To custom name your GraphQL requests, you'll need to:

1. Identify the network request URL. For example, this could be a request related to a customer checkout process with the URL `https://www.YOUR_MOBILE_APP.com/checkout`.

2. Use the `addHTTPHeaderTracking method` to set the `X-APOLLO-OPERATION-NAME` header for the identified request. For example, requests related to the customer checkout process could be named `checkout`. The name must meet the following requirements:

   * Length: Be a string between 1 and 1024 characters.
   * Characters: Consist exclusively of [ASCII characters](https://www.ascii-code.com/characters).

Follow the platform-specific instructions below:

<CollapserGroup>
  <Collapser
    id="objc"
    title="Objective-c"
  >
    1. When you start the agent, add the `operationName` header:

       ```objectivec
       [NewRelic addHTTPHeaderTrackingFor:@[@"operationName"]]; 
       ```

    2. In the GraphQL HTTP request header, add your request URL and custom name:

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
    1. When you start the agent, add the `operationName` header:

       ```java
       List<String> headers = new ArrayList<>(); 
       headers.add("operationName");
       NewRelic.addHTTPHeaderTrackingFor(headers);
       ```

    2. In the GraphQL HTTP request header, add your request URL and custom name:

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
    1. When you start the agent, add the `operationName` header:

       ```kotlin
       // Add the operationName header.
               val headers = mutableListOf<String>()
               headers.add("operationName")

               NewRelic.addHTTPHeaderTrackingFor(headers);
       ```

    2. In the GraphQL HTTP request header, add your request URL and custom name:

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
    1. When you start the agent, add the `operationName` header:

       ```swift
       NewRelic.addHTTPHeadersTracking(for:["operationName"])
       ```

    2. In the GraphQL HTTP request header, add your request URL and custom name:

       ```swift
       var request = URLRequest(url: URL(string:"https://www.YOUR_MOBILE_APP.com/checkout")!) // Add your request URL here.
       request.addValue("YOUR_CUSTOM_NAME", forHTTPHeaderField: "operationName") // Add your custom name here.
       URLSession.shared.dataTask(with: request)
       ```
  </Collapser>
</CollapserGroup>

## View data in New Relic [#view-data]

To view your GraphQL requests:

1. Go to <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile**</DNT>.
2. Select your mobile app.
3. On the left-hand menu, click <DNT>**HTTP requests**</DNT>.
4. In the <DNT>**Group by**</DNT> dropdown, select <DNT>**Operation Name**</DNT>. The HTTP requests page will show all your requests grouped by the `operationName` you set.

<img
  title="Filter by operation name"
  alt="Screenshot of filtering requests by the operation name"
  src="/images/mobile_screenshot-crop_group-by-dropdown.webp"
/>

Now that you're looking at just your GraphQL requests, click into a specific request to see metrics on response time and network failure.

<img
  title="Request details"
  alt="Screenshot of clicking into a specific request"
  src="/images/mobile_screenshot-crop_request-details.webp"
/>
