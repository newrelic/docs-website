---
title: Monitoramento remoto para integração no host
tags:
  - Integrations
  - On-host integrations
  - Understand and use data
metaDescription: 'How remote monitoring works for some New Relic on-host integrations (particularly Apache, Cassandra, MySQL, NGINX, and Redis)'
freshnessValidatedDate: never
translationType: machine
---

Da perspectiva da New Relic, [entidade](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic#what-is-entity) é um conceito amplo. Uma entidade é qualquer coisa que New Relic possa identificar e que contenha dados que você possa monitor.

Nossa integração no host pode ser configurada para criar sua própria entidade, chamada <DNT>**remote entity,**</DNT>, definindo a opção `remote_monitoring` como `true`. Se definido como `false`, uma integração será considerada uma entidade local e os dados relacionados a ela serão anexados à entidade host criada pelo agente. O monitoramento remoto requer agente de infraestrutura [versão 1.2.25 ou superior](/docs/release-notes/infrastructure-release-notes/infrastructure-agent-release-notes).

Para integração [Apache](/docs/integrations/host-integrations/host-integrations-list/apache-monitoring-integration), [Cassandra](/docs/integrations/host-integrations/host-integrations-list/cassandra-monitoring-integration), [MySQL](/docs/integrations/host-integrations/host-integrations-list/mysql-monitoring-integration), [NGINX](/docs/integrations/host-integrations/host-integrations-list/nginx-monitoring-integration) e [Redis](/docs/integrations/host-integrations/host-integrations-list/redis-monitoring-integration), o monitoramento remoto (e [multitenancy](/docs/integrations/host-integrations/getting-started/introduction-host-integrations#multiple-instances)) é habilitado ativando o parâmetro de configuração `remote_monitoring`.

<Callout variant="important">
  Se o seu serviço Apache, Cassandra, MySQL, NGINX ou Redis estiver localizado no mesmo host que o agente, ao ativar o monitoramento remoto a entidade resultante será considerada remota, independentemente de sua localização real. Isto pode afetar alertas, alterar atributo e ter outros efeitos, conforme explicado aqui.
</Callout>

## Efeitos da ativação `remote_monitoring` [#effects-activating-remote-monitoring]

Ao ativar `remote_monitoring`, a integração se torna uma entidade diferente que não está mais anexada ao agente de infraestrutura. Como resultado, os seguintes itens podem ser afetados:

<CollapserGroup>
  <Collapser
    id="verify-alerts"
    title="Verificação de alerta"
  >
    [<DNT>**Enabling remote monitoring can affect your configured alerts**</DNT>](/docs/verify-your-alerts-after-activating-remote-monitoring) caso estejam usando algum dos valores afetados por esse novo recurso. É altamente recomendável verificar seu <InlinePopover type="alerts"/>existente para garantir que continue funcionando conforme o esperado.
  </Collapser>

  <Collapser
    id="new-entity-attributes"
    title="Nova entidade atributo"
  >
    Estes atributo são modificados na entidade resultante:

    * <DNT>
        **Display name**
      </DNT>

      : Nova chave exclusiva da entidade (em vez de usar o nome de exibição)

    * <DNT>
        **Entity GUID**
      </DNT>

      : GUID da nova entidade

    * <DNT>
        **Entity ID**
      </DNT>

      : Novo ID da entidade

    * <DNT>
        **Entity key**
      </DNT>

      : Nova chave exclusiva da entidade (em vez de usar o nome de exibição)

    * <DNT>
        **External key**
      </DNT>

      : Usando o nome da entidade de integração (em vez de usar a exibição do agente)
  </Collapser>

  <Collapser
    id="new-decoration"
    title="Mudanças nas métricas registradas"
  >
    Quando o monitoramento remoto estiver habilitado, adicionaremos os valores `hostname` e `port` a todas as métricas. Se o nome `nricluster` ou `nriservice` estiverem definidos no arquivo de configuração de integração, eles também serão decorados.
  </Collapser>

  <Collapser
    id="lost-attributes"
    title="Atributo não registrado"
  >
    Dado que a integração passou a ser uma entidade independente e não vinculada ao agente, não são cobrados os seguintes atributos do agente:

    * `agentName`
    * `agentVersion`
    * `coreCount`
    * `criticalViolationCount`
    * `fullHostname`
    * `instanceType`
    * `kernelVersion`
    * `linuxDistribution`
    * `entityType`
    * `operatingSystem`
    * `processorCount`
    * `systemMemoryBytes`
    * `warningViolationCount`
    * Seu [atributo personalizado](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#attributes)
  </Collapser>

  <Collapser
    id="updated-hostname"
    title="Nome do host atualizado"
  >
    Para a métrica de integração `ApacheSample`, `RedisSample`, `CassandraSample` e `NginxSample`, usaremos a integração configuração nome do host em vez do nome abreviado do host do agente.

    Quando o nome do host de integração for um [endereço de loopback](/docs/integrations/integrations-sdk/file-specifications/integration-executable-file-specifications#h2-loopback-address-replacement-on-entity-names), o agente o substituirá para garantir a exclusividade.
  </Collapser>
</CollapserGroup>
