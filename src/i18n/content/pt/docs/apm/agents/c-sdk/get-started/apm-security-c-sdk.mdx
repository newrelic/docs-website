---
title: 'Segurança do APM: C SDK'
tags:
  - Agents
  - C SDK
  - Get started
metaDescription: How the C SDK ensures that the data sent from your application to be monitored by New Relic is secure.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO DE EOL"
>
  A partir de abril de 2022, não ofereceremos suporte ao recurso C SDK. Para obter mais detalhes, consulte nossa [postagem no Fórum de suporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

Devido à natureza do <DNT>C SDK</DNT>, você tem controle direto sobre quais dados são relatados à New Relic. Para garantir a privacidade dos dados e limitar os tipos de informações que New Relic recebe, nenhum dado do cliente é capturado, exceto aqueles que você fornece em sua chamada de API. Além disso, o <DNT>C SDK</DNT> reporta todos os dados à New Relic por HTTPS.

Para obter mais informações sobre nossas medidas de segurança, consulte nossa [documentação de segurança e privacidade](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) ou visite o [site de segurança da New Relic](https://newrelic.com/security).

## Configurações de segurança padrão [#default]

Por padrão, é assim que o <DNT>C SDK</DNT> trata os seguintes dados potencialmente confidenciais. Para obter mais informações, incluindo valores de código e exemplos, consulte a [documentação do C SDK sobre estruturas de dados no GitHub](https://newrelic.github.io/c-sdk/annotated.html).

<table>
  <thead>
    <tr>
      <th width="200px">
        Tipo de informação
      </th>

      <th>
        <DNT>C SDK</DNT> segurança de dados
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="name">
      <td>
        Nome da instância do armazenamento de dados ou nome do banco de dados
      </td>

      <td>
        O [`newrelic_datastore_segment_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__datastore__segment__config__t.html) é uma estrutura que configura se o nome da instância e o nome da tabela de um armazenamento de dados são capturados para instrumentação do segmento do armazenamento de dados.

        * Nomes de instância: por padrão, a configuração retornada por `newrelic_new_config()` permite o armazenamento de segmentos de dados com `instance_reporting` definido como `true`.
        * Nomes de banco de dados: por padrão, a configuração retornada por `newrelic_new_config()` permite o armazenamento de segmentos de dados com `database_name_reporting` definido como `true`.
      </td>
    </tr>

    <tr id="sql">
      <td>
        SQL
      </td>

      <td>
        A configuração `record_sql` em [`newrelic_transaction_tracer_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__transaction__tracer__config__t.html) controla o formato SQL no rastreamento de transação para produtos semelhantes a SQL compatíveis. A configuração padrão, `NEWRELIC_SQL_OBFUSCATED`, define caracteres alfanuméricos como `?`.
      </td>
    </tr>

    <tr id="audit-mode">
      <td>
        [Modo de auditoria](/docs/agents/manage-apm-agents/configuration/log-audit-all-data-your-new-relic-agent-transmits)
      </td>

      <td>
        O log de auditoria é um registro em texto simples de todos os dados enviados à New Relic pelo C SDK. Ao [iniciar o daemon C SDK](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code#daemon), adicione `-auditlog <file>` ao arquivo de configuração do daemon. Por exemplo:

        ```sh
        ./newrelic-daemon -f -logfile stdout -loglevel debug -auditlog audit.log
        ```

        <Callout variant="tip">
          Para ver todas as opções disponíveis para o daemon C: Na linha de comando, digite:

          ```sh
          ./newrelic-daemon --help
          ```
        </Callout>
      </td>
    </tr>
  </tbody>
</table>

## Personalize as configurações de segurança [#customize]

Se as configurações padrão não funcionarem para suas necessidades de negócios, você poderá personalizar como as informações são enviadas para o New Relic alterando [`newrelic_datastore_segment_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__datastore__segment__config__t.html) e [`newrelic_transaction_tracer_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__transaction__tracer__config__t.html).

<Callout variant="caution">
  Se você personalizar sua configuração, isso poderá afetar a segurança do seu aplicativo.
</Callout>
