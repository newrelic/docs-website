---
title: Aplicación de traza asincrónica
tags:
  - Agents
  - Go agent
  - Features
metaDescription: How to trace async segments with the Go agent.
freshnessValidatedDate: never
translationType: machine
---

La capacidad de trazar segmentos asincrónicos con la API `NewGoroutine` está disponible a partir de la [versión 2.6.0 de Go Agent](/docs/release-notes/agent-release-notes/go-release-notes). Si no tiene la versión 2.6.0 o superior, actualice su agente Go a la última versión.

## NewGoroutine [#enable]

El método `Transaction.NewGoroutine() Transaction` permite que la transacción cree segmentos en múltiples goroutine.

`NewGoroutine` devuelve una nueva referencia al `Transaction`. Esto debe llamarse cada vez que pase `Transaction` a otra goroutine que cree segmentos. Cada goroutine de creación de segmentos debe tener su propia referencia `Transaction` . No importa si llamas a esto antes o después de que haya comenzado la otra goroutine.

Todos los métodos `Transaction` se pueden utilizar en cualquier referencia `Transaction` . El `Transaction` finalizará cuando se llame `End()` en cualquier goroutine.

Ejemplo de pasar una nueva referencia `Transaction` directamente a otra goroutine:

```go
go func(txn *newrelic.Transaction) {
    defer txn.StartSegment("async").End()
    time.Sleep(100 * time.Millisecond)
}(txn.NewGoroutine())
```

Ejemplo de pasar una nueva referencia `Transaction` en un canal a otra goroutine:

```go
ch := make(chan *newrelic.Transaction)
go func() {
    txn := <-ch
    defer txn.StartSegment("async").End()
    time.Sleep(100 * time.Millisecond)
}()
ch <- txn.NewGoroutine()
```
