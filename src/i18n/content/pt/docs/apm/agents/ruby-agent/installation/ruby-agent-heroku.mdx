---
title: Agente Ruby e Heroku
tags:
  - Agents
  - Ruby agent
  - Installation
metaDescription: 'Heroku-specific information about the New Relic Ruby agent, including installation, configuration, app naming, and logging.'
freshnessValidatedDate: never
translationType: machine
---

[Heroku](https://devcenter.heroku.com/articles/newrelic) é uma solução de plataforma como serviço (PaaS) para hospedagem de aplicativos web em várias linguagens de agente, incluindo Ruby. Com o New Relic, você pode estender o Heroku usando métricas [<InlinePopover type="apm"/>](/docs/apm/new-relic-apm)e [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser). Esta página descreve considerações especiais para usar o Heroku como um serviço de hospedagem com o agente Ruby para New Relic.

## Instale o complemento do agente New Relic [#installing]

Após implantar seu aplicativo Ruby no Heroku, instale o agente New Relic:

<CollapserGroup>
  <Collapser
    id="via_heroku"
    title="Através do site Heroku"
  >
    Para instalar o complemento New Relic através do site Heroku, você deve estar logado no Heroku:

    1. Na [página Add-on do Heroku para New Relic](https://elements.heroku.com/addons/newrelic#pricing), selecione um plano de assinatura.

    2. Em <DNT>**Select an app**</DNT>, selecione seu aplicativo New Relic.

    3. Dê ao seu aplicativo um [nome descritivo](/docs/apm/new-relic-apm/installation-configuration/name-your-application) com este comando do cinto de ferramentas do Heroku:

       ```bash
       heroku config:set NEW_RELIC_APP_NAME='Your Application Name'
       ```

    4. Adicione a gema New Relic ao seu `Gemfile`. A gema do agente New Relic Ruby está disponível em [rubygems.org](https://rubygems.org/) como `newrelic_rpm`.

       Se seu aplicativo usa Bundler, adicione esta gem ao Gemfile:

       ```ruby
       gem 'newrelic_rpm'
       ```

    5. Reinicie seu dinamômetro.

    6. Gere algum tráfego para seu aplicativo.
  </Collapser>

  <Collapser
    id="via_toolbelt"
    title="Através do cinto de ferramentas Heroku"
  >
    Para instalar o complemento New Relic com o conjunto de ferramentas Heroku:

    1. Execute o seguinte comando do toolbelt, onde `$planlevel` é o [plano de assinatura apropriado](https://elements.heroku.com/addons/newrelic#pricing):

       ```bash
       heroku addons:create newrelic:$planlevel
       ```

    2. Dê ao seu aplicativo um [nome descritivo](/docs/apm/new-relic-apm/installation-configuration/name-your-application) com este comando do toolbelt:

       ```bash
       heroku config:set NEW_RELIC_APP_NAME='Your Application Name'
       ```

    3. Adicione a gema New Relic ao seu `Gemfile`. A gema do agente New Relic Ruby está disponível em [rubygems.org](https://rubygems.org/) como `newrelic_rpm`.

       Se seu aplicativo usa Bundler, adicione esta joia ao `Gemfile`:

       ```ruby
       gem 'newrelic_rpm'
       ```

    4. Reinicie seu dinamômetro.

    5. Gere algum tráfego para seu aplicativo.
  </Collapser>

  <Collapser
    id="heroku-non-rails"
    title="Aplicativo não Rails"
  >
    Se você estiver usando o agente Ruby para New Relic com uma aplicação não Rails, o usuário Heroku precisará instalar o plug-in em seu repositório manualmente. Por exemplo, em um aplicativo Sinatra, adicione a gema `newrelic_rpm` ao seu `Gemfile` e, em seguida, adicione o seguinte código ao seu aplicativo:

    ```ruby
    configure :production do
     require 'newrelic_rpm'
     end
    ```
  </Collapser>
</CollapserGroup>

A instalação do complemento cria automaticamente uma conta privada New Relic e configura o acesso aos servidores Heroku. A New Relic começará a monitorar o desempenho do aplicativo, a experiência do usuário final e o desempenho do servidor de aplicativos coletados após a instalação do complemento. Dentro de alguns minutos, os dados deverão começar a aparecer na [página de resumo do APM](/docs/apm/applications-menu/monitoring/apm-overview-page).

<InstallFeedback/>

## Resolução de problemas sua instalação [#troubleshooting]

Alguns minutos após a instalação e configuração do New Relic, os dados deverão começar a aparecer na [página de resumo do APM](/docs/apm/applications-menu/monitoring/apm-overview-page) do seu aplicativo. Se nenhum dado aparecer, siga os [procedimentos de resolução de problemas do agente Ruby](/docs/agents/ruby-agent/troubleshooting/no-data-appears-ruby).

## Atualizar a partir de uma instalação existente do New Relic [#upgrading]

Se o New Relic já estiver instalado, reinstale o complemento usando o comando Heroku toolbelt.

```bash
heroku config:set NEW_RELIC_APP_NAME='Your Application Name'
```

## Configure o agente Ruby no Heroku [#configuring]

Você pode configurar o New Relic em seu arquivo `newrelic.yml` ou usar [variáveis de ambiente](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration) para ter precedência sobre os valores em seu arquivo de configuração. Use `heroku config:set` para modificar as configurações do agente para seu aplicativo Heroku.

Por exemplo, para definir a configuração [`custom_insights_events.max_samples_stored`](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#custom_insights_events-max_samples_stored) como 500:

```bash
heroku config:set NEW_RELIC_CUSTOM_INSIGHTS_EVENTS_MAX_SAMPLES_STORED=500
```

## Nome do host no Heroku [#hostnames]

Saber quais dados vieram de qual host permite filtrar a métrica exibida na interface para um host específico. No Heroku, os nomes do host nos dynos são gerados dinamicamente e geralmente não são significativos para você como desenvolvedor de aplicativos.

A partir da versão 3.9.5, o agente Ruby relata o nome Heroku dyno como o nome do host (por exemplo, `web.1`). Isso permite que você visualize seus dados com escopo para um nome de dinamômetro específico. Você pode desativar esse comportamento definindo a configuração `heroku.use_dyno_names` como `false`. O agente usará então um único nome de espaço reservado agregado chamado `Dynamic Hostname`.

## Dyno nome do host agregação [#dyno-hostnames]

Alguns dynos possuem nomes gerados dinamicamente, e estes podem assumir muitos valores exclusivos ao longo do tempo. Os exemplos incluem `scheduler` dinamômetros criados pelo complemento Agendador e `run` dinamômetros criados invocando `heroku run` na linha de comando. Para manter razoável o número de nome do host exclusivo, o agente Ruby agregará automaticamente os dados de `scheduler` e `run` dynos em nome do host chamados `scheduler.*` e `run.*`.

Se você tiver outros tipos de dinamômetro criados dinamicamente, use a definição de configuração [`heroku.dyno_name_prefixes_to_shorten`](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#heroku) para aplicar a mesma agregação a esses outros tipos de dinamômetro.

## Registro para Heroku [#logging]

No Heroku, o log do agente Ruby na saída padrão, misturando o log do agente com o log normal do aplicativo. as entradas log geradas pelo agente Ruby incluem uma tag `[NewRelic]` como prefixo.

Para recuperar o login no Heroku:

1. Verifique se sua variável de ambiente `NEW_RELIC_LOG` está definida como `stdout` com este comando do Toolbelt do Heroku:

   ```bash
   heroku config
   ```

2. Para redefinir a variável de ambiente, se necessário, execute:

   ```bash
   heroku config:set NEW_RELIC_LOG="stdout"
   ```

3. Abra seu arquivo `newrelic.yml` em um editor.

4. Altere [`log_level`](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#log_level) para `debug` e salve o arquivo. Certifique-se de não modificar o recuo.

5. Reinicie seu aplicativo da web.

6. Gere algum tráfego para seu aplicativo e execute-o por cerca de cinco minutos.

7. Execute o seguinte comando do cinto de ferramentas Heroku para visualizar o log apenas do agente New Relic:

   ```bash
   heroku logs -n 1500 | grep -i relic
   ```

8. Se estiver enviando seu arquivo de log para o suporte da New Relic, anexe o arquivo de log ao seu ticket de suporte, juntamente com `newrelic.yml`, seu `Gemfile` e `Gemfile.lock`.

9. Edite `newrelic.yml` novamente e altere [`log_level`](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#log_level) para a configuração anterior. Salve o arquivo.
