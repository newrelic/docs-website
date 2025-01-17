---
title: Encaminhamento de log de Kong Gateway
tags:
  - Logs
  - Enable log management in New Relic
  - Enable log monitoring in New Relic
metaDescription: 'How to forward your logs to New Relic using our kong Gateway file log plugin, so you can use enhanced log management capabilities.'
freshnessValidatedDate: never
translationType: machine
---

O encaminhamento do log do Kong Gateway para New Relic fornece insights valiosos sobre o desempenho, a integridade, a segurança e o uso do gateway API . Este documento descreve como direcionar o plug-in de File Log do Kong Gateway para encaminhar o log do Kong Gateway para New Relic.

## Compatibilidade e requisitos [#compatibility-requirements]

Para usar este plug-in de encaminhamento de logs, você precisa do seguinte:

* [Plug-inKubernetes ](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding)instalado
* Kong Gateway instalado com [Definições de Recursos Personalizados (CRDs)](https://docs.konghq.com/kubernetes-ingress-controller/latest/plugins/rate-limiting/#install-the-gateway-apis)

## Instalar o plug-in Kong Gateway [#install-overview]

Para receber o log do Kong Gateway, você precisa conectar o plug-in de File Log do Kong Gateway à integração do New Relic Kubernetes . Esta configuração direciona o log por meio de uma saída padrão (`/dev/stdout`), que estabelece uma conexão entre a integração New Relic Kubernetes e o Kong Gateway.

<Steps>
  <Step>
    ## Instale a integração de log New Relic Kubernetes [#install-k8s-logs]

    Se ainda não o fez, [instale o plug-in New Relic Kubernetes para encaminhamento de log](/docs/logs/forward-logs/kubernetes-plugin-log-forwarding) e depois retorne a este documento. O plug-in usa uma imagem docker autônoma que coleta e encaminha logs do seu ambiente Kubernetes .
  </Step>

  <Step>
    ## Configurar o plug-in de File Log [#install-config-filelog]

    Depois de [instalar o plug-in de log de arquivo do Kong Gateway](https://docs.konghq.com/hub/kong-inc/file-log/), você precisa direcionar o plug-in para enviar o log para `/dev/stdout`. Aqui está um exemplo de manifesto para esta configuração:

    ```yaml
    # file-log-plugin.yaml
    apiVersion: configuration.konghq.com/v1
    kind: KongClusterPlugin
      metadata:
        name: global-file-log
        annotations:
            kubernetes.io/ingress.class: kong
        labels:
            global: "true"
      config:
        path: "/dev/stdout" # Directs logs through a standard output so New Relic can receive Kong Gateway logs
    plugin: file-log
    ```
  </Step>

  <Step>
    ## implantar a configuração no seu cluster do Kubernetes [#deploy-config]

    Implante o plug-in de configuração do File log no seu cluster Kubenrnetes, mas certifique-se de atualizar `file-log-plugin.yaml` com o nome do arquivo real do seu manifesto:

    ```bash
    kubectl apply -f file-log-plugin.yaml -n kong
    ```
  </Step>

  <Step>
    ## Confirme se seu log está na plataforma New Relic [#confirm-logs-platform]

    Depois de implantar a configuração, acesse **[one.newrelic.com &gt; All Capabilities &gt; Logs](https://one.newrelic.com/launcher/logger.log-launcher)**. Confirme se o log do Kong Gateway está aparecendo na plataforma acionando alguns dados e executando uma consulta que filtra esses dados.

    Você pode começar a construir essa consulta com este exemplo:

    ```sql
    SELECT * FROM Log
    ```
  </Step>
</Steps>

## Qual é o próximo? [#whats-next]

Agora que você está encaminhando seu log do Kong Gateway para New Relic, recomendamos verificar alguns de nossos outros documentos e tutoriais:

* Siga nosso tutorial para aprender como [gerenciar um grande volume de log](/docs/tutorial-manage-large-log-volume/get-started-managing-large-logs).
* Aprenda sobre [nossa sintaxe de log consulta](/docs/logs/ui-data/query-syntax-logs).
* Explore nossa documentação sobre a interface de logs, começando com nosso [documento de visão geral da interface de logs](/docs/logs/ui-data/use-logs-ui)