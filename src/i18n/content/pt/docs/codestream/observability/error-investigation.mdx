---
title: Investigação de erros
metaDescription: Investigating errors using CodeStream.
freshnessValidatedDate: '2024-12-11T00:00:00.000Z'
translationType: machine
---

CodeStream mostra erros para qualquer serviço de APM ou monitoramento de browser, incluindo erros atribuídos a você e erros recentes que acontecem no código aberto em seu IDE. Você pode controlar o prazo por meio da lista dropdown no título desta seção. Observe que esta lista pode ser um subconjunto dos erros mostrados na [Errors Inbox](/docs/errors-inbox/errors-inbox/) do New Relic.

<img
  title="The list of recent errors in CodeStream."
  alt="A screenshot of the list of recent errors in CodeStream."
  src="/images/codestream_screenshot-crop_errors-list.webp"
/>

Basta clicar em um erro para descobrir a causa raiz e colaborar com colegas de equipe na investigação.

<Video
  type="wistia"
  id="l65l4cqqhd"
/>

Clique em qualquer quadro no stack trace para ir direto para o arquivo e número de linha correspondentes. Se você estiver [associando referências git aos seus erros](#buildsha), o CodeStream abrirá uma guia do editor somente leitura do arquivo que acionou o erro no ambiente. Se você não estiver associando referências git, uma versão local do arquivo será aberta. Você não poderá clicar em quadros stack trace que representam código que não faz parte do seu repositório (por exemplo, uma biblioteca externa).

Para erros no monitoramento de serviços do browser você precisará [fazer upload de mapas de origem](/docs/browser/browser-monitoring/browser-pro-features/upload-source-maps-un-minify-js-errors/) para que o stack trace possa ser desminificado, permitindo que você pule para o código de cada quadro.

Ao navegar pelo stack trace, você pode encontrar o código que parece ser a origem do seu problema e iniciar uma discussão com o botão de comentários. O CodeStream menciona automaticamente a pessoa que tocou naquele código mais recentemente, tornando mais fácil para você trazer as pessoas certas para a discussão.

<img
  title="A comment with the most recent code contributor automatically mentioned."
  alt="A screenshot of a comment with the most recent code contributor automatically mentioned."
  src="/images/codestream_screenshot-crop_error-auto-mention.webp"
/>

Depois de identificar o problema, você poderá atribuir o erro ou atualizar o status do erro de `unresolved` para `resolved` ou `ignored`.

## Começando pela Errors Inbox [#errors-inbox]

Você pode acessar essa mesma experiência de erros diretamente de um erro na [Errors Inbox](/docs/errors-inbox/errors-inbox/) do New Relic. Ao visualizar um erro com stack trace, clique em <DNT>**Open in IDE**</DNT> para ir diretamente para o código no seu IDE.

<img
  title="A stack trace error in errors inbox with the &quot;Open in IDE button"
  alt="A screenshot of a stack trace error in errors inbox with the &quot;Open in IDE button.&quot;"
  src="/images/codestream_screenshot-crop_open-in-ide-codestream.webp"
/>

Observe também que as discussões são mantidas sincronizadas entre o CodeStream e a Errors Inbox, para que você possa participar de qualquer local.

### Associe SHAs de compilação ou tag de lançamento a erros [#buildsha]

Ao visualizar um erro no CodeStream, você poderá ver um build SHA ou uma tag de lançamento associada ao erro se ele não tiver uma referência git. CodeStream usa a referência git para combinar o erro stack trace específico com a versão do código em execução no ambiente que acionou o erro. Embora você não precise de uma referência git configurada para investigar o erro, lembre-se de que talvez você não esteja analisando a versão do código que o causou.

<img
  title="The git reference not configured warning message."
  alt="A screenshot of the git reference not configured warning message."
  src="/images/codestream_screenshot-crop_build-sha-not-configured.webp"
/>

Você pode usar uma variável de ambiente para informar ao agente New Relic <InlinePopover type="apm"/>o [commit sha](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection) associado a cada compilação do seu projeto. Você também pode usar a [tag de lançamento](https://git-scm.com/book/en/v2/Git-Basics-Tagging) associada à versão em execução do seu software.

Para APM, o commit sha e/ou a tag de liberação (`tags.commit` e `tags.releaseTag`) são adicionados como atributo no evento `Transaction` e `TransactionError` . Você pode usar variáveis de ambiente APM para definir esses atributos. Recomendamos definir uma ou ambas as variáveis como parte do pipeline de build:

* `NEW_RELIC_METADATA_COMMIT`: O commit sha. Você pode incluir tudo ou apenas os primeiros sete caracteres (por exemplo, `734713b`).
* `NEW_RELIC_METADATA_RELEASE_TAG`: uma tag de lançamento (como `v0.1.209` ou `release-209`). Isso tem a vantagem de ser legível por humanos.

Para saber mais sobre como definir essas variáveis, aqui estão os detalhes de configuração específicos para cada idioma:

* [Go](/docs/agents/go-agent/configuration/go-agent-configuration/)
* [Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file/)
* [.NET](/docs/agents/net-agent/configuration/net-agent-configuration/)
* [Node.js](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/)
* [PHP](/docs/agents/php-agent/configuration/php-agent-configuration/)
* [Python](/docs/agents/python-agent/configuration/python-agent-configuration/)

Se você tiver referências git configuradas, o CodeStream informará se a versão do código em que você está localmente não contém a referência associada ao erro. Nesse caso, você pode verificar a versão do código que contém essa referência para poder investigar e resolver o erro de maneira mais eficaz.

<img
  title="The git reference not found warning message."
  alt="A screenshot of the git reference not found warning message."
  src="/images/codestream_screenshot-crop_build-sha-not-found.webp"
/>

CodeStream também informará se o erro não tiver um stack trace associado a ele. Isso acontece com erros mais antigos quando o stack trace expirou no New Relic.
