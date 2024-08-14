---
title: Publique seu Nerdpack
tags:
  - New Relic
  - Nerdpack
  - Publish
metaDescription: Learn to publish your Nerdpack to Instant Observability.
freshnessValidatedDate: never
translationType: machine
---

Publique seu Nerdpack, esteja ele ainda em desenvolvimento, pronto para teste ou estável, para compartilhá-lo com outras pessoas.

## Atualize sua CLI

Antes de executar qualquer comando, certifique-se de ter a versão mais recente da CLI:

```shell
nr1 update
```

## Verifique suas permissões

Ao publicar seu Nerdpack, ele fica cadastrado no catálogo de observabilidade Instant. A partir daí, algum usuário poderá assinar seu Nerdpack. O usuário inscrito precisa ter:

* Acesso à conta que publicou o Nerdpack
* As [permissões necessárias](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps) para gerenciar Nerdpacks

## Atualize a versão do seu pacote

Você só pode publicar uma versão do pacote no catálogo [de observabilidade Instantânea](https://newrelic.com/instant-observability) uma vez. Por exemplo, não é possível publicar duas instâncias da versão 1.0.0. Portanto, cada vez que você quiser implantar uma nova versão do seu código, será necessário incrementar a versão dela no arquivo `package.json` do Nerdpack:

```json fileName=package.json lineHighlight=4
{
  "private": true,
  "name": "demo-app",
  "version": "1.0.0",
  "scripts": {
    "start": "nr1 nerdpack:serve",
    "test": "exit 0"
  },
  "nr1": {
    "uuid": "ab123c45-678d-9012-efg3-45hi6jkl7890"
  },
  "dependencies": {
    "prop-types": "^15.6.2",
    "react": "^16.6.3",
    "react-dom": "^16.6.3"
  },
  "browserslist": ["last 2 versions", "not ie < 11", "not dead"]
}
```

<Callout variant="tip">
  As versões do Nerdpack seguem o versionamento semântico. Leia a [documentação](https://semver.org) para saber mais.
</Callout>

## Gere um UUID para seu Nerdpack

Se você criou seu Nerdpack do zero com `nr1 create --type nerdpack`, então seu Nerdpack terá um identificador exclusivo. Encontre este identificador no arquivo `nr1.json` do diretório raiz:

```json fileName=nr1.json lineHighlight=3
{
  "schemaType": "NERDPACK",
  "id": "ab123c45-678d-9012-efg3-45hi6jkl7890",
  "displayName": "DemoApp",
  "description": "Nerdpack demo-app"
}
```

Este ID deve ser exclusivo para o seu Nerdpack quando você publicá-lo no catálogo. A plataforma rejeitará seu Nerdpack se reconhecer o ID. Portanto, se você clonou um Nerdpack existente ou está usando código aberto, gere um novo UUID:

```shell
nr1 nerdpack:uuid --generate --force
```

<Callout variant="tip">
  Leia a documentação do [`nr1 nerdpack:uuid`](/docs/new-relic-solutions/build-nr-ui/nr1-cli/nr1-nerdpack/#nr1-nerdpackuuid) para saber mais. Ou veja a página de ajuda `nr1` :

  ```shell
  nr1 nerdpack:uuid --help
  ```
</Callout>

## Publique seu Nerdpack

<Steps>
  <Step>
    Na pasta raiz do seu Nerdpack, execute `nr1 nerdpack:publish`:

    ```shell
    nr1 nerdpack:publish
    ```

    Se você publicou seu Nerdpack com sucesso, deverá ver alguns resultados de sucesso, incluindo:

    ```shell
    [output] {green}✔{normal}  Nerdpack published successfully!
    [output] {green}✔{normal}  Tagged {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} version {blue}1.0.0{normal} as {blue}STABLE{normal}.
    ```

    Esta saída descreve o Nerdpack publicado. Primeiro, indica o ID do Nerdpack (`ab123c45-678d-9012-efg3-45hi6jkl7890`). Então, sua versão (`1.0.0`). Finalmente, sua tag de versão (`STABLE`).

    Você já gerenciava o ID e a versão do seu Nerdpack, mas a tag de versão é nova. Para gerenciar as versões do seu Nerdpack, você pode tag las com uma tag arbitrária. Por exemplo, se uma versão ainda estiver em desenvolvimento, você poderá tag la com uma tag `DEV` . Se a versão passar para uma fase de controle de qualidade, você poderá tag -la com `QA`. Se estiver pronto para produção, você poderá tag -lo com `STABLE`.

    <Callout variant="tip">
      Leia nosso [guia de tags](/docs/new-relic-solutions/new-relic-one/build-nr-apps/tag) para saber mais.
    </Callout>

    Use a opção `-t` ou `--tag` para publicar seu Nerdpack com uma tag:

    ```shell
    nr1 nerdpack:publish --tag DEV
    ```

    Como você viu na saída `nr1 nerdpack:publish` , se você não transmitir uma tag, `nr1` aplicará a tag `STABLE` automaticamente. No entanto, você pode instruí-lo a não aplicar nenhuma tag a uma versão com a opção `-T` ou `--skip-tag` :

    ```shell
    nr1 nerdpack:publish --skip-tag
    ```

    Você também pode realizar um teste para certificar-se de publicar seu Nerdpack da maneira que deseja:

    ```shell
    nr1 nerdpack:publish --dry-run
    ```
  </Step>

  <Step>
    Depois de publicar seu Nerdpack com sucesso, vá para [New Relic](https://one.newrelic.com). Como você visualizará um Nerdpack publicado, em vez de um fornecido localmente, não será necessário passar a string de consulta `?nerdpacks=local` .
  </Step>

  <Step>
    Acesse **+ Integrations & Agents**. Quer você tenha publicado um aplicativo New Relic ou uma visualização personalizada, você encontrará seu projeto aqui.
  </Step>

  <Step>
    Encontre seu Nerdpack publicado usando o filtro de aplicativos ou a barra de pesquisa.

    <Callout variant="tip">
      Apenas Nerdpacks com versões de tags são mostrados em [Observabilidade Instantânea](https://newrelic.com/instant-observability). Portanto, se você publicou sem tag ou removeu uma tag do Nerdpack publicado, você não a verá no catálogo.
    </Callout>
  </Step>
</Steps>

## Resolva problemas de acesso ao seu Nerdpack publicado

Às vezes, ao publicar seu Nerdpack, você pode encontrar problemas. Se você não consegue publicar seu Nerdpack devido a algum problema com seu código ou não consegue encontrar seu Nerdpack na observabilidade instantânea, considere algumas soluções comuns para resolver esses problemas.

### Depure seu comando

Ao tentar publicar seu Nerdpack, leia atentamente a saída do seu comando `nr1` . Você pode receber resultados de sucesso, incluindo:

```shell
[output] {green}✔{normal}  Nerdpack published successfully!
[output] {green}✔{normal}  Tagged {purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal} version {blue}1.0.0{normal} as {blue}STABLE{normal}.
```

No entanto, a saída pode mostrar alguns erros no seu Nerdpack. Por exemplo:

```shell
[output] Publishing Nerdpack DemoApp ({purple}ab123c45-678d-9012-efg3-45hi6jkl7890{normal})
[output] {error}›{normal}   Error: There is already a Nerdpack with given id & version.
[output] {error}›{normal}   Code: 409
```

Também pode ajudá-lo a visualizar resultados mais detalhados. Use o comando `--verbose` para mostrar mais conteúdo:

```sh
nr1 nerdpack:publish --verbose
```

## Revele suas informações publicadas do Nerdpack

Se você não encontrar seu Nerdpack no New Relic, ele pode não estar marcado. Lembre-se de que pelo menos uma versão do seu Nerdpack publicado deve ter uma tag para ser exibida na página de **Apps** . Veja mais informações sobre seu Nerdpack publicado com `nr1 nerdpack:info`:

```shell
nr1 nerdpack:info
[output] Id: {purple}ab123c45-678d-9012-efg3-45hi6jkl7890
[output] Region: {muted}us
[output] Account ID: 3014918
[output] Local version: 1.0.0
[output] Subscription Model: OWNER_AND_ALLOWED
[output] Version Count: 1
[output]
[output] {white}Version  Date         Tags
[output] -------  -----------  ----
[output] 1.0.0    {muted}3 hours ago
```

Neste exemplo, há uma versão publicada, mas não é uma tag. Você pode tag uma versão publicada com:

```sh
nr1 nerdpack:tag --from-version=1.0.0 --tag=DEV
```

Agora, se você atualizar a página do browser, deverá ver seu Nerdpack em **Apps**.

<Callout variant="tip">
  Leia nossa documentação [`nr1 nerdpack:tag`](/docs/new-relic-solutions/build-nr-ui/nr1-cli/nr1-nerdpack/#nr1-nerdpacktag) para saber mais.
</Callout>

## Verifique seu perfil local

Com `nr1`, você pode [definir um perfil padrão do New Relic](/docs/new-relic-solutions/build-nr-ui/nr1-cli/nr1-common/#nr1-profiles). Este perfil é usado para todos os comandos, a menos que especificado de outra forma com a opção `--profile` do comando. Quando você publica seu Nerdpack, somente o usuário que pode acessar sua conta poderá ver seu Nerdpack publicado.

Portanto, se você não encontrar seu Nerdpack no New Relic, mas sabe que ele está publicado, compare seu perfil local com o perfil que você está usando no browser para ter certeza de que são iguais.
