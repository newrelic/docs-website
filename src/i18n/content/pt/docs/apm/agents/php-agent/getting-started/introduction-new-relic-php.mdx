---
title: Introdução ao New Relic para PHP
tags:
  - Agents
  - PHP agent
  - Getting started
metaDescription: 'For an overview of New Relic''s PHP agent (compatibility, requirements, installation, configuration, troubleshooting, known issues), start here.'
freshnessValidatedDate: never
translationType: machine
---

Nosso agente PHP monitora seu aplicativo para ajudá-lo [a identificar e resolver problemas de desempenho](#monitor-performance). Você também pode estender o monitoramento de desempenho do agente para [coletar e analisar dados de negócios](#business-data) para ajudá-lo a melhorar a experiência dos clientes e tomar decisões de negócios orientadas por dados.

Use o agente PHP da New Relic para resolver problemas de desempenho do seu aplicativo com nosso [tutorial Meu aplicativo está lento](/docs/journey-app-slow/root-causes/).

## monitor o desempenho do aplicativo [#monitor-performance]

<img
  title="PHP - APM Summary"
  alt="PHP - APM Summary"
  src="/images/apm_screenshot-full_php-summary-page.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Summary**</DNT>: após instalar o agente PHP, visualize um resumo do desempenho do seu aplicativo.
</figcaption>

<DNT>
  **View the big picture of your app**
</DNT>

* monitor [o Apdex (satisfação do usuário)](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction)do seu aplicativo
* Obtenha um [resumo de alto nível do seu aplicativo](/docs/apm/applications-menu/monitoring/apm-overview-page)
* Crie [mapas arquitetônicos](/docs/data-analysis/user-interface-functions/view-your-data/service-maps-visualize-monitor-apps-entire-architecture) do seu aplicativo

<DNT>
  **Find errors and problems quickly**
</DNT>

* Rastrear [transação principal](/docs/apm/transactions/key-transactions/key-transactions-tracking-important-transactions-or-events)
* [Pesquise e crie gráficos personalizáveis](/docs/insights/new-relic-insights/explore/metric-explorer-search-chart-metrics-sent-new-relic-agents) para os dados de métrica de fração de tempo mais importantes para você, incluindo qualquer [métrica personalizada](/docs/agents/manage-apm-agents/agent-data/custom-metrics) que você esteja enviando para a New Relic.
* [alertar](/docs/alerts/alert-policies/understanding-alert-policies/alerting-new-relic) sua equipe quando ocorrerem erros ou problemas antes que afetem seu usuário
* Acompanhe o desempenho [após um implante](/docs/agents/php-agent/features/recording-deployments-using-php-script)

<DNT>
  **Drill down into performance details**
</DNT>

* Examine o nível do código [trace da transação](/docs/apm/transactions/transaction-traces/transaction-traces)
* Examinar [consulta ao banco de dados trace](/docs/apm/transactions/transaction-traces/sql-statements)
* Examinar [o rastreamento de erros](/docs/apm/applications-menu/events/viewing-apm-errors-error-traces)

<DNT>
  **View logs for your infrastructure data**
</DNT>

Reúna os dados do seu log e da aplicação para tornar a resolução de problemas mais fácil e rápida. Não há necessidade de mudar para outra página de interface.

* Com [os logs contextualizados](/docs/logs/logs-context/configure-logs-context-php/), você pode ver a mensagem do log relacionada aos seus erros e rastrear diretamente na interface do seu aplicativo.
* Você também pode ver o logs contextualizados dos [dados da sua infraestrutura](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/), como cluster do Kubernetes.

<DNT>
  **Analyze business data**
</DNT>

Use o agente PHP para organizar, consultar e visualizar seus dados para responder perguntas importantes sobre o desempenho do aplicativo e a experiência do cliente.

* Use [o atributo de transação padrão](/docs/insights/new-relic-insights/decorating-events/apm-default-attributes-insights) ou [adicione o seu próprio](/docs/insights/new-relic-insights/decorating-events/insights-custom-attributes)
* consulte seus dados [usando NRQL](/docs/insights/new-relic-insights/using-new-relic-query-language/using-nrql)
* Envie [seus próprios dados de evento](/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events-new-relic-apm-agents#php-att)
* Crie e compartilhe [um painel](/docs/insights/new-relic-insights/managing-dashboards-data)interativo e personalizável

## Arquitetura

O agente PHP possui dois binários que trabalham juntos para encaminhar dados para o New Relic:

* O agente lida com a instrumentação automática e de API do seu código PHP.
* O daemon atua como um proxy entre o agente e a plataforma New Relic.

Você pode conectar até 500 aplicativos/agentes a um daemon. O daemon impõe [amostragem](/docs/agents/manage-apm-agents/agent-data/new-relic-events-limits-sampling) quando os limites do ciclo de coleta são atingidos, portanto considere isso ao decidir quantos aplicativos/agentes conectar a um único daemon.

<Callout variant="tip">
  O número de aplicativos/agentes por daemon pode ser menor quando executado em contêiner Docker separado, dependendo da capacidade da conexão entre contêineres.
</Callout>

<img
  title="PHP agent diagram"
  alt="This diagram shows the flow of data from the PHP agent to New Relic."
  src="/images/apm_diagram_php-agent-diagram.webp"
/>

<figcaption>
  O fluxo de dados do seu aplicativo PHP para o New Relic.
</figcaption>

O fluxo de trabalho entre seu aplicativo e o New Relic deve ocorrer nesta ordem:

1. O agente estabelece uma conexão de soquete com o daemon enviando a primeira carga útil de dados de instrumentação.
2. O daemon estabelece um link HTTPS com a plataforma New Relic. O daemon deve ser invocado antes de seu aplicativo de instrumento ser invocado. Isso é chamado [de modo de agente](/docs/agents/php-agent/advanced-installation/starting-php-daemon-advanced) e é o padrão.

Para evitar a perda de dados reportados, certifique-se de que seu instrumento aplicativo não envie transação antes que ambas as conexões sejam estabelecidas.

## Instale o agente [#installation]

Antes de instalar o agente PHP, certifique-se de que seu sistema atenda aos [requisitos do sistema](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements). O agente PHP oferece suporte a muitos dos [frameworks PHP](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#frameworks), [banco de dados](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#databases) e [biblioteca](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#databases) mais comuns. Você também pode usar o agente em um [ambiente flexível do Google App Engine (GAE)](/docs/agents/php-agent/advanced-installation/install-new-relic-php-agent-gae-flexible-environment).

<Callout variant="tip">
  Se você estiver [instalando o agente em um serviço de hospedagem compartilhada](/docs/agents/php-agent/installation/install-php-agent-shared-hosting-service), certifique-se de ter permissões de root para instalar o agente ou entre em contato com seu provedor de hospedagem para obter assistência técnica.
</Callout>

Para instalar o agente, primeiro [inscreva-se no New Relic](https://newrelic.com/signup) . Uma vez logado, utilize nosso launcher, ou veja as instruções de instalação específica.

<ButtonLink
  role="button"
  to="https://one.newrelic.com/marketplace/install-data-source?state=d1b7b1cb-4089-8af0-16b2-86c7072e2cae"
  variant="primary"
>
  Adicione dados PHP
</ButtonLink>

Para <DNT>**standard installations**</DNT>, consulte:

* [Visão geral da instalação do agente PHP](/docs/agents/php-agent/installation/php-agent-installation-overview) (as etapas básicas de instalação para as configurações mais comuns).
* [Instalando no RedHat ou CentOS](/docs/agents/php-agent/installation/php-agent-installation-redhat-and-centos)
* [Instalando no Ubuntu ou Debian](/docs/agents/php-agent/installation/php-agent-installation-ubuntu-and-debian)
* [Instalação com arquivo tar](/docs/agents/php-agent/installation/php-agent-installation-tar-file) (método genérico para usar em qualquer sistema compatível, como variantes do Linux, OpenSolaris, SmartOS, FreeBSD, macOS, etc.)
* [O script newrelic-install](/docs/agents/php-agent/installation/newrelic-install-script) (como usar o script interativo que automatiza algumas tarefas de instalação)

Para outros tipos de instalação de PHP e tópicos <DNT>**advanced installation**</DNT> , consulte:

* [Instalação do agente PHP: PHP não padrão](/docs/agents/php-agent/installation/php-agent-installation-non-standard-php)
* [Iniciando o daemon PHP](/docs/agents/php-agent/installation/starting-php-daemon-advanced) (uma instalação padrão do New Relic inicia o daemon automaticamente, mas você também pode [iniciar o daemon manualmente](/docs/agents/php-agent/installation/starting-php-daemon-advanced#selecting-external))
* [Modo silencioso para o script de instalação](/docs/agents/php-agent/installation/running-php-install-script-silent-mode)
* [Instalação de ambiente flexível do Google App Engine (GAE)](/docs/agents/php-agent/advanced-installation/install-new-relic-php-agent-gae-flexible-environment) para agente PHP da New Relic

## Configurar o agente [#configuration]

O agente inclui uma variedade de [opções de configuração](/docs/agents/php-agent/configuration/php-agent-configuration) para personalizar e ajustar ainda mais sua instalação.

<Callout variant="tip">
  A parte mais importante da configuração do agente é dar um [nome descritivo](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-appname) ao seu aplicativo. New Relic [usa esse nome de aplicativo para métrica agregada](/docs/agents/manage-apm-agents/app-naming/name-your-application#app-name) quando você tem vários aplicativos ou hosts.
</Callout>

Após alterar qualquer opção de configuração do agente, reinicie o servidor web.

## Estender instrumentação de agente [#extend]

Depois de instalar o agente, vá além e amplie a instrumentação do agente:

* [Tempo de carregamento da página](/docs/agents/php-agent/features/page-load-timing-php): integre o agente PHP ao

  <InlinePopover type="browser">
    [](/docs/browser/new-relic-browser/getting-started/new-relic-browser)
  </InlinePopover>

  para obter visibilidade da atividade do usuário final.

* [instrumentação personalizada](/docs/agents/php-agent/features/php-custom-instrumentation): instrumento de operação não capturado como parte de nossa instrumentação framework .

* [API do agente](/docs/agents/php-agent/configuration/php-agent-api): Use a API do agente para personalizar o comportamento do agente. Por exemplo, você pode coletar métricas personalizadas, sinalizar um erro ou ignorar completamente uma transação específica.

* [Atributo do agente](/docs/agents/php-agent/attributes/php-agent-attributes): Personalize o [atributo](/docs/agents/manage-apm-agents/agent-metrics/agent-attributes) anexado à transação. A personalização do atributo permite evitar o envio de atributo sensível ou coletar atributo adicional para uma visibilidade mais profunda da sua transação.

## Solucione problemas de sua instalação [#troubleshoot]

Se você estiver tendo problemas, consulte a documentação de resolução de problemas do agente PHP. Alguns dos documentos mais importantes sobre resolução de problemas nessa seção incluem:

* [Nenhum dado aparece (PHP)](/docs/agents/php-agent/troubleshooting/no-data-appears-php)
* [Determinando requisitos de permissões](/docs/agents/php-agent/troubleshooting/determining-permissions-requirements)
* [As configurações INI não entram em vigor imediatamente](/docs/agents/php-agent/troubleshooting/ini-settings-not-taking-effect-immediately)
* [Por que e quando reiniciar seu servidor web (PHP)](/docs/agents/php-agent/troubleshooting/why-when-restart-your-web-server-php)
