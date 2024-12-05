---
title: Instrumento de transação Go
tags:
  - Agents
  - Go agent
  - Instrumentation
metaDescription: Learn how to set up New Relic monitoring of  web and non-web transactions in your Golang application or microservice.
freshnessValidatedDate: never
translationType: machine
---

Monitor seu aplicativo ou microsserviços [New Relic for Go](/docs/agents/go-agent/get-started/new-relic-go) criando [transações](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) associadas a atividades específicas do servidor de aplicativos, como respostas HTTP ou tarefas em segundo plano. Você poderá então visualizar o desempenho do seu aplicativo no New Relic, incluindo a [página APM <DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page).

## Identificar web e transações fora da web [#go-monitoring]

Ao contrário de muitas outras linguagens, o aplicativo Go é executado a partir de um arquivo binário nativo compilado. Isso significa que a configuração do New Relic para seu aplicativo Golang requer que você adicione manualmente os métodos do New Relic ao seu código-fonte.

No APM, transação é identificada como [transação da web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) ou [transação fora da web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions).

* Quando você instrumenta ou encapsula uma transação que possui um gravador de solicitação e resposta HTTP, a New Relic a trata como uma transação da web.
* Quando você instrumenta ou envolve uma transação que não possui dados HTTP, a New Relic trata isso como uma transação fora da web.

Segmentos são as funções e chamadas que constituem uma transação. Você também pode usar o New Relic for Go para [adicionar detalhes em nível de segmento à sua transação](/docs/agents/go-agent/get-started/instrument-go-segments).

## Monitor uma transação [#go-txn]

<Callout variant="important">
  Não use colchetes `[suffix]` no final do nome da sua transação. O New Relic remove automaticamente os colchetes do nome. Em vez disso, use parênteses `(suffix)` ou outros símbolos, se necessário.
</Callout>

Para monitor uma transação: Coloque o seguinte código imediatamente após o início da função que deseja monitor. Por exemplo:

```go
txn := app.StartTransaction("transaction_name")
defer txn.End()
```

Neste exemplo de código:

* `app` refere-se à variável atribuída durante o processo de configuração do New Relic. Para obter mais informações, consulte os [procedimentos de instalação do agente Go](/docs/agents/go-agent/installation/install-new-relic-go).
* A instrução [`defer`](https://gobyexample.com/defer) adia o término do segmento até que a função seja fechada.

Para monitor uma transação da web, chame a API `Transaction.SetWebRequest` e opcionalmente a `Transaction.SetWebResponse`:

```go
txn := app.StartTransaction("transaction_name")
defer txn.End()

// req is a *http.Request, this marks the transaction as a web transaction
txn.SetWebRequestHTTP(req)

// writer is a http.ResponseWriter, use the returned writer in place of the original
writer = txn.SetWebResponse(writer)
writer.WriteHeader(500)
```

<CollapserGroup>
  <Collapser
    id="transaction-example"
    title="Exemplo de transação"
  >
    Aqui está um exemplo simples de antes e depois para criar uma transação chamada `checkout_transaction`:

    Antes:

    ```go
    func checkout() {
        // function code here
    }
    ```

    Depois:

    ```go
    func checkout() {
        txn := app.StartTransaction("checkout_transaction")
        defer txn.End()
        // function code here
    }
    ```
  </Collapser>
</CollapserGroup>

## Monitor uma transação com vários goroutines [#goroutines]

Para monitor uma transação em várias goroutines, use `Transaction.NewGoroutine()`. O método `NewGoroutine` retorna uma nova referência à transação, que é exigida por cada goroutine criadora de segmento. Não importa se você chama `NewGoroutine` antes ou depois do início da outra goroutine.

Todos os métodos `Transaction` podem ser usados em qualquer referência `Transaction` . O `Transaction`terminará quando `End()` for chamado em qualquer goroutine.

<CollapserGroup>
  <Collapser
    id="multie-example"
    title="Exemplo de múltiplas goroutines"
  >
    O exemplo abaixo passa uma nova referência `Transaction` diretamente para outra goroutine:

    ```go
    go func(txn *newrelic.Transaction) {
        defer txn.StartSegment("async").End()
        time.Sleep(100 * time.Millisecond)
    }(txn.NewGoroutine())
    ```

    O exemplo abaixo passa uma nova referência `Transaction` em um canal para outra goroutine:

    ```go
    ch := make(chan *newrelic.Transaction)
    go func() {
        txn := <-ch
        defer txn.StartSegment("async").End()
        time.Sleep(100 * time.Millisecond)
    }()
    ch <- txn.NewGoroutine()
    ```
  </Collapser>
</CollapserGroup>

## Monitor uma transação agrupando um manipulador HTTP [#http-handler-txns]

Se você estiver usando o pacote de biblioteca HTTP padrão, poderá criar transações agrupando solicitações HTTP, como alternativa ao [código de uma função instrumentado](/docs/agents/go-agent/get-started/new-relic-go-monitor-transactions#go-txn).

Aqui está um exemplo de antes e depois de um manipulador HTTP sendo empacotado:

Antes:

```go
http.HandleFunc("/users", usersHandler)
```

Depois:

Isso inicia e encerra automaticamente uma transação com o gravador de solicitação e resposta.

```go
http.HandleFunc(newrelic.WrapHandleFunc(app, "/users", usersHandler))
```

Para acessar a transação no seu gerenciador, use a API `newrelic.FromContext` . Observe que isso funcionará apenas para as versões 1.7 e mais recentes do Go. Por exemplo:

```go
func myHandler(w http.ResponseWriter, r *http.Request) {
    txn := newrelic.FromContext(r.Context())
    txn.NoticeError(errors.New("my error message"))
}
```

## Monitor erros [#go-error-methods]

O New Relic for Go captura erros de três maneiras diferentes:

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Se você quiser...
      </th>

      <th>
        Usa isto
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Rastreie erros e relate qualquer combinação de mensagem, classe e atributo
      </td>

      <td>
        [`Transaction.NoticeError()`](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#noticeerror)
      </td>
    </tr>

    <tr>
      <td>
        Rastreie erros esperados e reporte qualquer combinação de mensagem, classe e atributo sem disparar alertas ou afetar métricas de erro
      </td>

      <td>
        [`Transaction.NoticeExpectedError()`](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#noticeerror)
      </td>
    </tr>

    <tr>
      <td>
        Denunciar pânico
      </td>

      <td>
        Transação terminou com `defer` registra automaticamente pânicos. [Consulte a documentação do GitHub do New Relic for Go para obter mais informações](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#panics). A partir da versão 3.0.0, esse recurso deve ser ativado especificamente definindo a configuração `Config.ErrorCollector.RecordPanics` como `true`.
      </td>
    </tr>

    <tr>
      <td>
        Relatar códigos de resposta de erro
      </td>

      <td>
        Transação registra automaticamente erros acima de 400 e abaixo de 100. [Consulte a documentação do GitHub do New Relic for Go para obter mais informações](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#error-response-codes).
      </td>
    </tr>
  </tbody>
</table>

## Visualize o log do seu APM e dados de infraestrutura [#logs-context]

Você também pode reunir os dados do seu log e da aplicação para tornar a resolução de problemas mais fácil e rápida. Com [os logs contextualizados](/docs/logs/logs-context/configure-logs-context-go/), você pode ver a mensagem do log relacionada aos seus erros e rastrear diretamente na interface do seu aplicativo.

1. Na página <DNT>**Errors**</DNT>, clique em um trace para ir para a [página<DNT>**Error details**</DNT> ](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems).
2. Na página de detalhes do erro, clique em <DNT>**See logs**</DNT>.
3. Para visualizar detalhes relacionados a uma mensagem do log individual, clique diretamente na mensagem.

Você também pode ver o logs contextualizados dos [dados da sua infraestrutura](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/), como cluster do Kubernetes. Não há necessidade de mudar para outra interface.

## Métodos de transação adicionais [#go-transactions-methods]

O objeto `Transaction` possui vários métodos opcionais que podem ser usados para controlar o comportamento da transação, como `NoticeError`, `AddAttribute` e `Ignore`. Para obter uma lista de métodos de transação, consulte os [métodos de transação New Relic for Go no Godoc](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#Transaction).
