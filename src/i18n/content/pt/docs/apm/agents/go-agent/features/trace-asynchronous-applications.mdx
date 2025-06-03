---
title: Aplicativo trace assíncrono
tags:
  - Agents
  - Go agent
  - Features
metaDescription: How to trace async segments with the Go agent.
freshnessValidatedDate: never
translationType: machine
---

A capacidade de trace segmentos assíncronos com a API `NewGoroutine` está disponível a partir da [versão 2.6.0 do agente Go](/docs/release-notes/agent-release-notes/go-release-notes). Se você não tiver a versão 2.6.0 ou superior, atualize seu agente Go para a versão mais recente.

## NewGoroutine [#enable]

O método `Transaction.NewGoroutine() Transaction` permite que a transação crie segmentos em múltiplos <DNT>goroutines</DNT>.

`NewGoroutine` retorna uma nova referência para `Transaction`. Isso deve ser chamado sempre que você passar o `Transaction` para outro <DNT>goroutine</DNT> que cria segmentos. Cada goroutine de criação de segmento deve ter sua própria referência `Transaction`. Não importa se você chama isso antes ou depois do outro <DNT>goroutine</DNT> ter começado.

Todos os métodos `Transaction` podem ser usados em qualquer referência `Transaction`. O `Transaction` terminará quando `End()` for chamado em qualquer <DNT>goroutine</DNT>.

Exemplo passando uma nova referência `Transaction` diretamente para outro <DNT>goroutine</DNT>:

```go
go func(txn *newrelic.Transaction) {
    defer txn.StartSegment("async").End()
    time.Sleep(100 * time.Millisecond)
}(txn.NewGoroutine())
```

Exemplo passando uma nova referência `Transaction` em um canal para outro <DNT>goroutine</DNT>:

```go
ch := make(chan *newrelic.Transaction)
go func() {
    txn := <-ch
    defer txn.StartSegment("async").End()
    time.Sleep(100 * time.Millisecond)
}()
ch <- txn.NewGoroutine()
```
