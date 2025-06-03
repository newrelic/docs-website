---
title: API de pesquisas NRQL
tags:
  - APIs
  - Lookups Service REST API
  - NRQL Lookups API
  - lookup
metaDescription: Use the NRQL Lookups API to create and manage lookup tables.
freshnessValidatedDate: '2023-09-18T00:00:00.000Z'
translationType: machine
---

Use a API NRQL Lookups para criar e gerenciar [tabela de consulta](/docs/logs/ui-data/lookup-tables-ui/#overview).

## Antes que você comece

A API NRQL Lookups é uma API REST que permite gerenciar tabela de consulta de forma programática. Como outra opção você também pode [gerenciar tabela de consulta através de nossa interface](/docs/logs/ui-data/lookup-tables-ui/#lookup-ui).

## Ponto de extremidade HTTP [#http-endpoints]

### URL base

Use o URL base aplicável à sua conta New Relic em sua chamada de API.

Endpoint dos Estados Unidos (EUA):

```
https://nrql-lookup.service.newrelic.com
```

Da[União Europeia](/docs/using-new-relic/welcome-new-relic/get-started/introduction-eu-region-data-center) (UE): endpoint

```
https://nrql-lookup.service.eu.newrelic.com
```

### Ponto final

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Método
      </th>

      <th>
        Endpoint
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [`create`](#create-and-update)
      </td>

      <td>
        `POST /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        Carregue uma nova tabela.
      </td>
    </tr>

    <tr>
      <td>
        [`update`](#create-and-update)
      </td>

      <td>
        `PUT /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        Substitua uma tabela existente.
      </td>
    </tr>

    <tr>
      <td>
        [`read`](#read)
      </td>

      <td>
        `GET /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        Baixe uma tabela que foi carregada anteriormente.
      </td>
    </tr>

    <tr>
      <td>
        [`delete`](#delete)
      </td>

      <td>
        `DELETE /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        Exclua a tabela fornecida.
      </td>
    </tr>

    <tr>
      <td>
        [`list`](#list)
      </td>

      <td>
        `GET /v1/accounts/YOUR_ACCOUNT_ID`
      </td>

      <td>
        Liste as tabelas atualizadas anteriormente para esta conta.
      </td>
    </tr>
  </tbody>
</table>

As variáveis necessárias nos endpoints de API de pesquisas NRQL acima são definidas abaixo.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Variável
      </th>

      <th style={{ width: "200px" }}>
        Tipo
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `YOUR_ACCOUNT_ID`
      </td>

      <td>
        `number`
      </td>

      <td>
        A conta à qual a tabela pertence
      </td>
    </tr>

    <tr>
      <td>
        `TABLE_NAME`
      </td>

      <td>
        `string`
      </td>

      <td>
        Um nome para a tabela armazenada. Os nomes das tabelas devem estar em conformidade com os [padrões de tipo de evento personalizado](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#general):

        * Comprimento máximo: 255
        * Pode ser uma combinação de caracteres alfanuméricos, sublinhados e dois pontos.
      </td>
    </tr>
  </tbody>
</table>

## Autenticação

Seu <InlinePopover type="userKey"/>serve para autenticar sua solicitação para a API NRQL Lookups e precisa ser passado como um cabeçalho HTTP.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Cabeçalho
      </th>

      <th>
        Valores suportados
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Api-Key`
      </td>

      <td>
        Uma New Relic <InlinePopover type="userKey"/>.
      </td>
    </tr>
  </tbody>
</table>

## Criar/atualizar uma tabela [#create-and-update]

### Ponto de extremidade HTTP [#create-and-update-http-endpoints]

#### Criar

`POST /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

Usado para fazer upload de uma nova tabela. A tabela já não pode existir. Se isso acontecer, esta chamada resultará em uma resposta `400 Bad Request` .

#### Atualizar

`PUT /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

Usado para substituir uma tabela existente. Se a tabela não existir, esta chamada resultará em uma resposta `404 Not Found` .

#### Parâmetro de consulta de solicitação

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Nome
      </th>

      <th>
        Tipo
      </th>

      <th>
        Padrão
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        Indica se o valor da tabela deve ser incluído na resposta.
      </td>
    </tr>
  </tbody>
</table>

### Cabeçalhos HTTP [#create-http-headers]

Ao criar seus cabeçalhos HTTP, use estas diretrizes:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Cabeçalho
      </th>

      <th>
        Valores suportados
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Content-Type`
      </td>

      <td>
        * `multipart/form-data`
        * `application/json`
      </td>
    </tr>

    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### Corpo da Solicitação [#create-request-body]

Os dados que você envia no corpo da sua solicitação podem ser `multipart/form-data` ou `application/json`.

<CollapserGroup>
  <Collapser
    id="multipart-form-data-request"
    title="Solicitação com multipart/form-data"
  >
    #### Campos Suportados

    Você pode fornecer os seguintes campos em suas solicitações de criação e atualização ao enviar conteúdo de `multipart/form-data` :

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Campo
          </th>

          <th style={{ width: "200px" }}>
            Tipo de valor
          </th>

          <th>
            Obrigatório
          </th>

          <th>
            Descrição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `table`
          </td>

          <td>
            Arquivo CSV
          </td>

          <td>
            Sim
          </td>

          <td>
            Parte de dados de formulário multipartes que contém o conteúdo CSV. Nossa lógica de análise de CSV é descrita em detalhes [aqui](/docs/logs/ui-data/lookup-tables-ui/#valuetypes).
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            `string`
          </td>

          <td>
            Não
          </td>

          <td>
            Segunda parte de dados de formulário multiparte que contém uma descrição da tabela.
          </td>
        </tr>
      </tbody>
    </table>

    #### Exemplo de carga útil

    ```
    --__X_BOUNDARY__
    Content-Disposition: form-data; name="table"; filename="sample.csv"
    Content-Type: text/csv

    id,name,intvalue,floatvalue,boolvalue
    '1,abc,27,2.7,true
    '2,def,2622,26.22,false
    '2a,"g,hi",1234,43.21,false
    --__X_BOUNDARY__--
    Content-Disposition: form-data; name="description"

    A description of the table
    --__X_BOUNDARY__--
    ```
  </Collapser>

  <Collapser
    id="application-json-request"
    title="Solicitar com aplicativo/json"
  >
    #### Campos Suportados

    Você pode fornecer os seguintes campos em sua criação e atualização ao enviar conteúdo `application/json` :

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Campo
          </th>

          <th style={{ width: "200px" }}>
            Tipo de valor
          </th>

          <th>
            Obrigatório
          </th>

          <th>
            Descrição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `table`
          </td>

          <td>
            `JSON`
          </td>

          <td>
            Sim
          </td>

          <td>
            <table>
              <tr>
                <td style={{ width: "200px" }}>
                  `headers`
                </td>

                <td>
                  Uma matriz de valores `string` que representa os nomes das colunas da tabela
                </td>
              </tr>

              <tr>
                <td style={{ width: "200px" }}>
                  `rows`
                </td>

                <td>
                  Uma matriz de arrays, representando os valores da tabela. Todos os valores devem ser valores `string`, `number` ou `boolean` . (Objetos JSON complexos não são permitidos.)
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            `string`
          </td>

          <td>
            Não
          </td>

          <td>
            Uma descrição detalhada da tabela
          </td>
        </tr>
      </tbody>
    </table>

    #### Exemplo de carga útil

    ```json
    {
           "table": {
               "headers": [
               "id", "name", "intvalue", "floatvalue", "boolvalue"
               ],
               "rows": [
                   ["1", "abc", 27, 2.7, true],
                   ["2", "def", 2622, 26.22, false],
                   ["2a", "d,ef", 1234, 43.21, false]
               ]
           },
           "description": "This is a description."
       }
    ```
  </Collapser>
</CollapserGroup>

### Corpo de Resposta [#create-update-response]

Se a solicitação for bem-sucedida, a carga JSON de resposta poderá incluir os seguintes campos:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Campo
      </th>

      <th style={{ width: "200px" }}>
        Tipo de valor
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `accountId`
      </td>

      <td>
        `number`
      </td>

      <td>
        A conta à qual a tabela pertence. Isso corresponderá ao valor da conta no caminho.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        `string`
      </td>

      <td>
        Um nome para a tabela armazenada. Isso corresponderá ao valor do nome no caminho.
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        `string`
      </td>

      <td>
        Uma descrição detalhada da tabela
      </td>
    </tr>

    <tr>
      <td>
        `guid`
      </td>

      <td>
        `string`
      </td>

      <td>
        O guia atribuído à tabela na criação.
      </td>
    </tr>

    <tr>
      <td>
        `size`
      </td>

      <td>
        `number`
      </td>

      <td>
        Tamanho da tabela como uma string CSV.
      </td>
    </tr>

    <tr>
      <td>
        `rows`
      </td>

      <td>
        `number`
      </td>

      <td>
        O número de linhas na tabela (excluindo a linha do cabeçalho)
      </td>
    </tr>

    <tr>
      <td>
        `updatedBy`
      </td>

      <td>
        `string`
      </td>

      <td>
        O nome de usuário/endereço de e-mail do último usuário que criou ou atualizou esta tabela pela última vez.
      </td>
    </tr>

    <tr>
      <td>
        `updatedAt`
      </td>

      <td>
        `string`
      </td>

      <td>
        O carimbo de timestamp de quando a tabela foi criada ou atualizada pela última vez. Isso refletirá o timestamp da última atualização do objeto S3. O valor será uma sequência de data e hora padrão ISO 8601 (ex. 2023-02-13T19:49:28.023Z)
      </td>
    </tr>

    <tr>
      <td>
        `table`
      </td>

      <td>
        `JSON` objeto literal
      </td>

      <td>
        <table>
          <tr>
            <td style={{ width: "200px" }}>
              `headers`
            </td>

            <td>
              Uma matriz de valores `string` que representa os nomes das colunas da tabela
            </td>
          </tr>

          <tr>
            <td style={{ width: "200px" }}>
              `rows`
            </td>

            <td>
              Uma matriz de arrays, representando os valores da tabela.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
</table>

#### Exemplo de carga JSON de resposta

```json
{
  "accountId": YOUR_ACCOUNT_ID,
  "name": "sample",
  "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
  "size": 120
  "rows": 3
  "updatedBy": "jondoe@example.com"
  "updatedAt": "2023-02-13T19:49:28.023Z",
  "table": {
    "headers": [
      "id", "name", "description", "intvalue", "floatvalue", "boolvalue"
    ],
    "rows": [
      [1, "abc", 27, 2.7, true],
      [2, "def", 2622, 26.22, false],
      ["2a", "d,ef", 1234, 43.21, false]
    ]
  }
}
```

### Solicitações de exemplo

<CollapserGroup>
  <Collapser
    id="create-a-new-table"
    title="Crie uma nova tabela"
  >
    Para criar uma nova tabela de consulta, podemos enviar uma solicitação POST para o endpoint create com um payload JSON descrevendo a tabela de consulta.

    Aqui está um exemplo de comando `curl` :

    ```bash
    curl -X "POST" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
          -H 'Content-Type: application/json' \
          -H 'Api-Key: YOUR_USER_KEY'\
          -d $'{
      "table": {
      "headers": ["id", "name", "intvalue", "floatvalue", "boolvalue"],
      "rows": [
          ["1", "abc", 27, 2.7, true],
          ["2", "def", 2622, 26.22, false]
      ]
      },
      "description": "This is a description."
      }'
    ```
  </Collapser>

  <Collapser
    id="update-a-table"
    title="Atualizar uma tabela existente"
  >
    Para substituir uma tabela de consulta existente, podemos enviar uma solicitação PUT ao endpoint de atualização com um corpo de solicitação `multipart/form-data` contendo a nova tabela.

    ```bash
    curl -X "PUT" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Api-Key: YOUR_USER_KEY'\
       -H 'Content-Type: multipart/form-data; charset=utf-8; boundary=__X_PAW_BOUNDARY__' \
       -F "table=id,name,description,intvalue,floatvalue,boolvalue
          1,abc,desc1,27,2.7,true
          2,def,desc2,2622,26.22,false
          " \
       -F "description=This is a description."
    ```
  </Collapser>
</CollapserGroup>

## Leia uma tabela [#read]

### Endpoint HTTP [#read-endpoint]

`GET /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

Usado para baixar uma tabela que foi carregada anteriormente. Se a tabela não existir, esta chamada resultará em uma resposta `404 Not Found` . Este endpoint não tem carga útil de solicitação.

#### Parâmetro de consulta de solicitação

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Nome
      </th>

      <th style={{ width: "150px" }}>
        Tipo
      </th>

      <th>
        Padrão
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        Indica se o valor da tabela deve ser incluído na resposta. Ignorado quando o tipo de conteúdo é `text/csv`.
      </td>
    </tr>
  </tbody>
</table>

### Cabeçalhos HTTP [#read-headers]

Ao criar seus cabeçalhos HTTP, use estas diretrizes:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Cabeçalho
      </th>

      <th>
        Valores suportados
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
        * `text/csv`
      </td>
    </tr>
  </tbody>
</table>

### Corpo de Resposta [#read-response-body]

Se a solicitação for bem-sucedida, a resposta poderá ser do tipo `application/json` ou `text/csv`.

#### Resposta com tipo `application/json`

A resposta será igual à [carga útil da resposta de criação/atualização](#create-update-response).

#### Resposta com tipo `text/csv`

A resposta conterá a tabela em formato CSV.

### Solicitações de exemplo [#read-example-requests]

<Collapser
  id="download-an-existing-table"
  title="Baixe uma tabela existente"
>
  Para baixar uma tabela que foi carregada anteriormente, podemos enviar uma solicitação GET ao endpoint de atualização.

  Aqui está um exemplo de comando `curl` :

  ```bash
  curl "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Accept: text/csv' \
       -H 'Api-Key: YOUR_USER_KEY'
  ```

  Aqui está um exemplo de resposta `text/csv` :

  ```csv
  id,name,intvalue,floatvalue,boolvalue
  '1,abc,27,2.7,true
  '2,def,2622,26.22,false
  '2a,"g,hi",1234,43.21,false
  ```
</Collapser>

## Excluir uma tabela [#delete]

### Endpoint HTTP [#delete-endpoint]

`DELETE /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

Usado para excluir a tabela fornecida. Se a tabela não existir, esta chamada resultará em uma resposta `404 Not Found` . Este endpoint não tem carga útil de solicitação.

<Callout variant="important">
  As tabelas excluídas não são recuperáveis.
</Callout>

#### Parâmetro de consulta de solicitação

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Nome
      </th>

      <th>
        Tipo
      </th>

      <th>
        Padrão
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        Indica se o valor da tabela deve ser incluído na resposta.
      </td>
    </tr>
  </tbody>
</table>

### Cabeçalhos HTTP [#delete-headers]

Ao criar seus cabeçalhos HTTP, use estas diretrizes:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Cabeçalho
      </th>

      <th>
        Valores suportados
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### Corpo de Resposta [#delete-response-body]

Se a solicitação for bem-sucedida e o cabeçalho `Accept` estiver definido como `application/json`, o corpo da resposta será o mesmo da [resposta de criação/atualização carga](#create-update-response).

### Solicitações de exemplo [#delete-example-request]

<Collapser
  id="delete-an-existing-table"
  title="Excluir uma tabela existente"
>
  Para excluir uma tabela que foi carregada anteriormente, podemos enviar uma solicitação DELETE ao endpoint de exclusão.

  Aqui está um exemplo de comando `curl` :

  ```bash
  curl -X "DELETE" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Accept: application/json' \
       -H 'Api-Key: YOUR_USER_KEY'\
  ```
</Collapser>

## Listar tabelas [#list]

### Endpoint HTTP [#list-endpoint]

`GET /v1/accounts/YOUR_ACCOUNT_ID`

Lista as tabelas atualizadas anteriormente para esta conta. Este endpoint não tem carga útil de solicitação.

### Cabeçalhos HTTP [#list-headers]

Ao criar seus cabeçalhos HTTP, use estas diretrizes:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Cabeçalho
      </th>

      <th>
        Valores suportados
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### Corpo de Resposta [#list-response-body]

Se a solicitação for bem-sucedida, a carga JSON de resposta consistirá em uma matriz de resumos de tabelas. Cada resumo da tabela pode incluir os campos abaixo.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Campo
      </th>

      <th style={{ width: "200px" }}>
        Tipo de valor
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `accountId`
      </td>

      <td>
        `number`
      </td>

      <td>
        A conta à qual a tabela pertence. Isso corresponderá ao valor da conta no caminho.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        `string`
      </td>

      <td>
        Um nome para a tabela armazenada. Isso corresponderá ao valor do nome no caminho.
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        `string`
      </td>

      <td>
        Uma descrição mais detalhada da tabela
      </td>
    </tr>

    <tr>
      <td>
        `guid`
      </td>

      <td>
        `string`
      </td>

      <td>
        O guia atribuído à tabela na criação.
      </td>
    </tr>

    <tr>
      <td>
        `size`
      </td>

      <td>
        `number`
      </td>

      <td>
        O tamanho da tabela como uma string CSV.
      </td>
    </tr>

    <tr>
      <td>
        `rows`
      </td>

      <td>
        `number`
      </td>

      <td>
        O número de linhas na tabela (excluindo a linha do cabeçalho)
      </td>
    </tr>

    <tr>
      <td>
        `updateBy`
      </td>

      <td>
        `string`
      </td>

      <td>
        O nome de usuário/endereço de e-mail do último usuário que atualizou esta tabela.
      </td>
    </tr>

    <tr>
      <td>
        `updatedAt`
      </td>

      <td>
        `string`
      </td>

      <td>
        O carimbo de timestamp de quando a tabela foi criada ou atualizada pela última vez. Isso refletirá o timestamp da última atualização do objeto S3. O valor será uma sequência de data e hora padrão ISO 8601 (ex. 2023-02-13T19:49:28.023Z)
      </td>
    </tr>
  </tbody>
</table>

### Exemplo de solicitação [#list-example-request]

<Collapser
  id="list-tables"
  title="Listando tabelas atualizadas para uma conta"
>
  Para listar as tabelas de uma conta, podemos enviar uma solicitação GET ao endpoint da lista.

  Aqui está um exemplo de comando `curl` :

  ```bash
  curl "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID" \
       -H 'Accept: text/csv' \
       -H 'Api-Key: YOUR_USER_KEY'
  ```

  Aqui está um exemplo de carga JSON de resposta:

  ```json
  [
    {
      "accountId": YOUR_ACCOUNT_ID,
      "name": "sample",
      "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
      "size": 120
      "rows": 3
      "updatedBy": "jondoe@example.com"
      "updatedAt": "2023-02-13T19:49:28.023Z"
    },
    {
      "accountId": YOUR_ACCOUNT_ID,
      "name": "sample2",
      "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
      "size": 4096
      "rows": 2000
      "updatedBy": "janedoe@example.com"
      "updatedAt": "2023-02-14T13:30:21.100Z"
    }
  ]
  ```
</Collapser>

## Mensagem de erro [#error-messaging]

Se uma solicitação não for bem-sucedida, a carga útil da resposta de erro estará no formato abaixo.

```json
{
  "code": HTTP_STATUS_CODE(same as status header),
  "message": ERROR_MESSAGE
}
```
