---
title: 'Tutorial de NerdGraph: ver, crear y cambiar el nombre de cuentas'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: 'Examples of using New Relic''s NerdGraph API to view, create, and rename accounts.'
freshnessValidatedDate: never
translationType: machine
---

Como alternativa al [uso de la UIde New Relic](/docs/accounts/accounts-billing/account-structure/add-accounts), puede usar [NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph) para ver las cuentas de su organización, crear cuentas y cambiarles el nombre.

## Requisitos [#requirements]

Para conocer los requisitos para administrar la configuración a nivel de organización a través de NerdGraph, consulte [Agregar cuentas](/docs/accounts/accounts-billing/account-structure/add-accounts).

## Antes de que empieces [#concepts]

Antes de utilizar NerdGraph para administrar sus cuentas, probablemente le ayudará a comprender:

* [Qué son las cuentas y para qué sirven](/docs/accounts/accounts-billing/account-structure/new-relic-account-structure)
* Que también puedes [administrar y agregar cuentas a través de la UI](/docs/accounts/accounts-billing/account-structure/add-accounts).
* [Los conceptos básicos del uso de NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph)
* Que pueda [realizar un seguimiento de los cambios en su cuenta New Relic](/docs/data-apis/understand-data/event-data/query-account-audit-logs-nrauditevent)

Este tutorial le mostrará cómo:

* Ver cuentas
* Cambiar el nombre de las cuentas
* Agregar cuentas

## Consejos sobre términos y campos [#field-definitions]

Algunos consejos sobre algunos de los campos utilizados en estas solicitudes:

* Los campos `managedAccount` y `managedAccounts` son simplemente términos para las cuentas de una organización. Son sinónimos de "cuentas".
* El campo `regionCode` hace referencia [al centro de datos utilizado por una cuenta](/docs/accounts/accounts-billing/account-setup/choose-your-data-center). Los valores válidos son `us01` y `eu01` , que se corresponden con las regiones de EE. UU. y UE, respectivamente.

Tenga en cuenta que el [explorador NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/#explorer) tiene documentos integrados que definen campos.

## Ver cuentas [#view-accounts]

A continuación se muestra un ejemplo de cómo devolver las cuentas de su organización:

```graphql
{
  actor {
    organization {
      accountManagement {
        managedAccounts {
          name
          id
          regionCode
        }
      }
    }
  }
}
```

## Crear cuentas [#create-accounts]

A continuación se muestra un ejemplo de cómo crear una cuenta. Antes de crear una cuenta, asegúrese de comprender [para qué se utiliza](/docs/accounts/accounts-billing/account-structure/new-relic-account-structure).

```graphql
mutation {
  accountManagementCreateAccount(managedAccount: {name: "NEW_ACCOUNT_NAME"}) {
    managedAccount {
      id
      name
      regionCode
    }
  }
}
```

Si tiene una estructura de cuenta compleja, puede utilizar el parámetro opcional `regionCode` para apuntar a un centro de datos específico.

```graphql
mutation {
  accountManagementCreateAccount(managedAccount: {name: "NEW_ACCOUNT_NAME", regionCode: "eu01"}) {
    managedAccount {
      id
      name
      regionCode
    }
  }
}
```

## Cambiar el nombre de una cuenta [#rename-accounts]

A continuación se muestra un ejemplo de cómo cambiar el nombre de una cuenta.

```graphql
mutation {
  accountManagementUpdateAccount(managedAccount: {name: "UPDATED_ACCOUNT_NAME", id: 101010101}) {
    managedAccount {
      id
      name
      regionCode
    }
  }
}
```

## Errores [#errors]

Aquí hay algunos errores y lo que significan:

<table>
  <thead>
    <tr>
      <th className="fcenter">
        <DNT>
          **Error message**
        </DNT>
      </th>

      <th className="fcenter">
        <DNT>
          **Likely cause**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        ```"unauthorized", {
        extensions: { nerdGraphExtensions: { errorClass: "ACCESS_DENIED" } }
            }
        ```
      </td>

      <td>
        Esto indica un problema con la estructura de su organización (por ejemplo, una cuenta que está fuera de los límites de una organización). Si recibe este mensaje, comuníquese con [el soporte](/docs/new-relic-solutions/solve-common-issues/find-help-use-support-portal) o con su representante de cuenta.
      </td>
    </tr>

    <tr>
      <td>
        ```
        cannot create subaccount -- multiple parent account ids found. Please use Partnership API.", {
                extensions: { nerdGraphExtensions: { errorClass: "SERVER_ERROR" } }
              }
        ```
      </td>

      <td>
        Este es un mensaje que se devuelve cuando su organización tiene más de una "cuenta principal", lo cual es un indicador de que su organización tiene una estructura de cuentas compleja que se configuró con la [API de asociación](/docs/new-relic-partnerships/partner-integration-guide/partner-account-maintenance/partner-api) y requiere el uso de esa API. ¿Tiene preguntas? Póngase en contacto con [el soporte](/docs/new-relic-solutions/solve-common-issues/find-help-use-support-portal) o con su representante de cuenta.
      </td>
    </tr>

    <tr>
      <td>
        Otros errores
      </td>

      <td>
        Póngase en contacto con [el soporte](/docs/new-relic-solutions/solve-common-issues/find-help-use-support-portal) o con su representante de cuenta.
      </td>
    </tr>
  </tbody>
</table>

## Eliminar una cuenta [#delete]

Actualmente no puedes eliminar cuentas usando NerdGraph. En su lugar, pruebe estas opciones relacionadas:

* [Bajar de categoría o cancelar cuentas](/docs/accounts/accounts-billing/account-setup/downgradecancel-account)
* [Eliminar una entidad monitora](/docs/apis/nerdgraph/examples/nerdgraph-entities-api-tutorial/#delete-entities)
