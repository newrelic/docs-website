---
title: 'Dominio de autenticación: cómo iniciar sesión y se gestiona su usuario'
metaDescription: 'New Relic user authentication: how users are added, SAML SSO, SCIM, automated user management, and more.'
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  Este documento es para administrar usuarios en nuestro [modelo de usuario más nuevo](/docs/accounts/original-accounts-billing/original-product-based-pricing/overview-user-models). Para administrar el usuario en nuestro modelo de usuario original, consulte [Usuario original](/docs/accounts/original-accounts-billing/original-users-roles).
</Callout>

Para administrar su usuario, la organización New Relic puede configurar uno o más dominios de autenticación, que controlan cómo se agregan los usuarios a una cuenta de New Relic, cómo se autentican y más.

## Dominio de autenticación [#auth-domain-definition]

Un <DNT>**authentication domain**</DNT> es una agrupación de usuarios de New Relic regida por la misma configuración de administración de usuarios, como [cómo se aprovisionan](#source-users) (agregan y actualizan) y [cómo se autentican](#authentication) (iniciar sesión).

Cuando crea una organización New Relic, la configuración de autenticación predeterminada es:

* Fuente del usuario: su usuario se agrega a New Relic utilizando solo nuestras herramientas de administración de usuarios (no herramientas de terceros)
* Autenticación: los usuarios inician sesión con su correo electrónico y contraseña.

Esas configuraciones predeterminadas estarían bajo un dominio de autenticación. Si agregó otro dominio de autenticación, puede configurarlo así:

* Fuente del usuario: los usuarios se agregan y administran desde un proveedor de identidad externo a través del aprovisionamiento SCIM.
* Autenticación: el usuario inicia sesión mediante el inicio de sesión único (SSO) SAML de un proveedor de identidad.

Cuando agrega un usuario a New Relic, siempre se agrega a un dominio de autenticación específico. Normalmente las organizaciones tienen uno o dos dominios de autenticación: uno con los métodos manuales y otro para los métodos asociados con un proveedor de identidad. Obtenga más información en este breve vídeo (4:26 minutos):

<Video
  id="Z00-KzGh2XY"
  type="youtube"
/>

## Requisitos [#requirements]

Los dominios de autenticación sirven para administrar usuarios en [nuestro modelo de usuario más nuevo](/docs/accounts/accounts-billing/new-relic-one-pricing-users/users-roles). Si sus usuarios están en nuestro modelo de usuario original, consulte [Cuentas originales](/docs/accounts/original-accounts-billing/original-users-roles/original-account-structure).

Requisitos para gestionar el dominio de autenticación:

* Su organización debe ser [Pro o edición Enterprise](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing/#editions) para tener un dominio de autenticación editable.

* Para ver o editar el dominio de autenticación, un usuario debe:

  * Tener un [tipo de usuario](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) de usuario principal o usuario de plataforma completa.

  * Estar en un grupo con la [configuración de administración](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#admin-settings)

    <DNT>
      [**Authentication domain**](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#admin-settings)
    </DNT>

    [](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#admin-settings).

* El aprovisionamiento SCIM, también conocido como gestión automatizada de usuarios, requiere Pro o edición Enterprise. [Obtenga más información sobre los requisitos.](/docs/accounts/accounts/automated-user-management/automated-user-provisioning-single-sign)

* SAML SSO requiere una [edición paga](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing#editions). Nuestro soporte SAML SSO incluye:

  * Servicios de federación de Active Directory (ADFS)
  * Auth0
  * Azure AD (Microsoft Azure Active Directory)
  * Google
  * Okta
  * OneLogin
  * Ping Identity
  * Salesforce
  * Soporte genérico para sistemas SSO que utilizan SAML 2.0

## Crear y configurar un dominio de autenticación [#ui]

Si cumple con los [requisitos](#requirements), puede agregar y administrar el dominio de autenticación.

Para ver y configurar el dominio de autenticación: desde el [menú de usuario](/docs/accounts/accounts-billing/general-account-settings/intro-account-settings), vaya a <DNT>**Administration > Authentication domains**</DNT>.

Si tienes dominio existente, estarán a la izquierda. Tenga en cuenta que la mayoría de las organizaciones tendrán, como máximo, dos o tres dominios: uno con la configuración predeterminada manual y uno o dos para la configuración asociada al proveedor de identidad.

Para crear un nuevo dominio desde la página UI del dominio de autenticación, haga clic en <DNT>**Create authentication domain**</DNT>. Para más información sobre las opciones de configuración, sigue leyendo.

## Cambiar a un dominio diferente [#switch]

Si tiene registros de usuario en más de un dominio de autenticación, puede [cambiar entre dominios](/docs/accounts/accounts-billing/account-setup/multiple-logins-found).

## Fuente del usuario: cómo se agregan y administran sus usuarios [#source-users]

<Callout variant="tip">
  Para obtener una introducción a nuestras ofertas SAML SSO y SCIM, lea [Introducción a SSO y SCIM](/docs/accounts/accounts-billing/new-relic-one-user-management/introduction-saml-scim).
</Callout>

Desde la [UIde usuario del dominio de autenticación](#ui), puede configurar una de dos opciones para el origen de sus usuarios:

* <DNT>
    **Manual**
  </DNT>

  (predeterminado): esto significa que sus usuarios se agregan manualmente a New Relic desde la [UI](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where)

  <DNT>
    [**User management**](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where)
  </DNT>

  [](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where).

* <DNT>
    **SCIM:**
  </DNT>

  Nuestra característica de administración automatizada de usuarios le permite utilizar el aprovisionamiento SCIM para importar y administrar usuarios desde su proveedor de identidad.

Notas sobre estas configuraciones:

* No puedes alternar

  <DNT>
    **Source of users**
  </DNT>

  . Esto significa que si desea cambiar esto para un dominio de autenticación que ya se ha configurado, deberá crear uno nuevo.

* Cuando habilita SCIM por primera vez, el token de portador se genera y solo se muestra una vez. Si necesita ver un token al portador más adelante, la única forma de hacerlo es generar uno nuevo, lo que invalidará el anterior y cualquier integración que utilice el token anterior.

Para saber cómo configurar SCIM, consulte [Gestión automatizada de usuarios](/docs/accounts/accounts/automated-user-management/automated-user-provisioning-single-sign).

### Método de gestión del tipo de usuario. [#user-upgrade]

En <DNT>**Authentication Domain UI**</DNT>, si seleccionó SCIM como método de aprovisionamiento de usuario, tiene dos opciones para administrar [el tipo de usuario](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) de su usuario:

* <DNT>
    **Manage user type in New Relic**
  </DNT>

  : Esta es la opción por defecto. Le permite administrar el tipo de usuario de sus usuarios desde New Relic.

* <DNT>
    **Manage user type with SCIM**
  </DNT>

  : Habilitar esto significa que

  <DNT>
    **you can no longer manage user type from New Relic**
  </DNT>

  . Solo podrá cambiarlo y administrarlo desde su proveedor de identidad.

Más sobre estas dos opciones:

<CollapserGroup>
  <Collapser
    id="manage-user-type-new-relic"
    title="Administrar el tipo de usuario en New Relic (predeterminado)"
  >
    La forma predeterminada de administrar el tipo de usuario de sus usuarios es desde la UI de New Relic. Esta es la opción que usaría si no [administra el tipo de usuario a través de SCIM](#manage-user-type-scim). Las opciones de gestión que se rigen por este incluyen:

    * La capacidad de cambiar el tipo de usuario en la [UI](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where)

      <DNT>
        [**User management**](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where)
      </DNT>

      [](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where).

    * La capacidad de [administrar cómo se manejan las solicitudes de actualización de tipo de usuario](#other-settings).
  </Collapser>

  <Collapser
    id="manage-user-type-scim"
    title="Administrar el tipo de usuario con SCIM"
  >
    Nuestra [API SCIM](/docs/accounts/accounts/automated-user-management/tutorial-manage-users-groups-scim#manage-user-type) le permite administrar el tipo de usuario desde su proveedor de identidad en lugar de hacerlo en la UI de usuario de administración de usuarios de New Relic. <DNT>**When you enable this, you can no longer change or manage your users' user type from New Relic.**</DNT>

    Para habilitar esta configuración, su dominio de autenticación <DNT>**Source of users**</DNT> debe tener [SCIM habilitado](#source-users).

    Actualmente, tenemos instrucciones para [Okta](/docs/accounts/accounts/automated-user-management/okta-scimsso-application-configuration) y [Azure](https://forum.newrelic.com/s/hubtopic/aAX8W0000008d6MWAQ/relic-solution-make-full-core-basic-users-in-azure-active-directory-w-scim). Para otros servicios de proveedor de identidad, puede configurar su proveedor de identidad para que nos envíe información de tipo de usuario utilizando nuestras [especificaciones de tipo de usuario de API SCIM](/docs/accounts/accounts/automated-user-management/tutorial-manage-users-groups-scim/#manage-user-type).

    Cómo se manejan las solicitudes de actualización de los usuarios:

    * Cuando habilita

      <DNT>
        **Manage user type with SCIM**
      </DNT>

      , la opción predeterminada es que a los usuarios con acceso limitado por tipo de usuario se les muestra un mensaje indicándoles que deben comunicarse con su gerente o departamento de TI para actualizar y desbloquear más acceso.

    * Opcionalmente, puede personalizar ese mensaje y agregar un enlace a una página personalizada. Por ejemplo, puede agregar un mensaje personalizado que explique cómo comunicarse con una persona o departamento específico. O puede utilizar nuestras [especificaciones de API SCIM](/docs/accounts/accounts/automated-user-management/tutorial-manage-users-groups-scim/#manage-user-type) para configurar una implementación que maneje mediante programación las solicitudes de actualización de los usuarios y cambie automáticamente su tipo de usuario.
  </Collapser>
</CollapserGroup>

Tenga en cuenta que si utiliza nuestro [modelo de usuario original](/docs/accounts/original-accounts-billing/original-product-based-pricing/overview-user-models), las actualizaciones funcionan de manera diferente.

## Autenticación: cómo log sesión su usuario [#authentication]

El método de autenticación es la forma en que el usuario de New Relic log sesión en New Relic. Todos los usuarios de un dominio de autenticación tienen un único método de autenticación. Hay dos opciones de autenticación:

* Nombre de usuario/contraseña (predeterminado): sus usuarios log sesión mediante correo electrónico y contraseña.
* SAML SSO: su usuario log sesión a través del inicio de sesión único (SSO) de SAML utilizando su proveedor de identidad. Para aprender cómo configurarlo, sigue leyendo.

### Configurar la autenticación SAML SSO [#saml]

Antes de habilitar SAML SSO siguiendo las instrucciones a continuación, aquí hay algunas cosas que debe comprender y considerar:

* Considere leer [una introducción a New Relic SSO y SCIM](/docs/accounts/accounts-billing/new-relic-one-user-management/introduction-saml-scim).
* Considere revisar los [requisitos de SSO de SAML](#requirements).
* Considere ver un [video sobre cómo configurar SAML SSO](https://www.youtube.com/watch?v=uFjqCQcSo8g).
* Tenga en cuenta que su usuario habilitado para SSO no recibirá una notificación de verificación por correo electrónico de New Relic porque la información de inicio de sesión y contraseña la maneja su proveedor de identidad.
* Consulte los documentos del servicio de su proveedor de identidad porque pueden tener instrucciones específicas de New Relic.

1. Si está configurando el aprovisionamiento SCIM:

   * Si usa Azure, Okta o OneLogin, primero siga estos procedimientos: [Azure](/docs/accounts/accounts/automated-user-management/azure-ad-scimsso-application-configuration/) \| [OneLogin](/docs/accounts/accounts/automated-user-management/onelogin-scimsso-application-configuration/) \| [Okta](/docs/accounts/accounts/automated-user-management/okta-scimsso-application-configuration/).
   * Si utiliza un proveedor de identidad diferente, siga los procedimientos SAML a continuación y use nuestra [API SCIM](/docs/accounts/accounts/automated-user-management/scim-support-automated-user-management/) para habilitar SCIM.

2. Si <DNT>**only**</DNT> desea habilitar SAML SSO y no SCIM, y si usa Azure, Okta o OneLogin, siga estas instrucciones para configurar la aplicación correspondiente:

   <CollapserGroup>
     <Collapser
       id="azure"
       title="Aplicación Azure"
     >
       Azure AD proporciona una galería de aplicaciones, que incluye varias integraciones para Azure AD, incluidas las que ofrece New Relic. Agregue la aplicación New Relic SCIM/SSO a su lista de aplicaciones.

       1. Vaya al centro de administración de Azure Active Directory e inicie sesión si es necesario. [aad.portal.azure.com/](https://aad.portal.azure.com/)

       2. Haga clic en

          <DNT>
            **All services**
          </DNT>

          en el menú de la izquierda.

       3. En el panel principal, haga clic en

          <DNT>
            **Enterprise applications**
          </DNT>

          .

       4. Haga clic en

          <DNT>
            **+New application**
          </DNT>

          .

       5. Encuentre nuestra aplicación SCIM/SSO ingresando

          <DNT>
            **New Relic**
          </DNT>

          en el cuadro de búsqueda de nombre y haga clic en la aplicación

          <DNT>
            **New Relic by organization**
          </DNT>

          (no en

          <DNT>
            **New Relic by account**
          </DNT>

          ).

       6. Haga clic en

          <DNT>
            **Add**
          </DNT>

          .
     </Collapser>

     <Collapser
       id="Okta"
       title="Aplicación Okta"
     >
       Agregue la aplicación New Relic SCIM/SSO a sus aplicaciones Okta.

       1. Vaya a [okta.com/](https://www.okta.com/) e inicie sesión con una cuenta que tenga permisos de administrador.

       2. Desde la página de inicio de Okta, haga clic en

          <DNT>
            **Admin**
          </DNT>

          .

       3. Desde el administrador de Okta

          <DNT>
            **Dashboard**
          </DNT>

          , elija la página

          <DNT>
            **Applications**
          </DNT>

          .

       4. Haga clic en

          <DNT>
            **Browse app catalog**
          </DNT>

          , luego busque y seleccione "New Relic por organización".

       5. Desde la página New Relic por Organización, haga clic en

          <DNT>
            **Add**
          </DNT>

          .

       6. Desde la página Agregar New Relic por organización, marque las dos casillas de verificación

          <DNT>
            **Application visibility "Do not display..."**
          </DNT>

          y haga clic en

          <DNT>
            **Done**
          </DNT>

          . Haremos que la aplicación sea visible más adelante, una vez que se complete la configuración y haya comenzado el aprovisionamiento.

       7. Abra la aplicación recién creada en Okta y vaya a la pestaña

          <DNT>
            **Assignments**
          </DNT>

          . Aquí es donde puede agregar usuarios y grupos para la autenticación.

       8. Desde allí, vaya a la pestaña

          <DNT>
            **Sign On**
          </DNT>

          . Debajo de

          <DNT>
            **Advanced Sign-on Settings**
          </DNT>

          , verá

          <DNT>
            **Authentication Domain ID**
          </DNT>

          , que deberá editar este campo en el Paso 9 de las instrucciones generales a continuación. A la derecha, haga clic en

          <DNT>
            **View SAML setup instructions**
          </DNT>

          . En

          <DNT>
            **Step 7**
          </DNT>

          de estas instrucciones, puede encontrar las URL necesarias para los pasos 6 y 7 en las instrucciones generales a continuación.
     </Collapser>

     <Collapser
       id="OneLogin"
       title="Aplicación OneLogin"
     >
       Agregue la aplicación New Relic SCIM/SSO a sus aplicaciones OneLogin.

       1. Vaya al sitio web OneLogin e inicie sesión con una cuenta que tenga permisos de administrador.

       2. Desde la página de inicio de OneLogin, haga clic en

          <DNT>
            **Administration**
          </DNT>

          .

       3. En la página de administración de OneLogin, elija el menú

          <DNT>
            **Applications**
          </DNT>

          .

       4. Desde la página de la aplicación OneLogin, haga clic en

          <DNT>
            **Add app**
          </DNT>

          .

       5. En el campo de búsqueda de la página Buscar aplicaciones de OneLogin, ingrese "New Relic por organización" (no "New Relic por cuenta") y luego haga clic en la aplicación cuando aparezca en los resultados de búsqueda.

       6. Desde la página

          <DNT>
            **Add New Relic by organization**
          </DNT>

          , haga clic en

          <DNT>
            **Save**
          </DNT>

          .
     </Collapser>
   </CollapserGroup>

   * Si está implementando SAML utilizando un proveedor de identidad diferente que no se menciona anteriormente, deberá intentar realizar la integración utilizando las instrucciones de SAML que aparecen a continuación. Tenga en cuenta que su proveedor de identidad debe utilizar el protocolo SAML 2.0 y debe requerir aserciones SAML firmadas.

3. A continuación, accederá a UI de nuestro dominio de autenticación. En el [menú de usuario](/docs/accounts/accounts-billing/general-account-settings/intro-account-settings), haga clic en <DNT>**Administration**</DNT> y luego haga clic en <DNT>**Authentication domains**</DNT>. Si aún no tiene uno, [cree un nuevo dominio](#ui) para usarlo con su usuario de autenticación SAML.

4. En <DNT>**Authentication**</DNT>, haga clic en <DNT>**Configure**</DNT>. En <DNT>**Method of authenticating users**</DNT>, seleccione <DNT>**SAML SSO**</DNT>.

5. Si usa la aplicación Okta, OneLogin o Azure AD, puede omitir este paso. En <DNT>**Provided by New Relic**</DNT>, tenemos información específica de New Relic. Deberá colocarlos en los campos correspondientes de su servicio de proveedor de identidad. Si no está seguro de adónde van, consulte los documentos de su proveedor de identidad.

6. En <DNT>**Provided by you**</DNT>, ingrese <DNT>**Source of SAML metadata**</DNT>. Esta URL la proporciona su proveedor de identidad y puede tener otro nombre. Debe cumplir con los estándares de metadatos SAML V2.0. Si su proveedor de identidad <DNT>**doesn't**</DNT> admite la configuración dinámica, puede hacerlo utilizando <DNT>**Upload a certificate**</DNT>. Debe ser un certificado x509 codificado con PEM.

7. En <DNT>**Provided by you**</DNT>, configure el <DNT>**SSO target URL**</DNT> proporcionado por su proveedor de identidad. Puede encontrarlo yendo a <DNT>**Source of SAML metadata**</DNT> y buscando la URL de enlace POST. Parece: `https://newrelic.oktapreview.com/app/newreliclr/1234567890abcdefghij/sso/saml`.

8. Si su proveedor de identidad tiene una URL de redireccionamiento para cerrar sesión, ingrésela en <DNT>**Logout redirect URL**</DNT>; de lo contrario, déjelo en blanco.

9. Si está utilizando una aplicación de proveedor de identidad, deberá ingresar el ID del dominio de autenticación en la aplicación. Esa identificación se encuentra en la parte superior de la página UI del dominio de autenticación de New Relic.

10. Opcional: en UI de usuario del dominio de autenticación de New Relic, puede ajustar [otras configuraciones](#other-settings), como la duración de la sesión browser y el método de actualización del usuario. Puede ajustar esta configuración en cualquier momento.

11. Si solo habilita SAML, deberá crear grupos. (Si habilitó SCIM, ya completó este paso). Los grupos son los que le dan a su usuario acceso a las cuentas de New Relic. Sin estar asignado a grupos, su usuario está aprovisionado en New Relic pero no tiene acceso a cuentas ni roles. Para aprender cómo hacer esto:

* [Descubra cómo funciona el acceso al grupo de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#understand-concepts)
* Lea el [tutorial de gestión de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/tutorial-add-new-user-groups-roles-new-relic-one-user-model/).

12. Solo Okta: regrese a la aplicación New Relic de Okta y, desde la página

    <DNT>
      **Add New Relic by organization**
    </DNT>

    , desmarque las dos casillas de verificación

    <DNT>
      **Application visibility "Do not display..."**
    </DNT>

    y haga clic en

    <DNT>
      **Done**
    </DNT>

    .

Para verificar que se haya configurado correctamente, vea si su usuario puede log sesión en New Relic a través de su proveedor de identidad y asegurarse de que tenga acceso a sus cuentas.

## Otras configuraciones relacionadas con el usuario [#other-settings]

Para administrar la configuración relacionada con la sesión y si el usuario puede actualizarse automáticamente o no:

1. En la [UI](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks/#where)

   <DNT>
     [**User management**](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks/#where)
   </DNT>

   [](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks/#where), seleccione un dominio de autenticación del conmutador.

2. Haga clic en el ícono de ajustes

   <Icon name="fe-settings"/>

   .

3. Edite la configuración, que se describe con más detalle a continuación.

### Configuraciones relacionadas con la sesión [#session-mgmt]

Las configuraciones relacionadas con la sesión incluyen:

* Tiempo que el usuario puede permanecer conectado
* Cantidad de tiempo de inactividad antes de que caduque la sesión de un usuario ([más información sobre los límites de sesión](/docs/accounts/accounts-billing/account-structure/factors-affecting-access-features-data#session-limits))

### Configuración de actualización de usuario [#user-upgrade-settings]

Las configuraciones relacionadas con cómo los usuarios actualizan a un tipo de usuario superior incluyen:

* <DNT>
    **Automatic approval**
  </DNT>

  : Esto permite que los usuarios puedan actualizar inmediatamente a un tipo de usuario superior por su cuenta, sin aprobación. Esto permite que estos usuarios puedan responder más rápidamente a los problemas.

* <DNT>
    **Require review**
  </DNT>

  : Con esta opción, el usuario administrador con la [configuración de administración](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#admin-settings)

  <DNT>
    [**Authentication domain**](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#admin-settings)
  </DNT>

  [](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#admin-settings)recibe un correo electrónico cuando un usuario solicita una actualización y puede aprobar o rechazar esas solicitudes en la [UI](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where)

  <DNT>
    [**User management**](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where)
  </DNT>

  [](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where).

  * Un usuario está limitado a 6 solicitudes de actualización en un período móvil de 24 horas. Por ejemplo, si realiza sus 6 solicitudes de actualización entre las 8 a. m. y las 10 a. m., deberá esperar hasta las 8 a. m. del día siguiente antes de realizar otra solicitud de actualización.
