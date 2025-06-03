---
title: Mensagem do log está truncada
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

Nem todos os dados de log em uma mensagem ou para um atributo específico estão sendo exibidos. Os dados log terminam com reticências (`...`) e os dados restantes não são mostrados.

## Solução

Isso ocorre porque o log de armazenamento de dados no New Relic limita o comprimento do campo a 4.094 caracteres. Quaisquer dados maiores que isso serão truncados durante a ingestão.

Se você tiver valores que excedem o limite de caracteres, aqui estão algumas opções para tentar:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Dicas de resolução de problemas
      </th>

      <th>
        Comentários
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Analisar mensagens longas
      </td>

      <td>
        Analise sua mensagem para fazer login em pares de valores principais mais curtos. Um exemplo comum é uma única linha de log de um log de acesso NGINX. Essa mensagem do log pode ser analisada usando análise integrada via [Logstash](https://www.elastic.co/guide/en/logstash/7.9/logstash-config-for-filebeat-modules.html), [Fluentd](https://docs.fluentd.org/parser/nginx) ou [Fluent Bit](https://fluentbit.io/documentation/0.12/parser/). Para obter mais informações, consulte nossa documentação sobre [análise de dados de log](/docs/logs/log-management/ui-data/parsing/).
      </td>
    </tr>

    <tr>
      <td>
        Usar saída JSON
      </td>

      <td>
        Use JSON como formato de saída em vez de texto simples. A mensagem JSON do log será automaticamente analisada em pares de valores principais, o que torna muito menos provável que atinja o limite de caracteres.
      </td>
    </tr>

    <tr>
      <td>
        Expandir dados de blob
      </td>

      <td>
        Os primeiros 4.094 caracteres de uma mensagem do log são armazenados como uma string. Os próximos 128.000 bytes são armazenados como `blob`.

        Para consultar logs que provavelmente excederam esse limite de armazenamento no New Relic, execute a seguinte consulta:

        ```sql
        SELECT * FROM Log WHERE length(message) >= 4094
        ```

        Para expandir os dados do blob, execute a consulta a seguir usando `message` ou qualquer outro atributo. Certifique-se de colocar o atributo do blob entre crases. Por exemplo:

        ```sql
        SELECT message, another-attribute, blob(`newrelic.ext.message`), blob(`newrelic.ext.another-attribute`)
        FROM Log
        ```

        Para obter mais informações, consulte nossa documentação sobre [mensagens longas armazenadas como blobs](/docs/logs/log-management/ui-data/long-logs-blobs/).
      </td>
    </tr>
  </tbody>
</table>
