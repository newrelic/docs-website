---
title: Módulos de extensão e instrumentação adicionais
tags:
  - Agents
  - Java agent
  - Instrumentation
metaDescription: 'New Relic Java agent: How to install experimental instrumentation with incubator modules, and instrument older libraries with archived modules.'
freshnessValidatedDate: never
translationType: machine
---

O agente Java é uma biblioteca completa que coleta automaticamente dados de muitos servidores, estruturas, bibliotecas e datastores populares (para obter uma lista completa, consulte [Compatibilidade e requisitos](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent)). Ele também possui um conjunto significativo de recursos. No entanto, sempre há solicitações adicionais de funcionalidade e instrumentação da nova biblioteca. O agente Java fornece <DNT>**extension modules**</DNT> para essa finalidade.

Os módulos de extensão se enquadram em três categorias gerais:

* [Módulos de instrumentação de incubadoras](#incubator-modules-list): Novo suporte experimental para coleta de dados de biblioteca específica
* [Módulos de instrumentação arquivados](#archived-modules-list): Instrumentação para biblioteca que a empresa ou autor original não mantém ou atualiza mais.
* [módulos de extensão de recurso](#feature-extension-modules): Código que adiciona novo comportamento ao agente, independente de qualquer biblioteca específica.

Se a sua biblioteca não estiver coberta pela instrumentação automática ou por um módulo de instrumentação, você ainda poderá coletar dados com [instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation).

<Callout variant="tip">
  Se você tiver comentários, dúvidas ou problemas com esta instrumentação, crie uma postagem no [Fórum de suporte da New Relic](https://discuss.newrelic.com/tags/javaagent) e tag sua postagem com `java_incubator`.
</Callout>

## Instale módulos de extensão [#install]

Recomendamos [atualizar para a versão mais recente do agente Java](/docs/agents/java-agent/installation/upgrade-java-agent) antes de instalar um módulo de extensão. Para instalar um módulo de extensão:

1. Faça download do arquivo `.jar` apropriado nas listas de módulos abaixo.
2. Localize o diretório que contém os arquivos `newrelic.jar` e `newrelic.yml` . Nesse diretório, crie um subdiretório chamado `extensions` (se ainda não existir um).
3. Copie o módulo de extensão `.jar` que você baixou no diretório `extensions` .
4. Para módulos de extensão de recurso, atualize seu `newrelic.yml` com configuração específica do recurso.
5. Reinicie seu servidor.
6. Envie algum tráfego para o servidor ou host que irá exercitar o recurso ou instrumentação.

<Callout variant="tip">
  Os módulos de extensão do agente Java estão sujeitos às [licenças do agente Java da New Relic](/docs/licenses/license-information/agent-licenses/java-agent-licenses), que estão incluídas no arquivo `LICENSE` de cada módulo jar.
</Callout>

## Módulos de extensão de recurso

Módulos de extensão são bibliotecas adicionais que adicionam funcionalidades comumente solicitadas.

Para usar um módulo de extensão, baixe-o e coloque-o no [diretório de extensões](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#extensions-directory).

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="class-histogram"
    title="Histograma de classe"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://repo1.maven.org/maven2/com/newrelic/agent/extension/class-histogram-extension/)
          </td>
        </tr>
      </tbody>
    </table>

    A extensão Class histograma executa [o jmap](https://docs.oracle.com/javase/7/docs/technotes/tools/share/jmap.html) periodicamente e gera dados `ClassHistogramRowEvent` e `ClassHistogramStatsEvent` que [você pode consultar e traçar](/docs/using-new-relic/data/understand-data/query-new-relic-data). Consultar esses dados pode ser útil quando a memória de resolução de problemas vaza, pois você pode ver os valores ao longo do tempo.

    Você configura a extensão Class histograma da mesma maneira que configura o agente Java: usando variáveis de ambiente, propriedades do sistema ou `newrelic.yml`. Aqui estão as propriedades disponíveis, com padrões:

    ```yml
    extensions:
      class_histogram:
        enabled: true                    # true is the default if the extension is present
        classes_per_histogram: 50        # 50 is the default, and memory leak issues are usually in the highest 50 classes by bytes
        jmap_path: /your/jdk/bin         # The folder where the jmap binary lives. The default is $JAVA_HOME/bin.
        delay_between_calls_seconds: 60  # Length of the delay between executions to avoid frequent pauses
    ```
  </Collapser>
</CollapserGroup>

## Módulos de instrumentação de incubadora [#incubator-modules-list]

Os módulos incubadores são instrumentação experimental, que poderemos incorporar à instrumentação automática do agente no futuro.

Estes são os módulos de incubadora que estão disponíveis atualmente:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="apache-camel-212"
    title="Camelo Apache 2.12"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://download.newrelic.com/newrelic/java-agent/extensions/camel-2.12.jar)
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo de instrumentação intercepta o seguinte:

    ```java
    org.apache.camel.component.http.CamelServlet.resolve
    ```

    Para nomear a transação de forma que a transação da web tenha um nome mais refinado que o nome do servlet Camel, ele usa isto:

    ```java
    org.apache.camel.component.http.HttpConsumer.getPath()
    ```

    Para visualizar o bytecode, use este comando de terminal:

    ```bash
    javap -verbose -cp camel-2.12-FILENAME.jar org.apache.camel.component.http.CamelServlet
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="c3p0-db-connection"
    title="Conjuntos de conexões de banco de dados C3P0"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://download.newrelic.com/newrelic/java-agent/extensions/c3p0-0.9.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.12.0 ou superior
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo de instrumentação faz amostras de pools de conexões C3P0 e relata contagens de ocupados e ociosos em métricas que começam com isto:

    ```
    Custom/Database Connection/C3P0/METRIC_NAME
    ```

    Você pode visualizar a métrica com o [explorador métrico](/docs/insights/use-insights-ui/explore-data/metric-explorer-search-chart-metrics-sent-new-relic-agents).
  </Collapser>

  <Collapser
    className="freq-link"
    id="code-hale-metrics-2"
    title="Métrica 2 de Coda Hale"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://download.newrelic.com/newrelic/java-agent/extensions/metrics-2.jar)
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo de instrumentação integra-se ao `MetricRegistry` e inicia a amostragem da métrica registrada a cada minuto. As métricas relatadas são prefixadas com isto:

    ```
    Custom/CodaHale/Metrics2/METRIC_NAME
    ```

    Você pode visualizar a métrica com o [explorador métrico](/docs/insights/use-insights-ui/explore-data/metric-explorer-search-chart-metrics-sent-new-relic-agents).
  </Collapser>

  <Collapser
    className="freq-link"
    id="coda-hale-metrics-3"
    title="Métrica 3 de Coda Hale"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://download.newrelic.com/newrelic/java-agent/extensions/metrics-3.jar)
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo de instrumentação integra-se ao `MetricRegistry` e inicia a amostragem da métrica registrada a cada minuto. As métricas relatadas são prefixadas com isto:

    ```
    Custom/CodaHale/Metrics3/METRIC_NAME
    ```

    Você pode visualizar a métrica com o [explorador métrico](/docs/insights/use-insights-ui/explore-data/metric-explorer-search-chart-metrics-sent-new-relic-agents).
  </Collapser>

  <Collapser
    className="freq-link"
    id="hikaricp-230"
    title="HikariCP 2.3.0 - 2.3.8"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://download.newrelic.com/newrelic/java-agent/extensions/hikaricp-2.3.5.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.12.0 ou superior
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo de instrumentação faz amostras de pools de conexões de banco de dados HikariCP e relata contagens de ocupados e ociosos em métricas que começam com isto:

    ```
    Custom/Database Connection/HikariCP/METRIC_NAME
    ```

    Você pode visualizar a métrica com o [explorador métrico](/docs/insights/use-insights-ui/explore-data/metric-explorer-search-chart-metrics-sent-new-relic-agents).
  </Collapser>

  <Collapser
    className="freq-link"
    id="hikaricp-240"
    title="HikariCP 2.4.0 ou superior"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://download.newrelic.com/newrelic/java-agent/extensions/hikaricp-2.4.0.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.12.0 ou superior
          </td>
        </tr>
      </tbody>
    </table>

    <Callout variant="important">
      Este módulo incubador foi descontinuado. Foi adicionado como um módulo de instrumentação no agente.
    </Callout>

    Este módulo de instrumentação faz amostras de pools de conexões de banco de dados HikariCP e relata contagens de ocupados e ociosos em métricas que começam com isto:

    ```
    Custom/Database Connection/HikariCP/METRIC_NAME
    ```

    Você pode visualizar a métrica com o [explorador métrico](/docs/insights/use-insights-ui/explore-data/metric-explorer-search-chart-metrics-sent-new-relic-agents).
  </Collapser>

  <Collapser
    className="freq-link"
    id="ratpack-1-6-0"
    title="Ratpack 1.6.0 ou superior"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://download.newrelic.com/newrelic/java-agent/extensions/ratpack-1.6.0.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3,29 ou superior
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo de instrumentação adiciona suporte para vinculação assíncrona das primitivas de execução do Ratpack. Ele também monitora a execução do manipulador. Você deve nomear a transação manualmente usando a [API do agente Java](/docs/agents/java-agent/api-guides/guide-using-java-agent-api).
  </Collapser>

  <Collapser
    className="freq-link"
    id="ratpack-http-1-4-0"
    title="Cliente HTTP Ratpack 1.4.0 ou superior"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://download.newrelic.com/newrelic/java-agent/extensions/ratpack-http-1.4.0.jar)
          </td>
        </tr>
      </tbody>
    </table>

    Esta instrumentação captura solicitações e respostas do cliente HTTP do Ratpack.
  </Collapser>
</CollapserGroup>

## Módulos de instrumentação arquivados [#archived-modules-list]

Módulos arquivados são instrumentações para biblioteca que não são mais mantidas pela empresa ou autor original. Como a biblioteca de destino não está sendo atualizada, nosso suporte para módulos arquivados possui datas de término designadas.

Estes são os módulos arquivados que estão disponíveis atualmente:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="akka-20"
    title="Akka [2.0]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/akka-2.0/SNAPSHOT/akka-2.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.22.1 ou superior
          </td>
        </tr>

        <tr>
          <th>
            O suporte termina em
          </th>

          <td>
            Dezembro de 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo fornece instrumentação de link entre atores que enviam e recebem mensagens. Ele também rastreia mensagens transmitidas ou encaminhadas aos atores. Para evitar o excesso de instrumentação, esta instrumentação não inicia a transação. Se desejar que uma determinada chamada de ator marque o início de uma transação, use a anotação [`@Trace(dispatcher=true)`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Trace.html) ou alguma outra forma de [instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation).
  </Collapser>

  <Collapser
    className="freq-link"
    id="akka-21"
    title="Akka [2.1]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/akka-2.1/SNAPSHOT/akka-2.1-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.22.1 ou superior
          </td>
        </tr>

        <tr>
          <th>
            O suporte termina em
          </th>

          <td>
            Dezembro de 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo fornece instrumentação de link entre atores que enviam e recebem mensagens. Ele também rastreia mensagens transmitidas ou encaminhadas aos atores. Para evitar o excesso de instrumentação, esta instrumentação não inicia a transação. Se desejar que uma determinada chamada de ator marque o início de uma transação, use a anotação [`@Trace(dispatcher=true)`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Trace.html) ou alguma outra forma de [instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation).
  </Collapser>

  <Collapser
    className="freq-link"
    id="akka-http-10"
    title="Akka HTTP [1.0]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/akka-http-1.0/SNAPSHOT/akka-http-1.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.24.1 ou superior
          </td>
        </tr>

        <tr>
          <th>
            O suporte termina em
          </th>

          <td>
            Dezembro de 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo cria [transação](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction) a partir de chamadas HTTP Akka. Também instrumento transferências entre atores do Akka e chamadas do Akka para outros bancos de dados e serviços.

    Para sistemas de chamada, esta instrumentação coleta [trace multiaplicativo](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces). Se você estiver usando uma versão compatível do Akka, poderá visualizar a atividade de seus aplicativos HTTP Akka desde a transação até os sistemas do ator.
  </Collapser>

  <Collapser
    className="freq-link"
    id="akka-http-20"
    title="Akka HTTP [2.0 – 2.4.1]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/akka-http-2.0/SNAPSHOT/akka-http-2.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.24.1 ou superior
          </td>
        </tr>

        <tr>
          <th>
            O suporte termina em
          </th>

          <td>
            Dezembro de 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo cria [transação](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction) a partir de chamadas HTTP Akka. Também instrumento transferências entre atores do Akka e chamadas do Akka para outros bancos de dados e serviços.

    Para sistemas de chamada, esta instrumentação coleta [trace multiaplicativo](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces). Se você estiver usando uma versão compatível do Akka, poderá visualizar a atividade de seus aplicativos HTTP Akka desde a transação até os sistemas do ator.
  </Collapser>

  <Collapser
    className="freq-link"
    id="akka-http-242"
    title="Akka HTTP [2.4.2 – 2.4.4]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/akka-http-2.4.2/SNAPSHOT/akka-http-2.4.2-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.24.1 ou superior
          </td>
        </tr>

        <tr>
          <th>
            O suporte termina em
          </th>

          <td>
            Dezembro de 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo cria [transação](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction) a partir de chamadas HTTP Akka. Também instrumento transferências entre atores do Akka e chamadas do Akka para outros bancos de dados e serviços.

    Para sistemas de chamada, esta instrumentação coleta [trace multiaplicativo](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces). Você pode usar essa instrumentação junto com nosso suporte lançado anteriormente para Akka, para visualizar a atividade de seus aplicativos HTTP Akka, desde a transação até seus sistemas de atores.
  </Collapser>

  <Collapser
    className="freq-link"
    id="hystrix-102"
    title="Hystrix [1.0.2 – 1.1.7]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/hystrix-1.0.2/SNAPSHOT/hystrix-1.0.2-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.23.0 ou superior
          </td>
        </tr>

        <tr>
          <th>
            O suporte termina em
          </th>

          <td>
            Dezembro de 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo fornece informações de tempo relacionadas a cada comando Hystrix. O agente vinculará comandos Hystrix encadeados em uma [transação](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction).
  </Collapser>

  <Collapser
    className="freq-link"
    id="hystrix-120"
    title="Hystrix [1.2.0 – 1.2.18]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/hystrix-1.2/SNAPSHOT/hystrix-1.2-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.23.0 ou superior
          </td>
        </tr>

        <tr>
          <th>
            O suporte termina em
          </th>

          <td>
            Dezembro de 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo fornece informações de tempo relacionadas a cada comando Hystrix. O agente vinculará comandos Hystrix encadeados em uma [transação](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction).
  </Collapser>

  <Collapser
    className="freq-link"
    id="hystrix-130"
    title="Hystrix [1.3.0 – 1.3.13]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/hystrix-1.3.0/SNAPSHOT/hystrix-1.3.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.23.0 ou superior
          </td>
        </tr>

        <tr>
          <th>
            O suporte termina em
          </th>

          <td>
            Dezembro de 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo fornece informações de tempo relacionadas a cada comando Hystrix. O agente vinculará comandos Hystrix encadeados em uma [transação](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction).
  </Collapser>

  <Collapser
    className="freq-link"
    id="play-20"
    title="Play [2.0]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/play-2.0/SNAPSHOT/play-2.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.24.1 ou superior
          </td>
        </tr>

        <tr>
          <th>
            O suporte termina em
          </th>

          <td>
            Dezembro de 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo cria e nomeia [transações](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction) com base nas classes do controlador do Play.
  </Collapser>

  <Collapser
    className="freq-link"
    id="play-21"
    title="Play [2.1]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/play-2.1/SNAPSHOT/play-2.1-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.24.1 ou superior
          </td>
        </tr>

        <tr>
          <th>
            O suporte termina em
          </th>

          <td>
            Dezembro de 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo cria e nomeia [transações](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction) com base nas classes do controlador do Play.
  </Collapser>

  <Collapser
    className="freq-link"
    id="play22"
    title="Play [2.2]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/play-2.2/SNAPSHOT/play-2.2-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.24.1 ou superior
          </td>
        </tr>

        <tr>
          <th>
            O suporte termina em
          </th>

          <td>
            Dezembro de 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo cria e nomeia [transações](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#transaction) com base nas classes do controlador do Play.
  </Collapser>

  <Collapser
    className="freq-link"
    id="solr-310"
    title="Solr [3.1.0 – 3.4.0]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/solr-3.1.0/SNAPSHOT/solr-3.1.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.34.0 ou superior
          </td>
        </tr>

        <tr>
          <th>
            O suporte termina em
          </th>

          <td>
            Dezembro de 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo instrumento banco de dados chama servidores Solr, e coleta informações detalhadas sobre o próprio servidor Solr. Também fornece o servidor de banco de dados e o nome do banco de dados para a consulta exibida em [trace da transação](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) e [consulta lenta trace](/docs/apm/applications-menu/monitoring/view-slow-query-details).
  </Collapser>

  <Collapser
    className="freq-link"
    id="solr-350"
    title="Solr [3.5.0]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/solr-3.5.0/SNAPSHOT/solr-3.5.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.34.0 ou superior
          </td>
        </tr>

        <tr>
          <th>
            O suporte termina em
          </th>

          <td>
            Dezembro de 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo instrumento banco de dados chama servidores Solr, e coleta informações detalhadas sobre o próprio servidor Solr. Também fornece o servidor de banco de dados e o nome do banco de dados para a consulta exibida em [trace da transação](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) e [consulta lenta trace](/docs/apm/applications-menu/monitoring/view-slow-query-details).
  </Collapser>

  <Collapser
    className="freq-link"
    id="solr-360"
    title="Solr [3.6.0 – 3.6.2]"
  >
    <table>
      <tbody>
        <tr>
          <th>
            Link para Download
          </th>

          <td>
            [Baixe o módulo](https://oss.sonatype.org/service/local/repositories/snapshots/content/com/newrelic/agent/java/archive/solr-3.6.0/SNAPSHOT/solr-3.6.0-SNAPSHOT.jar)
          </td>
        </tr>

        <tr>
          <th>
            Versão do agente Java
          </th>

          <td>
            3.34.0 ou superior
          </td>
        </tr>

        <tr>
          <th>
            O suporte termina em
          </th>

          <td>
            Dezembro de 2019
          </td>
        </tr>
      </tbody>
    </table>

    Este módulo instrumento banco de dados chama servidores Solr, e coleta informações detalhadas sobre o próprio servidor Solr. Também fornece o servidor de banco de dados e o nome do banco de dados para a consulta exibida em [trace da transação](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) e [consulta lenta trace](/docs/apm/applications-menu/monitoring/view-slow-query-details).
  </Collapser>
</CollapserGroup>
