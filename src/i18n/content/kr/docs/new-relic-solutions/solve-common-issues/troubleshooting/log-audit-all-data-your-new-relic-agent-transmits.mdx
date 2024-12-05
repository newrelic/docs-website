---
title: New Relic 에이전트가 전송하는 모든 데이터 기록(감사)
tags:
  - Using New Relic
  - Cross-product functions
  - Troubleshooting
metaDescription: 'To record all data transmitted (typically for auditing or debugging), you can use New Relic audit logs for short periods.'
freshnessValidatedDate: never
translationType: machine
---

모든 New Relic 에이전트에는 [데이터 보안](/docs/accounts-partnerships/accounts/security/data-security) 을 보장하는 강력한 보호 장치가 포함되어 있습니다. 예를 들어 New Relic은 민감한 정보를 전송하기 전에 자동으로 암호화합니다. New Relic의 보안 조치에 대한 자세한 내용은 당사의[보안 및 개인 정보 보호 문서](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) 를 참조하거나 [New Relic 보안 웹사이트](https://newrelic.com/security) 를 방문하십시오.

앱이 뉴렐릭으로 전송하는 <DNT>**all**</DNT> 데이터에 대한 정보를 기록하고 확인해야 하는 경우 짧은 기간 동안 감사 로깅을 활성화할 수 있습니다. 이는 디버깅이나 감사 등에서 정확히 전송되는 내용에 대한 자세한 정보가 필요할 때 유용합니다.

<Callout variant="caution">
  사용을 마치는 즉시 감사 로깅을 비활성화해야 합니다. 이 기능을 사용하면 추가 오버헤드가 발생하여 오랜 시간 동안 켜져 있는 경우 감사 로그 파일에 과부하가 걸릴 수 있습니다.
</Callout>

## APM 에이전트 감사 로깅 [#audit-logging]

APM 에이전트의 구성 파일에 대한 감사 로깅 옵션에 대한 자세한 내용은 에이전트별 설명서를 참조하십시오.

<table>
  <thead>
    <tr>
      <th style={{ width: "100px" }}>
        <DNT>
          **Agent**
        </DNT>
      </th>

      <th>
        <DNT>
          **Configuration file**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        가다
      </td>

      <td>
        Go 에이전트에서는 로깅이 선택사항입니다. `newrelic.NewLogger(w)` 사용 중이고 더 자세한 출력을 원하면 `newrelic.NewLogger(w)` `newrelic.NewDebugLogger(w)` 로 변경하세요. 자세한 내용은 [GitHub의 뉴웰릭 Go 로깅 문서를](https://github.com/newrelic/go-agent/blob/master/v3/newrelic/log.go) 참조하세요.
      </td>
    </tr>

    <tr>
      <td>
        자바
      </td>

      <td>
        [`audit_mode`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-audit_mode) 을 `true` 로 설정합니다.
      </td>
    </tr>

    <tr>
      <td>
        .그물
      </td>

      <td>
        [`auditLog`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#log-auditLog) 을 `true` 로 설정합니다.
      </td>
    </tr>

    <tr>
      <td>
        노드.js
      </td>

      <td>
        New Relic의 Node.js 에이전트는 이미 구성 로그에서 페이로드를 사용할 수 있기 때문에 별도의 감사 로그를 사용하지 않습니다. 증가하는 세부 정보 수준을 보려면 구성 파일의 [로깅 `level` 변수](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#logging_config) 를 사용하십시오.
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        PHP [`newrelic.daemon.auditlog` ( `newrelic.ini` 의 경우)](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-auditlog) 또는 [`auditlog` ( `newrelic.cfg` 의 경우)를 사용](/docs/agents/php-agent/configuration/proxy-daemon-newreliccfg-settings#cfgvar-auditlog) 합니다.
      </td>
    </tr>

    <tr>
      <td>
        파이썬
      </td>

      <td>
        Python [`audit_log_file` 값](/docs/agents/python-agent/installation-configuration/python-agent-configuration#audit-log-file) 을 사용합니다.
      </td>
    </tr>

    <tr>
      <td>
        루비
      </td>

      <td>
        [`audit_log` 값을](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#audit-log) 사용하세요. 자세한 내용은 [루비 에이전트 감사 로그 를](/docs/agents/ruby-agent/troubleshooting/ruby-agent-audit-log) 참조하세요.
      </td>
    </tr>
  </tbody>
</table>

## 인프라 에이전트 로깅 [#infrastructure-logging]

인프라 에이전트 문제 해결을 위해 [인프라 모니터링 로그를 생성](/docs/infrastructure/new-relic-infrastructure/troubleshooting/generate-logs-troubleshooting-infrastructure) 할 수 있습니다.

## New Relic 계정 관련 로깅 [#account-logging]

New Relic 계정의 변경 사항을 감사하려면 [`NrAuditEvent`](/docs/insights/use-insights-ui/manage-account-data/query-account-audit-logs-nrauditevent) 으로 NRQL 쿼리를 실행하세요. 쿼리를 맞춤설정하려면 사용 가능한 [`NrAuditEvent` 속성](/docs/insights/insights-data-sources/default-data/nrauditevent-default-attributes-examples) 을 사용하세요.
