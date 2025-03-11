---
title: Configuración de la aplicación Microsoft Entra ID SCIM/SSO
tags:
  - Accounts
  - Accounts and billing
  - Automated user management
metaDescription: 'With New Relic, you can set up automated user provisioning and management for Azure Active Directory (AD) SSO.'
freshnessValidatedDate: never
translationType: machine
---

Nuestra [gestión automatizada de usuarios](/docs/accounts/accounts/automated-user-management/automated-user-provisioning-single-sign) le permite importar y configurar su usuario y grupos de New Relic desde su proveedor de identidad a través de SCIM. Esta guía proporciona detalles específicos de Azure AD sobre cómo configurar la aplicación SCIM/SSO de New Relic Azure AD.

## Requisitos

Antes de utilizar esta guía, lea la [descripción general de requisitos y procedimientos](/docs/assign-users-automated-provisioning-allow-single-sign#requirements).

Tenga en cuenta que estas instrucciones requieren ir y venir entre su proveedor de identidad y New Relic.

## Paso 1. Cree un dominio de autenticación y habilite SCIM [#auth-domain]

Para saber cómo acceder a la UI del dominio de autenticación de New Relic, consulte [Dominio de autenticación](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#ui).

Si aún no tiene uno, cree un nuevo dominio de autenticación para su usuario proporcionado por SCIM haciendo clic en <DNT>**+ Add new**</DNT>.

Para ese dominio de autenticación, en <DNT>**Source of users**</DNT>, seleccione <DNT>**SCIM**</DNT>. Copie y guarde el token de API para usarlo más adelante. Tenga en cuenta que esto se mostrará sólo una vez.

## Paso 2. Configure la aplicación New Relic de Azure [#azure-app]

A continuación, configurará la aplicación SAML/SCIM New Relic de Azure. Microsoft Entra ID, anteriormente conocido como Azure AD, proporciona una galería de aplicaciones, que incluye varias integraciones para Microsoft Entra ID, incluidas las que ofrece New Relic. Para configurar esto:

1. Vaya al centro de administración de Microsoft Entra ID e inicie sesión si es necesario. [aad.portal.azure.com/](https://aad.portal.azure.com/)

2. Haga clic en

   <DNT>
     **Applications**
   </DNT>

   en el menú de la izquierda.

3. En el menú desplegable, haga clic en

   <DNT>
     **Enterprise applications**
   </DNT>

   .

4. Haga clic en

   <DNT>
     **+New Application**
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
     **Create**
   </DNT>

   .

## Paso 3. Configurar la conexión [#configure]

Configure la aplicación New Relic SCIM/SSO para aprovisionar automáticamente su usuario a New Relic.

1. Desde la página de la aplicación New Relic SCIM/SSO, haga clic en el enlace

   <DNT>
     **Provisioning**
   </DNT>

   en la barra lateral.

2. En el panel principal, haga clic en

   <DNT>
     **Get started**
   </DNT>

   .

3. En la lista de selección

   <DNT>
     **Provisioning Mode**
   </DNT>

   , elija

   <DNT>
     **Automatic**
   </DNT>

   .

4. En [UIde usuario del dominio de autenticación](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more) de New Relic, configure un nuevo dominio con [SCIM habilitado](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more#source-users).

5. En la aplicación SCIM/SSO New Relic de Azure AD, en la sección

   <DNT>
     **Admin credentials**
   </DNT>

   , complete los campos

   <DNT>
     **Tenant URL**
   </DNT>

   y

   <DNT>
     **Secret token**
   </DNT>

   con los valores proporcionados en UI de usuario del dominio de autenticación de New Relic.

6. Para verificar que puedes conectarte a New Relic, haz clic en

   <DNT>
     **Test Connection**
   </DNT>

   .

7. Cuando vea un mensaje que indica que la verificación se realizó correctamente, haga clic en

   <DNT>
     **Save**
   </DNT>

   .

La aplicación New Relic SCIM/SSO ahora puede conectarse con New Relic. Continúe con la siguiente sección para configurar las reglas de aprovisionamiento.

## Paso 4. Configurar reglas de aprovisionamiento [#configure-rules]

Inicialmente, no hay nada configurado para enviarse a New Relic. Debe configurar Microsoft Entra ID para enviar cambios para la creación, actualización y desactivación de usuarios.

Vaya a la página <DNT>**Provisioning**</DNT> y complete lo siguiente:

1. En la página de descripción general, haga clic en <DNT>**Edit attribute mappings**</DNT>.

2. Expanda la sección <DNT>**Mappings**</DNT> .

3. Haga clic en <DNT>**Provision Azure Active Directory Users**</DNT>.

4. Verifique que las casillas de verificación <DNT>**Target Object Actions**</DNT>, <DNT>**Create**</DNT>, <DNT>**Update**</DNT> y <DNT>**Delete**</DNT> estén marcadas.

5. Verifique que <DNT>**Attribute Mappings**</DNT> se vea correcto para su entorno. Cada uno de los atributos New Relic que se muestran en la lista debe recibir un valor.

   <Callout variant="tip">
     Asegúrese de que el atributo de Azure Active Directory que se muestra en la lista de la izquierda sea una buena fuente de información para enviar a New Relic. En particular, no todos los entornos establecen el atributo <DNT>**mail**</DNT> . Si su entorno no establece el atributo <DNT>**mail**</DNT> , <DNT>**userPrincipalName**</DNT> podría ser una buena alternativa.
   </Callout>

6. Deje el interruptor de <DNT>**Enabled**</DNT> configurado en <DNT>**No**</DNT> hasta que haya terminado con la configuración de usuario y grupo en la siguiente sección. Una vez que toda la configuración esté lista, regrese a esta página y configure el interruptor en <DNT>**Yes**</DNT>.

7. Haga clic en <DNT>**Save**</DNT>.

A continuación se muestra un ejemplo de una página de mapeo de atributos completa con los valores predeterminados. Sus valores pueden configurarse de manera diferente dependiendo de su situación.

<img
  title="Azure_AD_Provisioning_Attribute_Mapping.png"
  alt="Screen capture showing how to set attributes."
  src="/images/accounts_screenshot-crop_Azure-AD-attribute-mapping.webp"
/>

Después de guardar las reglas de aprovisionamiento, la aplicación New Relic SCIM/SSO está lista para aprovisionar cualquier cambio realizado al usuario asignado a la aplicación. Continúe con la siguiente sección para asignar usuarios y grupos a la aplicación New Relic SCIM/SSO.

## Paso 5. Establece el tipo de usuario de tus usuarios [#user-type]

Cuando sus usuarios estén aprovisionados en New Relic, podrá verlos en la [UI<DNT>**User management**</DNT> ](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where).

Si agrega un usuario a New Relic a través de SCIM pero **no** administra su [tipo de usuario](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) a través de SCIM, comienza como [usuario básico](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type). Para actualizar usuario, tienes dos opciones:

* Utilice la [UIde usuario de administración de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#edit-user-type) para editar usuarios.
* [Configure la aplicación de Azure para administrar el tipo de usuario.](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#manage-user-type-scim)

## Paso 6. Asignar acceso al grupo [#assign-users]

Una vez que se completen estos pasos, debería poder ver a sus usuarios en New Relic yendo a la [UIde usuario de administración de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where). Ahora que su usuario está presente en New Relic, debe otorgarle acceso a roles y cuentas. Si no se hace esto, su usuario aún no tiene acceso a New Relic. Para aprender cómo hacer esto, consulte:

* [Cómo funciona el acceso de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#understand-concepts)
* El [tutorial de gestión de usuarios.](/docs/accounts/accounts-billing/new-relic-one-user-management/tutorial-add-new-user-groups-roles-new-relic-one-user-model/)

## Paso 7. Configurar SAML SSO [#saml]

Para habilitar SAML SSO para su usuario, consulte las [instrucciones de SAML](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#authentication).
