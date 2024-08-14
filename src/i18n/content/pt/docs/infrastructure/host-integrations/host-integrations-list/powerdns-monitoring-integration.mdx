---
title: PowerDNS monitoramento integração
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: 'New Relic''s PowerDNS integration: how to enable, configure it, and an explanation of what data it reports.'
freshnessValidatedDate: never
translationType: machine
---

<Callout title="visualização">
  Ainda estamos trabalhando nesse recurso, mas adoraríamos que você experimentasse!

  Aplica-se apenas às versões a partir de [0.0.5](https://github.com/newrelic/newrelic-prometheus-exporters-packages/releases/tag/nri-powerdns-0.0.5) lançadas em outubro de 2021.

  Atualmente, esse recurso é fornecido como parte de um programa de visualização de acordo com nossas [políticas de pré-lançamento](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy).
</Callout>

A nossa [integração](/docs/integrations/host-integrations/getting-started/introduction-host-integrations) PowerDNS recolhe e envia métricas dimensionais do [PowerDNS](https://www.powerdns.com). Você pode visualizar esses [dados métricos](#metrics) em um painel pré-construído, criar políticas de alertas e criar consultas e gráficos personalizados.

Continue lendo para instalar a integração e ver quais dados coletamos.

## Compatibilidade e requisitos [#req]

Nossa integração é compatível com PowerDNS Recursor e Authoritative Server.

Antes de instalar a integração, certifique-se de atender aos seguintes requisitos:

* [Instale o agente de infraestrutura](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic), versão mínima 1.19.2.
* Distribuição Linux [compatível com o agente de infraestrutura](/docs/infrastructure/new-relic-infrastructure/getting-started/compatibility-requirements-new-relic-infrastructure#operating-systems).

Para obter dados da infraestrutura PowerDNS, nossa integração PowerDNS utiliza um [exportador Prometheus](https://github.com/janeczku/powerdns_exporter) terceirizado, que expõe a métrica do Prometheus na porta especificada na configuração. A integração recolhe essas métricas, transforma-as em entidade, filtra-as e depois envia-as para a New Relic.

Para habilitar a API, o servidor web e a API HTTP precisam estar habilitados.

Adicione estas linhas ao pdns.conf:

```
api=yes
api-key=changeme
```

E reinicie, os exemplos a seguir devem começar a funcionar:

```
curl -v -H 'X-API-Key: changeme' http://127.0.0.1:8081/api/v1/servers/localhost | jq .
curl -v -H 'X-API-Key: changeme' http://127.0.0.1:8081/api/v1
```

Para obter mais informações, [Habilitando Webserver e API](https://doc.powerdns.com/authoritative/http-api/index.html)

## Instalar e ativar [#install]

Para instalar a integração PowerDNS, escolha sua configuração:

<CollapserGroup>
  <Collapser
    id="linux-install"
    title="Instalação Linux"
  >
    1. Instale [o agente de infraestrutura](/docs/integrations/host-integrations/installation/install-infrastructure-host-integrations/#install) e substitua a variável `INTEGRATION_FILE_NAME` por `nri-powerdns`.

    2. Mude o diretório para a pasta integração:

       ```
       cd /etc/newrelic-infra/integrations.d
       ```

    3. Cópia do arquivo de configuração de amostra:

       ```
       sudo cp powerdns-config.yml.sample powerdns-config.yml
       ```

    4. Edite o arquivo `powerdns-config.yml` conforme descrito nas [definições de configuração](#config).
  </Collapser>

  <Collapser
    id="tarball"
    title="Instalação do Tarball (avançado)"
  >
    Você também pode [instalar a integração a partir de um arquivo tarball](/docs/integrations/host-integrations/installation/install-host-integrations-built-new-relic#tarball). Isso lhe dá controle total sobre o processo de instalação e configuração.
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## Configurar a integração [#config]

Para configurar a integração, edite a configuração no arquivo de configuração YAML da integração `powerdns-config.yml`.

Use a configuração YAML para colocar as credenciais de login necessárias e configurar como seus dados são coletados, dependendo de sua configuração e preferência.

Como esta integração é baseada em um exportador prometheus, as configurações aplicáveis a outras integração, como `interval`, `timeout` ou `inventory_source` não são suportadas.

## Configurações da instância PowerDNS [#instance-settings]

As seguintes opções de configuração estão disponíveis:

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Contexto
      </th>

      <th>
        Descrição
      </th>

      <th>
        Padrão
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **powerdns_url**
        </DNT>
      </td>

      <td>
        URL da API do serviço powerdns
      </td>

      <td>
        N/A
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **exporter_port**
        </DNT>
      </td>

      <td>
        Porta para expor endpoint de raspagem. Se isso não for fornecido, uma porta aleatória será usada para lançar o exportador
      </td>

      <td>
        porta aleatória
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **scrape_timeout**
        </DNT>
      </td>

      <td>
        Tempo até que uma solicitação de raspagem expire
      </td>

      <td>
        5s
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **api_key**
        </DNT>
      </td>

      <td>
        Chave de API usada para conectar ao servidor PowerDNS
      </td>

      <td>
        N/A
      </td>
    </tr>
  </tbody>
</table>

## Exemplo de configuração [#examples]

<CollapserGroup>
  <Collapser
    id="basic-config"
    title="Configuração básica"
  >
    Esta é a configuração básica usada para coletar métricas de uma instância autoritativa e de recursor:

    ```
    integrations:
      - name: nri-powerdns
        config:
          api_key: authoritative-secret
          exporter_port: 9121
          powerdns_url: http://localhost:8081/api/v1/
      - name: nri-powerdns
        config:
          api_key: recursor-secret
          exporter_port: 9122
          powerdns_url: http://localhost:8082/api/v1/
    ```
  </Collapser>
</CollapserGroup>

## Encontre e use dados [#find-and-use]

Para saber mais sobre como encontrar e usar seus dados, consulte [Compreender os dados de integração](/docs/infrastructure/integrations/find-use-infrastructure-integration-data).

Métrica estão anexadas à amostra métrica e [aos tipos de eventos](/docs/using-new-relic/data/understand-data/new-relic-data-types#events-new-relic) da entidade `POWERDNS_AUTHORITATIVE` e `POWERDNS_RECURSOR`. Você pode [consultar esses dados](/docs/using-new-relic/data/understand-data/query-new-relic-data) para fins de resolução de problemas, ou para criar [gráficos e dashboards personalizados](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/).

## Dados métricos [#metrics]

São criadas duas entidades: `POWERDNS_AUTHORITATIVE` e `POWERDNS_RECURSOR`.

As seguintes métricas dimensionais são capturadas raspando o exportador e vinculadas à entidade `POWERDNS_AUTHORITATIVE`:

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Nome
      </th>

      <th>
        Descrição
      </th>

      <th>
        Dimensões
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `powerdns_authoritative_uptime (count)`
      </td>

      <td>
        Tempo de operação em segundos do daemon.
      </td>

      <td>
        * tipo
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_packet_cache_size (gauge)`
      </td>

      <td>
        Número de entradas no cache de pacotes.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_recursive_queries_total (count)`
      </td>

      <td>
        Número total de consultas recursivas por status.
      </td>

      <td>
        * status
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_remote_queries (count)`
      </td>

      <td>
        Endereços IP de servidores remotos.
      </td>

      <td>
        * controlo remoto
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_security_status (gauge)`
      </td>

      <td>
        Status de segurança do servidor PDNS com base em `security-status.secpoll.powerdns.com`.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_exceptions_total (count)`
      </td>

      <td>
        Número total de exceções por erro.
      </td>

      <td>
        * Erro
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_latency_average_seconds (gauge)`
      </td>

      <td>
        Número médio de microssegundos que um pacote gasta no PowerDNS.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_dnsupdate_queries_total (count)`
      </td>

      <td>
        Número total de consultas de atualização de DNS por status.
      </td>

      <td>
        * status
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_qsize (gauge)`
      </td>

      <td>
        Número de pacotes aguardando atenção do banco de dados.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_response_rcodes (count)`
      </td>

      <td>
        Distribuição de rcodes.
      </td>

      <td>
        * rcode
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_signature_cache_size (gauge)`
      </td>

      <td>
        Número de entradas no cache de assinaturas.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_queries_unauth (count)`
      </td>

      <td>
        Consulta para domínios para os quais não temos autoridade.
      </td>

      <td>
        * registro
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_answers_bytes_total (count)`
      </td>

      <td>
        Número total de bytes de resposta enviados por protocolo.
      </td>

      <td>
        * proto
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_queries (count)`
      </td>

      <td>
        Consulta UDP Recebido.
      </td>

      <td>
        * registro
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_exporter_json_parse_failures (count)`
      </td>

      <td>
        Número de erros ao analisar estatísticas JSON do PowerDNS.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_deferred_cache_actions (count)`
      </td>

      <td>
        Ações de cache adiadas devido à manutenção por tipo.
      </td>

      <td>
        * tipo
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_up (gauge)`
      </td>

      <td>
        A última tentativa do PowerDNS foi bem-sucedida.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_query_cache_lookup (count)`
      </td>

      <td>
        Consulta pesquisas de cache por resultado.
      </td>

      <td>
        * resultado
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_key_cache_size (gauge)`
      </td>

      <td>
        Número de entradas no cache de chaves.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_answers_total (count)`
      </td>

      <td>
        Número total de respostas por protocolo.
      </td>

      <td>
        * proto
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_packet_cache_lookup (count)`
      </td>

      <td>
        Pesquisas de cache de pacotes por resultado.
      </td>

      <td>
        * resultado
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_metadata_cache_size (gauge)`
      </td>

      <td>
        Número de entradas no cache de metadados.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_queries_total (count)`
      </td>

      <td>
        Número total de consultas por protocolo.
      </td>

      <td>
        * proto
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_cpu_utilisation (count)`
      </td>

      <td>
        Número de milissegundos de CPU gastos no usuário e no espaço do kernel.
      </td>

      <td>
        * tipo
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_dnssec (count)`
      </td>

      <td>
        Contadores DNSSEC.
      </td>

      <td>
        * tipo
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_response_sizes (count)`
      </td>

      <td>
        Distribuição de tamanho das respostas.
      </td>

      <td>
        * tamanho
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_exporter_total_scrapes (count)`
      </td>

      <td>
        Total atual de raspagens de PowerDNS.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_authoritative_remote_queries_unauth (count)`
      </td>

      <td>
        Hosts remotos consultando domínios sobre os quais não temos autoridade.
      </td>

      <td>
        * controlo remoto
      </td>
    </tr>
  </tbody>
</table>

As seguintes métricas dimensionais são capturadas raspando o exportador e vinculadas à entidade `POWERDNS_RECURSOR`:

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Nome
      </th>

      <th>
        Descrição
      </th>

      <th>
        Dimensões
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `powerdns_recursor_incoming_queries_total (count)`
      </td>

      <td>
        Número total de consultas recebidas por rede.
      </td>

      <td>
        * net
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_outgoing_queries_total (count)`
      </td>

      <td>
        Número total de consultas realizadas por rede.
      </td>

      <td>
        * net
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_cache_size (gauge)`
      </td>

      <td>
        Número de entradas no cache.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_cache_lookups_total (count)`
      </td>

      <td>
        Número total de pesquisas de cache por resultado.
      </td>

      <td>
        * resultado
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_exporter_json_parse_failures (count)`
      </td>

      <td>
        Número de erros ao analisar estatísticas JSON do PowerDNS.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_answers_rcodes_total (count)`
      </td>

      <td>
        Número total de respostas por código de resposta.
      </td>

      <td>
        * rcode
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_exporter_total_scrapes (count)`
      </td>

      <td>
        Total atual de raspagens de PowerDNS.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_concurrent_queries (gauge)`
      </td>

      <td>
        Número de consultas simultâneas.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_answers_rtime_total (count)`
      </td>

      <td>
        Número total de respostas agrupadas por intervalos de tempo de resposta.
      </td>

      <td>
        * intervalo de tempo
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_latency_average_seconds (gauge)`
      </td>

      <td>
        Média móvel exponencial da latência entre perguntas e respostas.
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_exceptions_total (count)`
      </td>

      <td>
        Número total de exceções por erro.
      </td>

      <td>
        * Erro
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_response_time_seconds_sum (count)`
      </td>

      <td>
        Histograma do recurso PowerDNS tempo de resposta em segundos. (soma métrica)
      </td>

      <td/>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_response_time_seconds_bucket (count)`
      </td>

      <td>
        Histograma do recurso PowerDNS tempo de resposta em segundos. (métrica de intervalo)
      </td>

      <td>
        * ele
      </td>
    </tr>

    <tr>
      <td>
        `powerdns_recursor_up (gauge)`
      </td>

      <td>
        A última tentativa do PowerDNS foi bem-sucedida.
      </td>

      <td/>
    </tr>
  </tbody>
</table>

## Verifique o código-fonte [#source-code]

Esta integração é um software de código aberto. Isso significa que você pode [navegar pelo código-fonte](https://github.com/newrelic/newrelic-prometheus-exporters-packages) e enviar melhorias ou criar seu próprio fork e construí-lo.

Além disso, esta integração aproveita um exportador de código aberto criado pela comunidade.
