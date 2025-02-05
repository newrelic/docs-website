---
title: (Opcional) Definir configurações de privacidade
metaDescription: Customizing Privacy Settings for user interactions to debug faster and improve page performance.
freshnessValidatedDate: '2024-12-19T00:00:00.000Z'
translationType: machine
---

A privacidade do usuário é uma consideração crítica ao gravar o Session Replay. Embora as configurações padrão sejam projetadas para proteger informações confidenciais, pode ser necessário ajustar as configurações de privacidade para atender a necessidades específicas. Esta seção explica como ocultar, bloquear ou ignorar determinados dados para cumprir com os padrões de privacidade e, ao mesmo tempo, manter a funcionalidade do Session Replay.

Por padrão, todos os textos e entradas são substituídos por asteriscos. Aqui está um exemplo da aparência de um replay com privacidade padrão:

<img title="Example of default privacy settings" alt="Example of default privacy settings" src="/images/browser_screenshot-full_text-masking-example.webp" />

Se essa configuração for apropriada, vá para a próxima etapa.

Se precisar personalizar qual conteúdo ou entrada do usuário é capturado, você terá opções para mascarar, bloquear ou ignorar classes específicas e atributos de conteúdo ou entrada do usuário. Certifique-se de verificar com sua equipe de privacidade antes de alterar as configurações de privacidade.

## Mascarar texto sensível [#mask-text]

Você pode mascarar texto confidencial, o que significa que o texto será substituído por asteriscos (\*). Por exemplo, você pode mascarar o ID da conta de um usuário exibido em um URL.

Para especificar qual entrada deve ser mascarada, você tem algumas opções:

* Na página <DNT>**Application settings**</DNT> , adicione seus próprios seletores CSS ou marque as caixas de mascaramento. Observe que usar seletores de bloco não ocultará a entrada do usuário, portanto, se você precisar ocultar a entrada do usuário, recomendamos usar seletores de bloco.

  <img title="Mask settings" alt="Screenshot of mask settings in the ui" src="/images/browser_screenshot-full_mask-settings.webp" />

* Adicione nossa classe CSS `nr-mask` ou atributo `data-nr-mask` ao HTML da sua página da web.

  Por exemplo, para mascarar a exibição de um ID de conta no URL, adicione `nr-mask` ao `<div>` que contém o ID da conta:

  `<div>Account ID: <span class="nr-mask">99881123</span></div>`

Essas opções usam um asterisco (\*) para mascarar todo o texto naquele elemento, ocultando o texto real, mas revelando o número de caracteres inseridos. No entanto, asteriscos não são números válidos, portanto, mascarar campos específicos de tipo numérico, como números de telefone ou de cartão de crédito, resultará em um campo em branco na reprodução.

## Bloquear conteúdo do site [#block-content]

Você pode bloquear seções inteiras de conteúdo do seu site, o que significa que a seção aparecerá como um espaço vazio reservado no Session Replay. Por exemplo, se você tiver uma imagem em sua página Sobre nós e não precisar capturá-la, poderá bloquear a classe que contém a imagem.

Para bloquear aulas ou atributos específicos, você tem algumas opções:

* Na página Configurações do aplicativo, adicione seus seletores CSS no campo \**Seletores de bloco* .

  <img title="Block Selectors" alt="Screenshot of session replay settings" src="/images/browser_screenshot-full_session-replay-app-settings.webp" />

* Adicione manualmente nossa classe CSS `nr-block` ou atributo `data-nr-block` ao HTML da sua página da web. Por exemplo, se você quiser bloquear textos e imagens irrelevantes do Session Replay, adicione `nr-block` a `<div class>`:

  ```html
  <html>
  <head>
    <title>Sample image and text</title>
  </head>
  <body>
    <div class="image-text-container nr-block">
      <img src="https://example.com/image.png" alt="Image description">
    </div>
  </body>
  </html>
  ```

## Ignorar a entrada do usuário [#ignore-input]

Você pode ignorar as alterações em um campo de entrada do usuário, o que significa que o campo de entrada ainda será exibido na reprodução, mas você não exibirá as alterações no valor. Por exemplo, você pode ignorar a classe que contém o endereço de e-mail ou os campos do cartão de crédito. Os campos de entrada de senha são sempre mascarados. 

Para ignorar a entrada, adicione a classe CSS `nr-ignore` ao nome da classe do campo de entrada. Por exemplo, se quiser ignorar informações confidenciais em uma página de faturamento, adicione `class="nr-ignore"` a `<input type>`:

```html
<div class="sensitive-information">
  <h2>Sensitive Information</h2>
  <p>Credit card number: <input type="number" class="nr-ignore" id="creditCardNumber"></p>
  <p>Expiration date: <input type="number" class="nr-ignore" id="expirationDate"></p>
  <p>CVV code: <input type="number" class="nr-ignore" id="cvvCode"></p>
</div>
```