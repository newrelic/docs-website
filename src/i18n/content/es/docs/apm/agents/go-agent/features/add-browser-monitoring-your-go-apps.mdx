---
title: Agregue monitoreo de browser a sus aplicaciones Go
tags:
  - Agents
  - Go agent
  - Features
metaDescription: 'To enable browser monitoring for your Go app, use the copy and paste method, or use the Go agent''s browser API.'
freshnessValidatedDate: never
translationType: machine
---

Si instaló el agente Go de New Relic para su aplicación, también puede usar [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)para monitor el rendimiento del browser. Para instalar el agente del browser, use el [método de copiar y pegar](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent#copy-paste-app), o use la API del agente Go.

## Instalar con la API browser del agente Go [#go-browser-api]

Para habilitar la compatibilidad con el monitoreo del browser, sus páginas HTML deben incluir un fragmento de JavaScript que cargará el agente del browser y lo configurará con el nombre de aplicación correcto. Este fragmento está disponible con el método `Transaction.BrowserTimingHeader` . La compatibilidad con el monitoreo de los encabezados de tiempo del browser está disponible con [las versiones 2.5.0 o superiores del agente Go](/docs/release-notes/agent-release-notes/go-release-notes).

Incluya el segmento de bytes devuelto por `Transaction.BrowserTimingHeader().WithTags()` lo antes posible en la sección `<head>` de su HTML y después de cualquier etiqueta `<meta charset>` .

El JavaScript devuelto por `Transaction.BrowserTimingHeader` es específico de la solicitud. Por eso se debe llamar en cada solicitud.

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
