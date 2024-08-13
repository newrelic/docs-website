---
title: Tutorial de API SCIM
tags:
  - Accounts
  - Accounts and billing
  - Automated user management
  - New Relic user management
metaDescription: 'New Relic SCIM API tutorial: automated user management of groups and users using the SCIM API.'
freshnessValidatedDate: never
translationType: machine
---

Este tutorial lo guiará a través de algunos procedimientos comunes para administrar usuarios a través de nuestra API SCIM. La API SCIM le permite ver, crear, actualizar y eliminar usuarios y grupos mediante programación, fuera de la [UIde usuario de administración de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where).

## Requisitos [#requirements]

Este tutorial se aplica a los usuarios de nuestro [modelo de usuario más nuevo](/docs/accounts/original-accounts-billing/original-users-roles/overview-user-models) y no a nuestro modelo de usuario original.

Antes de utilizar este tutorial, te recomendamos leer:

* Los [requisitos para la gestión automatizada de usuarios y el uso de la API SCIM](/docs/accounts/accounts/automated-user-management/automated-user-provisioning-single-sign).
* [Conceptos importantes de gestión de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#understand-concepts)
* [La referencia principal de la API SCIM](/docs/accounts/accounts/automated-user-management/scim-support-automated-user-management/)

Otros recursos relacionados:

* Algunos documentos SCIM 2.0 RFC del Internet Engineering Task Force que son más relevantes: [RFC 7643 - SCIM Core Resources and Extensions](https://datatracker.ietf.org/doc/html/rfc7643#section-4), [RFC 7643 - JSON Representation](https://datatracker.ietf.org/doc/html/rfc7643#section-8) y [RFC 7644 - SCIM Protocol](https://datatracker.ietf.org/doc/html/rfc7644).

## Descripción general [#overview]

Este tutorial le muestra cómo realizar algunas de las tareas más comunes necesarias para agregar usuarios a New Relic desde un servicio de proveedor de identidad y administrarlos desde allí. Está destinado a complementar nuestro [recurso principal de API SCIM](/docs/accounts/accounts/automated-user-management/scim-support-automated-user-management).

Tenga en cuenta que utilizar la gestión automatizada de usuarios significa que sus grupos de usuarios se importan a New Relic. Esto significa que no puede utilizar nuestra UI de usuario de administración de usuarios para agregar usuarios a grupos. Los grupos se crean y administran desde el lado de su proveedor de identidad.

Una vez que haya terminado de incorporar sus grupos de usuarios a New Relic, debe usar nuestra UI <DNT>**Access management**</DNT> para darles a esos grupos acceso a roles y cuentas. Para obtener más información, consulte [conceptos de gestión de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#understand-concepts).

## Configure su dominio de autenticación para SCIM [#configure-scim]

Antes de poder utilizar la API SCIM, primero debe [habilitar SCIM para su dominio de autenticación](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#source-users). Tenga en cuenta que el token de acceso a la API se muestra solo una vez después de guardar la configuración, así que guárdelo en un lugar seguro para el usuario posterior.

<Callout variant="tip">
  Si necesita ver un token de portador más adelante, la única forma de hacerlo es generar uno nuevo, lo que invalidará el anterior y cualquier integración que utilice el token anterior.
</Callout>

## Crea usuarios y grupos de usuarios en tu sistema. [#create-in-idp]

La API SCIM suele ser utilizada por script para importar usuarios y grupos a New Relic desde una base de datos o un proveedor de identidad de terceros que no tiene configuraciones preconfiguradas para New Relic.

Si desea utilizar la aplicación personalizada de la API SCIM o para solicitudes ad hoc, continúe para aprender cómo conectarse a la API SCIM.

## Conéctese a la API SCIM [#connect]

La API SCIM está disponible en `https://scim-provisioning.service.newrelic.com/scim/v2` y esta URL se puede ver en la página de configuración del dominio de autenticación. Para acceder a la API SCIM, su cliente debe incluir un <DNT>**bearer token**</DNT> con cada solicitud. El token se muestra después de guardar la configuración de su dominio de autenticación.

Si está utilizando un proveedor de identidad externo, configúrelo para usar <DNT>**Bearer token authorization**</DNT> e ingrese su token de acceso API. Consulte la documentación de su proveedor de identidad para obtener ayuda para configurar esto. Una vez configurado, estará listo para importar usuarios y grupos.

En lugar de leer todos los RFC del protocolo SCIM, hay tres secciones específicas que pueden resultarle valiosas: consulte [RFC 7643 - Extensiones y recursos principales de SCIM](https://datatracker.ietf.org/doc/html/rfc7643#section-4) y [RFC 7643 - Representación JSON](https://datatracker.ietf.org/doc/html/rfc7643#section-8) para conocer los detalles. Consulte [RFC 7644: Protocolo SCIM](https://datatracker.ietf.org/doc/html/rfc7644) para obtener más información sobre el protocolo utilizado en este tutorial.

Para todas las solicitudes a la API SCIM, debe proporcionar el token de portador en un encabezado `Authorization` . Aquí hay un ejemplo con `curl`:

```
curl -X 'GET' -H 'Accept: application/json' -H "Authorization: Bearer $TOKEN" 'https://scim-provisioning.service.newrelic.com/scim/v2/Users'
```

Cualquier solicitud en el resto de este tutorial recibirá una respuesta <DNT>**401 Unauthorized**</DNT> si el token de acceso a la API falta o no es válido.

Respuesta de ejemplo:

<Collapser title="401 No autorizado">
  ```
  {
    "schemas": [
      "urn:ietf:params:scim:api:messages:2.0:Error"
    ],
    "detail": "invalid authentication token",
    "status": "401"
  }
  ```
</Collapser>

## Cree un usuario en su dominio de autenticación [#create-users]

Puede utilizar la API SCIM para enviar una solicitud `POST` a `/scim/v2/Users` para crear un usuario. Los siguientes atributos de usuario son <DNT>**required**</DNT>:

* `userName` Este identificador

  <DNT>
    **must**
  </DNT>

  debe ser único dentro de un dominio de autenticación. Utilice la dirección de correo electrónico del usuario.

* `emails` Igual que `userName`. La dirección de correo electrónico del usuario. (A pesar de que se llama `emails`, para este procedimiento ingrese solo uno.)

* `active` Booleano que indica si el usuario debe estar activo o inactivo dentro de New Relic.

Recomendamos proporcionar el siguiente atributo para la mejor experiencia del usuario:

* `name.givenName` El nombre o nombre de pila del usuario.
* `name.familyName` El apellido o apellido del usuario.
* `timezone` La zona horaria del usuario en formato de base de datos de zona horaria de la IANA.

```
curl -X 'POST' -H 'Content-Type: application/json' -H "Authorization: Bearer $TOKEN" 'https://scim-provisioning.service.newrelic.com/scim/v2/Users' --data-binary @- <<EOF
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "userName": "bjensen@example.com",
  "name": {
    "familyName": "Jensen",
    "givenName": "Barbara"
  },
  "emails": [
    {
      "primary": true,
      "value": "bjensen@example.com"
    }
  ],
  "active": true,
  "timezone": "America/Los_Angeles"
}
EOF
```

<Callout variant="important">
  Tome nota del usuario devuelto `id`. Para actualizar un usuario en el futuro, deberá proporcionar el mismo ID con la solicitud.
</Callout>

### Ejemplos de respuestas

<CollapserGroup>
  <Collapser title="201 creado">
    ```
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
      ],
      "id": "5a1d580f-323c-450c-8c62-479b5c9085d6",
      "externalId": null,
      "userName": "bjensen@example.com",
      "name": {
        "familyName": "Jensen",
        "givenName": "Barbara"
      },
      "emails": [
        {
          "value": "bjensen@example.com",
          "primary": true
        }
      ],
      "timezone": "America/Los_Angeles",
      "active": true,
      "meta": {
        "resourceType": "User",
        "created": "2021-07-20T21:32:58.167Z",
        "lastModified": "2021-07-20T21:32:58.167Z"
      },
      "groups": []
    }
    ```
  </Collapser>

  <Collapser title="400 Petición Incorrecta">
    ```
    {
      "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:Error"
      ],
      "scimType": "invalidValue",
      "detail": "Validation failed: Username can't be blank",
      "status": "400"
    }
    ```
  </Collapser>

  <Collapser title="409 Conflicto">
    ```
    {
      "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:Error"
      ],
      "scimType": "uniqueness",
      "detail": "Resource already exists",
      "status": "409"
    }
    ```
  </Collapser>
</CollapserGroup>

## Cree grupos en su dominio de autenticación [#create-groups]

Puede utilizar la API SCIM para enviar una solicitud `POST` a `/scim/v2/Groups` para crear un grupo. El único atributo de grupo <DNT>**required**</DNT> es:

* `displayName` El nombre del grupo.

```
curl -X 'POST' -H 'Content-Type: application/json' -H "Authorization: Bearer $YOUR_TOKEN" 'https://scim-provisioning.service.newrelic.com/scim/v2/Groups' --data-binary @- <<EOF
{
    "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
    "displayName": "Example Group"
}
EOF
```

<Callout variant="important">
  Tome nota del grupo devuelto `id`. Para actualizar un grupo o sus miembros en el futuro, deberá proporcionar la misma identificación con la solicitud.
</Callout>

### Ejemplos de respuestas

<CollapserGroup>
  <Collapser title="201 creado">
    ```
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group"
      ],
      "id": "df2b9a04-0426-4a3e-bf5f-54d5341f4e5b",
      "displayName": "Example Group",
      "meta": {
        "resourceType": "Group",
        "created": "2021-07-20T22:41:50.414Z",
        "lastModified": "2021-07-20T22:41:50.414Z"
      },
      "members": []
    }
    ```
  </Collapser>

  <Collapser title="400 Petición Incorrecta">
    ```
    {
      "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:Error"
      ],
      "scimType": "invalidValue",
      "detail": "Validation failed: Display name can't be blank",
      "status": "400"
    }
    ```
  </Collapser>

  <Collapser title="409 Conflicto">
    ```
    {
      "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:Error"
      ],
      "scimType": "uniqueness",
      "detail": "Resource already exists",
      "status": "409"
    }
    ```
  </Collapser>
</CollapserGroup>

## Ver usuarios y grupos en su dominio de autenticación [#view]

Después de haber creado algunos usuarios y grupos, los verá en la [UIde usuario de administración de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where). También puedes recuperarlos desde la API SCIM.

En este tutorial, buscará usuarios y grupos específicos, pero esa no es la única forma de ver usuarios y grupos. Consulte la [referencia de la API SCIM](/docs/accounts/accounts/automated-user-management/scim-support-automated-user-management/) y [el RFC 7644](https://datatracker.ietf.org/doc/html/rfc7644) para conocer todas las opciones de consulta disponibles.

Para recuperar un usuario por correo electrónico, envíe una solicitud `GET` a `/scim/v2/Users` con un parámetro de consulta `filter` . El parámetro `filter` debe estar codificado en URL.

```
curl -X 'GET' -H 'Accept: application/json' -H "Authorization: Bearer $YOUR_TOKEN" 'https://scim-provisioning.service.newrelic.com/scim/v2/Users' --get --data-urlencode 'filter=userName eq "bjensen@example.com"'
```

Respuesta de ejemplo:

<Collapser title="200 bien">
  ```
  {
    "totalResults": 1,
    "schemas": [
      "urn:ietf:params:scim:api:messages:2.0:ListResponse"
    ],
    "Resources": [
      {
        "schemas": [
          "urn:ietf:params:scim:schemas:core:2.0:User",
        ],
        "id": "5a1d580f-323c-450c-8c62-479b5c9085d6",
        "externalId": null,
        "userName": "bjensen@example.com",
        "name": {
          "familyName": "Jensen",
          "givenName": "Barbara"
        },
        "emails": [
          {
            "value": "bjensen@example.com",
            "primary": true
          }
        ],
        "timezone": "America/Los_Angeles",
        "active": true,
        "meta": {
          "resourceType": "User",
          "created": "2021-07-20T21:32:58.167Z",
          "lastModified": "2021-07-20T21:32:58.167Z"
        },
        "groups": []
      }
    ]
  }
  ```
</Collapser>

De manera similar, envíe una solicitud `GET` a `/scim/v2/Groups` con un parámetro de consulta `filter` para recuperar un grupo por nombre.

```
curl -X 'GET' -H 'Accept: application/json' -H "Authorization: Bearer $YOUR_TOKEN" 'https://scim-provisioning.service.newrelic.com/scim/v2/Groups' --get --data-urlencode 'filter=displayName eq "Example Group"'
```

Respuesta de ejemplo:

<Collapser title="200 bien">
  ```
  {
    "totalResults": 1,
    "schemas": [
      "urn:ietf:params:scim:api:messages:2.0:ListResponse"
    ],
    "Resources": [
      {
        "schemas": [
          "urn:ietf:params:scim:schemas:core:2.0:Group"
        ],
        "id": "df2b9a04-0426-4a3e-bf5f-54d5341f4e5b",
        "displayName": "Example Group",
        "meta": {
          "resourceType": "Group",
          "created": "2021-07-20T22:41:50.414Z",
          "lastModified": "2021-07-20T22:41:50.414Z"
        },
        "members": []
      }
    ]
  }
  ```
</Collapser>

## Actualizar el atributo de un usuario [#update-user]

La API SCIM admite los métodos `PUT` y `PATCH` para actualizar el usuario. Consulte las [acciones admitidas por la API SCIM](/docs/accounts/accounts/automated-user-management/scim-support-automated-user-management/#supported-actions) y [el RFC 7644](https://datatracker.ietf.org/doc/html/rfc7644) para obtener detalles sobre el uso `PATCH`. Este tutorial demuestra cómo actualizar el atributo de un usuario con el método `PUT` .

New Relic **no** requiere que todos los atributos del usuario se incluyan en el cuerpo de la solicitud, solo es necesario el atributo que desea actualizar. Envíe una solicitud `PUT` a `/scim/v2/Users/${ID}` para actualizar al usuario.

```
curl -X 'PUT' -H 'Content-Type: application/json' -H "Authorization: Bearer $YOUR_TOKEN" 'https://scim-provisioning.service.newrelic.com/scim/v2/Users/5a1d580f-323c-450c-8c62-479b5c9085d6' --data-binary @- <<EOF
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "timezone": "America/Chicago"
}
EOF
```

### Ejemplos de respuestas

<CollapserGroup>
  <Collapser title="200 bien">
    ```
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
      ],
      "id": "5a1d580f-323c-450c-8c62-479b5c9085d6",
      "externalId": null,
      "userName": "bjensen@example.com",
      "name": {
        "familyName": "Jensen",
        "givenName": "Barbara"
      },
      "emails": [
        {
          "value": "bjensen@example.com",
          "primary": true
        }
      ],
      "timezone": "America/Chicago",
      "active": true,
      "meta": {
        "resourceType": "User",
        "created": "2021-07-20T21:32:58.167Z",
        "lastModified": "2021-07-21T02:12:05.348Z"
      },
      "groups": []
    }
    ```
  </Collapser>

  <Collapser title="409 Conflicto">
    ```
    {
      "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:Error"
      ],
      "scimType": "uniqueness",
      "detail": "Resource already exists",
      "status": "409"
    }
    ```
  </Collapser>
</CollapserGroup>

## Actualizar los miembros de un grupo [#update-group]

La API SCIM admite los métodos `PUT` y `PATCH` para actualizar grupos. Este tutorial mostrará cómo actualizar los miembros de un grupo con el método `PATCH` . Consulte las [acciones admitidas por la API SCIM](/docs/accounts/accounts/automated-user-management/scim-support-automated-user-management/#supported-actions) y [el RFC 7644](https://datatracker.ietf.org/doc/html/rfc7644) para obtener detalles sobre el uso `PUT`.

`PATCH` es conveniente para agregar o eliminar miembros del grupo sin necesidad de especificar la lista completa de miembros en la solicitud. Para agregar un usuario a un grupo, utilice el siguiente parámetro de operación:

* `op` Ajustado a `Add`
* `path` Ajustado a `members`
* `value` establecer una lista de `{"value": "${USER_ID}"}` con cada ID de usuario para agregar al grupo

Envíe una solicitud `PATCH` a `/scim/v2/Groups/${ID}` para actualizar a los miembros del grupo.

```
curl -X 'PATCH' -H 'Content-Type: application/json' -H "Authorization: Bearer $YOUR_TOKEN" 'https://scim-provisioning.service.newrelic.com/scim/v2/Groups/df2b9a04-0426-4a3e-bf5f-54d5341f4e5b' --data-binary @- <<EOF
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:PatchOp"
  ],
  "Operations": [{
    "op": "Add",
    "path": "members",
    "value": [{
      "value": "5a1d580f-323c-450c-8c62-479b5c9085d6"
    }]
  }]
}
EOF
```

Respuesta de ejemplo:

<Collapser title="200 bien">
  ```
  {
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:Group"
    ],
    "id": "df2b9a04-0426-4a3e-bf5f-54d5341f4e5b",
    "displayName": "Example Group",
    "meta": {
      "resourceType": "Group",
      "created": "2021-07-20T22:41:50.414Z",
      "lastModified": "2021-07-20T22:41:50.414Z"
    },
    "members": [
      {
        "type": "User",
        "value": "5a1d580f-323c-450c-8c62-479b5c9085d6"
      }
    ]
  }
  ```
</Collapser>

Para eliminar un usuario de un grupo, utilice el siguiente parámetro de operación:

* `op` Ajustado a `Remove`
* `path` Ajustado a `members`
* `value` establecer una lista de `{"value": "${USER_ID}"}` con cada ID de usuario para eliminar del grupo

```
curl -X 'PATCH' -H 'Accept: application/json' -H "Authorization: Bearer $YOUR_TOKEN" 'https://scim-provisioning.service.newrelic.com/scim/v2/Groups/df2b9a04-0426-4a3e-bf5f-54d5341f4e5b' --data-binary @- <<EOF
{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:PatchOp"
  ],
  "Operations": [{
    "op": "Remove",
    "path": "members",
    "value": [{
      "value": "5a1d580f-323c-450c-8c62-479b5c9085d6"
    }]
  }]
}
EOF
```

Respuesta de ejemplo:

<Collapser title="200 bien">
  ```
  {
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:Group"
    ],
    "id": "df2b9a04-0426-4a3e-bf5f-54d5341f4e5b",
    "displayName": "Example Group",
    "meta": {
      "resourceType": "Group",
      "created": "2021-07-20T22:41:50.414Z",
      "lastModified": "2021-07-20T22:41:50.414Z"
    },
    "members": []
  }
  ```
</Collapser>

## Eliminar usuarios y grupos [#delete]

Para eliminar a un usuario de un dominio de autenticación, envíe una solicitud `DELETE` a `/scim/v2/Users/${ID}`.

```
curl -X 'DELETE' -H 'Accept: application/json' -H "Authorization: Bearer $YOUR_TOKEN" 'https://scim-provisioning.service.newrelic.com/scim/v2/Users/d0f4d8e3-5413-4894-a8f9-de709994e18c'
```

Respuesta de ejemplo:

```
204 No Content
```

De manera similar, para eliminar un grupo de su dominio de autenticación, envíe una solicitud `DELETE` a `/scim/v2/Groups/${ID}`.

```
curl -X 'DELETE' -H 'Accept: application/json' -H "Authorization: Bearer $YOUR_TOKEN" 'https://scim-provisioning.service.newrelic.com/scim/v2/Groups/df2b9a04-0426-4a3e-bf5f-54d5341f4e5b'
```

Respuesta de ejemplo:

```
204 No Content
```

## Próximos pasos [#next-steps]

Una vez que se complete la integración, los posibles próximos pasos incluyen:

* Su usuario de New Relic comenzará de forma predeterminada como [usuario básico](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) y tendrá la opción de actualizarlo. Para obtener más información, consulte [Administrar tipo de usuario](#manage-user-type).
* [Configure SAML SSO](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#saml).
* Una vez que sus grupos de usuarios estén en New Relic, deberá asignarles roles y cuentas específicas. [Obtenga más información sobre cómo funciona el acceso de usuarios.](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts#understand-concepts)

## Opcional: administrar el tipo de usuario [#manage-user-type]

Una vez que se completa la integración de la API SCIM, todos los usuarios ingresados en New Relic comienzan como usuarios básicos. Puede utilizar nuestro método predeterminado para administrar [el tipo de usuario](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type), que consiste en utilizar la [UIde usuario de administración de usuarios](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-ui-and-tasks#where). Opcionalmente, puede utilizar nuestra API SCIM. Para hacer esto, puede configurar la actualización de la configuración de su dominio de autenticación para [Delegar el control del tipo de usuario](/docs/accounts/accounts-billing/new-relic-one-user-management/authentication-domains-saml-sso-scim-more/#user-upgrade) a su proveedor de identidad o aplicación personalizada.

El atributo de tipo del usuario se define en el [esquema personalizado](/docs/accounts/accounts/automated-user-management/scim-support-automated-user-management#user-type) `urn:ietf:params:scim:schemas:extension:newrelic:2.0:User`. Incluya este esquema y el atributo de cadena `nrUserType` en su solicitud de creación o actualización para establecer el tipo de usuario.

Los valores válidos para `nrUserType` incluyen:

* `Full User`
* `Core User`
* `Basic User`

Para crear un nuevo `Basic user` envíe una `POST` solicitud `/scim/v2/Users` e incluya la extensión de esquema personalizada New Relic:

```
curl -X 'POST' -H 'Content-Type: application/json' -H "Authorization: Bearer $YOUR_TOKEN" 'https://scim-provisioning.service.newrelic.com/scim/v2/Users' --data-binary @- <<EOF
{
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:User",
      "urn:ietf:params:scim:schemas:extension:newrelic:2.0:User"
    ],
    "userName": "jbenson@example.com",
    "name": {
        "givenName": "James",
        "familyName": "Benson"
    },
    "emails": [{
        "primary": true,
        "value": "jbenson@example.com",
        "type": "work"
    }],
    "active": true,
    "timezone": "America/Chicago",
    "urn:ietf:params:scim:schemas:extension:newrelic:2.0:User": {
      "nrUserType": "Basic User"
    }
}
EOF
```

### Ejemplos de respuestas

<CollapserGroup>
  <Collapser title="200 bien">
    ```
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "urn:ietf:params:scim:schemas:extension:newrelic:2.0:User"
      ],
      "id": "8ab6c464-983c-4bb4-9507-720f28763a43",
      "externalId": null,
      "userName": "jbenson@example.com",
      "name": {
        "familyName": "Benson",
        "givenName": "James"
      },
      "emails": [
        {
          "value": "jbenson@example.com",
          "primary": true
        }
      ],
      "timezone": "America/Chicago",
      "active": true,
      "meta": {
        "resourceType": "User",
        "created": "2021-07-21T19:53:33.470Z",
        "lastModified": "2021-07-21T19:53:33.470Z"
      },
      "groups": [],
      "urn:ietf:params:scim:schemas:extension:newrelic:2.0:User": {
        "nrUserType": "Basic User"
      }
    }
    ```
  </Collapser>

  <Collapser title="409 Conflicto">
    ```
    {
      "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:Error"
      ],
      "scimType": "uniqueness",
      "detail": "Resource already exists",
      "status": "409"
    }
    ```
  </Collapser>

  <Collapser title="400 Petición Incorrecta">
    ```
    {
      "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:Error"
      ],
      "scimType": "invalidValue",
      "detail": "Validation failed: Username can't be blank",
      "status": "400"
    }
    ```
  </Collapser>
</CollapserGroup>

Para actualizar el tipo de usuario, envíe una `PUT` solicitud `scim/v2/Users/${ID}` e incluya la extensión de esquema personalizada de New Relic:

```
curl -X 'PUT' -H 'Content-Type: application/json' -H "Authorization: Bearer $YOUR_TOKEN" 'https://scim-provisioning.service.newrelic.com/scim/v2/Users' --data-binary @- <<EOF
{
    "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:User",
      "urn:ietf:params:scim:schemas:extension:newrelic:2.0:User"
    ],
    "urn:ietf:params:scim:schemas:extension:newrelic:2.0:User": {
      "nrUserType": "Full User"
    }
}
EOF
```

### Ejemplos de respuestas

<CollapserGroup>
  <Collapser title="200 bien">
    ```
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "urn:ietf:params:scim:schemas:extension:newrelic:2.0:User"
      ],
      "id": "8ab6c464-983c-4bb4-9507-720f28763a43",
      "externalId": null,
      "userName": "jbenson@example.com",
      "name": {
        "familyName": "Benson",
        "givenName": "James"
      },
      "emails": [
        {
          "value": "jbenson@example.com",
          "primary": true
        }
      ],
      "timezone": "America/Chicago",
      "active": true,
      "meta": {
        "resourceType": "User",
        "created": "2021-07-21T19:53:33.470Z",
        "lastModified": "2021-07-21T20:15:56.718Z"
      },
      "groups": [],
      "urn:ietf:params:scim:schemas:extension:newrelic:2.0:User": {
        "nrUserType": "Full User"
      }
    }
    ```
  </Collapser>

  <Collapser title="400 Petición Incorrecta">
    ```
    {
      "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:Error"
      ],
      "scimType": "invalidValue",
      "detail": "Validation failed: invalid nrUserType value provided",
      "status": "400"
    }
    ```
  </Collapser>
</CollapserGroup>
