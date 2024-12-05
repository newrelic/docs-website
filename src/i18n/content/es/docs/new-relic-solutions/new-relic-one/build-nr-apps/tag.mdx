---
title: Etiqueta la versión de lanzamiento de tu Nerdpack
tags:
  - New Relic
  - Nerdpack
metaDescription: Learn to tag your Nerdpack's release version.
freshnessValidatedDate: never
translationType: machine
---

Etiqueta tus versiones de Nerdpack para rastrearlas y suscribirte a ellas. Desetiqueta las versiones para evitar la subscripción u ocultar Nerdpacks del catálogo.

## Actualice su CLI

Antes de ejecutar cualquier comando, cerciorar de tener la última versión de la CLI:

```sh
nr1 update
```

## Comprueba tus licencias

Para etiquetar una versión Nerdpack, necesitas:

* Acceso a la cuenta que lo publicó
* Los [licencias necesarias](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps) para gestionar Nerdpacks.

## Publica tu Nerdpack

Debes [publicar](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish) los Nerdpacks que crees antes de poder etiquetarlos.

## Etiquetar una versión

Una vez que publicaste una versión de Nerdpack en el catálogo de la aplicación New Relic , puedes etiquetarla con la CLI `nr1`.

<Steps>
  <Step>
    En la carpeta raíz de tu Nerdpack, ejecuta `nr1 nerdpack:tag`:

    ```sh
    nr1 nerdpack:tag --tag=DEV
    [output] {success}✔{normal}  Tagged {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} version {green}1.0.0{normal} as {green}DEV{normal}.
    ```

    Aquí, etiqueta la versión `1.0.0` como `DEV`.

    Ahora, usted y otros usuarios de su cuenta pueden usar esta etiqueta:

    * Ves la etiqueta como una opción para suscribirte cuando agregas el Nerdpack a tu cuenta.
    * Si se suscribe a la etiqueta `DEV` y se actualiza más tarde (por ejemplo, `DEV` se aplica a la versión `1.0.1` ), se actualizará automáticamente a la nueva versión sin tener que suscribir nuevamente.

    <Callout variant="important">
      Una de las características de las versiones de lanzamiento de etiquetas es que los usuarios que están suscritos a una etiqueta obtienen actualizaciones automáticamente cuando esa etiqueta se usa para otra versión. Esto significa que si un usuario está probando una versión, digamos `1.0.0`, y usted aplica esa misma etiqueta a otra versión, digamos `1.0.1`, ese usuario verá la versión `1.0.1` en su cuenta y ya no podrá acceder a la Nerdpack que estaban probando antes. Muchas veces, este es el comportamiento esperado, pero cerciorar de considerar este efecto secundario cuando use la etiqueta.
    </Callout>
  </Step>

  <Step>
    Vea la información de registro de su Nerdpack:

    ```sh
    nr1 nerdpack:info
    [output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
    [output] Region: {muted}us
    [output] Account ID: 1234567
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date         Tags
    [output] -------  -----------  ----
    [output] 1.0.0    {muted}5 hours ago{green}  DEV
    ```

    Este resultado confirma su etiqueta `DEV` en la versión `1.0.0`.
  </Step>
</Steps>

## Desetiquetar una versión

A medida que creas más versiones de tu Nerdpack, puedes actualizar tu etiqueta a versiones más nuevas. Sin embargo, también puedes eliminar una etiqueta de tu Nerdpack con `nr1`.

<Steps>
  <Step>
    Desde el directorio raíz de su Nerdpack, vea su información de registro:

    ```sh
    nr1 nerdpack:info
    [output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
    [output] Region: {muted}us
    [output] Account ID: 1234567
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date               Tags
    [output] -------  -----------------  ----
    [output] 2.0.0    {muted}a few seconds ago{green}  DEV
    [output] 1.0.1    {muted}8 minutes ago{green}      BETA, STABLE
    [output] 1.0.0    {muted}6 hours ago
    ```

    Aquí verá que la versión `1.0.0` no tiene etiqueta, la versión `1.0.1` tiene dos etiquetas, `BETA` y `STABLE`, y la versión `2.0.0` tiene una etiqueta, `DEV`.
  </Step>

  <Step>
    Elimina la etiqueta `BETA` de tus versiones Nerdpack:

    ```sh
    nr1 nerdpack:untag --tag=BETA
    [output] {success}✔{normal}  Removed nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} tag {green}BETA{normal}.
    ```
  </Step>

  <Step>
    Verifica que la etiqueta fue eliminada de tu Nerdpack:

    ```sh
    nr1 nerdpack:info
    [output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
    [output] Region: {muted}us
    [output] Account ID: 1234567
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date            Tags
    [output] -------  --------------  ----
    [output] 2.0.0    {muted}5 minutes ago{green}   DEV
    [output] 1.0.1    {muted}13 minutes ago{green}  STABLE
    [output] 1.0.0    {muted}6 hours ago
    ```
  </Step>
</Steps>

## Resolver problemas con la etiqueta a versión Nerdpack

A veces, cuando etiqueta una versión Nerdpack, puede encontrar problemas. Ya sea que no puedas etiquetar tu Nerdpack o no puedas desetiquetarlo, considera algunas soluciones comunes para resolver estos problemas.

### Publica tu Nerdpack

Si intentas etiquetar tu Nerdpack sin publicarlo primero, obtendrás un error:

```sh
nr1 nerdpack:tag --tag=DEV
[output] {error}›{normal}   Error: A downstream error occurred.
```

Este mensaje de error no dice mucho, pero puedes usar la opción `--verbose` para ver más información:

```sh
nr1 nerdpack:tag --tag=DEV --verbose
[output] init version: @oclif/command@1.8.0 argv: [ {green}'--tag=DEV'{normal}, {green}'--verbose'{normal}, [length]: {yellow}2{normal} ]
[output] {blue}dist/metadata.json{normal} does not exist. package.json will be used instead.
[output] Using profile {muted}account-1234567
[output] {purple}Request:{normal} POST https://api.newrelic.com/graphql
[output] {purple}Data:{green} mutation {
[output]                 {green}nerdpackTagVersion(
[output]                     {green}nerdpackId: "ab123c45-678d-9012-efg3-45hi6jkl7890",
[output]                     {green}versionTag: {
[output]                         {green}tag: "DEV",
[output]                         {green}version: "1.0.0"
[output]                     {green}}
[output]                 {green}) {
[output]                     {green}nerdpackId
[output]                     {green}tags
[output]                     {green}version
[output]                 {green}}
[output]             {green}}
[output] {purple}Headers: {
[output]   {green}'API-Key'{normal}: {green}'<YOU USER KEY>'{normal},
[output]   {green}'Content-Type'{normal}: {green}'application/graphql'
[output] }
```

Este mensaje de error más detallado muestra GraphQL que se ejecuta detrás de escena para `nr1 nerdpack:tag`. La parte importante del mensaje aquí es:

```sh
[output] {blue}dist/metadata.json{normal} does not exist. package.json will be used instead.
```

El directorio `dist` se crea cuando publicas tu aplicación. Entonces, como aún no se publicó, este directorio no existe y `nr1` recurre a `package.json` para buscar detalles sobre tu Nerdpack. Pero, debido a que el UUID en su `package.json` no está en el registro de New Relic, el comando falló.

Entonces, antes de etiquetar sus versiones, publíquelas en el registro:

```sh
nr1 nerdpack:publish
nr1 nerdpack:tag --tag=DEV
```

<Callout variant="tip">
  ¡Recuerda que también puedes etiquetar una versión al mismo tiempo que la implementas!

  ```sh
  nr1 nerdpack:publish --tag=DEV
  ```
</Callout>

### Dar de baja del Nerdpack

Sólo puedes eliminar etiquetas que no tengan suscriptores. Si intentas eliminar una etiqueta a la que el usuario está suscrito, obtendrás un error:

```sh
nr1 nerdpack:info
[output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
[output] Region: {muted}us
[output] Account ID: 1234567
[output] Local version: 2.0.0
[output] Subscription Model: OWNER_AND_ALLOWED
[output] Version Count: 3
[output]
[output] Version  Date         Tags
[output] -------  -----------  ----
[output] 2.0.0    {muted}an hour ago  {green}DEV
[output] 1.0.1    {muted}an hour ago
[output] 1.0.0    {muted}6 hours ago
[output]
nr1 nerdpack:untag -t DEV
[output] {error}›{normal}   Error: A downstream error occurred.
```

En este caso, verifica si estás suscrito al Nerdpack:

```sh
nr1 subscription:list
[output] {muted}Listing subscribed deployed nerdpacks on your account:
[output] Version  UUID                                  Name               Date         User
[output] -------  ------------------------------------  -----------------  -----------  ----------
[output] 2.0.0    {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal}  MyAwesomeNerdpack  {muted}an hour ago  1000383529
```

Esto muestra que estás suscrito a `MyAwesomeNerdpack`. Cancelar la subscripción y luego intentar eliminar la etiqueta `DEV` nuevamente:

```sh
nr1 nerdpack:unsubscribe
[output] Unsubscribed account {green}1234567{normal} from the nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} on the {green}DEV{normal} channel.
[output]
nr1 nerdpack:untag --tag=DEV
[output] {success}✔{normal}  Removed nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} tag {green}DEV{normal}.
[output]
nr1 nerdpack:info
[output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
[output] Region: {muted}us
[output] Account ID: {green}1234567
[output] Local version: 2.0.0
[output] Subscription Model: OWNER_AND_ALLOWED
[output] Version Count: 3
[output]
[output] Version  Date         Tags
[output] -------  -----------  ----
[output] 2.0.0    {muted}an hour ago
[output] 1.0.1    {muted}an hour ago
[output] 1.0.0    {muted}6 hours ago
```
