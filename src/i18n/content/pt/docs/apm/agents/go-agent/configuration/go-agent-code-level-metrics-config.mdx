---
title: Agente Go nível do código métrico configuração
tags:
  - Agents
  - Go agent
  - Configuration
metaDescription: 'For the New Relic Go language agent, you can add source code context to your application traces, associating the trace data with the specific code being instrumented.'
freshnessValidatedDate: never
translationType: machine
---

O nível do código métrico permite que os desenvolvedores que usam a [extensão New Relic CodeStream](/docs/codestream/observability/code-level-metrics) vejam <InlinePopover type="apm"/>dados exibidos contextualmente em seu IDE, juntamente com métodos individuais no código. Isso permite que os desenvolvedores sejam mais proativos na abordagem de problemas de desempenho à medida que escrevem e revisam o código.

Quando você habilita o nível do código métrico, o agente Go anexará um atributo aos dados trace . Esses atributo mostram a localização no código fonte da sua aplicação responsável pelas ações do instrumento por aqueles trace. Os dados que você pode ver incluem:

* Nome do arquivo de origem
* Número da linha do arquivo de origem
* Nome da função
* Namespace

Dê uma olhada nas configurações do agente Go para ajudá-lo a controlar a coleta do nível do código métrico. Depois de concluir a configuração, se precisar de ajuda para encontrar os dados, consulte [Visualizar sua métrica](#view-metrics). Se você quiser ter mais controle sobre como as métricas são coletadas, consulte [Go agent nível do código métrica instrumentação](/docs/apm/agents/go-agent/instrumentation/go-agent-code-level-metrics-instrument).

<Callout variant="important">
  Nível do código métrico estão disponíveis para o agente Go versão 3.18.0 ou superior e habilitados por padrão para a versão 3.24.0 e superior. Para habilitá-lo, você deve adicionar `newrelic.ConfigCodeLevelMetricsEnabled(true)` à configuração do seu aplicativo conforme explicado abaixo.
</Callout>

## Métodos de configuração [#config]

Ao chamar `newrelic.NewApplication` para configurar o agente Go em sua aplicação, você pode habilitar o nível do código métrico incluindo a opção `newrelic.ConfigCodeLevelMetricsEnabled` , assim:

```go
app, err := newrelic.NewApplication(
   newrelic.ConfigAppName("Your Application Name"),
   newrelic.ConfigLicense(os.Getenv("NEW_RELIC_LICENSE_KEY")),
   newrelic.ConfigCodeLevelMetricsEnabled(true),
)
```

Com essa simples etapa, o agente Go adicionará as informações de contexto do código-fonte no seguinte atributo do agente na transação:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Nome
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `code.function`
      </td>

      <td>
        O nome da função que iniciou a transação. Observe que isso pode ser gerado automaticamente pelo compilador Go em alguns casos.
      </td>
    </tr>

    <tr>
      <td>
        `code.namespace`
      </td>

      <td>
        O pacote/namespace onde a função está localizada. Espera-se que a combinação de `code.namespace` e `code.function`, unida a um delimitador como um ponto (`.`), identifique exclusivamente a função.
      </td>
    </tr>

    <tr>
      <td>
        `code.filepath`
      </td>

      <td>
        O nome do caminho do arquivo de origem que contém a função que está sendo relatada. Normalmente este é o caminho completo e absoluto; veja abaixo uma opção de configuração que permite alterar isso para um caminho relativo.
      </td>
    </tr>

    <tr>
      <td>
        `code.lineno`
      </td>

      <td>
        O número da linha em `code.filepath` onde a transação foi iniciada. Consulte [o guia de instrumentação](/docs/apm/agents/go-agent/instrumentation/go-agent-code-level-metrics-instrument) para saber como controlar isso.
      </td>
    </tr>
  </tbody>
</table>

Existem opções de configuração adicionais que você pode usar para refinar ainda mais a coleta de nível do código métrico em sua aplicação.

<CollapserGroup>
  <Collapser
    id="errors-inbox-configuration"
    title="Configuração Errors Inbox"
  >
    Definir uma das tags a seguir ajudará você a identificar quais versões do seu software estão produzindo erros.

    * `NEW_RELIC_METADATA_SERVICE_VERSION` cria `tags.service.version` nos dados do evento contendo a versão do seu código que está implantada, em muitos casos uma versão semântica como 1.2.3, mas nem sempre.

    * `NEW_RELIC_METADATA_RELEASE_TAG `cria `tags.releaseTag` em dados de evento contendo a tag de lançamento (como v0.1.209 ou versão-209).

    * `NEW_RELIC_METADATA_COMMIT` cria `tags.commit` em dados de evento contendo o SHA de confirmação. O SHA inteiro pode ser usado ou apenas os primeiros sete caracteres (por exemplo, 734713b).

      Uma próxima versão da Errors Inbox rastreará automaticamente quais versões do seu software estão produzindo erros. Quaisquer dados de versão também serão exibidos no [CodeStream](/docs/codestream/how-use-codestream/performance-monitoring/#buildsha).
  </Collapser>

  <Collapser
    id="go-clm-config-ignore-prefix"
    title={<>Identificar pacotes de instrumentos</>}
  >
    Por padrão, com o nível do código métrico habilitado, o agente irá ignorar funções na stack chamadas que ele acredita serem internas ao próprio agente, para garantir que a função reportada é a pretendida, mesmo que as funções dentro do agente tenham sido chamado para entrar no código de instrumentação de nível do código métrico. Por padrão, isso é feito ignorando quaisquer funções cujo nome de pacote comece com `github.com/newrelic/go-agent/`. Você pode alterar isso para qualquer lista arbitrária de nomes definindo seu próprio valor `IgnoredPrefixes` .

    Para fazer isso, siga um destes procedimentos:

    * Se estiver configurando por meio da função `NewApplication` , adicione uma opção `ConfigCodeLevelMetricsIgnoredPrefixes` , passando qualquer número de strings de prefixo como argumentos de string separados:

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigCodeLevelMetricsIgnoredPrefixes("github.com/some/other/name/"),
      )
      ```

    * Se estiver configurando por meio de variáveis de ambiente, defina `NEW_RELIC_CODE_LEVEL_METRICS_IGNORED_PREFIXES` como o prefixo desejado (ou uma lista de prefixos separados por vírgula):

      ```ini
      NEW_RELIC_CODE_LEVEL_METRICS_IGNORED_PREFIXES="github.com/some/other/name/"
      ```

      Não se esqueça de incluir também a opção `newrelic.ConfigFromEnvironment()` ao configurar o aplicativo:

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigFromEnvironment(),
      )
      ```

    * Também é possível definir diretamente o membro `CodeLevelMetrics.IgnoredPrefixes` da estrutura `Config` (que é um valor `[]string` ), mas recomendamos usar um dos métodos mencionados acima em vez de manipular diretamente a estrutura `Config` .

      <Callout variant="important">
        Nas versões do agente Go anteriores a 3.20.0, esta opção foi nomeada na forma singular em vez de plural (ou seja, `ConfigCodeLevelMetricsIgnoredPrefix`). Esses nomes estão obsoletos e os documentados aqui devem ser usados. Os nomes mais antigos também ainda são suportados para compatibilidade com versões anteriores.
      </Callout>
  </Collapser>

  <Collapser
    id="go-clm-config-redact-ignored-prefix"
    title={<>Editar prefixos de módulos ignorados</>}
  >
    Se, por motivos como confidencialidade, você optar por ignorar alguns módulos por meio da opção `ConfigCodeLevelMetricsIgnoredPrefixes` , você também poderá editar a lista de tais prefixos dos dados de configuração relatados pelo agente.

    Isso é feito definindo a opção `ConfigCodeLevelMetricsRedactIgnoredPrefixes` . Se receber um valor `true` , sua lista de prefixos ignorados não será mostrada nos dados de configuração relatados pelo agente. Caso contrário, eles serão relatados.

    Faça um dos seguintes:

    * Se estiver configurando por meio da função `NewApplication` , adicione uma opção `ConfigCodeLevelMetricsRedactIgnoredPrefixes` :

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigCodeLevelMetricsRedactIgnoredPrefixes(true),
      )
      ```

    * Se estiver configurando por meio de variáveis de ambiente, defina `NEW_RELIC_CODE_LEVEL_METRICS_REDACT_IGNORED_PREFIXES`:

      ```ini
      NEW_RELIC_CODE_LEVEL_METRICS_REDACT_IGNORED_PREFIXES=true
      ```

      Não se esqueça de incluir também a opção `newrelic.ConfigFromEnvironment` ao configurar o aplicativo:

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigFromEnvironment(),
      )
      ```

      <Callout variant="important">
        Esta opção de redação está disponível no agente Go versões 3.20.0 e depois.
      </Callout>
  </Collapser>

  <Collapser
    id="go-clm-config-path-prefix"
    title={<>Truncar prefixo do caminho de origem</>}
  >
    Por padrão, com o nível do código métrico habilitado, o agente reportará o caminho completo de cada arquivo fonte. No entanto, isso pode não ser desejado. Por exemplo, você pode desejar relatar apenas os caminhos do aplicativo relativos à raiz da árvore de origem do projeto, permitindo que os dados sejam correlacionados entre as instâncias, independentemente de onde eles estejam instalados no sistema de arquivos.

    Para fazer isso, especifique uma string que indique o início do caminho de origem do seu projeto local. Se esse prefixo for encontrado no nome do caminho de um arquivo de origem, tudo o que aparecer antes dele será removido. Por exemplo, se a string do prefixo do caminho estiver definida como `myproject/src` então `/usr/local/projects/myproject/src/widget/main.go` seria relatado no nível do código métrico como `myproject/src/widget/main.go`.

    Se você tiver vários prefixos de caminho que deseja usar, simplesmente liste todos os seus nomes como parâmetros separados.

    Se `PathPrefixes` estiver vazio ou um caminho de arquivo de origem não contiver nenhuma das suas strings de prefixo, o nome do caminho completo será relatado.

    Faça um dos seguintes:

    * Se estiver configurando por meio da função `NewApplication` , adicione uma opção `ConfigCodeLevelMetricsPathPrefixes` :

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigCodeLevelMetricsPathPrefixes("myprojects/src/", "otherproject/src/"),
      )
      ```

    * Se estiver configurando por meio de variáveis de ambiente, defina `NEW_RELIC_CODE_LEVEL_METRICS_PATH_PREFIXES` com os prefixos desejados:

      ```ini
      NEW_RELIC_CODE_LEVEL_METRICS_PATH_PREFIXES="myprojects/src/,otherproject/src/"
      ```

      Não se esqueça de incluir também a opção `newrelic.ConfigFromEnvironment` ao configurar o aplicativo:

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigFromEnvironment(),
      )
      ```

      <Callout variant="important">
        Nas versões do agente Go anteriores a 3.20.0, esta opção foi nomeada na forma singular em vez de plural (ou seja, `ConfigCodeLevelMetricsPathPrefix`). Esses nomes estão obsoletos e os documentados aqui devem ser usados. Os nomes mais antigos também ainda são suportados para compatibilidade com versões anteriores.
      </Callout>
  </Collapser>

  <Collapser
    id="go-clm-config-redact-path-prefix"
    title={<>Editar prefixos de caminho de origem</>}
  >
    Se, por motivos como confidencialidade, você optar por encurtar os nomes de caminho de origem relatados por meio da opção `ConfigCodeLevelMetricsPathPrefixes` , também poderá editar a lista de prefixos de caminho dos dados de configuração relatados pelo agente.

    Isso é feito definindo a opção `ConfigCodeLevelMetricsRedactPathPrefixes` . Se receber um valor `true` , sua lista de prefixos de caminho não será mostrada nos dados de configuração relatados pelo agente. Caso contrário, eles serão relatados.

    Faça um dos seguintes:

    * Se estiver configurando por meio da função `NewApplication` , adicione uma opção `ConfigCodeLevelMetricsRedactPathPrefixes` :

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigCodeLevelMetricsPathPrefixes("myprojects/src/", "otherproject/src/"),
         newrelic.ConfigCodeLevelMetricsRedactPathPrefixes(true),
      )
      ```

    * Se estiver configurando por meio de variáveis de ambiente, defina `NEW_RELIC_CODE_LEVEL_METRICS_REDACT_PATH_PREFIXES`:

      ```ini
      NEW_RELIC_CODE_LEVEL_METRICS_REDACT_PATH_PREFIXES=true
      ```

      Não se esqueça de incluir também a opção `newrelic.ConfigFromEnvironment` ao configurar o aplicativo:

      ```go
      app, err := newrelic.NewApplication(
         newrelic.ConfigAppName("Your Application Name"),
         newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY"),
         newrelic.ConfigCodeLevelMetricsEnabled(true),
         newrelic.ConfigFromEnvironment(),
      )
      ```

      <Callout variant="important">
        Esta opção de redação está disponível no agente Go versões 3.20.0 e depois.
      </Callout>
  </Collapser>
</CollapserGroup>

## Veja sua métrica [#view-metrics]

Depois de configurar o nível do código métrico, você poderá ver seus dados na interface do New Relic. Esta é uma maneira de ver o rastreamento de um serviço específico:

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services**
   </DNT>

   .

2. Clique na sua entidade (serviço).

3. Na seção

   <DNT>
     **Monitor**
   </DNT>

   do painel esquerdo, clique em

   <DNT>
     **Transactions**
   </DNT>

   .

4. Em

   <DNT>
     **Transaction traces**
   </DNT>

   , clique em um trace individual.

5. Procure em

   <DNT>
     **Agent attributes**
   </DNT>

   os quatro atributos que começam com `code.`.
