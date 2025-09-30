---
title: Código do agente proxy e dados analíticos
tags:
  - Browser monitoring
  - Proxy
metaDescription: The agent can be configured to fetch its code and send analytics through a proxy server instead of New Relic's endpoints.
freshnessValidatedDate: '2023-09-22T00:00:00.000Z'
translationType: machine
---

<Callout variant="important">
  Este recurso está disponível atualmente para aqueles que usam os métodos de instalação do browser copiar/colar ou NPM. Atualmente não há opções de interface ou configuração do NerdGraph disponíveis. Continuamos trabalhando para melhorar o acesso a essas e outras opções de configuração.
</Callout>

Definir uma URL de proxy para o agente browser pode ser uma forma valiosa de garantir que os dados de observabilidade ainda sejam coletados para fins de desempenho.

Ao usar o método de proxy, é importante garantir que você tenha o direito de fazê-lo com base em quaisquer obrigações contratuais, regulatórias ou outras obrigações legais que possa ter com seu usuário final e/ou visitantes do site. Se você verificou que este método é uma solução viável e compatível para sua organização, consulte as instruções de configuração abaixo.

## Como funciona [#how-it-works]

A partir do agente browser [versão 1.240.0](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes) e superior, você pode configurar dois tipos diferentes de proxies, dependendo do tipo de dados que deseja encaminhar: um proxy para buscar o código do agente browser e um proxy para encaminhar dados analíticos para New Relic.

Para configurar esses proxies, você precisará configurar as seguintes propriedades do agente browser:

* `init.proxy.assets` determina onde buscar o agente browser.

  * Se estiver usando o método de instalação copiar/colar, você precisará editar manualmente seu trecho JavaScript e definir `assets` como o URL do seu domínio.
  * Por exemplo, se você estiver usando o browser agente v1.240.0 Pro+SPA, e você definir `init.proxy.assets` como `assets.mydomain.com`, o agente browser será carregado de `https://assets.mydomain.com/nr-spa.<hash>-1.240.0.min.js` em vez de `https://js-agent.newrelic.com/nr-spa.<hash>-1.240.0.min.js`.
  * Se você estiver usando o método de instalação NPM, esta configuração não será relevante. O agente browser instalado pelo NPM passa pelo mesmo processo de empacotamento que o aplicativo host e deve resultar em ativos do agente no diretório `output` junto com o aplicativo host. Quando o aplicativo host é implantado, esses ativos do agente também devem ser implantados, resultando no carregamento do código do agente já no mesmo domínio do site.

* `init.proxy.beacon` determina para onde os dados analíticos são enviados.

  * Para ambos os métodos de instalação, você precisará definir `beacon` para o URL do seu domínio.
  * Por exemplo, se você definir `beacon` como `beacon.mydomain.com`, todos os dados de observabilidade serão enviados para `https://beacon.mydomain.com/OBSERVABILITY_ENDPOINT`.

Se você estiver preocupado com a privacidade do usuário, poderá excluir o cabeçalho `X-Forwarded-For HTTP` , que é usado para localizar geograficamente clientes. Se você excluí-lo, a New Relic localizará geograficamente seu proxy como cliente.

## Iniciar [#set-up]

Para começar a redirecionar solicitações para seu proxy, consulte as instruções abaixo com base no método de implantação usado para instalar o agente browser.

### Recomendações

Ao configurar essas propriedades, recomendamos o seguinte:

* Use um subdomínio próprio. Mesmo que você possa usar tecnicamente outro domínio de terceiros, é provável que ele seja bloqueado por bloqueadores de anúncios e VPNs de segurança.
* O padrão de entrada é `<domain>[:<port>][/<path>]`. Certifique-se de omitir o protocolo (como `https://`) e qualquer barra final. Os `port` e `path` são opcionais e serão respeitados se adicionados.
* Se você estiver configurando `assets` e `beacon`, defina valores diferentes para cada proxy usando subdomínios ou caminhos diferentes. Isso tornará a configuração do servidor proxy muito mais fácil.

### Copiar/colar instalação [#copy-paste]

Se você estiver usando o método de instalação copiar/colar, adicione a seguinte configuração às configurações JavaScript do seu browser antes do carregador do agente:

```js
window.NREUM.init = {
    ...<other init properties>,
    proxy: {
        assets: <URL string>
        beacon: <URL string>
    }
}
```

### Instalação NPM [#npm]

Se você estiver usando o método de instalação do browser NPM, adicione a seguinte configuração ao inicializar o agente browser:

```js
new BrowserAgent({ 
  init: {
    ...<other init properties>,
    proxy: {
        beacon: <URL string>
    }
  }
})
```

## Usando proxies [#using-proxies]

A New Relic não fornece nem oferece suporte a um serviço de proxy em nuvem, portanto, você deve configurar e gerenciar seus próprios servidores proxy. Para garantir a funcionalidade completa, fazemos as seguintes suposições sobre seus proxies:

* <DNT>
    **Load the browser agent code from the New Relic CDN and pass it back to the client.**
  </DNT>

  Se você estiver usando o campo `assets` , seu proxy deverá carregar o código do agente browser de `https://js-agent.newrelic.com/` e devolvê-lo ao cliente. Por exemplo, para o browser agente v1.240.0, solicitações para `https://assets.mydomain.com/nr-spa.3b61d78f-1.240.0.min.js` devem produzir a mesma resposta do upstream `https://js-agent.newrelic.com/nr-spa.3b61d78f-1.240.0.min.js`.

* <DNT>
    **Forward client payloads to New Relic.**
  </DNT>

  O proxy `beacon` encaminha a carga do cliente para o New Relic. Seu endpoint original pode ser encontrado na [página de configurações do aplicativo do browser](/docs/browser/new-relic-browser/configuration/browser-app-settings-page/). No trecho JavaScript, procure por `;NREUM.info={beacon:"_____",...`. Para a maioria dos aplicativos, isso seria `(https://)bam.nr-data.net`. No entanto, pode ser diferente devido a questões legais e de conformidade. Por exemplo, as solicitações para `https://yourproxy.com/1/asdf?a=123` devem ser passadas para `https://bam.nr-data.net/1/asdf?a=123`.

* <DNT>
    **Do not modify requests and responses.**
  </DNT>

  As solicitações e respostas através do servidor proxy não devem ser modificadas.

* <DNT>
    **Support the bandwidth and traffic generated by observability data collection.**
  </DNT>

  Seu sistema deve ser capaz de suportar carga de proxy, mas a quantidade de dados gerados dependerá do uso do seu site.
