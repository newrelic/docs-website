---
title: Listado de usuario para su cuenta
tags:
  - APIs
  - REST API v2
  - Account admin and usage (v2)
metaDescription: 'How to use New Relic''s REST API (v2) to obtain user names, emails, roles, and IDs for your New Relic account.'
freshnessValidatedDate: never
translationType: machine
---

Para el usuario de New Relic en nuestro [modelo de usuario original](/docs/accounts/original-accounts-billing/original-product-based-pricing/overview-user-models), almacenamos una lista de los usuarios que pueden acceder a su cuenta en una base de datos por su [dirección de correo electrónico](/docs/accounts-partnerships/accounts/account-setup/adding-updating-users), [función](/docs/accounts-partnerships/accounts/account-setup/users-roles) asignada y su nombre y apellido, si se proporcionan. Puede ver estos datos desde [la interfaz de usuario](/docs/accounts-partnerships/accounts/account-setup/adding-updating-users) de New Relic y desde [API Explorer (v2)](/docs/apm/apis/api-explorer-v2/parts-api-explorer).

<Callout variant="tip">
  Para obtener la misma información del [Explorador de API de New Relic (v2)](https://rpm.newrelic.com/api/explore), seleccione <DNT>**Users > GET List**</DNT>.
</Callout>

## Requisitos [#requirements]

Esto genera una lista de usuarios en nuestro [modelo de usuario original](/docs/accounts/original-accounts-billing/original-product-based-pricing/overview-user-models). No incluye usuarios en nuestro [modelo de usuario más nuevo](/docs/accounts/original-accounts-billing/original-product-based-pricing/overview-user-models).

## Listar todos los usuarios de la cuenta [#list_all_users]

Para obtener una lista de todos los usuarios en el [modelo de usuario original](/docs/accounts/original-accounts-billing/original-product-based-pricing/overview-user-models) de su cuenta, use este comando:

```
curl -X GET 'https://api.newrelic.com/v2/users.json' \
     -H "x-api-key:<a href='/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key'>$API_KEY</a>" -i
```

El resultado será similar a este:

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "users": [
    {
      "id": 123456,
      "first_name": "My",
      "last_name": "Name",
      "email": "my.name@mywebsite.com",
      "role": "owner"
    },
    {
      "id": 654321,
      "first_name": "Adam",
      "last_name": "Admin",
      "email": "adam.admin@mywebsite.com",
      "role": "admin"
    },
    {
      "id": 345123,
      "first_name": "Any",
      "last_name": "User",
      "email": "any.user@mywebsite.com",
      "role": "user"
    },
    ...
```

## Listado por correo electrónico del usuario [#list_by_mail]

Si conoce todo o parte del correo electrónico del usuario, puede utilizar este comando para devolver la función, el nombre y el usuario `id`. La cláusula `filter[email]=` especifica la parte conocida del correo electrónico (por ejemplo, `"my.name"`).

<DNT>**Note:**</DNT> La coincidencia de caracteres es una cadena simple. No hay capacidad de expresión regular disponible, por lo que pueden ocurrir múltiples coincidencias si la cadena seleccionada no es única.

```
curl -X GET 'https://api.newrelic.com/v2/users.json' \
     -H "x-api-key:<a href='/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key'>$API_KEY</a>" -i \
     -d 'filter[email]=my.name'
```

El resultado de este comando será el mismo que el de la primera entrada en el ejemplo [de Listado de todos los usuarios de cuentas](#list_all_users) .

## Listado por usuario `id` [#list_by_userid]

Si conoce al usuario `id`, puede utilizar este comando para devolver la función, el nombre y el correo electrónico. La cláusula `filter[ids]=` especifica el usuario `id`.

```
curl -X GET 'https://api.newrelic.com/v2/users.json' \
     -H "x-api-key:<a href='/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key'>$API_KEY</a>" -i \
     -d 'filter[ids]=123456'
```

También puede utilizar este comando, que inserta el usuario `id` en la URL y omite el filtro.

```
curl -X GET 'https://api.newrelic.com/v2/users/123456.json' \
     -H "x-api-key:<a href='/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key'>$API_KEY</a>" -i
```

El resultado de este comando será el mismo que el de la primera entrada en el ejemplo [de Listado de todos los usuarios de cuentas](#list_all_users) .
