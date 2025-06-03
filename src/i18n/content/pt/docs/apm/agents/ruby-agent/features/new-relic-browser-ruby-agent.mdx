---
title: Monitoramento de Browser e agente Ruby
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: Instrumentation for your New Relic Ruby agent to set up New Relic browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

Com o agente Ruby , você pode injetar o [agente de monitoramento do Browser](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser) em suas páginas da web de forma automática ou manual. Por padrão, se o agente Ruby detectar Javascript, ele instalará automaticamente <InlinePopover type="browser"/>.

Caso prefira adicionar o monitoramento de browser manualmente ou queira conhecer as opções de instalação do agente browser, [consulte o guia de instalação do agente browser](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent).

## Requisitos [#requirements]

A instrumentação automática do browser está disponível [para todas as versões suportadas do agente Ruby](/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/). Para garantir que seu ambiente esteja pronto para instrumentação automática, revise o [guia de compatibilidade e requisitos do monitoramento de browser](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring).

## Use instrumentação automática [#auto-instrumentation]

A configuração padrão do New Relic permite o monitoramento automático da instrumentação do browser:

```yaml
browser_monitoring:
  auto_instrument: true
```

Esta é a forma mais simples de monitor o usuário final. O agente Ruby examina cada página do seu aplicativo quando carrega e injeta automaticamente o JavaScript do browser no cabeçalho. A instrumentação automática funciona para ambientes que usam Rack. Por motivos de desempenho, o agente verifica apenas as primeiras 50 mil linhas da resposta do seu aplicativo em busca do ponto de instrumentação do cabeçalho. Nos casos em que uma meta tag `X-UA-Compatible` estiver presente e a tag `<head>` tiver mais de 50k, a instrumentação automática falhará normalmente.

A instrumentação automática procura uma meta tag `X-UA-Compatible` e insere o JavaScript diretamente depois dela. Se a instrumentação automática não conseguir encontrar uma meta tag `X-UA-Compatible` , ela a inserirá após a tag head de abertura. Caso contrário, ele será inserido após a tag body de abertura. Se alguma dessas tags estiver envolvida em condicionais ou comentários, a instrumentação automática provavelmente falhará.

A instrumentação automática não ocorrerá em páginas com anexo 'Content-Type' ou quando detectar solicitações de streaming.

Se a instrumentação automática não conseguir instrumentar corretamente as páginas do seu aplicativo, você precisará [instrumentar manualmente](#manual-instrumentation) usando a API do agente.

## Instrumento manualmente via API do agente [#manual-instrumentation]

Você pode configurar o monitoramento final do usuário manualmente incluindo script apropriado em suas páginas. Use a API do agente New Relic Ruby para gerar o script. A API injeta esse script em suas páginas.

Por exemplo, para modificar o modelo do seu aplicativo para chamar o agente, use:

```erb
<head>
    <%= ::NewRelic::Agent.browser_timing_header rescue "" %>
    # existing template code ...
</head>
```

## Suporte CSP Nonce [#csp-nonce-support]

Se a política de segurança de conteúdo estiver definida como ‘unsafe-inline’, você poderá instrumentar automaticamente o browser do agente. Se você quiser usar um [CSP Nonce](https://content-security-policy.com/nonce/), pode ser necessário adicionar alguma configuração manual.

### Rails CSP Nonce [#rails-csp-nonce]

[As versões 5.2+ do Rails](https://guides.rubyonrails.org/security.html#adding-a-nonce) incluem um recurso para definir um nonce CSP usando uma API. Nas versões 9.10.0+ do agente Ruby , o nonce Rails CSP será automaticamente detectado e aplicado ao script de injeção do agente de browser.

Você pode desativar esse recurso atualizando seu `newrelic.yml` para o seguinte:

```yaml
  browser_monitoring:
    content_security_policy_nonce: false
```

Ou defina a variável de ambiente `NEW_RELIC_BROWSER_MONITORING_CONTENT_SECURITY_POLICY=false`.

### Chamada de API [#api-call]

Você pode transmitir um CSP nonce para a API `NewRelic::Agent.browser_timing_header` nas versões 7.1.0+ do agente Ruby.

Ao passar um nonce para este método, você deve desabilitar o monitoramento de instrumentação automática do Browser e utilizar a instrumentação manual via API do agente.

Atualize seu `newrelic.yml` para:

```yaml
browser_monitoring:
  auto_instrument: false
```

Ou defina a variável de ambiente `NEW_RELIC_BROWSER_MONITORING_AUTO_INSTRUMENT=false`.

Agora você pode passar um nonce como argumento para o método API para permitir que o agente insira o nonce na instrumentação do browser. Por exemplo, `NewRelic::Agent.browser_timing_header(nonce)`.

## Resolução de problemas [#troubleshooting]

Se os dados do browser não forem informados, visualize o código-fonte HTML e confirme se dois blocos de script semelhantes aos seguintes estão no cabeçalho HTML:

```html
<script type="text/javascript">window.NREUM||(NREUM={});...</script>
```

Se estes não estiverem presentes, verifique:

* As configurações de instrumentação automática
* A colocação de instrumentação manual em seus arquivos de modelo
* A maneira como você está aplicando um nonce

## Desativar instrumentação automática [#disable-instrumentation]

O valor padrão de [`auto-instrument`](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#browser-monitoring) é `true` (mesmo quando não especificado). Para desativar a instrumentação automática, defina este sinalizador como `false`.

```yaml
browser_monitoring:
  auto_instrument: false
```

Para desativar a instrumentação automática apenas para determinados controladores ou ações do controlador, use [`newrelic_ignore_enduser`](/docs/agents/ruby-agent/installation-configuration/ignoring-specific-transactions#page-load-timing-rum). A instrumentação do lado do servidor não é afetada por esta chamada.
