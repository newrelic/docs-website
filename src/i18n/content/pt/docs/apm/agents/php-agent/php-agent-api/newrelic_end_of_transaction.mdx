---
title: newrelic_end_of_transaction (API do agente PHP)
type: apiDoc
shortDescription: 'Pare de cronometrar a transação atual, mas continue instrumentando-a.'
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: New Relic PHP agent API call to stop timing a transaction (but continue instrumenting it). Useful for streamed data.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```php
newrelic_end_of_transaction()
```

Pare de cronometrar a transação atual, mas continue instrumentando-a.

## Requisitos

Compatível com todas as versões do agente.

## Descrição

Pare de cronometrar a transação da web imediatamente. Útil quando uma página é concluída com código de aplicativo e está prestes a transmitir dados (download de arquivo, streaming de áudio ou vídeo e assim por diante) e você não deseja que o tempo de streaming seja contado como parte do tempo de execução da transação. O agente envia dados para o daemon no final da transação.

Isso é especialmente relevante quando o tempo necessário para concluir a operação está completamente fora dos limites do seu aplicativo. Por exemplo, um usuário em uma conexão muito lenta pode levar muito tempo para baixar até mesmo arquivos pequenos, e você não gostaria que esse tempo de download distorcesse o tempo real de transação.

<Callout variant="tip">
  Compare [`newrelic_end_transaction()`](/docs/agents/php-agent/php-agent-api/newrelic_end_transaction), que encerra totalmente a instrumentação.
</Callout>

## Parâmetro

Esta chamada não aceita nenhum parâmetro.

## Exemplos

### Pare o tempo após dados de streaming \[#streaming example]

```php
function example() { 
    // computational logic
    if (extension_loaded('newrelic')) { // Ensure PHP agent is available
        newrelic_end_of_transaction(); // Used to stop recording the transaction after computing for the transaction is complete, typically when streaming data 
    }
    //streaming data
}
```
