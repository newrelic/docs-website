---
title: Monitoramento de Mobile iOS New Relic com distributed tracing
metaDescription: This page describes how to set up iOS distributed tracing.
freshnessValidatedDate: never
translationType: machine
---

Nosso agente iOS oferece suporte distributed tracing. Isso permite que você veja como a atividade do seu aplicativo móvel se conecta aos serviços relacionados.

Assista a este pequeno vídeo (aprox. 2:15 minutos) para aprender como:

* Encontre dados distributed tracing móveis no New Relic.
* Filtre por padrão e atributo personalizado.

<Video
  id="tkAxeE5cT2Q"
  type="youtube"
/>

## Requisitos [#requirements]

Para usar distributed tracing, você precisa do agente iOS versão 7.3.0 ou superior. Recomendamos que você use o agente mais recente.

## Como configurar distributed tracing [#setup]

Para agentes móveis que suportam esse recurso, ele está habilitado por padrão.

Se você preferir desativar distributed tracing, consulte [Sinalizador de recurso do iOS](/docs/mobile-monitoring/new-relic-mobile-ios/api-guides/ios-agent-configuration-feature-flags/#dt).

## Habilitar rastreamento infinito [#infinite-tracing]

Se seus aplicativos móveis tiverem alguns serviços downstream que usam nosso tail-based distributed tracing chamado [Infinite Tracing](/docs/distributed-tracing/infinite-tracing/introduction-infinite-tracing), você deverá ativar esse recurso para seus aplicativos móveis. Isso garante que seu intervalo raiz (o aplicativo móvel inicial) seja incluído no restante dos intervalos rastreados pelo Infinite Tracing.

Para configurar isso, consulte as [etapas do Rastreamento Infinito](/docs/distributed-tracing/infinite-tracing/set-trace-observer) para criar um observador de rastreamento e selecionar quais aplicativos móveis (fontes de dados) devem relatar períodos.

## Encontre dados [#find-data]

Os spans móveis aparecem em qualquer [interface distributed tracing do New Relic](/docs/understand-dependencies/distributed-tracing/ui-data/additional-distributed-tracing-features-new-relic-one/) onde esses spans fazem parte de um trace.

Aqui estão algumas dicas para encontrar e consultar dados:

* Você pode encontrar rastreamento originado pelo usuário final em qualquer [interface distributed tracing do New Relic](/docs/understand-dependencies/distributed-tracing/ui-data/additional-distributed-tracing-features-new-relic-one).

* Na interface distributed tracing , os intervalos do usuário final são indicados com o

  <img
    title="New Relic distributed tracing mobile span icon"
    alt="New Relic distributed tracing mobile span icon"
    src="/images/mobile_icon_icon.webp"
    style={{height: "30px", width: "30px"}}
  />

  ícone.

* Para ver o atributo de um span, selecione [um span na interface](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#span-details).

* Os spans são relatados como [dados de span](/attribute-dictionary/?event=Span) e podem ser [consultados no New Relic](/docs/using-new-relic/data/understand-data/query-new-relic-data).

* Dicas de consulta:

  * Consulta por nome, definindo `mobileApp.name` como o nome do aplicativo móvel.
  * Consulta para rastreamento contendo pelo menos um intervalo de aplicativo móvel com `mobileApp.name is not null`.
  * Consulta para rastreamento contendo pelo menos um aplicativo backend com `appName is not null`.
  * Consulta para rastreamento contendo períodos móveis e backend , combinando as duas condições anteriores.

## Resolução de problemas [#troubleshooting]

Se você não vir intervalos de usuário final ou estiver tendo outros problemas distributed tracing , consulte [resolução de problemas](/docs/apm/distributed-tracing/troubleshooting/troubleshooting-missing-trace-data).
