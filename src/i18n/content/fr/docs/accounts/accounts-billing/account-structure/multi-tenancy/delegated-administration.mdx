---
title: "Étape 2\_:\_Gérer l'utilisateur et l'accès"
metaDescription: Use the delegated administration options in multi-tenancy to manage user access in other organizations
freshnessValidatedDate: '2024-09-05T00:00:00.000Z'
translationType: machine
---

Lors de la configuration de la multilocation, vous pouvez utiliser l&apos;administration déléguée pour apporter des modifications à la gestion des utilisateurs ou des accès au sein d&apos;autres organisations gérées. Dans le cas d&apos;un prestataire de services gérés, l&apos;administration déléguée vous permet de gérer les utilisateurs et les accès pour le compte de vos clients finaux.

## Requirements [#requirements]

Pour rappel, pour utiliser la fonctionnalité multi-locataire, assurez-vous d&apos;avoir effectué les opérations suivantes pour votre organisation :

1. Obtenir l’approbation : contactez votre représentant de compte pour confirmer que votre organisation a été ajoutée à la multilocation. Une fois approuvé, vous recevez le droit multi-locataire.
2. Assurez-vous d&apos;avoir les bons types d&apos;utilisateurs : les utilisateurs au sein de l&apos;organisation de gestion qui exploiteront l&apos;ensemble de fonctionnalités ci-dessus doivent être provisionnés en tant qu&apos;utilisateurs de plate-forme principale ou complète.
3. Ajouter l&apos;utilisateur au groupe approprié : l&apos;utilisateur avec le type d&apos;utilisateur de plateforme principale ou complète doit être ajouté à un groupe avec `tenant_settings` appliqué.

## Que peut-on appeler dans NerdGraph ? [#user-calls]

Une fois que vous avez confirmé que vous répondez aux exigences du multi-hébergement, vous pouvez appeler notre requête NerdGraph et nos mutations pour gérer les utilisateurs dans une organisation gérée.

Vous pourrez interroger tous les champs `customerAdministration` et exécuter diverses mutations :

<CollapserGroup>
  <Collapser id="grant-access-to-group" title="Accorder l'accès au groupe utilisateur">
    Utilisez cette mutation pour accorder l&apos;accès à un groupe. Pour trouver le `roleID`, voir [Lister les rôles](#list-roles).

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

  <Collapser id="revoke-access-to-group" title="Révoquer l'accès au groupe utilisateur">
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

  <Collapser id="create-user-group" title="Créer un groupe d'utilisateurs">
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

  <Collapser id="delete-user-group" title="Supprimer le groupe d'utilisateurs">
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

  <Collapser id="add-user-to-group" title="Ajouter un utilisateur à un groupe">
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

  <Collapser id="remove-user-from-group" title="Supprimer un utilisateur d'un groupe">
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

  <Collapser id="modify-group-name" title="Modifier le nom du groupe">
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

  <Collapser id="Create new user" title="Créer un nouvel utilisateur">
    Utilisez cette mutation pour créer un nouvel utilisateur. Pour trouver le `authenticationDomainId`, voir [Interroger les domaines d&apos;authentification](#query-domains).

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

  <Collapser id="delete-user" title="Supprimer l'utilisateur">
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

  <Collapser id="query-domains" title="Interroger les domaines d'authentification">
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

  <Collapser id="list-roles" title="Lister les rôles">
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

<UserJourneyControls previousStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation","title":"Étape 1","body":"Créer des comptes et une organisation"}} nextStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/share-accounts","title":"Étape 3","body":"Comptes partagés (facultatif)"}} />