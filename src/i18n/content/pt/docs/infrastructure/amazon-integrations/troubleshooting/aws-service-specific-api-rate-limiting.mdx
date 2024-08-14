---
title: Serviços da AWS limitação de taxa API específica
type: troubleshooting
tags:
  - Integrations
  - Amazon integrations
  - Troubleshooting
metaDescription: Troubleshooting procedures if you encountered a rate limit for service-specific APIs with your New Relic infrastructure integration for AWS.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Depois de ativar a integração da Amazon com o monitoramento de infraestrutura New Relic , você encontra um limite de taxa para API específica de serviço. Você poderá ver esta mensagem em seu software de monitoramento da AWS, geralmente com um erro `503` :

`AWS::EC2::Errors::RequestLimitExceeded Request limit exceeded.`

## Solução

<CollapserGroup>
  <Collapser
    id="arn"
    title="Verifique o ARN da sua conta de infraestrutura"
  >
    Certifique-se de não coletar informações de inventário para a conta ARN errada. Verifique se o ARN associado à sua conta New Relic está correto.
  </Collapser>

  <Collapser
    id="polling-frequency"
    title="Alterar a frequência da votação"
  >
    A [frequência de pesquisa](/docs/integrations/amazon-integrations/get-started/polling-intervals-aws-integrations) determina com que frequência a New Relic coleta dados do seu provedor de nuvem. Por padrão, a frequência de sondagem é definida como a frequência máxima disponível para cada serviço. Se você atingir o limite de taxa da API, poderá [diminuir a frequência da pesquisa.](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations#polling)
  </Collapser>

  <Collapser
    id="data-collection"
    title="Filtre seus dados"
  >
    Você pode definir filtros para cada integração para especificar quais informações deseja capturar. Se você atingir o limite de taxa da API, poderá [filtrar seus dados](/docs/integrations/new-relic-integrations/getting-started/configure-polling-frequency-data-collection-cloud-integrations#filter-data).
  </Collapser>

  <Collapser
    id="usage"
    title="Revise o uso da API"
  >
    Para revisar o uso API para nossa integração AWS :

    1. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Infrastructure > AWS > Account status dashboard**</DNT>.

    2. Revise o dashboard.

       O dashboard inclui um gráfico com a contagem de chamadas de API AWS da sua conta no último mês, bem como a chamada de API do CloudWatch (por recurso AWS ) no último dia. Esta informação é o uso da API apenas para New Relic. Não inclui outras AWS API ou uso do CloudWatch que possam ocorrer.
  </Collapser>
</CollapserGroup>

Para obter ajuda para determinar quais serviços podem causar um aumento no faturamento, obtenha suporte em [support.newrelic.com](https://support.newrelic.com/), ou entre em contato com seu representante de conta New Relic.

## Causa

Infraestrutura Amazon integração aproveita a AWS API de monitoramento para coletar dados de inventário. AWS impõe limites rígidos de taxas em muitos dos serviços da API específica da AWS consumidos pela integração New Relic . Adicionar a integração New Relic Amazon aumentará o uso da API específica do serviço e poderá afetar a rapidez com que você atinge seu limite de taxa.

Isso pode ser causado por um dos seguintes:

* Habilitando a integração da Amazon em vários plug-ins para o mesmo serviço
* Adicionando o [Role ARN](http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) incorreto à sua integração AWS
