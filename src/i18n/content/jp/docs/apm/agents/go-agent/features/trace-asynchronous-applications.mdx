---
title: 非同期アプリケーションのトレース
tags:
  - Agents
  - Go agent
  - Features
metaDescription: How to trace async segments with the Go agent.
freshnessValidatedDate: never
translationType: machine
---

`NewGoroutine` API を使用して非同期セグメントをトレースする機能は、 [Go エージェント バージョン 2.6.0 以降](/docs/release-notes/agent-release-notes/go-release-notes)で利用できます。バージョン 2.6.0 以降を使用していない場合は、Go エージェントを最新バージョンに更新してください。

## NewGoroutine（ニューゴルーチン [#enable]

`Transaction.NewGoroutine() Transaction`メソッドを使用すると、トランザクションは複数の<DNT>goroutines</DNT>にセグメントを作成できます。

`NewGoroutine` `Transaction`への新しい参照を返します。 これは、セグメントを作成する別の<DNT>goroutine</DNT>に`Transaction`を渡すたびに呼び出す必要があります。 各セグメント作成ゴルーチンには独自の`Transaction`参照が必要です。 他の<DNT>goroutine</DNT>が開始する前か後かにこれを呼び出すかどうかは関係ありません。

すべての`Transaction`メソッドは、任意の`Transaction`参照で使用できます。 `Transaction`は、任意の<DNT>goroutine</DNT>で`End()`が呼び出されると終了します。

新しい`Transaction`参照を別の<DNT>goroutine</DNT>に直接渡す例:

```go
go func(txn *newrelic.Transaction) {
    defer txn.StartSegment("async").End()
    time.Sleep(100 * time.Millisecond)
}(txn.NewGoroutine())
```

チャネル上の新しい`Transaction`参照を別の<DNT>goroutine</DNT>に渡す例:

```go
ch := make(chan *newrelic.Transaction)
go func() {
    txn := <-ch
    defer txn.StartSegment("async").End()
    time.Sleep(100 * time.Millisecond)
}()
ch <- txn.NewGoroutine()
```
