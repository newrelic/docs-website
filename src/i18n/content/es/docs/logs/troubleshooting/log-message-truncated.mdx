---
title: Mensaje de registro está truncado
type: troubleshooting
tags:
  - Logs
  - Log management
  - Troubleshooting
metaDescription: 'New Relic log management troubleshooting: your log data is not being displayed completely; it ends incompletely, with an ellipses.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

No se muestran todos los datos log de un mensaje o de un atributo específico. Los datos log terminan con puntos suspensivos (`...`) y los datos restantes no se muestran.

## Solución

Esto ocurre porque el registro de almacenamiento de datos en New Relic limita la longitud del campo a 4094 caracteres. Cualquier dato más largo que eso se trunca durante la ingesta.

Si tiene valores que exceden el límite de caracteres, aquí hay algunas opciones para probar:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Consejos de resolución de problemas
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Analizar mensajes largos
      </td>

      <td>
        Analice su mensaje de registro en pares principales de valor más cortos. Un ejemplo común es una única línea log de un log de acceso NGINX. Ese mensaje de registro se puede analizar mediante el análisis integrado a través de [Logstash](https://www.elastic.co/guide/en/logstash/7.9/logstash-config-for-filebeat-modules.html), [Fluentd](https://docs.fluentd.org/parser/nginx) o [Fluent Bit](https://fluentbit.io/documentation/0.12/parser/). Para obtener más información, consulte nuestra documentación sobre [el análisis de datos de registro](/docs/logs/log-management/ui-data/parsing/).
      </td>
    </tr>

    <tr>
      <td>
        Usar salida JSON
      </td>

      <td>
        Utilice JSON como formato de salida en lugar de texto sin formato. El mensaje de registro JSON se analizará automáticamente en pares principales de valor, lo que hace que sea mucho menos probable que alcance el límite de caracteres.
      </td>
    </tr>

    <tr>
      <td>
        Expandir datos de blobs
      </td>

      <td>
        Los primeros 4.094 caracteres de un mensaje de registro se almacenan como una cadena. Los siguientes 128.000 bytes se almacenan como `blob`.

        Para consultar registros que probablemente hayan excedido este límite de almacenamiento en New Relic, ejecute la siguiente consulta:

        ```sql
        SELECT * FROM Log WHERE length(message) >= 4094
        ```

        Para expandir los datos del blob, ejecute la siguiente consulta utilizando `message` o cualquier otro atributo. Asegúrese de incluir el atributo del blob entre comillas invertidas. Por ejemplo:

        ```sql
        SELECT message, another-attribute, blob(`newrelic.ext.message`), blob(`newrelic.ext.another-attribute`)
        FROM Log
        ```

        Para obtener más información, consulte nuestra documentación sobre [mensajes largos almacenados como blobs](/docs/logs/log-management/ui-data/long-logs-blobs/).
      </td>
    </tr>
  </tbody>
</table>
