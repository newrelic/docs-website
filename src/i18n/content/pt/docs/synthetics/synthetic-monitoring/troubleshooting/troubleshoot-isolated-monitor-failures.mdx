---
title: Solucionar problemas de falhas isoladas do monitor
type: troubleshooting
tags:
  - Synthetics
  - Synthetic monitoring
  - Troubleshooting
metaDescription: New Relic synthetic monitors may sometimes fail from a single location. Identify issues specific to a particular location to help troubleshoot.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Seu monitor New Relic Synthetics relatou uma falha em um único local, mas o aplicativo parece estar instalado e funcionando, então você não consegue identificar o problema.

## Solução

Uma única falha no monitoramento sintético não é tão limitada quanto pode parecer. Representa três falhas consecutivas do mesmo monitor. Quando um monitor falha, o New Relic coloca imediatamente na fila duas verificações adicionais para o mesmo monitor e local. A New Relic relata uma falha somente quando todos os três trabalhos falham. (Apenas a terceira execução do monitor é visível na interface Sintético.)

As falhas não precisam ser do mesmo tipo de erro. Isto reforça ainda mais as limitações do falso positivo.

O monitor Sintético às vezes pode falhar em um único local quando o site parece estar funcionando corretamente em outros locais. Embora essas falhas sejam isoladas, ser capaz de identificar problemas específicos de um determinado local pode ser muito valioso.

Aqui estão algumas técnicas para diagnosticar possíveis problemas por trás de falhas isoladas do monitor.

<CollapserGroup>
  <Collapser
    id="network-path"
    title="Caminho de rede"
  >
    O monitor que falhou pode ter um caminho de rede diferente para o seu site em relação a outros locais de monitoramento sintético ou de locais que você está testando. Se houver um problema no local ou na rede entre o local e seu site, um único local poderá não retornar um resultado. Isso indica que alguns usuários em caminhos de rede semelhantes podem ter enfrentado problemas.

    Se você vir `Connect timed out` ou `Read timed out`, isso normalmente indica que o site estava indisponível ou demorou tanto para responder que o monitor não conseguiu recuperar nenhum dado. Isso geralmente indica um problema no caminho da rede.
  </Collapser>

  <Collapser
    id="timeouts"
    title="Tempos limite"
  >
    Pode haver solicitações que expiraram ou que estão faltando. Você pode ver mensagens de tempo limite, como

    ```
    TimeoutError: URL {YOUR_DOMAIN} was unable to finish all network requests before reaching the maximum time limit
    ```

    ou

    ```
    TimeoutError: Page load timed-out (unable to finish all network requests on time)
    ```

    Essas solicitações não puderam ser concluídas antes do tempo limite de carregamento da página ou do final do script.

    Para resolver o problema, tente detalhar o recurso para ver quando e onde ele responde mal. Alguns recursos podem retornar de forma intermitente e lenta.
  </Collapser>

  <Collapser
    id="page-load"
    title="Carregamento lento da página"
  >
    Se a página frequentemente não consegue carregar totalmente em 60 segundos e você estiver usando um monitor de browser simples, tente um script monitor de browser com e defina um [tempo limite de carregamento de página](/docs/synthetics/new-relic-synthetics/scripting-monitors/synthetics-scripted-browser-reference#options-manage-timeouts-pageLoadTimeout) configurável.
  </Collapser>
</CollapserGroup>
