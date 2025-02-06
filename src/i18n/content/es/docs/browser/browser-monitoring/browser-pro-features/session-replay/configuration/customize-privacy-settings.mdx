---
title: (Opcional) Configurar ajustes de privacidad
metaDescription: Customizing Privacy Settings for user interactions to debug faster and improve page performance.
freshnessValidatedDate: '2024-12-19T00:00:00.000Z'
translationType: machine
---

La privacidad del usuario es una consideración fundamental al grabar la repetición de la sesión. Aunque la configuración predeterminada está diseñada para proteger información confidencial, es posible que necesite ajustar la configuración de privacidad para satisfacer necesidades específicas. Esta sección explica cómo enmascarar, bloquear o ignorar ciertos datos para cumplir con los estándares de privacidad y mantener la funcionalidad de Session Replay.

De forma predeterminada, todo el texto y las entradas se reemplazan con asteriscos. A continuación se muestra un ejemplo de cómo se ve una repetición con privacidad predeterminada:

<img title="Example of default privacy settings" alt="Example of default privacy settings" src="/images/browser_screenshot-full_text-masking-example.webp" />

Si esta configuración es adecuada, pase al siguiente paso.

Si necesita personalizar qué contenido o entrada del usuario se captura, tiene opciones para enmascarar, bloquear o ignorar clases y atributos específicos de contenido o entrada del usuario. Asegúrese de consultar con su equipo de privacidad antes de cambiar la configuración de privacidad.

## Enmascarar texto sensible [#mask-text]

Puede enmascarar texto confidencial, lo que significa que el texto se reemplazará con asteriscos (\*). Por ejemplo, puede enmascarar el ID de cuenta de un usuario que se muestra en una URL.

Para especificar qué entrada debe enmascararse, tiene algunas opciones:

* En la página <DNT>**Application settings**</DNT> , agregue sus propios selectores CSS o marque las casillas de enmascaramiento. Tenga en cuenta que el uso de selectores enmascarados no enmascarará la entrada del usuario, por lo que si necesita ocultar la entrada del usuario, le recomendamos emplear selectores de bloque.

  <img title="Mask settings" alt="Screenshot of mask settings in the ui" src="/images/browser_screenshot-full_mask-settings.webp" />

* Agregue nuestra clase CSS `nr-mask` o atributo `data-nr-mask` al HTML de su sitio web.

  Por ejemplo, para ocultar un ID de cuenta para que no se muestre en la URL, agregue `nr-mask` al `<div>` que contiene el ID de cuenta:

  `<div>Account ID: <span class="nr-mask">99881123</span></div>`

Estas opciones emplean un asterisco (\*) para enmascarar todo el texto en ese elemento, ocultando el texto real pero revelando la cantidad de caracteres ingresados. Sin embargo, los asteriscos no son números válidos, por lo que enmascarar campos específicos del tipo de número, como números de teléfono o de tarjetas de crédito, dará como resultado un campo en blanco en una repetición.

## Bloquear contenido del sitio [#block-content]

Puedes bloquear secciones enteras de contenido en tu sitio, lo que significa que la sección aparecerá como un marcador de posición vacío en Session Replay. Por ejemplo, si tiene una imagen en su página web Acerca de nosotros y no necesita capturarla, puede bloquear la clase que contiene la imagen.

Para bloquear clases o atributos específicos, tienes algunas opciones:

* En la página de configuración de la aplicación, agregue sus selectores CSS en el campo \**Bloquear selectores* .

  <img title="Block Selectors" alt="Screenshot of session replay settings" src="/images/browser_screenshot-full_session-replay-app-settings.webp" />

* Agregue manualmente nuestra clase CSS `nr-block` o atributo `data-nr-block` al HTML de su página web. Por ejemplo, si desea bloquear texto e imágenes irrelevantes de Session Replay, agregue `nr-block` a `<div class>`:

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

## Ignorar la entrada del usuario [#ignore-input]

Puede ignorar los cambios en un campo de entrada del usuario, lo que significa que el campo de entrada seguirá mostrar en la repetición, pero no mostrará los cambios en el valor. Por ejemplo, puede ignorar la clase que contiene los campos de dirección de email o tarjeta de crédito. Los campos de entrada de contraseña siempre están enmascarados. 

Para ignorar la entrada, agregue la clase CSS `nr-ignore` al nombre de clase del campo de entrada. Por ejemplo, si desea ignorar información confidencial en una página de facturación, agregue `class="nr-ignore"` a `<input type>`:

```html
<div class="sensitive-information">
  <h2>Sensitive Information</h2>
  <p>Credit card number: <input type="number" class="nr-ignore" id="creditCardNumber"></p>
  <p>Expiration date: <input type="number" class="nr-ignore" id="expirationDate"></p>
  <p>CVV code: <input type="number" class="nr-ignore" id="cvvCode"></p>
</div>
```