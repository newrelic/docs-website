---
title: Medições de VM Ruby
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: What Ruby VM statistics can be tracked by the New Relic Ruby agent.
freshnessValidatedDate: never
translationType: machine
---

Insights sobre o comportamento da máquina virtual Ruby podem ajudá-lo a entender e melhorar o desempenho do seu aplicativo como um todo. A New Relic reúne algumas métricas importantes que podem ajudá-lo a ter uma ideia melhor do que sua VM Ruby está fazendo. Isto também pode ajudá-lo a avaliar o impacto dos ajustes na configuração da VM para melhorar o desempenho.

## Requerimentos mínimos [#minimum_requirements]

As coleções métricas da Ruby VM estão disponíveis nas versões 3.8.0 ou superior do agente Ruby (embora as versões anteriores suportassem a coleta de algumas medidas básicas de coleta de lixo).

Além disso, para usar esse recurso, você precisará estar em uma versão Ruby compatível com CRuby <DNT>**1.9.2 or higher**</DNT>. As seções abaixo sobre cada medição individual explicam quais versões Ruby suportam a coleta de cada medição.

Por último, para capturar os tempos do GC, você precisará [habilitar o GC::profiler](/docs/ruby/garbage-collection) em seu aplicativo.

## Visualizando dados da VM Ruby [#viewing_data]

Para visualizar dados sobre o desempenho da sua VM Ruby. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM> (select an app) > Monitoring > Ruby VMs**</DNT>.

## Detalhes de medição [#measurement_details]

A maioria dessas métricas ajuda a entender o comportamento do coletor de lixo do Ruby.

Nem todas as métricas podem ser coletadas em todas as versões do Ruby. Em geral, você obterá os dados mais completos se estiver usando a versão mais recente do CRuby. A lista abaixo explica exatamente o que está disponível onde:

<CollapserGroup>
  <Collapser
    id="object-allocations"
    title="Alocações de objetos"
  >
    <DNT>**Available on**</DNT>: CRuby 2.0+

    O número de objetos Ruby alocados em seus processos. Na interface, essa medição é normalizada pelo número de solicitações, para que você tenha uma noção de quantos objetos são alocados por solicitação.

    Este é um número importante a ser observado, já que a frequência de alocação de objetos é um dos maiores impulsionadores da frequência com que o coletor de lixo do Ruby deve ser executado.

    No CRuby, esse valor é derivado de `GC.stat[:total_allocated_object]`.
  </Collapser>

  <Collapser
    id="time-in-garbage-collection"
    title="Tempo na coleta de lixo"
  >
    <DNT>**Available on**</DNT>: CRuby 1.9.2+, Rubinius 2.x (veja nota abaixo sobre suporte JRuby)

    A quantidade de tempo gasto na coleta de lixo (fases de marcação e varredura) em seus processos Ruby.

    Na verdade, o agente Ruby mede esse valor de duas maneiras diferentes: o tempo de coleta de lixo incorrido no meio do processamento da solicitação e o tempo total de coleta de lixo. O tempo de coleta de lixo que ocorre no meio do processamento da solicitação é apresentado como uma faixa no gráfico de visão geral principal e nos gráficos de detalhamento das transações individuais. O tempo total de GC como uma porcentagem do tempo transcorrido é mostrado na guia Ruby VM.

    Esta medida é derivada de `GC::Profiler.total_time`.

    <DNT>**Note**</DNT>: você deve ativar `GC::Profiler` para obter esta medição. Para mais informações, veja [instrumentação de GC](/docs/ruby/garbage-collection).

    <DNT>**JRuby note**</DNT>: Devido ao que parece ser [um bug](https://github.com/jruby/jruby/issues/1620 "O link abre em uma nova janela") no JRuby ou em certas versões da JVM, os tempos de GC podem estar errados por um fator de 1000 no JRuby. Por esse motivo, atualmente não recomendamos ativar `GC::Profiler` no JRuby.
  </Collapser>

  <Collapser
    id="frequency-of-garbage-collector-runs"
    title="Frequência de execuções do coletor de lixo"
  >
    <DNT>**Available on**</DNT>: CRuby 1.9.2+, JRuby 1.7+, Rubinius 2.x

    Com que frequência o coletor de lixo precisa interromper o processo Ruby para ser executado? No CRuby 2.1+, isso será segmentado em execuções de GC principais e secundárias. Este número é apresentado na interface como o número de solicitações processadas por execução do GC.

    Dependendo da versão do Ruby em uso, esse valor pode ser derivado de `GC.count` ou de `GC.stat[:minor_gc_count]` e `GC.stat[:major_gc_count]`.
  </Collapser>

  <Collapser
    id="size-of-the-ruby-heap"
    title="Tamanho do heap Ruby"
  >
    <DNT>**Available on**</DNT>: CRuby 1.9.2+

    O interpretador Ruby armazena objetos em um _heap_, com cada objeto ocupando um único _slot de heap_. À medida que os slots no heap são preenchidos com objetos, o heap será expandido pela VM Ruby conforme necessário.

    O agente Ruby mede periodicamente o número de objetos ativos no heap e o número de slots de heap desocupados.

    De modo geral, quanto mais objetos houver no heap, mais tempo levará cada execução do GC (já que potencialmente todos os objetos no heap devem ser examinados). Mais objetos no heap também se correlacionam com maior uso de memória para seu aplicativo.

    Este valor é derivado de `GC.stat[:heap_live_slot]` ou `GC.stat[:heap_live_num]` e `GC.stat[:heap_free_slot]` ou `GC.stat[:heap_free_num]`.
  </Collapser>

  <Collapser
    id="memory-usage"
    title="Uso de memória"
  >
    <DNT>**Available on**</DNT>: Qualquer versão Ruby

    Esta medida mostra o uso de memória (tamanho do conjunto residente) dos seus processos Ruby, apresentado como o tamanho médio por instância (processo). Manter o uso de memória sob controle é uma consideração importante ao ajustar as configurações da VM Ruby. Se ficar muito grande, você poderá fazer com que a máquina host inicie a paginação no disco ou esbarre nos limites de memória impostos pelo software.

    Em hosts Linux, isso é derivado do campo `VmRSS` de `/proc/PID/status`.
  </Collapser>

  <Collapser
    id="method-cache-invalidation-rate"
    title="Taxa de invalidação de cache de método"
  >
    <DNT>**Available on**</DNT>: CRuby 2.1+

    Cada vez que um método é invocado em um objeto, Ruby deve localizar a implementação desse método pesquisando a cadeia ancestral do objeto. Como essas pesquisas são caras, a VM Ruby armazenará em cache os resultados dessas pesquisas.

    Nas versões mais antigas do CRuby (anteriores à 2.0), havia um único cache de método global e havia uma variedade de [operações](https://github.com/charliesome/charlie.bz/blob/master/posts/things-that-clear-rubys-method-cache.md) que poderiam invalidar todo o cache.

    No CRuby 2.1 ou superior, o cache global foi dividido em um conjunto de caches menores, por classe, para que as alterações que invalidam o cache em uma classe não eliminem entradas de cache para outras classes não relacionadas.

    Existem, no entanto, ainda algumas operações que farão com que todos os caches de métodos sejam invalidados. O agente Ruby medirá a frequência com que essas invalidações acontecem e reportará essa medição normalizada em relação ao número de solicitações, para lhe dar uma ideia de quantas vezes por solicitação todos os caches de método são invalidados.

    Para obter mais informações, consulte esta [postagem do blog](http://tmm1.net/ruby21-method-cache/ "O link abre em uma nova janela") de Aman Gupta.

    Este valor é derivado de `RubyVM.stat[:global_method_state]`.
  </Collapser>

  <Collapser
    id="constant-cache-invalidation-rate"
    title="Taxa constante de invalidação de cache"
  >
    <DNT>**Available on**</DNT>: CRuby 2.1+

    Ruby armazena em cache as localizações das constantes de uma maneira semelhante ao comportamento de armazenamento em cache do método descrito acima. O agente Ruby também pode medir o número de vezes que o cache da constante global é invalidado e reportar isso como um número médio de invalidações por solicitação.

    Este valor é derivado de `RubyVM.stat[:global_constant_state]`.
  </Collapser>

  <Collapser
    id="thread-count"
    title="Contagem de fios"
  >
    <DNT>**Available on**</DNT>: CRuby 1.9.2+, JRuby 1.7+, Rubinius 2.x

    O agente Ruby pode monitorar o número de threads em seus processos Ruby. Se você estiver usando um servidor web multithread, isso pode ser usado para confirmar se o seu pool de threads tem realmente o tamanho que você configurou. Ele também pode destacar se há um vazamento de thread (onde você está gerando threads que nunca são destruídos).
  </Collapser>
</CollapserGroup>

## Processos em segundo plano [#background_processes]

Por padrão, os dados de todos os processos que relatam um determinado nome de aplicativo no New Relic serão combinados na página <DNT>**Ruby VM**</DNT> da interface do usuário. Isso significa que se você tiver processos da Web e em segundo plano (como Resque, Sidekiq, DelayedJob etc.) reportando-se ao mesmo aplicativo New Relic, os dados poderão ser confusos.

Existem duas maneiras de contornar esse problema:

1. Coloque seus processos da Web e em segundo plano em aplicativos separados no New Relic, definindo a configuração `app_name` ou a variável de ambiente `NEW_RELIC_APP_NAME` .
2. Desative a coleta de métricas Ruby VM em seus processos em segundo plano, definindo `disable_vm_sampler: true` em seu arquivo de configuração ou definindo `NEW_RELIC_DISABLE_VM_SAMPLER=1` no ambiente de seu aplicativo.

## Recursos adicionais de documentação

Recursos adicionais de documentação incluem:

* A [página Resumo do APM](/docs/applications-menu/applications-overview) discute recursos e detalhes de detalhamento quando na interface.
* A [página de transação](/docs/apm/applications-menu/monitoring/transactions-page) mostra um resumo do desempenho do seu aplicativo.
* O recurso [de configuração do agente Ruby](/docs/ruby/ruby-agent-configuration) contém procedimentos de atualização e valores de arquivo de configuração, incluindo geral, proxy, rastreamento de transação e coletor de erros.
