---
title: Mudanças de rota ausentes com o agente SPA
type: troubleshooting
tags:
  - Browser
  - Single page app monitoring
  - Troubleshooting
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você está usando o agente Pro + SPA, mas não está vendo toda a interação do browser `route change` esperada.

Estamos cientes de que isso pode ser frustrante. Nosso objetivo contínuo é melhorar a funcionalidade do recurso SPA, tornando-o mais simples e confiável, começando pelos métodos que utilizamos para detectar e capturar alterações de rota.

## Solução

### Soluções de curto prazo

Para garantir que todas as alterações de rota sejam capturadas, você pode usar nossa [API de interação () do SPA](/docs/browser/new-relic-browser/browser-agent-spa-api). O uso da API de interação categorizará o evento `BrowserInteraction` (no atributo `category` ) como `custom` em vez de uma alteração `route` se nenhuma alteração de rota for de fato detectada.

Se sua framework estiver expondo eventos que representam a atividade do roteador, você poderá usar instrumentação personalizada nesses eventos. Aqui está um exemplo usando nossa API com o roteador Angular:

```js
router.events.subscribe((event: Event) => {
  if (event instanceof NavigationStart) {
    let i = newrelic.interaction();
    i.setName(event.url);
    i.save();
  }
});
```

Neste exemplo, o objeto `router` é uma instância do roteador Angular (do módulo `@angular/router` ). A chamada `setName` define o atributo name do evento `BrowserInteraction` para o novo URL e a chamada `save` garante que a interação seja capturada. Você precisará adaptar isso às necessidades da framework da sua própria aplicação.

Se sua framework não fornecer eventos de roteamento, você poderá adicionar este código no manipulador de eventos do evento de interação original, como `click`):

```js
myButton.addEventListener('click', function() {
  let i = newrelic.interaction();
  i.setName('new URL');
  i.save();
});
```

Recomendação: Se você não tem acesso ao evento do roteador nem ao manipulador de eventos de interação, implemente isso o mais rápido possível em um código que você sabe que é o resultado de uma interação do usuário.

Uma alternativa ao uso da API SPA é capturar rotas como evento `PageAction` . [O evento`PageAction` ](/docs/browser/new-relic-browser/browser-agent-spa-api/add-page-action)pode ser usado para capturar quaisquer dados personalizados. Recomendamos esta opção como alternativa caso o uso da API de interação SPA não funcione conforme o esperado ou para separar completamente a instrumentação personalizada do evento `BrowserInteraction` integrado.

Ambas as soluções podem garantir que esses eventos sejam capturados, seja como um evento `BrowserInteraction` ou como um evento `PageAction` . No entanto, eles não abordarão a gravação da duração correta e as chamadas AJAX relacionadas.

### Apoiar

Se esta solução não resolver o seu problema, registre um ticket de suporte e tenha as seguintes informações disponíveis:

* Para situações em que você vê a maioria das alterações de rota, mas nenhuma para uma alteração de rota específica esperada, tente avaliar a diferença na implementação do código para essa rota específica. Há algo fora do padrão ou exclusivo nessa rota que você poderia fornecer à nossa equipe de suporte?
* Documente a estrutura e qualquer biblioteca que possa ser de interesse. Se este for um problema novo, alguma coisa mudou em seu ambiente que fez com que essas interações repentinamente não fossem rastreadas?
* Observe a versão do agente browser que você está usando. Se você estiver com mais do que alguns lançamentos atrasados, recomendamos que você atualize para a versão mais recente, pois podemos já ter resolvido um problema semelhante.
* Esteja ciente de que devido à complexidade do diagnóstico desses problemas, a equipe provavelmente precisará de acesso a um ambiente e código que demonstre o problema para testes e pesquisas.

## Causa

O agente browser tenta ser independente framework , bem como oferecer suporte às práticas de codificação recomendadas. No entanto, muitas vezes há casos extremos que serão perdidos e que farão com que você não colete as alterações de rota esperadas. A implementação é baseada no instrumento mais comum API do browser assíncrono. Há casos em que um aplicativo web utiliza alguma API assíncrona ou utiliza código personalizado ou de terceiros que não instrumentamos, e isso pode resultar em alterações de rota imprecisas ou perdidas.
