---
title: Resque instrumentação
tags:
  - Agents
  - Ruby agent
  - Background jobs
metaDescription: Additional information about configuring the New Relic Ruby instrumentation of Resque jobs.
freshnessValidatedDate: never
translationType: machine
---

Além da própria aplicação web, o agente New Relic Ruby também pode instrumentar seus trabalhos Resque.

## Capturando argumentos de trabalho [#capturing_job_parameters]

Começando com o agente Ruby versão 3.6.9, opcionalmente, você pode configurar o agente Ruby para capturar argumentos de trabalho Resque no rastreamento da transação e rastrear erros. Isto pode ser especialmente útil na tentativa de reproduzir trabalhos com falha. Por padrão, esse recurso fica desativado caso os argumentos do seu trabalho contenham informações confidenciais. Para ativar esse recurso, edite seu <DNT>**newrelic.yml**</DNT> conforme apropriado para a versão do seu agente:

* Para newrelic_rpm 3.12.0 ou superior: `attributes.include: job.resque.args.*`
* Para newrelic_rpm 3.6.9 a 3.11.X: `resque.capture_params: true`

Esse recurso é diferente da configuração genérica de nível superior `capture_params` , que controla se os parâmetros da solicitação HTTP são capturados no rastreamento da transação e rastreia erros para solicitações da Web. Você pode definir essas duas configurações de forma independente.

## Resque versões 1.23.1 ou superior [#resque_1_23_1_plus]

Se você estiver executando o Resque 1.23.1 ou superior, não precisará fazer nenhuma alteração no código fora dos procedimentos normais de instalação do agente para que a instrumentação do Resque da New Relic funcione.

<DNT>**Exception:**</DNT> Se você tiver chamadas restantes para métodos `NewRelic::Agent` dos ganchos `before_first_fork`, `before_fork` ou `after_fork` do Resque de quando você estava executando uma versão mais antiga do Resque, certifique-se de <DNT>**remove**</DNT> essas chamadas após atualizar para o Resque 1.23 .1 ou superior.

## Modos alternativos de bifurcação [#resque_plugins]

As gemas [resque-multi-job-forks](https://github.com/stulentsev/resque-multi-job-forks) ou [resque-jobs-per-fork](https://github.com/samgranieri/resque-jobs-per-fork) alteram o comportamento de bifurcação do Resque para que ele não bifurque para cada trabalho individual, mas sim bifurque uma vez por lote de trabalhos. Da mesma forma, você pode definir a variável de ambiente `FORK_PER_JOB` como `false` para desativar completamente a bifurcação no Resque.

Se você usar qualquer um desses modos de bifurcação alternativos em seu aplicativo, certifique-se de estar executando o agente Ruby <DNT>**version 3.9.7 or higher**</DNT>. Versões anteriores do agente Ruby não funcionam corretamente com esses modos alternativos de bifurcação. Se você estiver atualizando para a versão 3.9.7 ou superior, certifique-se de remover quaisquer chamadas diretas para métodos `NewRelic::Agent` como `manual_start` ou `after_fork` que você possa ter usado anteriormente para fazer o agente trabalhar nesses ambientes .

## Versões antigas do Resque (&lt;1.23.1) [#old_resque]

É possível usar o agente Ruby da New Relic com versões do Resque anteriores a 1.23.1. No entanto, a New Relic recomenda que você atualize para o Resque 1.23.1 ou superior para obter melhores resultados.

Muitos aplicativos usam os ganchos expostos pelo Resque (`before_fork`, `after_fork`, etc.) para injetar código personalizado em pontos críticos durante a vida útil dos trabalhos do Resque. O agente New Relic Ruby também deve usar esses ganchos para poder posicionar sua instrumentação.

Versões do Resque anteriores a 1.23.1 não permitem que ganchos sejam definidos múltiplas vezes; a última definição terá precedência. Se você não puder atualizar para uma versão do Resque >= 1.23.1 (que permite que os ganchos sejam definidos várias vezes sem sobrescrever uns aos outros), você poderá modificar seus ganchos do Resque personalizados adicionando o código New Relic necessário. Aqui está um exemplo.

<DNT>
  **Example: Modifying custom Resque hooks**
</DNT>

Você pode omitir definições para quaisquer ganchos para os quais não tenha código personalizado. Eles serão instalados automaticamente pelo agente neste caso.

```ruby
Resque.before_first_fork do
  # ... your custom hook code ...
  NewRelic::Agent.manual_start(:dispatcher => :resque,
                               :sync_startup => true,
                               :start_channel_listener => true)
end
    
Resque.before_fork do |job|
  # ... your custom hook code ...
  NewRelic::Agent.register_report_channel(job.object_id)
end
    
Resque.after_fork do |job|
  # ... your custom hook code ...
  NewRelic::Agent.after_fork(:report_to_channel => job.object_id,
                             :report_instance_busy => false)
end
```

## Trabalhos de impasse [#deadlocks]

Alguns clientes (particularmente aqueles com taxas de transferência de trabalho muito altas) relataram impasses intermitentes em seus processos de trabalho Resque com o agente Ruby habilitado. Esses impasses são devidos a uma interação incorreta entre o thread de segundo plano que o agente Ruby usa para enviar dados aos servidores New Relic e ao comportamento de bifurcação do Resque.

Use uma destas opções para resolver estes problemas:

* Desative o comportamento de bifurcação do Resque definindo a variável de ambiente `FORK_PER_JOB` como `false` ao gerar processos do Resque.
* Use a biblioteca `resolv-replace` da biblioteca padrão do Ruby para substituir o código de resolução DNS nativo do Ruby por uma versão Ruby pura.

O agente Ruby usa um thread de segundo plano no processo mestre Resque para enviar dados ao coletor New Relic. Em alguns ambientes, este thread irá adquirir um bloqueio nativo durante a resolução do DNS (ao resolver o nome do host do coletor New Relic).

Se esse bloqueio nativo for mantido pelo thread de segundo plano enquanto o thread principal do processo mestre Resque chama fork para criar um processo filho, ele ainda será marcado como retido no processo filho bifurcado. No entanto, como `fork` copia apenas o thread de chamada, o thread de segundo plano que continha o bloqueio nativo não existirá no processo filho e, portanto, o bloqueio nativo nunca será liberado. Se o processo filho tentar fazer qualquer resolução de DNS, ele tentará adquirir o mesmo bloqueio e deadlock nativos. Para evitar esse [problema no Github](https://github.com/resque/resque/issues/1101), use `resolv-replace` em vez do caminho de resolução DNS padrão do Ruby.
