---
title: 'Ofuscação de logs: aplique hash ou mascarar dados sensíveis em seu log'
metaDescription: How to hash or mask sensitive data in logs you send to New Relic with our log obfuscation UI or API.
freshnessValidatedDate: never
translationType: machine
---

Com log regra de ofuscação, você pode evitar que certos tipos de informações sejam salvas no New Relic.

## Requisitos [#requirements]

Nosso recurso ofuscação de logs está disponível como parte de nossa [opção Data Plus](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing#data-prices).

## O que é ofuscação de logs? [#overview]

Nosso [serviço<InlinePopover type="logs"/>](/docs/logs/get-started/get-started-log-management) mascara automaticamente padrões de números que identificamos como provavelmente itens confidenciais, como números de cartão de crédito ou de CPF.

Caso necessite de ofuscação adicional, uma opção é ajustar a configuração do encaminhador de logs que você utiliza (por exemplo, nosso agente de infraestrutura). Mas uma opção mais fácil é usar nosso recurso ofuscação de logs, disponível no [Data Plus](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing#data-prices). Este recurso permite configurar a regra de ofuscação log diretamente da interface de gerenciamento de logs, ou através de nossa API NerdGraph, sem demorada configuração manual. Você definirá expressões regulares que correspondam às suas informações confidenciais e, em seguida, criará regras para ofuscar esses dados. Você pode optar por mascarar informações confidenciais ou aplicar hash.

## Definições [#definitions]

Aqui estão alguns termos importantes:

* <DNT>
    **Obfuscation rules**
  </DNT>

  defina em qual log aplicar as ações de ofuscação.

* <DNT>
    **Obfuscation rule actions**
  </DNT>

  defina qual atributo observar, qual texto ofuscar e como ofuscar (seja por mascaramento ou hash).

* <DNT>
    **Obfuscation expressions**
  </DNT>

  são denominadas expressões regulares que identificam qual texto ofuscar.

* <DNT>
    **Masking**
  </DNT>

  remove completamente as informações, substituindo-as por `X` caracteres. Você não pode pesquisar valores específicos depois de fazer isso.

* <DNT>
    **Hashing**
  </DNT>

  esconde informações. Você pode usar a ferramenta de hash para obter o hash de aplicação de um valor confidencial e, em seguida, procurar o log que contém esse hash de aplicação.

## Como funciona a ofuscação [#overview]

Os objetos JSON exibidos no exemplo a seguir são simplificações da carga usada pela nossa API NerdGraph. Isso ajudará você a correlacionar melhor as diferentes operações API com suas contrapartes equivalentes de interface.

### Exemplo: registro de log antes da ofuscação [#example-before]

Imagine que você tem o seguinte registro de log:

```json
{
  "message": "The credit card number 4321-5678-9876-2345 belongs to user user@email.com (born on 01/02/2003) with SSN 123-12-1234",
  "creditCardNumber": "4321-5678-9876-2345",
  "ssn": "123-12-1234",
  "department": "sales",
  "serviceName": "loginService"
}
```

Este registro de log contém vários dados confidenciais. Idealmente, você gostaria que seu log ficasse assim:

```json
{
  "message": "The credit card number 9aa9bc1528859aee1b1df75795f1ebd54beb2f0d26c8a1d4580a71a07189cdd5 belongs to user user@email.com (born on XXXXXXXXXX) with SSN 30e6897f76dc102e32ee1d781c43417d259e586eac15c963d75ab8b5187769da",
  "creditCardNumber": "9aa9bc1528859aee1b1df75795f1ebd54beb2f0d26c8a1d4580a71a07189cdd5",
  "ssn": "30e6897f76dc102e32ee1d781c43417d259e586eac15c963d75ab8b5187769da",
  "department": "sales",
  "serviceName": "loginService"
}
```

### Exemplo: processo básico [#example-process]

Aqui está o processo básico que você usaria para ofuscar os dados confidenciais neste exemplo.

<CollapserGroup>
  <Collapser
    id="example-actions"
    title="1. Quais ações aplicar"
  >
    Você decide que deseja aplicar as seguintes ações de ofuscação a todos os logs provenientes desse serviço:

    * `HASH` o número do cartão de crédito presente no atributo `message` e `creditCardNumber` .
    * `MASK` a data de nascimento presente no atributo `message` .
    * `HASH` o número da Segurança Social presente no atributo `message` e `ssn` .
  </Collapser>

  <Collapser
    id="example-expressions"
    title="2. Como as expressões irão capturar dados confidenciais"
  >
    A primeira coisa que você precisa fazer é definir alguma expressão de ofuscação que permita capturar essas informações confidenciais.

    <Callout variant="tip">
      Os exemplos abaixo mostram expressões regulares que você usaria diretamente na interface. Posteriormente neste documento, discutiremos como você poderia usar versões com escape dessas expressões regulares para [NerdGraph](#expressions-create).
    </Callout>

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Expressão de ofuscação
          </th>

          <th>
            Definição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Número do cartão de crédito
          </td>

          <td>
            Precisamos capturar 4 grupos de 4 dígitos separados por hífens:

            ```json
            {
              "name": "Credit Card Number",
              "regex": "((?:(?:4\d{3})|(?:5[1-5]\d{2})|6(?:011|5[0-9]{2}))(?:-?|\040?)(?:\d{4}(?:-?|\040?)){3}|(?:3[4,7]\d{2})(?:-?|\040?)\d{6}(?:-?|\040?)\d{5})"
            }
            ```
          </td>
        </tr>

        <tr>
          <td>
            Número da Segurança Social
          </td>

          <td>
            Precisamos capturar 3 grupos de 3, 2 e 4 dígitos separados por hífens:

            ```json
            {
              "name": "Social Security Number",
              "regex": "(\d{3}-\d{2}-\d{4})"
            }
            ```
          </td>
        </tr>

        <tr>
          <td>
            Data de nascimento (`loginService` específico)
          </td>

          <td>
            Neste exemplo, a data de nascimento faz parte do serviço Login. Definimos a parte a ser ofuscada com base nas informações de data nas palavras ao redor `"(born on 01/02/2003)"`:

            ```json
            {
              "name": "Born date - loginService specific",
              "regex": "born on (.*)\)"
            }
            ```
          </td>
        </tr>
      </tbody>
    </table>

    Cada expressão de ofuscação define como capturar algumas informações confidenciais de uma string (usando uma regex) e as associa a algum nome amigável para que você possa identificá-las facilmente mais tarde.

    A expressão de ofuscação _pode_ ser reutilizável; eles são totalmente agnósticos quanto à forma como o atributo log que contém os dados confidenciais é nomeado. Por exemplo, a expressão da Segurança Social definida acima poderia ser aplicada a um atributo log denominado `ssn`, `socialSecurityNumber` ou `socSecNum`.

    Você também pode criar expressões de ofuscação não reutilizáveis, como `Born date (loginService specific)`, que são fortemente acopladas ao formato do atributo de log . Por exemplo, você pode usar o que vier depois de `born on` e `before`.

    <Callout
      variant="caution"
      title="Grupos de captura de expressões regulares aninhados não suportados"
    >
      A principal responsabilidade deste recurso é substituir dados sensíveis pelo aplicar hash ou mascarar de forma fácil e eficiente. Se você quiser ou precisar agrupar correspondências diferentes dentro de um grupo de captura, lembre-se de usar a sintaxe de grupo sem captura `(?:{EXPRESSION})` para evitar a criação de grupos de captura aninhados. Por exemplo, evite `(([A-Z]{12})|([a-z]{6}))` e use `((?:[A-Z]{12})|((?:[a-z]{6}))`.
    </Callout>
  </Collapser>

  <Collapser
    id="example-rules"
    title="3. Qual log usará sua regra"
  >
    Agora que definimos como capturar nossos dados confidenciais, precisamos especificar quais logs precisam ser ofuscados (os do Login Service) e como (com as ações de ofuscação que definimos). Para conseguir isso, definimos uma regra de ofuscação.

    ```json
    {
      "name": "Obfuscate Login Service Logs",
      "filter": "serviceName = 'loginService' AND department = 'sales'",
      "actions": [
        {
          "attributes": ["message", "creditCardNumber"],
          "expression": {"name": "Credit Card Number"},
          "method": "HASH_SHA256"
        },
        {
          "attributes": ["message"],
          "expression": {"name": "Born date - loginService specific"},
          "method": "MASK"
        },
        {
          "attributes": ["message", "ssn"],
          "expression": {"name": "Social Security Number"},
          "method": "HASH_SHA256"
        }
      ]
    }
    ```

    Esta regra contém três componentes principais:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Componente de regra de ofuscação
          </th>

          <th>
            Descrição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Nome
          </td>

          <td>
            O nome ajuda a identificar facilmente o que a regra faz. Neste exemplo, esta regra define como ofuscar os diferentes atributos do log provenientes do Serviço de Login.
          </td>
        </tr>

        <tr>
          <td>
            Filtro
          </td>

          <td>
            O filtro usa o formato NRQL para informar ao nosso sistema como identificar o log de destino proveniente do serviço de login. Este exemplo consulta para log onde `serviceName = loginService` e `department = sales`.
          </td>
        </tr>

        <tr>
          <td>
            Ações
          </td>

          <td>
            Por fim, esta regra define o conjunto de ações de ofuscação a serem aplicadas ao log correspondente ao filtro. Cada ação define:

            * Que anteriormente criou expressão de ofuscação para extrair as informações sensíveis de cada conjunto de atributo

            * Qual método de ofuscação (`HASH_SHA256` ou `MASK`) será aplicado para ofuscar esses dados

              Observe que ao definir regra de ofuscação via NerdGraph, você precisará especificar o `id` da expressão de ofuscação em vez de seus nomes. Para tornar o exemplo anterior mais legível, utilizamos os nomes expressão de ofuscação.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-more"
    title="4. Reutilizando expressões em outras regras"
  >
    Como exemplo final, imagine que também precisávamos ofuscar o log proveniente de outro serviço chamado "Serviço Checkout" que possui um atributo `serviceName = checkoutService` , bem como um atributo `ccn` que contém informações de cartão de crédito:

    ```json
    {
      "message": "Order completed",
      "ccn": "4321-5678-9876-2345",
      "department": "sales",
      "serviceName": "checkoutService"
    }
    ```

    Para ofuscar o log deste serviço, teríamos apenas que definir outra regra de ofuscação direcionada a esses logs específicos, e simplesmente reutilizaríamos a `Credit card number` expressão de ofuscação criada anteriormente:

    ```json
    {
      "name": "Obfuscate Checkout Service Logs",
      "filter": "serviceName = 'checkoutService' AND department = 'sales'",
      "actions": [
        {
          "attributes": ["ccn"],
          "expression": {"name": "Credit Card Number"},
          "method": "HASH_SHA256"
        }
      ]
    }
    ```
  </Collapser>
</CollapserGroup>

## Lista de verificação: etapas para ofuscar o log [#checklist]

Para ofuscar seu log:

1. Estude o formato do seu log identificando padrões de dados confidenciais que aparecem nele. Por exemplo:

   * Todo o seu log contém informações confidenciais? Ou pode ser mais específico (apenas o log do serviço A ou da região B)?
   * Que informações confidenciais eles contêm: números de cartão de crédito, números de carteira de motorista, identidades nacionais, dados biométricos, outros valores?

2. Crie [expressões](#expressions) de ofuscação para identificar como extrair dados confidenciais.

3. Defina [regras](#rules) de ofuscação para cada conjunto de log:

   * Defina como você irá capturá-los usando NRQL.
   * Defina quais ações de ofuscação precisam ser aplicadas a cada uma delas. Pergunte a si mesmo: precisarei consultar meu registro usando essas informações confidenciais posteriormente (considere usar `HASH`) ou preciso remover essas informações inteiramente do meu registro (considere usar `MASK`)?

<Callout variant="tip">
  A interface <DNT>**Logs obfuscation**</DNT> inclui um <DNT>**Hashing tool**</DNT> para que você possa encontrar um hash de aplicação de um valor conhecido e copiá-lo para uso com outras expressões e regras.
</Callout>

## Limites de CPU [#cpu-limits]

A ofuscação tem limites de CPU por minuto. Se uma conta atingir estes limites de recursos, o registo não será ofuscado conforme esperado. Para verificar os limites da CPU, acesse [a página <DNT>**Limits**</DNT> do sistema](/docs/data-apis/manage-data/view-system-limits/#limits-ui) na interface <DNT>**Data management**</DNT> .

Se você exceder os limites de CPU de ofuscação por minuto e o log não puder ser ofuscado ou aplicar hash, o atributo ao qual a regra de ofuscação foi aplicada será <DNT>**dropped**</DNT> e substituído por um texto indicando por que o atributo foi eliminado. Por exemplo, se a regra de ofuscação for aplicada ao campo `message` e o limite de CPU por minuto for atingido, o log resultante será semelhante a este:

```json
{
  ...
  "message": "<OBFUSCATION> The account is over its obfuscation per-minute limit, attribute dropped",
  ...
}
```

Isso evita que PII ou outros dados confidenciais sejam ingeridos inadvertidamente.

Além disso, o seguinte \`NrIntegrationError' será registrado na conta:

```json
{
  "category": "RateLimit",
  "level": "error",
  "limitName": "Log API obfuscation per account per minute",
  "message": "You’ve exceeded our limit of per-account obfuscation time per-minute for the Log ingestion pipeline. Please reduce your usage or contact New Relic support.",
  "name": "ObfuscationTimeLimitReached",
  "newRelicFeature": "Logs",
  "rateLimitType": "ObfuscationTimePerMinute",
  "timestamp": 1678819264283
}
```

Para avaliar o desempenho da sua regra de ofuscação e ver quais estão sendo ignoradas, acesse <DNT>**Logs Obfuscation > Health**</DNT>. regra de ofuscação consomem muita CPU, portanto, esses gráficos podem ajudá-lo a decidir quais regras são mais afetadas por quaisquer limitações de recursos.

## Expressão de ofuscação [#expressions]

Você pode criar, ler, atualizar ou excluir expressão de ofuscação usando a interface New Relic ou usando o NerdGraph, nosso GraphQL Explorer.

<img
  title="Logs obfuscation expressions in UI"
  alt="Screenshot of Logs obfuscation expressions UI"
  src="/images/logs_screenshot-crop_log-obfuscation-expression.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs > Obfuscation**</DNT>: Primeiro crie uma ou mais expressões de ofuscação, depois crie sua regra de ofuscação.
</figcaption>

<CollapserGroup>
  <Collapser
    id="expressions-create"
    title="Crie uma expressão de ofuscação"
  >
    Use uma destas opções para criar uma expressão de ofuscação:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> e na navegação esquerda, selecione <DNT>**Obfuscation**</DNT>.

    2. Clique em <DNT>**Create regex**</DNT>.

    3. Insira um nome para sua nova regra de ofuscação, bem como uma expressão regular que corresponda aos dados confidenciais que você deseja capturar. Use [a sintaxe RE2](https://github.com/google/re2/wiki/Syntax).

       O exemplo a seguir mostra uma expressão de ofuscação básica que corresponderá aos números de cartão de crédito:

       <img
         title="Create an obfuscation expression using the logs UI"
         alt="Create an obfuscation expression using the logs UI"
         src="/images/logs_screenshot-crop_obfuscation-create-expression.webp"
       />

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Use a mutação `logConfigurationsCreateObfuscationExpression` em `logConfigurations`. Consulte o exemplo preenchido no GraphiQL, bem como a documentação relacionada em [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql#query=mutation%20%7B%0A%20%20logConfigurationsCreateObfuscationExpression%28accountId%3A%201234%2C%20expression%3A%20%7Bname%3A%20%22Credit%20Card%20Number%22%2C%20regex%3A%20%22%28%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D%29%22%2C%20description%3A%20%22Reusable%20expression%20to%20capture%20credit%20card%20numbers%22%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20regex%0A%20%20%20%20description%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

       <Callout variant="important">
         Você deve escapar das expressões regulares ao usá-las no NerdGraph. Por exemplo: `((?:(?:4\\d{3})|(?:5[1-5]\\d{2})|6(?:011|5[0-9]{2}))(?:-?|\\040?)(?:\\d{4}(?:-?|\\040?)){3}|(?:3[4,7]\\d{2})(?:-?|\\040?)\\d{6}(?:-?|\\040?)\\d{5})`
       </Callout>
  </Collapser>

  <Collapser
    id="expressions-read"
    title="Leia uma expressão de ofuscação"
  >
    Use uma destas opções para consultar uma expressão de ofuscação:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vá para

       <DNT>
         **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**
       </DNT>

       e na navegação esquerda, selecione

       <DNT>
         **Obfuscation**
       </DNT>

       .

    2. Selecione a aba

       <DNT>
         **Expressions**
       </DNT>

       para visualizar todas as expressões de ofuscação disponíveis e suas definições.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Use o buscador `obfuscationExpressions` em `actor.account.logConfigurations`. Consulte o exemplo preenchido no GraphiQL, bem como a documentação relacionada em [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20account%28id%3A%201234%29%20%7B%0A%20%20%20%20%20%20logConfigurations%20%7B%0A%20%20%20%20%20%20%20%20obfuscationExpressions%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20regex%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20updatedAt%0A%20%20%20%20%20%20%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).
  </Collapser>

  <Collapser
    id="expressions-update"
    title="Atualizar uma expressão de ofuscação"
  >
    Use uma destas opções para atualizar uma expressão de ofuscação:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> e na navegação esquerda, selecione <DNT>**Obfuscation**</DNT>.
    2. Selecione a guia <DNT>**Expressions**</DNT> .
    3. Clique no ícone de reticências <DNT>**...**</DNT> no lado direito da expressão de ofuscação que deseja editar e clique em <DNT>**Edit**</DNT>.
    4. Modifique os campos conforme necessário e clique em <DNT>**Update**</DNT>.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Use a mutação `logConfigurationsUpdateObfuscationExpression` em `logConfigurations`. Consulte o exemplo preenchido no GraphiQL, bem como a documentação relacionada em [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsUpdateObfuscationExpression%28accountId%3A%201234%2C%20expression%3A%20%7Bname%3A%20%22Credit%20Card%20Number%20-%20EDITED%22%2C%20regex%3A%20%22%28%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D-%5C%5Cd%7B4%7D%29%22%2C%20description%3A%20%22Reusable%20expression%20to%20capture%20credit%20card%20numbers%20-%20EDITED%22%2C%20id%3A%20%225678%22%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20regex%0A%20%20%20%20description%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

       <Callout variant="important">
         Você deve escapar das expressões regulares ao usá-las no NerdGraph. Por exemplo: `((?:(?:4\\d{3})|(?:5[1-5]\\d{2})|6(?:011|5[0-9]{2}))(?:-?|\\040?)(?:\\d{4}(?:-?|\\040?)){3}|(?:3[4,7]\\d{2})(?:-?|\\040?)\\d{6}(?:-?|\\040?)\\d{5})`
       </Callout>

       Você não precisa especificar todos os campos de uma expressão de ofuscação ao atualizá-la, apenas o id (obrigatório) e os campos que deseja modificar.
  </Collapser>

  <Collapser
    id="expressions-delete"
    title="Excluir uma expressão de ofuscação"
  >
    <Callout variant="important">
      Você não poderá excluir uma expressão de ofuscação se ela estiver sendo usada por uma regra de ofuscação.
    </Callout>

    Use uma destas opções para excluir uma expressão de ofuscação:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> e na navegação esquerda, selecione <DNT>**Obfuscation**</DNT>.
    2. Selecione a guia <DNT>**Expressions**</DNT> .
    3. Clique no ícone de reticências <DNT>**...**</DNT> no lado direito da expressão de ofuscação que você deseja excluir e clique em <DNT>**Delete**</DNT>.
    4. Confirme que deseja excluir a expressão clicando em <DNT>**Delete**</DNT>.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Use a mutação `logConfigurationsDeleteObfuscationExpression` em `logConfigurations`. Consulte o exemplo preenchido no GraphiQL, bem como a documentação relacionada em [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsDeleteObfuscationExpression%28accountId%3A%201234%2C%20id%3A%205678%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20regex%0A%20%20%20%20description%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20email%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20email%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

       A mutação retornará um instantâneo da expressão antes de ser excluída.
  </Collapser>
</CollapserGroup>

## Exemplos de expressões [#samples]

Abaixo, fornecemos alguns exemplos de expressões regex para ofuscar alguns dos tipos de dados confidenciais mais comuns. A expressão de ofuscação deve ser criada para cada conta New Relic onde essas expressões serão usadas.

<Callout variant="tip">
  Os exemplos a seguir são expressões regulares que você pode usar na interface. Para usá-los no GraphQL, você precisa escapá-los conforme mostrado neste [exemplo](#expressions-create).
</Callout>

<CollapserGroup>
  <Collapser
    id="ssn"
    title="Número de segurança social dos EUA"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (\d{3}[-\s\.]?\d{2}[-\s\.]?\d{4})
    ```
  </Collapser>

  <Collapser
    id="ccn"
    title="Número do cartão de crédito"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ((?:(?:4\d{3})|(?:5[1-5]\d{2})|6(?:011|5[0-9]{2}))(?:-?|\040?)(?:\d{4}(?:-?|\040?)){3}|(?:3[4,7]\d{2})(?:-?|\040?)\d{6}(?:-?|\040?)\d{5})
    ```
  </Collapser>

  <Collapser
    id="dob"
    title="Data de nascimento nos EUA"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ((?:\d{2})?\d\d(?:\\)?(?:\/)?\d\d(?:\\)?(?:\/)?\d{2}(?:\d{2})?)
    ```
  </Collapser>

  <Collapser
    id="email-address"
    title="Endereço de email"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z0-9!#$'*+?^_`{|}~.-]+(?:@|%40)(?:[a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+)
    ```
  </Collapser>

  <Collapser
    id="ipv4"
    title="Endereço IP (ipv4)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$
    ```
  </Collapser>

  <Collapser
    id="usstreetaddress"
    title="Endereço nos EUA"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    /\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})/g
    ```
  </Collapser>

  <Collapser
    id="usphone"
    title="Número de telefone dos EUA"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (^[\+]?[1]?[\W]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4})
    ```
  </Collapser>

  <Collapser
    id="uspassport"
    title="Número do passaporte dos EUA"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z]?\d?\d{5,8})
    ```
  </Collapser>

  <Collapser
    id="uknino"
    title="Número de seguro nacional do Reino Unido (NINO)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z]{2}[-\s]?\d{2}[-\s]?\d{2}[-\s]?\d{2}[-\s]?[a-dA-D])
    ```
  </Collapser>

  <Collapser
    id="spainnid"
    title="ID Nacional da Espanha (NIE/DNI/NIF)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ([a-zA-Z]?[-\s]?\d{7,8}[-\s]?[a-zA-Z])
    ```
  </Collapser>

  <Collapser
    id="indiapanid"
    title="ID PAN da Índia"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$
    ```
  </Collapser>

  <Collapser
    id="indiaaadhaar"
    title="ID AADHAAR da Índia"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    ^([2-9]{1}[0-9]{3}\s\d{4}\s\d{4})$
    ```
  </Collapser>

  <Collapser
    id="caphin"
    title="Número de seguro social/saúde pessoal do Canadá (PHIN/SIN)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (\d{3}[-\s\.]?\d{3}[-\s\.]?\d{3})
    ```
  </Collapser>

  <Collapser
    id="cahcn"
    title="Número do cartão de saúde do Canadá"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (\d{10})
    ```
  </Collapser>

  <Collapser
    id="japanid"
    title="Número de identidade nacional do Japão (meu número)"
  >
    <DNT>
      **Expression:**
    </DNT>

    ```regex
    (d{4}\sd{4}\sd{4})
    ```
  </Collapser>
</CollapserGroup>

## Regra de ofuscação [#rules]

Você pode criar, ler, atualizar ou excluir regra de ofuscação usando a interface New Relic ou usando o NerdGraph, nosso GraphQL Explorer.

<CollapserGroup>
  <Collapser
    id="rules-create"
    title="Crie uma regra de ofuscação"
  >
    Use uma destas opções para criar uma regra de ofuscação:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> e na navegação esquerda, selecione <DNT>**Obfuscation**</DNT>.

    2. Clique em <DNT>**Create obfuscation rule**</DNT>.

    3. Insira um nome para sua nova regra de ofuscação, bem como um critério de correspondência (no formato NRQL ) para capturar o conjunto de log de destino que você deseja ofuscar.

    4. Adicione um novo `actions` (o primeiro é adicionado automaticamente) para especificar a expressão de ofuscação (regex) para capturar cada conjunto de atributos, bem como se deve `MASK` ou `HASH` eles.

       * Vários atributos podem ser especificados separados por vírgula.
       * `MASK` substituirá todos os caracteres correspondentes por `X`es. Se você usar `MASK`, não poderá consultar um valor ofuscado específico posteriormente.
       * `HASH` substituirá os dados confidenciais pelo valor de hash SHA-256 aplicar. Se você usar `HASH`, poderá consultá-los usando nossa ferramenta de hashing, desde que saiba seu valor em texto simples.

       Sua regra deve ser semelhante a esta:

       <img
         title="Create an obfuscation rule using the logs UI"
         alt="Create an obfuscation rule using the logs UI"
         src="/images/logs_screenshot-crop_log-obfuscation-create-rule.webp"
       />

    5. Clique em <DNT>**Create rule**</DNT> para criar e ativar sua regra de ofuscação.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Use a mutação `logConfigurationsCreateObfuscationRule` em `logConfigurations`. Consulte o exemplo preenchido no GraphiQL, bem como a documentação relacionada em [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsCreateObfuscationRule%28accountId%3A%201234%2C%20rule%3A%20%7Bname%3A%20%22Obfuscate%20Login%20Service%20Logs%22%2C%20description%3A%20%22Removes%20PII%20from%20the%20Login%20Service%20Logs%20owned%20by%20the%20Sales%20department.%20Do%20not%20modify%20this%20rule%20without%20contacting%20the%20Sales%20team%20first.%22%2C%20filter%3A%20%22serviceName%20%3D%20%27loginService%27%20AND%20department%20%3D%20%27sales%27%22%2C%20enabled%3A%20true%2C%20actions%3A%20%5B%7Battributes%3A%20%5B%22message%22%2C%20%22creditCardNumber%22%5D%2C%20expressionId%3A%20%2212%22%2C%20method%3A%20HASH_SHA256%7D%2C%20%7Battributes%3A%20%5B%22message%22%5D%2C%20expressionId%3A%20%2234%22%2C%20method%3A%20MASK%7D%2C%20%7Battributes%3A%20%5B%22message%22%2C%20%22ssn%22%5D%2C%20expressionId%3A%20%2256%22%2C%20method%3A%20HASH_SHA256%7D%5D%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

       <Callout variant="important">
         Você deve especificar a ofuscação `expressionId` para vinculá-la a uma determinada ação de ofuscação. Para recuperar esse id, você pode [consultar o `obfuscationRules`](#rules-read).
       </Callout>
  </Collapser>

  <Collapser
    id="rules-read"
    title="Leia uma regra de ofuscação"
  >
    Use qualquer uma destas opções para consultar uma regra de ofuscação:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> e na navegação esquerda, selecione <DNT>**Obfuscation**</DNT>.
    2. Selecione a aba <DNT>**Rules**</DNT> (padrão) para visualizar todas as regras de ofuscação disponíveis e suas definições.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Use o buscador `obfuscationRules` em `actor.account.logConfigurations`. Consulte o exemplo preenchido no GraphiQL, bem como a documentação relacionada em [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20account%28id%3A%201234%29%20%7B%0A%20%20%20%20%20%20logConfigurations%20%7B%0A%20%20%20%20%20%20%20%20obfuscationRules%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%20%20filter%0A%20%20%20%20%20%20%20%20%20%20enabled%0A%20%20%20%20%20%20%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20method%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20createdAt%0A%20%20%20%20%20%20%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20updatedAt%0A%20%20%20%20%20%20%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20email%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
  </Collapser>

  <Collapser
    id="rules-update"
    title="Atualizar uma regra de ofuscação"
  >
    Use uma destas opções para atualizar uma regra de ofuscação:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> e na navegação esquerda, selecione <DNT>**Obfuscation**</DNT>.
    2. Selecione a guia <DNT>**Rules**</DNT> (padrão).
    3. Clique no ícone de reticências <DNT>**...**</DNT> no lado direito da regra de ofuscação que você deseja editar e clique em <DNT>**Edit**</DNT>.
    4. Modifique os campos conforme necessário e clique em <DNT>**Update rule**</DNT>.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Use a mutação `logConfigurationsUpdateObfuscationRule` em `logConfigurations`. Consulte o exemplo preenchido no GraphiQL, bem como a documentação relacionada em [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsUpdateObfuscationRule%28accountId%3A%201234%2C%20rule%3A%20%7Bid%3A%20%225678%22%2C%20name%3A%20%22EDITED%20-%20Obfuscate%20Login%20Service%20Logs%22%2C%20description%3A%20%22EDITED%20-%20Removes%20PII%20from%20the%20Login%20Service%20Logs%20owned%20by%20the%20Sales%20department.%20Do%20not%20modify%20this%20rule%20without%20contacting%20the%20Sales%20team%20first.%22%2C%20filter%3A%20%22serviceName%20%3D%20%27loginService%27%20AND%20department%20%3D%20%27sales%27%22%2C%20enabled%3A%20true%2C%20actions%3A%20%5B%7Battributes%3A%20%5B%22message%22%2C%20%22creditCardNumber%22%5D%2C%20expressionId%3A%20%2212%22%2C%20method%3A%20HASH_SHA256%7D%2C%20%7Battributes%3A%20%5B%22message%22%5D%2C%20expressionId%3A%20%2234%22%2C%20method%3A%20MASK%7D%2C%20%7Battributes%3A%20%5B%22message%22%2C%20%22ssn%22%5D%2C%20expressionId%3A%20%2256%22%2C%20method%3A%20HASH_SHA256%7D%5D%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

       <Callout variant="important">
         Você deve especificar a ofuscação `expressionId` para vinculá-la a uma determinada ação de ofuscação. Para recuperar este id, você pode usar o `obfuscationRules`, conforme descrito em \[consulta o `obfuscationRules`]](#rules-read).
       </Callout>

       Você não precisa especificar todos os campos de uma regra de ofuscação ao atualizá-la, apenas o `id` (obrigatório) e os campos que deseja modificar. Aqui está um exemplo para [atualizar apenas o nome](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsUpdateObfuscationRule%28accountId%3A%201234%2C%20rule%3A%20%7Bid%3A%20%225678%22%2C%20name%3A%20%22EDITED%20-%20Obfuscate%20Login%20Service%20Logs%22%7D%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).
  </Collapser>

  <Collapser
    id="rules-delete"
    title="Excluir uma regra de ofuscação"
  >
    Use uma destas opções para excluir uma regra de ofuscação:

    <DNT>
      **Using the logs UI:**
    </DNT>

    1. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Logs**</DNT> e na navegação esquerda, selecione <DNT>**Obfuscation**</DNT>.
    2. Selecione a guia <DNT>**Rules**</DNT> (padrão).
    3. Clique no ícone de reticências <DNT>**...**</DNT> no lado direito da regra de ofuscação que você deseja excluir e clique em <DNT>**Delete**</DNT>.
    4. Confirme que deseja excluir a expressão clicando em <DNT>**Delete**</DNT>.

       <DNT>
         **Using NerdGraph:**
       </DNT>

       Use a mutação `logConfigurationsDeleteObfuscationRule` em `logConfigurations`. Consulte o exemplo preenchido no GraphiQL, bem como a documentação relacionada em [<DNT>**api.newrelic.com/graphiql**</DNT>](https://api.newrelic.com/graphiql?#query=mutation%20%7B%0A%20%20logConfigurationsDeleteObfuscationRule%28accountId%3A%201234%2C%20id%3A%205678%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20filter%0A%20%20%20%20enabled%0A%20%20%20%20actions%20%7B%0A%20%20%20%20%20%20attributes%0A%20%20%20%20%20%20expression%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20method%0A%20%20%20%20%7D%0A%20%20%20%20createdAt%0A%20%20%20%20createdBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%20%20updatedAt%0A%20%20%20%20updatedBy%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20email%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

       A mutação retornará um instantâneo da regra antes de ser excluída.
  </Collapser>
</CollapserGroup>
