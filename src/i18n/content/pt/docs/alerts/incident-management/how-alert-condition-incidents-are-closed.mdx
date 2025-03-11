---
title: Como as condições do alerta incidente são encerradas
tags:
  - Alerts
  - Alert incidents
metaDescription: Read about how you can close alerts incidents manually and automatically.
freshnessValidatedDate: never
translationType: machine
---

Este documento explica as diferentes maneiras pelas quais o incidente pode ser encerrado.

## Como o incidente fecha automaticamente [#close-automatic]

Um incidente será encerrado automaticamente quando o sinal de destino retornar a um estado sem violação pelo período de tempo indicado no limite da condição. Esse tempo de espera é chamado de [período de recuperação](/docs/using-new-relic/welcome-new-relic/get-started/glossary#recovery-period).

Por exemplo: se o comportamento de violação for "pontuação Apdex abaixo de 0,80 pelo menos uma vez a cada 5 minutos", o incidente será encerrado automaticamente quando a pontuação Apdex for igual ou superior a 0,80 por 5 minutos consecutivos. O mesmo se aplica a um limite “por pelo menos x minutos”: são necessários x minutos de comportamento sem violação para encerrar automaticamente o incidente.

Quando um incidente é encerrado automaticamente:

1. O timestamp de fechamento é retroativo ao início do período de recuperação.
2. A avaliação é redefinida e reiniciada a partir do momento em que o incidente anterior terminou.

Todas as condições têm uma configuração [de limite de tempo de incidente](#time-limit) que forçará automaticamente o fechamento de um incidente de longa duração.

## Estabeleça um limite de tempo para incidentes duradouros [#time-limit]

A configuração do limite de tempo do incidente forçará automaticamente o encerramento de um incidente de longa duração após o número de dias/horas que você selecionar. Isto é mais útil para entidades efêmeras que, quando desaparecem, causam um incidente contínuo que não será encerrado automaticamente.

<DNT>
  **Limits and Defaults**
</DNT>

* Todos os incidentes de alerta terão um limite de tempo de incidente aplicado a eles. A maioria das condições do alerta permitirá que você edite este campo.
* O valor padrão, caso não seja fornecido durante a configuração, é 3 dias (24 horas para condições de infraestrutura).
* O limite de tempo do incidente para condições não relacionadas à infraestrutura pode ser definido em 5 minutos e em 30 dias. Se, por algum motivo, o sinal ainda estiver violando em 30 dias, o incidente será encerrado e um novo incidente será aberto. As condições da infraestrutura podem ser definidas para os seguintes horários: 1, 2, 4, 8, 12, 24, 48 ou 72.

<Callout variant="tip">
  Essa configuração está relacionada à [configuração de problema inativo](/docs/alerts-applied-intelligence/applied-intelligence/incident-intelligence/user-settings/#auto-close-issue-window).

  Quando os períodos de tempo nessas duas configurações são diferentes, nosso sistema utiliza o período de tempo mais curto, independentemente da configuração. Por exemplo, se a configuração de tempo de fechamento do incidente aberto for 2 dias e a configuração de tempo de problema inativo for 3 dias, nosso sistema esperará 2 dias antes de encerrar o problema.
</Callout>

<DNT>
  **Examples:**
</DNT>

* Você definiu o limite de tempo do incidente para 12 horas. Se esse incidente durar 12 horas, será encerrado às 12 horas e a avaliação da condição daquela entidade será reiniciada.
* Sua JVM tem um pico de CPU e isso cria um incidente. A JVM então falha e é substituída por uma nova JVM. Se você não tiver definido um limite de tempo para o incidente, o incidente da JVM com falha nunca será encerrado.
