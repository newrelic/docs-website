---
title: Buscar datos en registros largos (blobs)
tags:
  - Logs
  - Log management
  - UI and data
metaDescription: How to find extensive log data stored in blobs in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Una gran cantidad de datos log pueden ayudarle a solucionar problemas. Pero ¿qué pasa si un atributo en su log contiene miles de caracteres? ¿Cuántos de estos datos puede almacenar New Relic? ¿Y cómo encontrar información útil en todos estos datos?

## ¿Cómo funcionan las manchas? [#blob-example]

Para valores de cadena largos que son más largos de lo que se puede almacenar en NRDB (4094 caracteres), almacenamos la cadena larga en tres partes:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Secciones log largos
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Primeros 4.094 caracteres
      </td>

      <td>
        Los primeros 4094 caracteres se almacenan en un campo de evento `Log` con el mismo nombre. Por lo tanto, un valor `message` largo tendría sus primeros 4094 caracteres almacenados en un campo `message` .
      </td>
    </tr>

    <tr>
      <td>
        Siguientes 128.000 bytes UTF-8
      </td>

      <td>
        Los siguientes 128.000 bytes UTF-8 de la cadena se almacenan en un campo `blob` con el nombre con `newrelic.ext.` antepuesto. Por lo tanto, un valor `message` largo tendría caracteres más allá de los primeros 4094 caracteres almacenados en un campo `newrelic.ext.message` como `blob`.

        La cantidad real de caracteres almacenados depende de la representación UTF-8 de los caracteres. UTF-8 representa caracteres Unicode de uno a cuatro bytes, por lo que almacenaremos entre 32 000 y 128 000 caracteres después de los primeros 4094 caracteres.
      </td>
    </tr>

    <tr>
      <td>
        Personajes restantes
      </td>

      <td>
        Todos los caracteres que superen los 4094 caracteres más 128 000 bytes se eliminan y no se almacenan.
      </td>
    </tr>

    <tr>
      <td>
        Resultados de la consulta
      </td>

      <td>
        Blob consulta tiene un límite de 20 resultados. Cuando utilice `blob()` , asegúrese de que su consulta arroje un máximo de 20 resultados.
      </td>
    </tr>
  </tbody>
</table>

Entonces el campo largo `message` se almacenaría como:

```
message: <first 4,094 characters as a string>
newrelic.ext.message: <next 128,000 bytes as a 'blob'>
```

<Callout variant="tip">
  Puede buscar los primeros 4.094 caracteres de un atributo de cadena. También puede crear alertas para los primeros 4.094 caracteres. Sin embargo, dado que el almacenamiento `blob` no se puede buscar, el texto que supere los primeros 4094 caracteres no se puede buscar ni generar alertas.
</Callout>

## Consulta tus datos para blobs [#query-blob]

<img
  title="Query log extended data (blobs)"
  alt="Screenshot of Log blobs query in UI"
  src="/images/logs_screenshot-crop_log-blob-query.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT>: Para consultar datos de blobs extendidos en su registro, asegúrese de incluir comillas invertidas en la sintaxis de blobs de su atributo.
</figcaption>

Para consultar cualquier dato log en New Relic, ejecute la siguiente consulta:

```sql
SELECT * FROM Log
```

Para expandir los datos del blob, ejecute la siguiente consulta utilizando `message` o cualquier otro atributo. Asegúrese de incluir el atributo del blob entre comillas invertidas. Por ejemplo:

```sql
SELECT message, another-attribute, blob(`newrelic.ext.message`), blob(`newrelic.ext.another-attribute`) FROM Log
```

Esto expande los datos del blob para que pueda verlos (pero no buscarlos). Por ejemplo, New Relic devuelve:

```json
{
  "message": <first 4,094 characters>
  "newrelic.ext.message": <the next 128,000 bytes as Base64> 
  "another-attribute": <first 4,094 characters>
  "newrelic.ext.another-attribute": <the next 128,000 bytes as Base64>
}
```

La UI del registro vuelve a unir automáticamente el valor original cuando se mira la vista detallada log . Al realizar consultas utilizando NRQL directamente, debe unir manualmente la información de la siguiente manera:

* Decodificando la Base64 del valor del atributo `newrelic.ext.`
* Convertir el UTF-8 resultante en una cadena
* Agregar esa cadena a los primeros 4.094 caracteres del atributo "principal"

## Retención de datos para registros largos [#data-retention]

NRDB conserva sus registros de blobs durante un mes. Si tiene un mensaje de registro largo almacenado como `LogExtendedRecord`, esos datos también seguirán estando disponibles durante un mes en NRDB.

Después de que pase un mes, no se crearán más atributos `LogExtendedRecord` nuevos. Todos se almacenarán en NRDB como blobs.
