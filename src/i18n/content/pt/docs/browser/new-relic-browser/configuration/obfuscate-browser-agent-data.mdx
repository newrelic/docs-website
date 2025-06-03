---
title: Ofuscar dados do agente browser
tags:
  - Browser monitoring
  - Obfuscation
metaDescription: You can configure the browser agent to obfuscate the data it sends.
freshnessValidatedDate: '2023-10-24T00:00:00.000Z'
translationType: machine
---

<Callout variant="important">
  Este recurso está disponível atualmente para aqueles que usam os métodos de instalação do browser copiar/colar ou NPM. Atualmente não há opções de interface ou configuração do NerdGraph disponíveis. Continuamos trabalhando para melhorar o acesso a essas e outras opções de configuração.
</Callout>

Embora a recomendação da New Relic seja evitar o uso de informações confidenciais na estrutura pública do seu aplicativo, também entendemos que isso nem sempre é possível. Você pode configurar o agente browser para ofuscar seletivamente os dados em cada carga enviada. Isso pode ser útil se seu aplicativo usar dados confidenciais em locais capturados pelo agente, como caminhos de navegação, mensagens de erro e muito mais.

## Como funciona [#how-it-works]

A partir do agente browser [versão 1216](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes) e superior, a regra de ofuscação poderá ser aplicada à carga de colheita de saída.

Para configurar essas regras, você precisará configurar a seguinte propriedade do agente browser:

* A propriedade `init.obfuscate` contém uma matriz de seletores e substituições que serão utilizadas para modificar cada colheita antes do envio.

  * Como a ofuscação atualmente exige que você use os métodos de copiar/colar ou de instalação do NPM, você precisará editar manualmente a seção de configuração do JavaScript e definir a matriz `obfuscate` para conter suas condições de ofuscação.

### Recomendações

Ao configurar esta propriedade, recomendamos o seguinte:

* Use padrões regex intencionais para ofuscar apenas o que precisa de ofuscação.

  * O ofuscamento desnecessário pode ter efeitos colaterais, como menos granularidade ao agrupar dados e menos capacidade de digerir o que o agente capturou.

* Substitua seus dados confidenciais por termos neutros e genéricos que também indiquem quais dados foram editados.

  * Exemplo: `/account-id/g` --> `ACCOUNT_ID`

### Copiar/colar instalação [#copy-paste]

Se você estiver usando o método de instalação copiar/colar, adicione a seguinte configuração às configurações JavaScript do seu browser antes do carregador do agente:

```js
window.NREUM.init = {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: <RegExp | string>
        replacement: <string>
      },
      ...<other obfuscation rules>...
    ]
}
```

### Instalação NPM [#npm]

Se você estiver usando o método de instalação do browser NPM, adicione a seguinte configuração ao inicializar o agente browser:

```js
new BrowserAgent({ 
  init: {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: <RegExp | string>
        replacement: <string>
      },
      ...<other obfuscation rules>...
    ]
  }
})
```

### Exemplos

```js
window.NREUM.init = {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: /user-id/g,
        replacement: 'USER_ID'
      },
    ]
}
```

```js
new BrowserAgent({ 
  init: {
    ...<other init properties>...,
    obfuscate: [
      {
        regex: /account-id/g,
        replacement: 'ACCOUNT_ID'
      },
    ]
  }
})
```
