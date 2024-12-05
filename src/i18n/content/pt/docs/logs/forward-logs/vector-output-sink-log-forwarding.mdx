---
title: Coletor de saída vetorial para encaminhamento de logs
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
metaDescription: 'Install and configure New Relic logging for your Vector output sink, so you can use our enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Se seus dados log já estiverem sendo monitorados pelo [Vector](https://vector.dev/), você poderá usar nosso [coletor de saída do Vector](https://vector.dev/docs/reference/configuration/sinks/new_relic/) para encaminhar e enriquecer seus dados log no New Relic.

Encaminhar seu registro do Vector para New Relic proporcionará <InlinePopover type="logs"/>recursos aprimorados para coletar, processar, explorar, consultar e alertar sobre seus dados log .

## Configurar o coletor de log vetorial para New Relic [#configure-sink]

Para encaminhar seu log do Vector para o New Relic:

1. Assegure-se de ter:

   * Uma New Relic

     <InlinePopover type="licenseKey"/>

   * Versão vetorial 0.7.0 ou superior

2. Siga os procedimentos para [configurar o coletor de log vetorial para New Relic](https://vector.dev/docs/reference/configuration/sinks/new_relic/).

3. Adicione um trecho ao seu arquivo `vector.toml` (localizado em `/etc/vector` por padrão), substituindo `YOUR_LICENSE_KEY` pela sua New Relic <InlinePopover type="licenseKey"/>:

   ```toml
   # Ingest data by tailing one or more files

   [sources.mylog]
   type          = "file"
   include       = ["/path/to/file"] # Specify file or files to be tailed
   ignore_older  = 86400             # Ignore events older than 1 day
   file_key      = "file"            # Add filename to log events
   host_key      = "host"            # Add hostname to log events

   # Configure sink to forward events to New Relic

   [sinks.new_relic_logs]
   # REQUIRED
   type            = "new_relic_logs"   # must be: "new_relic_logs"
   inputs          = ["mylog"]          # example - value must be one or more source IDs
   license_key     = "YOUR_LICENSE_KEY"
   region          = "us"               # Enum, must be one of: "us" "eu" depending on your New Relic account region
   encoding.codec  = "json"

   # OPTIONAL
   healthcheck = true                   # default
   ```

4. Reinicie o serviço Vector para garantir que suas alterações sejam aplicadas.

## Testar o coletor de log do vetor [#test-sink]

Para testar se o coletor de log do Vector está encaminhando o evento para o New Relic:

1. Execute o seguinte comando para anexar uma mensagem de teste do log ao seu arquivo de log:

   ```shell
   echo "test message" >> /PATH/TO/YOUR/LOG/FILE
   ```

2. Pesquise em nossa [interface de log](https://one.newrelic.com/launcher/logger.log-launcher) sua mensagem de teste.

## Ver dados log [#find-data]

Se tudo estiver configurado corretamente e seus dados estiverem sendo coletados, você deverá ver os dados de log em ambos os locais:

* Nossa [interface de registros](https://one.newrelic.com/launcher/logger.log-launcher)
* Nossas ferramentas para executar [a consulta NRQL](/docs/chart-builder/use-chart-builder/choose-data/use-advanced-nrql-mode-specify-data). Por exemplo, você pode executar uma consulta como esta:

```sql
SELECT * FROM Log
```

Se nenhum dado aparecer após você ativar nossos recursos de gerenciamento de logs, siga nossos [procedimentos padrão de resolução de problemas de log](/docs/logs/log-management/troubleshooting/no-log-data-appears-ui/).

<InstallFeedback/>

## Qual é o próximo? [#what-next]

Explore os dados de registro em sua plataforma com nossa [interface de registros](/docs/logs/log-management/ui-data/use-logs-ui/).

* Obtenha visibilidade mais profunda dos dados de desempenho do seu aplicativo e da sua plataforma encaminhando seu log com nossos recursos [logs contextualizados](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) .
* Configure [o alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/).
* [consulte seus dados](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) e [crie dashboard](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Desativar encaminhamento de logs [#disable]

Para desativar os recursos de encaminhamento de logs, siga os procedimentos padrão na [documentação do coletor de log vetorial](https://vector.dev/docs/reference/configuration/sinks/new_relic/). Você não precisa fazer mais nada no New Relic.
