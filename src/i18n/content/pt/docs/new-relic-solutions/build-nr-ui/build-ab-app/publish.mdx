---
title: Publique seu aplicativo New Relic
metaDescription: Publish your New Relic application
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="tip">
  Esta lição faz parte de um curso que ensina como construir um aplicativo New Relic do zero. Se ainda não o fez, confira a Visão Geral.

  Cada lição do curso se baseia na anterior, portanto, certifique-se de ter concluído a última lição, Descreva seu aplicativo para o catálogo, antes de iniciar esta.
</Callout>

Na última lição, você criou informações de catálogo para o aplicativo de teste A/B que você construiu ao longo deste curso. Agora é hora de publicar seu aplicativo no catálogo de observabilidade instantânea e enviar os detalhes do catálogo.

## Versões e tags [#versions]

A publicação de um aplicativo requer duas informações principais:

* versão
* tag

A versão de um aplicativo identifica o código que ele contém e é armazenada no arquivo `package.json` de nível raiz do Nerdpack. Cada vez que você modificar o código em seu Nerdpack e estiver pronto para lançá-lo, você atualizará a versão em `package.json`. Por exemplo, se você corrigir alguns bugs na primeira versão principal do código do seu aplicativo, poderá publicar as alterações na versão `1.0.1`.

A tag de uma versão do aplicativo descreve seu estado. Por exemplo, a versão `0.0.1` de um aplicativo em andamento pode ser publicada com uma tag `DEV` para indicar que está em desenvolvimento.

<Callout variant="tip">
  Existem algumas regras que regem como você pode usar tags e você pode ler sobre elas em nossa documentação de tags.
</Callout>

## Publique seu primeiro aplicativo [#publish]

<Steps>
  <Step>
    Mude para o diretório `publish/ab-test` do [repositório de cursos](https://github.com/newrelic-experimental/nru-programmability-course):

    ```sh
    cd nru-programmability-course/publish/ab-test
    ```

    Este diretório contém o código que esperamos que seu aplicativo tenha neste ponto do curso. Ao navegar para o diretório correto no início de cada lição, você deixa seu código personalizado para trás, protegendo-se assim de carregar código incorreto de uma lição para outra.
  </Step>

  <Step>
    Navegue até a raiz do seu Nerdpack em `nru-programmability-course/publish/ab-test`.
  </Step>

  <Step>
    Gere seu próprio UUID de aplicativo:

    ```sh
    nr1 nerdpack:uuid -gf
    ```

    O UUID é usado para identificar seu aplicativo no registro de aplicativos New Relic. Como você está usando o código que desenvolvemos para este curso, já existe um aplicativo com o UUID existente no registro. Ao gerar o seu próprio, agora você poderá publicar este aplicativo.

    <Callout
      variant="tip"
      title="Detalhe técnico"
    >
      O UUID também vincula seu aplicativo à sua conta e, portanto, permite que o aplicativo faça solicitações do Nerdgraph em nome da conta que o instalou.
    </Callout>
  </Step>

  <Step>
    Em `package.json`, defina `version` como `1.0.0`:

    ```json
    {
      "private": true,
      "name": "ab-test",
      "version": "1.0.0",
      "scripts": {
        "start": "nr1 nerdpack:serve",
        "test": "exit 0"
      },
      "nr1": {
        "uuid": "2d923ba6-d231-4dd3-830f-b1923577a422"
      },
      "dependencies": {
        "prop-types": "^15.6.2",
        "react": "^16.6.3",
        "react-dom": "^16.6.3"
      },
      "browserslist": ["last 2 versions", "not ie < 11", "not dead"]
    }
    ```

    A New Relic usa [controle de versão semântico](https://semver.org) e, de acordo com esta convenção, `1.0.0` sinaliza o primeiro lançamento principal. Agora você está pronto para publicar!
  </Step>

  <Step>
    Substitua todas as instâncias de `<YOUR NEW RELIC ACCOUNT ID>` e `<YOUR NEW RELIC ENTITY GUID>` em seu projeto pelo New Relic [ID real](/docs/accounts/accounts-billing/account-setup/account-id) da conta e pelo GUID da entidade, respectivamente.
  </Step>

  <Step>
    Publique seu aplicativo New Relic:

    ```sh
    nr1 nerdpack:publish -t DEV
    ```

    É isso! Você publicou seu aplicativo no registro da New Relic. O parâmetro `-t` especifica uma tag para sua versão publicada. Entre outros logs, você deverá ver a seguinte confirmação em seu console:

    ```sh
    [output] Publishing Nerdpack AbTest ({blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain})
    [output]  {success}✔{plain}  Nerdpack published successfully!
    [output]  {success}✔{plain}  Tagged {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain} version {green}1.0.0{plain} as {green}DEV{plain}.
    ```

    Por enquanto, você marcou a versão 1.0.0 como `DEV` porque ainda é um trabalho em andamento.
  </Step>

  <Step>
    Veja as informações de registro do seu aplicativo:

    ```sh
    nr1 nerdpack:info
    [output] Id: {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380
    [output] Region: {muted}us
    [output] Account ID: 123456
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 4
    [output]
    [output] Version  Date           Tags
    [output] -------  -------------  ------
    [output] 1.0.0    {muted}5 minutes ago  {green}DEV
    ```

    Os resultados deste comando detalham as informações armazenadas no registro do New Relic para seu aplicativo, incluindo seu UUID, versão e ID da conta.
  </Step>
</Steps>

## Visualize seu aplicativo em observabilidade instantânea [#view-app]

Agora que seu aplicativo está publicado e marcado, você pode visualizá-lo no catálogo de observabilidade Instant.

<Steps>
  <Step>
    Vá para [New Relic](https://one.newrelic.com). Observe que você não está usando o parâmetro de string de consulta `?nerdpacks=local`. Você não precisa mais dele porque não está veiculando seu aplicativo localmente.
  </Step>

  <Step>
    Na página inicial, navegue até **Integrations & Agents** na barra de navegação superior.

    Selecione **Apps & Visualizations**.

    A partir daqui você pode ver seu aplicativo entre os recursos.

    Observe que isso é diferente de quando você veiculou seu aplicativo localmente. Aplicativos locais e aplicativos publicados que você assinou são exibidos em **Your apps** na sobreposição de Aplicativos.
  </Step>

  <Step>
    Clique no seu aplicativo para ver mais detalhes.

    Observe a data de lançamento e a versão do aplicativo. Esta página deve mostrar as informações que você criou na última lição. Ainda não, porque você não enviou essas informações ao catálogo e a publicação do seu aplicativo não faz isso por você.
  </Step>
</Steps>

## Enviar informações do catálogo [#submit]

Mesmo que você tenha publicado seu aplicativo, há algumas coisas que o catálogo não conhece. Estas são as descrições, captura de tela e metadados que você criou na última lição. `nr1 catalog` é usado para enviar e visualizar essas informações.

<Steps>
  <Step>
    Envie as informações do seu catálogo:

    ```sh
    nr1 catalog:submit
    [output] Uploading screenshots from nru-programmability-course/publish/ab-test...
    [output]  {success}✔{normal}  Screenshots uploaded from: nru-programmability-course/publish/ab-test
    [output]  {green}✔  {plain}Updated metadata for AbTest 1.0.0
    ```

    Se tudo der certo, você deverá ver uma mensagem de sucesso avisando que a captura de tela e os metadados foram atualizados.

    No entanto, você pode receber um erro ao enviar essas informações ao catálogo:

    ```sh
    [output] Uploading screenshots...
    [output]  {error}›   {plain}Error: {error}1 error while updating AbTest 1.0.0
    [output]  {error}›
    [output]  {error}›   Invalid Version: Nerdpack version 1.0.0 not found. Have you run `nr1 nerdpack:publish` yet?
    [output]  {error}›   {plain}Code: UNKNOWN
    ```

    Se fizer isso, tente novamente em um ou dois minutos. Pode levar alguns segundos para que o catálogo seja atualizado com a nova versão do seu aplicativo.

    Se isso não funcionar, publique seu aplicativo com `nr1 nerdpack:publish`.
  </Step>

  <Step>
    Veja as informações do seu catálogo:

    ```sh
    nr1 catalog:info
    [output] AbTest (Nerdpack):
    [output]     {purple}categoryTerms.0: {plain}browser agent
    [output]     {purple}description: {plain}Nerdpack ab-test
    [output]     {purple}details: {plain}Display test data for our newsletter subscription A/B test
    [output]     {purple}displayName: {plain}AbTest
    [output]     {purple}keywords.0: {plain}a/b test
    [output]     {purple}icon.url: {plain}https://nr3.nr-ext.net/artifact-index-production/a685fec2-29fb-40b0-9f65-4178...
    [output]     {purple}previews.0.url: {plain}https://application-catalog-production.s3.us-east-2.amazonaws.com/nerdpacks/a...
    [output]     {purple}releaseDate: {plain}2021-03-12T15:46:09.600138Z
    [output]     {purple}repository: {plain}https://github.com/newrelic-experimental/nru-programmability-course
    [output]     {purple}tagline: {plain}Win @ newsletter subscriptions
    [output]     {purple}version: {plain}1.0.0
    [output]     {purple}whatsNew.changes: {plain}Initial release! Includes:
    [output]     - A variety of charts for understanding the test r...
    [output]     {purple}whatsNew.version: {plain}1.0.0
    [output] AbTestLauncher (Launcher):
    [output]     {purple}description: {plain}Describe me
    [output]     {purple}displayName: {plain}AbTestLauncher
    [output]     {purple}icon.url: {plain}https://nr3.nr-ext.net/artifact-index-production/a685fec2-29fb-40b0-9f65-4178...
    [output] AbTestNerdlet (Nerdlet):
    [output]     {purple}displayName: {plain}AbTestNerdlet
    [output]     {purple}supportedEntityTypes.mode: NONE
    ```

    Todas as informações de `catalog` são mostradas aqui.
  </Step>

  <Step>
    Veja seu aplicativo.

    Clique no aplicativo para ver mais.

    Você vê a captura de tela adicionada ao seu launcher ou Nerdlet em **What's inside**.

    Aqui você vê detalhes do aplicativo, uma guia de documentação, notas de lançamento e captura de tela.
  </Step>
</Steps>

## Atualize sua tag de versão [#update]

Seu aplicativo fica ótimo no catálogo de observabilidade Instant, completo com metadados, imagens e documentação. Antes, você marcava o aplicativo como `DEV` porque todas as informações não estavam prontas para consumo público. Agora é. É hora de atualizar sua tag de versão.

<Steps>
  <Step>
    Atualize a versão do seu aplicativo `1.0.0` de `DEV` para `STABLE`:

    ```sh
    nr1 nerdpack:tag -t STABLE
    [output]  {success}✔{plain}  Tagged {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380{plain} version {green}1.0.0{plain} as {green}STABLE{plain}.
    ```

    Sem especificar uma versão, `nr1` usa a versão especificada em `package.json`. Você pode especificar uma versão com o comando `-V`. Saiba mais sobre `nerdpack:tag` com o comando `nr1 nerdpack:tag --help`.
  </Step>

  <Step>
    Veja as informações do seu aplicativo:

    ```sh
    nr1 nerdpack:info
    [output] Id: {blue}9da77738-9cf6-43c7-9ba0-e3a8c6ac7380
    [output] Region: {muted}us
    [output] Account ID: 123456
    [output] Local version: 1.0.0
    [output] Subscription Model: OWNER_AND_ALLOWED
    [output] Version Count: 1
    [output]
    [output] Version  Date           Tags
    [output] -------  -------------  ------
    [output] 1.0.0    {muted}30 minutes ago  {green}STABLE
    ```

    O aplicativo agora está marcado com `STABLE`, indicando que está pronto para uso público.

    <Callout
      variant="tip"
      title="Detalhe técnico"
    >
      Mesmo que o aplicativo esteja pronto para uso público, ele ainda estará visível apenas para o usuário da sua conta. Outras contas não podem ver aplicativos criados por outras contas privadas, a menos que esses aplicativos sejam adicionados ao catálogo público de observabilidade instantânea.
    </Callout>
  </Step>
</Steps>

Agora que seu aplicativo foi publicado e seus metadados enviados, você pode assinar sua conta no aplicativo do Instant observabilidade. Na próxima lição, você aprenderá como assinar e cancelar a assinatura do seu novo aplicativo.

<Callout variant="course">
  Esta lição faz parte de um curso que ensina como construir um aplicativo New Relic do zero. Continue para a próxima lição: Assine seu aplicativo New Relic.
</Callout>
