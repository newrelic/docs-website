---
title: Circuit breaker para instrumentação Java personalizada
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: New Relic's Java agent 3.16.1 or higher includes a circuit breaker that "trips" to protect apps from the effects of over-instrumentation.
freshnessValidatedDate: never
translationType: machine
---

O agente Java da New Relic inclui um circuit breaker que protege o aplicativo dos efeitos do excesso de instrumentação. Quando o circuit breaker detecta sintomas precoces de exaustão de memória, ele automaticamente “desarma” e limita a instrumentação. O agente para de coletar dados de transação até que o circuit breaker seja reinicializado automaticamente após decidir que a redefinição é segura.

O circuit breaker leva em consideração dois parâmetros ([uso do heap e tempo gasto na coleta de lixo](#cpu-thresholds)) para determinar quando deve desarmar. Os valores padrão para esses limites são porcentagens:

* Limite de memória: 20%
* Limite de CPU para coleta de lixo: 10%

Quando a porcentagem de memória heap livre for menor que `memory_threshold` e o tempo de CPU gasto na coleta de lixo for maior que `gc_cpu_threshold`, o circuit breaker . Quando o circuit breaker , o agente para de coletar dados de transação. as taxas de transferência informadas na interface <InlinePopover type="apm"/>serão subnotificadas e você não verá nenhum vestígio da transação por um período de tempo.

## Razões para esgotamento da memória [#when]

O circuit breaker quando detecta sinais de esgotamento da memória. Isso pode acontecer por vários motivos:

<CollapserGroup>
  <Collapser
    id="over-instrumented"
    title="Sua aplicação está superinstrumentada."
  >
    Seu aplicativo mostra sinais precoces de esgotamento de memória devido à instrumentação personalizada recentemente implantada (usando XML, chamada de API, anotações trace ou o [editor de instrumentação personalizada](/docs/apm/applications-menu/features/custom-instrumentation-editor-quickly-customize-your-java-instrumentation) do agente Java) ou devido à instrumentação integrada.
  </Collapser>

  <Collapser
    id="load-spike"
    title="Seu aplicativo sofreu um pico de carga."
  >
    Seu aplicativo sofreu um pico de carga e mostrou sinais de esgotamento de memória. Nesse caso, o agente não está contribuindo para o pico, mas o circuit breaker pode ajudar a conservar recursos e garantir que o agente não contribua para `OutOfMemoryErrors`.
  </Collapser>

  <Collapser
    id="memory-limit"
    title="Seu aplicativo é executado próximo ao limite de memória por design."
  >
    Seu aplicativo está ajustado para ser executado próximo ao limite de memória.
  </Collapser>
</CollapserGroup>

## Resolução de problemas

Se o circuit breaker , tente estas dicas de resolução de problemas.

<CollapserGroup>
  <Collapser
    id="disable"
    title="Identifique e desabilite a instrumentação."
  >
    Use a tabela <DNT>**Top methods by call count**</DNT> na página do circuit breaker <DNT>**Events**</DNT> para encontrar métodos que possam estar superinstrumentados. Identifique e desative a instrumentação personalizada.

    Em geral, o uso de memória do agente é proporcional à contagem de chamadas de um método. A instrumentação personalizada deve ser usada em métodos que são chamados no máximo dez vezes por transação. Se a instrumentação estiver integrada ao agente, revise a documentação [de instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) da New Relic para Java. Se precisar de ajuda adicional, obtenha suporte em [support.newrelic.com](https://support.newrelic.com).
  </Collapser>

  <Collapser
    id="java-heap"
    title="Aumente o tamanho máximo de heap Java."
  >
    Revise cuidadosamente o histórico de uso de memória do seu aplicativo e determine se é necessário aumentar o tamanho máximo de heap Java.
  </Collapser>

  <Collapser
    id="disable"
    title="Desative o circuit breaker."
  >
    Se o seu aplicativo estiver se comportando conforme o esperado, você pode desabilitar o circuit breaker. Para desativar o circuit breaker, adicione `enabled: false` na seção `circuitbreaker` no arquivo de configuração `newrelic.yml`:

    ```yml
    common: &default_settings
      circuitbreaker:
        enabled: false
    ```
  </Collapser>

  <Collapser
    id="cpu-thresholds"
    title="Ajuste o limite de tempo da CPU de memória e coleta de lixo."
  >
    Para detectar sinais precoces de esgotamento da memória, o circuit breaker utiliza uma fórmula com duas variáveis: `memory_threshold` e `gc_cpu_threshold`. Quando a porcentagem de memória heap livre for menor que `memory_threshold` e o tempo de CPU gasto na coleta de lixo for maior que `gc_cpu_threshold`, o circuit breaker . Ajuste esses valores conforme necessário, com base no desempenho operacional e no comportamento do seu aplicativo.

    Para obter detalhes de configuração, consulte `memory_threshold` e `gc_cpu_threshold`.
  </Collapser>
</CollapserGroup>
