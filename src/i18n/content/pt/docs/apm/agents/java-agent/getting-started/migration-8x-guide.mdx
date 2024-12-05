---
title: Guia de migração do agente Java 7.x para 8.x
tags:
  - Agents
  - Java agent
  - Getting started
freshnessValidatedDate: never
translationType: machine
---

Este guia aborda as principais mudanças entre as séries 7.xe 8.x do agente Java. Ele aborda problemas que você pode encontrar durante a atualização e como migrar com êxito para a versão 8.x. As principais mudanças incluem:

* [Atributo de transação e intervalo alterado e removido](#changed_and_removed_attributes)
* [Instrumentação removida](#removed_instrumentation)

<Callout variant="important">
  Atributo removido nas versões 8.0 a 8.7 são reintroduzidos na 8.8.0. Isso oferece compatibilidade com versões anteriores para clientes que ainda usam esses atributos para <InlinePopover type="alerts"/>ou painel.
</Callout>

## Atributo de transação e intervalo alterado e removido [#changed_and_removed_attributes]

Para fornecer consistência em nosso agente APM e melhor alinhamento com os padrões do setor, alteramos o atributo de transação e extensão no agente Java. A partir do agente Java versão 7.6.0, introduzimos o novo atributo padrão <DNT>**http.statusCode**</DNT> e <DNT>**http.statusText**</DNT> e marcamos <DNT>**httpResponseCode**</DNT>, <DNT>**response.status**</DNT> e <DNT>**response.statusMessage**</DNT> como obsoletos.

| Atributo obsoleto                     | Novo atributo                  | Alteração de tipo de dados   |
| ------------------------------------- | ------------------------------ | ---------------------------- |
| <DNT>**httpResponseCode**</DNT>       | <DNT>**http.statusCode**</DNT> | <DNT>**String to INT**</DNT> |
| <DNT>**response.status**</DNT>        | <DNT>**http.statusCode**</DNT> | <DNT>**String to INT**</DNT> |
| <DNT>**response.statusMessage**</DNT> | <DNT>**http.statusText**</DNT> | <DNT>**N/A**</DNT>           |

## Ações Recomendadas

* Se você tiver alertas ou painel usando o atributo obsoleto e usar o agente versão 8.0 - 8.7, você deverá atualizar seu agente para 8.8 ou atualizar as referências ao atributo removido. Se você atualizou todos os alertas ou dashboard para o novo atributo padrão, você pode desabilitar o sinalizador de compatibilidade para usar apenas o novo atributo padrão. Para saber mais sobre a configuração do sinalizador de compatibilidade, consulte a configuração `http_attribute_mode` .
* Atualize alertas e painel que estão usando atributo obsoleto.

### Encontrando consulta de alerta impactada

Para encontrar e corrigir alertas afetados:

1. Use o [NerdGraph Explorer](https://one.newrelic.com/nerdgraph-graphiql) e pesquise alertas usando o operador `queryLike` para cada atributo que você está procurando. Por exemplo:

   ```
   {
     actor {
       user {
         name
       }
       account(id: <ACCOUNTID>) {
         alerts {
           nrqlConditionsSearch(searchCriteria: {queryLike: "httpResponseCode"}) {
             nrqlConditions {
               nrql {
                 query
               }
               id
               name
               policyId
             }
           }
         }
       }
     }
   }  
   ```

2. Para cada alerta retornado, você pode usar o ID ou o nome na interface <DNT>**Alerts> [Alerts Conditions](https://one.newrelic.com/alerts-ai/condition-builder/condition-list)**</DNT> para localizar o alerta.

3. Revise a condição do alerta e a cobertura do sinal para confirmar qualquer impacto no alerta.

4. Use as instruções em [Corrigindo alertas impactados e instruções NRQL do painel](#fixing_nrql) para atualizar as instruções NRQL.

### Encontrando consulta dashboard impactado

Para encontrar a consulta impactada para um dashboard:

1. Usando o NerdGraph Explorer e o guid da entidade localizado nos metadados de um dashboard, você pode obter todas as consultas de NRQL de um dashboard.

   ```
    {
     actor {
       entity(guid: "[ENTITY GUID]") {
         ... on DashboardEntity {
           guid
           name
           pages {
             widgets {
               rawConfiguration
             }
           }
         }
       }
     }
   }
   ```

2. A consulta NRQL retornará no item `rawConfiguration` . Você pode usar a pesquisa de texto para encontrar o atributo removido.

3. Use as instruções em [Corrigindo alertas impactados e instruções NRQL do painel](#fixing_nrql) para atualizar as instruções NRQL.

Você também pode obter a lista de guias de entidade para todos os painéis com a seguinte consulta:

```
 {
  actor {
    entitySearch(query: "domain IN ('VIZ')") {
      results {
        entities {
          guid
          accountId
        }
      }
    }
  }
}
```

### Correção de alertas impactados e declarações NRQL do painel [#fixing_nrql]

<DNT>**http.statusCode**</DNT> substituiria as referências a <DNT>**httpResponseCode**</DNT> ou <DNT>**response.status**</DNT>, que também possui um tipo de dados diferente. Anteriormente você teria usado uma referência como:

`[...] WHERE (Numeric(response.status)\>399 [...]`

para converter o tipo de dados string em um número. Você não precisa mais fazer isso e pode usar operações numéricas simples, como:

`[...] WHERE (http.statusCode \>399) [...]`

<DNT>**http.statusText**</DNT> substituiria as referências a <DNT>**response.statusMessage**</DNT>. O tipo de dados deste atributo não foi alterado.

## Instrumentação removida [#removed_instrumentation]

Removemos os seguintes modelos de instrumentação para versões de biblioteca que não são mais suportadas por seus respectivos mantenedores:

* cassandra-datastax-2.1.2
* httpclient-3.0
* jdbc-embedded-derby-10.2.1.6
* jdbc-embedded-derby-10.10.1.1
* jetty-7
* jetty-7.6
* jetty-9
* jetty-9.0.4
* jetty-9.1
* mongodb-2.12
* mongodb-2.14
* mongodb-3.0
* khttp-3.0.0
* khttp-3.4.0
* khttp-3.5.0

Caso sua aplicação utilize uma das bibliotecas, você não receberá mais as métricas e transações produzidas pela instrumentação para aquela biblioteca ao atualizar para um agente Java versão v8.x.

## Ações Recomendadas

Se possível, atualize a biblioteca afetada para uma versão suportada pelo mantenedor e pela New Relic e atualize seu agente. Se atualizar a biblioteca EOLed não for uma opção, você ainda poderá atualizar seu agente, mas recomendamos testá-lo e revisá-lo para determinar se os dados removidos causam lacunas em áreas críticas.
