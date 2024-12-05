---
title: Iniciando o daemon PHP (avançado)
tags:
  - Agents
  - PHP agent
  - Advanced installation
metaDescription: 'Depending on your system, you can start New Relic''s PHP daemon in various agent or external startup modes.'
freshnessValidatedDate: never
translationType: machine
---

A menos que seja instruído de outra forma, a instalação padrão do agente PHP iniciará automaticamente o daemon se detectar que ele não está em execução. A chave de licença é configurada para o agente em um arquivo PHP INI e pode ser modificada por diretório ou por host virtual. O daemon também é configurado por meio do arquivo de configuração do agente (INI).

## Iniciando automaticamente o newrelic-daemon (modo agente) [#daemon-autostart]

<Callout variant="tip">
  A menos que você tenha motivos específicos para usar o modo de inicialização externo, use este processo de configuração automática. A maioria dos usuários acha que este é o mais fácil e menos sujeito a erros, porque a configuração ocorre em um único arquivo e você não precisa iniciar o daemon.
</Callout>

Este modo usa configurações em seu arquivo INI para configurar o daemon. Ele também inicia automaticamente o daemon se o agente detectar que o daemon ainda não está em execução. Isso às vezes é chamado de "modo de agente".

No modo de inicialização automática:

* A configuração daemon e todas as outras configurações globais estão em seu arquivo PHP ini global.
* O agente inicia automaticamente o daemon sempre que ele é inicializado (cada vez que o Apache/PHP-FPM é reiniciado ou quando você inicia o agente na linha de comando).
* Escreva permissões de acesso no arquivo de log do daemon para controlar quem pode iniciar o daemon.
* O cabeçalho de inicialização no arquivo `php-agent.log` inclui "agente" para indicar o modo de inicialização automática.

Para usar o modo de inicialização do agente:

1. Certifique-se de que o daemon não esteja em execução executando `/etc/init.d/newrelic-daemon stop`.
2. Certifique-se de que `/etc/newrelic/newrelic.cfg` **não** exista. Se isso acontecer, mova-o para outro lugar ou remova-o.
3. Edite seu arquivo INI e defina as [opções relacionadas ao daemon](/docs/agents/php-agent/configuration/php-agent-newrelicini-settings#inivar-daemon-settings). Essas opções também estão documentadas no arquivo de modelo INI localizado em `/usr/lib/newrelic-php5/scripts/newrelic.ini.template`.
4. Reinicie seu servidor web ou gerenciador de processos PHP para obter as novas configurações.

## Selecionando o modo manual (Externo) [#selecting-external]

No modo manual, você deve iniciar o daemon e o servidor web para iniciar o agente. Isso também é conhecido como modo "externo". Aqui estão alguns exemplos de por que você pode querer usar o modo manual em vez do modo de inicialização automática:

* Você administra um site multilocatário onde cada cliente tem controle sobre seu próprio serviço web. Você não gostaria que todos os locatários executassem sua própria cópia privada do daemon, portanto, fornecer uma que seja iniciada no momento da inicialização do sistema e compartilhada entre todos os locatários utiliza melhor os recursos do sistema. Cada cliente pode fornecer sua própria chave de licença privada em seus arquivos INI (ou você fornece as chaves de licença em um host virtual).
* Você deseja manter a capacidade de desligar o daemon sem afetar o tempo de operação do servidor web. Este modo garante que, se você precisar desligar o daemon, ele permanecerá desligado até você reinicializar o sistema ou iniciá-lo explicitamente.
* Você deseja que o daemon seja executado como root (ou algum outro usuário com permissões apropriadas) para que o arquivo de log não precise ser exposto a ninguém, exceto root ou um usuário especial. O arquivo de log do daemon tem _potencial_, embora baixo, para conter dados confidenciais.
* Você se sente mais confortável com o daemon de serviço sendo iniciado pelo script de inicialização tradicional.

## Iniciando `newrelic-daemon` manualmente (modo externo) [#daemon-external]

No modo de inicialização manual (ou externo):

* A configuração do daemon está em `newrelic.cfg`.
* O daemon é inicializado durante a inicialização do sistema ou executando seu script de inicialização.
* As permissões do arquivo de log e do arquivo de configuração controlam qual usuário pode iniciar e parar o daemon.
* O cabeçalho de inicialização no arquivo `php-agent.log` inclui `init` para indicar o modo de inicialização manual.

Se o arquivo de configuração do seu daemon estiver localizado em `/etc/newrelic/newrelic.cfg`, o agente não tentará iniciar o daemon automaticamente. Se você moveu este arquivo e ainda deseja usar este método de inicialização, adicione o seguinte ao seu arquivo INI global: `newrelic.daemon.dont_launch = 3`.

Se você quiser usar este método de inicialização externo:

1. Vá para:

   ```bash
   cp /etc/newrelic/newrelic.cfg.template /etc/newrelic/newrelic.cfg
   ```

2. Edite `/etc/newrelic/newrelic.cfg` e ajuste quaisquer valores necessários.

3. Execute `/etc/init.d/newrelic-daemon restart`.

4. Reinicie seu servidor web ou gerenciador de processos PHP para obter as novas configurações.

<InstallFeedback/>
