---
title: Rastreo multiaplicación (en desuso)
tags:
  - Agents
  - Python agent
  - Supported features
metaDescription: Cross-application tracing is deprecated for new versions of the New Relic Python agent.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Para nuestro agente Python, [el seguimiento de aplicaciones múltiples](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces) ha quedado obsoleto desde [la versión v7.0.0.166 del agente](/docs/release-notes/agent-release-notes/python-release-notes/python-agent-70000166) y se eliminará en una versión futura del agente. Un [distributed tracing](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing) característico ya está disponible. Distributed tracing mejora el rastreo multiaplicación y está recomendado para monitoreo de actividad en sistemas distribuidos complejos.
</Callout>

El protocolo utilizado para comunicarse entre aplicaciones implica adjuntar metadatos a las solicitudes y respuestas. Los metadatos son procesados por cada aplicación y el agente informa los datos resultantes.

## Requisitos

Requiere [la versión 2.92.0.78 del agente New Relic Python](/docs/release-notes/agent-release-notes/python-release-notes/python-agent-292078) hasta la versión 7.0.0.166. Está en desuso para versiones superiores a esa.

## Cliente personalizado (HTTP)

<img
  title="client_http_transport.png"
  alt="client_http_transport.png"
  src="/images/apm_diagram_python-diagram-app-tracing.webp"
/>

Estas API se utilizan para bibliotecas de comunicación HTTP personalizadas que no están instrumentadas como parte de la instrumentación integrada.

El rastreo de múltiples aplicaciones HTTP utiliza encabezados HTTP para transportar metadatos de transacciones entre aplicaciones. Para generar encabezados de seguimiento de múltiples aplicaciones salientes, utilice la API `generate_request_headers` en la clase `ExternalTrace` . Para procesar encabezados de seguimiento de múltiples aplicaciones entrantes, utilice la API `process_response_headers` en la clase `ExternalTrace` .

<CollapserGroup>
  <Collapser
    id="custom-client-http-outgoing"
    title="Solicitudes salientes"
  >
    ```
    import newrelic.agent

    transaction = newrelic.agent.current_transaction()
    # returns a list of tuples in the form (header_name, header_value)
    outgoing_headers = newrelic.agent.ExternalTrace.generate_request_headers(transaction)
    for header_name, header_value in outgoing_headers:
        ...request.putheader(header_name, header_value) # code to be instrumented
    ...make_request(request) # code to be instrumented
    ```
  </Collapser>

  <Collapser
    id="custom-client-http-incoming"
    title="Respuesta entrante"
  >
    ```
    import newrelic.agent

    transaction = newrelic.agent.current_transaction()
    trace = newrelic.agent.ExternalTrace(transaction, 'library', 'http://example.com', 'get')
    with trace:
        response = fetch_example_dot_com() # code to be instrumented
        trace.process_response_headers(...response.headers)
    ```
  </Collapser>
</CollapserGroup>

## Cliente personalizado (no HTTP)

<img
  title="client_custom_transport.png"
  alt="client_custom_transport.png"
  src="/images/apm_diagram_client-custom-transport.webp"
/>

Estas API se utilizan para bibliotecas de instrumentos que no utilizan el transporte HTTP (y, por lo tanto, es posible que no puedan utilizar encabezados como transporte de metadatos) y no están instrumentadas como parte de la instrumentación integrada.

### Ejemplo de instrumentación

<CollapserGroup>
  <Collapser
    id="custom-client-non-http-outgoing"
    title="Solicitudes salientes"
  >
    ```
    import newrelic.agent

    transaction = newrelic.agent.current_transaction()
    # returns a string value
    outgoing_metadata = newrelic.agent.ExternalTrace.get_request_metadata(transaction)
    ...request.add_metadata(outgoing_metadata) # code to be instrumented
    ...make_request(request) # code to be instrumented
    ```
  </Collapser>

  <Collapser
    id="custom-client-non-http-incoming"
    title="Respuesta entrante"
  >
    ```
    import newrelic.agent

    transaction = newrelic.agent.current_transaction()
    trace = newrelic.agent.ExternalTrace(transaction, 'library', 'myproto://service', 'fetch')
    with trace:
        ...response = fetch_from_service() # code to be instrumented
        # extract the metadata string sent from the service
        metadata_value = response.metadata # code to be instrumented
        trace.process_response_metadata(metadata_value)
    ```
  </Collapser>
</CollapserGroup>

## Servidor WSGI [#wsgi]

<Callout variant="tip">
  El agente se encargará automáticamente del procesamiento y envío de respuestas a los metadatos de traza multiaplicación para todos los servidores WSGI.
</Callout>

Para obtener información sobre servidores WSGI instrumentados, consulte [la documentación de la API de la wsgi_application](/docs/agents/python-agent/python-agent-api/wsgi_application) para obtener más detalles.

## Servidor personalizado no HTTP

<img
  title="server_nonhttp_transport.png"
  alt="server_nonhttp_transport.png"
  src="/images/apm_diagram_python-nonhttp-transport.webp"
/>

Los servidores personalizados que no estén basados en WSGI o que no utilicen HTTP como transporte tendrán que procesar metadatos de seguimiento de múltiples aplicaciones entrantes y generar respuestas de traza de múltiples aplicaciones.

Las siguientes API permiten procesar metadatos de seguimiento de múltiples aplicaciones enviados en solicitudes que no son HTTP y generar metadatos de respuesta para enviarlos a la persona que llama.

<CollapserGroup>
  <Collapser
    id="custom-non-http-server-example"
    title="Ejemplo de instrumentación"
  >
    ```
    import newrelic.agent

    def handle_incoming_request(request):
        transaction = newrelic.agent.current_transaction()
        if transaction:
        	transaction.process_request_metadata(...request.metadata)

        response = generate_response() # code to be instrumented

        if transaction:
        	# get_response_metadata returns a string
            ...response.metadata = transaction.get_response_metadata()
        return response
    ```
  </Collapser>
</CollapserGroup>
