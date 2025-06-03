---
title: Hora de início da navegação desconhecida
tags:
  - Browser
  - Browser monitoring
  - Page load timing resources
metaDescription: How New Relic's browser monitoring handles navigation start time when the navigation timing API is unavailable.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Para o browser agente versão 1220 e superior, [o uso de cookies de sessão foi descontinuado](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1220/#removed-3rd-party-cookies), portanto, essas informações só serão relevantes se você estiver usando o browser agente versão 1216 e inferior.
</Callout>

Se um browser não usar a [API de tempo de navegação](/docs/browser/new-relic-browser/browser-agent-apis/navigation-timing-api) para o tempo de carregamento da página, o browser usará um cookie para determinar o horário de início da navegação. Se um usuário navegar de um site sem tempo de carregamento de página para um site <DNT>**with**</DNT> com tempo de carregamento de página (por exemplo, para a primeira página do site habilitado para tempo de carregamento de página), surgirão considerações especiais sobre o horário de início da navegação.

## Estimativa de rede [#network]

O arquivo utilitário JavaScript de tempo de carregamento da página cria um cookie com o horário de início da navegação quando um usuário sai de uma página (ligando um evento, `beforeunload` ou `pagehide`, dependendo do browser). No entanto, ao sair de um site sem o tempo de carregamento da página ativado, o código JavaScript não estará presente e o cookie não será criado. Então, quando o usuário acessa a primeira página de um site, o horário de início da navegação não pode ser determinado, pois não há cookie.

Neste caso o agente browser possui todos os dados (tempo de fila, tempo de aplicação, conteúdo DOM e tempo de renderização) <DNT>**except**</DNT> tempo de rede. A hora de início da navegação é necessária para calcular a hora da rede. Em vez de descartar os dados, o recurso de tempo de carregamento da página estima o tempo da rede com base nas médias acumuladas recentemente para seu aplicativo, regionalmente. Dessa forma, o recurso de tempo de carregamento da página fornece uma medição mais precisa das taxas de transferência e o restante dos dados é retido.

Isso é especialmente importante para sites com alta taxa de rejeição (quando o usuário visita apenas uma página). Quanto mais visitantes você tiver de diferentes regiões, mais precisa será a estimativa da rede.

## Estimativa de rede indisponível [#network-na]

Se uma estimativa de rede não estiver disponível para seu aplicativo e para a região de origem da ocorrência, o processo de tempo de carregamento da página será revertido para uma estimativa de rede em todos os aplicativos de relatórios da região. Caso contrário, os dados serão descartados.

<DNT>**Note:**</DNT> Para browsers que possuem a API Navigation Timing, isso não é um problema, pois o horário de início da navegação pode ser determinado sem o uso de cookie.
