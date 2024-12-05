---
title: 'Paso 3: Compartir cuentas (opcional)'
metaDescription: Share accounts with managed organizations using multi-tenency
freshnessValidatedDate: '2024-09-05T00:00:00.000Z'
translationType: machine
---

<Callout variant="important">
  Si creó una estructura organizacional de bajo contacto, este paso no se aplica a usted. Consulta los detalles de bajo contacto en [el Paso 1: Crear cuentas y organización](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation).
</Callout>

Compartir cuentas permite que el administrador de una organización administradora haga que los datos que está monitoreando sean visibles para su organización gestionada. Una vez que configuró el uso compartido de cuentas inicial en la estructura de su organización de alto contacto (consulte [Crear cuentas y organización](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation)), es posible que considere necesario realizar algunos cambios de seguimiento.

Digamos que usted es un administrador en el MSP de Betty (un proveedor de servicios gestionado) que monitorear una cuenta gestionada para sus clientes de Wayne Enterprises. También compartiste esa cuenta con la organización Wayne Enterprises. A continuación se muestran algunas tareas de seguimiento que podría realizar:

<CollapserGroup>
  <Collapser id="create-share-accounts" title="Crear y compartir cuentas adicionales">
    Si sus clientes de Wayne Enterprises deciden que quieren otra cuenta, esto es lo que debe hacer:

    1. Cree otra cuenta de Wayne Enterprises en su organización administradora empleando la mutación NerdGraph `accountManagementCreateAccount`.
    2. Si Wayne Enterprises también desea ver los datos en la nueva cuenta directamente, deberá compartir esa cuenta con su organización usando `organizationCreateSharedAccount`.
  </Collapser>

  <Collapser id="revoke-access-to-share" title="Revocar el acceso a una cuenta compartida">
    Si decide que ya no es necesario compartir una cuenta con sus clientes de Wayne Enterprises, puede revocar el uso compartido con la mutación `organizationRevokeSharedAccount`.
  </Collapser>

  <Collapser id="update-roles" title="Actualizar los roles de una cuenta compartida">
    Si necesita cambiar el rol de usuario de cualquiera de las cuentas compartidas de Wayne Enterprises, puede emplear la mutación `organizationUpdateSharedAccount`.
  </Collapser>
</CollapserGroup>

## Requisitos [#requirements]

Para emplear esta función, cerciorar de completar lo siguiente para su organización:

1. Obtener aprobación: comunicar con su representante de cuenta para confirmar que su organización se agregó a la tenencia múltiple. Una vez aprobado, recibirá el derecho de múltiples inquilinos.
2. Cerciorar de tener los tipos de usuario correctos: el usuario dentro de la organización administradora que aprovechará el conjunto de características anterior debe estar aprovisionado como usuario principal o de plataforma completa.
3. Agregar usuario al grupo apropiado: el usuario con el tipo de usuario de plataforma principal o completa debe agregar a un grupo con `tenant_settings` aplicado.

## ¿Cómo puedes llamar en Nerdgraph? [#share-calls]

Para ayudarlo a familiarizar con el uso compartido de cuentas, tenemos algunos ejemplos básicos a continuación. Primero, echemos un vistazo a la rutina general:

1. La organización de origen obtiene el ID de la organización de la organización de destino. Puede obtener el ID de la organización objetivo del usuario de la organización objetivo cuando ve su pestaña **Access Management** \[Administración de acceso].
2. La organización de origen llama a la API y pasa el ID de la organización de destino, el ID de la cuenta y el rol limitante. La organización de origen puede declarar un rol limitante que define las capacidades máximas a las que estará restringido el usuario de la organización objetivo.

Estos son los tipos de llamadas que puedes realizar para compartir cuentas:

<CollapserGroup>
  <Collapser id="create-a-share" title="Crear una acción">
    Para poder emplear esta mutación, ya debes crear la organización objetivo. Si esto aún no está en su lugar, consulte [Paso 1: Crear cuentas y organización](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation).

    ```graphql
    mutation {
      organizationCreateSharedAccount(
        sharedAccount: {
          accountId: ACCOUNT_ID_TO_SHARE
          limitingRoleId: 0
          targetOrganizationId: "CUSTOMER_ORGANIZATION_ID_HERE"
        }
      ) {
        sharedAccount {
          accountId
          id
          limitingRoleId
          name
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="revoke-share" title="Revocar una acción">
    ```graphql
    mutation {
      organizationRevokeSharedAccount(
        sharedAccount: { id: "SHARED_ACCOUNT_ID_HERE" }
      ) {
        sharedAccount {
          accountId
          id
          limitingRoleId
          name
          sourceOrganizationId
          sourceOrganizationName
          targetOrganizationId
          targetOrganizationName
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="find-orgs-for-account" title="Encuentra una organización gestionada con una cuenta compartida específica">
    ```graphql
    {
      customerAdministration {
        accountShares(
          cursor: ""
          filter: { accountId: { eq: 1234 } }
          sort: { direction: ASCENDING, key: ACCOUNT_ID }
        ) {
          items {
            accountId
            id
            limitingRole {
              id
            }
            name
            source {
              id
              name
            }
            target {
              id
            }
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="find-shared-accounts" title="Buscar cuentas compartidas con una organización gestionada determinada">
    ```graphql
    {
      customerAdministration {
        accounts(
          cursor: "",
          filter: {
            id: {eq: 1234},
            name: {contains: "text"},
            organizationId: {eq: "org-id"},
            sharingMode: {eq: SHARED_WITH_THIS_ORGANIZATION},
            status: {eq: ACTIVE}
          },
          sort: {direction: ASCENDING, key: ID}
        ) {
          nextCursor
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="list-roles" title="Lista de roles">
    ```graphql
    {
      customerAdministration {
        roles(filter: {organizationId: {eq: "ANY_ORG_ID"}}) {
          items {
            id
            name
            scope
            type
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="update-roles" title="Actualizar roles">
    Emplee esta mutación para cambiar los roles de cuentas compartidas. Para encontrar los roles de las cuentas existentes, emplee la consulta en [Listar roles](#list-roles).

    ```graphql
    mutation {
      organizationUpdateSharedAccount(
        sharedAccount: {
          id: "SHARE_ACCOUNT_ID"
          limitingRoleId: NEW_LIMTING_ROLE_ID
        }
      ) {
        sharedAccount {
          accountId
          id
          limitingRoleId
          name
          sourceOrganizationId
          sourceOrganizationName
          targetOrganizationId
          targetOrganizationName
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

<UserJourneyControls previousStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/delegated-administration","title":"Paso anterior","body":"Gestionar usuarios y accesos"}} />