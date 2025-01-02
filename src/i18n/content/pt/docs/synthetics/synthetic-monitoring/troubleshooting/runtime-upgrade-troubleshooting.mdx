---
title: Solucionar erros de atualização em tempo de execução
type: troubleshooting
tags:
  - Synthetics
  - Synthetic monitoring
  - Troubleshooting
  - Runtime conversion
metaDescription: null
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  A partir de 26 de agosto de 2024, você não poderá mais criar novos monitores usando tempos de execução legados em locais públicos ou privados. Em 22 de outubro de 2024, [encerraremos a vida útil](/whats-new/2024/04/whats-new-04-09-eol-synthetics-runtime-cpm) das versões conteinerizadas minion privado (chamadas por minuto) e legado runtime do Synthetics.

  * Para localização pública, use [a interface de atualização de tempo de execução](/docs/synthetics/synthetic-monitoring/using-monitors/runtime-upgrade-ui/) para atualizar seu monitor para os tempos de execução mais recentes.
  * Para localização privada, revise nossas [etapas de migração recomendadas](/docs/synthetics/synthetic-monitoring/private-locations/job-manager-transition-guide/#monitorMigration) para evitar degradação monitor .
</Callout>

## Browser com script: tentativas de interagir com elementos falham [#promises]

Ao validar um monitor criado em um tempo de execução mais antigo em relação [ao tempo de execução do Chrome 100 (ou mais recente)](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100), `findElement` e outros métodos para localizar e interagir com elementos na página podem falhar devido a diferenças no tratamento de promessas. Se o monitor passar em um tempo de execução legado, falhar no novo tempo de execução e o elemento estiver presente na captura de tela, talvez seja necessário melhorar sua lógica de tratamento de promessas.

O gerenciador de promessas e o fluxo de controle Selenium Webdriver permitiram que algumas funções fossem executadas em ordem em tempos de execução substitutos, sem gerenciar promessas. Esse recurso foi removido no Selenium Webdriver 4.0 e não está mais disponível no tempo de execução. Todas as funções e promessas assíncronas precisam ser gerenciadas com `await` ou com a cadeia de promessas `.then` . Isso garantirá que as funções de script sejam executadas na ordem esperada.

Por exemplo, o gerenciador de promessas e o fluxo de controle podem permitir que este script parcial seja concluído com sucesso, mesmo que `$browser.get` retorne uma promessa e a promessa não esteja sendo tratada corretamente:

```js
$browser.get('http://example.com');

$browser.findElement($driver.By.css('h1'));
```

No [tempo de execução do Chrome 100 (ou mais recente)](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100), todos os métodos que retornam uma promessa precisam usar a sintaxe await ou `.then` para sequenciar corretamente as etapas. O uso de await é recomendado devido à sintaxe mais limpa e ao uso mais fácil, mas `.then` cadeias de promessas ainda são suportadas.

```js
await $browser.get('http://example.com');

let el = await $browser.findElement($driver.By.css('h1'));
```

## API com script: diferenças entre `request` e `got` [#request]

Os [tempos de execução API com script do Node.js 10 e anteriores](/docs/synthetics/synthetic-monitoring/using-monitors/manage-monitor-runtimes/#dependencies) usavam o módulo `request` Node.js para fornecer um objeto `$http` que poderia ser usado para [testar API](/docs/synthetics/synthetic-monitoring/scripting-monitors/write-synthetic-api-tests-legacy/).

Os [tempos de execução da API com script do Node.js 16 e mais recentes](/docs/synthetics/synthetic-monitoring/using-monitors/manage-monitor-runtimes/#apidependencies) usam `got` em vez de `request`. O módulo `request` foi descontinuado em 2020 e não será mais incluído em novos tempos de execução baseados em API ou browser. O objeto `$http` fornece uma experiência personalizada semelhante a `request` , ao mesmo tempo em que é alimentado por `got` para fornecer compatibilidade com versões anteriores para casos de uso básicos, evitando ainda o uso de um módulo obsoleto. Nem todos os casos de uso avançado de `request` são ou serão suportados. Há [exemplos de script e um guia de conversão](/docs/synthetics/synthetic-monitoring/scripting-monitors/write-synthetic-api-tests/) disponíveis.

<Callout variant="tip">
  A experiência semelhante a `request`fornecida pelo objeto `$http` também será retornada para todos os clientes que tentarem usar `request` diretamente no Node.js 16 e em tempos de execução de API com script mais recentes.
</Callout>

## API com script: tokeninesperado `JSON.parse` [#scripted-api-unexpected]

A tentativa de usar a função `JSON.parse` ao interagir com o corpo da resposta pode produzir erros de token inesperados no monitor de API com script usando o Node.js 16 e o ambiente de execução mais recente. Se o cabeçalho de resposta do tipo de conteúdo for `application/json`, o corpo da resposta retornado pelo objeto `$http` será analisado como JSON. Chamadas adicionais que tentarem usar `JSON.parse` para analisar o corpo da resposta falharão com esse erro porque o corpo da resposta já foi analisado.

Se o cabeçalho de resposta do tipo de conteúdo não for `application/json`, o corpo da resposta não será analisado automaticamente e a função `JSON.parse` ainda precisará ser usada.

## API com script: `HEAD` ou `GET` [#scripted-api-head-get]

Você não pode incluir um corpo de solicitação com uma solicitação HTTP `HEAD` ou `GET` . O módulo `request` usado pelo tempo de execução do Node 10 e versões anteriores permitia isso, mas isso causará erros no novo tempo de execução. Algumas configurações diferentes podem causar o erro, mas as sugestões mais comuns incluem:

* Não inclua um corpo na sua solicitação, mesmo que esteja vazio.
* Evite opções desnecessárias em sua solicitação `HEAD` ou `GET` , como `json: true`

## API com script: diferenças de string de consulta (qs) [#scripted-api-query]

Nos tempos de execução do Node 10 ou anteriores, a string de consulta configuração era passada usando a opção `qs:` . Para o tempo de execução do Node 16, use a opção `searchParams:` . Somente o nome da opção precisa mudar. O conteúdo da sequência de consulta não precisa ser atualizado.

## API com script: diferenças do cookie jar [#scripted-api-cookie]

Nos tempos de execução do Node 10 ou anteriores, você pode usar a opção `jar: true` para armazenar cookies em um cookie jar entre as solicitações.

No tempo de execução do Node 16, você deve criar um cookie jar usando o módulo `tough-cookie` e, em seguida, fazer referência a esse cookie jar na sua solicitação. Se você criou um pote de biscoitos chamado cookies, consulte-o em suas opções como `cookieJar: cookies`

## API com script: diferenças de formulário [#scripted-api-form]

Devido às diferenças entre o módulo `request` usado para o objeto `$http` no Node 10 e em tempos de execução mais antigos e o módulo `got` usado para o objeto `$http` no tempo de execução do Node 16, você pode encontrar problemas com solicitações usando formulários no monitor API .

Se sim, use o módulo `form-data` para criar e incluir seu formulário com sua solicitação, conforme mostrado neste exemplo parcial.

```js
const FormData = require('form-data');

let form = new FormData();
form.set('fieldName1','value1');
form.set('fieldName2','value2');

let req = {
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'multipart/form-data',
  },
  body: form
}
```

## Diferenças de versão do módulo UUID [#uuid-module-version]

O tempo de execução do Node 16 inclui uma versão mais recente do módulo `uuid` que força o uso da sintaxe `require` atualizada.

Nó 10 e anteriores: `const uuid = require('uuid');`

Nó 16 (assumindo o uso de `uuidv4`): `const { v4: uuidv4 } = require('uuid');`

## Browser com script: Avisos de descontinuação (`$browser` e `$driver` [#deprecations]

Os avisos de descontinuação para `$browser` e `$driver` foram removidos a partir da versão 2.0.29 ou mais recente do tempo de execução do browser. Você não deve mais receber esses avisos ao usar a localização pública. Atualize a imagem de tempo de execução do seu browser Node se estiver recebendo esses avisos ao usar a localização privada.

## Browser com script: `waitForAndFindElement` e `waitForPendingRequests` [#waitMethods]

Os métodos `waitForAndFindElement` e `waitForPendingRequests` são métodos personalizados da New Relic fornecidos no Chrome 72 e em tempos de execução de browser com script mais antigos. Eles ainda podem ser usados com `$driver` e `$browser` no Chrome 100 e em tempos de execução mais recentes, mas não estarão disponíveis ao usar a Selenium Webdriver 4.1 API diretamente com `$selenium` e `$webDriver`. Essa mudança alinhará melhor a implementação do Selenium Webdriver da New Relic com a implementação básica do Selenium Webdriver .

Os clientes que optarem por continuar usando `waitForAndFindElement` ou `waitForPendingRequests` no novo tempo de execução poderão colar [exemplos de código](/docs/synthetics/synthetic-monitoring/scripting-monitors/synthetic-scripted-browser-reference-monitor-versions-chrome-100/#waitForAndFindElement) em seus monitores.