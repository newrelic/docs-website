---
title: Monitoreo remoto para integración en el host
tags:
  - Integrations
  - On-host integrations
  - Understand and use data
metaDescription: 'How remote monitoring works for some New Relic on-host integrations (particularly Apache, Cassandra, MySQL, NGINX, and Redis)'
freshnessValidatedDate: never
translationType: machine
---

Desde la perspectiva de New Relic, [entidad](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic#what-is-entity) es un concepto amplio. Una entidad es cualquier cosa New Relic pueda identificar y que tenga datos que usted pueda monitor.

Nuestra integración en el host se puede configurar para crear su propia entidad, llamada <DNT>**remote entity,**</DNT> configurando la opción `remote_monitoring` en `true`. Si se establece en `false`, una integración se considerará una entidad local y los datos relacionados con ella se adjuntarán a la entidad anfitriona que crea el agente. El monitoreo remoto requiere agente de infraestructura [versión 1.2.25 o superior](/docs/release-notes/infrastructure-release-notes/infrastructure-agent-release-notes).

Para la integración [Apache](/docs/integrations/host-integrations/host-integrations-list/apache-monitoring-integration), [Cassandra](/docs/integrations/host-integrations/host-integrations-list/cassandra-monitoring-integration), [MySQL](/docs/integrations/host-integrations/host-integrations-list/mysql-monitoring-integration), [NGINX](/docs/integrations/host-integrations/host-integrations-list/nginx-monitoring-integration) y [Redis](/docs/integrations/host-integrations/host-integrations-list/redis-monitoring-integration), el monitoreo remoto (y [multi-tenancy](/docs/integrations/host-integrations/getting-started/introduction-host-integrations#multiple-instances)) se habilita activando el parámetro de configuración `remote_monitoring`.

<Callout variant="important">
  Si su servicio Apache, Cassandra, MySQL, NGINX o Redis está ubicado en el mismo host que el agente, cuando active el monitoreo remoto la entidad resultante se considerará remota, independientemente de su ubicación real. Esto puede afectar alertas, alterar atributos y tener otros efectos, como se explica aquí.
</Callout>

## Efectos de activar `remote_monitoring` [#effects-activating-remote-monitoring]

Al habilitar `remote_monitoring`, la integración se convierte en una entidad diferente que ya no está adjunta al agente de infraestructura. Como resultado, los siguientes elementos pueden verse afectados:

<CollapserGroup>
  <Collapser
    id="verify-alerts"
    title="Verificación de alerta"
  >
    [<DNT>**Enabling remote monitoring can affect your configured alerts**</DNT>](/docs/verify-your-alerts-after-activating-remote-monitoring) en caso de que estén utilizando alguno de los valores afectados por esta nueva característica. Recomendamos encarecidamente verificar su <InlinePopover type="alerts"/>existente para asegurarse de que siga funcionando como se esperaba.
  </Collapser>

  <Collapser
    id="new-entity-attributes"
    title="Nueva entidad atributo"
  >
    Estos atributos se modifican en la entidad resultante:

    * <DNT>
        **Display name**
      </DNT>

      : Nueva clave única de entidad (en lugar de usar el nombre para mostrar)

    * <DNT>
        **Entity GUID**
      </DNT>

      : GUID de nueva entidad

    * <DNT>
        **Entity ID**
      </DNT>

      : ID de nueva entidad

    * <DNT>
        **Entity key**
      </DNT>

      : Nueva clave única de entidad (en lugar de usar el nombre para mostrar)

    * <DNT>
        **External key**
      </DNT>

      : Usando el nombre de la entidad de integración (en lugar de usar la pantalla del agente)
  </Collapser>

  <Collapser
    id="new-decoration"
    title="Cambios en la métrica registrada"
  >
    Cuando el monitoreo remoto esté habilitado, sumaremos los valores `hostname` y `port` a todas las métricas. Si el nombre `nricluster` o `nriservice` están definidos en el archivo de configuración de integración, también serán decorados.
  </Collapser>

  <Collapser
    id="lost-attributes"
    title="Atributo no registrado"
  >
    Dado que la integración ahora es una entidad independiente que no está adscrita al agente, no se recopilan los siguientes atributos de agente:

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
    * Tu [atributo personalizado](/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#attributes)
  </Collapser>

  <Collapser
    id="updated-hostname"
    title="Nombre de host actualizado"
  >
    Para la integración métrica `ApacheSample`, `RedisSample`, `CassandraSample` y `NginxSample`, usaremos la integración configuración nombre de host en lugar del nombre de host corto del agente.

    Cuando la integración nombre de host es una [dirección loopback](/docs/integrations/integrations-sdk/file-specifications/integration-executable-file-specifications#h2-loopback-address-replacement-on-entity-names), el agente la reemplazará para garantizar la unicidad.
  </Collapser>
</CollapserGroup>
