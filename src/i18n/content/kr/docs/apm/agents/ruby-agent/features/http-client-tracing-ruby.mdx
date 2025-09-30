---
title: Ruby의 HTTP 클라이언트 추적
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'Information about HTTP tracing in the New Relic Ruby agent, including supported clients and versions.'
freshnessValidatedDate: never
translationType: machine
---

Ruby 에이전트는 애플리케이션이나 스크립트에서 생성된 나가는 HTTP 요청을 추적하여 다음을 수행할 수 있습니다.

* HTTP 요청에 걸리는 시간과 적중하는 호스트에 대한 메트릭을 기록하십시오.
* 각 HTTP 요청에 대한 노드로 트랜잭션 추적에 주석을 답니다.
* New Relic으로 계측된 애플리케이션 간의 요청에 대한 [분산 추적](/docs/distributed-tracing/concepts/introduction-distributed-tracing/) 을 제공합니다.

## 지원되는 HTTP 클라이언트 라이브러리 [#supported_libraries]

현재 Ruby 에이전트에서 지원하는 HTTP 클라이언트 라이브러리는 다음과 같습니다.

<table>
  <thead>
    <tr>
      <th width={150}>
        이름
      </th>

      <th width={200}>
        지원되는 최소 버전
      </th>

      <th>
        Notes
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [비동기::HTTP](https://github.com/socketry/async-http)
      </td>

      <td>
        0.59.0
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        [연석](https://github.com/taf2/curb)
      </td>

      <td>
        0.9.3
      </td>

      <td>
        Curl::Multi 요청은 부분 계측을 받습니다. [연석 주](#curb) 를 참고하십시오.
      </td>
    </tr>

    <tr>
      <td>
        [에톤](https://github.com/typhoeus/ethon)
      </td>

      <td>
        0.12.0
      </td>

      <td>
        [Ethon 노트를](#ethon) 참조하세요.
      </td>
    </tr>

    <tr>
      <td>
        [엑스콘](https://github.com/geemus/excon)
      </td>

      <td>
        0.56.0
      </td>

      <td>
        [Excon 참고 사항](#excon) 을 참조하십시오.
      </td>
    </tr>

    <tr>
      <td>
        [HTTP클라이언트](https://github.com/nahi/httpclient)
      </td>

      <td>
        2.8.3
      </td>

      <td>
        비동기식 요청의 계측은 지원되지 않습니다.
      </td>
    </tr>

    <tr>
      <td>
        [http.rb](https://github.com/httprb/http)
      </td>

      <td>
        2.2.2
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        [HTTPX](https://honeyryderchuck.gitlab.io/httpx/)
      </td>

      <td>
        1.0.0
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        네트::HTTP
      </td>

      <td>
        N/A(Ruby 표준 라이브러리의 일부)
      </td>

      <td>
        또한 [httparty](http://johnnunemaker.com/httparty/) 와 같이 Net::HTTP를 기반으로 구축된 라이브러리도 포함합니다.
      </td>
    </tr>

    <tr>
      <td>
        [장티푸스](https://github.com/typhoeus/typhoeus)
      </td>

      <td>
        1.3.0
      </td>
    </tr>
  </tbody>
</table>

## 에톤 노트 [#ethon]

Ethon을 유지 관리하고 기능을 Ethon에 의존하는 동일한 팀이 Typhoeus도 유지 관리합니다. 각 HTTP 요청에 대한 중복 보고를 방지하기 위해 에이전트는 Typhoeus를 감지할 때 Ethon 계측을 비활성화합니다.

## 엑스콘 노트 [#excon]

루비 에이전트는 Excon 버전 <DNT>**0.56.0 or higher.**</DNT> 을 지원합니다. Excon 로그는 `Excon.defaults` 의 `:middlewares` 키에 Excon 미들웨어를 추가하는 기능을 사용하므로, 로그가 `Excon.defaults` 를 수정하는 경우 `:middlewares` 의 값을 유지해야 합니다. 키.

## 연석 메모 [#curb]

루비 에이전트는 Curb 버전 <DNT>**0.9.3 or higher.**</DNT> 지원합니다. JRuby에서는 Curb 리소스가 지원되지 **않습니다** .

`Curl::Multi` API를 통해 이루어진 요청에는 현재 부분 분산 추적만 지원됩니다. Ruby 에이전트는 전체 배치를 나타내는 단일 트랜잭션 추적 노드를 기록하지만 배치의 개별 요청에 대한 세부 정보는 볼 수 없습니다.
