---
title: Paginación para salida API
tags:
  - APIs
  - REST API v2
  - Basic functions
metaDescription: 'To support performance, New Relic''s REST API v2 paginates responses using the standard format for links from RFC 5988.'
freshnessValidatedDate: never
translationType: machine
---

La API REST de New Relic (v2) pagina algunas respuestas por motivos de rendimiento. Esto se debe a que devolver todo el conjunto de datos puede ser factible para algunas consultas, pero prohibitivo para otras que devuelven una gran cantidad de datos.

## Requisitos y limitaciones [#requirements]

* Retorno de datos métricos:

  * La paginación ya no está disponible para la salida métrica para algunos clientes (desuso a partir de diciembre de 2020).
  * Devuelve hasta 3000 resultados por celda. Para resultados grandes, recomendamos limitar la consulta utilizando el ID de la aplicación u otro atributo.

* El orden de clasificación de los datos devueltos es indeterminado. No asuma ni confíe en un orden en particular.

Los datos devueltos por página dependen de los datos que se solicitan. El número de páginas depende del número de objetos JSON necesarios para completar la lista.

<Callout variant="important">
  Antes de enumerar nombres métricos, consulte [las pautas para enumerar nombres métricos](/docs/apis/rest-api-v2/application-examples-v2/listing-your-app-id-metric-data-v2#name_list_guidelines).
</Callout>

## Solicitar una página específica [#requesting_page]

Para especificar una página, agregue el parámetro `page=` a la consulta. He aquí un ejemplo:

```
curl -X GET 'https://api.newrelic.com/v2/alerts_incidents.json?page=3' \
     -H "Api-Key:<a href='/docs/apis/get-started/intro-apis/types-new-relic-api-keys'>$API_KEY</a>" -i
```

En REST API Explorer, puede [cambiar rápidamente la página que se está viendo](/docs/apm/apis/api-explorer-v2/parts-api-explorer#data_page).

## Ejemplos de encabezados de enlaces que muestran el recuento de páginas [#link-header]

La llamada API devuelve el encabezado `Link` si los datos están paginados. Esto indica el número de páginas y la página que se está viendo. Esta línea también aparece en la parte superior de `Response` en el Explorador de API REST.

<Callout variant="important">
  El encabezado Enlace solo aparecerá si los datos de salida están paginados.
</Callout>

<Callout variant="tip">
  La referencia `rel="last"` no se mostrará al realizar llamadas al extremo de infracción (`https://api.newrelic.com/v2/alerts_violations.json`). Para determinar la página final al realizar llamadas a este extremo, busque la ausencia de una referencia `rel="next"` .
</Callout>

Para obtener esta línea utilizando algunas implementaciones de `curl`, es posible que deba incluir la opción `-v` .

```
curl -v -X GET 'https://api.newrelic.com/v2/applications/<a href="/docs/apis/rest-api-v2/requirements/finding-product-id">$APP_ID</a>/...'
```

New Relic utiliza el formato estándar [RFC 5988](http://www.rfc-editor.org/rfc/rfc5988.txt) para enlaces.

<CollapserGroup>
  <Collapser
    id="3-pages"
    title="Ejemplo: devolver 3 páginas"
  >
    La salida de la API contendrá una línea `Link` similar a esta. Las líneas están ajustadas para mejorar la legibilidad.

    ```
    Link: <https://api.newrelic.com/v2/alert_policies.xml?page=2>;rel="next", 
    <https://api.newrelic.com/v2/alert_policies.xml?page=3>;rel="last"
    ```

    Esto indica que hay tres páginas y que estás viendo la primera.

    <table>
      <thead>
        <tr>
          <th>
            Parámetro
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `...page=2>;rel="next"`
          </td>

          <td>
            La página 2 es la siguiente.
          </td>
        </tr>

        <tr>
          <td>
            `...page=3>;rel="last"`
          </td>

          <td>
            La página 3 es la última página.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
