---
title: Seguimiento de cambios con GitHub Actions
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

Puede utilizar la característica de seguimiento de cambios de New Relic junto con [GitHub Actions](https://docs.github.com/en/actions) para monitor el efecto de los cambios en sus clientes y sistemas. Con GitHub Actions, puedes designar qué cambios monitor y luego ver los resultados en la UI de New Relic. Esto le permite realizar un seguimiento de los cambios que realiza en su entorno durante el proceso de lanzamiento.

## Entradas [#github-actions-input]

Aquí están los elementos de entrada:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Llave
      </th>

      <th>
        Requerido
      </th>

      <th style={{ width: "200px" }}>
        Por defecto
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `guid`
      </td>

      <td>
        Sí
      </td>

      <td>
        n/a
      </td>

      <td>
        El GUID de la entidad para aplicar el marcador de cambio.
      </td>
    </tr>

    <tr>
      <td>
        `apiKey`
      </td>

      <td>
        Sí
      </td>

      <td>
        n/a
      </td>

      <td>
        Tu [clave personal de API de](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#personal-api-key)New Relic
      </td>
    </tr>

    <tr>
      <td>
        `changelog`
      </td>

      <td>
        No
      </td>

      <td>
        n/a
      </td>

      <td>
        Un resumen de lo que se incluyó en este cambio que está visible en la página <DNT>**Change tracking**</DNT>
      </td>
    </tr>

    <tr>
      <td>
        `commit`
      </td>

      <td>
        No
      </td>

      <td>
        n/a
      </td>

      <td>
        El SHA de confirmación para este cambio que es visible en la página <DNT>**Change tracking**</DNT>
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        No
      </td>

      <td>
        n/a
      </td>

      <td>
        Una descripción de alto nivel de este cambio, visible en la página <DNT>**Overview**</DNT> y en la página <DNT>**Change tracking**</DNT> cuando selecciona un cambio individual.
      </td>
    </tr>

    <tr>
      <td>
        `deeplink`
      </td>

      <td>
        No
      </td>

      <td>
        n/a
      </td>

      <td>
        Un enlace profundo a la fuente que desencadenó el cambio.
      </td>
    </tr>

    <tr>
      <td>
        `deploymentType`
      </td>

      <td>
        No
      </td>

      <td>
        `BASIC`
      </td>

      <td>
        El tipo de despliegue. Además del valor predeterminado de `BASIC`, elija entre `BLUE_GREEN`, `CANARY`, `OTHER`, `ROLLING` o `SHADOW`
      </td>
    </tr>

    <tr>
      <td>
        `groupId`
      </td>

      <td>
        No
      </td>

      <td>
        n/a
      </td>

      <td>
        Un ID de grupo para que el cambio se vincule con otros cambios.
      </td>
    </tr>

    <tr>
      <td>
        `region`
      </td>

      <td>
        No
      </td>

      <td>
        `US`
      </td>

      <td>
        La región de su cuenta New Relic
      </td>
    </tr>

    <tr>
      <td>
        `version`
      </td>

      <td>
        Sí
      </td>

      <td>
        n/a
      </td>

      <td>
        Metadatos para aplicar al marcador de cambio, como la etiqueta de la última versión
      </td>
    </tr>

    <tr>
      <td>
        `user`
      </td>

      <td>
        Sí
      </td>

      <td>
        `github.actor`
      </td>

      <td>
        Un nombre de usuario para asociar con el cambio que es visible en las páginas <DNT>**Overview**</DNT> y <DNT>**Deployments**</DNT>
      </td>
    </tr>
  </tbody>
</table>

## Uso de ejemplo [#example-usage]

### Secretos de GitHub

Asegúrese de que estén configurados los siguientes [secretos de Github](https://docs.github.com/en/actions/security-guides/encrypted-secrets#about-encrypted-secrets) :

* `NEW_RELIC_API_KEY` - Clave personal de API
* `NEW_RELIC_DEPLOYMENT_ENTITY_GUID` - New Relic para crear el marcador.

Consulta la página [del marcador de despliegue de la aplicación New Relic](https://github.com/marketplace/actions/new-relic-application-deployment-marker) y haz clic en el botón <DNT>**Use latest version**</DNT> para asegurarte de utilizar la última versión disponible.

> _Hay una serie de [variables de entorno predeterminadas de GitHub](https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables) que también se utilizan en estos ejemplos._

### Campos mínimos requeridos

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

### Todos los campos de entrada

> **Además de `NEW_RELIC_API_KEY`, este ejemplo muestra cómo segmentar varios elementos almacenando varios secretos como "`NEW_RELIC_DEPLOYMENT_ENTITY_GUID_<ID>`", donde `<ID>` es el identificador único del elemento de destino.**

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

## Que sigue [#whats-next]

Una vez que haya designado los cambios que desea rastrear, puede analizar el efecto de esos cambios en la UI de New Relic. Para obtener más detalles, consulte [Cómo ver y analizar sus cambios en New Relic](/docs/change-tracking/change-tracking-view-analyze).
