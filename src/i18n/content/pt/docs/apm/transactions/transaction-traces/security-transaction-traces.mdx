---
title: Segurança e rastreamento da transação
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: An explanation of the data security features for transaction traces in APM.
freshnessValidatedDate: never
translationType: machine
---

O APM [trace da transação](/docs/apm/transactions/transaction-traces/transaction-traces) coleta dados detalhados sobre [a transação](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction) da sua aplicação. Como eles coletam dados detalhados do seu aplicativo, o rastreamento da transação pode ser uma possível preocupação de segurança. Este documento explica como configurar o rastreamento da transação para suas necessidades de segurança de dados.

## Consulta ao banco de dados [#database]

Os tipos de dados coletados pela consulta ao banco de dados pelo rastreamento da transação variam de acordo com o agente de idiomas da New Relic. A coleção consulta é uma preocupação potencial de segurança e/ou privacidade porque consulta pode conter valores confidenciais.

Você pode personalizar a coleta da consulta ao banco de dados com três configurações de segurança diferentes:

* <DNT>
    **Obfuscated**
  </DNT>

  : Este é o valor padrão. Essa configuração remove literais de string e sequências numéricas da sua consulta e os substitui pelo caractere `?` . Por exemplo: a consulta `select * from table where ssn='123-45-6789'` se tornaria `select * from table where ssn=?`.

* <DNT>
    **Off**
  </DNT>

  : a coleção de consulta está totalmente desativada.

* <DNT>
    **Raw**
  </DNT>

  : se você tiver certeza de que a coleta completa de dados da consulta não afetará sua segurança de dados ou a privacidade do seu usuário, poderá alterar a configuração para `Raw`, que registrará todos os valores da consulta.

Você pode editar a coleção de consulta ao banco de dados com a configuração `Record SQL` , explicada em [Configurar rastreamento da transação](/docs/apm/transactions/transaction-traces/configure-transaction-traces).

## Atributo e parâmetro da solicitação HTTP [#http-params]

A coleta de dados de solicitação HTTP pode expor dados potencialmente confidenciais. A New Relic chama os dados de valor principal coletados durante uma solicitação HTTP <DNT>**attributes**</DNT>. Por padrão, a coleta de atributo é limitada apenas a informações HTTP básicas que não sejam fonte de dados confidenciais (por exemplo, código de resposta e host); estes fazem parte do grupo de atributo básico que a New Relic chama de [<DNT>**agent attributes**</DNT>](/docs/agents/manage-apm-agents/agent-data/agent-attributes).

Por questões de segurança dos dados, a coleta de outros atributos, incluindo parâmetros específicos do usuário, está desabilitada por padrão. Para obter informações sobre como ativar/desativar a coleta de atributo HTTP específico e atributo personalizado, consulte [Configurar rastreamento da transação](/docs/apm/transactions/transaction-traces/configure-transaction-traces#config-attributes).

## Modo de alta segurança [#high-security]

As configurações padrão do New Relic fornecem um alto nível de segurança. Para forçar as configurações mais seguras para todos os aplicativos da sua conta, você pode usar o <DNT>**high-security mode**</DNT>. Este modo garante que, não importa como seus administradores e usuários configurem sua conta, as configurações mais seguras sejam forçadas e não possam ser substituídas. Para obter mais informações, consulte [Modo de alta segurança](/docs/agents/manage-apm-agents/configuration/high-security-mode).
