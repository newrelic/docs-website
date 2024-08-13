---
title: Seguridad y traza de la transacción.
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: An explanation of the data security features for transaction traces in APM.
freshnessValidatedDate: never
translationType: machine
---

APM [traza de la transacción](/docs/apm/transactions/transaction-traces/transaction-traces) recopila datos detallados sobre [la transacción](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction) de su aplicación. Debido a que recopilan datos detallados de su aplicación, la traza de la transacción puede ser un posible problema de seguridad. Este documento explica cómo configurar la traza de la transacción para sus necesidades de seguridad de los datos.

## Consulta de la base de datos [#database]

Los tipos de consulta de la base de datos recopilados por la traza de la transacción varían según el agente de lenguaje de New Relic. La colección de consultas es un posible problema de seguridad y/o privacidad porque consulta puede contener valores confidenciales.

Puede personalizar la consulta de la base de datos de recopilación con tres configuraciones de seguridad diferentes:

* <DNT>
    **Obfuscated**
  </DNT>

  : Este es el valor predeterminado. Esta configuración elimina los literales de cadena y las secuencias numéricas de su consulta y los reemplaza con el carácter `?` . Por ejemplo: la consulta `select * from table where ssn='123-45-6789'` se convertiría en `select * from table where ssn=?`.

* <DNT>
    **Off**
  </DNT>

  : la colección de consultas está completamente desactivada.

* <DNT>
    **Raw**
  </DNT>

  : Si está seguro de que la recopilación completa de datos de la consulta no afectará su seguridad de los datos ni la privacidad de su usuario, puede cambiar la configuración a `Raw`, que registrará todos los valores de la consulta.

Puedes editar la consulta de la base de datos de la colección con la configuración `Record SQL` , explicada en [Configurar la traza de la transacción](/docs/apm/transactions/transaction-traces/configure-transaction-traces).

## Atributo y parámetro de solicitud HTTP [#http-params]

La recopilación de datos de solicitudes HTTP puede exponer datos potencialmente confidenciales. New Relic llama a los datos principales de valor recopilados durante una solicitud HTTP <DNT>**attributes**</DNT>. De forma predeterminada, la recopilación de atributos se limita únicamente a información HTTP básica que no es una fuente de datos confidenciales (por ejemplo, código de respuesta y host); Estos son parte del grupo de atributos básicos al que New Relic se refiere como [<DNT>**agent attributes**</DNT>](/docs/agents/manage-apm-agents/agent-data/agent-attributes).

Por razones de seguridad de los datos, la recopilación de otros atributos, incluido el parámetro específico del usuario, está deshabilitada de forma predeterminada. Para obtener información sobre cómo habilitar/deshabilitar la recopilación de atributos HTTP específicos y atributos personalizados, consulte [Configurar traza de la transacción](/docs/apm/transactions/transaction-traces/configure-transaction-traces#config-attributes).

## Modo de alta seguridad [#high-security]

La configuración predeterminada de New Relic proporciona un alto nivel de seguridad. Para forzar la configuración más segura para todas las aplicaciones en su cuenta, puede usar <DNT>**high-security mode**</DNT>. Este modo garantiza que, sin importar cómo sus administradores y usuarios configuren su cuenta, las configuraciones más seguras serán forzadas y no podrán anularse. Para obtener más información, consulte [Modo de alta seguridad](/docs/agents/manage-apm-agents/configuration/high-security-mode).
