---
title: Lighttpd integração
tags:
  - Lighttpd  integration
  - New Relic integrations
metaDescription: Install our Lighttpd dashboards and see your Lighttpd  data in New Relic.
freshnessValidatedDate: never
translationType: machine
---

Com nosso dashboard Lighttpd, sua equipe pode monitor medidas de resultados e dados de inventário. O monitoramento Lighttpd fornece informações importantes para ajudá-lo a construir uma imagem completa do desempenho do seu servidor web. Esses dados de desempenho incluem tempo de operação, rede em bytes e pacotes, número de conexões e muito mais. os dados métricos podem ser vistos em nosso painel pré-construído, e você também pode criar suas próprias pesquisas, gráficos e políticas de alertas personalizados. Nossa integração Lighttpd usa uma configuração NRI-Flex.

<img
  title="Lighttpd dashboard"
  alt="Lighttpd dashboard"
  src="/images/infrastructure_screenshot-full_Lighttptd-dashboard.webp"
/>

<figcaption>
  Depois de configurar a integração com o New Relic, veja seus dados em painéis como estes, prontos para uso.
</figcaption>

## Instalar o agente de infraestrutura [#install]

Para colocar dados no New Relic, instale nosso agente de infraestrutura. Nosso agente de infraestrutura coleta e ingere dados para que você possa acompanhar o desempenho do seu aplicativo. A versão deve ser 1.10.7 ou posterior para suportar a integração NRI-Flex.

É possível instalar o agente de infraestrutura de duas maneiras diferentes:

* Nossa [instalação guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) é uma ferramenta CLI que inspeciona seu sistema e instala o agente de infraestrutura junto com o agente de monitoramento do aplicativo que melhor funciona para seu sistema. Para saber mais sobre como funciona nossa instalação guiada, confira nossa [Visão geral da instalação guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* Se preferir instalar nosso agente de infraestrutura manualmente, você pode seguir um tutorial para instalação manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) ou [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).

## Integre Lighttpd com New Relic [#integrate]

Depois de instalado, o agente de infraestrutura pode ingerir dados do seu aplicativo e enviá-los para o New Relic, mas você ainda precisa integrar — ou estabelecer uma linha de comunicação — entre o agente e o seu aplicativo. Uma vez integrado, você pode começar com uma solução de monitoramento pronta para uso para seu aplicativo Lighttpd.

<Steps>
  <Step>
    ### Configure manualmente o arquivo `lighttpd.conf`

    Para exportar métricas na url `http://INSERT_DOMAIN:INSERT_PORT/server-status?json`, siga os seguintes passos:

    1. Vá para o caminho do arquivo de configuração lighttpd.

       ```shell
       cd /etc/lighttpd/
       ```

    2. Abra o arquivo `lighttpd.conf` para editar.

       ```shell
       sudo nano lighttpd.conf
       ```

    3. Adicione `mod_status` dentro do objeto `server.modules` .

    4. Adicione `status.status-url = /server-status` depois de `server.modules`.

    5. Atualize `server.document-root` com o caminho do arquivo lighttpd `/var/www/html/lighttpd-webpage`

    6. Atualize `server.port` no qual você está executando o lighttpd.

       ```
       server.port = 9880.
       ```

    7. Abra `http://INSERT_DOMAIN:INSERT_PORT/server-status?json` no navegador para verificar a métrica relacionada ao servidor.

       Aqui está um exemplo de arquivo de configuração:

       ```
       server.modules = (
           "mod_indexfile",
           "mod_access”,
           "mod_alias",
           "mod_redirect”,
           "mod_status"
       )

       server.document-root	= "/var/www/html/lighttpd-webpage"
       server.upload-dirs	  = ( "/var/cache/lighttpd/uploads" )
       server.errorlog		    = "/var/log/lighttpd/error.log"
       server.pid-file		    = "/run/lighttpd.pid"
       server.username		    = "www-data"
       server.groupname	    = "www-data"
       server.port		        = 9880
       status.status-url	    = "/server-status”
       ```
  </Step>

  <Step>
    ## Configuração NRI-Flex [#nri-flex-config]

    Depois de instalar o agente de infraestrutura em seu host, o binário `nri-flex` também será instalado com ele.

    Se o agente de infraestrutura não tiver sido instalado, siga as [etapas de instalação](https://github.com/newrelic/nri-flex/blob/master/docs/basic-tutorial.md) de `nri-flex` do [repositório nri-flex](https://github.com/newrelic/nri-flex).

    Para criar um arquivo de configuração flexível, siga estas etapas:

    1. Crie um arquivo chamado `lighttpd-http-config.yml` neste caminho:

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. Atualize o arquivo `lighttpd-http-config.yml` com estas configurações:

       * `EVENT_TYPE`: você pode considerar `EVENT_TYPE` como uma tabela de banco de dados New Relic que pode ser consultada usando NRQL (por exemplo, `LighttpdStatusSample`).
       * `URL`: contém a métrica formatada em json (por exemplo, `http://127.0.0.1:9880/server-status?json`).

       Aqui está um exemplo de arquivo de configuração:

       ```yml
       ---
       integrations:
         - name: nri-flex
           # interval: 30s
           config:
             name: lighttpdFlex
             apis:
               - event_type: INSERT_EVENT_TYPE
                 url: INSERT_URL  
       ```
  </Step>

  <Step>
    ### Encaminhar log Lighttpd para New Relic

    Você pode usar nosso [encaminhamento de logs](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para encaminhar o log do Lighttpd para New Relic.

    Em máquinas Linux, seu arquivo de log denominado `logging.yml` deve estar presente no caminho abaixo. Se você não visualizar seu arquivo de log, será necessário criá-lo seguindo a documentação de encaminhamento de logs acima.

    ```shell
    /etc/newrelic-infra/logging.d/
    ```

    Depois que o arquivo de log for criado, adicione o seguinte script ao arquivo `logging.yml` :

    ```yml
      - name: error.log
        file: /var/log/lighttpd/error.log
        attributes:
          logtype: lighttpd_log
    ```
  </Step>

  <Step>
    ### Reinicie o agente New Relic Infrastructure e o serviço lighttpd

    Antes de começar a ler seus dados, use as instruções em nossos [documentos do agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar seu agente de infraestrutura.

    ```shell
    sudo systemctl restart lighttpd.service && sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ### Monitor seu aplicativo [#monitor-app]

    Você pode escolher nosso modelo dashboard pré-construído chamado `Lighttpd` para monitor a métrica do seu servidor Lighttpd. Siga estas etapas para usar nosso modelo dashboard pré-construído:

    1. Vá para

       <DNT>
         **[one.newrelic.com](https://one.newrelic.com/)**
       </DNT>

       e clique em

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       .

    2. Clique na guia

       <DNT>
         **Dashboards**
       </DNT>

       .

    3. Na caixa de pesquisa, digite `lighttpd`.

    4. Ao ver nosso dashboard pré-construído, clique nele para instalá-lo em sua conta.

       Depois que seu aplicativo estiver integrado seguindo as etapas acima, o dashboard deverá exibir métricas.

       Para instrumentar o Lighttpd início rápido e ver métricas e alertas, você também pode seguir nossa [página Lighttpd início rápido](https://newrelic.com/instant-observability/lighttpd) que possui um botão <DNT>**Install now**</DNT> .

       Aqui estão alguns exemplos de consulta:

       <DNT>**Example:**</DNT> Veja a métrica capturada no New Relic criador de consulta.

       ```sql
       SELECT * FROM LighttpdStatusSample  LIMIT MAX
       ```

       <DNT>**Example:**</DNT> Verifique a conexão ativa por servidor.

       ```sql
       SELECT latest(BusyServers) FROM LighttpdStatusSample TIMESERIES AUTO
       ```
  </Step>
</Steps>

## Veja métrica Lighttpd em um dashboard [#dashboard]

Com apenas o agente de infraestrutura instalado e instrumentado com seu app, você pode visualizar seus dados brutos em nossa métrica & evento. Nosso <InlinePopover type="dashboards"/>padrão transforma esses dados brutos em tabelas e gráficos, que fornecem uma visão geral da integridade do seu sistema.

Para instrumentar o Lighttpd início rápido, instalar nosso dashboard padrão, e para ver métricas e alertas, você também pode seguir nossa [página Lighttpd início rápido](https://newrelic.com/instant-observability/lighttpd) clicando no botão <DNT>**Install now**</DNT> .

## Qual é o próximo? [#whats-next]

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.

* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.

* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o

  <InlinePopover type="dashboards"/>

  modo de exibição ou para adicionar mais conteúdo ao dashboard.
