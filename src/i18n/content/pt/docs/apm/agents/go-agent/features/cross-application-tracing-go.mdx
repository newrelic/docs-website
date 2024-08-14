---
title: Rastreamento multiaplicativo com Go
tags:
  - Agents
  - Go agent
  - Features
metaDescription: How to implement cross application tracing with the Go agent in order to connect transactions across APM-monitored apps.
freshnessValidatedDate: never
translationType: machine
---

O agente Go suporta [rastreamento multiaplicativo (CAT)](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces). links de rastreamento multiaplicativo transação entre aplicativo monitor APM, o que é vital para o aplicativo implementar uma arquitetura orientada a serviços ou microsserviços.

<Callout variant="important">
  O rastreamento multiaplicativo foi descontinuado em favor do [Distributed tracing](/docs/agents/go-agent/features/distributed-tracing-go) e será removido em uma versão futura do agente.
</Callout>

## Habilite o rastreamento multiaplicativo com Go [#enable]

Você pode ativar ou desativar o rastreamento multiaplicativo no agente Go usando a sinalização de configuração [`CrossApplicationTracer.Enabled`](/docs/agents/go-agent/instrumentation/go-agent-configuration#cross-tracer-enabled) .

## Diretrizes de transação e solicitação HTTP com Go [#guidelines]

Mesmo com o rastreamento multiaplicativo habilitado, você precisará garantir que seu aplicativo siga algumas convenções simples ao responder a solicitações HTTP(s), fazer suas próprias solicitações HTTP(s) ou [criar sua própria transação](/docs/agents/go-agent/get-started/instrument-go-transactions).

<CollapserGroup>
  <Collapser
    id="create-transactions"
    title="Creating transactions via http.ServeMux"
  >
    Se estiver usando o [`http.ServeMux`](https://golang.org/pkg/net/http/#ServeMux) do Go e quiser suporte CAT, você precisará usar os wrappers `WrapHandle` e `WrapHandleFunc` do agente. Esses wrappers iniciam e encerram automaticamente a transação com o gravador de solicitação e resposta, que [adicionará automaticamente os cabeçalhos CAT corretos](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces#security). Seu código deve ser semelhante ao seguinte:

    ```go
    http.HandleFunc("/users", usersHandler)
    http.HandleFunc(newrelic.WrapHandleFunc(app, "/users", usersHandler))
    ```

    Você pode ler mais sobre esses invólucros em [Instrumento de transação Go](/docs/agents/go-agent/get-started/instrument-go-transactions#http-handler-txns).
  </Collapser>

  <Collapser
    id="create-manually"
    title="Criando transação da web manualmente"
  >
    Ao criar sua própria transação com `app.StartTransaction`, certifique-se de chamar também `Transaction.SetWebRequest` e `Transaction.SetWebResponse`. Por exemplo, uma transação iniciada com o seguinte código terá o CAT habilitado:

    ```go
    txn := app.StartTransaction("transactionName")
    // req is a *http.Request, this marks the transaction as a web transaction
    txn.SetWebRequestHTTP(req)

    // writer is a http.ResponseWriter, use the returned writer in place of the original
    writer = txn.SetWebResponse(writer)
    writer.WriteHeader(500)

    defer txn.End()
    ```

    Entretanto, uma transação foi iniciada sem que as chamadas para `Transaction.SetWebRequest` e `Transaction.SetWebResponse` <DNT>**will not**</DNT> tivessem CAT ativado:

    ```go
    // Cross application tracing not enabled
    txn := app.StartTransaction("transactionName")
    defer txn.End()
    ```

    Além disso, se você estiver configurando códigos de resposta HTTP, use o método `txn.WriteHeader` do agente Go em vez do método [`http.ResponseWriter.WriteHeader`](https://golang.org/pkg/net/http/#ResponseWriter) da biblioteca padrão.

    ```go
    // old code
    // writer.WriteHeader(http.StatusInternalServerError)

    // replace with this
    txn := app.StartTransaction("transactionName")
    txn.SetWebRequest(req)
    writer = txn.SetWebResponse(writer)
    writer.WriteHeader(http.StatusInternalServerError)
    ```
  </Collapser>

  <Collapser
    id="make-http-requests"
    title="Fazendo solicitações HTTP"
  >
    Para que suas solicitações HTTP(s) de saída sejam elegíveis para CAT, você precisará [criar um segmento externo](/docs/agents/go-agent/get-started/instrument-go-segments#go-external-segments).

    A maneira mais fácil de criar um segmento externo para sua solicitação HTTP(s) de saída é usar o método `newrelic.NewRoundTripper` . Por exemplo, este código fará uma solicitação para `http://api.example.com/` que inclui os cabeçalhos CAT de saída.

    ```go
    func useNewRoundTripper(txn *newrelic.Transaction) (*http.Response, error) {
        client := &http.Client{}
        client.Transport = newrelic.NewRoundTripper(client.Transport)
        req, _ := http.NewRequest("GET", "http://api.example.com/", nil)
        req = newrelic.RequestWithTransactionContext(req, txn)
        return client.Do(req)
    }
    ```

    Se você tiver uma solicitação mais complexa que usa o `http.Request` da biblioteca padrão Go, precisará usar o método `newrelic.StartExternalSegment` para garantir que sua solicitação de saída seja qualificada para CAT.

    ```go
    func external(txn *newrelic.Transaction, req *http.Request) (*http.Response, error) {
        s := newrelic.StartExternalSegment(txn, req)
        response, err := http.DefaultClient.Do(req)
        s.Response = response
        s.End()
        return response, err
    }
    ```

    Embora também seja possível criar um `ExternalSegment` por meio de um literal de estrutura, esse segmento <DNT>**will not**</DNT> é elegível para CAT. Por causa disso, a New Relic recomenda usar [`newrelic.NewRoundTripper` ou `newrelic.ExternalSegment`](/docs/agents/go-agent/get-started/instrument-go-segments#go-external-segments).

    ```go
    func noGoodForCat(txn *newrelic.Transaction, url string) (*http.Response, error) {
        // CAT headers not inserted
        defer newrelic.ExternalSegment{
            StartTime: txn.StartSegmentNow(),
            URL:       url,
        }.End()

        return http.Get(url)
    }
    ```
  </Collapser>
</CollapserGroup>

## Obtenha distributed tracing [#distributed-tracing]

A New Relic também oferece [distributed tracing](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing). distributed tracing é uma melhoria no rastreamento multiaplicativo e é recomendado para sistemas distribuídos grandes.
