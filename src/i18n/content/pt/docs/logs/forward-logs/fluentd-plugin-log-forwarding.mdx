---
title: Plug-in Fluentd para encaminhamento de logs
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
metaDescription: 'Install and configure the New Relic logging plugin for Fluentd, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Se seus dados log já estão sendo monitorados pelo [Fluentd](https://www.fluentd.org), você pode usar nossa integração Fluentd para encaminhar e enriquecer seus dados log no New Relic.

Encaminhar seu registro do Fluentd para New Relic proporcionará <InlinePopover type="logs" />recursos aprimorados para coletar, processar, explorar, consultar e alertar sobre seus dados log .

## Processo básico [#enable-process]

Para ativar recursos de gerenciamento de logs:

1. Assegure-se de ter:

   * Uma New Relic<InlinePopover type="licenseKey" />
   * Fluentd 1.0 ou superior

2. [Instale](#fluentd-plugin) o plug-in Fluentd.

3. [Configure](#configure-plugin) o plug-in Fluentd.

4. Se aplicável, [configure o endpoint da UE](#eu-configuration)

5. [Teste](#test-plugin) o plug-in Fluentd.

6. Gere algum tráfego e aguarde alguns minutos e, em seguida, [verifique os dados da sua conta](#find-data) .

## Instale o plug-in Fluentd [#fluentd-plugin]

Para instalar o plug-in Fluentd:

<CollapserGroup>
  <Collapser id="gem-install-fluentd" title="Instale usando fluent-gem install">
    Para instalar usando `fluent-gem install`, digite o seguinte comando em seu terminal ou interface de linha de comando:

    ```shell
    fluent-gem install fluent-plugin-newrelic
    ```
  </Collapser>

  <Collapser id="td-agent-install-fluentd" title="Instalar usando td-agente-gem">
    Para instalar usando o plug-in [td-agente](https://docs.fluentd.org/quickstart/td-agent-v2-vs-v3) , digite o seguinte comando em seu terminal ou linha de comando:

    ```shell
    td-agent-gem install fluent-plugin-newrelic
    ```
  </Collapser>
</CollapserGroup>

## Configurar o plug-in Fluentd [#configure-plugin]

<Callout variant="tip">
  Se você estiver configurando o Fluentd pela primeira vez, pode ser útil revisar nossa coleção de [arquivos de configuração](https://github.com/newrelic/newrelic-fluentd-output/tree/master/examples) pré-construídos que abordam casos de uso comuns.
</Callout>

Para configurar seu plug-in Fluentd:

1. No seu arquivo `fluent.conf` , ou `td-agent.conf` se estiver utilizando o td-agente, adicione o seguinte bloco de dados, substituindo o texto espaço reservado pelo seu <InlinePopover type="licenseKey" />:

   ```apacheconf
   #Tail one or more log files
   <source>
     @type tail
     <parse>
       @type none
     </parse>
     path /path/to/file
     tag example.service
   </source>

   #Add hostname and service_name to all events with "example.service" tag
   <filter example.service>
     @type record_transformer
     <record>
       service_name ${tag}
       hostname "#{Socket.gethostname}"
     </record>
   </filter>

   #Forward all events to New Relic

   <match>
     @type newrelic
     license_key YOUR_LICENSE_KEY
   </match>
   ```

2. Reinicie o serviço Fluentd para garantir que suas alterações sejam aplicadas.

<InstallFeedback />

## Configure o plug-in Fluentd para contas da UE [#eu-configuration]

Por padrão, o plug-in Fluentd encaminha o log para nosso endpoint nos EUA: `https://log-api.newrelic.com/log/v1`. Se sua organização New Relic estiver em nosso [data center da UE](/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers), você deverá definir manualmente a propriedade `base_uri` para o endpoint da UE. Por exemplo:

```apacheconf
#Tail one or more log files
<source>
  @type tail
  <parse>
    @type none
  </parse>
  path /path/to/file
  tag example.service
</source>

#Add hostname and service_name to all events with "example.service" tag
<filter example.service>
  @type record_transformer
  <record>
    service_name ${tag}
    hostname "#{Socket.gethostname}"
  </record>
</filter>

#Forward all events to New Relic EU Endpoint
<match>
  @type newrelic
  license_key YOUR_LICENSE_KEY
  base_uri https://log-api.eu.newrelic.com/log/v1
</match>
```

## Teste o plug-in Fluentd [#test-plugin]

Para testar se o seu plug-in Fluentd está recebendo entrada de um arquivo de log:

1. Execute o seguinte comando para anexar uma mensagem de teste do log ao seu arquivo de log:

   ```shell
   echo "test message" >> /PATH/TO/YOUR/LOG/FILE
   ```

2. Pesquise `test message` em nossa [interface de registros](https://one.newrelic.com/launcher/logger.log-launcher) .

## Ver dados log [#find-data]

Se tudo estiver configurado corretamente e seus dados estiverem sendo coletados, você deverá ver o log em ambos os locais:

* Nossa [interface de registros](https://one.newrelic.com/launcher/logger.log-launcher)
* Nossas ferramentas para executar [a consulta NRQL](/docs/chart-builder/use-chart-builder/choose-data/use-advanced-nrql-mode-specify-data). Por exemplo, você pode executar uma consulta como esta:

```sql
SELECT * FROM Log
```

Se nenhum dado aparecer após você ativar nossos recursos de gerenciamento de logs, siga nossos [procedimentos padrão de resolução de problemas de log](/docs/logs/log-management/troubleshooting/no-log-data-appears-ui/).

## Ajustar o buffer do Fluentd de log [#tuneup-buffer]

Por padrão, o plug-in envia log para New Relic a cada cinco segundos. Se quiser alterar esse tempo, adicione um bloco `<buffer>` à configuração seguindo este exemplo:

```apacheconf
[...]

# Forward all events to New Relic EU Endpoint
<match>
  @type newrelic
  license_key YOUR_LICENSE_KEY

  <buffer time>
    timekey 60s
  </buffer>
</match>
```

Para obter mais informações, consulte a [documentação do Fluentd sobre configuração de buffer](https://docs.fluentd.org/configuration/buffer-section).

## Configurar a transformação UTF-16LE para UTF-8

Neste exemplo de log de erros do Microsoft SQL Server, use o Fluentd para enviar o log codificado em [UTF-16LE](https://docs.fluentd.org/input/tail#encoding-from_encoding) para o New Relic com a [codificação UTF-8 necessária](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#general) para ingestão. Você também pode adotar este exemplo para outras codificações.

<Callout variant="tip">
  Também adicionamos um `logtype` apropriado para esses registros.
</Callout>

```apacheconf
#Tail one or more log files
<source>
  @type tail
  <parse>
    @type none
  </parse>
  path "D:/sqlserver/error.log"
  tag example.service
  encoding UTF-8
  from_encoding UTF-16LE
</source>

#Add hostname and service_name to all events with "example.service" tag
<filter example.service>
  @type record_transformer
  <record>
    service_name ${tag}
    hostname "#{Socket.gethostname}"
    logtype MSSQL
  </record>
</filter>

#Forward all events to New Relic
<match>
  @type newrelic
  license_key YOUR_LICENSE_KEY
</match>
```

## Configurar transformação Shift-JIS para UTF-8

Arquivos de log japoneses codificados em Shift-JIS (SP932) são convertidos para a [codificação UTF-8 necessária](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#general) e são necessários para importar e enviar dados log para o New Relic.

```apacheconf

<source>
#Tail one or more log files
  @type tail
  path C:\opt\fluent\cp932text.log  # Full path of the log file you want to collect
  tag example.service
  from_encoding CP932
  encoding UTF-8
  <parse>
    @type none
  </parse>
</source>

#Forward all events to New Relic
<match>
  @type newrelic
  license_key YOUR_LICENSE_KEY
</match>

```

## Qual é o próximo? [#what-next]

Explore os dados de registro em sua plataforma com nossa [interface de registros](/docs/logs/log-management/ui-data/use-logs-ui/).

* Obtenha visibilidade mais profunda dos dados de desempenho do seu aplicativo e da sua plataforma encaminhando seu log com nossos recursos [logs contextualizados](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) .
* Configure [o alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/).
* [consulte seus dados](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) e [crie dashboard](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Desativar encaminhamento de logs [#disable]

Para desativar os recursos de encaminhamento de logs, siga os procedimentos padrão na [documentação do Fluentd](https://www.fluentd.org). Você não precisa fazer mais nada no New Relic.