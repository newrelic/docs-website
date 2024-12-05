---
title: Integração de monitoramento stack LAMPy
tags:
  - New Relic integrations
  - LAMPy
  - Linux
  - Apache
  - Python
  - MySQL
metaDescription: 'Use New Relic Linux, Apache, Python and MySQL monitoring to get a dashboard with metrics from your LAMPy application.'
freshnessValidatedDate: never
translationType: machine
---

Nossa integração LAMPy faz uso do agente de infraestrutura, integração MySQL, integração Apache e agente Python para fornecer um dashboard pré-construído com suas métricas mais importantes, como tempo de resposta, utilização de CPU, tráfego e frequências de login.

<img
  title="Lampy dashboard"
  alt="A screenshot depicting the LAMPy prebuilt dashboard"
  src="/images/infrastructure_screenshot-full_lampy-dashboard-1.webp"
/>

<figcaption>
  Depois de configurar nossa integração LAMPy, fornecemos a você um dashboard para a métrica do seu aplicativo web LAMPy.
</figcaption>

## Etapa 1: Instalar o agente de infraestrutura [#infra-install]

Para fazer isso, siga [as etapas de instalação do agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux) para o host que contém seu aplicativo LAMPy.

## Etapa 2: Instale a integração MySQL [#mysql-install]

Nossa integração LAMPy depende da integração MySQL para funcionar. Para saber mais e verificar os requisitos, consulte nossos [documentos do MySQL](/install/mysql/).

1. Em [one.newrelic.com](https://one.newrelic.com) , clique em

   <DNT>
     **Integrations & Agents > Infrastructure & OS > MySQL**
   </DNT>

   .

2. Siga as instruções para instalar o agente MySQL.

## Etapa 3: Instale a integração Apache [#apache-install]

Nossa integração LAMPy depende da integração Apache para funcionar. Para saber mais e verificar os requisitos, consulte nossos [documentos do Apache](/docs/infrastructure/host-integrations/host-integrations-list/apache-monitoring-integration/).

1. Em [one.newrelic.com](https://one.newrelic.com) , clique em

   <DNT>
     **Integrations & Agents > Infrastructure & OS > Apache**
   </DNT>

   .

2. Siga as instruções na tela para instalar o agente Apache.

## Etapa 4: instale o agente Python [#python-install]

Nossa integração LAMPy depende do agente Python para funcionar. Para saber mais e verificar os requisitos, consulte nossos [documentos do Python](/docs/apm/agents/python-agent/getting-started/introduction-new-relic-python/).

1. Em [one.newrelic.com](https://one.newrelic.com) , clique em <DNT>**Integrations & Agents > Application monitoring > Python**</DNT>.

2. Nomeie seu aplicativo.

3. Baixe o arquivo de configuração e coloque-o no diretório raiz do seu aplicativo.

4. Integre seu agente python que está conectado ao site do Django. Este agente python também é executado no servidor Apache.

5. Adicione esta linha ao seu arquivo `settings.py` :

   ```py
     NEW_RELIC_CONFIG_FILE = BASE_DIR / 'newrelic.ini'
   ```

6. Adicione estas linhas ao seu arquivo `wsgi.py` :

   ```py
   import newrelic.agent

   from django.conf import settings 
   from django.core.wsgi import get_wsgi_application

   application = get_wsgi_application()

   newrelic.agent.initialize(settings.NEW_RELIC_CONFIG_FILE)
   newrelic.agent.WSGIApplicationWrapper(application)

   ```

## Etapa 5: reinicie seu servidor Apache

Aguarde alguns minutos e prossiga para encontrar seus dados no New Relic.

## Encontre seus dados [#find-data]

Para obter seu dashboard LAMPy:

1. De [one.newrelic.com](https://one.newrelic.com), vá para a [página](https://one.newrelic.com/marketplace)

   <DNT>
     [**Integrations & Agents**](https://one.newrelic.com/marketplace)
   </DNT>

   [](https://one.newrelic.com/marketplace).

2. Clique em

   <DNT>
     **Dashboards**
   </DNT>

   .

3. Na barra de pesquisa, digite `LAMPy`.

4. O dashboard LAMPy deve aparecer. Clique nele para instalá-lo.

Seu dashboard LAMPy é considerado um painel personalizado e pode ser encontrado na interface <DNT>**Dashboards**</DNT>. Para obter documentos sobre como usar e editar o painel, consulte [nossos documentos dashboard ](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards).

Para obter informações sobre os dados relatados, consulte a documentação de cada uma das ferramentas instaladas:

* [Dados Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux/)
* [Dados MySQL](/install/mysql/#metrics)
* [Dados Apache](/docs/infrastructure/host-integrations/host-integrations-list/apache-monitoring-integration/)
* [Dados Python](/docs/apm/agents/python-agent/getting-started/introduction-new-relic-python/)

Se você instalou o agente de infraestrutura, também receberá [dados de infraestrutura](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-monitoring-data/#infrastructure-events).

Aqui está um exemplo de consulta NRQL para verificar os bytes enviados por solicitação:

```sql
SELECT (average(`apache.server.net.bytesPerSecond`) / average(`apache.server.net.requestsPerSecond`)) as 'Bytes sent per request' 
FROM Metric 
TIMESERIES auto
```

## Qual é o próximo? [#whats-next]

Para saber mais sobre como consultar seus dados e criar dashboards personalizados, confira estes documentos:

* [Introdução ao criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)
* [Introdução ao painel personalizado](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)
* [Gerencie seu dashboard](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)
