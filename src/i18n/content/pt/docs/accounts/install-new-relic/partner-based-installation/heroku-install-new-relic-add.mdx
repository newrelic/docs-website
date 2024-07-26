---
title: 'Heroku: Instale o complemento New Relic'
tags:
  - Accounts
  - Accounts and billing
  - Partner installation
metaDescription: 'Heroku users: How to install and manage the New Relic agent as an add-on account.'
freshnessValidatedDate: never
translationType: machine
---

[Heroku](https://devcenter.heroku.com/articles/newrelic) é uma solução de plataforma como serviço (PaaS) para hospedagem de aplicativos da web em vários idiomas de agente. Com o New Relic, você pode estender o Heroku com métricas de nossas soluções de monitoramento, como <InlinePopover type="apm"/>e <InlinePopover type="browser"/>. O complemento New Relic suporta Java, Node.js, PHP, Python e Ruby.

## Instale o complemento New Relic [#addon-installation]

Para configurar o complemento New Relic, consulte [a documentação do Heroku](https://devcenter.heroku.com/articles/newrelic), incluindo níveis de plano disponíveis e procedimentos do Toolbelt. Se você tiver problemas, use os [canais de suporte do Heroku](https://devcenter.heroku.com/articles/support-channels).

## Configurar o agente [#agent-installation]

Depois de instalar o [complemento New Relic para Heroku](https://devcenter.heroku.com/articles/newrelic), siga os procedimentos de configuração do seu agente <InlinePopover type="apm"/>.

<CollapserGroup>
  <Collapser
    id="heroku-java"
    title="Java"
  >
    A versão mínima do agente para Java é 3.17.1 ou superior. Para instalar e configurar o agente Java da New Relic para seu complemento, consulte nosso [agente Java e a documentação do Heroku](/docs/agents/java-agent/installation/java-agent-heroku) .
  </Collapser>

  <Collapser
    id="heroku-nodejs"
    title="Node.js"
  >
    Para instalar e configurar nosso agente Node.js para seu complemento, consulte:

    * Documentação [Node.js e Heroku](/docs/agents/nodejs-agent/hosting-services/nodejs-agent-heroku) da New Relic
    * [Postagem no blog](//beachape.com/blog/2013/02/04/nodejs-on-heroku-with-newrelic/) (2013) com um exemplo do "mundo real" de instalação de nosso agente Node.js para um aplicativo Heroku
  </Collapser>

  <Collapser
    id="heroku-php"
    title="PHP"
  >
    Para instalar e configurar nosso agente PHP para seu complemento, consulte nosso [agente PHP e a documentação do Heroku](/docs/agents/php-agent/advanced-installation/php-agent-heroku) .
  </Collapser>

  <Collapser
    id="heroku-python"
    title="Python"
  >
    Para instalar e configurar nosso agente Python para seu complemento, consulte nosso [agente Python e a documentação do Heroku](/docs/agents/python-agent/hosting-services/python-agent-heroku) .
  </Collapser>

  <Collapser
    id="heroku-ruby"
    title="Ruby"
  >
    Para instalar e configurar nosso agente Ruby para seu complemento, consulte nosso [agente Ruby e a documentação do Heroku](/docs/agents/ruby-agent/installation-configuration/ruby-agent-heroku) .

    Se você estiver usando nosso agente Ruby com um aplicativo não Rails, o usuário Heroku precisará instalar o plug-in em seu repositório manualmente. Por exemplo, em um aplicativo Sinatra, adicione a gema `newrelic` ao seu <DNT>**Gemfile**</DNT> e, em seguida, adicione o seguinte código ao seu aplicativo:

    ```ruby
    configure :production do
      require 'newrelic_rpm'
      end
    ```
  </Collapser>
</CollapserGroup>

## Gerencie suas contas complementares do Heroku [#add-on-account]

Cada vez que você instala o complemento New Relic para Heroku, o New Relic criará automaticamente uma nova conta, completa com uma [chave de licença](#heroku-add-on-license-key) exclusiva, [URL da conta](#heroku-add-on-account-url) e [ID da conta](#heroku-add-on-account). Esses três tipos de informações são importantes para gerenciar cada uma de suas contas complementares do Heroku.

<CollapserGroup>
  <Collapser
    id="heroku-add-on-license-key"
    title="chave de licença"
  >
    O <InlinePopover type="licenseKey"/>identifica a conta à qual seu aplicativo reporta. Para verificar a chave de licença que seu aplicativo está usando:

    1. Em uma linha de comando, execute:

       ```bash
       heroku config | grep -i relic
       ```

    2. Procure o valor de `NEW_RELIC_LICENSE_KEY`.

       Esta variável de ambiente de chave de licença substituirá qualquer outra chave de licença que você codifique em seu arquivo de configuração do New Relic.
  </Collapser>

  <Collapser
    id="heroku-add-on-account-url"
    title="URL da conta"
  >
    Se você instalar o complemento New Relic várias vezes e precisar verificar o URL que seu aplicativo Heroku usa para gerar relatórios para o New Relic, procure no registro do agente uma linha indicando `reporting to` seguida por um URL usando este formato:

    ```
    rpm.newrelic.com/accounts/###/applications/######
    ```
  </Collapser>

  <Collapser
    id="heroku-add-on-account"
    title="ID da conta"
  >
    Você não pode alterar diretamente o [ID da conta](/docs/accounts-partnerships/accounts/account-setup/account-id) do seu complemento. Se você precisar alterar a conta New Relic que seu aplicativo Heroku usa para gerar relatórios para o New Relic, altere a variável de ambiente da chave de licença atual em seu arquivo de configuração para que ela aponte para a chave de licença da conta New Relic que você deseja usar:

    ```bash
    heroku config:set NEW_RELIC_LICENSE_KEY=changed_account_license_key
    ```
  </Collapser>
</CollapserGroup>

## Faça logon na New Relic [#signon]

Os clientes Heroku podem ter dois tipos diferentes de contas na New Relic:

* Contas complementares: contas New Relic que os clientes instalaram em seu aplicativo Heroku usando [o complemento New Relic do Heroku](https://addons.heroku.com/newrelic)
* Contas “regulares”: outras contas New Relic que os clientes não instalaram com o complemento do Heroku

As contas regulares fornecem uma gama mais ampla de recursos do que as contas complementares e são instaladas e gerenciadas de maneira diferente. Aplicam-se procedimentos diferentes, dependendo do tipo de conta em que você deseja fazer login.

De acordo com os termos da parceria da New Relic com o Heroku, os clientes que instalarem o New Relic por meio do complemento Heroku só poderão acessar suas contas do complemento New Relic fazendo login no Heroku. Por esse motivo, se você tiver contas complementares e contas regulares da New Relic, não poderá alternar diretamente entre elas.

<CollapserGroup>
  <Collapser
    id="heroku-add-on-login"
    title="Faça login na conta complementar do New Relic por meio do Heroku"
  >
    Para fazer login em suas contas complementares do New Relic:

    1. Faça login na página de login do Heroku em [id.heroku.com/login](https://id.heroku.com/login).

    2. Selecione o aplicativo que possui o complemento New Relic instalado.

    3. Selecione New Relic na sua lista de complementos.

       Se você fizer login pelo Heroku, não verá nenhuma de suas contas normais do New Relic ao selecionar <DNT>**[user menu](/docs/accounts/accounts-billing/general-account-settings/intro-account-settings) > Switch account**</DNT>.
  </Collapser>

  <Collapser
    id="regular-login"
    title="Faça login em contas normais da New Relic"
  >
    Para fazer login ou alternar entre suas contas normais da New Relic:

    1. Faça login no New Relic em <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities)**</DNT>.

    2. Para mudar de uma conta normal do New Relic para outra: Vá para o [menu de usuário \[user menu\]](/docs/accounts/accounts-billing/general-account-settings/intro-account-settings) e selecione uma conta.

       Se você fizer login diretamente pelo New Relic, não verá nenhuma das suas contas complementares do New Relic do Heroku ao selecionar <DNT>**[user menu](/docs/accounts/accounts-billing/general-account-settings/intro-account-settings) > Switch account**</DNT>.
  </Collapser>
</CollapserGroup>

## Configurar notificação de implantação [#deployment]

O complemento Heroku envia automaticamente uma notificação de implantação para o New Relic por <DNT>**one application**</DNT> por conta. Se você adicionar vários aplicativos à sua conta complementar, deverá usar a API REST do New Relic para enviar manualmente a remessa de remessa para seu aplicativo adicional.

Você não pode usar um gancho pós-implantar, porque a chamada de API REST do New Relic requer um cabeçalho, e o gancho pós-implantar do Heroku não permite cabeçalhos. No entanto, você pode escrever um script que gere essa chamada de API sempre que implantar no Heroku. Para instruções sobre como registrar a implantação via API REST, consulte [Registrando a implantação](/docs/apm/new-relic-apm/maintenance/recording-deployments#api).

<Callout variant="important">
  Quando você adiciona um usuário ao complemento Heroku, isso cria um registro de usuário para o usuário no New Relic. No entanto, se você remover o usuário do complemento Heroku, o registro do usuário não será removido automaticamente do New Relic. Em vez disso, você também deve remover manualmente o registro do usuário do New Relic após remover o usuário do complemento Heroku. Você pode fazer isso acessando a página <DNT>**User Management**</DNT> .
</Callout>
