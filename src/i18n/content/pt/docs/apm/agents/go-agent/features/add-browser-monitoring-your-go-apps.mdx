---
title: Adicione monitoramento de browser aos seus aplicativos Go
tags:
  - Agents
  - Go agent
  - Features
metaDescription: 'To enable browser monitoring for your Go app, use the copy and paste method, or use the Go agent''s browser API.'
freshnessValidatedDate: never
translationType: machine
---

Se você instalou o agente Go da New Relic em seu aplicativo, também poderá usar [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)para monitor o desempenho do browser. Para instalar o agente do browser, use o [método copiar e colar](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent#copy-paste-app) ou use a API do agente Go.

## Instalar com a API do agente Go do browser [#go-browser-api]

Para habilitar o suporte ao monitoramento de browser, suas páginas HTML devem incluir um trecho JavaScript que irá carregar o agente browser e configurá-lo com o nome correto da aplicação. Este trecho está disponível com o método `Transaction.BrowserTimingHeader` . O suporte para monitoramento de cabeçalhos de tempo do browser está disponível com [o agente Go versões 2.5.0 ou superior](/docs/release-notes/agent-release-notes/go-release-notes).

Inclua a fatia de bytes retornada por `Transaction.BrowserTimingHeader().WithTags()` o mais cedo possível na seção `<head>` do seu HTML e depois de qualquer tag `<meta charset>` .

O <DNT>JavaScript</DNT> retornado de `Transaction.BrowserTimingHeader` é específico da solicitação. É por isso que deve ser chamado em cada solicitação.

```go
func indexHandler(w http.ResponseWriter, req *http.Request) {
    io.WriteString(w, "<html><head>")

    // The New Relic browser javascript should be placed as high in the
    // HTML as possible. We suggest including it immediately after the
    // opening <head> tag and any <meta charset> tags.
    txn := newrelic.FromContext(req.Context())
    hdr := txn.BrowserTimingHeader()
    // BrowserTimingHeader() will always return a header whose methods can
    // be safely called.
    if js := hdr.WithTags(); js != nil {
        w.Write(js)
    }
    
    io.WriteString(w, "</head><body>browser header page</body></html>")
}
```
