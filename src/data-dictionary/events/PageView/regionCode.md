---
name: regionCode
type: attribute
events:
  - PageView
  - PageAction
  - BrowserInteraction
  - AjaxRequest
  - BrowserTiming
  - PageViewTiming
  - JavaScriptError
---

The specific administrative division within a country where the `PageView` event occurred. In the United States, regions correspond to state codes, such as WA or NY. Outside the United States, a country's regions correspond to numerical codes.

In the United States, regions correspond to [state codes](http://pe.usps.gov/text/pub28/28apb.htm "Link opens in a new window.") ; for example, `WA` or `NY`. Outside the United States, a country's regions correspond to [numerical codes](https://www.maxmind.com/download/geoip/misc/region_codes.csv "Link opens in a new window.") .