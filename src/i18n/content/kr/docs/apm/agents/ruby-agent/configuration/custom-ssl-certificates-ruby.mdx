---
title: 사용자 정의 SSL 인증서(Ruby)
tags:
  - Agents
  - Ruby agent
  - Configuration
metaDescription: 'Ruby agent: Specify custom CA bundles to validate SSL communication via a proxy server.'
freshnessValidatedDate: never
translationType: machine
---

New Relic에는 APM 및 New Relic REST API에 대한 모든 트래픽에 [HTTPS가 필요합니다](/docs/apis/rest-api-v2/troubleshooting/301-response-rest-api-calls) . Ruby 에이전트는 기본적으로 SSL을 통해 New Relic 수집기 서버에 연결됩니다. 일반적으로 이 기본값이면 충분합니다.

## SSL 인증서 설치

CA 인증서가 설치되지 않은 컨테이너나 서버에 Ruby 애플리케이션과 에이전트를 배포하는 경우 이를 직접 설치하여 New Relic 서버에 대한 HTTPS 연결을 설정해야 합니다. 에이전트 버전 7.0에는 이러한 변경 사항이 도입되었습니다. 호스트에 따라 다양한 방법으로 이러한 CA 인증서를 설치할 수 있습니다. 다음 외부 링크는 호스트 준비 상태를 테스트하고 CA 인증서를 설치하는 데 유용한 지침입니다.

* [SSL 인증서 오류 문제 해결](https://bundler.io/v2.0/guides/rubygems_tls_ssl_troubleshooting_guide.html#troubleshooting-certificate-errors)
* [자동화된 SSL 확인](https://bundler.io/v2.0/guides/rubygems_tls_ssl_troubleshooting_guide.html#automated-ssl-check)
* [CA 인증서 설치](https://superuser.com/questions/437330/how-do-you-add-a-certificate-authority-ca-to-ubuntu/719047#719047)
* [Docker에서 인증서를 처리하는 방법](https://serverfault.com/questions/975775/how-to-handle-certificates-in-dockerfile)

## 사용자 지정 CA 번들 사용 [#using-custom]

특정 구성에서는 사용자 지정 CA 번들을 사용해야 할 수도 있습니다. 예를 들어 HTTP 프록시를 사용하여 에이전트의 SSL 트래픽을 가로채서 해독한 다음 New Relic에 대한 별도의 SSL 연결을 설정할 수 있습니다.

프록시가 제공한 [SSL 인증서](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#ssl-certificate) 의 유효성을 검사할 때 사용자 지정 CA 번들을 사용하도록 에이전트를 구성하려면 <DNT>**newrelic.yml**</DNT> 파일에서 또는 `NEW_RELIC_CA_BUNDLE_PATH` 환경 변수를 통해 `ca_bundle_path` 구성 설정을 지정합니다.

```yml
common: &default_settings
  ca_bundle_path: certificates/mycert.pem
  # ... other settings ...
```

프록시 또는 서버의 ID를 확인할 때 에이전트가 사용할 각 인증서가 포함된 <DNT>**.pem**</DNT> 파일의 경로를 지정합니다. 여러 인증서를 단일 <DNT>**.pem**</DNT> 파일로 연결할 수 있습니다.

* <DNT>
    **Relative path:**
  </DNT>

  상대 경로를 지정하면 에이전트는 런타임 시 앱 서버 프로세스의 작업 디렉터리를 기준으로 상대 경로를 할당합니다.

* <DNT>
    **Absolute path:**
  </DNT>

  작업 디렉터리가 애플리케이션의 루트가 아닌 `/` 인 경우 절대 경로를 지정해야 합니다.
