---
title: Nomeie seu aplicativo Java
tags:
  - Agents
  - Java agent
  - Configuration
freshnessValidatedDate: never
translationType: machine
---

[O agente Java da New Relic](/docs/agents/java-agent/getting-started/introduction-new-relic-java) oferece diversas maneiras de alterar o nome do aplicativo relatado e exibido no APM. Este documento fornece uma visão geral dessas opções de nomenclatura.

Para obter uma visão geral da nomenclatura de aplicativos <InlinePopover type="apm"/>(não específica de Java), consulte [Nomeie seu aplicativo](/docs/agents/manage-apm-agents/app-naming/name-your-application).

## Definir ou alterar o nome do aplicativo [#naming-options]

O APM diferencia os aplicativos pelo nome como eles são relatados. A continuidade dos dados é interrompida quando você altera o nome do aplicativo. Para alterar o nome de um aplicativo sem interromper a continuidade dos dados, use a opção interface alias-change.

Aqui estão as maneiras de alterar o nome do seu aplicativo Java:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Método de nomenclatura
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Recomendado: configure `app_name` em `newrelic.yml`
      </td>

      <td>
        [Configure seu arquivo `newrelic.yml` ](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-app_name)para definir o nome do seu aplicativo. Esta é a opção recomendada e mais comumente usada:

        ```yml
        app_name: My Application
        ```
      </td>
    </tr>

    <tr>
      <td>
        Configure `app_name` usando argumentos JVM
      </td>

      <td>
        [Configure uma propriedade do sistema com argumentos JVM](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#System_Properties) para definir nomes de aplicativos exclusivos para vários aplicativos que se reportam ao mesmo agente Java:

        ```ini
        -Dnewrelic.config.app_name="My App"
        ```
      </td>
    </tr>

    <tr>
      <td>
        Defina o nome do aplicativo usando variáveis de ambiente
      </td>

      <td>
        [Defina uma variável de ambiente](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Environment_Variables) para definir facilmente nomes de aplicativos durante a implantação do contêiner ou para garantir que o nome de um aplicativo permaneça o mesmo durante várias iterações de um arquivo `newrelic.yml` :

        ```sh
        export NEW_RELIC_APP_NAME="My App"
        ```
      </td>
    </tr>

    <tr>
      <td>
        Nomeação automática de aplicativos
      </td>

      <td>
        [Ative a nomenclatura automática de aplicativos](/docs/agents/java-agent/configuration/automatic-application-naming) em seu arquivo `newrelic.yml` se desejar que o aplicativo seja nomeado de acordo com seu contexto, filtro, servlet ou atributo de solicitação:

        ```yml
        enable_auto_app_naming: true
        ```
      </td>
    </tr>

    <tr>
      <td>
        Alterar alias via interface
      </td>

      <td>
        [Altere o alias de um aplicativo](/docs/agents/manage-apm-agents/app-naming/name-your-application#app-alias) para alterar apenas o nome exibido na interface. Isso não altera o nome relatado pelo aplicativo.

        Isto não interrompe a continuidade dos dados, ao contrário de todas as outras opções.
      </td>
    </tr>
  </tbody>
</table>

<Callout variant="tip">
  Observe que alguns métodos [têm precedência sobre outros](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#config-options-precedence).
</Callout>

## Use vários nomes de aplicativos [#multiple]

Você pode usar vários nomes de aplicativos para agregar dados de vários aplicativos com o mesmo nome no APM (às vezes chamado de "acumulação" de seus dados). Para saber mais sobre como funcionam vários nomes de aplicativos, consulte [Usar vários nomes de aplicativos](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app).

Em Java, você pode configurar até três nomes de aplicativos. O nome principal do aplicativo é o primeiro, enquanto o segundo e o terceiro nomes são usados para as categorias de agregação de dados mais gerais.

<CollapserGroup>
  <Collapser
    id="example-yml"
    title="Arquivo de configuração Java"
  >
    Aqui está um exemplo de configuração de vários nomes no [arquivo`newrelic.yml` ](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-app_name):

    ```yml
    app_name: My Application;My Application 2;My application 3
    ```
  </Collapser>

  <Collapser
    id="example-env"
    title="Variável de ambiente Java"
  >
    Aqui está um exemplo de configuração de vários nomes como [variável de ambiente](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Environment_Variables):

    ```sh
    export NEW_RELIC_APP_NAME="My Application;My Application 2;My application 3"
    ```
  </Collapser>

  <Collapser
    id="example-sysprop"
    title="Propriedades do sistema"
  >
    <Callout variant="important">
      Se você definir vários nomes de aplicativos usando propriedades do sistema na linha de comando Java, lembre-se de citar o parâmetro de linha de comando por causa do ; personagem.
    </Callout>

    Aqui está um exemplo de configuração de vários nomes como uma [propriedade do sistema](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#Environment_Variables):

    ```ini
    -Dnewrelic.config.app_name="My Application;My Application 2;My application 3"
    ```
  </Collapser>
</CollapserGroup>
