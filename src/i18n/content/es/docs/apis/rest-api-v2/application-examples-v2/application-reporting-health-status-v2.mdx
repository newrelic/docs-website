---
title: Informes de aplicaciones y estado de salud (v2)
tags:
  - APIs
  - REST API v2
  - Application examples (v2)
metaDescription: How to determine if an application is reporting and what it's health status is by using New Relic's REST API v2.
freshnessValidatedDate: never
translationType: machine
---

Para conocer el estado [de salud](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#health-status) y los informes de una aplicación, utilice los [datos resumidos](/docs/apm/apis/api-v2-examples/summary-data-examples) disponibles en la API REST de New Relic.

## Ejemplo de salida de estado [#example_status]

Usando los métodos descritos para obtener [información resumida](/docs/apm/apis/api-v2-examples/summary-data-examples) para la aplicación, el resultado será similar a este:

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

## Estado del informe [#reporting_status]

El estado del informe lo proporciona la línea `"reporting": true,` devuelta como parte del estado de la solicitud. Este estado cambiará a `false`si la aplicación no ha informado en 10 minutos. Además, cuando el estado es `false`, `"last_reported_at":<time stamp>` ya no contendrá una timestamp.

## Estado de salud [#health_status]

El [estado de salud](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#health-status) lo proporciona la línea `"health_status": "green",` devuelta como parte del estado de la aplicación. El color devuelto en la API coincide con los indicadores de estado de salud de la aplicación que se muestran en la UI.

<DNT>**Exception:**</DNT> La API REST utiliza `orange` en lugar de `yellow`. Si la aplicación no está asociada a una política de alertas, se mostrará como `unknown`.
