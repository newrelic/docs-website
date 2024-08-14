---
title: Envie seus dados de registro com nossa API log
tags:
  - Logs
  - Log management
  - Log API
metaDescription: Use our Log API so you can send your monitored log data directly to New Relic via HTTP input.
freshnessValidatedDate: never
translationType: machine
---

Se nossas [soluções de encaminhamento de logs](/docs/logs/forward-logs/) não atenderem às suas necessidades, você poderá usar nossa Log API para enviar dados log diretamente para o New Relic por meio de um endpoint HTTP.

## Endpoint HTTP [#endpoint]

Use o endpoint aplicável à sua conta New Relic:

Endpoint dos Estados Unidos (EUA):

```
https://log-api.newrelic.com/log/v1
```

Da[União Europeia](/docs/using-new-relic/welcome-new-relic/get-started/introduction-eu-region-data-center) (UE): endpoint

```
https://log-api.eu.newrelic.com/log/v1
```

Endpoint FedRAMP:

```
https://gov-log-api.newrelic.com/log/v1
```

## Configuração HTTP [#setup]

Para enviar dados log para sua conta New Relic por meio da API log :

1. Obtenha seu <InlinePopover type="licenseKey"/>.

2. Revise os [limites e caracteres restritos](#limits) para sua carga JSON.

3. Gere a mensagem JSON usando os [cabeçalhos](#json-headers) e campos [de corpo](#json-body) necessários.

4. Certifique-se de que `Api-Key` ou `License-Key` esteja incluído nos [cabeçalhos](#auth-headers) ou [no parâmetro de consulta](#query-parameters). Consulte os [exemplos de log JSON](#log-attribute-examples).

5. Envie sua mensagem JSON para o endpoint HTTP apropriado para sua conta New Relic em uma solicitação `POST` .

   * NÓS: `https://log-api.newrelic.com/log/v1`
   * UE: `https://log-api.eu.newrelic.com/log/v1`
   * FedRAMP: `https://gov-log-api.newrelic.com/log/v1`

6. Gere algum tráfego e aguarde alguns minutos e, em seguida, [verifique os dados da sua conta](#what-next) .

Se nenhum dado aparecer após você ativar nossos recursos <InlinePopover type="logs"/>, siga nossos [procedimentos de resolução de problemas](/docs/logs/log-management/troubleshooting/no-log-data-appears-ui/).

## Cabeçalhos HTTP [#json-headers]

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

        Obrigatório
      </td>

      <td>
        * `application/json`
        * `json`
        * `application/gzip`
        * `gzip`
      </td>
    </tr>
  </tbody>
</table>

A formatação JSON compactada com gzip é aceita. Se estiver enviando JSON compactado, inclua os cabeçalhos `Content-Type: application/json` e `Content-Encoding: gzip` .

## Autenticação [#authentication]

Seu <InlinePopover type="licenseKey"/>serve para autenticar sua solicitação na API log e determina a conta New Relic onde suas mensagens de log enviadas serão gravadas. Ele precisa ser passado como um cabeçalho HTTP ou um parâmetro de string de consulta.

### Opção 1: autenticar usando cabeçalho HTTP [#auth-header]

Passe sua chave de licença adicionando um cabeçalho HTTP personalizado conforme descrito abaixo:

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
        Uma New Relic <InlinePopover type="licenseKey"/>. Você também pode [enviar isso via parâmetro de consulta](#query-parameters).
      </td>
    </tr>
  </tbody>
</table>

### Opção 2: autenticar usando o parâmetro de string de consulta (autenticação sem cabeçalho) [#query-parameters]

A chave de licença também pode ser passada como um parâmetro de string de consulta na URL. Isto é útil ao enviar log de fontes baseadas em nuvem que não permitem cabeçalhos de solicitação HTTP personalizados.

Exemplo: `https://LOG_API_ENDPOINT/log/v1?Api-Key=YOUR_API_KEY_HERE`

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Parâmetro de consulta
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Api-Key`
      </td>

      <td>
        Seu <InlinePopover type="licenseKey"/>. Você também pode [enviar isso via cabeçalho HTTP](#auth-header).
      </td>
    </tr>
  </tbody>
</table>

## Corpo JSON [#json-content]

Você pode enviar sua mensagem JSON usando um conjunto de atributos simplificado ou detalhado:

<CollapserGroup>
  <Collapser
    id="simple-json"
    title="Mensagem de corpo JSON simplificada"
  >
    Ao usar o formato simplificado para criar sua mensagem JSON, envie um único objeto JSON com o seguinte:

    <table>
      <thead>
        <tr>
          <th>
            Campo
          </th>

          <th>
            Tipo de valor
          </th>

          <th>
            Formatar
          </th>

          <th>
            Obrigatório
          </th>

          <th>
            Notas
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `"timestamp"`
          </td>

          <td>
            Inteiro, String
          </td>

          <td>
            Milissegundos ou segundos desde a época (quando definido como um número inteiro) ou timestamp formatado em ISO8601 (quando definido como uma string)
          </td>

          <td>
            Não
          </td>

          <td>
            Se este campo não estiver presente ou especificado incorretamente, a mensagem terá carimbo de data/hora usando o horário de ingestão
          </td>
        </tr>

        <tr>
          <td>
            `"message"`
          </td>

          <td>
            (qualquer -- mas String é recomendado. Veja a [lista de tipos de atributo suportados](#supported-types))
          </td>

          <td>
            qualquer
          </td>

          <td>
            Não
          </td>

          <td>
            Este é o campo <DNT>**main**</DNT> mensagem do log que é pesquisado por padrão
          </td>
        </tr>

        <tr>
          <td>
            `"logtype"`
          </td>

          <td>
            Corda
          </td>

          <td>
            qualquer sequência
          </td>

          <td>
            Não
          </td>

          <td>
            Campo primário para identificar log e regras de análise correspondentes
          </td>
        </tr>

        <tr>
          <td>
            Outros campos
          </td>

          <td>
            (qualquer - veja a [lista de tipos de atributos suportados](#supported-types))
          </td>

          <td>
            qualquer
          </td>

          <td>
            Não
          </td>

          <td>
            Estes se tornarão um atributo da mensagem do log.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="detailed-json"
    title="Mensagem detalhada do corpo JSON"
  >
    Ao usar o formato detalhado para criar seu corpo, ele deve ser um <DNT>**JSON array**</DNT> contendo um ou mais objetos JSON, cada um deles com o seguinte formato:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Campo
          </th>

          <th>
            Tipo de valor
          </th>

          <th>
            Formatar
          </th>

          <th>
            Obrigatório
          </th>

          <th>
            Notas
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `"common"`
          </td>

          <td>
            Objeto
          </td>

          <td>
            Veja [comum](#json-common).
          </td>

          <td>
            Não
          </td>

          <td>
            Qualquer atributo que seja comum a todas as mensagens do log
          </td>
        </tr>

        <tr>
          <td>
            `"logs"`
          </td>

          <td>
            Matriz
          </td>

          <td>
            Veja [registro](#json-logs).
          </td>

          <td>
            Sim
          </td>

          <td>
            Matriz com as entradas de log
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Tipos de atributos suportados [#supported-types]

Atributo pode ser de qualquer um dos seguintes tipos:

<table>
  <thead>
    <tr>
      <th>
        Digite a solicitação JSON
      </th>

      <th>
        Tipo armazenado no banco de dados New Relic
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `boolean`
      </td>

      <td>
        `boolean`
      </td>
    </tr>

    <tr>
      <td>
        `integer`
      </td>

      <td>
        `integer`
      </td>
    </tr>

    <tr>
      <td>
        `long`
      </td>

      <td>
        `long`
      </td>
    </tr>

    <tr>
      <td>
        `float`
      </td>

      <td>
        `float`
      </td>
    </tr>

    <tr>
      <td>
        `double`
      </td>

      <td>
        `double`
      </td>
    </tr>

    <tr>
      <td>
        `string`
      </td>

      <td>
        `string` (Observe que se um valor de string for JSON stringificado, ele será analisado e seus campos extraídos como variáveis. Veja [análise de atributo de mensagem JSON](#message-attribute-parsin))
      </td>
    </tr>

    <tr>
      <td>
        Matriz
      </td>

      <td>
        (sem suporte)
      </td>
    </tr>
  </tbody>
</table>

## Limites e caracteres restritos [#limits]

<Callout variant="caution">
  Evite chamar nossa API dentro do código de um aplicativo voltado para o cliente. Isso pode causar problemas de desempenho ou bloquear seu aplicativo se o tempo de resposta for lento. Se precisar fazer desta forma, chame nossa API de forma assíncrona para evitar esses problemas de desempenho.
</Callout>

Restrições no log enviado para a API log :

* Tamanho total da carga útil:

  <DNT>
    **1MB(10^6 bytes) maximum per POST**
  </DNT>

  . É altamente recomendável usar compactação.

* A carga deve ser codificada como

  <DNT>
    **UTF-8**
  </DNT>

  .

* Número de atributo por evento: máximo 255.

* Comprimento do nome do atributo: 255 caracteres.

* Comprimento do valor do atributo: os primeiros 4.094 caracteres são armazenados no NRDB como um campo de evento `Log` com o mesmo nome, como `message`. Se o valor da string exceder 4.094 caracteres, armazenamos a string longa como um [blob](/docs/logs/ui-data/long-logs-blobs).

Alguns atributos específicos possuem restrições adicionais:

* `accountId`: este é um nome de atributo reservado. Se estiver incluído, será descartado durante a ingestão.
* `appId`: Deve ser um número inteiro. Ao usar um tipo de dados não inteiro, os dados serão ingeridos, mas se tornarão inquestionáveis.
* `entity.guid`, `entity.name` e `entity.type`: Esses atributo são usados internamente para identificar entidade. Quaisquer valores enviados com essas chaves na seção atributo de um ponto de dados métricos podem causar comportamento indefinido, como falta de entidade na UI ou telemetria não associada à entidade esperada. Para mais informações consulte a [síntese da entidade](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/#entity-synthesis).
* `eventType`: este é um nome de atributo reservado. Se estiver incluído, será descartado durante a ingestão.
* `timestamp`: deve ser um timestamp da época Unix (em segundos ou milissegundos) ou um timestamp formatado em ISO8601.

<Callout variant="important">
  Carga com carimbo de data/hora superior a 48 horas poderá ser descartada.
</Callout>

Limites de taxa no log enviado para a API log :

* Taxa máxima de solicitações HTTP enviadas à API log : 300.000 solicitações por minuto
* Taxa máxima de bytes JSON de log descompactados enviados para a API de log: 10 GB por minuto

### Violação do limite de taxa

Exceder os limites de taxa afeta o comportamento da API log . Siga estas instruções se isso acontecer.

<CollapserGroup>
  <Collapser
    id="http-requests"
    title="Solicitações HTTP por minuto"
  >
    Quando o limite máximo de taxa de solicitação é excedido para uma conta, a API New Relic Logs retorna uma resposta `429` para o restante do minuto. Esta resposta inclui um cabeçalho `Retry-After` que indica quanto tempo esperar, em segundos, antes de reenviar ou enviar novos dados.

    Para resolver esse problema, reduza o número de pontos de dados que você está enviando ou solicite uma alteração no limite de taxa. As alterações subsequentes na assinatura não afetam os limites de taxas modificados. Se uma alteração na conta afetar seu limite de tarifa, você deverá nos notificar para ajustar seu limite de tarifa.

    Para solicitar alterações no limite de taxa, entre em contato com seu representante de conta da New Relic ou visite nosso [portal de suporte](http://support.newrelic.com).
  </Collapser>

  <Collapser
    id="json-bytes"
    title="Bytes JSON por minuto"
  >
    Quando o limite máximo de bytes JSON log é excedido para uma conta, a API New Relic Logs retorna uma resposta `429` para o restante do minuto. Esta resposta inclui um cabeçalho `Retry-After` que indica quanto tempo esperar, em segundos, antes de reenviar ou enviar novos dados.

    Para resolver esse problema, tente reduzir a quantidade de dados de log que você está enviando ou distribua-os por um período maior de tempo.

    Para solicitar alterações no limite de taxa, entre em contato com seu representante de conta da New Relic ou visite nosso [portal de suporte](http://support.newrelic.com).
  </Collapser>
</CollapserGroup>

### Formato de carga log [#payload-format]

Aceitamos qualquer carga JSON válida. A carga deve ser codificada como <DNT>**UTF-8**</DNT>.

## Atributo da mensagem JSON [#attributes]

<CollapserGroup>
  <Collapser
    id="json-common"
    title="Atributo de bloco comum"
  >
    Este é um bloco contendo um atributo que será comum a todas as entradas de log em [`logs`](#json-logs):

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Campo
          </th>

          <th>
            Tipo de valor
          </th>

          <th>
            Formatar
          </th>

          <th>
            Obrigatório
          </th>

          <th>
            Notas
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `"timestamp"`
          </td>

          <td>
            Inteiro, String
          </td>

          <td>
            Milissegundos ou segundos desde a época (quando definido como um número inteiro) ou timestamp formatado em ISO8601 (quando definido como uma string)
          </td>

          <td>
            Não
          </td>

          <td>
            Timestamp da mensagem é padrão para a hora de ingestão
          </td>
        </tr>

        <tr>
          <td>
            `"attributes"`
          </td>

          <td>
            Objeto
          </td>

          <td>
            JSON
          </td>

          <td>
            Não
          </td>

          <td>
            Este subobjeto contém todos os outros atributos da mensagem
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="json-logs"
    title="Atributo do bloco de log"
  >
    Esta é uma matriz contendo entradas de log com o seguinte formato:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Campo
          </th>

          <th>
            Tipo de valor
          </th>

          <th>
            Formatar
          </th>

          <th>
            Obrigatório
          </th>

          <th>
            Notas
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `"timestamp"`
          </td>

          <td>
            Inteiro, String
          </td>

          <td>
            Milissegundos ou segundos desde a época (quando definido como um número inteiro) ou timestamp formatado em ISO8601 (quando definido como uma string)
          </td>

          <td>
            Não
          </td>

          <td>
            Timestamp da mensagem é padrão para a hora de ingestão
          </td>
        </tr>

        <tr>
          <td>
            `"attributes"`
          </td>

          <td>
            Objeto
          </td>

          <td>
            JSON
          </td>

          <td>
            Não
          </td>

          <td>
            Este subobjeto contém todos os outros atributos da mensagem
          </td>
        </tr>

        <tr>
          <td>
            `"message"`
          </td>

          <td>
            (qualquer -- mas String é recomendado. Veja a [lista de tipos de atributo suportados](#supported-types))
          </td>

          <td>
            (qualquer)
          </td>

          <td>
            Sim
          </td>

          <td>
            Este é o campo principal da mensagem do log que é pesquisado por padrão
          </td>
        </tr>

        <tr>
          <td>
            `"log"`
          </td>

          <td>
            Corda
          </td>

          <td>
            (qualquer sequência)
          </td>

          <td>
            Não
          </td>

          <td>
            Reescreveremos esta string como o campo `message` na ingestão
          </td>
        </tr>

        <tr>
          <td>
            `"LOG"`
          </td>

          <td>
            Corda
          </td>

          <td>
            (qualquer sequência)
          </td>

          <td>
            Não
          </td>

          <td>
            Reescreveremos esta string como o campo `message` na ingestão
          </td>
        </tr>

        <tr>
          <td>
            `"MESSAGE"`
          </td>

          <td>
            Corda
          </td>

          <td>
            (qualquer sequência)
          </td>

          <td>
            Não
          </td>

          <td>
            Reescreveremos esta string como o campo `message` na ingestão
          </td>
        </tr>

        <tr>
          <td>
            `"msg"`
          </td>

          <td>
            Corda
          </td>

          <td>
            (qualquer sequência)
          </td>

          <td>
            Não
          </td>

          <td>
            Reescreveremos esta string como o campo `message` na ingestão
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Análise de atributo de mensagem JSON [#message-attribute-parsin]

Nossos recursos de gerenciamento de logs analisarão qualquer atributo `message` como JSON. O atributo JSON resultante na mensagem analisada será adicionado ao evento. Se o atributo `message` não for JSON, ele será deixado como está.

Aqui está um exemplo de atributo `message` :

```json
{
    "timestamp": 1562767499238,
    "message": "{\"service-name\": \"login-service\", \"user\": {\"id\": 123, \"name\": \"alice\"}}"
}
```

Isso será tratado como:

```json
{
  "timestamp": 1562767499238,
  "service-name": "login-service",
  "user": {
    "id": 123,
    "name": "alice"
  }
}
```

## Log exemplos JSON [#log-attribute-examples]

Atributo podem ser tipos JSON escalares como string e número. Eles também podem ser objetos compostos (ou [aninhados](https://www.digitalocean.com/community/tutorials/an-introduction-to-json#working-with-complex-types-in-json)). Atributo composto terá seu atributo associado armazenado com nomes achatados.

Por exemplo, aqui está um atributo `user` composto nos atributos de uma entrada de log :

```json
"attributes": {
    "action": "login",
    "user": {
        "id": 123,
        "name": "alice"
    }
}
```

Isso resultará no seguinte atributo sendo armazenado com o evento de log:

<table>
  <thead>
    <tr>
      <th>
        Atributo
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `"action"`
      </td>

      <td>
        `"login"`
      </td>
    </tr>

    <tr>
      <td>
        `"user.id"`
      </td>

      <td>
        `123`
      </td>
    </tr>

    <tr>
      <td>
        `"user.name"`
      </td>

      <td>
        `"alice"`
      </td>
    </tr>
  </tbody>
</table>

### Exemplo de mensagem POST log [#log-attribute-example]

Exemplo de mensagem log `POST`:

```bash
POST /log/v1 HTTP/1.1
Host: log-api.newrelic.com
Content-Type: application/json
Api-Key: <YOUR_LICENSE_KEY>
Accept: */*
Content-Length: 319
[{
   "common": {
     "attributes": {
       "logtype": "accesslogs",
       "service": "login-service",
       "hostname": "login.example.com"
     }
   },
   "logs": [{
       "timestamp": <TIMESTAMP_IN_UNIX_EPOCH_OR_IS08601_FORMAT>,
       "message": "User 'xyz' logged in"
     },{
       "timestamp": <TIMESTAMP_IN_UNIX_EPOCH_OR_IS08601_FORMAT>,
       "message": "User 'xyz' logged out",
       "attributes": {
         "auditId": 123
       }
     }]
}]
```

Essa mensagem `POST` resultaria no armazenamento da seguinte mensagem do log no New Relic:

<table>
  <thead>
    <tr>
      <th>
        Atributo
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `"logtype"`
      </td>

      <td>
        `"accesslogs"`
      </td>
    </tr>

    <tr>
      <td>
        `"service"`
      </td>

      <td>
        `"login-service"`
      </td>
    </tr>

    <tr>
      <td>
        `"hostname"`
      </td>

      <td>
        `"login.example.com"`
      </td>
    </tr>
  </tbody>
</table>

Aqui está um exemplo de atributo de bloco de log armazenado:

<table>
  <thead>
    <tr>
      <th>
        Atributo
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `"timestamp"`
      </td>

      <td>
        `1550086450124`
      </td>
    </tr>

    <tr>
      <td>
        `"message"`
      </td>

      <td>
        `"User 'xyz' logged out"`
      </td>
    </tr>

    <tr>
      <td>
        `"auditId"`
      </td>

      <td>
        `123`
      </td>
    </tr>
  </tbody>
</table>

### Exemplo de solicitação JSON POST [#example-post]

Aqui está um exemplo de solicitação JSON POST:

```bash
POST /log/v1 HTTP/1.1
Host: log-api.newrelic.com
Content-Type: application/json
Api-Key: <YOUR_LICENSE_KEY>
Accept: */*
Content-Length: 133
{
    "timestamp": <TIMESTAMP_IN_UNIX_EPOCH_OR_IS08601_FORMAT>,
    "message": "User 'xyz' logged in",
    "logtype": "accesslogs",
    "service": "login-service",
    "hostname": "login.example.com"
}
```

## Qual é o próximo? [#what-next]

Explore [os dados de registro em sua plataforma](/docs/logs/ui-data/use-logs-ui/).

* Obtenha visibilidade mais profunda dos dados de desempenho do seu aplicativo e da sua plataforma encaminhando seu log com nossos recursos [logs contextualizados](/docs/logs/logs-context/configure-logs-context-apm-agents/) .
* Configure [o alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/).
* [consulte seus dados](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) e [crie dashboard](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).
