---
title: Errores de monitor sin secuencia de comandos
tags:
  - Synthetics
  - Synthetic monitoring
  - Troubleshooting
metaDescription: Troubleshooting tips if your New Relic's synthetic ping or simple monitor reports an error.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Tu [ping Sintético o monitor simple](/docs/synthetics/new-relic-synthetics/getting-started/types-synthetics-monitors) reportó uno de estos errores. Para errores de monitor con secuencias de comandos, consulte [errores no relacionados con ping](/docs/synthetics/new-relic-synthetics/troubleshooting/simple-scripted-or-scripted-api-non-ping-errors).

## Soluciones [#solution]

Estos son algunos de los mensajes de error monitor no programados más comunes.

<CollapserGroup id="non-scripted-errors">
  <Collapser
    className="freq-link"
    id="exceed-duration"
    title="ERROR: El trabajo se agotó después de 65 segundos"
  >
    ### Problema

    Su ping expiró después de 65 segundos, el límite de tiempo de duración de verificación no configurable.

    ### Solución

    El límite de tiempo de 65 segundos no es configurable. Los pings que superan los 65 segundos pueden deberse a la latencia del servidor de destino. Investigue posibles problemas a lo largo de la ruta de red entre nuestros servidores y el suyo, ya que esto puede indicar un problema experimentado por un usuario real de su aplicación.

    ### Causa

    El monitor de ping primero realizará una solicitud `HEAD` . Si esta solicitud falla por algún motivo o alcanza el tiempo de espera de conexión HTTP de 30 segundos para el monitor de ping, se realiza una solicitud `GET` posterior. Este error ocurre cuando las solicitudes `HEAD` y `GET` superan los 30 segundos, generalmente debido a la latencia del servidor.
  </Collapser>

  <Collapser
    className="freq-link"
    id="host-connect-timeout"
    title="NetworkError: Connect to (HOST) [HOST./IP ADDRESS] failed: connect timed out"
  >
    ### Problema

    Las solicitudes HTTP durante la verificación excedieron el límite de tiempo de espera de conexión TCP de 30 segundos no configurable.

    ### Solución

    El límite de tiempo de 30 segundos no es configurable. Investigue posibles problemas a lo largo de la ruta de red entre nuestros servidores y el suyo, ya que esto puede indicar un problema experimentado por un usuario real de su aplicación.

    ### Causa

    Este error indica un problema para llegar a su sitio desde la ubicación donde se realizó la verificación de Sintético.
  </Collapser>

  <Collapser
    className="freq-link"
    id="host-connect-refused"
    title="NetworkError: Connect to (HOST) [HOST./IP ADDRESS] failed: Connection refused"
  >
    ### Problema

    El servidor de destino rechazó la conexión desde el cliente HTTP del monitor de ping de Sintético.

    ### Solución

    [Agregue nuestras direcciones IP de monitoreo sintético a su lista de 'permitidos'](/docs/synthetics/new-relic-synthetics/administration/synthetics-public-minion-ips), para garantizar que el tráfico de nuestro monitor sintético pueda llegar al servidor de destino.

    ### Causa

    Es probable que el servidor de destino esté bloqueando o limitando la velocidad del tráfico de Sintético.
  </Collapser>

  <Collapser
    className="freq-link"
    id="xxx-response"
    title="HTTPError: el servidor respondió con el código de respuesta HTTP XXX"
  >
    ### Problema

    El monitor Sintético encontró un código de estado incorrecto, generalmente un código de respuesta que no está en el rango 2XX/3XX.

    ### Solución

    Verifique el registro del lado del servidor para determinar [por qué se envió el código de respuesta](https://tools.ietf.org/html/rfc7231#section-6.1). Para ayudar a identificar el tráfico de Sintético en su servidor, todo el tráfico de monitoreo sintético incluye un [encabezado de solicitud HTTP`X-Abuse-Info` ](/docs/synthetics/new-relic-synthetics/administration/identify-synthetics-requests-your-app)y proporcionamos una [lista de direcciones IP de origen](/docs/synthetics/new-relic-synthetics/administration/synthetics-public-minion-ips) para todo el tráfico de monitoreo sintético.

    ### Causa

    La causa depende del [código de respuesta enviado](https://tools.ietf.org/html/rfc7231#section-6.1).
  </Collapser>

  <Collapser
    className="freq-link"
    id="ssl-error"
    title="Error de verificación SSL: (ERROR)"
  >
    ### Problema

    Su monitor devuelve un SSLVerificationError.

    ### Solución

    Vaya a <DNT>**[one.newrelic.com > Synthetic monitoring](https://one.newrelic.com/synthetics-nerdlets)**</DNT> > (seleccione un monitor) > <DNT>**General > Advanced options**</DNT> y luego desactive <DNT>**Verify SSL check**</DNT>.

    ### Causa

    Los errores SSLVerificationError son el resultado de un error opcional <DNT>**Verify SSL check**</DNT> en el host de destino.

    `SSL verification failed during execution for domain <TARGET_URL>` Los fallos indican que la URL proporcionada no es HTTPS o no redirige a un extremo HTTPS.

    `SSLVerificationError: (<ERROR CODE>) <ERROR>` Los errores se recuperan directamente del comando `openssl` y, a menudo, indican un problema de configuración SSL legítimo en el sitio de destino.
  </Collapser>

  <Collapser
    className="freq-link"
    id="response-error"
    title="ResponseValidationError: la respuesta no contenía la cadena esperada"
  >
    ### Problema

    El valor de cadena incluido en el campo opcional `Response Validation` del monitor Sintético no se encontró en la respuesta del servidor de destino.

    ### Solución

    Para solucionar problemas:

    * Verifique el [cronograma de resultados fallidos](/docs/synthetics/new-relic-synthetics/using-monitors/view-monitor-results#understanding) para asegurarse de que el extremo donde se espera el texto de validación de la respuesta sea el último extremo que se solicita.

    * Intente realizar una solicitud curl contra el objetivo extremo para ver si se devuelve el cuerpo de respuesta esperado.

    * Asegúrese de que su extremo no tenga políticas que devuelvan contenido diferente según el contenido del encabezado o la actividad de la solicitud. Si es así, utilice un browser con secuencias de comandos para [falsificar una cadena de encabezado específica](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers#customize-user-agent).

    * Si está utilizando un browser simple para monitorear una página cuyo contenido se carga a través de JavaScript después de que se activa el evento de carga de la página, considere usar un script de monitor de browser en su lugar. Puede programar un browser con secuencias de comandos para [que espere a que aparezcan elementos específicos](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers#wait-page-element) en una página antes de interactuar con ellos.

      ### Causa

      La causa depende del tipo de monitor:

    * Monitor de ping: el valor de la cadena debe estar presente en el primer MB (10^6 bytes) del cuerpo de la respuesta.

    * Browser simple: la cadena debe estar visible en la página cuando se activa el evento de carga de la página.
  </Collapser>

  <Collapser
    className="freq-link"
    id="networkerror-timeout"
    title="Error de red: se agotó el tiempo de lectura"
  >
    ### Problema

    El cliente del monitor pudo establecer una conexión HTTP con el sitio de destino, pero luego excedió el tiempo de espera de lectura de 30 segundos mientras esperaba una respuesta.

    ### Solución

    Para solucionar problemas:

    * Investigue el rendimiento del servidor de destino durante el período de tiempo en que se observó el problema.

    * Investigue posibles problemas a lo largo de la ruta de red entre nuestros servidores y el suyo, ya que esto puede indicar un problema experimentado por un usuario real de su aplicación.

      ### Causa

      Esto indica un problema con el servidor de destino respondiendo al cliente HTTP del monitor Sintético, o latencia de red entre su servidor y el nuestro.
  </Collapser>

  <Collapser
    className="freq-link"
    id="networkerror-socket-closed"
    title="Error de red: el socket está cerrado"
  >
    ### Problema

    El cliente HTTP del monitor Sintético pudo establecer una conexión con el servidor de destino. Luego, el servidor de destino cerró la conexión sin obtener respuesta.

    ### Solución

    [Agregue nuestras direcciones IP de monitoreo sintético a su lista de 'permitidos'](/docs/synthetics/new-relic-synthetics/administration/synthetics-public-minion-ips), para garantizar que el tráfico de nuestro monitor sintético pueda llegar al servidor de destino.

    ### Causa

    La infraestructura perimetral a veces implementa medidas como esta para que un extremo de aplicación maneje el tráfico que infringe políticas de comportamiento como la limitación de velocidad.
  </Collapser>

  <Collapser
    className="freq-link"
    id="networkerror-host-unreachable"
    title="NetworkError: No hay ruta al host (Host inalcanzable)"
  >
    ### Problema

    El cliente de monitoreo sintético pudo resolver la dirección IP del host de destino, pero no pudo encontrar una ruta hacia el host de destino para establecer una conexión.

    ### Solución

    Si el error ocurre en una ubicación de monitoreo sintético público, asegúrese de que los registros DNS para este host se resuelvan en una dirección IP accesible.

    Si la falla ocurre en una ubicación privada de monitoreo sintético, asegúrese de que la configuración de red del minion privado esté configurada correctamente y que el nombre de host de destino se pueda resolver y acceder a través de la interfaz de línea de comando virtual del minion privado.

    ### Causa

    Esto ocurre cuando el nombre de host de destino se resuelve en una dirección IP no enrutable según RFC 1918.
  </Collapser>

  <Collapser
    className="freq-link"
    id="httperror-redirects"
    title="HTTPError: el servidor nos envió demasiadas redirecciones (20)"
  >
    ### Problema

    El cliente del monitor Sintético fue redirigido (observando códigos de respuesta 301 o 302) 20 veces al realizar una solicitud al extremo objetivo.

    ### Solución

    Asegúrese de que el objetivo extremo redirija las solicitudes de los clientes menos de 20 veces. Si esto solo ocurre dentro de New Relic, vuelva a crear el problema fuera de New Relic para solucionar la causa raíz. Utilice un cliente similar para realizar solicitudes contra el objetivo extremo:

    * Monitor de ping: cliente HTTP similar a curl.

    * Browser simple y monitor de browser con script: instancia de Chrome 60 en una máquina virtual (VM) Ubuntu 14.04.5.

    * Monitor de API con secuencia de comandos: [utilice el cliente HTTP de solicitud para Node.js.](https://github.com/request/request)

      ### Causa

      Esto ocurre cuando el extremo monitoreado sirve efectivamente un bucle de redireccionamiento al monitor Sintético: la respuesta inicial redirige a otra URL que redirige a otra URL, etc.
  </Collapser>

  <Collapser
    className="freq-link"
    id="networkerror-resolution"
    title="NetworkError: Error en la resolución de DNS para el host: (HOST)"
  >
    ### Problema

    El cliente HTTP del monitor Sintético no pudo resolver el nombre de host de destino.

    ### Solución

    <DNT>**Private synthetic monitoring's locations:**</DNT> Confirme que la configuración de red para el minion sea correcta. Si el nombre de host de destino es interno, asegúrese de que el minion esté utilizando el servicio DNS interno de su red que pueda resolver el host. El minion privado en contenedor y los contenedores de ejecución que genera en el host (para ejecutar comprobaciones que no sean de ping) deben heredar la configuración DNS del host `/etc/resolv.conf`.

    <DNT>**Docker:**</DNT> Los argumentos de red como `–dns` o `-network` utilizados en el comando docker run en el minion privado en contenedor solo serán utilizados por el contenedor minion, pero no por los contenedores del ejecutor. Si el DNS apunta a la interfaz de bucle invertido, como `127.0.0.1`, defina una configuración de DNS en el [nivel del daemon de Docker ](https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file)o utilice una herramienta como `dnsmasq` para asegurarse de que el ejecutor reenvíe las solicitudes de DNS en la interfaz del puente de la ventana docker .

    <DNT>**Public synthetic monitoring locations:**</DNT> Asegúrese de que los servicios DNS públicos, como el DNS público de Google y el DNS proporcionado por Amazon, puedan buscar el registro DNS del sitio de destino.

    ### Causa

    Nuestras ubicaciones públicas de monitoreo sintético utilizan el DNS público de Google y el DNS proporcionado por Amazon. Si la resolución DNS del host de destino falla en nuestras ubicaciones públicas de monitoreo sintético, es probable que se trate de un problema que enfrenta otro usuario.

    Si observa fallas de monitor relacionadas con la resolución de DNS en una ubicación privada de monitoreo sintético, esto generalmente se debe a que el minion privado de esa ubicación tiene una configuración de red no válida.
  </Collapser>

  <Collapser
    className="freq-link"
    id="blockedrequesterror-url"
    title="Error de solicitud bloqueada: (URL)"
  >
    ### Problema

    El dominio objetivo está bloqueado por monitoreo sintético.

    ### Solución

    Para desbloquear el dominio, debe utilizar un monitor de browser con script y [realizar llamadas manualmente en su script](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers#unblock-service).

    ### Causa

    El monitoreo sintético excluye específicamente los scripts para servicios de análisis populares como Google Analytics. Esto garantiza que sus herramientas de análisis sigan recibiendo datos precisos, incluso con miles de monitores revisando su sitio web cada mes.
  </Collapser>
</CollapserGroup>
