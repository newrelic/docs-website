---
title: Consultar sintaxis para registro
tags:
  - Logs
  - Log management
  - Example queries
  - UI and data
metaDescription: How to query your logs data in New Relic using the logs query syntax.
freshnessValidatedDate: never
translationType: machine
---

Emplee nuestra UI de log en <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities)**</DNT> para buscar rápidamente entre sus datos log en segundos. Cada log enumera los atributos disponibles en la columna `log_summary`. Para profundizar en detalles adicionales, haga clic en cualquier atributo resaltado.

## Estructura de consulta [#query-structure]

Con el log, puede buscar entre sus datos log ingresando palabras clave simples, como `new` y `relic`, o frases como `"new relic agent"`, directamente en el campo de búsqueda.

Los términos simples son una búsqueda 'contiene' para el atributo del mensaje y el `filePath` de su registro. Para instancia, `"new relic agent"` es equivalente al más detallado `message: "*New Relic Agent*"`.

Para buscar otro atributo, anteponga el atributo a sus términos, como `source: "*new relic agent*"`. Consulte [Operadores generales](#general-operators) a continuación para obtener más detalles.

También puedes combinar palabras clave o frases con operadores para formar consultas más complejas.

<Callout variant="tip">
  La consulta log en New Relic se basa en el lenguaje de consulta <DNT>Lucene</DNT> y se admite cualquier función <DNT>Lucene</DNT> enumerada en este documento. (Si una función <DNT>Lucene</DNT> no aparece en la lista, no la admitimos). Para ver algunos ejemplos útiles, consulte este [<DNT>Lucene</DNT> tutorial](https://www.lucenetutorial.com/lucene-query-syntax.html).
</Callout>

Reglas generales de consulta:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Log de reglas de consulta
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Distingue mayúsculas y minúsculas
      </td>

      <td>
        La sintaxis de consulta distingue entre mayúsculas y minúsculas para los valores de atributos. Los nombres de atributos siempre distinguen entre mayúsculas y minúsculas.

        Excepción: las búsquedas con comodines no distinguen entre mayúsculas y minúsculas para los valores de atributos.
      </td>
    </tr>

    <tr>
      <td>
        Caracteres de espacios en blanco
      </td>

      <td>
        Cuando un término contiene caracteres de espacio en blanco, como el espacio o el carácter de tabulación, el término deberá estar entre comillas dobles.

        Ejemplo: Para consultar un atributo `status` que contiene exactamente `POST /log/v1`, cite el término así:

        `status: "POST /log/v1"`

        Nota: para consultar un atributo `status` que contiene `POST /log/v1` en algún lugar del atributo, deberá agregar caracteres comodín como `status: "*POST /log/v1*"` (consulte a continuación para obtener detalles sobre los comodines)
      </td>
    </tr>

    <tr>
      <td>
        Caracteres especiales
      </td>

      <td>
        Cuando un término contiene caracteres especiales, entre comillas dobles el término y escape los caracteres especiales mediante una barra invertida (`\`). Esto incluye caracteres especiales como `+`, `-`, `&`, `|`, `!`, `(`, `)`, `{`, `}`, `[`, `]`, `^`, `"`, `~`, `*`, `?`, `:`, `/` o `\`.

        Ejemplo: Para consultar un atributo `status` que contiene exactamente `"POST /log/v1 HTTP/1.1" 202`, escape las comillas como esta:

        `status: "\"POST /log/v1 HTTP/1.1\" 202"`
      </td>
    </tr>

    <tr>
      <td>
        Búsquedas con comodines
      </td>

      <td>
        Puede ejecutar búsquedas con comodines utilizando un asterisco (`*`) para reemplazar cero o más caracteres.

        Ejemplo: para consultar un atributo `status` que contiene `202` en algún lugar, formatee la consulta así:

        `status: *202*`

        Si su término contiene espacios u otros metacaracteres (ver arriba), deberá citar el término con comodín.

        Por ejemplo, para consultar un atributo `status` que contiene `/log/v1 202` en algún lugar, formatee la consulta así:

        `status: "*/log/v1 202*"`
      </td>
    </tr>
  </tbody>
</table>

## Buscar con texto [#query-text]

Para obtener resultados de consulta más específicos, utilice búsquedas de texto para unir palabras clave o frases.

### Operadores de texto [#text-operators]

La sintaxis de log consulta acepta los siguientes operadores de texto:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Condición
      </th>

      <th>
        Ejemplo de operador de texto
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Coincidencia (palabra clave)
      </td>

      <td>
        Busque resultados log que contengan palabras clave ingresadas por separado:

        `"new" "relic"`
      </td>
    </tr>

    <tr>
      <td>
        Coincidencia exacta (frase)
      </td>

      <td>
        Busque resultados log que contengan la frase específica ingresada:

        `"new relic agent"`
      </td>
    </tr>

    <tr>
      <td>
        Cualquiera o
      </td>

      <td>
        Busque resultados log que contengan una o ambas palabras clave ingresadas:

        `new OR relic`
      </td>
    </tr>

    <tr>
      <td>
        Y
      </td>

      <td>
        Busque resultados log que contengan ambas palabras clave ingresadas:

        `new AND relic`
      </td>
    </tr>

    <tr>
      <td>
        \* Comodín (cero o más)
      </td>

      <td>
        Busque resultados log que contengan ambas palabras clave ingresadas, con cero o más caracteres entre ellas:

        `new*relic`
      </td>
    </tr>

    <tr>
      <td>
        Negación (palabra clave)
      </td>

      <td>
        Busque resultados log que no contengan la palabra clave específica ingresada:

        `-new`
      </td>
    </tr>

    <tr>
      <td>
        Negación (frase)
      </td>

      <td>
        Busque resultados log que no contengan la frase específica ingresada.

        `-"new relic"`
      </td>
    </tr>
  </tbody>
</table>

## Buscar con atributo [#query-attributes]

Utilice búsquedas de atributos para limitar los resultados de la consulta a un atributo o campo específico.

### Operadores generales [#general-operators]

Los siguientes operadores pueden ser utilizados por todo tipo de atributo:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Condición
      </th>

      <th>
        Ejemplo de operador general
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Igual `:`
      </td>

      <td>
        Busque resultados log donde el atributo sea igual a la palabra clave especificada. Ejemplo: el campo `hostname` es igual a `chi`:

        `hostname:chi`
      </td>
    </tr>

    <tr>
      <td>
        No es igual `- :`
      </td>

      <td>
        Busque resultados log donde el atributo no sea igual a la palabra clave especificada. Ejemplo: El campo `hostname` no es igual a `chi`.

        `-hostname:chi`
      </td>
    </tr>

    <tr>
      <td>
        Contiene `*`
      </td>

      <td>
        Busque resultados log donde el atributo contenga la palabra clave especificada. Ejemplo: el campo `hostname` contiene `chi`.

        `hostname:*chi*`
      </td>
    </tr>

    <tr>
      <td>
        No contiene `- *`
      </td>

      <td>
        Busque resultados log donde el atributo no contenga la palabra clave especificada. Ejemplo: el campo `hostname` no contiene `chi`.

        `-hostname:*chi*`
      </td>
    </tr>

    <tr>
      <td>
        Comienza con `*`
      </td>

      <td>
        Busque resultados log donde el atributo comience con la palabra clave especificada. Ejemplo: el campo `hostname` comienza con `chi`.

        `hostname:chi*`
      </td>
    </tr>

    <tr>
      <td>
        Termina con `*`
      </td>

      <td>
        Busque resultados log donde el atributo termine con la palabra clave especificada. Ejemplo: el campo `hostname` termina en `chi`.

        `hostname:*chi`
      </td>
    </tr>

    <tr>
      <td>
        Tiene
      </td>

      <td>
        Busque resultados log que tengan el campo especificado. Ejemplo: Tiene el campo `user_name`.

        `has:user_name`
      </td>
    </tr>

    <tr>
      <td>
        Desaparecido
      </td>

      <td>
        Busque resultados log a los que les falte el campo especificado. Ejemplo: falta el campo `user_name`.

        `missing:user_name`
      </td>
    </tr>
  </tbody>
</table>

### Operadores numéricos [#numeric-operators]

Los siguientes operadores sólo pueden ser utilizados por atributo numérico:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Condición
      </th>

      <th>
        Ejemplo de operador numérico
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Mas grande que
      </td>

      <td>
        Busque coincidencias de atributos de resultados log que sean mayores que el parámetro dado. Ejemplo: el campo `http_response_time_ms` es mayor que `500`.

        `http_response_time_ms:>500`
      </td>
    </tr>

    <tr>
      <td>
        Mayor qué o igual a
      </td>

      <td>
        Busque resultados log con coincidencias de atributos que sean mayores o iguales que el parámetro dado. Ejemplo: El campo `http_response_time_ms` es mayor o igual a `500`.

        `http_response_time_ms:>=500`
      </td>
    </tr>

    <tr>
      <td>
        Menos que
      </td>

      <td>
        Busque resultados log con coincidencias de atributos que sean menores que el parámetro dado. Ejemplo: el campo `http_response_time_ms` es menor que `500`.

        `http_response_time_ms:<500`
      </td>
    </tr>

    <tr>
      <td>
        Menos que o igual a
      </td>

      <td>
        Busque resultados log con coincidencias de atributos que sean menores o iguales que el parámetro dado. Ejemplo: el campo `http_response_time_ms` es menor o igual que `500`.

        `http_response_time_ms:<=500`
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos de consultas de registro [#query]

### Ejemplo: consulta <DNT>Apache</DNT> [#example-query-apache-logs]

<Callout
  variant="tip"
  title="Acerca del registro de Apache"
>
  Si tiene el log <DNT>Apache</DNT> , le recomendamos emplear nuestras reglas de análisis integradas para [el log<DNT>Apache</DNT> ](/docs/logs/ui-data/built-log-parsing-rules/#apache)para analizar el log en atributo. Para emplear el análisis integrado, simplemente agregue el atributo `logtype: apache` a su configuración `logging.yml` en los hosts para su log <DNT>Apache</DNT>.
</Callout>

A continuación se muestran algunos ejemplos de consulta del log <DNT>Apache</DNT> :

<CollapserGroup>
  <Collapser
    id="503-responce-code"
    title="Ver todos los registros de Apache con códigos de respuesta `503`:"
  >
    ```
    logtype:apache response:503
    ```
  </Collapser>

  <Collapser
    id="multiple-response-codes"
    title="Ver todos los registros de Apache con códigos de respuesta `4xx` o `5xx`:"
  >
    ```
    logtype:apache response:4* OR response 5*
    ```
  </Collapser>

  <Collapser
    id="method-example"
    title="Ver todos los registros de Apache con `Method=GET` y `Response=2xx`"
  >
    ```
    logtype:apache verb:GET response:2*
    ```
  </Collapser>
</CollapserGroup>

### Ejemplo: consulta <DNT>Amazon Cloudfront CDN</DNT> [#example-query-cloudfront]

<Callout
  variant="tip"
  title="Acerca del registro CDN"
>
  Si tiene un logde <DNT>Amazon CloudFront</DNT>, aprenda cómo [reenviar el log de acceso de <DNT>Amazon CloudFront</DNT> ](/docs/logs/forward-logs/cloudfront-web-logs/)a New Relic. Ofrecemos reglas de análisis integradas que se pueden emplear para analizar automáticamente sus <DNT>Amazon Cloudfront</DNT> logs de acceso [estándar](/docs/logs/ui-data/built-log-parsing-rules/#cloudfront) o [en tiempo real](/docs/logs/ui-data/built-log-parsing-rules/#cloudfront-rtl). ¡También tenemos un [<DNT>Amazon Cloudfront</DNT> inicio rápido del](https://newrelic.com/instant-observability/amazon-cloudfront-web-logs) dashboard log de acceso que puedes instalar y que te brinda insight inmediata en tu <DNT>Amazon CloudFront CDN</DNT> log de acceso!
</Callout>

A continuación se muestran algunos ejemplos de consulta [del log de acceso<DNT>Amazon Cloudfront CDN</DNT> ](/docs/logs/forward-logs/cloudfront-web-logs/):

<CollapserGroup>
  <Collapser
    id="chase-miss-example"
    title="Ver todos los registros de acceso que resultaron en una pérdida de caché"
  >
    ```
    logtype:cloudfront-rtl x_edge_result_type:Miss
    ```
  </Collapser>

  <Collapser
    id="edge-locations"
    title="Ver todos los registros de acceso que resultaron en una pérdida de caché desde las ubicaciones del borde de Atlanta"
  >
    ```
    logtype:cloudfront-rtl x_edge_result_type:Miss x_edge_location:ATL*
    ```
  </Collapser>

  <Collapser
    id="methods"
    title="Ver todo el registro de acceso con cs_method=GET que resultó en un error 4xx o 5xx desde las ubicaciones del borde de Atlanta"
  >
    ```
    logtype:cloudfront-rtl cs_method:GET x_edge_location:ATL* sc_status:4* OR sc_status:5*
    ```
  </Collapser>
</CollapserGroup>

## Ver consulta NRQL y agregar al dashboard [#create-dashboard]

Para ver la versión NRQL de un gráfico de registro, haga clic en el menú de puntos suspensivos de ese gráfico y haga clic en <DNT>**View query**</DNT>. Esto abre una vista del NRQL que generó ese gráfico. Puede modificar la consulta allí o agregarla a un dashboard.

Para cambiar de una consulta de sintaxis <DNT>Lucene</DNT> a una consulta NRQL, a la derecha del generador de consultas, haga clic [en el botón <DNT>**NRQL**</DNT> ](/docs/logs/ui-data/use-logs-ui#workflow-search).

Supongamos que desea buscar en el log <DNT>Apache</DNT> códigos de respuesta 503, convertirlo en una consulta NRQL usando `FACET`, verlo como un gráfico circular y agregar ese gráfico a un dashboard. Así es cómo:

1. Desde la página UI <DNT>**All logs**</DNT>, busque todos los logs <DNT>Apache</DNT> con códigos de respuesta 503 mediante la consulta `logtype:apache response:503`
2. En el menú de elipses del gráfico log , haga clic en <DNT>**View query**</DNT>.
3. En la consulta, reemplace `SINCE <timestamp> UNTIL <timestamp> TIMESERIES MAX` con `FACET verb` y haga clic en <DNT>**Run**</DNT>. Verás una tabla con códigos de respuesta agrupados por método (verbo).
4. Cambie el tipo de gráfico a <DNT>**Pie**</DNT>.
5. Haga clic en <DNT>**Add to dashboard**</DNT> y complete los pasos.
