---
title: Definir configurações de solicitação de rede móvel
tags:
  - Mobile monitoring settings
  - Network requests
metaDescription: 'Block or allow hostnames, create rules for status codes, and create aliases for hostnames.'
freshnessValidatedDate: never
translationType: machine
---

A página de configurações de solicitação de rede móvel pode ajudá-lo a personalizar como as métricas e os eventos da rede são relatados. Você pode [bloquear ou permitir nome do host](#blockallow-hostnames), [ignorar códigos de status HTTP de determinados hosts](#ignore-status-codes) e [criar aliases para renomear hosts ou agrupar subdomínios](#group-into-alias).

Para definir essas configurações, vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select a mobile app) > Settings > Network settings**</DNT>.

## Bloquear/permitir nome do host [#blockallow-hostnames]

Você pode permitir ou impedir que determinado nome do host seja monitorado. Por exemplo, se você quiser permitir apenas subdomínios de `ecommerce.com`:

1. Em

   <DNT>
     **Network settings page**
   </DNT>

   , selecione a guia

   <DNT>
     **Show only hostnames**
   </DNT>

   .

2. Clique em

   <DNT>
     **Add a hostname**
   </DNT>

   .

3. Insira o nome do host `*.ecommerce.com` e clique em

   <DNT>
     **Add to list**
   </DNT>

   .

<img
  title="Allow a hostname"
  alt="Allow a hostname"
  src="/images/mobile_screenshot-full_show-hostname.webp"
/>

Aguarde até 2 horas para que a regra seja aplicada.

## Ignorar códigos de status HTTP [#ignore-status-codes]

Você pode ignorar o código de status de erro HTTP específico em um nome do host. Por exemplo, se você quiser ignorar os erros `401`, `403` e `404` de todos os subdomínios `ecommerce.com` :

1. Em

   <DNT>
     **Network settings page**
   </DNT>

   , selecione a guia

   <DNT>
     **Status codes**
   </DNT>

   .

2. Clique em

   <DNT>
     **Create a status code rule**
   </DNT>

   .

3. Insira o host `*.ecommerce.com`.

4. Insira os códigos de status `401`, `403` e `404` e clique em

   <DNT>
     **Add to list**
   </DNT>

   .

<img
  title="Create a status code rule"
  alt="Create a status code rule in the UI"
  src="/images/mobile_screenshot-full_new-status-rule.webp"
/>

Aguarde até 2 horas para que a regra seja aplicada.

## Crie aliases para nome do host [#group-into-alias]

Você pode criar aliases para renomear ou agrupar o nome do host que fizer mais sentido para você. Por exemplo, se você quiser criar um alias que agrupe todos os subdomínios de `ecommerce.com`:

1. Na página

   <DNT>
     **Network settings**
   </DNT>

   , selecione a guia

   <DNT>
     **Aliases and groups**
   </DNT>

   .

2. Clique em

   <DNT>
     **Create an alias**
   </DNT>

   .

3. Insira `*.ecommerce.com` para agrupar todos os subdomínios de `ecommerce.com`.

4. Insira o alias `ecommerce.com` e clique em

   <DNT>
     **Save alias**
   </DNT>

   .

<img
  title="Create an alias"
  alt="create an alias"
  src="/images/mobile_screenshot-full_create-alias.webp"
/>

Aguarde até 2 horas para que a regra seja aplicada.

### Recomendações para usar curingas [#about-wildcards]

Ao usar `*` (um curinga), as regras de regex são um pouco diferentes. O curinga é usado para um segmento inteiro, ou os valores entre dois pontos em um nome do host (ou seja, o segmento inteiro para `hostname.1219.com` é `1219`).

Aqui estão alguns exemplos de uso bem-sucedido de curingas para criar um alias:

<table>
  <thead>
    <tr>
      <th>
        Anfitriões
      </th>

      <th>
        Alias
      </th>

      <th>
        Exemplo de domínio
      </th>

      <th>
        Resultado
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `192.168.*.100`
      </td>

      <td>
        LOCAL
      </td>

      <td>
        `192.168.10.100`
      </td>

      <td>
        LOCAL
      </td>
    </tr>

    <tr>
      <td>
        `tbr.*.something.com`
      </td>

      <td>
        tbr.\*.something.com
      </td>

      <td>
        `tbr.gh99898.something.com`
      </td>

      <td>
        tbr.\*.something.com
      </td>
    </tr>

    <tr>
      <td>
        `api1.mydomain.co.uk`
      </td>

      <td>
        API
      </td>

      <td>
        `api1.mydomain.co.uk`
      </td>

      <td>
        API
      </td>
    </tr>

    <tr>
      <td>
        `api2.mydomain.co.uk`
      </td>

      <td>
        API
      </td>

      <td>
        `api2.mydomain.co.uk`
      </td>

      <td>
        API
      </td>
    </tr>
  </tbody>
</table>

Agora que você viu alguns exemplos de como isso funciona, vejamos alguns exemplos do _que não funciona_.

<table>
  <thead>
    <tr>
      <th>
        Anfitriões
      </th>

      <th>
        Alias
      </th>

      <th>
        Exemplo de domínio
      </th>

      <th>
        Resultado
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `tbr.gh*.something.com`
      </td>

      <td>
        tbr.gh\*.something.com
      </td>

      <td>
        `tbr.gh99898.something.com`
      </td>

      <td>
        tbr.gh99898.something.com
      </td>
    </tr>

    <tr>
      <td>
        `cs-*.company.jp`
      </td>

      <td>
        cs-\*.company.jp
      </td>

      <td>
        `cs-23.company.jp`
      </td>

      <td>
        cs-23.company.jp
      </td>
    </tr>

    <tr>
      <td>
        `cs-*.company.jp`
      </td>

      <td>
        customer_survey
      </td>

      <td>
        `cs-*.company.jp`
      </td>

      <td>
        customer_survey
      </td>
    </tr>
  </tbody>
</table>

Lembre-se de que um curinga afetará apenas um segmento inteiro. Como `*` só pode ser usado para um segmento completo, `*` aqui será interpretado literalmente e não como um curinga.
