---
title: Listando usuário para sua conta
tags:
  - APIs
  - REST API v2
  - Account admin and usage (v2)
metaDescription: 'How to use New Relic''s REST API (v2) to obtain user names, emails, roles, and IDs for your New Relic account.'
freshnessValidatedDate: never
translationType: machine
---

Para usuários New Relic em nosso [modelo de usuário original](/docs/accounts/original-accounts-billing/original-product-based-pricing/overview-user-models), armazenamos uma lista dos usuários que podem acessar sua conta em um banco de dados por [endereço de e-mail](/docs/accounts-partnerships/accounts/account-setup/adding-updating-users), [função](/docs/accounts-partnerships/accounts/account-setup/users-roles) atribuída e nome e sobrenome, se fornecidos. Você pode visualizar esses dados na [interface do usuário](/docs/accounts-partnerships/accounts/account-setup/adding-updating-users) do New Relic e no [API Explorer (v2)](/docs/apm/apis/api-explorer-v2/parts-api-explorer).

<Callout variant="tip">
  Para obter as mesmas informações do [New Relic API Explorer (v2)](https://rpm.newrelic.com/api/explore), selecione <DNT>**Users &gt; GET List**</DNT>.
</Callout>

## Requisitos [#requirements]

Isso gera uma lista de usuários em nosso [modelo de usuário original](/docs/accounts/original-accounts-billing/original-product-based-pricing/overview-user-models). Ele não lista os usuários em nosso [modelo de usuário mais recente](/docs/accounts/original-accounts-billing/original-product-based-pricing/overview-user-models).

## Listar todos os usuários da conta [#list\_all\_users][#list_all_users]

Para obter uma lista de todos os usuários no [modelo de usuário original](/docs/accounts/original-accounts-billing/original-product-based-pricing/overview-user-models) da sua conta, use este comando:

```sh
curl -X GET 'https://api.newrelic.com/v2/users.json' \
     -H "x-api-key:$API_KEY" -i
```

A saída será semelhante a esta:

```json
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

## Listagem por e-mail do usuário [#list\_by\_mail][#list_by_mail]

Se você souber todo ou parte do e-mail do usuário, poderá usar este comando para retornar a função, o nome e o usuário `id`. A cláusula `filter[email]=` especifica a parte conhecida do email (por exemplo, `"my.name"`).

<DNT>**Note:**</DNT> A correspondência de caracteres é uma string simples. Nenhum recurso de expressão regular está disponível, portanto, múltiplas correspondências poderão ocorrer se a string selecionada não for exclusiva.

```sh
curl -X GET 'https://api.newrelic.com/v2/users.json' \
     -H "x-api-key:$API_KEY" -i \
     -d 'filter[email]=my.name'
```

A saída para este comando será a mesma da primeira entrada no exemplo [Listando todas as contas de usuário](#list_all_users) .

## Listagem por usuário `id` [#list\_by\_userid][#list_by_userid]

Se você conhece o usuário `id`, poderá usar este comando para retornar a função, o nome e o email. A cláusula `filter[ids]=` especifica o usuário `id`.

```sh
curl -X GET 'https://api.newrelic.com/v2/users.json' \
     -H "x-api-key:$API_KEY" -i \
     -d 'filter[ids]=123456'
```

Você também pode usar este comando, que incorpora o usuário `id` na URL e omite o filtro.

```sh
curl -X GET 'https://api.newrelic.com/v2/users/123456.json' \
     -H "x-api-key:$API_KEY" -i
```

A saída para este comando será a mesma da primeira entrada no exemplo [Listando todas as contas de usuário](#list_all_users) .