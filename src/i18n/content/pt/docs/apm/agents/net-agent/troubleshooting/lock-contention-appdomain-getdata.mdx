---
title: Alta contenção de bloqueio AppDomain.GetData() (.NET framework)
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Instructions and information about reducing AppDomain.GetData() lock contention for impacted .NET Framework applications
freshnessValidatedDate: never
translationType: machine
---

## Problema

Quando o agente .NET é anexado ao aplicativo de altas taxas de transferência <DNT>**.NET Framework**</DNT> , alguns clientes relataram observar alta contenção de threads. Ao revisar os dumps do processo e o rastreamento de pilha, muitos threads podem ser bloqueados por chamadas para `AppDomain.GetData()`.

## Solução possível

Na [versão 9.7 do agente .NET](/docs/release-notes/agent-release-notes/net-release-notes), foi introduzida uma nova variável de ambiente que desativa o uso do armazenamento `AppDomain` pelo agente .NET:

```ini
NEW_RELIC_DISABLE_APPDOMAIN_CACHING=true
```

<Callout variant="caution">
  Embora essa variável de ambiente elimine a contenção de bloqueio de chamadas de agente para `AppDomain.GetData()`, a sobrecarga total do agente .NET aumenta quando essa variável de ambiente é habilitada. Em nossos testes, isso resultou em menos bloqueios, mas em taxas máximas de transferência de aplicação mais baixas com o agente .NET anexado a uma aplicação de teste.
</Callout>

Estamos extremamente interessados em comentários de clientes que enfrentam esse problema e que tentam essa nova opção de configuração. Se você tentar esta opção de configuração, crie um problema em nosso [repositório GitHub para .NET](https://github.com/newrelic/newrelic-dotnet-agent) descrevendo sua experiência.

## Causa

O agente .NET precisa de acesso às informações de assinatura de métodos para métodos do instrumento. Por padrão para o aplicativo .NET framework , o agente carrega essas informações de método por meio de reflexão e as armazena em cache no `AppDomain` para uso futuro. Pretende-se que esta seja uma otimização geral, mas vários clientes experimentaram uma alta contenção de bloqueio de thread em torno desse comportamento e acreditam que é a causa raiz da lentidão ou da não resposta dos serviços.

Depois de inspecionar o código-fonte da Microsoft, as chamadas para `AppDomain.GetData()` resultam de fato em um bloqueio global.

Como o agente .NET não usa nenhum esquema de cache de informações de método para o aplicativo .NET Core e nenhum cliente relatou problemas semelhantes de contenção de bloqueio de thread, decidimos expor uma variável de ambiente para fazer o agente funcionar da mesma maneira no .NET aplicativo framework .
