---
title: 'Etapa 3: Compartilhe contas (opcional)'
metaDescription: Share accounts with managed organizations using multi-tenency
freshnessValidatedDate: '2024-09-05T00:00:00.000Z'
translationType: machine
---

<Callout variant="important">
  Se você criou uma estrutura organizacional de baixo contato, esta etapa não se aplica a você. Veja os detalhes de baixo contato na [Etapa 1: Criar contas e organização](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation).
</Callout>

O compartilhamento de contas permite que o administrador de uma organização gestora torne os dados que está monitorando visíveis para sua organização gerenciada. Depois de configurar o compartilhamento de conta inicial na estrutura da sua organização de alto contato (consulte [Criar contas e organização](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation)), talvez seja necessário fazer algumas alterações de acompanhamento.

Digamos que você seja um administrador no MSP da Betty (um provedor de serviço gerenciado) que está monitorando uma conta gerenciada para seus clientes, a Wayne Enterprises. Você também compartilhou essa conta com a organização Wayne Enterprises. Aqui estão algumas tarefas de acompanhamento que você pode realizar:

<CollapserGroup>
  <Collapser id="create-share-accounts" title="Crie e compartilhe contas adicionais">
    Se seus clientes Wayne Enterprises decidirem que querem outra conta, veja o que você deve fazer:

    1. Crie outra conta da Wayne Enterprises na sua organização de gerenciamento usando a mutação NerdGraph `accountManagementCreateAccount`.
    2. Se a Wayne Enterprises também quiser ver os dados na nova conta diretamente, você compartilhará essa conta com a organização usando `organizationCreateSharedAccount`.
  </Collapser>

  <Collapser id="revoke-access-to-share" title="Revogar acesso a uma conta compartilhada">
    Se você decidir que não há mais necessidade de compartilhar uma conta com seus clientes Wayne Enterprises, você pode revogar o compartilhamento com a mutação `organizationRevokeSharedAccount`.
  </Collapser>

  <Collapser id="update-roles" title="Atualizar as funções para uma conta compartilhada">
    Se você precisar alterar o perfil do usuário para qualquer uma das contas compartilhadas da Wayne Enterprises, você pode usar a mutação `organizationUpdateSharedAccount`.
  </Collapser>
</CollapserGroup>

## Requisitos [#requirements]

Para usar esse recurso, certifique-se de ter concluído o seguinte para sua organização:

1. Obtenha aprovação: entre em contato com seu representante de conta para confirmar se sua organização foi adicionada à multilocação. Após a aprovação, você recebe o direito de multilocação.
2. Certifique-se de ter os tipos de usuário corretos: o usuário dentro da organização de gerenciamento que aproveitará o conjunto de recursos acima precisa ser provisionado como um usuário de plataforma principal ou completo.
3. Adicionar usuário ao grupo apropriado: usuários com o tipo de usuário de plataforma principal ou completa precisam ser adicionados a um grupo com `tenant_settings` aplicado.

## Como você pode chamar isso no Nerdgraph? [#share-calls]

Para ajudar você a se familiarizar com o compartilhamento de contas, temos alguns exemplos básicos abaixo. Primeiro, dê uma olhada na rotina geral:

1. A organização de origem obtém o ID da organização da organização de destino. Você pode obter o ID do destino organização do destino organização usuário quando ele visualizar a guia **Access Management** \[Gerenciamento de acesso].
2. A organização de origem chama a API e passa o ID da organização de destino, o ID da conta e a função limitadora. A organização de origem pode declarar um papel limitante que defina as capacidades máximas às quais o usuário da organização de destino estará restrito.

Aqui estão os tipos de chamadas que você pode fazer para compartilhamento de conta:

<CollapserGroup>
  <Collapser id="create-a-share" title="Criar um compartilhamento">
    Para usar essa mutação, você já deve ter criado a organização de destino. Se isso ainda não estiver disponível, confira [a Etapa 1: Criar contas e organização](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation).

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

  <Collapser id="revoke-share" title="Revogar uma ação">
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

  <Collapser id="find-orgs-for-account" title="Encontre uma organização gerenciada com uma conta compartilhada específica">
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

  <Collapser id="find-shared-accounts" title="Encontre contas compartilhadas com uma determinada organização gerenciada">
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

  <Collapser id="update-roles" title="Atualizar funções">
    Use esta mutação para alterar funções de conta compartilhadas. Para encontrar as funções de contas existentes, use a consulta em [Listar funções](#list-roles).

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

<UserJourneyControls previousStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/delegated-administration","title":"Passo anterior","body":"Gerenciar usuário e acesso"}} />