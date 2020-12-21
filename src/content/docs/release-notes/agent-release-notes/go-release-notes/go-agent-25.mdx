---
subject: Go agent
releaseDate: '2019-02-14'
version: '2.5'
downloadLink: 'https://github.com/newrelic/go-agent/tree/v2.5.0'
---

## 2.5.0

* Added support for [New Relic Browser](https://docs.newrelic.com/docs/browser) using the new `BrowserTimingHeader` method on the [`Transaction`](https://godoc.org/github.com/newrelic/go-agent#Transaction) which returns a [BrowserTimingHeader](https://godoc.org/github.com/newrelic/go-agent#BrowserTimingHeader). The New Relic Browser JavaScript code measures page load timing, also known as real user monitoring. The Pro version of this feature measures AJAX requests, single-page applications, JavaScript errors, and much more! Example use:

```
func browser(w http.ResponseWriter, r *http.Request) {
    hdr, err := w.(newrelic.Transaction).BrowserTimingHeader()
    if nil != err {
        log.Printf("unable to create browser timing header: %v", err)
    }
    // BrowserTimingHeader() will always return a header whose methods can
    // be safely called.
    if js := hdr.WithTags(); js != nil {
        w.Write(js)
    }
    io.WriteString(w, "browser header page")
}
```

* The Go agent now collects an attribute named `request.uri` on Transaction Traces, Transaction Events, Error Traces, and Error Events. `request.uri` will never contain user, password, query parameters, or fragment. To prevent the request's URL from being collected in any data, modify your `Config` like this:

```
cfg.Attributes.Exclude = append(cfg.Attributes.Exclude, newrelic.AttributeRequestURI)
```
