---
title: 'Tutorial de NerdGraph: Administrar clave de API'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Use New Relic NerdGraph (our GraphQL API) to create and manage license keys and user keys.
freshnessValidatedDate: never
translationType: machine
---

Este documento contiene tutoriales sobre cómo usar [NerdGraph](/docs/introduction-new-relic-graphql) para administrar mediante programación algunas claves de API de New Relic: la clave de licencia, la clave del browser y el <InlinePopover type="userKey"/>. Para obtener información general sobre nuestras claves, consulte [clave de API](/docs/apis/get-started/intro-apis/types-new-relic-api-keys).

## Descripción general de la descripción de características [#terms]

Puede utilizar la [clave de API UI](https://one.newrelic.com/launcher/api-keys-ui.api-keys-launcher) para crear y administrar claves. Alternativamente, puede usar el campo `ApiAccess` de [NerdGraph](/docs/introduction-new-relic-graphql) para crear y administrar mediante programación los siguientes tipos de claves:

* [Claves de usuario](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#personal-api-key), necesarias para utilizar NerdGraph

* Claves de ingesta de datos, que incluyen:

  * El

    <InlinePopover type="licenseKey"/>

    : necesario para la ingesta de la mayoría de los datos en New Relic, excepto los datos

    <InlinePopover type="browser"/>

    y

    <InlinePopover type="mobile"/>

  * [Clave del navegador](/docs/browser/new-relic-browser/configuration/copy-browser-monitoring-license-key-app-id): requerida para la ingesta de datos de monitoreo del navegador

Un caso de uso común de esta característica es la capacidad de rotar claves por motivos de seguridad. Tenga en cuenta que no puede utilizar esta funcionalidad de NerdGraph para eliminar la clave de licencia o la clave browser que se creó originalmente con una cuenta; esas claves originales no se pueden eliminar. Solo puedes crear claves de licencia adicionales y administrar las que hayas creado.

Notas sobre esta funcionalidad:

* Todas las mutaciones pueden aceptar múltiples claves como argumentos y devolverán detalles sobre cambios y errores exitosos. Consulte los ejemplos a continuación para obtener más detalles.

* Todas las mutaciones (crear, actualizar y eliminar) darán como resultado un `NrAuditEvent` que se puede consultar con fines de auditoría. Para obtener más información, consulte [Evento de auditoría](/docs/insights/use-insights-ui/manage-account-data/query-account-audit-logs-nrauditevent).

* Respecto a la clave de licencia:

  * NerdGraph clasifica las claves de licencia como

    <DNT>
      **ingest keys**
    </DNT>

    . Esto se debe a que su uso principal es permitir la ingesta de datos.

  * Puede crear hasta 1000 claves de cada tipo de clave de licencia, lo que permite la rotación de claves.

  * No puede administrar ni eliminar la clave de licencia original; Solo puedes crear claves de licencia adicionales y administrar claves que hayas creado.

## Antes de usar ejemplos [#before-examples]

Cosas a tener en cuenta antes de utilizar estas consultas de ejemplo:

* Los siguientes ejemplos utilizan clave de licencia (también conocida como claves de ingesta), pero puede consultar [las claves de usuario](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#user-api-key) de manera similar, reemplazando los campos específicos de la clave de ingesta con campos específicos de la clave de usuario.
* Para comprender la estructura de datos, recomendamos experimentar con consulta utilizando el [explorador GraphiQL](https://api.newrelic.com/graphiql).
* También puede [crear, ver y eliminar claves de usuario mediante la UI.](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#personal-api-key)

## Crear claves

<Callout variant="tip">
  Puede buscar y generar claves de usuario utilizando el [explorador NerdGraph GraphiQL](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/#explorer), en la parte superior de esa interfaz.
</Callout>

Para crear múltiples claves (clave de usuario o clave de licencia) en una sola mutación, para múltiples cuentas y tipos de claves. Tenga en cuenta que la mutación puede devolver claves creadas correctamente, así como cualquier error encontrado al intentar crear claves.

Ejemplo de creación de una clave:

```
mutation {
  apiAccessCreateKeys(keys: {ingest: {accountId: YOUR_ACCOUNT_ID, ingestType:
    BROWSER, name: "Browser Key", notes: "A note."}}) {
    createdKeys {
      id
      key
      name
      notes
      type
      ... on ApiAccessIngestKey {
        ingestType
      }
    }
    errors {
      message
      type
      ... on ApiAccessIngestKeyError {
        accountId
        errorType
        ingestType
      }
    }
  }
}
```

Los resultados variarán dependiendo de sus datos. Utilice el [explorador GraphiQL](https://api.newrelic.com/graphiql) para experimentar con mutaciones y realizar consultas.

A continuación se muestra un ejemplo del uso de esta consulta para crear una [clave de usuario](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#user-api-key):

<CollapserGroup>
  <Collapser
    id="create-personal-api-key"
    title="Crear una clave de usuario"
  >
    Para crear una [clave de usuario](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#user-api-key), cambiaría ligeramente la consulta anterior, en la sección `keys` :

    ```
    mutation {
      apiAccessCreateKeys(keys: {user: {accountId: YOUR_ACCOUNT_ID, userId: YOUR_USER_ID}}) {
        createdKeys {
          id
          key
          name
          notes
          type
          ... on ApiAccessIngestKey {
            ingestType
          }
        }
        errors {
          message
          type
          ... on ApiAccessIngestKeyError {
            accountId
            errorType
            ingestType
          }
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Actualizar claves

La mutación de actualización toma el ID de la clave, no la cadena de claves, para identificar las claves.

```
mutation {
  apiAccessUpdateKeys(keys: {ingest: {keyId: KEY_ID, name: "Updated name", notes:
    "A new note!"}}) {
    updatedKeys {
      id
      key
      type
      name
      notes
    }
    errors {
      message
    }
  }
}
```

Los resultados variarán dependiendo de sus datos. Utilice el [explorador GraphiQL](https://api.newrelic.com/graphiql) para experimentar con mutaciones y realizar consultas.

## Eliminar claves

La mutación de eliminación toma el ID de la clave, no la cadena de claves, para identificar las claves. Las claves eliminadas ya no otorgarán acceso a los sistemas New Relic y ya no se devolverán mediante consulta a la API GraphQL de acceso a la API.

```
mutation {
  apiAccessDeleteKeys(keys: {ingestKeyIds: INGEST_KEY_ID}) {
    deletedKeys {
      id
    }
    errors {
      message
    }
  }
}
```

Los resultados variarán dependiendo de sus datos. Utilice el [explorador GraphiQL](https://api.newrelic.com/graphiql) para experimentar con mutaciones y realizar consultas.

## Claves de consulta

Puede acceder a las claves de ingesta y de usuario consultando una sola clave o todas las claves, en el ámbito del actor. Si solicita una sola clave, debe proporcionar el ID de la clave y el tipo (INGEST o usuario). La consulta de varias claves se realiza mediante una búsqueda de claves, que utiliza una lista de tipos obligatorios y un alcance opcional para filtrar los resultados. Las claves de usuario que pertenecen a otros usuarios se ocultarán en los resultados.

Consulta de ejemplo clave única:

```
query {
  actor {
    apiAccess {
      key(id: INGEST_KEY_ID, keyType: INGEST) {
        key
        name
        type
        ... on ApiAccessIngestKey {
          ingestType
        }
      }
    }
  }
}
```

Consulta de ejemplo de búsqueda clave:

```
query {
  actor {
    apiAccess {
      keySearch(query: {types: INGEST, scope: {ingestTypes: BROWSER}}) {
        keys {
          name
          key
          type
          ... on ApiAccessIngestKey {
            ingestType
          }
        }
      }
    }
  }
}
```

Los resultados variarán dependiendo de sus datos. Utilice el [explorador GraphiQL](https://api.newrelic.com/graphiql) para experimentar con mutaciones y realizar consultas.
