---
title: 'Passo 1: Criar contas e organização'
metaDescription: Create organizations and accounts in the multi-tenency structure
freshnessValidatedDate: '2024-09-05T00:00:00.000Z'
translationType: machine
---

A multilocação permite que você configure qualquer número de organizações gerenciadas no New Relic que estejam relacionadas a uma organização principal gerenciadora. O primeiro passo para configurar a multilocação é criar contas e organização. Para fazer isso, você usará várias mutações do NerdGraph, dependendo da estrutura organizacional que estiver criando:

* [Alto contato](#high-touch): provedores de serviço gerenciados geralmente usam essa abordagem para integrar clientes que desejam acessar New Relic diretamente.

* [Baixo contato](#low-touch): empresas corporativas usam essa abordagem para criar novas organizações e contas para unidades de negócios ou subsidiárias na New Relic.

Não tem certeza de qual abordagem adotar? Veja [Visão geral das abordagens de multilocação](/docs/accounts/accounts-billing/account-structure/multi-tenancy/intro-to-multi-tenancy#approaches).

<Callout variant="tip">
  Se você for um cliente multilocatário, as contagens de ingestão e usuário serão agregadas em toda a sua organização gerenciada. Esses dados agregados são visíveis apenas para a organização gestora.
</Callout>

## Requisitos [#requirements]

Como lembrete, para usar o recurso de multilocação, certifique-se de ter concluído o seguinte para sua organização:

1. Obtenha aprovação: entre em contato com seu representante de conta para confirmar se sua organização foi adicionada à multilocação. Após a aprovação, você recebe o direito de multilocação.
2. Certifique-se de ter os tipos de usuário corretos: o usuário dentro da organização de gerenciamento que aproveitará o conjunto de recursos acima precisa ser provisionado como um usuário de plataforma principal ou completo.
3. Adicionar usuário ao grupo apropriado: usuários com o tipo de usuário de plataforma principal ou completa precisam ser adicionados a um grupo com `tenant_settings` aplicado.

## Como você pode chamar no NerdGraph? [#org-calls]

Encontre abaixo as mutações que se aplicam à abordagem que você deseja adotar: baixo toque ou alto toque.

### Estrutura de alto toque [#high-touch]

Se você for um administrador em um provedor de serviço gerenciado ou uma empresa que deseja muito controle sobre as subsidiárias, faça o seguinte:

<CollapserGroup>
  <Collapser id="high-touch-only-share" title="Alto toque: Crie uma conta para compartilhar">
    Um benefício importante da abordagem de alto contato é que você pode criar contas de clientes diretamente na sua própria organização de gerenciamento. Essas contas na sua organização de gerenciamento permitem que você monitor a telemetria dos seus clientes.

    Então, se seus clientes decidirem que querem ver os dados na conta que você está monitorando para eles, você pode compartilhar a conta ao criar uma organização para eles. O usuário na sua organização gerenciada só pode ver os dados nas contas que você especificar.

    Para criar contas que você planeja compartilhar com organizações gerenciadas, execute a seguinte mutação:

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

    Se você cometer um erro e precisar renomear sua conta, veja nosso [tutorial do NerdGraph](/docs/apis/nerdgraph/examples/manage-accounts-nerdgraph/#rename-accounts).

    Depois de criar as contas que deseja compartilhar, você estará pronto para criar uma organização.
  </Collapser>

  <Collapser id="high-touch-org" title="Alto contato: Crie uma organização">
    Ao criar uma organização em uma estrutura de alto contato, muitas vezes você desejará compartilhar uma conta que está gerenciando em sua própria organização com o usuário de uma organização gerenciada. Para criar uma organização e compartilhar uma conta ao mesmo tempo, execute uma mutação semelhante a esta:

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

    Se inicialmente você não quiser compartilhar uma conta com uma organização gerenciada, você sempre poderá usar a mutação `organizationCreateSharedAccount` mais tarde. Para obter detalhes sobre como usar essa mutação, consulte [Etapa 3: compartilhar contas](/docs/accounts/accounts-billing/account-structure/multi-tenancy/share-accounts).
  </Collapser>
</CollapserGroup>

### Estrutura de baixo contato [#low-touch]

Se você for um administrador em uma organização empresarial que não precisa de muito controle sobre as subsidiárias, poderá criar uma organização gerenciada e uma conta gerenciada em uma única chamada:

<CollapserGroup>
  <Collapser id="low-touch-org" title="Baixo contato: Crie uma organização">
    Essa mutação cria uma organização e uma nova conta gerenciada:

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

### Consulte sua organização [#org-queries]

Utilize a seguinte consulta para acompanhar sua organização gerenciada:

<CollapserGroup>
  <Collapser id="list-orgs" title="Liste a organização gerenciada">
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

<UserJourneyControls previousStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/intro-to-multi-tenancy","title":"Retornar ao início","body":"Introdução à multilocação"}} nextStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/delegated-administration","title":"Passo 2","body":"Gerenciar usuário e acesso"}} />