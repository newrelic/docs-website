---
title: Publica tu aplicación New Relic
metaDescription: Publish your New Relic application
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  Esta lección es parte de un curso que le muestra cómo crear una aplicación New Relic desde cero. Si aún no lo hiciste, consulta la descripción general.

  Cada lección del curso se basa en la anterior, así que cerciorar de completar la última lección, Describe tu aplicación para el catálogo, antes de comenzar esta.
</Callout>

En la última lección, creó información de catálogo para la aplicación Prueba A/B que estuvo creando a lo largo de este curso. Ahora es el momento de publicar su aplicación en el catálogo de observabilidad instantánea y enviar esos detalles del catálogo.

## Versiones y etiqueta [#versions]

La publicación de una aplicación requiere dos datos clave:

* versión
* etiqueta

La versión de una aplicación identifica el código que contiene y se almacena en el archivo `package.json` de nivel raíz de Nerdpack. Cada vez que modifiques el código en tu Nerdpack y estés listo para publicarlo, actualizarás la versión en `package.json`. Por ejemplo, si corrige algunos errores en la primera versión principal del código de su aplicación, puede publicar los cambios en la versión `1.0.1`.

La etiqueta de la versión de una aplicación describe su estado. Por ejemplo, la versión `0.0.1` de una aplicación en desarrollo podría publicar con una etiqueta `DEV` para indicar que está en desarrollo.

<Callout variant="tip">
  Existen algunas reglas que rigen cómo se puede usar la etiqueta y puedes leer sobre ellas en nuestra documentación sobre etiquetas.
</Callout>

## Publica tu primera aplicación [#publish]

<Steps>
  <Step>
    Cambie al directorio `publish/ab-test` del [repositorio de trabajos del curso](https://github.com/newrelic-experimental/nru-programmability-course):

    ```sh
    cd nru-programmability-course/publish/ab-test
    ```

    Este directorio contiene el código que esperamos que tenga su aplicación en este punto del curso. Al navegar al directorio correcto al comienzo de cada lección, deja atrás su código personalizado, proteger así de llevar código incorrecto de una lección a la siguiente.
  </Step>

  <Step>
    Navega hasta la raíz de tu Nerdpack en `nru-programmability-course/publish/ab-test`.
  </Step>

  <Step>
    Genera tu propio UUID de aplicación:

    ```sh
    nr1 nerdpack:uuid -gf
    ```

    El UUID se emplea para identificar su aplicación en el registro de aplicaciones New Relic. Debido a que está empleando el código que desarrollamos para este curso, ya existe en el registro una aplicación con el UUID existente. Al generar la suya propia, ahora podrá publicar esta aplicación.

    <Callout
      variant="tip"
      title="Detalle técnico"
    >
      El UUID también vincula su aplicación a su cuenta y, por lo tanto, permite que la aplicación realice solicitudes de Nerdgraph en nombre de la cuenta que la instaló.
    </Callout>
  </Step>

  <Step>
    En `package.json`, establezca `version` en `1.0.0`:

    ```json
    {
      "private": true,
      "name": "ab-test",
      "version": "1.0.0",
      "scripts": {
        "start": "nr1 nerdpack:serve",
        "test": "exit 0"
      },
      "nr1": {
        "uuid": "2d923ba6-d231-4dd3-830f-b1923577a422"
      },
      "dependencies": {
        "prop-types": "^15.6.2",
        "react": "^16.6.3",
        "react-dom": "^16.6.3"
      },
      "browserslist": ["last 2 versions", "not ie < 11", "not dead"]
    }
    ```

    New Relic emplea [versiones semánticas](https://semver.org) y, según esta convención, `1.0.0` señala el primer lanzamiento importante. ¡Ahora estás listo para publicar!
  </Step>

  <Step>
    Reemplace todas las instancias de `<YOUR NEW RELIC ACCOUNT ID>` y `<YOUR NEW RELIC ENTITY GUID>` en su proyecto con su New Relic [ID de cuenta](/docs/accounts/accounts-billing/account-setup/account-id) y GUID de entidad reales, respectivamente.
  </Step>

  <Step>
    Publique su aplicación New Relic:

    ```sh
    nr1 nerdpack:publish -t DEV
    ```

    ¡Eso es todo! Publicaste tu aplicación en el registro de New Relic. El parámetro `-t` especifica una etiqueta para su versión publicada. Entre otros logs, debería ver la siguiente confirmación en su consola:

    ```sh
    [output] Publishing Nerdpack AbTest ({blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain})
    [output]  {success}✔{plain}  Nerdpack published successfully!
    [output]  {success}✔{plain}  Tagged {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain} version {green}1.0.0{plain} as {green}DEV{plain}.
    ```

    Por ahora, etiquetó la versión 1.0.0 como `DEV` porque todavía es un trabajo en progreso.
  </Step>

  <Step>
    Vea la información de registro de su aplicación:

    ```sh
    nr1 nerdpack:info
    [output] Id: {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380
    [output] Region: {muted}us
    [output] Account ID: 123456
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 4
    [output]
    [output] Version  Date           Tags
    [output] -------  -------------  ------
    [output] 1.0.0    {muted}5 minutes ago  {green}DEV
    ```

    Los resultados de este comando detallan la información almacenada en el registro de New Relic para su aplicación, incluido su UUID, versión e ID de cuenta.
  </Step>
</Steps>

## Visualiza tu aplicación en Observabilidad Instantánea [#view-app]

Ahora que tu aplicación está publicada y etiquetada, puedes visualizarla en el catálogo de Observabilidad Instantánea.

<Steps>
  <Step>
    Ir a [New Relic](https://one.newrelic.com). Observe que no está empleando el parámetro de cadena de consulta `?nerdpacks=local`. Ya no lo necesitas porque no estás entregando tu aplicación localmente.
  </Step>

  <Step>
    Desde la página de inicio, navegue hasta **Integrations & Agents** en la barra de navegación superior.

    Seleccione **Apps & Visualizations**.

    Desde aquí podrás ver tu aplicación entre los recursos.

    Tenga en cuenta que esto es diferente a cuando entregó su aplicación localmente. Las aplicaciones locales y las aplicaciones publicadas a las que estás suscrito se muestran en **Your apps** en la superposición de Aplicaciones.
  </Step>

  <Step>
    Haga clic en su aplicación para ver más detalles.

    Observe la fecha de lanzamiento y la versión de la aplicación. Esta página debe mostrar la información que creó en la última lección. Todavía no es así, porque no enviaste esa información al catálogo y publicar tu aplicación no lo hace por ti.
  </Step>
</Steps>

## Enviar información del catálogo [#submit]

Aunque publicaste tu aplicación, hay algunas cosas que el catálogo no conoce. Estas son las descripciones, captura de pantalla y metadatos que creaste en la última lección. `nr1 catalog` se emplea para enviar y ver esta información.

<Steps>
  <Step>
    Envíe la información de su catálogo:

    ```sh
    nr1 catalog:submit
    [output] Uploading screenshots from nru-programmability-course/publish/ab-test...
    [output]  {success}✔{normal}  Screenshots uploaded from: nru-programmability-course/publish/ab-test
    [output]  {green}✔  {plain}Updated metadata for AbTest 1.0.0
    ```

    Si todo va bien, deberías ver un mensaje de éxito notificándote que la captura de pantalla y los metadatos se actualizaron.

    Sin embargo, es posible que reciba un error al enviar esta información al catálogo:

    ```sh
    [output] Uploading screenshots...
    [output]  {error}›   {plain}Error: {error}1 error while updating AbTest 1.0.0
    [output]  {error}›
    [output]  {error}›   Invalid Version: Nerdpack version 1.0.0 not found. Have you run `nr1 nerdpack:publish` yet?
    [output]  {error}›   {plain}Code: UNKNOWN
    ```

    Si es así, inténtalo de nuevo en uno o dos minutos. El catálogo puede tardar unos segundos en actualizar con la nueva versión de su aplicación.

    Si eso no funciona, cerciorar de publicar su aplicación con `nr1 nerdpack:publish`.
  </Step>

  <Step>
    Vea la información de su catálogo:

    ```sh
    nr1 catalog:info
    [output] AbTest (Nerdpack):
    [output]     {purple}categoryTerms.0: {plain}browser agent
    [output]     {purple}description: {plain}Nerdpack ab-test
    [output]     {purple}details: {plain}Display test data for our newsletter subscription A/B test
    [output]     {purple}displayName: {plain}AbTest
    [output]     {purple}keywords.0: {plain}a/b test
    [output]     {purple}icon.url: {plain}https://nr3.nr-ext.net/artifact-index-production/a685fec2-29fb-40b0-9f65-4178...
    [output]     {purple}previews.0.url: {plain}https://application-catalog-production.s3.us-east-2.amazonaws.com/nerdpacks/a...
    [output]     {purple}releaseDate: {plain}2021-03-12T15:46:09.600138Z
    [output]     {purple}repository: {plain}https://github.com/newrelic-experimental/nru-programmability-course
    [output]     {purple}tagline: {plain}Win @ newsletter subscriptions
    [output]     {purple}version: {plain}1.0.0
    [output]     {purple}whatsNew.changes: {plain}Initial release! Includes:
    [output]     - A variety of charts for understanding the test r...
    [output]     {purple}whatsNew.version: {plain}1.0.0
    [output] AbTestLauncher (Launcher):
    [output]     {purple}description: {plain}Describe me
    [output]     {purple}displayName: {plain}AbTestLauncher
    [output]     {purple}icon.url: {plain}https://nr3.nr-ext.net/artifact-index-production/a685fec2-29fb-40b0-9f65-4178...
    [output] AbTestNerdlet (Nerdlet):
    [output]     {purple}displayName: {plain}AbTestNerdlet
    [output]     {purple}supportedEntityTypes.mode: NONE
    ```

    Toda la información de `catalog` se muestra aquí.
  </Step>

  <Step>
    Vea su aplicación.

    Haga clic en la aplicación para ver más.

    Verás la captura de pantalla agregada a tu launcher o Nerdlet en **What's inside**.

    Aquí verá los detalles de la aplicación, una pestaña de documentación, notas de la versión y captura de pantalla.
  </Step>
</Steps>

## Actualiza tu etiqueta de versión [#update]

Su aplicación se ve genial en el catálogo de observabilidad instantánea, completo con metadatos, imágenes y documentación. Antes, etiquetabas la aplicación como `DEV` porque toda la información no estaba lista para el consumo público. Ahora es. Es hora de actualizar la etiqueta de su versión.

<Steps>
  <Step>
    Actualice la versión de su aplicación `1.0.0` de `DEV` a `STABLE`:

    ```sh
    nr1 nerdpack:tag -t STABLE
    [output]  {success}✔{plain}  Tagged {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain} version {green}1.0.0{plain} as {green}STABLE{plain}.
    ```

    Sin especificar una versión, `nr1` usa la versión especificada en `package.json`. Puede especificar una versión con el comando `-V`. Obtenga más información sobre `nerdpack:tag` con el comando `nr1 nerdpack:tag --help`.
  </Step>

  <Step>
    Ver la información de su aplicación:

    ```sh
    nr1 nerdpack:info
    [output] Id: {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380
    [output] Region: {muted}us
    [output] Account ID: 123456
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date           Tags
    [output] -------  -------------  ------
    [output] 1.0.0    {muted}30 minutes ago  {green}STABLE
    ```

    La aplicación ahora tiene la etiqueta `STABLE`, lo que indica que está lista para uso público.

    <Callout
      variant="tip"
      title="Detalle técnico"
    >
      Aunque la aplicación está lista para uso público, solo es visible para el usuario de su cuenta. Otras cuentas no pueden ver aplicaciones creadas por otras cuentas privadas a menos que esas aplicaciones se agreguen al catálogo público de observabilidad instantánea.
    </Callout>
  </Step>
</Steps>

Ahora que tu aplicación está publicada y sus metadatos enviados, puedes suscribir tu cuenta a la aplicación desde Observabilidad instantánea. En la siguiente lección, aprenderá las formas de suscribir y cancelar la subscripción a su nueva aplicación.

<Callout variant="course">
  Esta lección es parte de un curso que le muestra cómo crear una aplicación New Relic desde cero. Continúe con la siguiente lección: Suscribir a su aplicación New Relic.
</Callout>
