---
title: newrelic_name_transaction (API do agente PHP)
type: apiDoc
shortDescription: Defina o nome personalizado para a transação atual.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to define a custom name for a particular transaction.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```php
newrelic_name_transaction(string $name)
```

Defina o nome personalizado para a transação atual.

## Requisitos

Compatível com todas as versões do agente.

Deve ser chamado dentro de uma [transação](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction).

## Descrição

Define o nome da transação com o nome especificado. Isto pode ser útil se você tiver implementado seu próprio esquema de despacho e quiser nomear a transação de acordo com sua finalidade. Chame esta função o mais cedo possível.

<Callout variant="important">
  Não use colchetes `[suffix]` no final do nome da sua transação. O New Relic remove automaticamente os colchetes do nome. Em vez disso, use parênteses `(suffix)` ou outros símbolos, se necessário.
</Callout>

Valor exclusivo como URLs, títulos de páginas, valores hexadecimais, IDs de sessão e valores de identificação exclusiva não devem ser usados na nomenclatura de sua transação. Em vez disso, adicione esses dados à transação como um parâmetro personalizado com a chamada [`newrelic_add_custom_parameter()`](/docs/agents/php-agent/configuration/php-agent-api#api-custom-param) .

<Callout variant="important">
  Não crie mais de 1000 nomes de transação exclusivos (por exemplo, evite nomear por URL se possível). Isso tornará seus gráficos menos úteis e você poderá atingir os limites definidos pela New Relic quanto ao número de nomes de transação exclusivos por conta. Também pode diminuir o desempenho do seu aplicativo.
</Callout>

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
      <td>
        `$name`

        _corda_
      </td>

      <td>
        Obrigatório. Nome da transação.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Retornará `true` se o nome da transação foi alterado com sucesso. Se `false` for retornado, verifique o log do agente para obter mais informações.

## Exemplos

### Nomenclatura de transação geral [#basic-example]

Você tem `/product/123` e `/product/234`. Se você gerar um nome de transação separado para cada um, a New Relic armazenará informações separadas para esses dois nomes de transação. Em vez disso, armazene a transação como `/product/*` ou use algo significativo no próprio código para nomear a transação, como `/Product/view`:

```php
function example() {
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_name_transaction("/Product/view/");
    }
    // ...
}
```

### Nomenclatura framework MVC [#mvc-example]

No framework MVC, uma boa opção é usar a chamada `newrelic_name_transaction()` onde sua solicitação é roteada e nomear sua transação com um formato Controlador/Ação.
