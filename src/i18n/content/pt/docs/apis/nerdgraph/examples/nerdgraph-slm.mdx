---
title: 'Tutorial NerdGraph: Configurar nível de serviço'
tags:
  - Full-Stack Observability
  - Observe everything
  - Service level management
  - SLI/SLO
  - Configure
  - Consume
  - NerdGraph
metaDescription: Our new offer to create and consume SLI/SLOs using the NerdGraph API.
freshnessValidatedDate: never
translationType: machine
---

Com o New Relic você pode implementar [nível de serviço](/docs/service-level-management/create-slm) para seu aplicativo, [consumir](/docs/service-level-management/consume-slm) facilmente os resultados da interface durante suas sessões de planejamento e resposta a incidentes, e iterar progressivamente na configuração para ajustar seus objetivos à experiência do usuário desejada.

Além da interface, você também pode usar nosso [NerdGraph API Explorer](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/) para criar e editar SLIs e seus SLOs. Alternativamente, você pode automatizar essa configuração usando o [recurso nível de serviço do Terraform](https://registry.terraform.io/providers/newrelic/newrelic/latest/docs/resources/service_level).

<Callout variant="important">
  Para criar um nível de serviço, o usuário precisa de [permissão para modificar e excluir regras de evento-to-métrica](/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions#insights).
</Callout>

## Crie um SLI com um SLO [#create-sli-slo]

Consulte [Criar e editar SLIs e SLOs](/docs/service-level-management/create-slm#sli-entity) para aprender os conceitos básicos da configuração de SLI e SLO, como a entidade à qual um SLI está associado. Além disso, você pode consultar essa documentação para encontrar exemplos dos indicadores mais comuns para <InlinePopover type="apm" />serviços e <InlinePopover type="browser" />aplicativo.

Veja a seguir um exemplo de chamada do NerdGraph que cria um SLI usando a consulta de mutação `serviceLevelCreate` :

```graphql
mutation {
  serviceLevelCreate(
    entityGuid: "entityGuid"
    indicator: {
      name: "Latency below 0.25 seconds"
      description: "The proportion of valid requests that were served faster than 0.25s, which is considered to correspond to a good experience."
      events: {
        validEvents: { 
          from: "Transaction", 
          where: "entityGuid = 'entityGuid'" 
        }
        goodEvents: {
          from: "Transaction"
          where: "entityGuid = 'entityGuid' and duration < 0.25"
        }
        accountId: accountId
      }
      objectives: {
        target: 99.5
        timeWindow: { 
          rolling: { 
            count: 7, 
            unit: DAY 
          } 
        }
      }
    }
  ) {
    id
    description
  }
}
```

Ele contém estes campos:

* <DNT>**`entityGuid`**</DNT>: o GUID da [entidade](https://docs-preview.newrelic.com/docs/service-level-management/create-slm#sli-entity) (por exemplo, serviço <InlinePopover type="apm" />, aplicativo de browser, etc.) à qual você deseja relacionar este SLI. Na interface, você pode encontrar esse GUID na página da entidade, em <DNT>**See metadata and manage tags**</DNT>.

* <DNT>**`description`**</DNT>: Use descrições detalhadas, incluindo o limite selecionado que determina um bom evento.

  * Por exemplo, para um SLI de disponibilidade, inclua algo como “A proporção de solicitações válidas que foram atendidas sem erros”.
  * Ou, para um SLI de latência, inclua uma descrição como “A proporção de solicitações válidas que foram atendidas mais rápido que 0,25s, o que é considerado como correspondendo a uma boa experiência”.

* <DNT>**`accountId`**</DNT>: o ID da conta à qual pertence o serviço <InlinePopover type="apm" />ou aplicativo de browser, que contém os dados NRDB para os cálculos de SLI/SLO.

* <DNT>**`badEvents.from`**</DNT>, <DNT>**`badEvents.where`**</DNT>

  * A consulta NRQL que define evento inválido, `SELECT count(*) FROM badEvents.from WHERE badEvents.where`, requer estas cláusulas `FROM` e `WHERE` .
  * Se você definiu um SLI de evento válido e inválido, deixe o objeto `goodEvents` vazio.

* <DNT>**`goodEvents.from`**</DNT>, <DNT>**`goodEvents.where`**</DNT>

  * A consulta NRQL que define o evento bom, `SELECT count(*) FROM goodEvents.from WHERE goodEvents.where`, requer estas cláusulas `FROM` e `WHERE` .
  * Se você definiu um SLI de evento válido e bom, deixe o objeto `badEvents` vazio.

* <DNT>**`validEvents.from`**</DNT>, <DNT>**`validEvents.where`**</DNT>
  * Estas são as cláusulas `FROM` e `WHERE` para a consulta NRQL que define o evento válido, que resultará em `SELECT count(*) FROM validEvents.from WHERE validEvents.where`.

* <DNT>**`name`**</DNT>: um nome curto de categoria para seu SLI para ajudar a entender do que se trata o nível de serviço. Sugerimos incluir quaisquer parâmetros e filtros específicos envolvidos na definição do SLI. Exemplos:

  * Disponibilidade
  * Latência abaixo de 4 segundos
  * CLS para desktops abaixo de 0,1

* <DNT>**`objectives`**</DNT>: Uma matriz de objetivos (SLOs) para o SLI.

  * `target`: O destino do seu SLO, até 100,00. O campo suporta até 5 casas decimais.
    * Se o seu usuário estiver satisfeito com a experiência atual, defina a porcentagem de SLO para corresponder à baseline atual. Por exemplo, o percentil utilizado para determinar o evento bom do SLI.
  * `timeWindow.rolling.count`: A duração do período considerado para calcular o SLO. Os valores suportados são `1`, `7`, `14`, `28` e `30`.
  * `timeWindow.rolling.unit`: `DAY`é o valor suportado.

### Usando `SELECT` [#select-functions]

Temos um atributo `SELECT` opcional, definido como `count(*)` por padrão. Se você tiver um cenário mais complexo, você pode usar `select` para ser explícito sobre a métrica ou a propriedade do evento que deseja consultar. Para o `SELECT` também a função `SUM` é suportada, bem como o curinga (`%`). Vejamos um exemplo de configuração `SELECT` mais complexa.

```graphql
mutation {
  serviceLevelCreate(
    entityGuid: "entityGuid"
    indicator: {
      name: "Success request"
      description: "The proportion of success requests count is 99% that the total count"
      events: { 
        validEvents: { 
          select: {
            function: SUM
            attribute: "http.request.status.%.count"
          },
          from: "Metric"
        }
        goodEvents: {
          select: {
            function: SUM
            attribute: "http.request.status.2%.count"
          },
          from: "Metric"
        }
        accountId: accountId
      }
      objectives: {
        target: 99.5
        timeWindow: { 
          rolling: { 
            count: 7, 
            unit: DAY 
          } 
        }
      }
    }
  ) {
    id
    description
  }
}
```

Observe que as propriedades `validEvents` e `goodEvents` de `events` agora incluem um `select`. No select você pode configurar a função:

* `COUNT`: função padrão, contará o número de resultados;
* `SUM`: soma todos os valores do evento/métrica selecionado.

Outra diferença importante neste exemplo é a utilização do curinga (`%`) para consultar valores de todas as métricas com o mesmo formato. Imagine que sua aplicação está reportando a contagem de solicitações por status (por exemplo, `http.request.status.200.count`, `http.request.status.201.count`, `http.request.status.400.count`, etc.), a consulta irá somar todos os nomes de métricas correspondentes usando o curinga.

## Recuperar a configuração de um SLI para um serviço APM [#retrieve-config]

Use esta consulta para recuperar a configuração de um SLI, incluindo seu `id`.

```graphql
{
  actor {
    entity(guid: "entityGuid") {
      guid
      name
      serviceLevel {
        indicators {
          createdAt
          createdBy {
            email
          }
          description
          entityGuid
          id
          name
          objectives {
            target
            timeWindow {
              rolling {
                count
                unit
              }
            }
          }
        }
      }
    }
  }
}
```

## Atualizar os SLOs de um SLI [#update-slo]

Use a mutação `serviceLevelUpdate` para definir um ou mais SLOs para cada um dos SLIs. Para obter os SLIs `id`, use a consulta acima.

```graphql
mutation {
  serviceLevelUpdate(
    id: "indicators.id"
    indicator: {
      objectives: {
        target: 99.00
        timeWindow: { 
          rolling: { 
            count: 7, 
            unit: DAY 
          }
        }
      }
    }
  ) {
    id
  }
}
```