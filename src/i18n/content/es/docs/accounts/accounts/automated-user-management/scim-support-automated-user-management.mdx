---
title: 'Gestión automatizada de usuarios: API SCIM'
tags:
  - Accounts
  - Accounts and billing
  - Automated user management
metaDescription: New Relic has a SCIM service provider to easily manage the users in your New Relic account.
freshnessValidatedDate: never
translationType: machine
---

Para configurar el aprovisionamiento y la administración de su usuario de New Relic desde un proveedor de identidad, proporcionamos una API SCIM para los proveedores de identidad que aún no tienen [aplicaciones e implementaciones específicas de New Relic](/docs/accounts/accounts/automated-user-management/automated-user-provisioning-single-sign#requirements).

## ¿Quién debería utilizar la API SCIM? [#when-to-use]

Si tiene un proveedor de identidad que tiene una aplicación New Relic (Azure AD, Okta y OneLogin), consulte [las guías correspondientes](/docs/accounts/accounts/automated-user-management/automated-user-provisioning-single-sign). La API SCIM está destinada a organizaciones que no utilizan esos proveedores de identidad o que desean utilizar la API SCIM para una configuración adicional que no está disponible con las aplicaciones (por ejemplo, <DNT>**managing user type**</DNT>). Restricciones adicionales:

* PingOne de Ping Identity **no** es compatible porque no permite el aprovisionamiento de grupos.

Antes de utilizar nuestra API SCIM, primero debe [configurar un dominio de autenticación con SCIM habilitado](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#source-users). La UI de usuario del dominio de autenticación le proporcionará valores que puede utilizar para integrarse con su proveedor de identidad.

Tenga en cuenta que después de configurar una integración con la API SCIM, hay [siguientes pasos](#next-steps) a seguir, incluida la degradación de algunos usuarios a usuarios básicos y la concesión de acceso a grupos a cuentas de New Relic.

## Nuestro tutorial de API SCIM [#tutorial]

Este documento contiene información técnica sobre nuestra API SCIM. Para obtener instrucciones detalladas sobre su uso, consulte el [tutorial de API SCIM](/docs/accounts/accounts/automated-user-management/tutorial-manage-users-groups-scim).

## SCIM proveedor de servicios [#scim-provider]

Nuestro proveedor de servicios SCIM sigue la [API SCIM 2.0](http://www.simplecloud.info/) como se describe en [los RFC 7643](https://tools.ietf.org/html/rfc7643) y [7644](https://tools.ietf.org/html/rfc7644). No es necesario implementar todos los aspectos de la especificación SCIM 2.0 para integrar su información de usuario con New Relic. De hecho, el propio proveedor de servicios de New Relic no implementa todos los aspectos de la especificación. Este documento describe las características de la especificación disponibles para una integración con New Relic.

## Autenticación [#authentication]

La autenticación requiere un token de portador. Este token de portador es específico de su [dominio de autenticación New Relic](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more) y se muestra cuando habilita SCIM por primera vez para un dominio de autenticación.

## Recursos soportados [#supported-resources]

El proveedor de servicios New Relic admite los siguientes recursos SCIM: `Group` , `User` , `Service provider config` , `Resource type` y `Schema`. `Bulk` y `Search` no son compatibles. Para obtener más información sobre cómo el RFC describe el extremo del recurso, consulte [la especificación del protocolo SCIM RFC 7644](https://tools.ietf.org/html/rfc7644#section-3.2).

## Esquemas [#schemas]

New Relic utiliza un subconjunto de los campos disponibles en el esquema central SCIM. Otros campos SCIM se ignoran si se incluyen en solicitudes entrantes. Los campos utilizados por New Relic son:

`Group`:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Nombre del campo SCIM
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `displayName`
      </td>

      <td>
        <DNT>**Required.**</DNT> Nombre del grupo.
      </td>
    </tr>

    <tr>
      <td>
        `members`
      </td>

      <td>
        Lista de usuarios en el grupo.
      </td>
    </tr>
  </tbody>
</table>

`User`:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Nombre del campo SCIM
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `externalId`
      </td>

      <td>
        Identificador único del usuario utilizado por su sistema.
      </td>
    </tr>

    <tr>
      <td>
        `userName`
      </td>

      <td>
        <DNT>**Required.**</DNT> Identificador único para el usuario dentro del sistema de New Relic. Utilice la dirección de correo electrónico del usuario.
      </td>
    </tr>

    <tr>
      <td>
        `name.familyName`
      </td>

      <td>
        Apellido del usuario.
      </td>
    </tr>

    <tr>
      <td>
        `name.givenName`
      </td>

      <td>
        Nombre del usuario.
      </td>
    </tr>

    <tr>
      <td>
        `emails` o `emails.value`
      </td>

      <td>
        <DNT>**Required.**</DNT> Dirección de correo electrónico del usuario.
      </td>
    </tr>

    <tr>
      <td>
        `timezone`
      </td>

      <td>
        Zona horaria del usuario en el formato de base de datos de zona horaria de la IANA, también conocido como formato de base de datos de zona horaria "Olson" (por ejemplo, "América/Los_Angeles").
      </td>
    </tr>

    <tr>
      <td>
        `active`
      </td>

      <td>
        <DNT>**Required.**</DNT> Booleano que indica si el usuario debe estar activo o inactivo dentro de New Relic.
      </td>
    </tr>

    <tr>
      <td>
        `groups`
      </td>

      <td>
        Listado de grupos a los que pertenece el usuario.
      </td>
    </tr>
  </tbody>
</table>

## Esquema de tipo de usuario de New Relic (básico, central o completo) [#user-type]

Esta es una [extensión de esquema](https://datatracker.ietf.org/doc/html/rfc7643#section-3.3) opcional para el atributo de usuario específico de New Relic. Actualmente, esto proporciona control solo sobre el [tipo de usuario](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) de un usuario. Para obtener un tutorial que muestra cómo utilizar esto, consulte el [tutorial de API SCIM](/docs/accounts/accounts/automated-user-management/tutorial-manage-users-groups-scim/#manage-user-type).

`urn:ietf:params:scim:schemas:extension:newrelic:2.0:User`:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Nombre del campo SCIM
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `nrUserType`
      </td>

      <td>
        El [tipo de usuario](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type): `full user`, `core user` o `basic user`.
      </td>
    </tr>
  </tbody>
</table>

## Acciones apoyadas

SCIM proporciona varias opciones para manipular grupos y usuarios. El proveedor de servicios New Relic admite las siguientes opciones.

Al configurar, tenga en cuenta que:

* Sólo se admite el filtrado simple. El operador `eq` se puede utilizar con una expresión de filtro básica. Por ejemplo, `“displayName eq "Example Group 1”`. Otros operadores no son compatibles.
* `PUT` las actualizaciones no requieren que se incluyan todos los campos. Los campos que no estén incluidos no se cambiarán. Al hacer un `PUT`, si un campo obligatorio ya tiene el valor apropiado, no es necesario incluir el campo.

Las acciones admitidas son:

<CollapserGroup>
  <Collapser
    id="create-group"
    title="Crea un grupo"
  >
    Solicitud de ejemplo:

    ```
    POST /Groups

    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group"
      ],
      "displayName": "Example Group 1",
      "members": []
    }
    ```

    Respuesta de ejemplo:

    ```
    201 Created

    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group"
      ],
      "id": "d0652232-b14f-434d-9c6f-36de7e1ab010",
      "displayName": "Example Group 1",
      "meta": {
        "resourceType": "Group",
        "created": "2019-11-08T21:33:13.055Z",
        "lastModified": "2019-11-08T21:33:13.055Z"
      },
      "members": []
    }
    ```
  </Collapser>

  <Collapser
    id="get-group"
    title="Obtener grupo"
  >
    Solicitud de ejemplo:

    ```
    GET /Groups/YOUR_GROUP_ID
    ```

    Respuesta de ejemplo:

    ```
    200 OK

    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group"
      ],
      "id": "d0652232-b14f-434d-9c6f-36de7e1ab010",
      "displayName": "Example Group 1",
      "meta": {
        "resourceType": "Group",
        "created": "2019-11-08T21:33:13.055Z",
        "lastModified": "2019-11-08T21:33:13.055Z"
      },
      "members": []
    }
    ```
  </Collapser>

  <Collapser
    id="get-group-query"
    title="Obtener grupo por consulta"
  >
    Solicitud de ejemplo:

    ```
    GET /Groups?filter=displayName eq "Example Group 1"
    ```

    Respuesta de ejemplo:

    ```
    200 OK

    {
      "totalResults": 1,
      "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:ListResponse"
      ],
      "Resources": [{
        "schemas": [
          "urn:ietf:params:scim:schemas:core:2.0:Group"
        ],
        "id": "d0652232-b14f-434d-9c6f-36de7e1ab010",
        "displayName": "Example Group 1",
        "meta": {
          "resourceType": "Group",
          "created": "2019-11-08T21:33:13.055Z",
          "lastModified": "2019-11-08T21:33:13.055Z"
        },
        "members": []
      }]
    }
    ```
  </Collapser>

  <Collapser
    id="update-group-put"
    title="Actualizar grupo con PUT"
  >
    En la solicitud, incluya los campos que desea cambiar. Si incluye el campo `members` , el usuario del grupo se ajustará para que coincida con el contenido del campo de miembros. Solicitud de ejemplo:

    ```
    PUT /Groups/YOUR_GROUP_ID

    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group"
      ],
      "displayName": "Example Group 1a"
    }
    ```

    Respuesta de ejemplo:

    ```
    200 OK

    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group"
      ],
      "id": "d0652232-b14f-434d-9c6f-36de7e1ab010",
      "displayName": "Example Group 1a",
      "meta": {
        "resourceType": "Group",
        "created": "2019-11-08T21:33:13.055Z",
        "lastModified": "2019-11-08T22:47:14.019Z"
      },
      "members": []
    }
    ```
  </Collapser>

  <Collapser
    id="update-group-patch-non-member"
    title="Actualizar grupo con PATCH (Campos de no miembros)"
  >
    Solicitud de ejemplo:

    ```
    PATCH /Groups/YOUR_GROUP_ID

    {
      "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:PatchOp"
      ],
      "Operations": [{
        "op": "Replace",
        "path": "displayName",
        "value": "Example Group 1b"
      }]
    }
    ```

    Respuesta de ejemplo:

    ```
    204 No Content
    ```
  </Collapser>

  <Collapser
    id="update-group-patch-add-members"
    title="Actualizar grupo con PATCH (Agregar miembros)"
  >
    Solicitud de ejemplo:

    ```
    PATCH /Groups/YOUR_GROUP_ID

    {
      "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:PatchOp"
      ],
      "Operations": [{
        "op": "Add",
        "path": "members",
        "value": [{
          "value": "f0cbc276-16c9-4d1a-abc0-1856b0c74224"
        }]
      }]
    }
    ```

    Respuesta de ejemplo:

    ```
    204 No Content
    ```
  </Collapser>

  <Collapser
    id="update-group-patch-remove-members"
    title="Actualizar grupo con PATCH (Eliminar miembros)"
  >
    Solicitud de ejemplo:

    ```
    PATCH /Groups/YOUR_GROUP_ID

    {
      "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:PatchOp"
      ],
      "Operations": [{
        "op": "Remove",
        "path": "members",
        "value": [{
          "value": "f0cbc276-16c9-4d1a-abc0-1856b0c74224"
        }]
      }]
    }
    ```

    Respuesta de ejemplo:

    ```
    204 No Content
    ```
  </Collapser>

  <Collapser
    id="delete-group"
    title="Eliminar grupo"
  >
    Solicitud de ejemplo:

    ```
    DELETE /Groups/YOUR_GROUP_ID
    ```

    Respuesta de ejemplo:

    ```
    204 No Content
    ```
  </Collapser>

  <Collapser
    id="create-user"
    title="Crear usuario"
  >
    Solicitud de ejemplo:

    ```
    POST /Users

    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
      ],
      "externalId": "external-id-1",
      "userName": "example-user-1@example.com",
      "name": {
        "familyName": "User 1",
        "givenName": "Example"
      },
      "emails": [{
        "value": "example-user-1@example.com",
        "primary": true
      }],
      "timezone": "America/Los_Angeles",
      "active": true,
      "groups": []
    }
    ```

    Respuesta de ejemplo:

    ```
    201 Created

    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
      ],
      "id": "f0cbc276-16c9-4d1a-abc0-1856b0c74224",
      "externalId": "external-id-1",
      "userName": "example-user-1@example.com",
      "name": {
        "familyName": "User 1",
        "givenName": "Example"
      },
      "emails": [{
        "value": "example-user-1@example.com",
        "primary": true
      }],
      "timezone": "America/Los_Angeles",
      "active": true,
      "meta": {
        "resourceType": "User",
        "created": "2019-11-08T22:07:12.477Z",
        "lastModified": "2019-11-08T22:07:12.477Z"
      },
      "groups": []
    }
    ```
  </Collapser>

  <Collapser
    id="get-user"
    title="Obtener usuario"
  >
    Solicitud de ejemplo:

    ```
    GET /Users/YOUR_USER_ID
    ```

    Respuesta de ejemplo:

    ```
    200 OK

    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
      ],
      "id": "f0cbc276-16c9-4d1a-abc0-1856b0c74224",
      "externalId": "external-id-1",
      "userName": "example-user-1@example.com",
      "name": {
        "familyName": "User 1",
        "givenName": "Example"
      },
      "emails": [{
        "value": "example-user-1@example.com",
        "primary": true
      }],
      "timezone": "America/Los_Angeles",
      "active": true,
      "meta": {
        "resourceType": "User",
        "created": "2019-11-08T22:07:12.477Z",
        "lastModified": "2019-11-08T22:07:12.477Z"
      },
      "groups": []
    }
    ```
  </Collapser>

  <Collapser
    id="get-user-query"
    title="Obtener usuario por consulta"
  >
    Solicitud de ejemplo:

    ```
    GET /Users?filter=externalId eq "external-id-1"
    ```

    Respuesta de ejemplo:

    ```
    200 OK

    {
      "totalResults": 1,
      "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:ListResponse"
      ],
      "Resources": [{
        "schemas": [
          "urn:ietf:params:scim:schemas:core:2.0:User"
        ],
        "id": "f0cbc276-16c9-4d1a-abc0-1856b0c74224",
        "externalId": "external-id-1",
        "userName": "example-user-1@example.com",
        "name": {
          "familyName": "User 1",
          "givenName": "Example"
        },
        "emails": [{
          "value": "example-user-1@example.com",
          "primary": true
        }],
        "timezone": "America/Los_Angeles",
        "active": true,
        "meta": {
          "resourceType": "User",
          "created": "2019-11-08T22:07:12.477Z",
          "lastModified": "2019-11-08T22:07:12.477Z"
        },
        "groups": []
      }]
    }
    ```
  </Collapser>

  <Collapser
    id="update-user-put"
    title="Actualizar usuario con PUT"
  >
    En la solicitud, incluya los campos que desea cambiar. Si incluye el campo `groups` , los grupos del usuario se ajustarán para que coincidan con el contenido del campo de grupos. Solicitud de ejemplo:

    ```
    PUT /Users/YOUR_USER_ID

    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
      ],
      "name": {
        "familyName": "User 1A",
        "givenName": "Example"
      }
    }
    ```

    Respuesta de ejemplo:

    ```
    200 OK

    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
      ],
      "id": "f0cbc276-16c9-4d1a-abc0-1856b0c74224",
      "externalId": "external-id-1",
      "userName": "example-user-1@example.com",
      "name": {
        "familyName": "User 1A",
        "givenName": "Example"
      },
      "emails": [{
        "value": "example-user-1@example.com",
        "primary": true
      }],
      "timezone": "America/Los_Angeles",
      "active": true,
      "meta": {
        "resourceType": "User",
        "created": "2019-11-08T22:07:12.477Z",
        "lastModified": "2019-11-08T22:28:33.552Z"
      },
      "groups": []
    }
    ```
  </Collapser>

  <Collapser
    id="update-user-patch"
    title="Actualizar usuario con PATCH"
  >
    Solicitud de ejemplo:

    ```
    PATCH /Users/YOUR_USER_ID

    {
      "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:PatchOp"
      ],
      "Operations": [{
        "op": "Replace",
        "path": "active",
        "value": "false"
      }]
    }
    ```

    Respuesta de ejemplo:

    ```
    204 No Content
    ```
  </Collapser>

  <Collapser
    id="delete-user"
    title="Borrar usuario"
  >
    Solicitud de ejemplo:

    ```
    DELETE /Users/YOUR_USER_ID
    ```

    Respuesta de ejemplo:

    ```
    204 No Content
    ```
  </Collapser>
</CollapserGroup>

## Desviación del RFC [#rfc-deviations]

Esta sección describe áreas donde el proveedor de servicios SCIM de New Relic se desvía del protocolo SCIM [RFC 7644](https://tools.ietf.org/html/rfc7644). Los números de sección se refieren a los números de sección del RFC.

Los elementos de esta sección podrían cambiar a medida que trabajamos para que nuestro proveedor de servicios cumpla plenamente con el RFC.

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Nombre de la sección RFC
      </th>

      <th style={{ width: "100px" }}>
        Número de sección RFC
      </th>

      <th>
        Descripción de la desviación
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Creando recursos
      </td>

      <td>
        [3.3.](https://tools.ietf.org/html/rfc7644#section-3.3)
      </td>

      <td>
        * El campo `meta.location` no está configurado.
      </td>
    </tr>

    <tr>
      <td>
        Filtración
      </td>

      <td>
        [3.4.2.2.](https://tools.ietf.org/html/rfc7644#section-3.4.2.2)
      </td>

      <td>
        * El único operador admitido actualmente es `eq`.
        * Los nombres de los campos distinguen entre mayúsculas y minúsculas.
        * Los atributos de cadena se comparan distinguiendo entre mayúsculas y minúsculas.
        * No se admite anteponer el esquema al nombre del campo. Por ejemplo, `filter=urn:ietf:params:scim:schemas:core:2.0:User:userName eq "johnsmith"` no funcionará.
      </td>
    </tr>

    <tr>
      <td>
        `/Me` Alias de sujeto autenticado
      </td>

      <td>
        [3.11.](https://tools.ietf.org/html/rfc7644#section-3.11)
      </td>

      <td>
        * `GET` Con el recurso `/Me` devuelve un `404 Not Found`.
      </td>
    </tr>

    <tr>
      <td>
        Configuración del proveedor de servicios extremo
      </td>

      <td>
        [4.](https://tools.ietf.org/html/rfc7644#section-4)
      </td>

      <td>
        * El proveedor de servicios característica descubrimiento extremo no admite filtrado.
      </td>
    </tr>

    <tr>
      <td>
        Consideraciones sobre token de portador y cookies
      </td>

      <td>
        [7.4.](https://tools.ietf.org/html/rfc7644#section-7.4)
      </td>

      <td>
        * Los tokens al portador no tienen una fecha de vencimiento establecida.
      </td>
    </tr>
  </tbody>
</table>

## Próximos pasos cuando haya terminado [#next-steps]

Próximos pasos:

### Ajusta el tipo de usuario de tus usuarios [#edit-user-type]

Cuando sus usuarios estén aprovisionados en New Relic, podrá verlos en la [UI<DNT>**User management**</DNT> ](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where).

Si agrega un usuario a New Relic a través de SCIM pero **no** [administra su tipo de usuario a través de SCIM](#user-type), comienza como [usuario básico](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type). Para actualizar usuario, tienes dos opciones:

* Utilice la [UIde usuario de administración de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#add-users).
* Utilice la [API SCIM para administrar el tipo de usuario](#user-type).

### Asignar acceso de grupo [#access-grants]

Una vez que su usuario esté en New Relic, debe otorgarle acceso a cuentas, grupos específicos y roles específicos de New Relic. Sin hacer esto, su usuario no tendrá acceso a las cuentas de New Relic. Para aprender cómo hacer esto, consulte:

* [Cómo funciona el acceso de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#understand-concepts)
* El [tutorial de gestión de usuarios.](/docs/accounts/accounts-billing/new-relic-one-user-management/tutorial-add-new-user-groups-roles-new-relic-one-user-model/)

### Configurar SSO de SAML

Si desea configurar SAML SSO, lo que hacen la mayoría de los usuarios de SCIM, consulte los [documentos de SAML SSO](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more#authentication).
