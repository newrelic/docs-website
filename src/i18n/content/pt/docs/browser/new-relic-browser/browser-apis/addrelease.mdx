---
title: addRelease
type: apiDoc
shortDescription: Adiciona um nome e ID exclusivos para identificar versões com vários pacotes JavaScript na mesma página.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to identify releases with multiple components on the same page.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```js
newrelic.addRelease(string $release_name, string $release_id)
```

Adiciona um nome e ID exclusivos para identificar versões com vários pacotes JavaScript na mesma página.

## Requisitos

* Agente browser Pro ou Pro+SPA (v1016 ou superior)

* Se estiver usando o npm para instalar o agente browser, você deverá ativar o recurso `jserrors` ao instanciar a classe `BrowserAgent` . Na matriz `features` , adicione o seguinte:

  ```js
  import { JSErrors } from '@newrelic/browser-agent/features/jserrors';

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      JSErrors
    ]
  }
  ```

  Para obter mais informações, consulte a [documentação de instalação do browser npm](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Descrição

Em <InlinePopover type="browser"/>, uma versão é uma forma de tag erros com informações sobre qual versão do seu aplicativo está em execução no momento. Isso é útil para sites onde os componentes compartilhados pertencem a equipes diferentes ou onde vários aplicativos são implantados de forma independente, mas executados na mesma página.

Os aplicativos da web modernos têm muitas partes interconectadas, portanto, um aplicativo pode ter várias versões (com nomes diferentes) associadas ao mesmo carregamento de página. Por exemplo, você pode usar versões para:

* Veja as diferenças entre os erros de uma versão antiga em cache do seu aplicativo e os erros provenientes de uma nova versão.
* Identifique problemas encontrados durante testes A/B, implementações lentas, sinalizadores de recursos e outros métodos avançados de implantação.
* Determine qual versão de um [mapa de origem do browser](/docs/new-relic-browser-source-map-support) usar.

Se a URL do seu JavaScript não for exclusiva, você deverá especificar um nome de versão e um identificador com esta chamada de API para o agente browser. Estas informações também são necessárias ao publicar mapas de origem no serviço de armazenamento. Esta API adiciona um ID para monitoramento de Browser para identificar lançamentos com múltiplos pacotes JavaScript na mesma página.

Se o URL do pacote JavaScript do seu aplicativo <DNT>**is unique**</DNT> sempre que você implantar seu código, o monitoramento do browser não exigirá nenhuma informação adicional para identificar sua versão. Por exemplo, algumas ferramentas de implantação de front-end usam o número de compilação do Jenkins ou `git commit sha` no nome do arquivo do código de implantação. Estes são suficientes para determinar exclusivamente a versão que causou o erro.

Assim que possível após o carregamento da sua página, chame `newrelic.addRelease()`. Todos os erros que o agente browser vê serão associados a essa versão do código JavaScript.

## Parâmetro

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$release_name`

        _corda_
      </td>

      <td>
        <DNT>**Required.**</DNT> Uma breve descrição do componente; por exemplo, o nome de um projeto, aplicativo, arquivo ou biblioteca.
      </td>
    </tr>

    <tr>
      <td>
        `$release_id`

        _corda_
      </td>

      <td>
        <DNT>**Required.**</DNT> O ID ou versão desta versão; por exemplo, um número de versão, número de compilação do seu ambiente de CI, GitHub SHA, GUID ou um hash aplicar do conteúdo. Como o New Relic converte esse valor em uma string, você também pode usar `null` ou `undefined` se necessário.

        A combinação `$release_name` e `$release_id` deve ser exclusiva; por exemplo:

        * `'signup', '2.4.0'`

        * `'signup', '2.4.1'`

          Entretanto, você pode usar a mesma versão para componentes diferentes; por exemplo:

        * `'signup', '2.4.0'`

        * `'logout', '2.4.0'`
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

### SHA curto atual [#release-id-example1]

```js
newrelic.addRelease('checkout page', 'a818994')
```

### Versionamento semântico [#release-id-example2]

```js
newrelic.addRelease('jquery.min.js', 'v3.1.1')
```
