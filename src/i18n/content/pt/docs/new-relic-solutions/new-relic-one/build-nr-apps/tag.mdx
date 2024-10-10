---
title: Tag a versão de lançamento do seu Nerdpack
tags:
  - New Relic
  - Nerdpack
metaDescription: Learn to tag your Nerdpack's release version.
freshnessValidatedDate: never
translationType: machine
---

Tag suas versões do Nerdpack para rastreá-las e assiná-las. Desmarque versões para evitar assinatura ou ocultar Nerdpacks do catálogo.

## Atualize sua CLI

Antes de executar qualquer comando, certifique-se de ter a versão mais recente da CLI:

```sh
nr1 update
```

## Verifique suas permissões

Para tag uma versão do Nerdpack, você precisa:

* Acesso à conta que o publicou
* As [permissões necessárias](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps) para gerenciar Nerdpacks.

## Publique seu Nerdpack

Você precisa [publicar](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish) os Nerdpacks criados antes de tag -los.

## Tag uma versão

Depois de publicar uma versão do Nerdpack no catálogo de aplicativos New Relic , você poderá tag -la com a CLI `nr1`.

<Steps>
  <Step>
    Na pasta raiz do seu Nerdpack, execute `nr1 nerdpack:tag`:

    ```sh
    nr1 nerdpack:tag --tag=DEV
    [output] {success}✔{normal}  Tagged {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} version {green}1.0.0{normal} as {green}DEV{normal}.
    ```

    Aqui, você marca a versão `1.0.0` como `DEV`.

    Agora, você e outros usuários da sua conta podem usar esta tag:

    * Você vê a tag como uma opção de assinatura quando adiciona o Nerdpack à sua conta
    * Se você assinar a tag `DEV` e ela for atualizada posteriormente (por exemplo, `DEV` for aplicado à versão `1.0.1` ), você será atualizado automaticamente para a nova versão sem precisar se inscrever novamente.

    <Callout variant="important">
      Um dos recursos das versões de lançamento de tags é que o usuário que está inscrito em uma tag recebe atualizações automaticamente quando essa tag é usada para outra versão. Isso significa que se um usuário estiver testando uma versão, digamos `1.0.0`, e você aplicar a mesma tag a outra versão, digamos `1.0.1`, esse usuário verá a versão `1.0.1` em sua conta e não poderá mais acessar a versão Nerdpack eles estavam testando antes. Muitas vezes, esse é o comportamento esperado, mas lembre-se de considerar esse efeito colateral ao usar a tag.
    </Callout>
  </Step>

  <Step>
    Veja as informações de registro do seu Nerdpack:

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

    Esta saída confirma sua tag `DEV` na versão `1.0.0`.
  </Step>
</Steps>

## Desmarcar uma versão

À medida que você cria mais versões do seu Nerdpack, você pode atualizar sua tag para versões mais recentes. No entanto, você também pode remover uma tag do seu Nerdpack com `nr1`.

<Steps>
  <Step>
    No diretório raiz do seu Nerdpack, visualize as informações do seu registro:

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

    Aqui você vê que a versão `1.0.0` não tem tag, a versão `1.0.1` tem duas tags, `BETA` e `STABLE`, e a versão `2.0.0` tem uma tag, `DEV`.
  </Step>

  <Step>
    Remova a tag `BETA` das suas versões do Nerdpack:

    ```sh
    nr1 nerdpack:untag --tag=BETA
    [output] {success}✔{normal}  Removed nerdpack {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} tag {green}BETA{normal}.
    ```
  </Step>

  <Step>
    Verifique se a tag foi removida do seu Nerdpack:

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

## Resolver problemas ao marcar uma versão do Nerdpack

Às vezes, ao tag uma versão do Nerdpack, você pode encontrar problemas. Quer você não consiga tag seu Nerdpack ou desmarcá-lo, considere algumas soluções comuns para resolver esses problemas.

### Publique seu Nerdpack

Se você tentar tag seu Nerdpack sem publicá-lo primeiro, receberá um erro:

```sh
nr1 nerdpack:tag --tag=DEV
[output] {error}›{normal}   Error: A downstream error occurred.
```

Esta mensagem de erro não diz muito, mas você pode usar a opção `--verbose` para ver mais informações:

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

Esta mensagem de erro mais detalhada mostra o GraphQL executado nos bastidores para `nr1 nerdpack:tag`. A parte importante da mensagem aqui é:

```sh
[output] {blue}dist/metadata.json{normal} does not exist. package.json will be used instead.
```

O diretório `dist` é criado quando você publica seu aplicativo. Então, por ainda não ter sido publicado, esse diretório não existe e `nr1` recorre a `package.json` para procurar detalhes sobre seu Nerdpack. Mas, como o UUID em seu `package.json` não está no registro do New Relic, o comando falhou.

Portanto, antes de tag suas versões, publique-as no registro:

```sh
nr1 nerdpack:publish
nr1 nerdpack:tag --tag=DEV
```

<Callout variant="tip">
  Lembre-se que você também pode tag uma versão ao mesmo tempo em que a implanta!

  ```sh
  nr1 nerdpack:publish --tag=DEV
  ```
</Callout>

### Cancelar assinatura do Nerdpack

Você só pode remover tags que não tenham assinantes. Se você tentar remover uma tag na qual o usuário está inscrito, você receberá um erro:

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

Neste caso, verifique se você é assinante do Nerdpack:

```sh
nr1 subscription:list
[output] {muted}Listing subscribed deployed nerdpacks on your account:
[output] Version  UUID                                  Name               Date         User
[output] -------  ------------------------------------  -----------------  -----------  ----------
[output] 2.0.0    {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal}  MyAwesomeNerdpack  {muted}an hour ago  1000383529
```

Isso mostra que você está inscrito em `MyAwesomeNerdpack`. Cancele a inscrição e tente remover a tag `DEV` novamente:

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
