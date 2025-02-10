---
title: 'Paso 1: crear cuentas y organización'
metaDescription: Create organizations and accounts in the multi-tenency structure
freshnessValidatedDate: '2024-09-05T00:00:00.000Z'
translationType: machine
---

La multitenencia le permite configurar cualquier cantidad de organizaciones gestionadas en New Relic que estén relacionadas con una organización administradora principal. El primer paso para configurar una red multi-tenencia es crear cuentas y una organización. Para hacer esto, emplearás varias mutaciones de NerdGraph, dependiendo de la estructura de organización que estés creando:

* [Alto contacto](#high-touch): los proveedores de servicios gestionados generalmente emplean este enfoque para incorporar a los clientes que desean acceder directamente New Relic .

* [Bajo contacto](#low-touch): las compañías emplean este enfoque para crear nuevas organizaciones y cuentas para unidades de negocios o subsidiarias en New Relic.

¿No está seguro de qué enfoque adoptar? Consulte [Descripción general de los enfoques de múltiples inquilinos](/docs/accounts/accounts-billing/account-structure/multi-tenancy/intro-to-multi-tenancy#approaches).

<Callout variant="tip">
  Si es un cliente multiinquilino en cuanto a precios de consumo, la ingesta y los recuentos de usuarios se agregarán en toda su organización gestionada. Estos datos agregados sólo son visibles para la organización administradora.
</Callout>

## Requisitos [#requirements]

Como recordatorio, para emplear la función de múltiples inquilinos, cerciorar de completar lo siguiente para su organización:

1. Obtener aprobación: comunicar con su representante de cuenta para confirmar que su organización se agregó a la tenencia múltiple. Una vez aprobado, recibirá el derecho de múltiples inquilinos.
2. Cerciorar de tener los tipos de usuario correctos: el usuario dentro de la organización administradora que aprovechará el conjunto de características anterior debe estar aprovisionado como usuario principal o de plataforma completa.
3. Agregar usuario al grupo apropiado: el usuario con el tipo de usuario de plataforma principal o completa debe agregar a un grupo con `tenant_settings` aplicado.

## ¿Cómo puedes llamar en NerdGraph? [#org-calls]

Encuentre a continuación las mutaciones que se aplican al enfoque que desea adoptar: bajo contacto o alto contacto.

### Estructura de alto contacto [#high-touch]

Si es administrador de un proveedor de servicios gestionados o de una compañía que desea tener mucho control sobre las subsidiarias, complete lo siguiente:

<CollapserGroup>
  <Collapser id="high-touch-only-share" title="Alto contacto: Crea una cuenta para compartir">
    Un beneficio clave del enfoque de alto contacto es que usted puede crear cuentas de clientes directamente en su propia organización de gestión. Estas cuentas en su organización administradora le permiten monitor la telemetría de sus clientes.

    Luego, si tus clientes deciden que quieren ver los datos de la cuenta que estás monitoreando para ellos, puedes compartir la cuenta cuando creas una organización para ellos. El usuario de su organización gestionada solo puede ver los datos de las cuentas que usted especifique.

    Para crear cuentas que planea compartir con la organización gestionada, ejecute la siguiente mutación:

    ```graphql
    mutation {
      accountManagementCreateAccount(
        managedAccount: { name: "NEW_ACCOUNT_NAME", regionCode: "eu01" }
      ) {
        managedAccount {
          id
          name
          regionCode
        }
      }
    }
    ```

    Si comete un error y necesita cambiar el nombre de su cuenta, consulte nuestro [tutorial de NerdGraph](/docs/apis/nerdgraph/examples/manage-accounts-nerdgraph/#rename-accounts).

    Una vez que crees las cuentas que quieres compartir, estarás listo para crear la organización.
  </Collapser>

  <Collapser id="high-touch-org" title="Alto contacto: crear una organización">
    Cuando creas una organización en una estructura de alto contacto, a menudo querrás compartir una cuenta que estás gestionando en tu propia organización con el usuario de una organización gestionada. Para crear una organización y compartir una cuenta al mismo tiempo, ejecute una mutación similar a esta:

    ```graphql
    mutation {
      organizationCreate(
        customerId: "CC-1234567890"
        organization: {name: "New Customer Organization Name"}
        sharedAccount: {accountId: 1234, limitingRoleId: 0}
      ) {
        jobId
      }
    }
    ```

    Si inicialmente no desea compartir una cuenta con una organización gestionada, siempre puede usar la mutación `organizationCreateSharedAccount` más adelante. Para obtener detalles sobre cómo emplear esa mutación, consulte [Paso 3: Compartir cuentas](/docs/accounts/accounts-billing/account-structure/multi-tenancy/share-accounts).
  </Collapser>
</CollapserGroup>

### Estructura de bajo contacto [#low-touch]

Si es administrador de una organización empresarial que no necesita mucho control sobre las subsidiarias, puede crear una organización gestionada y una cuenta gestionada en una sola llamada:

<CollapserGroup>
  <Collapser id="low-touch-org" title="Bajo contacto: crear una organización">
    Esta mutación crea una organización y una nueva cuenta gestionada:

    ```graphql
    mutation {
      organizationCreate(
        customerId: "CC-123456789"
        newManagedAccount: {name: "New Managed Account Name", regionCode: EU01}
        organization: {name: "New Organizanization Name"}
      ) {
        jobId
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### Consulta a tu organización [#org-queries]

Emplee la siguiente consulta para realizar un seguimiento de su organización gestionada:

<CollapserGroup>
  <Collapser id="list-orgs" title="Listar la organización gestionada">
    ```graphql
    {
      customerAdministration {
        organizations {
          items {
            id
            name
          }
          nextCursor
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

<UserJourneyControls previousStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/intro-to-multi-tenancy","title":"Regresar al inicio","body":"Introducción a la tenencia múltiple"}} nextStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/delegated-administration","title":"Paso 2","body":"Gestionar usuarios y accesos"}} />