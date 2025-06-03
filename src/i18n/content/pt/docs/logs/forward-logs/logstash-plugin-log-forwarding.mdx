---
title: Plug-in Logstash para encaminhamento de logs
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
metaDescription: 'Install and configure New Relic logging for Logstash, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

Se seus dados log já estiverem sendo monitorados pelo [Logstash](https://www.elastic.co/products/logstash), você poderá usar nosso plug-in Logstash para encaminhar e enriquecer seus dados log no New Relic.

Encaminhar seu registro do Logstash para New Relic proporcionará <InlinePopover type="logs"/>recursos aprimorados para coletar, processar, explorar, consultar e alertar sobre seus dados log .

## Habilitar Logstash para gerenciamento de logs [#enable-process]

Para encaminhar seu log do Logstash para o New Relic:

1. Assegure-se de ter:

   * Uma New Relic

     <InlinePopover type="licenseKey"/>

   * [Logstash versão 6.6 ou superior](https://www.elastic.co/guide/en/logstash/current/installing-logstash.html) com Java 8 ou Java 11. Use a [distribuição oficial da Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html) ou uma distribuição de código aberto como [OpenJDK](http://openjdk.java.net/).

2. [Instale e configure](#logstash-plugin) o plug-in Logstash.

3. Opcional: Configure [o plug-in adicional atributo](#instrument-plugin).

4. [Teste](#test-plugin) o plug-in Logstash.

5. Gere algum tráfego e aguarde alguns minutos e, em seguida, [verifique os dados da sua conta](#find-data) .

## Instalar e configurar o plug-in Logstash [#logstash-plugin]

Para encaminhar seu log para New Relic com nosso [plug-in Logstash](https://github.com/newrelic/logstash-output-plugin):

1. Digite o seguinte comando em seu terminal ou interface de linha de comando:

   ```bash
   logstash-plugin install logstash-output-newrelic
   ```

2. No arquivo `logstash.conf` , adicione o seguinte bloco de dados. Certifique-se de substituir o texto do espaço reservado pela sua New Relic <InlinePopover type="licenseKey"/>.

   ```ini
   output {
     newrelic {
       license_key => "LICENSE_KEY"
     }
   }
   ```

3. Reinicie sua instância do Logstash.

<InstallFeedback/>

## Configuração opcional [#instrument-plugin]

Depois de instalar e configurar o plug-in Logstash, você pode usar o atributo a seguir para configurar como o plug-in envia dados para o New Relic. Para obter mais informações sobre como adicionar ou configurar o atributo, consulte nossos [exemplos de configuração do Logstash no GitHub](https://github.com/newrelic/logstash-examples/blob/master/README.md#example-configurations-for-logstash).

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Propriedade
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `concurrent_requests`
      </td>

      <td>
        O número de threads dos quais fazer solicitações. Padrão: `1`
      </td>
    </tr>

    <tr>
      <td>
        `base_uri`
      </td>

      <td>
        O endpoint de ingestão do New Relic.

        * Endpoint dos EUA: `https://log-api.newrelic.com/log/v1`
        * Endpoint da UE: `https://log-api.eu.newrelic.com/log/v1`
      </td>
    </tr>

    <tr>
      <td>
        `max_retries`
      </td>

      <td>
        Número máximo de tentativas para tentar enviar uma mensagem novamente. Se definido como `0`, nenhuma nova tentativa será feita. Padrão: `3`
      </td>
    </tr>
  </tbody>
</table>

## Teste o plug-in Logstash [#test-plugin]

Para testar se o seu plug-in Logstash está recebendo entrada de um arquivo de log:

1. Adicione o seguinte ao seu arquivo `logstash.conf` :

   ```ini
   input {
     file {
       path => "/PATH/TO/YOUR/LOG/FILE"
     }
   }
   ```

2. Reinicie sua instância do Logstash.

3. Execute o seguinte comando para anexar uma mensagem de teste do log ao seu arquivo de log:

   ```bash
   echo "test message" >> /PATH/TO/YOUR/LOG/FILE
   ```

4. Pesquise `test message` em nossa [interface de registros](https://one.newrelic.com/launcher/logger.log-launcher) .

## Ver dados log [#find-data]

Se tudo estiver configurado corretamente e seus dados estiverem sendo coletados, você deverá ver os dados de log em ambos os locais:

* Nossa [interface de registros](https://one.newrelic.com/launcher/logger.log-launcher)
* Nossas ferramentas para executar [a consulta NRQL](/docs/chart-builder/use-chart-builder/choose-data/use-advanced-nrql-mode-specify-data). Por exemplo, você pode executar uma consulta como esta:

```sql
SELECT * FROM Log
```

Se nenhum dado aparecer após você ativar nossos recursos de gerenciamento de logs, siga nossos [procedimentos padrão de resolução de problemas de log](/docs/logs/log-management/troubleshooting/no-log-data-appears-ui/).

## Qual é o próximo? [#what-next]

Explore os dados de registro em sua plataforma com nossa [interface de registros](/docs/logs/log-management/ui-data/use-logs-ui/).

* Obtenha visibilidade mais profunda dos dados de desempenho do seu aplicativo e da sua plataforma encaminhando seu log com nossos recursos [logs contextualizados](/docs/logs/enable-log-management-new-relic/configure-logs-context/configure-logs-context-apm-agents/) .
* Configure [o alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-alert-conditions/).
* [consulte seus dados](/docs/query-your-data/explore-query-data/get-started/introduction-querying-new-relic-data/) e [crie dashboard](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Desativar encaminhamento de logs [#disable]

Para desativar os recursos de encaminhamento de logs, siga os procedimentos padrão na [documentação do Logstash](https://www.elastic.co/products/logstash). Você não precisa fazer mais nada no New Relic.
