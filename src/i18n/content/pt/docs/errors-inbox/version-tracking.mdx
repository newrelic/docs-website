---
title: Rastreamento de versão com Errors Inbox
metaDescription: 'Errors inbox is an error tracking solution designed to give you the tools to proactively detect, triage, and resolve errors across your full application stack.'
freshnessValidatedDate: '2024-05-13T00:00:00.000Z'
translationType: machine
---

<SideBySide>
  <Side>
    O rastreamento de versão Errors Inbox permite que os desenvolvedores monitor cada implantação para verificar a precisão e o sucesso. Digamos que você e sua equipe recebam um alerta informando que uma de suas entidades teve um aumento nas taxas de erros. Você identifica a [origem do erro](/docs/tutorial-error-tracking/respond-outages/) e decide liberar uma implantação canário. Você pode usar o rastreamento de versão para monitor sua correção, bem como a implantação anterior para determinar se você resolveu o problema ou se precisa voltar à prancheta.
  </Side>

  <Side>
    <img
      width="60%"
      title="errors inbox change tracking"
      alt="A screenshot that depicts error occurrences by version"
      src="/images/errors-inbox_screenshot-crop_errors-inbox-change-tracking.webp"
    />
  </Side>
</SideBySide>

## Triagem por status de erro [#error-status]

Ao fazer a triagem da sua caixa de entrada, você pode escolher entre vários status. Você pode querer resolver os erros imediatamente ou até mesmo marcá-los para que sejam ignorados. Em outros casos, você pode querer resolver os problemas na próxima versão ou em uma versão específica.

<img
  style={{ align: 'left',maxWidth: '100%' }}
  title="Screenshot showing resolve in version"
  alt="Screenshot showing resolve in version"
  src="/images/errors-inbox_screenshot-full_resolve-in-version.webp"
/>

Você pode definir um dos seguintes status e filtrar sua caixa de entrada por status:

* <DNT>
    **Unresolved**
  </DNT>

  : este é o status padrão dos grupos de erros.

* <DNT>
    **Resolve in next version**
  </DNT>

  : Recomendamos que você use esse status se espera resolver esse grupo de erros em sua próxima versão. Para habilitar esta opção, você precisa configurar [o Monitoramento de Alterações](/docs/change-tracking/change-tracking-introduction/#start-tracking) do seu aplicativo para que Errors Inbox possa detectar uma nova versão e verificar se o grupo de erros foi realmente resolvido. Caso o grupo de erros ainda seja detectado na próxima versão ou em qualquer versão futura, o grupo de erros será resolvido automaticamente, marcado com uma regressão e você receberá uma notificação do Slack sobre a regressão.

* <DNT>
    **Resolve in specific version**
  </DNT>

  : Escolha esta opção para resolver grupos de erros nestas situações:

  * Se você sabe que o grupo de erros será resolvido em uma versão específica
  * Se você sabe que o grupo de erros foi resolvido em uma versão existente
  * Se você quiser inserir uma versão específica

  Para habilitar esta opção, você precisa de [um instrumento de rastreamento de versão](#instrument-version-tracking) para seu aplicativo ou serviço. Se for detectada uma ocorrência de erro com uma versão semântica equivalente ou superior, o grupo de erros será resolvido automaticamente, marcado com uma regressão, e você receberá uma notificação do Slack sobre a regressão.

* <DNT>
    **Resolve**
  </DNT>

  : Definir um grupo de erros como resolvido irá ocultá-lo da visualização padrão da caixa de entrada, a menos que os filtros sejam atualizados para incluir grupos de erros resolvidos. Se ocorrer um evento correspondente à impressão digital do grupo de erros após marcar um grupo de erros como resolvido, o status será redefinido automaticamente para **Unresolved**. Isso pode ser útil para identificar regressões.

* <DNT>
    **Ignore**
  </DNT>

  : isso ocultará o grupo de erros da visualização da caixa de entrada, a menos que os filtros sejam atualizados para incluir erros ignorados ou até que você pare de ignorar o grupo de erros.

<Callout variant="tip">
  As opções <DNT>**Resolve in next version**</DNT> e <DNT>**Resolve in specific version**</DNT> só serão suportadas se sua equipe usar controle de versão semântico.
</Callout>

## Entenda os campos de rastreamento de versão [#understand-version-tracking-fields]

Antes de usar o instrumento de rastreamento de versão, é importante entender como Errors Inbox classifica seus resultados. No aplicativo APM e OpenTelemetry, quando você rastreia erros, os seguintes campos de evento são verificados e exibidos _nesta ordem_:

1. `service.version`
2. `tags.service.version`
3. `tags.releaseTag`
4. `tags.commit`

Para aplicativos móveis, o campo do evento é `appVersion`.

Para aplicativos de browser, o campo de evento é `application.version`.

## Rastreamento de versão do instrumento [#instrument-version-tracking]

Para capturar dados do nosso rastreamento de versão, você deve configurar campos para entidade relevante:

* [Para entidade OpenTelemetry, configure `service.version`](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/best-practices/opentelemetry-best-practices-resources/).

* Para entidade APM, configure variáveis de ambiente para entidade APM.

  * [Go](/docs/apm/agents/go-agent/configuration/go-agent-code-level-metrics-config/#errors-inbox-configuration)
  * [Java](/docs/apm/agents/java-agent/configuration/java-agent-configuration-config-file/#errors-inbox-configuration)
  * [.NET](/docs/apm/agents/net-agent/configuration/net-agent-configuration/#errors-inbox-configuration)
  * [Node.js](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#errors-inbox-configuration)
  * [PHP](/docs/apm/agents/php-agent/configuration/php-agent-configuration/#errors-inbox-configuration)
  * [Python](/docs/apm/agents/python-agent/configuration/python-agent-configuration/#errors-inbox-configuration)
  * [Ruby](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#errors-inbox-configuration)

* [Para entidade mobile, configure `appVersion`](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/set-application-version/).

* [Para entidade do browser, use `application.version`](/docs/browser/new-relic-browser/browser-apis/setApplicationVersion/).

## Filtrar por versão [#filter-by-version]

Assim que você tiver o rastreamento da versão do instrumento, seus grupos de erros capturarão automaticamente os dados de cada versão. Você pode filtrar por cada versão.

Para filtrar grupos de erros com diversas versões, use o operador + para escolher uma condição `OR` .

<img
  style={{ align: 'left',maxWidth: '50%' }}
  title="version tracking errors inbox"
  alt="A screenshot depicting how to filter by versions in errors inbox. "
  src="/images/errors-inbox_screenshot-crop_filter-errors-by-versions.webp"
/>

Você pode usar [o Monitoramento de Alterações](/docs/change-tracking/change-tracking-view-analyze/) para monitor sua implantação. Se você fez isso, é importante certificar-se de que sua implantação corresponda ao mesmo formato de versão do instrumento em sua entidade, para que você possa combinar as versões de seus erros com sua implantação.

## Encontre versões por grupo de erros [#find-versions-by-error-group]

Você também pode clicar em um grupo de erros para ver cada implantação que corresponde à primeira e à última data vista do seu grupo de erros. Você só verá versões que foram publicadas 30 minutos após a primeira data de visualização e 30 minutos antes da última data de visualização.

<img
  style={{ align: 'left',maxWidth: '50%' }}
  title="error date"
  alt="A screenshot depicting last seen date of errors"
  src="/images/errors-inbox_screenshot-full_error-date.webp"
/>

Você pode se aprofundar nos grupos de erros usando o gráfico que mostra cada uma das ocorrências de erros agrupadas por versão.

Se você também configurou implantações com Monitoramento de Alterações, verá o marcador de implantação neste gráfico. Esses marcadores indicam quando cada implantação foi lançada. Clique no marcador para navegar até a implantação.
