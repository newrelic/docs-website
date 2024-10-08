---
title: Go 앱에 브라우저 모니터링 추가
tags:
  - Agents
  - Go agent
  - Features
metaDescription: 'To enable browser monitoring for your Go app, use the copy and paste method, or use the Go agent''s browser API.'
freshnessValidatedDate: never
translationType: machine
---

앱에 뉴렐릭의 Go 에이전트를 설치한 경우 [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)사용하여 모니터 성능을 사용할 수도 있습니다. 브라우저 에이전트를 설치하려면 [복사 및 붙여넣기 방법을](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent#copy-paste-app) 사용하거나 Go 에이전트 API를 사용하세요.

## Go 에이전트 브라우저 API로 설치 [#go-browser-api]

브라우저 모니터링 지원을 활성화하려면 HTML 페이지에 브라우저 에이전트를 로드하고 올바른 애플리케이션 이름으로 구성하는 JavaScript 스니펫이 포함되어야 합니다. 이 스니펫은 `Transaction.BrowserTimingHeader` 메서드와 함께 사용할 수 있습니다. 브라우저 모니터링의 타이밍 헤더 지원은 [Go 에이전트 버전 2.5.0 이상](/docs/release-notes/agent-release-notes/go-release-notes) 에서 사용할 수 있습니다.

HTML의 `<head>` 섹션과 `<meta charset>` 태그 뒤에 가능한 한 빨리 `Transaction.BrowserTimingHeader().WithTags()` 에서 반환된 바이트 조각을 포함합니다.

`Transaction.BrowserTimingHeader` 에서 반환된 <DNT>JavaScript</DNT> 는 요청별로 다릅니다. 이것이 바로 각 요청마다 호출되어야 하는 이유입니다.

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
