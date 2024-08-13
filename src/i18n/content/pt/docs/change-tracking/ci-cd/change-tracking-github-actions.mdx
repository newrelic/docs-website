---
title: Acompanhe as alterações com GitHub Actions
tags:
  - APM
  - APM UI pages
  - Events
  - Browser
  - Mobile
  - NerdGraph
metaDescription: Here's how to use GitHub Actions to designate what you want to capture with change tracking.
freshnessValidatedDate: never
translationType: machine
---

Você pode usar o recurso Monitoramento de Alterações do New Relic em conjunto com [GitHub Actions](https://docs.github.com/en/actions) para monitor o efeito das alterações em seus clientes e sistemas. Com GitHub Actions, você pode designar quais alterações monitor e, em seguida, observar os resultados na interface do New Relic. Isso permite que você rastreie as alterações feitas em seu ambiente durante o pipeline de lançamento.

## Entradas [#github-actions-input]

Aqui estão os elementos de entrada:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Chave
      </th>

      <th>
        Obrigatório
      </th>

      <th style={{ width: "200px" }}>
        Padrão
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `guid`
      </td>

      <td>
        sim
      </td>

      <td>
        n/a
      </td>

      <td>
        O GUID da entidade para aplicar o marcador de alteração
      </td>
    </tr>

    <tr>
      <td>
        `apiKey`
      </td>

      <td>
        sim
      </td>

      <td>
        n/a
      </td>

      <td>
        Sua [chave de API pessoal](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#personal-api-key)New Relic
      </td>
    </tr>

    <tr>
      <td>
        `changelog`
      </td>

      <td>
        não
      </td>

      <td>
        n/a
      </td>

      <td>
        Um resumo do que aconteceu nessa mudança que está visível na página <DNT>**Change tracking**</DNT>
      </td>
    </tr>

    <tr>
      <td>
        `commit`
      </td>

      <td>
        não
      </td>

      <td>
        n/a
      </td>

      <td>
        O Commit SHA para esta alteração que está visível na página <DNT>**Change tracking**</DNT>
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        não
      </td>

      <td>
        n/a
      </td>

      <td>
        Uma descrição resumida dessa alteração, visível na página <DNT>**Overview**</DNT> e na página <DNT>**Change tracking**</DNT> quando você seleciona uma alteração individual
      </td>
    </tr>

    <tr>
      <td>
        `deeplink`
      </td>

      <td>
        não
      </td>

      <td>
        n/a
      </td>

      <td>
        Um link direto para a fonte que desencadeou a mudança
      </td>
    </tr>

    <tr>
      <td>
        `deploymentType`
      </td>

      <td>
        não
      </td>

      <td>
        `BASIC`
      </td>

      <td>
        O tipo de implantação. Além do padrão `BASIC`, escolha entre `BLUE_GREEN`, `CANARY`, `OTHER`, `ROLLING` ou `SHADOW`
      </td>
    </tr>

    <tr>
      <td>
        `groupId`
      </td>

      <td>
        não
      </td>

      <td>
        n/a
      </td>

      <td>
        Um ID de grupo para a alteração vincular a outras alterações
      </td>
    </tr>

    <tr>
      <td>
        `region`
      </td>

      <td>
        não
      </td>

      <td>
        `US`
      </td>

      <td>
        A região da sua conta New Relic
      </td>
    </tr>

    <tr>
      <td>
        `version`
      </td>

      <td>
        sim
      </td>

      <td>
        n/a
      </td>

      <td>
        Metadados a serem aplicados ao marcador de mudança, como a tag de lançamento mais recente
      </td>
    </tr>

    <tr>
      <td>
        `user`
      </td>

      <td>
        sim
      </td>

      <td>
        `github.actor`
      </td>

      <td>
        Um nome de usuário para associar à alteração que está visível nas páginas <DNT>**Overview**</DNT> e <DNT>**Deployments**</DNT>
      </td>
    </tr>
  </tbody>
</table>

## Exemplo de uso [#example-usage]

### Segredos do GitHub

Certifique-se de que os seguintes [segredos do Github](https://docs.github.com/en/actions/security-guides/encrypted-secrets#about-encrypted-secrets) estejam definidos:

* `NEW_RELIC_API_KEY` - Chave pessoal de API
* `NEW_RELIC_DEPLOYMENT_ENTITY_GUID` - New Relic Entity GUID para criar o marcador

Verifique a página [do marcador de implantação do aplicativo New Relic](https://github.com/marketplace/actions/new-relic-application-deployment-marker) e clique no botão <DNT>**Use latest version**</DNT> para certificar-se de usar a versão mais recente disponível.

> _Há diversas [variáveis de ambiente padrão do GitHub](https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables) que também são usadas nesses exemplos._

### Campos mínimos obrigatórios

```yaml
name: Change Tracking Marker
on:
  release:
    types: [published]

jobs:
  newrelic:
    runs-on: ubuntu-latest
    name: New Relic
    steps:
      # This step builds a var with the release tag value to use later
      - name: Set Release Version from Tag
        run: echo "RELEASE_VERSION=${{ github.ref_name }}" >> $GITHUB_ENV
      # This step creates a new Change Tracking Marker
      - name: New Relic Application Deployment Marker
        uses: newrelic/deployment-marker-action@v2.3.0
        with:
          apiKey: ${{ secrets.NEW_RELIC_API_KEY }}
          guid: ${{ secrets.NEW_RELIC_DEPLOYMENT_ENTITY_GUID }}
          version: "${{ env.RELEASE_VERSION }}"
          user: "${{ github.actor }}"
```

### Todos os campos de entrada

> *Além de `NEW_RELIC_API_KEY`, este exemplo mostra como destinar vários itens armazenando vários segredos como "`NEW_RELIC_DEPLOYMENT_ENTITY_GUID_<ID>`", onde `<ID>` é o identificador exclusivo do item de destino.*

```
NEW_RELIC_DEPLOYMENT_ENTITY_GUID_App123
NEW_RELIC_DEPLOYMENT_ENTITY_GUID_App456
NEW_RELIC_DEPLOYMENT_ENTITY_GUID_App789
```

```yaml
name: Change Tracking Marker
on:
  workflow_dispatch:
  release:
    types: [published]

jobs:
  newrelic:
    runs-on: ubuntu-latest
    name: New Relic
    steps:
      # This step builds a var with the release tag value to use later
      - name: Set Release Version from Tag
        run: echo "RELEASE_VERSION=${{ github.ref_name }}" >> $GITHUB_ENV
      # This step creates a new Change Tracking Marker for App123
      - name: App123 Marker
        uses: newrelic/deployment-marker-action@v2.3.0
        with:
          apiKey: ${{ secrets.NEW_RELIC_API_KEY }}
          guid: ${{ secrets.NEW_RELIC_DEPLOYMENT_ENTITY_GUID_App123 }}
          version: "${{ env.RELEASE_VERSION }}"
          changelog: "https://github.com/${{ github.repository }}/blob/master/CHANGELOG.md"
          commit: "${{ github.sha }}"
          description: "Automated Release via Github Actions"
          deploymentType: "ROLLING"
          groupId: "Workshop App Release: ${{ github.ref_name }}"
          user: "${{ github.actor }}"
      # This step creates a new Change Tracking Marker for App456
      - name: App456 Marker
        uses: newrelic/deployment-marker-action@v2.3.0
        with:
          apiKey: ${{ secrets.NEW_RELIC_API_KEY }}
          guid: ${{ secrets.NEW_RELIC_DEPLOYMENT_ENTITY_GUID_App456 }}
          version: "${{ env.RELEASE_VERSION }}"
          changelog: "https://github.com/${{ github.repository }}/blob/master/CHANGELOG.md"
          commit: "${{ github.sha }}"
          description: "Automated Release via Github Actions"
          deploymentType: "ROLLING"
          groupId: "Workshop App Release: ${{ github.ref_name }}"
          user: "${{ github.actor }}"
      # This step creates a new Change Tracking Marker for App789
      - name: App789 Marker
        uses: newrelic/deployment-marker-action@v2.3.0
        with:
          apiKey: ${{ secrets.NEW_RELIC_API_KEY }}
          guid: ${{ secrets.NEW_RELIC_DEPLOYMENT_ENTITY_GUID_App789 }}
          version: "${{ env.RELEASE_VERSION }}"
          changelog: "https://github.com/${{ github.repository }}/blob/master/CHANGELOG.md"
          commit: "${{ github.sha }}"
          description: "Automated Release via Github Actions"
          deploymentType: "ROLLING"
          groupId: "Workshop App Release: ${{ github.ref_name }}"
          user: "${{ github.actor }}"
```

## Qual é o próximo [#whats-next]

Depois de designar as alterações que deseja rastrear, você pode analisar o efeito dessas alterações na interface do New Relic. Para obter detalhes, consulte [Como visualizar e analisar suas alterações no New Relic](/docs/change-tracking/change-tracking-view-analyze).
