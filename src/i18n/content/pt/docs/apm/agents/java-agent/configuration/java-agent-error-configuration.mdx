---
title: Configuração de erro do agente Java
tags:
  - Agents
  - Java agent
  - Configuration
metaDescription: 'Use New Relic''s Java agent to prevent expected errors from affecting error rate or Apdex score, also to ignore or report errors not reported automatically.'
freshnessValidatedDate: never
translationType: machine
---

O agente Java do APM relata informações detalhadas sobre erros que ocorrem em seu aplicativo. Isso fornece insights sobre áreas problemáticas que podem estar afetando o desempenho do seu aplicativo ou a experiência do usuário final.

Com o agente Java [versões 3.40.0 ou superior](/docs/release-notes/agent-release-notes/java-release-notes), há diversas opções de configuração que permitem controlar como os erros são relatados, incluindo:

* Configurando erros esperados para que não afetem a taxa de erros ou o Apdex
* Erro ignorado
* Relatando erros que não são relatados automaticamente

Para obter mais informações sobre como visualizar seus dados de erro, consulte [Análise de erros](/docs/apm/applications-menu/error-analytics/introduction-error-analytics). Para obter uma visão geral dos dados de erro em todos os agentes, consulte [Gerenciar erros no APM](/docs/agents/manage-apm-agents/agent-data/manage-errors-apm-collect-ignore-mark-expected).

## Exemplos de erros comuns relatados [#examples]

O agente Java relata erros nos seguintes cenários:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Relatório de erros
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Erros não tratados (inclui stack trace)
      </td>

      <td>
        Se ocorrer um erro não tratado em uma transação que o agente Java estava rastreando, o erro será relatado com o stack trace completo.
      </td>
    </tr>

    <tr>
      <td>
        Códigos de status HTTP (sem stack trace)
      </td>

      <td>
        Quando uma transação no seu aplicativo gera um código de status HTTP, por exemplo, `400` para um erro do cliente, ele relata o erro sem stack trace. As razões para isso são:

        * O servidor do aplicativo detectou uma condição de erro e definiu explicitamente o código de status.

          OU

        * A lógica do programa detectou a condição de erro, portanto não houve objeto ou stack de exceção.

          Para incluir o stack trace nesses tipos de transação, você deve usar uma chamada de API `noticeError(...)`.
      </td>
    </tr>

    <tr>
      <td>
        `noticeError(...)` Chamada de API
      </td>

      <td>
        Se o agente Java fizer uma chamada explícita usando a chamada de API `noticeError(...)` , o erro será relatado independentemente de ocorrer ou não em uma transação. As informações relatadas dependem do parâmetro usado na chamada da API `noticeError(...)` , conforme descrito nos [Javadocs](https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html).
      </td>
    </tr>

    <tr>
      <td>
        Erros sem escopo relatando mais de 100%
      </td>

      <td>
        O agente Java pode relatar erros sem escopo, que são erros que não estão vinculados a nenhuma transação. Por causa disso, é possível ter uma transação em um intervalo de tempo e vários erros no mesmo intervalo de tempo. Nesta situação, o New Relic mostraria então uma taxa de erros <DNT>**over 100%**</DNT>.
      </td>
    </tr>
  </tbody>
</table>

## Configurar relatórios de erros [#error-configuration]

<Callout variant="important">
  Para usar esse recurso, [atualize](/docs/agents/java-agent/installation/upgrade-java-agent) para a [versão mais recente](/docs/release-notes/agent-release-notes/java-release-notes) (agente Java 3.40.0 ou superior).
</Callout>

O agente Java fornece diversas opções de configuração flexíveis para controlar como os erros são relatados.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        <DNT>
          **Config options**
        </DNT>
      </th>

      <th>
        <DNT>
          **Details**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Configure erros através da interface.
      </td>

      <td>
        Você pode errar ignorado ou marcá-los como esperado através [da configuração do lado do servidor](#server-side-config).
      </td>
    </tr>

    <tr>
      <td>
        Configurar como erro esperado via `newrelic.yml`
      </td>

      <td>
        Os erros relatados por essas versões do `noticeError` podem ser configurados como [erro esperado](/docs/agents/java-agent/configuration/java-agent-error-configuration#expected-errors) no `newrelic.yml`. As chamadas para esta API serão substituídas se o erro for configurado como [ignorado](/docs/agents/java-agent/configuration/java-agent-error-configuration#ignore-errors) em `newrelic.yml`. Para obter detalhes, consulte [Precedência de configuração de erros](/docs/agents/java-agent/configuration/java-agent-error-configuration#error-config-precedence).

        Use estas `noticeError()` chamadas de API para reportar erros que não são reportados automaticamente e configure-os como [erro esperado](/docs/agents/java-agent/configuration/java-agent-error-configuration#enable-error-collector) em `newrelic.yml`:

        * ```
          <a href="https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.Throwable-">noticeError(Throwable throwable)</a>
          ```
        * ```
          <a href="https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.Throwable-java.util.Map-">noticeError(Throwable throwable, Map<String, String> params)</a>
          ```
      </td>
    </tr>

    <tr>
      <td>
        Substituir erro esperado via `newrelic.yml`
      </td>

      <td>
        Os erros relatados por essas versões de `noticeError` substituirão a configuração [de erro esperado](/docs/agents/java-agent/configuration/java-agent-error-configuration#expected-errors) `newrelic.yml` . As chamadas para esta API serão substituídas se o erro for configurado como [ignorado](/docs/agents/java-agent/configuration/java-agent-error-configuration#ignore-errors) no yml. Para obter detalhes, consulte [Precedência de configuração de erros](/docs/agents/java-agent/configuration/java-agent-error-configuration#error-config-precedence).

        Use estas `noticeError(...)` chamadas de API para relatar erros que não são relatados automaticamente e configurá-los como [erros esperados](/docs/agents/java-agent/configuration/java-agent-error-configuration#enable-error-collector) com a API (substitui a configuração de erro esperado do yml):

        * ```
          <a href="https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.String-boolean-">noticeError(String message, boolean expected)</a>
          ```
        * ```
          <a href="https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.String-java.util.Map-boolean-">noticeError(String message, Map<String, String> params, boolean expected)</a>
          ```
        * ```
          <a href="https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.Throwable-boolean-">noticeError(Throwable throwable, boolean expected)</a>
          ```
        * ```
          <a href="https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.Throwable-java.util.Map-boolean-">noticeError(Throwable throwable, Map<String, String> params, boolean expected)</a>
          ```
      </td>
    </tr>

    <tr>
      <td>
        Ignore ou espere erros por meio do arquivo de configuração
      </td>

      <td>
        Nas versões 3.40.0 ou superiores, você pode controlar como os erros são relatados usando a [configuração baseada em YAML](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Error_Collector). Isso permite que você erro ignorado ou espere erros com base em códigos de status HTTP <DNT>**or**</DNT> com base em uma lista de nomes de classes de exceção, além de uma mensagem de erro opcional.

        * <DNT>**Ignoring errors**</DNT> impede que as classes ou códigos de exceção especificados sejam relatados a <InlinePopover type="apm"/>.

        * <DNT>**Expecting errors**</DNT> Evita que as classes ou códigos de exceção especificados afetem [a taxa de erros](/docs/apis/rest-api-v2/application-examples-v2/application-error-rate-example-v2) e [a pontuação Apdex](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction) do seu aplicativo. Isso permite reter as informações de erro para fins de resolução de problemas, evitando alertas baseados em taxa de erros ou pontuação Apdex.

          Essas configurações são dinâmicas, portanto, a execução do agente notará alterações em <DNT>**newrelic.yml**</DNT> sem reiniciar a JVM. Para obter mais informações e exemplos, consulte o [arquivo de configuração do agente Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file).
      </td>
    </tr>
  </tbody>
</table>

## Configuração baseada em YAML para coleta de erros [#yml-config]

A configuração baseada em YAML para coleta de erros permite ignorar totalmente erros específicos ou isentar erros esperados de afetar a taxa de erros e a pontuação Apdex do seu aplicativo. Você pode marcar erros como ignorados ou esperados com base nos seguintes critérios:

* Um determinado intervalo de códigos de status HTTP, apresentados como uma lista separada por vírgulas ou intervalo tracejado

* Uma lista separada por vírgula usando o nome totalmente qualificado de um pacote/classe

  <DNT>
    **and**
  </DNT>

  uma string de mensagem de erro fornecida opcionalmente

<CollapserGroup>
  <Collapser
    id="enable-error-collector"
    title="Habilitando coleta de erros"
  >
    Por padrão, o agente Java inclui uma seção `error_collector` na qual todas as opções [de configuração de erro baseadas em YAML](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Error_Collector) são encontradas. A coleta de erros pode ser ativada ou desativada da seguinte forma:

    ```yml
    error_collector:
      enabled: true
    ```
  </Collapser>

  <Collapser
    id="ignore-errors"
    title="Ignorando erros específicos"
  >
    Erros que não são de interesse particular podem ser totalmente ignorados. Ao identificar erros a serem ignorados:

    * Eles não serão comunicados à APM.

    * Eles não afetarão a taxa de erros ou a pontuação Apdex da sua aplicação

      Aqui está um exemplo que mostra as opções [de configuração baseadas em YAML](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Error_Collector) para erro ignorado:

      ```yml
      error_collector:
          enabled: true

          ignore_classes:
            - "com.example.ErrorClassToIgnore"

          ignore_messages:
            com.example.OtherErrorClassToIgnore:
              - "some error message to ignore"

          ignore_status_codes: 404,507-511
      ```
  </Collapser>

  <Collapser
    id="expected-errors"
    title="Evitando que erros esperados afetem taxa de erros e Apdex"
  >
    Erros que são <DNT>**expected**</DNT> como parte da lógica de negócios de um aplicativo podem ser evitados de afetar a taxa de erros ou a pontuação do Apdex e ainda assim serem relatados ao APM. Isso permite que você retenha as informações de erro na UI para fins de resolução de problemas, evitando alertas (com base na taxa de erro e na pontuação do Apdex) causados por esses erros.

    Aqui está um exemplo que mostra as opções [de configuração baseadas em YAML](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Error_Collector) para erros esperados:

    ```yml
    error_collector:
        enabled: true

        expected_classes:
          - "com.example.ExpectedErrorClass"

        expected_messages:
          com.example.OtherExpectedErrorClass:
            - "some expected error message"

        expected_status_codes: 406,500-504
    ```
  </Collapser>
</CollapserGroup>

## Precedência de configuração de erro [#error-config-precedence]

A prioridade para configuração de erros é:

1. [Configuração no lado do servidor](#server-side-config) (sobrepõe valores no arquivo YAML)
2. `ignore_*` configuração no YAML
3. `expected` parâmetro na chamada de API `noticeError(..)`
4. `expected_*` configuração no YAML

Aqui estão alguns exemplos dos resultados ao combinar várias chamadas de API e configuração YAML.

<CollapserGroup>
  <Collapser
    id="ignore-classes"
    title="Erro ignorado classes (YAML substitui API)"
  >
    Configuração YAML:

    ```yml
    error_collector:
      ignore_classes:
        - "com.example.ErrorClass"
    ```

    e

    Chamada de API:

    ```java
    noticeError(com.example.ErrorClass)
    ```

    Resultado:

    O YAML `ignore_classes` substitui a chamada de API `noticeError` e o erro é ignorado.
  </Collapser>

  <Collapser
    id="expected-classes"
    title="Reportar erro esperado (YAML e API)"
  >
    Configuração YAML:

    ```yml
    error_collector:
      expected_classes:
        - "com.example.ErrorClass"
    ```

    E

    Chamada de API:

    ```java
    noticeError(com.newrelic.Exception)
    ```

    Resultado:

    O parâmetro `expected` na chamada de API `noticeError` é verdadeiro por padrão e a configuração YAML `expected_classes` contém uma classe de erro. Portanto, o erro é relatado e marcado como `expected`.
  </Collapser>

  <Collapser
    id="expected-no-yaml"
    title="Reportar erro esperado (sem YAML)"
  >
    Nenhuma configuração YAML

    E

    Chamada de API:

    ```java
    noticeError(com.newrelic.Exception, expected = true)
    ```

    Resultado:

    O erro é relatado e marcado como esperado.
  </Collapser>

  <Collapser
    id="ignore-error"
    title="YAML ignore_classes substitui o parâmetro esperado da API"
  >
    Configuração YAML:

    ```yaml
    error_collector:
      ignore_classes:
        - "com.example.ErrorClass"
    ```

    E

    Chamada de API:

    ```java
    noticeError(com.newrelic.Exception, expected = true)
    ```

    Resultado:

    O YAML `ignore_classes`substitui o parâmetro `expected` na chamada de API `noticeError` , portanto o erro é ignorado.
  </Collapser>

  <Collapser
    id="expected-false"
    title="O parâmetro esperado da API substitui o YAML expected_classes"
  >
    Configuração YAML:

    ```yaml
    error_collector:
      expected_classes:
        - "com.example.ErrorClass"
    ```

    E

    Chamada de API:

    ```java
    noticeError(com.newrelic.Exception, expected = false)
    ```

    Resultado:

    O parâmetro `expected` na chamada de API `noticeError` substitui `expected_classes` no YAML. Portanto, o erro é relatado como normal (não marcado como `expected`).
  </Collapser>

  <Collapser
    id="ignore-expected"
    title="Ignorar substituições esperadas em YAML"
  >
    Configuração YAML:

    ```yaml
    error_collector:
      ignore_classes:
        - "com.example.ErrorClass"
    ```

    E

    Configuração adicional de YAML:

    ```yaml
    error_collector:
      expected_classes:
        - "com.example.ErrorClass"
    ```

    Resultado:

    O YAML `ignore_classes/ignore_messages` substitui o YAML `expected_classes/expected_messages`, portanto o erro é ignorado. Este mesmo princípio se aplica a `ignore_status_codes` e `expected_status_codes`.
  </Collapser>
</CollapserGroup>

## Examine o log para obter detalhes do erro [#logs-context]

Você pode reunir os dados do seu log e da aplicação para tornar a resolução de problemas mais fácil e rápida. Com [os logs contextualizados](/docs/logs/logs-context/java-configure-logs-context-all/), você pode ver a mensagem do log relacionada aos seus erros e rastrear diretamente na interface do seu aplicativo.

1. Na página

   <DNT>
     **Errors**
   </DNT>

   , clique em um trace para ir para a [página](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/)

   <DNT>
     [**Error details**](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/)
   </DNT>

   [](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/).

2. Na página de detalhes do erro, clique em

   <DNT>
     **See logs**
   </DNT>

   .

3. Para visualizar detalhes relacionados a uma mensagem do log individual, clique diretamente na mensagem.

## Configurar ignorado e erro esperado via interface [#server-side-config]

Para configurar [erro esperado](/docs/agents/manage-apm-agents/agent-data/manage-errors-apm-collect-ignore-or-mark-expected#expected) através da interface APM:

1. Se ainda não estiver habilitado, [habilite Configuração no lado do servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#enable-ssc).

2. [Acesse o menu Configuração no lado do servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc) da aplicação com erros que deseja marcar como esperado.

3. Em

   <DNT>
     **Error collection**
   </DNT>

   , para

   <DNT>
     **Ignore**
   </DNT>

   ou

   <DNT>
     **Exclude expected errors**
   </DNT>

   , insira o código HTTP ou a classe de erro para erros que você deseja configurar.

4. Selecione

   <DNT>
     **Save**
   </DNT>

   .

Para obter informações sobre como visualizar o erro esperado na interface, consulte [Visualizar o erro esperado](/docs/agents/manage-apm-agents/agent-data/manage-errors-apm-collect-ignore-or-mark-expected#expected).
