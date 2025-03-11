---
title: 'Paso 2: Gestionar usuarios y accesos'
metaDescription: Use the delegated administration options in multi-tenancy to manage user access in other organizations
freshnessValidatedDate: '2024-09-05T00:00:00.000Z'
translationType: machine
---

Al configurar la tenencia múltiple, puede emplear la administración delegada para realizar cambios en la gestión de usuarios o acceso dentro de otra organización gestionada. En el caso de proveedores de servicios gestionados, la administración delegada le permite gestionar usuarios y accesos en nombre de sus clientes finales.

## Requisitos [#requirements]

Como recordatorio, para emplear la función de múltiples inquilinos, cerciorar de completar lo siguiente para su organización:

1. Obtener aprobación: comunicar con su representante de cuenta para confirmar que su organización se agregó a la tenencia múltiple. Una vez aprobado, recibirá el derecho de múltiples inquilinos.
2. Cerciorar de tener los tipos de usuario correctos: el usuario dentro de la organización administradora que aprovechará el conjunto de características anterior debe estar aprovisionado como usuario principal o de plataforma completa.
3. Agregar usuario al grupo apropiado: el usuario con el tipo de usuario de plataforma principal o completa debe agregar a un grupo con `tenant_settings` aplicado.

## ¿Cómo puedes llamar en NerdGraph? [#user-calls]

Una vez que confirmes que cumples con los requisitos para multi-tenancy, puedes llamar a nuestra consulta de NerdGraph y realizar modificaciones para gestionar usuarios en organizaciones gestionadas.

Podrás consultar todos los campos `customerAdministration` y ejecutar una variedad de mutaciones:

<CollapserGroup>
  <Collapser id="grant-access-to-group" title="Otorgar acceso al grupo de usuarios">
    Emplee esta mutación para otorgar acceso a un grupo. Para encontrar el `roleID`, consulte [Lista de roles](#list-roles).

    ```graphql
    mutation {
      authorizationManagementGrantAccess(
        grantAccessOptions: {
          groupId: "11111111-1111-1111-1111-111111111111"
          accountAccessGrants: {
            accountId: YOUR_ACCOUNT_ID
            roleId: "YOUR_ROLE_ID"
          }
        }
      ) {
        roles {
          displayName
          accountId
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="revoke-access-to-group" title="Revocar el acceso al grupo de usuarios">
    ```graphql
    mutation {
      authorizationManagementRevokeAccess(
        revokeAccessOptions: {
          accountAccessGrants: {
            accountId: YOUR_ACCOUNT_ID
            roleId: "YOUR_ROLE_ID"
          }
          groupId: "YOUR_GROUP_ID"
        }
      ) {
        roles {
          accountId
          displayName
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="create-user-group" title="Crear grupo de usuarios">
    ```graphql
    mutation {
      userManagementCreateGroup(
        createGroupOptions: {
          authenticationDomainId: "YOUR_AUTH_DOMAIN_ID"
          displayName: "GROUP_DISPLAY_NAME"
        }
      ) {
        group {
          displayName
          id
        }
      }
    }


    ```
  </Collapser>

  <Collapser id="delete-user-group" title="Eliminar grupo de usuarios">
    ```graphql
    mutation {
      userManagementDeleteGroup(groupOptions: {id: "GROUP_ID_HERE"}) {
        group {
          displayName
          id
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="add-user-to-group" title="Agregar usuario a un grupo">
    ```graphql
    mutation {
       userManagementAddUsersToGroups(addUsersToGroupsOptions: {groupIds: ["II"], userIds: ["3"]}) {
       groups {
     	  id
     	  displayName
     	  users {
       	    totalCount
     	  }
       }
     }
    }
    ```
  </Collapser>

  <Collapser id="remove-user-from-group" title="Eliminar usuario de un grupo">
    ```graphql
    mutation {
      userManagementRemoveUsersFromGroups(
        removeUsersFromGroupsOptions: {
          groupIds: [YOUR_GROUP_IDS]
          userIds: [YOUR_USER_IDS]
        }
      ) {
        groups {
          displayName
          id
        }
      }
    }

    ```
  </Collapser>

  <Collapser id="modify-group-name" title="Modificar el nombre del grupo">
    ```graphql
    mutation {
      userManagementUpdateGroup(
        updateGroupOptions: {
          id: "YOUR_GROUP_ID"
          displayName: "NEW_GROUP_DISPLAY_NAME"
        }
      ) {
        group {
          displayName
          id
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="Create new user" title="Crear nuevo usuario">
    Emplee esta mutación para crear un nuevo usuario. Para encontrar el `authenticationDomainId`, consulte [consulta autenticación de dominio](#query-domains).

    ```graphql
    mutation {
      userManagementCreateUser(
        createUserOptions: {
          authenticationDomainId: "B"
          email: "a@b.c"
          name: "A B C"
        }
      ) {
        createdUser {
          id
          email
          name
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="delete-user" title="Borrar usuario">
    ```graphql
    mutation {
      userManagementDeleteUser(deleteUserOptions: {id: "ID_OF_YOUR_USER"}) {
        deletedUser {
          id
        }
      }
    }

    ```
  </Collapser>

  <Collapser id="query-domains" title="Consulta autenticación dominio">
    ```graphql
    {
      customerAdministration {
        authenticationDomains(filter: {organizationId: {eq: "Y"}}) {
      	items {
        	  id
        	  name
        	  provisioningType
        	  authenticationType
      	}
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
</CollapserGroup>

<UserJourneyControls previousStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation","title":"Paso 1","body":"Crear cuentas y organización"}} nextStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/share-accounts","title":"Paso 3","body":"Compartir cuentas (opcional)"}} />