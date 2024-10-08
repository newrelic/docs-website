---
title: Configuración de la aplicación OneLogin SCIM/SSO
tags:
  - Accounts
  - Accounts and billing
  - Automated user management
metaDescription: Configure the New Relic OneLogin SCIM/SSO application for your organization.
freshnessValidatedDate: never
translationType: machine
---

Nuestra [gestión automatizada de usuarios](/docs/accounts/accounts/automated-user-management/automated-user-provisioning-single-sign) le permite importar y configurar su usuario y grupos de New Relic desde su proveedor de identidad a través de SCIM. Esta guía proporciona detalles específicos de OneLogin sobre cómo configurar la aplicación SCIM/SSO New Relic OneLogin.

## Requisitos

Antes de utilizar esta guía, lea los [requisitos de gestión automatizada de usuarios](/docs/assign-users-automated-provisioning-allow-single-sign#requirements).

Tenga en cuenta que estas instrucciones requieren ir y venir entre su proveedor de identidad y New Relic.

## Paso 1. Cree un dominio de autenticación y habilite SCIM [#auth-domain]

Para saber cómo acceder a la UI de usuario del dominio de autenticación de New Relic, consulte [UIdel dominio de autenticación](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#manage-user-type-scim).

Si aún no tiene uno, cree un nuevo dominio de autenticación para su usuario proporcionado por SCIM haciendo clic en <DNT>**+ Add new**</DNT>.

Para ese dominio de autenticación, en <DNT>**Source of users**</DNT>, seleccione <DNT>**SCIM**</DNT>. Copie y guarde el token de API para usarlo más adelante. Tenga en cuenta que esto se mostrará sólo una vez.

## Paso 2. Configure la aplicación New Relic de OneLogin [#app]

A continuación, configurará la aplicación New Relic SAML/SCIM de OneLogin. Para configurar esto:

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
     **Add App**
   </DNT>

   .

5. En el campo de búsqueda de la página Buscar aplicaciones de OneLogin, ingrese "New Relic por organización" (no "New Relic por cuenta") y luego haga clic en la aplicación cuando aparezca en los resultados de búsqueda.

6. Desde la página

   <DNT>
     **Add New Relic by Organization**
   </DNT>

   , haga clic en

   <DNT>
     **Save**
   </DNT>

   .

## Paso 3. Configurar la aplicación SCIM/SSO [#configure-application]

La configuración de la aplicación New Relic SCIM/SSO se divide en varios formularios. Esta sección describe los diferentes formularios que deben configurarse.

Desde la página de aplicación <DNT>**New Relic by organization**</DNT> , complete los siguientes formularios:

### Rellena el formulario de configuración [#config-form]

En el panel izquierdo, seleccione <DNT>**Configuration**</DNT> y complete lo siguiente:

1. Obtenga

   <DNT>
     **authentication domain ID**
   </DNT>

   (en la parte superior de [UIde usuario del dominio de autenticación de New Relic](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more) y

   <DNT>
     **SCIM bearer token**
   </DNT>

   (en UI de usuario del dominio de autenticación como "SAML 2.0 extremo) e introdúzcalos en los campos correspondientes en la aplicación OneLogin.

2. Deje el

   <DNT>
     **API Connection**
   </DNT>

   deshabilitado hasta completar toda la configuración descrita en las siguientes secciones. Después de completar toda la configuración, habilite la conexión.

### Rellena el formulario de reglas [#rules-form]

Configure los grupos de usuarios para enviar a New Relic usando reglas. OneLogin proporciona esta [documentación](https://developers.onelogin.com/scim/create-app#scim_rules) que describe cómo usar reglas para aprovisionar grupos para usuarios.

Decide qué tipo de grupos enviar junto con tu usuario a New Relic. Si su organización utiliza Active Directory o LDAP, puede optar por utilizar grupos de seguridad para definir sus permisos de usuario en New Relic. Otra opción de grupo razonable es el rol OneLogin.

En el lado de New Relic, los grupos de usuarios definen sus permisos. Los grupos que se envían con usuario se asignarán a grupos de New Relic.

Tenga en cuenta que, por el momento, no hay forma de eliminar un grupo del lado de OneLogin. Esta es una limitación conocida de OneLogin. Eliminar o cambiar reglas no elimina los grupos que ya se enviaron a New Relic. Si desea dejar de utilizar un grupo, eliminar a todos los usuarios del grupo evitará que se utilice en New Relic.

<CollapserGroup>
  <Collapser
    id="rule-example"
    title="Una regla que solo usa acciones."
  >
    A continuación se muestra un ejemplo de configuración de reglas que no utiliza ninguna condición. Las condiciones se dejan vacías para evitar aplicar cualquier lógica de filtrado al usuario. Todos los usuarios serán enviados en este ejemplo. Si desea enviar solo un subconjunto de usuarios, debe especificar condiciones para seleccionar el subconjunto.

    <img
      title="onelogin_rules_conditions_actions.png"
      alt="Screen capture showing the OneLogin Rules detail page about conditions and actions."
      src="/images/accounts_screenshot-crop_OneLogin-rules-conditions-actions.webp"
    />

    Las acciones describen dónde recuperar el valor del nombre del grupo y cómo analizar el valor. En este ejemplo, recuperamos el nombre del grupo del campo de función OneLogin.

    El campo de función OneLogin solo tiene un valor único, pero a veces la fuente del nombre del grupo contiene otros campos además del nombre del grupo. En otras palabras, algunas fuentes le brindan una lista de campos y valores y solo uno de esos campos tiene el valor que desea usar. En este caso, puede insertar una expresión regular en el campo <DNT>**with value that matches**</DNT> para buscar y extraer el valor del nombre del grupo.

    Este ejemplo utiliza el valor completo del campo <DNT>**For each**</DNT> para el nombre del grupo.
  </Collapser>
</CollapserGroup>

### Rellena el formulario de aprovisionamiento [#provisioning-form]

En el panel izquierdo, seleccione <DNT>**Provisioning**</DNT> y complete lo siguiente:

<img
  title="onelogin_provisioning_form.png"
  alt="Screen capture showing the OneLogin Provisioning page."
  src="/images/accounts_screenshot-crop_OneLogin-provisioning-form.webp"
/>

1. Verifique el aprovisionamiento de <DNT>**Enable**</DNT> .

2. En <DNT>**Require admin approval before this action is performed**</DNT>, desmarca estas opciones:

   * <DNT>
       **Create user**
     </DNT>
   * <DNT>
       **Delete user**
     </DNT>
   * <DNT>
       **Update user**
     </DNT>

   <Callout variant="tip">
     Si no desmarca estas opciones, las solicitudes de aprovisionamiento SCIM no se enviarán hasta que un administrador las apruebe.
   </Callout>

3. Establezca <DNT>**When users are deleted in OneLogin, or the user's app access is removed, perform the below action**</DNT> en <DNT>**Delete**</DNT>.

4. Establezca <DNT>**When user accounts are suspended in OneLogin, perform the following action**</DNT> en <DNT>**Suspend**</DNT>.

### Rellena el formulario de parámetros [#parameters-form]

En el panel izquierdo, seleccione <DNT>**Parameters**</DNT> y complete lo siguiente:

1. Haga clic en el campo <DNT>**Groups**</DNT> .

   <img
     title="onelogin_parameter_form_general.png"
     alt="Screenshot of the OneLogin Parameter form showing which fields to configure."
     src="/images/accounts_screenshot-crop_OneLogin-general-parameter-form-.webp"
   />

2. Marque <DNT>**Include in User Provisioning**</DNT>.

   <img
     title="onelogin_parameter_form_specific.png"
     alt="Screenshot showing the OneLogin Parameter details page."
     src="/images/accounts_screenshot-crop_OneLogin---parameter-form---specific.webp"
   />

3. Haga clic en <DNT>**Save**</DNT>.

### Guarda tus cambios [#save]

Después de completar los formularios anteriores, haga clic en <DNT>**Save**</DNT>. Luego, regrese al formulario <DNT>**Configuration**</DNT> y habilite la conexión API.

### Paso 4. Asignar usuario [#configure-sso]

Una vez finalizada la configuración de la aplicación SCIM/SSO de New Relic y la configuración lateral de New Relic, puede comenzar a asignar usuarios a la aplicación.

Asigne la aplicación New Relic SCIM/SSO a un usuario:

1. Vaya al sitio web OneLogin e inicie sesión con una cuenta que tenga permisos de administrador.

2. Desde la página de inicio de OneLogin, haga clic en

   <DNT>
     **Administration**
   </DNT>

   .

3. Desde la página de administración de OneLogin, elija el elemento de usuario del menú

   <DNT>
     **Users**
   </DNT>

   .

4. Desde la página Usuarios de OneLogin, haga clic en el usuario al que desea asignar la aplicación.

5. Desde la página del usuario, haga clic en

   <DNT>
     **Applications**
   </DNT>

   .

6. Desde la página de aplicación del usuario, haga clic en el signo más y seleccione la aplicación "New Relic por organización".

7. Importante: Actualizar las zonas horarias de los usuarios es importante porque [muchas características de New Relic hacen uso de esa configuración](/docs/accounts/accounts-billing/general-account-settings/default-time-zone-setting). El formato predeterminado es UMT. En la página

   <DNT>
     **Edit New Relic by Organization login for user**
   </DNT>

   , ingrese la zona horaria del usuario en el formato de base de datos de zona horaria de la IANA (también conocido como formato de base de datos de zona horaria de Olson) y haga clic en

   <DNT>
     **Save**
   </DNT>

   . Su usuario también tiene la posibilidad de [establecer su propia zona horaria](/docs/accounts/accounts-billing/general-account-settings/default-time-zone-setting).

8. Si está utilizando

   <DNT>
     **Roles**
   </DNT>

   para definir sus grupos de New Relic, desde la página de la aplicación del usuario, haga clic en las funciones adecuadas para el usuario y luego haga clic en

   <DNT>
     **Save User**
   </DNT>

   .

### Paso 5. Establece el tipo de usuario de tus usuarios [#user-type]

Cuando sus usuarios estén aprovisionados en New Relic, podrá verlos en la [UI<DNT>**User management**</DNT> ](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where).

Si agrega un usuario a New Relic a través de SCIM pero **no** administra su [tipo de usuario](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) a través de SCIM, comienza como [usuario básico](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type). Para actualizar usuario, tienes dos opciones:

* Utilice la [UIde usuario de administración de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#edit-user-type) para editar usuarios.
* [Configure la aplicación OneLogin para administrar el tipo de usuario.](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#manage-user-type-scim)

## Paso 6. Asignar acceso al grupo [#assign-users]

Una vez que se completen estos pasos, debería poder ver a sus usuarios en New Relic yendo a la [UIde usuario de administración de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where). Ahora que su usuario está presente en New Relic, debe otorgarle acceso a roles específicos en cuentas específicas. Si no se hace esto, su usuario aún no tiene acceso a New Relic. Para aprender cómo hacer esto, consulte:

* [Cómo funciona el acceso de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#understand-concepts)
* El [tutorial de gestión de usuarios.](/docs/accounts/accounts-billing/new-relic-one-user-management/tutorial-add-new-user-groups-roles-new-relic-one-user-model/)

## Paso 7. Configurar SAML SSO [#saml]

Para habilitar SAML SSO para su usuario, consulte las [instrucciones de SAML](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#authentication).
