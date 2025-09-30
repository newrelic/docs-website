---
title: Guia para melhorar o desempenho de carregamento da página
tags:
  - Observability maturity
  - Customer experience
  - Digital customer experience
  - Implementation guide
  - Core web vitals
  - Page load
  - Page render
metaDescription: Guide on how to improve page load and render metrics.
freshnessValidatedDate: never
translationType: machine
---

A medição do desempenho do carregamento da página continua a evoluir. Para melhorar o desempenho geral e a experiência do utilizador, ajuda a compreender as diferentes métricas e como se relacionam entre si.

<img
  title="Page Load and Render Timings"
  alt="Page Load and Render Timings"
  src="/images/cx_diagram_page_load_render_timings.webp"
/>

Antes de seguir as orientações abaixo, restrinja seu escopo às páginas específicas que você está tentando melhorar. Para obter o máximo impacto, concentre-se em páginas que são acessadas com frequência, mas que apresentam uma pontuação inferior à aceita para o 75º percentil do usuário.

## KPI de carregamento de página

Como melhorar o tempo até o primeiro byte (TTFB):

O tempo até o primeiro byte mede o tempo desde o início da navegação (um usuário clicando em um link) até o browser receber o primeiro byte da resposta do servidor. Se o usuário no percentil 75 estiver experimentando um TTFB superior a 0,5s para uma ou mais de suas páginas, você poderá dividir ainda mais os tempos consultando o seguinte atributo em [PageView](/attribute-dictionary/?dataSource=Browser+agent&event=PageView):

* `backendDuration`
* `connectionSetupDuration`
* `dnsLookupDuration`
* `networkDuration`

Muitas vezes, a lentidão antes da renderização é causada por lentidão no backend, seja da API de terceiros ou do aplicativo backend .

O monitoramento sintético para API de terceiros ajuda as equipes de operações e desenvolvimento a entender quando a causa raiz está fora de seu controle. Mesmo que você não possa controlar o código, você pode influenciar o resultado compartilhando os resultados do Sintético com terceiros para ajudá-los a entender o que seus clientes estão vivenciando.

Se o aplicativo backend pertencer a você ou sua equipe, você poderá usar <InlinePopover type="apm"/>agente, Pixie ou OpenTelemetry para entender e gerenciar o desempenho. Para facilitar a comunicação entre equipes, recomendamos a implementação de limites de gerenciamento a nível de serviço.

## Mudança cumulativa de layout (CLS)

A mudança cumulativa de layout é uma pontuação que indica quanto o conteúdo muda depois de já ter sido carregado. Dicas e truques gerais para melhorar o CLS:

* Especifique dimensões para folhas de estilo e deixe o CSS padrão do browser controlar a proporção.
* Reserve espaço estaticamente para espaços de anúncios.
* Evite anúncios próximos ao topo da janela de visualização.
* Evite inserir novo conteúdo acima do conteúdo existente.
* Pré-calcule espaço suficiente para incorporações.

Recursos adicionais:

* [A abordagem do Google para otimização CLS](https://web.dev/optimize-cls/).
* [Lighthouse](https://developers.google.com/web/tools/lighthouse) é uma ferramenta do Google que executa um teste sintético em uma página específica e fornece uma lista de recomendações que inclui como otimizar o CLS.

## Pintura com maior conteúdo (LCP)

A pintura com maior conteúdo mede a diferença entre o início da renderização da página até o momento de pintar o maior elemento de conteúdo. Causas comuns para um LCP lento, de acordo com [web.dev](https://web.dev):

* Tempo de resposta do servidor lento
* JavaScript e CSS com bloqueio de renderização
* Tempos lentos de carregamento de recursos
* Renderização do lado do cliente

Use [as informações de rastreamento da sessão do browser](/docs/browser/browser-monitoring/browser-pro-features/session-traces-explore-webpages-life-cycle/) para entender quais das causas comuns acima influenciam a página específica que você está tentando otimizar.

Abordagens para melhorar o LCP:

* Faça uso de CDNs e preste atenção ao cache e ao desempenho do servidor de borda.
* Estabeleça conexões com terceiros antecipadamente.
* Atrase Javascript e CSS não críticos.

Recursos adicionais:

* [A abordagem do Google para otimização de LCP](https://web.dev/optimize-lcp/).
* [Lighthouse](https://developers.google.com/web/tools/lighthouse) é uma ferramenta do Google que executa um teste sintético em uma página específica e fornece uma lista de recomendações que inclui como otimizar o CLS.

## Interação com a próxima pintura (INP) [#INP]

A interação para a próxima pintura (INP) calcula quando um usuário interage com uma página por meio de cliques, toques e interação do teclado com uma página ao longo de sua vida útil. É uma métrica de campo que varia de acordo com o comportamento real do usuário (os resultados variam de acordo com a impaciência do usuário e o tempo de ação), mas pode ser otimizada reduzindo o tempo total de bloqueio (TBT).

Para fazer isso, você precisa:

* Divida longas tarefas de bloqueio.
* Otimize JavaScript inchado.
* Observe a movimentação do lado do servidor lógico e/ou use web workers para executar threads em segundo plano.

Use [as informações de rastreamento da sessão do browser](/docs/browser/browser-monitoring/browser-pro-features/session-traces-explore-webpages-life-cycle/) para entender onde estão ocorrendo os intervalos de bloqueio e por quanto tempo eles duram.

Recursos adicionais:

* [A abordagem do Google para otimização de INP](https://web.dev/articles/optimize-inp).
* [Lighthouse](https://developers.google.com/web/tools/lighthouse) é uma ferramenta do Google que executa um teste sintético em uma página específica e fornece uma lista de recomendações que inclui como otimizar o INP.
