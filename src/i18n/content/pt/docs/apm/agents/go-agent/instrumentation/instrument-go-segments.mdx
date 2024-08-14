---
title: Segmentos do instrumento Go
tags:
  - Agents
  - Go agent
  - Instrumentation
metaDescription: 'With APM''s Go agent, you can set up segments, which measure the timing of specific blocks of code in your Golang app.'
freshnessValidatedDate: never
translationType: machine
---

Com o New Relic for Go, você pode monitor os segmentos específicos de uma [transação](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) em um aplicativo Go para obter mais detalhes sobre funções específicas ou blocos de código.

## Meça o tempo para funções e blocos de código [#go-segments]

<DNT>**Segments**</DNT> são as partes específicas de uma [transação](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) em um aplicativo. Por segmentos instrumentados, você pode medir o tempo gasto por funções e blocos de código, como chamadas externas, chamadas de armazenamento de dados, adição de mensagens a filas e tarefas em segundo plano.

<DNT>**Example:**</DNT> Você tem uma transação associada a um processo de checkout, que processa informações de envio e de cartão de crédito. Você poderia instrumentar seu aplicativo para dividir essa transação em duas partes: um segmento para envio e um segmento para pagamento.

## Segmentos de bloco de código [#segment-code-block]

Depois de instrumentar uma [transação](/docs/agents/go-agent/get-started/instrument-go-transactions), você estará pronto para instrumentar um ou mais segmentos dessa transação.

Para instrumentalizar um bloco arbitrário de código como um segmento, use o seguinte padrão e inclua [`txn`](/docs/agents/go-agent/get-started/instrument-go-transactions) como o nome da variável definida para a transação:

```go
segment := newrelic.Segment{}
segment.Name = "mySegmentName"
segment.StartTime = txn.StartSegmentNow()
// ... code you want to time here ...
segment.End()
```

`StartSegment` é um ajudante conveniente. Ele cria um segmento e o inicia:

```go
segment := txn.StartSegment("mySegmentName")
// ... code you want to time here ...
segment.End()
```

## Segmentos de função [#segment-function]

Instrumentado uma função como segmento é essencialmente o mesmo que instrumentado um bloco arbitrário de código como segmento. A principal diferença é que, como uma função tem um final discreto, você pode usar [a instrução defer](https://gobyexample.com/defer) de Go.

Para utilizar uma função como segmento, adicione o seguinte código no início da função e inclua [`txn`](/docs/agents/go-agent/get-started/instrument-go-transactions) como o nome da variável definida para a transação:

```go
defer txn.StartSegment("mySegmentName").End()
```

## Segmentos de ninho [#go-nesting-segments]

Os segmentos podem ser aninhados. O segmento que está sendo finalizado deve ser o segmento iniciado mais recentemente.

Aqui está um exemplo de um segmento começando e terminando dentro de outro segmento:

```go
s1 := txn.StartSegment("outerSegment")
s2 := txn.StartSegment("innerSegment")
// s2 must end before s1
s2.End()
s1.End()
```

Um segmento de valor zero pode ser encerrado com segurança. Portanto, o código a seguir é seguro mesmo se a condicional falhar:

```go
var s newrelic.Segment
if recordSegment {
    s.StartTime = txn.StartSegmentNow()
}
// ... code you wish to time here ...
s.End()
```

## Segmentos do armazenamento de dados [#go-datastore-segments]

Você pode fazer chamadas de armazenamento de dados do aplicativo Instrumento Go. Os segmentos do armazenamento de dados aparecem na tabela <DNT>**Transactions breakdown**</DNT> do APM e na guia <DNT>**Databases**</DNT> da [página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)no New Relic.

Se você estiver usando um driver MySQL, PostgreSQL ou SQLite do banco de dados, a maneira mais fácil de adicionar segmentos de armazenamento de dados é usar nossos pacotes de integração pré-construídos. Caso contrário, você poderá criar manualmente segmentos de armazenamento de dados para cada chamada de banco de dados.

<CollapserGroup>
  <Collapser
    id="instrumentation-pkg"
    title="Usar pacote de instrumentação"
  >
    Existe um pacote de integração para cada driver do banco de dados que oferecemos suporte:

    <table>
      <thead>
        <tr>
          <th width={250}>
            Biblioteca de banco de dados suportada
          </th>

          <th>
            Pacote de integração
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql)
          </td>

          <td>
            [v3/integrations/nrmysql](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrmysql)
          </td>
        </tr>

        <tr>
          <td>
            [lib/pq](https://github.com/lib/pq)
          </td>

          <td>
            [v3/integrations/nrpq](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrpq)
          </td>
        </tr>

        <tr>
          <td>
            [mattn/go-sqlite3](https://github.com/mattn/go-sqlite3)
          </td>

          <td>
            [v3/integrations/nrsqlite3](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrsqlite3)
          </td>
        </tr>
      </tbody>
    </table>

    Para utilizar uma dessas integrações, primeiro substitua o driver pela nossa versão de integração:

    ```go
    import (
    	// import our integration package in place of "github.com/go-sql-driver/mysql"
    	_ "github.com/newrelic/go-agent/v3/integrations/nrmysql"
    )

    func main() {
    	// open "nrmysql" in place of "mysql"
    	db, err := sql.Open("nrmysql", "user@unix(/path/to/socket)/dbname")
    }
    ```

    Segundo, use os métodos `ExecContext`, `QueryContext` e `QueryRowContext` de [sql.DB](https://golang.org/pkg/database/sql/#DB), [sql.Conn](https://golang.org/pkg/database/sql/#Conn), [sql.Tx](https://golang.org/pkg/database/sql/#Tx) e [sql.Stmt](https://golang.org/pkg/database/sql/#Stmt) e forneça um contexto contendo a transação. Chamadas para `Exec`, `Query` e `QueryRow` não são instrumentadas.

    ```go
    ctx := newrelic.NewContext(context.Background(), txn)
    row := db.QueryRowContext(ctx, "SELECT count(*) from tables")
    ```

    Se você estiver usando um [banco de dados/banco de dados SQL](https://golang.org/pkg/database/sql/) não listado acima, poderá escrever sua própria instrumentação para ele usando [InstrumentConnector](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#InstrumentConnector), [InstrumentDriver](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#InstrumentDriver) e [DriverSegmentBuilder](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#DriverSegmentBuilder). Os pacotes de integração funcionam como exemplos de como fazer isso.

    <Callout variant="important">
      Pacotes de integração de armazenamento de dados para MySQL, PostgreSQL e SQLite foram adicionados no agente Go v2.8.0 e exigem Go v1.10 ou superior.
    </Callout>
  </Collapser>

  <Collapser
    id=""
    title={<>Usar <InlineCode>
      DatastoreSegment
    </InlineCode></>}
  >
    Assim como os segmentos básicos, os segmentos do armazenamento de dados começam quando o campo `StartTime` é preenchido e terminam quando o método `End` é chamado. Para instrumentar um segmento de armazenamento de dados, coloque o seguinte no início da função que deseja monitor:

    ```go
    s := newrelic.DatastoreSegment{
        Product: newrelic.DatastoreMySQL,
        Collection: "users",
        Operation: "INSERT",
        ParameterizedQuery: "INSERT INTO users (name, age) VALUES ($1, $2)",
        QueryParameters: map[string]interface{}{
            "name": "Dracula",
            "age": 439,
        },
        Host: "mysql-server-1",
        PortPathOrID: "3306",
        DatabaseName: "my_database",
    }
    s.StartTime = txn.StartSegmentNow()
    // ... make the datastore call
    s.End()
    ```

    Para mais informações sobre:

    * Atribuindo `Collection`, `Operation`, `DatabaseName` e outros valores de parâmetro: consulte a [documentação do segmento de armazenamento de dados New Relic no GoDoc](https://godoc.org/github.com/newrelic/go-agent#DatastoreSegment).
    * Valores disponíveis para `Product`: consulte a [documentação do New Relic no GitHub](https://github.com/newrelic/go-agent/blob/master/datastore.go).

    Ao instrumentar uma chamada de armazenamento de dados que abrange uma chamada de função inteira, você pode usar a instrução defer para simplificar a instrumentação:

    ```go
    s := newrelic.DatastoreSegment{
        StartTime: txn.StartSegmentNow(),
        Product: newrelic.DatastoreMySQL,
        Collection: "users",
        Operation: "INSERT",
        ParameterizedQuery: "INSERT INTO users (name, age) VALUES ($1, $2)",
        QueryParameters: map[string]interface{}{
            "name": "Dracula",
            "age": 439,
        },
        Host: "mysql-server-1",
        PortPathOrID: "3306",
        DatabaseName: "my_database",
    }
    defer s.End()
    ```
  </Collapser>
</CollapserGroup>

## Segmentos externos [#go-external-segments]

Você pode fazer chamadas do aplicativo Instrumento Go para serviços externos, como serviços web, recursos na nuvem e quaisquer outras chamadas de rede. Os segmentos externos aparecem na tabela <InlinePopover type="apm"/><DNT>**Transactions breakdown**</DNT> e na [página<DNT>**External services**</DNT> ](/docs/apm/applications-menu/monitoring/external-services-page)no New Relic.

Existem duas maneiras de instrumentar segmentos externos:

<CollapserGroup>
  <Collapser
    id="start-external-segment"
    title={<>Usar <InlineCode>
      StartExternalSegment()
    </InlineCode></>}
  >
    Recomendação: Use o auxiliar `StartExternalSegment`, pois New Relic o utiliza para trace atividades entre seu aplicativo usando [distributed tracing](/docs/agents/go-agent/features/distributed-tracing-go).

    ```go
    func external(txn *newrelic.Transaction, req *http.Request) (*http.Response, error) {
        s := newrelic.StartExternalSegment(txn, req)
        response, err := http.DefaultClient.Do(req)
        s.Response = response
        s.End()
        return response, err
    }
    ```
  </Collapser>

  <Collapser
    id="new-round-tripper"
    title={<>Usar <InlineCode>
      NewRoundTripper()
    </InlineCode></>}
  >
    `NewRoundTripper` retorna um [http.RoundTripper](https://golang.org/pkg/net/http/#RoundTripper), que permite instrumentar chamadas externas sem chamar `StartExternalSegment` , modificando o campo `Transport` do seu `http.Client`. O `RoundTripper` retornado procurará um `Transaction` no contexto da solicitação usando [FromContext](https://godoc.org/github.com/newrelic/go-agent#FromContext).

    Aqui está um exemplo de instrumentação `NewRoundTripper` :

    ```go
    client := &http.Client{}
    client.Transport = newrelic.NewRoundTripper(client.Transport)

    request, _ := http.NewRequest("GET", "http://example.com", nil)
    request = newrelic.RequestWithTransactionContext(request, txn)

    response, err := client.Do(request)
    ```
  </Collapser>
</CollapserGroup>

## Segmentos produtores de mensagens [#go-message-producer-segments]

Você pode chamar o aplicativo Instrumento Go que adiciona mensagens a sistemas de filas como RabbitMQ e Kafka. Os segmentos produtores de mensagens aparecem no APM <DNT>**Transactions breakdown**</DNT> no New Relic.

Só existe uma maneira de instrumentalizar os segmentos produtores de mensagens:

<CollapserGroup>
  <Collapser
    id="start-external-segment"
    title={<>Usar <InlineCode>
      MessageProducerSegment
    </InlineCode></>}
  >
    Assim como os segmentos básicos, os segmentos produtores de mensagens começam quando o campo `StartTime` é preenchido e terminam quando o método `End` é chamado. Para instrumentar um segmento produtor de mensagens, coloque o seguinte no início da função que deseja monitor:

    ```go
    s := newrelic.MessageProducerSegment{
        Library:              "RabbitMQ",
        DestinationType:      newrelic.MessageExchange,
        DestinationName:      "myExchange",
        DestinationTemporary: false,
    }
    s.StartTime = txn.StartSegmentNow()
    // ... add message to queue
    s.End()
    ```

    Para obter mais informações sobre como atribuir os campos `Library`, `DestinationType`, `DestinationName` ou `DestinationTemporary` , consulte a [documentação do segmento produtor de mensagens New Relic no GoDoc](https://godoc.org/github.com/newrelic/go-agent#MessageProducerSegment).

    Ao instrumentar uma chamada de produtor de mensagem que abrange uma chamada de função inteira, você pode usar a instrução defer para simplificar a instrumentação:

    ```go
    s := newrelic.MessageProducerSegment{
        StartTime:            txn.StartSegmentNow(),
        Library:              "RabbitMQ",
        DestinationType:      newrelic.MessageExchange,
        DestinationName:      "myExchange",
        DestinationTemporary: false,
    }
    defer s.End()
    // ... add message to queue
    ```

    <Callout variant="important">
      Segmentos produtores de mensagens foram adicionados no agente Go versão 2.14.0.
    </Callout>
  </Collapser>
</CollapserGroup>
