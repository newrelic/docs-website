---
title: Encontre dados em log longo (blobs)
tags:
  - Logs
  - Log management
  - UI and data
metaDescription: How to find extensive log data stored in blobs in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Dados log extensos podem ajudá-lo a solucionar problemas. Mas e se um atributo no seu log contiver milhares de caracteres? Quanto desses dados a New Relic pode armazenar? E como você pode encontrar informações úteis em todos esses dados?

## Como funcionam os blobs [#blob-example]

Para valores de string longos que são maiores do que podem ser armazenados no NRDB (4.094 caracteres), armazenamos a string longa em três partes:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Seções log longas
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Primeiros 4.094 caracteres
      </td>

      <td>
        Os primeiros 4.094 caracteres são armazenados em um campo de evento `Log` com o mesmo nome. Portanto, um valor `message` longo teria seus primeiros 4.094 caracteres armazenados em um campo `message` .
      </td>
    </tr>

    <tr>
      <td>
        Próximos 128.000 bytes UTF-8
      </td>

      <td>
        Os próximos 128.000 bytes UTF-8 da string são armazenados em um campo `blob` com o nome com `newrelic.ext.` prefixado. Portanto, um valor `message` longo teria caracteres além dos primeiros 4.094 caracteres armazenados em um campo `newrelic.ext.message` como `blob`.

        O número real de caracteres armazenados depende da representação UTF-8 dos caracteres. UTF-8 representa caracteres Unicode como um a quatro bytes, portanto armazenaremos entre 32.000 e 128.000 caracteres após os primeiros 4.094 caracteres.
      </td>
    </tr>

    <tr>
      <td>
        Personagens restantes
      </td>

      <td>
        Quaisquer caracteres além de 4.094 caracteres mais 128.000 bytes serão descartados e não armazenados.
      </td>
    </tr>

    <tr>
      <td>
        Resultados da consulta
      </td>

      <td>
        A consulta Blob tem um limite de 20 resultados. Ao usar `blob()` certifique-se de que sua consulta retorne no máximo 20 resultados.
      </td>
    </tr>
  </tbody>
</table>

Portanto, o campo `message` longo seria armazenado como:

```
message: <first 4,094 characters as a string>
newrelic.ext.message: <next 128,000 bytes as a 'blob'>
```

<Callout variant="tip">
  Você pode pesquisar os primeiros 4.094 caracteres de um atributo de string. Você também pode criar alertas para os primeiros 4.094 caracteres. No entanto, como o armazenamento `blob` não é pesquisável, o texto além dos primeiros 4.094 caracteres não é pesquisável nem alertável.
</Callout>

## Consulte seus dados para blobs [#query-blob]

<img
  title="Query log extended data (blobs)"
  alt="Screenshot of Log blobs query in UI"
  src="/images/logs_screenshot-crop_log-blob-query.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT>: Para consultar dados de blob estendidos em seu log, certifique-se de incluir crases na sintaxe do blob do seu atributo.
</figcaption>

Para consultar quaisquer dados log no New Relic, execute a seguinte consulta:

```sql
SELECT * FROM Log
```

Para expandir os dados do blob, execute a consulta a seguir usando `message` ou qualquer outro atributo. Certifique-se de colocar o atributo do blob entre crases. Por exemplo:

```sql
SELECT message, another-attribute, blob(`newrelic.ext.message`), blob(`newrelic.ext.another-attribute`) FROM Log
```

Isso expande os dados no blob para que você possa vê-los (mas não pesquisá-los). Por exemplo, New Relic retorna:

```json
{
  "message": <first 4,094 characters>
  "newrelic.ext.message": <the next 128,000 bytes as Base64> 
  "another-attribute": <first 4,094 characters>
  "newrelic.ext.another-attribute": <the next 128,000 bytes as Base64>
}
```

A interface do log une automaticamente o valor original novamente ao observar a Visualização de detalhes log . Ao consultar usando NRQL diretamente, você precisa unir manualmente as informações:

* Decodificando a Base64 do valor do atributo `newrelic.ext.`
* Convertendo o UTF-8 resultante em uma string
* Anexando essa string aos primeiros 4.094 caracteres no atributo “main”

## Retenção de dados para log longo [#data-retention]

O NRDB retém seus registros de blob por um mês. Se você tiver mensagens longas do log armazenadas como `LogExtendedRecord`, esses dados também continuarão disponíveis por um mês no NRDB.

Após um mês, nenhum novo atributo `LogExtendedRecord` será criado. Todos eles serão armazenados no NRDB como blobs.
