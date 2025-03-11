---
title: 'Delayed::Job instrumentation'
tags:
  - Agents
  - Ruby agent
  - Background jobs
metaDescription: 'If jobs do not appear to be monitored in New Relic''s Delayed:Job library, review your Ruby agent''s log file.'
freshnessValidatedDate: never
translationType: machine
---

O agente Ruby possui instrumentação integrada para a biblioteca `Delayed::Job` . Nenhuma instrumentação adicional é necessária.

## Visualizando tarefas em segundo plano [#viewing]

Contanto que a gema ou plug-in do agente New Relic Ruby seja carregado antes do início do trabalhador `Delayed::Job` , todas as tarefas serão monitoradas com o mesmo nível de detalhe que as ações do controlador. Para visualizar as próprias ações:

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions**
   </DNT>

   .

2. Na [página](/docs/apm/applications-menu/monitoring/transactions-page)

   <DNT>
     [**Transactions**](/docs/apm/applications-menu/monitoring/transactions-page)
   </DNT>

   [do APM](/docs/apm/applications-menu/monitoring/transactions-page), selecione

   <DNT>
     **Other transactions**
   </DNT>

   .

## Adicionando atributo personalizado [#custom-attributes]

Se quiser adicionar um atributo personalizado às suas transações `Delayed::Job` , você pode escrever um plug-in `Delayed::Job` através de um gancho de ciclo de vida e adicionar esses atributos à transação para cada trabalho executado.

1. Crie um plug-in com a seguinte estrutura:

   ```ruby
   module NewRelicInstrumenter
     class DelayedJobPlugin < Delayed::Plugin
       callbacks do |lifecycle|
         lifecycle.around(:invoke_job) do |job, *args, &block|
           # Forward the call to the next callback in the callback chain
           ::NewRelic::Agent.add_custom_attributes(
             {
               # Any custom attributes go here -- from here you can access info
               # about the job like run_at, created_at, etc
               my_custom_attribute: "my_custom_attribute_value"
             }
           )
           block.call(job, *args)
         end
       end
     end
   end
   ```

2. Adicione o plug-in a `Delayed::Job` no inicializador do arquivo `config/initializers/delayed_job.rb` :

   ```ruby
   require "new_relic_instrumenter"

   Delayed::Worker.plugins << NewRelicInstrumenter::DelayedJobPlugin
   ```

## Resolução de problemas [#troubleshooting]

O agente Ruby depende da capacidade de identificar que está sendo executado em `Delayed::Job` para configurar corretamente a instrumentação. Para fazer isso, ele examina o nome do script (a variável `$0` em Ruby) para ver se termina com `delayed_job`.

Se você tiver renomeado o script usado para iniciar seus trabalhadores `delayed_job` para outro nome ou se tiver um script personalizado com um nome diferente, será necessário informar explicitamente ao agente que está usando `Delayed::Job` definindo o `NEW_RELIC_DISPATCHER` para `delayed_job` ao iniciar seus trabalhadores `Delayed::Job` . Por exemplo:

```bash
NEW_RELIC_DISPATCHER=delayed_job bundle exec ./script/my_custom_script
```

Se parecer que os jobs não estão sendo monitorados, revise o arquivo <DNT>**newrelic_agent.log**</DNT> gerado quando o trabalhador for inicializado. Deve indicar se o agente detecta `Delayed` e se comunica com o servidor. Se você não encontrar um log ou se ainda não conseguir determinar por que as tarefas não aparecem, obtenha suporte em [support.newrelic.com](https://support.newrelic.com "O link abre em uma nova janela").
