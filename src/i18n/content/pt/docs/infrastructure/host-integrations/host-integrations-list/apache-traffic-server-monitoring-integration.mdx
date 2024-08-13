---
title: Integração do Servidor de Apache Traffic
tags:
  - Apache Traffic Server integration
  - New Relic integrations
metaDescription: Install our Apache Traffic Server dashboards and see your Apache Traffic Server  data in New Relic.
freshnessValidatedDate: '2023-06-28T00:00:00.000Z'
translationType: machine
---

Nossa integração do Apache Traffic Server monitora o desempenho do seu tráfego HTTP/HTTPS do Apache Traffic Server pode ser encaminhado ou proxy reverso em uma ou ambas as direções, fornecendo desempenho e escalabilidade.

<img
  title="Apache Traffic Server dashboard"
  alt="Apache Traffic Server dashboard"
  src="/images/infrastructure_screenshot-full_apache-traffic-server-dashboard.webp"
/>

<figcaption>
  Depois de configurar nosso Apache Traffic Server, você pode instalar um dashboard para a métrica do seu Apache Traffic Server.
</figcaption>

## Instalar o agente de infraestrutura [#infra]

Para colocar dados no New Relic, instale nosso agente de infraestrutura. Nosso agente de infraestrutura coleta e ingere dados para que você possa acompanhar o desempenho do seu aplicativo. A versão deve ser 1.10.7 ou superior para suportar a integração NRI-Flex.

É possível instalar o agente de infraestrutura de duas maneiras diferentes:

* Nossa [instalação guiada](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd) é uma ferramenta CLI que inspeciona seu sistema e instala o agente de infraestrutura junto com o agente de monitoramento do aplicativo que melhor funciona para seu sistema. Para saber mais sobre como funciona nossa instalação guiada, confira nossa [Visão geral da instalação guiada](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview).
* Se preferir instalar nosso agente de infraestrutura manualmente, você pode seguir um tutorial para instalação manual para [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux), [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/) ou [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/).

## Instale o agente Apache New Relic

Nossa integração Apache coleta métricas de rede como conexões TCP, pesquisa de DNS, HTTPS, SSL e status de servidor e trabalhador. Para instalar a integração, siga as etapas de nossa [instalação guiada](https://one.newrelic.com/launcher/nr1-core.explorer?pane=eyJuZXJkbGV0SWQiOiJucjEtY29yZS5saXN0aW5nIn0=&cards%5B0%5D=eyJuZXJkbGV0SWQiOiJucjEtaW5zdGFsbC1uZXdyZWxpYy5ucjEtaW5zdGFsbC1uZXdyZWxpYyIsInBhdGgiOiJvaGkiLCJyZWNpcGVOYW1lIjoiYXBhY2hlLW9wZW4tc291cmNlLWludGVncmF0aW9uIiwiYWN0aXZlQ29tcG9uZW50IjoiVlRTT0NvbW1hbmQiLCJhY3RpdmVFbnZpcm9ubWVudCI6ImFwYWNoZS1vcGVuLXNvdXJjZS1pbnRlZ3JhdGlvbiJ9). Caso precise instalar a integração de uma forma diferente, veja [Apache monitoramento integração](/docs/infrastructure/host-integrations/host-integrations-list/apache-monitoring-integration/).

## Exponha sua métrica

Após a instalação bem-sucedida, o Apache Traffic Server deverá ser iniciado com êxito e, em seguida, deverá começar a ser executado em um `your_ip` com a porta `8080`. Você precisa configurar as estatísticas expostas da métrica.

1. Vá para o arquivo `plugin.config` :

   ```shell
   sudo nano /etc/trafficserver/plugin.config
   ```

2. Adicione a linha abaixo em seu arquivo `plugin.config` .

   ```
   stats_over_http.so
   ```

3. Certifique-se de que suas métricas estejam expostas na URL abaixo.

   Métrica do seu Apache Traffic Server: `http://YOUR_IP:8080/_stats`

## Configurar NRI-Flex para servidor de Apache Traffic [#integrate]

O Flex vem junto com o agente New Relic Infrastructure . Para criar um arquivo de configuração flexível, siga estas etapas:

1. Vá para o diretório `integrations.d` :

   ```shell
   cd /etc/newrelic-infra/integrations.d
   ```

2. Crie três arquivos chamados `nri-flex-apache-traffic-server-config.yml`, `nri-flex-ats-cache-config.yml` e `nri-flex-ats-http-config.yml`.

O valor em `event_type` é usado para armazenar métricas no NRDB. Seus arquivos devem ficar assim:

`nri-flex-apache-traffic-server-config.yml`:

```yml
integrations:
  - name: nri-flex
    interval: 30s
    config:
      name: ApcheTrafficServerMetrics
      apis:
        - event_type: ATSSampleMetrics
          url: http://YOUR_IP:8080/_stats 
          remove_keys:
            - http
            - cache
```

`nri-flex-ats-cache-config.yml`:

```yml
integrations:
  - name: nri-flex
    interval: 30s
    config:
      name: ATSCacheMetrics
      apis:
        - event_type: ATSCacheSampleMetrics
          url: http://YOUR_IP:8080/_stats 
          keep_keys:
          	- cache
```

`nri-flex-ats-http-config.yml`:

```yml
integrations:
  - name: nri-flex
    interval: 30s
    config:
      name: ApcheTrafficServerMetrics
      apis:
        - event_type: ATSHttpSampleMetrics
          url: http://YOUR_IP:8080/_stats 
          keep_keys:
          	- http
```

## Encaminhar log do Apache Traffic Server para New Relic

Você pode usar nosso [encaminhamento de logs](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) para encaminhar o log do Apache Traffic Server para New Relic.

Em máquinas Linux, seu arquivo de log denominado `logging.yml` deve estar presente neste caminho:

```shell
cd /etc/newrelic-infra/logging.d/
```

Após criar o arquivo de log, adicione o seguinte script ao arquivo `logging.yml` :

```yml
logs:
  - name: manager
    file: /var/log/trafficserver/manager.log
    attributes:
      logtype: ats_manager_logs
  - name: diags
    file: /var/log/trafficserver/diags.log
    attributes:
      logtype: ats_diags_logs 
```

## Reinicie o agente do New Relic Infrastructure

Antes de começar a ler seus dados, use as instruções em nossos [documentos do agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) para reiniciar seu agente de infraestrutura.

```shell
sudo systemctl restart newrelic-infra.service
```

Em alguns minutos, seu servidor Apache Traffic enviará métricas para [one.newrelic.com](https://one.newrelic.com).

## Encontre seus dados

Você pode escolher nosso modelo de dashboard pré-construído chamado `Apache Traffic Server` para monitor a métrica do servidor Apache Traffic Server. Siga estas etapas para usar nosso modelo dashboard pré-construído:

1. De [one.newrelic.com](https://one.newrelic.com), vá para a página

   <DNT>
     **+ Integrations & Agents**
   </DNT>

   .

2. Clique em

   <DNT>
     **Dashboards**
   </DNT>

   .

3. Na barra de pesquisa, digite `Apache Traffic Server`.

4. O dashboard do Apache Traffic Server deve aparecer. Clique nele para instalá-lo.

Seu dashboard do Apache Traffic Server é considerado um painel personalizado e pode ser encontrado na interface <DNT>**Dashboards**</DNT>. Para obter documentos sobre como usar e editar o painel, consulte [nossos documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

Aqui está uma consulta NRQL para verificar o total de perdas de cache do Apache Traffic Server:

```sql
SELECT latest(global.proxy.process.cache_total_misses) AS 'cache misses' FROM ATSCacheSampleMetrics
```

## Qual é o próximo?

Para saber mais sobre como construir uma consulta NRQL e gerar um painel, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para criação de consultas básicas e avançadas.
* [Introdução aos dashboards](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards) para personalizar seu dashboard e realizar diversas ações.
* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard) para ajustar o modo de exibição dos painéis ou para adicionar mais conteúdo ao seu dashboard.
