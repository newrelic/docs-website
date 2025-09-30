---
title: 'Passo 2: Gerenciar usuário e acesso'
metaDescription: Use the delegated administration options in multi-tenancy to manage user access in other organizations
freshnessValidatedDate: '2024-09-05T00:00:00.000Z'
translationType: machine
---

Ao configurar a multilocação, você pode usar a administração delegada para fazer alterações no gerenciamento de usuários ou acessos dentro de outras organizações gerenciadas. No caso de provedor de serviço gerenciado, a administração delegada permite que você gerencie o usuário e o acesso em nome dos seus clientes finais.

## Requisitos [#requirements]

Como lembrete, para usar o recurso de multilocação, certifique-se de ter concluído o seguinte para sua organização:

1. Obtenha aprovação: entre em contato com seu representante de conta para confirmar se sua organização foi adicionada à multilocação. Após a aprovação, você recebe o direito de multilocação.
2. Certifique-se de ter os tipos de usuário corretos: o usuário dentro da organização de gerenciamento que aproveitará o conjunto de recursos acima precisa ser provisionado como um usuário de plataforma principal ou completo.
3. Adicionar usuário ao grupo apropriado: usuários com o tipo de usuário de plataforma principal ou completa precisam ser adicionados a um grupo com `tenant_settings` aplicado.

## Como você pode chamar no NerdGraph? [#user-calls]

Após confirmar que você atende aos requisitos para multilocação, você pode ligar para nossa consultoria NerdGraph e obter informações sobre como gerenciar usuários em uma organização gerenciada.

Você poderá consultar todos os campos `customerAdministration` e executar uma variedade de mutações:

<CollapserGroup>
  <Collapser id="grant-access-to-group" title="Conceder acesso ao grupo de usuários">
    Use esta mutação para conceder acesso a um grupo. Para encontrar o `roleID`, consulte [Listar funções](#list-roles).

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

  <Collapser id="revoke-access-to-group" title="Revogar acesso ao grupo de usuários">
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

  <Collapser id="create-user-group" title="Criar grupo de usuários">
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

  <Collapser id="delete-user-group" title="Excluir grupo usuário">
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

  <Collapser id="add-user-to-group" title="Adicionar usuário a um grupo">
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

  <Collapser id="remove-user-from-group" title="Remover usuário de um grupo">
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

  <Collapser id="modify-group-name" title="Modificar nome do grupo">
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

  <Collapser id="Create new user" title="Criar novo usuário">
    Use esta mutação para criar um novo usuário. Para encontrar o `authenticationDomainId`, consulte [consultar domínio de autenticação](#query-domains).

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

  <Collapser id="delete-user" title="Deletar usuário">
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

  <Collapser id="query-domains" title="Consultar domínio de autenticação">
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

  <Collapser id="list-roles" title="Listar funções">
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

<UserJourneyControls previousStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation","title":"Passo 1","body":"Criar contas e organização"}} nextStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/share-accounts","title":"Passo 3","body":"Compartilhar contas (opcional)"}} />