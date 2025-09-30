---
title: Aplicativo relatórios e status de saúde (v2)
tags:
  - APIs
  - REST API v2
  - Application examples (v2)
metaDescription: How to determine if an application is reporting and what it's health status is by using New Relic's REST API v2.
freshnessValidatedDate: never
translationType: machine
---

Para encontrar o status de [integridade](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#health-status) e de relatórios de um aplicativo, use os [dados resumidos](/docs/apm/apis/api-v2-examples/summary-data-examples) disponíveis na API REST do New Relic.

## Exemplo de saída de status [#example_status]

Usando os métodos descritos para obter [informações resumidas](/docs/apm/apis/api-v2-examples/summary-data-examples) do aplicativo, a saída será semelhante a esta:

```json
{
  "applications": [
    {
      "id": 1129082,
      "name": "My Web Page",
      "language": "java",
      "health_status": "green",
      "reporting": true,
      "last_reported_at": "2014-07-29T23:45:07+00:00",
      "application_summary": {
        "response_time": 304,
        "throughput": 4570,
        "error_rate": 0.0016,
        "apdex_target": 523,
        "apdex_score": 0.97
      },
      "end_user_summary": {
        "response_time": 3.73,
        "throughput": 0.333,
        "apdex_target": 0,
        "apdex_score": 1
      },
      "settings": {
        "app_apdex_threshold": 0.5,
        "end_user_apdex_threshold": 7,
        "enable_real_user_monitoring": true,
        "use_server_side_config": true
      },
      "links": {
        "application_instances": [
          2928655,
          3941052,
          3940275,
          3944066,
          3943114,
          3943147
        ],
        "alert_policy": 41534,
        "servers": [],
        "application_hosts": [
          2927654,
          3940051,
          3943274,
          3943065,
          3943513,
          3943146
        ]
      }
    }
  ]
}
```

## Status do relatório [#reporting_status]

O status do relatório é fornecido pela linha `"reporting": true,` retornada como parte do status do aplicativo. Este status mudará para `false`se o aplicativo não reportar em 10 minutos. Além disso, quando o status for `false`, `"last_reported_at":<time stamp>` não conterá mais um timestamp.

## Estado de saúde [#health_status]

O [status de saúde](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#health-status) é fornecido pela linha `"health_status": "green",` retornada como parte do status da aplicação. A cor retornada na API corresponde aos indicadores de status de saúde do app exibidos na interface.

<DNT>**Exception:**</DNT> A API REST usa `orange` em vez de `yellow`. Se o aplicativo não estiver associado a uma política de alertas, ele será exibido como `unknown`.
