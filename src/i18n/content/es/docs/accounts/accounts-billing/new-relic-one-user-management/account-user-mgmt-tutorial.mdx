---
title: Tutorial sobre gestión de cuentas y acceso de usuarios
metaDescription: A tutorial that will walk you through creating and managing New Relic accounts and users.
freshnessValidatedDate: never
translationType: machine
---

Este tutorial lo guiará a través de cómo agregar y administrar cuentas y usuarios.

## Antes de que empieces [#requirements]

Antes de comenzar este tutorial, algunas cosas que debes entender:

* Se requiere [la edición](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing#editions) Pro o Enterprise

* Este tutorial es para administrar usuarios que están en nuestro [modelo de usuario más nuevo](/docs/accounts/original-accounts-billing/original-users-roles/overview-user-models) (verdadero para casi todos los usuarios de New Relic)

* Este tutorial será más fácil si primero tienes un conocimiento básico de:

  * [Conceptos de organización y cuenta.](/docs/accounts/accounts-billing/account-structure/new-relic-account-structure#new-model)
  * [Conceptos de gestión de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#understand-concepts)

* Esto presenta un flujo de trabajo recomendado, pero no se requiere ningún orden particular de pasos.

* Para ver una hoja de cálculo de ejemplo que muestra cómo una organización podría planificar el acceso de sus usuarios, consulte la [hoja de cálculo de planificación de acceso grupal](https://docs.google.com/spreadsheets/d/1FnguDXRUX9FGY14oV4Gx6O08v4vNC2Pv0GGCsU7Pxuw/edit?usp=sharing).

## Descripción general [#overview]

Este tutorial lo guiará a través de:

1. [Creación de organización](#create-organization)
2. [Cómo agregar cuentas](#add-accounts)
3. [Cómo configurar un dominio de autenticación](#auth-domains)
4. [Cómo configurar roles personalizados](#roles)
5. [Cómo gestionar el acceso al grupo](#group-access)
6. [Cómo agregar usuario](#add-users)

<Steps>
  <Step>
    ## Creación y configuración de la organización. [#create-organization]

    Cuando te [registras en New Relic](https://newrelic.com/signup), se crea tu organización New Relic. La estructura de la organización representa a los clientes de New Relic: es lo que contiene todo lo relevante para el uso de New Relic por parte de un cliente: sus cuentas, su usuario y sus datos.

    Cuando se crea una organización New Relic, contiene una sola cuenta. Pro y edición Enterprise la organización puede agregar más cuentas.

    Cuando se crea su organización, tiene dos grupos de usuarios predeterminados, que ya tienen roles y cuentas asignados. Cuando agrega un usuario a través de la UI, hay dos grupos predeterminados a los que puede asignar un usuario:

    * <DNT>
        **Admin**
      </DNT>

      : puede usar y configurar la característica de observabilidad para esa cuenta inicial y la capacidad de ver y configurar ajustes de administración de toda la organización (como agregar cuentas, administrar configuraciones de autenticación y agregar/eliminar usuarios).

    * <DNT>
        **User**
      </DNT>

      : puede usar y configurar la característica de observabilidad (pero carece de acceso a las capacidades de administrador que tiene el grupo

      <DNT>
        **Admin**
      </DNT>

      .

      Puede ver el acceso asignado a estos grupos predeterminados accediendo a la UI <DNT>**Access management**</DNT>:

    1. Iniciar sesión en [one.newrelic.com](https://one.newrelic.com/).

    2. Haga clic en su nombre de usuario y luego en

       <DNT>
         **Administration > Access Management**
       </DNT>

       .

       <img
         title="New Relic organization and access UI - default group access"
         alt="New Relic organization and access UI - default group access"
         src="/images/accounts_screenshot-crop_User-mgmt-groups-UI.webp"
       />

       Podrás ver como el grupo <DNT>**User**</DNT> tiene el rol <DNT>**All product admin**</DNT> y acceso a esa cuenta creada inicialmente. Y puedes ver como el grupo <DNT>**Admin**</DNT> tiene algunas configuraciones de administración asignadas. El `Default` junto a los nombres de esos grupos hace referencia a que están en el dominio de autenticación predeterminado original.

       Si desea crear administradores que solo puedan agregar y eliminar usuarios y que no tengan las capacidades de administración más poderosas para toda la organización que tiene el grupo <DNT>**Admin**</DNT> , puede usar el [rol<DNT>**Group admin**</DNT> ](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#group-admin).
  </Step>

  <Step>
    ## Agregar cuentas [#add-accounts]

    Antes de agregar su usuario a New Relic, es posible que desee [obtener algunos informes de datos](/docs/using-new-relic/welcome-new-relic/get-started/get-started-full-stack-observability) y configurar cuentas adicionales.

    Para conocer los motivos por los que es posible que desee crear más cuentas, consulte [Estructura de la organización](/docs/accounts/accounts-billing/account-structure/new-relic-account-structure/#new-model).

    Para saber cómo agregar cuentas, consulte [Agregar cuentas](/docs/accounts/accounts-billing/account-structure/add-accounts).
  </Step>

  <Step>
    ## Configurar dominio de autenticación [#auth-domains]

    Cuando se crea su organización por primera vez, los grupos y el usuario se ubican en un dominio de autenticación predeterminado, denominado `Default`. Un dominio de autenticación es una agrupación de usuarios de New Relic regida por la misma configuración de administración de usuarios, como cómo se aprovisionan (agregan y actualizan), cómo se autentican (iniciar sesión), configuraciones de sesión y cómo se manejan las actualizaciones de usuarios.

    La configuración predeterminada del dominio de autenticación es:

    * Los usuarios se agregan y administran manualmente a través de la UIde New Relic

    * Los usuarios inician sesión manualmente en New Relic usando su correo electrónico y contraseña.

      Tener ese dominio único estará bien para muchas organizaciones, pero algunas organizaciones más grandes quieren uno o ambos de los siguientes:

    * Inicio de sesión único (SAML SSO)

    * Administrar su usuario desde su proveedor de identidad a través del aprovisionamiento SCIM

      Si necesita inicio de sesión único o aprovisionamiento SCIM, deberá crear un dominio de autenticación adicional. Tenga en cuenta que los grupos y los usuarios están contenidos dentro de dominios de autenticación, y no puede cambiar fácilmente la configuración de aprovisionamiento o la configuración de autenticación de un dominio de autenticación una vez que se crea el dominio: esto significa que debe dedicar algún tiempo a pensar en cuál debería ser la configuración de su dominio de autenticación antes de agregarles usuario.

      Si desea utilizar el aprovisionamiento SAML SSO o SCIM, consulte estas opciones:

      <CollapserGroup>
        <Collapser
          id="scim-and-saml"
          title="SCIM y SAML SSO"
        >
          Para saber cómo configurar el aprovisionamiento SCIM y SAML SSO, consulte nuestros [documentos de administración automatizada de usuarios](/docs/accounts/accounts/automated-user-management/automated-user-provisioning-single-sign#how-to). Cuando haya terminado, asegúrese de poder ver los grupos de su proveedor de identidad en la UI <DNT>**Access management**</DNT>.
        </Collapser>

        <Collapser
          id="saml-only"
          title="Solo SAML SSO (no SCIM)"
        >
          Para saber cómo configurar SAML SSO, consulte los [documentos de SSO](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more#authentication). Cuando haya terminado, regrese aquí para continuar con este tutorial.
        </Collapser>
      </CollapserGroup>
  </Step>

  <Step>
    ## Crear roles personalizados (opcional) [#roles]

    Tenemos varios roles disponibles de forma predeterminada, a los que llamamos [roles estándar](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#standard-roles). Algunos de ellos están asignados a los grupos <DNT>**Admin**</DNT> y <DNT>**User**</DNT> que están disponibles de forma predeterminada.

    Si tienes Pro o edición Enterprise, puedes crear tus propios roles personalizados. La creación de roles personalizados es opcional. Si no necesita roles personalizados, puede omitir esta sección.

    Algunos consejos que le ayudarán a comprender qué son los roles:

    * Usuario se asignan a grupos (por ejemplo, los grupos predeterminados

      <DNT>
        **Admin**
      </DNT>

      y

      <DNT>
        **User**
      </DNT>

      ) y a esos grupos se les asignan varias funciones y cuentas. Dicho de otra manera: no es el grupo el que da acceso al usuario a los permisos de New Relic: son los roles.

    * Un rol contiene varios permisos. Por ejemplo: el permiso para crear y modificar condición de alerta, o el permiso para eliminar datos ingeridos clave de licencia (para obtener más información, consulte [Permisos](/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions)).

    * A diferencia de los grupos y el rol de usuario, no están contenidos en un dominio de autenticación: están disponibles en toda la organización.

      Para ver las funciones existentes: en el [menú de usuario](/docs/accounts/accounts-billing/general-account-settings/intro-account-settings), haga clic en <DNT>**Administration**</DNT>, luego haga clic en <DNT>**Access management**</DNT> y luego haga clic en <DNT>**Roles**</DNT>.

      Para crear una función personalizada, haga clic en <DNT>**Add new custom role**</DNT>. Revise la lista de permisos disponibles y decida cuáles necesita su rol personalizado.

      A continuación se muestra un breve vídeo que muestra cómo crear un rol personalizado (4:07 minutos):

      <Video
        id="CBa0jWINQiw"
        type="youtube"
      />
  </Step>

  <Step>
    ## Crear grupos y asignar acceso [#group-access]

    Los grupos se utilizan para agrupar a su usuario y administrar lo que su usuario puede hacer en New Relic. Usted asigna a los grupos uno o más roles en una o más cuentas.

    Para configurar grupos de manera óptima, deberá pensar qué grupos necesitará, qué roles deberían tener esos grupos y qué acceso a la cuenta deberían tener esos grupos.

    Si tiene una estructura organizativa relativamente plana y está de acuerdo con que todos o muchos de sus usuarios tengan amplio acceso administrativo y acceso a todas las cuentas, probablemente solo necesitará como máximo algunas configuraciones de grupo adicionales. Por ejemplo, puede decidir agregar más cuentas a los grupos <DNT>**Admin**</DNT> o <DNT>**User**</DNT> predeterminados existentes. O, si necesita una definición más granular de roles y permisos, puede crear nuevos grupos con acceso a roles específicos (ya sean nuestros roles estándar o roles definidos de forma personalizada).

    Para ver un ejemplo de hoja de cálculo de planificación de acceso de usuarios, consulte nuestra [hoja de cálculo de planificación de acceso de grupo](https://docs.google.com/spreadsheets/d/1FnguDXRUX9FGY14oV4Gx6O08v4vNC2Pv0GGCsU7Pxuw/edit?usp=sharing).

    Para ver grupos existentes: en el [menú de usuario](/docs/accounts/accounts-billing/general-account-settings/intro-account-settings), haga clic en <DNT>**Administration**</DNT> y luego haga clic en <DNT>**Access management**</DNT>. En la pestaña <DNT>**Groups**</DNT> , verá los grupos existentes y el acceso que se les ha asignado.

    Puede administrar grupos a través de la UI o API:

    <CollapserGroup>
      <Collapser
        id="grants-ui"
        title="Administrar el acceso al grupo a través de la UI"
      >
        Antes de agregar acceso a grupos, asegúrese de comprender bien los [conceptos de administración de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#understand-concepts) y el acceso que su usuario debe tener.

        Para agregar acceso a grupos en la UI:

        1. Desde la UI

           <DNT>
             **Access management**
           </DNT>

           , haga clic en

           <DNT>
             **Groups**
           </DNT>

           .

        2. Puede crear un grupo nuevo o editar uno existente:

           * Para crear un nuevo grupo, haga clic en

             <DNT>
               **Create new group**
             </DNT>

             y siga las instrucciones.

           * Para editar uno existente, haga clic en el

             <Icon name="fe-more-horizontal"/>

             icono del grupo que desea editar. Haga clic en

             <DNT>
               **View group details**
             </DNT>

             y edite el acceso del grupo.

           Cuando haya terminado, si el usuario ya está asignado al grupo que creó o editó, ese usuario tendrá el nuevo acceso en unos minutos (aunque para [organizaciones de la región de la UE](/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers), esto puede tardar hasta veinte minutos aproximadamente). Si su usuario aún no está en ese grupo (lo que sería cierto para un grupo recién creado), el siguiente paso le mostrará cómo agregar un usuario.

           Algunos consejos para usar esta UI:

        * ¿Quiere comprender mejor las funciones y la configuración de administración? Ver [Roles](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#roles).

        * Al seleccionar entre nuestros [roles estándar](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#standard-roles), es importante comprender la diferencia entre

          <DNT>
            **All product admin**
          </DNT>

          y

          <DNT>
            **Standard user**
          </DNT>

          .

          <DNT>
            **All product admin**
          </DNT>

          es una opción más popular porque ofrece la posibilidad de configurar características de la plataforma. Si quisiera que su usuario pudiera usar las características de la plataforma pero no configurar los ajustes para esas características, elegiría

          <DNT>
            **Standard user**
          </DNT>

          .
      </Collapser>

      <Collapser
        id="grants-api"
        title="Administrar el acceso al grupo a través de API"
      >
        Para saber cómo administrar el acceso al grupo a través de la API, consulte [Administración de usuarios de NerdGraph](/docs/apis/nerdgraph/examples/nerdgraph-user-mgmt#concepts).
      </Collapser>
    </CollapserGroup>
  </Step>

  <Step>
    ## Añadir usuario [#add-users]

    Debido a cómo facturamos por mes calendario, hay razones por las que es posible que desees esperar hasta el comienzo de un mes para agregar un usuario. Para obtener más información al respecto, consulte [Facturación de usuario](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/user-count-billing#user-count).

    Si está utilizando el aprovisionamiento SCIM, debería haber terminado en este punto porque sus grupos y usuarios se importan desde su proveedor de identidad. Puedes pasar al [paso de verificación](#verification).

    De lo contrario, deberá agregar usuario. En la [UIde usuario de administración de usuarios](https://one.newrelic.com/admin-portal/organizations/users-list), puede ver sus usuarios y los grupos a los que han sido asignados.

    Pasos sugeridos para agregar usuarios a través de la UI:

    1. Para ver usuarios y ver sus grupos: en el [menú de usuario](/docs/accounts/accounts-billing/general-account-settings/intro-account-settings), haga clic en

       <DNT>
         **Administration**
       </DNT>

       y haga clic en

       <DNT>
         **User management**
       </DNT>

       .

    2. Opcional: seleccione su dominio de autenticación usando el conmutador de dominio. (Recuerde que los grupos residen dentro de los límites de un dominio de autenticación).

    3. Para agregar un usuario, haga clic en

       <DNT>
         **Add user**
       </DNT>

       . Complete el símbolo en la UI, incluida la elección del [tipo de usuario](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) y grupo. Todos los grupos personalizados que haya agregado están disponibles en el menú desplegable de grupos. Si el grupo personalizado que elige tiene una función y una cuenta asignadas, una vez que agregue el usuario a ese grupo, ese usuario tendrá acceso.

       Para editar el grupo de un usuario u otros detalles: haga clic en el usuario que desea editar y realice cambios. Para obtener sugerencias sobre edición masiva y otras tareas comunes, consulte [Tareas comunes de administración de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#workflow).

       También puede utilizar nuestra API NerdGraph para [agregar y administrar usuarios.](/docs/apis/nerdgraph/examples/nerdgraph-manage-users)
  </Step>

  <Step>
    ## Verificar que todo esté funcionando [#verify]

    Ideas para comprobar que tu usuario está configurado correctamente:

    * Vaya a la UI

      <DNT>
        **User management**
      </DNT>

      y UI

      <DNT>
        **Access management**
      </DNT>

      y vea si las asignaciones de grupos y subvenciones parecen correctas y tienen sentido.

    * Haga que algunos de sus usuarios vean si pueden iniciar sesión y acceder a las cuentas que esperan ver.

      Ideas para los próximos pasos:

    * [Configurar más integración de New Relic](/docs/using-new-relic/welcome-new-relic/get-started/intro-new-relic)

    * Añadir más usuario
  </Step>
</Steps>
