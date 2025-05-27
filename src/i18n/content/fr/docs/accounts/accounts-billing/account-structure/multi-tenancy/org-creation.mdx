---
title: 'Étape 1 : Créer des comptes et une organisation'
metaDescription: Create organizations and accounts in the multi-tenency structure
freshnessValidatedDate: '2024-09-05T00:00:00.000Z'
translationType: machine
---

La multilocation vous permet de configurer n&apos;importe quel nombre d&apos;organisations gérées dans New Relic qui sont liées à une organisation de gestion principale. La première étape de la configuration du multi-hébergement consiste à créer des comptes et une organisation. Pour ce faire, vous utiliserez différentes mutations NerdGraph, en fonction de la structure organisationnelle que vous créez :

* [High touch](#high-touch): les prestataires de services gérés utilisent généralement cette approche pour intégrer les clients qui souhaitent accéder directement à New Relic .

* [Low touch](#low-touch): les entreprises utilisent cette approche pour créer de nouvelles organisations et de nouveaux comptes pour les unités commerciales ou les filiales dans New Relic.

Vous ne savez pas quelle approche adopter ? Voir [Présentation des approches multi-locataires](/docs/accounts/accounts-billing/account-structure/multi-tenancy/intro-to-multi-tenancy#approaches).

<Callout variant="tip">
  Si vous êtes un client multi-locataire appliquant une tarification à la consommation, les nombres d&apos;ingestion et d&apos;utilisateurs seront agrégés dans l&apos;ensemble de votre organisation gérée. Ces données agrégées ne sont visibles que par l’organisation gestionnaire.
</Callout>

## Exigences [#requirements]

Pour rappel, pour utiliser la fonctionnalité multi-locataire, assurez-vous d&apos;avoir effectué les opérations suivantes pour votre organisation :

1. Obtenir l’approbation : contactez votre représentant de compte pour confirmer que votre organisation a été ajoutée à la multilocation. Une fois approuvé, vous recevez le droit multi-locataire.
2. Assurez-vous d&apos;avoir les bons types d&apos;utilisateurs : les utilisateurs au sein de l&apos;organisation de gestion qui exploiteront l&apos;ensemble de fonctionnalités ci-dessus doivent être provisionnés en tant qu&apos;utilisateurs de plate-forme principale ou complète.
3. Ajouter l&apos;utilisateur au groupe approprié : l&apos;utilisateur avec le type d&apos;utilisateur de plateforme principale ou complète doit être ajouté à un groupe avec `tenant_settings` appliqué.

## Que peut-on appeler dans NerdGraph ? [#org-calls]

Trouvez ci-dessous les mutations qui s’appliquent à l’approche que vous souhaitez adopter : low touch ou high touch.

### Structure à haute sensibilité tactile [#high-touch]

Si vous êtes administrateur d&apos;un prestataire de services gérés ou d&apos;une entreprise qui souhaite exercer un contrôle important sur ses filiales, procédez comme suit :

<CollapserGroup>
  <Collapser id="high-touch-only-share" title="High touch : Créez un compte pour partager">
    L’un des principaux avantages de l’approche high-touch est que vous pouvez créer des comptes clients directement dans votre propre organisation de gestion. Ces comptes dans votre organisme gestionnaire vous permettent de suivre la télémétrie de vos clients.

    Ensuite, si vos clients décident qu&apos;ils souhaitent voir les données du compte que vous monitoring pour eux, vous pouvez partager le compte lorsque vous créez une organisation pour eux. Les utilisateurs de votre organisation gérée ne peuvent voir que les données des comptes que vous spécifiez.

    Pour créer des comptes que vous prévoyez de partager avec l&apos;organisation gérée, exécutez la mutation suivante :

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

    Si vous faites une erreur et devez renommer votre compte, consultez notre [tutoriel NerdGraph](/docs/apis/nerdgraph/examples/manage-accounts-nerdgraph/#rename-accounts).

    Une fois que vous avez créé les comptes que vous souhaitez partager, vous êtes prêt à créer une organisation.
  </Collapser>

  <Collapser id="high-touch-org" title="High touch : Créer une organisation">
    Lorsque vous créez une organisation dans une structure high-touch , vous souhaiterez souvent partager un compte que vous gérez dans votre propre organisation avec l&apos;utilisateur d&apos;une organisation gérée. Pour créer une organisation et partager un compte en même temps, exécutez une mutation similaire à celle-ci :

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

    Si vous ne souhaitez pas initialement partager un compte avec une organisation gérée, vous pouvez toujours utiliser la mutation `organizationCreateSharedAccount` ultérieurement. Pour plus de détails sur l’utilisation de cette mutation, voir [Étape 3 : Partager des comptes](/docs/accounts/accounts-billing/account-structure/multi-tenancy/share-accounts).
  </Collapser>
</CollapserGroup>

### structure à faible contact [#low-touch]

Si vous êtes administrateur d&apos;une entreprise qui n&apos;a pas besoin de beaucoup de contrôle sur les filiales, vous pouvez créer une organisation gérée et un compte géré en un seul appel :

<CollapserGroup>
  <Collapser id="low-touch-org" title="Low touch : Créer une organisation">
    Cette mutation crée une organisation et un nouveau compte géré :

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

### Demandez votre organisation [#org-queries]

Utilisez la requête suivante pour suivre votre organisation gérée :

<CollapserGroup>
  <Collapser id="list-orgs" title="Lister l'organisation gérée">
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

<UserJourneyControls previousStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/intro-to-multi-tenancy","title":"Retour au début","body":"Introduction au multi-locataire"}} nextStep={{"path":"/docs/accounts/accounts-billing/account-structure/multi-tenancy/delegated-administration","title":"Étape 2","body":"Gérer les utilisateurs et les accès"}} />