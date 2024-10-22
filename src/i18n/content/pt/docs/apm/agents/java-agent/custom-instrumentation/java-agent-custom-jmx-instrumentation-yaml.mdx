---
title: 'Agente Java: instrumentação JMX customizada por YAML'
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: How to monitor specific JMX metrics in your app without modifying code by using a custom instrumentation YAML file for your New Relic Java agent.
freshnessValidatedDate: never
translationType: machine
---

A plataforma Java SE inclui Java Management Extensions (JMX). JMX é uma forma de monitor e gerenciar aplicativos, dispositivos e serviços. Geralmente, os servidores de aplicativos possuem métricas JMX integradas que você pode monitor.

O agente Java da New Relic oferece a capacidade de monitor métricas específicas de MBeans e atributo em sua aplicação sem modificar o código usando um [arquivo YAML de instrumentação personalizada](/docs/java/custom-jmx-yaml-examples). O agente Java irá ler o arquivo YAML na inicialização e registrar a métrica específica.

<Callout variant="tip">
  Você também pode monitor JMX com a [infraestrutura de integração JMX](/docs/integrations/host-integrations/host-integrations-list/jmx-monitoring-integration).
</Callout>

## Requisitos e acesso [#requirements]

O agente Java vê apenas métricas de MBeans em sua JVM atual. Se os MBeans estiverem sendo acessados remotamente ou existirem em uma JVM separada, eles não estarão disponíveis para o agente Java da New Relic.

Os dados JMX personalizados não serão exibidos em nossos <InlinePopover type="apm"/>gráficos, mas você pode [consultar os dados](#display_metrics) e criar gráficos personalizados com eles.

Esta integração reporta apenas valores numéricos simples. Caso queira reportar outros tipos de valores, você pode querer utilizar a [infraestrutura de integração JMX](/docs/integrations/host-integrations/host-integrations-list/jmx-monitoring-integration).

## Regras de estrutura de arquivos [#file_structure]

O arquivo de instrumentação personalizada deverá estar no [formato YAML](https://en.wikipedia.org/wiki/YAML). Use um validador YAML para garantir que a sintaxe esteja precisa antes de usar o arquivo com o agente Java da New Relic e siga estas regras:

* Os arquivos YAML diferenciam maiúsculas de minúsculas.
* Todos os recuos estão em incrementos de dois caracteres. Os dados nas mesmas seções do arquivo devem usar o mesmo nível de recuo. Recue quaisquer subseções com dois espaços extras.
* Você deve reiniciar o processo do host JVM para que as alterações entrem em vigor.

## Propriedades disponíveis [#properties]

Aqui está um resumo de cada propriedade no arquivo JMX. Para obter mais informações, consulte [Exemplos JMX YAML personalizados](/docs/java/custom-jmx-yaml-examples).

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Value**
        </DNT>
      </th>

      <th>
        <DNT>
          **Definition**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `name`
      </td>

      <td>
        O nome descritivo principal que identifica seu arquivo de instrumentação personalizada YAML. Inclua um espaço antes da propriedade `name` .
      </td>
    </tr>

    <tr>
      <td>
        `version`
      </td>

      <td>
        A versão do arquivo de extensão. Se duas extensões tiverem o mesmo nome, somente a extensão com a versão mais recente será usada. Certifique-se de que a propriedade version esteja em uma linha separada de `name`. Inclua um espaço antes da propriedade version.
      </td>
    </tr>

    <tr>
      <td>
        `enabled`
      </td>

      <td>
        Se `true`, o agente Java lerá a extensão. Se `false`, o agente Java ignorará a extensão. Inclua um espaço antes da propriedade `enabled` .
      </td>
    </tr>

    <tr>
      <td>
        `jmx`
      </td>

      <td>
        Nenhum valor segue a propriedade `jmx`. Use zero espaços antes da propriedade.
      </td>
    </tr>

    <tr>
      <td>
        `object_name`
      </td>

      <td>
        Corresponde ao objeto específico do MBean. Se você estiver usando o JDK versão 1.6 ou superior, `object_name` poderá incluir asteriscos (\*). Inclua dois espaços antes do travessão e um espaço entre o travessão e `object_name`.
      </td>
    </tr>

    <tr>
      <td>
        `root_metric_name`
      </td>

      <td>
        Disponível com o agente Java da New Relic versão 3.7.0 ou superior. Uma propriedade opcional que permite nomear a métrica usada no New Relic. Para usar valores de propriedade `object_name` , especifique a chave da propriedade entre colchetes (`{}`). O New Relic prefixará automaticamente o `root_metric_name` especificado com JMX e anexará o nome do atributo ao final da métrica. Inclua quatro espaços antes de `root_metric_name`.
      </td>
    </tr>

    <tr>
      <td>
        `metrics`
      </td>

      <td>
        Não há valor na linha métrica. Incluir quatro espaços antes da métrica.
      </td>
    </tr>

    <tr>
      <td>
        `attributes`
      </td>

      <td>
        Uma lista separada por vírgulas do atributo do MBean. O nome do atributo deve corresponder exatamente. Inclua 6 espaços antes do travessão e um espaço entre o travessão e a palavra-chave `attributes` .
      </td>
    </tr>

    <tr>
      <td id="attribute-type">
        `type`
      </td>

      <td>
        * Se `simple`, cada valor será relatado ao coletor New Relic.
        * Se `monotonically_increasing` (padrão), a diferença positiva será informada ao coletor New Relic.
      </td>
    </tr>
  </tbody>
</table>

## Localização do arquivo YAML [#file_location]

O agente Java lê o arquivo YAML na inicialização do processo. Existem duas maneiras de especificar o local do arquivo YAML:

<CollapserGroup>
  <Collapser
    id="create-extensions-dir"
    title="Crie um diretório de extensões"
  >
    1. No diretório onde `newrelic.jar` e `newrelic.yml` estão localizados, crie um diretório chamado `extensions`.
    2. Coloque o arquivo YAML neste diretório com uma extensão `.yml` .
    3. Em `newrelic.yml`, verifique se a propriedade `extensions.dir` não está definida.
  </Collapser>

  <Collapser
    id="specify-existing-direction"
    title="Especifique um diretório de extensões existente"
  >
    1. No arquivo de configuração `newrelic.yml` na seção comum, use a propriedade `extensions.dir` para especificar o diretório onde o arquivo YAML está localizado.
    2. Certifique-se de que o arquivo esteja no diretório especificado e que tenha uma extensão `.yml` .
  </Collapser>
</CollapserGroup>

<Callout variant="caution">
  A métrica personalizada não funcionará se houver mais de um arquivo YAML na mesma pasta que o agente. Mova backups e cópias para outra pasta ao personalizar.
</Callout>

## Verifique se o arquivo foi lido [#verify_read]

Para verificar se o arquivo YAML foi lido pelo agente:

1. Abra o arquivo de configuração `newrelic.yml` .

2. Altere a propriedade nível de log para `log_level: finer`.

3. Inicie o aplicativo.

4. Verifique se o arquivo `logs/newrelic_agent.log` inclui uma instrução indicando que o arquivo foi lido:

   ```
   Reading custom extension file /path/to/file/file.yml
   ```

5. Se você não conseguir encontrar esta instrução, verifique a localização do arquivo YAML. Certifique-se também de que o processo tenha acesso de leitura ao arquivo.

6. Verifique se o arquivo inclui esta instrução:

   ```
   Adding extension with name NAME_FROM_YAML and version VERSION_FROM_YAML
   ```

7. Se você não conseguir encontrar esta declaração, verifique se o documento foi analisado corretamente. Verifique também se existe outro arquivo de extensão com o mesmo nome e número de versão superior.

## Consulta e gráfico de dados JMX [#display_metrics]

Você pode consultar seus dados JMX e usá-los para criar gráficos personalizados. Para saber mais sobre como consultar este tipo de dados consulte [a consulta APM métrica](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/query-apm-metric-timeslice-data-nrql).

Veja como pesquisar <DNT>**JMX**</DNT> ou o caminho direto para o contador conforme definido em seu arquivo YAML.

<CollapserGroup>
  <Collapser
    id=""
    title="Procure o caminho direto para seus contadores"
  >
    Exemplo de arquivo YAML

    ```yml
    name: TomcatCustom
      version: 1.0
      enabled: true
      jmx:
        - object_name: java.nio:type=BufferPool,name=*
          metrics:
            - attributes: Count
              type: monotonically_increasing
    ```

    Você pode encontrar contadores do objeto no arquivo YAML de exemplo pesquisando no [métrica Explorer](/docs/insights/use-insights-ui/explore-data/metric-explorer-search-chart-metrics-sent-new-relic-agents) pelo seguinte:

    ```
    JMX/java.nio/BufferPool/direct/Count
    JMX/java.nio/BufferPool/mapped/Count
    ```
  </Collapser>
</CollapserGroup>

Para obter mais informações sobre como as métricas são nomeadas e armazenadas, consulte [Exemplos JMX YAML personalizados](/docs/agents/java-agent/custom-instrumentation/custom-jmx-yaml-examples#metric_names).
