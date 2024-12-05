---
title: Atualize as informações do catálogo do seu Nerdpack
tags:
  - New Relic
  - Nerdpack
metaDescription: Learn to describe your Nerdpack in the Instant Observability catalog.
freshnessValidatedDate: never
translationType: machine
---

Adicione captura de tela, descrições e outros metadados ao seu Nerdpack, e carregue tudo no [Instant observabilidade](https://newrelic.com/instant-observability).

## Atualize sua CLI [#update-cli]

Antes de executar qualquer comando, certifique-se de ter a versão mais recente da CLI:

```shell
nr1 update
```

## Verifique suas permissões [#check-permissions]

Para publicar seu Nerdpack e atualizar as informações do catálogo, você precisa de:

* Acesso à conta que o publicou.
* As [permissões necessárias](/docs/new-relic-solutions/new-relic-one/build-nr-apps/permission-manage-apps) para gerenciar Nerdpacks.

## Publique seu Nerdpack [#publish-nerdpack]

Você precisa [publicar](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish) os Nerdpacks criados antes de atualizar as informações do catálogo.

## Atualize os metadados do catálogo do seu Nerdpack [#update-nerdpack]

Após publicar seu Nerdpack no catálogo [de observabilidade Instant](https://newrelic.com/instant-observability) , atualize os metadados do Nerdpack para que o usuário saiba tudo sobre seus Nerdlets ou visualizações.

```json fileName=catalog/config.json
{
  "tagline": "",
  "details": "",
  "categoryTerms": [],
  "keywords": [],
  "repository": "",
  "whatsNew": "",
  "support": {
    "email": {
      "address": ""
    },
    "issues": {
      "url": ""
    },
    "community": {
      "url": ""
    }
  }
}
```

<Steps>
  <Step>
    Na página inicial do [New Relic](https://one.newrelic.com) , vá para <DNT>**+ Integrations & Agents**</DNT> na barra de navegação superior.
  </Step>

  <Step>
    Encontre seu Nerdpack publicado usando o filtro de aplicativos ou a barra de pesquisa. Observe que não há nenhuma página de informações ou detalhes além do nome do Nerdpack e a breve descrição encontrada em `nr1.json`. Não há captura de tela, ícones, detalhes ou recurso de novidades. Para isso, você precisa fornecer informações do catálogo ao seu Nerdpack.
  </Step>

  <Step>
    A partir da raiz do seu Nerdpack, crie diretórios de **catálogo** para abrigar as capturas de tela e metadados do seu Nerdpack:

    ```sh
    nr1 create --type catalog
    [output] {success}✔{normal}  created: launchers/launcher/catalog
    [output] {success}✔{normal}  created: nerdlets/home/catalog
    [output]
    [output] {success}✔{normal}  catalog created successfully!
    [output]    {purple}catalog{normal} is available at "./catalog"
    ```

    Dentro do seu diretório raiz `catalog` , você encontrará arquivos e diretórios específicos para transmitir informações sobre o seu Nerdpack ao seu usuário:

    ```sh
    ls catalog
    [output] README.md         additionalInfo.md config.json       documentation.md  {blue}screenshots
    ```

    <table>
      <thead>
        <tr>
          <th>
            Arquivo
          </th>

          <th>
            Descrição
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            README.md
          </td>

          <td>
            Um arquivo markdown que instrui como usar as informações e os metadados no catálogo
          </td>
        </tr>

        <tr>
          <td>
            config.json
          </td>

          <td>
            Um arquivo JSON que contém os seguintes campos:

            * `tagline`: Um breve título para o aplicativo. Não pode exceder 30 caracteres.

            * `repository`: A URL do repositório remoto do Nerdpack. Não pode exceder 1000 caracteres.

            * `details`: O objetivo do Nerdpack e como usá-lo. Não pode exceder 1000 caracteres. Use novas linhas para formatação e não inclua nenhuma marcação ou HTML.

            * `categoryTerms`: Uma lista de termos que correspondem o Nerdpack a uma categoria no catálogo [de observabilidade Instantânea](https://newrelic.com/instant-observability) . Você pode procurar um mapeamento de termos de categoria com NerdGraph:

              * [Consulta dos EUA](https://api.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20nr1Catalog%20%7B%0A%20%20%20%20%20%20categories%20%7B%0A%20%20%20%20%20%20%20%20displayName%0A%20%20%20%20%20%20%20%20terms%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
              * [Consulta da UE](https://api.eu.newrelic.com/graphiql?#query=%7B%0A%20%20actor%20%7B%0A%20%20%20%20nr1Catalog%20%7B%0A%20%20%20%20%20%20categories%20%7B%0A%20%20%20%20%20%20%20%20displayName%0A%20%20%20%20%20%20%20%20terms%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

            * `keywords`: Uma lista de palavras relevantes para melhorar a descoberta de pesquisa do Nerdpack. Não pode exceder 50 palavras e cada palavra não pode exceder 64 caracteres.

            * `support`: Um objeto que contém:

              * `issues`: Uma URL para a lista de problemas do repositório. Por exemplo, a guia **Issues** se estiver usando o GitHub.
              * `email`: Um endereço de e-mail válido para a equipe que dá suporte ao aplicativo.
              * `community`: Uma URL para um tópico de suporte, fórum ou site para resolução de problemas e suporte ao uso.

            * `whatsNew`: Uma lista com marcadores de alterações na versão atual. Não pode exceder 500 caracteres. Use novas linhas para formatação e não inclua markdown ou HTML.

              Confira [`config.json`do nosso aplicativo Pageview Map](https://github.com/newrelic/nr1-pageview-map/blob/main/catalog/config.json) para ver uma implementação real.
          </td>
        </tr>

        <tr>
          <td>
            documentation.md
          </td>

          <td>
            Um arquivo markdown que informa ao usuário como usar os Nerdlets ou visualizações do Nerdpack. Isso é mostrado na guia **Documentation** da visualização detalhada.
          </td>
        </tr>

        <tr>
          <td>
            additionalInfo.md
          </td>

          <td>
            Um arquivo markdown opcional para qualquer informação adicional sobre como usar seu aplicativo
          </td>
        </tr>

        <tr>
          <td>
            captura de tela
          </td>

          <td>
            Um diretório que contém capturas de tela mostrando seu Nerdpack, como imagens selecionadas de Nerdlets ou visualizações. Não pode conter mais de 6 imagens. Toda captura de tela deve atender aos seguintes critérios:

            * proporção de aspecto 3:2
            * formato PNG
            * orientação paisagem
            * 1600 a 2400 pixels de largura
          </td>
        </tr>
      </tbody>
    </table>

    Este comando também gera um diretório `catalog` para cada launcher, Nerdlet e visualização em seu Nerdpack. Dentro você encontrará um diretório que permite adicionar captura de tela para cada item do Nerdpack.

    ```shell
    ls launchers/launcher/catalog
    [output] {blue}screenshots
    [output]
    ls nerdlets/home/catalog
    [output] {blue}screenshots
    ```
  </Step>

  <Step>
    Atualize o arquivo `documentation.md` do seu Nerdpack:

    ```md fileName=catalog/documentation.md
    Enter your first and last name into the fields provided. When you're done, press **Submit** to see a personalized "Hello!" message.
    ```
  </Step>

  <Step>
    Atualize seu arquivo `config.json` :

    ```json fileName=catalog/config.json
    {
        "tagline": "Say hi!",
        "details": "DemoApp says Hello to a user.",
        "categoryTerms": [],
        "keywords": ["hello world"],
        "repository": "https://github.com/newrelic/developer-website",
        "whatsNew": "feat: Initial commit"
    }
    ```
  </Step>

  <Step>
    Inclua captura de tela em seu diretório raiz `screenshots` ou em qualquer diretório de item `screenshots` do Nerdpack.
  </Step>

  <Step>
    Envie as informações para o catálogo de observabilidade Instantânea:

    ```shell
    nr1 catalog:submit
    [output] Uploading screenshots from demo-app...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app
    [output] Uploading screenshots from demo-app/launchers/launcher...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/launchers/launcher
    [output] Uploading screenshots from demo-app/nerdlets/home...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/nerdlets/home
    [output]  {success}✔{normal}  Updated metadata for DemoApp 1.0.0
    ```
  </Step>

  <Step>
    Vá para Observabilidade instantânea para ver suas alterações. Clique no seu Nerdpack para ver os novos detalhes. Em seguida, clique em **What's inside** para ver qualquer captura de tela que você carregou para itens individuais em seu Nerdpack.
  </Step>
</Steps>

## Atualize os ícones do seu Nerdpack [#nerdpack-icons]

Dentro de um Nerdpack, você pode definir dois tipos de ícones:

* Um para todo o seu Nerdpack, que representa o seu Nerdpack no catálogo.
* Um para cada um dos seus lançadores, que representa seus Nerdlets.

Substitua esses ícones e publique seu Nerdpack para ver as mudanças.

<Steps>
  <Step>
    Atualize o `icon.png` na raiz do seu Nerdpack. Este ícone é usado no catálogo e na página de detalhes do Nerdpack.
  </Step>

  <Step>
    Se você estiver criando um Nerdpack com um ou mais inicializadores, atualize o `icon.png` em cada uma das subpastas do seu inicializador.
  </Step>

  <Step>
    Atualize sua versão do `package.json` :

    ```json fileName=package.json lineHighlight=4
    {
      "private": true,
      "name": "demo-app",
      "version": "1.0.1",
      "scripts": {
        "start": "nr1 nerdpack:serve",
        "test": "exit 0"
      },
      "nr1": {
        "uuid": "f2dbc999-e9a3-49b9-933d-5a704c6750bd"
      },
      "dependencies": {
        "prop-types": "^15.6.2",
        "react": "^16.6.3",
        "react-dom": "^16.6.3"
      },
      "browserslist": ["last 2 versions", "not ie < 11", "not dead"]
    }
    ```

    Isso permite que você publique uma nova versão do seu Nerdpack.
  </Step>

  <Step>
    [Publique](/docs/new-relic-solutions/new-relic-one/build-nr-apps/publish) seu Nerdpack:

    ```sh
    nr1 nerdpack:publish
    ```
  </Step>

  <Step>
    Atualize sua string `whatsNew` em `catalog/config.json`:

    ```json fileName=catalog/config.json
    {
      "tagline": "Say hi!",
      "details": "DemoApp says Hello to a user.",
      "categoryTerms": [],
      "keywords": ["hello world"],
      "repository": "https://github.com/newrelic/developer-website",
      "whatsNew": "feat: Add new icons"
    }
    ```

    Isso informará ao usuário o que você adicionou na versão mais recente do seu Nerdpack.
  </Step>

  <Step>
    Envie esses novos metadados para o catálogo:

    ```sh
    nr1 catalog:submit
    [output] Uploading screenshots from demo-app...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app
    [output] Uploading screenshots from demo-app/launchers/launcher...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/launchers/launcher
    [output] Uploading screenshots from demo-app/nerdlets/home...
    [output]  {success}✔{normal}  Screenshots uploaded from: demo-app/nerdlets/home
    [output]  {success}✔{normal}  Updated metadata for DemoApp 1.0.1
    ```
  </Step>

  <Step>
    Acesse o catálogo e [assine seu Nerdpack](/docs/new-relic-solutions/new-relic-one/build-nr-apps/subscribe) para ver seu novo ícone.
  </Step>
</Steps>

## Resolver problemas com o envio de informações do catálogo [#resolve-issues]

Às vezes, ao trabalhar com metadados de catálogo, você pode encontrar problemas. Considere algumas soluções comuns para resolver esses problemas.

### Publique seu Nerdpack [#publish-nerdpack]

Lembre-se de que você só pode enviar metadados de catálogo de Nerdpacks que já foram publicados. Se você tentar enviar informações de um Nerdpack que ainda não foi publicado, a CLI tentará ajudar:

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {error}›{normal}   Error: {error}1 error while updating DemoApp 1.0.0
[output]  {error}›
[output]  {error}›   Invalid Version: Nerdpack version 1.0.0 not found. Have you run `nr1 nerdpack:publish` yet?
[output]  {error}›{normal}   Code: UNKNOWN
```

### Redimensione suas imagens [#resize-images]

A captura de tela para o catálogo deve atender aos critérios especificados anteriormente neste guia. Caso contrário, a CLI tentará ajudar:

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {error}›{normal}   Error: {error}2 errors while updating DemoApp 1.0.1
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/screenshots/screenshot.png
[output]  {error}›{normal}   {red}Invalid Screenshot: screenshot.png has a size ratio of 4:2. Update size ratio to 3:2.
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/screenshots/screenshot.png
[output]  {error}›{normal}   {red}Invalid Screenshot: screenshot.png has a width of 3054px. Update size to be between 1600px and 2400px.
[output]  {error}›{normal}   Code: UNKNOWN
```

### Verifique o comprimento de suas cordas [#check-strings]

A maior parte do conteúdo em `config.json` possui requisitos de comprimento de string. Certifique-se de revisar esses requisitos e cumpri-los ao atualizar seu arquivo `config.json` . Caso contrário, você verá erros ao tentar enviar sua configuração ao catálogo:

```sh
nr1 catalog:submit
[output] Uploading screenshots...
[output]  {success}✔{normal}  Screenshots uploaded
[output]  {error}›{normal}   Error: {error}2 errors while updating DemoApp 1.0.1
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/config.json
[output]  {error}›{normal}   {error}Invalid Metadata: `details` has a character length of 2204. Must be no longer than 1000 characters
[output]  {error}›{normal}
[output]  {error}›{normal}   {blue}catalog/config.json
[output]  {error}›{normal}   {error}Invalid Metadata: `tagline` has a character length of 266. Must be no longer than 30 characters
[output]  {error}›{normal}   Code: UNKNOWN
```
