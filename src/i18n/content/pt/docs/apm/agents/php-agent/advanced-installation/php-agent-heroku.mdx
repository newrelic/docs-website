---
title: Agente PHP e Heroku
tags:
  - Agents
  - PHP agent
  - Advanced installation
metaDescription: 'How to install, configure, and troubleshoot the New Relic PHP agent on Heroku.'
freshnessValidatedDate: never
translationType: machine
---

[Heroku](//www.heroku.com/) é uma solução de plataforma como serviço (PaaS) para hospedagem de aplicativos web em diversas linguagens, incluindo PHP. Com o New Relic, você pode estender o Heroku com métricas de [<InlinePopover type="apm"/>](/docs/apm/new-relic-apm/getting-started/welcome-new-relic-apm)e [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/new-relic-browser).

## Prepare seu aplicativo [#Preparing]

Antes de instalar o agente PHP, certifique-se de que seu aplicativo web PHP esteja instalado e em execução no Heroku. Para obter mais informações, consulte [Introdução ao PHP no Heroku](//devcenter.heroku.com/articles/getting-started-with-php).

## Instale o agente PHP [#installing]

Após implantar seu aplicativo PHP no Heroku, instale nosso agente PHP:

<CollapserGroup>
  <Collapser
    id="via_heroku"
    title="Através do site Heroku"
  >
    Para instalar o complemento New Relic através do site Heroku:

    1. Na [página do complemento New Relic](https://elements.heroku.com/addons/newrelic#pricing), selecione um plano de assinatura.

    2. No dropdown <DNT>**Select an app**</DNT>, selecione seu aplicativo.

    3. Dê ao seu aplicativo um [nome descritivo](#naming) com este comando do cinto de ferramentas do Heroku:

       ```bash
       heroku config:set NEW_RELIC_APP_NAME='YOUR_APP_NAME'
       ```

    4. Envie uma alteração ao Heroku (por exemplo, `git commit --allow-empty`) para ativar a extensão PHP durante a compilação.

    5. Gere algum tráfego para seu aplicativo.
  </Collapser>

  <Collapser
    id="via_toolbelt"
    title="Através do cinto de ferramentas Heroku"
  >
    Para instalar o complemento New Relic com o cinto de ferramentas Heroku:

    1. Através do cinto de ferramentas Heroku, execute o seguinte comando e substitua o [plano de assinatura apropriado](https://elements.heroku.com/addons/newrelic#pricing):

       ```bash
       heroku addons:create newrelic:YOUR_PLAN_LEVEL
       ```

    2. Dê ao seu aplicativo um [nome descritivo](#naming) com este comando do cinto de ferramentas do Heroku:

       ```bash
       heroku config:set NEW_RELIC_APP_NAME='YOUR_APP_NAME'
       ```

    3. Envie uma alteração ao Heroku (por exemplo, `git commit --allow-empty`) para ativar a extensão PHP durante a compilação.

    4. Gere algum tráfego para seu aplicativo.
  </Collapser>
</CollapserGroup>

Dentro de alguns minutos, os dados deverão começar a aparecer na sua [página <DNT>**Summary**</DNT> do APM](/docs/apm/applications-menu/monitoring/apm-overview-page). Caso não apareça nenhum dado, consulte os procedimentos [de verificação](#verifying) e [resolução de problemas](#troubleshooting) neste documento.

## Configure o agente no Heroku [#config]

O Heroku configura automaticamente variáveis de ambiente padrão para seu aplicativo. Para personalizar suas configurações, crie e faça upload de um arquivo <DNT>**newrelic.ini**</DNT> para o Heroku:

1. Baixe uma cópia "limpa" de [`newrelic.ini_.heroku`](./files/newrelic.ini_.heroku) \[INI | 16KB].

2. Renomeie o arquivo de `newrelic.ini_.heroku` para `newrelic.ini`.

3. Copie `newrelic.ini` para o diretório raiz do repositório do seu projeto.

4. Personalize suas configurações conforme descrito em [Configuração do agente PHP](/docs/agents/php-agent/configuration/php-agent-configuration).

   <Callout variant="caution">
     Não altere `newrelic.license`, `newrelic.loglevel` ou `newrelic.appname`. Essas configurações são definidas pelo cinto de ferramentas Heroku.
   </Callout>

5. Envie as alterações do arquivo de configuração para o seu repositório e envie-as para o Heroku.

6. Instrua o Heroku a usar seu arquivo de configuração personalizado por meio deste comando do Toolbelt do Heroku:

   ```bash
   heroku config:set NEW_RELIC_CONFIG_FILE=newrelic.ini
   ```

## Nomeie seu aplicativo [#naming]

Para garantir que as métricas de cada aplicativo sejam relatadas separadamente, [atribua um nome descritivo a cada aplicativo](/docs/apm/new-relic-apm/installation-configuration/naming-your-application#app-name). O nome do seu aplicativo é padronizado como <DNT>**PHP Application on Heroku**</DNT>.

New Relic usa o nome do aplicativo para agregar dados. Se você não alterar esse nome, o New Relic agregará os dados de cada aplicativo PHP adicional que você instalar com o mesmo nome.

1. Para nomear seu aplicativo, execute este comando do cinto de ferramentas Heroku:

   ```bash
   heroku config:set NEW_RELIC_APP_NAME='YOUR_APP_NAME'
   ```

2. Para verificar a mudança de nome do seu aplicativo, execute:

   ```bash
   heroku run env | grep NEW_RELIC_APP_NAME
   ```

Verifique se o prompt de confirmação retorna o novo nome do aplicativo:

```ini
NEW_RELIC_APP_NAME=YOUR_APP_NAME
```

## Verifique sua instalação [#verifying]

Para verificar se o Heroku instalou o complemento New Relic, execute este comando do cinto de ferramentas do Heroku:

```bash
heroku run env | grep NEW_RELIC
```

Isso irá gerar uma lista de variáveis de ambiente New Relic no Heroku. O agente usa essas variáveis de ambiente para determinar para qual conta os dados serão relatados. Você deverá ver pelo menos as seguintes variáveis:

```ini
NEW_RELIC_LICENSE_KEY="YOUR_LICENSE_KEY"
NEW_RELIC_LOG_LEVEL="warning"
NEW_RELIC_APP_NAME="YOUR_APP_NAME"
```

Você também pode usar [<DNT>**phpinfo**</DNT> para verificar se seu aplicativo está sendo instrumentado](/docs/agents/php-agent/troubleshooting/using-phpinfo-verify-php).

## Resolução de problemas o agente no Heroku [#troubleshooting]

Para solucionar problemas do agente PHP no Heroku, examine seu arquivo de log, que está armazenado no log do servidor web Heroku.

1. Para visualizar o log do servidor web, execute este comando do Heroku Toolbelt:

   ```bash
   heroku logs -t | tee newrelic.log
   ```

2. Use o arquivo de log para solucionar o problema.

3. Se precisar de mais assistência, [obtenha suporte em support.newrelic.com](https://support.newrelic.com).

O agente PHP usa como padrão o [nível de log](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-loglevel) `warning` . O suporte da New Relic também pode solicitar log no nível de log `verbosedebug` . Para alterar o nível de log para `verbosedebug`, execute este comando do Toolbelt do Heroku:

```bash
heroku config:set NEW_RELIC_LOG_LEVEL=verbosedebug
```

<Callout variant="caution">
  O nível de log `verbosedebug` gera rapidamente um grande volume de dados. Use esta configuração somente se o suporte da New Relic solicitar e remova-a assim que coletar a saída executando este comando do cinto de ferramentas Heroku:

  ```bash
  heroku config:unset NEW_RELIC_LOG_LEVEL
  ```
</Callout>

<InstallFeedback/>
