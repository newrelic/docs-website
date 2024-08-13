---
title: Seguimiento de clientes HTTP en Ruby
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'Information about HTTP tracing in the New Relic Ruby agent, including supported clients and versions.'
freshnessValidatedDate: never
translationType: machine
---

El agente Ruby puede trazar las solicitudes HTTP salientes realizadas por su aplicación o script a:

* Registre métricas sobre cuánto tiempo están tardando sus solicitudes HTTP y a qué hosts llegan.
* Anota la traza de la transacción con nodos para cada solicitud HTTP.
* Proporcionar [rastreo distribuido](/docs/distributed-tracing/concepts/introduction-distributed-tracing/) para solicitudes entre aplicaciones instrumentadas con New Relic.

## Biblioteca de clientes HTTP soportada [#supported_libraries]

El agente Ruby admite actualmente la siguiente biblioteca de clientes HTTP&#x3A;

<table>
  <thead>
    <tr>
      <th width={150}>
        Nombre
      </th>

      <th width={200}>
        Versión mínima admitida
      </th>

      <th>
        Notas
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [Async::HTTP](https://github.com/socketry/async-http)
      </td>

      <td>
        0.59.0
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        [Frenar](https://github.com/taf2/curb)
      </td>

      <td>
        0.9.3
      </td>

      <td>
        Curl::Multi requests obtienen instrumentación parcial. Consulte [Notas sobre Curb](#curb).
      </td>
    </tr>

    <tr>
      <td>
        [Ethon](https://github.com/typhoeus/ethon)
      </td>

      <td>
        0.12.0
      </td>

      <td>
        Ver [notas de Ethon](#ethon).
      </td>
    </tr>

    <tr>
      <td>
        [Excón](https://github.com/geemus/excon)
      </td>

      <td>
        0.56.0
      </td>

      <td>
        Ver [notas de Excon](#excon).
      </td>
    </tr>

    <tr>
      <td>
        [Cliente HTTP](https://github.com/nahi/httpclient)
      </td>

      <td>
        2.8.3
      </td>

      <td>
        No se soporta la instrumentación de solicitudes asincrónicas.
      </td>
    </tr>

    <tr>
      <td>
        [http.rb](https://github.com/httprb/http)
      </td>

      <td>
        2.2.2
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        [HTTPX](https://honeyryderchuck.gitlab.io/httpx/)
      </td>

      <td>
        1.0.0
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        Net::HTTP
      </td>

      <td>
        N/A (parte de la biblioteca estándar de Ruby)
      </td>

      <td>
        También incluye una biblioteca basada en Net::HTTP, como [httparty](http://johnnunemaker.com/httparty/).
      </td>
    </tr>

    <tr>
      <td>
        [Tifón](https://github.com/typhoeus/typhoeus)
      </td>

      <td>
        1.3.0
      </td>
    </tr>
  </tbody>
</table>

## Notas Ethon [#ethon]

El mismo equipo que mantiene a Ethon y depende de Ethon para su funcionalidad también mantiene a Typhoeus. Para evitar informes duplicados para cada solicitud HTTP, el agente desactiva la instrumentación de Ethon cuando detecta Typhoeus.

## Notas Excon [#excon]

El agente Ruby admite la versión <DNT>**0.56.0 or higher.**</DNT> de Excon. La instrumentación de Excon se basa en la capacidad de agregar un middleware Excon a la clave `:middlewares` de `Excon.defaults`, por lo que si su aplicación modifica `Excon.defaults` , debe asegurarse de conservar el valor de `:middlewares` tecla.

## Notas de acera [#curb]

El agente Ruby admite la versión <DNT>**0.9.3 or higher.**</DNT> de Curb. **No** se admite la instrumentación de Curb en JRuby.

Las solicitudes realizadas a través de la API `Curl::Multi` actualmente solo tienen soporte parcial de rastreo distribuido. El agente de Ruby registrará un único nodo de traza de la transacción que representa todo el lote, pero no podrá ver los detalles de las solicitudes individuales del lote.
