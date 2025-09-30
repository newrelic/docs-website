---
title: Erros de monitor sem script
tags:
  - Synthetics
  - Synthetic monitoring
  - Troubleshooting
metaDescription: Troubleshooting tips if your New Relic's synthetic ping or simple monitor reports an error.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Seu [ping Sintético ou monitor simples](/docs/synthetics/new-relic-synthetics/getting-started/types-synthetics-monitors) relatou um desses erros. Para erros de monitor com script, consulte [erros sem ping](/docs/synthetics/new-relic-synthetics/troubleshooting/simple-scripted-or-scripted-api-non-ping-errors).

## Soluções [#solution]

Estas são algumas das mensagens de erro de monitor sem script mais comuns.

<CollapserGroup id="non-scripted-errors">
  <Collapser
    className="freq-link"
    id="exceed-duration"
    title="ERRO: O trabalho expirou após 65 segundos"
  >
    ### Problema

    Seu ping expirou após 65 segundos, o limite de tempo de duração da verificação não configurável.

    ### Solução

    O limite de tempo de 65 segundos não é configurável. Pings que excedem 65 segundos podem ser resultado da latência do servidor de destino. Investigue possíveis problemas ao longo do caminho de rede entre nossos servidores e o seu, pois isso pode indicar um problema enfrentado pelo usuário real da sua aplicação.

    ### Causa

    O monitor de ping executará primeiro uma solicitação `HEAD` . Se esta solicitação falhar por qualquer motivo ou atingir o tempo limite de conexão HTTP de 30 segundos para o monitor de ping, uma solicitação `GET` subsequente será executada. Este erro ocorre quando a solicitação `HEAD` e `GET` excedem 30 segundos, geralmente devido à latência do servidor.
  </Collapser>

  <Collapser
    className="freq-link"
    id="host-connect-timeout"
    title="NetworkError: Connect to (HOST) [HOST./IP ADDRESS] failed: connect timed out"
  >
    ### Problema

    As solicitações HTTP durante a verificação excederam o limite de tempo limite de conexão TCP não configurável de 30 segundos.

    ### Solução

    O limite de tempo de 30 segundos não é configurável. Investigue possíveis problemas ao longo do caminho de rede entre nossos servidores e o seu, pois isso pode indicar um problema enfrentado pelo usuário real da sua aplicação.

    ### Causa

    Esta falha indica que um problema chegou ao seu site a partir do local onde foi realizada a verificação do Sintético.
  </Collapser>

  <Collapser
    className="freq-link"
    id="host-connect-refused"
    title="NetworkError: Connect to (HOST) [HOST./IP ADDRESS] failed: Connection refused"
  >
    ### Problema

    O servidor de destino recusou a conexão do cliente HTTP do monitor de ping Sintético.

    ### Solução

    [Adicione nossos endereços IP de monitoramento sintético à sua lista de permissões](/docs/synthetics/new-relic-synthetics/administration/synthetics-public-minion-ips) para garantir que o tráfego do nosso monitor Sintético possa chegar ao servidor de destino.

    ### Causa

    O servidor de destino provavelmente está bloqueando ou limitando a taxa de tráfego do Sintético.
  </Collapser>

  <Collapser
    className="freq-link"
    id="xxx-response"
    title="HTTPError: o servidor respondeu com código de resposta HTTP XXX"
  >
    ### Problema

    O monitor Sintético encontrou um código de status malsucedido, geralmente um código de resposta que não está no intervalo 2XX/3XX.

    ### Solução

    Verifique o log do servidor para determinar [por que o código de resposta foi enviado](https://tools.ietf.org/html/rfc7231#section-6.1). Para ajudar na identificação do tráfego do Sintético no seu servidor, todo o tráfego de monitoramento sintético inclui um [cabeçalho de solicitação HTTP`X-Abuse-Info` ](/docs/synthetics/new-relic-synthetics/administration/identify-synthetics-requests-your-app)e fornecemos uma [lista de endereços IP de origem](/docs/synthetics/new-relic-synthetics/administration/synthetics-public-minion-ips) para todo o tráfego de monitoramento sintético.

    ### Causa

    A causa depende do [código de resposta enviado](https://tools.ietf.org/html/rfc7231#section-6.1).
  </Collapser>

  <Collapser
    className="freq-link"
    id="ssl-error"
    title="SSLVerificationError: (ERRO)"
  >
    ### Problema

    Seu monitor retorna um SSLVerificationError.

    ### Solução

    Vá para <DNT>**[one.newrelic.com > Synthetic monitoring](https://one.newrelic.com/synthetics-nerdlets)**</DNT> > (selecione um monitor) > <DNT>**General > Advanced options**</DNT> e desative <DNT>**Verify SSL check**</DNT>.

    ### Causa

    As falhas de SSLVerificationError são resultado da falha do <DNT>**Verify SSL check**</DNT> opcional no host de destino.

    `SSL verification failed during execution for domain <TARGET_URL>` falhas indicam que o URL fornecido não é HTTPS ou não redireciona para um endpoint HTTPS.

    `SSLVerificationError: (<ERROR CODE>) <ERROR>` os erros são recuperados diretamente do comando `openssl` e geralmente indicam um problema legítimo de configuração SSL no site de destino.
  </Collapser>

  <Collapser
    className="freq-link"
    id="response-error"
    title="ResponseValidationError: a resposta não continha a string esperada"
  >
    ### Problema

    O valor da string incluído no campo opcional `Response Validation` do monitor Sintético não foi encontrado na resposta do servidor de destino.

    ### Solução

    Para solucionar problemas:

    * Verifique o [cronograma dos resultados com falha](/docs/synthetics/new-relic-synthetics/using-monitors/view-monitor-results#understanding) para garantir que o endpoint onde o texto de validação da resposta é esperado seja o último endpoint solicitado.

    * Tente uma solicitação curl no endpoint de destino para ver se o corpo da resposta esperado é retornado.

    * Certifique-se de que o seu endpoint não tenha políticas que devolverão conteúdos diferentes dependendo do conteúdo do cabeçalho ou da atividade do pedido. Nesse caso, use um browser com script para [falsificar uma string de cabeçalho específica](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers#customize-user-agent).

    * Se você estiver usando um browser simples para monitorar uma página cujo conteúdo é carregado via JavaScript após o evento de carregamento da página ser acionado, considere usar um script monitor de browser com. Você pode programar um browser com script para [esperar que elementos específicos](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers#wait-page-element) apareçam em uma página antes de interagir com eles.

      ### Causa

      A causa depende do tipo de monitor:

    * Monitor de ping: o valor da string deve estar presente nos primeiros 1 MB (10 ^ 6 bytes) do corpo da resposta.

    * Browser simples: A string deve estar visível na página quando o evento de carregamento da página for acionado.
  </Collapser>

  <Collapser
    className="freq-link"
    id="networkerror-timeout"
    title="NetworkError: Tempo limite de leitura esgotado"
  >
    ### Problema

    O cliente monitor conseguiu estabelecer uma conexão HTTP com o site de destino, mas excedeu o tempo limite de leitura de 30 segundos enquanto aguardava uma resposta.

    ### Solução

    Para solucionar problemas:

    * Investigue o desempenho do servidor de destino durante o período em que o problema foi observado.

    * Investigue possíveis problemas ao longo do caminho de rede entre nossos servidores e o seu, pois isso pode indicar um problema enfrentado pelo usuário real da sua aplicação.

      ### Causa

      Isso indica um problema com o servidor de destino respondendo ao cliente HTTP do monitor Sintético ou latência de rede entre o seu servidor e o nosso.
  </Collapser>

  <Collapser
    className="freq-link"
    id="networkerror-socket-closed"
    title="NetworkError: O soquete está fechado"
  >
    ### Problema

    O cliente HTTP do monitor Sintético conseguiu estabelecer uma conexão com o servidor alvo. O servidor de destino fechou a conexão sem resposta.

    ### Solução

    [Adicione nossos endereços IP de monitoramento sintético à sua lista de permissões](/docs/synthetics/new-relic-synthetics/administration/synthetics-public-minion-ips) para garantir que o tráfego do nosso monitor Sintético possa chegar ao servidor de destino.

    ### Causa

    A infraestrutura de borda às vezes implementa medidas como essa para um endpoint de aplicativo lidar com tráfego que viola políticas de comportamento, como limitação de taxa.
  </Collapser>

  <Collapser
    className="freq-link"
    id="networkerror-host-unreachable"
    title="NetworkError: Nenhuma rota para o host (Host inacessível)"
  >
    ### Problema

    O cliente de monitoramento sintético conseguiu resolver o endereço IP do host de destino, mas não conseguiu encontrar uma rota para o host de destino para estabelecer uma conexão.

    ### Solução

    Se a falha estiver ocorrendo em um local de monitoramento sintético público, certifique-se de que os registros DNS desse host estejam resolvendo para um endereço IP acessível.

    Se a falha estiver ocorrendo em uma localização privada de monitoramento sintético, certifique-se de que a configuração de rede do minion privado esteja configurada corretamente e que o nome do host de destino possa ser resolvido e acessível por meio da interface de linha de comando virtual do minion privado.

    ### Causa

    Isso ocorre quando o nome do host de destino é resolvido para um endereço IP não roteável de acordo com RFC 1918.
  </Collapser>

  <Collapser
    className="freq-link"
    id="httperror-redirects"
    title="HTTPError: O servidor nos enviou muitos redirecionamentos (20)"
  >
    ### Problema

    O cliente monitor Sintético foi redirecionado (observando códigos de resposta 301 ou 302) 20 vezes ao realizar uma solicitação ao endpoint alvo.

    ### Solução

    Certifique-se de que o endpoint de destino redirecione as solicitações do cliente menos de 20 vezes. Se isso estiver ocorrendo apenas no New Relic, recrie o problema fora do New Relic para solucionar a causa raiz. Use um cliente semelhante para realizar solicitações no endpoint de destino:

    * Monitor de ping: cliente HTTP semelhante ao curl.

    * Script simples de browser e monitor de browser: instância do Chrome 60 em uma VM Ubuntu 14.04.5.

    * Monitor de API com script: [use o cliente HTTP de solicitação para Node.js.](https://github.com/request/request)

      ### Causa

      Isso ocorre quando o endpoint monitorado efetivamente serve um loop de redirecionamento para o monitor Sintético: A resposta inicial redireciona para outra URL que redireciona para outra URL, etc.
  </Collapser>

  <Collapser
    className="freq-link"
    id="networkerror-resolution"
    title="NetworkError: falha na resolução de DNS para host: (HOST)"
  >
    ### Problema

    O nome do host de destino não pôde ser resolvido pelo cliente HTTP do monitor Sintético.

    ### Solução

    <DNT>**Private synthetic monitoring's locations:**</DNT> Confirme se a configuração de rede do minion está correta. Se o nome do host de destino for interno, certifique-se de que o minion esteja usando o serviço DNS interno da sua rede que seja capaz de resolver o host. O minion privado conteinerizado e o contêiner executor que ele gera no host (para executar verificações sem ping) devem herdar a configuração DNS do host `/etc/resolv.conf`.

    <DNT>**Docker:**</DNT> Argumentos de rede como `–dns` ou `-network` usados no comando docker run no minion privado em contêiner serão usados apenas pelo contêiner do minion, mas não pelos contêineres do executor. Se o DNS apontar para a interface de loopback, como `127.0.0.1`, defina uma configuração de DNS no [nível dodocker daemon](https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file) ou use uma ferramenta como `dnsmasq` para garantir que o executor encaminhe solicitações de DNS na interface do docker bridge.

    <DNT>**Public synthetic monitoring locations:**</DNT> Certifique-se de que o registro DNS do site de destino possa ser consultado por serviços DNS públicos, como o DNS público do Google e o DNS fornecido pela Amazon.

    ### Causa

    Nossos locais públicos de monitoramento sintético usam DNS público do Google e DNS fornecido pela Amazon. Se a resolução DNS do host de destino estiver falhando em nossos locais públicos de monitoramento sintético, este é provavelmente um problema que outro usuário está enfrentando.

    Se você estiver vendo falhas de monitor relacionadas à resolução de DNS em um local privado de monitoramento sintético, isso geralmente é causado pelo fato de o minion privado desse local ter uma configuração de rede inválida.
  </Collapser>

  <Collapser
    className="freq-link"
    id="blockedrequesterror-url"
    title="BlockedRequestError: (URL)"
  >
    ### Problema

    O domínio de destino está bloqueado pelo monitoramento sintético.

    ### Solução

    Para desbloquear o domínio, você deve usar um script do monitor do browser e [fazer chamadas manualmente no seu script](/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers#unblock-service).

    ### Causa

    O monitoramento sintético exclui especificamente scripts para serviços analíticos populares, como o Google Analytics. Isso garante que suas ferramentas analíticas continuem recebendo dados precisos, mesmo com milhares de monitores verificando seu site todos os meses.
  </Collapser>
</CollapserGroup>
