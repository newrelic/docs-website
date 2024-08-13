---
title: Instale New Relic para Go
tags:
  - Agents
  - Go agent
  - Installation
metaDescription: How to install New Relic's Go agent to monitor performance of your Go language applications and microservices.
freshnessValidatedDate: never
translationType: machine
---

Nosso agente Go instrumenta automaticamente seu código para que você possa começar a monitorar seus aplicativos e microsserviços na linguagem Go. Você pode usar nosso inicializador ou seguir as instruções neste documento para concluir a instalação básica do agente Go.

Se você ainda não tem uma, [crie uma conta New Relic](https://newrelic.com/signup). É grátis, para sempre.

<ButtonLink
  role="button"
  to="https://one.newrelic.com/marketplace/install-data-source?state=697ccd5e-8b96-ff04-32c1-a3bc39a31255"
  variant="primary"
>
  Adicionar dados Go
</ButtonLink>

## Compatibilidade e requisitos [#requirements]

O agente Go requer Golang 1.17 ou superior no Linux, macOS ou Windows. Para obter mais informações, consulte [Go compatibilidade do agente e requisitos](/docs/agents/go-agent/get-started/go-agent-compatibility-requirements).

## Instale o agente Go [#get-new-relic]

Para instalar o agente Go, você precisa de um <InlinePopover type="licenseKey"/>. Então, para instalar o agente:

1. Em [github.com/newrelic/go-agent](https://github.com/newrelic/go-agent), use seu processo preferido; por exemplo:

   ```bash
   go get github.com/newrelic/go-agent/v3/newrelic
   ```

2. Importe o pacote `github.com/newrelic/go-agent/v3/newrelic` em seu aplicativo.

   ```go
   import "github.com/newrelic/go-agent/v3/newrelic"
   ```

3. Inicialize o agente Go adicionando o seguinte na função `main` ou em um bloco `init` :

   ```go
   app, err := newrelic.NewApplication(
       newrelic.ConfigAppName("Your Application Name"),
       newrelic.ConfigLicense("YOUR_NEW_RELIC_LICENSE_KEY")
   )
   ```

4. [instrumento de transação da web](/docs/agents/go-agent/get-started/instrument-go-transactions#http-handler-txns) agrupando solicitações HTTP padrão no código do seu aplicativo. Por exemplo:

   ```go
   http.HandleFunc(newrelic.WrapHandleFunc(app, "/users", usersHandler))
   ```

5. [outro instrumento de transação](/docs/agents/go-agent/get-started/instrument-go-transactions) que você deseja monitor.

6. Opcional: [segmentos](/docs/agents/go-agent/get-started/instrument-go-segments) de instrumento para um nível extra de detalhe de temporização.

7. Compile e implante sua aplicação.

## Veja os dados do seu aplicativo no New Relic [#view-data]

Aguarde alguns minutos para que seu aplicativo envie dados para o New Relic. Em seguida, verifique o desempenho do seu aplicativo na [interface do APM](/docs/apm/applications-menu/monitoring/apm-overview-page). Se nenhum dado aparecer em alguns minutos, siga as [dicas de resolução de problemas](/docs/agents/go-agent/troubleshooting/no-data-appears-go).

<InstallFeedback/>

## Mantenha seu agente atualizado [#update]

Para aproveitar ao máximo os recursos, melhorias e patches de segurança importantes do New Relic, mantenha [o agente Go do seu aplicativo atualizado](/docs/agents/go-agent/installation/update-go-agent).
