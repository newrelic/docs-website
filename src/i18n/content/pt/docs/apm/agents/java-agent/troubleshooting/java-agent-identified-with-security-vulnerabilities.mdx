---
title: Agente Java identificado com vulnerabilidades de segurança
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
freshnessValidatedDate: never
translationType: machine
---

## Problema

Quando uma verificação de segurança é executada, ela relata vulnerabilidades para o agente Java New Relic (`newrelic.jar`).

## Causa

Embora qualquer produto de software possa ter vulnerabilidades de segurança, o agente Java da New Relic pode ser identificado erroneamente por produtos de segurança. Os produtos de segurança que verificam determinados padrões de string em arquivos podem sinalizar erroneamente módulos de instrumentação que fazem parte do agente como biblioteca vulnerável.

Esses módulos de instrumentação são arquivos JAR nomeados de acordo com a estrutura de software projetada para o instrumento e suas versões. Eles não contêm código da estrutura, mas podem conter classes com o mesmo nome. Algumas ferramentas de verificação de segurança detectam esses nomes/versões e os interpretam como sendo a própria framework do software, quando é apenas um módulo de instrumentação.

Eles são encontrados dentro de `newrelic.jar` no pacote `instrumentation` ou dentro de `newrelic-security-agent.jar` no pacote `instrumentation-security` .

Os avisos para qualquer arquivo jar dentro de `newrelic.jar` ou `newrelic-security-agent.jar` são falsos positivos e devem ser suprimidos.

## Solução

Suprima os avisos falso positivo provenientes do pacote `instrumentation` em `newrelic.jar` e do pacote `instrumentation-security` em `newrelic-security-agent.jar` com sua ferramenta de verificação, incluindo todos os arquivos JAR cujos nomes correspondam aos módulos listados no [repositório do agente Java New Relic](https://github.com/newrelic/newrelic-java-agent/tree/main/instrumentation) ou em o [New Relic SecurityAgent para Java](https://github.com/newrelic/csec-java-agent/tree/main/instrumentation-security).

Por exemplo, falso positivo descoberto pelo projeto `DependencyCheck` em [github.com/jeremylong/DependencyCheck](https://github.com/jeremylong/DependencyCheck) pode ser suprimido com:

```jar
<suppress>
    <notes><![CDATA[newrelic-agent false positives due to the instrumentation package]]></notes>
    <filePath regex="true">.*newrelic.*\.jar[\\\/]instrumentation.*\.jar</filePath>
    <cpe regex="true">.*</cpe>
</suppress>
```

Consulte seu fornecedor de verificação de segurança para obter a configuração apropriada para suprimir o falso positivo.
