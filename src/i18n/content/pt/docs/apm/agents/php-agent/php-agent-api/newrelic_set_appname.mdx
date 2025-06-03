---
title: newrelic_set_appname (API do agente PHP)
type: apiDoc
shortDescription: 'Define o nome do aplicativo New Relic, que controla a agregação de dados.'
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: 'New Relic PHP agent API call to set the New Relic app name, if you can''t edit your config file.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```php
newrelic_set_appname(string $name)
newrelic_set_appname(string $name, string $license[, bool $xmit])
```

Define o nome do aplicativo New Relic, que controla a agregação de dados.

## Requisitos

Versão do agente [3.1.5.111](/docs/release-notes/agent-release-notes/php-release-notes/php-agent-315111) ou superior.

## Descrição

Defina o [nome do aplicativo](/docs/agents/manage-apm-agents/app-naming/name-your-application) New Relic, que a interface do New Relic usa para conectar seus dados ao aplicativo correto.

O método recomendado e preferido para definir o nome do aplicativo New Relic é usar [configurações INI globais ou por diretório](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-appname) para associar seu aplicativo ao nome desejado no início da execução.

Se você não puder editar o arquivo de configuração do seu agente (por exemplo, muitos ambientes de hospedagem compartilhada não permitem editar arquivos de configuração), a chamada de API [newrelic_set_appname](/docs/agents/php-agent/php-agent-api/newrelic_set_appname) poderá ser usada para configurar o nome do aplicativo, <InlinePopover type="licenseKey"/>(opcional, se você usar várias contas ) e um sinalizador verdadeiro/falso (opcional, para determinar se os dados registrados anteriormente devem ser mantidos ou descartados). Para garantir a continuidade máxima trace do APM, chame isso o mais cedo possível. Esta chamada de API descartará todos os dados de transação atuais e iniciará uma nova transação após ser reconectada ao nome do aplicativo fornecido.

Para outras opções de nomenclatura de aplicativos, consulte [Nomeie seu aplicativo PHP](/docs/agents/php-agent/configuration/name-your-php-application). Quando possível, são recomendadas soluções baseadas em INI.

### Comportamento de chamada e localização

É altamente recomendável que você chame essa função o mais rápido possível após iniciar o monitoramento do seu aplicativo e em uma stack de chamadas o mais rasa possível. Os aplicativos são entidades distintas no APM e, quando você altera o nome de um aplicativo, não há nada que vincule os dados dos dois nomes de aplicativos. O uso da função `newrelic_set_appname` pode levar à descontinuidade do seu rastreamento da transação. Em outras palavras, novas transações são reportadas ao novo nome do aplicativo e não há nada que as vincule aos dados conectados ao nome do aplicativo antigo.

Este método deve ser chamado uma vez, pois cada chamada à API (mesmo com o mesmo nome do aplicativo) fará com que os dados da transação atual sejam descartados e leve a uma maior descontinuidade no rastreamento da transação.

## Parâmetro

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td colSpan={2}>
        ```php
        function newrelic_set_appname(string $name) : bool
        ```
      </td>
    </tr>

    <tr>
      <td>
        `$name`

        _corda_
      </td>

      <td>
        Obrigatório. Os nomes das métricas do aplicativo devem ser informados na interface do usuário do New Relic. Usa o mesmo formato de [`newrelic.appname`](/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-appname) e pode definir vários nomes de aplicativos separando cada um deles com ponto e vírgula `;`.
      </td>
    </tr>

    <tr>
      <td colSpan={2}>
        ```php
        function newrelic_set_appname(string $name, string $license, bool $xmit) : bool
        ```
      </td>
    </tr>

    <tr>
      <td>
        `$name`

        _corda_
      </td>

      <td>
        Obrigatório. Os nomes das métricas do aplicativo devem ser informados na interface do usuário do New Relic. Usa o mesmo formato de [`newrelic.appname`](/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-appname) e pode definir vários nomes de aplicativos separando cada um deles com ponto e vírgula `;`.
      </td>
    </tr>

    <tr>
      <td>
        `$license`

        _corda_
      </td>

      <td>
        Obrigatório (pode ser uma string vazia). Especifique uma chave de licença diferente para reportar métricas para uma conta New Relic diferente. Se definido como uma string vazia, o padrão é a chave de licença no arquivo `newrelic.ini` do agente.
      </td>
    </tr>

    <tr>
      <td>
        `$xmit`

        _boleano_
      </td>

      <td>
        Opcional. O padrão é `false`.

        Se `false` ou omitido, o agente descarta a transação atual e todos os dados capturados até esta chamada são perdidos.

        Se `true`, o agente envia os dados que foram coletados logo antes de executar esta chamada. <DNT>**The data is associated with the old app name**</DNT>. Isso tem um impacto muito leve no desempenho, pois leva alguns milissegundos para o agente despejar seus dados.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Retorna `true` se o nome do aplicativo foi alterado com sucesso ou `false` caso contrário.

## Exemplos

### Defina um único nome de aplicativo [#only-app-name]

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_set_appname("App1");
    }
    ...
}
```

### Defina dois nomes de aplicativos [#two-app-names]

Este exemplo define [vários nomes de aplicativos](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app):

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_set_appname("App1;App2");
    }
    ...
}
```

### Defina o nome do aplicativo e a chave de licença [#app-name-license-key]

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_set_appname("App1", "01234567890abcde01234567890abcde01234567890");
    }
    ...
}
```

### Defina o nome do aplicativo e mantenha os dados anteriores [#app-name-and-data]

Este exemplo define um nome de aplicativo e mantém os dados existentes, mas não altera o <InlinePopover type="licenseKey"/>:

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_set_appname("App1", "", true);
    }
    ...
}
```

### Defina o nome do aplicativo e a chave de licença e mantenha os dados anteriores [#app-name-and-data]

Este exemplo define o nome do aplicativo e a chave de licença e mantém os dados existentes:

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_set_appname("App1", "01234567890abcde01234567890abcde01234567890", true);
    }
    ...
}
```
