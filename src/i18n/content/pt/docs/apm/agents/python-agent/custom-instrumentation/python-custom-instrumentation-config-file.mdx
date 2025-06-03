---
title: Instrumentação Python personalizada via arquivo de configuração
tags:
  - Agents
  - Python agent
  - Custom instrumentation
metaDescription: Modify your config file to add additional instrumentation to a monitored application when using the Python agent.
freshnessValidatedDate: never
translationType: machine
---

Você pode estender o monitoramento do agente Python para trace o tempo gasto em funções ou métodos de classes adicionais editando seu [arquivo de configuração`newrelic.ini` ](/docs/apm/agents/python-agent/configuration/python-agent-configuration/#agent-configuration-file). Essa forma de [instrumentação customizada](/docs/python/python-custom-instrumentation) é mais simples de implementar do que a chamada de API e não exige que você modifique seu código. No entanto, para necessidades mais complexas, pode ser necessário usar [o instrumento via API](/docs/python/python-instrumentation-by-api) .

## Listando funções no arquivo de configuração [#listing_functions]

Para estender a instrumentação para funções designadas e métodos de classe, adicione-os à configuração `transaction_tracer.function_trace` na seção `newrelic` do arquivo de configuração do agente. O identificador de uma função deve ter o formato `module:function` e o de um método de classe `module:class.function`.

<CollapserGroup>
  <Collapser
    id="dumdbm-example"
    title="Usando dumbdbm"
  >
    Neste exemplo, você usa o módulo <DNT>**`dumbdbm`**</DNT> do Python e deseja instrumentar o tempo que levou para abrir um banco de dados e, em seguida, gravar esse banco de dados de volta em um arquivo. Neste caso você usaria:

    ```ini
    transaction_tracer.function_trace = dumbdbm:open
                                                   dumbdbm:_Database._commit
    ```
  </Collapser>
</CollapserGroup>

Para listar mais de um item, use um destes métodos:

* Uma linha: Separe cada item com um espaço.

* Várias linhas: siga a convenção de arquivo

  <DNT>
    **ini**
  </DNT>

  para recuar as linhas subsequentes.

Quando os dados são reportados para a função instrumentado, a métrica terá um nome no formato `Function/module:function` ou `Function/module:class.function`. No detalhamento do desempenho de uma transação, a categoria será exibida como `Function` e o segmento será `module:function` ou `module:class.function`. Para rastreamento lento da transação, apenas o nome do segmento aparece. Observe que onde uma função está realmente retornando um gerador, apenas o tempo gasto no retorno do gerador será registrado e não o consumo dos valores do gerador.

## Restrições na API de extensão de encapsulamento [#restrictions_on_wrapping]

Ao agrupar funções listando-as no arquivo de configuração do agente, você não pode designar métodos de classe dessa maneira quando o método for membro de uma classe que é implementada em código C por um módulo de extensão C. Isso ocorre porque não é possível modificar a tabela de métodos de um tipo implementado usando a API C do Python.

## Substituindo o nome da função relatada [#overriding_the_name]

Ao usar a configuração `transaction_tracer.function_trace` no arquivo de configuração do agente, o nome da função será usado no nome da métrica, sendo classificada como `Function`. Se for necessário substituir o nome da função que pode ser usado no nome da métrica ou classificá-la de forma diferente, um meio alternativo de definir o trace da função no arquivo de configuração poderá ser usado. O equivalente para:

```ini
transaction_tracer.function_trace = dumbdbm:open
                                               dumbdbm:_Database._commit
```

seria criar duas novas seções de configuração no arquivo de configuração do agente, uma para cada função a ser rastreada:

```ini
[function-trace:dumbdbm-1]
enabled = true
function = dumbdbm:open
name = dumbdbm:open
group = Function

[function-trace:dumbdbm-2]
enabled = true
function = dumbdbm:_Database._commit
name = dumbdbm:_Database._commit
group = Function
```

O nome da seção do arquivo `.ini` deve começar com `function-trace:`. O componente de nome que segue esse prefixo pode ser qualquer coisa, mas deve ser exclusivo em todas as seções trace de função no arquivo de configuração. Você pode substituir as configurações `group` e `name` para obter o nome da métrica desejado. A configuração `enabled` é padronizada como `false` e você deve alterá-la para `true` para ativar a função trace.

## Instrumento com a API [#function_decorators]

Para fins simples de instrumentação personalizada, o método do arquivo de configuração funciona bem. Para obter instrumentação mais precisa e personalizada e ajustes de comportamento do agente, use a [API do agente Python](/docs/agents/python-agent/api/python-agent-api-guide).
