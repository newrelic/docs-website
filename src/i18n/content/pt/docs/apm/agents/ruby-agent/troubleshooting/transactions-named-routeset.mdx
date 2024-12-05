---
title: 'Transação rotulada `Middleware/Rack/ActionDispatch::Routing::RouteSet#call`'
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: 'Find out what to do if you see transactions named Middleware/Rack/ActionDispatch::Routing::RouteSet#call in your APM UI.'
freshnessValidatedDate: '2023-11-13T00:00:00.000Z'
translationType: machine
---

## Problema [#problem]

Você vê transações na interface do APM denominadas `Middleware/Rack/ActionDispatch::Routing::RouteSet#call`, mas não tem certeza do que são.

## Causa [#cause]

Transação com o nome `Middleware/Rack/ActionDispatch::Routing::RouteSet#call` representa uma rota em seu aplicativo Rails que não foi instrumentada. Como o middleware Rails é instrumentado, a New Relic pode capturar o tempo gasto na transação, mas não pode fornecer detalhes além disso.

Existem diversas situações que podem levar à transação denominada `Middleware/Rack/ActionDispatch::Routing::RouteSet#call`. Fornecemos duas soluções para as causas mais comuns desse tipo de transação.

## Solução [#solution]

<Tabs>
  <TabsBar>
    <TabsBarItem id="route-gem">
      Adicione instrumentação personalizada a uma jóia não instrumentada
    </TabsBarItem>

    <TabsBarItem id="route-controller">
      Instrumento seu controlador diretamente
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="route-gem">
      Se uma rota em seu aplicativo passar por um middleware instrumentado para uma gema não instrumentada, será necessário adicionar instrumentação personalizada a essa gema para ver dados mais específicos sobre a transação. Para adicionar instrumentação personalizada, recomendamos a leitura de nosso [documento de instrumentação personalizada Ruby](/docs/agents/ruby-agent/installation-configuration/ruby-custom-instrumentation).

      Adicionar instrumentação customizada ao seu aplicativo é a melhor maneira de obter mais detalhes sobre essas transações.
    </TabsPageItem>

    <TabsPageItem id="route-controller">
      O agente Ruby instrumento controladores inserindo instrumentação em `ActionController::Base`. Se uma rota passar por um controlador que não herda `ActionController::Base`, entretanto, esse controlador precisará de instrumentação. Instrumente seu controlador diretamente adicionando isto à sua classe de controlador:

      ```ruby
      include NewRelic::Agent::Instrumentation::ControllerInstrumentation
      ```
    </TabsPageItem>
  </TabsPages>
</Tabs>
