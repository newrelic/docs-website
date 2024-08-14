---
title: Actualiza la información del catálogo de tu Nerdpack
tags:
  - New Relic
  - Nerdpack
metaDescription: Learn to describe your Nerdpack in the Instant Observability catalog.
freshnessValidatedDate: never
translationType: machine
---

Agrega captura de pantalla, descripciones y otros metadatos a tu Nerdpack y súbelo todo a [Observabilidad instantánea](https://newrelic.com/instant-observability).

## Actualice su CLI [#update-cli]

Antes de ejecutar cualquier comando, cerciorar de tener la última versión de la CLI:

```shell
nr1 update
```

## Comprueba tus licencias [#check-permissions]

Para publicar tu Nerdpack y actualizar la información de su catálogo, necesitas:

* Acceso a la cuenta que lo publicó.
* Los [licencias necesarias](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps) para gestionar Nerdpacks.

## Publica tu Nerdpack [#publish-nerdpack]

Debes [publicar](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish) los Nerdpacks que crees antes de poder actualizar la información de su catálogo.

## Actualiza los metadatos del catálogo de tu Nerdpack [#update-nerdpack]

Luego de publicar su Nerdpack en el catálogo [de observabilidad instantánea](https://newrelic.com/instant-observability) , actualice los metadatos del Nerdpack para que el usuario sepa todo sobre sus Nerdlets o visualizaciones.

```json fileName=catalog/config.json
{
  "tagline": "",
  "details": "",
  "categoryTerms": [],
  "keywords": [],
  "repository": "",
  "whatsNew": "",
  "support": {
    "email": {
      "address": ""
    },
    "issues": {
      "url": ""
    },
    "community": {
      "url": ""
    }
  }
}
```

<Steps>
  <Step>
    Desde la página de inicio de [New Relic](https://one.newrelic.com) , vaya a <DNT>**+ Integrations & Agents**</DNT> en la barra de navegación superior.
  </Step>

  <Step>
    Encuentra tu Nerdpack publicado usando el filtro de aplicaciones o la barra de búsqueda. Tenga en cuenta que no hay información o página de detalles aparte del nombre del Nerdpack y la breve descripción que se encuentra en `nr1.json`. No hay captura de pantalla, íconos, detalles ni características nuevas. Para estos, debes proporcionar información del catálogo a tu Nerdpack.
  </Step>

  <Step>
    Desde la raíz de tu Nerdpack, crea directorios de **catálogo** para albergar la captura de pantalla y los metadatos de tu Nerdpack:

    ```sh
    nr1 create --type catalog
    [output] {success}✔{normal}  created: launchers/launcher/catalog
    [output] {success}✔{normal}  created: nerdlets/home/catalog
    [output]
    [output] {success}✔{normal}  catalog created successfully!
    [output]    {purple}catalog{normal} is available at "./catalog"
    ```

    Dentro de su directorio raíz `catalog` , encontrará archivos y directorios específicos para mostrar información sobre su Nerdpack a su usuario:

    ```sh
    ls catalog
    [output] README.md         additionalInfo.md config.json       documentation.md  {blue}screenshots
    ```

    <table>
      <thead>
        <tr>
          <th>
            Archivo
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            README.md
          </td>

          <td>
            Un archivo de rebajas que le indica cómo emplear la información y los metadatos del catálogo.
          </td>
        </tr>

        <tr>
          <td>
            config.json
          </td>

          <td>
            Un archivo JSON que contiene los siguientes campos:

            * `tagline`: Un breve título para la aplicación. Esto no puede exceder los 30 caracteres.

            * `repository`: La URL del repositorio remoto de Nerdpack. Esto no puede exceder los 1000 caracteres.

            * `details`: El propósito del Nerdpack y cómo usarlo. Esto no puede exceder los 1000 caracteres. Emplee nuevas líneas para formatear y no incluya ninguna reducción de precio ni HTML.

            * `categoryTerms`: Una lista de términos que relaciona el Nerdpack con una categoría en el catálogo [de observabilidad Instantánea](https://newrelic.com/instant-observability) . Puedes buscar un mapeo de términos de categorías con NerdGraph:

              * [Consulta estadounidense](https://api.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20nr1Catalog%20%7B%0A%20%20%20%20%20%20categories%20%7B%0A%20%20%20%20%20%20%20%20displayName%0A%20%20%20%20%20%20%20%20terms%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
              * [Consulta de la UE](https://api.eu.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20nr1Catalog%20%7B%0A%20%20%20%20%20%20categories%20%7B%0A%20%20%20%20%20%20%20%20displayName%0A%20%20%20%20%20%20%20%20terms%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

            * `keywords`: Una lista de palabras relevantes para mejorar la capacidad de búsqueda de Nerdpack. Esto no puede exceder las 50 palabras y cada palabra no puede exceder los 64 caracteres.

            * `support`: Un objeto que contiene:

              * `issues`: Una URL para la lista de ediciones del repositorio. Por ejemplo, la pestaña **Issues** si usa GitHub.
              * `email`: Una dirección de email válida para el equipo que respalda la aplicación.
              * `community`: URL de un hilo de soporte, foro o sitio web para resolución de problemas y soporte de uso.

            * `whatsNew`: Una lista con viñetas de cambios en la versión actual. Esto no puede exceder los 500 caracteres. Emplee nuevas líneas para formatear y no incluya rebajas ni HTML.

              Consulte [`config.json`de nuestra aplicación Pageview Map](https://github.com/newrelic/nr1-pageview-map/blob/main/catalog/config.json) para ver una implementación real.
          </td>
        </tr>

        <tr>
          <td>
            documentation.md
          </td>

          <td>
            Un archivo de rebajas que le dice al usuario cómo usar los Nerdlets o visualizaciones de Nerdpack. Esto se muestra en la pestaña **Documentation** de la vista detallada.
          </td>
        </tr>

        <tr>
          <td>
            additionalInfo.md
          </td>

          <td>
            Un archivo de rebajas opcional para cualquier información adicional sobre el uso de su aplicación.
          </td>
        </tr>

        <tr>
          <td>
            captura de pantalla
          </td>

          <td>
            Un directorio que contiene captura de pantalla que muestra tu Nerdpack, como imágenes seleccionadas de Nerdlets o visualizaciones. Este no puede contener más de 6 imágenes. Toda captura de pantalla debe cumplir con los siguientes criterios:

            * relación de aspecto 3:2
            * formato PNG
            * orientación horizontal
            * 1600 a 2400 pixeles de ancho
          </td>
        </tr>
      </tbody>
    </table>

    Este comando también genera un directorio `catalog` para cada iniciador, Nerdlet y visualización en su Nerdpack. Dentro encontrarás un directorio que te permite agregar captura de pantalla para cada elemento de Nerdpack.

    ```shell
    ls launchers/launcher/catalog
    [output] {blue}screenshots
    [output]
    ls nerdlets/home/catalog
    [output] {blue}screenshots
    ```
  </Step>

  <Step>
    Actualiza el archivo `documentation.md` de tu Nerdpack:

    ```md fileName=catalog/documentation.md
    Enter your first and last name into the fields provided. When you're done, press **Submit** to see a personalized "Hello!" message.
    ```
  </Step>

  <Step>
    Actualice su archivo `config.json` :

    ```json fileName=catalog/config.json
    {
        "tagline": "Say hi!",
        "details": "DemoApp says Hello to a user.",
        "categoryTerms": [],
        "keywords": ["hello world"],
        "repository": "https://github.com/newrelic/developer-website",
        "whatsNew": "feat: Initial commit"
    }
    ```
  </Step>

  <Step>
    Incluye captura de pantalla en tu directorio raíz `screenshots` o en cualquier directorio de elementos `screenshots` de Nerdpack.
  </Step>

  <Step>
    Envíe la información al catálogo de Observabilidad Instantánea:

    ```shell
    nr1 catalog:submit
    [output] Uploading screenshots from demo-app...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app
    [output] Uploading screenshots from demo-app/launchers/launcher...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/launchers/launcher
    [output] Uploading screenshots from demo-app/nerdlets/home...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/nerdlets/home
    [output]  {success}✔{normal}  Updated metadata for DemoApp 1.0.0
    ```
  </Step>

  <Step>
    Vaya a Observabilidad instantánea para ver sus cambios. Haz clic en tu Nerdpack para ver los nuevos detalles. Luego, haz clic en **What's inside** para ver cualquier captura de pantalla que subiste para elementos individuales en tu Nerdpack.
  </Step>
</Steps>

## Actualiza los íconos de tu Nerdpack [#nerdpack-icons]

Dentro de un Nerdpack, puedes configurar dos tipos de íconos:

* Uno para todo tu Nerdpack, que representa tu Nerdpack en el catálogo.
* Uno para cada uno de tus pícher, que representa a tus Nerdlets.

Reemplace estos íconos y publique su Nerdpack para ver los cambios.

<Steps>
  <Step>
    Actualiza el `icon.png` en la raíz de tu Nerdpack. Este icono se emplea en el catálogo y en la página de detalles de Nerdpack.
  </Step>

  <Step>
    Si estás creando un Nerdpack con uno o más pícher, actualiza el `icon.png` en cada una de las subcarpetas de tu pícher.
  </Step>

  <Step>
    Actualice su versión `package.json` :

    ```json fileName=package.json lineHighlight=4
    {
      "private": true,
      "name": "demo-app",
      "version": "1.0.1",
      "scripts": {
        "start": "nr1 nerdpack:serve",
        "test": "exit 0"
      },
      "nr1": {
        "uuid": "f2dbc999-e9a3-49b9-933d-5a704c6750bd"
      },
      "dependencies": {
        "prop-types": "^15.6.2",
        "react": "^16.6.3",
        "react-dom": "^16.6.3"
      },
      "browserslist": ["last 2 versions", "not ie < 11", "not dead"]
    }
    ```

    Esto te permite publicar una nueva versión de tu Nerdpack.
  </Step>

  <Step>
    [Publica](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish) tu Nerdpack:

    ```sh
    nr1 nerdpack:publish
    ```
  </Step>

  <Step>
    Actualice su cadena `whatsNew` en `catalog/config.json`:

    ```json fileName=catalog/config.json
    {
      "tagline": "Say hi!",
      "details": "DemoApp says Hello to a user.",
      "categoryTerms": [],
      "keywords": ["hello world"],
      "repository": "https://github.com/newrelic/developer-website",
      "whatsNew": "feat: Add new icons"
    }
    ```

    Esto le dirá al usuario lo que agregó en la última versión de su Nerdpack.
  </Step>

  <Step>
    Envíe estos nuevos metadatos al catálogo:

    ```sh
    nr1 catalog:submit
    [output] Uploading screenshots from demo-app...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app
    [output] Uploading screenshots from demo-app/launchers/launcher...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/launchers/launcher
    [output] Uploading screenshots from demo-app/nerdlets/home...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/nerdlets/home
    [output]  {success}✔{normal}  Updated metadata for DemoApp 1.0.1
    ```
  </Step>

  <Step>
    Ve al catálogo y [suscríbete a tu Nerdpack](/docs/new-relic-solutions/new-relic-one/build-nr-apps/subscribe) para ver tu nuevo icono.
  </Step>
</Steps>

## Resolver problemas con el envío de información del catálogo [#resolve-issues]

A veces, cuando trabaja con metadatos de catálogo, puede tener problemas. Considere algunas soluciones comunes para resolver estos problemas.

### Publica tu Nerdpack [#publish-nerdpack]

Recuerda que solo puedes enviar metadatos de catálogo para Nerdpacks que ya fueron publicados. Si intentas enviar información para un Nerdpack que no se publicó, la CLI intentará ayudarte:

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {error}›{normal}   Error: {error}1 error while updating DemoApp 1.0.0
[output]  {error}›
[output]  {error}›   Invalid Version: Nerdpack version 1.0.0 not found. Have you run `nr1 nerdpack:publish` yet?
[output]  {error}›{normal}   Code: UNKNOWN
```

### Cambia el tamaño de tus imágenes [#resize-images]

La captura de pantalla para el catálogo debe cumplir con los criterios especificados anteriormente en esta guía. Si no es así, la CLI intentará ayudar:

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {error}›{normal}   Error: {error}2 errors while updating DemoApp 1.0.1
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/screenshots/screenshot.png
[output]  {error}›{normal}   {red}Invalid Screenshot: screenshot.png has a size ratio of 4:2. Update size ratio to 3:2.
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/screenshots/screenshot.png
[output]  {error}›{normal}   {red}Invalid Screenshot: screenshot.png has a width of 3054px. Update size to be between 1600px and 2400px.
[output]  {error}›{normal}   Code: UNKNOWN
```

### Comprueba la longitud de tus cuerdas. [#check-strings]

La mayor parte del contenido de `config.json` tiene requisitos de longitud de cadena. Cerciorar de revisar esos requisitos y cumplirlos cuando actualice su archivo `config.json` . De lo contrario, verá errores cuando intente enviar su configuración al catálogo:

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {success}✔{normal}  Screenshots uploaded
[output]  {error}›{normal}   Error: {error}2 errors while updating DemoApp 1.0.1
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/config.json
[output]  {error}›{normal}   {error}Invalid Metadata: `details` has a character length of 2204. Must be no longer than 1000 characters
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/config.json
[output]  {error}›{normal}   {error}Invalid Metadata: `tagline` has a character length of 266. Must be no longer than 30 characters
[output]  {error}›{normal}   Code: UNKNOWN
```
