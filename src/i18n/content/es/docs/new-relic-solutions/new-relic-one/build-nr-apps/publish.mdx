---
title: Publica tu Nerdpack
tags:
  - New Relic
  - Nerdpack
  - Publish
metaDescription: Learn to publish your Nerdpack to Instant Observability.
freshnessValidatedDate: never
translationType: machine
---

Publica tu Nerdpack, ya sea que esté todavía en desarrollo, listo para probar o estable, para compartirlo con otros.

## Actualice su CLI

Antes de ejecutar cualquier comando, cerciorar de tener la última versión de la CLI:

```shell
nr1 update
```

## Comprueba tus licencias

Cuando publicas tu Nerdpack, queda registrado en el catálogo de Observabilidad Instantánea. A partir de ahí, algún usuario podrá suscribir a tu Nerdpack. El usuario suscriptor debe tener:

* Acceso a la cuenta que publicó el Nerdpack
* Los [licencias necesarias](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps) para gestionar Nerdpacks

## Actualice la versión de su paquete

Solo puedes publicar una versión de paquete en el catálogo [de observabilidad Instantánea](https://newrelic.com/instant-observability) una vez. Por ejemplo, no puedes publicar dos instancias de la versión 1.0.0. Entonces, cada vez que quieras desplegar una nueva versión de tu código, debes incrementar su versión en el archivo `package.json` de Nerdpack:

```json fileName=package.json lineHighlight=4
{
  "private": true,
  "name": "demo-app",
  "version": "1.0.0",
  "scripts": {
    "start": "nr1 nerdpack:serve",
    "test": "exit 0"
  },
  "nr1": {
    "uuid": "ab123c45-678d-9012-efg3-45hi6jkl7890"
  },
  "dependencies": {
    "prop-types": "^15.6.2",
    "react": "^16.6.3",
    "react-dom": "^16.6.3"
  },
  "browserslist": ["last 2 versions", "not ie < 11", "not dead"]
}
```

<Callout variant="tip">
  Las versiones Nerdpack siguen el control de versiones semántico. Lea la [documentación](https://semver.org) para obtener más información.
</Callout>

## Genera un UUID para tu Nerdpack

Si creaste tu Nerdpack desde cero con `nr1 create --type nerdpack`, entonces tu Nerdpack tiene un identificador único. Busque este identificador en el archivo `nr1.json` del directorio raíz:

```json fileName=nr1.json lineHighlight=3
{
  "schemaType": "NERDPACK",
  "id": "ab123c45-678d-9012-efg3-45hi6jkl7890",
  "displayName": "DemoApp",
  "description": "Nerdpack demo-app"
}
```

Esta ID debe ser única para tu Nerdpack cuando lo publiques en el catálogo. La plataforma rechazará tu Nerdpack si reconoce el ID. Entonces, si clonaste un Nerdpack existente o estás usando código abierto, genera un nuevo UUID:

```shell
nr1 nerdpack:uuid --generate --force
```

<Callout variant="tip">
  Lea la documentación [`nr1 nerdpack:uuid`](/docs/new-relic-solutions/build-nr-ui/nr1-cli/nr1-nerdpack/#nr1-nerdpackuuid) para obtener más información. O vea la página de ayuda `nr1` :

  ```shell
  nr1 nerdpack:uuid --help
  ```
</Callout>

## Publica tu Nerdpack

<Steps>
  <Step>
    En la carpeta raíz de tu Nerdpack, ejecuta `nr1 nerdpack:publish`:

    ```shell
    nr1 nerdpack:publish
    ```

    Si publicó con éxito su Nerdpack, debería ver algunos resultados exitosos, que incluyen:

    ```shell
    [output] {green}✔{normal}  Nerdpack published successfully!
    [output] {green}✔{normal}  Tagged {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} version {blue}1.0.0{normal} as {blue}STABLE{normal}.
    ```

    Este resultado describe el Nerdpack publicado. Primero, indica la identificación del Nerdpack (`ab123c45-678d-9012-efg3-45hi6jkl7890`). Luego, su versión (`1.0.0`). Finalmente, su etiqueta de versión (`STABLE`).

    Ya gestionaste el ID y la versión de tu Nerdpack, pero la etiqueta de versión es nueva. Para gestionar las versiones de tu Nerdpack, puedes etiquetarlas con una etiqueta arbitraria. Por ejemplo, si una versión aún está en desarrollo, puede etiquetarla con una etiqueta `DEV` . Si la versión pasa a una fase de control de calidad, puede etiquetarla con `QA`. Si está listo para producción, puede etiquetarlo con `STABLE`.

    <Callout variant="tip">
      Lea nuestra [guía de etiquetas](/docs/new-relic-solutions/new-relic-one/build-nr-apps/tag) para obtener más información.
    </Callout>

    Emplee la opción `-t` o `--tag` para publicar su Nerdpack con una etiqueta:

    ```shell
    nr1 nerdpack:publish --tag DEV
    ```

    Como vio en el resultado `nr1 nerdpack:publish` , si no pasa una etiqueta, `nr1` aplica la etiqueta `STABLE` automáticamente. Sin embargo, puedes indicarle que no aplique ninguna etiqueta a una versión con la opción `-T` o `--skip-tag` :

    ```shell
    nr1 nerdpack:publish --skip-tag
    ```

    También puedes realizar un ensayo para cerciorarte de publicar tu Nerdpack de la manera que deseas:

    ```shell
    nr1 nerdpack:publish --dry-run
    ```
  </Step>

  <Step>
    Una vez que publicaste exitosamente tu Nerdpack, ve a [New Relic](https://one.newrelic.com). Debido a que vas a ver un Nerdpack publicado, en lugar de uno servido localmente, no necesitas pasar la cadena de consulta `?nerdpacks=local` .
  </Step>

  <Step>
    Ir a **+ Integrations & Agents**. Ya sea que publicó una aplicación New Relic o una visualización personalizada, encontrará su proyecto aquí.
  </Step>

  <Step>
    Encuentra tu Nerdpack publicado usando el filtro de aplicaciones o la barra de búsqueda.

    <Callout variant="tip">
      Sólo los Nerdpacks con versiones de etiqueta se muestran en [Observabilidad instantánea](https://newrelic.com/instant-observability). Entonces, si publicaste sin una etiqueta o eliminaste una etiqueta de tu Nerdpack publicado, no lo verás en el catálogo.
    </Callout>
  </Step>
</Steps>

## Resuelve problemas al acceder a tu Nerdpack publicado

A veces, cuando publicas tu Nerdpack, puedes encontrarte con problemas. Ya sea que no puedas publicar tu Nerdpack debido a algún problema con tu código o no puedas encontrar tu Nerdpack en Observabilidad instantánea, considera algunas soluciones comunes para resolver estos problemas.

### Depura tu comando

Cuando intentes publicar tu Nerdpack, lee atentamente el resultado de tu comando `nr1` . Es posible que reciba resultados exitosos, que incluyen:

```shell
[output] {green}✔{normal}  Nerdpack published successfully!
[output] {green}✔{normal}  Tagged {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} version {blue}1.0.0{normal} as {blue}STABLE{normal}.
```

Sin embargo, el resultado puede mostrar algunos errores en su Nerdpack. Por ejemplo:

```shell
[output] Publishing Nerdpack DemoApp ({purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal})
[output] {error}›{normal}   Error: There is already a Nerdpack with given id & version.
[output] {error}›{normal}   Code: 409
```

También puede ayudarlo a ver resultados más detallados. Emplee el comando `--verbose` para mostrar más contenido:

```sh
nr1 nerdpack:publish --verbose
```

## Revela tu información Nerdpack publicada

Si no encuentra su Nerdpack en New Relic, es posible que no esté etiqueta. Recuerde, al menos una versión de su Nerdpack publicado debe tener una etiqueta para que se muestre en la página de **Apps** . Consulta más información sobre tu Nerdpack publicado con `nr1 nerdpack:info`:

```shell
nr1 nerdpack:info
[output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
[output] Region: {muted}us
[output] Account ID: 3014918
[output] Local version: 1.0.0
[output] Subscription Model: OWNER_AND_ALLOWED
[output] Version Count: 1
[output]
[output] {white}Version  Date         Tags
[output] -------  -----------  ----
[output] 1.0.0    {muted}3 hours ago
```

En este ejemplo, hay una versión publicada, pero no es etiqueta. Puedes etiquetar una versión publicada con:

```sh
nr1 nerdpack:tag --from-version=1.0.0 --tag=DEV
```

Ahora, si actualiza la página de su browser , debería ver su Nerdpack en **Apps**.

<Callout variant="tip">
  Lea nuestra documentación [`nr1 nerdpack:tag`](/docs/new-relic-solutions/build-nr-ui/nr1-cli/nr1-nerdpack/#nr1-nerdpacktag) para obtener más información.
</Callout>

## Consulta tu perfil local

Con `nr1`, puedes [establecer un perfil predeterminado de New Relic](/docs/new-relic-solutions/build-nr-ui/nr1-cli/nr1-common/#nr1-profiles). Este perfil se emplea para todos los comandos a menos que se especifique lo contrario con la opción `--profile` del comando. Cuando publicas tu Nerdpack, solo el usuario que pueda acceder a tu cuenta podrá ver tu Nerdpack publicado.

Entonces, si no encuentras tu Nerdpack en New Relic pero sabes que está publicado, compara tu perfil local con el perfil que estás usando en el browser para cerciorarte de que sean iguales.
