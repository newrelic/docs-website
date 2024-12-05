---
title: Desinstale (remova) o C SDK
tags:
  - Agents
  - C SDK
  - Install and configure
metaDescription: How to temporarily disable the New Relic C SDK or uninstall and remove it completely from your application's code library.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO DE EOL"
>
  A partir de abril de 2022, não ofereceremos suporte ao recurso C SDK. Para obter mais detalhes, consulte nossa [postagem no Fórum de suporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

Siga estes procedimentos conforme apropriado para desabilitar temporariamente o C SDK na biblioteca de códigos do seu aplicativo ou removê-lo completamente.

## Escreva instrumentação que você pode desativar [#disable]

Como uma biblioteca C que fornece acesso direto à API New Relic, o C SDK não pode ser ativado ou desativado diretamente. No entanto, você pode escrever seu código para o SDK para que uma rápida recompilação e implantação possam ativar ou desativar sua instrumentação.

Uma abordagem é usar uma macro `#ifdef` . Ao envolver toda a sua instrumentação em macros `#ifdef` e definir o valor de `YOURNAMESPACE_NEWRELIC_ENABLED` com seu sistema de compilação, você poderá ativar ou desativar rapidamente a instrumentação do New Relic em seus programas baseados em C/C++, recompilando-os e, em seguida, reimplantando o aplicativo .

<CollapserGroup>
  <Collapser
    id="ifdef"
    title="Usando macros #ifdef para desabilitar a instrumentação C SDK"
  >
    ```c
    // replace `YOURNAMESPACE` with something that's unique to
    // your company/project to ensure a unique name
    #ifdef YOURNAMESPACE_NEWRELIC_ENABLED
    int priority = 50;
    newrelic_txn_t* txn = newrelic_start_non_web_transaction(app, transaction_name);

    ...

    if (err) {
      newrelic_notice_error(txn, priority, "Meaningful error message", "Error.class");
    }

    ...

    newrelic_end_transaction(&txn);
    #endif
    ```
  </Collapser>
</CollapserGroup>

## Desinstalar completamente [#uninstall]

Para remover completamente o SDK C do New Relic da biblioteca de códigos do seu aplicativo:

1. Remova a vinculação a `libnewrelic.a` no seu sistema de compilação.
2. Remova todas as chamadas de API do New Relic do código do seu aplicativo.
3. Recompile e reimplante seu aplicativo.
