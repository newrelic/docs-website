---
title: Nenhum dado aparece (C SDK)
type: troubleshooting
tags:
  - Agents
  - C SDK
  - Troubleshooting
metaDescription: 'If your app is being monitored by the New Relic C SDK but isn''t reporting data, follow these troubleshooting tips.'
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="AVISO DE EOL"
>
  A partir de abril de 2022, não ofereceremos suporte ao recurso C SDK. Para obter mais detalhes, consulte nossa [postagem no Fórum de suporte](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744).
</Callout>

## Problema

Você [instalou o SDK C da New Relic](/docs/install-c-agent-compile-link-your-code), gerou tráfego para seu aplicativo e esperou alguns minutos, mas ainda não vê o relatório de dados no APM.

## Solução

Essas dicas de resolução de problemas são ordenadas aproximadamente do problema mais comum para o menos comum.

1. Verifique se há erros na saída no [C SDK e no arquivo de log do daemon](/docs/generate-logs-troubleshooting-c-sdk) .

2. Certifique-se de que o [processo daemon (`newrelic-daemon`)](/docs/install-c-sdk-compile-link-your-code#daemon) esteja ativo e em execução para que seja chamado <DNT>**before**</DNT> iniciando seu aplicativo instrumentado.

3. Verifique o nome do seu aplicativo e <InlinePopover type="licenseKey"/>na [configuração do C SDK](/docs/c-sdk-configuration).

4. Certifique-se de ligar:

   * [`newrelic_create_app()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a61dd90439ae3cc5060021f6ab4701132)
   * [`newrelic_start_web_transaction()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#adbf7c1fa57482f6e0a7f291e0b5ec80f) ou [`newrelic_start_non_web_transaction()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a88648cc287f8d7e371139dc3809b7afb) conforme aplicável
   * [`newrelic_end_transaction()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#acbd88933d620c21b7b19f12b6f042da8)

   Certifique-se também de que nenhuma dessas chamadas retorne `false` ou `NULL`.

5. Se necessário, verifique a versão do C SDK usando [`newrelic_version()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a8aec87e54af38e466fc5f715ef591d10) e [atualize sua biblioteca do C SDK](/docs/update-your-c-sdk-library) para a versão mais recente.
